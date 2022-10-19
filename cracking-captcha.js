const fs = require("fs");
const PNG = require("pngjs").PNG;

const path = "./captcha1.png";

// open image
const captcha = fs.readFileSync(path);
const pngImage = PNG.sync.read(captcha);
let { data, height, width } = pngImage;

// create a dictionary to keep track of our pixel counts
let colorOccurrences = {};

for (let y = 0; y < height; y++) {
  // rows
  for (let x = 0; x < width; x++) {
    // columns
    /**
     * Each pixel is a set of 4 values:
     * Red, Green, Blue, Alpha (transparency)
     */
    let index = (width * y + x) * 4;

    // create a string of the R-G-B color values
    let color = `${data[index]}-${data[index + 1]}-${data[index + 2]}`;
    // we can ignore white since it will always be the background
    if (color !== "255-255-255") {
      // increase the count by 1 (or set it to 1 if the color wasn't there yet)
      colorOccurrences[color] = (colorOccurrences[color] || 0) + 1;
    }
  }
}

// grab all of the colors in the pattern [R-G-B, # of occurrences]
let colors = Object.entries(colorOccurrences);
// find the color that occurred most
let highestColor = colors.reduce((highColor, currentColor) => {
  if (highColor[1] > currentColor[1]) {
    return highColor;
  } else {
    return currentColor;
  }
});
// grab just the R-G-B as an array, we don't need the number of occurrences
let highestColorRGB = highestColor[0].split("-");

for (let y = 0; y < height; y++) {
  // rows
  for (let x = 0; x < width; x++) {
    // columns
    let index = (width * y + x) * 4;

    // grab the RGB values of the current pixel
    let RGB = [data[index], data[index + 1], data[index + 2]];

    // ignore white pixels so we don't alter the background
    if (RGB[0] === 255 && RGB[1] === 255 && RGB[2] === 255) continue;

    /**
     * We need to be a little forgiving when checking the colors.
     * Sometimes individual pixels are only 1-3 points of R, G, or B away,
     * especially on the edges of the characters.
     */
    // find how far each pixel color channel is from the color of the characters
    let [red, green, blue] = [
      Math.abs(highestColorRGB[0] - RGB[0]),
      Math.abs(highestColorRGB[1] - RGB[1]),
      Math.abs(highestColorRGB[2] - RGB[2]),
    ];

    // if any color channel is more than 3 points away
    if (red > 3 || green > 3 || blue > 3) {
      // if any color channel is more than 3 points away
      if (red > 3 || green > 3 || blue > 3) {
        // Grab the pixel that is one row up (y-1)
        let aboveIndex = (width * (y - 1) + x) * 4;

        // Paint our pixel to match the pixel above
        data[index] = data[aboveIndex];
        data[index + 1] = data[aboveIndex + 1];
        data[index + 2] = data[aboveIndex + 2];
      }
    }
  }
}

// save new image
const imageBuffer = PNG.sync.write(pngImage);
fs.writeFileSync(`${path.replace(".png", "")}-clean.png`, imageBuffer);
