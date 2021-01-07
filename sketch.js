
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100,500,30,30);
	ground = new Ground(400,600,800,20);
	container1 = new Container(600,585,150,10);
	container2 = new Container(520,550,10,80);
	container3 = new Container(680,550,10,80);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  ground.display();
  container1.display();
  container2.display();
  container3.display();

  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:30,y:-30})
	}
}



