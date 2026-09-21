export default {
  async fetch(request) {
    const VIDEO_URL = "https://cdn2.videy.co/ZqI9bBP11.mp4";

    return new Response(`<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <meta name="juicyads-site-verification" content="0c2ef4163313b08e5965d2436a5760b0">

  <link rel="icon" href="data:,">
  <title>Video</title>

  <style>
    * {
      box-sizing: border-box;
    }

    html, body {
      margin: 0;
      padding: 0;
      width: 100%;
      min-height: 100%;
      background: #000;
      font-family: Arial, sans-serif;
    }

    .page {
      width: 100%;
      max-width: 640px;
      margin: 0 auto;
      padding-bottom: 30px;
    }

    .video-container {
      position: relative;
      width: 100%;
    }

    video {
      width: 100%;
      height: auto;
      display: block;
    }

    .ad {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 12px auto;
      width: 100%;
      overflow: hidden;
    }

    .ad-300x50 {
      min-height: 50px;
    }

    .ad-308x286 {
      min-height: 286px;
    }

    .ad-125x125 {
      min-height: 125px;
    }

    .ad-250x250 {
      min-height: 250px;
    }
  </style>

  <!-- JuicyAds v3.0 -->
  <script type="text/javascript" data-cfasync="false" async src="https://poweredby.jads.co/js/jads.js"></script>

</head>

<body>

  <div class="page">

    <!-- VIDEO -->
    <div class="video-container">
      <video controls playsinline preload="metadata">
        <source src="${VIDEO_URL}" type="video/mp4">
        Browser kamu tidak mendukung video.
      </video>
    </div>


    <!-- JUICYADS 1127281 : 300x50 -->
    <div class="ad ad-300x50">
      <ins id="1127281" data-width="300" data-height="50"></ins>

      <script type="text/javascript" data-cfasync="false" async>
        (adsbyjuicy = window.adsbyjuicy || []).push({
          'adzone': 1127281
        });
      </script>
    </div>


    <!-- JUICYADS 1127282 : 308x286 -->
    <div class="ad ad-308x286">
      <ins id="1127282" data-width="308" data-height="286"></ins>

      <script type="text/javascript" data-cfasync="false" async>
        (adsbyjuicy = window.adsbyjuicy || []).push({
          'adzone': 1127282
        });
      </script>
    </div>


    <!-- JUICYADS 1127284 : 125x125 -->
    <div class="ad ad-125x125">
      <ins id="1127284" data-width="125" data-height="125"></ins>

      <script type="text/javascript" data-cfasync="false" async>
        (adsbyjuicy = window.adsbyjuicy || []).push({
          'adzone': 1127284
        });
      </script>
    </div>


    <!-- JUICYADS NATIVE INTERSTITIAL 1127286 -->
    <script
      type="text/javascript"
      data-id="juicyads-native-ads"
      data-ad-zone="1127286"
      data-targets="a"
      src="https://js.juicyads.com/juicyads.native-ads.min.js">
    </script>


    <!-- JUICYADS 1127287 : 250x250 -->
    <div class="ad ad-250x250">
      <ins id="1127287" data-width="250" data-height="250"></ins>

      <script type="text/javascript" data-cfasync="false" async>
        (adsbyjuicy = window.adsbyjuicy || []).push({
          'adzone': 1127287
        });
      </script>
    </div>

  </div>

</body>
</html>`, {
      headers: {
        "Content-Type": "text/html; charset=UTF-8",
        "Cache-Control": "no-store"
      }
    });
  }
};
