let sketch1 = function(p) {
  p.setup = function() {
    p.createCanvas(400, 400).parent("p5jsketchcon1");
  }

  p.draw = function() {
    p.background(255);
    p.noStroke();

    p.push();
    p.fill(220);
    p.translate(75,155);
    p.rotate(35 * p.PI / 180);
    p.ellipse(0,0,40,20);
    p.pop();

    p.fill(120,155,220);
    p.rect(90,150,195,125);

    p.push();
    p.blendMode(p.REMOVE);
    p.square(100,150,25);
    p.square(100,200,25);
    p.square(100,250,25);
    p.square(125,175,25);
    p.square(125,225,25);
    p.square(150,150,25);
    p.square(150,200,25);
    p.square(150,250,25);
    p.square(175,175,25);
    p.square(175,225,25); 
    p.square(200,150,25);
    p.square(200,200,25);
    p.square(200,250,25);
    p.square(225,175,25);
    p.square(225,225,25);
    p.square(250,150,25);
    p.square(250,200,25);
    p.square(250,250,25);
    p.pop();

    p.fill(120,170,255);
    p.square(100,175,25);
    p.square(100,225,25);
    p.square(125,150,25);
    p.square(125,200,25);  
    p.square(125,250,25);
    p.square(150,175,25);
    p.square(150,225,25);
    p.square(175,150,25);
    p.square(175,200,25);
    p.square(175,250,25);
    p.square(200,175,25);
    p.square(200,225,25);
    p.square(225,150,25);
    p.square(225,200,25);
    p.square(225,250,25);
    p.square(250,175,25);
    p.square(250,225,25);
  }
}
new p5(sketch1);