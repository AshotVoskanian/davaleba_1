// set date

var d = new Date();
var month = parseInt(d.getMonth());
    month = month + 1;
$('#demo1').html(d.getDate() + '.' + month + '.' + d.getFullYear());
$('#demo2').html(d.getDate() + '.' + month + '.' + d.getFullYear());

// Mobile menu

$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
    if($(this).hasClass('open'))
    {
      $('.middle').css('width','100%');
      $('.mobile-menu').css('display','flex');
      $('.auto').css('display', 'none');
      $('.auto-red').css('display', 'block');
      $('.carousel-control-prev').css('display', 'none');
      $('.carousel-control-next').css('display', 'none');
      $('#nav-icon span').css('background-color', 'red');
    }
    else
    {
      $('.middle').css('width','70%');
      $('.mobile-menu').css('display','none');
      $('.auto').css('display', 'block');
      $('.auto-red').css('display', 'none');
      $('.carousel-control-prev').css('display', 'flex');
      $('.carousel-control-next').css('display', 'flex');
      $('#nav-icon span').css('background-color', '#fff');
    }     
	});
});

// dynamic scrolling

$(function() {
		$('.down-link').on('click', function(e) {
		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top+10}, 400, 'linear');
	});
});

// Map

function regular_map() {
	var var_location = new google.maps.LatLng(41.717776,  44.785046);

	var var_mapoptions = {
		center: var_location,
		zoom: 14
	};

	var var_map = new google.maps.Map(document.getElementById("map"),
		          var_mapoptions);

	var var_marker = new google.maps.Marker({
		position: var_location,
		map: var_map,
		title: "New York"
		});
	}
	 
	google.maps.event.addDomListener(window, 'load', regular_map);


// input check

function check() {
	var check_name = $('input[type=text]').val();
	if(!check_name) {
		$('#name_message').empty();
		$('#name_message').append("please write your name");
		event.preventDefault()
	}else if(check_name){
		$('#name_message').empty();
	}

	var check_email = $('input[type=email]').val();
	if(!check_email) {
		$('#email_message').empty();
		$('#email_message').append("please write your email");
		event.preventDefault()
	}else if(check_email){
		$('#email_message').empty();
	}

	var check_subject = $('#subject').val();
	if(!check_subject) {
		$('#subject_message').empty();
		$('#subject_message').append("please write subject");
		event.preventDefault()
	}else if(check_subject){
		$('#subject_message').empty();
	}

	var check_text = $('textarea').val();
	if(!check_text) {
		$('#textarea_message').empty();
		$('#textarea_message').append("please write text");
		event.preventDefault()
	}else if(check_text){
		$('#textarea_message').empty();
	}

	var check_input = $('input[type=radio]:checked').val();
	if(!check_input){
		$('#radio_message').empty();
		$('#radio_message').append("please choose your gender");
		event.preventDefault()
	}else if(check_input){
		$('#radio_message').empty();
	}
}
