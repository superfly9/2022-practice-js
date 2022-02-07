//기본 - async의 리턴값 Promise.resolve()에 넘겨주는 인자가 된다

async function seoulAsync() {
  return "hello Seoul";
}
seoulAsync().then((res) => console.log("[Async1]:", res)); // hello Seoul

// delay만큼 기다리고 Promise.resolve만 하는 함수
// 아무런 로직도 X
function delay(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

async function seoulAsync2() {
  return delay(3000).then(() => {
    return "hello Seoul2";
  });
}

seoulAsync2().then((res) => console.log("[Async2]:", res));

async function seoul() {
  const res = await delay(3000);
}

// seoulAsync2 => await으로
async function seoulAsync3() {
  await delay(3000); // 비동기함수가 동기함수처럼 해당 라인이 끝날때까지 3초 기다림
  return "hello Seoul3";
}
seoulAsync3().then((res) => console.log("[Async3]:", res)); // hello Seoul3

// async함수를 다른 함수에서 사용
const main = async () => {
  const res = await seoulAsync3(); // hello Seoul3
  console.log("[res]:", res);
  return res;
};
let result = main(); // hello Seoul3가 아닌 Promise{<pending>}을 리턴, then 혹은 await을 써야 hello Seoul3 값 사용가능
console.log("[result]:", result);

// 출력 결과
// [result]: Promise { <pending> }
// [Async1]: hello Seoul
// [Async2]: hello Seoul2
// [Async3]: hello Seoul3
// [res]: hello Seoul3
