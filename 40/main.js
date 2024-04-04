// Define the make album function
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// calling the function
var album1 = make_album("Haseeb", "Album title 1");
var album2 = make_album("saira", "Album title 2");
var album3 = make_album("ali", "album title 3", 10);
// print the value 
console.log(album1);
console.log(album2);
console.log(album3);
