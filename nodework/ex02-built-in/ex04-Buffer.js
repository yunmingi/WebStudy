//Buffer객체:바이너리 데이터를 다루기 위해 사용 

const buf1 = Buffer.alloc(5); //버퍼 생성
buf1.write('hello');//버퍼에 쓰기 
console.log(buf1);

const buf2 = Buffer.from('hello');
console.log(buf2);

console.log(buf1.toString());
console.log(buf1.toString('h2x'));
console.log(buf1.toString('base64'));
