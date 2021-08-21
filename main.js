function check (){

let question1 = document.quiz.question1.value;
let question2 = document.quiz.question2.value;
let question3 = document.quiz.question3.value;
let correct = 0;

if(question1 == 'const'){
   correct++;
}
if(question2 == 'False'){
   correct++;
}
if(question3 == '1020'){
   correct++;
}


let pictures = ['img/win.gif', 'img/meh.gif', 'img/lose.gif'];
let message = ['You tried, try again', 'You can do better', 'You missed it all']

let score;

if(correct == 0){
   score = 2;
}
if(correct > 0 && correct < 3){
   score = 1;
}
if(correct == 3){
   score = 0;
}

document.getElementById('after_submit').style.visibility = 'visible';
document.getElementById('number_correct').innerHTML = 'You got' + correct + " correct!";
document.getElementById('message').innerHTML = message[score]
document.getElementById('picture').src = pictures[score]
}