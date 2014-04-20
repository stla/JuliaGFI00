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

- *Why Julia ?* 

  - The algorithm is computationnaly intensive
  
  - It requires a high numerical precision; we hope the `BigFloat` type in Julia will achieve this precision 


---

## Problem addressed in these slides 

- These slides only address one part of the algorithm: the sampling of 
random polyhedra in the Euclidean space 

- This is the point requiring high numerical precision, because the 
polyhedra are sequentially sampled and become smaller and smaller and smaller...

- I'm not a Julia specialist; these slides should firstly help me to request some help


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
      var imgs = Array(3);
      for (i=0; ; i++) {
        if (i == imgs.length) break;
        imgs[i] = "assets/fig/JuliaGFI00-construction_intro_plot00" + (i + 1) + ".png";
      }
      $("#construction_intro_plot00").scianimator({
          "images": imgs,
          "delay": 200,
          "controls": ["first", "previous", "play", "next", "last", "loop", "speed"],
      });
      $("#construction_intro_plot00").scianimator("play");
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
      var imgs = Array(4);
      for (i=0; ; i++) {
        if (i == imgs.length) break;
        imgs[i] = "assets/fig/JuliaGFI00-construction_intro_plot01" + (i + 1) + ".png";
      }
      $("#construction_intro_plot01").scianimator({
          "images": imgs,
          "delay": 200,
          "controls": ["first", "previous", "play", "next", "last", "loop", "speed"],
      });
      $("#construction_intro_plot01").scianimator("play");
    });
  })(jQuery);
</script>



---

## What do we need ?

- Compute intersection : 

- Line representation : 

  - A line is active and removed off...
  
  - Each active line has two points forming an edge


