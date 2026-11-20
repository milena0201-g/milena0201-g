(function () {
  const root = document.documentElement;
  const curtain = document.querySelector("[data-curtain]");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  const duration = () => (reduced.matches ? 650 : 950);
  let animating = false;
  let lastWheel = 0;
  let frame;

  function sections() {
    return Array.from(document.querySelectorAll("[data-section]"));
  }

  function topOf(node) {
    return Math.round(node.getBoundingClientRect().top + window.scrollY);
  }

  function ease(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function enter(top) {
    const section = sections().find((node) => Math.abs(topOf(node) - top) < 3);
    if (!section) return;
    section.classList.remove("Enter");
    void section.offsetWidth;
    section.classList.add("Enter");
    clearTimeout(section.enterTimer);
    section.enterTimer = setTimeout(() => section.classList.remove("Enter"), 1900);
  }

  function animateTo(target, done) {
    const start = window.scrollY;
    const max = root.scrollHeight - window.innerHeight;
    const end = Math.max(0, Math.min(target, max));
    const distance = end - start;
    if (Math.abs(distance) < 2) {
      if (done) done();
      return;
    }
    enter(end);
    animating = true;
    root.classList.add("IsPaging");
    const begin = performance.now();
    cancelAnimationFrame(frame);
    const step = (now) => {
      const progress = Math.min(1, (now - begin) / duration());
      window.scrollTo({ top: start + distance * ease(progress), behavior: "instant" });
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      } else {
        animating = false;
        root.classList.remove("IsPaging");
        if (done) done();
      }
    };
    frame = requestAnimationFrame(step);
  }

  function stops() {
    const max = root.scrollHeight - window.innerHeight;
    const view = window.innerHeight;
    const list = [];
    sections().forEach((section) => {
      const top = Math.min(topOf(section), max);
      const height = section.offsetHeight;
      list.push({ top, end: Math.min(top + height - view, max), tall: height > view * 1.08 });
    });
    if (list.length && max - list[list.length - 1].top > 2) list.push({ top: max, end: max, tall: false });
    return list;
  }

  function plan(down) {
    const y = window.scrollY;
    const list = stops();
    if (!list.length) return null;
    let index = 0;
    list.forEach((stop, i) => {
      if (stop.top <= y + 4) index = i;
    });
    const here = list[index];
    if (down) {
      if (here.tall && y < here.end - 4) return null;
      const next = list[index + 1];
      return next ? next.top : null;
    }
    if (here.tall && y > here.top + 4) return null;
    const target = y > here.top + 4 ? here : list[index - 1];
    if (!target) return null;
    return target.tall && target !== here ? target.end : target.top;
  }

  function atEnd() {
    const list = sections();
    const last = list[list.length - 1];
    if (!last) return false;
    return window.scrollY >= topOf(last) - 4 && last.offsetHeight <= window.innerHeight * 1.08;
  }

  function settleEnd() {
    const max = root.scrollHeight - window.innerHeight;
    if (window.scrollY < max - 0.5) animateTo(max);
  }

  function blocked() {
    return !finePointer.matches || document.body.classList.contains("IsLocked");
  }

  function onWheel(event) {
    if (blocked() || event.ctrlKey) return;
    if (Math.abs(event.deltaY) < Math.abs(event.deltaX)) return;

    const now = performance.now();
    const quiet = now - lastWheel > 220;
    lastWheel = now;

    if (animating) {
      event.preventDefault();
      return;
    }
    const down = event.deltaY > 0;
    const target = plan(down);
    if (target === null) {
      if (down && atEnd()) {
        event.preventDefault();
        if (quiet) settleEnd();
      }
      return;
    }
    event.preventDefault();
    if (quiet) animateTo(target);
  }

  window.addEventListener("wheel", onWheel, { passive: false });

  const keys = { ArrowDown: true, PageDown: true, " ": true, ArrowUp: false, PageUp: false };

  window.addEventListener("keydown", (event) => {
    if (blocked() || event.altKey || event.ctrlKey || event.metaKey) return;
    if (!(event.key in keys)) return;
    const field = event.target.closest && event.target.closest("input, textarea, select, button, [contenteditable]");
    if (field) return;
    if (animating) {
      event.preventDefault();
      return;
    }
    const down = event.key === " " ? !event.shiftKey : keys[event.key];
    const target = plan(down);
    if (target === null) {
      if (down && atEnd()) {
        event.preventDefault();
        settleEnd();
      }
      return;
    }
    event.preventDefault();
    animateTo(target);
  });

  function curtainTo(target, hash) {
    if (!curtain || reduced.matches) {
      animateTo(target, () => history.replaceState(null, "", hash));
      return;
    }
    animating = true;
    curtain.classList.remove("IsOut");
    curtain.classList.add("IsActive", "IsIn");
    setTimeout(() => {
      window.scrollTo({ top: target, behavior: "instant" });
      enter(target);
      history.replaceState(null, "", hash);
      curtain.classList.remove("IsIn");
      curtain.classList.add("IsOut");
      setTimeout(() => {
        curtain.classList.remove("IsActive", "IsOut");
        animating = false;
      }, 620);
    }, 640);
  }

  document.addEventListener("click", (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link || event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey) return;
    const hash = link.getAttribute("href");
    if (hash.length < 2 || hash === "#contenido") return;
    const target = document.querySelector(hash);
    if (!target) return;
    event.preventDefault();
    const top = target.id === "inicio" ? 0 : topOf(target);
    const fromNav = link.closest(".NavMenu, .Logo, .Footer");
    const far = Math.abs(top - window.scrollY) > window.innerHeight * 1.2;
    if (fromNav && far) curtainTo(top, hash);
    else animateTo(top, () => history.replaceState(null, "", hash));
    const focusTarget = target.querySelector("h1, h2") || target;
    if (!focusTarget.hasAttribute("tabindex")) focusTarget.setAttribute("tabindex", "-1");
    setTimeout(() => focusTarget.focus({ preventScroll: true }), 1300);
  });
})();
