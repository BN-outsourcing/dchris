<?php 
    include_once $_SERVER["DOCUMENT_ROOT"]."/_head.php";
    include_once $_SERVER["DOCUMENT_ROOT"]."/components/layout/_header.html";
?>

<div id="smooth-wrapper">
    <div id="smooth-content">
        <main class="_main">
            <section class="section01">
                <video 
                    src="/asset/video/인트로 영상pc.mp4" 
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

                <div class="section02-two">

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
</script>

<?php 
    include_once $_SERVER["DOCUMENT_ROOT"]."/_end.php"
?>