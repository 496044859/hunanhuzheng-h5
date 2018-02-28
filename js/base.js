var deviceWidth = document.documentElement.clientWidth;
if(deviceWidth > 750) deviceWidth = 750;
document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';

$(function(){
	
	$('body').on('click','#menu-btn',function(event){
		$('#menu-box').addClass('show');
	});
	
	$('body').on('click','#menu-close',function(event){
		$('#menu-box').removeClass('show');
	});
	
})
	
	