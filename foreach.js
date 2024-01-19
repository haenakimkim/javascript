/* forEach 와 map*/
const members=['영훈','윤수','동욱','태호'];
for(let member of members){
  console.log`${member}님이 입장했습니다.`);
}

members.forEach(function(member){
  console.log(`${member}님이 입장하셨습니다.`);
});

members.forEach((member,index)=>{
  console.log(`${i} ${member}님이 입장하셨습니다.`);
});

const firstNames = ['영훈', '유누','동욱','태호'];
const lastNames=['강', '이','순','성'];
/*['영훈', '유누','동욱','태호']*/firstNames.forEach/*map*/((firstNAme,i,arr)=>{
  console.log(`${lastNames[i]${firstName}님이 입장하셨습니다.`
  console.log(arr);
});