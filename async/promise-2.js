// setTime.js의 task함수 프라미스로
const taskA = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(a + b), 7000);
  });
};

const taskB = (a) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a * 2);
    }, 5000);
  });
};
const taskC = (a) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a * -10);
    }, 3000);
  });
};

// 아래의 콜백헬은 에러파악과 가독성을 위해 좋지 않은 형태 => Promise로 더 보기 좋게 수정
// Before
taskA(3, 10, (resA) => {
  console.log("[resA]:", resA); //13
  taskB(resA, (resB) => {
    console.log("[resB]:", resB); //26
    taskC(resB, (resC) => {
      console.log("[resC]:", resC); // -260
    });
  });
});

// After - 프라미스 then체이닝
// Point
// 1. resolve에 넘겨준 값이 then메서드의 인자로 전달
// 2. then메서드의 콜백이 Promise를 리턴해야 계속해서 then chaining이 가능
//7초 후 이행(resolved)됨
taskA(3, 10)
  .then((resA) => {
    console.log("[taskA]:", resA); // resA =>13:taskA함수에서 resolve에 넘겨준 값
    return taskB(resA); //5초 후 이행
  })
  .then((resB) => {
    console.log("[taskB]:", resB); // resB=>26:taskB함수에서 resolve에 넘겨준 값
    return taskC(resB); // 3초 후 이행
  })
  .then((resC) => {
    console.log("[taskC]:", resC); // resC=>-260:taskC함수에서 resolve에 넘겨준 값
  });
// 모두 실행되기까지 7 + 5 + 3초만큼 걸림

const res = delay(3000).then(() => {
  return "hello Seoul2";
});
