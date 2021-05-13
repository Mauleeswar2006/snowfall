function preload(){
backGround1 = loadImage('snow1.jpg');
}

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(backGround1);  
  drawSprites();
}