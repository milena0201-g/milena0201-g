(function () {
  const navbar = document.querySelector("[data-navbar]");
  const menu = document.querySelector("[data-nav-menu]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const links = Array.from(document.querySelectorAll("[data-nav-link]"));
  const sections = Array.from(document.querySelectorAll("[data-section]"));
  const mobileQuery = window.matchMedia("(max-width: 960px)");
  const list = document.querySelector("[data-nav-list]");
  const hoverPill = document.querySelector("[data-nav-hover]");
  const activePill = document.querySelector("[data-nav-active]");
  const progress = document.querySelector("[data-nav-progress]");
  let activeLink = null;
  let moveTimer;

  function place(pill, link) {
    if (!pill || !link) return;
    pill.style.setProperty("--IndicatorX", link.offsetLeft + "px");
    pill.style.setProperty("--IndicatorWidth", link.offsetWidth + "px");
  }

  function placeActive() {
    if (!activeLink || mobileQuery.matches) return;
    list.classList.add("IsMoving");
    clearTimeout(moveTimer);
    moveTimer = setTimeout(() => list.classList.remove("IsMoving"), 420);
    place(activePill, activeLink);
  }

  if (list && hoverPill && activePill) {
    list.classList.add("HasIndicator");
    links.forEach((link) => {
      link.addEventListener("pointerenter", () => {
        if (mobileQuery.matches) return;
        if (!list.classList.contains("IsHovering")) {
          hoverPill.style.transition = "none";
          place(hoverPill, link);
          void hoverPill.offsetWidth;
          hoverPill.style.transition = "";
        } else {
          place(hoverPill, link);
        }
        list.classList.add("IsHovering");
      });
      link.addEventListener("focus", () => {
        if (mobileQuery.matches) return;
        place(hoverPill, link);
        list.classList.add("IsHovering");
      });
      link.addEventListener("blur", () => list.classList.remove("IsHovering"));
    });
    list.addEventListener("pointerleave", () => list.classList.remove("IsHovering"));
    window.addEventListener("resize", () => {
      if (activeLink) place(activePill, activeLink);
    });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => activeLink && place(activePill, activeLink));
  }

  function t(key, fallback) {
    return window.MilenaI18n ? window.MilenaI18n.t(key) : fallback;
  }

  function isOpen() {
    return menu.classList.contains("IsOpen");
  }

  function syncLabel() {
    menuToggle.setAttribute("aria-label", isOpen() ? t("nav.menuClose", "Cerrar menú") : t("nav.menuOpen", "Abrir menú"));
  }

  function onScroll() {
    navbar.classList.toggle("IsScrolled", window.scrollY > 24);
    if (progress) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.setProperty("--Progress", max > 0 ? (window.scrollY / max).toFixed(4) : 0);
    }
  }

  function setMenu(open) {
    menu.classList.toggle("IsOpen", open);
    navbar.classList.toggle("MenuIsOpen", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("IsLocked", open);
    syncLabel();
    if (open) {
      const first = menu.querySelector("a");
      if (first) setTimeout(() => first.focus({ preventScroll: true }), 120);
    }
  }

  menuToggle.addEventListener("click", () => setMenu(!isOpen()));

  links.forEach((link) => {
    link.addEventListener("click", () => {
      if (isOpen()) setMenu(false);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (!isOpen()) return;

    if (event.key === "Escape") {
      setMenu(false);
      menuToggle.focus();
      return;
    }

    if (event.key === "Tab") {
      const focusable = Array.from(navbar.querySelectorAll("a, button")).filter((node) => node.offsetParent !== null);
      const index = focusable.indexOf(document.activeElement);
      const last = focusable.length - 1;
      if (event.shiftKey && index <= 0) {
        event.preventDefault();
        focusable[last].focus();
      } else if (!event.shiftKey && index === last) {
        event.preventDefault();
        focusable[0].focus();
      }
    }
  });

  mobileQuery.addEventListener("change", (event) => {
    if (!event.matches && isOpen()) setMenu(false);
  });

  document.addEventListener("milena:language", () => {
    syncLabel();
    requestAnimationFrame(() => activeLink && place(activePill, activeLink));
  });

  function setActive(id) {
    links.forEach((link) => {
      const active = link.getAttribute("href") === "#" + id;
      link.classList.toggle("IsActive", active);
      if (active) {
        link.setAttribute("aria-current", "true");
        if (activeLink !== link) {
          activeLink = link;
          placeActive();
        }
      } else link.removeAttribute("aria-current");
    });
  }

  if ("IntersectionObserver" in window) {
    const visible = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => visible.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0));
        let best = null;
        let bestRatio = 0;
        visible.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            best = id;
            bestRatio = ratio;
          }
        });
        if (best) setActive(best);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.01, 0.25, 0.5, 1] }
    );
    sections.forEach((section) => observer.observe(section));
  }

  syncLabel();
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
})();
