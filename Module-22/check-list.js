
/*১. তোমাকে যদি বলি একটা স্ট্রিং টাইপের ভেরিয়েবল লিখো। 
একটা বুলিয়ান টাইপের ভেরিয়েবল লিখো বা একটা নাম্বার টাইপের ভেরিয়েবল লিখো।
 সেটা কি তুমি লিখতে পারবে? যদি পারো তাহলে ভিজুয়াল ষ্টুডিও কোড খুলে লিখে ফেলো।*/

var myString = "Hi! i'm Sadek Hossain";
let isHardwork = true;
const myRoll = 289;
// console.log(myString, isHardwork, myRoll);

/*২. তুমি কি জানো কখন let দিয়ে ভেরিয়েবল লিখতে হয়ে আর কখন const দিয়ে ভেরিয়েবল লিখতে হয়। যদি লিখতে পারো তাহলে লিখে ফেলো। এবং যেই যেটা দিয়ে ভেরিয়েবল লিখলে আবার সেটা চেইঞ্জ করা যায়। তাহলে যেটা দিয়ে ভেরিয়েবল ডিক্লেয়ার করলে চেইঞ্জ করা যায়। সেটার মান চেইঞ্জ করে নাও । অর্থাৎ জাস্ট দুইটা ভেরিয়েবল ডিক্লেয়ার করবে let এবং const দিয়ে। তারপর যেকোন একটার ভ্যালু চেইঞ্জ করবে। এই let এবং const মাথা গরম করে দিলে টেনশন নিয়ে না। সামনের মাইলস্টোন এর পরের মাইলস্টোন এ এইটা নিয়ে আরো ডিসকাস করা হবে। */

let myAge = 25;  // this is changable.
const myHeight = 6; // this value is fixed.
// console.log(myAge, myHeight);
myAge += 2;
// myHeight += 1;        // we can't use this line.
// console.log(myAge, myHeight);

/* ৩. দুইটা ভেরিয়েবল এর মধ্যে যোগ, বিয়োগ, গুণ, ভাগ কিভাবে করতে হয় সেটা কি জানো। অর্থাৎ তুমি কি +, -, *, /, %এইগুলার ব্যবহার জানো। তাহলে নাম্বার টাইপের দুইটা ভেরিয়েবল লিখো তারপর তাদের যোগ করে সেটার মান আরেকটা ভেরিয়েবল এ রাখো। একইভাবে ওই দুইটা ভেরিয়েবল এর মধ্যে বিয়োগ, গুন, ভাগ এবং ভাগশেষ বের করো।  */

// SUM...
var sum1Number = 10;
var sum2Number = 10;
var totalSum = sum1Number + sum2Number;
// console.log(totalSum);
// MINAS/Difference...
let myNumber = 50;
let herNumber = 25;
let totalDifference = myNumber - herNumber;
// console.log(totalDifference);
// Multiply...
let multi1Number = 50;
let multi2Number = 2;
let totalMultiply = multi1Number * multi2Number;
// console.log(totalMultiply);
// Division...
let divi1Number = 50;
let divi2Number = 10;
let totalDivided = divi1Number / divi2Number;
// console.log(totalDivided);
// Modulas...
let modu1Number = 50;
let modu2Number = 3;
let totalModulas = modu1Number % modu2Number;
// console.log(totalModulas);

/* ৪. তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো। যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান , ছোট বা সমান, বড় বা সমান। এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো। তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো।  */

let macBook = 140000;
let surfaceBook = 130000;
// <, > ....
if (surfaceBook < macBook){
    // console.log('Macbook');
}else if(surfaceBook > macBook){
    // console.log('Surfacebook');
};

// ==, != .....
if (surfaceBook == macBook){
    // console.log('Both are Same.');
}else if(surfaceBook != macBook){
    // console.log('Both are not Same.');
};

// <=, >=.....

if (surfaceBook <= macBook){
    // console.log('Both are Same or Mac is Heihest Price.');
}else if(surfaceBook >= macBook){
    // console.log('Both are Same or Surface is Heihest Price.');
};

/* ৫. তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো।  */

let tk = 100;
let coupon = 1;
if(tk <= 100 && coupon <= 1){
    // console.log('Buy Car.');
};
if (tk <= 90 || coupon <= 1){
    // console.log('Buy Car with Coupon.');
};

/* ৬. তুমি কি একটা শর্ত পালন করলে একটা কিছু করবে। শর্ত পূরণ না করলে অন্য কিছু একটা করবে এমন কোড লিখতে পারবে। অর্থাৎ তুমি কি if-else এর কোড লিখতে পারবে। পারলে একটা কোড লিখে ফেলো  */

let todayIsFriday = true;
if(todayIsFriday){
    // console.log('Jummah Mubarak');
}else{
    // console.log('Not Jummah Only Johor Salat.');
};

/* ৭. তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো।  */

let i = 7;
while(i <= 19){
    // console.log(i);
    i = i + 2;
};

/* ৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে।  */

let numbers = [10, 20, 30, 24, 15, 69,];
var num = numbers.length;
numbers[4] = 80;
numbers.push(99,88);
numbers.pop();
// console.log(numbers);

/* ৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো।  */

let actressName = ['Purnima', 'Sabnur', 'Popy', 'Opu', 'Joya'];
for (i = 0; i < actressName.length; i++){
    // console.log(actressName[i]);
};
// For of loop...
for(item of actressName){
    // console.log(item);
};

/* ১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো */

let arryNum = [60, 76, 80, 45, 85, 30, 90, 98];
for (arry of arryNum){
    if(arry >= 80){
        // console.log(arry);
    };
};

/* ১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো।  */

function multiNum(n1,n2,n3){
    let total = n1 * n2 * n3;
    return total;
}
// console.log(multiNum(2,2,2)); 

/* ১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা।  */

let car = {
    name: 'Lamborghini',
    model: 'Sián FKP 37',
    color: 'limeblue',
    price: 7000000,
}
// console.log(car);
car.color = 'red';
// console.log(car);