var stickyNavTop = $('.nav-container').offset().top;

$(window).scroll(function() {
	if ($(window).scrollTop() > stickyNavTop){
		$('.nav-container').addClass('fixed');
		$('.about').addClass('fixed');
	}
	else{
		$('.nav-container').removeClass('fixed');
		$('.about').removeClass('fixed');
	}
});

var addEvent = function(object, type, callback) {
    if (object == null || typeof(object) == 'undefined') return;
    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on"+type] = callback;
    }
};
/*
addEvent(window, "resize", function(event) {
	var a = 0;
setTimeout(function(){ console.log('resized'); a++; }, 1000);
console.log(a);
  
});

addEvent(window, "scroll", function(event) {
  console.log('scrolled');
});
*/

var cnt=0, texts=[];

// save the texts in an array for re-use
$(".subContent").each(function() {
  texts[cnt++]=$(this).text();
});
function slide() {
  if (cnt>=texts.length) cnt=0;
  $('#subMessage').html(texts[cnt++]);
  $('#subMessage')
    .fadeIn('slow').animate({opacity: 1.0}, 2000).fadeOut('slow', 
     function() {
       return slide()
     }
  );      
}      
slide();