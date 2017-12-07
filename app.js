'use strict';

var useName = prompt('Hello what is your name?');
console.log('user name',useName);

var countAnsw = 0;


// question 1
var question1= prompt('Hello '+ useName + ' I are have a couple question for you! You should answer Yes or No. Ok? ');
console.log('1st question', question1);

if (question1.toLowerCase() === 'yes' || question1.toLowerCase() === 'y' ) {
  alert('Thank You');
  countAnsw++
}

if (question1.toLowerCase() === 'no' || question1.toLowerCase() === 'n' || question1.toLowerCase === 'none') {
  alert ('I have to ask you any way');
}



//question 2

var language= prompt('Do you think I am bilingual?');
console.log('bilingual', language);

if (language.toLowerCase() === 'yes' || language.toLowerCase() === 'y' ) {
  alert('You are tight. I do speak a couple languages');
  countAnsw++
}

if (language.toLowerCase() === 'no' || language.toLowerCase() === 'n') {
  alert('No. I am speak a couple languages');
}


//question 3

var apart= prompt('Do I live in apartment?');
console.log("apartment : ", apart);

if (apart.toUpperCase() === 'YES' || apart.toUpperCase() === 'Y') {
  alert('Yes. You are right about that');
  countAnsw++
}
if (apart.toUpperCase() === 'NO'|| apart.toUpperCase() === 'N') {
  alert ('Wrong answer');
}


//question 3

var expir= prompt('Do you thing I have a job expirience');
console.log('expirience', expir);

if (expir.toLowerCase() === 'yes' || expir.toLowerCase() === 'y') {
  alert('No. I don\'t have any expirience in IT');
  countAnsw++
}

if (expir.toLowerCase() === 'no' || expir.toLowerCase() === 'n') {
  alert('Coret answer');
}

//question 4

var goal=prompt('Do you think I want to be a developer?');
console.log('goal',goal);

if (goal.toLowerCase() === 'yes' || goal.toLowerCase() === 'y') {
alert('You are correct. I want to bo a developer');
countAnsw++
}
if (goal.toLowerCase() === 'no' || goal.toLowerCase() === 'n') {
alert('Wrong answer');
}

//question 6

var number;
var counter = 0;
while(number != 26) {
  console.log('age', number)
  number = (prompt('how old am i?'));
  if(number<26) {
    alert('Thanks. But I am older than' + number);
    counter++
  } else if (number> 26) {
    alert('Sorry. Not so old.');
    counter++
  } else if (number === NaN || number === null){
    alert('please enter a number');
    counter++
  }
if (number === 26) {
alert('You are right');
countAnsw++
break;
}
if (counter === 4){
alert ('we are done with this question. Sorry. Maybe next time')
break;
}
}

//qyestion 7
  var country = ['ukraine','italy'];
  var count=0;
  var flag

  while (count<7) {
    var answer = prompt("Where I used to live before?");
    console.log('country', answer);
    for (var i=0; i < country.length; i++) {
    if (answer.toLowerCase() === country[i]) {
      alert('Correct');
      flag = true;
      countAnsw++
    } else if (!flag) {
      alert('Incorrect');
      count++
      break;
      }
    }
   }

   if (count === 6) {
     alert('next time')
     break;
     }

//global counter

  alert(useName +' You made ' + countAnsw + ' right answers');
