			function isTouchDevice(){
				try{
					document.createEvent("TouchEvent");
					//return true;
				}catch(e){
					//return false;
				}
			}
			function touchScroll(id){
				if(isTouchDevice()){ //if touch events exist...
					var el=document.getElementById(id);
					var scrollStartPos=0;

					document.getElementById(id).addEventListener("touchstart", function(event) {
						scrollStartPos=this.scrollTop+event.touches[0].pageY;
						event.preventDefault();
					},false);

					document.getElementById(id).addEventListener("touchmove", function(event) {
						this.scrollTop=scrollStartPos-event.touches[0].pageY;
						event.preventDefault();
					},false);
				}
			}

$(document).ready(function(){
	
	//Initialize the gallery.
	$(function(){		
		$('#thumbs a').touchTouch();
	});

	$('.open-content').click(function(){
		$('.content').animate({
			  marginLeft: "-180px",
		}, 400 );
		//$('.sidebar').show();
		$('.open-content').hide();
		$('.close-content').show();
		$('.contactForm').hide();
		return false;
	});
	
	
	$('.close-content').click(function(){
		$('.content').animate({
			  marginLeft: "0px",
		}, 400 );
		//$('.sidebar').hide(800);
		$('.open-content').show();
		$('.close-content').hide();
		$('.contactForm').show();
		return false;
	});
	
	$(".header").swipe( {
	  swipeLeft:function(event, direction, distance, duration, fingerCount) {
		$('.open-content').hide();
		$('.contactForm').hide();
		$('.close-content').show();
		$('.content').animate({
			  marginLeft: "-150px",
		}, 150 );	
	  },
		swipeRight:function(event, direction, distance, duration, fingerCount) {
		$('.open-content').show();
		$('.contactForm').show();
		$('.close-content').hide();
		$('.content').animate({
			  marginLeft: "0px",
		}, 150 );	
	  },
	  threshold:30
	});
	
	$(".container").swipe( {
	  swipeLeft:function(event, direction, distance, duration, fingerCount) {
		$('.open-content').hide();
		$('.contactForm').hide();
		$('.close-content').show();
		$('.content').animate({
			  marginLeft: "-150px",
		}, 150 );	
	  },
		swipeRight:function(event, direction, distance, duration, fingerCount) {
		$('.open-content').show();
		$('.contactForm').show();
		$('.close-content').hide();
		$('.content').animate({
			  marginLeft: "0px",
		}, 150 );	
	  },
	  threshold:30
	});
	
	$(".decoration").swipe( {
	  swipeLeft:function(event, direction, distance, duration, fingerCount) {
		$('.open-content').hide();
		$('.contactForm').hide();
		$('.close-content').show();
		$('.content').animate({
			  marginLeft: "-150px",
		}, 150 );	
	  },
		swipeRight:function(event, direction, distance, duration, fingerCount) {
		$('.open-content').show();
		$('.contactForm').show();
		$('.close-content').hide();
		$('.content').animate({
			  marginLeft: "0px",
		}, 150 );	
	  },
	  threshold:50
	});
	

	
	(function(a,b,c){if(c in b&&b[c]){var d,e=a.location,f=/^(a|html)$/i;a.addEventListener("click",function(a){d=a.target;while(!f.test(d.nodeName))d=d.parentNode;"href"in d&&(d.href.indexOf("http")||~d.href.indexOf(e.host))&&(a.preventDefault(),e.href=d.href)},!1)}})(document,window.navigator,"standalone")

	setTimeout(function() { window.scrollTo(0, 1) }, 100);
	
	var slider = new Swipe(document.getElementById('slider'));

	$('.next-but-swipe').click(function(){
		slider.next();
		return false;
	});
	
	$('.prev-but-swipe').click(function(){
		slider.prev();
		return false;
	});

	$('.toggle-plus').click(function(){
		$(this).toggleClass('toggle-plus-selected');
		$(this).parent().find('.toggle-content').toggle(100);
		return false;
	});
	
	$('.toggle-arrow').click(function(){
		$(this).toggleClass('toggle-arrow-selected');
		$(this).parent().find('.toggle-content').toggle(100);
		return false;
	});

	$(".notification-quit-red").click(function(){
	  $(".notification-box-red").hide("slow");
	  return false;
	});
	
	$(".notification-quit-green").click(function(){
	  $(".notification-box-green").hide("slow");
	  return false;
	});
	
	$(".notification-quit-yellow").click(function(){
	  $(".notification-box-yellow").hide("slow");
	  return false;
	});
	
	$(".notification-quit-blue").click(function(){
	  $(".notification-box-blue").hide("slow");
	  return false;
	});


	$('.checkbox').click(function(){
		$(this).toggleClass('selected-checkbox');
		return false;
	});
	
	$('.checkbox2').click(function(){
		$(this).toggleClass('selected-checkbox2');
		return false;
	});
	
	$('.radiobox').click(function(){
		$(this).toggleClass('selected-radiobox');
		return false;
	});
	
	$('.radiobox2').click(function(){
		$(this).toggleClass('selected-radiobox2');
		return false;
	});

});