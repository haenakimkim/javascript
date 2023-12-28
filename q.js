//argument
function PrintArguments(a,b,c){
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(argumnets);
  console.log('-------------');

}

PrintArguments('Youg','Mark', 'Koby');
PrintArguments('Captain');
PrintArguments('Jayden','Scott');
PrintArguments('Suri','Jack','Joy')


function PrintArguments(a,b,c){
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(argumnets.lenght);
  console.log('-------------');

}

PrintArguments('Youg','Mark', 'Koby');
PrintArguments('Captain');
PrintArguments('Jayden','Scott');
PrintArguments('Suri','Jack','Joy')

function PrintArguments(a,b,c){
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(c);
  console.log(argumnets.lenght);
  console.log('-------------');

}

PrintArguments('Youg','Mark', 'Koby');
PrintArguments('Captain');
PrintArguments('Jayden','Scott');
PrintArguments('Suri','Jack','Joy')

function PrintArguments(a,b,c){
  for (const arg of arguments) {
    console.log(arg);
  }
  console.log('-------------');

}

PrintArguments('Youg','Mark', 'Koby');
PrintArguments('Captain');
PrintArguments('Jayden','Scott');
PrintArguments('Suri','Jack','Joy')
