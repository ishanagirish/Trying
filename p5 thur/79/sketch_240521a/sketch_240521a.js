function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(175);
  background(0);
  // html 'instructions' made in p5
  p=createP("'S' to save, 'SPACE' to clear");
  p.position(40,20);
  p.style('color','red');;
}

function draw() {
  line(mouseX, mouseY, pmouseX, pmouseY);

}
function keyPressed(){
  if (key == 's'){
    saveCanvas('fileName', 'png');
  }
  if (key == ' '){
    background(0);
  }
}
