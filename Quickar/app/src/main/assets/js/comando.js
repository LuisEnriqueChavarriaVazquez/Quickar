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


$('.owl-one').owlCarousel({
    loop:false,
    dots:false,
    margin:10,
    autoWidth:true,
    center:false,
    smartsSpeed: 80000,
    responsive:{
        600:{
            items:3
        }
    }
});

$('.owl-two').owlCarousel({
    center:true,
    items:1.5,
    loop:false,
    dots:false,
    smartsSpeed: 100000,
    margin:10,
    responsive:{
        600:{
            items:3
        }
    }
});

$('.owl-three').owlCarousel({
    center:true,
    items:3,
    loop:false,
    dots:false,
    smartsSpeed: 100000,
    margin:0,
    responsive:{
        600:{
            items:5
        }
    }
});

});


document.addEventListener("DOMContentLoaded", function(){
    $('.preloader').delay(10000).fadeOut('fast');

    $('.preloader')
        .delay(5000)
        .fadeOut();
});
