
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
    var options= {
	isStatic:false,
	restitution:3,
	friction:0.5,
	densiny:1.2
	
	}
  

	function keyPressed(){
	if(KeyCode=== UP_ARROW){

	   sMatter.Body.applyForce(paperObject.body,paperObject.position,{x:85,y:-85})
		
	 }	
	}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



