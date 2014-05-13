

//generates html for preview boxes using data from maps.json
function generatepreviewhtml(){
    var html = "";
    function formatDate(date){
        var formattedDate = new Date(date).toString().substring(4,15);
        return formattedDate;
    }

    $.each(mapData, function(index, item){              
        var itemhtml = 
            '<div id="'+item.map_id+'" style="display:none," class="thumbnailWrap col-sm-3 ALL-EXTENT ALL-SECTOR mapped '+item.extent+' '+item.sector+'">'+
                '<div onclick="callModal(this);" class="thumbnail">'+
                    '<img class="lazy" data-original="img/maps/'+item.fileName+'_thumb.jpg'+'" width="300" height="200" alt="" >'+
                    '<div class="caption">'+            
                        '<h5 style="font-weight:bold;">'+item.title+'</h5>'+
                        '<p style="font-size:small; margin:6px 0 0 0;">' + formatDate(item.productionDate) +'</p>'+        
                    '</div>'+
                    '<div class="modalDescription" style="display:none;">'+                        
                        '<h4 style="font-weight:bold;">'+item.title+' <small>('+formatDate(item.productionDate)+')</small></h4>'+                        
                        '<p style="font-size:small; margin:6px 0 0 10px;">'+item.narrative+'</p>'+
                        '<p style="font-size:small; margin:6px 0 0 10px;"><b>Extent tags:</b> '+item.extent.replace(/\s/g, ', ')+'</p>'+                         
                        '<p style="font-size:small; margin:6px 0 0 10px;"><b>Type tags:</b> '+item.sector.replace(/\s/g, ', ')+'</p>'+                         
                    '</div>'+   
               '</div>'+
            '</div>';
        html=html+itemhtml;        
        var itemExtents = item.extent.match(/\S+/g);
        $.each(itemExtents, function(index, extent){
            if (extentTags.indexOf(extent) === -1){
                extentTags.push(extent);
            }
        });
        var itemSectors = item.sector.match(/\S+/g);
        $.each(itemSectors, function(index, sector){
            if (sectorTags.indexOf(sector) === -1){
                sectorTags.push(sector);
            }
        });
    });
    $('#gallery').html(html);
    thumbnails = $("#gallery").children();
    generateFilterButtons();
}