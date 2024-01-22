//filter와 find
const device=[
  {name 'GalaxyNote',brand:'Samsung'},
  {name 'MackbookPro',brand:'Apple'},
  {name 'ipad',brand:'Apple'},
  {name 'GalaxyWatch',brand:'Samsung'},
  {name 'iMac',brand:'Apple'},
  {name 'GalaxyyBuds',brand:'Samsung'},
  {name 'Gram',brand:'LG'},
  {name 'GAlaxyBook',brand:'Samsung'},
  {name 'SurfacePro',brand:'Microsoft'},
  {name 'Zenbook',brand:'Asus'},
  {name 'Macboo,Air',brand:'Apple'}.
];

const apples=devices.filter((el)=>el.brand==='Apple');
console.log(apples);

const myLaptop=devices.filter((el)=>el.name==='Gram');
console.log(...myLaptop);

const myLaptop=devices.find((el)=>el.name==='Apple');
console.log(myLaptop);
