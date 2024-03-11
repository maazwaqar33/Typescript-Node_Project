/* Think of at least five places in the world you’d like to visit.
Store the locations in a array. Make sure the array is not in alphabetical order.*/
let places : string[] = ["switzerland","Makkah","Turkey","Belgium","Jerusalam"]

//Print your array in its original order.
console.log("\nArry in its original order")
console.log(`${places}`)

//Print your array in alphabetical order without modifying the actual list.
console.log("\nalphabetical order without modifying the actual list")
console.log([...places].sort((a,b) => a.localeCompare(b)))

//Show that your array is still in its original order by printing it.
console.log("\narray is still in its original order")
console.log(`${places}`)

//Print your array in reverse alphabetical order without changing the order of the original list.
console.log("\narray in reverse alphabetical order without changing the original list")
console.log([...places].sort((a,b) => b.localeCompare(a)))

//Show that your array is still in its original order by printing it again.
console.log("\narray is still in its original order by printing it again")
console.log(`${places}`)

//Reverse the order of your list. Print the array to show that its order has changed.
places.reverse()
console.log("\nReverse order of array")
console.log(`${places}`)

//Reverse the order of your list again. Print the list to show it’s back to its original order.
places.reverse()
console.log("\nReverse the order of array again, Print to show it’s back to original order")
console.log(`${places}`)

//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
places.sort((a,b) => a.localeCompare(b))
console.log("\nsort array in alphabetical order")
console.log(`${places}`)

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
places.sort((a,b) => b.localeCompare(a))
console.log("\nsort array in reverse alphabetical order")
console.log(`${places}`)