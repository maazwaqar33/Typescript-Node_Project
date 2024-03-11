/* More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
If you want to try more comparisons, write more tests. 

Have at least one True and one False result for each of the following:
*/

//Tests for equality and inequality with strings
var first : string = "Mehak"
var  second : string = "Maaz"

console.log("\nequality test:", first === second)
console.log("inequality test:", first !== second)

//Tests using the lower case function
var uCaseString : string = "MAAZ"
var lCaseString : string = uCaseString.toLowerCase()

var isString : boolean = uCaseString == uCaseString.toLowerCase()
console.log("\nlower case test:", isString)

var isStringLower : boolean = lCaseString == lCaseString.toLowerCase()
console.log("lower case test:", isStringLower)

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var num1 : number = 3
var num2 : number = 6

console.log("\nequality test:", num1 == num2)
console.log("equality test:", num1 != num2)
console.log("\ngreathan:", num1 > num2)
console.log("lessthan:", num1 < num2)
console.log("\ngreaterthan or equal to test:", num1 >= num2 )
console.log("lessthan or equal to test:", num1 <= num2)

//Tests using "and" and "or" operators
var age : number = 18
var heavyVehicleLicense : boolean = true
var normalVehicleLicense : boolean = true

var canRidebike : boolean = age >= 18 && normalVehicleLicense
console.log('\n && test:', canRidebike)
var cantRidebike : boolean = age < 18 && normalVehicleLicense
console.log('&& test:', cantRidebike)

var canDriveTruck : boolean = age >= 18 || heavyVehicleLicense
console.log('\n OR || test:', canDriveTruck)
var cantDriveTruck : boolean = age < 18 || !heavyVehicleLicense
console.log('OR || test:', cantDriveTruck)

//Test whether an item is not in a array
var testArray : Array<string> = ["Apple", "Mango", "Orange", "Grapes"]

console.log("\nis grapes in Arry", testArray.includes("Grapes"))

//Test whether an item is in a array
console.log("is pineapple in Arry",testArray.includes("pineapple"))
