const s = "computers, technology, phone , code";
//原始字串
console.log(s);
// 取得字串長度
console.log(s.length);
// 字串轉大寫
console.log(s.toUpperCase());
// 字串轉小寫
console.log(s.toLowerCase());
// 子字串-->數字為 (開始索引,結束索引)
console.log(s.substring(0,5))

// 字串以自定義方式切割-->回傳為Array
console.log(s.split(", "));
console.log(s.split("").length);