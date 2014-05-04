include("D:/Github/JuliaGFI00/assets/Julia/newtypes.jl")

emptyPoly

# first ribbon:
D1_low = newLine(0.4, BigFloat("1.5"), false);
D1_upp = newLine(1.5, BigFloat("1.5"), true);
# second ribbon:
D2_low = newLine(4.5, BigFloat("-2"), false);
D2_upp = newLine(5.9, BigFloat("-2"), true);

# find the intersections:
(D1_low.x1, D1_low.y1) = (D2_low.x1, D2_low.y1) = intersect(D1_low,D2_low);
(D1_low.x2, D1_low.y2) = (D2_upp.x1, D2_upp.y1) = intersect(D1_low,D2_upp);
(D1_upp.x1, D1_upp.y1) = (D2_low.x2, D2_low.y2) = intersect(D1_upp,D2_low);
(D1_upp.x2, D1_upp.y2) = (D2_upp.x2, D2_upp.y2) = intersect(D1_upp,D2_upp);

# create the particle:
poly = emptyPoly;
@addLine poly D1_low
@addLine poly D1_upp
@addLine poly D2_low
@addLine poly D2_upp
poly

# new pair of points on the y-axis
lower = 2.;
upper = 3.;
findRange(poly, lower, upper)

# plot
p = plotPart(poly)
draw(PNG("part01.png", 300px, 200px), p)
draw(D3("part01.js", 650px, 350px), p)
