$(document).ready(function(){
//	$("#demosMenu").change(function(){
//	  window.location.href = $(this).find("option:selected").attr("id") + '.html';
//	});
    $('#fullpage').fullpage({
      sectionsColor: ['#000', '#f6ab00', '#7BAABE', 'whitesmoke', '#ccddff'],
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
