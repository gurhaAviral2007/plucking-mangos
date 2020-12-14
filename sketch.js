const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy_IMG,tree_IMG,Tree,back;

function preload()
{
  boy_IMG=loadImage("boy.png")
  tree_IMG=loadImage("tree.png")
  //back_IMG=loadImage("village back.jpg");
}

function setup() {
  createCanvas(800, 700);
  
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone = new Stone(100,600,30)
	ground = new Ground(400,696,800,10);
	mango1 = new mango(600,450,30)
	mango2 = new mango(700,400,30)
	mango3 = new mango(650,420,30)
	mango4 = new mango(750,400,30)
	mango5 = new mango(700,460,30)
	mango6 = new mango(600,390,30)
	mango7 = new mango(650,350,30)
  string = new elastic(stone.body,{x:135,y:555})
  


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("light green");
  image(boy_IMG,100,480,200,300);
  image(tree_IMG,500,290,300,400);
//image(back_IMG,800,700,0,0);
  
  stone.display();
   
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  string.display();

  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)
  detectCollision(stone,mango6)
  detectCollision(stone,mango7)


  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x:mouseX,y:mouseY})
}
function mouseReleased(){
  string.fly()
}

function detectCollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r){
  Matter.Body.setStatic(lmango.body,false);
}
}

function keyPressed() {
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body, {x:100, y:600})
    string.attach(stone.body);
  }
}



