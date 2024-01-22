//some과 every
const numbers = [1,3,5,7,9];

//some : 조건을 만족하는 요소가 1개 이상 있는지
const someReturn=numbers.some((el)=>el>5);

//e(very: 모든 요소가 조건을 만족하는지
const everyReturn = numbers.every((el)=>>5);

console.log('some',someReturn);
console.log('every',everyReturn);

const someReturn = numbers.some((el,i)=>{
  console.log('every:',i);
  return el >5;
});
//조건을 만족하지 않는 요소가 1개 이상 있는지
const everyReturn = numbers.some((el,i)=>{
  console.log('every:',i);
  return el >5;
});
console.log('some:',someReturn);
console.log('every:'everyReturn);