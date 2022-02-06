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