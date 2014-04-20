---
title       : Julia implementation of GFI
subtitle    : Part 0 The polyhedra constructions
author      : Stephane Laurent
job         : 
framework   : io2012        # {io2012, html5slides, shower, dzslides, ...}
highlighter : highlight.js  # {highlight.js, prettify, highlight}
hitheme     : tomorrow      # 
widgets     : [bootstrap, mathjax, scianimator]          
mode        : selfcontained # {standalone, draft}
---




## Goal 

hello 


---

## Problem adressed in these slides 

ff


--- &twocolcustomwidth 

## Polyhedra constructions 

*** {name: left, width: "33%"}

aaaaa

*** {name: right, width: "63%"}








<div class="scianimator">
<div id="construction_intro_plot" style="display: inline-block;">
</div>
</div>
<script type="text/javascript">
  (function($) {
    $(document).ready(function() {
      var imgs = Array(2);
      for (i=0; ; i++) {
        if (i == imgs.length) break;
        imgs[i] = "assets/fig/JuliaGFI00-construction_intro_plot" + (i + 1) + ".png";
      }
      $("#construction_intro_plot").scianimator({
          "images": imgs,
          "delay": 1000,
          "controls": ["first", "previous", "play", "next", "last", "loop", "speed"],
      });
      $("#construction_intro_plot").scianimator("play");
    });
  })(jQuery);
</script>



---

## What do we need ?

Each line has two points
