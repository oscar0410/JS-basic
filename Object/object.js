// Object literals -> key和value,成雙成對
// 宣告方式1
const person1 = {
  firstName: "Oscar",
  lastName: "Wu",
  age: 30,
  // 物件裡可以放陣列資料
  hobbies: ["swimming", "tennis", "cooking"],
  // 物件裡可以放物件資料
  address: {
    street: "寶興街",
    city: "台北市",
    country: "台灣",
  },
};
console.log(person1);
console.table(person1);
// 特定內容
console.log(person1.firstName, person1.lastName);
console.log(person1["firstName"], person1["lastName"]);

// 內陣列的內容
console.log(person1.hobbies[0]);

// 內物件的內容
console.log(person1["address"].city);

// 增加物件的內容
person1.email = "a127309512@gmail.com"
console.table(person1);