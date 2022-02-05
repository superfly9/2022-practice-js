// delay후에 수익률을 판단하는 함수
const isGetMoney = (number, delay) => {
  return new Promise((resolve, reject) => {
    const isNumber = typeof number === "number" ? true : false;
    setTimeout(() => {
      if (isNumber) {
        resolve(`수익률이 ${number}입니다`);
      } else {
        reject("숫자가 아닙니다.");
      }
    }, delay);
  });
};

//Promise체이닝의 catch는 try catch문의 catch로 대체 가능
let isGetMoneyPromise = isGetMoney(15, 5000); // Promise{<pending>}
let isParamsErrorPromise = isGetMoney([], 2000); // Promise{<pending>}

const getStockProfitRate = async (isError = false) => {
  try {
    // await분기 처리
    const res = isError ? await isParamsErrorPromise : await isGetMoneyPromise;
    console.log("[getStock]:", res);
  } catch (e) {
    console.log("[e]:", e);
  }
  // [getStock]: 수익률이 +입니다 => isGetMoney에 의해 Promise가 생성되고 이행될때까지 5초동안 기다림,
};
getStockProfitRate(); // [e]: 숫자가 아닙니다 => 2초 뒤
getStockProfitRate(true); // [getStock]: 수익률이 15입니다 => 5초 뒤
