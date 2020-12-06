var wall,thickness;
var bullet,speed, weight;
var backgroundIMG, bulletIMG;
function preload(){
  backgroundIMG = loadImage("background.jpg");
  bulletIMG = loadImage("bullet.jpg");
}
function setup() {
  createCanvas(800,400);
  speed = random(150,200);
  weight = random(30,52);
  thickness = random(22,83);
  bullet = createSprite(40, 220, 35, 10);
  bullet.shapeColor = ('black');
  bullet.velocityX = speed;
  wall = createSprite(700, 200, thickness, height/2);
  wall.shapeColor = ('grey');
  //miscellaneous
  ebullet = createSprite(40,360,35,10);
  ebullet.shapeColor = ('black');
}

function draw() {
  image(backgroundIMG,0,0,800,400);
  textSize(30);
  fill("black");
  text("= BULLET",65,370);
  textSize(40);
  fill('black');
  textFont('Broadway');
  text('( WALL RELIABILITY TEST )', 120, 50);
  if(IsTouchinga(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed / thickness * thickness * thickness;
  }
  if (damage >= 10){
    wall.shapeColor = ('red');
    textSize(70);
    textFont('Algerian')
    fill('maroon');
    text('WALL IS NOT SAFE', 50, 200);
  }
  else {
    wall.shapeColor = ('green');
    textSize(70);
    textFont('Algerian')
    fill('darkgreen');
    text('WALL IS SAFE', 150, 200);
  }
 drawSprites();
}