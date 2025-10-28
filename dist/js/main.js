"use strict";

(self["webpackChunkmesto_project_ff"] = self["webpackChunkmesto_project_ff"] || []).push([ [ "main" ], {
  "./src/scripts/index.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    __webpack_require__.r(__webpack_exports__);
    var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/swiper/swiper.mjs");
    var flatpickr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/flatpickr/dist/esm/index.js");
    var flatpickr_dist_flatpickr_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/flatpickr/dist/flatpickr.min.css");
    var flatpickr_dist_l10n_ru_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/flatpickr/dist/l10n/ru.js");
    var flatpickr_dist_l10n_ru_js__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(flatpickr_dist_l10n_ru_js__WEBPACK_IMPORTED_MODULE_3__);
    if (document.querySelector(".calendar")) {
      window.addEventListener("click", function(evt) {
        var form = document.querySelectorAll(".form");
        if (!evt.target.classList.contains(".calendar") && !evt.target.closest(".calendar")) {
          form.forEach(function(element) {
            element.classList.remove("active");
          });
        }
      });
      var calendarInput = document.querySelectorAll(".calendar input");
      calendarInput.forEach(function(element) {
        var fp = (0, flatpickr__WEBPACK_IMPORTED_MODULE_1__["default"])(element, {
          mode: "range",
          locale: flatpickr_dist_l10n_ru_js__WEBPACK_IMPORTED_MODULE_3__.Russian,
          dateFormat: "d.m.Y",
          altFormat: "d.m.Y",
          defaultDate: [ new Date, new Date ],
          minDate: "today",
          conjunction: " — ",
          onReady: function onReady(selectedDates, dateStr, instance) {
            if (selectedDates.length === 2) {
              instance.altInput.value = instance.formatDate(selectedDates[0], "d.m.Y") + " — " + instance.formatDate(selectedDates[1], "d.m.Y");
            }
          }
        });
        element.closest(".form").addEventListener("click", function(evt) {
          if (!evt.currentTarget.classList.contains("active")) {
            evt.currentTarget.classList.add("active");
            fp.open();
          } else {
            fp.close();
            evt.currentTarget.classList.remove("active");
          }
        });
      });
    }
  }
}, __webpack_require__ => {
  var __webpack_exec__ = moduleId => __webpack_require__(__webpack_require__.s = moduleId);
  __webpack_require__.O(0, [ "vendors" ], () => __webpack_exec__("./src/scripts/index.js"));
  var __webpack_exports__ = __webpack_require__.O();
} ]);