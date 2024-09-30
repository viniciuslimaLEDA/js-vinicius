function setup() 
{
  createCanvas(400, 400);
  background(220);
}

function draw() 
{
  rect(0,0,40,50);
  stroke("blue");
  strokeWeight(5);
  fill("red")
  
  if(mouseIsPressed)
  {
  rect(mouseX, mouseY, 20, 35);
   } 
}
