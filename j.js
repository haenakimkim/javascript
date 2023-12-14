//참조형
let numbers1 =[1, 2, 3];
let numbers2 = numbers1.slice();
numbers2.push(4);
console.log(numbers1);
console.log(numbers2);

//object assign
let course1= {
  title:'파이썬',
  language:'Phyton'
};

let course2=Object.assign({},course1)
course2.title='알고리즘'

console.log(course1);
console.log(course2);

