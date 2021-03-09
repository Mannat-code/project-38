var butterFly,butterFly_img;
var flower,flower1,flower2,flower3,flower4,flower5;
var canvas;
var gameState=0;
var ground;
var score=0;
function preload(){
butterFly_img=loadImage("images/butterfly.png");
flower1=loadImage("images/flower.png");

flower2=loadImage("images/flower2.png");
flower3=loadImage("images/flower3.png");
flower4=loadImage("images/flower4.png");
flower5=loadImage("images/flower5.png");
}

function setup(){
  database = firebase.database();
  canvas = createCanvas(500,300);;
  game = new Game();
  game.getState();
  game.start();

}


function draw(){
  background("white")
  if(frameCount % 50 === 0) {
    var flower = createSprite(500,265,10,40);
    flower.velocityX = -4;
    
    //generate random obstacles
    var rand = Math.round(random(1,5));
    switch(rand) {
      case 1: flower.addImage(flower1);
 
              break;
      case 2: flower.addImage(flower2);
              break;
      case 3: flower.addImage(flower3);
              break;
      case 4: flower.addImage(flower4);
              break;
      case 5: flower.addImage(flower5);
              break;
  
      default: break;
    }
    
       
    flower.scale = 0.3;
    flower.lifetime = 300;
  }
  if(keyDown("up"))
  {
   butterFly.y=butterFly.y-3;
}
if(keyDown("down"))
{
 butterFly.y=butterFly.y+3;
}
if(butterFly.y>265)
{
  butterFly.y=butterFly.y-100;
}
fill("black");
  textSize(20);
  text("Score: "+score,300,50);
  textSize(10)
  text("PRESS UP ARROW TO MOVE UP AND DOWN ARROW TO MOVE DOWN",100,70);
  text("DRINK NECTAR OF FLOWER BY GOING NEAR TO THEM",200,100);

if(butterFly.y>260)
{
  score=score+1;
}  
if(score>20)
{
  textSize(20);
  fill("red");
  text("GAME OVER.. YOU WON AND SCORED 20",10,150);
  score=20;
  flower.velocityX=0;
}
  drawSprites();
}