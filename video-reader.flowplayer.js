

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
    var player = $(".player").flowplayer({"generate_cuepoints": true});
    

    


  })
 
});

/*
 * http://flowplayer.org/docs/api.html
 * Flowplayer hook
 */
flowplayer(function(api, root) {
 
  // when a new video is about to be loaded
  api.bind("cuepoint", function() {

 
  // when a video is loaded and ready to play
  }).bind("ready", function() {

    /*
     * Build out the pager
     */
     
    // Add Page Numbers for the cuepoints
    var currentPage = 0
    var lastPage = -1
    $(".video-reader-pager .fp-cuepoint").each(function() {
      lastPage++
    })

    $(".fp-cuepoint" + lastPage).text("<")
    $(".fp-cuepoint" + currentPage).text("Page " + (currentPage + 1))
    $(".fp-cuepoint" + (currentPage + 1)).text(">")
    $(".fp-cuepoint").bind("click", function() {

      var destinationPage, 
        nextPage, 
        previousPage
      ;

      // Detect direction
      if($(this).text() == ">") {
        destinationPage = currentPage + 1
      }
      if($(this).text() == "<") {
        destinationPage = currentPage - 1
      }

      // Depending on what page we are on will affect what is the next and previous
      // pages.
      if(destinationPage > lastPage) {
        // Go back to the beginning
        destinationPage = 0
        nextPage = 1
        previousPage = lastPage
      }
      else if (destinationPage < 0) {
        // Go to the last page
        destinationPage = lastPage
        nextPage = 0
        previousPage = lastPage - 1
      }
      else if (destinationPage < lastPage)  {
        // proceed 
        nextPage = destinationPage + 1
        previousPage = destinationPage - 1
      }

      // Clear the pager
      $(".fp-cuepoint").text("")
      // Set the links

      $(".fp-cuepoint" + previousPage).text("<")
      $(".fp-cuepoint" + currentPage).text("Page " + (currentPage + 1))
      $(".fp-cuepoint" + nextPage).text(">")

    })
  });
 
});
