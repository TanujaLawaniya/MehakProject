var bg,bgImg1,bgImg2;
var backButton,backButtonImg;
var visionButton,colorButton,exerciseButton,infoButton;
var visionButtonImg,colorButtonImg,exerciseButtonImg,infoButtonImg;
var gameState="start";

function preload() {
  bgImg1=loadImage("bg1.png");
  bgImg2=loadImage("bg2.png");
  visionButtonImg=loadImage("vblock.png");
  colorButtonImg=loadImage("cblock.png");
  exerciseButtonImg=loadImage("eblock.png");
  infoButtonImg=loadImage("Iblock.png");

  backButtonImg=loadImage("backButton.png");
}

function setup() {
  createCanvas(displayWidth-50,displayHeight-200);

  bg=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  bg.addImage("bg1",bgImg1);
  bg.scale=0.7;
  
  visionButton=createSprite(200,370,100,100);
  visionButton.addImage(visionButtonImg);
  visionButton.scale=0.9;
  visionButton.visible=false;
  

  colorButton=createSprite(520,350,100,100);
  colorButton.addImage(colorButtonImg);
  colorButton.visible=false;
  colorButton.scale=1.5;

  exerciseButton=createSprite(850,350,100,100);
  exerciseButton.addImage(exerciseButtonImg);
  exerciseButton.visible=false;
  exerciseButton.scale=0.9;

  infoButton=createSprite(1150,350,100,100);
  infoButton.addImage(infoButtonImg);
  infoButton.visible=false;
  infoButton.scale=0.65;

  backButton=createSprite(100,100,100,100);
  backButton.addImage(backButtonImg);
  backButton.visible=false;
  backButton.scale=0.4;
}

function draw() {
  background(0);  

  if(gameState==="start"){
    start();
  }
  else if(gameState==="exercise"){
    exercises();
  }

  drawSprites();
}

function start(){
  visionButton.visible=true;
  colorButton.visible=true;
  exerciseButton.visible=true;
  infoButton.visible=true;

  backButton.visible=false;

  bg.addImage("bg1",bgImg1);
  bg.changeImage("bg1",bgImg1);

  visionButton.rotation=visionButton.rotation+2;
  colorButton.rotation=colorButton.rotation+2;
  exerciseButton.rotation=exerciseButton.rotation+2;
  infoButton.rotation=infoButton.rotation+2;

  if(mousePressedOver(exerciseButton)){
    gameState="exercise";
  }
}

function exercises(){

  visionButton.visible=false;
  colorButton.visible=false;
  exerciseButton.visible=false;
  infoButton.visible=false;
  backButton.visible=true;

  bg.addImage("bg2",bgImg2);
  bg.changeImage("bg2",bgImg2);

  if(mousePressedOver(backButton)){
    gameState="start";
  }
}