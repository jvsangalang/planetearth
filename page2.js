let easing = 0.1;
let rectX = 50;
let rectY = 100;
let rectWidth = 600;
let rectHeight;

let seekx, seeky, seekx2, seeky2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 0, 0);
  rectHeight = windowHeight - rectY + 1000;
  seekx = rectX + rectWidth / 2;
  seeky = rectY + rectHeight / 2;
  seekx2 = rectX + rectWidth / 2;
  seeky2 = rectY + rectHeight / 2;
  link = createA("page3.html", "it has to be stretched and stroked", "_self"); 
  link.position(width/2.5, height/2); 
  link.style('font-size', '18px');
  link.style('position', 'absolute'); 
  link.style('z-index', '-1'); // Keep the link behind the rectangles
  link.style('pointer-events', 'auto');
  select('a').style('pointer-events', 'none');


}

function draw() {
  
  clear();
  noFill();
  noStroke();
  rect(rectX, rectY, rectWidth, rectHeight);
  
  let targetX = mouseX;
  let targetY = mouseY;

  // Large line
  seekx = lerp(seekx, targetX, easing);
  seeky = lerp(seeky, targetY, easing);

  targetX = lerp(mouseX, seekx, 0.5);
  targetY = lerp(mouseY, seeky, 0.5);

  // Small line
  seekx2 = lerp(seekx2, targetX, easing);
  seeky2 = lerp(seeky2, targetY, easing);

  fill(195, 76, 76);
  for (let i = 0; i < 48; i++) {
    rect(seekx - 80 * i, seeky - rectHeight / 2, 30, rectHeight);
  }

  fill(253, 209, 209);
  for (let i = 0; i < 48; i++) {
    rect(seekx2 - 80 * i, seeky2 - rectHeight / 2, 5, rectHeight);
  }

  if (
    mouseX > link.position().x && 
    mouseX < link.position().x + link.width && 
    mouseY > link.position().y && 
    mouseY < link.position().y + link.height
  ) {
    cursor(HAND); // Change cursor to pointer
  } else {
    cursor(ARROW); // Change cursor back to default
  }
}

function mouseClicked() {
  if (
    mouseX > link.position().x && 
    mouseX < link.position().x + link.width && 
    mouseY > link.position().y && 
    mouseY < link.position().y + link.height
  ) {
    window.open(link.attribute('href'), '_self');
  }
}
