//Problem:1

function anaToVori(ana) {
    if (ana > 0) {
        var VoriInAna = ana / 16; //1 vori equals to 16 Ana
        return VoriInAna;

    } else if (ana <= 0) {
        return 'Ana is not a good fit for Minus Value. Please enter a number that is valid.'; //[0/16=undefined; minus value is not fit for this method

    } else {
        return 'String is not able to convert into Ana. Please enter a number that is valid.'; //string value is not suitable for this method

    }


}

console.log(anaToVori(48));
console.log(anaToVori("I have 16 Ana Vori's Ring."));
console.log(anaToVori(-136));