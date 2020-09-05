var h, m, seconds;
var scAngle,hAngle,mAngle;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  angleMode(DEGREES);
  stroke(255,0,0);
  strokeWeight(4);
  line(0,0,100,0);
}

function draw() {
  background(255,255,255);  

  translate(400,200);
  h = hour();
  m = minute();
  seconds = second();
  scAngle = map(seconds,0,60,0,360);
  hAngle = map(h,0,12,0,360);
  mAngle = map(m,0,60,0,360);
  push()
  rotate(scAngle)
  stroke(255,0,0);
  strokeWeight(4);
  line(0,0,100,0);
  pop()
  //arc for seconds hand
  stroke(255,0,0);
  strokeWeight(10);
  arc(0,0,300,300,0,scAngle);

  push()
  rotate(hAngle)
  stroke(0,255,255);
  strokeWeight(4);
  line(0,0,135,0);
  pop()
  //arc for seconds hand
  noFill();
  stroke(0,255,255);
  strokeWeight(10);
  arc(0,0,340,340,0,hAngle);

  push()
  rotate(mAngle)
  stroke(255,255,0);
  strokeWeight(4);
  line(0,0,125,0);
  pop()
  //arc for seconds hand
  noFill();
  stroke(255,255,0);
  strokeWeight(10);
  arc(0,0,320,320,0,mAngle);
  drawSprites();
}