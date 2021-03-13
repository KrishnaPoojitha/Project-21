var surface1,surface2,surface3,surface4;
var box,edges;
var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
   surface1=createSprite(0,580,360,30);
   surface1.shapeColor="blue";

   surface2=createSprite(295,580,200,30);
   surface2.shapeColor="orange";

   surface3=createSprite(515,580,200,30);
   surface3.shapeColor="pink";

   surface4=createSprite(740,580,200,30);
   surface4.shapeColor="yellow";   
    
    box=createSprite(random(20,750),100,20,20);
    box.shapeColor="green";
    box.velocityX=4;
    box.velocityY=9;
    
}

function draw() {
    background(rgb(169,169,169));
    
    edges=createEdgeSprites();
    box.bounceOff(edges);
    
    if(surface1.isTouching(box) && box.bounceoff(surface1)){
        box.shapeColor="blue";
        music.play();
        box.bounceOff(surface1);
        box.velocityX=4;
    box.velocityY=9;
    }
   
    if(surface2.isTouching(box)){
        box.shapeColor="orange";
        box.velocityX=0;
        box.velocityY=0;
        music.stop();
       }
       
    if(surface3.isTouching(box) && box.bounceoff(surface3)){
        box.shapeColor="pink";
        box.bounceOff(surface3);
        box.velocityX=4;
    box.velocityY=9;
    }
   
        if(surface4.isTouching(box) && box.bounceoff(surface4)){
        box.shapeColor="yellow";
        box.bounceOff(surface4);
        box.velocityX=4;
    box.velocityY=9;
        }
        
        drawSprites();
}

