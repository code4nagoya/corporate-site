
$(document).ready(function() {

	// var autoScrollingOption = function() {
	// 	var usag = navigator.userAgent; //OSの情報取得
	// 	var isMobile = (usag.indexOf('iPhone') > 0 || usag.indexOf('iPad') > 0) || usag.indexOf('iPod') > 0 || usag.indexOf('Android') > 0;
	// 	if (isMobile) { //PCかスマホ条件分岐
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
	// }
  
	$('#fullpage').fullpage({
		licenseKey: null,
		sectionsColor: ['#000', '#f6ab00', '#7baabe', '#ccddff', '#4bbfc3'],
		anchors: ['home', 'about', 'product', 'timeline', 'contact'],
		menu: '#menu',
		autoScrolling: false,
		scrollHorizontally: true,
		afterLoad: function(anchorLink, index) {
			const loadedSection = $(this);
			//using index
			if (index == 1) {
				const video = document.querySelector('video');
				video.play();
			}
		}
	});

	const video = document.querySelector('video');
	video.addEventListener('loadeddata', function() {
		video.play();
	});

	$('#history').html('');
	for (let i = 0; i < 5; i++) {
		const html = `
		<div class="cd-timeline__block">
			<div class="cd-timeline__img cd-timeline__img--movie">
			<img src="vendors/vertical-timeline/assets/img/cd-icon-movie.svg" alt="Movie">
			</div> <!-- cd-timeline__img -->

			<div class="cd-timeline__content text-component">
			<h2>Title of section 2</h2>
			<p class="color-contrast-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde?</p>
			
			<div class="flex justify-between items-center">
				<span class="cd-timeline__date">Jan 18</span>
				<a href="#0" class="btn btn--subtle">Read more</a>
			</div>
			</div> <!-- cd-timeline__content -->
	  	</div> <!-- cd-timeline__block -->
		`;
		$('#history').append(html);
	}

	$('form').submit(function(event) {
		event.preventDefault();
		$.post('https://www.livlog.xyz/postmail/send/0424b2cb051ea363748f3113a157d3a9/', $('form').serialize())
		//サーバーからの返信を受け取る
		.done(function(json) {
			const data = JSON.parse(json);
			if (data.status == 200) {
				$('#message').html('正常に送信しました。');
			} else {
				const error = data.errors.errors[0];
				switch (error.code) {
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
		.fail(function() {
			$('#message').html('送信に失敗しました。');
		})
	})
  
});