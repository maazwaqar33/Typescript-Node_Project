/* Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. 
Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/ 

//Look closely at your results, and make sure you understand why each line evaluates to True or False.
//test1
var model = 'Honda';
console.log("model have honda", model.includes("Honda"), ":i predicted true")

//test2
var aD :number[] = [12,13] 
var match = aD 
console.log("\n aD is not equal to match", aD != match, ":i predicted false")

//test3
var nums:number[] = [1,2,3]

console.log("\n array have 1,2,3",nums.includes(3) && nums.includes(2) && nums.includes(3),":i predicted true")

//test4
var maths : (string | number)[] = ["car","horse", "cat", 3 ]

console.log("\n array lenght is lessthen 4", maths.length !== 4 ,"i predicted false")

//test5
var guestList : string[] = ["Maaz", "Ahsan", "Faizan", "Ubiad", "Sameer", "Ahmed"];
var checkNames : string[] = ["Ahmed", "Faizan", "Sameer"]

let answer : boolean = checkNames.every(name => guestList.includes(name))
console.log("\n checkname exsit in guestlist",answer,"i predicted true")

//test 6
var names: string[] = ["switzerland", "Makkah", "Turkey", "Belgium", "Jerusalam"]

let isAlphabetical: boolean = true;

for (let i = 0; i < names.length - 1;) {
    if(names[i] > names[i +1]) {
        isAlphabetical = false
        break
    }
    
}
console.log("\n array is alphabetical ", isAlphabetical,"i predicted false");

//test7
var matching: {
    dress: string;
    color: string;
    size: number;
    length: string; 
} = {
    dress: "Gown",
    color: "pink",
    size: 39,
    length: "mid", 
};

var isSizeNumber : boolean = typeof matching.size === "number"

console.log("\n size value is number",isSizeNumber ,"I predict true.")

//test 8
var numbers = [1,3,9,10]
numbers.unshift(0)

console.log("\n zero added in the list",numbers.includes(0) ,"I predict true.")

//test 9
var brands = ["honda", "Suzuki"]
brands.push("yamaha")

console.log("\n arry lenght is 3", brands.length !== 3,"i predicted false")

//test 10
var components : string [] = ["breaks", "suspensions", "wheels", "3"]
components.pop()
console.log("\n there is only 3 value remains", components.length === 3,"i predicted true")







