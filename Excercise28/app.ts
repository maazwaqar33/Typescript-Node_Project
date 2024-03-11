// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//Make sure your comparison is case insensitive. If 'John' has been used, 
//'JOHN' should not be accepted.

//Make a list of five or more usernames called current_users.,
var current_Users : string [] = ["Atif", "UBAID", "Ahsan", "Sameer", "Bilal",]

//Make another list of five usernames called new_users. 
//Make sure one or two of the new usernames are also in the current_users list.
var new_Users : string [] = ["Ahmed", "Sufyan", "ubaid", "BILAL", "Huraish",]

//Loop through the new_users list  
for (let new_User of new_Users){
    //converting both string in lowercase for case insensitive comparison
    let lowerCase_NewUser = new_User.toLowerCase()
    let user_Exists = current_Users.some(current_User => current_User.toLowerCase() === lowerCase_NewUser)

    if (user_Exists){
        console.log("username", new_User, "is not available please enter")
    }
    else{
        console.log("username", new_User, "is available")
    }
}

