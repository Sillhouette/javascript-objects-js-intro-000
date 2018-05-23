var playlist = {
  billyJoel: "Piano Man"
}

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign( playlist, {[artistName]: songTitle});
}

function removeFromPlaylist(playlist, artistName){
  console.log(delete playlist.artistName);
}
