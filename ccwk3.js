let sketch3 = function(p) {
  let season = 0;
  let plh1 = 0;
  let plh2 = 0;
  let plh3 = 0;
  let plh4 = 0;
  let plh5 = 0;
  let ygrow = true;

  p.setup = function() {
    p.createCanvas(600, 600).parent("p5jsketchcon3");
  }

  p.draw = function() {
    p.background(135, 206, 235);

    let timec = (p.frameCount / 2) % 400;

    if (p.frameCount / 2 >= 400) {
      p.noLoop();
    }

    if (timec < 100) {
      season = 0;
      p.background(135, 206, 250);
    }
    else if (timec < 200) {
      season = 1;
      p.background(255, 204, 0);
    }
    else if (timec < 300) {
      season = 2;
      p.background(255, 165, 0);
    } else {
      season = 3;
      p.background(240);
    }

    if (season === 0 || season ===1 ) {
      ygrow = true;
    } else if (season === 2 && plh1 > 0) {
      ygrow = false;
    } else if (season === 3) {
      ygrow = null;
    }

    if(ygrow) {
      plh1 += 0.5;
      plh2 += 0.3;
      plh3 += 0.35;
      plh4 += 0.2;
      plh5 += 0.4;
    }
    else if (ygrow === false && plh1> 0 && plh2>0 && plh3>0) {
      plh1 -= 0.15;
      plh2 -= 0.1;
      plh3 -= 0.11;
      plh4 -= 0.04;
      plh5 -= 0.2;
    }

    p.fill(139, 69, 19);
    p.rect(0, 500, 600, 100);

    p.fill(225,10,10);
    p.circle(150,150,70);

    p.fill(35, 160, 35);
    p.rect(110, 520 - plh1, 20, plh1);
    p.fill(25, 145, 45);
    p.rect(400, 500 - plh2, 10, plh2);
    p.rect(220, 510 - plh3, 18, plh3);
    p.fill(250,190,0);
    p.rect(300, 530 - plh4, 22, plh4);
    p.fill(45, 180, 95);
    p.rect(475, 580 - plh5, 15, plh5);
  }
}

new p5(sketch3);