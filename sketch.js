var fr,mr;
function setup() {
  createCanvas(800,400);
  fr = createSprite(200, 200, 50, 50);
  mr = createSprite(600, 200, 50, 50);
  fr.shapeColor = "green"
  mr.shapeColor = "green"
}

function draw() {
  background(0);
mr.x = World.mouseX;
mr.y = World.mouseY;

if(fr.position.x - mr.position.x < fr.width/2 + mr.width/2 
  && mr.position.x - fr.position.x < mr.width/2 + fr.width/2
  && fr.position.y - mr.position.y < fr.height/2 + mr.height/2 
  && mr.position.y - fr.position.y < mr.height/2 + fr.height/2
  ) {
    fr.shapeColor = "red"
    mr.shapeColor = "red"
}

else {
  fr.shapeColor = "green"
  mr.shapeColor = "green"
}



  drawSprites();
}