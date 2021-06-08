var hero, house, stage1, basic1;
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,
wall10,wall11,wall12,wall13,wall14,
wall15,wall16,wall17,wall18,wall19,wall20,wall21,wall22;

function preload() {
  houseImage = loadImage("image/house.png");
  stage1Image = loadImage("image/houseBDI.png");
  herosteps = loadAnimation("image/leg1.png", "image/leg2.png");
  basicIMG = loadImage('image/basic1.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  stage1 = createSprite(width/2, height/2, 100, 100);
  stage1.addImage(stage1Image);
  stage1.scale = 3
  house = createSprite(width/2, height/2, 50, 50);
  house.addImage(houseImage);
  house.scale = 0.4
  hero = createSprite(displayWidth / 2, displayHeight / 2);
  hero.addAnimation("herosteps", herosteps);
 
  hero.setCollider("rectangle",0,0,hero.width-15,hero.height-15)
  hero.scale = 2;
  house.setCollider("rectangle", 0, 0, 350, 350);
  basic = createSprite(155, 345);
  basic.addImage("basicIMG",basicIMG);
  basic.scale = 3

  
  //boundry walls
  wall1 = createSprite(333, 328, 30, 600);
  wall1.visible = false;
  wall2= createSprite(765,42,900,30);
  wall2.visible = false;
  wall3= createSprite(1200,320,30,600);
  wall3.visible = false;
  wall4= createSprite(765,611,900,30);
  wall4.visible = false;

  //innerwalls
  wall5= createSprite(700,238,800,30);
  wall5.visible = false;
  wall6= createSprite(1166,145,30,200);
  wall6.visible = false
  wall7= createSprite();
  wall8= createSprite();
  wall9= createSprite();
  wall10= createSprite();
  wall11= createSprite();
  wall12= createSprite();
  wall13= createSprite();
  wall14= createSprite();
  wall15 = createSprite(); 
  wall16= createSprite();
  wall17 = createSprite();
  wall18= createSprite();
  wall19 = createSprite(); 
  wall20= createSprite();
  wall21= createSprite();
  wall22= createSprite();
}


function draw() {
  background("black");  
  drawSprites();
  fill("white")
  text(mouseX+ ","+ mouseY,mouseX,mouseY);
  hero.collide(house)  
  hero.collide(wall1)
  hero.collide(wall2)
  hero.collide(wall3)
  hero.collide(wall4)
  hero.collide(wall5)
  hero.collide(wall6)
  heroMOVE()
}


function heroMOVE() {

  if (keyDown("up")){

    hero.y=hero.y-10
  }
  if (keyDown("down")){

    hero.y=hero.y+10
  }
  if (keyDown("right")){

    hero.x=hero.x+10
  }
  if (keyDown("left")){

    hero.x=hero.x-10
  }
}