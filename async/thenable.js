// Promise => thenable란 객체,
// thenable이란 : then이라는 메서드명을 가진 객체
// then핸들러의 return값 : Promise
// then핸들러의 실행 => 비동기적으로 진행

// Promise.resolve 함수는 이행된 Promise 를 반환

// 1.then 핸들러에서 프라미스를 반환하는 경우
// 이미 이행한 프로미스를 반환할 경우,then에서 반환한 프로미스는 그 프로미스의 결과값(resolve에 전달한 인자값)을 자신의 결과값으로 하여 이행합니다.
// ex)

const resolvedPromise = (str = "") => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Resolved ${str}`), 0);
  });
};
resolvedPromise()
  .then((res) => resolvedPromise("Second"))
  .then((res) => console.log("[Thenable]:", res)); // Resolved Second

// 2.then핸들러에서 값을 그대로 반환한 경우에는
// Promise.resolve(<핸들러에서 반환한 값>)을 반환하는 것과 같다.
// Promise.resolve =>이행된 Promise를 반환 =>then체이닝을 이어서 쓸 수 있다.
// 즉, 함수(then핸들러)가 값을 반환할 경우, then에서 반환한 프로미스는 그 반환값을 자신의 결과값으로 하여 이행한다.

// ===================

// Promise가 이행하거나 거부했을 때, 각각에 해당하는 핸들러 함수(onFulfilled나 onRejected)가
// 비동기적으로 실행됩니다. 핸들러 함수는 다음 규칙을 따라 실행됩니다.

// => 핸들러 함수가 값을 반환할 경우, then에서 반환한 프로미스는 그 반환값을 자신의 결과값으로 하여 이행합니다.
// => 이미 이행한 프로미스를 반환할 경우, then에서 반환한 프로미스는 그 프로미스의 결과값을 자신의 결과값으로 하여 이행합니다.

// 값을 반환하지 않을 경우, then에서 반환한 프로미스는 undefined를 결과값으로 하여 이행합니다.
// 오류가 발생할 경우, then에서 반환한 프로미스는 그 오류를 자신의 결과값으로 하여 거부합니다.
// 이미 거부한 프로미스를 반환할 경우, then에서 반환한 프로미스는 그 프로미스의 결과값을 자신의 결과값으로 하여 거부합니다.
// 대기 중인 프로미스를 반환할 경우, then에서 반환한 프로미스는 그 프로미스의 이행 여부와 결과값을 따릅니다

// then 핸들러에서 값을 그대로 반환한 경우에는 Promise.resolve(<핸들러에서 반환한 값>)을 반환하는 것과 같습니다.

// const p2 = new Promise(function (resolve, reject) {
//   resolve(1);
// });

// p2.then(function (value) {
//   // p2.then() => Promise.resolve(1).then의 실행을 의미
//   console.log(value); // 1
//   return value + 1;
// }).then(function (value) {
//   console.log(value + " - 동기적으로 짜도 돌아감");
// });

// p2.then(function (value) {
//   console.log(value); // 1
// });

// reference :
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
