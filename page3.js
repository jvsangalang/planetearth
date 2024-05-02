let detailY;
// slide to see how detailY works
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(0, 0, 0, 0);
  
  let rotationAngle = map(mouseX, 0, width, 0, TWO_PI);
  
  rotateY(rotationAngle);

  sphere(100, 16, 16);
}

function translateOver () {
  if (mouseX >= 350) {
    translate
  }
}

//currently trying to figure out how to move it offscreen when mousex is at a certain point?