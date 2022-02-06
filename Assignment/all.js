//Problem:1
function anaToVori(ana) {
    if (ana > 0) {
        var VoriInAna = ana / 16; //1 vori equals to 16 Ana
        return VoriInAna;

    } else if (ana <= 0) {
        return 'Ana is not a good fit for Minus Value. Please enter a number that is valid.'; //[0/16=undefined; minus value is not fit for this method]

    } else {
        return 'String is not able to convert into Ana. Please enter a number that is valid.'; //string value is not suitable for this method
    }

}
console.log(anaToVori(48));
console.log(anaToVori("I have 16 Ana Vori's Ring."));
console.log(anaToVori(-136));

//Problem-02
function pandaCost(singaraNumber, SomusaNumber, jelapiNumber) {
    if (singaraNumber >= 0 && SomusaNumber >= 0 && jelapiNumber >= 0) {
        var totalcost = (7 * singaraNumber + 10 * SomusaNumber + 15 * jelapiNumber);
        return totalcost; // ১টি সিঙ্ গারা এর দাম–৭ টাকা,১ টি সমুচা এর দাম–১০ টাকা, ১ টি জিলাপি এর দাম–১৫ টাকা
    } else {
        return 'Strings and negative values are not acceptable.'; //any negative or string is not suitable for calculating the cost.
    }

}
console.log(pandaCost(1, 4, 3));
console.log(pandaCost(1, 0, 1));
console.log(pandaCost("I want 1 singara", -4, 3));

//Problem:3

function picnicBudget(numberOfPeople) {
    const costForFirst100People = 5000;
    const costForSecond100People = 4000;
    const costForRestPeople = 3000;
    if (typeof numberOfPeople != "number" || numberOfPeople <= 0) {
        return "Please, Enter a valid number"; //string and negative numbers are not suitable for this problem.
    } else if (numberOfPeople <= 100) {
        const totalCost = numberOfPeople * costForFirst100People;
        return totalCost; //costForFirst100People = 5000;
    } else if (numberOfPeople <= 200) {
        const costFor100People = 100 * costForFirst100People;
        const costFor200People = (numberOfPeople - 100) * costForSecond100People;
        const totalCost = costFor100People + costFor200People;
        return totalCost; //costForSecond100People = 4000;
    } else {
        const costFor100People = 100 * costForFirst100People;
        const costFor200People = 100 * costForSecond100People;
        const costForRemainPeople = (numberOfPeople - 200) * costForRestPeople;
        const totalCost = costFor100People + costFor200People + costForRemainPeople;
        return totalCost; //costForRestPeople = 3000;
    }

}
console.log(picnicBudget(10));

console.log(picnicBudget(110));

console.log(picnicBudget(210));

console.log(picnicBudget(-10));

console.log(picnicBudget("I want to go to"));

//Problem-04

function oddFriend(friendName) {
    for (let i = 0; i < friendName.length; i++) {
        if (typeof friendName[i] != 'string') //Name must be string
        {
            return "Please, provide a string array.";

        } else if (friendName[i].length % 2 != 0) //number%2==1 or number%2!=0 both condition is correct for finding odd number
        {

            return friendName[i];


        } else if (i + 1 == friendName.length) //No Name has odd character
        {
            return "In the array, no string has an odd number of characters.";

        }
    }
}
friendName = ["Shemee", "Rimi", "Tamanna", "Sujon", "Sadika", "Sakib"];

console.log(oddFriend(friendName));