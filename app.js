'use strict';

var useName = prompt('Hello what is your name?');
console.log('user name',useName);

var countAnsw = 0;

function firstFive() {

  var arrQs = [ 'Hello ' + useName + ' I are have a couple question for you! You should answer Yes or No. Ok? ',
                'Do you think I am bilingual?',
                'Do I live in apartment?',
                'Do you thing I have a job expirience',
                'Do you think I want to be a developer?' ];
  var arrAs = [true,true,true,false,true];
  var arrTrue = ['y','yes','yep'];
  var arrFalse = ['n','no'];

  for (var i = 0; i < arrQs.length; ++i) {
    //take input
    var answer = prompt(arrQs[i]);
    answer = answer.toLowerCase();

    //validate input
    var longerArrLn = arrFalse.length;
    if (arrTrue.length > arrFalse.length) longerArrLn = arrTrue.length;

    var validAns = false;
    for (var j = 0; j < longerArrLn; ++j) {
      if (answer === arrTrue[j]) {
        validAns = true;
        answer = true;
        break;
      } else if (answer === arrFalse[j]) {
        validAns = true;
        answer = false;
        break;
      }
    }
    if (!validAns) {
      alert('Invalid input. Please enter \'yes\' or \'no\'');
      --i;
    } else if ((arrAs[i] && answer) || (!arrAs[i] && !answer)) alert('Correct!');
    else alert('Bzzt! Wrong!');
  }
}

//question 6
function qSix() {
  var number;
  var counter = 0;
  while(number != 26) {
    console.log('age', number);
    number = (prompt('how old am i?'));
    if (number < 26) {
      alert('Thanks. But I am older than' + number);
      counter++;
    } else if (number > 26) {
      alert('Sorry. Not so old.');
      counter++;
    } else if (number === NaN || number === null){
      alert('please enter a number');
      counter++;
    }
    if (number === 26) {
      alert('You are right');
      countAnsw++;
      break;
    }
    if (counter === 4){
      alert ('we are done with this question. Sorry. Maybe next time');
      break;
    }
  }
}

//qyestion 7
function qSeven() {
  var country = ['ukraine','italy'];
  var count = 0;
  var flag;

  while (count < 7) {
    count++;
    var answer = prompt('Where I used to live before?');
    console.log('country: ', answer);
    for (var i = 0; i < country.length; i++) {
      if (answer.toLowerCase() === country[i]) {
        alert('Correct');
        flag = true;
        countAnsw++;
        break;
      }
    }

    if (!flag) alert('Incorrect');
    if (flag) break;
  }
}


firstFive();
qSix();
qSeven();

//global counter

alert(useName + ' You made ' + countAnsw + ' right answers');
