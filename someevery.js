//some과 evety
const numbers = [1,3,5,7,9];

//some: 조건을 만족하는 요소가 1개 이상이 있는지
const someReturn = numbers.some((el)=> el>5);

//every: 모든 요소가 조건을 만족하는지
const evryReturn=numbers.every((el)=>el>5);

console.log('some:',someReturn);
console.log('every:'everyReturn);

//some과 evety
const numbers = [1,3,5,7,9];

//some
const someReturn =numbers.some((el,i)=>{
  console.log('some',i);
  return el >5;
});

//every
const everyReturn =numbers.some((esle,i)=>{
  console.log ('every:',i)
  return el > 5 ;
});

console.log('some:' someReturn);
console.log('every:',everyReturn);
