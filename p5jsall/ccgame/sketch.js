//restart
let restartButton;

// Beginning variables
let clickCount = 0;
let currentScene = 1;
let showBlackScreen = false;
let blackScreenStartTime;
let fadeIn = false;
let fadeInStartTime;
let alphaValue = 0;
let userInput = "";
let inputActive = false;
let passwordChecker;
let endGrayImage;

// Items boolean (click status)
let mirrorClicked = false;
let pic1Clicked = false;
let pic2Clicked = false;
let key1Clicked = false;
let key1Displayed = false;
let boxClicked = false;
let dresserClicked = false; 
let plantClicked = false; 
let hammer1Clicked = false;
let rugClicked = false;
let passwdoorImageDisplayed = false;

// Pictures in files
let door, bench, plant, dresser, rug, pic1, pic2, light, gameditu, mirror, box, key1, hammer1, passwdoor;
let p5st1, p5st2, p5st3;
let inputShown;

// Preload all the pictures
function preload() {
  p5st1 = loadImage('p5st1.jpg');
  p5st2 = loadImage('p5st2.jpg');
  p5st3 = loadImage('p5st3.jpg');
  door = loadImage('door.png');
  bench = loadImage('bench.png');
  plant = loadImage('plant.png');
  dresser = loadImage('dresser.png');
  rug = loadImage('rug.png');
  pic1 = loadImage('pic1.png'); 
  pic2 = loadImage('pic2.png'); 
  light = loadImage('light.png');
  mirror = loadImage('mirror.png'); 
  box = loadImage('box.png'); 
  gameditu = loadImage('gameditu.jpg');
  key1 = loadImage('Key1.jpg');
  hammer1 = loadImage('Hammer1.jpg');
  passwdoor = loadImage('passwdoor.jpg');
  endGrayImage = loadImage("EndGray.jpg"); 
}

//set up password
function setup() {
  createCanvas(600, 400);
  inputPassw = createInput();
  inputPassw.position(220,160);
  inputPassw.size(150);
  inputPassw.attribute('placeholder', 'Password -----');
  inputPassw.hide();
  passwordChecker = new PasswordChecker(inputPassw);
}

function draw() {
  // password check and turns to final and restart
  if (passwordChecker.finalEndGray) {
    image(endGrayImage, 0, 0, width, height);
     // create reset button
    if (!restartButton) {
      restartButton = createButton('Restart Game');
      restartButton.position(10, 10);
      restartButton.mousePressed(restartGame);
    }
    return;
  }

// remove restart button other than endgray page
  if (restartButton && !passwordChecker.finalEndGray) {
    restartButton.remove();
    restartButton = null;
  }

// password door image
  if (passwdoorImageDisplayed) {
    image(passwdoor, 0, 0, width, height);
    if (!inputShown) {
      inputPassw.show();
      inputShown = true;
    }
    passwordChecker.showErrorMessage();
    return; 
  } else {
    if (inputShown) {
      inputPassw.hide();
      inputShown = false;
    }
// reset the wrong password sign
    passwordChecker.wrongPassword = false; 
  }

// black screen for beginning
  if (showBlackScreen) {
    if (millis() - blackScreenStartTime > 1000) {
      showBlackScreen = false;
      fadeIn = true;
      fadeInStartTime = millis();
    } else {
      background(0);
      return;
    }
// fade into the main page
  } else if (fadeIn) {
    let elapsedTime = millis() - fadeInStartTime;
    alphaValue = map(elapsedTime, 0, 2000, 0, 255);
    if (alphaValue >= 255) {
      alphaValue = 255;
      fadeIn = false;
    }
    background(255);
    tint(255, alphaValue);
    displayAllImages();
    noTint();
  } 
// scene change for beginning
  else {
    background(255);
    if (currentScene <= 3) {
      switch (currentScene) {
        case 1:
          image(p5st1, 0, 0, width, height);
          break;
        case 2:
          image(p5st2, 0, 0, width, height);
          break;
        case 3:
          image(p5st3, 0, 0, width, height);
          break;
      }
    } 
// mirror/pic1/pic2/box/plant,texts
    else {
      if (mirrorClicked) {
        image(mirror, 0, 0, width, height);
        fill(0);
        textSize(16);
        text("Standing here makes me notice the number of light bulbs I see.", 50, 380);
      } 
      else if (pic1Clicked) {
        image(pic1, 0, 0, width, height);
        fill(0);
        textSize(16);
        text("Passwords are listed in ascending order.", 50, 380);
      } 
      else if (pic2Clicked) {
        image(pic2, 0, 0, width, height);
        fill(0);
        textSize(16);
        text("There are______ items in this room.", 50, 380);
      } 
      else if (key1Displayed) {
        image(key1, 0, 0, width, height);
      } 
      else if (boxClicked) {
        image(box, 0, 0, width, height);
        fill(0);
        textSize(16);
        if (key1Clicked) {
          text("?Nothing Inside?", 50, 380);
        } else {
          text("I need something to open it", 50, 380);
        }
      } 
      else if (dresserClicked) {
        image(hammer1, 0, 0, width, height); 
      } 
      else if (plantClicked) {
        image(plant, 0, 0, width, height); 
        fill(0);
        textSize(16);
        if (hammer1Clicked) {
          text("Believe or not, this plant actually has 60 leaves", 50, 380);
        } else {
          text("There are some words inside this vase...", 50, 380);
        }
      } 
      // MAIN GAME PAGE!!!
      else {
        displayAllImages();
      }
    }
  }
}

