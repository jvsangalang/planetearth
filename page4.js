
function setup() {
    createCanvas(windowWidth, windowHeight - 50);
    
  }
  
  function draw() {
    background(32, 12, 12);
    
    let x = map(mouseX, 0, 100, 0, 50);
    
    //right line
    stroke('white');
    line(453 + mouseX/2, 216 + mouseY/2, windowWidth, 196);
    line(453 + mouseX/2, 216 + mouseY/2, windowWidth, windowHeight/2);
    
    //left line
    line(mouseX/3, mouseY*7/8, 0, windowHeight*1/3);
    line(mouseX/3, mouseY*7/8, 0, windowHeight*7/8);
    
    //top line
    line(453 + mouseX/3, 158 + mouseY/2, windowWidth*1/4, 0);
    line(453 + mouseX/3, 158 + mouseY/2, windowWidth*1/2, 0);
  }
  