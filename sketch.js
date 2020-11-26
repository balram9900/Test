
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
	road1 = createSprite (0,200,500,800)
	road2 = createSprite (700,200,300,800)
	
car1 = new Car(400,200,50,50)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  if(keyDown(UP_ARROW))
  {
    car1.velocityY=-4
  }
	  
  
fill ("red")
  car1.display();
  drawSprites();
 
}



