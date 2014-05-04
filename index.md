---
title       : Julia implementation of GFI
subtitle    : First part - the polyhedra sampler
author      : Stephane Laurent
job         : 
framework   : io2012        # {io2012, html5slides, shower, dzslides, ...}
highlighter : highlight.js  # {highlight.js, prettify, highlight}
hitheme     : tomorrow      # 
widgets     : [bootstrap, mathjax, scianimator]          
mode        : selfcontained # {standalone, draft}
---






## Goal 

- Implement Ciszewski & Hannig's sampler of the fiducial distributino for normal linear mixed models

### Why Julia ?

  - The algorithm is computationnaly intensive
  
  - It requires a high numerical precision; we hope the `BigFloat` type in Julia will achieve this precision 
  
  - Currently, the available Matlab implementation is not sufficient for large datasets

### Why these slides ?

  - I'm not a Julia specialist; these slides should firstly help me to request some help 

  - [Ciszewski & Hannig's paper](http://www.unc.edu/~hannig/publications/CisewskiHannig2012.pdf) is not easy to read for non-mathematicians, and 
  the algorithm may appear complicated to us
  
  - Because I like the [slidify package](http://slidify.org/)

---

## Problem addressed in these slides 

- These slides only address one part of the algorithm: the sampling of 
random polyhedra in the Euclidean space 

- This is the point requiring high numerical precision, because the 
polyhedra are sequentially sampled and become smaller and smaller and smaller...



--- &twocolcustomwidth 

## Polyhedra construction: overview 

*** {name: left, width: "33%"}

- *Data:* Some pairs of points are given on the $y$-axis

- *Sampling:* Some ribbons issued from these points are sampled at random 

- *Computation:* The polyhedron at the intersection of the ribbons

*** {name: right, width: "63%"}






<div class="scianimator">
<div id="construction_intro_plot00" style="display: inline-block;">
</div>
</div>
<script type="text/javascript">
  (function($) {
    $(document).ready(function() {
  construction_intro_plot00
    var imgs = Array(3);
      for (i=0; ; i++) {
        if (i == imgs.length) break;
        imgs[i] = "assets/fig/JuliaGFI00-construction_intro_plot00" + (i + 1) + ".png";
      }
      $("#construction_intro_plot00").scianimator({
          "images": imgs,
           "controls": ["previous",  "next"],
 "keyboard": false,
 "loopmode": "none",
 "defaultFrame": 0
    });
     });
  })(jQuery);
</script>



--- &twocolcustomwidth 

## Polyhedra construction: algorithm 

*** {name: left, width: "33%"}

- *Step 1:* the slopes of the first two pairs of lines are sampled without restriction

- *Step 2:* the polyhedron is computed

- *Step 3:* the slope of the next pair is sampled in a constrained range, assuring there's an intersection

- *Step 4*: the polyhedron is  updated

- *Repeat* steps 3 and 4

*** {name: right, width: "63%"}



<div class="scianimator">
<div id="construction_intro_plot01" style="display: inline-block;">
</div>
</div>
<script type="text/javascript">
  (function($) {
    $(document).ready(function() {
  construction_intro_plot01
    var imgs = Array(4);
      for (i=0; ; i++) {
        if (i == imgs.length) break;
        imgs[i] = "assets/fig/JuliaGFI00-construction_intro_plot01" + (i + 1) + ".png";
      }
      $("#construction_intro_plot01").scianimator({
          "images": imgs,
           "controls": ["previous",  "next"],
 "keyboard": false,
 "loopmode": "none",
 "defaultFrame": 0
    });
     });
  })(jQuery);
</script>



--- &twocolcustomwidth

## Line and polyhedron representation 

  - A line has a ''type'': upper or lower
  
  - A line has $0$, $1$ or $2$ intersections with the active polyhedron

*** {name: left, width: "60%"}


<div class="scianimator">
<div id="line_plot01" style="display: inline-block;">
</div>
</div>
<script type="text/javascript">
  (function($) {
    $(document).ready(function() {
  line_plot01
    var imgs = Array(4);
      for (i=0; ; i++) {
        if (i == imgs.length) break;
        imgs[i] = "assets/fig/JuliaGFI00-line_plot01" + (i + 1) + ".png";
      }
      $("#line_plot01").scianimator({
          "images": imgs,
           "controls": ["previous",  "next"],
 "keyboard": false,
 "loopmode": "none",
 "defaultFrame": 0
    });
     });
  })(jQuery);
</script>


*** {name: right, width: "40%"}

<hr style="height:30pt; visibility:hidden;"/>

- Only lines having two intersections are kept

- A polyhedron is represented by a set of such lines


--- &twocolcustomwidth

## Line and polyhedron in Julia  

I will firstly try to deal with lines and polyhedra using these types and macros:

*** {name: left, width: "60%"}

<pre><code class="r" style="font-size:66%">type Line
        a::Float64   # intercept
        b::BigFloat  # slope
        x1::BigFloat # x-coordinate of first vertice
        y1::BigFloat # y-coordinate of first vertice
        x2::BigFloat # x-coordinate of second vertice
        y2::BigFloat # y-coordinate of second vertice
        typ::Bool    # type of the line (true:upper, false:lower)
end
</code></pre>


*** {name: right, width: "40%"}

<pre><code class="r" style="font-size:66%">type Poly
        a::Vector{Float64}
        b::Vector{BigFloat}
        x1::Vector{BigFloat}
        y1::Vector{BigFloat}
        x2::Vector{BigFloat}
        y2::Vector{BigFloat}
        typ::Vector{Bool}
end
</code></pre>


*** =fullwidth


<pre><code class="r" style="font-size:66%">macro addLine(poly, line)
        for op = (:a, :b, :x1, :y1, :x2, :y2, :typ)
          @eval $poly.$op = [$poly.$op, $line.$op]
        end
end
</code></pre>


<pre><code class="r" style="font-size:66%">macro removeLine(poly, index)
    for op = (:a, :b, :x1, :y1, :x2, :y2, :typ)
        @eval splice!($poly.$op, $index)
    end
end
</code></pre>



--- &twocolcustomwidth

## The first particle 


In reality the first particle is sampled at random, but we define a fixed 
particle for illustration.

*** {name: left, width: "49%"}

<pre><code class="r" style="font-size:66%"># the empty particle
emptyPoly = Poly(Array(Float64,0), Array(BigFloat,0), Array(BigFloat,0), 
  Array(BigFloat,0), Array(BigFloat,0), Array(BigFloat,0), 
  Array(Bool,0));

# generates a new line with given intercept and slope 
# - I'm using BigFloat(Inf) as the 'NA' BigFloat
function newLine(a::Float64, b::BigFloat, typ::Bool)
        return Line(a, b, BigFloat(Inf), BigFloat(Inf), BigFloat(Inf), 
  BigFloat(Inf), typ)
end

# returns the intersection of two lines
function intersect(D1::Line, D2::Line)
        x = (D1.a-D2.a)/(D2.b-D1.b)
        return x, D1.a + D1.b*x
end
</code></pre>


*** {name: right, width: "51%"}

<pre><code class="r" style="font-size:66%"># first ribbon:
D1_low = newLine(0.4, BigFloat(1.5), false);
D1_upp = newLine(1.5, BigFloat(1.5), true);
# second ribbon:
D2_low = newLine(4.5, BigFloat(-2), false);
D2_upp = newLine(5.9, BigFloat(-2), true);

# find the intersections:
(D1_low.x1, D1_low.y1) = (D2_low.x1, D2_low.y1) = intersect(D1_low,D2_low);
(D1_low.x2, D1_low.y2) = (D2_upp.x1, D2_upp.y1) = intersect(D1_low,D2_upp);
(D1_upp.x1, D1_upp.y1) = (D2_low.x2, D2_low.y2) = intersect(D1_upp,D2_low);
(D1_upp.x2, D1_upp.y2) = (D2_upp.x2, D2_upp.y2) = intersect(D1_upp,D2_upp);

# create the particle (why does it modify the value of emptyPlot ??) :
poly = emptyPoly
@addLine poly D1_low
@addLine poly D1_upp
@addLine poly D2_low
@addLine poly D2_upp
</code></pre>



--- 

## Computing the range and intersection 

Recall the two steps, when a particle and a new pair of starting points 
on the $y$-axis is given:

- Calculate the range of the possible slope of the new ribbon

- Generate the new ribbon and compute the new particle








<img src="assets/img/range.gif" title="Range of the new ribbon to be sampled" alt="plot of chunk xxx" style="display: block; margin: auto;" width="55%">




--- 

## Computing the range

Two different situations are distinguished for the range calculation:

![plot of chunk twosituations](assets/fig/JuliaGFI00-twosituations.png) 


The first situation is easier to handle. 
We will restrict to this situation in these slides.


--- &twocolcustomwidth

## The range in the simple situation 

Denote by $P$ the current particle and by 
$\color{red}{\{a^-, a^+\}}$ the new pair of points on the $y$-axis. 
Then the possible range for the slope of the new ribbon is the interval 
$(m,M)$ where 
$$ 
m = \min_{(x,y) \in P} \left\{\frac{y - a^-}{x}, \frac{y - a^+}{x}\right\}
\quad \text{and} \quad 
M = \max_{(x,y) \in P} \left\{\frac{y - a^-}{x}, \frac{y - a^+}{x}\right\}
$$

<pre><code class="r" style="font-size:71%">function findRange(poly::Poly, lower::Float64, upper::Float64)
        slopes = [(poly.y1-lower)./poly.x1 (poly.y2-lower)./poly.x2 (poly.y1-upper)./poly.x1 (poly.y2-upper)./poly.x2]
        return minimum(slopes), maximum(slopes)
end
</code></pre>


*** {name: left, width: "51%"}

<img src="assets/img/range.gif" title="Range of the new ribbon to be sampled" alt="plot of chunk xxx" style="display: block; margin: auto;" width="65%">


*** {name: right, width: "45%"}

<hr style="height:30pt; visibility:hidden;"/>

It remains to write a function calculating the new particle once the new ribbon 
is sampled

--- 

to continue....
