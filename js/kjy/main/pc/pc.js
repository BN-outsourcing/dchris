// 데스크탑
export default ()=>{

    gsap.registerPlugin(ScrollTrigger,ScrollSmoother);

    ScrollSmoother.create({
        smooth: 1,
    });

    gsap.timeline()
    .fromTo("._main .desktop .section01 .im-box .bb img",{
        scale : 1.3
    },{
        scale : 1,
        delay : 0.1,
        duration : 0.8,
        onComplete : ()=>{
            $('._main .desktop .section01 .im-box .bb').append('<img src="/asset/image/main/dchris.gif" alt="">');
        }
    })
    .from('._main .desktop .section01 .inline .fade .p',{
        y : 50,
        opacity : 0
    });

    gsap.timeline({
        scrollTrigger : {
            trigger : "._main .desktop .section01",
            pin : true,
            end : "+=300%",
            scrub : 1,
        }
    })
    .to('._main .desktop .section01 .inline .bt',{
        y : "-100vh",
    },'a')
    .to('._main .desktop .section01 .inline .fade',{
        y : "-100vh",
    },'a+=50%')
    .to('._main .desktop .section01 .im-box',{
        y : "-100vh",
    },'a+=50%')
    .to('._main .desktop .section01 .scroll-box',{
        y : "-100vh",
    },'a+=50%');
    

    // 영상 크기 조절
    const mm = gsap.matchMedia();

    mm.add("(min-width:1281px)",()=>{

        gsap.set($('._main .desktop .section02 .col').find('.video'),{
            width : ()=>{
                if(window.innerWidth >= 1281){
                    return `${170*100/1920*1}vw`
                }else{
                    return `${170*100/1480*1}vw`
                }
            },
            height : ()=>{
                if(window.innerWidth >= 1281){
                    return `${118*100/1920*1}vw`
                }else{
                    return `${118*100/1480*1}vw`
                }
            }
        });

    });

    mm.add("(max-width:1280px)",()=>{

        gsap.set($('._main .desktop .section02 .col').find('.video'),{
            width : ()=>{
                if(window.innerWidth >= 1281){
                    return `${170*100/1920*1}vw`
                }else{
                    return `${170*100/1480*1}vw`
                }
            },
            height : ()=>{
                if(window.innerWidth >= 1281){
                    return `${118*100/1920*1}vw`
                }else{
                    return `${118*100/1480*1}vw`
                }
            }
        });

    });

    // 얼굴 움직임
    $('._main .desktop .section02 .col').mouseover(function(){

        if($(this).hasClass('left-top')){

            gsap.to('.img04',{
                opacity : 1
            });

            gsap.to('.imgall:not(.img04)',{
                opacity : 0
            });

        }

        if($(this).hasClass('left')){

            gsap.to('.img03',{
                opacity : 1
            });

            gsap.to('.imgall:not(.img03)',{
                opacity : 0
            });

        }

        if($(this).hasClass('left-bottom')){

            gsap.to('.img01',{
                opacity : 1
            });

            gsap.to('.imgall:not(.img01)',{
                opacity : 0
            });

        }

        if($(this).hasClass('right')){

            gsap.to('.img05',{
                opacity : 1
            });

            gsap.to('.imgall:not(.img05)',{
                opacity : 0
            });

        }

        if($(this).hasClass('right-top')){

            gsap.to('.img07',{
                opacity : 1
            });

            gsap.to('.imgall:not(.img07)',{
                opacity : 0
            });

        }

        if($(this).hasClass('right-bottom')){

            gsap.to('.img06',{
                opacity : 1
            });

            gsap.to('.imgall:not(.img06)',{
                opacity : 0
            });

        }

    });

    $('._main .desktop .section02 .col').mouseleave(function(){

        gsap.to('.imgall',{
            opacity : 0
        });

    });

    // 영상 커짐
    $('._main .desktop .section02 .col').mouseover(function(){

        if(!$(this).find('video')[0].hasAttribute('autoplay')){
            $(this).find('video')[0].play();
        }

        gsap.set($(this),{
            zIndex : 3
        })

        gsap.to($(this).find('.video'),{
            width : ()=>{
                if(window.innerWidth >= 1281){
                    return `${377.99*100/1920*1}vw`
                }else{
                    return `${377.99*100/1480*1}vw`
                }
            },
            height : ()=>{
                if(window.innerWidth >= 1281){
                    return `${213*100/1920*1}vw`
                }else{
                    return `${213*100/1480*1}vw`
                }
            },
        });

    });

    $('._main .desktop .section02 .col').mouseleave(function(){

        if(!$(this).find('video')[0].hasAttribute('autoplay')){
            $(this).find('video')[0].pause();
        }

        gsap.set($(this),{
            zIndex : 1
        });

        gsap.to($(this).find('.video'),{
            width : ()=>{
                if(window.innerWidth >= 1281){
                    return `${170*100/1920*1}vw`
                }else{
                    return `${170*100/1480*1}vw`
                }
            },
            height : ()=>{
                if(window.innerWidth >= 1281){
                    return `${118*100/1920*1}vw`
                }else{
                    return `${118*100/1480*1}vw`
                }
            }
        });

    });

    // 마우스 포인터 따라오기
    $('._main .desktop .section02 .col').mousemove(function(e){

        const {clientX,clientY} = e;

        gsap.to('.over-fix',{
            left : clientX + 19.5,
            top :clientY - ($('.over-fix').height()/2)
        });

    });

    $('._main .desktop .section02 .col').mouseleave(function(e){

        gsap.to('.over-fix',{
            opacity : 0
        });

    });

    // 마우스 포인터 텍스트 변경
    $('._main .desktop .section02 .col').mouseover(function(e){

        $('.over-fix').html($(this).data('text'));

        gsap.to('.over-fix',{
            opacity : 1
        });

    });


    // 밑에 도착했을때 페이드인 아웃

    
    gsap.timeline({
        scrollTrigger : {
            trigger : "._main .section02",
            start : "top-=50% center",
        }
    })
    .to('._main .desktop .fade-in',{
        opacity : 1,
        duration : 0.7
    })
    .to('._main .desktop .fade-in',{
        opacity : 0,
        duration : 0.8
    })
    

    // 백그라운드 따라옴
    ScrollTrigger.create({
        trigger : "._main .background-image",
        endTrigger : "._main",
        start : "top top",
        pin : true,
        pinSpace : true
    });

}