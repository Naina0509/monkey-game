var monkey , m ,jungle,j,s,stone,b,banana,invisibleg,sgroup,bgroup;
var gameState,play,end;
var score;

function preload(){
m = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  
 j = loadImage("j.png");
  
  s = loadImage("stone.png");
  
  b = loadImage("banana.png");
}

function setup() {
  
  createCanvas(600,500);
  play = 1;
  end = 0;
  sec = 2;
  gameState = play;
  
  score = 0;
  
  jungle = createSprite(200,200);
  jungle.addImage(j);
    
  invisibleg = createSprite(200,480,400,1);
  invisibleg.visible = false;
  
 monkey = createSprite(30,480);
  monkey.addAnimation("running",m);
  monkey.scale = 0.10;
   
  
  sgroup = new Group();
  bgroup = new Group();
}

function draw() {
  background(220);
  monkey.collide(invisibleg);
  
  
  
  if(gameState===play){
  b1();
  s1();
  
  if(keyDown("space")){
  monkey.velocityY = -12;
     }
  monkey.velocityY = monkey.velocityY+0.8;
  
    
    if(monkey.isTouching(bgroup)){
    score = score+2;
      bgroup.destroyEach();
    }
    
    switch(score){
      case 10 : monkey.scale = 0.12; 
        break;
      case 20 : monkey.scale = 0.14;  
        break;
      case 30 : monkey.scale = 0.16;  
        break;
        case 40 : monkey.scale = 0.18;
        break;
       case 50 : monkey.scale = 0.2;
        break;
        default : break;
    }
    
  if(monkey.isTouching(sgroup)){
monkey.scale = 0.1;
  gameState = end;
  }
    
  } else if(gameState===end){
    sgroup.setVelocityEach(0);
     bgroup.setVelocityEach(0);
     bgroup.setLifetimeEach(-1);
    sgroup.setLifetimeEach(-1);
     bgroup.destroyEach();
    sgroup.destroyEach();
    textSize(30);
    text("gameover",200,200);
  }
  drawSprites();
  textSize(25);
  text("score :"+score,200,300);
}

function b1 (){
if(frameCount%300===0){
banana= createSprite(Math.round(random(200,600)),Math.round(random(200,600)))
 banana.addImage(b);
  banana.scale = 0.05;
   banana.velocityX = -2;                                                   bgroup.add(banana);
  banana.lifetime = 200;
                     } 
}

function s1(){
if(frameCount%200===0){
stone = createSprite(600,480);
  stone.addImage(s);
stone.scale = 0.2;
stone.velocityX = -3;
  sgroup.add(stone);
  stone.lifetime = 200;
}
}