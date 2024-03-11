/* You just found a bigger dinner table, so now more space is available.
Think of three more guests to invite to dinner.
Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
.*/
//Start with your program from Exercise 15. 
let guests : string [] = ["Ahsan","Faizan","ubaid"]

//Add one new guest to the beginning of your array.
guests.unshift("Sameer")

//Add one new guest to the middle of your array.
guests.splice(2, 0, "Atif")

//Use append() to add one new guest to the end of your list.
guests.push("Junaid")

/*Modify your list, replacing the name of the guest 
who can’t make it with the name of the new person you are inviting.*/
let guestWhoCantMakeIT = guests[2]
let newGuest : string = "Dawood"
guests[guests.indexOf(guestWhoCantMakeIT)] = newGuest

//Print a new set of invitation messages, one for each person in your list.
for (let guest of guests){
    console.log(`\nHey, ${guest}! I found a bigger dinner table You are invited to dinner.`)
}
//Add a print statement at the end of your program stating the name of the guest who can’t make it.
console.log(`\nBad News ${guestWhoCantMakeIT} cant make it to dinner`)