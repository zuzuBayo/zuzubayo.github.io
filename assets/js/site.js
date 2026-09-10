/* ZuzuBayo — sistema central ES / EN */

(function () {
  "use strict";

  function getLanguage() {
    const parts = window.location.pathname.split("/").filter(Boolean);

    if (parts.includes("en")) return "en";
    if (parts.includes("es")) return "es";

    const saved = localStorage.getItem("zuzubayo_language");
    return saved === "en" ? "en" : "es";
  }

  function oppositeLanguage(language) {
    return language === "en" ? "es" : "en";
  }

  function getEquivalentPage(targetLanguage) {
    const url = new URL(window.location.href);
    const parts = url.pathname.split("/");

    const esPosition = parts.indexOf("es");
    const enPosition = parts.indexOf("en");

    if (esPosition !== -1) {
      parts[esPosition] = targetLanguage;
    } else if (enPosition !== -1) {
      parts[enPosition] = targetLanguage;
    }

    url.pathname = parts.join("/");

    return url.pathname + url.search + url.hash;
  }

  function saveLanguage(language) {
    if (language !== "es" && language !== "en") return;

    localStorage.setItem(
      "zuzubayo_language",
      language
    );
  }

  function configureLanguageButton() {
    const current = getLanguage();
    const destination = oppositeLanguage(current);

    document.documentElement.lang = current;

    document
      .querySelectorAll("[data-language-switch]")
      .forEach(function (button) {

        button.textContent = destination.toUpperCase();

        button.href =
          getEquivalentPage(destination);

        button.addEventListener(
          "click",
          function () {
            saveLanguage(destination);
          }
        );

      });
  }

  function translate(value, language) {

    if (!value) return "";

    if (typeof value === "string") {
      return value;
    }

    return (
      value[language] ||
      value.es ||
      value.en ||
      ""
    );
  }

  function getVisibleItems(items) {

    return Object.entries(items || {})
      .filter(function (entry) {

        const item = entry[1];

        return item &&
               item.visible !== false;

      });

  }

  window.ZuzuBayo = {

    getLanguage:
      getLanguage,

    oppositeLanguage:
      oppositeLanguage,

    getEquivalentPage:
      getEquivalentPage,

    saveLanguage:
      saveLanguage,

    configureLanguageButton:
      configureLanguageButton,

    translate:
      translate,

    getVisibleItems:
      getVisibleItems

  };

  document.addEventListener(
    "DOMContentLoaded",
    configureLanguageButton
  );

})();
