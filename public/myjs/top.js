//全部読み込んでから、表示する
$(window).on('load', function() {
    $('.wrap').addClass('do');
    $('.wrap').hide().fadeIn();
});

//トップページを動かすためのjs
//吉田信将のポートフォリオ　を固定した上で、棒を動かす
const newtopbarposi = $('#topchar1id').offset().top + $('#topchar1id').height();
$('#topbarid').offset({
    top: newtopbarposi
});
//トップページを動かすためのjsここまで

//メニューバーを固定するためのjs
var current_view;
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
        $('#menuid2').addClass('domenu');
    } else {
        $('#menuid2').removeClass('domenu');
    }
}