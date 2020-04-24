$(document).ready(function()   {
       $('#cargador').fadeOut(4000);
       $('.parallax').parallax();
    //trigger menu

        $(".dropdown-button").dropdown();
        $('.tooltipped').tooltip({delay: 1});

         
        $('.carousel').carousel({
            padding: 0,
            dist: -500,
            shift: 10
        });
        

});


$(document).ready(function(){

var alto = $(window).height();
  $('#fullHeight').css({'height' : alto});

  /*efectos de carousel para la version de servicio PRO*/
$('.carousel.carousel-slider').carousel({fullWidth: true});



var consulta = $(".search-table").DataTable();

$(".input-search").keyup(function(){
    consulta.search($(this).val()).draw();


if ($(".input-search").val() == ""){
    $(".search-table").hide();
}else{
    $(".search-table").fadeIn();
};

});



var sectionMenu = document.getElementById('sectionMenu');
var headroom = new Headroom(sectionMenu);
headroom.init();



/*En esta parte se encuentran algunas llamadas
para poder ejecutar algunos efectos BASICOS*/
$('.carousel.carousel_shower').carousel({'dist' : '100'});
$('.carousel.carousel-slider').carousel({fullWidth: true});
$('.carousel.carousel-slider').carousel({'dist' : '0'});


$('.slider').slider();

   $('ul.tabs').tabs();
   $('#tabs-swipe-demo').tabs({ 'swipeable': true });

$(".button-collapse").sideNav({});
 $('.materialboxed').materialbox();

$('input#input_text').characterCounter();

$('.modal').modal();


//SLIDER DE PRODUCTOS
$('.carru').slick({
  dots: false,
  infinite: false,
  speed: 400,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
  adaptiveHeight: true,
  swipeable: true,
  slidesToScroll: true,
  nextArrow: '',
  prevArrow: ''
  });

});


document.addEventListener("DOMContentLoaded", function(){
    $('.preloader').delay(10000).fadeOut('fast');

    $('.preloader')
        .delay(5000)
        .fadeOut();
});
