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