let username: string = "user"
console.log(username);

let age: number = 30
if (age <= 30) {
    age += 10
    console.log("Inside if block1");
} else {
    console.log("Outside if block");
} 
console.log('done');

/** Interface */
interface User {
    name: string,
    email?: string, // optional
    number: number
}
function createUser(user: User): string {
    return "success"
}

createUser({ name: "user", number: 12121})

/** Generic Container that hold the value of any type */

type Container<T> = { 
    value: T,
}

const typeNumber: Container<number> = {value: 121}
const typeString: Container<string> = {value: "user"}

/** Array */

const array: string[] = ["name"]
array.push("new user")

const array2: number[] = [12]

const array3: number[][] = [
    [12,34],
    [45,60]
]

/** ENUM- it is used to create set of name constant > if no value is assigned for enum value it will start from 0 and if it defined then the next value is start from next value(if not assigned) as shown in below example*/

enum Data {
    One,
    Two,
    Three
}

const one: Data = Data.One // Output: 0
const two: Data = Data.Two  // Output: 1
const three: Data = Data.Three  // Output: 2

console.log(one, two, three);

//--------------------------------------------

enum Heros {
    Superman = 12,
    Batman,
    Spriderman = 16,
    Thor
}

const superman: Heros = Heros.Superman // Output: 12
const batman: Heros = Heros.Batman  // Output: 13
const spriderman: Heros = Heros.Spriderman  // Output: 16
const thor: Heros = Heros.Thor  // Output: 17

console.log(superman, batman, spriderman, thor);

/** Tuple- Is a fixed length of array */

const data: [number, string, boolean] = [12, "user", true]