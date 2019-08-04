var playlist = {michael_jackson : 'beat it' }

function updatePlaylist(obj, artist, song){
  
  Object.assign({}, obj, {[artist]:song});
  console.log(playlist)
  return obj;
  
}

function removeFromPlaylist(obj, artist){
  delete obj.artist;
  return obj 
  
}