const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[];
var divisionHeight=300;
var score =0;
var particle;
var start;
var gameState="start";
var turn=0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k,height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  Engine.update(engine);
  background("black");
  fill("white");
  text(mouseX+","+mouseY,mouseX,mouseY);
  textSize(25)
 text("Score : "+score,20,30);
 text("500",20,522);
 text("500",100,525);
 text("500",175,525);
 text("500",256,525);
 text("100",336,522);
 text("100",418,525);
 text("100",500,525);
 text("200",577,525);
 text("200",656,525);
 text("200",740,525);

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if(particle!=null){
     particle.display();
     if(particle.body.position.y>760){
       if(particle.body.position.x<300){
          particleScore(500);
       }
       else if(particle.body.position.x>301 && particle.body.position.x<600){
          particleScore(100);
       }
       else if(particle.body.position.x>601 && particle.body.position.x<600){
         particleScore(200);
       }
     }
   }
  if(turn>=5){
    textSize(50);
    text("GameOver",400,400);
  }
}
function mousePressed(){
  if(gameState!=="end"){
      turn++;
      particle= new Particle(mouseX, 10,10,10);
  }
}
function particleScore(s){
  score=score+s;
  particle=null;
  if(turn>=5){
    gameState="end";
  }
}