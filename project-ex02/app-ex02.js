/*
douzone-bipa-math npm 모듈 테스트(모듈 패키지: 로컬 배포)



$ npm i ../douzone-wlstjr1123-math
명령으로 설치 후 테스트 할 것
*/

var dzMath = require('douzone-wlstjr1123-math');

console.log(dzMath.sum(10, 20, 30, 40, 50));
console.log(dzMath.max(10, 20, 30, 40, 50));
console.log(dzMath.min(10, 20, 30, 40, 50));