// Constructor Function
function Person(firstName,LastName,age ,dob){
    this.firstName = firstName;
    this.LastName = LastName
    this.age = age;
    this.dob = new Date(dob);
    //物件中的函式
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
    this.getFullName = function(){
        return `${this.firstName} ${this.LastName}`;
    }
}

// Instantitate Object
let person1 = new Person("Oscar","Wu",24,"04-10-1996");
let person2 = new Person("Maxine","Chi",25,"06-20-1995");
console.log(person1);
console.log(person2);
console.log(`Birthday year of ${person1.firstName} is ${person1.getBirthYear()}`);
console.log(`Birthday year of ${person2.firstName} is ${person2.getBirthYear()}`);