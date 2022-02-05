const meal = {
  한식: "불고기",
  중식: "깐풍기",
};
const getMeal = (mealType) => meal[mealType] || "굶기"; // return에 ||를 사용한 게 포인트

console.log(getMeal("중식"));
console.log(getMeal());

// 비구조화 할당

// #1. Array
//1. 할당 후 분해 => 인덱스 명시 없이도 특정값을 변수로 할당하여 사용가능
let arr = ["1", 2, 3];
let [one, two, three] = arr;

//2. 선언하며 분해
let [a, b, c] = [1, 2, 3];
//3. 기본값 할당
let [a, b, c, d = "Seoul"] = [1, 2, 3];

// swap에 사용
// before
let a = 10;
let b = 20;
let tmp = 0;
tmp = a;
a = b;
b = tmp;

//after
let c = 10;
let d = 20;
[c, d] = [d, c]; // swap, 여기서 배열에 선언이 어떻게 됨?

// #2. object
let p = { one, two, three };
let { one, two, three: seoul } = p; // 키 값 변경해서 사용시

//스프레드(펼친다) 연산자 Spread operator => rest parameter랑 구분하기

// 1.object

// 2. array
const noToppingCookies = ["mint", "lemon"];
const toppingCookies = ["apple", "melon"];

const allCookies = [...noToppingCookies, "Seoul", ...toppingCookies];

//props이렇게 spread로 넘겨주기
<DiaryItem key={`diaryitem_${it.id}`} {...it} />;
