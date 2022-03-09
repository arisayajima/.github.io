$(function() {
	
	// �X���C�h�V���[
	$('.slider').slick({
		autoplay: true,
		dots: false,
		arrows: false,
		autoplaySpeed: 2000,
		speed: 2000,		　 //スライドするスピード
	});	

});
//ハンバーガーメニュー用
$(function() {
  $('.menu-btn').on('click', function() {
    if ($('.hamburger-menu').hasClass('active')) {
      $('.hamburger-menu').removeClass('active');
    } else {
      $('.hamburger-menu').addClass('active');
    }
  });
 });

//#lesson タブ切り替え用
$(function(){
	//tab1以外を非表示
	$('#contents .tab[id != "tab1"]').hide();

	//タブをクリック
	$("a").click(function(){
		$("#contents .tab").hide();
		$($(this).attr("href")).show();
		
		$(".current").removeClass("current");
		$(this).addClass("current");
		return false;
	});
});