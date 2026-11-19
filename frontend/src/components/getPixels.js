var getPixels = require("get-pixels")

getPixels("../resources/images/Background.png", function(err, pixels) {
  if(err) {
    console.log("Bad image path")
    return
  }
  console.log("got pixels: ", pixels.shape.slice())
})