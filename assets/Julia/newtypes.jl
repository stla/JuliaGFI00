type Line
        a::Float64   # intercept
        b::BigFloat  # slope
        x1::BigFloat # x-coordinate of first vertice
        y1::BigFloat # y-coordinate of first vertice
        x2::BigFloat # x-coordinate of second vertice
        y2::BigFloat # y-coordinate of second vertice
        typ::Bool    # type of the line (true:upper, false:lower)
end

type Poly
        a::Vector{Float64}
        b::Vector{BigFloat}
        x1::Vector{BigFloat}
        y1::Vector{BigFloat}
        x2::Vector{BigFloat}
        y2::Vector{BigFloat}
        typ::Vector{Bool}
end

macro addLine(poly, line)
        for op = (:a, :b, :x1, :y1, :x2, :y2, :typ)
          @eval $poly.$op = [$poly.$op, $line.$op]
        end
end

macro removeLine(poly, index)
    for op = (:a, :b, :x1, :y1, :x2, :y2, :typ)
        @eval splice!($poly.$op, $index)
    end
end

function getLine(poly::Poly, i::Int)
        return Line(poly.a[i], poly.b[i], poly.x1[i], poly.y1[i], poly.x2[i], poly.y2[i], poly.typ[i])
end

# how to define a constant ? :
emptyPoly = Poly(Array(Float64,0), Array(BigFloat,0), Array(BigFloat,0),Array(BigFloat,0),Array(BigFloat,0),Array(BigFloat,0),Array(Bool,0))

function newLine(a::Float64, b::BigFloat, typ::Bool)
        return Line(a, b, BigFloat(Inf), BigFloat(Inf), BigFloat(Inf), BigFloat(Inf), typ)
end

