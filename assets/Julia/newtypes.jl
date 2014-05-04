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

# get line in row i of poly
function getLine(poly::Poly, i::Int)
        return Line(poly.a[i], poly.b[i], poly.x1[i], poly.y1[i], poly.x2[i], poly.y2[i], poly.typ[i])
end

# the empty particle
emptyPoly = Poly(Array(Float64,0), Array(BigFloat,0), Array(BigFloat,0), Array(BigFloat,0), Array(BigFloat,0), Array(BigFloat,0), Array(Bool,0));

# generates a new line with given intercept and slope - I'm using BigFloat(Inf) as the 'NA' BigFloat
function newLine(a::Float64, b::BigFloat, typ::Bool)
        return Line(a, b, BigFloat(Inf), BigFloat(Inf), BigFloat(Inf), BigFloat(Inf), typ)
end

# returns the intersection of two lines
function intersect(D1::Line, D2::Line)
        x = (D1.a-D2.a)/(D2.b-D1.b)
        return x, D1.a + D1.b*x
end

# find the range
function findRange(poly::Poly, lower::Float64, upper::Float64)
        slopes = [(poly.y1-lower)./poly.x1 (poly.y2-lower)./poly.x2 (poly.y1-upper)./poly.x1 (poly.y2-upper)./poly.x2]
        return minimum(slopes), maximum(slopes)
end
