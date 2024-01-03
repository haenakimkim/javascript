//this

function getFullName(){
  return `${this.firstName} ${this.lastName}`;}
  const user={
    firstName:'Tess',
    lastName:'Jang',
    getFullName: getFullName,

  };

  const admin={
    firstName: 'Alex',
    lastName: 'Kim',
    getFullName:getFullName,

  };

  console.log(user. getFullName());
  console.log(admin.getFullName());