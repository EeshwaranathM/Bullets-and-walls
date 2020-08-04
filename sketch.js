var bullet,wall;
var thickness,bulletspeed,bulletweight;

function setup() {
  createCanvas(1600,400);

  bulletspeed = random(223,321);
  bulletweight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50,200,20,15);
  bullet.shapeColor = 'white';
 
  wall = createSprite(1200,200,thickness,height);
  wall.shapeColor = 'white';

}

function draw() {
  background('black');  
  
  bullet.velocityX = bulletspeed;
  wall.velocityX = 0;

  if(wall.x - bullet.x < wall.width/2 + bullet.width/2){
   bulletspeed = 0;
  
    var damage = 0.5*bulletweight*bulletspeed*bulletspeed/thickness*thickness*thickness;

    if(damage > 10 ){
      bullet.shapeColor = 'red';
    }

    

    if(damage < 7.4){
      bullet.shapeColor = 'green';
    }
  
  }
  drawSprites();
}