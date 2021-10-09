'use strict';

let totalPoints = 0;

let username = prompt('Hello stranger, what is your name?'); // greeting prompt
console.log('Nice to meet you ' + username + '. Welcome to my page!');
alert('Nice to meet you ' + username + '. Welcome to my page! Please take a short quiz about me');

function questionOne() {
  let myName = prompt('Is my name Sergey?').toLowerCase(); // question 1
  if (myName === 'yes' || myName === 'y') {
    alert('That is correct!');
    totalPoints++;
    console.log('That is correct!');
  } else if (myName === 'no' || myName === 'n') {
    alert('Sorry, that is wrong. My name is Sergey');
    console.log('Sorry, that is wrong. My name is Sergey');
  } else {
    alert('Please answer \'Yes\' or \'No\'');
  }
}

questionOne();

function questionTwo() {
  let from = prompt('Am I from Portland?').toLowerCase(); // question 2
  if (from === 'no' || from === 'n') {
    alert('That is correct! I am from Seattle');
    totalPoints++;
    console.log('That is correct!');
  } else if (from === 'yes' || from === 'y') {
    alert('Sorry, that is wrong. I am from Seattle');
    console.log('Sorry, that is wrong. I am from Seattle');
  } else {
    alert('Please answer \'Yes\' or \'No\'');
  }
}

questionTwo();

function questionThree() {
  let fromo = prompt('Was I born in Ukraine?').toLowerCase(); // question 3
  if (fromo === 'yes' || fromo === 'y') {
    alert('That is correct!');
    totalPoints++;
    console.log('That is correct!');
  } else if (fromo === 'no' || fromo === 'n') {
    alert('Sorry, that is wrong. I was born in Ukraine');
    console.log('Sorry, that is wrong. I was born in Ukraine');
  } else {
    alert('Please answer \'Yes\' or \'No\'');
  }
}

questionThree();

function questionFour() {
  let cat = prompt('Do I have a cat?').toLowerCase(); // question 4
  if (cat === 'yes' || cat === 'y') {
    alert('That is correct! His name is Frodo');
    totalPoints++;
    console.log('That is correct!');
  } else if (cat === 'no' || cat === 'n') {
    alert('Sorry, that is wrong. I do have a cat and his name is Frodo');
    console.log('Sorry, that is wrong. I do have a cat and his name is Frodo');
  } else {
    alert('Please answer \'Yes\' or \'No\'');
  }
}

questionFour();

function questionFive() {
  let lang = prompt('Do I speak Spanish?').toLowerCase(); // question 5
  if (lang === 'yes' || lang === 'y') {
    alert('I wish I did! But unfortunately I don\'t');
    console.log('That is correct!');
  } else if (lang === 'no' || lang === 'n') {
    alert('You are right, I don\'t speak Spanish but I wish I did!');
    totalPoints++;
    console.log('You are right, I don\'t speak Spanish but I wish I did!');
  } else {
    alert('Please answer \'Yes\' or \'No\'');
  }
}

questionFive();

alert('Thanks for taking the quiz ' + username + ' . You did great');
document.getElementById('greeting').innerHTML = 'Welcome ' + username + '!';


let attempts = 4; // question 6
let currAttempt = 1;
let rightAnsw = 72;
let answ = parseInt(prompt(`Guess a number. You have ${attempts} attempts`));

while (currAttempt < attempts && answ !== rightAnsw) {
  if (answ < 40) {
    alert('Too low, guess again');
  } else if (answ >= 40 && answ < 72) {
    alert('Still too low but you are getting closer!');
  } else if (answ > 72 && answ < 80) {
    alert('Still too high but you are getting closer!');
  } else {
    alert('Too high, guess again');
  }

  answ = parseInt(prompt(`Guess a number. You have ${attempts - currAttempt} attempts left`));
  currAttempt++;
}

if (answ === rightAnsw) {
  alert('You won! The correct answer is ' + rightAnsw);
  totalPoints++;
} else {
  alert('You\'ve reached the maximum number of atteempts. The correct answer is ' + rightAnsw);
}

questionSix();

let attemptsTwo = 6; // question 7
// let currAttemptTwo = 1;
let rightAnswers = ['Florida', 'Washington', 'California', 'Montana', 'Hawaii', 'Oregon'];
let isGuessedCorr = false;
let stringStates = '';

for (let i = 0; i < attemptsTwo; i++) {
  let userAnsw = prompt(`Guess states that I have been to. You have ${attemptsTwo - i} attempts left.`).toLowerCase();

  for (let j = 0; j < rightAnswers.length; j++) {

    if (userAnsw === rightAnswers[j].toLowerCase()) {
      isGuessedCorr = true;
    }
  }

  if (isGuessedCorr) {

    alert('Great job! That is correct');
    break;

  } else {
    alert('Sorry, that is wrong. Guess again.');
  }
}

if (isGuessedCorr) {
  totalPoints++;
}
for (let k = 0; k < rightAnswers.length; k++) {
  stringStates += rightAnswers[k] + ' ';
}

alert(`The right answers are: ${stringStates}.`);

alert(`You answered ${totalPoints} questions out of 7 correctly. Good job!`);
