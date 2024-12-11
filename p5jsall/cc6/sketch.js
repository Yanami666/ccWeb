//the time I played my ipad from 10.8-10.15;
  const timeIPlayedMyIpadData = [371,430,221,176,217,216,147,599];
//data of the category of software I use
//(game, creativity/social media, other)
  const softwareUseData = 
  [
      [179, 170, 6],
      [152, 192, 36],
      [80, 32, 52],
      [79, 77, 5],
      [168, 0.95, 0.15],
      [184, 14, 0.03],
      [92, 13, 0.7],
      [425, 67, 26],
  ];
//space btw bars && time set up
  const spacing = 60;
  let timer = 0;
// colors for differnt software category
  const colorsOfSoftware = ["lightblue"
                            
                            , "pink", "red"];

function setup() {
  createCanvas(600, 600);
  noStroke();
}

function draw() {
  background(0);
  timer += deltaTime/1000;
  if(timer >= 3)
  {
    timer = 3;
  }
//set the time of the animation
  let timerOver = timer / 3;
  
//the overall use time of my ipad
  for (let i = 0; i < timeIPlayedMyIpadData.length; i++) {
// Height of the bar
    let useTimeHeight = timeIPlayedMyIpadData[i] * timerOver;
    let posY = 0;
    fill(255); 
    rect(20 + i * spacing, posY, 20, useTimeHeight);
    
// categories time use of ipad
    for (let j = 0; j < softwareUseData[i].length; j++) {
      
      fill(colorsOfSoftware[j]);
      
      let softwareHeight = softwareUseData[i][j] * timerOver;
      rect(20 + i * spacing, posY, 20, softwareHeight);
      
      posY += softwareHeight;
      
    }
  }
}