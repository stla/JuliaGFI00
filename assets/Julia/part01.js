function draw_with_data(data, parent_id) {
  var g = d3.select(parent_id)
            .append("svg")
              .attr("width", "171.96mm")
              .attr("height", "92.59mm")
              .attr("viewBox", "0 0 171.96 92.59")
              .attr("stroke-width", "0.5")
              .attr("style", "stroke:black;fill:black");
  g.append("defs");
  var ctx = {
      "scale": 1.0,
      "tx": 0.0,
      "ty": 0.0
  };
(function (g) {
  g.attr("stroke", "none")
   .attr("fill", "#000000")
   .attr("stroke-width", 0.3)
   .attr("font-family", "Helvetic,Arial,sans")
   .style("font-size", "3.88px");
  (function (g) {
    g.attr("class", "plotroot xscalable yscalable");
    (function (g) {
      g.attr("stroke", "none")
       .attr("fill", "#4C404B")
       .attr("font-family", "'PT Sans','Helvetica Neue','Helvetica',sans-serif")
       .style("font-size", "3.18px")
       .attr("class", "guide ylabels");
      (function (g) {
        g.attr("visibility", "hidden");
        g.append("svg:text")
           .attr("x", 21.09)
           .attr("y", -35.26)
           .attr("text-anchor", "end")
           .style("dominant-baseline", "central")
            .call(function(text) {
      text.text("4.5");
    })
;
      }(g.append("g")));
      g.append("svg:text")
         .attr("x", 21.09)
         .attr("y", 49.06)
         .attr("text-anchor", "end")
         .style("dominant-baseline", "central")
         .call(function(text) {
     text.text("2.5");
   })
;
      g.append("svg:text")
         .attr("x", 21.09)
         .attr("y", 6.9)
         .attr("text-anchor", "end")
         .style("dominant-baseline", "central")
         .call(function(text) {
     text.text("3.5");
   })
;
      (function (g) {
        g.attr("visibility", "hidden");
        g.append("svg:text")
           .attr("x", 21.09)
           .attr("y", 112.29)
           .attr("text-anchor", "end")
           .style("dominant-baseline", "central")
            .call(function(text) {
      text.text("1.0");
    })
;
      }(g.append("g")));
      g.append("svg:text")
         .attr("x", 21.09)
         .attr("y", 70.14)
         .attr("text-anchor", "end")
         .style("dominant-baseline", "central")
         .call(function(text) {
     text.text("2.0");
   })
;
      (function (g) {
        g.attr("visibility", "hidden");
        g.append("svg:text")
           .attr("x", 21.09)
           .attr("y", -56.34)
           .attr("text-anchor", "end")
           .style("dominant-baseline", "central")
            .call(function(text) {
      text.text("5.0");
    })
;
      }(g.append("g")));
      (function (g) {
        g.attr("visibility", "hidden");
        g.append("svg:text")
           .attr("x", 21.09)
           .attr("y", 91.21)
           .attr("text-anchor", "end")
           .style("dominant-baseline", "central")
            .call(function(text) {
      text.text("1.5");
    })
;
      }(g.append("g")));
      (function (g) {
        g.attr("visibility", "hidden");
        g.append("svg:text")
           .attr("x", 21.09)
           .attr("y", 133.37)
           .attr("text-anchor", "end")
           .style("dominant-baseline", "central")
            .call(function(text) {
      text.text("0.5");
    })
;
      }(g.append("g")));
      g.append("svg:text")
         .attr("x", 21.09)
         .attr("y", 27.98)
         .attr("text-anchor", "end")
         .style("dominant-baseline", "central")
         .call(function(text) {
     text.text("3.0");
   })
;
      (function (g) {
        g.attr("visibility", "hidden");
        g.append("svg:text")
           .attr("x", 21.09)
           .attr("y", -14.18)
           .attr("text-anchor", "end")
           .style("dominant-baseline", "central")
            .call(function(text) {
      text.text("4.0");
    })
;
      }(g.append("g")));
      (function (g) {
        g.attr("visibility", "hidden");
        g.append("svg:text")
           .attr("x", 21.09)
           .attr("y", 154.45)
           .attr("text-anchor", "end")
           .style("dominant-baseline", "central")
            .call(function(text) {
      text.text("0.0");
    })
;
      }(g.append("g")));
      (function (g) {
        g.attr("visibility", "hidden");
        g.append("svg:text")
           .attr("x", 21.09)
           .attr("y", -77.42)
           .attr("text-anchor", "end")
           .style("dominant-baseline", "central")
            .call(function(text) {
      text.text("5.5");
    })
;
      }(g.append("g")));
    }(g.append("g")));
    (function (g) {
      g.attr("stroke", "none")
       .attr("fill", "#362A35")
       .attr("font-family", "'PT Sans','Helvetica Neue','Helvetica',sans-serif")
       .style("font-size", "3.88px");
      g.append("svg:text")
         .attr("x", 8.63)
         .attr("y", 38.52)
         .attr("text-anchor", "middle")
         .style("dominant-baseline", "central")
         .attr("transform", "rotate(-90, 8.63, 38.52)")
         .call(function(text) {
     text.text("y");
   })
;
    }(g.append("g")));
    (function (g) {
      g.attr("stroke", "none")
       .attr("fill", "#4C404B")
       .attr("font-family", "'PT Sans','Helvetica Neue','Helvetica',sans-serif")
       .style("font-size", "3.18px")
       .attr("class", "guide xlabels");
      (function (g) {
        g.attr("visibility", "hidden");
        g.append("svg:text")
           .attr("x", 333.69)
           .attr("y", 77.33)
           .attr("text-anchor", "middle")
            .call(function(text) {
      text.text("2.6");
    })
;
      }(g.append("g")));
      g.append("svg:text")
         .attr("x", 162.86)
         .attr("y", 77.33)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("1.6");
   })
;
      g.append("svg:text")
         .attr("x", 60.36)
         .attr("y", 77.33)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("1.0");
   })
;
      (function (g) {
        g.attr("visibility", "hidden");
        g.append("svg:text")
           .attr("x", -42.15)
           .attr("y", 77.33)
           .attr("text-anchor", "middle")
            .call(function(text) {
      text.text("0.4");
    })
;
      }(g.append("g")));
      (function (g) {
        g.attr("visibility", "hidden");
        g.append("svg:text")
           .attr("x", 231.19)
           .attr("y", 77.33)
           .attr("text-anchor", "middle")
            .call(function(text) {
      text.text("2.0");
    })
;
      }(g.append("g")));
      g.append("svg:text")
         .attr("x", 26.19)
         .attr("y", 77.33)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("0.8");
   })
;
      (function (g) {
        g.attr("visibility", "hidden");
        g.append("svg:text")
           .attr("x", -76.31)
           .attr("y", 77.33)
           .attr("text-anchor", "middle")
            .call(function(text) {
      text.text("0.2");
    })
;
      }(g.append("g")));
      (function (g) {
        g.attr("visibility", "hidden");
        g.append("svg:text")
           .attr("x", 299.53)
           .attr("y", 77.33)
           .attr("text-anchor", "middle")
            .call(function(text) {
      text.text("2.4");
    })
;
      }(g.append("g")));
      (function (g) {
        g.attr("visibility", "hidden");
        g.append("svg:text")
           .attr("x", 265.36)
           .attr("y", 77.33)
           .attr("text-anchor", "middle")
            .call(function(text) {
      text.text("2.2");
    })
;
      }(g.append("g")));
      g.append("svg:text")
         .attr("x", 128.69)
         .attr("y", 77.33)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("1.4");
   })
