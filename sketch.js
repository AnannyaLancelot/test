
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var dustbin1,dustbin2,dustbin3;
var dusti,dustbin;
var paperi,paper;

function preload()
{
	dusti=loadImage("dustbin.png");
	paperi=loadImage("paper.png");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	  ball=new Paper(30,500,100);

	  ground=new Ground(800,600,1600,10);

	  dustbin1=new Dustbin(990,586,150,10);
	  dustbin2=new Dustbin(920,500,10,180);
	  dustbin3=new Dustbin(1060,500,10,180);
	 

	  dustbin=createSprite(990,500);
	  dustbin.addImage(dusti);
	  dustbin.scale=0.6

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);

  ball.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  
  drawSprites();
 
}
function keyPressed(){
	
	if(keyCode === UP_ARROW){
		console.log(ball.body)
		Matter.Body.applyForce(ball.body,ball.body.position,{x:100,y:-100})
	}	
}


