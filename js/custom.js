$(document).ready(function(){
  $('.animesion').slick({
  dots: true,
  infinite: true,
  autoplay:true,
  speed: 300,
  prevArrow: '<i class="fa fa-angle-left left_icon"></i>',
  nextArrow: '<i class="fa fa-angle-right right_icon"></i>',
  slidesToShow: 4,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


// venobox js start
  new VenoBox({
    selector: '.venoboxedit',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});

  new VenoBox({
      selector: '.venoboxvideo',
  });
// venobox js End

  // WOW JS Start
      new WOW().init();



});