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
                </p>
                <a href="/eng" class="en select">
                    en
                </p>

                <p class="lang">
                    Welcome to DCHRIS<br/>
                    Please select a language.<br/>
                    KR or EN
                </p>

            </section>
            <section class="section02">
                
            </section>
            <section class="section03">

            </section>
        </main>
    </div>
</div>


<?php 
    include_once $_SERVER["DOCUMENT_ROOT"]."/_end.php"
?>