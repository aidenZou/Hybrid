define(function(e, t, n) {
    {
        var o = function(e, t, n, o) {
            var i = {
                features:null,
                bind:function(e, t, n, o) {
                    var i = (o ? "remove" :"add") + "EventListener";
                    t = t.split(" ");
                    for (var a = 0; a < t.length; a++) t[a] && e[i](t[a], n, !1);
                },
                isArray:function(e) {
                    return e instanceof Array;
                },
                createEl:function(e, t) {
                    var n = document.createElement(t || "div");
                    return e && (n.className = e), n;
                },
                getScrollY:function() {
                    var e = window.pageYOffset;
                    return void 0 !== e ? e :document.documentElement.scrollTop;
                },
                unbind:function(e, t, n) {
                    i.bind(e, t, n, !0);
                },
                removeClass:function(e, t) {
                    var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
                    e.className = e.className.replace(n, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
                },
                addClass:function(e, t) {
                    i.hasClass(e, t) || (e.className += (e.className ? " " :"") + t);
                },
                hasClass:function(e, t) {
                    return e.className && new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className);
                },
                getChildByClass:function(e, t) {
                    for (var n = e.firstChild; n; ) {
                        if (i.hasClass(n, t)) return n;
                        n = n.nextSibling;
                    }
                },
                arraySearch:function(e, t, n) {
                    for (var o = e.length; o--; ) if (e[o][n] === t) return o;
                    return -1;
                },
                extend:function(e, t, n) {
                    for (var o in t) if (t.hasOwnProperty(o)) {
                        if (n && e.hasOwnProperty(o)) continue;
                        e[o] = t[o];
                    }
                },
                easing:{
                    sine:{
                        out:function(e) {
                            return Math.sin(e * (Math.PI / 2));
                        },
                        inOut:function(e) {
                            return -(Math.cos(Math.PI * e) - 1) / 2;
                        }
                    },
                    cubic:{
                        out:function(e) {
                            return --e * e * e + 1;
                        }
                    }
                },
                detectFeatures:function() {
                    if (i.features) return i.features;
                    var e = i.createEl(), t = e.style, n = "", o = {};
                    if (o.oldIE = document.all && !document.addEventListener, o.touch = "ontouchstart" in window,
                        window.requestAnimationFrame && (o.raf = window.requestAnimationFrame, o.caf = window.cancelAnimationFrame),
                        o.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !o.pointerEvent) {
                        var a = navigator.userAgent;
                        if (/iP(hone|od)/.test(navigator.platform)) {
                            var r = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                            r && r.length > 0 && (r = parseInt(r[1], 10), r >= 1 && 8 > r && (o.isOldIOSPhone = !0));
                        }
                        var l = a.match(/Android\s([0-9\.]*)/), s = l ? l[1] :0;
                        s = parseFloat(s), s >= 1 && (4.4 > s && (o.isOldAndroid = !0), o.androidVersion = s),
                            o.isMobileOpera = /opera mini|opera mobi/i.test(a);
                    }
                    for (var u, c, d = [ "transform", "perspective", "animationName" ], p = [ "", "webkit", "Moz", "ms", "O" ], m = 0; 4 > m; m++) {
                        n = p[m];
                        for (var f = 0; 3 > f; f++) u = d[f], c = n + (n ? u.charAt(0).toUpperCase() + u.slice(1) :u),
                            !o[u] && c in t && (o[u] = c);
                        n && !o.raf && (n = n.toLowerCase(), o.raf = window[n + "RequestAnimationFrame"],
                            o.raf && (o.caf = window[n + "CancelAnimationFrame"] || window[n + "CancelRequestAnimationFrame"]));
                    }
                    if (!o.raf) {
                        var h = 0;
                        o.raf = function(e) {
                            var t = new Date().getTime(), n = Math.max(0, 16 - (t - h)), o = window.setTimeout(function() {
                                e(t + n);
                            }, n);
                            return h = t + n, o;
                        }, o.caf = function(e) {
                            clearTimeout(e);
                        };
                    }
                    return o.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
                        i.features = o, o;
                }
            };
            i.detectFeatures();
            var a = this, r = 25, l = 3, s = {
                allowPanToNext:!0,
                spacing:.12,
                bgOpacity:1,
                mouseUsed:!1,
                loop:!0,
                pinchToClose:!0,
                closeOnScroll:!0,
                closeOnVerticalDrag:!0,
                verticalDragRange:.75,
                hideAnimationDuration:333,
                showAnimationDuration:333,
                showHideOpacity:!1,
                focus:!0,
                escKey:!0,
                arrowKeys:!0,
                mainScrollEndFriction:.35,
                panEndFriction:.35,
                isClickableElement:function(e) {
                    return "A" === e.tagName;
                },
                getDoubleTapZoom:function(e, t) {
                    return e ? 1 :t.initialZoomLevel < .7 ? 1 :1.33;
                },
                maxSpreadZoom:1.33,
                modal:!0,
                scaleMode:"fit",
                alwaysFadeIn:!1
            };
            i.extend(s, o);
            var u, c, d, p, m, f, h, v, g, x, y, w, b, C, I, T, E, D, S, _, M, F, k, O, A, R, L, Z, P, z, N, U, K, H, B, W, Y, G, q, V, X, $, j, J, Q, et, tt, nt, ot, it, at, rt, lt, st, ut, ct, dt = function() {
                return {
                    x:0,
                    y:0
                };
            }, pt = dt(), mt = dt(), ft = dt(), ht = {}, vt = 0, gt = {}, xt = dt(), yt = 0, wt = !0, bt = [], Ct = {}, It = !1, Tt = function(e, t) {
                i.extend(a, t.publicMethods), bt.push(e);
            }, Et = function(e) {
                var t = eo();
                return e > t - 1 ? e - t :0 > e ? t + e :e;
            }, Dt = {}, St = function(e, t) {
                return Dt[e] || (Dt[e] = []), Dt[e].push(t);
            }, _t = function(e) {
                var t = Dt[e];
                if (t) {
                    var n = Array.prototype.slice.call(arguments);
                    n.shift();
                    for (var o = 0; o < t.length; o++) t[o].apply(a, n);
                }
            }, Mt = function() {
                return new Date().getTime();
            }, Ft = function(e) {
                st = e, a.bg.style.opacity = e * s.bgOpacity;
            }, kt = function(e, t, n, o, i) {
                (!It || i && i !== a.currItem) && (o /= i ? i.fitRatio :a.currItem.fitRatio), e[F] = w + t + "px, " + n + "px" + b + " scale(" + o + ")";
            }, Ot = function(e) {
                ot && (e && (x > a.currItem.fitRatio ? It || (mo(a.currItem, !1, !0), It = !0) :It && (mo(a.currItem),
                    It = !1)), kt(ot, ft.x, ft.y, x));
            }, At = function(e) {
                e.container && kt(e.container.style, e.initialPosition.x, e.initialPosition.y, e.initialZoomLevel, e);
            }, Rt = function(e, t) {
                t[F] = w + e + "px, 0px" + b;
            }, Lt = function(e, t) {
                if (!s.loop && t) {
                    var n = p + (xt.x * vt - e) / xt.x, o = Math.round(e - yn.x);
                    (0 > n && o > 0 || n >= eo() - 1 && 0 > o) && (e = yn.x + o * s.mainScrollEndFriction);
                }
                yn.x = e, Rt(e, m);
            }, Zt = function(e, t) {
                var n = wn[e] - gt[e];
                return mt[e] + pt[e] + n - n * (t / y);
            }, Pt = function(e, t) {
                e.x = t.x, e.y = t.y, t.id && (e.id = t.id);
            }, zt = function(e) {
                e.x = Math.round(e.x), e.y = Math.round(e.y);
            }, Nt = null, Ut = function() {
                Nt && (i.unbind(document, "mousemove", Ut), i.addClass(e, "pswp--has_mouse"), s.mouseUsed = !0,
                    _t("mouseUsed")), Nt = setTimeout(function() {
                    Nt = null;
                }, 100);
            }, Kt = function() {
                i.bind(document, "keydown", a), N.transform && i.bind(a.scrollWrap, "click", a),
                    s.mouseUsed || i.bind(document, "mousemove", Ut), i.bind(window, "resize scroll", a),
                    _t("bindEvents");
            }, Ht = function() {
                i.unbind(window, "resize", a), i.unbind(window, "scroll", g.scroll), i.unbind(document, "keydown", a),
                    i.unbind(document, "mousemove", Ut), N.transform && i.unbind(a.scrollWrap, "click", a),
                    G && i.unbind(window, h, a), _t("unbindEvents");
            }, Bt = function(e, t) {
                var n = so(a.currItem, ht, e);
                return t && (nt = n), n;
            }, Wt = function(e) {
                return e || (e = a.currItem), e.initialZoomLevel;
            }, Yt = function(e) {
                return e || (e = a.currItem), e.w > 0 ? s.maxSpreadZoom :1;
            }, Gt = function(e, t, n, o) {
                return o === a.currItem.initialZoomLevel ? (n[e] = a.currItem.initialPosition[e],
                    !0) :(n[e] = Zt(e, o), n[e] > t.min[e] ? (n[e] = t.min[e], !0) :n[e] < t.max[e] ? (n[e] = t.max[e],
                    !0) :!1);
            }, qt = function() {
                if (F) {
                    var t = N.perspective && !O;
                    return w = "translate" + (t ? "3d(" :"("), void (b = N.perspective ? ", 0px)" :")");
                }
                F = "left", i.addClass(e, "pswp--ie"), Rt = function(e, t) {
                    t.left = e + "px";
                }, At = function(e) {
                    var t = e.fitRatio > 1 ? 1 :e.fitRatio, n = e.container.style, o = t * e.w, i = t * e.h;
                    n.width = o + "px", n.height = i + "px", n.left = e.initialPosition.x + "px", n.top = e.initialPosition.y + "px";
                }, Ot = function() {
                    if (ot) {
                        var e = ot, t = a.currItem, n = t.fitRatio > 1 ? 1 :t.fitRatio, o = n * t.w, i = n * t.h;
                        e.width = o + "px", e.height = i + "px", e.left = ft.x + "px", e.top = ft.y + "px";
                    }
                };
            }, Vt = function(e) {
                var t = "";
                s.escKey && 27 === e.keyCode ? t = "close" :s.arrowKeys && (37 === e.keyCode ? t = "prev" :39 === e.keyCode && (t = "next")),
                    t && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || (e.preventDefault ? e.preventDefault() :e.returnValue = !1,
                        a[t]()));
            }, Xt = function(e) {
                e && (X || V || it || W) && (e.preventDefault(), e.stopPropagation());
            }, $t = function() {
                a.setScrollOffset(0, i.getScrollY());
            }, jt = {}, Jt = 0, Qt = function(e) {
                jt[e] && (jt[e].raf && R(jt[e].raf), Jt--, delete jt[e]);
            }, en = function(e) {
                jt[e] && Qt(e), jt[e] || (Jt++, jt[e] = {});
            }, tn = function() {
                for (var e in jt) jt.hasOwnProperty(e) && Qt(e);
            }, nn = function(e, t, n, o, i, a, r) {
                var l, s = Mt();
                en(e);
                var u = function() {
                    if (jt[e]) {
                        if (l = Mt() - s, l >= o) return Qt(e), a(n), void (r && r());
                        a((n - t) * i(l / o) + t), jt[e].raf = A(u);
                    }
                };
                u();
            }, on = {
                shout:_t,
                listen:St,
                viewportSize:ht,
                options:s,
                isMainScrollAnimating:function() {
                    return it;
                },
                getZoomLevel:function() {
                    return x;
                },
                getCurrentIndex:function() {
                    return p;
                },
                isDragging:function() {
                    return G;
                },
                isZooming:function() {
                    return Q;
                },
                setScrollOffset:function(e, t) {
                    gt.x = e, z = gt.y = t, _t("updateScrollOffset", gt);
                },
                applyZoomPan:function(e, t, n, o) {
                    ft.x = t, ft.y = n, x = e, Ot(o);
                },
                init:function() {
                    if (!u && !c) {
                        var n;
                        a.framework = i, a.template = e, a.bg = i.getChildByClass(e, "pswp__bg"), L = e.className,
                            u = !0, N = i.detectFeatures(), A = N.raf, R = N.caf, F = N.transform, P = N.oldIE,
                            a.scrollWrap = i.getChildByClass(e, "pswp__scroll-wrap"), a.container = i.getChildByClass(a.scrollWrap, "pswp__container"),
                            m = a.container.style, a.itemHolders = T = [ {
                            el:a.container.children[0],
                            wrap:0,
                            index:-1
                        }, {
                            el:a.container.children[1],
                            wrap:0,
                            index:-1
                        }, {
                            el:a.container.children[2],
                            wrap:0,
                            index:-1
                        } ], T[0].el.style.display = T[2].el.style.display = "none", qt(), g = {
                            resize:a.updateSize,
                            scroll:$t,
                            keydown:Vt,
                            click:Xt
                        };
                        var o = N.isOldIOSPhone || N.isOldAndroid || N.isMobileOpera;
                        for (N.animationName && N.transform && !o || (s.showAnimationDuration = s.hideAnimationDuration = 0),
                                 n = 0; n < bt.length; n++) a["init" + bt[n]]();
                        if (t) {
                            var r = a.ui = new t(a, i);
                            r.init();
                        }
                        _t("firstUpdate"), p = p || s.index || 0, (isNaN(p) || 0 > p || p >= eo()) && (p = 0),
                            a.currItem = Qn(p), (N.isOldIOSPhone || N.isOldAndroid) && (wt = !1), e.setAttribute("aria-hidden", "false"),
                            s.modal && (wt ? e.style.position = "fixed" :(e.style.position = "absolute", e.style.top = i.getScrollY() + "px")),
                            void 0 === z && (_t("initialLayout"), z = Z = i.getScrollY());
                        var d = "pswp--open ";
                        for (s.mainClass && (d += s.mainClass + " "), s.showHideOpacity && (d += "pswp--animate_opacity "),
                                 d += O ? "pswp--touch" :"pswp--notouch", d += N.animationName ? " pswp--css_animation" :"",
                                 d += N.svg ? " pswp--svg" :"", i.addClass(e, d), a.updateSize(), f = -1, yt = null,
                                 n = 0; l > n; n++) Rt((n + f) * xt.x, T[n].el.style);
                        P || i.bind(a.scrollWrap, v, a), St("initialZoomInEnd", function() {
                            a.setContent(T[0], p - 1), a.setContent(T[2], p + 1), T[0].el.style.display = T[2].el.style.display = "block",
                                s.focus && e.focus(), Kt();
                        }), a.setContent(T[1], p), a.updateCurrItem(), _t("afterInit"), wt || (C = setInterval(function() {
                            Jt || G || Q || x !== a.currItem.initialZoomLevel || a.updateSize();
                        }, 1e3)), i.addClass(e, "pswp--visible");
                    }
                },
                close:function() {
                    u && (u = !1, c = !0, _t("close"), Ht(), no(a.currItem, null, !0, a.destroy));
                },
                destroy:function() {
                    _t("destroy"), Xn && clearTimeout(Xn), e.setAttribute("aria-hidden", "true"), e.className = L,
                        C && clearInterval(C), i.unbind(a.scrollWrap, v, a), i.unbind(window, "scroll", a),
                        En(), tn(), Dt = null;
                },
                panTo:function(e, t, n) {
                    n || (e > nt.min.x ? e = nt.min.x :e < nt.max.x && (e = nt.max.x), t > nt.min.y ? t = nt.min.y :t < nt.max.y && (t = nt.max.y)),
                        ft.x = e, ft.y = t, Ot();
                },
                handleEvent:function(e) {
                    e = e || window.event, g[e.type] && g[e.type](e);
                },
                goTo:function(e) {
                    e = Et(e);
                    var t = e - p;
                    yt = t, p = e, a.currItem = Qn(p), vt -= t, Lt(xt.x * vt), tn(), it = !1, a.updateCurrItem();
                },
                next:function() {
                    a.goTo(p + 1);
                },
                prev:function() {
                    a.goTo(p - 1);
                },
                updateCurrZoomItem:function(e) {
                    if (e && _t("beforeChange", 0), T[1].el.children.length) {
                        var t = T[1].el.children[0];
                        ot = i.hasClass(t, "pswp__zoom-wrap") ? t.style :null;
                    } else ot = null;
                    nt = a.currItem.bounds, y = x = a.currItem.initialZoomLevel, ft.x = nt.center.x,
                        ft.y = nt.center.y, e && _t("afterChange");
                },
                invalidateCurrItems:function() {
                    I = !0;
                    for (var e = 0; l > e; e++) T[e].item && (T[e].item.needsUpdate = !0);
                },
                updateCurrItem:function(e) {
                    if (0 !== yt) {
                        var t, n = Math.abs(yt);
                        if (!(e && 2 > n)) {
                            a.currItem = Qn(p), It = !1, _t("beforeChange", yt), n >= l && (f += yt + (yt > 0 ? -l :l),
                                n = l);
                            for (var o = 0; n > o; o++) yt > 0 ? (t = T.shift(), T[l - 1] = t, f++, Rt((f + 2) * xt.x, t.el.style),
                                a.setContent(t, p - n + o + 1 + 1)) :(t = T.pop(), T.unshift(t), f--, Rt(f * xt.x, t.el.style),
                                a.setContent(t, p + n - o - 1 - 1));
                            if (ot && 1 === Math.abs(yt)) {
                                var i = Qn(E);
                                i.initialZoomLevel !== x && (so(i, ht), mo(i), At(i));
                            }
                            yt = 0, a.updateCurrZoomItem(), E = p, _t("afterChange");
                        }
                    }
                },
                updateSize:function(t) {
                    if (!wt && s.modal) {
                        var n = i.getScrollY();
                        if (z !== n && (e.style.top = n + "px", z = n), !t && Ct.x === window.innerWidth && Ct.y === window.innerHeight) return;
                        Ct.x = window.innerWidth, Ct.y = window.innerHeight, e.style.height = Ct.y + "px";
                    }
                    if (ht.x = a.scrollWrap.clientWidth, ht.y = a.scrollWrap.clientHeight, $t(), xt.x = ht.x + Math.round(ht.x * s.spacing),
                        xt.y = ht.y, Lt(xt.x * vt), _t("beforeResize"), void 0 !== f) {
                        for (var o, r, u, c = 0; l > c; c++) o = T[c], Rt((c + f) * xt.x, o.el.style), u = p + c - 1,
                            s.loop && eo() > 2 && (u = Et(u)), r = Qn(u), r && (I || r.needsUpdate || !r.bounds) ? (a.cleanSlide(r),
                            a.setContent(o, u), 1 === c && (a.currItem = r, a.updateCurrZoomItem(!0)), r.needsUpdate = !1) :-1 === o.index && u >= 0 && a.setContent(o, u),
                            r && r.container && (so(r, ht), mo(r), At(r));
                        I = !1;
                    }
                    y = x = a.currItem.initialZoomLevel, nt = a.currItem.bounds, nt && (ft.x = nt.center.x,
                        ft.y = nt.center.y, Ot(!0)), _t("resize");
                },
                zoomTo:function(e, t, n, o, a) {
                    t && (y = x, wn.x = Math.abs(t.x) - ft.x, wn.y = Math.abs(t.y) - ft.y, Pt(mt, ft));
                    var r = Bt(e, !1), l = {};
                    Gt("x", r, l, e), Gt("y", r, l, e);
                    var s = x, u = {
                        x:ft.x,
                        y:ft.y
                    };
                    zt(l);
                    var c = function(t) {
                        1 === t ? (x = e, ft.x = l.x, ft.y = l.y) :(x = (e - s) * t + s, ft.x = (l.x - u.x) * t + u.x,
                            ft.y = (l.y - u.y) * t + u.y), a && a(t), Ot(1 === t);
                    };
                    n ? nn("customZoomTo", 0, 1, n, o || i.easing.sine.inOut, c) :c(1);
                }
            }, an = 30, rn = 10, ln = {}, sn = {}, un = {}, cn = {}, dn = {}, pn = [], mn = {}, fn = [], hn = {}, vn = 0, gn = dt(), xn = 0, yn = dt(), wn = dt(), bn = dt(), Cn = function(e, t) {
                return e.x === t.x && e.y === t.y;
            }, In = function(e, t) {
                return Math.abs(e.x - t.x) < r && Math.abs(e.y - t.y) < r;
            }, Tn = function(e, t) {
                return hn.x = Math.abs(e.x - t.x), hn.y = Math.abs(e.y - t.y), Math.sqrt(hn.x * hn.x + hn.y * hn.y);
            }, En = function() {
                $ && (R($), $ = null);
            }, Dn = function() {
                G && ($ = A(Dn), Hn());
            }, Sn = function() {
                return !("fit" === s.scaleMode && x === a.currItem.initialZoomLevel);
            }, _n = function(e, t) {
                return e ? e.className && e.className.indexOf("pswp__scroll-wrap") > -1 ? !1 :t(e) ? e :_n(e.parentNode, t) :!1;
            }, Mn = {}, Fn = function(e, t) {
                return Mn.prevent = !_n(e.target, s.isClickableElement), _t("preventDragEvent", e, t, Mn),
                    Mn.prevent;
            }, kn = function(e, t) {
                return t.x = e.pageX, t.y = e.pageY, t.id = e.identifier, t;
            }, On = function(e, t, n) {
                n.x = .5 * (e.x + t.x), n.y = .5 * (e.y + t.y);
            }, An = function(e, t, n) {
                if (e - K > 50) {
                    var o = fn.length > 2 ? fn.shift() :{};
                    o.x = t, o.y = n, fn.push(o), K = e;
                }
            }, Rn = function() {
                var e = ft.y - a.currItem.initialPosition.y;
                return 1 - Math.abs(e / (ht.y / 2));
            }, Ln = {}, Zn = {}, Pn = [], zn = function(e) {
                for (;Pn.length > 0; ) Pn.pop();
                return k ? (ct = 0, pn.forEach(function(e) {
                    0 === ct ? Pn[0] = e :1 === ct && (Pn[1] = e), ct++;
                })) :e.type.indexOf("touch") > -1 ? e.touches && e.touches.length > 0 && (Pn[0] = kn(e.touches[0], Ln),
                    e.touches.length > 1 && (Pn[1] = kn(e.touches[1], Zn))) :(Ln.x = e.pageX, Ln.y = e.pageY,
                    Ln.id = "", Pn[0] = Ln), Pn;
            }, Nn = function(e, t) {
                var n, o, i, r, l = 0, u = ft[e] + t[e], c = t[e] > 0, d = yn.x + t.x, p = yn.x - mn.x;
                return n = u > nt.min[e] || u < nt.max[e] ? s.panEndFriction :1, u = ft[e] + t[e] * n,
                    !s.allowPanToNext && x !== a.currItem.initialZoomLevel || (ot ? "h" !== at || "x" !== e || V || (c ? (u > nt.min[e] && (n = s.panEndFriction,
                        l = nt.min[e] - u, o = nt.min[e] - mt[e]), (0 >= o || 0 > p) && eo() > 1 ? (r = d,
                        0 > p && d > mn.x && (r = mn.x)) :nt.min.x !== nt.max.x && (i = u)) :(u < nt.max[e] && (n = s.panEndFriction,
                        l = u - nt.max[e], o = mt[e] - nt.max[e]), (0 >= o || p > 0) && eo() > 1 ? (r = d,
                        p > 0 && d < mn.x && (r = mn.x)) :nt.min.x !== nt.max.x && (i = u))) :r = d, "x" !== e) ? void (it || j || x > a.currItem.fitRatio && (ft[e] += t[e] * n)) :(void 0 !== r && (Lt(r, !0),
                        j = r === mn.x ? !1 :!0), nt.min.x !== nt.max.x && (void 0 !== i ? ft.x = i :j || (ft.x += t.x * n)),
                        void 0 !== r);
            }, Un = function(e) {
                if (!("mousedown" === e.type && e.button > 0)) {
                    if (Jn) return void e.preventDefault();
                    if (!Y || "mousedown" !== e.type) {
                        if (Fn(e, !0) && e.preventDefault(), _t("pointerDown"), k) {
                            var t = i.arraySearch(pn, e.pointerId, "id");
                            0 > t && (t = pn.length), pn[t] = {
                                x:e.pageX,
                                y:e.pageY,
                                id:e.pointerId
                            };
                        }
                        var n = zn(e), o = n.length;
                        J = null, tn(), G && 1 !== o || (G = rt = !0, i.bind(window, h, a), B = ut = lt = W = j = X = q = V = !1,
                            at = null, _t("firstTouchStart", n), Pt(mt, ft), pt.x = pt.y = 0, Pt(cn, n[0]),
                            Pt(dn, cn), mn.x = xt.x * vt, fn = [ {
                            x:cn.x,
                            y:cn.y
                        } ], K = U = Mt(), Bt(x, !0), En(), Dn()), !Q && o > 1 && !it && !j && (y = x, V = !1,
                            Q = q = !0, pt.y = pt.x = 0, Pt(mt, ft), Pt(ln, n[0]), Pt(sn, n[1]), On(ln, sn, bn),
                            wn.x = Math.abs(bn.x) - ft.x, wn.y = Math.abs(bn.y) - ft.y, et = tt = Tn(ln, sn));
                    }
                }
            }, Kn = function(e) {
                if (e.preventDefault(), k) {
                    var t = i.arraySearch(pn, e.pointerId, "id");
                    if (t > -1) {
                        var n = pn[t];
                        n.x = e.pageX, n.y = e.pageY;
                    }
                }
                if (G) {
                    var o = zn(e);
                    if (at || X || Q) J = o; else if (yn.x !== xt.x * vt) at = "h"; else {
                        var a = Math.abs(o[0].x - cn.x) - Math.abs(o[0].y - cn.y);
                        Math.abs(a) >= rn && (at = a > 0 ? "h" :"v", J = o);
                    }
                }
            }, Hn = function() {
                if (J) {
                    var e = J.length;
                    if (0 !== e) if (Pt(ln, J[0]), un.x = ln.x - cn.x, un.y = ln.y - cn.y, Q && e > 1) {
                        if (cn.x = ln.x, cn.y = ln.y, !un.x && !un.y && Cn(J[1], sn)) return;
                        Pt(sn, J[1]), V || (V = !0, _t("zoomGestureStarted"));
                        var t = Tn(ln, sn), n = qn(t);
                        n > a.currItem.initialZoomLevel + a.currItem.initialZoomLevel / 15 && (ut = !0);
                        var o = 1, i = Wt(), r = Yt();
                        if (i > n) if (s.pinchToClose && !ut && y <= a.currItem.initialZoomLevel) {
                            var l = i - n, u = 1 - l / (i / 1.2);
                            Ft(u), _t("onPinchClose", u), lt = !0;
                        } else o = (i - n) / i, o > 1 && (o = 1), n = i - o * (i / 3); else n > r && (o = (n - r) / (6 * i),
                            o > 1 && (o = 1), n = r + o * i);
                        0 > o && (o = 0), et = t, On(ln, sn, gn), pt.x += gn.x - bn.x, pt.y += gn.y - bn.y,
                            Pt(bn, gn), ft.x = Zt("x", n), ft.y = Zt("y", n), B = n > x, x = n, Ot();
                    } else {
                        if (!at) return;
                        if (rt && (rt = !1, Math.abs(un.x) >= rn && (un.x -= J[0].x - dn.x), Math.abs(un.y) >= rn && (un.y -= J[0].y - dn.y)),
                            cn.x = ln.x, cn.y = ln.y, 0 === un.x && 0 === un.y) return;
                        if ("v" === at && s.closeOnVerticalDrag && !Sn()) {
                            pt.y += un.y, ft.y += un.y;
                            var c = Rn();
                            return W = !0, _t("onVerticalDrag", c), Ft(c), void Ot();
                        }
                        An(Mt(), ln.x, ln.y), X = !0, nt = a.currItem.bounds;
                        var d = Nn("x", un);
                        d || (Nn("y", un), zt(ft), Ot());
                    }
                }
            }, Bn = function(e) {
                if (N.isOldAndroid) {
                    if (Y && "mouseup" === e.type) return;
                    e.type.indexOf("touch") > -1 && (clearTimeout(Y), Y = setTimeout(function() {
                        Y = 0;
                    }, 600));
                }
                _t("pointerUp"), Fn(e, !1) && e.preventDefault();
                var t;
                if (k) {
                    var n = i.arraySearch(pn, e.pointerId, "id");
                    if (n > -1) if (t = pn.splice(n, 1)[0], navigator.pointerEnabled) t.type = e.pointerType || "mouse"; else {
                        var o = {
                            4:"mouse",
                            2:"touch",
                            3:"pen"
                        };
                        t.type = o[e.pointerType], t.type || (t.type = e.pointerType || "mouse");
                    }
                }
                var r, l = zn(e), u = l.length;
                if ("mouseup" === e.type && (u = 0), 2 === u) return J = null, !0;
                1 === u && Pt(dn, l[0]), 0 !== u || at || it || (t || ("mouseup" === e.type ? t = {
                    x:e.pageX,
                    y:e.pageY,
                    type:"mouse"
                } :e.changedTouches && e.changedTouches[0] && (t = {
                    x:e.changedTouches[0].pageX,
                    y:e.changedTouches[0].pageY,
                    type:"touch"
                })), _t("touchRelease", e, t));
                var c = -1;
                if (0 === u && (G = !1, i.unbind(window, h, a), En(), Q ? c = 0 :-1 !== xn && (c = Mt() - xn)),
                    xn = 1 === u ? Mt() :-1, r = -1 !== c && 150 > c ? "zoom" :"swipe", Q && 2 > u && (Q = !1,
                    1 === u && (r = "zoomPointerUp"), _t("zoomGestureEnded")), J = null, X || V || it || W) if (tn(),
                    H || (H = Wn()), H.calculateSwipeSpeed("x"), W) {
                    var d = Rn();
                    if (d < s.verticalDragRange) a.close(); else {
                        var p = ft.y, m = st;
                        nn("verticalDrag", 0, 1, 300, i.easing.cubic.out, function(e) {
                            ft.y = (a.currItem.initialPosition.y - p) * e + p, Ft((1 - m) * e + m), Ot();
                        }), _t("onVerticalDrag", 1);
                    }
                } else {
                    if ((j || it) && 0 === u) {
                        var f = Gn(r, H);
                        if (f) return;
                        r = "zoomPointerUp";
                    }
                    if (!it) return "swipe" !== r ? void Vn() :void (!j && x > a.currItem.fitRatio && Yn(H));
                }
            }, Wn = function() {
                var e, t, n = {
                    lastFlickOffset:{},
                    lastFlickDist:{},
                    lastFlickSpeed:{},
                    slowDownRatio:{},
                    slowDownRatioReverse:{},
                    speedDecelerationRatio:{},
                    speedDecelerationRatioAbs:{},
                    distanceOffset:{},
                    backAnimDestination:{},
                    backAnimStarted:{},
                    calculateSwipeSpeed:function(o) {
                        fn.length > 1 ? (e = Mt() - K + 50, t = fn[fn.length - 2][o]) :(e = Mt() - U, t = dn[o]),
                            n.lastFlickOffset[o] = cn[o] - t, n.lastFlickDist[o] = Math.abs(n.lastFlickOffset[o]),
                            n.lastFlickSpeed[o] = n.lastFlickDist[o] > 20 ? n.lastFlickOffset[o] / e :0, Math.abs(n.lastFlickSpeed[o]) < .1 && (n.lastFlickSpeed[o] = 0),
                            n.slowDownRatio[o] = .95, n.slowDownRatioReverse[o] = 1 - n.slowDownRatio[o], n.speedDecelerationRatio[o] = 1;
                    },
                    calculateOverBoundsAnimOffset:function(e, t) {
                        n.backAnimStarted[e] || (ft[e] > nt.min[e] ? n.backAnimDestination[e] = nt.min[e] :ft[e] < nt.max[e] && (n.backAnimDestination[e] = nt.max[e]),
                            void 0 !== n.backAnimDestination[e] && (n.slowDownRatio[e] = .7, n.slowDownRatioReverse[e] = 1 - n.slowDownRatio[e],
                                n.speedDecelerationRatioAbs[e] < .05 && (n.lastFlickSpeed[e] = 0, n.backAnimStarted[e] = !0,
                                    nn("bounceZoomPan" + e, ft[e], n.backAnimDestination[e], t || 300, i.easing.sine.out, function(t) {
                                        ft[e] = t, Ot();
                                    }))));
                    },
                    calculateAnimOffset:function(e) {
                        n.backAnimStarted[e] || (n.speedDecelerationRatio[e] = n.speedDecelerationRatio[e] * (n.slowDownRatio[e] + n.slowDownRatioReverse[e] - n.slowDownRatioReverse[e] * n.timeDiff / 10),
                            n.speedDecelerationRatioAbs[e] = Math.abs(n.lastFlickSpeed[e] * n.speedDecelerationRatio[e]),
                            n.distanceOffset[e] = n.lastFlickSpeed[e] * n.speedDecelerationRatio[e] * n.timeDiff,
                            ft[e] += n.distanceOffset[e]);
                    },
                    panAnimLoop:function() {
                        return jt.zoomPan && (jt.zoomPan.raf = A(n.panAnimLoop), n.now = Mt(), n.timeDiff = n.now - n.lastNow,
                            n.lastNow = n.now, n.calculateAnimOffset("x"), n.calculateAnimOffset("y"), Ot(),
                            n.calculateOverBoundsAnimOffset("x"), n.calculateOverBoundsAnimOffset("y"), n.speedDecelerationRatioAbs.x < .05 && n.speedDecelerationRatioAbs.y < .05) ? (ft.x = Math.round(ft.x),
                            ft.y = Math.round(ft.y), Ot(), void Qt("zoomPan")) :void 0;
                    }
                };
                return n;
            }, Yn = function(e) {
                return e.calculateSwipeSpeed("y"), nt = a.currItem.bounds, e.backAnimDestination = {},
                    e.backAnimStarted = {}, Math.abs(e.lastFlickSpeed.x) <= .05 && Math.abs(e.lastFlickSpeed.y) <= .05 ? (e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y = 0,
                    e.calculateOverBoundsAnimOffset("x"), e.calculateOverBoundsAnimOffset("y"), !0) :(en("zoomPan"),
                    e.lastNow = Mt(), void e.panAnimLoop());
            }, Gn = function(e, t) {
                var n;
                it || (vn = p);
                var o;
                if ("swipe" === e) {
                    var r = cn.x - dn.x, l = t.lastFlickDist.x < 10;
                    r > an && (l || t.lastFlickOffset.x > 20) ? o = -1 :-an > r && (l || t.lastFlickOffset.x < -20) && (o = 1);
                }
                var u;
                o && (p += o, 0 > p ? (p = s.loop ? eo() - 1 :0, u = !0) :p >= eo() && (p = s.loop ? 0 :eo() - 1,
                    u = !0), (!u || s.loop) && (yt += o, vt -= o, n = !0));
                var c, d = xt.x * vt, m = Math.abs(d - yn.x);
                return n || d > yn.x == t.lastFlickSpeed.x > 0 ? (c = Math.abs(t.lastFlickSpeed.x) > 0 ? m / Math.abs(t.lastFlickSpeed.x) :333,
                    c = Math.min(c, 400), c = Math.max(c, 250)) :c = 333, vn === p && (n = !1), it = !0,
                    _t("mainScrollAnimStart"), nn("mainScroll", yn.x, d, c, i.easing.cubic.out, Lt, function() {
                    tn(), it = !1, vn = -1, (n || vn !== p) && a.updateCurrItem(), _t("mainScrollAnimComplete");
                }), n && a.updateCurrItem(!0), n;
            }, qn = function(e) {
                return 1 / tt * e * y;
            }, Vn = function() {
                var e = x, t = Wt(), n = Yt();
                t > x ? e = t :x > n && (e = n);
                var o, r = 1, l = st;
                return lt && !B && !ut && t > x ? (a.close(), !0) :(lt && (o = function(e) {
                    Ft((r - l) * e + l);
                }), a.zoomTo(e, 0, 200, i.easing.cubic.out, o), !0);
            };
            Tt("Gestures", {
                publicMethods:{
                    initGestures:function() {
                        var e = function(e, t, n, o, i) {
                            D = e + t, S = e + n, _ = e + o, M = i ? e + i :"";
                        };
                        k = N.pointerEvent, k && N.touch && (N.touch = !1), k ? navigator.pointerEnabled ? e("pointer", "down", "move", "up", "cancel") :e("MSPointer", "Down", "Move", "Up", "Cancel") :N.touch ? (e("touch", "start", "move", "end", "cancel"),
                            O = !0) :e("mouse", "down", "move", "up"), h = S + " " + _ + " " + M, v = D, k && !O && (O = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1),
                            a.likelyTouchDevice = O, g[D] = Un, g[S] = Kn, g[_] = Bn, M && (g[M] = g[_]), N.touch && (v += " mousedown",
                            h += " mousemove mouseup", g.mousedown = g[D], g.mousemove = g[S], g.mouseup = g[_]),
                            O || (s.allowPanToNext = !1);
                    }
                }
            });
            var Xn, $n, jn, Jn, Qn, eo, to, no = function(t, n, o, r) {
                Xn && clearTimeout(Xn), Jn = !0, jn = !0;
                var l;
                t.initialLayout ? (l = t.initialLayout, t.initialLayout = null) :l = s.getThumbBoundsFn && s.getThumbBoundsFn(p);
                var u = o ? s.hideAnimationDuration :s.showAnimationDuration, c = function() {
                    Qt("initialZoom"), o ? (a.template.removeAttribute("style"), a.bg.removeAttribute("style")) :(Ft(1),
                        n && (n.style.display = "block"), i.addClass(e, "pswp--animated-in"), _t("initialZoom" + (o ? "OutEnd" :"InEnd"))),
                        r && r(), Jn = !1;
                };
                if (!u || !l || void 0 === l.x) {
                    var m = function() {
                        _t("initialZoom" + (o ? "Out" :"In")), x = t.initialZoomLevel, Pt(ft, t.initialPosition),
                            Ot(), e.style.opacity = o ? 0 :1, Ft(1), c();
                    };
                    return void m();
                }
                var f = function() {
                    var n = d, r = !a.currItem.src || a.currItem.loadError || s.showHideOpacity;
                    t.miniImg && (t.miniImg.style.webkitBackfaceVisibility = "hidden"), o || (x = l.w / t.w,
                        ft.x = l.x, ft.y = l.y - Z, a[r ? "template" :"bg"].style.opacity = .001, Ot()),
                        en("initialZoom"), o && !n && i.removeClass(e, "pswp--animated-in"), r && (o ? i[(n ? "remove" :"add") + "Class"](e, "pswp--animate_opacity") :setTimeout(function() {
                        i.addClass(e, "pswp--animate_opacity");
                    }, 30)), Xn = setTimeout(function() {
                        if (_t("initialZoom" + (o ? "Out" :"In")), o) {
                            var a = l.w / t.w, s = {
                                x:ft.x,
                                y:ft.y
                            }, d = x, p = st, m = function(t) {
                                1 === t ? (x = a, ft.x = l.x, ft.y = l.y - z) :(x = (a - d) * t + d, ft.x = (l.x - s.x) * t + s.x,
                                    ft.y = (l.y - z - s.y) * t + s.y), Ot(), r ? e.style.opacity = 1 - t :Ft(p - t * p);
                            };
                            n ? nn("initialZoom", 0, 1, u, i.easing.cubic.out, m, c) :(m(1), Xn = setTimeout(c, u + 20));
                        } else x = t.initialZoomLevel, Pt(ft, t.initialPosition), Ot(), Ft(1), r ? e.style.opacity = 1 :Ft(1),
                            Xn = setTimeout(c, u + 20);
                    }, o ? 25 :90);
                };
                f();
            }, oo = {}, io = [], ao = {
                index:0,
                errorMsg:'<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
                forceProgressiveLoading:!1,
                preload:[ 1, 1 ],
                getNumItemsFn:function() {
                    return $n.length;
                }
            }, ro = function() {
                return {
                    center:{
                        x:0,
                        y:0
                    },
                    max:{
                        x:0,
                        y:0
                    },
                    min:{
                        x:0,
                        y:0
                    }
                };
            }, lo = function(e, t, n) {
                var o = e.bounds;
                o.center.x = Math.round((oo.x - t) / 2), o.center.y = Math.round((oo.y - n) / 2) + e.vGap.top,
                    o.max.x = t > oo.x ? Math.round(oo.x - t) :o.center.x, o.max.y = n > oo.y ? Math.round(oo.y - n) + e.vGap.top :o.center.y,
                    o.min.x = t > oo.x ? 0 :o.center.x, o.min.y = n > oo.y ? e.vGap.top :o.center.y;
            }, so = function(e, t, n) {
                if (e.src && !e.loadError) {
                    var o = !n;
                    if (o && (e.vGap || (e.vGap = {
                        top:0,
                        bottom:0
                    }), _t("parseVerticalMargin", e)), oo.x = t.x, oo.y = t.y - e.vGap.top - e.vGap.bottom,
                        o) {
                        var i = oo.x / e.w, a = oo.y / e.h;
                        e.fitRatio = a > i ? i :a;
                        var r = s.scaleMode;
                        "orig" === r ? n = 1 :"fit" === r && (n = e.fitRatio), n > 1 && (n = 1), e.initialZoomLevel = n,
                            e.bounds || (e.bounds = ro());
                    }
                    if (!n) return;
                    return lo(e, e.w * n, e.h * n), o && n === e.initialZoomLevel && (e.initialPosition = e.bounds.center),
                        e.bounds;
                }
                return e.w = e.h = 0, e.initialZoomLevel = e.fitRatio = 1, e.bounds = ro(), e.initialPosition = e.bounds.center,
                    e.bounds;
            }, uo = function(e, t, n, o, i, a) {
                t.loadError || o && (t.imageAppended = !0, mo(t, o), n.appendChild(o), a && setTimeout(function() {
                    t && t.loaded && t.placeholder && (t.placeholder.style.display = "none", t.placeholder = null);
                }, 500));
            }, co = function(e) {
                e.loading = !0, e.loaded = !1;
                var t = e.img = i.createEl("pswp__img", "img"), n = function() {
                    e.loading = !1, e.loaded = !0, e.loadComplete ? e.loadComplete(e) :e.img = null,
                        t.onload = t.onerror = null, t = null;
                };
                return t.onload = n, t.onerror = function() {
                    e.loadError = !0, n();
                }, t.src = e.src, t;
            }, po = function(e, t) {
                return e.src && e.loadError && e.container ? (t && (e.container.innerHTML = ""),
                    e.container.innerHTML = s.errorMsg.replace("%url%", e.src), !0) :void 0;
            }, mo = function(e, t, n) {
                if (e.src) {
                    t || (t = e.container.lastChild);
                    var o = n ? e.w :Math.round(e.w * e.fitRatio), i = n ? e.h :Math.round(e.h * e.fitRatio);
                    e.placeholder && !e.loaded && (e.placeholder.style.width = o + "px", e.placeholder.style.height = i + "px"),
                        t.style.width = o + "px", t.style.height = i + "px";
                }
            }, fo = function() {
                if (io.length) {
                    for (var e, t = 0; t < io.length; t++) e = io[t], e.holder.index === e.index && uo(e.index, e.item, e.baseDiv, e.img, !1, e.clearPlaceholder);
                    io = [];
                }
            };
            Tt("Controller", {
                publicMethods:{
                    lazyLoadItem:function(e) {
                        e = Et(e);
                        var t = Qn(e);
                        !t || t.loaded || t.loading || (_t("gettingData", e, t), t.src && co(t));
                    },
                    initController:function() {
                        i.extend(s, ao, !0), a.items = $n = n, Qn = a.getItemAt, eo = s.getNumItemsFn, to = s.loop,
                            eo() < 3 && (s.loop = !1), St("beforeChange", function(e) {
                            var t, n = s.preload, o = null === e ? !0 :e > 0, i = Math.min(n[0], eo()), r = Math.min(n[1], eo());
                            for (t = 1; (o ? r :i) >= t; t++) a.lazyLoadItem(p + t);
                            for (t = 1; (o ? i :r) >= t; t++) a.lazyLoadItem(p - t);
                        }), St("initialLayout", function() {
                            a.currItem.initialLayout = s.getThumbBoundsFn && s.getThumbBoundsFn(p);
                        }), St("mainScrollAnimComplete", fo), St("initialZoomInEnd", fo), St("destroy", function() {
                            for (var e, t = 0; t < $n.length; t++) e = $n[t], e.container && (e.container = null),
                                e.placeholder && (e.placeholder = null), e.img && (e.img = null), e.preloader && (e.preloader = null),
                                e.loadError && (e.loaded = e.loadError = !1);
                            io = null;
                        });
                    },
                    getItemAt:function(e) {
                        return e >= 0 && void 0 !== $n[e] ? $n[e] :!1;
                    },
                    allowProgressiveImg:function() {
                        return s.forceProgressiveLoading || !O || s.mouseUsed || screen.width > 1200;
                    },
                    setContent:function(e, t) {
                        s.loop && (t = Et(t));
                        var n = a.getItemAt(e.index);
                        n && (n.container = null);
                        var o, r = a.getItemAt(t);
                        if (!r) return void (e.el.innerHTML = "");
                        _t("gettingData", t, r), e.index = t, e.item = r;
                        var l = r.container = i.createEl("pswp__zoom-wrap");
                        if (!r.src && r.html && (r.html.tagName ? l.appendChild(r.html) :l.innerHTML = r.html),
                            po(r), so(r, ht), !r.src || r.loadError || r.loaded) r.src && !r.loadError && (o = i.createEl("pswp__img", "img"),
                            o.style.opacity = 1, o.src = r.src, mo(r, o), uo(t, r, l, o, !0)); else {
                            if (r.loadComplete = function(n) {
                                if (u) {
                                    if (e && e.index === t) {
                                        if (po(n, !0)) return n.loadComplete = n.img = null, so(n, ht), At(n), void (e.index === p && a.updateCurrZoomItem());
                                        n.imageAppended ? !Jn && n.placeholder && (n.placeholder.style.display = "none",
                                            n.placeholder = null) :N.transform && (it || Jn) ? io.push({
                                            item:n,
                                            baseDiv:l,
                                            img:n.img,
                                            index:t,
                                            holder:e,
                                            clearPlaceholder:!0
                                        }) :uo(t, n, l, n.img, it || Jn, !0);
                                    }
                                    n.loadComplete = null, n.img = null, _t("imageLoadComplete", t, n);
                                }
                            }, i.features.transform) {
                                var c = "pswp__img pswp__img--placeholder";
                                c += r.msrc ? "" :" pswp__img--placeholder--blank";
                                var d = i.createEl(c, r.msrc ? "img" :"");
                                r.msrc && (d.src = r.msrc), mo(r, d), l.appendChild(d), r.placeholder = d;
                            }
                            r.loading || co(r), a.allowProgressiveImg() && (!jn && N.transform ? io.push({
                                item:r,
                                baseDiv:l,
                                img:r.img,
                                index:t,
                                holder:e
                            }) :uo(t, r, l, r.img, !0, !0));
                        }
                        jn || t !== p ? At(r) :(ot = l.style, no(r, o || r.img)), e.el.innerHTML = "", e.el.appendChild(l);
                    },
                    cleanSlide:function(e) {
                        e.img && (e.img.onload = e.img.onerror = null), e.loaded = e.loading = e.img = e.imageAppended = !1;
                    }
                }
            });
            var ho, vo = {}, go = function(e, t, n) {
                var o = document.createEvent("CustomEvent"), i = {
                    origEvent:e,
                    target:e.target,
                    releasePoint:t,
                    pointerType:n || "touch"
                };
                o.initCustomEvent("pswpTap", !0, !0, i), e.target.dispatchEvent(o);
            };
            Tt("Tap", {
                publicMethods:{
                    initTap:function() {
                        St("firstTouchStart", a.onTapStart), St("touchRelease", a.onTapRelease), St("destroy", function() {
                            vo = {}, ho = null;
                        });
                    },
                    onTapStart:function(e) {
                        e.length > 1 && (clearTimeout(ho), ho = null);
                    },
                    onTapRelease:function(e, t) {
                        if (t && !X && !q && !Jt) {
                            var n = t;
                            if (ho && (clearTimeout(ho), ho = null, In(n, vo))) return void _t("doubleTap", n);
                            if ("mouse" === t.type) return void go(e, t, "mouse");
                            var o = e.target.tagName.toUpperCase();
                            if ("BUTTON" === o || i.hasClass(e.target, "pswp__single-tap")) return void go(e, t);
                            Pt(vo, n), ho = setTimeout(function() {
                                go(e, t), ho = null;
                            }, 300);
                        }
                    }
                }
            });
            var xo;
            Tt("DesktopZoom", {
                publicMethods:{
                    initDesktopZoom:function() {
                        P || (O ? St("mouseUsed", function() {
                            a.setupDesktopZoom();
                        }) :a.setupDesktopZoom(!0));
                    },
                    setupDesktopZoom:function(t) {
                        xo = {};
                        var n = "wheel mousewheel DOMMouseScroll";
                        St("bindEvents", function() {
                            i.bind(e, n, a.handleMouseWheel);
                        }), St("unbindEvents", function() {
                            xo && i.unbind(e, n, a.handleMouseWheel);
                        }), a.mouseZoomedIn = !1;
                        var o, r = function() {
                            a.mouseZoomedIn && (i.removeClass(e, "pswp--zoomed-in"), a.mouseZoomedIn = !1),
                                1 > x ? i.addClass(e, "pswp--zoom-allowed") :i.removeClass(e, "pswp--zoom-allowed"),
                                l();
                        }, l = function() {
                            o && (i.removeClass(e, "pswp--dragging"), o = !1);
                        };
                        St("resize", r), St("afterChange", r), St("pointerDown", function() {
                            a.mouseZoomedIn && (o = !0, i.addClass(e, "pswp--dragging"));
                        }), St("pointerUp", l), t || r();
                    },
                    handleMouseWheel:function(e) {
                        if (x <= a.currItem.fitRatio) return s.modal && (!s.closeOnScroll || Jt || G ? e.preventDefault() :F && Math.abs(e.deltaY) > 2 && (d = !0,
                            a.close())), !0;
                        if (e.stopPropagation(), xo.x = 0, "deltaX" in e) 1 === e.deltaMode ? (xo.x = 18 * e.deltaX,
                            xo.y = 18 * e.deltaY) :(xo.x = e.deltaX, xo.y = e.deltaY); else if ("wheelDelta" in e) e.wheelDeltaX && (xo.x = -.16 * e.wheelDeltaX),
                            xo.y = e.wheelDeltaY ? -.16 * e.wheelDeltaY :-.16 * e.wheelDelta; else {
                            if (!("detail" in e)) return;
                            xo.y = e.detail;
                        }
                        Bt(x, !0);
                        var t = ft.x - xo.x, n = ft.y - xo.y;
                        (s.modal || t <= nt.min.x && t >= nt.max.x && n <= nt.min.y && n >= nt.max.y) && e.preventDefault(),
                            a.panTo(t, n);
                    },
                    toggleDesktopZoom:function(t) {
                        t = t || {
                            x:ht.x / 2 + gt.x,
                            y:ht.y / 2 + gt.y
                        };
                        var n = s.getDoubleTapZoom(!0, a.currItem), o = x === n;
                        a.mouseZoomedIn = !o, a.zoomTo(o ? a.currItem.initialZoomLevel :n, t, 333), i[(o ? "remove" :"add") + "Class"](e, "pswp--zoomed-in");
                    }
                }
            });
            var yo, wo, bo, Co, Io, To, Eo, Do, So, _o, Mo, Fo, ko = {
                history:!0,
                galleryUID:1
            }, Oo = function() {
                return Mo.hash.substring(1);
            }, Ao = function() {
                yo && clearTimeout(yo), bo && clearTimeout(bo);
            }, Ro = function() {
                var e = Oo(), t = {};
                if (e.length < 5) return t;
                var n, o = e.split("&");
                for (n = 0; n < o.length; n++) if (o[n]) {
                    var i = o[n].split("=");
                    i.length < 2 || (t[i[0]] = i[1]);
                }
                if (s.galleryPIDs) {
                    var a = t.pid;
                    for (t.pid = 0, n = 0; n < $n.length; n++) if ($n[n].pid === a) {
                        t.pid = n;
                        break;
                    }
                } else t.pid = parseInt(t.pid, 10) - 1;
                return t.pid < 0 && (t.pid = 0), t;
            }, Lo = function() {
                if (bo && clearTimeout(bo), Jt || G) return void (bo = setTimeout(Lo, 500));
                Co ? clearTimeout(wo) :Co = !0;
                var e = p + 1, t = Qn(p);
                t.hasOwnProperty("pid") && (e = t.pid);
                var n = Eo + "&gid=" + s.galleryUID + "&pid=" + e;
                Do || -1 === Mo.hash.indexOf(n) && (_o = !0);
                var o = Mo.href.split("#")[0] + "#" + n;
                Fo ? "#" + n !== window.location.hash && history[Do ? "replaceState" :"pushState"]("", document.title, o) :Do ? Mo.replace(o) :Mo.hash = n,
                    Do = !0, wo = setTimeout(function() {
                    Co = !1;
                }, 60);
            };
            Tt("History", {
                publicMethods:{
                    initHistory:function() {
                        if (i.extend(s, ko, !0), s.history) {
                            Mo = window.location, _o = !1, So = !1, Do = !1, Eo = Oo(), Fo = "pushState" in history,
                                Eo.indexOf("gid=") > -1 && (Eo = Eo.split("&gid=")[0], Eo = Eo.split("?gid=")[0]),
                                St("afterChange", a.updateURL), St("unbindEvents", function() {
                                i.unbind(window, "hashchange", a.onHashChange);
                            });
                            var e = function() {
                                To = !0, So || (_o ? history.back() :Eo ? Mo.hash = Eo :Fo ? history.pushState("", document.title, Mo.pathname + Mo.search) :Mo.hash = ""),
                                    Ao();
                            };
                            St("unbindEvents", function() {
                                d && e();
                            }), St("destroy", function() {
                                To || e();
                            }), St("firstUpdate", function() {
                                p = Ro().pid;
                            });
                            var t = Eo.indexOf("pid=");
                            t > -1 && (Eo = Eo.substring(0, t), "&" === Eo.slice(-1) && (Eo = Eo.slice(0, -1))),
                                setTimeout(function() {
                                    u && i.bind(window, "hashchange", a.onHashChange);
                                }, 40);
                        }
                    },
                    onHashChange:function() {
                        return Oo() === Eo ? (So = !0, void a.close()) :void (Co || (Io = !0, a.goTo(Ro().pid),
                            Io = !1));
                    },
                    updateURL:function() {
                        Ao(), Io || (Do ? yo = setTimeout(Lo, 800) :Lo());
                    }
                }
            }), i.extend(a, on);
        }, i = function(e, t) {
            var n, o, i, a, r, l, s, u, c, d, p, m, f, h, v, g, x, y, w, b = this, C = !1, I = !0, T = !0, E = {
                barsSize:{
                    top:44,
                    bottom:"auto"
                },
                closeElClasses:[ "item", "caption", "zoom-wrap", "ui", "top-bar" ],
                timeToIdle:4e3,
                timeToIdleOutside:1e3,
                loadingIndicatorDelay:1e3,
                addCaptionHTMLFn:function(e, t) {
                    return e.title ? (t.children[0].innerHTML = e.title, !0) :(t.children[0].innerHTML = "",
                        !1);
                },
                closeEl:!0,
                captionEl:!0,
                fullscreenEl:!1,
                zoomEl:!0,
                shareEl:!1,
                counterEl:!0,
                arrowEl:!0,
                preloaderEl:!0,
                tapToClose:!0,
                tapToToggleControls:!0,
                clickToCloseNonZoomable:!0,
                shareButtons:[ {
                    id:"facebook",
                    label:"Share on Facebook",
                    url:"https://www.facebook.com/sharer/sharer.php?u={{url}}"
                }, {
                    id:"twitter",
                    label:"Tweet",
                    url:"https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
                }, {
                    id:"pinterest",
                    label:"Pin it",
                    url:"http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
                }, {
                    id:"download",
                    label:"Download image",
                    url:"{{raw_image_url}}",
                    download:!0
                } ],
                getImageURLForShare:function() {
                    return e.currItem.src || "";
                },
                getPageURLForShare:function() {
                    return window.location.href;
                },
                getTextForShare:function() {
                    return e.currItem.title || "";
                },
                indexIndicatorSep:" / "
            }, D = function(e) {
                if (g) return !0;
                e = e || window.event, v.timeToIdle && v.mouseUsed && !c && Z();
                for (var n, o, i = e.target || e.srcElement, a = i.className, r = 0; r < W.length; r++) n = W[r],
                    n.onTap && a.indexOf("pswp__" + n.name) > -1 && (n.onTap(), o = !0);
                if (o) {
                    e.stopPropagation && e.stopPropagation(), g = !0;
                    var l = t.features.isOldAndroid ? 600 :30;
                    x = setTimeout(function() {
                        g = !1;
                    }, l);
                }
            }, S = function() {
                return !e.likelyTouchDevice || v.mouseUsed || screen.width > 1200;
            }, _ = function(e, n, o) {
                t[(o ? "add" :"remove") + "Class"](e, "pswp__" + n);
            }, M = function() {
                var e = 1 === v.getNumItemsFn();
                e !== h && (_(o, "ui--one-slide", e), h = e);
            }, F = function() {
                _(s, "share-modal--hidden", T);
            }, k = function() {
                return T = !T, T ? (t.removeClass(s, "pswp__share-modal--fade-in"), setTimeout(function() {
                    T && F();
                }, 300)) :(F(), setTimeout(function() {
                    T || t.addClass(s, "pswp__share-modal--fade-in");
                }, 30)), T || A(), !1;
            }, O = function(t) {
                t = t || window.event;
                var n = t.target || t.srcElement;
                return e.shout("shareLinkClick", t, n), n.href ? n.hasAttribute("download") ? !0 :(window.open(n.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) :100)),
                    T || k(), !1) :!1;
            }, A = function() {
                for (var e, t, n, o, i, a = "", r = 0; r < v.shareButtons.length; r++) e = v.shareButtons[r],
                    n = v.getImageURLForShare(e), o = v.getPageURLForShare(e), i = v.getTextForShare(e),
                    t = e.url.replace("{{url}}", encodeURIComponent(o)).replace("{{image_url}}", encodeURIComponent(n)).replace("{{raw_image_url}}", n).replace("{{text}}", encodeURIComponent(i)),
                    a += '<a href="' + t + '" target="_blank" class="pswp__share--' + e.id + '"' + (e.download ? "download" :"") + ">" + e.label + "</a>",
                    v.parseShareButtonOut && (a = v.parseShareButtonOut(e, a));
                s.children[0].innerHTML = a, s.children[0].onclick = O;
            }, R = function(e) {
                for (var n = 0; n < v.closeElClasses.length; n++) if (t.hasClass(e, "pswp__" + v.closeElClasses[n])) return !0;
            }, L = 0, Z = function() {
                clearTimeout(w), L = 0, c && b.setIdle(!1);
            }, P = function(e) {
                e = e ? e :window.event;
                var t = e.relatedTarget || e.toElement;
                t && "HTML" !== t.nodeName || (clearTimeout(w), w = setTimeout(function() {
                    b.setIdle(!0);
                }, v.timeToIdleOutside));
            }, z = function() {
                v.fullscreenEl && (n || (n = b.getFullscreenAPI()), n ? (t.bind(document, n.eventK, b.updateFullscreen),
                    b.updateFullscreen(), t.addClass(e.template, "pswp--supports-fs")) :t.removeClass(e.template, "pswp--supports-fs"));
            }, N = function() {
                v.preloaderEl && (U(!0), d("beforeChange", function() {
                    clearTimeout(f), f = setTimeout(function() {
                        e.currItem && e.currItem.loading ? (!e.allowProgressiveImg() || e.currItem.img && !e.currItem.img.naturalWidth) && U(!1) :U(!0);
                    }, v.loadingIndicatorDelay);
                }), d("imageLoadComplete", function(t, n) {
                    e.currItem === n && U(!0);
                }));
            }, U = function(e) {
                m !== e && (_(p, "preloader--active", !e), m = e);
            }, K = function(e) {
                var n = e.vGap;
                if (S()) {
                    var r = v.barsSize;
                    if (v.captionEl && "auto" === r.bottom) if (a || (a = t.createEl("pswp__caption pswp__caption--fake"),
                        a.appendChild(t.createEl("pswp__caption__center")), o.insertBefore(a, i), t.addClass(o, "pswp__ui--fit")),
                        v.addCaptionHTMLFn(e, a, !0)) {
                        var l = a.clientHeight;
                        n.bottom = parseInt(l, 10) || 44;
                    } else n.bottom = r.top; else n.bottom = "auto" === r.bottom ? 0 :r.bottom;
                    n.top = r.top;
                } else n.top = n.bottom = 0;
            }, H = function() {
                v.timeToIdle && d("mouseUsed", function() {
                    t.bind(document, "mousemove", Z), t.bind(document, "mouseout", P), y = setInterval(function() {
                        L++, 2 === L && b.setIdle(!0);
                    }, v.timeToIdle / 2);
                });
            }, B = function() {
                d("onVerticalDrag", function(e) {
                    I && .95 > e ? b.hideControls() :!I && e >= .95 && b.showControls();
                });
                var e;
                d("onPinchClose", function(t) {
                    I && .9 > t ? (b.hideControls(), e = !0) :e && !I && t > .9 && b.showControls();
                }), d("zoomGestureEnded", function() {
                    e = !1, e && !I && b.showControls();
                });
            }, W = [ {
                name:"caption",
                option:"captionEl",
                onInit:function(e) {
                    i = e;
                }
            }, {
                name:"share-modal",
                option:"shareEl",
                onInit:function(e) {
                    s = e;
                },
                onTap:function() {
                    k();
                }
            }, {
                name:"button--share",
                option:"shareEl",
                onInit:function(e) {
                    l = e;
                },
                onTap:function() {
                    k();
                }
            }, {
                name:"button--zoom",
                option:"zoomEl",
                onTap:e.toggleDesktopZoom
            }, {
                name:"counter",
                option:"counterEl",
                onInit:function(e) {
                    r = e;
                }
            }, {
                name:"button--close",
                option:"closeEl",
                onTap:e.close
            }, {
                name:"button--arrow--left",
                option:"arrowEl",
                onTap:e.prev
            }, {
                name:"button--arrow--right",
                option:"arrowEl",
                onTap:e.next
            }, {
                name:"button--fs",
                option:"fullscreenEl",
                onTap:function() {
                    n.isFullscreen() ? n.exit() :n.enter();
                }
            }, {
                name:"preloader",
                option:"preloaderEl",
                onInit:function(e) {
                    p = e;
                }
            } ], Y = function() {
                var e, n, i, a = function(o) {
                    if (o) for (var a = o.length, r = 0; a > r; r++) {
                        e = o[r], n = e.className;
                        for (var l = 0; l < W.length; l++) i = W[l], n.indexOf("pswp__" + i.name) > -1 && (v[i.option] ? (t.removeClass(e, "pswp__element--disabled"),
                            i.onInit && i.onInit(e)) :t.addClass(e, "pswp__element--disabled"));
                    }
                };
                a(o.children);
                var r = t.getChildByClass(o, "pswp__top-bar");
                r && a(r.children);
            };
            b.init = function() {
                t.extend(e.options, E, !0), v = e.options, o = t.getChildByClass(e.scrollWrap, "pswp__ui"),
                    d = e.listen, B(), d("beforeChange", b.update), d("doubleTap", function(t) {
                    var n = e.currItem.initialZoomLevel;
                    e.getZoomLevel() !== n ? e.zoomTo(n, t, 333) :e.zoomTo(v.getDoubleTapZoom(!1, e.currItem), t, 333);
                }), d("preventDragEvent", function(e, t, n) {
                    var o = e.target || e.srcElement;
                    o && o.className && e.type.indexOf("mouse") > -1 && (o.className.indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(o.tagName)) && (n.prevent = !1);
                }), d("bindEvents", function() {
                    t.bind(o, "pswpTap click", D), t.bind(e.scrollWrap, "pswpTap", b.onGlobalTap), e.likelyTouchDevice || t.bind(e.scrollWrap, "mouseover", b.onMouseOver);
                }), d("unbindEvents", function() {
                    T || k(), y && clearInterval(y), t.unbind(document, "mouseout", P), t.unbind(document, "mousemove", Z),
                        t.unbind(o, "pswpTap click", D), t.unbind(e.scrollWrap, "pswpTap", b.onGlobalTap),
                        t.unbind(e.scrollWrap, "mouseover", b.onMouseOver), n && (t.unbind(document, n.eventK, b.updateFullscreen),
                        n.isFullscreen() && (v.hideAnimationDuration = 0, n.exit()), n = null);
                }), d("destroy", function() {
                    v.captionEl && (a && o.removeChild(a), t.removeClass(i, "pswp__caption--empty")),
                        s && (s.children[0].onclick = null), t.removeClass(o, "pswp__ui--over-close"), t.addClass(o, "pswp__ui--hidden"),
                        b.setIdle(!1);
                }), v.showAnimationDuration || t.removeClass(o, "pswp__ui--hidden"), d("initialZoomIn", function() {
                    v.showAnimationDuration && t.removeClass(o, "pswp__ui--hidden");
                }), d("initialZoomOut", function() {
                    t.addClass(o, "pswp__ui--hidden");
                }), d("parseVerticalMargin", K), Y(), v.shareEl && l && s && (T = !0), M(), H(),
                    z(), N();
            }, b.setIdle = function(e) {
                c = e, _(o, "ui--idle", e);
            }, b.update = function() {
                I && e.currItem ? (b.updateIndexIndicator(), v.captionEl && (v.addCaptionHTMLFn(e.currItem, i),
                    _(i, "caption--empty", !e.currItem.title)), C = !0) :C = !1, T || k(), M();
            }, b.updateFullscreen = function(o) {
                o && setTimeout(function() {
                    e.setScrollOffset(0, t.getScrollY());
                }, 50), t[(n.isFullscreen() ? "add" :"remove") + "Class"](e.template, "pswp--fs");
            }, b.updateIndexIndicator = function() {
                v.counterEl && (r.innerHTML = e.getCurrentIndex() + 1 + v.indexIndicatorSep + v.getNumItemsFn());
            }, b.onGlobalTap = function(n) {
                n = n || window.event;
                var o = n.target || n.srcElement;
                if (!g) if (n.detail && "mouse" === n.detail.pointerType) {
                    if (R(o)) return void e.close();
                    t.hasClass(o, "pswp__img") && (1 === e.getZoomLevel() && e.getZoomLevel() <= e.currItem.fitRatio ? v.clickToCloseNonZoomable && e.close() :e.toggleDesktopZoom(n.detail.releasePoint));
                } else if (v.tapToToggleControls && (I ? b.hideControls() :b.showControls()), v.tapToClose && (t.hasClass(o, "pswp__img") || R(o))) return void e.close();
            }, b.onMouseOver = function(e) {
                e = e || window.event;
                var t = e.target || e.srcElement;
                _(o, "ui--over-close", R(t));
            }, b.hideControls = function() {
                t.addClass(o, "pswp__ui--hidden"), I = !1;
            }, b.showControls = function() {
                I = !0, C || b.update(), t.removeClass(o, "pswp__ui--hidden");
            }, b.supportsFullscreen = function() {
                var e = document;
                return !!(e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen);
            }, b.getFullscreenAPI = function() {
                var t, n = document.documentElement, o = "fullscreenchange";
                return n.requestFullscreen ? t = {
                    enterK:"requestFullscreen",
                    exitK:"exitFullscreen",
                    elementK:"fullscreenElement",
                    eventK:o
                } :n.mozRequestFullScreen ? t = {
                    enterK:"mozRequestFullScreen",
                    exitK:"mozCancelFullScreen",
                    elementK:"mozFullScreenElement",
                    eventK:"moz" + o
                } :n.webkitRequestFullscreen ? t = {
                    enterK:"webkitRequestFullscreen",
                    exitK:"webkitExitFullscreen",
                    elementK:"webkitFullscreenElement",
                    eventK:"webkit" + o
                } :n.msRequestFullscreen && (t = {
                    enterK:"msRequestFullscreen",
                    exitK:"msExitFullscreen",
                    elementK:"msFullscreenElement",
                    eventK:"MSFullscreenChange"
                }), t && (t.enter = function() {
                    return u = v.closeOnScroll, v.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? e.template[this.enterK]() :void e.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT);
                }, t.exit = function() {
                    return v.closeOnScroll = u, document[this.exitK]();
                }, t.isFullscreen = function() {
                    return document[this.elementK];
                }), t;
            };
        };

    }

    n.exports  =  o ;
    n.exports = {
        el:"#pageletPhotoswipe",
        init:function() {
            $("body").on("click", ".article-content img", function() {
                    var e = new o($(".pswp")[0], i, window.slideList, {
                                index:$(this).attr("data-index") - 0
                    });
                    e.init();
            });
        }
    };
});