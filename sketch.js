const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var maxDrops = 100;
var drops = []
var thunder1;
var thunder2;
var thunder3;
var thunder4;



function preload(){
    
    

}

function setup(){

     createCanvas(700,900);
     engine = Engine.create()
     world = engine.world

    
     for(var i=0; i<maxDrops;i++){

        drops.push(new Drop(random(0,700),random(0,700)));

    }

     

    
    
}

function draw(){

    background("black");

   Engine.update(engine)

    

    for(var i=0;i<maxDrops;i++){
        drops[i].showDrop();
        drops[i].updateDrop();
    }
    
}   


