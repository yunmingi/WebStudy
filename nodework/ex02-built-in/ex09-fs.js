/*
fs모듈
*/

//1.파일에 쓰기(write)
//const fs = request('fs');

//const content = 'Hello~World!';
//fs.writeFile('exam.txt', content, 'utf-8',(err)=>{
 //   if(err){
   //     console.error('파일 쓰기 에러',err);
     //   return;
    //}
    //console.log('파일 쓰기 성공');
//});

//2.파일 읽기 

fs.readFile('exam.txt','utf8',(err,data)=> {
 if(err){
    console.log('파일 읽기 에러:',err);
    return;
 }
 console.log('파일로부터 읽은 데이터:', data);
})