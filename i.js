let myVoca={
  addVoca: function (key, value){
    myVoca[key] = value;
  },
  deleteVoca: function(key) {
    delete myVoca[key];
  },
  printVoca: function (key){
    console.log(`"${key}"의 뜻은 "${myVoca[key]}"입니다.`);
  }, 
  };

//add Voca 메소드 코드
  myVoca.addVoca('parameter', '매개 변수');
  myVoca.addVoca('element', '요소');
  myVoca.addVoca('property', '속성');
  console.log(myVoca);

//deleteVoca 메소드 코드
  myVoca.deleteVoca('parameter');
  myVoca.deleteVoca('element');
  console.log(myVoca);

//printVoca 메소드 코드
  myVoca.printVoca('property');