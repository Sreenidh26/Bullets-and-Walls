var bullet, wall;
var thickness,speed, weight;
var Lbullet,Lwall

function setup() {
  createCanvas(1536,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83)

  bullet=createSprite(50, 200, 75, 25);
  bullet.velocityX=speed;

  wall=createSprite(1520,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  console.log(wall);
}

function draw() {
  background(0,0,0);  
  

  if(hasCollided(bullet,wall))
  {
     bullet.velocityX=0;
     bullet.x=1490;
     var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness);
     
    if(damage>10)
    {
      bullet.shapeColor=color(255,0,0);
    }

    if(damage<10)
    {
      bullet.shapeColor=color(0,255,0);
    }

    
  }

    function hasCollided (Lbullet,Lwall)
    {
      bulletRightEdge=Lbullet.x+Lbullet.width;
      wallLeftEdge=Lwall.x;
      if(bulletRightEdge>=wallLeftEdge)
      {
        return true
      }
      return false
    }
    drawSprites();
  }

  
