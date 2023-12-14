
//함수사용
function cloneObject(object){
  let temp= {};
  for(let key in object) {
    temp[key]=object[key];
  }
  return temp;
};

let course1 = {
  title: '파이썬',
  language: 'python'
};
let course2=cloneObject(course1);
let course3=cloneObject(course1);


course2.title='알고리즘'
course3.title= '파이선'

console.log (course1);
console.log(course2);


