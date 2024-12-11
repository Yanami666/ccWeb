let sketch5 = function(p) {
  p.setup = function() {
    p.createCanvas(600, 600).parent("p5jsketchcon5");
    p.noStroke();
  }

  p.draw = function() {
    p.background(0);
    for(let i = 0; i <= 10; i++)
    {
      for(let j = 0; j <= 10; j++)
      {
        let remainderi = (i + j) % 2;
        if(remainderi === 0 ){
          p.fill(255,255,120);
        } else {
          p.fill(120,255,255);
        }

        let posX = i * p.width / 10;
        let posY = j * p.width / 10;

        let timeOffset = (i + j) * 0.1;
        let mappedDistance = p.map(p.sin(p.frameCount * 0.05 + timeOffset), -1, 1, 5, 55);
        p.rect(posX, posY, mappedDistance, mappedDistance);
      }
    }
  }
}

new p5(sketch5);