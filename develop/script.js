// Variable Arrays
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "_", "=", "?"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

// An array of all characters
  var allCharacters = [];

// Final array returned as the password
  var password = [];

// Password Generator prompt box
  var characterCount = prompt("Choose a password length between 8 and 128 characters");
  
// Checks that user has entered a numerical value
  if (isNaN(characterCount)) {

    return "The value you entered is not accepted";
  }

  // Checks that user's character count selected in within the accepted range
  if (characterCount < 8 || characterCount > 128) {

    alert("Please choose a password length between 8 and 128 characters");

    return "Try Again";
  }

  // If "cancel" is chosen by the user, browser will not include upper case characters
  var upperCase = confirm("Do you want to include upper case characters?");

  // If "ok" is chosen by the user, browser will include upper case characters
  if (upperCase) {
    for (var i = 0; i < upper.length; i++) {
      allCharacters.push(upper[i]);
    }
  }

  // If "cancel" is chosen by the user, browser will not include lower case characters
  var lowerCase = confirm("Do you want to include lower case characters?")

  // If "ok" is chosen by the user, browser will include lower case characters
  if (lowerCase) {
    for (var j = 0; j < lower.length; j++) {
      allCharacters.push(lower[j]);
    }
  }

  // If "cancel" is chosen by the user, browser will not include special characters
  var specialCharacter = confirm("Do you want to include special characters?")

  // If "ok" is chosen by the user, browser will include special characters
  if (specialCharacter) {
    for (var k = 0; k < special.length; k++) {
      allCharacters.push(special[k]);
    }
  }

  // If "cancel" is chosen by the user, browser will not include numbers
  var numbers = confirm("Do you want to include numbers?")

  // If "ok" is chosen by the user, browser will include numbers
  if (numbers) {
    for (var l = 0; l < number.length; l++) {
      allCharacters.push(number[l]);
    }

    // Makes sure return's length is same amount chosen by characterCount function
    for (var f = 0; f < characterCount; f++) {

    // Pushes random selections from the allCharacters array into a password array
      password.push(allCharacters[Math.floor(Math.random() * allCharacters.length)]);
    }

    // Final returned password
    var final = password.join("");
    return final;
  }
}