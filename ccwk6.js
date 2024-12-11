let sketch6 = function(p) {
  const timeIPlayedMyIpadData = [371,430,221,176,217,216,147,599];
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
  const spacing = 60;
  let timer = 0;
  const colorsOfSoftware = ["lightblue","pink", "red"];

  p.setup = function() {
    p.createCanvas(600, 600).parent("p5jsketchcon6");
    p.noStroke();
  }

  p.draw = function() {
    p.background(0);
    timer += p.deltaTime/1000;
    if(timer >= 3) {
      timer = 3;
    }

    let timerOver = timer / 3;

    for (let i = 0; i < timeIPlayedMyIpadData.length; i++) {
      let useTimeHeight = timeIPlayedMyIpadData[i] * timerOver;
      let posY = 0;
      p.fill(255); 
      p.rect(20 + i * spacing, posY, 20, useTimeHeight);

      for (let j = 0; j < softwareUseData[i].length; j++) {
        p.fill(colorsOfSoftware[j]);
        let softwareHeight = softwareUseData[i][j] * timerOver;
        p.rect(20 + i * spacing, posY, 20, softwareHeight);
        posY += softwareHeight;
      }
    }
  }
}

new p5(sketch6);