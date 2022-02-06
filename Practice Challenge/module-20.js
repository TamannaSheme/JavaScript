// program to check leap year
function isLeapYear(year) {
    if (year % 400 === 0) return true;
    if (year % 100 === 0) return false;
    return year % 4 === 0;
}

isLeapYear(2000) // true
isLeapYear(2001) // false
isLeapYear(2004) // true
isLeapYear(2100) // falsefunction isLeapYear(year) {


// 2nd method
function isLeapYear(year) {
    return true ? ((year % 400 === 0) || (year % 100 !== 0)) && ((year % 4) == 0) : false;
};

// only if-else

var yr = 2004;
if ((yr % 4 == 0) && (yr % 100 != 0))
    document.write(yr + " is a Leap Year");
else if (yr % 400 == 0)
    document.write(yr + " is a Leap Year");
else
    document.write(yr + " is not a Leap Year");