

$(function() {
 
   // install flowplayer to an element with CSS class "player"
   $(".player").flowplayer({swf: "lib/flowplayer.swf"});
 
});

/*
 * http://flowplayer.org/docs/api.html
 */
flowplayer(function(api, root) {
 
  // when a new video is about to be loaded
  api.bind("load", function() {
 
  // when a video is loaded and ready to play
  }).bind("ready", function() {
    
  });
 
});
