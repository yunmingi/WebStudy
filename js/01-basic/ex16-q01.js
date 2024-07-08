// 로또 예상 번호 만들기

// Array 활용(index만 사용하기)
let numbers = [0, 0, 0, 0, 0, 0]; // 6개의 요소를 가진 Array 생성

// 난수 저장(로또 번호 저장하기) - ★여기를 수정해서 중복값이 없도록 만드시오!★
// for(let i = 0; i < numbers.length; i++){
//   numbers[i] = Math.floor(Math.random() * 45 + 1); //난수 저장
// }

function myrand(range, start){ //range: 갯수, start: 시작값
  return Math.floor(Math.random() * range + start);
}

for(let i = 0; i < numbers.length; i++){
  numbers[i] = myrand(45, 1); //난수 저장
  console.log('뽑은 번호:', numbers[i]);
  for(let j = 0; j < i; j++){
    if(numbers[i] == numbers[j]){
      console.log('중복!');
      i--;
      break;
    }
  }
}

// 출력
for(let i = 0; i < numbers.length; i++){
  console.log(numbers[i]);
}


