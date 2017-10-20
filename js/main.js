// Jquery script for smooth scrolling on a link
$('a[href*="#"]').click(function(event){
	$('html, body').animate({
	scrollTop: $( $.attr(this, 'href') ).offset().top
	}, 400);
   	event.preventDefault();
});

var $artistsl = $('.lefta');
var $artistsr = $('.righta');
var $events1 = $('.lleft');
var $events2 = $('.left');
var $events3 = $('.right');
var $events4 = $('.rright');
var $med1 = $('.media1');
var $med2 = $('.media2');
var $med3 = $('.media3');
var $med4 = $('.media4');
var $med5 = $('.media5');
var $med6 = $('.media6');
var $med7 = $('.media7');
var $med8 = $('.media8');
var $med9 = $('.media9');
var $med10 = $('.media10');
var $med11 = $('.media11');
var $med12 = $('.media12');

$artistsl.waypoint(function() {
	$artistsl.addClass('visible animated slideInLeft');
	$artistsr.addClass('visible animated slideInRight');
}, { offset: '80%'});
$events1.waypoint(function() {
	$events1.addClass('visible animated slideInLeft');
	$events2.addClass('visible animated rotateInUpRight');
	$events3.addClass('visible animated rotateInUpLeft');
	$events4.addClass('visible animated slideInRight');
}, { offset: '90%'});
$med1.waypoint(function() {
	$med1.addClass('visible animated rollIn');
	$med2.addClass('visible animated jackInTheBox');
	$med3.addClass('visible animated flipInX');
	$med4.addClass('visible animated fadeInRight');
}, { offset: '80%'});
$med5.waypoint(function() {
	$med5.addClass('visible animated zoomInLeft');
	$med6.addClass('visible animated flipInY');
	$med7.addClass('visible animated jackInTheBox');
	$med8.addClass('visible animated lightSpeedIn');
}, { offset: '80%'});
$med9.waypoint(function() {
	$med9.addClass('visible animated flipInX');
	$med10.addClass('visible animated rotateInUpRight');
	$med11.addClass('visible animated rotateInUpLeft');
	$med12.addClass('visible animated jackInTheBox');	
}, { offset: '80%'});