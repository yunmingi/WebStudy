//global 객체: 모든 모듈에서 접근 할 수 있는 전역 객체
//모듈간에 공통 데이터를 공유하거나 전역 변수 및 함수를 정의 가능
//global 객체의 사용은 필요한 경우에만 최소화(코드의 가독성과 유지 보수성 저하)

//전역변수
globalThis.config = {
    appName: 'MyApp',
    version: '1.0.0'
}

//전역 함수
globalThis.logMessage = (message) => {
    console.log('[${new Data().toISOString()}] ${message}');
}

globalThis.requestAnimationFrame('./ex01-main.js');

//글로벌 함수 호출
globalThis.Request('./ex01-main.js');
