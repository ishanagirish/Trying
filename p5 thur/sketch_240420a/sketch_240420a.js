function setup() {
createCanvas(windowWidth, windowHeight);
}
var colors;
colors = ["yellow", "pink", "red", "#eb4034", "#9272a6", "#91bfcf"];

function draw() {
line(mouseX, mouseY, pmouseX, pmouseY)
rectFill = random(colors);
fill(rectFill);
rect(width/2, height/7, 200, 200);

circleFill = random(colors);
fill(circleFill);
circle(width/10, height/4, 200, 200);

rectFill = random(colors);
fill(rectFill);
rect(height/57, width/44, 400, 100);
}

var red, yellow, lilac, colours; //declaring variables to use in later functions

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100, 100, 100);
  frameRate(5);
  textSize(120);
  //SETTING INITAL VALUES OF VARIABLES
  red="#570228";
  yellow="#BEC6E2";
  lilac="#E6E279";
  colours=[red, yellow, lilac]; // THIS IS A LIST (square brackets)
}


function draw() {
  fill(random(colours));
  circle(random(width), random(height), random(100));
  fill(random(colours));
  circle(random(width), random(height), random(250));
  fill(random(colours));
  circle(random(width), random(height), random(150));
  noStroke();
  fill(random(colours));
  triangle(random(width), random(height), random(width), random(height), random(width), random(height));
  fill(random(colours));
  triangle(random(width/2), random(height/2), random(width/2), random(height/2), random(width/2), random(height/2));
  fill(random(colours));
  triangle(random(width/2), random(height/2), random(width/2), random(height/2), random(width/2), random(height/2));
  strokeWeight(1);
  fill(0);
  stroke(0);
  //noLoop();
}
function mousePressed(){
  background(random(256), random(256), random(256));
}

function mousePressed(){
  background(random(256), random(256), random(256));
}
