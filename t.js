//조건 연산자
//조건 ? truthy할때 표현식 : false할때 표현식

const CUT_OFF =80;
function passChecker(score){
  return score > CUT_OFF ? '합격' : '불합격'
}
console.log(passChecker(75));


//sparead구문
const numbers =[1,2,3];
console.log(numbers);
console.log(...numbers);
console.log(1,2,3);



//sparead구문
const webpublishing =['html', 'css'];
const interactiveweb= [...webpublishing];
interactiveweb.push('javascript')
console.log (webpublishing);
console.log(interactiveweb);



