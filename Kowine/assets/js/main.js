jQuery(document).on('click', '.mega-dropdown', function(e) {
    e.stopPropagation()
  })
$('.slider-products').slick({
  dots: true,
  infinite: true,
  arrows:false,
  speed: 900,
  slidesToShow: 3,
  slidesToScroll:3,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows:false,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows:false,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('.slider-products2').slick({
  dots: false,
  infinite: true,
  speed: 900,
  slidesToShow: 4,
  slidesToScroll:4 ,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows:true,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows:true,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows:true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('.slider3').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 768,
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

$('.slider-team').slick({
  dots: true,
  arrows:false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows:false,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows:false,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.slider-client').slick({
  arrows:true,
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows:true,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows:true,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows:true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


let btn=document.querySelector('#scrollBtn')
window.onscroll = function () {
  scrollFunction();
  };
  function scrollFunction() {
    if (
    
    document.documentElement.scrollTop > 200
    ) {
    btn.style.display = "block";
    } else {
    btn.style.display = "none";
    }
    }
    // When the user clicks on the button, scroll to the top of the document
    btn.addEventListener("click", backToTop);
    
    function backToTop() {
    document.documentElement.scrollTop = 0;
    }

    window.onscroll = function () {
      // console.log(document.documentElement.scrollTop);
    }

  