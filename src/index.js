export default {
  async fetch(request) {
    const VIDEO_URL = "https://cdn2.videy.co/hgVD4zy81.mp4";

    return new Response(`<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- JuicyAds verification -->
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

    /* IKLAN DI TENGAH VIDEO */
    .ad-overlay {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 728px;
      height: 90px;
      z-index: 10;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
    }

    @media (max-width: 728px) {
      .ad-overlay {
        width: 100%;
        height: 90px;
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

    <video controls playsinline preload="metadata">
      <source src="${VIDEO_URL}" type="video/mp4">
      Browser kamu tidak mendukung video.
    </video>

    <!-- JuicyAds Leaderboard 728x90 -->
    <div class="ad-overlay">
      <ins id="1127279" data-width="728" data-height="90"></ins>

      <script
        type="text/javascript"
        data-cfasync="false"
        async>
        (adsbyjuicy = window.adsbyjuicy || []).push({
          'adzone': 1127279
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
