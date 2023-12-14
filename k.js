//for..in
let course1 = {
  title: '파이썬',
  language: 'python'
};
let course2={};

for(let key in course1){
  course2[key]=course1[key];
}

course2.title='알고리즘'

console.log (course1);
console.log(course2);



