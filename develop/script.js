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

  var allCharacters = [];

  var password = [];

  var characterCount = prompt("Choose a password length between 8 and 128 characters");
  if (isNan(characterCount)) {

    return "The value you entered is not accepted";
  }

  if (characterCount < 8 || characterCount > 128) {

    alert("Please choose a password length between 8 and 128 characters");

    return "Try Again";
  }

  var upperCase = confirm("Do you want to include upper case characters?");

  if (upperCase) {
    for (var i = 0; i < upper.length; i++) {
      allCharacters.push(upper[i]);
    }
  }

  var lowerCase = confirm("Do you want to include lower case characters?")

  if (lowerCase) {
    for (var j = 0; j < lower.length; j++) {
      allCharacters.push(lower[j]);
    }
  }

  var specialCharacter = confirm("Do you want to include special characters?")

  if (specialCharacter) {
    for (var k = 0; k < special.length; k++) {
      allCharacters.push(special[k]);
    }
  }

  var numbers = confirm("Do you want to include numbers?")

  if (numbers) {
    for (var l = 0; l < number.length; l++) {
      allCharacters.push(number[l]);
    }

    for (var f = 0; f < characterCount; f++) {
      password.push(allCharacters[Math.floor(Math.random() * allCharacters.length)]);
    }

    var final = password.join("");
    return final;
  }
}