var
monkey,monkey_running,banana,bananaImage,obstacleImage,obstacleGroup,backGround,score;
var ground;

function preload(){
  backImage=loadImage("jungle.jpg");
  monkey_running = loadAnimation("monkey_01.png","monkey_02.png","monkey_03.png","monkey_04.png","monkey_05.png","monkey_06.png","monkey_07.png","monkey_08.png","monkey_09.png","monkey_10.png");
  
  bananaImage=loadImage("banana.png");
  obstacleImage=loadImage("stone.png");
}

function setup() {
  createCanvas(400, 400);
  
  monkey=createSprite(50,180,20,50);
  monkey.addAnimation("running",monkey_running);
  
  backGround=createSprite(200,200,10,10);
  backGround.addImage("background",backImage);
  backGround.velocityX = -6;
  
  ground=createSprite(200,190,400,10);
  ground.visible=false;
  
  banana = createSprite()
}

function draw() {
  background(220);
  
  backGround.x=backGround.width/2;
}