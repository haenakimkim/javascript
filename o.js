//배열의 요소로 함수를 선언하고 접근한다

const myArray = [
  'codeit',
  2017,
  true,
  function(name){
    console.log(`Hi! $(name)`);
  },
];
myArray[3]('Codeit')

//파라미터를 전달하는 부분에서 함수를 선언 
const myBtn = document.querySelector('#myBtn');

if (myBtn) {
  myBtn.addEventListener('click',function(){
  console.log('button is clicked!');
}); 
} else{
  console.error
}
//미리선언된 함수를 전달하면서 조건에 따라 나중에 호출 안호출
function makeQuiz(quiz,answer,success,fail){
  if(prompt(quiz)===answer){
    console.log(success());
  }else {
    console.log(fail());
  }
  };
function getSuccess() {
  return '정답!';
}
function getFail(){
  return '오답!';
};

const question = '5 + 3 = ? ' ;

makeQuiz(question, '8', getSuccess, getFail);