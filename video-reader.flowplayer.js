

$(function() {
 var resource_url = $.url().param("url")
  $.getJSON(resource_url + "/meta.json", function(data) {

    // Set the size of the player for the user's screen
    // setInterval(function() { using an interval doesn't work as well as you would expect...
      var aspectRatio = data.width / data.height
      var dimensions = findOptimalResolutionForScreen(aspectRatio)
      $('.player').width(dimensions.width)
      $('.player').height(dimensions.height)
    // }, 1000)

    $(".player video").html("<source type='video/webm' src='" + resource_url + "/" + data.filename + "'/>")

    $(".player").attr("data-cuepoints", JSON.stringify(data.cuepoints.pageturns))

    // Initialize the player
    $(".player").flowplayer();

  })
 
});

/*
 * http://flowplayer.org/docs/api.html
 */
flowplayer(function(api, root) {
 
  // when a new video is about to be loaded
  api.bind("cuepoint", function() {

 
  // when a video is loaded and ready to play
  }).bind("ready", function() {
    
  });
 
});
