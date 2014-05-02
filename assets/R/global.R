D11 <- newD(list(
  a=0.4,
  b=1.5,
  pair=1,
  type=0, # low
  include=1)
)
D12 <- newD(list(
  a=1.5, 
  b=1.5, # must be equal  to D11
  pair=1,
  type=1,
  include=1)
)
D21 <- newD(list(
  a=4.5,
  b=-2,
  pair=2,
  type=0,
  include=1)
)
D22 <- newD(list(
  a=5.9,
  b=-2,
  pair=2,
  type=1,
  include=1)
)
D11["x1"] <- D21["x1"] <- intersect(D11,D21)
D11["x2"] <- D22["x1"] <- intersect(D11,D22)
D12["x1"] <- D21["x2"] <- intersect(D12,D21)
D12["x2"] <- D22["x2"] <- intersect(D12,D22)
part <- rbind(D11,D12,D21,D22)
part[, c("y1", "y2")] <-  vertices(part)

#
a <- 2
D31 <- newD(list(
  a=a,
  pair=3,
  type=0,
  include=NA)
)
D32 <- newD(list(
  a=a+1,
  pair=3,
  type=1,
  include=NA
))
active <- which(part[,"include"]==1)
sigma <- c(part[active, c("x1","x2")])
VTsum <-  c(part[active,c("y1","y2")])
mM <- findSupport(VTsum, sigma, D31["a"], D32["a"])
