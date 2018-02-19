$(function(){
	/* header load : html을 위한 헤더 인클루드입니다. */
	$('#header').load('/rentking/include/header.html');
	$('#footer').load('/rentking/include/footer.html');



	/* 상세검색 타이틀 높이값 관련:Start */
	$('.detail_search dt').each(function(){
		$(this).height($(this).next('dd').height());
	});
	$('.reserve_result dt').each(function(){
		$(this).height($(this).next('dd').height());
	});
	/* 상세검색 타이틀 높이값 관련:End */

	$('.placeholder').click(function(){
		$(this).prev('input').focus();
	});

	full_tab($('.full_tab'));
	layout_header(); /* 180212 추가 */
});

/* placehold */
function placeholder($target){
	$target.focus(function(){
		$target.next('.placeholder').hide();
	});
	if($target.val().length > 0){
		$target.siblings('.placeholder').hide();
	} else {
		$target.siblings('.placeholder').show();
	}
}

function full_tab($target){
	$target.children().outerWidth(Math.round($target.width() / $target.children().length));

	$target.children().click(function(){
		tab_Current($(this));
	});
}

function tab_Current($target){
	if($target.hasClass('current')){
		$target.siblings().removeClass('current');
	} else {
		$target.siblings().removeClass('current');
		$target.addClass('current');
	}
}

function toolTip_open($target){
	var $target = $('.tooltip_wrap.'+$target);
	if(!$target.hasClass('open')){
		$target.addClass('open');
		$target.css({
			opacity:1,
			top:'30px',
			zIndex:1
		});
	}
}

function toolTip_close($target){
	var $target = $('.tooltip_wrap.'+$target);
	$target.removeClass('open');
	$target.removeAttr('style');
}

function popup_open($target){
	$('#layer_wrap').addClass($target+' open');
	setTimeout(function(){
		$('#layer_wrap.'+$target).find('.layer_container').load('/rentking/popup/'+$target+'.html');
		$('#layer_wrap.'+$target).css({
			opacity:1
		});
	},100);
}

function popup_close($target){
	var $target = $($target);
	$target.closest('#layer_wrap').css({
		opacity:0
	});
	setTimeout(function(){
		$target.closest('#layer_wrap').removeClass();
		$target.closest('#layer_wrap').find('.layer_container').empty();
	},100);
}

/* 180212 추가 */
function layout_header() {
	$("#header .util .user_info").find("a").removeAttr("href");
}