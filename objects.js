var playlist = {
  billyJoel: "Piano Man"
}

function updatePlaylist(playlist, artistName, songTitle){
  Object.assign({playlist}, {artistName, songTitle})
}
