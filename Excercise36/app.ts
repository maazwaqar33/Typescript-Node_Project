// Write a function called make_album() that builds a Object describing a music album.
//Use the function to make three dictionaries representing different albums.
//Print each return value to show that Objects are storing the album information correctly. 
 
//If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
//Make at least one new function call that includes the number of tracks on an album.

// Write a function called make_album()
//The function should take in an artist name and an album title.
function make_album(artist_name:string, album_title: string, num_tracks?:number): {artist:string, title: string, tracks?:number} {
    let album :{ artist:string, title: string, tracks?:number}={
        artist: artist_name,
        title: album_title,
    };
    //Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
    if (num_tracks !== undefined){
        album.tracks = num_tracks;
    }
    //and it should return a Object containing these two pieces of information.
    return album;
}
// // Make three function calls representing different albums
let album1 = make_album("Artist1", "Album1", 10)
let album2 = make_album("Artist2", "Album2",)
let album3 = make_album("Artist3", "Album3", 12)


// // Print each return value to verify the album information
console.log(album1);
console.log(album2);
console.log(album3);
