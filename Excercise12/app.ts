/* Changing Guest List: You just heard that one of your guests can’t make the dinner, 
so you need to send out a new set of invitations. You’ll have to think of someone else to invite.”*/

//Start with your program from Exercise 14. 
let guests : string [] = ["Ahsan","Faizan","ubaid"]

/*Modify your list, replacing the name of the guest 
who can’t make it with the name of the new person you are inviting.*/
let guestWhoCantMakeIT = guests[2]
let newGuest : string = "Dawood"
guests[guests.indexOf(guestWhoCantMakeIT)] = newGuest

//Print a second set of invitation messages, one for each person who is still in your list.
for (let guest of guests){
    console.log(`Hey, ${guest}! You are invited to dinner, Please join me for a delightful evening.`)
}
//Add a print statement at the end of your program stating the name of the guest who can’t make it.
console.log(`Bad News ${guestWhoCantMakeIT} cant make it to dinner`)