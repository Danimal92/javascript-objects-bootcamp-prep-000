var playlist = {michael_jackson : 'beat it' }

function updatePlaylist(playlist, artist, song){
  
  Object.assign( playlist, {[artist]:song});
  console.log(playlist)
  return playlist;
  
}

function removeFromPlaylist(playlist, artist){
  
  
  
}