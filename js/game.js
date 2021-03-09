class Game
{
constructor()
{

}
getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }
 


  async start(){
    butterFly=createSprite(100,100);
    butterFly.addImage("butterfly",butterFly_img);
    butterFly.scale=0.25;
  

    if(keyDown("space"))
    {
     butterFly.velocityY = -10;
 }
  
  //butterFly.velocityY = butterFly.velocityY + 0.8

    drawSprites();
  } 

    end()
  {
    console.log("Game Ended");

    
  }
  }


