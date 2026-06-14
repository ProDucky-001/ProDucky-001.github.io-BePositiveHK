(function () {
  const BUTTON_ICON =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z"></path></svg>';

  const videos = window.BEPOSITIVE_VIDEOS;
  const featuredId = window.BEPOSITIVE_FEATURED_ID;
  if (!Array.isArray(videos) || videos.length === 0) return;

  const embedSrc = (id) =>
    `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`;

  const watchUrl = (id) => `https://www.youtube.com/watch?v=${id}`;

  function createButtonLink(href, text, options) {
    const opts = options || {};
    const link = document.createElement("a");
    link.className = opts.small
      ? "cssbuttons-io-button cssbuttons-io-button--sm"
      : "cssbuttons-io-button";
    link.href = href;
    if (opts.target) link.target = opts.target;
    if (opts.rel) link.rel = opts.rel;
    link.innerHTML = BUTTON_ICON + "<span></span>";
    link.querySelector("span").textContent = text;
    return link;
  }

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

    const link = createButtonLink(watchUrl(video.id), "Watch on YouTube", {
      target: "_blank",
      rel: "noreferrer",
      small: true,
    });

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

    const link = createButtonLink(watchUrl(featured.id), "Watch on YouTube", {
      target: "_blank",
      rel: "noreferrer",
      small: true,
    });

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

    const link = createButtonLink(watchUrl(latest.id), "Watch on YouTube", {
      target: "_blank",
      rel: "noreferrer",
      small: true,
    });

    const more = document.createElement("p");
    more.className = "subtle";
    more.style.marginTop = "12px";
    more.innerHTML =
      'See all interviews on <a href="events.html">Events and Interviews</a>.';

    homePreview.appendChild(wrap);
    homePreview.appendChild(caption);
    homePreview.appendChild(link);
    homePreview.appendChild(more);
  }
})();
