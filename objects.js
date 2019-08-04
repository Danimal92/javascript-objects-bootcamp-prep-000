var playlist = {michael_jackson : 'beat it' }

function updatePlaylist(obj, artist, song){
  
  Object.assign(obj, {[artist]:song});
  console.log(playlist)
  return playlist;
  
}

function removeFromPlaylist(obj, artist){
  
  
}