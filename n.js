null ?? 'I'
undefined ?? 'Love'
'Codeit' ?? javascript

false || 'codeit'
false ?? 'codeit'

//변수와 스코프
//var 는 함수스코프 중복선언이 가능하다
//let, const는 블록스코프다

console.log(title);
var title= 'codeit';
console.log(title);

{let title = 'codeit';
console.log(title);}
console.log(title);