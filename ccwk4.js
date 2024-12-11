let sketch4 = function(p) {
  p.setup = function() {
    p.createCanvas(400, 600).parent("p5jsketchcon4");
    p.angleMode(p.DEGREES);
    p.rectMode(p.CENTER);
  }

  p.draw = function() {
    p.background(235);
    //michelle: head
    p.noFill();
    p.ellipse(200,165,100,70);
    p.line(145,120,155,149);
    p.line(145,120,177,133);
    p.line(255,120,245,149);
    p.line(255,120,223,133);
    drawCircles(176,164,5);
    drawCircles(224,164,5);
    p.line(200,175,192,180);
    p.line(200,175,208,180);

    //ella: body
    p.noFill();
    p.triangle(200,200,190,225,210,225);
    p.bezier(100,201,162,231,224,237,300,201);
    p.bezier(300,201,266,252,285,299,338,330);
    p.bezier(100,201,143,256,137,299,86,333);
    p.bezier(86,333,110,323,130,316,145,301);
    p.bezier(338,330,329,327,285,316,272,290);
    p.bezier(145,301,150,330,132,368,109,381);
    p.bezier(272,290,259,327,278,360,307,384);
    p.bezier(109,381,149,430,260,364,307,384);
    drawCircles(346,325,20);
    drawCircles(77,336,20);
    drawCircles(183,298,10);
    drawCircles(260,229,25);
    drawCircles(251,344,10);
    p.bezier(126,247,143,253,141,267,129,272);
    p.bezier(149,400,159,364,197,370,204,393);

    //elva: leg
    p.line(158,400,158,530);
    p.line(158,530,101,530);
    p.line(178,400,178,555);
    p.line(178,555,101,555);
    p.line(101,555,108,550);
    p.line(108,550,101,542);
    p.line(101,542,108,535);
    p.line(108,535,101,530);

    p.line(242,386,242,530);
    p.line(242,530,299,530);
    p.line(222,390,222,555);
    p.line(222,555,299,555);
    p.line(299,555,292,550);
    p.line(292,550,299,542);
    p.line(299,542,292,535);
    p.line(292,535,299,530);
  }

  function drawCircles(x,y,r) {
    p.circle(x,y,r)
  }
}

new p5(sketch4);