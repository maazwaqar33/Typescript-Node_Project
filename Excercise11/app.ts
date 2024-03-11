/* If you could invite anyone, living or deceased, to dinner, who would you invite? 
Make a list that includes at least three people you’d like to invite to dinner. 
Then use your list to print a message to each person, inviting them to dinner”*/

//list that includes at least three people you’d like to invite to dinner
let guests : string [] = ["Ahsan","Faizan","ubaid"]

//print a message to each person, inviting them to dinner
for (let guest of guests){
    console.log(`Hey, ${guest}! You are invited to dinner, Please join me for a delightful evening.`)
}
