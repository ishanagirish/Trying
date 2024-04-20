var spin=0;
var letterSize=4;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(240);
  fill(0);
  angleMode(DEGREES);
  textAlign(CENTER);
  frameRate(15);
}

function draw() {
  fill(0); 
  color (175);
  
  push();
  translate(width/2,height/2);
  rotate(spin);
  textSize(letterSize);
  text ('Week 4', 0,-letterSize*0.1);
  spin+=map(mouseX,0,width,-10,10); //this will make the mouseX affect the spin direction and speed
  letterSize=map(mouseY,0,height,8,72);
  circle(0,0,letterSize/10);
  noFill();
  stroke(0);
  circle(0,0,letterSize*5);
  pop();
  
  background(211,30);
}
