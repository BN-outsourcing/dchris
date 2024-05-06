export default ()=>{

    // 데스크탑
    gsap.registerPlugin(ScrollTrigger,ScrollSmoother);

    ScrollSmoother.create({
        smooth: 1,
    });

    ScrollTrigger.create({
        trigger : "._main .background-image",
        endTrigger : "._main",
        start : "top top",
        pin : true,
        pinSpace : true
    });

    gsap.timeline({})
    .to('._main .desktop .section01 .im-box .bb .back:not(.back2)',{
        scaleX : 0
    },'a')
    .to('._main .desktop .section01 .im-box .bb .back2',{
        scaleX : 0
    },'a+=30%')

    gsap.from('._main .desktop .section01 .inline .fade .p',{
        x : 50,
        opacity : 0
    });

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


    $('._main .desktop .section02 .col').mouseover(function(){

        if($(this).hasClass('left-top')){

            gsap.to('.img05',{
                opacity : 1
            });

            gsap.to('.img01, .img02, .img04',{
                opacity : 0
            });

        }

        if($(this).hasClass('left')){

            gsap.to('.img01',{
                opacity : 1
            });

            gsap.to('.img02, .img04, .img05',{
                opacity : 0
            });

        }

        if($(this).hasClass('right')){

            gsap.to('.img02',{
                opacity : 1
            });

            gsap.to('.img01, .img04, .img05',{
                opacity : 0
            });

        }

        });

    $('._main .desktop .section02 .col').mouseleave(function(){

        gsap.to('.img01, .img02, .img04, .img05',{
            opacity : 0
        });

    });

    $('._main .desktop .section02 .col').mouseover(function(){

        $(this).find('video')[0].play();

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
        $(this).find('video')[0].pause();

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

    $('._main .desktop .section02 .col').mouseover(function(e){

        $('.over-fix').html($(this).data('text'));

        gsap.to('.over-fix',{
            opacity : 1
        });

    });

}