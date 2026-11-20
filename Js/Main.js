(function () {
  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  const status = document.querySelector("[data-copy-status]");

  function t(key) {
    return window.MilenaI18n ? window.MilenaI18n.t(key) : "";
  }

  document.querySelectorAll("[data-copy]").forEach((button) => {
    let timer;
    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(button.dataset.copy);
      } catch (error) {
        window.location.href = "mailto:" + button.dataset.copy;
        return;
      }
      button.classList.add("IsCopied");
      if (status) status.textContent = t("contact.copiedStatus");
      clearTimeout(timer);
      timer = setTimeout(() => {
        button.classList.remove("IsCopied");
        if (status) status.textContent = "";
      }, 1800);
    });
  });
})();

(function () {
  const tabs = Array.from(document.querySelectorAll("[data-tool-tab]"));
  const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
  if (!tabs.length) return;

  function select(tab, focus) {
    if (tab.getAttribute("aria-selected") === "true") {
      if (focus) tab.focus();
      return;
    }
    tabs.forEach((item) => {
      const active = item === tab;
      item.setAttribute("aria-selected", String(active));
      item.tabIndex = active ? 0 : -1;
      const panel = document.getElementById(item.getAttribute("aria-controls"));
      if (!panel) return;
      panel.hidden = !active;
      panel.classList.toggle("IsActive", active);
    });
    if (focus) tab.focus();
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => select(tab));
    tab.addEventListener("pointerenter", () => {
      if (fine.matches) select(tab);
    });
    tab.addEventListener("keydown", (event) => {
      const keys = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
      if (event.key in keys) {
        event.preventDefault();
        select(tabs[(index + keys[event.key] + tabs.length) % tabs.length], true);
      } else if (event.key === "Home") {
        event.preventDefault();
        select(tabs[0], true);
      } else if (event.key === "End") {
        event.preventDefault();
        select(tabs[tabs.length - 1], true);
      }
    });
  });
})();
