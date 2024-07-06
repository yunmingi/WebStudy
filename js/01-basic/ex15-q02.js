function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// 예시 호출
for(let i = 0; i <= 10; i++){
  f = factorial(i);
  console.log(`${i}! = ${f}`);
}

