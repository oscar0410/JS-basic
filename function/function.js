// 一般宣告方式
function addNums(num1,num2){
    return (num1+num2);
}
console.log(addNums(5,5));

// arrow function宣告方式
let addNums_Arrow = (num1,num2) => {
    return num1+num2;
}
console.log(addNums_Arrow(5,5));