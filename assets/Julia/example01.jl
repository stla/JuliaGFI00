#include("D:/Github/JuliaGFI00/assets/Julia/newtypes.jl")

emptyPoly

# first ribbon: (ne pas lancer le comment en 1ère ligne)
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
poly = deepcopy(emptyPoly);
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
#p = plotPart(poly)
#draw(PNG("part01.png", 300px, 200px), p)
#draw(D3("part01.js", 650px, 350px), p)

# new ribbon
D3_low = newLine(2., BigFloat("0.5"), false);
D3_upp = newLine(3., BigFloat("0.5"), true);

# first test for lower new line
D = D3_low
test1 = poly.y1 .> D.a .+ D.b .* poly.x1
test2 = poly.y2 .> D.a .+ D.b .* poly.x2
test = test1 + test2 # should I use "+" or ".+" ?

removeLines(poly, test .== 0) # test.==2 for upper line

Dinters = find(test.== 1) # should be 0 or 2 elements
if length(Dinters) == 2
        xx = (:x1, :x2)
        yy = (:y1, :y2)
        for i = 1:2
                Di = getLine(poly, Dinters[i]) # part[Dinters[i],]

                inter = intersect(D,Di)

                (D.(xx[i]), D.(yy[i])) = inter

                # on modifie un vertex de la droite Di intersectionnÃ©e
                # type "low"
                if test1[Dinters[i]]
                    (Di.x2, Di.y2) = inter
                else
                    (Di.x1, Di.y1) = inter
                end
                # replacement, could be improved:
                removeLine(poly, Dinters[i])
                @addLine poly Di
        end
        @addLine poly D
end





