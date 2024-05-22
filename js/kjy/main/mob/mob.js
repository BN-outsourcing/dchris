export default ()=>{

    new Swiper("._main .mobile .swiper", {
        loop: true,
        centeredSlides: true,
        // centeredSlidesBounds: true,
        slidesPerView: 2.9,
        effect: "creative",
        autoplay : {
            delay : 5000,
        },
        speed : 700,
        breakpoints : {
            481 : {
                slidesPerView: 3.3,
            }
        },
        creativeEffect: {
            perspective: true,
            limitProgress: 2,
            prev: {
                translate: ['-100%', '25%', -100],
                rotate: [0, 0, -20],
                scale : 0.9,
                origin: "bottom"
            },
            next: {
                translate: ['100%', '25%', -100],
                rotate: [0, 0, 20],
                scale : 0.9,
                origin: "bottom"
            },
        },
        on : {
            init : (swiper)=>{
                $('._main .mobile .swiper .swiper-slide .flex button.next').click(function(){
                    swiper.slideNext();
                });
                $('._main .mobile .swiper .swiper-slide .flex button.prev').click(function(){
                    swiper.slidePrev();
                });
            },
            slideNextTransitionStart : (swiper, event)=>{

                gsap.to('._main .mobile .background-image .right',{
                    opacity : 1
                });
            },
            slidePrevTransitionStart : ()=>{

                gsap.to('._main .mobile .background-image .left',{
                    opacity : 1
                });

            },
            transitionEnd : ()=>{
                
                gsap.to('._main .mobile .background-image .left',{
                    opacity : 0
                });
        
                gsap.to('._main .mobile .background-image .right',{
                    opacity : 0
                });

            },
        }
    });

    let chk = 0;

    $('._header .gnb .menu').click(function(){

        if(chk === 0){

            $('._header').addClass('black');
            $('.list-view').addClass('active');
            $('._header .gnb p').html('MAIN VIEW');

            chk = 1;

        }else{

            $('._header').removeClass('black');
            $('.list-view').removeClass('active');
            $('._header .gnb p').html('LIST VIEW');

            chk = 0;

        }

    });

    gsap.to('._main .mobile .scroll .bar .cir',{
        xPercent : -80,
        repeat : -1,
        yoyo : true
    })


    // 슬라이드 위치조정
    $(window).resize(function(){

        if(window.innerWidth < 821){

            const max = ( window.innerHeight - $('._main .mobile .m_nav').outerHeight());

            $('.list-view .over').css({
                "max-height" : max - $('._header').outerHeight()
            });

            $('._main .mobile .swiper-box').css({
                "top" : $('._header').outerHeight() + 15
            });

        }

        if(window.innerWidth < 821){

            const header = $('._header').outerHeight();

            $('._main .mobile .circle-slide').css({
                top : header + $('._main .mobile .circle-slide .slidebox .slide.center .imgbox').height() / 1.3
            })

        }

        if(window.innerWidth >= 821){
            $('._header').removeClass('black');
            $('.list-view').removeClass('active');
        }

    }).resize();
    
}