function setup() {
    createCanvas(windowWidth, windowHeight - 50);
  }

function draw() {

    background(32, 12, 12);
    
    frameRate(12);
    text("X: "+mouseX, 0, height/4);
    text("Y: "+mouseY, 0, height/2);
    
    // line group 1
    stroke('white');
    line(453 + mouseX/2, 216 + mouseY/2, 586 + mouseY/2, 196 + mouseX/2);
    line(453 + mouseX/2, 216 + mouseY/2, 567 + mouseX/2, 259 + mouseY/2);
    
    // line group 2
    line(50 + mouseX/2, 75 + mouseY/2, 20 + mouseY/2, 90 + mouseX/2);
    line(50 + mouseX/2, 75 + mouseY/2, 20 + mouseX/2, 30 + mouseY/2);
    
    // line group 3
    line(453 + mouseX/2, 158 + mouseY/2, 681 + mouseY/2, 80 + mouseX/2);
    line(453 + mouseX/2, 158 + mouseY/2, 500 + mouseX/2, 50 + mouseY/2);
}
