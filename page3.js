let detailY;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  img = loadImage('celebrated.png');
}

function draw() {
  background(195, 76, 76);
  
  let rotationAngle = map(mouseX, 0, width, 0, TWO_PI);
  
  rotateY(rotationAngle);
  noStroke();
  sphere(200, 26, 26);

  texture(img);

  if (
    mouseX > windowWidth/3 &&
    mouseX < 2*windowWidth/3
  ) {
    cursor(HAND);
  } else {
    cursor(ARROW); 
  }
}

function mousePressed() {
  if (
    mouseX > windowWidth/3 &&
    mouseX < 2*windowWidth/3
  ) {
  window.location.href = "page4.html";
  }
}

