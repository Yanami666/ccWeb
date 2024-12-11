function setup() {
  createCanvas(600, 600);
  noStroke();
}
//using for function set the location of circle
function draw() {
  background(0);
  for(let i = 0; i <= 10; i++)
 {
    for(let j = 0; j <= 10; j++)
    {
//color circles
      let remainderi = (i + j) % 2;
      if(remainderi === 0 ){
        fill(255,255,120);
      } else {
        fill(120,255,255);
      }
//locate the place of circle     
      let posX = i * width / 10;
      let posY = j * width / 10;
//make the change of circle size by time & sin function
      let timeOffset = (i + j) * 0.1;
      let mappedDistance = map(sin(frameCount * 0.05 + timeOffset), -1, 1, 5, 55);
//draw rectangle
      rect(posX, posY, mappedDistance, mappedDistance);
    }
  }
}