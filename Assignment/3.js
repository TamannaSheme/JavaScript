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