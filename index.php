<?php 
    include_once $_SERVER["DOCUMENT_ROOT"]."/_head.php";
    include_once $_SERVER["DOCUMENT_ROOT"]."/components/layout/_header.html";
?>

<div id="smooth-wrapper">
    <div id="smooth-content">
        <main class="_main">
            <section class="section01">
                <video 
                    src="/asset/video/pc.mp4" 
                    autoplay 
                    muted 
                    playsinline 
                    loop
                ></video>

                <a href="/kor" class="kr select">
                    KR
                </a>
                <a href="/eng" class="en select">
                    en
                </a>

                <p class="lang">
                    Welcome to DCHRIS<br/>
                    Please select a language.<br/>
                    KR or EN
                </p>

            </section>

            <section class="section02">

                <div class="img">
                    <img class="img01" src="/asset/image/pc/1.jpg" alt="">
                    <img class="img02" src="/asset/image/pc/2.jpg" alt="">
                    <img class="img03" src="/asset/image/pc/3.jpg" alt="">
                    <img class="img04" src="/asset/image/pc/4.jpg" alt="">
                    <img class="img05" src="/asset/image/pc/5.jpg" alt="">
                </div>

                <div class="section02-one">

                    <div class="flex">
                        <div class="im-box">
                            <div class="bb"></div>
                            <div class="tbx">
                                <p>DCHRIS</p>
                                <div class="arr">-></div>
                            </div>
                        </div>
    
                        <div class="scroll-box">
                            <p>SCROLL DOWN</p>
                            <div class="scroll">
                                <div class="cir"></div>
                            </div>
                        </div>
                    </div>

                    <div class="bbt">

                        <div class="inline">
                            <h2 class="bt">
                                DCHRIS
                            </h2>
        
                            <div class="p">
                                <p>
                                    D-black SMP Design is a professional. <br/>
                                    As an SMP educational institution, the latest SMP <br/>
                                    technology ASMP advanced technology developed <br/>
                                    for the first time in the world based on the best <br/>
                                    SMP expert leading formation.
                                </p>
                                <nav>
                                    <a href="">ABOUT</a>
                                    <a href="">MORE</a>
                                </nav>
                            </div>
                        </div>

                    </div>

                </div>

                <div class="section02-two">

                    <nav>
                        <a href=""><i class="xi-whatsapp"></i> Whats app</a>
                        <a href=""><i class="xi-speech"></i> KaKao Talk</a>
                    </nav>

                    <div class="col left-top">
                        <p>D-BLACK ACADEMY</p>
                        <div class="video"></div>
                    </div>

                    <div class="col left">
                        <p>DCHRIS</p>
                        <div class="video"></div>
                    </div>

                    <div class="col left">
                        <p>DX BLACK</p>
                        <div class="video"></div>
                    </div>

                    <div class="col left">
                        <p>D-VERGENCE</p>
                        <div class="video"></div>
                    </div>

                    <div class="col right">
                        <p>D-BLACK PROJECT</p>
                        <div class="video"></div>
                    </div>

                    <div class="col right">
                        <p>D-SCALP CARE</p>
                        <div class="video"></div>
                    </div>

                    <div class="col right">
                        <p>D-STAR</p>
                        <div class="video"></div>
                    </div>

                </div>

            </section>
        </main>
    </div>
</div>

<script>
    
    gsap.registerPlugin(ScrollTrigger,ScrollSmoother);
    
    ScrollSmoother.create({
        smooth: 1,
    });

    ScrollTrigger.create({
        trigger : "._main .section02 .img",
        endTrigger : "._main .section02",
        start : "top top",
        pin : true,
        pinSpace : true
    });

    $('._main .section02 .section02-two .col').mouseover(function(){

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

    $('._main .section02 .section02-two .col').mouseleave(function(){

        gsap.to('.img01, .img02, .img04, .img05',{
            opacity : 0
        });

    });


</script>

<?php 
    include_once $_SERVER["DOCUMENT_ROOT"]."/_end.php"
?>