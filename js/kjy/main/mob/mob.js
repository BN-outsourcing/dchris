export default ()=>{

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

    //모바일
    $(window).resize(function(){

        if(window.innerWidth < 821){

            const max = ( window.innerHeight - $('._main .mobile .m_nav').outerHeight());

            $('.list-view .over').css({
                "max-height" : max - $('._header').outerHeight() - 48
            });

        }

        if(window.innerWidth < 821){

            const header = $('._header').outerHeight();

            $('._main .mobile .circle-slide').css({
                top : header + $('._main .mobile .circle-slide .slidebox .slide.center .imgbox').height() / 1.3
            })

        }

    }).resize();

    const spacing = 360 / $('._main .mobile .circle-slide .slidebox .slide').length;
    let activeIndex = 0;

    $('._main .mobile .circle-slide .slidebox .slide').each((index,elm)=>{
        gsap.set(elm,{
            rotate : spacing * index
        });
    });

    $('._main .mobile .circle-slide .slidebox .slide .flex .prev').click(function(){
        gsap.to('._main .mobile .circle-slide .slidebox',{
            rotate : `+=${spacing}`,
            onStart : ()=>{
                $('._main .mobile .circle-slide .slidebox .slide').removeClass('center');
                gsap.to('._main .mobile .background-image .left',{
                    opacity : 1
                });
            },
            onComplete : ()=>{
                activeIndex -= 1;
                $('._main .mobile .circle-slide .slidebox .slide').eq(activeIndex).addClass('center');
                gsap.to('._main .mobile .background-image .left',{
                    opacity : 0
                });
                if((-$('._main .mobile .circle-slide .slidebox .slide').length) >= activeIndex){
                    activeIndex = 0;
                }
            }
        });
    });

    $('._main .mobile .circle-slide .slidebox .slide .flex .next').click(function(){
        gsap.to('._main .mobile .circle-slide .slidebox',{
            rotate : `-=${spacing}`,
            onStart : ()=>{
                $('._main .mobile .circle-slide .slidebox .slide').removeClass('center');
                gsap.to('._main .mobile .background-image .right',{
                    opacity : 1
                });
            },
            onComplete : ()=>{
                activeIndex += 1;
                $('._main .mobile .circle-slide .slidebox .slide').eq(activeIndex).addClass('center');
                gsap.to('._main .mobile .background-image .right',{
                    opacity : 0
                });
                if( $('._main .mobile .circle-slide .slidebox .slide').length <= activeIndex){
                    activeIndex = 0;
                }
            }
        });
    });
    
}