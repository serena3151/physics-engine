const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var ground;
var ball;
var engine, world


function setup() {
  createCanvas(800,400);
engine = Engine.create();
world = engine.world;
var options = {
  isStatic: true
}
ground = Bodies.rectangle(400,390,800,20,options)
var ball_options = {
  restitution: 1.5
}
ball = Bodies.circle(200,300,20,ball_options)
console.log(ball)
World.add(world,ground);
World.add(world,ball)
}

function draw() {
  background('red'); 
  Engine.update(engine);
  rectMode(CENTER); 
 rect(ground.position.x, ground.position.y,800,20)
 ellipseMode(RADIUS)
 ellipse(ball.position.x,ball.position.y,20)
}