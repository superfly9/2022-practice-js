const taskA = (a, b, cb) => {
  setTimeout(() => {
    cb(a + b);
  }, 15000);
};

const taskB = (a, cb) => {
  setTimeout(() => {
    cb(a * 2);
  }, 5000);
};
const taskC = (a, cb) => {
  setTimeout(() => {
    cb(a * -10);
  }, 3000);
};
//ex1) 각각 따로 실행 - 비동기 실행의 결과가 다른 비동기 실행과 관련X

// taskA,B,C는 동시에 실행된다.함수 실행의 종료는 setTimeout에 넘긴 delay 작은 순서대로 발생(C=>B=>A)
console.time("TaskAll");
let callbackA = (res) => console.log("[task A]:", res);
taskA(1, 10, callbackA);

let callbackB = (res) => console.log("[task B]:", res);
taskB(1, callbackB);

let callbackC = (res) => console.log("[task C]:", res);

taskC(1, callbackC);
console.timeEnd("TaskAll");

// 실행 결과 => A,B,C 동시에 실행, 종료는 delay짧은 순서대로, 모두 종료되는 데 걸리는 시간(5초 - 가장 delay긴 함수의 종료시간만큼 소요)
// TaskAll: 0.798ms
// [task C]: -10
// [task B]: 2
// [task A]: 11

//ex2) 연관 되서 실행 -비동기 실행의 결과가 다른 비동기의 인자로 들어갈때(콜백 헬)
// taskA의 결과를 taskB에서도 쓰고, B의 처리결과를 C에서도 쓰고 싶을때
// A의 콜백 안에서 B를 실행하고, B의 콜백 안에서 C를 실행해야 -> 콜백 지옥이 발생 -> 가독성 및 디버깅에 안 좋다

// taskA(3, 10, (resA) => {
//   console.log("[resA]:", resA); //13
//   taskB(resA, (resB) => {
//     console.log("[resB]:", resB); //26
//     taskC(resB, (resC) => {
//       console.log("[resC]:", resC); // -260
//     });
//   });
// });

// 실행 결과  => 순서대로 A,B,C가 실행됨(ex1과 다르게 동시 실행X, 앞 선 함수가 실행 완료되야 그 안의 콜백이 실행됨,모든 함수 실행 종료되기까지 5+3+1초 만큼 걸림,모든 딜레이의 누적합만큼 소요)
// [resA]: 13
// [resB]: 26
// [resC]: -260
