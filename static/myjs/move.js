//全部読み込んでから、表示する
$(window).on('load', function() {
    $('.wrap').addClass('do');
    $('.wrap').hide().fadeIn();
});

//メニューバーのしたを開けるためのjquery
$('#spaceForMenuid').css('margin-top', String($('#normalmenu').height() + 20) + "px");