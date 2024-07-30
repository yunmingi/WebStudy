let text1 = document.getElementById('make1');
let text2 = document.getElementById('make2');
let operator = document.getElementById('operator');
let result1 = document.getElementById('make4');

text1.setAttribute('placeholder', '숫자를 입력하세요.');
text2.setAttribute('placeholder', '숫자를 입력하세요.');
operator.setAttribute('placeholder', '사칙연산 중 하나로 입력해주세요.');

//숫자만 입력받게 하는 함수
function numberOnly(make1, make2) {
    if (isNaN(make1) || isNaN(make2)) {
        //typeof make1 !== 'number' || typeof make2 !== 'number'
        alert('숫자를 입력해주세요.');
        reset(); //숫자가 아닌 경우 입력필드 초기화 - 함수선언은 호이스팅 때문에 가능
        return false;
    }
    return true;
}
//연산자 함수
let calculate = () => {
    let var1 = text1.value;
    let var2 = text2.value;

    if (!numberOnly(var1, var2)) {
        //숫자가 아니면 함수 종료
        return;
    }
    let result = 0;

    switch (operator.value) {
        case '+':
            result = Number(var1) + Number(var2);
            break;
        case '-':
            result = Number(var1) - Number(var2);
            break;
        case 'x':
            result = Number(var1) * Number(var2);
            break;
        case '/':
            result = Number(var1) / Number(var2);
            break;
        default:
            alert('올바른 연산자를 입력해주세요.');
            break;
    }
    result1.value = result; //이렇게 넣어줘야 결과값에 올라간다.
    return result;
};

//초기화하기 버튼
let reset = () => {
    document.getElementById('make1').value = '';
    document.getElementById('make2').value = '';
    document.getElementById('operator').value = '';
    document.getElementById('make4').value = '';
};