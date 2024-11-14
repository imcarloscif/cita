
  
    function rescaleCoords() {
        var img = document.querySelector('.mappa');
        var areas = document.querySelectorAll('area');
        
        
        var imgWidth = img.naturalWidth;  
        var imgHeight = img.naturalHeight;  
        
        var containerWidth = img.width;  
        var containerHeight = img.height;  
        
       
        var scaleX = containerWidth / imgWidth;
        var scaleY = containerHeight / imgHeight;

        
        areas.forEach(function(area) {
            var coords = area.getAttribute('coords').split(',');
            var scaledCoords = coords.map(function(coord, index) {
                
                if (index === 0 || index === 1) {
                    return Math.round(coord * (index === 0 ? scaleX : scaleY));  
                }
                return coord;  
            }).join(',');
            
            
            area.setAttribute('coords', scaledCoords);
        });
    }


    window.addEventListener('load', rescaleCoords);
    window.addEventListener('resize', rescaleCoords);

