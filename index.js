// Importing functions from the /scripts folder
const { addToCollection, showCollection, search } = require('./assignment/scripts/album');



// Creating a collection and adding albums
let myCollection = [];
addToCollection(myCollection, "Thriller", "Michael Jackson", 1982, [
    { name: "Wanna Be Startin' Somethin'", duration: "6:02" },
    { name: "Thriller", duration: "5:57" }
]);
addToCollection(myCollection, "Back in Black", "AC/DC", 1980, [
    { name: "Hells Bells", duration: "5:12" },
    { name: "Back in Black", duration: "4:15" }
]);

// Displaying the collection
showCollection(myCollection);

// Searching the collection
let searchResults = search(myCollection, { artist: "Michael Jackson", trackName: "Thriller" });
console.log("Search Results:", JSON.stringify(searchResults, null, 2));


