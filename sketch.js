var fixedRect, movingRect;
var obj1,obj2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  obj1=createSprite(300,20,30,55);
  obj2=createSprite(300,400,50,35);

obj1.velocityY=+2;
obj2.velocityY=-2;

}

function draw() {
  background(0,0,0);  
  bounceoff(movingRect,fixedRect);
  bounceoff(obj1,obj2);
  
  drawSprites();
}












