let easing = 0.1;
let rectX = 50;
let rectY = 100;
let rectWidth = 600;
let rectHeight;

let seekx, seeky, seekx2, seeky2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectHeight = windowHeight - rectY + 1000;
  seekx = rectX + rectWidth / 2;
  seeky = rectY + rectHeight / 2;
  seekx2 = rectX + rectWidth / 2;
  seeky2 = rectY + rectHeight / 2;
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
    rect(seekx - 60 * i, seeky - rectHeight / 2, 30, rectHeight);
  }

  fill(253, 209, 209);
  for (let i = 0; i < 48; i++) {
    rect(seekx2 - 60 * i, seeky2 - rectHeight / 2, 5, rectHeight);
  }
}
