Engine = Matter.Engine,
 World = Matter.World,

  Bodies = Matter.Bodies; 
 
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score = 0;
var count = 0;
var turns = 0;
var gameState = "start";
var particle;
var bg;
function preload(){
  bg = loadImage("1.jpeg")
}
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground (width/2, 795 ,800, 10);


   for (var k = 0; k <=width; k = k + 80) 
   {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 25; j <=width; j=j+50) 
    {
     plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
     plinkos.push(new Plinko(j,175));
    }

     for (var j = 25; j <=width; j=j+50) 
    {
     plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
     plinkos.push(new Plinko(j,375));
    }

  Engine.run(engine);
}
 


function draw() {
  background(bg);
  textFont("California")
  textSize(22)
  text("Score : "+score,20,40);
  text("Turns : "+turns,700,40);

  fill ("white")
  textSize(25)
  text("500",20,550);


  text("500",100,550);


  text("500",180,550);


  text("500",260,550);

  //text display for score 100
 
  text("100",340,550);


  text("100",420,550);


  text("100",500,550);

  //text display for score 200

  text("200",580,550);


  text("200",660,550);


  text("200",740,550);

  Engine.update(engine);

  if ( gameState =="end") {
    
    textSize(100);
    fill("yellow")
    text("GameOver",175,400);
    //return
  }
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 
  for (var j = 0; j < particles.length; j++) 
  {
    particles[j].display();
  }

   ground.display();

   if(particle!=null)
    {
       particle.display();
        
        if (particle.body.position.y>760)
        {
              if (particle.body.position.x < 300) 
              {
                  score=score+500;      
                  particle=null;
                  if ( count>= 5) {
                    gameState ="end";  
                  
                  }                        
              }


              else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
              {
                    score = score + 100;
                    particle=null;
                    if ( count>= 5) gameState ="end";

              }
              else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
              {
                    score = score + 200;
                    particle=null;
                    if ( count>= 5) gameState ="end";

              }      
              
        }
    }

    for (var k = 0; k < divisions.length; k++) 
    {
     divisions[k].display();
    }
}

function mousePressed()
{
  if(gameState!=="end")
  {
      count++;
     particle = new Particle (mouseX, 10, 10, 10); 
     turns=turns+1;
  }   
}