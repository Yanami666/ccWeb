let eyeX = 0;
let eyeY = 0;
let bc;
let facesize = 200;
const b = 0;

function setup() {
  createCanvas(400, 400).parent("p5jsketchcon2");
  bc = color(220);
}

function draw() {
  background(bc);
  
//face
  stroke(b);
  strokeWeight(2);
  
  fill(255,230,150);
  ellipse(200,200, facesize, facesize);
//eye 
  fill(b);
  ellipse(160 + eyeX, 170 + eyeY, facesize * 0.125, facesize * 0.145);
  ellipse(240 + eyeX, 170 + eyeY, facesize * 0.125, facesize * 0.145);
//mouth 
  noFill();
  stroke(b);
  strokeWeight(7);
  arc(200, 220, facesize * 0.5 , facesize * 0.35, 0, PI);
}

function keyPressed(){
  if (key ===' '){
  facesize = random(160,300);
  }
}

function mousePressed(){
  
//bgchange
  bc = color(random(0,255), random(0,255), random(0,255));
  
  //l up
  if(mouseX < width /2 && mouseY < height / 2){
    eyeX = -10;
    eyeY = -10;
  }
  
  //l down
  if(mouseX < width / 2 && mouseY > height / 2){
    eyeX = -10;
    eyeY = 10;
  }
  
  //r up
  if(mouseX > width / 2 && mouseY < height /2){
    eyeX = 10;
    eyeY = -10;
  }
  
  //r down
  if(mouseX > width /2 && mouseY > height / 2){
    eyeX = 10;
    eyeY = 10;
  }
}
