
var car,wall;

function setup() {
  createCanvas(1200,800);
 
  car=createSprite(200,200,40,40);
  car.shapeColor="green";
  car.velocityX=10;
  wall=createSprite(1000,200,20,100);
  wall.shapeColor="red";
}

function draw() {
  background(0,0,0);  
  

// if( isTouching(car,wall)){
 //  car.shapeColor="pink";
 //}
 bounceOff(car,wall);
  drawSprites();
}

