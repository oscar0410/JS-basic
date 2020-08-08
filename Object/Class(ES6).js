// Class
// 自定義物件宣告，原本需要使用 function ObjectName(){.....}和 ObjectName.prototype才能完成
// 在ES6時，新增了class宣告詞來簡化 (注意:JS並沒有"類別"的概念)

class Person{
    constructor(firstName,LastName,age ,dob){
        this.firstName = firstName;
        this.LastName = LastName;
        this.age = age;
        this.dob = new Date(dob);
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return`${this.firstName} ${this.LastName}`
    }
}

const person1 = new Person("Oscar","Wu",24,"04-10-1996");
const person2 = new Person("Maxine","Chi",25,"06-20-1995");

console.table(person1);
console.table(person2);

console.log(`Person1's Full-name is :${person1.getFullName()}`);
console.log(`Person2's Full-name is :${person2.getFullName()}`);