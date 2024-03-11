/*Think of something you could store in a array. 
For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. 
.*/ 

var mountainsRanges : Array<string>
mountainsRanges = ["Himalayas", "Karakoram", "Hindu Kush", "Pamirs"]

//Write a program that creates a list containing these items
console.log("List of mountainsRange")
for(let mountainsRange of mountainsRanges) {
    console.log(mountainsRange)
}
