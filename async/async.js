//기본 - async의 리턴값 Promise.resolve의 결과값이 된다

async function seoulAsync() {
  return "hello Seoul";
}
seoulAsync().then((res) => console.log(res)); // hello Seoul

function delay(ms) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, ms)
  );
  //이렇게 써도 된다. setTimeout(resolve, ms)
}

async function seoulAsync2() {
  return delay(3000).then(() => {
    return "hello Seoul2";
  });
}

seoulAsync2().then((res) => console.log(res));

async function seoul() {
  const res = await delay(3000);
}

// seoulAsync2 => await으로
async function seoulAsync3() {
  await delay(3000); // 비동기함수가 동기함수처럼 해당 라인이 끝날때까지 기다림
  return "hello Seoul3";
}
seoulAsync3().then((res) => console.log(res));

// async함수를 다른 함수에서 사용
const main = async () => {
  const res = await seoulAsync3();
  console.log("[res]:", res);
  return res;
};
let result = main();
console.log("[result]:", result);

// [result]: Promise { <pending> }
// hello Seoul
// hello Seoul2
// hello Seoul3
// [res]: hello Seoul3
