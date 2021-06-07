var canvas;
var music;
var block1, block2, block3, block4;
var box;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(745,600);

    //create 4 different surfaces
    block1 = createSprite(100,580,200,30);
    block1.shapeColor="blue";
    block2 = createSprite(275,580,200,30);
    block2.shapeColor="pink";
    block3 = createSprite(465,580,200,30);
    block3.shapeColor="yellow";
    block4 = createSprite(650,580,200 ,30);
    block4.shapeColor="purple";
    ball = createSprite(random(20,750),100,40,40);
    ball .shapeColor="white";
    ball.velocityX = 4;
    ball.velocityY = 9;

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
     edges = createEdgeSprites();
     ball.bounceOff(edges);
    if(ball.isTouching(block1)&&ball.bounceOff(block1)){
        ball.shapeColor="blue";
        music.play();
    }
    if(ball.isTouching(block2)&&ball.bounceOff(block2)){
        ball.shapeColor="pink";
        music.stop();
    }
    if(ball.isTouching(block3)&&ball.bounceOff(block3)){
        ball.shapeColor="yellow";
        ball.velocityX=0;
        ball.velocityY=0;
    }
    if(ball.isTouching(block4)&&ball.bounceOff(block4)){
        ball.shapeColor="purple";
        music.play();
    }

    drawSprites();

    //add condition to check if box touching surface and make it box
}
