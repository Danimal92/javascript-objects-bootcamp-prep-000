var playlist = {michael_jackson : 'beat it' }

function updatePlaylist(obj, artist, song){
  
  Object.assign( obj, {[artist]:song});
  console.log(playlist)
  return obj;
  
}

function removeFromPlaylist(obj, artist){
  var poop = obj;
  delete poop.artist;
  return poop;
  
}