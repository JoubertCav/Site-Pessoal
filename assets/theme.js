(function () {
  const storageKey = "jc-theme";
  const root = document.documentElement;

  function preferredTheme() {
    const saved = localStorage.getItem(storageKey);
    if (saved === "dark" || saved === "light") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    root.dataset.theme = theme;
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
      favicon.href = new URL(theme === "dark" ? "favicon-dark.svg" : "favicon-light.svg", favicon.href).href;
    }
    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      // If the i18n layer is present, let it localize the label; otherwise fall back to English.
      if (typeof window.jcThemeLabel === "function") {
        button.textContent = window.jcThemeLabel(theme);
      } else {
        button.textContent = theme === "dark" ? "Light" : "Dark";
      }
      button.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    });
    document.dispatchEvent(new CustomEvent("jc:themechange", { detail: { theme: theme } }));
  }

  applyTheme(preferredTheme());

  document.addEventListener("DOMContentLoaded", function () {
    applyTheme(preferredTheme());
    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      button.addEventListener("click", function () {
        const next = root.dataset.theme === "dark" ? "light" : "dark";
        localStorage.setItem(storageKey, next);
        applyTheme(next);
      });
    });
  });
})();
