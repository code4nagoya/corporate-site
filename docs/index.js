$(document).ready(function(){

  $('#fullpage').fullpage({
	licenseKey: null,
    sectionsColor: ['#000', '#f6ab00', '#7baabe', '#ccddff', '#4bbfc3'],
    anchors: ['home', 'about', 'product', 'timeline', 'contact'],
    menu: '#menu',
	autoScrolling: false,
	scrollHorizontally: false,
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

  $('form').submit(function( event ) {
	    event.preventDefault();
	    $.post('https://www.livlog.xyz/postmail/send/0424b2cb051ea363748f3113a157d3a9/', $('form').serialize())
	    //サーバーからの返信を受け取る
	    .done( function(json) {
	        var data = JSON.parse(json);
	        if (data.status == 200) {
	            $('#message').html('正常に送信しました。');
	        } else  {
	            var error = data.errors.errors[0];
	            switch (error.code){
	            case 10:
	              $('#message').html('必須項目がありません。');
	              break;
	            case 20:
	              $('#message').html('トークンが違います。');
	              break;
	            case 21:
	              $('#message').html('送信回数が上限を超えています。');
	              break;
	            case 22:
	                $('#message').html('指定以外のドメインからは送信できません。');
	                break;
	            default:
	                $('#message').html('送信に失敗しました。');
	                break;
	            }
	        }
	    })
	    //通信エラーの場合
	    .fail( function() {
	        $('#message').html('送信に失敗しました。');
	    })
	})

});
