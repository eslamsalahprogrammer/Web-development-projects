

$(function(){

    /////////////////////////////       navbar hover pointre addaclass active and remove from siblings   //////////////////////////

    $(".navbar-nav .nav-item .nav-link").click(function(){

        $(".navbar-nav .nav-link").removeClass("active");

        $(this).addClass("active");

    });



    
    
    /////////////////////////////////////     adjust slider height   ////////////////////////////////////////////
    


    var winH = $(window).height();
    var navH = $(".navbar").innerHeight();

    $(".slider ,.carousel-item").height((winH - navH)+navH);
 


    
    
    /////////////////////////////// create testimonial slider ////////////////////////////////////////////////

    (function testslider(){

        $(".test-slider .active").each(function(){

            if(!$(this).is(':last-child')){

                $(this).delay(4000).fadeOut(2000,function(){

                    $(this).removeClass("active").next().addClass("active").fadeIn(1000);

                    testslider();
                }); 

            } else{

                $(this).delay(4000).fadeOut(2000,function(){

                    $(this).removeClass("active");

                    $(".test-slider .client").eq(0).addClass("active").fadeIn(1000);

                    testslider();
                })

            }


        });

    }());



    //////////////////////////////    scroll to top button   ////////////////////////////// 


$(window).scroll(function(){

    if($(window).scrollTop()  > 1500){

        $(".scrollTop").fadeIn(1000);

    }else{

        $(".scrollTop").fadeOut(1000);

    }

});

$('.scrollTop').click(function(e){

    e.preventDefault();

    $("html").animate({

        scrollTop : 0

    }, 500 )

});




//////////////////////////////////////////////////////////////       doctor page      ///////////////////////////////////////////////////////////    



  ///////////////   adjust d-slider height /////////////////

$(".d-slider").height((winH - navH));

});