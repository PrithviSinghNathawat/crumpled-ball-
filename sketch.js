
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,box1,box2,box3,ground;
var engine,world;
var paperimg;

function preload()
{
	paperimg=loadImage("paper.png");
}

function setup() {
	createCanvas(2000, 1800);
	
	
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 
	shapeColor="red";
	box1=createSprite(2000,1500,50,500);
	fill="red";
	box2=createSprite(1200,1500,50,500);
	fill="red";
	box3=createSprite(1600,1750,750,50);

	ground=  new Ground(1000,1000,2000,10);

	
	paper  =  new Paper(900,0,20);
	paper=addImage("paper",paper.png)
	
	ground=  new Ground(1000,1000,2000,10);


	paper1=createSprite(1000,900,20,20)
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.run(engine);
  
  console.log(paper.x);
  
   box1.display();
   box2.display();
   box3.display();

   paper1.display();
   paper.display();
   ground.display();
   





  drawSprites();
}

function keydown(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
		
	}
}