;
      (function (g) {
        g.attr("visibility", "hidden");
        g.append("svg:text")
           .attr("x", -7.98)
           .attr("y", 77.33)
           .attr("text-anchor", "middle")
            .call(function(text) {
      text.text("0.6");
    })
;
      }(g.append("g")));
      (function (g) {
        g.attr("visibility", "hidden");
        g.append("svg:text")
           .attr("x", 197.02)
           .attr("y", 77.33)
           .attr("text-anchor", "middle")
            .call(function(text) {
      text.text("1.8");
    })
;
      }(g.append("g")));
      (function (g) {
        g.attr("visibility", "hidden");
        g.append("svg:text")
           .attr("x", -110.48)
           .attr("y", 77.33)
           .attr("text-anchor", "middle")
            .call(function(text) {
      text.text("0.0");
    })
;
      }(g.append("g")));
      g.append("svg:text")
         .attr("x", 94.52)
         .attr("y", 77.33)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("1.2");
   })
;
      (function (g) {
        g.attr("visibility", "hidden");
        g.append("svg:text")
           .attr("x", -144.65)
           .attr("y", 77.33)
           .attr("text-anchor", "middle")
            .call(function(text) {
      text.text("-0.2");
    })
;
      }(g.append("g")));
    }(g.append("g")));
    (function (g) {
      g.attr("stroke", "none")
       .attr("fill", "#362A35")
       .attr("font-family", "'PT Sans','Helvetica Neue','Helvetica',sans-serif")
       .style("font-size", "3.88px");
      g.append("svg:text")
         .attr("x", 94.52)
         .attr("y", 85.59)
         .attr("text-anchor", "middle")
         .call(function(text) {
     text.text("x");
   })
;
    }(g.append("g")));
    (function (g) {
      g.on("mouseover", guide_background_mouseover("#C6C6C9"))
       .on("mouseout", guide_background_mouseout("#F0F0F3"))
       .call(zoom_behavior(ctx))
;
      (function (g) {
        d3.select("defs")
  .append("svg:clipPath")
    .attr("id", parent_id + "_clippath0")
    .append("svg:path")
      .attr("d", " M22.09,5 L 166.96 5 166.96 72.03 22.09 72.03 z");g.attr("clip-path", "url(#" + parent_id + "_clippath0)");
        (function (g) {
          g.attr("class", "guide background")
           .attr("stroke", "#F1F1F5")
           .attr("fill", "#FAFAFA")
           .attr("opacity", 1.00);
          g.append("svg:path")
             .attr("d", "M22.09,5 L 166.96 5 166.96 72.03 22.09 72.03 z");
        }(g.append("g")));
        (function (g) {
          g.attr("stroke", "#F0F0F3")
           .attr("stroke-width", 0.2)
           .attr("class", "guide ygridlines xfixed");
          g.append("svg:path")
             .attr("d", "M22.09,49.06 L 166.96 49.06");
          g.append("svg:path")
             .attr("d", "M22.09,112.29 L 166.96 112.29");
          g.append("svg:path")
             .attr("d", "M22.09,-56.34 L 166.96 -56.34");
          g.append("svg:path")
             .attr("d", "M22.09,133.37 L 166.96 133.37");
          g.append("svg:path")
             .attr("d", "M22.09,-14.18 L 166.96 -14.18");
          g.append("svg:path")
             .attr("d", "M22.09,-77.42 L 166.96 -77.42");
          g.append("svg:path")
             .attr("d", "M22.09,154.45 L 166.96 154.45");
          g.append("svg:path")
             .attr("d", "M22.09,27.98 L 166.96 27.98");
          g.append("svg:path")
             .attr("d", "M22.09,91.21 L 166.96 91.21");
          g.append("svg:path")
             .attr("d", "M22.09,70.14 L 166.96 70.14");
          g.append("svg:path")
             .attr("d", "M22.09,6.9 L 166.96 6.9");
          g.append("svg:path")
             .attr("d", "M22.09,-35.26 L 166.96 -35.26");
        }(g.append("g")));
        (function (g) {
          g.attr("stroke", "#F0F0F3")
           .attr("stroke-width", 0.2)
           .attr("class", "guide xgridlines yfixed");
          g.append("svg:path")
             .attr("d", "M162.86,5 L 162.86 72.03");
          g.append("svg:path")
             .attr("d", "M-42.15,5 L -42.15 72.03");
          g.append("svg:path")
             .attr("d", "M26.19,5 L 26.19 72.03");
          g.append("svg:path")
             .attr("d", "M299.53,5 L 299.53 72.03");
          g.append("svg:path")
             .attr("d", "M128.69,5 L 128.69 72.03");
          g.append("svg:path")
             .attr("d", "M197.02,5 L 197.02 72.03");
          g.append("svg:path")
             .attr("d", "M94.52,5 L 94.52 72.03");
          g.append("svg:path")
             .attr("d", "M-144.65,5 L -144.65 72.03");
          g.append("svg:path")
             .attr("d", "M-110.48,5 L -110.48 72.03");
          g.append("svg:path")
             .attr("d", "M-7.98,5 L -7.98 72.03");
          g.append("svg:path")
             .attr("d", "M265.36,5 L 265.36 72.03");
          g.append("svg:path")
             .attr("d", "M-76.31,5 L -76.31 72.03");
          g.append("svg:path")
             .attr("d", "M231.19,5 L 231.19 72.03");
          g.append("svg:path")
             .attr("d", "M60.36,5 L 60.36 72.03");
          g.append("svg:path")
             .attr("d", "M333.69,5 L 333.69 72.03");
        }(g.append("g")));
      }(g.append("g")));
      (function (g) {
        d3.select("defs")
  .append("svg:clipPath")
    .attr("id", parent_id + "_clippath1")
    .append("svg:path")
      .attr("d", " M22.09,5 L 166.96 5 166.96 72.03 22.09 72.03 z");g.attr("clip-path", "url(#" + parent_id + "_clippath1)");
        (function (g) {
          g.attr("class", "plotpanel");
          (function (g) {
            g.attr("stroke-width", 0.3);
            (function (g) {
              g.attr("stroke-width", 0.3);
g.selectAll("form0")
                  .data(d3.zip(data[0],data[1]))
                  .enter()
                  .append("circle")
.attr("cx", function(d) { return d[0]; })
.attr("cy", function(d) { return d[1]; })
.attr("r", 0.6)
.attr("class", "geometry color_LCHab(70.0,60.0,240.0)")
.on("mouseout", geom_point_mouseout(10.00, 0.50), false)
.on("mouseover", geom_point_mouseover(10.00, 0.50), false)
.attr("stroke", "#0096DD")
.attr("fill", "#00BFFF")
;
            }(g.append("g")));
          }(g.append("g")));
          (function (g) {
            g.attr("fill", "none")
             .attr("stroke-width", 0.3);
            (function (g) {
              g.attr("stroke", "#00BFFF")
               .attr("class", "geometry");
              g.append("svg:path")
                 .attr("d", "M35.95,37.01 L 35.95 37.01 89.64 63.51 89.64 63.51 104.28 11.72 104.28 11.72 157.98 38.22 157.98 38.22");
            }(g.append("g")));
          }(g.append("g")));
        }(g.append("g")));
      }(g.append("g")));
      (function (g) {
        d3.select("defs")
  .append("svg:clipPath")
    .attr("id", parent_id + "_clippath2")
    .append("svg:path")
      .attr("d", " M22.09,5 L 166.96 5 166.96 72.03 22.09 72.03 z");g.attr("clip-path", "url(#" + parent_id + "_clippath2)");
        (function (g) {
          g.attr("stroke", "none")
           .attr("class", "guide zoomslider")
           .attr("opacity", 0.00);
          (function (g) {
            g.attr("stroke", "#6A6A6A")
             .attr("stroke-opacity", 0.00)
             .attr("stroke-width", 0.3)
             .attr("fill", "#EAEAEA")
             .on("click", zoomin_behavior(ctx))
.on("dblclick", function() { d3.event.stopPropagation(); })
.on("mouseover", zoomslider_button_mouseover("#cd5c5c"))
.on("mouseout", zoomslider_button_mouseover("#6a6a6a"))
;
            g.append("svg:path")
               .attr("d", "M159.96,8 L 163.96 8 163.96 12 159.96 12 z");
            (function (g) {
              g.attr("fill", "#6A6A6A")
               .attr("class", "button_logo");
              g.append("svg:path")
                 .attr("d", "M160.76,9.6 L 161.56 9.6 161.56 8.8 162.36 8.8 162.36 9.6 163.16 9.6 163.16 10.4 162.36 10.4 162.36 11.2 161.56 11.2 161.56 10.4 160.76 10.4 z");
            }(g.append("g")));
          }(g.append("g")));
          (function (g) {
            g.attr("fill", "#EAEAEA")
             .on("click", zoomslider_track_behavior(ctx, 133.96, 150.96));
            g.append("svg:path")
               .attr("d", "M140.46,8 L 159.46 8 159.46 12 140.46 12 z");
          }(g.append("g")));
          (function (g) {
            g.attr("fill", "#6A6A6A")
             .attr("class", "zoomslider_thumb")
             .call(zoomslider_behavior(ctx, 133.96, 150.96))
.on("mouseover", zoomslider_thumb_mouseover("#cd5c5c"))
.on("mouseout", zoomslider_thumb_mouseover("#6a6a6a"))
;
            g.append("svg:path")
               .attr("d", "M148.96,8 L 150.96 8 150.96 12 148.96 12 z");
          }(g.append("g")));
          (function (g) {
            g.attr("stroke", "#6A6A6A")
             .attr("stroke-opacity", 0.00)
             .attr("stroke-width", 0.3)
             .attr("fill", "#EAEAEA")
             .on("click", zoomout_behavior(ctx))
.on("dblclick", function() { d3.event.stopPropagation(); })
.on("mouseover", zoomslider_button_mouseover("#cd5c5c"))
.on("mouseout", zoomslider_button_mouseover("#6a6a6a"))
;
            g.append("svg:path")
               .attr("d", "M135.96,8 L 139.96 8 139.96 12 135.96 12 z");
            (function (g) {
              g.attr("fill", "#6A6A6A")
               .attr("class", "button_logo");
              g.append("svg:path")
                 .attr("d", "M136.76,9.6 L 139.16 9.6 139.16 10.4 136.76 10.4 z");
            }(g.append("g")));
          }(g.append("g")));
        }(g.append("g")));
      }(g.append("g")));
    }(g.append("g")));
  }(g.append("g")));
}(g.append("g")));
    d3.select(parent_id)
      .selectAll("path")
      .each(function() {
          var sw = parseFloat(window.getComputedStyle(this).getPropertyValue("stroke-width"));
          d3.select(this)
            .attr("vector-effect", "non-scaling-stroke")
            .style("stroke-width", sw + "mm");
      });
}

var data = [
  [89.64178234144808,35.95019233018154,89.64178234144808,157.97653326487827,157.97653326487827,104.28494325361177,35.95019233018154,104.28494325361177],
  [63.510479518152486,37.01062260823268,63.510479518152486,38.215161558683576,38.215161558683576,11.715304648763768,37.01062260823268,11.715304648763768]];

var draw = function(parent_id) {
    draw_with_data(data, parent_id);
};

if ('undefined' !== typeof module) {
    module.exports = draw;
} else if ('undefined' !== typeof window) {
    window.draw = draw
}
