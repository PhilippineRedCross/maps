var mapData =[];

function getmapList() {
  $.ajax({
    type: 'GET',
    url: 'data/mapList.json',
    contentType: 'application/json',
    dataType: 'json',
    timeout: 10000,
    success: function(data) {
      console.log("Success!");
      mapData = data;
      buildThumbnails();
    },
    error: function(e) {
      console.log(e);
    }
  });
}

function buildThumbnails(){
  $.each(mapData, function(index, thisMap ){
    var thisHtml = "<div class='thumbnail col-sm-3 thumbnail-map'><img src='map/";
    thisHtml += thisMap.filename;
    thisHtml += "_thumb.jpg'><div class='caption'><h3>";
    thisHtml += thisMap.label + "</h3><p>" + thisMap.description + "</p><p><a target='_blank' href='map/";
    thisHtml += thisMap.filename + ".pdf'" + "class='btn btn-default btn-downloadPdf' role='button'><span class='glyphicon glyphicon-download'></span> Download PDF</a></p></div></div>";
    console.log(thisHtml);
    $("#gallery").append(thisHtml);
  });
}

getmapList();