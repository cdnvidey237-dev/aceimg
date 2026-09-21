<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <meta name="juicyads-site-verification"
        content="0c2ef4163313b08e5965d2436a5760b0">

  <title>Video</title>

  <style>
    * {
      box-sizing: border-box;
    }

    html,
    body {
      margin: 0;
      padding: 0;
      width: 100%;
      min-height: 100%;
      background: #000;
    }

    body {
      display: flex;
      justify-content: center;
      align-items: flex-start;
    }

    .video-container {
      position: relative;
      width: 100%;
      max-width: 640px;
      margin: 0 auto;
    }

    video {
      width: 100%;
      height: auto;
      display: block;
    }

    /*
      Area iklan overlay.
      Hanya satu zone yang aktif pada satu waktu.
    */
    .ad-overlay {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      display: none;
      justify-content: center;
      align-items: center;

      z-index: 20;
      max-width: 95vw;
      max-height: 80vh;
      overflow: hidden;
    }

    .ad-overlay.active {
      display: flex;
    }

    .ad-300x50 {
      width: 300px;
      height: 50px;
    }

    .ad-308x286 {
      width: 308px;
      height: 286px;
    }

    .ad-125x125 {
      width: 125px;
      height: 125px;
    }

    .ad-250x250 {
      width: 250px;
      height: 250px;
    }

    .native-ad {
      width: 100%;
      max-width: 320px;
    }

    @media (max-width: 640px) {
      .ad-308x286 {
        width: 308px;
        max-width: 90vw;
      }

      .ad-250x250 {
        width: 250px;
        max-width: 80vw;
      }
    }
  </style>

  <!-- JuicyAds v3.0 -->
  <script
    type="text/javascript"
    data-cfasync="false"
    async
    src="https://poweredby.jads.co/js/jads.js">
  </script>

</head>

<body>

  <div class="video-container">

    <!-- VIDEO -->
    <video
      id="video"
      controls
      playsinline
      preload="metadata">

      <source
        src="https://cdn2.videy.co/ZqI9bBP11.mp4"
        type="video/mp4">

      Browser kamu tidak mendukung video.
    </video>


    <!-- ========================= -->
    <!-- IKLAN 1 - 1127281 -->
    <!-- ========================= -->

    <div
      id="ad1"
      class="ad-overlay ad-300x50">

      <ins
        id="1127281"
        data-width="300"
        data-height="50">
      </ins>

      <script
        type="text/javascript"
        data-cfasync="false"
        async>

        (adsbyjuicy = window.adsbyjuicy || []).push({
          'adzone': 1127281
        });

      </script>
    </div>


    <!-- ========================= -->
    <!-- IKLAN 2 - 1127282 -->
    <!-- ========================= -->

    <div
      id="ad2"
      class="ad-overlay ad-308x286">

      <ins
        id="1127282"
        data-width="308"
        data-height="286">
      </ins>

      <script
        type="text/javascript"
        data-cfasync="false"
        async>

        (adsbyjuicy = window.adsbyjuicy || []).push({
          'adzone': 1127282
        });

      </script>
    </div>


    <!-- ========================= -->
    <!-- IKLAN 3 - 1127284 -->
    <!-- ========================= -->

    <div
      id="ad3"
      class="ad-overlay ad-125x125">

      <ins
        id="1127284"
        data-width="125"
        data-height="125">
      </ins>

      <script
        type="text/javascript"
        data-cfasync="false"
        async>

        (adsbyjuicy = window.adsbyjuicy || []).push({
          'adzone': 1127284
        });

      </script>
    </div>


    <!-- ========================= -->
    <!-- IKLAN 4 - NATIVE 1127286 -->
    <!-- ========================= -->

    <div
      id="ad4"
      class="ad-overlay native-ad">

      <script
        type="text/javascript"
        data-id="juicyads-native-ads"
        data-ad-zone="1127286"
        data-targets="a"
        src="https://js.juicyads.com/juicyads.native-ads.min.js">
      </script>

    </div>


    <!-- ========================= -->
    <!-- IKLAN 5 - 1127287 -->
    <!-- ========================= -->

    <div
      id="ad5"
      class="ad-overlay ad-250x250">

      <ins
        id="1127287"
        data-width="250"
        data-height="250">
      </ins>

      <script
        type="text/javascript"
        data-cfasync="false"
        async>

        (adsbyjuicy = window.adsbyjuicy || []).push({
          'adzone': 1127287
        });

      </script>
    </div>

  </div>


  <!-- ========================= -->
  <!-- PERGANTIAN IKLAN -->
  <!-- ========================= -->

  <script>

    const ads = [
      document.getElementById("ad1"),
      document.getElementById("ad2"),
      document.getElementById("ad3"),
      document.getElementById("ad4"),
      document.getElementById("ad5")
    ];

    let currentAd = 0;

    function showAd(index) {

      ads.forEach(ad => {
        ad.classList.remove("active");
      });

      if (ads[index]) {
        ads[index].classList.add("active");
      }
    }

    function nextAd() {

      currentAd++;

      if (currentAd >= ads.length) {
        currentAd = 0;
      }

      showAd(currentAd);
    }

    /*
      Iklan pertama muncul setelah 3 detik.
    */

    setTimeout(() => {

      showAd(0);

    }, 3000);


    /*
      Setiap 10 detik berganti ke zone berikutnya.
    */

    setInterval(() => {

      nextAd();

    }, 10000);

  </script>

</body>
</html>
