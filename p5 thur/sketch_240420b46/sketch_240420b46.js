var counter;

function setup() {
createCanvas(windowWidth, windowHeight);
background(0);
counter=0;
textSize(20);
}

function draw() {
if (mouseIsPressed) {
strokeWeight(30)
stroke(295,100,182);
line(mouseX, mouseY, pmouseX, pmouseY);
}
}
function keyPressed(){
counter++;
fill(0);
circle(mouseX, mouseY, 5);
text(counter, mouseX,mouseY);
}
