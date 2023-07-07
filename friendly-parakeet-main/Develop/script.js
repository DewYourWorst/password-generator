// Assignment code here

function randomAllLetter() {
  var letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!#$%& *+,-./:;<=>?@[\]^_`{|}~';
  var randomNum = Math.round(Math.random() * 91 );
  var randomLetter = letters.charAt(randomNum);
  return randomLetter;
};
function randomNoSpecLetter() {
  var letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
  var randomNum = Math.round(Math.random() * 62 );
  var randomLetter = letters.charAt(randomNum);
  return randomLetter;
};
function randomNoUpperLetter() {
  var letters = 'abcdefghijklmnopqrstuvwxyz1234567890!#$%& *+,-./:;<=>?@[\]^_`{|}~';
  var randomNum = Math.round(Math.random() * 65 );
  var randomLetter = letters.charAt(randomNum);
  return randomLetter;
};
function randomNoLowerLetter() {
  var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!#$%& *+,-./:;<=>?@[\]^_`{|}~';
  var randomNum = Math.round(Math.random() * 60 );
  var randomLetter = letters.charAt(randomNum);
  return randomLetter;
};
function randomNoSpecNoCapLetter() {
  var letters = 'abcdefghijklmnopqrstuvwxyz1234567890';
  var randomNum = Math.round(Math.random() * 36 );
  var randomLetter = letters.charAt(randomNum);
  return randomLetter;
};
function randomNoSpecNoLowerLetter() {
  var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
  var randomNum = Math.round(Math.random() * 36 );
  var randomLetter = letters.charAt(randomNum);
  return randomLetter;
};
function randomNoSpecNoNumLetter() {
  var letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var randomNum = Math.round(Math.random() * 52 );
  var randomLetter = letters.charAt(randomNum);
  return randomLetter;
};
function allTrue(userAmt) {
  console.log(userAmt)
  var length = userAmt
  var charList = ""
  for(var i = 0; i < length; i++){
    charList = charList.concat(randomAllLetter())
  }
  return charList;
};

function beginPrompt(){
  var userAmt = prompt("How many characters would you like in your password? 8-128")
  var x = randomNoSpecNoNumLetter(userAmt)
  alert(userAmt + " Characters will be used for your password.")
  var userSpec = prompt("Would you like special characters in your password? Yes or No")
  if(userSpec == "Yes"){
    alert("Special characters will be included.")
  } else {
    alert("Special characters will not be included.")
  }
  var userNum = prompt("Would you like numbers in your password? Yes or No?")
  if(userNum == "Yes"){
    alert("Numbers will be included.")
  } else {
    alert("Numbers will not be included.")
  }
  var userUpper = prompt("Would you like upper-case characters in your password? Yes or No")
  if(userUpper == "Yes"){
    alert("Upper-case characters will be included.")
  } else {
    alert("Upper-case characters will not be included.")
  }
  var userLower = prompt("Would you like lower-case characters in your password? Yes or No")
  if(userLower == "Yes"){
    alert("Lower-case characters will be included.")
  } else {
    alert("lower-case characters will not be included.")
  }
  if(userLower == "Yes" && userUpper == "Yes" && userNum == "Yes" && userSpec == "Yes") {
    document.querySelector("#password").textContent = allTrue(userAmt)
    console.log(userAmt)
    console.log(allTrue(userAmt))
  }
}

console.log(document.querySelector("#password"))

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
