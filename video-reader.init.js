
$(function() {
  var resource_url = $.url().param("url")
  $(".player video").html("<source type='video/webm' src='" + resource_url + "/book.webmhd.webm'/>")
  $.getJSON(resource_url + "/meta.json", function(data) {
    //$(".flowplayer video").html("<source type='video/webm' src='" + resource_url + "/" + data.filename + "'/>")
    var l
  })
});

