//rest parameter

function printArgument(...args){
  for (const arg of args){
    console.log(arg);
  }
console.log('--------------')
}

printArgument ('Young','Mark','Koby');
printArgument('Captain');
printArgument('Jayden', 'Scott');

function Printrank(first, second, ...others) {
  console.log('코드잇 레이스 최종 결과');
  console.log(`우승: ${first}`);
  console.log(`준우승: ${second}`);
  for (const arg of others) {
    console.log(`참가자: ${arg}`);
  }
}

Printrank('Phil','Won','Emma','Min','Luke')