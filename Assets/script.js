// Assignment Code
let generateBtn = document.querySelector("#generate");
//total number of lowercase 24, and total number of uppercase 24
let lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
let uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
//total of 10 numbers
let numbersCharacters = '0123456789'
//total of 6 special characters
let specialCharacters = '!@#$%*'.split('');
//setting the minimun and maximum and validation for lowercase, upercase and/or numbers
let charactersRules = [8, 128, 'false']

//my function here
function generatePassword() {
  let pwdTxt = [];
  let choiseCharacters = [];
  let pwdChoice = {
    charactersNum: 8,
    charactersLower: false,
    charactersUpper: false,
    charactersNumber: false,
    charactersSpecial: false,
  }

  //to keep track of the user choices
  let userChoice = parseInt(window.prompt('how many characters would you like for your password? between 8 - 128'));

  pwdChoice.charactersLower = window.confirm("add lowercase characters? OK for yes, Cancel for no");
  pwdChoice.charactersUpper = window.confirm("add uppercase characters? OK for yes, Cancel for no");
  pwdChoice.charactersNumber = window.confirm("add number characters? OK for yes, Cancel for no");
  pwdChoice.charactersSpecial = window.confirm("add special characters? OK for yes, Cancel for no");

  if ((userChoice >= charactersRules[0]) && (userChoice <= charactersRules[1])) {
    pwdChoice.charactersNum = userChoice;
  }

  //turning on validation of at least one choice
  if ((pwdChoice.charactersNum === isNaN) && (pwdChoice.charactersUpper === false) && (pwdChoice.charactersLower === false) && (pwdChoice.charactersSpecial === false)) {
    alert('you must select at least one!!')
  }

  //For the random selection of characters
  var upperKey = Math.floor((Math.random() * 23) + 1);
  var lowerKey = Math.floor((Math.random() * 23) + 1);
  var numberKey = Math.floor((Math.random() * 9) + 1);
  var specialKey = Math.floor((Math.random() * 5) + 1);

  for (let i = 0; i < (pwdChoice.charactersNum); i++) {
    var choiceKey = Math.floor((Math.random() * choiseCharacters.length) + 1);
    pwdTxt = pwdTxt.concat(specialCharacters[choiceKey]);
    //console.log(specialCharacters[choiceKey])
  }

  if (pwdChoice.charactersLower === true) {
    choiseCharacters = choiseCharacters.concat(lowercaseCharacters);
    pwdTxt = pwdTxt.concat(lowercaseCharacters[lowerKey]);
    console.log(pwdChoice.charactersLower);
  }

  if (pwdChoice.charactersUpper === true) {
    choiseCharacters = choiseCharacters.concat(uppercaseCharacters);
    pwdTxt = pwdTxt.concat(uppercaseCharacters[upperKey]);
    console.log(pwdChoice.charactersUpper);
  }

  if (pwdChoice.charactersNumber === true) {
    choiseCharacters = choiseCharacters.concat(numbersCharacters);
    pwdTxt = pwdTxt.concat(numbersCharacters[numberKey]);
    console.log(pwdChoice.charactersNumber);
  }
  if (pwdChoice.charactersSpecial === true) {
    choiseCharacters = choiseCharacters.concat(specialCharacters);
    pwdTxt = pwdTxt.concat(specialCharacters[specialKey]);
    console.log(pwdChoice.charactersSpecial);
  }

  var finalpassword = ''

  //let  countNum = pwdTxt.length;
  let countNum = pwdChoice.charactersNum;
  console.log(countNum);
  for (let i = 1; i < (pwdChoice.charactersNum); i++){
   finalpassword += choiseCharacters[(Math.floor(Math.random()* choiseCharacters.length)+1)];
  }
console.log(choiseCharacters)

  return finalpassword;
}
// Write password to the #password input
function writePassword() {
  console.log("click on")
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


