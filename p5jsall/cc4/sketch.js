function setup() {
  createCanvas(400, 600);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(235);
//michelle: head
  //the cat head and face
  noFill();
  ellipse(200,165,100,70);
  line(145,120,155,149)
  line(145,120,177,133)
  line(255,120,245,149);
  line(255,120,223,133)
  drawCircles(176,164,5);
  drawCircles(224,164,5);
  line(200,175,192,180);
  line(200,175,208,180);

//ella: body
  //the curvey cloth
  noFill();
  triangle(200,200,190,225,210,225);
  bezier(100,201,162,231,224,237,300,201);
  bezier(300,201,266,252,285,299,338,330);
  bezier(100,201,143,256,137,299,86,333);
  bezier(86,333,110,323,130,316,145,301);
  bezier(338,330,329,327,285,316,272,290);
  bezier(145,301,150,330,132,368,109,381);
  bezier(272,290,259,327,278,360,307,384);
  bezier(109,381,149,430,260,364,307,384);
  //circles and lines ornament
  drawCircles(346,325,20);
  drawCircles(77,336,20);
  drawCircles(183,298,10);
  drawCircles(260,229,25);
  drawCircles(251,344,10);
  bezier(126,247,143,253,141,267,129,272);
  bezier(149,400,159,364,197,370,204,393)
  
//elva: leg
  //left leg
  line(158,400,158,530);
  line(158,530,101,530);
  line(178,400,178,555);
  line(178,555,101,555);
  line(101,555,108,550);
  line(108,550,101,542);
  line(101,542,108,535);
  line(108,535,101,530);
  //right leg
  line(242,386,242,530);
  line(242,530,299,530);
  line(222,390,222,555);
  line(222,555,299,555);
  line(299,555,292,550);
  line(292,550,299,542);
  line(299,542,292,535);
  line(292,535,299,530);
}

function drawCircles(x,y,r)
{
  circle(x,y,r)
}