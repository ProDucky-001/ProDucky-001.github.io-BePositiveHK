(function () {
  const videos = window.BEPOSITIVE_VIDEOS;
  const featuredId = window.BEPOSITIVE_FEATURED_ID;
  if (!Array.isArray(videos) || videos.length === 0) return;

  const embedSrc = (id) =>
    `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`;

  const watchUrl = (id) => `https://www.youtube.com/watch?v=${id}`;

  function createIframe(id, title) {
    const iframe = document.createElement("iframe");
    iframe.className = "yt-frame";
    iframe.loading = "lazy";
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.setAttribute("allowfullscreen", "");
    iframe.src = embedSrc(id);
    iframe.title = title;
    return iframe;
  }

  function createVideoCard(video) {
    const card = document.createElement("article");
    card.className = "video-card";

    const media = document.createElement("div");
    media.className = "video-card__media";
    media.appendChild(createIframe(video.id, video.title));

    const body = document.createElement("div");
    body.className = "video-card__body";

    const heading = document.createElement("h3");
    heading.className = "video-card__title";
    heading.textContent = video.title;

    const link = document.createElement("a");
    link.className = "video-card__link";
    link.href = watchUrl(video.id);
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = "Watch on YouTube";

    body.appendChild(heading);
    body.appendChild(link);
    card.appendChild(media);
    card.appendChild(body);
    return card;
  }

  const featuredMount = document.getElementById("featured-video");
  if (featuredMount) {
    const featured =
      videos.find((v) => v.id === featuredId) || videos[0];
    featuredMount.innerHTML = "";
    const wrap = document.createElement("div");
    wrap.className = "yt-wrap";
    wrap.appendChild(createIframe(featured.id, featured.title));

    const caption = document.createElement("p");
    caption.className = "video-featured-caption";
    caption.textContent = featured.title;

    const link = document.createElement("a");
    link.className = "video-card__link";
    link.href = watchUrl(featured.id);
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = "Watch on YouTube";

    featuredMount.appendChild(wrap);
    featuredMount.appendChild(caption);
    featuredMount.appendChild(link);
  }

  const galleryMount = document.getElementById("video-gallery");
  if (galleryMount) {
    galleryMount.innerHTML = "";
    videos.forEach((video) => {
      galleryMount.appendChild(createVideoCard(video));
    });
  }

  const homePreview = document.getElementById("home-video-preview");
  if (homePreview) {
    const latest = videos[0];
    homePreview.innerHTML = "";
    const wrap = document.createElement("div");
    wrap.className = "yt-wrap";
    wrap.appendChild(createIframe(latest.id, latest.title));

    const caption = document.createElement("p");
    caption.className = "subtle";
    caption.style.marginTop = "10px";
    caption.textContent = latest.title;

    const link = document.createElement("a");
    link.className = "video-card__link";
    link.href = watchUrl(latest.id);
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = "Watch on YouTube";

    const more = document.createElement("p");
    more.className = "subtle";
    more.style.marginTop = "8px";
    more.innerHTML =
      'See all interviews on <a href="events.html">Events and Interviews</a>.';

    homePreview.appendChild(wrap);
    homePreview.appendChild(caption);
    homePreview.appendChild(link);
    homePreview.appendChild(more);
  }
})();
