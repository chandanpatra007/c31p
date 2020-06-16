var particles = [];
var plinko = [];
var divisions = [];

var divisionHeight = 300;

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;


function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2,780,width,20);



   
}

function draw(){
    background(0);
    Engine.update(engine);
     
}
for (let k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight));
    
}
for (var j = 40; j <=width; j=j+50)
{
    plinkos.push(new Plinko(j,75));
}
for (var j = 15; j <=width-10; j=j+50)
{
    plinkos.push(new Plinko(j,175));
}
for (var j = 10; j <=width; j=j+50)
{
    plinkos.push(new Plinko(j,275));
}
for (var j = 5; j <=width-20; j=j+50)
{
    plinkos.push(new Plinko(j,375));
}