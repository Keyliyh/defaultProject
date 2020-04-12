/*
 * @Author: liyh
 * @Date: 2020-03-21 15:17:02
 * @LastEditors: liyh
 * @LastEditTime: 2020-03-21 16:02:34
 */
!(function (n, e) {
    var t = n.documentElement,
        i = "orientationchange" in window ? "orientationchange" : "resize",
        d = function () {
            var n = t.clientWidth;
            if (n) {
                var e = 50 * (n / 375);
                e = e > 100 ? 100 : e;
                t.style.fontSize = e + "px";
                var s = getComputedStyle
                    ? getComputedStyle(t, false)["fontSize"]
                    : "";
                s = s.substr(0, s.length - 2) * 1;
                if (s && e !== s) {
                    t.style.fontSize = e * (e / s) + "px";
                }
            }
        };
    n.addEventListener &&
        (e.addEventListener(i, d, !1),
            n.addEventListener("DOMContentLoaded", d, !1));
})(document, window);