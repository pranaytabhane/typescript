"use strict";
let username = "user";
console.log(username);
let age = 30;
if (age <= 30) {
    age += 10;
    console.log("Inside if block1");
}
else {
    console.log("Outside if block");
}
console.log('done');
function createUser(user) {
    return "success";
}
createUser({ name: "user", number: 12121 });
const typeNumber = { value: 121 };
const typeString = { value: "user" };
/** Array */
const array = ["name"];
array.push("new user");
const array2 = [12];
const array3 = [
    [12, 34],
    [45, 60]
];
/** ENUM- it is used to create set of name constant > if no value is assigned for enum value it will start from 0 and if it defined then the next value is start from next value(if not assigned) as shown in below example*/
var Data;
(function (Data) {
    Data[Data["One"] = 0] = "One";
    Data[Data["Two"] = 1] = "Two";
    Data[Data["Three"] = 2] = "Three";
})(Data || (Data = {}));
const one = Data.One; // Output: 0
const two = Data.Two; // Output: 1
const three = Data.Three; // Output: 2
console.log(one, two, three);
//--------------------------------------------
var Heros;
(function (Heros) {
    Heros[Heros["Superman"] = 12] = "Superman";
    Heros[Heros["Batman"] = 13] = "Batman";
    Heros[Heros["Spriderman"] = 16] = "Spriderman";
    Heros[Heros["Thor"] = 17] = "Thor";
})(Heros || (Heros = {}));
const superman = Heros.Superman; // Output: 12
const batman = Heros.Batman; // Output: 13
const spriderman = Heros.Spriderman; // Output: 16
const thor = Heros.Thor; // Output: 17
console.log(superman, batman, spriderman, thor);
/** Tuple- Is a fixed length of array */
const data = [12, "user", true];