function restartGame() {
//reset all the variables, boolean
  clickCount = 0;
  currentScene = 1;
  showBlackScreen = false;
  blackScreenStartTime = 0;
  fadeIn = false;
  fadeInStartTime = 0;
  alphaValue = 0;
  userInput = "";
  inputActive = false;
  inputShown = false;

// items boolean (click status)
  mirrorClicked = false;
  pic1Clicked = false;
  pic2Clicked = false;
  key1Clicked = false;
  key1Displayed = false;
  boxClicked = false;
  dresserClicked = false; 
  plantClicked = false; 
  hammer1Clicked = false;
  rugClicked = false;
  passwdoorImageDisplayed = false; 
  
// reset status of password checker
  passwordChecker.wrongPassword = false;
  passwordChecker.finalEndGray = false;
  inputPassw.value('');
  inputPassw.hide();

// remove restart button in other page
  if (restartButton) {
    restartButton.remove();
    restartButton = null;
  }
}

// show all the images, which is the main page
function displayAllImages() {
  image(gameditu, 0, 0, width, height);
  image(door, 0, 0, width, height);
  image(bench, 0, 0, width, height);
  image(plant, 0, 0, width, height);
  image(dresser, 0, 0, width, height);
  image(rug, 0, 0, width, height);
  image(pic1, 0, 0, width, height);
  image(pic2, 0, 0, width, height);
  image(light, 0, 0, width, height);
  image(mirror, 0, 0, width, height);
  image(box, 0, 0, width, height);
}

function mousePressed() {
  // password door area
  if (!passwdoorImageDisplayed && currentScene > 3 && mouseX >= 10 && mouseX <= 70 && mouseY >= 146 && mouseY <= 357) {
    passwdoorImageDisplayed = true;
  } 
  // back to home page
  else if (passwdoorImageDisplayed && mouseX >= 10 && mouseX <= 70 && mouseY >= 146 && mouseY <= 357) {
    passwdoorImageDisplayed = false;
  }
  // Click in mirror area to show the mirror and words
  else if (currentScene > 3 && mouseX >= 540 && mouseX <= 570 && mouseY >= 105 && mouseY <= 226) {
    mirrorClicked = !mirrorClicked;
    pic1Clicked = false;
    pic2Clicked = false;
    key1Displayed = false;
    boxClicked = false;
    dresserClicked = false;
    plantClicked = false;
  } 
  // Click in pic1 area to show the pic1 and words
  else if (currentScene > 3 && mouseX >= 210 && mouseX <= 269 && mouseY >= 142 && mouseY <= 210) {
    pic1Clicked = !pic1Clicked;
    mirrorClicked = false;
    pic2Clicked = false;
    key1Displayed = false;
    boxClicked = false;
    dresserClicked = false;
    plantClicked = false;
  } 
  // Click in pic2 area to show the pic2 and words
  else if (currentScene > 3 && mouseX >= 285 && mouseX <= 395 && mouseY >= 50 && mouseY <= 160) {
    pic2Clicked = !pic2Clicked;
    mirrorClicked = false;
    pic1Clicked = false;
    key1Displayed = false;
    boxClicked = false;
    dresserClicked = false;
    plantClicked = false;
  } 
  // Click the rug, show the key (one time only)
  else if (currentScene > 3 && mouseX >= 340 && mouseX <= 515 && mouseY >= 318 && mouseY <= 358 && !key1Clicked) {
    key1Displayed = true;
    key1Clicked = true;
    mirrorClicked = false;
    pic1Clicked = false;
    pic2Clicked = false;
    boxClicked = false;
    dresserClicked = false;
    plantClicked = false;
  }   
  // Click in box area to show the box and words.
  else if (currentScene > 3 && mouseX >= 133 && mouseX <= 168 && mouseY >= 228 && mouseY <= 245) {
    boxClicked = !boxClicked;
    mirrorClicked = false;
    pic1Clicked = false;
    pic2Clicked = false;
    key1Displayed = false;
    dresserClicked = false;
    plantClicked = false;
  } 
  // Click the dresser, show the hammer (one time only)
  else if (currentScene > 3 && mouseX >= 310 && mouseX <= 459 && mouseY >= 177 && mouseY <= 282 && !hammer1Clicked) {
    dresserClicked = true;
    hammer1Clicked = true; 
    mirrorClicked = false;
    pic1Clicked = false;
    pic2Clicked = false;
    key1Displayed = false;
    boxClicked = false;
    plantClicked = false;
  } 
  // Click in plant area to show the plant and words 
  else if (currentScene > 3 && mouseX >= 470 && mouseX <= 530 && mouseY >= 30 && mouseY <= 286) {
    plantClicked = !plantClicked;
    mirrorClicked = false;
    pic1Clicked = false;
    pic2Clicked = false;
    key1Displayed = false;
    boxClicked = false;
    dresserClicked = false;
  } 
  // when key/hammer/rug/dresser/box/plant is displaying, clear all after click
  else if (key1Displayed || rugClicked || dresserClicked || boxClicked || plantClicked) {
    key1Displayed = false;
    rugClicked = false;
    dresserClicked = false;
    boxClicked = false;
    plantClicked = false;
  }
  // Beginning: click to go to the next picture
  else if (currentScene <= 3) {
    clickCount++;
    if (clickCount === 2) {
      currentScene++;
      clickCount = 0;
    }
    // turn black after three scenes have displayed
    if (currentScene > 3) {
      showBlackScreen = true;
      blackScreenStartTime = millis();
    }
  }
}