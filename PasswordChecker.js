// input, // passw check status, show final pic, passwdoor image status
class PasswordChecker {
  constructor(inputElement) {
    this.inputElement = inputElement;
    this.wrongPassword = false;
    this.finalEndGray = false;
    this.passwdoorImageDisplayed = true;
// add listener when player press enter, check the password
    this.inputElement.elt.addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        console.log('Enter key pressed');
        this.checkPassword();
      }
    });
  }
checkPassword() {
  let inputValue = this.inputElement.value();
  console.log('Input Value:', inputValue);
  
  if (inputValue.length === 5) {
// right password!
    if (inputValue === "61060") {
      console.log('Password Correct'); 
      this.finalEndGray = true;
      this.inputElement.hide();
      passwdoorImageDisplayed = false;
      this.wrongPassword = false;
//wrong password
    } else {
      console.log('Password Incorrect');
      this.wrongPassword = true;
      this.inputElement.value("");
    }
  } else {
    console.log('Password Length Incorrect');
    this.wrongPassword = false;
  }
}

// show wrong message texts
  showErrorMessage() {
    if (this.wrongPassword) {
      fill(255, 0, 0);
      textSize(20);
      textAlign(CENTER);
      text("Try Again. It's wrong.", width / 2, 100);
    }
  }
}