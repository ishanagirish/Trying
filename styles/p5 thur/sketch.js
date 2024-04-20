var storageData = [244.06, 126.09, 30.26, 69.66, 83.25, 12.05, 52.35];
var colors = ["red", "green", "blue", "orange", "purple", "yellow", "pink"];
var storageNames = ["Macbook Air", "Iphone", "iCLoud", "Applications", "Documents", "Photos", "System Data"];
var total;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
let lastpiece = 0;

total = getTotal();

for (let i = 0; i < storageData.length; i++){
  let randColor = color(random(255),random(255), random(255));
  fill(randColor);
  // // let piece = map(storageData[i], 0, TWO_PI);
  arc(
        width / 2,
        height / 2,
        300,
        300,
        lastpiece, 
        lastpiece + radians(storageData[i])
      );
lastpiece += radians (storageData[i]);     
  }
}

function getTotal() {
  let total = 0
  for (let i = 0; i < storageData.length; i++) {
    total += storageData [i]
  }
  return total;
}

function drawLabel() {
  for (let i = 0; i < storageData.length; i++) {
    fill (0);
    textSize (24);
    text (storageNames[i], 100 + i * 100, 100);
}
}



// for (let i = 0; i < storageData.length; i++){
//   let randColor = color (random (255), random (255), random (255))
//   fill(colors[i]);
//   circle(100 + i * 100, 100, storageData[i] * 5);
//   fill (0)
//   text (storageNames [(i, 100 + i * 100, 100)]);