!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var r=o("h6c0i");function i(e,n){return new Promise((function(t,o){var r=Math.random()>.3;setTimeout((function(){r?t("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):o("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))}document.querySelector("form").addEventListener("submit",(function(e){e.preventDefault();for(var n=e.target.elements,t=n.delay,o=n.step,u=n.amount,a=+t.value,c=1;c<=+u.value;c++)a=1!==c?a+ +o.value:+t.value,i(c,a).then((function(e){return r.Notify.success(e)})).catch((function(e){return r.Notify.failure(e)}))}))}();
//# sourceMappingURL=03-promises.f95f7642.js.map