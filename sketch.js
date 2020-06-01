var ball,ballimg,paddle,paddleimg,edge;
function preload() {
  /* preload your images here of the ball and the paddle*/
  ballimg = loadImage("ball.png");
  paddleimg = loadImage("paddle.png");
  
}
function setup() {
  createCanvas(400, 400);

  ball = createSprite(200,200);
  ball.addImage("ball",ballimg);
  paddle = createSprite(370,200);
  paddle.addImage("paddle",paddleimg);

  ball.velocityX=9;

}

function draw() {
  background(205,153,0);
  
   edge = createEdgeSprites();
  
  ball.bounceOff(edge[0]);
  ball.bounceOff(edge[2]);
  ball.bounceOff(edge[3]);
  
  if (ball.bounceOff(paddle));
  {
    explosion();
  }
  
  paddle.collide(edge[2]);
  paddle.collide(edge[3]);
  
  if(keyDown(UP_ARROW))
  {
    
    paddle.y = paddle.y-20;
    
  }
  
  if(keyDown(DOWN_ARROW))
  {
  
    paddle.y = paddle.y+20;
  }
  
  drawSprites();
  
}

function explosion()
{
  ball.velocityY=random(-8,8);
}

