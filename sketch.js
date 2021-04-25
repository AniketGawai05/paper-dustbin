
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbin,dustbin	
var world;

function preload(){
	dustbinImage = loadImage("images/dustbingreen.png");
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
    paperObject=new paper(200,450,70);
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

dustbin = createSprite(960,520,20,20);
dustbin.addImage(dustbinImage);
dustbin.scale = 0.45;


dustbin1 = new Dustbin(902,505,10,120);
dustbin2 = new Dustbin(962,565,130,10);
dustbin3 = new Dustbin(1024,505,10,120);


	Engine.run(engine);
  
}


function draw() {
  
  background(0);
Engine.update(engine);

//(mouseX=","+mouseY,200,200)


  groundObject.display();
  dustbin.display();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display(); 

  drawSprites();
}


function keyPressed(){

	if (KeyCode === UP_ARROW){
Matter.Body.applyForce(Paper.Body.posX,posY)

	}
}






