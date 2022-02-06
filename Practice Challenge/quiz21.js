let sum = 0;
for (let i = 0; i <= 3; i++) {
    sum = sum + i;

}
console.log(sum);

var student = { name: "Yo Mama", age: 17 };
console.log(student);
console.log(student.age);
console.log(delete student.age);
console.log(student);
console.log(delete age);
console.log(student);


function inchToFeet(inch) {
    var feet = inch / 12;
    return feet;
}
console.log(inchToFeet(12));


function leapYear(year) {
    const reminder = year % 4;
    if (reminder == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(leapYear(2022));