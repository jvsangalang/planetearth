let img;
let targetX = 1000;
let targetY = 650; 
let targetSize = 200; 
let offsetX = 0; 
let offsetY = 0; 
let bird;
let flower;
let font;

function preload() {
  img = loadImage('drag.svg');
  flower = loadImage('flower.svg');
  bird = loadImage('Vector.svg');

  font = loadFont('Quicksand-VariableFont_wght.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  textFont(font);
  textSize(25);
  
  flower.width = 85;
  flower.height = 84;

  bird.width = 126;
  bird.height = 96.5;

  img.x = 400;
  img.y = 400;
  img.width = 148;
  img.height = 77.31;
}

function draw() {
  background(32, 12, 12);
  
  fill(253, 209, 209);
  text('it has to be loved as if it were embroidered', 200, 150);

  fill(195, 76, 76);
  text('upon it.', targetX, targetY);

  fill(253, 209, 209);
  text('with flowers and birds and two joined hearts', 600, 600);

  image(img, img.x, img.y, img.width, img.height);
  image(flower, 300, 500, flower.width, flower.height);
  image(bird, 600, 800, bird.width, bird.height);
  image(bird, 200, 200, bird.width, bird.height);
  image(flower, 100, 700, flower.width, flower.height);
  image(bird, windowWidth/2, windowHeight/2, bird.width, bird.height);
  image(flower, windowWidth-100, windowHeight-100, flower.width, flower.height);

}

function mousePressed() {
  if (mouseX > img.x && mouseX < img.x + img.width && mouseY > img.y && mouseY < img.y + img.height) {
    offsetX = mouseX - img.x;
    offsetY = mouseY - img.y;
  }
}

function mouseDragged() {
  if (mouseX > img.x && mouseX < img.x + img.width && mouseY > img.y && mouseY < img.y + img.height) {
    img.x = mouseX - offsetX;
    img.y = mouseY - offsetY;
  }
}

function mouseReleased() {
  let d = dist(img.x + img.width / 2, img.y + img.height / 2, targetX, targetY);
  if (d < targetSize / 2) {
    redirect();
  }
}

  function redirect(){
    window.location.href = "page2.html"
}