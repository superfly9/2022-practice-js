// 객체의 특정 키 값이 있는지 따라 Return값 달라지게 할 때
function getName(person) {
  const name = person && person.name;
  return name || "객체가 아닙니다.";
}
let person = { name: "Korea" };

let name = getName(person); // Korea;
let nullName = getName(); // 객체가 아닙니다.
console.log(nullName);
