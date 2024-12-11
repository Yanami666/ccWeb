
function setup() {
  createCanvas(400, 400).parent("p5jsketchcon");
}

function draw() {
  background(255);
noStroke();
  
push();
 
fill(220);
translate(75,155);
  rotate(35);
  ellipse(0,0,40,20);
pop();
  
  fill(120,155,220);
  rect(90,150,195,125);
  
//gezi and fill in color
  
push();
blendMode(REMOVE);
  square(100,150,25);
  square(100,200,25);
  square(100,250,25);
  square(125,175,25);
  square(125,225,25);
  square(150,150,25);
  square(150,200,25);
  square(150,250,25);
  square(175,175,25);
  square(175,225,25); 
  square(200,150,25);
  square(200,200,25);
  square(200,250,25);
  square(225,175,25);
  square(225,225,25);
  square(250,150,25);
  square(250,200,25);
  square(250,250,25);

  
pop();
  
fill(120,170,255);
  square(100,175,25);
  square(100,225,25);
  square(125,150,25);
  square(125,200,25);  
  square(125,250,25);
  square(150,175,25);
  square(150,225,25);
  square(175,150,25);
  square(175,200,25);
  square(175,250,25);
  square(200,175,25);
  square(200,225,25);
  square(225,150,25);
  square(225,200,25);
  square(225,250,25);
  square(250,175,25);
  square(250,225,25);
  
}
