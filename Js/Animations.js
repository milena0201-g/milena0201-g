(function () {
  const root = document.documentElement;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const items = document.querySelectorAll("[data-reveal], .Tool, .Planet");

  requestAnimationFrame(() => requestAnimationFrame(() => root.classList.add("IsReady")));

  if (reduced || !("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("IsVisible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("IsVisible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.15 }
  );

  items.forEach((item) => observer.observe(item));
})();

