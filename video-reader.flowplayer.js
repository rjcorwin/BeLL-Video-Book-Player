// http://flowplayer.org/docs/api.html
$(function() {
 
   // install flowplayer to an element with CSS class "player"
   $(".player").flowplayer({swf: "lib/flowplayer.swf"});
 
});
/*
 * @todo If cordova is available, use Media object to capture mic 
 * http://docs.phonegap.com/en/2.4.0/cordova_media_media.md.html#Media
 * http://flowplayer.org/docs/api.html

flowplayer(function(api, root) {
 
  // when a new video is about to be loaded
  api.bind("load", function() {
    var resource_url = $.url().param("url")
    //$(".flowplayer video").html("<source type='video/webm' src='" + resource_url + "'/>")
    //$.getJSON(resource_url + "/meta.json", function(data) {
      //$(".flowplayer video").html("<source type='video/webm' src='" + resource_url + "/book.mov" + "'/>")
      //$.flowplayer('player')
    //})
 
  // when a video is loaded and ready to play
  }).bind("ready", function() {
    var none;
  });
 
});


  var findOptimalResolutionForScreen = function(aspectRatio) {
    var widthAtMaxHeight = window.innerHeight * aspectRatio 
    var heightAtMaxWidth = window.innerWidth / aspectRatio

    // If the width fits with max height, use that max height, otherwise 
    // it fits better with max width.
    if (widthAtMaxHeight < window.innerWidth) {
      return {"height": window.innerHeight, "width": widthAtMaxHeight}
    }
    else {
      return {"height": heightAtMaxWidth, "width": window.width}
    }

  }
   */
