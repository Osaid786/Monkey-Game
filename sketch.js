
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600)
  
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  
  
  ground=createSprite(300,350,900,10)
  ground.velocityX=-2
  ground.x=ground.width/2
  
  FoodGroup=createGroup()
  obstacleGroup=createGroup()
  

  
}


function draw() {
background("lightgreen")
  
  
  
  stroke("white")
  textSize(20);
  fill("white")
  text("score:"+score,500,50)
 
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime,100,50);
  
  if(ground.x<0){
    ground.x=ground.width/2
  }
  if(keyDown("space")){
    
    monkey.velocityY=-20
    }
  
  monkey.velocityY=monkey.velocityY+1
  monkey.collide(ground)
  
  
  obstacles();
  food();
  
  
   
  
  
  if(monkey.isTouching(FoodGroup)){
    FoodGroup.destroyEach()
    
  }

  
  
  
  
  
  
  drawSprites();
  
}
function food(){
  if(World.frameCount%80===0){
   var banana=createSprite(300,40,20,20)
    banana.y=Math.round(random(120,200))
    banana.addImage(bananaImage)
    banana.scale=0.1
    banana.velocityX=-4
    banana.setLifetime=100
    FoodGroup.add(banana)
  }
    
}
function food(){
  if(World.frameCount%80===0){
   var banana=createSprite(300,40,20,20)
    banana.y=Math.round(random(120,200))
    banana.addImage(bananaImage)
    banana.scale=0.1
    banana.velocityX=-4
    banana.setLifetime=100
    FoodGroup.add(banana)
  }
    
}
    
    
    
    function obstacles(){
  if(World.frameCount%80===0){
    obstacle=createSprite(300,330,20,20)
    
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.1
    obstacle.velocityX=-4
    obstacle.setLifetime=100
    obstacleGroup.add(obstacle)
  }
    
}
    
    
  







