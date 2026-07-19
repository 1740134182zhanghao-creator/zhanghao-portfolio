export const languageBootstrapScript = `
  (function () {
    var locale = "zh";
    try {
      var stored = localStorage.getItem("portfolio-language");
      locale = stored === "zh" || stored === "en"
        ? stored
        : ((navigator.language || "").toLowerCase().indexOf("zh") === 0 ? "zh" : "en");
    } catch (_) {
      locale = (navigator.language || "").toLowerCase().indexOf("zh") === 0 ? "zh" : "en";
    }
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
    document.documentElement.dataset.locale = locale;
  })();
`;
