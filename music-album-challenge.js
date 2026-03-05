// ? Take Home Challenge

let album = {
  id: 55,
  artist: "The Midnight",
  likes: 4200,
  albumInfo: {
    album1: {
      numberOfSongs: 3,
      songInfo: [
        { track: 1, songName: "Days of Thunder" },
        { track: 2, songName: "Los Angeles" },
        { track: 3, songName: "Sunset" }
      ]
    },
    album2: {
      numberOfSongs: 2,
      songInfo: [
        { track: 1, songName: "Neon Lights" },
        { track: 2, songName: "City Dreams" }
      ]
    }
  },
  isAvailable: true
}

/* 
	* print the second song name from album1
	* add album3 inside albumInfo
	* album3 should contain:
		* numberOfSongs
		* songInfo (array of 2 song objects with track and songName properties)
		* fabricate their values to whatever you wish

	! HARD MODE: add a property called totalAlbums which should be total number of albums.
	* hint: use Object.keys() and something else
		
*/
// console.log(album[3].album1.songInfo[1].songName)
console.log(album.albumInfo.album1.songInfo[1].songName)
album.albumInfo.album3 = {
    numberOfSongs: 2,
    songInfo: [
        {track: 1, songName: "oh baby"},
        {track: 2, songName: "No baby"}
       
    ]
}

album.totalAlbums = Object.keys(album.albumInfo).length
console.log(album)