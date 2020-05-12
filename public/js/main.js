var settings = settings || { component: "home", theme: "dark" };

(function () {
  location.hash = settings.component;
  document.body.classList.add(settings.theme);
  var setTheme = function (event) {
    var picker = event.target;
    settings.theme = picker.dataset.value;
    document.body.classList.remove("dark", "light");
    document.body.classList.add(settings.theme);
    toggleThemePicker();
  };

  var toggleThemePicker = function () {
    document.querySelectorAll(".theme-picker").forEach(function (picker) {
      picker.removeEventListener("click", setTheme);
      picker.addEventListener("click", setTheme);
      picker.hidden = picker.dataset.value == settings.theme;
    });
  };

  toggleThemePicker();
})();
