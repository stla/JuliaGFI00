include("D:/Github/JuliaGFI00/assets/Julia/newtypes.jl")

poly = Poly([0.4], [BigFloat(1.5)], [BigFloat(Inf)], [BigFloat(Inf)], [BigFloat(Inf)], [BigFloat(Inf)], [true])

line = Line(0.4, BigFloat(1.5), BigFloat(Inf), BigFloat(Inf), BigFloat(Inf), BigFloat(Inf), true)

@addLine poly line

emptyPoly

newLine(2., BigFloat(3), true)

poly = emptyPoly
@addLine poly newLine(2., BigFloat(3), true)
poly

