export default {
  async fetch(request) {
    const VIDEO_URL = "https://aceimg.com/upload/?f=x86keXwV2.mp4";

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
    }

    .video-box {
      width: 100%;
      max-width: 640px;
      margin: 0 auto;
    }

    video {
      width: 100%;
      height: auto;
      display: block;
    }
  </style>
</head>

<body>

  <div class="video-box">
    <video controls playsinline preload="metadata">
      <source src="${VIDEO_URL}" type="video/mp4">
      Browser kamu tidak mendukung video.
    </video>
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
