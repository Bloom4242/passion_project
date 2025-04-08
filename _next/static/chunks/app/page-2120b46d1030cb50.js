! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "88f9f61d-dfc0-4569-831f-2a515a7cb59a", e._sentryDebugIdIdentifier = "sentry-dbid-88f9f61d-dfc0-4569-831f-2a515a7cb59a")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [931], {
        3801: function(e, t, s) {
            Promise.resolve().then(s.bind(s, 4816)), Promise.resolve().then(s.bind(s, 2262))
        },
        4816: function(e, t, s) {
            "use strict";
            s.d(t, {
                default: function() {
                    return O
                }
            });
            var a = s(3096),
                n = s(8827),
                l = s(7754),
                i = s(4593),
                r = s(9814),
                c = s(4396),
                o = e => {
                    let {
                        disabled: t,
                        options: s,
                        value: l,
                        onChange: i,
                        className: r,
                        ariaLabel: c = "select time"
                    } = e, [o, u] = (0, n.useState)(l), d = e => {
                        u(e), i(e)
                    };
                    return (0, a.jsx)("select", {
                        className: "btn !rounded-full font-semibold px-5 py-3 text-2xl min-h-12 m-0 ".concat(r),
                        value: o,
                        "aria-label": c,
                        name: c,
                        style: {
                            appearance: "none"
                        },
                        disabled: t,
                        onChange: e => d(parseInt(e.target.value, 10)),
                        translate: "no",
                        children: s.map(e => (0, a.jsx)("option", {
                            value: e.value,
                            children: e.label
                        }, e.value))
                    })
                };

            function u(e) {
                let {
                    initialTime: t,
                    directionTimeForward: s
                } = e, a = [], n = s ? 90 : -90, l = (t + n + 15 * (s ? 1 : -1) + 1440) % 1440;
                for (let e = 1; e <= 6; e++) a.push({
                    time: l,
                    sleepCycle: e
                }), l = (l + n + 1440) % 1440;
                return a
            }

            function d(e) {
                let {
                    hours: t,
                    minutes: s
                } = m(e);
                return "".concat(t.toString().padStart(2, "0"), ":").concat(s.toString().padStart(2, "0"))
            }

            function m(e) {
                return {
                    hours: Math.floor(e / 60),
                    minutes: e % 60
                }
            }
            var x = e => {
                let {
                    onSelect: t,
                    time: s,
                    disabled: l
                } = e, [i, c] = (0, n.useState)(m(s));
                (0, n.useLayoutEffect)(() => {
                    c(m(s))
                }, [s]);
                let u = (0, n.useCallback)(e => {
                        c(m(e)), t(e)
                    }, [t]),
                    [d, x] = (0, n.useState)(!1);
                (0, n.useLayoutEffect)(() => {
                    x(!(new Date().toLocaleString(window.navigator.language, {
                        hour: "numeric"
                    }).includes("AM") || new Date().toLocaleString(window.navigator.language, {
                        hour: "numeric"
                    }).includes("PM")))
                }, []);
                let f = (0, n.useMemo)(() => d ? i.hours : i.hours % 12, [d, i]),
                    [p, h] = (0, n.useState)(i.hours >= 12 ? 1 : 0);
                (0, n.useEffect)(() => {
                    h(i.hours >= 12 ? 1 : 0)
                }, [i]);
                let b = (0, n.useCallback)(e => {
                        u(60 * (d ? e : e + (0 === p ? 0 : 12)) + i.minutes)
                    }, [d, i, p, u]),
                    g = (0, n.useCallback)(e => {
                        u(60 * i.hours + e)
                    }, [i, u]),
                    j = (0, n.useCallback)(e => {
                        h(e), u(60 * (d ? i.hours : i.hours + (0 === e ? -12 : 12)) + i.minutes)
                    }, [d, i, u]),
                    w = (0, n.useMemo)(() => Array.from({
                        length: d ? 24 : 12
                    }, (e, t) => t).map(e => ({
                        value: d ? e : (e + 1) % 12,
                        label: d ? e.toString().padStart(2, "0") : (e + 1).toString()
                    })), [d]),
                    y = (0, n.useMemo)(() => {
                        let e = Array.from({
                            length: 60
                        }, (e, t) => t).filter(e => e % 5 == 0).map(e => ({
                            value: e,
                            label: e.toString().padStart(2, "0")
                        }));
                        return i.minutes % 5 != 0 && e.push({
                            value: i.minutes,
                            label: i.minutes.toString().padStart(2, "0")
                        }), e.sort((e, t) => e.value - t.value), e
                    }, [i]);
                return (0, a.jsxs)("div", {
                    className: "flex flex-wrap gap-2 items-center justify-center",
                    suppressHydrationWarning: !0,
                    children: [(0, a.jsxs)("div", {
                        className: "flex flex-row items-center justify-center btn !p-0 !rounded-full ".concat(l ? "opacity-75" : ""),
                        children: [(0, a.jsx)(o, {
                            options: w,
                            disabled: l,
                            value: f,
                            className: "!pr-0 !rounded-tr-none !rounded-br-none !bg-transparent !ring-transparent !pl-5 text-3xl",
                            onChange: b,
                            ariaLabel: "select hours"
                        }), (0, a.jsx)("div", {
                            className: "self-center text-xl",
                            translate: "no",
                            children: (0, a.jsx)(r.Z, {
                                children: ":"
                            })
                        }), (0, a.jsx)(o, {
                            disabled: l,
                            options: y,
                            value: i.minutes,
                            onChange: g,
                            className: "!pl-1 !rounded-tl-none !rounded-bl-none !bg-transparent !ring-transparent !pr-5 text-3xl",
                            ariaLabel: "select minutes"
                        })]
                    }), !d && (0, a.jsx)(o, {
                        disabled: l,
                        options: [{
                            value: 0,
                            label: "AM"
                        }, {
                            value: 1,
                            label: "PM"
                        }],
                        value: p,
                        onChange: j,
                        ariaLabel: "select AM or PM",
                        className: "text-3xl"
                    })]
                })
            };

            function f(e) {
                let {
                    time: t,
                    onSelect: s,
                    disabled: l
                } = e, [i, r] = (0, n.useState)(d(t));
                return (0, n.useEffect)(() => {
                    r(d(t))
                }, [t]), (0, a.jsx)("div", {
                    className: "btn !p-0 !text-current",
                    children: (0, a.jsx)("input", {
                        suppressHydrationWarning: !0,
                        pattern: "[0-9]{2}:[0-9]{2}",
                        type: "time",
                        value: i,
                        required: !0,
                        "aria-label": "Select time",
                        "aria-required": "true",
                        disabled: l,
                        onChange: e => {
                            var t;
                            (t = e.target.value) !== i && t && (r(t), s(function(e) {
                                let [t, s] = e.split(":").map(e => parseInt(e, 10));
                                return 60 * t + s
                            }(t)))
                        },
                        className: "h-12 px-5 m-0 text-3xl font-semibold text-center btn !text-current !ring-0 !rounded-full",
                        translate: "no"
                    })
                })
            }

            function p(e) {
                let {
                    time: t,
                    onSelect: s,
                    disabled: l
                } = e, [i, r] = (0, n.useState)(!1);
                return (0, n.useLayoutEffect)(() => {
                    r(c.gn || c.Q5 && window.matchMedia("(pointer: coarse)").matches)
                }, []), (0, a.jsx)("div", {
                    suppressHydrationWarning: !0,
                    children: i ? (0, a.jsx)(f, {
                        disabled: l,
                        time: t,
                        onSelect: s
                    }) : (0, a.jsx)(x, {
                        disabled: l,
                        time: t,
                        onSelect: s
                    })
                })
            }
            var h = s(3433);

            function b(e, t) {
                try {
                    (0, h.sendGAEvent)("event", e, {
                        time_hours: m(t).hours,
                        time_user_hours: new Date().getHours()
                    })
                } catch (e) {}
            }

            function g(e) {
                let {
                    sleepTime: t,
                    setSleepTime: s
                } = e, [c, o] = (0, n.useState)(t), [u, d] = (0, n.useState)(!0), m = (0, n.useCallback)(() => {
                    var e;
                    let t = 60 * (e = new Date).getHours() + e.getMinutes();
                    s(t), d(!1), b("sleep_now_button", t)
                }, [s]), x = (0, n.useCallback)(() => {
                    s(c), d(!1)
                }, [s, d, c]);
                return (0, n.useEffect)(() => {
                    d(!1)
                }, []), (0, a.jsxs)("div", {
                    className: "flex flex-col gap-4",
                    children: [(0, a.jsx)("h2", {
                        className: "text-2xl",
                        children: (0, a.jsx)(r.Z, {
                            children: "I will go to bed at…"
                        })
                    }), (0, a.jsxs)("form", {
                        id: "sleeptime-form",
                        onSubmit: e => {
                            e.preventDefault(), u || (d(!0), (0, n.startTransition)(() => {
                                x()
                            }))
                        },
                        className: "flex flex-row flex-wrap justify-center w-full gap-3",
                        children: [(0, a.jsx)(p, {
                            disabled: u,
                            time: c,
                            onSelect: o
                        }), (0, a.jsx)("button", {
                            type: "submit",
                            disabled: u,
                            "aria-label": "Calculate best wake up times",
                            className: "btn w-13 h-13 btn-compact !rounded-full",
                            children: u ? (0, a.jsx)(l.Z, {
                                className: "animate-spin",
                                size: 28
                            }) : (0, a.jsx)(i.Z, {
                                size: 28
                            })
                        })]
                    }), (0, a.jsxs)("button", {
                        disabled: u,
                        className: "self-center text-xl btn",
                        type: "button",
                        "aria-label": "Calculate best wake up times",
                        onClick: () => {
                            u || (d(!0), m())
                        },
                        children: [(0, a.jsx)(r.Z, {
                            children: "Sleep Now "
                        }), u ? (0, a.jsx)(l.Z, {
                            className: "animate-spin"
                        }) : "\uD83D\uDE34"]
                    })]
                })
            }
            var j = s(9418);

            function w(e) {
                let {
                    wakeTime: t,
                    setWakeTime: s
                } = e, [c, o] = (0, n.useState)(t), [u, d] = (0, n.useState)(!0), m = (0, n.useCallback)(() => {
                    s(c), d(!1)
                }, [s, d, c]);
                return (0, n.useEffect)(() => {
                    d(!1)
                }, []), (0, a.jsxs)("div", {
                    className: "flex flex-col gap-4 text-orange-300",
                    children: [(0, a.jsx)("h2", {
                        className: "text-2xl text-orange-300",
                        children: (0, a.jsx)(r.Z, {
                            children: "I will wake up at…"
                        })
                    }), (0, a.jsxs)("form", {
                        onSubmit: e => {
                            e.preventDefault(), u || (d(!0), (0, n.startTransition)(() => {
                                m()
                            }))
                        },
                        id: "waketime-form",
                        className: "flex flex-row flex-wrap justify-center w-full gap-3",
                        children: [(0, a.jsx)(p, {
                            disabled: u,
                            time: c,
                            onSelect: o
                        }), (0, a.jsx)("button", {
                            disabled: void 0 === c || u,
                            type: "submit",
                            "aria-label": "Calculate best sleep times",
                            className: "btn w-13 h-13 btn-compact !rounded-full",
                            children: u ? (0, a.jsx)(l.Z, {
                                className: "animate-spin",
                                size: 28
                            }) : (0, a.jsx)(i.Z, {
                                size: 28
                            })
                        })]
                    })]
                })
            }

            function y(e) {
                let {
                    wakeTime: t,
                    sleepTime: s,
                    onSubmit: n
                } = e;
                return (0, a.jsxs)("section", {
                    className: "flex flex-col items-center justify-center text-center gap-7",
                    children: [(0, a.jsx)("noscript", {
                        children: (0, a.jsx)("div", {
                            className: "text-teal-200 flex flex-col items-center justify-center gap-4 px-4 py-2 rounded-full bg-teal-900/50 sm:flex-row sm:gap-6",
                            children: (0, a.jsxs)("p", {
                                className: "text-base font-bold",
                                "aria-hidden": !0,
                                children: [(0, a.jsx)(r.Z, {
                                    children: "Please turn on JavaScript to use"
                                }), " ", (0, a.jsx)(j.Z, {})]
                            })
                        })
                    }), (0, a.jsx)(w, {
                        wakeTime: t,
                        setWakeTime: e => {
                            n("wake", e)
                        }
                    }), (0, a.jsx)(g, {
                        sleepTime: s,
                        setSleepTime: e => {
                            n("sleep", e)
                        }
                    })]
                })
            }
            let v = ["animate-shooting-1", "animate-shooting-2", "animate-shooting-3", "animate-shooting-4", "animate-shooting-5", "animate-shooting-6"];

            function N(e) {
                if (e) return {
                    position: {
                        top: 150,
                        left: "50vw"
                    },
                    className: "animate-shooting-1"
                };
                let t = {
                    top: Math.floor(400 * Math.random()),
                    left: "".concat(33 + Math.floor(33 * Math.random()), "vw")
                };
                return {
                    position: t,
                    className: v[t.top < 200 ? Math.floor(3 * Math.random()) : 3 + Math.floor(3 * Math.random())]
                }
            }

            function k(e) {
                let {
                    isLoadingResults: t
                } = e, [s, l] = (0, n.useState)(() => N(!0)), [i, r] = (0, n.useState)(!1);
                return (0, n.useEffect)(() => {
                    t && r(!0)
                }, [t]), (0, a.jsx)("div", {
                    className: "absolute top-0 blur-[0.05rem] z-0 w-full max-h-[48rem] h-full overflow-hidden flex justify-center",
                    children: i && (0, a.jsx)("span", {
                        onAnimationEnd: () => {
                            r(!1), l(N())
                        },
                        className: " ".concat(s.className, " ").concat(i ? "opacity-100" : "opacity-0", " star-trail absolute w-1 h-1 bg-orange-200 rounded-3xl"),
                        style: s.position
                    })
                })
            }

            function S(e) {
                let {
                    children: t,
                    className: s
                } = e;
                return (0, a.jsx)("div", {
                    suppressHydrationWarning: !0,
                    className: "flex flex-col gap-4 justify-center items-center mb-6 ".concat(s),
                    children: t
                })
            }
            var C = s(7656),
                T = s(2266);

            function Z(e) {
                let {
                    reset: t
                } = e;
                return (0, a.jsxs)("button", {
                    onClick: t,
                    className: "w-fit btn btn-compact !pr-4",
                    "aria-label": "Back to calculator",
                    children: [(0, a.jsx)(T.Z, {
                        width: 20,
                        height: 20
                    }), (0, a.jsx)(r.Z, {
                        children: "Back"
                    })]
                })
            }
            var M = s(6858),
                E = s(1237),
                L = s(8358);

            function R(e) {
                return ("0" + e).slice(-2)
            }

            function z(e) {
                let {
                    result: t
                } = e, {
                    hours: s,
                    minutes: n
                } = m(t.time), l = new Date(Date.UTC(1999, 0, 0, s, n, 0, 0)).toLocaleString(window.navigator.language, {
                    hour: "numeric",
                    minute: "numeric",
                    timeZone: "UTC"
                }), i = t.sleepCycle > 4 ? "text-indigo-100" : 4 === t.sleepCycle || 3 === t.sleepCycle ? "text-indigo-200/70" : "text-indigo-200/30";
                return (0, a.jsxs)("li", {
                    className: "".concat(i, " gap-2 sm:gap-0 flex flex-col flex-grow flex-wrap sm:flex-col items-center sm:items-center self-stretch justify-center bg-black/50 text-xl p-3 px-2 md:px-5"),
                    children: [(0, a.jsx)("div", {
                        className: "flex-shrink order-first sm:mb-2 ",
                        children: t.sleepCycle > 4 ? (0, a.jsx)(M.Z, {
                            size: 18,
                            className: "text-green-500",
                            "aria-label": "Happy face indicating a good sleep cycle"
                        }) : t.sleepCycle < 3 ? (0, a.jsx)(E.Z, {
                            size: 18,
                            className: "text-red-500/50",
                            "aria-label": "Sad face indicating a bad sleep cycle"
                        }) : (0, a.jsx)(L.Z, {
                            size: 18,
                            className: "text-amber-400/50",
                            "aria-label": "Neutral face indicating a neutral sleep cycle"
                        })
                    }), (0, a.jsxs)("div", {
                        className: "flex-1 flex-grow text-center",
                        children: [(0, a.jsx)("time", {
                            suppressHydrationWarning: !0,
                            dateTime: "".concat(R(s), ":").concat(R(n)),
                            className: "flex-1 flex-grow text-2xl font-bold text-center sm:text-3xl",
                            translate: "no",
                            "aria-label": "time",
                            children: l
                        }), (0, a.jsx)("div", {
                            className: "flex-shrink text-base font-bold",
                            children: (0, a.jsxs)("span", {
                                className: "",
                                children: [t.sleepCycle, " cycle", t.sleepCycle > 1 ? "s" : ""]
                            })
                        }), (0, a.jsx)("div", {
                            className: "flex-shrink text-base font-normal",
                            children: (0, a.jsxs)("span", {
                                className: "",
                                children: [1.5 * t.sleepCycle, " hr"]
                            })
                        })]
                    })]
                })
            }

            function D(e) {
                let {
                    times: t
                } = e;
                return (0, a.jsx)("ul", {
                    className: "grid items-center max-w-xl grid-cols-2 gap-1 mx-auto overflow-hidden justify-stretch gri sm:grid-cols-3 sm:flex-initial rounded-3xl",
                    children: t.map((e, t) => (0, a.jsx)(z, {
                        result: e
                    }, t))
                })
            }
            var H = s(5773);

            function _() {
                return (0, a.jsxs)("div", {
                    className: "max-w-3xl px-4 py-3 mx-auto my-4 overflow-hidden rounded-3xl sm:items-center bg-white/5",
                    children: [(0, a.jsx)("h2", {
                        className: "mb-2 tracking-wider text-center uppercase bg-transparent text-md",
                        children: (0, a.jsx)(r.Z, {
                            children: "How it works"
                        })
                    }), (0, a.jsxs)("ul", {
                        className: "flex flex-col gap-2 px-2 pb-2 sm:pb-0",
                        children: [
                            [{
                                title: "Tip 2",
                                description: "It takes the average person fifteen minutes to fall asleep."
                            }, {
                                title: "Tip 1",
                                description: "A good night's sleep consists of 5 to 6 complete sleep cycles. Each cycle lasts about 90 minutes."
                            }, {
                                title: "Tip 3",
                                description: "Waking up in the middle of a sleep cycle leaves you feeling tired and groggy, but waking up in between cycles lets you wake up feeling refreshed and alert!"
                            }].map(e => (0, a.jsx)("li", {
                                style: {
                                    listStyleType: "initial"
                                },
                                className: "flex-1 ml-2 text-left",
                                children: (0, a.jsx)("p", {
                                    children: e.description
                                })
                            }, e.title)), (0, a.jsxs)("li", {
                                style: {
                                    listStyleType: "initial"
                                },
                                className: "flex-1 ml-2 text-left"
                            })
                        ]
                    })]
                })
            }

            function W(e) {
                let t = (0, n.useRef)(null),
                    [s, a] = (0, n.useState)(!1);
                return {
                    handleUpdate: (0, n.useCallback)(s => {
                        a(!0), t.current && window.clearTimeout(t.current), t.current = window.setTimeout(() => {
                            a(!1), e(s)
                        }, 500)
                    }, [e, a]),
                    isLoading: s
                }
            }

            function I(e) {
                let {
                    time: t,
                    setTime: s,
                    reset: l
                } = e, {
                    handleUpdate: i,
                    isLoading: c
                } = W(s), o = (0, n.useMemo)(() => u({
                    initialTime: t,
                    directionTimeForward: !0
                }), [t]);
                return (0, a.jsxs)("section", {
                    suppressHydrationWarning: !0,
                    className: "flex flex-col items-stretch text-center",
                    children: [(0, a.jsxs)(S, {
                        children: [(0, a.jsx)(C.Z, {
                            size: 40,
                            className: "origin-bottom ".concat(c ? "animate-moon-exit" : "animate-moon-enter")
                        }), (0, a.jsx)("div", {
                            className: "flex flex-row gap-3",
                            children: (0, a.jsx)(p, {
                                time: t,
                                onSelect: i
                            })
                        })]
                    }), (0, a.jsx)("h2", {
                        className: "mb-4 text-2xl",
                        children: (0, a.jsx)(r.Z, {
                            children: "You should wake up at:"
                        })
                    }), (0, a.jsx)("div", {
                        suppressHydrationWarning: !0,
                        className: "".concat(c ? "opacity-25" : "opacity-100", " transition-opacity duration-500"),
                        children: (0, a.jsx)(D, {
                            times: o
                        })
                    }), (0, a.jsx)(_, {}), (0, a.jsx)("div", {
                        className: "shadow-lg place-self-center",
                        children: (0, a.jsx)(Z, {
                            reset: l
                        })
                    })]
                })
            }
            var P = s(3887);

            function A(e) {
                let {
                    time: t,
                    setTime: s,
                    reset: l
                } = e, {
                    handleUpdate: i,
                    isLoading: c
                } = W(s), o = (0, n.useMemo)(() => u({
                    initialTime: t,
                    directionTimeForward: !1
                }).reverse(), [t]);
                return (0, a.jsxs)("section", {
                    suppressHydrationWarning: !0,
                    className: "flex flex-col items-stretch text-center",
                    children: [(0, a.jsxs)(S, {
                        className: "text-orange-300",
                        children: [(0, a.jsx)(P.Z, {
                            size: 40,
                            className: " ".concat(c ? " transition-all duration-500 ease-out rotate-45" : "")
                        }), (0, a.jsx)("div", {
                            className: "flex flex-row gap-3",
                            children: (0, a.jsx)(p, {
                                time: t,
                                onSelect: i
                            })
                        })]
                    }), (0, a.jsx)("h2", {
                        className: "mb-4 text-2xl",
                        children: (0, a.jsx)(r.Z, {
                            children: "You should go to bed at:"
                        })
                    }), (0, a.jsx)("div", {
                        suppressHydrationWarning: !0,
                        className: "".concat(c ? "opacity-25" : "opacity-100", " transition-opacity duration-500"),
                        children: (0, a.jsx)(D, {
                            times: o
                        })
                    }), (0, a.jsx)(_, {}), (0, a.jsx)("div", {
                        className: "shadow-lg place-self-center",
                        children: (0, a.jsx)(Z, {
                            reset: l
                        })
                    })]
                })
            }
            var U = s(4476),
                F = s(274);
            let q = {
                    duration: .4
                },
                B = e => {
                    if (!e) return null;
                    let t = parseInt(e, 10) % 1440;
                    return Number.isNaN(t) ? null : t
                },
                G = (e, t, s) => {
                    s(s => ({
                        ...s,
                        ["".concat(e, "Time")]: t,
                        showResults: e
                    })), b(e, t)
                };

            function O() {
                let {
                    hashParams: e,
                    setURLHashParams: t
                } = function() {
                    let [e, t] = (0, n.useState)(() => new URLSearchParams(window.location.hash.slice(1)));
                    return (0, n.useLayoutEffect)(() => {
                        {
                            let e = e => {
                                t(new URLSearchParams(e.newURL.split("#")[1]))
                            };
                            return window.addEventListener("hashchange", e), () => {
                                window.removeEventListener("hashchange", e)
                            }
                        }
                    }, []), {
                        hashParams: e,
                        setURLHashParams: (0, n.useCallback)(e => {
                            0 === e.size ? window.location.hash = "" : window.location.hash = e.toString()
                        }, [])
                    }
                }(), [s, l] = (0, n.useState)(() => ({
                    sleepTime: 1380,
                    wakeTime: 420,
                    showResults: null
                })), i = (0, n.useRef)(!0), r = (0, n.useRef)(!0);
                (0, n.useLayoutEffect)(() => {
                    if (i.current) {
                        i.current = !1;
                        return
                    }
                    let t = B(e.get("sleep")),
                        s = B(e.get("wake"));
                    null != t ? G("sleep", t, l) : null != s ? G("wake", s, l) : l(e => ({
                        ...e,
                        showResults: null
                    }))
                }, [e]);
                let c = (0, n.useCallback)((s, a) => {
                        i.current = !0, "sleep" === s || "wake" === s ? e.set(s, (null == a ? void 0 : a.toString()) || "") : (e.delete("sleep"), e.delete("wake")), t(e)
                    }, [e, t]),
                    o = (0, n.useCallback)((e, t) => {
                        G(e, t, l), (0, n.startTransition)(() => {
                            c(e, t)
                        })
                    }, []),
                    u = (0, n.useCallback)(() => {
                        l(e => ({
                            ...e,
                            showResults: null
                        })), c(null)
                    }, []),
                    d = (0, n.useMemo)(() => "sleep" === s.showResults || "wake" === s.showResults ? "right" : "left", [s.showResults]);
                return (0, n.useEffect)(() => {
                    r.current = !1
                }, []), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(k, {
                        isLoadingResults: s.showResults
                    }), (0, a.jsx)("div", {
                        className: "relative z-10 flex flex-row items-center justify-center max-w-lg mt-4 sm:mb-10 sm:mt-0",
                        children: (0, a.jsx)(U.E.div, {
                            suppressHydrationWarning: !0,
                            className: "mb-2",
                            children: (0, a.jsx)(F.M, {
                                mode: "wait",
                                children: (0, a.jsx)(U.E.div, {
                                    initial: r.current ? {
                                        opacity: 1,
                                        x: 0
                                    } : {
                                        opacity: 0,
                                        x: "left" === d ? -36 : 36
                                    },
                                    animate: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    exit: {
                                        opacity: 0,
                                        x: "left" === d ? -36 : 36
                                    },
                                    transition: {
                                        x: q,
                                        opacity: {
                                            duration: .4
                                        }
                                    },
                                    children: "sleep" === s.showResults ? (0, a.jsx)(I, {
                                        time: s.sleepTime,
                                        setTime: e => o("sleep", e),
                                        reset: u
                                    }) : "wake" === s.showResults ? (0, a.jsx)(A, {
                                        time: s.wakeTime,
                                        setTime: e => o("wake", e),
                                        reset: u
                                    }) : (0, a.jsx)(y, {
                                        sleepTime: s.sleepTime,
                                        wakeTime: s.wakeTime,
                                        onSubmit: o
                                    })
                                }, s.showResults)
                            })
                        })
                    })]
                })
            }
        },
        9814: function(e, t, s) {
            "use strict";
            s.d(t, {
                Z: function() {
                    return l
                }
            });
            var a = s(3096),
                n = s(8827);

            function l(e) {
                let {
                    children: t
                } = e;
                if (n.Children.count(t) > 1) throw Error("Text component should have only one child");
                return (0, a.jsx)("span", {
                    children: t
                })
            }
        },
        2262: function(e, t, s) {
            "use strict";
            s.d(t, {
                default: function() {
                    return d
                }
            });
            var a = s(3096),
                n = s(7754),
                l = s(7963),
                i = s(8827),
                r = s(9889),
                c = s(274),
                o = s(4476);
            let u = (0, r.default)(() => Promise.all([s.e(829), s.e(443)]).then(s.bind(s, 4443)), {
                loadableGenerated: {
                    webpack: () => [4443]
                },
                ssr: !1,
                loading: () => (0, a.jsx)(n.Z, {
                    className: "animate-spin"
                })
            });

            function d(e) {
                let {
                    className: t
                } = e, [s, r] = (0, i.useState)(!1);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("button", {
                        onClick: () => {
                            r(!0)
                        },
                        className: "z-10 text-sm  ".concat(t),
                        children: [(0, a.jsx)(l.Z, {
                            size: 18
                        }), ""]
                    }), (0, a.jsx)(c.M, {
                        mode: "wait",
                        children: s && (0, a.jsx)(o.E.div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            className: "fixed inset-0 z-50 flex items-center justify-center h-screen bg-slate-950/70",
                            "aria-hidden": "true",
                            children: (0, a.jsx)(i.Suspense, {
                                fallback: (0, a.jsx)(n.Z, {
                                    className: "animate-spin"
                                }),
                                children: (0, a.jsx)(u, {
                                    closeModal: () => r(!1)
                                })
                            })
                        }, s ? "feedback-modal-open" : "feedback-modal-closed")
                    })]
                })
            }
        },
        9418: function(e, t, s) {
            "use strict";
            s.d(t, {
                Z: function() {
                    return n
                }
            });
            var a = s(3096);

            function n() {
                return (0, a.jsx)("span", {
                    translate: "no",
                    children: "asd"
                })
            }
        }
    },
    function(e) {
        e.O(0, [800, 791, 986, 245, 582, 340, 573, 744], function() {
            return e(e.s = 3801)
        }), _N_E = e.O()
    }
]);