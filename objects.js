var playlist = {
  billyJoel: "Piano Man"
}

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign( playlist, {[artistName]: songTitle})
}

function removeFromPlaylist(playlist, artistName){
  return delete playlist.artistName;
  console.log(playlist)
}
