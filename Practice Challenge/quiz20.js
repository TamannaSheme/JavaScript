const number = -78;
const answer = Math.abs(number);
console.log(answer);

var a = 2;
var b = 3;
if (a < b) {
    console.log('Hello');
}

var c = 12.9;
console.log(Math.floor(c));

function add(a, b) {
    return a + b;
}
console.log(add("adam" + "eve"));

var first = "Rafsan";
var second = "Samira";

var temp = first;
first = second;
second = temp;
console.log(first, second);
console.log(first.length);
for (i = 100; i <= 200; i++) {
    var result = 100 + Math.random() * 100;
    console.log(result);
}


var sentence = "I am hardworking. I am determined. I will be a web developer.";
var count = 0;
for (var i = 0; i < sentence.length; i++) {
    var letter = sentence[i];
    if (letter == 'a') {
        count++;
    }
}
console.log(count)