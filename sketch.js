var jr,gr 

function setup() {
  createCanvas(800,400);

  jr = createSprite(400, 200, 50, 50);
  jr.shapeColor = "blue";
  jr.debug = true;

  gr = createSprite(500,100,100,50);
  gr.shapeColor = "purple";
  gr.debug = true;
}

function draw() {
  background("yellow");  

  gr.x = mouseX;
  gr.y =mouseY;

  if(gr.x - jr.x < gr.width/2 + jr.width/2 && 
    jr.x - gr.x < gr.width/2 + jr.width/2 && 
    jr.y - gr.y < gr.height/2 + jr.height/2 &&
    gr.y - jr.y < gr.height/2 + jr.height/2
    ){
    jr.shapeColor = "red";
    gr.shapeColor = "red";
  }
  else{
    jr.shapeColor = "blue";
    gr.shapeColor = "purple";
  }

  drawSprites();

  text("jahaan.x = "+jr.x,200,20);
  text("garima.x = "+gr.x,200,40);
  text("jahaan.width = "+jr.width,200,60);
  text("garima.width = "+gr.width,200,80);
  text("LHS = "+(gr.x-jr.x),350,80);
  text("RHS = "+(gr.width/2+jr.width/2),350,100);
}