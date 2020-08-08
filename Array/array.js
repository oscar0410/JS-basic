//Arrays基本練習
// 陣列 使用[]

// 宣告方式1
let numbers1 = new Array();
// 宣告方式2
let numbers2 = [];
console.log(typeof numbers2);
// 宣告方式3
let numbers3 = new Array(1,2,3,4,5);
console.log(numbers3);
console.log(typeof numbers3);
// 宣告方式4
let fruits = ["Apple","Banana","Orange", "Pears"];
console.log(fruits);

//取得第一個內容 
console.log(fruits[0]);

//從資料流尾端增加資料
fruits.push("Mangos");
console.log(fruits);

// Array.shift() --> 移除第一個資料
// Array.unshift(item) -->從index=0的地方新增item
// fruits.shift()
// console.log(fruits);

//Array.pop() -> 從資料流尾端移除資料
fruits.pop();
console.log(fruits)

// Array.isArray(item) -> 判斷item是否為陣列
console.log(Array.isArray(fruits));
console.log(Array.isArray(123456));

// Array.indexOf(ArrayItem) -> 尋找ArrayItem在Array中的索引值是多少
console.log(fruits.indexOf("Pears"));