$(document).ready(function() {
    $('.banner-inner').slick(
        {
            nextArrow: '<button class="my-arrow-class BannerbtnNext "><i class="fa fa-angle-right" ></i> </button>',
            prevArrow: '<button  class="my-arrow-class BannerbtnPrev"><i class="fa fa-angle-left" ></i></button>'
        }
    );

    $('.client-slider').slick(
        {
            nextArrow: '<button class="my-arrow-class client-btnNext "><i class="fa fa-angle-right" ></i> </button>',
            prevArrow: '<button  class="my-arrow-class client-btnPrev"><i class="fa fa-angle-left" ></i></button>'
        }
    );
    $( ".icon-one" ).click(function(){
        $(this).toggleClass('active-one');
        $( ".nav-buttom nav ul" ).slideToggle();
        
    });

  })
