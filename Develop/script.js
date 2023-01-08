// Assignment Code
var generateBtn = document.querySelector('#generate');
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

var allCharPool = [
  [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ],
  [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'],
];

var charactersArr = [];
var upperAlphabetChars = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
var lowerAlphabetChars = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
var numbersArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
var passwordArrayCharacters = [];
var deniedCharacters = [];
var generatedPassword = [];
// * --------------- END OF GLOBAL VARIABLES ---------------------------------------------

// Write password to the #password input
function writePassword() {
  var passwordLengthPrompt = prompt('How long do you want your password?');
  var passwordLength = parseInt(passwordLengthPrompt);

  if (passwordLength >= 8 && passwordLength <= 128) {
    alert(`Your password will be ${passwordLength} characters.`);
  } else {
    alert('Your password must be between 8 and 128 characters in length.');
    return;
  }
  // * CONFIRM CHARACTERS TO BE USED * //
  var confirmLowerCase = confirm(
    'Do you want lowercase letters in your password?'
  );
  var confirmUpperCase = confirm(
    'Do you want uppercase letters in your password?'
  );
  var confirmNumbers = confirm('Do you want numbers in your password?');
  var confirmSpecialChars = confirm(
    'Do you want special characters in your password?'
  );

  if (confirmLowerCase) {
    charactersArr.push(lowerAlphabetChars);
  }
  if (confirmUpperCase) {
    charactersArr.push(upperAlphabetChars);
  }
  if (confirmNumbers) {
    charactersArr.push(numbersArr);
  }
  if (confirmSpecialChars) {
    charactersArr.push(specialChars);
  }
  if (
    confirmLowerCase === false &&
    confirmUpperCase === false &&
    confirmNumbers === false &&
    confirmSpecialChars === false
  ) {
    alert(
      'You must select at least one parameter to generate a password. Refresh the page and try again!'
    );
  }

  for (i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * charactersArr.length);
    var randomSelect = Math.floor(
      Math.random() * charactersArr[randomIndex].length
    );
    var randomSelectedCharacter = charactersArr[randomIndex][randomSelect];
    passwordArrayCharacters.push(randomSelectedCharacter);
    generatedPassword = passwordArrayCharacters.join('');
  }

  var passwordText = document.querySelector('#password');
  passwordText.value = generatedPassword;
}
