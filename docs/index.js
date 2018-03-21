$(document).ready(function(){


  $('#fullpage').fullpage({
    sectionsColor: ['#000', '#f6ab00', '#7baabe', '#ccddff', '#4bbfc3'],
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
    menu: '#menu',

    afterLoad: function(anchorLink, index){
        var loadedSection = $(this);
        //using index
        if (index == 1) {
            var video = document.querySelector('video');
            video.play();
        }
      }
  });

  var video = document.querySelector('video');
  video.addEventListener('loadeddata', function(){
    video.play();
  });
});
