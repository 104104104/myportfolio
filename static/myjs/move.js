//NowLoadingのプラグイン
Pace.on('done', function () {
	$('.wrap').addClass('do');
	$('.wrap').hide().fadeIn();
});
//NowLoadingここまで

//マップをレスポンシブにするためのjqueryプラグイン
$(function () {
	$('img[usemap]').rwdImageMaps();
});
//マップレスポンシブここまで

var posi_top, wih_half, current_view;

$(window).on('load', function () {
	var wih = window.innerHeight;
	var wih_half = wih / 2;
	current_view = wih_half;
	set_posi();
});

$(window).resize(function () {

	var wih = window.innerHeight;
	var wih_half = wih / 2;
	current_view = wih_half;
	set_posi();
});

$(window).scroll(function () {

	var wih = window.innerHeight;
	var wih_half = wih / 2;
	current_view = $(this).scrollTop();
	set_posi();

});

function set_posi() {

	$('.notAbsolute').each(function () {
		var posi = $(this).offset();
		posi_top = posi.top;

		//戻ればなんども
		if (current_view > posi_top + this.height * (8 / 9)) {
			$('.fixed-menu').addClass('do');
		} else {
			$('.fixed-menu').removeClass('do');
		}
	});

}