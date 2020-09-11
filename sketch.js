//var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
//var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var ground;
var paper;
var dustbin;



function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.


	Engine.run(engine);
   ground = new Ground(400,480,800,20)
   paper = new Paper(200,40,5)
   dustbin1 = new Dustbin(600,350,120,130)
   launcher = new Launcher(paper.body,{x:200, y:50});
  // dustbin2 = new Dustbin(510,420,15,90)
   //dustbin3 = new Dustbin(690,420,15,90)
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground.display();
  paper.display();
dustbin1.display();
launcher.display();
//dustbin2.display();
//dustbin3.display();
  drawSprites();
 
}
function keyPressed()  {
  if(keyCode === UP_ARROW){
      Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
  }
  }
  function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}



