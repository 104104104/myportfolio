//NowLoadingのプラグイン
Pace.on('done', function() {
    $('.wrap').addClass('do');
    $('.wrap').hide().fadeIn();
});
//NowLoadingここまで


//マップをレスポンシブにするためのjqueryプラグイン
$(function() {
    $('img[usemap]').rwdImageMaps();
});
//マップレスポンシブここまで

//トップページを動かすためのjs
//吉田信将のポートフォリオ　を固定した上で、棒を動かす
const newtopbarposi = $('#topchar1id').offset().top + $('#topchar1id').height();
$('#topbarid').offset({
    top: newtopbarposi
});
//トップページを動かすためのjsここまで



//メニューバーを固定するためのjs
var posi_top, wih_half, current_view;
var menupos;

//読み込み終わりに、座標取得&関数実行
$(window).on('load', function() {

    current_view = $(this).scrollTop();
    menupos = $('#menuid').offset();
    set_posi();

});
//ウィンドウリサイズ時に、座標取得&関数実行
$(window).resize(function() {

    current_view = $(this).scrollTop();
    menupos = $('#menuid').offset();
    set_posi();

});
//スクロール時に、座標取得&関数実行
$(window).scroll(function() {

    current_view = $(this).scrollTop();
    menupos = $('#menuid').offset();
    set_posi();

});

function set_posi() {

    //戻ればなんども
    if (current_view > menupos.top) {
        console.log(current_view, menupos.top);
        $('#menuid2').addClass('domenu');
        //console.log("over!");
    } else {
        $('#menuid2').removeClass('domenu');
        //console.log("not over!");
    }
}