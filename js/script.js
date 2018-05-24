'use strict';

// background image effect on hover
(function() {

    var imgEffect, output, content;

    content = '',
    imgEffect = document.getElementById('imgeffect'),
    output = document.getElementById('output');

    // create image effect
    imgEffect.addEventListener('mousemove', function(event) {

        content = '';

        var divXY = 5,
            xPos = Math.floor(event.layerX / divXY),
            yPos = Math.floor(event.layerY / divXY);

        imgEffect.style.backgroundPosition = '' + xPos + '%' + ' ' + yPos + '%';

        content += 'xPos: ' + xPos + '<br>';
        content += 'yPos: ' + yPos;

        output.innerHTML = content;
    }, false);

    // reset image to its original state
    imgEffect.addEventListener('mouseout', function() {
        imgEffect.style.backgroundPosition = 'center';
    }, false);

})();