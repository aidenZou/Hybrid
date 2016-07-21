define(function(a, b, c) {
    !function(a, b, d) {
        function g(a, c) {
            this.wrapper = "string" == typeof a ? b.querySelector(a) :a, this.scroller = this.wrapper.children[0],
                this.scrollerStyle = this.scroller.style, this.options = {
                resizeScrollbars:!0,
                mouseWheelSpeed:20,
                snapThreshold:.334,
                startX:0,
                startY:0,
                scrollY:!0,
                directionLockThreshold:5,
                momentum:!0,
                bounce:!0,
                bounceTime:600,
                bounceEasing:"",
                preventDefault:!0,
                preventDefaultException:{
                    tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/
                },
                HWCompositing:!0,
                useTransition:!0,
                useTransform:!0
            };
            for (var d in c) this.options[d] = c[d];
            this.translateZ = this.options.HWCompositing && f.hasPerspective ? " translateZ(0)" :"",
                this.options.useTransition = f.hasTransition && this.options.useTransition, this.options.useTransform = f.hasTransform && this.options.useTransform,
                this.options.eventPassthrough = this.options.eventPassthrough === !0 ? "vertical" :this.options.eventPassthrough,
                this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault,
                this.options.scrollY = "vertical" == this.options.eventPassthrough ? !1 :this.options.scrollY,
                this.options.scrollX = "horizontal" == this.options.eventPassthrough ? !1 :this.options.scrollX,
                this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough,
                this.options.directionLockThreshold = this.options.eventPassthrough ? 0 :this.options.directionLockThreshold,
                this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? f.ease[this.options.bounceEasing] || f.ease.circular :this.options.bounceEasing,
                this.options.resizePolling = void 0 === this.options.resizePolling ? 60 :this.options.resizePolling,
                this.options.tap === !0 && (this.options.tap = "tap"), "scale" == this.options.shrinkScrollbars && (this.options.useTransition = !1),
                this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 :1, this.x = 0,
                this.y = 0, this.directionX = 0, this.directionY = 0, this._events = {}, this._init(),
                this.refresh(), this.scrollTo(this.options.startX, this.options.startY), this.enable();
        }
        function h(a, c, d) {
            var e = b.createElement("div"), f = b.createElement("div");
            return d === !0 && (e.style.cssText = "position:absolute;z-index:9999", f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"),
                f.className = "iScrollIndicator", "h" == a ? (d === !0 && (e.style.cssText += ";height:7px;left:2px;right:2px;bottom:0",
                f.style.height = "100%"), e.className = "iScrollHorizontalScrollbar") :(d === !0 && (e.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px",
                f.style.width = "100%"), e.className = "iScrollVerticalScrollbar"), e.style.cssText += ";overflow:hidden",
                c || (e.style.pointerEvents = "none"), e.appendChild(f), e;
        }
        function i(c, d) {
            this.wrapper = "string" == typeof d.el ? b.querySelector(d.el) :d.el, this.wrapperStyle = this.wrapper.style,
                this.indicator = this.wrapper.children[0], this.indicatorStyle = this.indicator.style,
                this.scroller = c, this.options = {
                listenX:!0,
                listenY:!0,
                interactive:!1,
                resize:!0,
                defaultScrollbars:!1,
                shrink:!1,
                fade:!1,
                speedRatioX:0,
                speedRatioY:0
            };
            for (var e in d) this.options[e] = d[e];
            this.sizeRatioX = 1, this.sizeRatioY = 1, this.maxPosX = 0, this.maxPosY = 0, this.options.interactive && (this.options.disableTouch || (f.addEvent(this.indicator, "touchstart", this),
                f.addEvent(a, "touchend", this)), this.options.disablePointer || (f.addEvent(this.indicator, f.prefixPointerEvent("pointerdown"), this),
                f.addEvent(a, f.prefixPointerEvent("pointerup"), this)), this.options.disableMouse || (f.addEvent(this.indicator, "mousedown", this),
                f.addEvent(a, "mouseup", this))), this.options.fade && (this.wrapperStyle[f.style.transform] = this.scroller.translateZ,
                this.wrapperStyle[f.style.transitionDuration] = f.isBadAndroid ? "0.001s" :"0ms",
                this.wrapperStyle.opacity = "0");
        }
        var e = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || function(b) {
            a.setTimeout(b, 1e3 / 60);
        }, f = function() {
            function g(a) {
                return f === !1 ? !1 :"" === f ? a :f + a.charAt(0).toUpperCase() + a.substr(1);
            }
            var h, c = {}, e = b.createElement("div").style, f = function() {
                for (var b, a = [ "t", "webkitT", "MozT", "msT", "OT" ], c = 0, d = a.length; d > c; c++) if (b = a[c] + "ransform",
                    b in e) return a[c].substr(0, a[c].length - 1);
                return !1;
            }();
            return c.getTime = Date.now || function() {
                return new Date().getTime();
            }, c.extend = function(a, b) {
                for (var c in b) a[c] = b[c];
            }, c.addEvent = function(a, b, c, d) {
                a.addEventListener(b, c, !!d);
            }, c.removeEvent = function(a, b, c, d) {
                a.removeEventListener(b, c, !!d);
            }, c.prefixPointerEvent = function(b) {
                return a.MSPointerEvent ? "MSPointer" + b.charAt(9).toUpperCase() + b.substr(10) :b;
            }, c.momentum = function(a, b, c, e, f, g) {
                var j, k, h = a - b, i = d.abs(h) / c;
                return g = void 0 === g ? 6e-4 :g, j = a + i * i / (2 * g) * (0 > h ? -1 :1), k = i / g,
                    e > j ? (j = f ? e - f / 2.5 * (i / 8) :e, h = d.abs(j - a), k = h / i) :j > 0 && (j = f ? f / 2.5 * (i / 8) :0,
                        h = d.abs(a) + j, k = h / i), {
                    destination:d.round(j),
                    duration:k
                };
            }, h = g("transform"), c.extend(c, {
                hasTransform:h !== !1,
                hasPerspective:g("perspective") in e,
                hasTouch:"ontouchstart" in a,
                hasPointer:a.PointerEvent || a.MSPointerEvent,
                hasTransition:g("transition") in e
            }), c.isBadAndroid = /Android /.test(a.navigator.appVersion) && !/Chrome\/\d/.test(a.navigator.appVersion),
                c.extend(c.style = {}, {
                    transform:h,
                    transitionTimingFunction:g("transitionTimingFunction"),
                    transitionDuration:g("transitionDuration"),
                    transitionDelay:g("transitionDelay"),
                    transformOrigin:g("transformOrigin")
                }), c.hasClass = function(a, b) {
                var c = new RegExp("(^|\\s)" + b + "(\\s|$)");
                return c.test(a.className);
            }, c.addClass = function(a, b) {
                if (!c.hasClass(a, b)) {
                    var d = a.className.split(" ");
                    d.push(b), a.className = d.join(" ");
                }
            }, c.removeClass = function(a, b) {
                if (c.hasClass(a, b)) {
                    var d = new RegExp("(^|\\s)" + b + "(\\s|$)", "g");
                    a.className = a.className.replace(d, " ");
                }
            }, c.offset = function(a) {
                for (var b = -a.offsetLeft, c = -a.offsetTop; a = a.offsetParent; ) b -= a.offsetLeft,
                    c -= a.offsetTop;
                return {
                    left:b,
                    top:c
                };
            }, c.preventDefaultException = function(a, b) {
                for (var c in b) if (b[c].test(a[c])) return !0;
                return !1;
            }, c.extend(c.eventType = {}, {
                touchstart:1,
                touchmove:1,
                touchend:1,
                mousedown:2,
                mousemove:2,
                mouseup:2,
                pointerdown:3,
                pointermove:3,
                pointerup:3,
                MSPointerDown:3,
                MSPointerMove:3,
                MSPointerUp:3
            }), c.extend(c.ease = {}, {
                quadratic:{
                    style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    fn:function(a) {
                        return a * (2 - a);
                    }
                },
                circular:{
                    style:"cubic-bezier(0.1, 0.57, 0.1, 1)",
                    fn:function(a) {
                        return d.sqrt(1 - --a * a);
                    }
                },
                back:{
                    style:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    fn:function(a) {
                        var b = 4;
                        return (a -= 1) * a * ((b + 1) * a + b) + 1;
                    }
                },
                bounce:{
                    style:"",
                    fn:function(a) {
                        return (a /= 1) < 1 / 2.75 ? 7.5625 * a * a :2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 :2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 :7.5625 * (a -= 2.625 / 2.75) * a + .984375;
                    }
                },
                elastic:{
                    style:"",
                    fn:function(a) {
                        var b = .22, c = .4;
                        return 0 === a ? 0 :1 == a ? 1 :c * d.pow(2, -10 * a) * d.sin(2 * (a - b / 4) * d.PI / b) + 1;
                    }
                }
            }), c.tap = function(a, c) {
                var d = b.createEvent("Event");
                d.initEvent(c, !0, !0), d.pageX = a.pageX, d.pageY = a.pageY, a.target.dispatchEvent(d);
            }, c.click = function(a) {
                var d, c = a.target;
                /(SELECT|INPUT|TEXTAREA)/i.test(c.tagName) || (d = b.createEvent("MouseEvents"),
                    d.initMouseEvent("click", !0, !0, a.view, 1, c.screenX, c.screenY, c.clientX, c.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, null),
                    d._constructed = !0, c.dispatchEvent(d));
            }, c;
        }();
        g.prototype = {
            version:"5.1.3",
            _init:function() {
                this._initEvents(), (this.options.scrollbars || this.options.indicators) && this._initIndicators(),
                    this.options.mouseWheel && this._initWheel(), this.options.snap && this._initSnap(),
                    this.options.keyBindings && this._initKeys();
            },
            destroy:function() {
                this._initEvents(!0), this._execEvent("destroy");
            },
            _transitionEnd:function(a) {
                a.target == this.scroller && this.isInTransition && (this._transitionTime(), this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1,
                    this._execEvent("scrollEnd")));
            },
            _start:function(a) {
                if (!(1 != f.eventType[a.type] && 0 !== a.button || !this.enabled || this.initiated && f.eventType[a.type] !== this.initiated)) {
                    !this.options.preventDefault || f.isBadAndroid || f.preventDefaultException(a.target, this.options.preventDefaultException) || a.preventDefault();
                    var c, b = a.touches ? a.touches[0] :a;
                    this.initiated = f.eventType[a.type], this.moved = !1, this.distX = 0, this.distY = 0,
                        this.directionX = 0, this.directionY = 0, this.directionLocked = 0, this._transitionTime(),
                        this.startTime = f.getTime(), this.options.useTransition && this.isInTransition ? (this.isInTransition = !1,
                        c = this.getComputedPosition(), this._translate(d.round(c.x), d.round(c.y)), this._execEvent("scrollEnd")) :!this.options.useTransition && this.isAnimating && (this.isAnimating = !1,
                        this._execEvent("scrollEnd")), this.startX = this.x, this.startY = this.y, this.absStartX = this.x,
                        this.absStartY = this.y, this.pointX = b.pageX, this.pointY = b.pageY, this._execEvent("beforeScrollStart");
                }
            },
            _move:function(a) {
                if (this.enabled && f.eventType[a.type] === this.initiated) {
                    this.options.preventDefault && a.preventDefault();
                    var h, i, j, k, b = a.touches ? a.touches[0] :a, c = b.pageX - this.pointX, e = b.pageY - this.pointY, g = f.getTime();
                    if (this.pointX = b.pageX, this.pointY = b.pageY, this.distX += c, this.distY += e,
                        j = d.abs(this.distX), k = d.abs(this.distY), !(g - this.endTime > 300 && 10 > j && 10 > k)) {
                        if (this.directionLocked || this.options.freeScroll || (this.directionLocked = j > k + this.options.directionLockThreshold ? "h" :k >= j + this.options.directionLockThreshold ? "v" :"n"),
                            "h" == this.directionLocked) {
                            if ("vertical" == this.options.eventPassthrough) a.preventDefault(); else if ("horizontal" == this.options.eventPassthrough) return this.initiated = !1,
                                void 0;
                            e = 0;
                        } else if ("v" == this.directionLocked) {
                            if ("horizontal" == this.options.eventPassthrough) a.preventDefault(); else if ("vertical" == this.options.eventPassthrough) return this.initiated = !1,
                                void 0;
                            c = 0;
                        }
                        c = this.hasHorizontalScroll ? c :0, e = this.hasVerticalScroll ? e :0, h = this.x + c,
                            i = this.y + e, (h > 0 || h < this.maxScrollX) && (h = this.options.bounce ? this.x + c / 3 :h > 0 ? 0 :this.maxScrollX),
                            (i > 0 || i < this.maxScrollY) && (i = this.options.bounce ? this.y + e / 3 :i > 0 ? 0 :this.maxScrollY),
                            this.directionX = c > 0 ? -1 :0 > c ? 1 :0, this.directionY = e > 0 ? -1 :0 > e ? 1 :0,
                            this.moved || this._execEvent("scrollStart"), this.moved = !0, this._translate(h, i),
                            g - this.startTime > 300 && (this.startTime = g, this.startX = this.x, this.startY = this.y);
                    }
                }
            },
            _end:function(a) {
                var c, e, g, h, i, j, k, l, m, n;
                if (this.enabled && f.eventType[a.type] === this.initiated && (this.options.preventDefault && !f.preventDefaultException(a.target, this.options.preventDefaultException) && a.preventDefault(),
                    a.changedTouches ? a.changedTouches[0] :a, g = f.getTime() - this.startTime, h = d.round(this.x),
                    i = d.round(this.y), j = d.abs(h - this.startX), k = d.abs(i - this.startY), l = 0,
                    m = "", this.isInTransition = 0, this.initiated = 0, this.endTime = f.getTime(),
                    !this.resetPosition(this.options.bounceTime))) return this.scrollTo(h, i), this.moved ? this._events.flick && 200 > g && 100 > j && 100 > k ? (this._execEvent("flick"),
                    void 0) :(this.options.momentum && 300 > g && (c = this.hasHorizontalScroll ? f.momentum(this.x, this.startX, g, this.maxScrollX, this.options.bounce ? this.wrapperWidth :0, this.options.deceleration) :{
                    destination:h,
                    duration:0
                }, e = this.hasVerticalScroll ? f.momentum(this.y, this.startY, g, this.maxScrollY, this.options.bounce ? this.wrapperHeight :0, this.options.deceleration) :{
                    destination:i,
                    duration:0
                }, h = c.destination, i = e.destination, l = d.max(c.duration, e.duration), this.isInTransition = 1),
                    this.options.snap && (n = this._nearestSnap(h, i), this.currentPage = n, l = this.options.snapSpeed || d.max(d.max(d.min(d.abs(h - n.x), 1e3), d.min(d.abs(i - n.y), 1e3)), 300),
                        h = n.x, i = n.y, this.directionX = 0, this.directionY = 0, m = this.options.bounceEasing),
                    h != this.x || i != this.y ? ((h > 0 || h < this.maxScrollX || i > 0 || i < this.maxScrollY) && (m = f.ease.quadratic),
                        this.scrollTo(h, i, l, m), void 0) :(this._execEvent("scrollEnd"), void 0)) :(this.options.tap && f.tap(a, this.options.tap),
                    this.options.click && f.click(a), this._execEvent("scrollCancel"), void 0);
            },
            _resize:function() {
                var a = this;
                clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function() {
                    a.refresh();
                }, this.options.resizePolling);
            },
            resetPosition:function(a) {
                var b = this.x, c = this.y;
                return a = a || 0, !this.hasHorizontalScroll || this.x > 0 ? b = 0 :this.x < this.maxScrollX && (b = this.maxScrollX),
                    !this.hasVerticalScroll || this.y > 0 ? c = 0 :this.y < this.maxScrollY && (c = this.maxScrollY),
                    b == this.x && c == this.y ? !1 :(this.scrollTo(b, c, a, this.options.bounceEasing),
                        !0);
            },
            disable:function() {
                this.enabled = !1;
            },
            enable:function() {
                this.enabled = !0;
            },
            refresh:function() {
                this.wrapper.offsetHeight, this.wrapperWidth = this.wrapper.clientWidth, this.wrapperHeight = this.wrapper.clientHeight,
                    this.scrollerWidth = this.scroller.offsetWidth, this.scrollerHeight = this.scroller.offsetHeight,
                    this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.maxScrollY = this.wrapperHeight - this.scrollerHeight,
                    this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0, this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0,
                    this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth),
                    this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight),
                    this.endTime = 0, this.directionX = 0, this.directionY = 0, this.wrapperOffset = f.offset(this.wrapper),
                    this._execEvent("refresh"), this.resetPosition();
            },
            on:function(a, b) {
                this._events[a] || (this._events[a] = []), this._events[a].push(b);
            },
            off:function(a, b) {
                if (this._events[a]) {
                    var c = this._events[a].indexOf(b);
                    c > -1 && this._events[a].splice(c, 1);
                }
            },
            _execEvent:function(a) {
                if (this._events[a]) {
                    var b = 0, c = this._events[a].length;
                    if (c) for (;c > b; b++) this._events[a][b].apply(this, [].slice.call(arguments, 1));
                }
            },
            scrollBy:function(a, b, c, d) {
                a = this.x + a, b = this.y + b, c = c || 0, this.scrollTo(a, b, c, d);
            },
            scrollTo:function(a, b, c, d) {
                d = d || f.ease.circular, this.isInTransition = this.options.useTransition && c > 0,
                    !c || this.options.useTransition && d.style ? (this._transitionTimingFunction(d.style),
                        this._transitionTime(c), this._translate(a, b)) :this._animate(a, b, c, d.fn);
            },
            scrollToElement:function(a, b, c, e, g) {
                if (a = a.nodeType ? a :this.scroller.querySelector(a)) {
                    var h = f.offset(a);
                    h.left -= this.wrapperOffset.left, h.top -= this.wrapperOffset.top, c === !0 && (c = d.round(a.offsetWidth / 2 - this.wrapper.offsetWidth / 2)),
                        e === !0 && (e = d.round(a.offsetHeight / 2 - this.wrapper.offsetHeight / 2)), h.left -= c || 0,
                        h.top -= e || 0, h.left = h.left > 0 ? 0 :h.left < this.maxScrollX ? this.maxScrollX :h.left,
                        h.top = h.top > 0 ? 0 :h.top < this.maxScrollY ? this.maxScrollY :h.top, b = void 0 === b || null === b || "auto" === b ? d.max(d.abs(this.x - h.left), d.abs(this.y - h.top)) :b,
                        this.scrollTo(h.left, h.top, b, g);
                }
            },
            _transitionTime:function(a) {
                if (a = a || 0, this.scrollerStyle[f.style.transitionDuration] = a + "ms", !a && f.isBadAndroid && (this.scrollerStyle[f.style.transitionDuration] = "0.001s"),
                    this.indicators) for (var b = this.indicators.length; b--; ) this.indicators[b].transitionTime(a);
            },
            _transitionTimingFunction:function(a) {
                if (this.scrollerStyle[f.style.transitionTimingFunction] = a, this.indicators) for (var b = this.indicators.length; b--; ) this.indicators[b].transitionTimingFunction(a);
            },
            _translate:function(a, b) {
                if (this.options.useTransform ? this.scrollerStyle[f.style.transform] = "translate(" + a + "px," + b + "px)" + this.translateZ :(a = d.round(a),
                    b = d.round(b), this.scrollerStyle.left = a + "px", this.scrollerStyle.top = b + "px"),
                    this.x = a, this.y = b, this.indicators) for (var c = this.indicators.length; c--; ) this.indicators[c].updatePosition();
            },
            _initEvents:function(b) {
                var c = b ? f.removeEvent :f.addEvent, d = this.options.bindToWrapper ? this.wrapper :a;
                c(a, "orientationchange", this), c(a, "resize", this), this.options.click && c(this.wrapper, "click", this, !0),
                    this.options.disableMouse || (c(this.wrapper, "mousedown", this), c(d, "mousemove", this),
                        c(d, "mousecancel", this), c(d, "mouseup", this)), f.hasPointer && !this.options.disablePointer && (c(this.wrapper, f.prefixPointerEvent("pointerdown"), this),
                    c(d, f.prefixPointerEvent("pointermove"), this), c(d, f.prefixPointerEvent("pointercancel"), this),
                    c(d, f.prefixPointerEvent("pointerup"), this)), f.hasTouch && !this.options.disableTouch && (c(this.wrapper, "touchstart", this),
                    c(d, "touchmove", this), c(d, "touchcancel", this), c(d, "touchend", this)), c(this.scroller, "transitionend", this),
                    c(this.scroller, "webkitTransitionEnd", this), c(this.scroller, "oTransitionEnd", this),
                    c(this.scroller, "MSTransitionEnd", this);
            },
            getComputedPosition:function() {
                var c, d, b = a.getComputedStyle(this.scroller, null);
                return this.options.useTransform ? (b = b[f.style.transform].split(")")[0].split(", "),
                    c = +(b[12] || b[4]), d = +(b[13] || b[5])) :(c = +b.left.replace(/[^-\d.]/g, ""),
                    d = +b.top.replace(/[^-\d.]/g, "")), {
                    x:c,
                    y:d
                };
            },
            _initIndicators:function() {
                function g(a) {
                    for (var b = e.indicators.length; b--; ) a.call(e.indicators[b]);
                }
                var d, f, a = this.options.interactiveScrollbars, b = "string" != typeof this.options.scrollbars, c = [], e = this;
                for (this.indicators = [], this.options.scrollbars && (this.options.scrollY && (d = {
                    el:h("v", a, this.options.scrollbars),
                    interactive:a,
                    defaultScrollbars:!0,
                    customStyle:b,
                    resize:this.options.resizeScrollbars,
                    shrink:this.options.shrinkScrollbars,
                    fade:this.options.fadeScrollbars,
                    listenX:!1
                }, this.wrapper.appendChild(d.el), c.push(d)), this.options.scrollX && (d = {
                    el:h("h", a, this.options.scrollbars),
                    interactive:a,
                    defaultScrollbars:!0,
                    customStyle:b,
                    resize:this.options.resizeScrollbars,
                    shrink:this.options.shrinkScrollbars,
                    fade:this.options.fadeScrollbars,
                    listenY:!1
                }, this.wrapper.appendChild(d.el), c.push(d))), this.options.indicators && (c = c.concat(this.options.indicators)),
                         f = c.length; f--; ) this.indicators.push(new i(this, c[f]));
                this.options.fadeScrollbars && (this.on("scrollEnd", function() {
                    g(function() {
                        this.fade();
                    });
                }), this.on("scrollCancel", function() {
                    g(function() {
                        this.fade();
                    });
                }), this.on("scrollStart", function() {
                    g(function() {
                        this.fade(1);
                    });
                }), this.on("beforeScrollStart", function() {
                    g(function() {
                        this.fade(1, !0);
                    });
                })), this.on("refresh", function() {
                    g(function() {
                        this.refresh();
                    });
                }), this.on("destroy", function() {
                    g(function() {
                        this.destroy();
                    }), delete this.indicators;
                });
            },
            _initWheel:function() {
                f.addEvent(this.wrapper, "wheel", this), f.addEvent(this.wrapper, "mousewheel", this),
                    f.addEvent(this.wrapper, "DOMMouseScroll", this), this.on("destroy", function() {
                    f.removeEvent(this.wrapper, "wheel", this), f.removeEvent(this.wrapper, "mousewheel", this),
                        f.removeEvent(this.wrapper, "DOMMouseScroll", this);
                });
            },
            _wheel:function(a) {
                if (this.enabled) {
                    a.preventDefault(), a.stopPropagation();
                    var b, c, e, f, g = this;
                    if (void 0 === this.wheelTimeout && g._execEvent("scrollStart"), clearTimeout(this.wheelTimeout),
                        this.wheelTimeout = setTimeout(function() {
                            g._execEvent("scrollEnd"), g.wheelTimeout = void 0;
                        }, 400), "deltaX" in a) 1 === a.deltaMode ? (b = -a.deltaX * this.options.mouseWheelSpeed,
                        c = -a.deltaY * this.options.mouseWheelSpeed) :(b = -a.deltaX, c = -a.deltaY); else if ("wheelDeltaX" in a) b = a.wheelDeltaX / 120 * this.options.mouseWheelSpeed,
                        c = a.wheelDeltaY / 120 * this.options.mouseWheelSpeed; else if ("wheelDelta" in a) b = c = a.wheelDelta / 120 * this.options.mouseWheelSpeed; else {
                        if (!("detail" in a)) return;
                        b = c = -a.detail / 3 * this.options.mouseWheelSpeed;
                    }
                    if (b *= this.options.invertWheelDirection, c *= this.options.invertWheelDirection,
                        this.hasVerticalScroll || (b = c, c = 0), this.options.snap) return e = this.currentPage.pageX,
                        f = this.currentPage.pageY, b > 0 ? e-- :0 > b && e++, c > 0 ? f-- :0 > c && f++,
                        this.goToPage(e, f), void 0;
                    e = this.x + d.round(this.hasHorizontalScroll ? b :0), f = this.y + d.round(this.hasVerticalScroll ? c :0),
                        e > 0 ? e = 0 :e < this.maxScrollX && (e = this.maxScrollX), f > 0 ? f = 0 :f < this.maxScrollY && (f = this.maxScrollY),
                        this.scrollTo(e, f, 0);
                }
            },
            _initSnap:function() {
                this.currentPage = {}, "string" == typeof this.options.snap && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)),
                    this.on("refresh", function() {
                        var b, e, f, g, i, l, a = 0, c = 0, h = 0, j = this.options.snapStepX || this.wrapperWidth, k = this.options.snapStepY || this.wrapperHeight;
                        if (this.pages = [], this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight) {
                            if (this.options.snap === !0) for (f = d.round(j / 2), g = d.round(k / 2); h > -this.scrollerWidth; ) {
                                for (this.pages[a] = [], b = 0, i = 0; i > -this.scrollerHeight; ) this.pages[a][b] = {
                                    x:d.max(h, this.maxScrollX),
                                    y:d.max(i, this.maxScrollY),
                                    width:j,
                                    height:k,
                                    cx:h - f,
                                    cy:i - g
                                }, i -= k, b++;
                                h -= j, a++;
                            } else for (l = this.options.snap, b = l.length, e = -1; b > a; a++) (0 === a || l[a].offsetLeft <= l[a - 1].offsetLeft) && (c = 0,
                                e++), this.pages[c] || (this.pages[c] = []), h = d.max(-l[a].offsetLeft, this.maxScrollX),
                                i = d.max(-l[a].offsetTop, this.maxScrollY), f = h - d.round(l[a].offsetWidth / 2),
                                g = i - d.round(l[a].offsetHeight / 2), this.pages[c][e] = {
                                x:h,
                                y:i,
                                width:l[a].offsetWidth,
                                height:l[a].offsetHeight,
                                cx:f,
                                cy:g
                            }, h > this.maxScrollX && c++;
                            this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0), 0 === this.options.snapThreshold % 1 ? (this.snapThresholdX = this.options.snapThreshold,
                                this.snapThresholdY = this.options.snapThreshold) :(this.snapThresholdX = d.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold),
                                this.snapThresholdY = d.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold));
                        }
                    }), this.on("flick", function() {
                    var a = this.options.snapSpeed || d.max(d.max(d.min(d.abs(this.x - this.startX), 1e3), d.min(d.abs(this.y - this.startY), 1e3)), 300);
                    this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, a);
                });
            },
            _nearestSnap:function(a, b) {
                if (!this.pages.length) return {
                    x:0,
                    y:0,
                    pageX:0,
                    pageY:0
                };
                var c = 0, e = this.pages.length, f = 0;
                if (d.abs(a - this.absStartX) < this.snapThresholdX && d.abs(b - this.absStartY) < this.snapThresholdY) return this.currentPage;
                for (a > 0 ? a = 0 :a < this.maxScrollX && (a = this.maxScrollX), b > 0 ? b = 0 :b < this.maxScrollY && (b = this.maxScrollY); e > c; c++) if (a >= this.pages[c][0].cx) {
                    a = this.pages[c][0].x;
                    break;
                }
                for (e = this.pages[c].length; e > f; f++) if (b >= this.pages[0][f].cy) {
                    b = this.pages[0][f].y;
                    break;
                }
                return c == this.currentPage.pageX && (c += this.directionX, 0 > c ? c = 0 :c >= this.pages.length && (c = this.pages.length - 1),
                    a = this.pages[c][0].x), f == this.currentPage.pageY && (f += this.directionY, 0 > f ? f = 0 :f >= this.pages[0].length && (f = this.pages[0].length - 1),
                    b = this.pages[0][f].y), {
                    x:a,
                    y:b,
                    pageX:c,
                    pageY:f
                };
            },
            goToPage:function(a, b, c, e) {
                e = e || this.options.bounceEasing, a >= this.pages.length ? a = this.pages.length - 1 :0 > a && (a = 0),
                    b >= this.pages[a].length ? b = this.pages[a].length - 1 :0 > b && (b = 0);
                var f = this.pages[a][b].x, g = this.pages[a][b].y;
                c = void 0 === c ? this.options.snapSpeed || d.max(d.max(d.min(d.abs(f - this.x), 1e3), d.min(d.abs(g - this.y), 1e3)), 300) :c,
                    this.currentPage = {
                        x:f,
                        y:g,
                        pageX:a,
                        pageY:b
                    }, this.scrollTo(f, g, c, e);
            },
            next:function(a, b) {
                var c = this.currentPage.pageX, d = this.currentPage.pageY;
                c++, c >= this.pages.length && this.hasVerticalScroll && (c = 0, d++), this.goToPage(c, d, a, b);
            },
            prev:function(a, b) {
                var c = this.currentPage.pageX, d = this.currentPage.pageY;
                c--, 0 > c && this.hasVerticalScroll && (c = 0, d--), this.goToPage(c, d, a, b);
            },
            _initKeys:function() {
                var d, c = {
                    pageUp:33,
                    pageDown:34,
                    end:35,
                    home:36,
                    left:37,
                    up:38,
                    right:39,
                    down:40
                };
                if ("object" == typeof this.options.keyBindings) for (d in this.options.keyBindings) "string" == typeof this.options.keyBindings[d] && (this.options.keyBindings[d] = this.options.keyBindings[d].toUpperCase().charCodeAt(0)); else this.options.keyBindings = {};
                for (d in c) this.options.keyBindings[d] = this.options.keyBindings[d] || c[d];
                f.addEvent(a, "keydown", this), this.on("destroy", function() {
                    f.removeEvent(a, "keydown", this);
                });
            },
            _key:function(a) {
                if (this.enabled) {
                    var j, b = this.options.snap, c = b ? this.currentPage.pageX :this.x, e = b ? this.currentPage.pageY :this.y, g = f.getTime(), h = this.keyTime || 0, i = .25;
                    switch (this.options.useTransition && this.isInTransition && (j = this.getComputedPosition(),
                        this._translate(d.round(j.x), d.round(j.y)), this.isInTransition = !1), this.keyAcceleration = 200 > g - h ? d.min(this.keyAcceleration + i, 50) :0,
                        a.keyCode) {
                        case this.options.keyBindings.pageUp:
                            this.hasHorizontalScroll && !this.hasVerticalScroll ? c += b ? 1 :this.wrapperWidth :e += b ? 1 :this.wrapperHeight;
                            break;

                        case this.options.keyBindings.pageDown:
                            this.hasHorizontalScroll && !this.hasVerticalScroll ? c -= b ? 1 :this.wrapperWidth :e -= b ? 1 :this.wrapperHeight;
                            break;

                        case this.options.keyBindings.end:
                            c = b ? this.pages.length - 1 :this.maxScrollX, e = b ? this.pages[0].length - 1 :this.maxScrollY;
                            break;

                        case this.options.keyBindings.home:
                            c = 0, e = 0;
                            break;

                        case this.options.keyBindings.left:
                            c += b ? -1 :5 + this.keyAcceleration >> 0;
                            break;

                        case this.options.keyBindings.up:
                            e += b ? 1 :5 + this.keyAcceleration >> 0;
                            break;

                        case this.options.keyBindings.right:
                            c -= b ? -1 :5 + this.keyAcceleration >> 0;
                            break;

                        case this.options.keyBindings.down:
                            e -= b ? 1 :5 + this.keyAcceleration >> 0;
                            break;

                        default:
                            return;
                    }
                    if (b) return this.goToPage(c, e), void 0;
                    c > 0 ? (c = 0, this.keyAcceleration = 0) :c < this.maxScrollX && (c = this.maxScrollX,
                        this.keyAcceleration = 0), e > 0 ? (e = 0, this.keyAcceleration = 0) :e < this.maxScrollY && (e = this.maxScrollY,
                        this.keyAcceleration = 0), this.scrollTo(c, e, 0), this.keyTime = g;
                }
            },
            _animate:function(a, b, c, d) {
                function l() {
                    var n, o, p, m = f.getTime();
                    return m >= k ? (g.isAnimating = !1, g._translate(a, b), g.resetPosition(g.options.bounceTime) || g._execEvent("scrollEnd"),
                        void 0) :(m = (m - j) / c, p = d(m), n = (a - h) * p + h, o = (b - i) * p + i, g._translate(n, o),
                        g.isAnimating && e(l), void 0);
                }
                var g = this, h = this.x, i = this.y, j = f.getTime(), k = j + c;
                this.isAnimating = !0, l();
            },
            handleEvent:function(a) {
                switch (a.type) {
                    case "touchstart":
                    case "pointerdown":
                    case "MSPointerDown":
                    case "mousedown":
                        this._start(a);
                        break;

                    case "touchmove":
                    case "pointermove":
                    case "MSPointerMove":
                    case "mousemove":
                        this._move(a);
                        break;

                    case "touchend":
                    case "pointerup":
                    case "MSPointerUp":
                    case "mouseup":
                    case "touchcancel":
                    case "pointercancel":
                    case "MSPointerCancel":
                    case "mousecancel":
                        this._end(a);
                        break;

                    case "orientationchange":
                    case "resize":
                        this._resize();
                        break;

                    case "transitionend":
                    case "webkitTransitionEnd":
                    case "oTransitionEnd":
                    case "MSTransitionEnd":
                        this._transitionEnd(a);
                        break;

                    case "wheel":
                    case "DOMMouseScroll":
                    case "mousewheel":
                        this._wheel(a);
                        break;

                    case "keydown":
                        this._key(a);
                        break;

                    case "click":
                        a._constructed || (a.preventDefault(), a.stopPropagation());
                }
            }
        }, i.prototype = {
            handleEvent:function(a) {
                switch (a.type) {
                    case "touchstart":
                    case "pointerdown":
                    case "MSPointerDown":
                    case "mousedown":
                        this._start(a);
                        break;

                    case "touchmove":
                    case "pointermove":
                    case "MSPointerMove":
                    case "mousemove":
                        this._move(a);
                        break;

                    case "touchend":
                    case "pointerup":
                    case "MSPointerUp":
                    case "mouseup":
                    case "touchcancel":
                    case "pointercancel":
                    case "MSPointerCancel":
                    case "mousecancel":
                        this._end(a);
                }
            },
            destroy:function() {
                this.options.interactive && (f.removeEvent(this.indicator, "touchstart", this),
                    f.removeEvent(this.indicator, f.prefixPointerEvent("pointerdown"), this), f.removeEvent(this.indicator, "mousedown", this),
                    f.removeEvent(a, "touchmove", this), f.removeEvent(a, f.prefixPointerEvent("pointermove"), this),
                    f.removeEvent(a, "mousemove", this), f.removeEvent(a, "touchend", this), f.removeEvent(a, f.prefixPointerEvent("pointerup"), this),
                    f.removeEvent(a, "mouseup", this)), this.options.defaultScrollbars && this.wrapper.parentNode.removeChild(this.wrapper);
            },
            _start:function(b) {
                var c = b.touches ? b.touches[0] :b;
                b.preventDefault(), b.stopPropagation(), this.transitionTime(), this.initiated = !0,
                    this.moved = !1, this.lastPointX = c.pageX, this.lastPointY = c.pageY, this.startTime = f.getTime(),
                    this.options.disableTouch || f.addEvent(a, "touchmove", this), this.options.disablePointer || f.addEvent(a, f.prefixPointerEvent("pointermove"), this),
                    this.options.disableMouse || f.addEvent(a, "mousemove", this), this.scroller._execEvent("beforeScrollStart");
            },
            _move:function(a) {
                var c, d, e, g, b = a.touches ? a.touches[0] :a;
                f.getTime(), this.moved || this.scroller._execEvent("scrollStart"), this.moved = !0,
                    c = b.pageX - this.lastPointX, this.lastPointX = b.pageX, d = b.pageY - this.lastPointY,
                    this.lastPointY = b.pageY, e = this.x + c, g = this.y + d, this._pos(e, g), a.preventDefault(),
                    a.stopPropagation();
            },
            _end:function(b) {
                var c, e;
                this.initiated && (this.initiated = !1, b.preventDefault(), b.stopPropagation(),
                    f.removeEvent(a, "touchmove", this), f.removeEvent(a, f.prefixPointerEvent("pointermove"), this),
                    f.removeEvent(a, "mousemove", this), this.scroller.options.snap && (c = this.scroller._nearestSnap(this.scroller.x, this.scroller.y),
                    e = this.options.snapSpeed || d.max(d.max(d.min(d.abs(this.scroller.x - c.x), 1e3), d.min(d.abs(this.scroller.y - c.y), 1e3)), 300),
                    (this.scroller.x != c.x || this.scroller.y != c.y) && (this.scroller.directionX = 0,
                        this.scroller.directionY = 0, this.scroller.currentPage = c, this.scroller.scrollTo(c.x, c.y, e, this.scroller.options.bounceEasing))),
                    this.moved && this.scroller._execEvent("scrollEnd"));
            },
            transitionTime:function(a) {
                a = a || 0, this.indicatorStyle[f.style.transitionDuration] = a + "ms", !a && f.isBadAndroid && (this.indicatorStyle[f.style.transitionDuration] = "0.001s");
            },
            transitionTimingFunction:function(a) {
                this.indicatorStyle[f.style.transitionTimingFunction] = a;
            },
            refresh:function() {
                this.transitionTime(), this.indicatorStyle.display = this.options.listenX && !this.options.listenY ? this.scroller.hasHorizontalScroll ? "block" :"none" :this.options.listenY && !this.options.listenX ? this.scroller.hasVerticalScroll ? "block" :"none" :this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" :"none",
                    this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ? (f.addClass(this.wrapper, "iScrollBothScrollbars"),
                        f.removeClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "8px" :this.wrapper.style.bottom = "8px")) :(f.removeClass(this.wrapper, "iScrollBothScrollbars"),
                        f.addClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "2px" :this.wrapper.style.bottom = "2px")),
                    this.wrapper.offsetHeight, this.options.listenX && (this.wrapperWidth = this.wrapper.clientWidth,
                    this.options.resize ? (this.indicatorWidth = d.max(d.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8),
                        this.indicatorStyle.width = this.indicatorWidth + "px") :this.indicatorWidth = this.indicator.clientWidth,
                    this.maxPosX = this.wrapperWidth - this.indicatorWidth, "clip" == this.options.shrink ? (this.minBoundaryX = -this.indicatorWidth + 8,
                    this.maxBoundaryX = this.wrapperWidth - 8) :(this.minBoundaryX = 0, this.maxBoundaryX = this.maxPosX),
                    this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX),
                    this.options.listenY && (this.wrapperHeight = this.wrapper.clientHeight, this.options.resize ? (this.indicatorHeight = d.max(d.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8),
                        this.indicatorStyle.height = this.indicatorHeight + "px") :this.indicatorHeight = this.indicator.clientHeight,
                        this.maxPosY = this.wrapperHeight - this.indicatorHeight, "clip" == this.options.shrink ? (this.minBoundaryY = -this.indicatorHeight + 8,
                        this.maxBoundaryY = this.wrapperHeight - 8) :(this.minBoundaryY = 0, this.maxBoundaryY = this.maxPosY),
                        this.maxPosY = this.wrapperHeight - this.indicatorHeight, this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY),
                    this.updatePosition();
            },
            updatePosition:function() {
                var a = this.options.listenX && d.round(this.sizeRatioX * this.scroller.x) || 0, b = this.options.listenY && d.round(this.sizeRatioY * this.scroller.y) || 0;
                this.options.ignoreBoundaries || (a < this.minBoundaryX ? ("scale" == this.options.shrink && (this.width = d.max(this.indicatorWidth + a, 8),
                    this.indicatorStyle.width = this.width + "px"), a = this.minBoundaryX) :a > this.maxBoundaryX ? "scale" == this.options.shrink ? (this.width = d.max(this.indicatorWidth - (a - this.maxPosX), 8),
                    this.indicatorStyle.width = this.width + "px", a = this.maxPosX + this.indicatorWidth - this.width) :a = this.maxBoundaryX :"scale" == this.options.shrink && this.width != this.indicatorWidth && (this.width = this.indicatorWidth,
                    this.indicatorStyle.width = this.width + "px"), b < this.minBoundaryY ? ("scale" == this.options.shrink && (this.height = d.max(this.indicatorHeight + 3 * b, 8),
                    this.indicatorStyle.height = this.height + "px"), b = this.minBoundaryY) :b > this.maxBoundaryY ? "scale" == this.options.shrink ? (this.height = d.max(this.indicatorHeight - 3 * (b - this.maxPosY), 8),
                    this.indicatorStyle.height = this.height + "px", b = this.maxPosY + this.indicatorHeight - this.height) :b = this.maxBoundaryY :"scale" == this.options.shrink && this.height != this.indicatorHeight && (this.height = this.indicatorHeight,
                    this.indicatorStyle.height = this.height + "px")), this.x = a, this.y = b, this.scroller.options.useTransform ? this.indicatorStyle[f.style.transform] = "translate(" + a + "px," + b + "px)" + this.scroller.translateZ :(this.indicatorStyle.left = a + "px",
                    this.indicatorStyle.top = b + "px");
            },
            _pos:function(a, b) {
                0 > a ? a = 0 :a > this.maxPosX && (a = this.maxPosX), 0 > b ? b = 0 :b > this.maxPosY && (b = this.maxPosY),
                    a = this.options.listenX ? d.round(a / this.sizeRatioX) :this.scroller.x, b = this.options.listenY ? d.round(b / this.sizeRatioY) :this.scroller.y,
                    this.scroller.scrollTo(a, b);
            },
            fade:function(a, b) {
                if (!b || this.visible) {
                    clearTimeout(this.fadeTimeout), this.fadeTimeout = null;
                    var c = a ? 250 :500, d = a ? 0 :300;
                    a = a ? "1" :"0", this.wrapperStyle[f.style.transitionDuration] = c + "ms", this.fadeTimeout = setTimeout(function(a) {
                        this.wrapperStyle.opacity = a, this.visible = +a;
                    }.bind(this, a), d);
                }
            }
        }, g.utils = f, "undefined" != typeof c && c.exports ? c.exports = g :a.IScroll = g;
    }(window, document, Math);
});