require(shiny)

linebreak <- function(height="10pt"){
  html <- tags$hr(style="height:%s; visibility:hidden;")
  sprintf(as.character(html), height)
}

codechunk <- function(code, size="100%"){
  html <- '<pre><code class="r" style="font-size:%s">%s
</code></pre>'
  html <- sprintf(html, size, code)
  cat(html)
}