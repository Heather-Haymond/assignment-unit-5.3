console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = []; //- Create an empty array named `myCollection`.
function addToCollection(collection, title, artist, yearPublished) { //allows the function to be reused to add an album to any array of album objects.
    
    let newAlbum = { // Create a new album object. properties match with the functions collections parameters
        title: title,
        artist: artist,
        yearPublished: yearPublished
    };

    
    collection.push(newAlbum); // Add the new album object to the collection array

   
    return newAlbum;  // Return the newly created album object
}
addToCollection(myCollection, "Thriller", "Michael Jackson", 1982);
addToCollection(myCollection, "The Dark Side of the Moon", "Pink Floyd", 1973);
addToCollection(myCollection, "Abbey Road", "The Beatles", 1969);
addToCollection(myCollection, "Back in Black", "AC/DC", 1980);
addToCollection(myCollection, "Rumours", "Fleetwood Mac", 1977);
addToCollection(myCollection, "Bad", "Michael Jackson", 1987);

// Log each album as added using the function's returned value
console.log(addToCollection(myCollection, "Random Access Memories", "Daft Punk", 2013));
console.log(addToCollection(myCollection, "21", "Adele", 2011));


console.log(myCollection); // Log the myCollection array


function showCollection(collection) {
  console.log("----- My Collection -----");
  for (let i = 0; i < collection.length; i++) {
    let album = collection[i];
    console.log(album.title + " by " + album.artist + ", published in " + album.yearPublished);
  }
}

// Function to find albums by artist
function findByArtist(collection, artist) {
  let matchingAlbums = [];
  collection.forEach(function(album) {
    if (album.artist === artist) {
      matchingAlbums.push(album);
    }
  });
  return matchingAlbums;
}
// Test the showCollection function
showCollection(myCollection);

// Test findByArtist 
let artist = "Michael Jackson";
let foundAlbums = findByArtist(myCollection, artist);
if (foundAlbums.length > 0) {
  console.log(`Albums by ${artist}:`);
  foundAlbums.forEach(function(album) {
    console.log(`${album.title} - ${album.yearPublished}`);
  });
} else {
  console.log(`No albums found by ${artist}.`);
}

// Function to search albums by artist and/or yearPublished
function search(collection, searchCriteria) {
  if (!searchCriteria || typeof searchCriteria !== 'object') {
    return collection;
  }

  const { artist, yearPublished, trackName } = searchCriteria;

  if (!artist && !yearPublished && !trackName) {
    return collection;
  }

  return collection.filter(album => {
    let matchArtist = true;
    let matchYear = true;
    let matchTrack = true;

    if (artist) {
      matchArtist = album.artist.toLowerCase() === artist.toLowerCase();
    }
    if (yearPublished) {
      matchYear = album.yearPublished === yearPublished;
    }
    if (trackName) {
      matchTrack = album.tracks.some(track => track.name.toLowerCase() === trackName.toLowerCase());
    }

    return matchArtist && matchYear && matchTrack;
  });
}


// Test the search function
let searchResults = search(myCollection, { artist: 'Michael Jackson' });
console.log("Michael Jackson:", searchResults);

searchResults = search(myCollection, { yearPublished: 1982 });
console.log("published in 1982:", searchResults);

searchResults = search(myCollection, { artist: 'Pink Floyd', trackName: 'Money' });
console.log("Money:", searchResults);



// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
