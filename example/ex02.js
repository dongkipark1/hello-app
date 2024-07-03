// 1. 추가하기
let a = [1, 2, 3]; // 변수
let a1 = [...a, 4];
console.log("이전", a);
console.log("이후", a1);
// 2. 추가하기 (특이한 것 - update)
const user = { name: "홍길동", age: 20 };
let user1 = { ...user, age: 21 };
console.log(user1);
// 3. 삭제하기
const b = [4, 5, 6]; // 상수

// 4. 검색하기
let userList = [
    { id: 1, name: "홍길동", age: 20 },
    { id: 2, name: "홍길동2", age: 21 },
    { id: 3, name: "홍길동3", age: 22 },
  ];
  let search = userList.filter((item) => item.age > 21);
  console.log(search);
  