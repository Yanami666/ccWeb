let sketch2 = function(p) {
  let eyeX = 0;
  let eyeY = 0;
  let bc;
  let facesize = 200;
  const b = 0;

  p.setup = function() {
    p.createCanvas(400, 400).parent("p5jsketchcon2");
    bc = p.color(220);
  }

  p.draw = function() {
    p.background(bc);

    p.stroke(b);
    p.strokeWeight(2);
    p.fill(255,230,150);
    p.ellipse(200,200, facesize, facesize);

    p.fill(b);
    p.ellipse(160 + eyeX, 170 + eyeY, facesize * 0.125, facesize * 0.145);
    p.ellipse(240 + eyeX, 170 + eyeY, facesize * 0.125, facesize * 0.145);

    p.noFill();
    p.stroke(b);
    p.strokeWeight(7);
    p.arc(200, 220, facesize * 0.5 , facesize * 0.35, 0, p.PI);
  }

  p.keyPressed = function() {
    if (p.key ===' '){
      facesize = p.random(160,300);
    }
  }

  p.mousePressed = function(){
    bc = p.color(p.random(0,255), p.random(0,255), p.random(0,255));
  
    //l up
    if(p.mouseX < p.width /2 && p.mouseY < p.height / 2){
      eyeX = -10;
      eyeY = -10;
    }

    //l down
    else if(p.mouseX < p.width / 2 && p.mouseY > p.height / 2){
      eyeX = -10;
      eyeY = 10;
    }

    //r up
    else if(p.mouseX > p.width / 2 && p.mouseY < p.height /2){
      eyeX = 10;
      eyeY = -10;
    }

    //r down
    else if(p.mouseX > p.width /2 && p.mouseY > p.height / 2){
      eyeX = 10;
      eyeY = 10;
    }
  }
}

new p5(sketch2);