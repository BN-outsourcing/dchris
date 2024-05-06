<?php 
    include_once $_SERVER["DOCUMENT_ROOT"]."/_head.php";
?>

<div id="smooth-wrapper">
    <div id="smooth-content">
        <main class="_main">
            <section class="intro">
                <video 
                    src="/asset/video/pc.mp4" 
                    autoplay 
                    muted 
                    playsinline 
                    loop
                ></video>

                <div class="sel-box">
                    <a href="/kor" class="kr select">KR</a>
                    <a href="/eng" class="en select">EN</a>
                </div>

                <div class="lang">
                    <p>
                        Welcome to DCHRIS<br/>
                        Please select a language.<br/>
                        KR or EN
                    </p>
                </div>

            </section>
        </main>
    </div>
</div>

<script type="module" src="/js/kjy/main/intro.js"></script>

<?php 
    include_once $_SERVER["DOCUMENT_ROOT"]."/_end.php"
?>