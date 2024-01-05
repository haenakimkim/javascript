//객체의 프로퍼티 간단하게 만드는 법
const user ={
  title:'Codeit',
  birth:2017,
  job:'프로그램 강사'
};

const title = 'codeit';
const birth= 2017;
const job = '프로그램 강사'

const user= {
  title,
  birth,
  job
};

console.log(user)
const user={
  ['code' + 'it']:'value'

};
console.log(user)

const propertyName='birth';
const getjob=()=>'job';
const codeit={
  ['topic'+'Name']:'ModernJavascript',
  [propertyName]:2017,
  [getjob()]:'프로그래밍강사' 

};
console.log(Codeit);
