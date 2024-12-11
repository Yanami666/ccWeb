//set up season;plant height;yes or no growing
let season = 0;
let plh1 = 0;
let plh2 = 0;
let plh3 = 0;
let plh4 = 0;
let plh5 = 0;
let ygrow = true;

function setup() {
  createCanvas(600, 600);
}

function draw() 
{
  background(135, 206, 235);
  
// timer, set up framcount
  let timec = (frameCount / 2) % 400;
  
//stop the animation
  if (frameCount / 2 >= 400) 
  {
    noLoop();
  }
//if spring statement!
  if (timec < 100) 
  {
    season = 0;
    background(135, 206, 250);
  }
//if summmmmmer
  else if (timec < 200) 
  {
    season = 1;
    background(255, 204, 0);
  }
//if falllll
  else if (timec < 300) 
  {
    season = 2; // 秋天
    background(255, 165, 0);
  } 
//if winterrrrr 
  else 
  {
    season = 3;
    background(240);
  }
  //yes grow in spring and fall
  if (season === 0 || season ===1 ) 
  {
  ygrow = true;
  } 
//no grow, drain in fall
  else if (season === 2 && plh1 > 0) 
  {
  ygrow = false;
 }
  
//nothing happend in winter
  else if (season === 3) 
  {
  ygrow = null;
  }
  
//if ygrow(yesgrow),then the plant grow (in spring and summer)
  if(ygrow)
  {
    plh1 += 0.5;
    plh2 += 0.3;
    plh3 += 0.35;
    plh4 += 0.2;
    plh5 += 0.4;
  }
  
//at fall plant drained (ono
  else if (ygrow === false && plh1> 0 && plh2>0 && plh3>0)
  {
    plh1 -= 0.15;
    plh2 -= 0.1;
    plh3 -= 0.11;
    plh4 -= 0.04;
    plh5 -= 0.2;
  }
  
//draw ground
  fill(139, 69, 19);
  rect(0, 500, 600, 100);
//sun
  fill(225,10,10);
  circle(150,150,70);
//plants
  fill(35, 160, 35);
  rect(110, 520 - plh1, 20, plh1);
  fill(25, 145, 45);
  rect(400, 500 - plh2, 10, plh2);
  rect(220, 510 - plh3, 18, plh3);
  fill(250,190,0);
  rect(300, 530 - plh4, 22, plh4);
  fill(45, 180, 95);
  rect(475, 580 - plh5, 15, plh5);
}