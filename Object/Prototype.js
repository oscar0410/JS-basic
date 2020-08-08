// Constructor Function
function Person(firstName,LastName,age ,dob){
    this.firstName = firstName;
    this.LastName = LastName
    this.age = age;
    this.dob = new Date(dob);
}

// Prototype
Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
}
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.LastName}`;}


// Instantitate Object
let person1 = new Person("Oscar","Wu",24,"04-10-1996");
let person2 = new Person("Maxine","Chi",25,"06-20-1995");
console.log(person1);
console.log(person2);
console.log(`Birthday year of ${person1.firstName} is ${person1.getBirthYear()}`);
console.log(`Birthday year of ${person2.firstName} is ${person2.getBirthYear()}`);

console.log(person1.getFullName());
console.log(person2.getFullName());