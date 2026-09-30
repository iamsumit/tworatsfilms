// Two Rats — small progressive enhancements. Site works fully without JS.
(function () {
  'use strict';

  // Keep the footer copyright year current.
  var yearEl = document.querySelector('[data-year]');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // In the shots gallery, only one clip plays at a time.
  var shotVideos = Array.prototype.slice.call(document.querySelectorAll('.shots video'));
  shotVideos.forEach(function (video) {
    video.addEventListener('play', function () {
      shotVideos.forEach(function (other) {
        if (other !== video && !other.paused) {
          other.pause();
        }
      });
    });
  });
})();
