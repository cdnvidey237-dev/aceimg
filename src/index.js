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
      display: block;
      width: 100%;
      height: auto;
    }

    /*
      Semua iklan berada di titik tengah video.
      Z-index berbeda supaya semuanya tetap aktif.
    */

    .ad-overlay {
      position: absolute;
      top: 50%;
      left: 50%;

      display: flex;
      justify-content: center;
      align-items: center;

      pointer-events: auto;
    }

    /* 300 x 50 */
    .ad1 {
      width: 300px;
      height: 50px;
      transform: translate(-50%, -50%);
      z-index: 20;
    }

    /* 308 x 286 */
    .ad2 {
      width: 308px;
      height: 286px;
      transform: translate(-50%, -50%);
      z-index: 21;
    }

    /* 125 x 125 */
    .ad3 {
      width: 125px;
      height: 125px;
      transform: translate(-50%, -50%);
      z-index: 22;
    }

    /* Native Interstitial */
    .ad4 {
      width: 100%;
      max-width: 320px;
      transform: translate(-50%, -50%);
      z-index: 23;
    }

    /* 250 x 250 */
    .ad5 {
      width: 250px;
      height: 250px;
      transform: translate(-50%, -50%);
      z-index: 24;
    }

    @media (max-width: 640px) {

      .ad2 {
        max-width: 90vw;
      }

      .ad5 {
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
      controls
      playsinline
      preload="metadata">

      <source
        src="https://cdn2.videy.co/hgVD4zy81.mp4"
        type="video/mp4">

      Browser kamu tidak mendukung video.
    </video>


    <!-- ================================= -->
    <!-- JUICYADS 1127281 - 300x50 -->
    <!-- ================================= -->

    <div class="ad-overlay ad1">

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


    <!-- ================================= -->
    <!-- JUICYADS 1127282 - 308x286 -->
    <!-- ================================= -->

    <div class="ad-overlay ad2">

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


    <!-- ================================= -->
    <!-- JUICYADS 1127284 - 125x125 -->
    <!-- ================================= -->

    <div class="ad-overlay ad3">

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


    <!-- ================================= -->
    <!-- JUICYADS NATIVE INTERSTITIAL -->
    <!-- ZONE 1127286 -->
    <!-- ================================= -->

    <div class="ad-overlay ad4">

      <script
        type="text/javascript"
        data-id="juicyads-native-ads"
        data-ad-zone="1127286"
        data-targets="a"
        src="https://js.juicyads.com/juicyads.native-ads.min.js">
      </script>

    </div>


    <!-- ================================= -->
    <!-- JUICYADS 1127287 - 250x250 -->
    <!-- ================================= -->

    <div class="ad-overlay ad5">

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

</body>
</html>
