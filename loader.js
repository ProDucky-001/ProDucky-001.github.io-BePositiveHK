(function () {
  var loader = document.getElementById("page-loader");
  if (!loader) return;

  function hideLoader() {
    if (loader.classList.contains("is-hidden")) return;
    loader.classList.add("is-hidden");
    document.body.classList.remove("is-loading");
    loader.setAttribute("aria-hidden", "true");
  }

  function onReady() {
    window.setTimeout(hideLoader, 500);
  }

  if (document.readyState === "complete") {
    onReady();
  } else {
    window.addEventListener("load", onReady);
  }

  window.setTimeout(hideLoader, 6000);
})();
