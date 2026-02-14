var wn = class {
        constructor() {
            this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
        }
        subscribe(e) {
            return this.listeners.add(e), this.onSubscribe(), () => {
                this.listeners.delete(e), this.onUnsubscribe()
            }
        }
        hasListeners() {
            return this.listeners.size > 0
        }
        onSubscribe() {}
        onUnsubscribe() {}
    },
    zt = typeof window > "u" || "Deno" in globalThis;

function Je() {}

function Kc(e, t) {
    return typeof e == "function" ? e(t) : e
}

function Lr(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}

function Ol(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}

function an(e, t) {
    return typeof e == "function" ? e(t) : e
}

function rt(e, t) {
    return typeof e == "function" ? e(t) : e
}

function Ji(e, t) {
    const {
        type: n = "all",
        exact: s,
        fetchStatus: r,
        predicate: i,
        queryKey: o,
        stale: l
    } = e;
    if (o) {
        if (s) {
            if (t.queryHash !== gi(o, t.options)) return !1
        } else if (!Bn(t.queryKey, o)) return !1
    }
    if (n !== "all") {
        const a = t.isActive();
        if (n === "active" && !a || n === "inactive" && a) return !1
    }
    return !(typeof l == "boolean" && t.isStale() !== l || r && r !== t.state.fetchStatus || i && !i(t))
}

function Xi(e, t) {
    const {
        exact: n,
        status: s,
        predicate: r,
        mutationKey: i
    } = e;
    if (i) {
        if (!t.options.mutationKey) return !1;
        if (n) {
            if (Yt(t.options.mutationKey) !== Yt(i)) return !1
        } else if (!Bn(t.options.mutationKey, i)) return !1
    }
    return !(s && t.state.status !== s || r && !r(t))
}

function gi(e, t) {
    return (t ? .queryKeyHashFn || Yt)(e)
}

function Yt(e) {
    return JSON.stringify(e, (t, n) => Hr(n) ? Object.keys(n).sort().reduce((s, r) => (s[r] = n[r], s), {}) : n)
}

function Bn(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some(n => !Bn(e[n], t[n])) : !1
}

function Tl(e, t) {
    if (e === t) return e;
    const n = Zi(e) && Zi(t);
    if (n || Hr(e) && Hr(t)) {
        const s = n ? e : Object.keys(e),
            r = s.length,
            i = n ? t : Object.keys(t),
            o = i.length,
            l = n ? [] : {};
        let a = 0;
        for (let u = 0; u < o; u++) {
            const c = n ? u : i[u];
            (!n && s.includes(c) || n) && e[c] === void 0 && t[c] === void 0 ? (l[c] = void 0, a++) : (l[c] = Tl(e[c], t[c]), l[c] === e[c] && e[c] !== void 0 && a++)
        }
        return r === o && a === r ? e : l
    }
    return t
}

function Os(e, t) {
    if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
    for (const n in e)
        if (e[n] !== t[n]) return !1;
    return !0
}

function Zi(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}

function Hr(e) {
    if (!eo(e)) return !1;
    const t = e.constructor;
    if (t === void 0) return !0;
    const n = t.prototype;
    return !(!eo(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}

function eo(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}

function qc(e) {
    return new Promise(t => {
        setTimeout(t, e)
    })
}

function jr(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? Tl(e, t) : t
}

function Eg(e) {
    return e
}

function Gc(e, t, n = 0) {
    const s = [...e, t];
    return n && s.length > n ? s.slice(1) : s
}

function zc(e, t, n = 0) {
    const s = [t, ...e];
    return n && s.length > n ? s.slice(0, -1) : s
}
var mi = Symbol();

function Pl(e, t) {
    return !e.queryFn && t ? .initialPromise ? () => t.initialPromise : !e.queryFn || e.queryFn === mi ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var Yc = class extends wn {#
        t;#
        e;#
        n;
        constructor() {
            super(), this.#n = e => {
                if (!zt && window.addEventListener) {
                    const t = () => e();
                    return window.addEventListener("visibilitychange", t, !1), () => {
                        window.removeEventListener("visibilitychange", t)
                    }
                }
            }
        }
        onSubscribe() {
            this.#e || this.setEventListener(this.#n)
        }
        onUnsubscribe() {
            this.hasListeners() || (this.#e ? .(), this.#e = void 0)
        }
        setEventListener(e) {
            this.#n = e, this.#e ? .(), this.#e = e(t => {
                typeof t == "boolean" ? this.setFocused(t) : this.onFocus()
            })
        }
        setFocused(e) {
            this.#t !== e && (this.#t = e, this.onFocus())
        }
        onFocus() {
            const e = this.isFocused();
            this.listeners.forEach(t => {
                t(e)
            })
        }
        isFocused() {
            return typeof this.#t == "boolean" ? this.#t : globalThis.document ? .visibilityState !== "hidden"
        }
    },
    yi = new Yc,
    Jc = class extends wn {#
        t = !0;#
        e;#
        n;
        constructor() {
            super(), this.#n = e => {
                if (!zt && window.addEventListener) {
                    const t = () => e(!0),
                        n = () => e(!1);
                    return window.addEventListener("online", t, !1), window.addEventListener("offline", n, !1), () => {
                        window.removeEventListener("online", t), window.removeEventListener("offline", n)
                    }
                }
            }
        }
        onSubscribe() {
            this.#e || this.setEventListener(this.#n)
        }
        onUnsubscribe() {
            this.hasListeners() || (this.#e ? .(), this.#e = void 0)
        }
        setEventListener(e) {
            this.#n = e, this.#e ? .(), this.#e = e(this.setOnline.bind(this))
        }
        setOnline(e) {
            this.#t !== e && (this.#t = e, this.listeners.forEach(n => {
                n(e)
            }))
        }
        isOnline() {
            return this.#t
        }
    },
    Ts = new Jc;

function Nr() {
    let e, t;
    const n = new Promise((r, i) => {
        e = r, t = i
    });
    n.status = "pending", n.catch(() => {});

    function s(r) {
        Object.assign(n, r), delete n.resolve, delete n.reject
    }
    return n.resolve = r => {
        s({
            status: "fulfilled",
            value: r
        }), e(r)
    }, n.reject = r => {
        s({
            status: "rejected",
            reason: r
        }), t(r)
    }, n
}

function Xc(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}

function xl(e) {
    return (e ? ? "online") === "online" ? Ts.isOnline() : !0
}
var Al = class extends Error {
    constructor(e) {
        super("CancelledError"), this.revert = e ? .revert, this.silent = e ? .silent
    }
};

function fr(e) {
    return e instanceof Al
}

function Rl(e) {
    let t = !1,
        n = 0,
        s = !1,
        r;
    const i = Nr(),
        o = g => {
            s || (h(new Al(g)), e.abort ? .())
        },
        l = () => {
            t = !0
        },
        a = () => {
            t = !1
        },
        u = () => yi.isFocused() && (e.networkMode === "always" || Ts.isOnline()) && e.canRun(),
        c = () => xl(e.networkMode) && e.canRun(),
        f = g => {
            s || (s = !0, e.onSuccess ? .(g), r ? .(), i.resolve(g))
        },
        h = g => {
            s || (s = !0, e.onError ? .(g), r ? .(), i.reject(g))
        },
        d = () => new Promise(g => {
            r = _ => {
                (s || u()) && g(_)
            }, e.onPause ? .()
        }).then(() => {
            r = void 0, s || e.onContinue ? .()
        }),
        p = () => {
            if (s) return;
            let g;
            const _ = n === 0 ? e.initialPromise : void 0;
            try {
                g = _ ? ? e.fn()
            } catch (v) {
                g = Promise.reject(v)
            }
            Promise.resolve(g).then(f).catch(v => {
                if (s) return;
                const w = e.retry ? ? (zt ? 0 : 3),
                    y = e.retryDelay ? ? Xc,
                    C = typeof y == "function" ? y(n, v) : y,
                    S = w === !0 || typeof w == "number" && n < w || typeof w == "function" && w(n, v);
                if (t || !S) {
                    h(v);
                    return
                }
                n++, e.onFail ? .(n, v), qc(C).then(() => u() ? void 0 : d()).then(() => {
                    t ? h(v) : p()
                })
            })
        };
    return {
        promise: i,
        cancel: o,
        continue: () => (r ? .(), i),
        cancelRetry: l,
        continueRetry: a,
        canStart: c,
        start: () => (c() ? p() : d().then(p), i)
    }
}

function Zc() {
    let e = [],
        t = 0,
        n = l => {
            l()
        },
        s = l => {
            l()
        },
        r = l => setTimeout(l, 0);
    const i = l => {
            t ? e.push(l) : r(() => {
                n(l)
            })
        },
        o = () => {
            const l = e;
            e = [], l.length && r(() => {
                s(() => {
                    l.forEach(a => {
                        n(a)
                    })
                })
            })
        };
    return {
        batch: l => {
            let a;
            t++;
            try {
                a = l()
            } finally {
                t--, t || o()
            }
            return a
        },
        batchCalls: l => (...a) => {
            i(() => {
                l(...a)
            })
        },
        schedule: i,
        setNotifyFunction: l => {
            n = l
        },
        setBatchNotifyFunction: l => {
            s = l
        },
        setScheduler: l => {
            r = l
        }
    }
}
var Oe = Zc(),
    Ml = class {#
        t;
        destroy() {
            this.clearGcTimeout()
        }
        scheduleGc() {
            this.clearGcTimeout(), Lr(this.gcTime) && (this.#t = setTimeout(() => {
                this.optionalRemove()
            }, this.gcTime))
        }
        updateGcTime(e) {
            this.gcTime = Math.max(this.gcTime || 0, e ? ? (zt ? 1 / 0 : 300 * 1e3))
        }
        clearGcTimeout() {
            this.#t && (clearTimeout(this.#t), this.#t = void 0)
        }
    },
    eu = class extends Ml {#
        t;#
        e;#
        n;#
        s;#
        r;#
        o;#
        l;
        constructor(e) {
            super(), this.#l = !1, this.#o = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.#s = e.client, this.#n = this.#s.getQueryCache(), this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.#t = tu(this.options), this.state = e.state ? ? this.#t, this.scheduleGc()
        }
        get meta() {
            return this.options.meta
        }
        get promise() {
            return this.#r ? .promise
        }
        setOptions(e) {
            this.options = { ...this.#o,
                ...e
            }, this.updateGcTime(this.options.gcTime)
        }
        optionalRemove() {
            !this.observers.length && this.state.fetchStatus === "idle" && this.#n.remove(this)
        }
        setData(e, t) {
            const n = jr(this.state.data, e, this.options);
            return this.#i({
                data: n,
                type: "success",
                dataUpdatedAt: t ? .updatedAt,
                manual: t ? .manual
            }), n
        }
        setState(e, t) {
            this.#i({
                type: "setState",
                state: e,
                setStateOptions: t
            })
        }
        cancel(e) {
            const t = this.#r ? .promise;
            return this.#r ? .cancel(e), t ? t.then(Je).catch(Je) : Promise.resolve()
        }
        destroy() {
            super.destroy(), this.cancel({
                silent: !0
            })
        }
        reset() {
            this.destroy(), this.setState(this.#t)
        }
        isActive() {
            return this.observers.some(e => rt(e.options.enabled, this) !== !1)
        }
        isDisabled() {
            return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === mi || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
        }
        isStale() {
            return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(e => e.getCurrentResult().isStale) : this.state.data === void 0
        }
        isStaleByTime(e = 0) {
            return this.state.isInvalidated || this.state.data === void 0 || !Ol(this.state.dataUpdatedAt, e)
        }
        onFocus() {
            this.observers.find(t => t.shouldFetchOnWindowFocus()) ? .refetch({
                cancelRefetch: !1
            }), this.#r ? .continue()
        }
        onOnline() {
            this.observers.find(t => t.shouldFetchOnReconnect()) ? .refetch({
                cancelRefetch: !1
            }), this.#r ? .continue()
        }
        addObserver(e) {
            this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.#n.notify({
                type: "observerAdded",
                query: this,
                observer: e
            }))
        }
        removeObserver(e) {
            this.observers.includes(e) && (this.observers = this.observers.filter(t => t !== e), this.observers.length || (this.#r && (this.#l ? this.#r.cancel({
                revert: !0
            }) : this.#r.cancelRetry()), this.scheduleGc()), this.#n.notify({
                type: "observerRemoved",
                query: this,
                observer: e
            }))
        }
        getObserversCount() {
            return this.observers.length
        }
        invalidate() {
            this.state.isInvalidated || this.#i({
                type: "invalidate"
            })
        }
        fetch(e, t) {
            if (this.state.fetchStatus !== "idle") {
                if (this.state.data !== void 0 && t ? .cancelRefetch) this.cancel({
                    silent: !0
                });
                else if (this.#r) return this.#r.continueRetry(), this.#r.promise
            }
            if (e && this.setOptions(e), !this.options.queryFn) {
                const l = this.observers.find(a => a.options.queryFn);
                l && this.setOptions(l.options)
            }
            const n = new AbortController,
                s = l => {
                    Object.defineProperty(l, "signal", {
                        enumerable: !0,
                        get: () => (this.#l = !0, n.signal)
                    })
                },
                r = () => {
                    const l = Pl(this.options, t),
                        a = {
                            client: this.#s,
                            queryKey: this.queryKey,
                            meta: this.meta
                        };
                    return s(a), this.#l = !1, this.options.persister ? this.options.persister(l, a, this) : l(a)
                },
                i = {
                    fetchOptions: t,
                    options: this.options,
                    queryKey: this.queryKey,
                    client: this.#s,
                    state: this.state,
                    fetchFn: r
                };
            s(i), this.options.behavior ? .onFetch(i, this), this.#e = this.state, (this.state.fetchStatus === "idle" || this.state.fetchMeta !== i.fetchOptions ? .meta) && this.#i({
                type: "fetch",
                meta: i.fetchOptions ? .meta
            });
            const o = l => {
                fr(l) && l.silent || this.#i({
                    type: "error",
                    error: l
                }), fr(l) || (this.#n.config.onError ? .(l, this), this.#n.config.onSettled ? .(this.state.data, l, this)), this.scheduleGc()
            };
            return this.#r = Rl({
                initialPromise: t ? .initialPromise,
                fn: i.fetchFn,
                abort: n.abort.bind(n),
                onSuccess: l => {
                    if (l === void 0) {
                        o(new Error(`${this.queryHash} data is undefined`));
                        return
                    }
                    try {
                        this.setData(l)
                    } catch (a) {
                        o(a);
                        return
                    }
                    this.#n.config.onSuccess ? .(l, this), this.#n.config.onSettled ? .(l, this.state.error, this), this.scheduleGc()
                },
                onError: o,
                onFail: (l, a) => {
                    this.#i({
                        type: "failed",
                        failureCount: l,
                        error: a
                    })
                },
                onPause: () => {
                    this.#i({
                        type: "pause"
                    })
                },
                onContinue: () => {
                    this.#i({
                        type: "continue"
                    })
                },
                retry: i.options.retry,
                retryDelay: i.options.retryDelay,
                networkMode: i.options.networkMode,
                canRun: () => !0
            }), this.#r.start()
        }#
        i(e) {
            const t = n => {
                switch (e.type) {
                    case "failed":
                        return { ...n,
                            fetchFailureCount: e.failureCount,
                            fetchFailureReason: e.error
                        };
                    case "pause":
                        return { ...n,
                            fetchStatus: "paused"
                        };
                    case "continue":
                        return { ...n,
                            fetchStatus: "fetching"
                        };
                    case "fetch":
                        return { ...n,
                            ...kl(n.data, this.options),
                            fetchMeta: e.meta ? ? null
                        };
                    case "success":
                        return { ...n,
                            data: e.data,
                            dataUpdateCount: n.dataUpdateCount + 1,
                            dataUpdatedAt: e.dataUpdatedAt ? ? Date.now(),
                            error: null,
                            isInvalidated: !1,
                            status: "success",
                            ...!e.manual && {
                                fetchStatus: "idle",
                                fetchFailureCount: 0,
                                fetchFailureReason: null
                            }
                        };
                    case "error":
                        const s = e.error;
                        return fr(s) && s.revert && this.#e ? { ...this.#e,
                            fetchStatus: "idle"
                        } : { ...n,
                            error: s,
                            errorUpdateCount: n.errorUpdateCount + 1,
                            errorUpdatedAt: Date.now(),
                            fetchFailureCount: n.fetchFailureCount + 1,
                            fetchFailureReason: s,
                            fetchStatus: "idle",
                            status: "error"
                        };
                    case "invalidate":
                        return { ...n,
                            isInvalidated: !0
                        };
                    case "setState":
                        return { ...n,
                            ...e.state
                        }
                }
            };
            this.state = t(this.state), Oe.batch(() => {
                this.observers.forEach(n => {
                    n.onQueryUpdate()
                }), this.#n.notify({
                    query: this,
                    type: "updated",
                    action: e
                })
            })
        }
    };

function kl(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: xl(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}

function tu(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData,
        n = t !== void 0,
        s = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? s ? ? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var Fl = class extends wn {
        constructor(t = {}) {
            super(), this.config = t, this.#t = new Map
        }#
        t;
        build(t, n, s) {
            const r = n.queryKey,
                i = n.queryHash ? ? gi(r, n);
            let o = this.get(i);
            return o || (o = new eu({
                client: t,
                queryKey: r,
                queryHash: i,
                options: t.defaultQueryOptions(n),
                state: s,
                defaultOptions: t.getQueryDefaults(r)
            }), this.add(o)), o
        }
        add(t) {
            this.#t.has(t.queryHash) || (this.#t.set(t.queryHash, t), this.notify({
                type: "added",
                query: t
            }))
        }
        remove(t) {
            const n = this.#t.get(t.queryHash);
            n && (t.destroy(), n === t && this.#t.delete(t.queryHash), this.notify({
                type: "removed",
                query: t
            }))
        }
        clear() {
            Oe.batch(() => {
                this.getAll().forEach(t => {
                    this.remove(t)
                })
            })
        }
        get(t) {
            return this.#t.get(t)
        }
        getAll() {
            return [...this.#t.values()]
        }
        find(t) {
            const n = {
                exact: !0,
                ...t
            };
            return this.getAll().find(s => Ji(n, s))
        }
        findAll(t = {}) {
            const n = this.getAll();
            return Object.keys(t).length > 0 ? n.filter(s => Ji(t, s)) : n
        }
        notify(t) {
            Oe.batch(() => {
                this.listeners.forEach(n => {
                    n(t)
                })
            })
        }
        onFocus() {
            Oe.batch(() => {
                this.getAll().forEach(t => {
                    t.onFocus()
                })
            })
        }
        onOnline() {
            Oe.batch(() => {
                this.getAll().forEach(t => {
                    t.onOnline()
                })
            })
        }
    },
    nu = class extends Ml {#
        t;#
        e;#
        n;
        constructor(e) {
            super(), this.mutationId = e.mutationId, this.#e = e.mutationCache, this.#t = [], this.state = e.state || Il(), this.setOptions(e.options), this.scheduleGc()
        }
        setOptions(e) {
            this.options = e, this.updateGcTime(this.options.gcTime)
        }
        get meta() {
            return this.options.meta
        }
        addObserver(e) {
            this.#t.includes(e) || (this.#t.push(e), this.clearGcTimeout(), this.#e.notify({
                type: "observerAdded",
                mutation: this,
                observer: e
            }))
        }
        removeObserver(e) {
            this.#t = this.#t.filter(t => t !== e), this.scheduleGc(), this.#e.notify({
                type: "observerRemoved",
                mutation: this,
                observer: e
            })
        }
        optionalRemove() {
            this.#t.length || (this.state.status === "pending" ? this.scheduleGc() : this.#e.remove(this))
        }
        continue () {
            return this.#n ? .continue() ? ? this.execute(this.state.variables)
        }
        async execute(e) {
            this.#n = Rl({
                fn: () => this.options.mutationFn ? this.options.mutationFn(e) : Promise.reject(new Error("No mutationFn found")),
                onFail: (s, r) => {
                    this.#s({
                        type: "failed",
                        failureCount: s,
                        error: r
                    })
                },
                onPause: () => {
                    this.#s({
                        type: "pause"
                    })
                },
                onContinue: () => {
                    this.#s({
                        type: "continue"
                    })
                },
                retry: this.options.retry ? ? 0,
                retryDelay: this.options.retryDelay,
                networkMode: this.options.networkMode,
                canRun: () => this.#e.canRun(this)
            });
            const t = this.state.status === "pending",
                n = !this.#n.canStart();
            try {
                if (!t) {
                    this.#s({
                        type: "pending",
                        variables: e,
                        isPaused: n
                    }), await this.#e.config.onMutate ? .(e, this);
                    const r = await this.options.onMutate ? .(e);
                    r !== this.state.context && this.#s({
                        type: "pending",
                        context: r,
                        variables: e,
                        isPaused: n
                    })
                }
                const s = await this.#n.start();
                return await this.#e.config.onSuccess ? .(s, e, this.state.context, this), await this.options.onSuccess ? .(s, e, this.state.context), await this.#e.config.onSettled ? .(s, null, this.state.variables, this.state.context, this), await this.options.onSettled ? .(s, null, e, this.state.context), this.#s({
                    type: "success",
                    data: s
                }), s
            } catch (s) {
                try {
                    throw await this.#e.config.onError ? .(s, e, this.state.context, this), await this.options.onError ? .(s, e, this.state.context), await this.#e.config.onSettled ? .(void 0, s, this.state.variables, this.state.context, this), await this.options.onSettled ? .(void 0, s, e, this.state.context), s
                } finally {
                    this.#s({
                        type: "error",
                        error: s
                    })
                }
            } finally {
                this.#e.runNext(this)
            }
        }#
        s(e) {
            const t = n => {
                switch (e.type) {
                    case "failed":
                        return { ...n,
                            failureCount: e.failureCount,
                            failureReason: e.error
                        };
                    case "pause":
                        return { ...n,
                            isPaused: !0
                        };
                    case "continue":
                        return { ...n,
                            isPaused: !1
                        };
                    case "pending":
                        return { ...n,
                            context: e.context,
                            data: void 0,
                            failureCount: 0,
                            failureReason: null,
                            error: null,
                            isPaused: e.isPaused,
                            status: "pending",
                            variables: e.variables,
                            submittedAt: Date.now()
                        };
                    case "success":
                        return { ...n,
                            data: e.data,
                            failureCount: 0,
                            failureReason: null,
                            error: null,
                            status: "success",
                            isPaused: !1
                        };
                    case "error":
                        return { ...n,
                            data: void 0,
                            error: e.error,
                            failureCount: n.failureCount + 1,
                            failureReason: e.error,
                            isPaused: !1,
                            status: "error"
                        }
                }
            };
            this.state = t(this.state), Oe.batch(() => {
                this.#t.forEach(n => {
                    n.onMutationUpdate(e)
                }), this.#e.notify({
                    mutation: this,
                    type: "updated",
                    action: e
                })
            })
        }
    };

function Il() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var Dl = class extends wn {
    constructor(t = {}) {
        super(), this.config = t, this.#t = new Set, this.#e = new Map, this.#n = 0
    }#
    t;#
    e;#
    n;
    build(t, n, s) {
        const r = new nu({
            mutationCache: this,
            mutationId: ++this.#n,
            options: t.defaultMutationOptions(n),
            state: s
        });
        return this.add(r), r
    }
    add(t) {
        this.#t.add(t);
        const n = rs(t);
        if (typeof n == "string") {
            const s = this.#e.get(n);
            s ? s.push(t) : this.#e.set(n, [t])
        }
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        if (this.#t.delete(t)) {
            const n = rs(t);
            if (typeof n == "string") {
                const s = this.#e.get(n);
                if (s)
                    if (s.length > 1) {
                        const r = s.indexOf(t);
                        r !== -1 && s.splice(r, 1)
                    } else s[0] === t && this.#e.delete(n)
            }
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        const n = rs(t);
        if (typeof n == "string") {
            const r = this.#e.get(n) ? .find(i => i.state.status === "pending");
            return !r || r === t
        } else return !0
    }
    runNext(t) {
        const n = rs(t);
        return typeof n == "string" ? this.#e.get(n) ? .find(r => r !== t && r.state.isPaused) ? .continue() ? ? Promise.resolve() : Promise.resolve()
    }
    clear() {
        Oe.batch(() => {
            this.#t.forEach(t => {
                this.notify({
                    type: "removed",
                    mutation: t
                })
            }), this.#t.clear(), this.#e.clear()
        })
    }
    getAll() {
        return Array.from(this.#t)
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(s => Xi(n, s))
    }
    findAll(t = {}) {
        return this.getAll().filter(n => Xi(t, n))
    }
    notify(t) {
        Oe.batch(() => {
            this.listeners.forEach(n => {
                n(t)
            })
        })
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return Oe.batch(() => Promise.all(t.map(n => n.continue().catch(Je))))
    }
};

function rs(e) {
    return e.options.scope ? .id
}

function to(e) {
    return {
        onFetch: (t, n) => {
            const s = t.options,
                r = t.fetchOptions ? .meta ? .fetchMore ? .direction,
                i = t.state.data ? .pages || [],
                o = t.state.data ? .pageParams || [];
            let l = {
                    pages: [],
                    pageParams: []
                },
                a = 0;
            const u = async () => {
                let c = !1;
                const f = p => {
                        Object.defineProperty(p, "signal", {
                            enumerable: !0,
                            get: () => (t.signal.aborted ? c = !0 : t.signal.addEventListener("abort", () => {
                                c = !0
                            }), t.signal)
                        })
                    },
                    h = Pl(t.options, t.fetchOptions),
                    d = async (p, g, _) => {
                        if (c) return Promise.reject();
                        if (g == null && p.pages.length) return Promise.resolve(p);
                        const v = {
                            client: t.client,
                            queryKey: t.queryKey,
                            pageParam: g,
                            direction: _ ? "backward" : "forward",
                            meta: t.options.meta
                        };
                        f(v);
                        const w = await h(v),
                            {
                                maxPages: y
                            } = t.options,
                            C = _ ? zc : Gc;
                        return {
                            pages: C(p.pages, w, y),
                            pageParams: C(p.pageParams, g, y)
                        }
                    };
                if (r && i.length) {
                    const p = r === "backward",
                        g = p ? su : no,
                        _ = {
                            pages: i,
                            pageParams: o
                        },
                        v = g(s, _);
                    l = await d(_, v, p)
                } else {
                    const p = e ? ? i.length;
                    do {
                        const g = a === 0 ? o[0] ? ? s.initialPageParam : no(s, l);
                        if (a > 0 && g == null) break;
                        l = await d(l, g), a++
                    } while (a < p)
                }
                return l
            };
            t.options.persister ? t.fetchFn = () => t.options.persister ? .(u, {
                client: t.client,
                queryKey: t.queryKey,
                meta: t.options.meta,
                signal: t.signal
            }, n) : t.fetchFn = u
        }
    }
}

function no(e, {
    pages: t,
    pageParams: n
}) {
    const s = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[s], t, n[s], n) : void 0
}

function su(e, {
    pages: t,
    pageParams: n
}) {
    return t.length > 0 ? e.getPreviousPageParam ? .(t[0], t, n[0], n) : void 0
}
var ru = class {#
        t;#
        e;#
        n;#
        s;#
        r;#
        o;#
        l;#
        i;
        constructor(t = {}) {
            this.#t = t.queryCache || new Fl, this.#e = t.mutationCache || new Dl, this.#n = t.defaultOptions || {}, this.#s = new Map, this.#r = new Map, this.#o = 0
        }
        mount() {
            this.#o++, this.#o === 1 && (this.#l = yi.subscribe(async t => {
                t && (await this.resumePausedMutations(), this.#t.onFocus())
            }), this.#i = Ts.subscribe(async t => {
                t && (await this.resumePausedMutations(), this.#t.onOnline())
            }))
        }
        unmount() {
            this.#o--, this.#o === 0 && (this.#l ? .(), this.#l = void 0, this.#i ? .(), this.#i = void 0)
        }
        isFetching(t) {
            return this.#t.findAll({ ...t,
                fetchStatus: "fetching"
            }).length
        }
        isMutating(t) {
            return this.#e.findAll({ ...t,
                status: "pending"
            }).length
        }
        getQueryData(t) {
            const n = this.defaultQueryOptions({
                queryKey: t
            });
            return this.#t.get(n.queryHash) ? .state.data
        }
        ensureQueryData(t) {
            const n = this.defaultQueryOptions(t),
                s = this.#t.build(this, n),
                r = s.state.data;
            return r === void 0 ? this.fetchQuery(t) : (t.revalidateIfStale && s.isStaleByTime(an(n.staleTime, s)) && this.prefetchQuery(n), Promise.resolve(r))
        }
        getQueriesData(t) {
            return this.#t.findAll(t).map(({
                queryKey: n,
                state: s
            }) => {
                const r = s.data;
                return [n, r]
            })
        }
        setQueryData(t, n, s) {
            const r = this.defaultQueryOptions({
                    queryKey: t
                }),
                o = this.#t.get(r.queryHash) ? .state.data,
                l = Kc(n, o);
            if (l !== void 0) return this.#t.build(this, r).setData(l, { ...s,
                manual: !0
            })
        }
        setQueriesData(t, n, s) {
            return Oe.batch(() => this.#t.findAll(t).map(({
                queryKey: r
            }) => [r, this.setQueryData(r, n, s)]))
        }
        getQueryState(t) {
            const n = this.defaultQueryOptions({
                queryKey: t
            });
            return this.#t.get(n.queryHash) ? .state
        }
        removeQueries(t) {
            const n = this.#t;
            Oe.batch(() => {
                n.findAll(t).forEach(s => {
                    n.remove(s)
                })
            })
        }
        resetQueries(t, n) {
            const s = this.#t,
                r = {
                    type: "active",
                    ...t
                };
            return Oe.batch(() => (s.findAll(t).forEach(i => {
                i.reset()
            }), this.refetchQueries(r, n)))
        }
        cancelQueries(t, n = {}) {
            const s = {
                    revert: !0,
                    ...n
                },
                r = Oe.batch(() => this.#t.findAll(t).map(i => i.cancel(s)));
            return Promise.all(r).then(Je).catch(Je)
        }
        invalidateQueries(t, n = {}) {
            return Oe.batch(() => {
                if (this.#t.findAll(t).forEach(r => {
                        r.invalidate()
                    }), t ? .refetchType === "none") return Promise.resolve();
                const s = { ...t,
                    type: t ? .refetchType ? ? t ? .type ? ? "active"
                };
                return this.refetchQueries(s, n)
            })
        }
        refetchQueries(t, n = {}) {
            const s = { ...n,
                    cancelRefetch: n.cancelRefetch ? ? !0
                },
                r = Oe.batch(() => this.#t.findAll(t).filter(i => !i.isDisabled()).map(i => {
                    let o = i.fetch(void 0, s);
                    return s.throwOnError || (o = o.catch(Je)), i.state.fetchStatus === "paused" ? Promise.resolve() : o
                }));
            return Promise.all(r).then(Je)
        }
        fetchQuery(t) {
            const n = this.defaultQueryOptions(t);
            n.retry === void 0 && (n.retry = !1);
            const s = this.#t.build(this, n);
            return s.isStaleByTime(an(n.staleTime, s)) ? s.fetch(n) : Promise.resolve(s.state.data)
        }
        prefetchQuery(t) {
            return this.fetchQuery(t).then(Je).catch(Je)
        }
        fetchInfiniteQuery(t) {
            return t.behavior = to(t.pages), this.fetchQuery(t)
        }
        prefetchInfiniteQuery(t) {
            return this.fetchInfiniteQuery(t).then(Je).catch(Je)
        }
        ensureInfiniteQueryData(t) {
            return t.behavior = to(t.pages), this.ensureQueryData(t)
        }
        resumePausedMutations() {
            return Ts.isOnline() ? this.#e.resumePausedMutations() : Promise.resolve()
        }
        getQueryCache() {
            return this.#t
        }
        getMutationCache() {
            return this.#e
        }
        getDefaultOptions() {
            return this.#n
        }
        setDefaultOptions(t) {
            this.#n = t
        }
        setQueryDefaults(t, n) {
            this.#s.set(Yt(t), {
                queryKey: t,
                defaultOptions: n
            })
        }
        getQueryDefaults(t) {
            const n = [...this.#s.values()],
                s = {};
            return n.forEach(r => {
                Bn(t, r.queryKey) && Object.assign(s, r.defaultOptions)
            }), s
        }
        setMutationDefaults(t, n) {
            this.#r.set(Yt(t), {
                mutationKey: t,
                defaultOptions: n
            })
        }
        getMutationDefaults(t) {
            const n = [...this.#r.values()];
            let s = {};
            return n.forEach(r => {
                Bn(t, r.mutationKey) && (s = { ...s,
                    ...r.defaultOptions
                })
            }), s
        }
        defaultQueryOptions(t) {
            if (t._defaulted) return t;
            const n = { ...this.#n.queries,
                ...this.getQueryDefaults(t.queryKey),
                ...t,
                _defaulted: !0
            };
            return n.queryHash || (n.queryHash = gi(n.queryKey, n)), n.refetchOnReconnect === void 0 && (n.refetchOnReconnect = n.networkMode !== "always"), n.throwOnError === void 0 && (n.throwOnError = !!n.suspense), !n.networkMode && n.persister && (n.networkMode = "offlineFirst"), n.queryFn === mi && (n.enabled = !1), n
        }
        defaultMutationOptions(t) {
            return t ? ._defaulted ? t : { ...this.#n.mutations,
                ...t ? .mutationKey && this.getMutationDefaults(t.mutationKey),
                ...t,
                _defaulted : !0
            }
        }
        clear() {
            this.#t.clear(), this.#e.clear()
        }
    },
    iu = class extends wn {
        constructor(e, t) {
            super(), this.options = t, this.#t = e, this.#i = null, this.#l = Nr(), this.options.experimental_prefetchInRender || this.#l.reject(new Error("experimental_prefetchInRender feature flag is not enabled")), this.bindMethods(), this.setOptions(t)
        }#
        t;#
        e = void 0;#
        n = void 0;#
        s = void 0;#
        r;#
        o;#
        l;#
        i;#
        g;#
        h;#
        d;#
        c;#
        u;#
        a;#
        p = new Set;
        bindMethods() {
            this.refetch = this.refetch.bind(this)
        }
        onSubscribe() {
            this.listeners.size === 1 && (this.#e.addObserver(this), so(this.#e, this.options) ? this.#f() : this.updateResult(), this.#b())
        }
        onUnsubscribe() {
            this.hasListeners() || this.destroy()
        }
        shouldFetchOnReconnect() {
            return $r(this.#e, this.options, this.options.refetchOnReconnect)
        }
        shouldFetchOnWindowFocus() {
            return $r(this.#e, this.options, this.options.refetchOnWindowFocus)
        }
        destroy() {
            this.listeners = new Set, this.#_(), this.#w(), this.#e.removeObserver(this)
        }
        setOptions(e, t) {
            const n = this.options,
                s = this.#e;
            if (this.options = this.#t.defaultQueryOptions(e), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof rt(this.options.enabled, this.#e) != "boolean") throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
            this.#C(), this.#e.setOptions(this.options), n._defaulted && !Os(this.options, n) && this.#t.getQueryCache().notify({
                type: "observerOptionsUpdated",
                query: this.#e,
                observer: this
            });
            const r = this.hasListeners();
            r && ro(this.#e, s, this.options, n) && this.#f(), this.updateResult(t), r && (this.#e !== s || rt(this.options.enabled, this.#e) !== rt(n.enabled, this.#e) || an(this.options.staleTime, this.#e) !== an(n.staleTime, this.#e)) && this.#m();
            const i = this.#y();
            r && (this.#e !== s || rt(this.options.enabled, this.#e) !== rt(n.enabled, this.#e) || i !== this.#a) && this.#v(i)
        }
        getOptimisticResult(e) {
            const t = this.#t.getQueryCache().build(this.#t, e),
                n = this.createResult(t, e);
            return lu(this, n) && (this.#s = n, this.#o = this.options, this.#r = this.#e.state), n
        }
        getCurrentResult() {
            return this.#s
        }
        trackResult(e, t) {
            const n = {};
            return Object.keys(e).forEach(s => {
                Object.defineProperty(n, s, {
                    configurable: !1,
                    enumerable: !0,
                    get: () => (this.trackProp(s), t ? .(s), e[s])
                })
            }), n
        }
        trackProp(e) {
            this.#p.add(e)
        }
        getCurrentQuery() {
            return this.#e
        }
        refetch({ ...e
        } = {}) {
            return this.fetch({ ...e
            })
        }
        fetchOptimistic(e) {
            const t = this.#t.defaultQueryOptions(e),
                n = this.#t.getQueryCache().build(this.#t, t);
            return n.fetch().then(() => this.createResult(n, t))
        }
        fetch(e) {
            return this.#f({ ...e,
                cancelRefetch: e.cancelRefetch ? ? !0
            }).then(() => (this.updateResult(), this.#s))
        }#
        f(e) {
            this.#C();
            let t = this.#e.fetch(this.options, e);
            return e ? .throwOnError || (t = t.catch(Je)), t
        }#
        m() {
            this.#_();
            const e = an(this.options.staleTime, this.#e);
            if (zt || this.#s.isStale || !Lr(e)) return;
            const n = Ol(this.#s.dataUpdatedAt, e) + 1;
            this.#c = setTimeout(() => {
                this.#s.isStale || this.updateResult()
            }, n)
        }#
        y() {
            return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(this.#e) : this.options.refetchInterval) ? ? !1
        }#
        v(e) {
            this.#w(), this.#a = e, !(zt || rt(this.options.enabled, this.#e) === !1 || !Lr(this.#a) || this.#a === 0) && (this.#u = setInterval(() => {
                (this.options.refetchIntervalInBackground || yi.isFocused()) && this.#f()
            }, this.#a))
        }#
        b() {
            this.#m(), this.#v(this.#y())
        }#
        _() {
            this.#c && (clearTimeout(this.#c), this.#c = void 0)
        }#
        w() {
            this.#u && (clearInterval(this.#u), this.#u = void 0)
        }
        createResult(e, t) {
            const n = this.#e,
                s = this.options,
                r = this.#s,
                i = this.#r,
                o = this.#o,
                a = e !== n ? e.state : this.#n,
                {
                    state: u
                } = e;
            let c = { ...u
                },
                f = !1,
                h;
            if (t._optimisticResults) {
                const O = this.hasListeners(),
                    P = !O && so(e, t),
                    E = O && ro(e, n, t, s);
                (P || E) && (c = { ...c,
                    ...kl(u.data, e.options)
                }), t._optimisticResults === "isRestoring" && (c.fetchStatus = "idle")
            }
            let {
                error: d,
                errorUpdatedAt: p,
                status: g
            } = c;
            if (t.select && c.data !== void 0)
                if (r && c.data === i ? .data && t.select === this.#g) h = this.#h;
                else try {
                    this.#g = t.select, h = t.select(c.data), h = jr(r ? .data, h, t), this.#h = h, this.#i = null
                } catch (O) {
                    this.#i = O
                } else h = c.data;
            if (t.placeholderData !== void 0 && h === void 0 && g === "pending") {
                let O;
                if (r ? .isPlaceholderData && t.placeholderData === o ? .placeholderData) O = r.data;
                else if (O = typeof t.placeholderData == "function" ? t.placeholderData(this.#d ? .state.data, this.#d) : t.placeholderData, t.select && O !== void 0) try {
                    O = t.select(O), this.#i = null
                } catch (P) {
                    this.#i = P
                }
                O !== void 0 && (g = "success", h = jr(r ? .data, O, t), f = !0)
            }
            this.#i && (d = this.#i, h = this.#h, p = Date.now(), g = "error");
            const _ = c.fetchStatus === "fetching",
                v = g === "pending",
                w = g === "error",
                y = v && _,
                C = h !== void 0,
                A = {
                    status: g,
                    fetchStatus: c.fetchStatus,
                    isPending: v,
                    isSuccess: g === "success",
                    isError: w,
                    isInitialLoading: y,
                    isLoading: y,
                    data: h,
                    dataUpdatedAt: c.dataUpdatedAt,
                    error: d,
                    errorUpdatedAt: p,
                    failureCount: c.fetchFailureCount,
                    failureReason: c.fetchFailureReason,
                    errorUpdateCount: c.errorUpdateCount,
                    isFetched: c.dataUpdateCount > 0 || c.errorUpdateCount > 0,
                    isFetchedAfterMount: c.dataUpdateCount > a.dataUpdateCount || c.errorUpdateCount > a.errorUpdateCount,
                    isFetching: _,
                    isRefetching: _ && !v,
                    isLoadingError: w && !C,
                    isPaused: c.fetchStatus === "paused",
                    isPlaceholderData: f,
                    isRefetchError: w && C,
                    isStale: vi(e, t),
                    refetch: this.refetch,
                    promise: this.#l
                };
            if (this.options.experimental_prefetchInRender) {
                const O = x => {
                        A.status === "error" ? x.reject(A.error) : A.data !== void 0 && x.resolve(A.data)
                    },
                    P = () => {
                        const x = this.#l = A.promise = Nr();
                        O(x)
                    },
                    E = this.#l;
                switch (E.status) {
                    case "pending":
                        e.queryHash === n.queryHash && O(E);
                        break;
                    case "fulfilled":
                        (A.status === "error" || A.data !== E.value) && P();
                        break;
                    case "rejected":
                        (A.status !== "error" || A.error !== E.reason) && P();
                        break
                }
            }
            return A
        }
        updateResult(e) {
            const t = this.#s,
                n = this.createResult(this.#e, this.options);
            if (this.#r = this.#e.state, this.#o = this.options, this.#r.data !== void 0 && (this.#d = this.#e), Os(n, t)) return;
            this.#s = n;
            const s = {},
                r = () => {
                    if (!t) return !0;
                    const {
                        notifyOnChangeProps: i
                    } = this.options, o = typeof i == "function" ? i() : i;
                    if (o === "all" || !o && !this.#p.size) return !0;
                    const l = new Set(o ? ? this.#p);
                    return this.options.throwOnError && l.add("error"), Object.keys(this.#s).some(a => {
                        const u = a;
                        return this.#s[u] !== t[u] && l.has(u)
                    })
                };
            e ? .listeners !== !1 && r() && (s.listeners = !0), this.#S({ ...s,
                ...e
            })
        }#
        C() {
            const e = this.#t.getQueryCache().build(this.#t, this.options);
            if (e === this.#e) return;
            const t = this.#e;
            this.#e = e, this.#n = e.state, this.hasListeners() && (t ? .removeObserver(this), e.addObserver(this))
        }
        onQueryUpdate() {
            this.updateResult(), this.hasListeners() && this.#b()
        }#
        S(e) {
            Oe.batch(() => {
                e.listeners && this.listeners.forEach(t => {
                    t(this.#s)
                }), this.#t.getQueryCache().notify({
                    query: this.#e,
                    type: "observerResultsUpdated"
                })
            })
        }
    };

function ou(e, t) {
    return rt(t.enabled, e) !== !1 && e.state.data === void 0 && !(e.state.status === "error" && t.retryOnMount === !1)
}

function so(e, t) {
    return ou(e, t) || e.state.data !== void 0 && $r(e, t, t.refetchOnMount)
}

function $r(e, t, n) {
    if (rt(t.enabled, e) !== !1) {
        const s = typeof n == "function" ? n(e) : n;
        return s === "always" || s !== !1 && vi(e, t)
    }
    return !1
}

function ro(e, t, n, s) {
    return (e !== t || rt(s.enabled, e) === !1) && (!n.suspense || e.state.status !== "error") && vi(e, n)
}

function vi(e, t) {
    return rt(t.enabled, e) !== !1 && e.isStaleByTime(an(t.staleTime, e))
}

function lu(e, t) {
    return !Os(e.getCurrentResult(), t)
}
var au = class extends wn {#
    t;#
    e = void 0;#
    n;#
    s;
    constructor(t, n) {
        super(), this.#t = t, this.setOptions(n), this.bindMethods(), this.#r()
    }
    bindMethods() {
        this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this)
    }
    setOptions(t) {
        const n = this.options;
        this.options = this.#t.defaultMutationOptions(t), Os(this.options, n) || this.#t.getMutationCache().notify({
            type: "observerOptionsUpdated",
            mutation: this.#n,
            observer: this
        }), n ? .mutationKey && this.options.mutationKey && Yt(n.mutationKey) !== Yt(this.options.mutationKey) ? this.reset() : this.#n ? .state.status === "pending" && this.#n.setOptions(this.options)
    }
    onUnsubscribe() {
        this.hasListeners() || this.#n ? .removeObserver(this)
    }
    onMutationUpdate(t) {
        this.#r(), this.#o(t)
    }
    getCurrentResult() {
        return this.#e
    }
    reset() {
        this.#n ? .removeObserver(this), this.#n = void 0, this.#r(), this.#o()
    }
    mutate(t, n) {
        return this.#s = n, this.#n ? .removeObserver(this), this.#n = this.#t.getMutationCache().build(this.#t, this.options), this.#n.addObserver(this), this.#n.execute(t)
    }#
    r() {
        const t = this.#n ? .state ? ? Il();
        this.#e = { ...t,
            isPending: t.status === "pending",
            isSuccess: t.status === "success",
            isError: t.status === "error",
            isIdle: t.status === "idle",
            mutate: this.mutate,
            reset: this.reset
        }
    }#
    o(t) {
        Oe.batch(() => {
            if (this.#s && this.hasListeners()) {
                const n = this.#e.variables,
                    s = this.#e.context;
                t ? .type === "success" ? (this.#s.onSuccess ? .(t.data, n, s), this.#s.onSettled ? .(t.data, null, n, s)) : t ? .type === "error" && (this.#s.onError ? .(t.error, n, s), this.#s.onSettled ? .(void 0, t.error, n, s))
            }
            this.listeners.forEach(n => {
                n(this.#e)
            })
        })
    }
};

function cu(e) {
    return e
}

function Ag(e, t, n) {
    if (typeof t != "object" || t === null) return;
    const s = e.getMutationCache(),
        r = e.getQueryCache(),
        i = e.getDefaultOptions().hydrate ? .deserializeData ? ? cu,
        o = t.mutations || [],
        l = t.queries || [];
    o.forEach(({
        state: a,
        ...u
    }) => {
        s.build(e, { ...e.getDefaultOptions().hydrate ? .mutations,
            ...n ? .defaultOptions ? .mutations,
            ...u
        }, a)
    }), l.forEach(({
        queryKey: a,
        state: u,
        queryHash: c,
        meta: f,
        promise: h
    }) => {
        let d = r.get(c);
        const p = u.data === void 0 ? u.data : i(u.data);
        if (d) {
            if (d.state.dataUpdatedAt < u.dataUpdatedAt) {
                const {
                    fetchStatus: g,
                    ..._
                } = u;
                d.setState({ ..._,
                    data: p
                })
            }
        } else d = r.build(e, { ...e.getDefaultOptions().hydrate ? .queries,
            ...n ? .defaultOptions ? .queries,
            queryKey : a,
            queryHash : c,
            meta : f
        }, { ...u,
            data: p,
            fetchStatus: "idle"
        });
        if (h) {
            const g = Promise.resolve(h).then(i);
            d.fetch(void 0, {
                initialPromise: g
            })
        }
    })
}

function bi(e) {
    const t = Object.create(null);
    for (const n of e.split(",")) t[n] = 1;
    return n => n in t
}
const oe = {},
    cn = [],
    pt = () => {},
    uu = () => !1,
    Yn = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
    _i = e => e.startsWith("onUpdate:"),
    Ee = Object.assign,
    wi = (e, t) => {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1)
    },
    fu = Object.prototype.hasOwnProperty,
    ce = (e, t) => fu.call(e, t),
    q = Array.isArray,
    un = e => Jn(e) === "[object Map]",
    Cn = e => Jn(e) === "[object Set]",
    io = e => Jn(e) === "[object Date]",
    Z = e => typeof e == "function",
    be = e => typeof e == "string",
    ot = e => typeof e == "symbol",
    de = e => e !== null && typeof e == "object",
    Ci = e => (de(e) || Z(e)) && Z(e.then) && Z(e.catch),
    Ll = Object.prototype.toString,
    Jn = e => Ll.call(e),
    hu = e => Jn(e).slice(8, -1),
    Hl = e => Jn(e) === "[object Object]",
    Si = e => be(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
    fn = bi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
    Vs = e => {
        const t = Object.create(null);
        return n => t[n] || (t[n] = e(n))
    },
    du = /-(\w)/g,
    qe = Vs(e => e.replace(du, (t, n) => n ? n.toUpperCase() : "")),
    pu = /\B([A-Z])/g,
    Ot = Vs(e => e.replace(pu, "-$1").toLowerCase()),
    Qs = Vs(e => e.charAt(0).toUpperCase() + e.slice(1)),
    hr = Vs(e => e ? `on${Qs(e)}` : ""),
    Ue = (e, t) => !Object.is(e, t),
    ms = (e, ...t) => {
        for (let n = 0; n < e.length; n++) e[n](...t)
    },
    Ur = (e, t, n, s = !1) => {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !1,
            writable: s,
            value: n
        })
    },
    Ps = e => {
        const t = parseFloat(e);
        return isNaN(t) ? e : t
    },
    jl = e => {
        const t = be(e) ? Number(e) : NaN;
        return isNaN(t) ? e : t
    };
let oo;
const Ws = () => oo || (oo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});

function Ks(e) {
    if (q(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const s = e[n],
                r = be(s) ? vu(s) : Ks(s);
            if (r)
                for (const i in r) t[i] = r[i]
        }
        return t
    } else if (be(e) || de(e)) return e
}
const gu = /;(?![^(]*\))/g,
    mu = /:([^]+)/,
    yu = /\/\*[^]*?\*\//g;

function vu(e) {
    const t = {};
    return e.replace(yu, "").split(gu).forEach(n => {
        if (n) {
            const s = n.split(mu);
            s.length > 1 && (t[s[0].trim()] = s[1].trim())
        }
    }), t
}

function qs(e) {
    let t = "";
    if (be(e)) t = e;
    else if (q(e))
        for (let n = 0; n < e.length; n++) {
            const s = qs(e[n]);
            s && (t += s + " ")
        } else if (de(e))
            for (const n in e) e[n] && (t += n + " ");
    return t.trim()
}

function Rg(e) {
    if (!e) return null;
    let {
        class: t,
        style: n
    } = e;
    return t && !be(t) && (e.class = qs(t)), n && (e.style = Ks(n)), e
}
const bu = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
    _u = bi(bu);

function Nl(e) {
    return !!e || e === ""
}

function wu(e, t) {
    if (e.length !== t.length) return !1;
    let n = !0;
    for (let s = 0; n && s < e.length; s++) n = Jt(e[s], t[s]);
    return n
}

function Jt(e, t) {
    if (e === t) return !0;
    let n = io(e),
        s = io(t);
    if (n || s) return n && s ? e.getTime() === t.getTime() : !1;
    if (n = ot(e), s = ot(t), n || s) return e === t;
    if (n = q(e), s = q(t), n || s) return n && s ? wu(e, t) : !1;
    if (n = de(e), s = de(t), n || s) {
        if (!n || !s) return !1;
        const r = Object.keys(e).length,
            i = Object.keys(t).length;
        if (r !== i) return !1;
        for (const o in e) {
            const l = e.hasOwnProperty(o),
                a = t.hasOwnProperty(o);
            if (l && !a || !l && a || !Jt(e[o], t[o])) return !1
        }
    }
    return String(e) === String(t)
}

function Ei(e, t) {
    return e.findIndex(n => Jt(n, t))
}
const $l = e => !!(e && e.__v_isRef === !0),
    Cu = e => be(e) ? e : e == null ? "" : q(e) || de(e) && (e.toString === Ll || !Z(e.toString)) ? $l(e) ? Cu(e.value) : JSON.stringify(e, Ul, 2) : String(e),
    Ul = (e, t) => $l(t) ? Ul(e, t.value) : un(t) ? {
        [`Map(${t.size})`]: [...t.entries()].reduce((n, [s, r], i) => (n[dr(s, i) + " =>"] = r, n), {})
    } : Cn(t) ? {
        [`Set(${t.size})`]: [...t.values()].map(n => dr(n))
    } : ot(t) ? dr(t) : de(t) && !q(t) && !Hl(t) ? String(t) : t,
    dr = (e, t = "") => {
        var n;
        return ot(e) ? `Symbol(${(n=e.description)!=null?n:t})` : e
    };
let Me;
class Bl {
    constructor(t = !1) {
        this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Me, !t && Me && (this.index = (Me.scopes || (Me.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    pause() {
        if (this._active) {
            this._isPaused = !0;
            let t, n;
            if (this.scopes)
                for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
            for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause()
        }
    }
    resume() {
        if (this._active && this._isPaused) {
            this._isPaused = !1;
            let t, n;
            if (this.scopes)
                for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
            for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume()
        }
    }
    run(t) {
        if (this._active) {
            const n = Me;
            try {
                return Me = this, t()
            } finally {
                Me = n
            }
        }
    }
    on() {
        ++this._on === 1 && (this.prevScope = Me, Me = this)
    }
    off() {
        this._on > 0 && --this._on === 0 && (Me = this.prevScope, this.prevScope = void 0)
    }
    stop(t) {
        if (this._active) {
            this._active = !1;
            let n, s;
            for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
            for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]();
            if (this.cleanups.length = 0, this.scopes) {
                for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
                this.scopes.length = 0
            }
            if (!this.detached && this.parent && !t) {
                const r = this.parent.scopes.pop();
                r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index)
            }
            this.parent = void 0
        }
    }
}

function Vl(e) {
    return new Bl(e)
}

function Oi() {
    return Me
}

function Xn(e, t = !1) {
    Me && Me.cleanups.push(e)
}
let ge;
const pr = new WeakSet;
class Ql {
    constructor(t) {
        this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Me && Me.active && Me.effects.push(this)
    }
    pause() {
        this.flags |= 64
    }
    resume() {
        this.flags & 64 && (this.flags &= -65, pr.has(this) && (pr.delete(this), this.trigger()))
    }
    notify() {
        this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Kl(this)
    }
    run() {
        if (!(this.flags & 1)) return this.fn();
        this.flags |= 2, lo(this), ql(this);
        const t = ge,
            n = it;
        ge = this, it = !0;
        try {
            return this.fn()
        } finally {
            Gl(this), ge = t, it = n, this.flags &= -3
        }
    }
    stop() {
        if (this.flags & 1) {
            for (let t = this.deps; t; t = t.nextDep) xi(t);
            this.deps = this.depsTail = void 0, lo(this), this.onStop && this.onStop(), this.flags &= -2
        }
    }
    trigger() {
        this.flags & 64 ? pr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
    }
    runIfDirty() {
        Br(this) && this.run()
    }
    get dirty() {
        return Br(this)
    }
}
let Wl = 0,
    Fn, In;

function Kl(e, t = !1) {
    if (e.flags |= 8, t) {
        e.next = In, In = e;
        return
    }
    e.next = Fn, Fn = e
}

function Ti() {
    Wl++
}

function Pi() {
    if (--Wl > 0) return;
    if (In) {
        let t = In;
        for (In = void 0; t;) {
            const n = t.next;
            t.next = void 0, t.flags &= -9, t = n
        }
    }
    let e;
    for (; Fn;) {
        let t = Fn;
        for (Fn = void 0; t;) {
            const n = t.next;
            if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
                t.trigger()
            } catch (s) {
                e || (e = s)
            }
            t = n
        }
    }
    if (e) throw e
}

function ql(e) {
    for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t
}

function Gl(e) {
    let t, n = e.depsTail,
        s = n;
    for (; s;) {
        const r = s.prevDep;
        s.version === -1 ? (s === n && (n = r), xi(s), Su(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r
    }
    e.deps = t, e.depsTail = n
}

function Br(e) {
    for (let t = e.deps; t; t = t.nextDep)
        if (t.dep.version !== t.version || t.dep.computed && (zl(t.dep.computed) || t.dep.version !== t.version)) return !0;
    return !!e._dirty
}

function zl(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Vn) || (e.globalVersion = Vn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Br(e)))) return;
    e.flags |= 2;
    const t = e.dep,
        n = ge,
        s = it;
    ge = e, it = !0;
    try {
        ql(e);
        const r = e.fn(e._value);
        (t.version === 0 || Ue(r, e._value)) && (e.flags |= 128, e._value = r, t.version++)
    } catch (r) {
        throw t.version++, r
    } finally {
        ge = n, it = s, Gl(e), e.flags &= -3
    }
}

function xi(e, t = !1) {
    const {
        dep: n,
        prevSub: s,
        nextSub: r
    } = e;
    if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
        n.computed.flags &= -5;
        for (let i = n.computed.deps; i; i = i.nextDep) xi(i, !0)
    }!t && !--n.sc && n.map && n.map.delete(n.key)
}

function Su(e) {
    const {
        prevDep: t,
        nextDep: n
    } = e;
    t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0)
}
let it = !0;
const Yl = [];

function St() {
    Yl.push(it), it = !1
}

function Et() {
    const e = Yl.pop();
    it = e === void 0 ? !0 : e
}

function lo(e) {
    const {
        cleanup: t
    } = e;
    if (e.cleanup = void 0, t) {
        const n = ge;
        ge = void 0;
        try {
            t()
        } finally {
            ge = n
        }
    }
}
let Vn = 0;
class Eu {
    constructor(t, n) {
        this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0
    }
}
class Gs {
    constructor(t) {
        this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0
    }
    track(t) {
        if (!ge || !it || ge === this.computed) return;
        let n = this.activeLink;
        if (n === void 0 || n.sub !== ge) n = this.activeLink = new Eu(ge, this), ge.deps ? (n.prevDep = ge.depsTail, ge.depsTail.nextDep = n, ge.depsTail = n) : ge.deps = ge.depsTail = n, Jl(n);
        else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
            const s = n.nextDep;
            s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = ge.depsTail, n.nextDep = void 0, ge.depsTail.nextDep = n, ge.depsTail = n, ge.deps === n && (ge.deps = s)
        }
        return n
    }
    trigger(t) {
        this.version++, Vn++, this.notify(t)
    }
    notify(t) {
        Ti();
        try {
            for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify()
        } finally {
            Pi()
        }
    }
}

function Jl(e) {
    if (e.dep.sc++, e.sub.flags & 4) {
        const t = e.dep.computed;
        if (t && !e.dep.subs) {
            t.flags |= 20;
            for (let s = t.deps; s; s = s.nextDep) Jl(s)
        }
        const n = e.dep.subs;
        n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e
    }
}
const xs = new WeakMap,
    Wt = Symbol(""),
    Vr = Symbol(""),
    Qn = Symbol("");

function ke(e, t, n) {
    if (it && ge) {
        let s = xs.get(e);
        s || xs.set(e, s = new Map);
        let r = s.get(n);
        r || (s.set(n, r = new Gs), r.map = s, r.key = n), r.track()
    }
}

function _t(e, t, n, s, r, i) {
    const o = xs.get(e);
    if (!o) {
        Vn++;
        return
    }
    const l = a => {
        a && a.trigger()
    };
    if (Ti(), t === "clear") o.forEach(l);
    else {
        const a = q(e),
            u = a && Si(n);
        if (a && n === "length") {
            const c = Number(s);
            o.forEach((f, h) => {
                (h === "length" || h === Qn || !ot(h) && h >= c) && l(f)
            })
        } else switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), u && l(o.get(Qn)), t) {
            case "add":
                a ? u && l(o.get("length")) : (l(o.get(Wt)), un(e) && l(o.get(Vr)));
                break;
            case "delete":
                a || (l(o.get(Wt)), un(e) && l(o.get(Vr)));
                break;
            case "set":
                un(e) && l(o.get(Wt));
                break
        }
    }
    Pi()
}

function Ou(e, t) {
    const n = xs.get(e);
    return n && n.get(t)
}

function nn(e) {
    const t = re(e);
    return t === e ? t : (ke(t, "iterate", Qn), Xe(e) ? t : t.map(Te))
}

function zs(e) {
    return ke(e = re(e), "iterate", Qn), e
}
const Tu = {
    __proto__: null,
    [Symbol.iterator]() {
        return gr(this, Symbol.iterator, Te)
    },
    concat(...e) {
        return nn(this).concat(...e.map(t => q(t) ? nn(t) : t))
    },
    entries() {
        return gr(this, "entries", e => (e[1] = Te(e[1]), e))
    },
    every(e, t) {
        return mt(this, "every", e, t, void 0, arguments)
    },
    filter(e, t) {
        return mt(this, "filter", e, t, n => n.map(Te), arguments)
    },
    find(e, t) {
        return mt(this, "find", e, t, Te, arguments)
    },
    findIndex(e, t) {
        return mt(this, "findIndex", e, t, void 0, arguments)
    },
    findLast(e, t) {
        return mt(this, "findLast", e, t, Te, arguments)
    },
    findLastIndex(e, t) {
        return mt(this, "findLastIndex", e, t, void 0, arguments)
    },
    forEach(e, t) {
        return mt(this, "forEach", e, t, void 0, arguments)
    },
    includes(...e) {
        return mr(this, "includes", e)
    },
    indexOf(...e) {
        return mr(this, "indexOf", e)
    },
    join(e) {
        return nn(this).join(e)
    },
    lastIndexOf(...e) {
        return mr(this, "lastIndexOf", e)
    },
    map(e, t) {
        return mt(this, "map", e, t, void 0, arguments)
    },
    pop() {
        return Tn(this, "pop")
    },
    push(...e) {
        return Tn(this, "push", e)
    },
    reduce(e, ...t) {
        return ao(this, "reduce", e, t)
    },
    reduceRight(e, ...t) {
        return ao(this, "reduceRight", e, t)
    },
    shift() {
        return Tn(this, "shift")
    },
    some(e, t) {
        return mt(this, "some", e, t, void 0, arguments)
    },
    splice(...e) {
        return Tn(this, "splice", e)
    },
    toReversed() {
        return nn(this).toReversed()
    },
    toSorted(e) {
        return nn(this).toSorted(e)
    },
    toSpliced(...e) {
        return nn(this).toSpliced(...e)
    },
    unshift(...e) {
        return Tn(this, "unshift", e)
    },
    values() {
        return gr(this, "values", Te)
    }
};

function gr(e, t, n) {
    const s = zs(e),
        r = s[t]();
    return s !== e && !Xe(e) && (r._next = r.next, r.next = () => {
        const i = r._next();
        return i.value && (i.value = n(i.value)), i
    }), r
}
const Pu = Array.prototype;

function mt(e, t, n, s, r, i) {
    const o = zs(e),
        l = o !== e && !Xe(e),
        a = o[t];
    if (a !== Pu[t]) {
        const f = a.apply(e, i);
        return l ? Te(f) : f
    }
    let u = n;
    o !== e && (l ? u = function(f, h) {
        return n.call(this, Te(f), h, e)
    } : n.length > 2 && (u = function(f, h) {
        return n.call(this, f, h, e)
    }));
    const c = a.call(o, u, s);
    return l && r ? r(c) : c
}

function ao(e, t, n, s) {
    const r = zs(e);
    let i = n;
    return r !== e && (Xe(e) ? n.length > 3 && (i = function(o, l, a) {
        return n.call(this, o, l, a, e)
    }) : i = function(o, l, a) {
        return n.call(this, o, Te(l), a, e)
    }), r[t](i, ...s)
}

function mr(e, t, n) {
    const s = re(e);
    ke(s, "iterate", Qn);
    const r = s[t](...n);
    return (r === -1 || r === !1) && Ai(n[0]) ? (n[0] = re(n[0]), s[t](...n)) : r
}

function Tn(e, t, n = []) {
    St(), Ti();
    const s = re(e)[t].apply(e, n);
    return Pi(), Et(), s
}
const xu = bi("__proto__,__v_isRef,__isVue"),
    Xl = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(ot));

function Au(e) {
    ot(e) || (e = String(e));
    const t = re(this);
    return ke(t, "has", e), t.hasOwnProperty(e)
}
class Zl {
    constructor(t = !1, n = !1) {
        this._isReadonly = t, this._isShallow = n
    }
    get(t, n, s) {
        if (n === "__v_skip") return t.__v_skip;
        const r = this._isReadonly,
            i = this._isShallow;
        if (n === "__v_isReactive") return !r;
        if (n === "__v_isReadonly") return r;
        if (n === "__v_isShallow") return i;
        if (n === "__v_raw") return s === (r ? i ? ia : ra : i ? sa : na).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
        const o = q(t);
        if (!r) {
            let a;
            if (o && (a = Tu[n])) return a;
            if (n === "hasOwnProperty") return Au
        }
        const l = Reflect.get(t, n, he(t) ? t : s);
        return (ot(n) ? Xl.has(n) : xu(n)) || (r || ke(t, "get", n), i) ? l : he(l) ? o && Si(n) ? l : l.value : de(l) ? r ? Xs(l) : Zn(l) : l
    }
}
class ea extends Zl {
    constructor(t = !1) {
        super(!1, t)
    }
    set(t, n, s, r) {
        let i = t[n];
        if (!this._isShallow) {
            const a = Ht(i);
            if (!Xe(s) && !Ht(s) && (i = re(i), s = re(s)), !q(t) && he(i) && !he(s)) return a ? !1 : (i.value = s, !0)
        }
        const o = q(t) && Si(n) ? Number(n) < t.length : ce(t, n),
            l = Reflect.set(t, n, s, he(t) ? t : r);
        return t === re(r) && (o ? Ue(s, i) && _t(t, "set", n, s) : _t(t, "add", n, s)), l
    }
    deleteProperty(t, n) {
        const s = ce(t, n);
        t[n];
        const r = Reflect.deleteProperty(t, n);
        return r && s && _t(t, "delete", n, void 0), r
    }
    has(t, n) {
        const s = Reflect.has(t, n);
        return (!ot(n) || !Xl.has(n)) && ke(t, "has", n), s
    }
    ownKeys(t) {
        return ke(t, "iterate", q(t) ? "length" : Wt), Reflect.ownKeys(t)
    }
}
class ta extends Zl {
    constructor(t = !1) {
        super(!0, t)
    }
    set(t, n) {
        return !0
    }
    deleteProperty(t, n) {
        return !0
    }
}
const Ru = new ea,
    Mu = new ta,
    ku = new ea(!0),
    Fu = new ta(!0),
    Qr = e => e,
    is = e => Reflect.getPrototypeOf(e);

function Iu(e, t, n) {
    return function(...s) {
        const r = this.__v_raw,
            i = re(r),
            o = un(i),
            l = e === "entries" || e === Symbol.iterator && o,
            a = e === "keys" && o,
            u = r[e](...s),
            c = n ? Qr : t ? As : Te;
        return !t && ke(i, "iterate", a ? Vr : Wt), {
            next() {
                const {
                    value: f,
                    done: h
                } = u.next();
                return h ? {
                    value: f,
                    done: h
                } : {
                    value: l ? [c(f[0]), c(f[1])] : c(f),
                    done: h
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}

function os(e) {
    return function(...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}

function Du(e, t) {
    const n = {
        get(r) {
            const i = this.__v_raw,
                o = re(i),
                l = re(r);
            e || (Ue(r, l) && ke(o, "get", r), ke(o, "get", l));
            const {
                has: a
            } = is(o), u = t ? Qr : e ? As : Te;
            if (a.call(o, r)) return u(i.get(r));
            if (a.call(o, l)) return u(i.get(l));
            i !== o && i.get(r)
        },
        get size() {
            const r = this.__v_raw;
            return !e && ke(re(r), "iterate", Wt), Reflect.get(r, "size", r)
        },
        has(r) {
            const i = this.__v_raw,
                o = re(i),
                l = re(r);
            return e || (Ue(r, l) && ke(o, "has", r), ke(o, "has", l)), r === l ? i.has(r) : i.has(r) || i.has(l)
        },
        forEach(r, i) {
            const o = this,
                l = o.__v_raw,
                a = re(l),
                u = t ? Qr : e ? As : Te;
            return !e && ke(a, "iterate", Wt), l.forEach((c, f) => r.call(i, u(c), u(f), o))
        }
    };
    return Ee(n, e ? {
        add: os("add"),
        set: os("set"),
        delete: os("delete"),
        clear: os("clear")
    } : {
        add(r) {
            !t && !Xe(r) && !Ht(r) && (r = re(r));
            const i = re(this);
            return is(i).has.call(i, r) || (i.add(r), _t(i, "add", r, r)), this
        },
        set(r, i) {
            !t && !Xe(i) && !Ht(i) && (i = re(i));
            const o = re(this),
                {
                    has: l,
                    get: a
                } = is(o);
            let u = l.call(o, r);
            u || (r = re(r), u = l.call(o, r));
            const c = a.call(o, r);
            return o.set(r, i), u ? Ue(i, c) && _t(o, "set", r, i) : _t(o, "add", r, i), this
        },
        delete(r) {
            const i = re(this),
                {
                    has: o,
                    get: l
                } = is(i);
            let a = o.call(i, r);
            a || (r = re(r), a = o.call(i, r)), l && l.call(i, r);
            const u = i.delete(r);
            return a && _t(i, "delete", r, void 0), u
        },
        clear() {
            const r = re(this),
                i = r.size !== 0,
                o = r.clear();
            return i && _t(r, "clear", void 0, void 0), o
        }
    }), ["keys", "values", "entries", Symbol.iterator].forEach(r => {
        n[r] = Iu(r, e, t)
    }), n
}

function Ys(e, t) {
    const n = Du(e, t);
    return (s, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(ce(n, r) && r in s ? n : s, r, i)
}
const Lu = {
        get: Ys(!1, !1)
    },
    Hu = {
        get: Ys(!1, !0)
    },
    ju = {
        get: Ys(!0, !1)
    },
    Nu = {
        get: Ys(!0, !0)
    },
    na = new WeakMap,
    sa = new WeakMap,
    ra = new WeakMap,
    ia = new WeakMap;

function $u(e) {
    switch (e) {
        case "Object":
        case "Array":
            return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2;
        default:
            return 0
    }
}

function Uu(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : $u(hu(e))
}

function Zn(e) {
    return Ht(e) ? e : Zs(e, !1, Ru, Lu, na)
}

function Js(e) {
    return Zs(e, !1, ku, Hu, sa)
}

function Xs(e) {
    return Zs(e, !0, Mu, ju, ra)
}

function oa(e) {
    return Zs(e, !0, Fu, Nu, ia)
}

function Zs(e, t, n, s, r) {
    if (!de(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const i = Uu(e);
    if (i === 0) return e;
    const o = r.get(e);
    if (o) return o;
    const l = new Proxy(e, i === 2 ? s : n);
    return r.set(e, l), l
}

function gt(e) {
    return Ht(e) ? gt(e.__v_raw) : !!(e && e.__v_isReactive)
}

function Ht(e) {
    return !!(e && e.__v_isReadonly)
}

function Xe(e) {
    return !!(e && e.__v_isShallow)
}

function Ai(e) {
    return e ? !!e.__v_raw : !1
}

function re(e) {
    const t = e && e.__v_raw;
    return t ? re(t) : e
}

function Ri(e) {
    return !ce(e, "__v_skip") && Object.isExtensible(e) && Ur(e, "__v_skip", !0), e
}
const Te = e => de(e) ? Zn(e) : e,
    As = e => de(e) ? Xs(e) : e;

function he(e) {
    return e ? e.__v_isRef === !0 : !1
}

function Ae(e) {
    return la(e, !1)
}

function te(e) {
    return la(e, !0)
}

function la(e, t) {
    return he(e) ? e : new Bu(e, t)
}
class Bu {
    constructor(t, n) {
        this.dep = new Gs, this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : re(t), this._value = n ? t : Te(t), this.__v_isShallow = n
    }
    get value() {
        return this.dep.track(), this._value
    }
    set value(t) {
        const n = this._rawValue,
            s = this.__v_isShallow || Xe(t) || Ht(t);
        t = s ? t : re(t), Ue(t, n) && (this._rawValue = t, this._value = s ? t : Te(t), this.dep.trigger())
    }
}

function Ze(e) {
    return he(e) ? e.value : e
}

function Y(e) {
    return Z(e) ? e() : Ze(e)
}
const Vu = {
    get: (e, t, n) => t === "__v_raw" ? e : Ze(Reflect.get(e, t, n)),
    set: (e, t, n, s) => {
        const r = e[t];
        return he(r) && !he(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s)
    }
};

function aa(e) {
    return gt(e) ? e : new Proxy(e, Vu)
}
class Qu {
    constructor(t) {
        this.__v_isRef = !0, this._value = void 0;
        const n = this.dep = new Gs,
            {
                get: s,
                set: r
            } = t(n.track.bind(n), n.trigger.bind(n));
        this._get = s, this._set = r
    }
    get value() {
        return this._value = this._get()
    }
    set value(t) {
        this._set(t)
    }
}

function Mi(e) {
    return new Qu(e)
}

function er(e) {
    const t = q(e) ? new Array(e.length) : {};
    for (const n in e) t[n] = ua(e, n);
    return t
}
class Wu {
    constructor(t, n, s) {
        this._object = t, this._key = n, this._defaultValue = s, this.__v_isRef = !0, this._value = void 0
    }
    get value() {
        const t = this._object[this._key];
        return this._value = t === void 0 ? this._defaultValue : t
    }
    set value(t) {
        this._object[this._key] = t
    }
    get dep() {
        return Ou(re(this._object), this._key)
    }
}
class Ku {
    constructor(t) {
        this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0
    }
    get value() {
        return this._value = this._getter()
    }
}

function ca(e, t, n) {
    return he(e) ? e : Z(e) ? new Ku(e) : de(e) && arguments.length > 1 ? ua(e, t, n) : Ae(e)
}

function ua(e, t, n) {
    const s = e[t];
    return he(s) ? s : new Wu(e, t, n)
}
class qu {
    constructor(t, n, s) {
        this.fn = t, this.setter = n, this._value = void 0, this.dep = new Gs(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Vn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s
    }
    notify() {
        if (this.flags |= 16, !(this.flags & 8) && ge !== this) return Kl(this, !0), !0
    }
    get value() {
        const t = this.dep.track();
        return zl(this), t && (t.version = this.dep.version), this._value
    }
    set value(t) {
        this.setter && this.setter(t)
    }
}

function Gu(e, t, n = !1) {
    let s, r;
    return Z(e) ? s = e : (s = e.get, r = e.set), new qu(s, r, n)
}
const ls = {},
    Rs = new WeakMap;
let Qt;

function zu(e, t = !1, n = Qt) {
    if (n) {
        let s = Rs.get(n);
        s || Rs.set(n, s = []), s.push(e)
    }
}

function Yu(e, t, n = oe) {
    const {
        immediate: s,
        deep: r,
        once: i,
        scheduler: o,
        augmentJob: l,
        call: a
    } = n, u = C => r ? C : Xe(C) || r === !1 || r === 0 ? wt(C, 1) : wt(C);
    let c, f, h, d, p = !1,
        g = !1;
    if (he(e) ? (f = () => e.value, p = Xe(e)) : gt(e) ? (f = () => u(e), p = !0) : q(e) ? (g = !0, p = e.some(C => gt(C) || Xe(C)), f = () => e.map(C => {
            if (he(C)) return C.value;
            if (gt(C)) return u(C);
            if (Z(C)) return a ? a(C, 2) : C()
        })) : Z(e) ? t ? f = a ? () => a(e, 2) : e : f = () => {
            if (h) {
                St();
                try {
                    h()
                } finally {
                    Et()
                }
            }
            const C = Qt;
            Qt = c;
            try {
                return a ? a(e, 3, [d]) : e(d)
            } finally {
                Qt = C
            }
        } : f = pt, t && r) {
        const C = f,
            S = r === !0 ? 1 / 0 : r;
        f = () => wt(C(), S)
    }
    const _ = Oi(),
        v = () => {
            c.stop(), _ && _.active && wi(_.effects, c)
        };
    if (i && t) {
        const C = t;
        t = (...S) => {
            C(...S), v()
        }
    }
    let w = g ? new Array(e.length).fill(ls) : ls;
    const y = C => {
        if (!(!(c.flags & 1) || !c.dirty && !C))
            if (t) {
                const S = c.run();
                if (r || p || (g ? S.some((A, O) => Ue(A, w[O])) : Ue(S, w))) {
                    h && h();
                    const A = Qt;
                    Qt = c;
                    try {
                        const O = [S, w === ls ? void 0 : g && w[0] === ls ? [] : w, d];
                        w = S, a ? a(t, 3, O) : t(...O)
                    } finally {
                        Qt = A
                    }
                }
            } else c.run()
    };
    return l && l(y), c = new Ql(f), c.scheduler = o ? () => o(y, !1) : y, d = C => zu(C, !1, c), h = c.onStop = () => {
        const C = Rs.get(c);
        if (C) {
            if (a) a(C, 4);
            else
                for (const S of C) S();
            Rs.delete(c)
        }
    }, t ? s ? y(!0) : w = c.run() : o ? o(y.bind(null, !0), !0) : c.run(), v.pause = c.pause.bind(c), v.resume = c.resume.bind(c), v.stop = v, v
}

function wt(e, t = 1 / 0, n) {
    if (t <= 0 || !de(e) || e.__v_skip || (n = n || new Set, n.has(e))) return e;
    if (n.add(e), t--, he(e)) wt(e.value, t, n);
    else if (q(e))
        for (let s = 0; s < e.length; s++) wt(e[s], t, n);
    else if (Cn(e) || un(e)) e.forEach(s => {
        wt(s, t, n)
    });
    else if (Hl(e)) {
        for (const s in e) wt(e[s], t, n);
        for (const s of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, s) && wt(e[s], t, n)
    }
    return e
}

function es(e, t, n, s) {
    try {
        return s ? e(...s) : e()
    } catch (r) {
        Sn(r, t, n)
    }
}

function lt(e, t, n, s) {
    if (Z(e)) {
        const r = es(e, t, n, s);
        return r && Ci(r) && r.catch(i => {
            Sn(i, t, n)
        }), r
    }
    if (q(e)) {
        const r = [];
        for (let i = 0; i < e.length; i++) r.push(lt(e[i], t, n, s));
        return r
    }
}

function Sn(e, t, n, s = !0) {
    const r = t ? t.vnode : null,
        {
            errorHandler: i,
            throwUnhandledErrorInProduction: o
        } = t && t.appContext.config || oe;
    if (t) {
        let l = t.parent;
        const a = t.proxy,
            u = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; l;) {
            const c = l.ec;
            if (c) {
                for (let f = 0; f < c.length; f++)
                    if (c[f](e, a, u) === !1) return
            }
            l = l.parent
        }
        if (i) {
            St(), es(i, null, 10, [e, a, u]), Et();
            return
        }
    }
    Ju(e, n, r, s, o)
}

function Ju(e, t, n, s = !0, r = !1) {
    if (r) throw e;
    console.error(e)
}
const De = [];
let ft = -1;
const hn = [];
let kt = null,
    on = 0;
const fa = Promise.resolve();
let Ms = null;

function tt(e) {
    const t = Ms || fa;
    return e ? t.then(this ? e.bind(this) : e) : t
}

function Xu(e) {
    let t = ft + 1,
        n = De.length;
    for (; t < n;) {
        const s = t + n >>> 1,
            r = De[s],
            i = Wn(r);
        i < e || i === e && r.flags & 2 ? t = s + 1 : n = s
    }
    return t
}

function ki(e) {
    if (!(e.flags & 1)) {
        const t = Wn(e),
            n = De[De.length - 1];
        !n || !(e.flags & 2) && t >= Wn(n) ? De.push(e) : De.splice(Xu(t), 0, e), e.flags |= 1, ha()
    }
}

function ha() {
    Ms || (Ms = fa.then(da))
}

function Wr(e) {
    q(e) ? hn.push(...e) : kt && e.id === -1 ? kt.splice(on + 1, 0, e) : e.flags & 1 || (hn.push(e), e.flags |= 1), ha()
}

function co(e, t, n = ft + 1) {
    for (; n < De.length; n++) {
        const s = De[n];
        if (s && s.flags & 2) {
            if (e && s.id !== e.uid) continue;
            De.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2)
        }
    }
}

function ks(e) {
    if (hn.length) {
        const t = [...new Set(hn)].sort((n, s) => Wn(n) - Wn(s));
        if (hn.length = 0, kt) {
            kt.push(...t);
            return
        }
        for (kt = t, on = 0; on < kt.length; on++) {
            const n = kt[on];
            n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2
        }
        kt = null, on = 0
    }
}
const Wn = e => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;

function da(e) {
    try {
        for (ft = 0; ft < De.length; ft++) {
            const t = De[ft];
            t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), es(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2))
        }
    } finally {
        for (; ft < De.length; ft++) {
            const t = De[ft];
            t && (t.flags &= -2)
        }
        ft = -1, De.length = 0, ks(), Ms = null, (De.length || hn.length) && da()
    }
}
let xe = null,
    pa = null;

function Fs(e) {
    const t = xe;
    return xe = e, pa = e && e.type.__scopeId || null, t
}

function Zu(e, t = xe, n) {
    if (!t || e._n) return e;
    const s = (...r) => {
        s._d && Oo(-1);
        const i = Fs(t);
        let o;
        try {
            o = e(...r)
        } finally {
            Fs(i), s._d && Oo(1)
        }
        return o
    };
    return s._n = !0, s._c = !0, s._d = !0, s
}

function Mg(e, t) {
    if (xe === null) return e;
    const n = or(xe),
        s = e.dirs || (e.dirs = []);
    for (let r = 0; r < t.length; r++) {
        let [i, o, l, a = oe] = t[r];
        i && (Z(i) && (i = {
            mounted: i,
            updated: i
        }), i.deep && wt(o), s.push({
            dir: i,
            instance: n,
            value: o,
            oldValue: void 0,
            arg: l,
            modifiers: a
        }))
    }
    return e
}

function ht(e, t, n, s) {
    const r = e.dirs,
        i = t && t.dirs;
    for (let o = 0; o < r.length; o++) {
        const l = r[o];
        i && (l.oldValue = i[o].value);
        let a = l.dir[s];
        a && (St(), lt(a, n, 8, [e.el, l, e, t]), Et())
    }
}
const ga = Symbol("_vte"),
    ma = e => e.__isTeleport,
    Dn = e => e && (e.disabled || e.disabled === ""),
    uo = e => e && (e.defer || e.defer === ""),
    fo = e => typeof SVGElement < "u" && e instanceof SVGElement,
    ho = e => typeof MathMLElement == "function" && e instanceof MathMLElement,
    Kr = (e, t) => {
        const n = e && e.to;
        return be(n) ? t ? t(n) : null : n
    },
    ya = {
        name: "Teleport",
        __isTeleport: !0,
        process(e, t, n, s, r, i, o, l, a, u) {
            const {
                mc: c,
                pc: f,
                pbc: h,
                o: {
                    insert: d,
                    querySelector: p,
                    createText: g,
                    createComment: _
                }
            } = u, v = Dn(t.props);
            let {
                shapeFlag: w,
                children: y,
                dynamicChildren: C
            } = t;
            if (e == null) {
                const S = t.el = g(""),
                    A = t.anchor = g("");
                d(S, n, s), d(A, n, s);
                const O = (E, x) => {
                        w & 16 && (r && r.isCE && (r.ce._teleportTarget = E), c(y, E, x, r, i, o, l, a))
                    },
                    P = () => {
                        const E = t.target = Kr(t.props, p),
                            x = va(E, t, g, d);
                        E && (o !== "svg" && fo(E) ? o = "svg" : o !== "mathml" && ho(E) && (o = "mathml"), v || (O(E, x), ys(t, !1)))
                    };
                v && (O(n, A), ys(t, !0)), uo(t.props) ? (t.el.__isMounted = !1, Ie(() => {
                    P(), delete t.el.__isMounted
                }, i)) : P()
            } else {
                if (uo(t.props) && e.el.__isMounted === !1) {
                    Ie(() => {
                        ya.process(e, t, n, s, r, i, o, l, a, u)
                    }, i);
                    return
                }
                t.el = e.el, t.targetStart = e.targetStart;
                const S = t.anchor = e.anchor,
                    A = t.target = e.target,
                    O = t.targetAnchor = e.targetAnchor,
                    P = Dn(e.props),
                    E = P ? n : A,
                    x = P ? S : O;
                if (o === "svg" || fo(A) ? o = "svg" : (o === "mathml" || ho(A)) && (o = "mathml"), C ? (h(e.dynamicChildren, C, E, r, i, o, l), Ui(e, t, !0)) : a || f(e, t, E, x, r, i, o, l, !1), v) P ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : as(t, n, S, u, 1);
                else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                    const H = t.target = Kr(t.props, p);
                    H && as(t, H, null, u, 0)
                } else P && as(t, A, O, u, 1);
                ys(t, v)
            }
        },
        remove(e, t, n, {
            um: s,
            o: {
                remove: r
            }
        }, i) {
            const {
                shapeFlag: o,
                children: l,
                anchor: a,
                targetStart: u,
                targetAnchor: c,
                target: f,
                props: h
            } = e;
            if (f && (r(u), r(c)), i && r(a), o & 16) {
                const d = i || !Dn(h);
                for (let p = 0; p < l.length; p++) {
                    const g = l[p];
                    s(g, t, n, d, !!g.dynamicChildren)
                }
            }
        },
        move: as,
        hydrate: ef
    };

function as(e, t, n, {
    o: {
        insert: s
    },
    m: r
}, i = 2) {
    i === 0 && s(e.targetAnchor, t, n);
    const {
        el: o,
        anchor: l,
        shapeFlag: a,
        children: u,
        props: c
    } = e, f = i === 2;
    if (f && s(o, t, n), (!f || Dn(c)) && a & 16)
        for (let h = 0; h < u.length; h++) r(u[h], t, n, 2);
    f && s(l, t, n)
}

function ef(e, t, n, s, r, i, {
    o: {
        nextSibling: o,
        parentNode: l,
        querySelector: a,
        insert: u,
        createText: c
    }
}, f) {
    const h = t.target = Kr(t.props, a);
    if (h) {
        const d = Dn(t.props),
            p = h._lpa || h.firstChild;
        if (t.shapeFlag & 16)
            if (d) t.anchor = f(o(e), t, l(e), n, s, r, i), t.targetStart = p, t.targetAnchor = p && o(p);
            else {
                t.anchor = o(e);
                let g = p;
                for (; g;) {
                    if (g && g.nodeType === 8) {
                        if (g.data === "teleport start anchor") t.targetStart = g;
                        else if (g.data === "teleport anchor") {
                            t.targetAnchor = g, h._lpa = t.targetAnchor && o(t.targetAnchor);
                            break
                        }
                    }
                    g = o(g)
                }
                t.targetAnchor || va(h, t, c, u), f(p && o(p), t, h, n, s, r, i)
            }
        ys(t, d)
    }
    return t.anchor && o(t.anchor)
}
const kg = ya;

function ys(e, t) {
    const n = e.ctx;
    if (n && n.ut) {
        let s, r;
        for (t ? (s = e.el, r = e.anchor) : (s = e.targetStart, r = e.targetAnchor); s && s !== r;) s.nodeType === 1 && s.setAttribute("data-v-owner", n.uid), s = s.nextSibling;
        n.ut()
    }
}

function va(e, t, n, s) {
    const r = t.targetStart = n(""),
        i = t.targetAnchor = n("");
    return r[ga] = i, e && (s(r, e), s(i, e)), i
}
const Ft = Symbol("_leaveCb"),
    cs = Symbol("_enterCb");

function tf() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return nr(() => {
        e.isMounted = !0
    }), Di(() => {
        e.isUnmounting = !0
    }), e
}
const ze = [Function, Array],
    ba = {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        onBeforeEnter: ze,
        onEnter: ze,
        onAfterEnter: ze,
        onEnterCancelled: ze,
        onBeforeLeave: ze,
        onLeave: ze,
        onAfterLeave: ze,
        onLeaveCancelled: ze,
        onBeforeAppear: ze,
        onAppear: ze,
        onAfterAppear: ze,
        onAppearCancelled: ze
    },
    _a = e => {
        const t = e.subTree;
        return t.component ? _a(t.component) : t
    },
    nf = {
        name: "BaseTransition",
        props: ba,
        setup(e, {
            slots: t
        }) {
            const n = nt(),
                s = tf();
            return () => {
                const r = t.default && Sa(t.default(), !0);
                if (!r || !r.length) return;
                const i = wa(r),
                    o = re(e),
                    {
                        mode: l
                    } = o;
                if (s.isLeaving) return yr(i);
                const a = po(i);
                if (!a) return yr(i);
                let u = qr(a, o, s, n, f => u = f);
                a.type !== Se && Kn(a, u);
                let c = n.subTree && po(n.subTree);
                if (c && c.type !== Se && !dt(a, c) && _a(n).type !== Se) {
                    let f = qr(c, o, s, n);
                    if (Kn(c, f), l === "out-in" && a.type !== Se) return s.isLeaving = !0, f.afterLeave = () => {
                        s.isLeaving = !1, n.job.flags & 8 || n.update(), delete f.afterLeave, c = void 0
                    }, yr(i);
                    l === "in-out" && a.type !== Se ? f.delayLeave = (h, d, p) => {
                        const g = Ca(s, c);
                        g[String(c.key)] = c, h[Ft] = () => {
                            d(), h[Ft] = void 0, delete u.delayedLeave, c = void 0
                        }, u.delayedLeave = () => {
                            p(), delete u.delayedLeave, c = void 0
                        }
                    } : c = void 0
                } else c && (c = void 0);
                return i
            }
        }
    };

function wa(e) {
    let t = e[0];
    if (e.length > 1) {
        for (const n of e)
            if (n.type !== Se) {
                t = n;
                break
            }
    }
    return t
}
const sf = nf;

function Ca(e, t) {
    const {
        leavingVNodes: n
    } = e;
    let s = n.get(t.type);
    return s || (s = Object.create(null), n.set(t.type, s)), s
}

function qr(e, t, n, s, r) {
    const {
        appear: i,
        mode: o,
        persisted: l = !1,
        onBeforeEnter: a,
        onEnter: u,
        onAfterEnter: c,
        onEnterCancelled: f,
        onBeforeLeave: h,
        onLeave: d,
        onAfterLeave: p,
        onLeaveCancelled: g,
        onBeforeAppear: _,
        onAppear: v,
        onAfterAppear: w,
        onAppearCancelled: y
    } = t, C = String(e.key), S = Ca(n, e), A = (E, x) => {
        E && lt(E, s, 9, x)
    }, O = (E, x) => {
        const H = x[1];
        A(E, x), q(E) ? E.every(k => k.length <= 1) && H() : E.length <= 1 && H()
    }, P = {
        mode: o,
        persisted: l,
        beforeEnter(E) {
            let x = a;
            if (!n.isMounted)
                if (i) x = _ || a;
                else return;
            E[Ft] && E[Ft](!0);
            const H = S[C];
            H && dt(e, H) && H.el[Ft] && H.el[Ft](), A(x, [E])
        },
        enter(E) {
            let x = u,
                H = c,
                k = f;
            if (!n.isMounted)
                if (i) x = v || u, H = w || c, k = y || f;
                else return;
            let W = !1;
            const V = E[cs] = X => {
                W || (W = !0, X ? A(k, [E]) : A(H, [E]), P.delayedLeave && P.delayedLeave(), E[cs] = void 0)
            };
            x ? O(x, [E, V]) : V()
        },
        leave(E, x) {
            const H = String(e.key);
            if (E[cs] && E[cs](!0), n.isUnmounting) return x();
            A(h, [E]);
            let k = !1;
            const W = E[Ft] = V => {
                k || (k = !0, x(), V ? A(g, [E]) : A(p, [E]), E[Ft] = void 0, S[H] === e && delete S[H])
            };
            S[H] = e, d ? O(d, [E, W]) : W()
        },
        clone(E) {
            const x = qr(E, t, n, s, r);
            return r && r(x), x
        }
    };
    return P
}

function yr(e) {
    if (ts(e)) return e = jt(e), e.children = null, e
}

function po(e) {
    if (!ts(e)) return ma(e.type) && e.children ? wa(e.children) : e;
    if (e.component) return e.component.subTree;
    const {
        shapeFlag: t,
        children: n
    } = e;
    if (n) {
        if (t & 16) return n[0];
        if (t & 32 && Z(n.default)) return n.default()
    }
}

function Kn(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t, Kn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}

function Sa(e, t = !1, n) {
    let s = [],
        r = 0;
    for (let i = 0; i < e.length; i++) {
        let o = e[i];
        const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
        o.type === Le ? (o.patchFlag & 128 && r++, s = s.concat(Sa(o.children, t, l))) : (t || o.type !== Se) && s.push(l != null ? jt(o, {
            key: l
        }) : o)
    }
    if (r > 1)
        for (let i = 0; i < s.length; i++) s[i].patchFlag = -2;
    return s
}

function Fi(e, t) {
    return Z(e) ? Ee({
        name: e.name
    }, t, {
        setup: e
    }) : e
}

function Ii(e) {
    e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0]
}

function Fg(e) {
    const t = nt(),
        n = te(null);
    if (t) {
        const r = t.refs === oe ? t.refs = {} : t.refs;
        Object.defineProperty(r, e, {
            enumerable: !0,
            get: () => n.value,
            set: i => n.value = i
        })
    }
    return n
}

function dn(e, t, n, s, r = !1) {
    if (q(e)) {
        e.forEach((p, g) => dn(p, t && (q(t) ? t[g] : t), n, s, r));
        return
    }
    if (Kt(s) && !r) {
        s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && dn(e, t, n, s.component.subTree);
        return
    }
    const i = s.shapeFlag & 4 ? or(s.component) : s.el,
        o = r ? null : i,
        {
            i: l,
            r: a
        } = e,
        u = t && t.r,
        c = l.refs === oe ? l.refs = {} : l.refs,
        f = l.setupState,
        h = re(f),
        d = f === oe ? () => !1 : p => ce(h, p);
    if (u != null && u !== a && (be(u) ? (c[u] = null, d(u) && (f[u] = null)) : he(u) && (u.value = null)), Z(a)) es(a, l, 12, [o, c]);
    else {
        const p = be(a),
            g = he(a);
        if (p || g) {
            const _ = () => {
                if (e.f) {
                    const v = p ? d(a) ? f[a] : c[a] : a.value;
                    r ? q(v) && wi(v, i) : q(v) ? v.includes(i) || v.push(i) : p ? (c[a] = [i], d(a) && (f[a] = c[a])) : (a.value = [i], e.k && (c[e.k] = a.value))
                } else p ? (c[a] = o, d(a) && (f[a] = o)) : g && (a.value = o, e.k && (c[e.k] = o))
            };
            o ? (_.id = -1, Ie(_, n)) : _()
        }
    }
}
let go = !1;
const sn = () => {
        go || (console.error("Hydration completed but contains mismatches."), go = !0)
    },
    rf = e => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject",
    of = e => e.namespaceURI.includes("MathML"),
    us = e => {
        if (e.nodeType === 1) {
            if (rf(e)) return "svg";
            if ( of (e)) return "mathml"
        }
    },
    ln = e => e.nodeType === 8;

function lf(e) {
    const {
        mt: t,
        p: n,
        o: {
            patchProp: s,
            createText: r,
            nextSibling: i,
            parentNode: o,
            remove: l,
            insert: a,
            createComment: u
        }
    } = e, c = (y, C) => {
        if (!C.hasChildNodes()) {
            n(null, y, C), ks(), C._vnode = y;
            return
        }
        f(C.firstChild, y, null, null, null), ks(), C._vnode = y
    }, f = (y, C, S, A, O, P = !1) => {
        P = P || !!C.dynamicChildren;
        const E = ln(y) && y.data === "[",
            x = () => g(y, C, S, A, O, E),
            {
                type: H,
                ref: k,
                shapeFlag: W,
                patchFlag: V
            } = C;
        let X = y.nodeType;
        C.el = y, V === -2 && (P = !1, C.dynamicChildren = null);
        let L = null;
        switch (H) {
            case Gt:
                X !== 3 ? C.children === "" ? (a(C.el = r(""), o(y), y), L = y) : L = x() : (y.data !== C.children && (sn(), y.data = C.children), L = i(y));
                break;
            case Se:
                w(y) ? (L = i(y), v(C.el = y.content.firstChild, y, S)) : X !== 8 || E ? L = x() : L = i(y);
                break;
            case Hn:
                if (E && (y = i(y), X = y.nodeType), X === 1 || X === 3) {
                    L = y;
                    const ne = !C.children.length;
                    for (let K = 0; K < C.staticCount; K++) ne && (C.children += L.nodeType === 1 ? L.outerHTML : L.data), K === C.staticCount - 1 && (C.anchor = L), L = i(L);
                    return E ? i(L) : L
                } else x();
                break;
            case Le:
                E ? L = p(y, C, S, A, O, P) : L = x();
                break;
            default:
                if (W & 1)(X !== 1 || C.type.toLowerCase() !== y.tagName.toLowerCase()) && !w(y) ? L = x() : L = h(y, C, S, A, O, P);
                else if (W & 6) {
                    C.slotScopeIds = O;
                    const ne = o(y);
                    if (E ? L = _(y) : ln(y) && y.data === "teleport start" ? L = _(y, y.data, "teleport end") : L = i(y), t(C, ne, null, S, A, us(ne), P), Kt(C) && !C.type.__asyncResolved) {
                        let K;
                        E ? (K = Ce(Le), K.anchor = L ? L.previousSibling : ne.lastChild) : K = y.nodeType === 3 ? tc("") : Ce("div"), K.el = y, C.component.subTree = K
                    }
                } else W & 64 ? X !== 8 ? L = x() : L = C.type.hydrate(y, C, S, A, O, P, e, d) : W & 128 && (L = C.type.hydrate(y, C, S, A, us(o(y)), O, P, e, f))
        }
        return k != null && dn(k, null, A, C), L
    }, h = (y, C, S, A, O, P) => {
        P = P || !!C.dynamicChildren;
        const {
            type: E,
            props: x,
            patchFlag: H,
            shapeFlag: k,
            dirs: W,
            transition: V
        } = C, X = E === "input" || E === "option";
        if (X || H !== -1) {
            W && ht(C, null, S, "created");
            let L = !1;
            if (w(y)) {
                L = Ba(null, V) && S && S.vnode.props && S.vnode.props.appear;
                const K = y.content.firstChild;
                if (L) {
                    const we = K.getAttribute("class");
                    we && (K.$cls = we), V.beforeEnter(K)
                }
                v(K, y, S), C.el = y = K
            }
            if (k & 16 && !(x && (x.innerHTML || x.textContent))) {
                let K = d(y.firstChild, C, y, S, A, O, P);
                for (; K;) {
                    fs(y, 1) || sn();
                    const we = K;
                    K = K.nextSibling, l(we)
                }
            } else if (k & 8) {
                let K = C.children;
                K[0] === `
` && (y.tagName === "PRE" || y.tagName === "TEXTAREA") && (K = K.slice(1)), y.textContent !== K && (fs(y, 0) || sn(), y.textContent = C.children)
            }
            if (x) {
                if (X || !P || H & 48) {
                    const K = y.tagName.includes("-");
                    for (const we in x)(X && (we.endsWith("value") || we === "indeterminate") || Yn(we) && !fn(we) || we[0] === "." || K) && s(y, we, null, x[we], void 0, S)
                } else if (x.onClick) s(y, "onClick", null, x.onClick, void 0, S);
                else if (H & 4 && gt(x.style))
                    for (const K in x.style) x.style[K]
            }
            let ne;
            (ne = x && x.onVnodeBeforeMount) && Ye(ne, S, C), W && ht(C, null, S, "beforeMount"), ((ne = x && x.onVnodeMounted) || W || L) && Ya(() => {
                ne && Ye(ne, S, C), L && V.enter(y), W && ht(C, null, S, "mounted")
            }, A)
        }
        return y.nextSibling
    }, d = (y, C, S, A, O, P, E) => {
        E = E || !!C.dynamicChildren;
        const x = C.children,
            H = x.length;
        for (let k = 0; k < H; k++) {
            const W = E ? x[k] : x[k] = Ke(x[k]),
                V = W.type === Gt;
            y ? (V && !E && k + 1 < H && Ke(x[k + 1]).type === Gt && (a(r(y.data.slice(W.children.length)), S, i(y)), y.data = W.children), y = f(y, W, A, O, P, E)) : V && !W.children ? a(W.el = r(""), S) : (fs(S, 1) || sn(), n(null, W, S, null, A, O, us(S), P))
        }
        return y
    }, p = (y, C, S, A, O, P) => {
        const {
            slotScopeIds: E
        } = C;
        E && (O = O ? O.concat(E) : E);
        const x = o(y),
            H = d(i(y), C, x, S, A, O, P);
        return H && ln(H) && H.data === "]" ? i(C.anchor = H) : (sn(), a(C.anchor = u("]"), x, H), H)
    }, g = (y, C, S, A, O, P) => {
        if (fs(y.parentElement, 1) || sn(), C.el = null, P) {
            const H = _(y);
            for (;;) {
                const k = i(y);
                if (k && k !== H) l(k);
                else break
            }
        }
        const E = i(y),
            x = o(y);
        return l(y), n(null, C, x, E, S, A, us(x), O), S && (S.vnode.el = C.el, ir(S, C.el)), E
    }, _ = (y, C = "[", S = "]") => {
        let A = 0;
        for (; y;)
            if (y = i(y), y && ln(y) && (y.data === C && A++, y.data === S)) {
                if (A === 0) return i(y);
                A--
            }
        return y
    }, v = (y, C, S) => {
        const A = C.parentNode;
        A && A.replaceChild(y, C);
        let O = S;
        for (; O;) O.vnode.el === C && (O.vnode.el = O.subTree.el = y), O = O.parent
    }, w = y => y.nodeType === 1 && y.tagName === "TEMPLATE";
    return [c, f]
}
const mo = "data-allow-mismatch",
    af = {
        0: "text",
        1: "children",
        2: "class",
        3: "style",
        4: "attribute"
    };

function fs(e, t) {
    if (t === 0 || t === 1)
        for (; e && !e.hasAttribute(mo);) e = e.parentElement;
    const n = e && e.getAttribute(mo);
    if (n == null) return !1;
    if (n === "") return !0; {
        const s = n.split(",");
        return t === 0 && s.includes("children") ? !0 : s.includes(af[t])
    }
}
Ws().requestIdleCallback;
Ws().cancelIdleCallback;

function cf(e, t) {
    if (ln(e) && e.data === "[") {
        let n = 1,
            s = e.nextSibling;
        for (; s;) {
            if (s.nodeType === 1) {
                if (t(s) === !1) break
            } else if (ln(s))
                if (s.data === "]") {
                    if (--n === 0) break
                } else s.data === "[" && n++;
            s = s.nextSibling
        }
    } else t(e)
}
const Kt = e => !!e.type.__asyncLoader;

function Ig(e) {
    Z(e) && (e = {
        loader: e
    });
    const {
        loader: t,
        loadingComponent: n,
        errorComponent: s,
        delay: r = 200,
        hydrate: i,
        timeout: o,
        suspensible: l = !0,
        onError: a
    } = e;
    let u = null,
        c, f = 0;
    const h = () => (f++, u = null, d()),
        d = () => {
            let p;
            return u || (p = u = t().catch(g => {
                if (g = g instanceof Error ? g : new Error(String(g)), a) return new Promise((_, v) => {
                    a(g, () => _(h()), () => v(g), f + 1)
                });
                throw g
            }).then(g => p !== u && u ? u : (g && (g.__esModule || g[Symbol.toStringTag] === "Module") && (g = g.default), c = g, g)))
        };
    return Fi({
        name: "AsyncComponentWrapper",
        __asyncLoader: d,
        __asyncHydrate(p, g, _) {
            let v = !1;
            (g.bu || (g.bu = [])).push(() => v = !0);
            const w = () => {
                    v || _()
                },
                y = i ? () => {
                    const C = i(w, S => cf(p, S));
                    C && (g.bum || (g.bum = [])).push(C)
                } : w;
            c ? y() : d().then(() => !g.isUnmounted && y())
        },
        get __asyncResolved() {
            return c
        },
        setup() {
            const p = Pe;
            if (Ii(p), c) return () => vr(c, p);
            const g = y => {
                u = null, Sn(y, p, 13, !s)
            };
            if (l && p.suspense || yn) return d().then(y => () => vr(y, p)).catch(y => (g(y), () => s ? Ce(s, {
                error: y
            }) : null));
            const _ = Ae(!1),
                v = Ae(),
                w = Ae(!!r);
            return r && setTimeout(() => {
                w.value = !1
            }, r), o != null && setTimeout(() => {
                if (!_.value && !v.value) {
                    const y = new Error(`Async component timed out after ${o}ms.`);
                    g(y), v.value = y
                }
            }, o), d().then(() => {
                _.value = !0, p.parent && ts(p.parent.vnode) && p.parent.update()
            }).catch(y => {
                g(y), v.value = y
            }), () => {
                if (_.value && c) return vr(c, p);
                if (v.value && s) return Ce(s, {
                    error: v.value
                });
                if (n && !w.value) return Ce(n)
            }
        }
    })
}

function vr(e, t) {
    const {
        ref: n,
        props: s,
        children: r,
        ce: i
    } = t.vnode, o = Ce(e, s, r);
    return o.ref = n, o.ce = i, delete t.vnode.ce, o
}
const ts = e => e.type.__isKeepAlive;

function Ea(e, t) {
    Ta(e, "a", t)
}

function Oa(e, t) {
    Ta(e, "da", t)
}

function Ta(e, t, n = Pe) {
    const s = e.__wdc || (e.__wdc = () => {
        let r = n;
        for (; r;) {
            if (r.isDeactivated) return;
            r = r.parent
        }
        return e()
    });
    if (tr(t, s, n), n) {
        let r = n.parent;
        for (; r && r.parent;) ts(r.parent.vnode) && uf(s, t, n, r), r = r.parent
    }
}

function uf(e, t, n, s) {
    const r = tr(t, e, s, !0);
    Li(() => {
        wi(s[t], r)
    }, n)
}

function tr(e, t, n = Pe, s = !1) {
    if (n) {
        const r = n[e] || (n[e] = []),
            i = t.__weh || (t.__weh = (...o) => {
                St();
                const l = Xt(n),
                    a = lt(t, n, e, o);
                return l(), Et(), a
            });
        return s ? r.unshift(i) : r.push(i), i
    }
}
const Tt = e => (t, n = Pe) => {
        (!yn || e === "sp") && tr(e, (...s) => t(...s), n)
    },
    ff = Tt("bm"),
    nr = Tt("m"),
    Pa = Tt("bu"),
    hf = Tt("u"),
    Di = Tt("bum"),
    Li = Tt("um"),
    df = Tt("sp"),
    pf = Tt("rtg"),
    gf = Tt("rtc");

function mf(e, t = Pe) {
    tr("ec", e, t)
}
const Hi = "components",
    yf = "directives";

function Dg(e, t) {
    return ji(Hi, e, !0, t) || e
}
const xa = Symbol.for("v-ndc");

function Lg(e) {
    return be(e) ? ji(Hi, e, !1) || e : e || xa
}

function Hg(e) {
    return ji(yf, e)
}

function ji(e, t, n = !0, s = !1) {
    const r = xe || Pe;
    if (r) {
        const i = r.type;
        if (e === Hi) {
            const l = oh(i, !1);
            if (l && (l === t || l === qe(t) || l === Qs(qe(t)))) return i
        }
        const o = yo(r[e] || i[e], t) || yo(r.appContext[e], t);
        return !o && s ? i : o
    }
}

function yo(e, t) {
    return e && (e[t] || e[qe(t)] || e[Qs(qe(t))])
}

function jg(e, t, n, s) {
    let r;
    const i = n && n[s],
        o = q(e);
    if (o || be(e)) {
        const l = o && gt(e);
        let a = !1,
            u = !1;
        l && (a = !Xe(e), u = Ht(e), e = zs(e)), r = new Array(e.length);
        for (let c = 0, f = e.length; c < f; c++) r[c] = t(a ? u ? As(Te(e[c])) : Te(e[c]) : e[c], c, void 0, i && i[c])
    } else if (typeof e == "number") {
        r = new Array(e);
        for (let l = 0; l < e; l++) r[l] = t(l + 1, l, void 0, i && i[l])
    } else if (de(e))
        if (e[Symbol.iterator]) r = Array.from(e, (l, a) => t(l, a, void 0, i && i[a]));
        else {
            const l = Object.keys(e);
            r = new Array(l.length);
            for (let a = 0, u = l.length; a < u; a++) {
                const c = l[a];
                r[a] = t(e[c], c, a, i && i[a])
            }
        }
    else r = [];
    return n && (n[s] = r), r
}

function Ng(e, t) {
    for (let n = 0; n < t.length; n++) {
        const s = t[n];
        if (q(s))
            for (let r = 0; r < s.length; r++) e[s[r].name] = s[r].fn;
        else s && (e[s.name] = s.key ? (...r) => {
            const i = s.fn(...r);
            return i && (i.key = s.key), i
        } : s.fn)
    }
    return e
}

function $g(e, t, n = {}, s, r) {
    if (xe.ce || xe.parent && Kt(xe.parent) && xe.parent.ce) return t !== "default" && (n.name = t), Ds(), Zr(Le, null, [Ce("slot", n, s && s())], 64);
    let i = e[t];
    i && i._c && (i._d = !1), Ds();
    const o = i && Aa(i(n)),
        l = n.key || o && o.key,
        a = Zr(Le, {
            key: (l && !ot(l) ? l : `_${t}`) + (!o && s ? "_fb" : "")
        }, o || (s ? s() : []), o && e._ === 1 ? 64 : -2);
    return !r && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]), i && i._c && (i._d = !0), a
}

function Aa(e) {
    return e.some(t => mn(t) ? !(t.type === Se || t.type === Le && !Aa(t.children)) : !0) ? e : null
}
const Gr = e => e ? nc(e) ? or(e) : Gr(e.parent) : null,
    Ln = Ee(Object.create(null), {
        $: e => e,
        $el: e => e.vnode.el,
        $data: e => e.data,
        $props: e => e.props,
        $attrs: e => e.attrs,
        $slots: e => e.slots,
        $refs: e => e.refs,
        $parent: e => Gr(e.parent),
        $root: e => Gr(e.root),
        $host: e => e.ce,
        $emit: e => e.emit,
        $options: e => Ma(e),
        $forceUpdate: e => e.f || (e.f = () => {
            ki(e.update)
        }),
        $nextTick: e => e.n || (e.n = tt.bind(e.proxy)),
        $watch: e => Nf.bind(e)
    }),
    br = (e, t) => e !== oe && !e.__isScriptSetup && ce(e, t),
    vf = {
        get({
            _: e
        }, t) {
            if (t === "__v_skip") return !0;
            const {
                ctx: n,
                setupState: s,
                data: r,
                props: i,
                accessCache: o,
                type: l,
                appContext: a
            } = e;
            let u;
            if (t[0] !== "$") {
                const d = o[t];
                if (d !== void 0) switch (d) {
                    case 1:
                        return s[t];
                    case 2:
                        return r[t];
                    case 4:
                        return n[t];
                    case 3:
                        return i[t]
                } else {
                    if (br(s, t)) return o[t] = 1, s[t];
                    if (r !== oe && ce(r, t)) return o[t] = 2, r[t];
                    if ((u = e.propsOptions[0]) && ce(u, t)) return o[t] = 3, i[t];
                    if (n !== oe && ce(n, t)) return o[t] = 4, n[t];
                    zr && (o[t] = 0)
                }
            }
            const c = Ln[t];
            let f, h;
            if (c) return t === "$attrs" && ke(e.attrs, "get", ""), c(e);
            if ((f = l.__cssModules) && (f = f[t])) return f;
            if (n !== oe && ce(n, t)) return o[t] = 4, n[t];
            if (h = a.config.globalProperties, ce(h, t)) return h[t]
        },
        set({
            _: e
        }, t, n) {
            const {
                data: s,
                setupState: r,
                ctx: i
            } = e;
            return br(r, t) ? (r[t] = n, !0) : s !== oe && ce(s, t) ? (s[t] = n, !0) : ce(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0)
        },
        has({
            _: {
                data: e,
                setupState: t,
                accessCache: n,
                ctx: s,
                appContext: r,
                propsOptions: i
            }
        }, o) {
            let l;
            return !!n[o] || e !== oe && ce(e, o) || br(t, o) || (l = i[0]) && ce(l, o) || ce(s, o) || ce(Ln, o) || ce(r.config.globalProperties, o)
        },
        defineProperty(e, t, n) {
            return n.get != null ? e._.accessCache[t] = 0 : ce(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n)
        }
    };

function Ug() {
    return bf().slots
}

function bf(e) {
    const t = nt();
    return t.setupContext || (t.setupContext = rc(t))
}

function qn(e) {
    return q(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e
}

function Bg(e, t) {
    const n = qn(e);
    for (const s in t) {
        if (s.startsWith("__skip")) continue;
        let r = n[s];
        r ? q(r) || Z(r) ? r = n[s] = {
            type: r,
            default: t[s]
        } : r.default = t[s] : r === null && (r = n[s] = {
            default: t[s]
        }), r && t[`__skip_${s}`] && (r.skipFactory = !0)
    }
    return n
}

function Vg(e, t) {
    return !e || !t ? e || t : q(e) && q(t) ? e.concat(t) : Ee({}, qn(e), qn(t))
}

function Qg(e) {
    const t = nt();
    let n = e();
    return ti(), Ci(n) && (n = n.catch(s => {
        throw Xt(t), s
    })), [n, () => Xt(t)]
}
let zr = !0;

function _f(e) {
    const t = Ma(e),
        n = e.proxy,
        s = e.ctx;
    zr = !1, t.beforeCreate && vo(t.beforeCreate, e, "bc");
    const {
        data: r,
        computed: i,
        methods: o,
        watch: l,
        provide: a,
        inject: u,
        created: c,
        beforeMount: f,
        mounted: h,
        beforeUpdate: d,
        updated: p,
        activated: g,
        deactivated: _,
        beforeDestroy: v,
        beforeUnmount: w,
        destroyed: y,
        unmounted: C,
        render: S,
        renderTracked: A,
        renderTriggered: O,
        errorCaptured: P,
        serverPrefetch: E,
        expose: x,
        inheritAttrs: H,
        components: k,
        directives: W,
        filters: V
    } = t;
    if (u && wf(u, s, null), o)
        for (const ne in o) {
            const K = o[ne];
            Z(K) && (s[ne] = K.bind(n))
        }
    if (r) {
        const ne = r.call(n, n);
        de(ne) && (e.data = Zn(ne))
    }
    if (zr = !0, i)
        for (const ne in i) {
            const K = i[ne],
                we = Z(K) ? K.bind(n, n) : Z(K.get) ? K.get.bind(n, n) : pt,
                Pt = !Z(K) && Z(K.set) ? K.set.bind(n) : pt,
                ct = ue({
                    get: we,
                    set: Pt
                });
            Object.defineProperty(s, ne, {
                enumerable: !0,
                configurable: !0,
                get: () => ct.value,
                set: Ne => ct.value = Ne
            })
        }
    if (l)
        for (const ne in l) Ra(l[ne], s, n, ne);
    if (a) {
        const ne = Z(a) ? a.call(n) : a;
        Reflect.ownKeys(ne).forEach(K => {
            vs(K, ne[K])
        })
    }
    c && vo(c, e, "c");

    function L(ne, K) {
        q(K) ? K.forEach(we => ne(we.bind(n))) : K && ne(K.bind(n))
    }
    if (L(ff, f), L(nr, h), L(Pa, d), L(hf, p), L(Ea, g), L(Oa, _), L(mf, P), L(gf, A), L(pf, O), L(Di, w), L(Li, C), L(df, E), q(x))
        if (x.length) {
            const ne = e.exposed || (e.exposed = {});
            x.forEach(K => {
                Object.defineProperty(ne, K, {
                    get: () => n[K],
                    set: we => n[K] = we,
                    enumerable: !0
                })
            })
        } else e.exposed || (e.exposed = {});
    S && e.render === pt && (e.render = S), H != null && (e.inheritAttrs = H), k && (e.components = k), W && (e.directives = W), E && Ii(e)
}

function wf(e, t, n = pt) {
    q(e) && (e = Yr(e));
    for (const s in e) {
        const r = e[s];
        let i;
        de(r) ? "default" in r ? i = He(r.from || s, r.default, !0) : i = He(r.from || s) : i = He(r), he(i) ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: o => i.value = o
        }) : t[s] = i
    }
}

function vo(e, t, n) {
    lt(q(e) ? e.map(s => s.bind(t.proxy)) : e.bind(t.proxy), t, n)
}

function Ra(e, t, n, s) {
    let r = s.includes(".") ? Wa(n, s) : () => n[s];
    if (be(e)) {
        const i = t[e];
        Z(i) && le(r, i)
    } else if (Z(e)) le(r, e.bind(n));
    else if (de(e))
        if (q(e)) e.forEach(i => Ra(i, t, n, s));
        else {
            const i = Z(e.handler) ? e.handler.bind(n) : t[e.handler];
            Z(i) && le(r, i, e)
        }
}

function Ma(e) {
    const t = e.type,
        {
            mixins: n,
            extends: s
        } = t,
        {
            mixins: r,
            optionsCache: i,
            config: {
                optionMergeStrategies: o
            }
        } = e.appContext,
        l = i.get(t);
    let a;
    return l ? a = l : !r.length && !n && !s ? a = t : (a = {}, r.length && r.forEach(u => Is(a, u, o, !0)), Is(a, t, o)), de(t) && i.set(t, a), a
}

function Is(e, t, n, s = !1) {
    const {
        mixins: r,
        extends: i
    } = t;
    i && Is(e, i, n, !0), r && r.forEach(o => Is(e, o, n, !0));
    for (const o in t)
        if (!(s && o === "expose")) {
            const l = Cf[o] || n && n[o];
            e[o] = l ? l(e[o], t[o]) : t[o]
        }
    return e
}
const Cf = {
    data: bo,
    props: _o,
    emits: _o,
    methods: Mn,
    computed: Mn,
    beforeCreate: Fe,
    created: Fe,
    beforeMount: Fe,
    mounted: Fe,
    beforeUpdate: Fe,
    updated: Fe,
    beforeDestroy: Fe,
    beforeUnmount: Fe,
    destroyed: Fe,
    unmounted: Fe,
    activated: Fe,
    deactivated: Fe,
    errorCaptured: Fe,
    serverPrefetch: Fe,
    components: Mn,
    directives: Mn,
    watch: Ef,
    provide: bo,
    inject: Sf
};

function bo(e, t) {
    return t ? e ? function() {
        return Ee(Z(e) ? e.call(this, this) : e, Z(t) ? t.call(this, this) : t)
    } : t : e
}

function Sf(e, t) {
    return Mn(Yr(e), Yr(t))
}

function Yr(e) {
    if (q(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
        return t
    }
    return e
}

function Fe(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}

function Mn(e, t) {
    return e ? Ee(Object.create(null), e, t) : t
}

function _o(e, t) {
    return e ? q(e) && q(t) ? [...new Set([...e, ...t])] : Ee(Object.create(null), qn(e), qn(t ? ? {})) : t
}

function Ef(e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = Ee(Object.create(null), e);
    for (const s in t) n[s] = Fe(e[s], t[s]);
    return n
}

function ka() {
    return {
        app: null,
        config: {
            isNativeTag: uu,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let Of = 0;

function Tf(e, t) {
    return function(s, r = null) {
        Z(s) || (s = Ee({}, s)), r != null && !de(r) && (r = null);
        const i = ka(),
            o = new WeakSet,
            l = [];
        let a = !1;
        const u = i.app = {
            _uid: Of++,
            _component: s,
            _props: r,
            _container: null,
            _context: i,
            _instance: null,
            version: ic,
            get config() {
                return i.config
            },
            set config(c) {},
            use(c, ...f) {
                return o.has(c) || (c && Z(c.install) ? (o.add(c), c.install(u, ...f)) : Z(c) && (o.add(c), c(u, ...f))), u
            },
            mixin(c) {
                return i.mixins.includes(c) || i.mixins.push(c), u
            },
            component(c, f) {
                return f ? (i.components[c] = f, u) : i.components[c]
            },
            directive(c, f) {
                return f ? (i.directives[c] = f, u) : i.directives[c]
            },
            mount(c, f, h) {
                if (!a) {
                    const d = u._ceVNode || Ce(s, r);
                    return d.appContext = i, h === !0 ? h = "svg" : h === !1 && (h = void 0), f && t ? t(d, c) : e(d, c, h), a = !0, u._container = c, c.__vue_app__ = u, or(d.component)
                }
            },
            onUnmount(c) {
                l.push(c)
            },
            unmount() {
                a && (lt(l, u._instance, 16), e(null, u._container), delete u._container.__vue_app__)
            },
            provide(c, f) {
                return i.provides[c] = f, u
            },
            runWithContext(c) {
                const f = qt;
                qt = u;
                try {
                    return c()
                } finally {
                    qt = f
                }
            }
        };
        return u
    }
}
let qt = null;

function vs(e, t) {
    if (Pe) {
        let n = Pe.provides;
        const s = Pe.parent && Pe.parent.provides;
        s === n && (n = Pe.provides = Object.create(s)), n[e] = t
    }
}

function He(e, t, n = !1) {
    const s = nt();
    if (s || qt) {
        let r = qt ? qt._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
        if (r && e in r) return r[e];
        if (arguments.length > 1) return n && Z(t) ? t.call(s && s.proxy) : t
    }
}

function sr() {
    return !!(nt() || qt)
}
const Fa = {},
    Ia = () => Object.create(Fa),
    Da = e => Object.getPrototypeOf(e) === Fa;

function Pf(e, t, n, s = !1) {
    const r = {},
        i = Ia();
    e.propsDefaults = Object.create(null), La(e, t, r, i);
    for (const o in e.propsOptions[0]) o in r || (r[o] = void 0);
    n ? e.props = s ? r : Js(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i
}

function xf(e, t, n, s) {
    const {
        props: r,
        attrs: i,
        vnode: {
            patchFlag: o
        }
    } = e, l = re(r), [a] = e.propsOptions;
    let u = !1;
    if ((s || o > 0) && !(o & 16)) {
        if (o & 8) {
            const c = e.vnode.dynamicProps;
            for (let f = 0; f < c.length; f++) {
                let h = c[f];
                if (rr(e.emitsOptions, h)) continue;
                const d = t[h];
                if (a)
                    if (ce(i, h)) d !== i[h] && (i[h] = d, u = !0);
                    else {
                        const p = qe(h);
                        r[p] = Jr(a, l, p, d, e, !1)
                    }
                else d !== i[h] && (i[h] = d, u = !0)
            }
        }
    } else {
        La(e, t, r, i) && (u = !0);
        let c;
        for (const f in l)(!t || !ce(t, f) && ((c = Ot(f)) === f || !ce(t, c))) && (a ? n && (n[f] !== void 0 || n[c] !== void 0) && (r[f] = Jr(a, l, f, void 0, e, !0)) : delete r[f]);
        if (i !== l)
            for (const f in i)(!t || !ce(t, f)) && (delete i[f], u = !0)
    }
    u && _t(e.attrs, "set", "")
}

function La(e, t, n, s) {
    const [r, i] = e.propsOptions;
    let o = !1,
        l;
    if (t)
        for (let a in t) {
            if (fn(a)) continue;
            const u = t[a];
            let c;
            r && ce(r, c = qe(a)) ? !i || !i.includes(c) ? n[c] = u : (l || (l = {}))[c] = u : rr(e.emitsOptions, a) || (!(a in s) || u !== s[a]) && (s[a] = u, o = !0)
        }
    if (i) {
        const a = re(n),
            u = l || oe;
        for (let c = 0; c < i.length; c++) {
            const f = i[c];
            n[f] = Jr(r, a, f, u[f], e, !ce(u, f))
        }
    }
    return o
}

function Jr(e, t, n, s, r, i) {
    const o = e[n];
    if (o != null) {
        const l = ce(o, "default");
        if (l && s === void 0) {
            const a = o.default;
            if (o.type !== Function && !o.skipFactory && Z(a)) {
                const {
                    propsDefaults: u
                } = r;
                if (n in u) s = u[n];
                else {
                    const c = Xt(r);
                    s = u[n] = a.call(null, t), c()
                }
            } else s = a;
            r.ce && r.ce._setProp(n, s)
        }
        o[0] && (i && !l ? s = !1 : o[1] && (s === "" || s === Ot(n)) && (s = !0))
    }
    return s
}
const Af = new WeakMap;

function Ha(e, t, n = !1) {
    const s = n ? Af : t.propsCache,
        r = s.get(e);
    if (r) return r;
    const i = e.props,
        o = {},
        l = [];
    let a = !1;
    if (!Z(e)) {
        const c = f => {
            a = !0;
            const [h, d] = Ha(f, t, !0);
            Ee(o, h), d && l.push(...d)
        };
        !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c)
    }
    if (!i && !a) return de(e) && s.set(e, cn), cn;
    if (q(i))
        for (let c = 0; c < i.length; c++) {
            const f = qe(i[c]);
            wo(f) && (o[f] = oe)
        } else if (i)
            for (const c in i) {
                const f = qe(c);
                if (wo(f)) {
                    const h = i[c],
                        d = o[f] = q(h) || Z(h) ? {
                            type: h
                        } : Ee({}, h),
                        p = d.type;
                    let g = !1,
                        _ = !0;
                    if (q(p))
                        for (let v = 0; v < p.length; ++v) {
                            const w = p[v],
                                y = Z(w) && w.name;
                            if (y === "Boolean") {
                                g = !0;
                                break
                            } else y === "String" && (_ = !1)
                        } else g = Z(p) && p.name === "Boolean";
                    d[0] = g, d[1] = _, (g || ce(d, "default")) && l.push(f)
                }
            }
    const u = [o, l];
    return de(e) && s.set(e, u), u
}

function wo(e) {
    return e[0] !== "$" && !fn(e)
}
const Ni = e => e === "_" || e === "__" || e === "_ctx" || e === "$stable",
    $i = e => q(e) ? e.map(Ke) : [Ke(e)],
    Rf = (e, t, n) => {
        if (t._n) return t;
        const s = Zu((...r) => $i(t(...r)), n);
        return s._c = !1, s
    },
    ja = (e, t, n) => {
        const s = e._ctx;
        for (const r in e) {
            if (Ni(r)) continue;
            const i = e[r];
            if (Z(i)) t[r] = Rf(r, i, s);
            else if (i != null) {
                const o = $i(i);
                t[r] = () => o
            }
        }
    },
    Na = (e, t) => {
        const n = $i(t);
        e.slots.default = () => n
    },
    $a = (e, t, n) => {
        for (const s in t)(n || !Ni(s)) && (e[s] = t[s])
    },
    Mf = (e, t, n) => {
        const s = e.slots = Ia();
        if (e.vnode.shapeFlag & 32) {
            const r = t.__;
            r && Ur(s, "__", r, !0);
            const i = t._;
            i ? ($a(s, t, n), n && Ur(s, "_", i, !0)) : ja(t, s)
        } else t && Na(e, t)
    },
    kf = (e, t, n) => {
        const {
            vnode: s,
            slots: r
        } = e;
        let i = !0,
            o = oe;
        if (s.shapeFlag & 32) {
            const l = t._;
            l ? n && l === 1 ? i = !1 : $a(r, t, n) : (i = !t.$stable, ja(t, r)), o = t
        } else t && (Na(e, t), o = {
            default: 1
        });
        if (i)
            for (const l in r) !Ni(l) && o[l] == null && delete r[l]
    },
    Ie = Ya;

function Ff(e) {
    return Ua(e)
}

function If(e) {
    return Ua(e, lf)
}

function Ua(e, t) {
    const n = Ws();
    n.__VUE__ = !0;
    const {
        insert: s,
        remove: r,
        patchProp: i,
        createElement: o,
        createText: l,
        createComment: a,
        setText: u,
        setElementText: c,
        parentNode: f,
        nextSibling: h,
        setScopeId: d = pt,
        insertStaticContent: p
    } = e, g = (m, b, T, F = null, R = null, I = null, $ = void 0, N = null, j = !!b.dynamicChildren) => {
        if (m === b) return;
        m && !dt(m, b) && (F = M(m), Ne(m, R, I, !0), m = null), b.patchFlag === -2 && (j = !1, b.dynamicChildren = null);
        const {
            type: D,
            ref: J,
            shapeFlag: B
        } = b;
        switch (D) {
            case Gt:
                _(m, b, T, F);
                break;
            case Se:
                v(m, b, T, F);
                break;
            case Hn:
                m == null && w(b, T, F, $);
                break;
            case Le:
                k(m, b, T, F, R, I, $, N, j);
                break;
            default:
                B & 1 ? S(m, b, T, F, R, I, $, N, j) : B & 6 ? W(m, b, T, F, R, I, $, N, j) : (B & 64 || B & 128) && D.process(m, b, T, F, R, I, $, N, j, G)
        }
        J != null && R ? dn(J, m && m.ref, I, b || m, !b) : J == null && m && m.ref != null && dn(m.ref, null, I, m, !0)
    }, _ = (m, b, T, F) => {
        if (m == null) s(b.el = l(b.children), T, F);
        else {
            const R = b.el = m.el;
            b.children !== m.children && u(R, b.children)
        }
    }, v = (m, b, T, F) => {
        m == null ? s(b.el = a(b.children || ""), T, F) : b.el = m.el
    }, w = (m, b, T, F) => {
        [m.el, m.anchor] = p(m.children, b, T, F, m.el, m.anchor)
    }, y = ({
        el: m,
        anchor: b
    }, T, F) => {
        let R;
        for (; m && m !== b;) R = h(m), s(m, T, F), m = R;
        s(b, T, F)
    }, C = ({
        el: m,
        anchor: b
    }) => {
        let T;
        for (; m && m !== b;) T = h(m), r(m), m = T;
        r(b)
    }, S = (m, b, T, F, R, I, $, N, j) => {
        b.type === "svg" ? $ = "svg" : b.type === "math" && ($ = "mathml"), m == null ? A(b, T, F, R, I, $, N, j) : E(m, b, R, I, $, N, j)
    }, A = (m, b, T, F, R, I, $, N) => {
        let j, D;
        const {
            props: J,
            shapeFlag: B,
            transition: z,
            dirs: ee
        } = m;
        if (j = m.el = o(m.type, I, J && J.is, J), B & 8 ? c(j, m.children) : B & 16 && P(m.children, j, null, F, R, _r(m, I), $, N), ee && ht(m, null, F, "created"), O(j, m, m.scopeId, $, F), J) {
            for (const pe in J) pe !== "value" && !fn(pe) && i(j, pe, null, J[pe], I, F);
            "value" in J && i(j, "value", null, J.value, I), (D = J.onVnodeBeforeMount) && Ye(D, F, m)
        }
        ee && ht(m, null, F, "beforeMount");
        const ie = Ba(R, z);
        ie && z.beforeEnter(j), s(j, b, T), ((D = J && J.onVnodeMounted) || ie || ee) && Ie(() => {
            D && Ye(D, F, m), ie && z.enter(j), ee && ht(m, null, F, "mounted")
        }, R)
    }, O = (m, b, T, F, R) => {
        if (T && d(m, T), F)
            for (let I = 0; I < F.length; I++) d(m, F[I]);
        if (R) {
            let I = R.subTree;
            if (b === I || Ga(I.type) && (I.ssContent === b || I.ssFallback === b)) {
                const $ = R.vnode;
                O(m, $, $.scopeId, $.slotScopeIds, R.parent)
            }
        }
    }, P = (m, b, T, F, R, I, $, N, j = 0) => {
        for (let D = j; D < m.length; D++) {
            const J = m[D] = N ? It(m[D]) : Ke(m[D]);
            g(null, J, b, T, F, R, I, $, N)
        }
    }, E = (m, b, T, F, R, I, $) => {
        const N = b.el = m.el;
        let {
            patchFlag: j,
            dynamicChildren: D,
            dirs: J
        } = b;
        j |= m.patchFlag & 16;
        const B = m.props || oe,
            z = b.props || oe;
        let ee;
        if (T && Ut(T, !1), (ee = z.onVnodeBeforeUpdate) && Ye(ee, T, b, m), J && ht(b, m, T, "beforeUpdate"), T && Ut(T, !0), (B.innerHTML && z.innerHTML == null || B.textContent && z.textContent == null) && c(N, ""), D ? x(m.dynamicChildren, D, N, T, F, _r(b, R), I) : $ || K(m, b, N, null, T, F, _r(b, R), I, !1), j > 0) {
            if (j & 16) H(N, B, z, T, R);
            else if (j & 2 && B.class !== z.class && i(N, "class", null, z.class, R), j & 4 && i(N, "style", B.style, z.style, R), j & 8) {
                const ie = b.dynamicProps;
                for (let pe = 0; pe < ie.length; pe++) {
                    const fe = ie[pe],
                        $e = B[fe],
                        Re = z[fe];
                    (Re !== $e || fe === "value") && i(N, fe, $e, Re, R, T)
                }
            }
            j & 1 && m.children !== b.children && c(N, b.children)
        } else !$ && D == null && H(N, B, z, T, R);
        ((ee = z.onVnodeUpdated) || J) && Ie(() => {
            ee && Ye(ee, T, b, m), J && ht(b, m, T, "updated")
        }, F)
    }, x = (m, b, T, F, R, I, $) => {
        for (let N = 0; N < b.length; N++) {
            const j = m[N],
                D = b[N],
                J = j.el && (j.type === Le || !dt(j, D) || j.shapeFlag & 198) ? f(j.el) : T;
            g(j, D, J, null, F, R, I, $, !0)
        }
    }, H = (m, b, T, F, R) => {
        if (b !== T) {
            if (b !== oe)
                for (const I in b) !fn(I) && !(I in T) && i(m, I, b[I], null, R, F);
            for (const I in T) {
                if (fn(I)) continue;
                const $ = T[I],
                    N = b[I];
                $ !== N && I !== "value" && i(m, I, N, $, R, F)
            }
            "value" in T && i(m, "value", b.value, T.value, R)
        }
    }, k = (m, b, T, F, R, I, $, N, j) => {
        const D = b.el = m ? m.el : l(""),
            J = b.anchor = m ? m.anchor : l("");
        let {
            patchFlag: B,
            dynamicChildren: z,
            slotScopeIds: ee
        } = b;
        ee && (N = N ? N.concat(ee) : ee), m == null ? (s(D, T, F), s(J, T, F), P(b.children || [], T, J, R, I, $, N, j)) : B > 0 && B & 64 && z && m.dynamicChildren ? (x(m.dynamicChildren, z, T, R, I, $, N), (b.key != null || R && b === R.subTree) && Ui(m, b, !0)) : K(m, b, T, J, R, I, $, N, j)
    }, W = (m, b, T, F, R, I, $, N, j) => {
        b.slotScopeIds = N, m == null ? b.shapeFlag & 512 ? R.ctx.activate(b, T, F, $, j) : V(b, T, F, R, I, $, j) : X(m, b, j)
    }, V = (m, b, T, F, R, I, $) => {
        const N = m.component = nh(m, F, R);
        if (ts(m) && (N.ctx.renderer = G), sh(N, !1, $), N.asyncDep) {
            if (R && R.registerDep(N, L, $), !m.el) {
                const j = N.subTree = Ce(Se);
                v(null, j, b, T), m.placeholder = j.el
            }
        } else L(N, m, b, T, R, I, $)
    }, X = (m, b, T) => {
        const F = b.component = m.component;
        if (Qf(m, b, T))
            if (F.asyncDep && !F.asyncResolved) {
                ne(F, b, T);
                return
            } else F.next = b, F.update();
        else b.el = m.el, F.vnode = b
    }, L = (m, b, T, F, R, I, $) => {
        const N = () => {
            if (m.isMounted) {
                let {
                    next: B,
                    bu: z,
                    u: ee,
                    parent: ie,
                    vnode: pe
                } = m; {
                    const Qe = Va(m);
                    if (Qe) {
                        B && (B.el = pe.el, ne(m, B, $)), Qe.asyncDep.then(() => {
                            m.isUnmounted || N()
                        });
                        return
                    }
                }
                let fe = B,
                    $e;
                Ut(m, !1), B ? (B.el = pe.el, ne(m, B, $)) : B = pe, z && ms(z), ($e = B.props && B.props.onVnodeBeforeUpdate) && Ye($e, ie, B, pe), Ut(m, !0);
                const Re = wr(m),
                    st = m.subTree;
                m.subTree = Re, g(st, Re, f(st.el), M(st), m, R, I), B.el = Re.el, fe === null && ir(m, Re.el), ee && Ie(ee, R), ($e = B.props && B.props.onVnodeUpdated) && Ie(() => Ye($e, ie, B, pe), R)
            } else {
                let B;
                const {
                    el: z,
                    props: ee
                } = b, {
                    bm: ie,
                    m: pe,
                    parent: fe,
                    root: $e,
                    type: Re
                } = m, st = Kt(b);
                if (Ut(m, !1), ie && ms(ie), !st && (B = ee && ee.onVnodeBeforeMount) && Ye(B, fe, b), Ut(m, !0), z && ye) {
                    const Qe = () => {
                        m.subTree = wr(m), ye(z, m.subTree, m, R, null)
                    };
                    st && Re.__asyncHydrate ? Re.__asyncHydrate(z, m, Qe) : Qe()
                } else {
                    $e.ce && $e.ce._def.shadowRoot !== !1 && $e.ce._injectChildStyle(Re);
                    const Qe = m.subTree = wr(m);
                    g(null, Qe, T, F, m, R, I), b.el = Qe.el
                }
                if (pe && Ie(pe, R), !st && (B = ee && ee.onVnodeMounted)) {
                    const Qe = b;
                    Ie(() => Ye(B, fe, Qe), R)
                }(b.shapeFlag & 256 || fe && Kt(fe.vnode) && fe.vnode.shapeFlag & 256) && m.a && Ie(m.a, R), m.isMounted = !0, b = T = F = null
            }
        };
        m.scope.on();
        const j = m.effect = new Ql(N);
        m.scope.off();
        const D = m.update = j.run.bind(j),
            J = m.job = j.runIfDirty.bind(j);
        J.i = m, J.id = m.uid, j.scheduler = () => ki(J), Ut(m, !0), D()
    }, ne = (m, b, T) => {
        b.component = m;
        const F = m.vnode.props;
        m.vnode = b, m.next = null, xf(m, b.props, F, T), kf(m, b.children, T), St(), co(m), Et()
    }, K = (m, b, T, F, R, I, $, N, j = !1) => {
        const D = m && m.children,
            J = m ? m.shapeFlag : 0,
            B = b.children,
            {
                patchFlag: z,
                shapeFlag: ee
            } = b;
        if (z > 0) {
            if (z & 128) {
                Pt(D, B, T, F, R, I, $, N, j);
                return
            } else if (z & 256) {
                we(D, B, T, F, R, I, $, N, j);
                return
            }
        }
        ee & 8 ? (J & 16 && Ge(D, R, I), B !== D && c(T, B)) : J & 16 ? ee & 16 ? Pt(D, B, T, F, R, I, $, N, j) : Ge(D, R, I, !0) : (J & 8 && c(T, ""), ee & 16 && P(B, T, F, R, I, $, N, j))
    }, we = (m, b, T, F, R, I, $, N, j) => {
        m = m || cn, b = b || cn;
        const D = m.length,
            J = b.length,
            B = Math.min(D, J);
        let z;
        for (z = 0; z < B; z++) {
            const ee = b[z] = j ? It(b[z]) : Ke(b[z]);
            g(m[z], ee, T, null, R, I, $, N, j)
        }
        D > J ? Ge(m, R, I, !0, !1, B) : P(b, T, F, R, I, $, N, j, B)
    }, Pt = (m, b, T, F, R, I, $, N, j) => {
        let D = 0;
        const J = b.length;
        let B = m.length - 1,
            z = J - 1;
        for (; D <= B && D <= z;) {
            const ee = m[D],
                ie = b[D] = j ? It(b[D]) : Ke(b[D]);
            if (dt(ee, ie)) g(ee, ie, T, null, R, I, $, N, j);
            else break;
            D++
        }
        for (; D <= B && D <= z;) {
            const ee = m[B],
                ie = b[z] = j ? It(b[z]) : Ke(b[z]);
            if (dt(ee, ie)) g(ee, ie, T, null, R, I, $, N, j);
            else break;
            B--, z--
        }
        if (D > B) {
            if (D <= z) {
                const ee = z + 1,
                    ie = ee < J ? b[ee].el : F;
                for (; D <= z;) g(null, b[D] = j ? It(b[D]) : Ke(b[D]), T, ie, R, I, $, N, j), D++
            }
        } else if (D > z)
            for (; D <= B;) Ne(m[D], R, I, !0), D++;
        else {
            const ee = D,
                ie = D,
                pe = new Map;
            for (D = ie; D <= z; D++) {
                const We = b[D] = j ? It(b[D]) : Ke(b[D]);
                We.key != null && pe.set(We.key, D)
            }
            let fe, $e = 0;
            const Re = z - ie + 1;
            let st = !1,
                Qe = 0;
            const On = new Array(Re);
            for (D = 0; D < Re; D++) On[D] = 0;
            for (D = ee; D <= B; D++) {
                const We = m[D];
                if ($e >= Re) {
                    Ne(We, R, I, !0);
                    continue
                }
                let ut;
                if (We.key != null) ut = pe.get(We.key);
                else
                    for (fe = ie; fe <= z; fe++)
                        if (On[fe - ie] === 0 && dt(We, b[fe])) {
                            ut = fe;
                            break
                        }
                ut === void 0 ? Ne(We, R, I, !0) : (On[ut - ie] = D + 1, ut >= Qe ? Qe = ut : st = !0, g(We, b[ut], T, null, R, I, $, N, j), $e++)
            }
            const Gi = st ? Df(On) : cn;
            for (fe = Gi.length - 1, D = Re - 1; D >= 0; D--) {
                const We = ie + D,
                    ut = b[We],
                    zi = b[We + 1],
                    Yi = We + 1 < J ? zi.el || zi.placeholder : F;
                On[D] === 0 ? g(null, ut, T, Yi, R, I, $, N, j) : st && (fe < 0 || D !== Gi[fe] ? ct(ut, T, Yi, 2) : fe--)
            }
        }
    }, ct = (m, b, T, F, R = null) => {
        const {
            el: I,
            type: $,
            transition: N,
            children: j,
            shapeFlag: D
        } = m;
        if (D & 6) {
            ct(m.component.subTree, b, T, F);
            return
        }
        if (D & 128) {
            m.suspense.move(b, T, F);
            return
        }
        if (D & 64) {
            $.move(m, b, T, G);
            return
        }
        if ($ === Le) {
            s(I, b, T);
            for (let B = 0; B < j.length; B++) ct(j[B], b, T, F);
            s(m.anchor, b, T);
            return
        }
        if ($ === Hn) {
            y(m, b, T);
            return
        }
        if (F !== 2 && D & 1 && N)
            if (F === 0) N.beforeEnter(I), s(I, b, T), Ie(() => N.enter(I), R);
            else {
                const {
                    leave: B,
                    delayLeave: z,
                    afterLeave: ee
                } = N, ie = () => {
                    m.ctx.isUnmounted ? r(I) : s(I, b, T)
                }, pe = () => {
                    B(I, () => {
                        ie(), ee && ee()
                    })
                };
                z ? z(I, ie, pe) : pe()
            }
        else s(I, b, T)
    }, Ne = (m, b, T, F = !1, R = !1) => {
        const {
            type: I,
            props: $,
            ref: N,
            children: j,
            dynamicChildren: D,
            shapeFlag: J,
            patchFlag: B,
            dirs: z,
            cacheIndex: ee
        } = m;
        if (B === -2 && (R = !1), N != null && (St(), dn(N, null, T, m, !0), Et()), ee != null && (b.renderCache[ee] = void 0), J & 256) {
            b.ctx.deactivate(m);
            return
        }
        const ie = J & 1 && z,
            pe = !Kt(m);
        let fe;
        if (pe && (fe = $ && $.onVnodeBeforeUnmount) && Ye(fe, b, m), J & 6) ur(m.component, T, F);
        else {
            if (J & 128) {
                m.suspense.unmount(T, F);
                return
            }
            ie && ht(m, null, b, "beforeUnmount"), J & 64 ? m.type.remove(m, b, T, G, F) : D && !D.hasOnce && (I !== Le || B > 0 && B & 64) ? Ge(D, b, T, !1, !0) : (I === Le && B & 384 || !R && J & 16) && Ge(j, b, T), F && en(m)
        }(pe && (fe = $ && $.onVnodeUnmounted) || ie) && Ie(() => {
            fe && Ye(fe, b, m), ie && ht(m, null, b, "unmounted")
        }, T)
    }, en = m => {
        const {
            type: b,
            el: T,
            anchor: F,
            transition: R
        } = m;
        if (b === Le) {
            tn(T, F);
            return
        }
        if (b === Hn) {
            C(m);
            return
        }
        const I = () => {
            r(T), R && !R.persisted && R.afterLeave && R.afterLeave()
        };
        if (m.shapeFlag & 1 && R && !R.persisted) {
            const {
                leave: $,
                delayLeave: N
            } = R, j = () => $(T, I);
            N ? N(m.el, I, j) : j()
        } else I()
    }, tn = (m, b) => {
        let T;
        for (; m !== b;) T = h(m), r(m), m = T;
        r(b)
    }, ur = (m, b, T) => {
        const {
            bum: F,
            scope: R,
            job: I,
            subTree: $,
            um: N,
            m: j,
            a: D,
            parent: J,
            slots: {
                __: B
            }
        } = m;
        Co(j), Co(D), F && ms(F), J && q(B) && B.forEach(z => {
            J.renderCache[z] = void 0
        }), R.stop(), I && (I.flags |= 8, Ne($, m, b, T)), N && Ie(N, b), Ie(() => {
            m.isUnmounted = !0
        }, b), b && b.pendingBranch && !b.isUnmounted && m.asyncDep && !m.asyncResolved && m.suspenseId === b.pendingId && (b.deps--, b.deps === 0 && b.resolve())
    }, Ge = (m, b, T, F = !1, R = !1, I = 0) => {
        for (let $ = I; $ < m.length; $++) Ne(m[$], b, T, F, R)
    }, M = m => {
        if (m.shapeFlag & 6) return M(m.component.subTree);
        if (m.shapeFlag & 128) return m.suspense.next();
        const b = h(m.anchor || m.el),
            T = b && b[ga];
        return T ? h(T) : b
    };
    let Q = !1;
    const U = (m, b, T) => {
            m == null ? b._vnode && Ne(b._vnode, null, null, !0) : g(b._vnode || null, m, b, null, null, null, T), b._vnode = m, Q || (Q = !0, co(), ks(), Q = !1)
        },
        G = {
            p: g,
            um: Ne,
            m: ct,
            r: en,
            mt: V,
            mc: P,
            pc: K,
            pbc: x,
            n: M,
            o: e
        };
    let ae, ye;
    return t && ([ae, ye] = t(G)), {
        render: U,
        hydrate: ae,
        createApp: Tf(U, ae)
    }
}

function _r({
    type: e,
    props: t
}, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n
}

function Ut({
    effect: e,
    job: t
}, n) {
    n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5)
}

function Ba(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}

function Ui(e, t, n = !1) {
    const s = e.children,
        r = t.children;
    if (q(s) && q(r))
        for (let i = 0; i < s.length; i++) {
            const o = s[i];
            let l = r[i];
            l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = It(r[i]), l.el = o.el), !n && l.patchFlag !== -2 && Ui(o, l)), l.type === Gt && (l.el = o.el), l.type === Se && !l.el && (l.el = o.el)
        }
}

function Df(e) {
    const t = e.slice(),
        n = [0];
    let s, r, i, o, l;
    const a = e.length;
    for (s = 0; s < a; s++) {
        const u = e[s];
        if (u !== 0) {
            if (r = n[n.length - 1], e[r] < u) {
                t[s] = r, n.push(s);
                continue
            }
            for (i = 0, o = n.length - 1; i < o;) l = i + o >> 1, e[n[l]] < u ? i = l + 1 : o = l;
            u < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), n[i] = s)
        }
    }
    for (i = n.length, o = n[i - 1]; i-- > 0;) n[i] = o, o = t[o];
    return n
}

function Va(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : Va(t)
}

function Co(e) {
    if (e)
        for (let t = 0; t < e.length; t++) e[t].flags |= 8
}
const Lf = Symbol.for("v-scx"),
    Hf = () => He(Lf);

function Qa(e, t) {
    return ns(e, null, t)
}

function Wg(e, t) {
    return ns(e, null, {
        flush: "post"
    })
}

function jf(e, t) {
    return ns(e, null, {
        flush: "sync"
    })
}

function le(e, t, n) {
    return ns(e, t, n)
}

function ns(e, t, n = oe) {
    const {
        immediate: s,
        deep: r,
        flush: i,
        once: o
    } = n, l = Ee({}, n), a = t && s || !t && i !== "post";
    let u;
    if (yn) {
        if (i === "sync") {
            const d = Hf();
            u = d.__watcherHandles || (d.__watcherHandles = [])
        } else if (!a) {
            const d = () => {};
            return d.stop = pt, d.resume = pt, d.pause = pt, d
        }
    }
    const c = Pe;
    l.call = (d, p, g) => lt(d, c, p, g);
    let f = !1;
    i === "post" ? l.scheduler = d => {
        Ie(d, c && c.suspense)
    } : i !== "sync" && (f = !0, l.scheduler = (d, p) => {
        p ? d() : ki(d)
    }), l.augmentJob = d => {
        t && (d.flags |= 4), f && (d.flags |= 2, c && (d.id = c.uid, d.i = c))
    };
    const h = Yu(e, t, l);
    return yn && (u ? u.push(h) : a && h()), h
}

function Nf(e, t, n) {
    const s = this.proxy,
        r = be(e) ? e.includes(".") ? Wa(s, e) : () => s[e] : e.bind(s, s);
    let i;
    Z(t) ? i = t : (i = t.handler, n = t);
    const o = Xt(this),
        l = ns(r, i.bind(s), n);
    return o(), l
}

function Wa(e, t) {
    const n = t.split(".");
    return () => {
        let s = e;
        for (let r = 0; r < n.length && s; r++) s = s[n[r]];
        return s
    }
}

function Kg(e, t, n = oe) {
    const s = nt(),
        r = qe(t),
        i = Ot(t),
        o = Ka(e, r),
        l = Mi((a, u) => {
            let c, f = oe,
                h;
            return jf(() => {
                const d = e[r];
                Ue(c, d) && (c = d, u())
            }), {
                get() {
                    return a(), n.get ? n.get(c) : c
                },
                set(d) {
                    const p = n.set ? n.set(d) : d;
                    if (!Ue(p, c) && !(f !== oe && Ue(d, f))) return;
                    const g = s.vnode.props;
                    g && (t in g || r in g || i in g) && (`onUpdate:${t}` in g || `onUpdate:${r}` in g || `onUpdate:${i}` in g) || (c = d, u()), s.emit(`update:${t}`, p), Ue(d, p) && Ue(d, f) && !Ue(p, h) && u(), f = d, h = p
                }
            }
        });
    return l[Symbol.iterator] = () => {
        let a = 0;
        return {
            next() {
                return a < 2 ? {
                    value: a++ ? o || oe : l,
                    done: !1
                } : {
                    done: !0
                }
            }
        }
    }, l
}
const Ka = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${qe(t)}Modifiers`] || e[`${Ot(t)}Modifiers`];

function $f(e, t, ...n) {
    if (e.isUnmounted) return;
    const s = e.vnode.props || oe;
    let r = n;
    const i = t.startsWith("update:"),
        o = i && Ka(s, t.slice(7));
    o && (o.trim && (r = n.map(c => be(c) ? c.trim() : c)), o.number && (r = n.map(Ps)));
    let l, a = s[l = hr(t)] || s[l = hr(qe(t))];
    !a && i && (a = s[l = hr(Ot(t))]), a && lt(a, e, 6, r);
    const u = s[l + "Once"];
    if (u) {
        if (!e.emitted) e.emitted = {};
        else if (e.emitted[l]) return;
        e.emitted[l] = !0, lt(u, e, 6, r)
    }
}

function qa(e, t, n = !1) {
    const s = t.emitsCache,
        r = s.get(e);
    if (r !== void 0) return r;
    const i = e.emits;
    let o = {},
        l = !1;
    if (!Z(e)) {
        const a = u => {
            const c = qa(u, t, !0);
            c && (l = !0, Ee(o, c))
        };
        !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a)
    }
    return !i && !l ? (de(e) && s.set(e, null), null) : (q(i) ? i.forEach(a => o[a] = null) : Ee(o, i), de(e) && s.set(e, o), o)
}

function rr(e, t) {
    return !e || !Yn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ce(e, t[0].toLowerCase() + t.slice(1)) || ce(e, Ot(t)) || ce(e, t))
}

function wr(e) {
    const {
        type: t,
        vnode: n,
        proxy: s,
        withProxy: r,
        propsOptions: [i],
        slots: o,
        attrs: l,
        emit: a,
        render: u,
        renderCache: c,
        props: f,
        data: h,
        setupState: d,
        ctx: p,
        inheritAttrs: g
    } = e, _ = Fs(e);
    let v, w;
    try {
        if (n.shapeFlag & 4) {
            const C = r || s,
                S = C;
            v = Ke(u.call(S, C, c, f, d, h, p)), w = l
        } else {
            const C = t;
            v = Ke(C.length > 1 ? C(f, {
                attrs: l,
                slots: o,
                emit: a
            }) : C(f, null)), w = t.props ? l : Bf(l)
        }
    } catch (C) {
        jn.length = 0, Sn(C, e, 1), v = Ce(Se)
    }
    let y = v;
    if (w && g !== !1) {
        const C = Object.keys(w),
            {
                shapeFlag: S
            } = y;
        C.length && S & 7 && (i && C.some(_i) && (w = Vf(w, i)), y = jt(y, w, !1, !0))
    }
    return n.dirs && (y = jt(y, null, !1, !0), y.dirs = y.dirs ? y.dirs.concat(n.dirs) : n.dirs), n.transition && Kn(y, n.transition), v = y, Fs(_), v
}

function Uf(e, t = !0) {
    let n;
    for (let s = 0; s < e.length; s++) {
        const r = e[s];
        if (mn(r)) {
            if (r.type !== Se || r.children === "v-if") {
                if (n) return;
                n = r
            }
        } else return
    }
    return n
}
const Bf = e => {
        let t;
        for (const n in e)(n === "class" || n === "style" || Yn(n)) && ((t || (t = {}))[n] = e[n]);
        return t
    },
    Vf = (e, t) => {
        const n = {};
        for (const s in e)(!_i(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
        return n
    };

function Qf(e, t, n) {
    const {
        props: s,
        children: r,
        component: i
    } = e, {
        props: o,
        children: l,
        patchFlag: a
    } = t, u = i.emitsOptions;
    if (t.dirs || t.transition) return !0;
    if (n && a >= 0) {
        if (a & 1024) return !0;
        if (a & 16) return s ? So(s, o, u) : !!o;
        if (a & 8) {
            const c = t.dynamicProps;
            for (let f = 0; f < c.length; f++) {
                const h = c[f];
                if (o[h] !== s[h] && !rr(u, h)) return !0
            }
        }
    } else return (r || l) && (!l || !l.$stable) ? !0 : s === o ? !1 : s ? o ? So(s, o, u) : !0 : !!o;
    return !1
}

function So(e, t, n) {
    const s = Object.keys(t);
    if (s.length !== Object.keys(e).length) return !0;
    for (let r = 0; r < s.length; r++) {
        const i = s[r];
        if (t[i] !== e[i] && !rr(n, i)) return !0
    }
    return !1
}

function ir({
    vnode: e,
    parent: t
}, n) {
    for (; t;) {
        const s = t.subTree;
        if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)(e = t.vnode).el = n, t = t.parent;
        else break
    }
}
const Ga = e => e.__isSuspense;
let Xr = 0;
const Wf = {
        name: "Suspense",
        __isSuspense: !0,
        process(e, t, n, s, r, i, o, l, a, u) {
            if (e == null) Kf(t, n, s, r, i, o, l, a, u);
            else {
                if (i && i.deps > 0 && !e.suspense.isInFallback) {
                    t.suspense = e.suspense, t.suspense.vnode = t, t.el = e.el;
                    return
                }
                qf(e, t, n, s, r, o, l, a, u)
            }
        },
        hydrate: Gf,
        normalize: zf
    },
    qg = Wf;

function Gn(e, t) {
    const n = e.props && e.props[t];
    Z(n) && n()
}

function Kf(e, t, n, s, r, i, o, l, a) {
    const {
        p: u,
        o: {
            createElement: c
        }
    } = a, f = c("div"), h = e.suspense = za(e, r, s, t, f, n, i, o, l, a);
    u(null, h.pendingBranch = e.ssContent, f, null, s, h, i, o), h.deps > 0 ? (Gn(e, "onPending"), Gn(e, "onFallback"), u(null, e.ssFallback, t, n, s, null, i, o), pn(h, e.ssFallback)) : h.resolve(!1, !0)
}

function qf(e, t, n, s, r, i, o, l, {
    p: a,
    um: u,
    o: {
        createElement: c
    }
}) {
    const f = t.suspense = e.suspense;
    f.vnode = t, t.el = e.el;
    const h = t.ssContent,
        d = t.ssFallback,
        {
            activeBranch: p,
            pendingBranch: g,
            isInFallback: _,
            isHydrating: v
        } = f;
    if (g) f.pendingBranch = h, dt(h, g) ? (a(g, h, f.hiddenContainer, null, r, f, i, o, l), f.deps <= 0 ? f.resolve() : _ && (v || (a(p, d, n, s, r, null, i, o, l), pn(f, d)))) : (f.pendingId = Xr++, v ? (f.isHydrating = !1, f.activeBranch = g) : u(g, r, f), f.deps = 0, f.effects.length = 0, f.hiddenContainer = c("div"), _ ? (a(null, h, f.hiddenContainer, null, r, f, i, o, l), f.deps <= 0 ? f.resolve() : (a(p, d, n, s, r, null, i, o, l), pn(f, d))) : p && dt(h, p) ? (a(p, h, n, s, r, f, i, o, l), f.resolve(!0)) : (a(null, h, f.hiddenContainer, null, r, f, i, o, l), f.deps <= 0 && f.resolve()));
    else if (p && dt(h, p)) a(p, h, n, s, r, f, i, o, l), pn(f, h);
    else if (Gn(t, "onPending"), f.pendingBranch = h, h.shapeFlag & 512 ? f.pendingId = h.component.suspenseId : f.pendingId = Xr++, a(null, h, f.hiddenContainer, null, r, f, i, o, l), f.deps <= 0) f.resolve();
    else {
        const {
            timeout: w,
            pendingId: y
        } = f;
        w > 0 ? setTimeout(() => {
            f.pendingId === y && f.fallback(d)
        }, w) : w === 0 && f.fallback(d)
    }
}

function za(e, t, n, s, r, i, o, l, a, u, c = !1) {
    const {
        p: f,
        m: h,
        um: d,
        n: p,
        o: {
            parentNode: g,
            remove: _
        }
    } = u;
    let v;
    const w = Yf(e);
    w && t && t.pendingBranch && (v = t.pendingId, t.deps++);
    const y = e.props ? jl(e.props.timeout) : void 0,
        C = i,
        S = {
            vnode: e,
            parent: t,
            parentComponent: n,
            namespace: o,
            container: s,
            hiddenContainer: r,
            deps: 0,
            pendingId: Xr++,
            timeout: typeof y == "number" ? y : -1,
            activeBranch: null,
            pendingBranch: null,
            isInFallback: !c,
            isHydrating: c,
            isUnmounted: !1,
            effects: [],
            resolve(A = !1, O = !1) {
                const {
                    vnode: P,
                    activeBranch: E,
                    pendingBranch: x,
                    pendingId: H,
                    effects: k,
                    parentComponent: W,
                    container: V
                } = S;
                let X = !1;
                S.isHydrating ? S.isHydrating = !1 : A || (X = E && x.transition && x.transition.mode === "out-in", X && (E.transition.afterLeave = () => {
                    H === S.pendingId && (h(x, V, i === C ? p(E) : i, 0), Wr(k))
                }), E && (g(E.el) === V && (i = p(E)), d(E, W, S, !0)), X || h(x, V, i, 0)), pn(S, x), S.pendingBranch = null, S.isInFallback = !1;
                let L = S.parent,
                    ne = !1;
                for (; L;) {
                    if (L.pendingBranch) {
                        L.effects.push(...k), ne = !0;
                        break
                    }
                    L = L.parent
                }!ne && !X && Wr(k), S.effects = [], w && t && t.pendingBranch && v === t.pendingId && (t.deps--, t.deps === 0 && !O && t.resolve()), Gn(P, "onResolve")
            },
            fallback(A) {
                if (!S.pendingBranch) return;
                const {
                    vnode: O,
                    activeBranch: P,
                    parentComponent: E,
                    container: x,
                    namespace: H
                } = S;
                Gn(O, "onFallback");
                const k = p(P),
                    W = () => {
                        S.isInFallback && (f(null, A, x, k, E, null, H, l, a), pn(S, A))
                    },
                    V = A.transition && A.transition.mode === "out-in";
                V && (P.transition.afterLeave = W), S.isInFallback = !0, d(P, E, null, !0), V || W()
            },
            move(A, O, P) {
                S.activeBranch && h(S.activeBranch, A, O, P), S.container = A
            },
            next() {
                return S.activeBranch && p(S.activeBranch)
            },
            registerDep(A, O, P) {
                const E = !!S.pendingBranch;
                E && S.deps++;
                const x = A.vnode.el;
                A.asyncDep.catch(H => {
                    Sn(H, A, 0)
                }).then(H => {
                    if (A.isUnmounted || S.isUnmounted || S.pendingId !== A.suspenseId) return;
                    A.asyncResolved = !0;
                    const {
                        vnode: k
                    } = A;
                    ni(A, H), x && (k.el = x);
                    const W = !x && A.subTree.el;
                    O(A, k, g(x || A.subTree.el), x ? null : p(A.subTree), S, o, P), W && _(W), ir(A, k.el), E && --S.deps === 0 && S.resolve()
                })
            },
            unmount(A, O) {
                S.isUnmounted = !0, S.activeBranch && d(S.activeBranch, n, A, O), S.pendingBranch && d(S.pendingBranch, n, A, O)
            }
        };
    return S
}

function Gf(e, t, n, s, r, i, o, l, a) {
    const u = t.suspense = za(t, s, n, e.parentNode, document.createElement("div"), null, r, i, o, l, !0),
        c = a(e, u.pendingBranch = t.ssContent, n, u, i, o);
    return u.deps === 0 && u.resolve(!1, !0), c
}

function zf(e) {
    const {
        shapeFlag: t,
        children: n
    } = e, s = t & 32;
    e.ssContent = Eo(s ? n.default : n), e.ssFallback = s ? Eo(n.fallback) : Ce(Se)
}

function Eo(e) {
    let t;
    if (Z(e)) {
        const n = gn && e._c;
        n && (e._d = !1, Ds()), e = e(), n && (e._d = !0, t = Be, Ja())
    }
    return q(e) && (e = Uf(e)), e = Ke(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter(n => n !== e)), e
}

function Ya(e, t) {
    t && t.pendingBranch ? q(e) ? t.effects.push(...e) : t.effects.push(e) : Wr(e)
}

function pn(e, t) {
    e.activeBranch = t;
    const {
        vnode: n,
        parentComponent: s
    } = e;
    let r = t.el;
    for (; !r && t.component;) t = t.component.subTree, r = t.el;
    n.el = r, s && s.subTree === n && (s.vnode.el = r, ir(s, r))
}

function Yf(e) {
    const t = e.props && e.props.suspensible;
    return t != null && t !== !1
}
const Le = Symbol.for("v-fgt"),
    Gt = Symbol.for("v-txt"),
    Se = Symbol.for("v-cmt"),
    Hn = Symbol.for("v-stc"),
    jn = [];
let Be = null;

function Ds(e = !1) {
    jn.push(Be = e ? null : [])
}

function Ja() {
    jn.pop(), Be = jn[jn.length - 1] || null
}
let gn = 1;

function Oo(e, t = !1) {
    gn += e, e < 0 && Be && t && (Be.hasOnce = !0)
}

function Xa(e) {
    return e.dynamicChildren = gn > 0 ? Be || cn : null, Ja(), gn > 0 && Be && Be.push(e), e
}

function Gg(e, t, n, s, r, i) {
    return Xa(ec(e, t, n, s, r, i, !0))
}

function Zr(e, t, n, s, r) {
    return Xa(Ce(e, t, n, s, r, !0))
}

function mn(e) {
    return e ? e.__v_isVNode === !0 : !1
}

function dt(e, t) {
    return e.type === t.type && e.key === t.key
}
const Za = ({
        key: e
    }) => e ? ? null,
    bs = ({
        ref: e,
        ref_key: t,
        ref_for: n
    }) => (typeof e == "number" && (e = "" + e), e != null ? be(e) || he(e) || Z(e) ? {
        i: xe,
        r: e,
        k: t,
        f: !!n
    } : e : null);

function ec(e, t = null, n = null, s = 0, r = null, i = e === Le ? 0 : 1, o = !1, l = !1) {
    const a = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && Za(t),
        ref: t && bs(t),
        scopeId: pa,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetStart: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: i,
        patchFlag: s,
        dynamicProps: r,
        dynamicChildren: null,
        appContext: null,
        ctx: xe
    };
    return l ? (Bi(a, n), i & 128 && e.normalize(a)) : n && (a.shapeFlag |= be(n) ? 8 : 16), gn > 0 && !o && Be && (a.patchFlag > 0 || i & 6) && a.patchFlag !== 32 && Be.push(a), a
}
const Ce = Jf;

function Jf(e, t = null, n = null, s = 0, r = null, i = !1) {
    if ((!e || e === xa) && (e = Se), mn(e)) {
        const l = jt(e, t, !0);
        return n && Bi(l, n), gn > 0 && !i && Be && (l.shapeFlag & 6 ? Be[Be.indexOf(e)] = l : Be.push(l)), l.patchFlag = -2, l
    }
    if (lh(e) && (e = e.__vccOpts), t) {
        t = Xf(t);
        let {
            class: l,
            style: a
        } = t;
        l && !be(l) && (t.class = qs(l)), de(a) && (Ai(a) && !q(a) && (a = Ee({}, a)), t.style = Ks(a))
    }
    const o = be(e) ? 1 : Ga(e) ? 128 : ma(e) ? 64 : de(e) ? 4 : Z(e) ? 2 : 0;
    return ec(e, t, n, s, r, o, i, !0)
}

function Xf(e) {
    return e ? Ai(e) || Da(e) ? Ee({}, e) : e : null
}

function jt(e, t, n = !1, s = !1) {
    const {
        props: r,
        ref: i,
        patchFlag: o,
        children: l,
        transition: a
    } = e, u = t ? Zf(r || {}, t) : r, c = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: u,
        key: u && Za(u),
        ref: t && t.ref ? n && i ? q(i) ? i.concat(bs(t)) : [i, bs(t)] : bs(t) : i,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: l,
        target: e.target,
        targetStart: e.targetStart,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== Le ? o === -1 ? 16 : o | 16 : o,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: a,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && jt(e.ssContent),
        ssFallback: e.ssFallback && jt(e.ssFallback),
        placeholder: e.placeholder,
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    };
    return a && s && Kn(c, a.clone(c)), c
}

function tc(e = " ", t = 0) {
    return Ce(Gt, null, e, t)
}

function zg(e, t) {
    const n = Ce(Hn, null, e);
    return n.staticCount = t, n
}

function Yg(e = "", t = !1) {
    return t ? (Ds(), Zr(Se, null, e)) : Ce(Se, null, e)
}

function Ke(e) {
    return e == null || typeof e == "boolean" ? Ce(Se) : q(e) ? Ce(Le, null, e.slice()) : mn(e) ? It(e) : Ce(Gt, null, String(e))
}

function It(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : jt(e)
}

function Bi(e, t) {
    let n = 0;
    const {
        shapeFlag: s
    } = e;
    if (t == null) t = null;
    else if (q(t)) n = 16;
    else if (typeof t == "object")
        if (s & 65) {
            const r = t.default;
            r && (r._c && (r._d = !1), Bi(e, r()), r._c && (r._d = !0));
            return
        } else {
            n = 32;
            const r = t._;
            !r && !Da(t) ? t._ctx = xe : r === 3 && xe && (xe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
        }
    else Z(t) ? (t = {
        default: t,
        _ctx: xe
    }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [tc(t)]) : n = 8);
    e.children = t, e.shapeFlag |= n
}

function Zf(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const s = e[n];
        for (const r in s)
            if (r === "class") t.class !== s.class && (t.class = qs([t.class, s.class]));
            else if (r === "style") t.style = Ks([t.style, s.style]);
        else if (Yn(r)) {
            const i = t[r],
                o = s[r];
            o && i !== o && !(q(i) && i.includes(o)) && (t[r] = i ? [].concat(i, o) : o)
        } else r !== "" && (t[r] = s[r])
    }
    return t
}

function Ye(e, t, n, s = null) {
    lt(e, t, 7, [n, s])
}
const eh = ka();
let th = 0;

function nh(e, t, n) {
    const s = e.type,
        r = (t ? t.appContext : e.appContext) || eh,
        i = {
            uid: th++,
            vnode: e,
            type: s,
            parent: t,
            appContext: r,
            root: null,
            next: null,
            subTree: null,
            effect: null,
            update: null,
            job: null,
            scope: new Bl(!0),
            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: t ? t.provides : Object.create(r.provides),
            ids: t ? t.ids : ["", 0, 0],
            accessCache: null,
            renderCache: [],
            components: null,
            directives: null,
            propsOptions: Ha(s, r),
            emitsOptions: qa(s, r),
            emit: null,
            emitted: null,
            propsDefaults: oe,
            inheritAttrs: s.inheritAttrs,
            ctx: oe,
            data: oe,
            props: oe,
            attrs: oe,
            slots: oe,
            refs: oe,
            setupState: oe,
            setupContext: null,
            suspense: n,
            suspenseId: n ? n.pendingId : 0,
            asyncDep: null,
            asyncResolved: !1,
            isMounted: !1,
            isUnmounted: !1,
            isDeactivated: !1,
            bc: null,
            c: null,
            bm: null,
            m: null,
            bu: null,
            u: null,
            um: null,
            bum: null,
            da: null,
            a: null,
            rtg: null,
            rtc: null,
            ec: null,
            sp: null
        };
    return i.ctx = {
        _: i
    }, i.root = t ? t.root : i, i.emit = $f.bind(null, i), e.ce && e.ce(i), i
}
let Pe = null;
const nt = () => Pe || xe;
let Ls, ei; {
    const e = Ws(),
        t = (n, s) => {
            let r;
            return (r = e[n]) || (r = e[n] = []), r.push(s), i => {
                r.length > 1 ? r.forEach(o => o(i)) : r[0](i)
            }
        };
    Ls = t("__VUE_INSTANCE_SETTERS__", n => Pe = n), ei = t("__VUE_SSR_SETTERS__", n => yn = n)
}
const Xt = e => {
        const t = Pe;
        return Ls(e), e.scope.on(), () => {
            e.scope.off(), Ls(t)
        }
    },
    ti = () => {
        Pe && Pe.scope.off(), Ls(null)
    };

function nc(e) {
    return e.vnode.shapeFlag & 4
}
let yn = !1;

function sh(e, t = !1, n = !1) {
    t && ei(t);
    const {
        props: s,
        children: r
    } = e.vnode, i = nc(e);
    Pf(e, s, i, t), Mf(e, r, n || t);
    const o = i ? rh(e, t) : void 0;
    return t && ei(!1), o
}

function rh(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null), e.proxy = new Proxy(e.ctx, vf);
    const {
        setup: s
    } = n;
    if (s) {
        St();
        const r = e.setupContext = s.length > 1 ? rc(e) : null,
            i = Xt(e),
            o = es(s, e, 0, [e.props, r]),
            l = Ci(o);
        if (Et(), i(), (l || e.sp) && !Kt(e) && Ii(e), l) {
            if (o.then(ti, ti), t) return o.then(a => {
                ni(e, a)
            }).catch(a => {
                Sn(a, e, 0)
            });
            e.asyncDep = o
        } else ni(e, o)
    } else sc(e)
}

function ni(e, t, n) {
    Z(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : de(t) && (e.setupState = aa(t)), sc(e)
}

function sc(e, t, n) {
    const s = e.type;
    e.render || (e.render = s.render || pt); {
        const r = Xt(e);
        St();
        try {
            _f(e)
        } finally {
            Et(), r()
        }
    }
}
const ih = {
    get(e, t) {
        return ke(e, "get", ""), e[t]
    }
};

function rc(e) {
    const t = n => {
        e.exposed = n || {}
    };
    return {
        attrs: new Proxy(e.attrs, ih),
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}

function or(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(aa(Ri(e.exposed)), {
        get(t, n) {
            if (n in t) return t[n];
            if (n in Ln) return Ln[n](e)
        },
        has(t, n) {
            return n in t || n in Ln
        }
    })) : e.proxy
}

function oh(e, t = !0) {
    return Z(e) ? e.displayName || e.name : e.name || t && e.__name
}

function lh(e) {
    return Z(e) && "__vccOpts" in e
}
const ue = (e, t) => Gu(e, t, yn);

function Vi(e, t, n) {
    const s = arguments.length;
    return s === 2 ? de(t) && !q(t) ? mn(t) ? Ce(e, null, [t]) : Ce(e, t) : Ce(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && mn(n) && (n = [n]), Ce(e, t, n))
}
const ic = "3.5.18";
let si;
const To = typeof window < "u" && window.trustedTypes;
if (To) try {
    si = To.createPolicy("vue", {
        createHTML: e => e
    })
} catch {}
const oc = si ? e => si.createHTML(e) : e => e,
    ah = "http://www.w3.org/2000/svg",
    ch = "http://www.w3.org/1998/Math/MathML",
    bt = typeof document < "u" ? document : null,
    Po = bt && bt.createElement("template"),
    uh = {
        insert: (e, t, n) => {
            t.insertBefore(e, n || null)
        },
        remove: e => {
            const t = e.parentNode;
            t && t.removeChild(e)
        },
        createElement: (e, t, n, s) => {
            const r = t === "svg" ? bt.createElementNS(ah, e) : t === "mathml" ? bt.createElementNS(ch, e) : n ? bt.createElement(e, {
                is: n
            }) : bt.createElement(e);
            return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r
        },
        createText: e => bt.createTextNode(e),
        createComment: e => bt.createComment(e),
        setText: (e, t) => {
            e.nodeValue = t
        },
        setElementText: (e, t) => {
            e.textContent = t
        },
        parentNode: e => e.parentNode,
        nextSibling: e => e.nextSibling,
        querySelector: e => bt.querySelector(e),
        setScopeId(e, t) {
            e.setAttribute(t, "")
        },
        insertStaticContent(e, t, n, s, r, i) {
            const o = n ? n.previousSibling : t.lastChild;
            if (r && (r === i || r.nextSibling))
                for (; t.insertBefore(r.cloneNode(!0), n), !(r === i || !(r = r.nextSibling)););
            else {
                Po.innerHTML = oc(s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e);
                const l = Po.content;
                if (s === "svg" || s === "mathml") {
                    const a = l.firstChild;
                    for (; a.firstChild;) l.appendChild(a.firstChild);
                    l.removeChild(a)
                }
                t.insertBefore(l, n)
            }
            return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
        }
    },
    xt = "transition",
    Pn = "animation",
    zn = Symbol("_vtc"),
    lc = {
        name: String,
        type: String,
        css: {
            type: Boolean,
            default: !0
        },
        duration: [String, Number, Object],
        enterFromClass: String,
        enterActiveClass: String,
        enterToClass: String,
        appearFromClass: String,
        appearActiveClass: String,
        appearToClass: String,
        leaveFromClass: String,
        leaveActiveClass: String,
        leaveToClass: String
    },
    fh = Ee({}, ba, lc),
    hh = e => (e.displayName = "Transition", e.props = fh, e),
    Jg = hh((e, {
        slots: t
    }) => Vi(sf, dh(e), t)),
    Bt = (e, t = []) => {
        q(e) ? e.forEach(n => n(...t)) : e && e(...t)
    },
    xo = e => e ? q(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;

function dh(e) {
    const t = {};
    for (const k in e) k in lc || (t[k] = e[k]);
    if (e.css === !1) return t;
    const {
        name: n = "v",
        type: s,
        duration: r,
        enterFromClass: i = `${n}-enter-from`,
        enterActiveClass: o = `${n}-enter-active`,
        enterToClass: l = `${n}-enter-to`,
        appearFromClass: a = i,
        appearActiveClass: u = o,
        appearToClass: c = l,
        leaveFromClass: f = `${n}-leave-from`,
        leaveActiveClass: h = `${n}-leave-active`,
        leaveToClass: d = `${n}-leave-to`
    } = e, p = ph(r), g = p && p[0], _ = p && p[1], {
        onBeforeEnter: v,
        onEnter: w,
        onEnterCancelled: y,
        onLeave: C,
        onLeaveCancelled: S,
        onBeforeAppear: A = v,
        onAppear: O = w,
        onAppearCancelled: P = y
    } = t, E = (k, W, V, X) => {
        k._enterCancelled = X, Vt(k, W ? c : l), Vt(k, W ? u : o), V && V()
    }, x = (k, W) => {
        k._isLeaving = !1, Vt(k, f), Vt(k, d), Vt(k, h), W && W()
    }, H = k => (W, V) => {
        const X = k ? O : w,
            L = () => E(W, k, V);
        Bt(X, [W, L]), Ao(() => {
            Vt(W, k ? a : i), yt(W, k ? c : l), xo(X) || Ro(W, s, g, L)
        })
    };
    return Ee(t, {
        onBeforeEnter(k) {
            Bt(v, [k]), yt(k, i), yt(k, o)
        },
        onBeforeAppear(k) {
            Bt(A, [k]), yt(k, a), yt(k, u)
        },
        onEnter: H(!1),
        onAppear: H(!0),
        onLeave(k, W) {
            k._isLeaving = !0;
            const V = () => x(k, W);
            yt(k, f), k._enterCancelled ? (yt(k, h), Fo()) : (Fo(), yt(k, h)), Ao(() => {
                k._isLeaving && (Vt(k, f), yt(k, d), xo(C) || Ro(k, s, _, V))
            }), Bt(C, [k, V])
        },
        onEnterCancelled(k) {
            E(k, !1, void 0, !0), Bt(y, [k])
        },
        onAppearCancelled(k) {
            E(k, !0, void 0, !0), Bt(P, [k])
        },
        onLeaveCancelled(k) {
            x(k), Bt(S, [k])
        }
    })
}

function ph(e) {
    if (e == null) return null;
    if (de(e)) return [Cr(e.enter), Cr(e.leave)]; {
        const t = Cr(e);
        return [t, t]
    }
}

function Cr(e) {
    return jl(e)
}

function yt(e, t) {
    t.split(/\s+/).forEach(n => n && e.classList.add(n)), (e[zn] || (e[zn] = new Set)).add(t)
}

function Vt(e, t) {
    t.split(/\s+/).forEach(s => s && e.classList.remove(s));
    const n = e[zn];
    n && (n.delete(t), n.size || (e[zn] = void 0))
}

function Ao(e) {
    requestAnimationFrame(() => {
        requestAnimationFrame(e)
    })
}
let gh = 0;

function Ro(e, t, n, s) {
    const r = e._endId = ++gh,
        i = () => {
            r === e._endId && s()
        };
    if (n != null) return setTimeout(i, n);
    const {
        type: o,
        timeout: l,
        propCount: a
    } = mh(e, t);
    if (!o) return s();
    const u = o + "end";
    let c = 0;
    const f = () => {
            e.removeEventListener(u, h), i()
        },
        h = d => {
            d.target === e && ++c >= a && f()
        };
    setTimeout(() => {
        c < a && f()
    }, l + 1), e.addEventListener(u, h)
}

function mh(e, t) {
    const n = window.getComputedStyle(e),
        s = p => (n[p] || "").split(", "),
        r = s(`${xt}Delay`),
        i = s(`${xt}Duration`),
        o = Mo(r, i),
        l = s(`${Pn}Delay`),
        a = s(`${Pn}Duration`),
        u = Mo(l, a);
    let c = null,
        f = 0,
        h = 0;
    t === xt ? o > 0 && (c = xt, f = o, h = i.length) : t === Pn ? u > 0 && (c = Pn, f = u, h = a.length) : (f = Math.max(o, u), c = f > 0 ? o > u ? xt : Pn : null, h = c ? c === xt ? i.length : a.length : 0);
    const d = c === xt && /\b(transform|all)(,|$)/.test(s(`${xt}Property`).toString());
    return {
        type: c,
        timeout: f,
        propCount: h,
        hasTransform: d
    }
}

function Mo(e, t) {
    for (; e.length < t.length;) e = e.concat(e);
    return Math.max(...t.map((n, s) => ko(n) + ko(e[s])))
}

function ko(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3
}

function Fo() {
    return document.body.offsetHeight
}

function yh(e, t, n) {
    const s = e[zn];
    s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}
const Hs = Symbol("_vod"),
    ac = Symbol("_vsh"),
    Xg = {
        beforeMount(e, {
            value: t
        }, {
            transition: n
        }) {
            e[Hs] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : xn(e, t)
        },
        mounted(e, {
            value: t
        }, {
            transition: n
        }) {
            n && t && n.enter(e)
        },
        updated(e, {
            value: t,
            oldValue: n
        }, {
            transition: s
        }) {
            !t != !n && (s ? t ? (s.beforeEnter(e), xn(e, !0), s.enter(e)) : s.leave(e, () => {
                xn(e, !1)
            }) : xn(e, t))
        },
        beforeUnmount(e, {
            value: t
        }) {
            xn(e, t)
        }
    };

function xn(e, t) {
    e.style.display = t ? e[Hs] : "none", e[ac] = !t
}
const vh = Symbol(""),
    bh = /(^|;)\s*display\s*:/;

function _h(e, t, n) {
    const s = e.style,
        r = be(n);
    let i = !1;
    if (n && !r) {
        if (t)
            if (be(t))
                for (const o of t.split(";")) {
                    const l = o.slice(0, o.indexOf(":")).trim();
                    n[l] == null && _s(s, l, "")
                } else
                    for (const o in t) n[o] == null && _s(s, o, "");
        for (const o in n) o === "display" && (i = !0), _s(s, o, n[o])
    } else if (r) {
        if (t !== n) {
            const o = s[vh];
            o && (n += ";" + o), s.cssText = n, i = bh.test(n)
        }
    } else t && e.removeAttribute("style");
    Hs in e && (e[Hs] = i ? s.display : "", e[ac] && (s.display = "none"))
}
const Io = /\s*!important$/;

function _s(e, t, n) {
    if (q(n)) n.forEach(s => _s(e, t, s));
    else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
    else {
        const s = wh(e, t);
        Io.test(n) ? e.setProperty(Ot(s), n.replace(Io, ""), "important") : e[s] = n
    }
}
const Do = ["Webkit", "Moz", "ms"],
    Sr = {};

function wh(e, t) {
    const n = Sr[t];
    if (n) return n;
    let s = qe(t);
    if (s !== "filter" && s in e) return Sr[t] = s;
    s = Qs(s);
    for (let r = 0; r < Do.length; r++) {
        const i = Do[r] + s;
        if (i in e) return Sr[t] = i
    }
    return t
}
const Lo = "http://www.w3.org/1999/xlink";

function Ho(e, t, n, s, r, i = _u(t)) {
    s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Lo, t.slice(6, t.length)) : e.setAttributeNS(Lo, t, n) : n == null || i && !Nl(n) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : ot(n) ? String(n) : n)
}

function jo(e, t, n, s, r) {
    if (t === "innerHTML" || t === "textContent") {
        n != null && (e[t] = t === "innerHTML" ? oc(n) : n);
        return
    }
    const i = e.tagName;
    if (t === "value" && i !== "PROGRESS" && !i.includes("-")) {
        const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value,
            a = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
        (l !== a || !("_value" in e)) && (e.value = a), n == null && e.removeAttribute(t), e._value = n;
        return
    }
    let o = !1;
    if (n === "" || n == null) {
        const l = typeof e[t];
        l === "boolean" ? n = Nl(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0)
    }
    try {
        e[t] = n
    } catch {}
    o && e.removeAttribute(r || t)
}

function Ct(e, t, n, s) {
    e.addEventListener(t, n, s)
}

function Ch(e, t, n, s) {
    e.removeEventListener(t, n, s)
}
const No = Symbol("_vei");

function Sh(e, t, n, s, r = null) {
    const i = e[No] || (e[No] = {}),
        o = i[t];
    if (s && o) o.value = s;
    else {
        const [l, a] = Eh(t);
        if (s) {
            const u = i[t] = Ph(s, r);
            Ct(e, l, u, a)
        } else o && (Ch(e, l, o, a), i[t] = void 0)
    }
}
const $o = /(?:Once|Passive|Capture)$/;

function Eh(e) {
    let t;
    if ($o.test(e)) {
        t = {};
        let s;
        for (; s = e.match($o);) e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : Ot(e.slice(2)), t]
}
let Er = 0;
const Oh = Promise.resolve(),
    Th = () => Er || (Oh.then(() => Er = 0), Er = Date.now());

function Ph(e, t) {
    const n = s => {
        if (!s._vts) s._vts = Date.now();
        else if (s._vts <= n.attached) return;
        lt(xh(s, n.value), t, 5, [s])
    };
    return n.value = e, n.attached = Th(), n
}

function xh(e, t) {
    if (q(t)) {
        const n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            n.call(e), e._stopped = !0
        }, t.map(s => r => !r._stopped && s && s(r))
    } else return t
}
const Uo = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123,
    Ah = (e, t, n, s, r, i) => {
        const o = r === "svg";
        t === "class" ? yh(e, s, o) : t === "style" ? _h(e, n, s) : Yn(t) ? _i(t) || Sh(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Rh(e, t, s, o)) ? (jo(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ho(e, t, s, o, i, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !be(s)) ? jo(e, qe(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Ho(e, t, s, o))
    };

function Rh(e, t, n, s) {
    if (s) return !!(t === "innerHTML" || t === "textContent" || t in e && Uo(t) && Z(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
    if (t === "width" || t === "height") {
        const r = e.tagName;
        if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE") return !1
    }
    return Uo(t) && be(n) ? !1 : t in e
}
const Nt = e => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return q(t) ? n => ms(t, n) : t
};

function Mh(e) {
    e.target.composing = !0
}

function Bo(e) {
    const t = e.target;
    t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")))
}
const et = Symbol("_assign"),
    Vo = {
        created(e, {
            modifiers: {
                lazy: t,
                trim: n,
                number: s
            }
        }, r) {
            e[et] = Nt(r);
            const i = s || r.props && r.props.type === "number";
            Ct(e, t ? "change" : "input", o => {
                if (o.target.composing) return;
                let l = e.value;
                n && (l = l.trim()), i && (l = Ps(l)), e[et](l)
            }), n && Ct(e, "change", () => {
                e.value = e.value.trim()
            }), t || (Ct(e, "compositionstart", Mh), Ct(e, "compositionend", Bo), Ct(e, "change", Bo))
        },
        mounted(e, {
            value: t
        }) {
            e.value = t ? ? ""
        },
        beforeUpdate(e, {
            value: t,
            oldValue: n,
            modifiers: {
                lazy: s,
                trim: r,
                number: i
            }
        }, o) {
            if (e[et] = Nt(o), e.composing) return;
            const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? Ps(e.value) : e.value,
                a = t ? ? "";
            l !== a && (document.activeElement === e && e.type !== "range" && (s && t === n || r && e.value.trim() === a) || (e.value = a))
        }
    },
    kh = {
        deep: !0,
        created(e, t, n) {
            e[et] = Nt(n), Ct(e, "change", () => {
                const s = e._modelValue,
                    r = vn(e),
                    i = e.checked,
                    o = e[et];
                if (q(s)) {
                    const l = Ei(s, r),
                        a = l !== -1;
                    if (i && !a) o(s.concat(r));
                    else if (!i && a) {
                        const u = [...s];
                        u.splice(l, 1), o(u)
                    }
                } else if (Cn(s)) {
                    const l = new Set(s);
                    i ? l.add(r) : l.delete(r), o(l)
                } else o(cc(e, i))
            })
        },
        mounted: Qo,
        beforeUpdate(e, t, n) {
            e[et] = Nt(n), Qo(e, t, n)
        }
    };

function Qo(e, {
    value: t,
    oldValue: n
}, s) {
    e._modelValue = t;
    let r;
    if (q(t)) r = Ei(t, s.props.value) > -1;
    else if (Cn(t)) r = t.has(s.props.value);
    else {
        if (t === n) return;
        r = Jt(t, cc(e, !0))
    }
    e.checked !== r && (e.checked = r)
}
const Fh = {
        created(e, {
            value: t
        }, n) {
            e.checked = Jt(t, n.props.value), e[et] = Nt(n), Ct(e, "change", () => {
                e[et](vn(e))
            })
        },
        beforeUpdate(e, {
            value: t,
            oldValue: n
        }, s) {
            e[et] = Nt(s), t !== n && (e.checked = Jt(t, s.props.value))
        }
    },
    Ih = {
        deep: !0,
        created(e, {
            value: t,
            modifiers: {
                number: n
            }
        }, s) {
            const r = Cn(t);
            Ct(e, "change", () => {
                const i = Array.prototype.filter.call(e.options, o => o.selected).map(o => n ? Ps(vn(o)) : vn(o));
                e[et](e.multiple ? r ? new Set(i) : i : i[0]), e._assigning = !0, tt(() => {
                    e._assigning = !1
                })
            }), e[et] = Nt(s)
        },
        mounted(e, {
            value: t
        }) {
            Wo(e, t)
        },
        beforeUpdate(e, t, n) {
            e[et] = Nt(n)
        },
        updated(e, {
            value: t
        }) {
            e._assigning || Wo(e, t)
        }
    };

function Wo(e, t) {
    const n = e.multiple,
        s = q(t);
    if (!(n && !s && !Cn(t))) {
        for (let r = 0, i = e.options.length; r < i; r++) {
            const o = e.options[r],
                l = vn(o);
            if (n)
                if (s) {
                    const a = typeof l;
                    a === "string" || a === "number" ? o.selected = t.some(u => String(u) === String(l)) : o.selected = Ei(t, l) > -1
                } else o.selected = t.has(l);
            else if (Jt(vn(o), t)) {
                e.selectedIndex !== r && (e.selectedIndex = r);
                return
            }
        }!n && e.selectedIndex !== -1 && (e.selectedIndex = -1)
    }
}

function vn(e) {
    return "_value" in e ? e._value : e.value
}

function cc(e, t) {
    const n = t ? "_trueValue" : "_falseValue";
    return n in e ? e[n] : t
}
const Zg = {
    created(e, t, n) {
        hs(e, t, n, null, "created")
    },
    mounted(e, t, n) {
        hs(e, t, n, null, "mounted")
    },
    beforeUpdate(e, t, n, s) {
        hs(e, t, n, s, "beforeUpdate")
    },
    updated(e, t, n, s) {
        hs(e, t, n, s, "updated")
    }
};

function Dh(e, t) {
    switch (e) {
        case "SELECT":
            return Ih;
        case "TEXTAREA":
            return Vo;
        default:
            switch (t) {
                case "checkbox":
                    return kh;
                case "radio":
                    return Fh;
                default:
                    return Vo
            }
    }
}

function hs(e, t, n, s, r) {
    const o = Dh(e.tagName, n.props && n.props.type)[r];
    o && o(e, t, n, s)
}
const Lh = ["ctrl", "shift", "alt", "meta"],
    Hh = {
        stop: e => e.stopPropagation(),
        prevent: e => e.preventDefault(),
        self: e => e.target !== e.currentTarget,
        ctrl: e => !e.ctrlKey,
        shift: e => !e.shiftKey,
        alt: e => !e.altKey,
        meta: e => !e.metaKey,
        left: e => "button" in e && e.button !== 0,
        middle: e => "button" in e && e.button !== 1,
        right: e => "button" in e && e.button !== 2,
        exact: (e, t) => Lh.some(n => e[`${n}Key`] && !t.includes(n))
    },
    em = (e, t) => {
        const n = e._withMods || (e._withMods = {}),
            s = t.join(".");
        return n[s] || (n[s] = (r, ...i) => {
            for (let o = 0; o < t.length; o++) {
                const l = Hh[t[o]];
                if (l && l(r, t)) return
            }
            return e(r, ...i)
        })
    },
    jh = {
        esc: "escape",
        space: " ",
        up: "arrow-up",
        left: "arrow-left",
        right: "arrow-right",
        down: "arrow-down",
        delete: "backspace"
    },
    tm = (e, t) => {
        const n = e._withKeys || (e._withKeys = {}),
            s = t.join(".");
        return n[s] || (n[s] = r => {
            if (!("key" in r)) return;
            const i = Ot(r.key);
            if (t.some(o => o === i || jh[o] === i)) return e(r)
        })
    },
    uc = Ee({
        patchProp: Ah
    }, uh);
let Nn, Ko = !1;

function fc() {
    return Nn || (Nn = Ff(uc))
}

function Nh() {
    return Nn = Ko ? Nn : If(uc), Ko = !0, Nn
}
const nm = (...e) => {
        fc().render(...e)
    },
    sm = (...e) => {
        const t = fc().createApp(...e),
            {
                mount: n
            } = t;
        return t.mount = s => {
            const r = dc(s);
            if (!r) return;
            const i = t._component;
            !Z(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
            const o = n(r, !1, hc(r));
            return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o
        }, t
    },
    rm = (...e) => {
        const t = Nh().createApp(...e),
            {
                mount: n
            } = t;
        return t.mount = s => {
            const r = dc(s);
            if (r) return n(r, !0, hc(r))
        }, t
    };

function hc(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml"
}

function dc(e) {
    return be(e) ? document.querySelector(e) : e
}
var $h = "VUE_QUERY_CLIENT";

function pc(e) {
    const t = e ? `:${e}` : "";
    return `${$h}${t}`
}

function ri(e, t) {
    Object.keys(e).forEach(n => {
        e[n] = t[n]
    })
}

function ii(e, t, n = "", s = 0) {
    if (t) {
        const r = t(e, n, s);
        if (r === void 0 && he(e) || r !== void 0) return r
    }
    if (Array.isArray(e)) return e.map((r, i) => ii(r, t, String(i), s + 1));
    if (typeof e == "object" && Bh(e)) {
        const r = Object.entries(e).map(([i, o]) => [i, ii(o, t, i, s + 1)]);
        return Object.fromEntries(r)
    }
    return e
}

function Uh(e, t) {
    return ii(e, t)
}

function se(e, t = !1) {
    return Uh(e, (n, s, r) => {
        if (r === 1 && s === "queryKey") return se(n, !0);
        if (t && Vh(n)) return se(n(), t);
        if (he(n)) return se(Ze(n), t)
    })
}

function Bh(e) {
    if (Object.prototype.toString.call(e) !== "[object Object]") return !1;
    const t = Object.getPrototypeOf(e);
    return t === null || t === Object.prototype
}

function Vh(e) {
    return typeof e == "function"
}

function oi(e, t) {
    return typeof e == "function" ? e(...t) : !!e
}

function lr(e = "") {
    if (!sr()) throw new Error("vue-query hooks can only be used inside setup() function or functions that support injection context.");
    const t = pc(e),
        n = He(t);
    if (!n) throw new Error("No 'queryClient' found in Vue context, use 'VueQueryPlugin' to properly initialize the library.");
    return n
}
var Qh = class extends Fl {
        find(e) {
            return super.find(se(e))
        }
        findAll(e = {}) {
            return super.findAll(se(e))
        }
    },
    Wh = class extends Dl {
        find(e) {
            return super.find(se(e))
        }
        findAll(e = {}) {
            return super.findAll(se(e))
        }
    },
    Kh = class extends ru {
        constructor(e = {}) {
            const t = {
                defaultOptions: e.defaultOptions,
                queryCache: e.queryCache || new Qh,
                mutationCache: e.mutationCache || new Wh
            };
            super(t), this.isRestoring = Ae(!1)
        }
        isFetching(e = {}) {
            return super.isFetching(se(e))
        }
        isMutating(e = {}) {
            return super.isMutating(se(e))
        }
        getQueryData(e) {
            return super.getQueryData(se(e))
        }
        ensureQueryData(e) {
            return super.ensureQueryData(se(e))
        }
        getQueriesData(e) {
            return super.getQueriesData(se(e))
        }
        setQueryData(e, t, n = {}) {
            return super.setQueryData(se(e), t, se(n))
        }
        setQueriesData(e, t, n = {}) {
            return super.setQueriesData(se(e), t, se(n))
        }
        getQueryState(e) {
            return super.getQueryState(se(e))
        }
        removeQueries(e = {}) {
            return super.removeQueries(se(e))
        }
        resetQueries(e = {}, t = {}) {
            return super.resetQueries(se(e), se(t))
        }
        cancelQueries(e = {}, t = {}) {
            return super.cancelQueries(se(e), se(t))
        }
        invalidateQueries(e = {}, t = {}) {
            const n = se(e),
                s = se(t);
            if (super.invalidateQueries({ ...n,
                    refetchType: "none"
                }, s), n.refetchType === "none") return Promise.resolve();
            const r = { ...n,
                type: n.refetchType ? ? n.type ? ? "active"
            };
            return tt().then(() => super.refetchQueries(r, s))
        }
        refetchQueries(e = {}, t = {}) {
            return super.refetchQueries(se(e), se(t))
        }
        fetchQuery(e) {
            return super.fetchQuery(se(e))
        }
        prefetchQuery(e) {
            return super.prefetchQuery(se(e))
        }
        fetchInfiniteQuery(e) {
            return super.fetchInfiniteQuery(se(e))
        }
        prefetchInfiniteQuery(e) {
            return super.prefetchInfiniteQuery(se(e))
        }
        setDefaultOptions(e) {
            super.setDefaultOptions(se(e))
        }
        setQueryDefaults(e, t) {
            super.setQueryDefaults(se(e), se(t))
        }
        getQueryDefaults(e) {
            return super.getQueryDefaults(se(e))
        }
        setMutationDefaults(e, t) {
            super.setMutationDefaults(se(e), se(t))
        }
        getMutationDefaults(e) {
            return super.getMutationDefaults(se(e))
        }
    },
    im = {
        install: (e, t = {}) => {
            const n = pc(t.queryClientKey);
            let s;
            if ("queryClient" in t && t.queryClient) s = t.queryClient;
            else {
                const o = "queryClientConfig" in t ? t.queryClientConfig : void 0;
                s = new Kh(o)
            }
            zt || s.mount();
            let r = () => {};
            if (t.clientPersister) {
                s.isRestoring.value = !0;
                const [o, l] = t.clientPersister(s);
                r = o, l.then(() => {
                    s.isRestoring.value = !1, t.clientPersisterOnSuccess ? .(s)
                })
            }
            const i = () => {
                s.unmount(), r()
            };
            if (e.onUnmount) e.onUnmount(i);
            else {
                const o = e.unmount;
                e.unmount = function() {
                    i(), o()
                }
            }
            e.provide(n, s)
        }
    };

function qh(e, t, n) {
    const s = lr(),
        r = ue(() => {
            const d = se(t);
            typeof d.enabled == "function" && (d.enabled = d.enabled());
            const p = s.defaultQueryOptions(d);
            return p._optimisticResults = s.isRestoring.value ? "isRestoring" : "optimistic", p
        }),
        i = new e(s, r.value),
        o = Js(i.getCurrentResult());
    let l = () => {};
    le(s.isRestoring, d => {
        d || (l(), l = i.subscribe(p => {
            ri(o, p)
        }))
    }, {
        immediate: !0
    });
    const a = () => {
        i.setOptions(r.value), ri(o, i.getCurrentResult())
    };
    le(r, a), Xn(() => {
        l()
    });
    const u = (...d) => (a(), o.refetch(...d)),
        c = () => new Promise((d, p) => {
            let g = () => {};
            const _ = () => {
                if (r.value.enabled !== !1) {
                    i.setOptions(r.value);
                    const v = i.getOptimisticResult(r.value);
                    v.isStale ? (g(), i.fetchOptimistic(r.value).then(d, w => {
                        oi(r.value.throwOnError, [w, i.getCurrentQuery()]) ? p(w) : d(i.getCurrentResult())
                    })) : (g(), d(v))
                }
            };
            _(), g = le(r, _)
        });
    le(() => o.error, d => {
        if (o.isError && !o.isFetching && oi(r.value.throwOnError, [d, i.getCurrentQuery()])) throw d
    });
    const h = er(o);
    for (const d in o) typeof o[d] == "function" && (h[d] = o[d]);
    return h.suspense = c, h.refetch = u, h
}

function om(e, t) {
    return qh(iu, e)
}

function lm(e, t) {
    const n = lr(),
        s = ue(() => n.defaultMutationOptions(se(e))),
        r = new au(n, s.value),
        i = Js(r.getCurrentResult()),
        o = r.subscribe(c => {
            ri(i, c)
        }),
        l = (c, f) => {
            r.mutate(c, f).catch(() => {})
        };
    le(s, () => {
        r.setOptions(s.value)
    }), Xn(() => {
        o()
    });
    const u = er(i);
    return le(() => i.error, c => {
        if (c && oi(s.value.throwOnError, [c])) throw c
    }), { ...u,
        mutate: l,
        mutateAsync: i.mutate,
        reset: i.reset
    }
}

function am(e = {}, t) {
    const n = lr(),
        s = Gh({
            filters: ue(() => ({ ...se(e),
                status: "pending"
            }))
        }, n);
    return ue(() => s.value.length)
}

function Or(e, t) {
    return e.findAll(t.filters).map(n => t.select ? t.select(n) : n.state)
}

function Gh(e = {}, t) {
    const n = ue(() => se(e.filters)),
        s = (t || lr()).getMutationCache(),
        r = te(Or(s, e)),
        i = s.subscribe(() => {
            r.value = Or(s, e)
        });
    return le(n, () => {
        r.value = Or(s, e)
    }), Xn(() => {
        i()
    }), oa(r)
}
let gc;
const ar = e => gc = e,
    mc = Symbol();

function li(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function"
}
var $n;
(function(e) {
    e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function"
})($n || ($n = {}));

function cm() {
    const e = Vl(!0),
        t = e.run(() => Ae({}));
    let n = [],
        s = [];
    const r = Ri({
        install(i) {
            ar(r), r._a = i, i.provide(mc, r), i.config.globalProperties.$pinia = r, s.forEach(o => n.push(o)), s = []
        },
        use(i) {
            return this._a ? n.push(i) : s.push(i), this
        },
        _p: n,
        _a: null,
        _e: e,
        _s: new Map,
        state: t
    });
    return r
}
const yc = () => {};

function qo(e, t, n, s = yc) {
    e.push(t);
    const r = () => {
        const i = e.indexOf(t);
        i > -1 && (e.splice(i, 1), s())
    };
    return !n && Oi() && Xn(r), r
}

function rn(e, ...t) {
    e.slice().forEach(n => {
        n(...t)
    })
}
const zh = e => e();

function ai(e, t) {
    e instanceof Map && t instanceof Map && t.forEach((n, s) => e.set(s, n)), e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const n in t) {
        if (!t.hasOwnProperty(n)) continue;
        const s = t[n],
            r = e[n];
        li(r) && li(s) && e.hasOwnProperty(n) && !he(s) && !gt(s) ? e[n] = ai(r, s) : e[n] = s
    }
    return e
}
const Yh = Symbol();

function Jh(e) {
    return !li(e) || !e.hasOwnProperty(Yh)
}
const {
    assign: Mt
} = Object;

function Xh(e) {
    return !!(he(e) && e.effect)
}

function Zh(e, t, n, s) {
    const {
        state: r,
        actions: i,
        getters: o
    } = t, l = n.state.value[e];
    let a;

    function u() {
        l || (n.state.value[e] = r ? r() : {});
        const c = er(n.state.value[e]);
        return Mt(c, i, Object.keys(o || {}).reduce((f, h) => (f[h] = Ri(ue(() => {
            ar(n);
            const d = n._s.get(e);
            return o[h].call(d, d)
        })), f), {}))
    }
    return a = vc(e, u, t, n, s, !0), a
}

function vc(e, t, n = {}, s, r, i) {
    let o;
    const l = Mt({
            actions: {}
        }, n),
        a = {
            deep: !0
        };
    let u, c, f = [],
        h = [],
        d;
    const p = s.state.value[e];
    !i && !p && (s.state.value[e] = {}), Ae({});
    let g;

    function _(P) {
        let E;
        u = c = !1, typeof P == "function" ? (P(s.state.value[e]), E = {
            type: $n.patchFunction,
            storeId: e,
            events: d
        }) : (ai(s.state.value[e], P), E = {
            type: $n.patchObject,
            payload: P,
            storeId: e,
            events: d
        });
        const x = g = Symbol();
        tt().then(() => {
            g === x && (u = !0)
        }), c = !0, rn(f, E, s.state.value[e])
    }
    const v = i ? function() {
        const {
            state: E
        } = n, x = E ? E() : {};
        this.$patch(H => {
            Mt(H, x)
        })
    } : yc;

    function w() {
        o.stop(), f = [], h = [], s._s.delete(e)
    }

    function y(P, E) {
        return function() {
            ar(s);
            const x = Array.from(arguments),
                H = [],
                k = [];

            function W(L) {
                H.push(L)
            }

            function V(L) {
                k.push(L)
            }
            rn(h, {
                args: x,
                name: P,
                store: S,
                after: W,
                onError: V
            });
            let X;
            try {
                X = E.apply(this && this.$id === e ? this : S, x)
            } catch (L) {
                throw rn(k, L), L
            }
            return X instanceof Promise ? X.then(L => (rn(H, L), L)).catch(L => (rn(k, L), Promise.reject(L))) : (rn(H, X), X)
        }
    }
    const C = {
            _p: s,
            $id: e,
            $onAction: qo.bind(null, h),
            $patch: _,
            $reset: v,
            $subscribe(P, E = {}) {
                const x = qo(f, P, E.detached, () => H()),
                    H = o.run(() => le(() => s.state.value[e], k => {
                        (E.flush === "sync" ? c : u) && P({
                            storeId: e,
                            type: $n.direct,
                            events: d
                        }, k)
                    }, Mt({}, a, E)));
                return x
            },
            $dispose: w
        },
        S = Zn(C);
    s._s.set(e, S);
    const O = (s._a && s._a.runWithContext || zh)(() => s._e.run(() => (o = Vl()).run(t)));
    for (const P in O) {
        const E = O[P];
        if (he(E) && !Xh(E) || gt(E)) i || (p && Jh(E) && (he(E) ? E.value = p[P] : ai(E, p[P])), s.state.value[e][P] = E);
        else if (typeof E == "function") {
            const x = y(P, E);
            O[P] = x, l.actions[P] = E
        }
    }
    return Mt(S, O), Mt(re(S), O), Object.defineProperty(S, "$state", {
        get: () => s.state.value[e],
        set: P => {
            _(E => {
                Mt(E, P)
            })
        }
    }), s._p.forEach(P => {
        Mt(S, o.run(() => P({
            store: S,
            app: s._a,
            pinia: s,
            options: l
        })))
    }), p && i && n.hydrate && n.hydrate(S.$state, p), u = !0, c = !0, S
}

function um(e, t, n) {
    let s, r;
    const i = typeof t == "function";
    typeof e == "string" ? (s = e, r = i ? n : t) : (r = e, s = e.id);

    function o(l, a) {
        const u = sr();
        return l = l || (u ? He(mc, null) : null), l && ar(l), l = gc, l._s.has(s) || (i ? vc(s, t, r, l) : Zh(s, r, l)), l._s.get(s)
    }
    return o.$id = s, o
}

function fm(e) {
    {
        e = re(e);
        const t = {};
        for (const n in e) {
            const s = e[n];
            (he(s) || gt(s)) && (t[n] = ca(e, n))
        }
        return t
    }
}
var hm = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function ed(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Tr, Go;

function td() {
    return Go || (Go = 1, Tr = function e(t, n) {
        if (t === n) return !0;
        if (t && n && typeof t == "object" && typeof n == "object") {
            if (t.constructor !== n.constructor) return !1;
            var s, r, i;
            if (Array.isArray(t)) {
                if (s = t.length, s != n.length) return !1;
                for (r = s; r-- !== 0;)
                    if (!e(t[r], n[r])) return !1;
                return !0
            }
            if (t instanceof Map && n instanceof Map) {
                if (t.size !== n.size) return !1;
                for (r of t.entries())
                    if (!n.has(r[0])) return !1;
                for (r of t.entries())
                    if (!e(r[1], n.get(r[0]))) return !1;
                return !0
            }
            if (t instanceof Set && n instanceof Set) {
                if (t.size !== n.size) return !1;
                for (r of t.entries())
                    if (!n.has(r[0])) return !1;
                return !0
            }
            if (ArrayBuffer.isView(t) && ArrayBuffer.isView(n)) {
                if (s = t.length, s != n.length) return !1;
                for (r = s; r-- !== 0;)
                    if (t[r] !== n[r]) return !1;
                return !0
            }
            if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
            if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
            if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
            if (i = Object.keys(t), s = i.length, s !== Object.keys(n).length) return !1;
            for (r = s; r-- !== 0;)
                if (!Object.prototype.hasOwnProperty.call(n, i[r])) return !1;
            for (r = s; r-- !== 0;) {
                var o = i[r];
                if (!e(t[o], n[o])) return !1
            }
            return !0
        }
        return t !== t && n !== n
    }), Tr
}
var nd = td();
const dm = ed(nd);

function $t(e) {
    return Oi() ? (Xn(e), !0) : !1
}
const Pr = new WeakMap,
    sd = (...e) => {
        var t;
        const n = e[0],
            s = (t = nt()) == null ? void 0 : t.proxy;
        if (s == null && !sr()) throw new Error("injectLocal must be called in setup");
        return s && Pr.has(s) && n in Pr.get(s) ? Pr.get(s)[n] : He(...e)
    },
    Zt = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const rd = e => typeof e < "u",
    bc = e => e != null,
    id = Object.prototype.toString,
    _c = e => id.call(e) === "[object Object]",
    _e = () => {},
    js = od();

function od() {
    var e, t;
    return Zt && ((e = window ? .navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window ? .navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window ? .navigator.userAgent))
}

function wc(...e) {
    if (e.length !== 1) return ca(...e);
    const t = e[0];
    return typeof t == "function" ? Xs(Mi(() => ({
        get: t,
        set: _e
    }))) : Ae(t)
}

function Qi(e, t) {
    function n(...s) {
        return new Promise((r, i) => {
            Promise.resolve(e(() => t.apply(this, s), {
                fn: t,
                thisArg: this,
                args: s
            })).then(r).catch(i)
        })
    }
    return n
}
const Cc = e => e();

function ld(e, t = {}) {
    let n, s, r = _e;
    const i = a => {
        clearTimeout(a), r(), r = _e
    };
    let o;
    return a => {
        const u = Y(e),
            c = Y(t.maxWait);
        return n && i(n), u <= 0 || c !== void 0 && c <= 0 ? (s && (i(s), s = void 0), Promise.resolve(a())) : new Promise((f, h) => {
            r = t.rejectOnCancel ? h : f, o = a, c && !s && (s = setTimeout(() => {
                n && i(n), s = void 0, f(o())
            }, c)), n = setTimeout(() => {
                s && i(s), s = void 0, f(a())
            }, u)
        })
    }
}

function ad(...e) {
    let t = 0,
        n, s = !0,
        r = _e,
        i, o, l, a, u;
    !he(e[0]) && typeof e[0] == "object" ? {
        delay: o,
        trailing: l = !0,
        leading: a = !0,
        rejectOnCancel: u = !1
    } = e[0] : [o, l = !0, a = !0, u = !1] = e;
    const c = () => {
        n && (clearTimeout(n), n = void 0, r(), r = _e)
    };
    return h => {
        const d = Y(o),
            p = Date.now() - t,
            g = () => i = h();
        return c(), d <= 0 ? (t = Date.now(), g()) : (p > d && (a || !s) ? (t = Date.now(), g()) : l && (i = new Promise((_, v) => {
            r = u ? v : _, n = setTimeout(() => {
                t = Date.now(), s = !0, _(g()), c()
            }, Math.max(0, d - p))
        })), !a && !n && (n = setTimeout(() => s = !0, d)), s = !1, i)
    }
}

function cd(e = Cc, t = {}) {
    const {
        initialState: n = "active"
    } = t, s = wc(n === "active");

    function r() {
        s.value = !1
    }

    function i() {
        s.value = !0
    }
    const o = (...l) => {
        s.value && e(...l)
    };
    return {
        isActive: Xs(s),
        pause: r,
        resume: i,
        eventFilter: o
    }
}

function ci(e, t = !1, n = "Timeout") {
    return new Promise((s, r) => {
        setTimeout(t ? () => r(n) : s, e)
    })
}

function ud(e) {
    let t;

    function n() {
        return t || (t = e()), t
    }
    return n.reset = async () => {
        const s = t;
        t = void 0, s && await s
    }, n
}

function zo(e) {
    return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e)
}

function Lt(e) {
    return Array.isArray(e) ? e : [e]
}

function Sc(e) {
    return nt()
}

function pm(e, t = 200, n = {}) {
    return Qi(ld(t, n), e)
}

function gm(e, t = 200, n = !1, s = !0, r = !1) {
    return Qi(ad(t, n, s, r), e)
}

function fd(e, t, n = {}) {
    const {
        eventFilter: s = Cc,
        ...r
    } = n;
    return le(e, Qi(s, t), r)
}

function hd(e, t, n = {}) {
    const {
        eventFilter: s,
        initialState: r = "active",
        ...i
    } = n, {
        eventFilter: o,
        pause: l,
        resume: a,
        isActive: u
    } = cd(s, {
        initialState: r
    });
    return {
        stop: fd(e, t, { ...i,
            eventFilter: o
        }),
        pause: l,
        resume: a,
        isActive: u
    }
}

function dd(e, t = {}) {
    if (!he(e)) return er(e);
    const n = Array.isArray(e.value) ? Array.from({
        length: e.value.length
    }) : {};
    for (const s in e.value) n[s] = Mi(() => ({
        get() {
            return e.value[s]
        },
        set(r) {
            var i;
            if ((i = Y(t.replaceRef)) != null ? i : !0)
                if (Array.isArray(e.value)) {
                    const l = [...e.value];
                    l[s] = r, e.value = l
                } else {
                    const l = { ...e.value,
                        [s]: r
                    };
                    Object.setPrototypeOf(l, Object.getPrototypeOf(e.value)), e.value = l
                }
            else e.value[s] = r
        }
    }));
    return n
}

function ss(e, t = !0, n) {
    Sc() ? nr(e, n) : t ? e() : tt(e)
}

function pd(e, t) {
    Sc() && Li(e, t)
}

function ui(e, t = !1) {
    function n(f, {
        flush: h = "sync",
        deep: d = !1,
        timeout: p,
        throwOnTimeout: g
    } = {}) {
        let _ = null;
        const w = [new Promise(y => {
            _ = le(e, C => {
                f(C) !== t && (_ ? _() : tt(() => _ ? .()), y(C))
            }, {
                flush: h,
                deep: d,
                immediate: !0
            })
        })];
        return p != null && w.push(ci(p, g).then(() => Y(e)).finally(() => _ ? .())), Promise.race(w)
    }

    function s(f, h) {
        if (!he(f)) return n(C => C === f, h);
        const {
            flush: d = "sync",
            deep: p = !1,
            timeout: g,
            throwOnTimeout: _
        } = h ? ? {};
        let v = null;
        const y = [new Promise(C => {
            v = le([e, f], ([S, A]) => {
                t !== (S === A) && (v ? v() : tt(() => v ? .()), C(S))
            }, {
                flush: d,
                deep: p,
                immediate: !0
            })
        })];
        return g != null && y.push(ci(g, _).then(() => Y(e)).finally(() => (v ? .(), Y(e)))), Promise.race(y)
    }

    function r(f) {
        return n(h => !!h, f)
    }

    function i(f) {
        return s(null, f)
    }

    function o(f) {
        return s(void 0, f)
    }

    function l(f) {
        return n(Number.isNaN, f)
    }

    function a(f, h) {
        return n(d => {
            const p = Array.from(d);
            return p.includes(f) || p.includes(Y(f))
        }, h)
    }

    function u(f) {
        return c(1, f)
    }

    function c(f = 1, h) {
        let d = -1;
        return n(() => (d += 1, d >= f), h)
    }
    return Array.isArray(Y(e)) ? {
        toMatch: n,
        toContains: a,
        changed: u,
        changedTimes: c,
        get not() {
            return ui(e, !t)
        }
    } : {
        toMatch: n,
        toBe: s,
        toBeTruthy: r,
        toBeNull: i,
        toBeNaN: l,
        toBeUndefined: o,
        changed: u,
        changedTimes: c,
        get not() {
            return ui(e, !t)
        }
    }
}

function gd(e) {
    return ui(e)
}

function md(e, t, n = {}) {
    const {
        immediate: s = !0,
        immediateCallback: r = !1
    } = n, i = te(!1);
    let o;

    function l() {
        o && (clearTimeout(o), o = void 0)
    }

    function a() {
        i.value = !1, l()
    }

    function u(...c) {
        r && e(), l(), i.value = !0, o = setTimeout(() => {
            i.value = !1, o = void 0, e(...c)
        }, Y(t))
    }
    return s && (i.value = !0, Zt && u()), $t(a), {
        isPending: oa(i),
        start: u,
        stop: a
    }
}

function Ec(e, t, n) {
    return le(e, t, { ...n,
        immediate: !0
    })
}

function yd(e, t, n) {
    return le(e, t, { ...n,
        once: !0
    })
}

function mm(e, t, n) {
    const s = le(e, (r, i, o) => {
        r && (n ? .once && tt(() => s()), t(r, i, o))
    }, { ...n,
        once: !1
    });
    return s
}
const je = Zt ? window : void 0,
    vd = Zt ? window.document : void 0,
    Oc = Zt ? window.navigator : void 0;

function Ve(e) {
    var t;
    const n = Y(e);
    return (t = n ? .$el) != null ? t : n
}

function me(...e) {
    const t = [],
        n = () => {
            t.forEach(l => l()), t.length = 0
        },
        s = (l, a, u, c) => (l.addEventListener(a, u, c), () => l.removeEventListener(a, u, c)),
        r = ue(() => {
            const l = Lt(Y(e[0])).filter(a => a != null);
            return l.every(a => typeof a != "string") ? l : void 0
        }),
        i = Ec(() => {
            var l, a;
            return [(a = (l = r.value) == null ? void 0 : l.map(u => Ve(u))) != null ? a : [je].filter(u => u != null), Lt(Y(r.value ? e[1] : e[0])), Lt(Ze(r.value ? e[2] : e[1])), Y(r.value ? e[3] : e[2])]
        }, ([l, a, u, c]) => {
            if (n(), !l ? .length || !a ? .length || !u ? .length) return;
            const f = _c(c) ? { ...c
            } : c;
            t.push(...l.flatMap(h => a.flatMap(d => u.map(p => s(h, d, p, f)))))
        }, {
            flush: "post"
        }),
        o = () => {
            i(), n()
        };
    return $t(n), o
}
let Yo = !1;

function ym(e, t, n = {}) {
    const {
        window: s = je,
        ignore: r = [],
        capture: i = !0,
        detectIframe: o = !1,
        controls: l = !1
    } = n;
    if (!s) return l ? {
        stop: _e,
        cancel: _e,
        trigger: _e
    } : _e;
    if (js && !Yo) {
        Yo = !0;
        const _ = {
            passive: !0
        };
        Array.from(s.document.body.children).forEach(v => v.addEventListener("click", _e, _)), s.document.documentElement.addEventListener("click", _e, _)
    }
    let a = !0;
    const u = _ => Y(r).some(v => {
        if (typeof v == "string") return Array.from(s.document.querySelectorAll(v)).some(w => w === _.target || _.composedPath().includes(w)); {
            const w = Ve(v);
            return w && (_.target === w || _.composedPath().includes(w))
        }
    });

    function c(_) {
        const v = Y(_);
        return v && v.$.subTree.shapeFlag === 16
    }

    function f(_, v) {
        const w = Y(_),
            y = w.$.subTree && w.$.subTree.children;
        return y == null || !Array.isArray(y) ? !1 : y.some(C => C.el === v.target || v.composedPath().includes(C.el))
    }
    const h = _ => {
        const v = Ve(e);
        if (_.target != null && !(!(v instanceof Element) && c(e) && f(e, _)) && !(!v || v === _.target || _.composedPath().includes(v))) {
            if ("detail" in _ && _.detail === 0 && (a = !u(_)), !a) {
                a = !0;
                return
            }
            t(_)
        }
    };
    let d = !1;
    const p = [me(s, "click", _ => {
            d || (d = !0, setTimeout(() => {
                d = !1
            }, 0), h(_))
        }, {
            passive: !0,
            capture: i
        }), me(s, "pointerdown", _ => {
            const v = Ve(e);
            a = !u(_) && !!(v && !_.composedPath().includes(v))
        }, {
            passive: !0
        }), o && me(s, "blur", _ => {
            setTimeout(() => {
                var v;
                const w = Ve(e);
                ((v = s.document.activeElement) == null ? void 0 : v.tagName) === "IFRAME" && !w ? .contains(s.document.activeElement) && t(_)
            }, 0)
        }, {
            passive: !0
        })].filter(Boolean),
        g = () => p.forEach(_ => _());
    return l ? {
        stop: g,
        cancel: () => {
            a = !1
        },
        trigger: _ => {
            a = !0, h(_), a = !1
        }
    } : g
}

function bd() {
    const e = te(!1),
        t = nt();
    return t && nr(() => {
        e.value = !0
    }, t), e
}

function En(e) {
    const t = bd();
    return ue(() => (t.value, !!e()))
}

function Tc(e, t, n = {}) {
    const {
        window: s = je,
        ...r
    } = n;
    let i;
    const o = En(() => s && "MutationObserver" in s),
        l = () => {
            i && (i.disconnect(), i = void 0)
        },
        a = ue(() => {
            const h = Y(e),
                d = Lt(h).map(Ve).filter(bc);
            return new Set(d)
        }),
        u = le(() => a.value, h => {
            l(), o.value && h.size && (i = new MutationObserver(t), h.forEach(d => i.observe(d, r)))
        }, {
            immediate: !0,
            flush: "post"
        }),
        c = () => i ? .takeRecords(),
        f = () => {
            u(), l()
        };
    return $t(f), {
        isSupported: o,
        stop: f,
        takeRecords: c
    }
}

function _d(e, t, n) {
    const {
        immediate: s = !0,
        delay: r = 0,
        onError: i = _e,
        onSuccess: o = _e,
        resetOnExecute: l = !0,
        shallow: a = !0,
        throwError: u
    } = n ? ? {}, c = a ? te(t) : Ae(t), f = te(!1), h = te(!1), d = te(void 0);
    async function p(v = 0, ...w) {
        l && (c.value = t), d.value = void 0, f.value = !1, h.value = !0, v > 0 && await ci(v);
        const y = typeof e == "function" ? e(...w) : e;
        try {
            const C = await y;
            c.value = C, f.value = !0, o(C)
        } catch (C) {
            if (d.value = C, i(C), u) throw C
        } finally {
            h.value = !1
        }
        return c.value
    }
    s && p(r);
    const g = {
        state: c,
        isReady: f,
        isLoading: h,
        error: d,
        execute: p,
        executeImmediate: (...v) => p(0, ...v)
    };

    function _() {
        return new Promise((v, w) => {
            gd(h).toBe(!1).then(() => v(g)).catch(w)
        })
    }
    return { ...g,
        then(v, w) {
            return _().then(v, w)
        }
    }
}
const wd = Symbol("vueuse-ssr-width");

function Cd() {
    const e = sr() ? sd(wd, null) : null;
    return typeof e == "number" ? e : void 0
}

function Sd(e, t = {}) {
    const {
        window: n = je,
        ssrWidth: s = Cd()
    } = t, r = En(() => n && "matchMedia" in n && typeof n.matchMedia == "function"), i = te(typeof s == "number"), o = te(), l = te(!1), a = u => {
        l.value = u.matches
    };
    return Qa(() => {
        if (i.value) {
            i.value = !r.value;
            const u = Y(e).split(",");
            l.value = u.some(c => {
                const f = c.includes("not all"),
                    h = c.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),
                    d = c.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
                let p = !!(h || d);
                return h && p && (p = s >= zo(h[1])), d && p && (p = s <= zo(d[1])), f ? !p : p
            });
            return
        }
        r.value && (o.value = n.matchMedia(Y(e)), l.value = o.value.matches)
    }), me(o, "change", a, {
        passive: !0
    }), ue(() => l.value)
}

function Jo(e, t = {}) {
    const {
        controls: n = !1,
        navigator: s = Oc
    } = t, r = En(() => s && "permissions" in s), i = te(), o = typeof e == "string" ? {
        name: e
    } : e, l = te(), a = () => {
        var c, f;
        l.value = (f = (c = i.value) == null ? void 0 : c.state) != null ? f : "prompt"
    };
    me(i, "change", a, {
        passive: !0
    });
    const u = ud(async () => {
        if (r.value) {
            if (!i.value) try {
                i.value = await s.permissions.query(o)
            } catch {
                i.value = void 0
            } finally {
                a()
            }
            if (n) return re(i.value)
        }
    });
    return u(), n ? {
        state: l,
        isSupported: r,
        query: u
    } : l
}

function vm(e = {}) {
    const {
        navigator: t = Oc,
        read: n = !1,
        source: s,
        copiedDuring: r = 1500,
        legacy: i = !1
    } = e, o = En(() => t && "clipboard" in t), l = Jo("clipboard-read"), a = Jo("clipboard-write"), u = ue(() => o.value || i), c = te(""), f = te(!1), h = md(() => f.value = !1, r, {
        immediate: !1
    });
    async function d() {
        let w = !(o.value && v(l.value));
        if (!w) try {
            c.value = await t.clipboard.readText()
        } catch {
            w = !0
        }
        w && (c.value = _())
    }
    u.value && n && me(["copy", "cut"], d, {
        passive: !0
    });
    async function p(w = Y(s)) {
        if (u.value && w != null) {
            let y = !(o.value && v(a.value));
            if (!y) try {
                await t.clipboard.writeText(w)
            } catch {
                y = !0
            }
            y && g(w), c.value = w, f.value = !0, h.start()
        }
    }

    function g(w) {
        const y = document.createElement("textarea");
        y.value = w ? ? "", y.style.position = "absolute", y.style.opacity = "0", document.body.appendChild(y), y.select(), document.execCommand("copy"), y.remove()
    }

    function _() {
        var w, y, C;
        return (C = (y = (w = document ? .getSelection) == null ? void 0 : w.call(document)) == null ? void 0 : y.toString()) != null ? C : ""
    }

    function v(w) {
        return w === "granted" || w === "prompt"
    }
    return {
        isSupported: u,
        text: c,
        copied: f,
        copy: p
    }
}

function Ed(e) {
    return JSON.parse(JSON.stringify(e))
}
const ds = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
    ps = "__vueuse_ssr_handlers__",
    Od = Td();

function Td() {
    return ps in ds || (ds[ps] = ds[ps] || {}), ds[ps]
}

function Pd(e, t) {
    return Od[e] || t
}

function xd(e) {
    return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number"
}
const Ad = {
        boolean: {
            read: e => e === "true",
            write: e => String(e)
        },
        object: {
            read: e => JSON.parse(e),
            write: e => JSON.stringify(e)
        },
        number: {
            read: e => Number.parseFloat(e),
            write: e => String(e)
        },
        any: {
            read: e => e,
            write: e => String(e)
        },
        string: {
            read: e => e,
            write: e => String(e)
        },
        map: {
            read: e => new Map(JSON.parse(e)),
            write: e => JSON.stringify(Array.from(e.entries()))
        },
        set: {
            read: e => new Set(JSON.parse(e)),
            write: e => JSON.stringify(Array.from(e))
        },
        date: {
            read: e => new Date(e),
            write: e => e.toISOString()
        }
    },
    Xo = "vueuse-storage";

function Pc(e, t, n, s = {}) {
    var r;
    const {
        flush: i = "pre",
        deep: o = !0,
        listenToStorageChanges: l = !0,
        writeDefaults: a = !0,
        mergeDefaults: u = !1,
        shallow: c,
        window: f = je,
        eventFilter: h,
        onError: d = V => {
            console.error(V)
        },
        initOnMounted: p
    } = s, g = (c ? te : Ae)(typeof t == "function" ? t() : t), _ = ue(() => Y(e));
    if (!n) try {
        n = Pd("getDefaultStorage", () => {
            var V;
            return (V = je) == null ? void 0 : V.localStorage
        })()
    } catch (V) {
        d(V)
    }
    if (!n) return g;
    const v = Y(t),
        w = xd(v),
        y = (r = s.serializer) != null ? r : Ad[w],
        {
            pause: C,
            resume: S
        } = hd(g, () => x(g.value), {
            flush: i,
            deep: o,
            eventFilter: h
        });
    le(_, () => k(), {
        flush: i
    });
    let A = !1;
    const O = V => {
            p && !A || k(V)
        },
        P = V => {
            p && !A || W(V)
        };
    f && l && (n instanceof Storage ? me(f, "storage", O, {
        passive: !0
    }) : me(f, Xo, P)), p ? ss(() => {
        A = !0, k()
    }) : k();

    function E(V, X) {
        if (f) {
            const L = {
                key: _.value,
                oldValue: V,
                newValue: X,
                storageArea: n
            };
            f.dispatchEvent(n instanceof Storage ? new StorageEvent("storage", L) : new CustomEvent(Xo, {
                detail: L
            }))
        }
    }

    function x(V) {
        try {
            const X = n.getItem(_.value);
            if (V == null) E(X, null), n.removeItem(_.value);
            else {
                const L = y.write(V);
                X !== L && (n.setItem(_.value, L), E(X, L))
            }
        } catch (X) {
            d(X)
        }
    }

    function H(V) {
        const X = V ? V.newValue : n.getItem(_.value);
        if (X == null) return a && v != null && n.setItem(_.value, y.write(v)), v;
        if (!V && u) {
            const L = y.read(X);
            return typeof u == "function" ? u(L, v) : w === "object" && !Array.isArray(L) ? { ...v,
                ...L
            } : L
        } else return typeof X != "string" ? X : y.read(X)
    }

    function k(V) {
        if (!(V && V.storageArea !== n)) {
            if (V && V.key == null) {
                g.value = v;
                return
            }
            if (!(V && V.key !== _.value)) {
                C();
                try {
                    V ? .newValue !== y.write(g.value) && (g.value = H(V))
                } catch (X) {
                    d(X)
                } finally {
                    V ? tt(S) : S()
                }
            }
        }
    }

    function W(V) {
        k(V.detail)
    }
    return g
}

function bm(e, t = {}) {
    var n;
    const {
        pointerTypes: s,
        preventDefault: r,
        stopPropagation: i,
        exact: o,
        onMove: l,
        onEnd: a,
        onStart: u,
        initialValue: c,
        axis: f = "both",
        draggingElement: h = je,
        containerElement: d,
        handle: p = e,
        buttons: g = [0]
    } = t, _ = Ae((n = Y(c)) != null ? n : {
        x: 0,
        y: 0
    }), v = Ae(), w = O => s ? s.includes(O.pointerType) : !0, y = O => {
        Y(r) && O.preventDefault(), Y(i) && O.stopPropagation()
    }, C = O => {
        var P;
        if (!Y(g).includes(O.button) || Y(t.disabled) || !w(O) || Y(o) && O.target !== Y(e)) return;
        const E = Y(d),
            x = (P = E ? .getBoundingClientRect) == null ? void 0 : P.call(E),
            H = Y(e).getBoundingClientRect(),
            k = {
                x: O.clientX - (E ? H.left - x.left + E.scrollLeft : H.left),
                y: O.clientY - (E ? H.top - x.top + E.scrollTop : H.top)
            };
        u ? .(k, O) !== !1 && (v.value = k, y(O))
    }, S = O => {
        if (Y(t.disabled) || !w(O) || !v.value) return;
        const P = Y(d),
            E = Y(e).getBoundingClientRect();
        let {
            x,
            y: H
        } = _.value;
        (f === "x" || f === "both") && (x = O.clientX - v.value.x, P && (x = Math.min(Math.max(0, x), P.scrollWidth - E.width))), (f === "y" || f === "both") && (H = O.clientY - v.value.y, P && (H = Math.min(Math.max(0, H), P.scrollHeight - E.height))), _.value = {
            x,
            y: H
        }, l ? .(_.value, O), y(O)
    }, A = O => {
        Y(t.disabled) || !w(O) || v.value && (v.value = void 0, a ? .(_.value, O), y(O))
    };
    if (Zt) {
        const O = () => {
            var P;
            return {
                capture: (P = t.capture) != null ? P : !0,
                passive: !Y(r)
            }
        };
        me(p, "pointerdown", C, O), me(h, "pointermove", S, O), me(h, "pointerup", A, O)
    }
    return { ...dd(_),
        position: _,
        isDragging: ue(() => !!v.value),
        style: ue(() => `left:${_.value.x}px;top:${_.value.y}px;`)
    }
}

function xc(e, t, n = {}) {
    const {
        window: s = je,
        ...r
    } = n;
    let i;
    const o = En(() => s && "ResizeObserver" in s),
        l = () => {
            i && (i.disconnect(), i = void 0)
        },
        a = ue(() => {
            const f = Y(e);
            return Array.isArray(f) ? f.map(h => Ve(h)) : [Ve(f)]
        }),
        u = le(a, f => {
            if (l(), o.value && s) {
                i = new ResizeObserver(t);
                for (const h of f) h && i.observe(h, r)
            }
        }, {
            immediate: !0,
            flush: "post"
        }),
        c = () => {
            l(), u()
        };
    return $t(c), {
        isSupported: o,
        stop: c
    }
}

function _m(e, t = {}) {
    const {
        reset: n = !0,
        windowResize: s = !0,
        windowScroll: r = !0,
        immediate: i = !0,
        updateTiming: o = "sync"
    } = t, l = te(0), a = te(0), u = te(0), c = te(0), f = te(0), h = te(0), d = te(0), p = te(0);

    function g() {
        const v = Ve(e);
        if (!v) {
            n && (l.value = 0, a.value = 0, u.value = 0, c.value = 0, f.value = 0, h.value = 0, d.value = 0, p.value = 0);
            return
        }
        const w = v.getBoundingClientRect();
        l.value = w.height, a.value = w.bottom, u.value = w.left, c.value = w.right, f.value = w.top, h.value = w.width, d.value = w.x, p.value = w.y
    }

    function _() {
        o === "sync" ? g() : o === "next-frame" && requestAnimationFrame(() => g())
    }
    return xc(e, _), le(() => Ve(e), v => !v && _()), Tc(e, _, {
        attributeFilter: ["style", "class"]
    }), r && me("scroll", _, {
        capture: !0,
        passive: !0
    }), s && me("resize", _, {
        passive: !0
    }), ss(() => {
        i && _()
    }), {
        height: l,
        bottom: a,
        left: u,
        right: c,
        top: f,
        width: h,
        x: d,
        y: p,
        update: _
    }
}

function Rd(e, t, n = {}) {
    const {
        root: s,
        rootMargin: r = "0px",
        threshold: i = 0,
        window: o = je,
        immediate: l = !0
    } = n, a = En(() => o && "IntersectionObserver" in o), u = ue(() => {
        const p = Y(e);
        return Lt(p).map(Ve).filter(bc)
    });
    let c = _e;
    const f = te(l),
        h = a.value ? le(() => [u.value, Ve(s), f.value], ([p, g]) => {
            if (c(), !f.value || !p.length) return;
            const _ = new IntersectionObserver(t, {
                root: Ve(g),
                rootMargin: r,
                threshold: i
            });
            p.forEach(v => v && _.observe(v)), c = () => {
                _.disconnect(), c = _e
            }
        }, {
            immediate: l,
            flush: "post"
        }) : _e,
        d = () => {
            c(), h(), f.value = !1
        };
    return $t(d), {
        isSupported: a,
        isActive: f,
        pause() {
            c(), f.value = !1
        },
        resume() {
            f.value = !0
        },
        stop: d
    }
}

function wm(e, t = {}) {
    const {
        window: n = je,
        scrollTarget: s,
        threshold: r = 0,
        rootMargin: i,
        once: o = !1
    } = t, l = te(!1), {
        stop: a
    } = Rd(e, u => {
        let c = l.value,
            f = 0;
        for (const h of u) h.time >= f && (f = h.time, c = h.isIntersecting);
        l.value = c, o && yd(l, () => {
            a()
        })
    }, {
        root: s,
        window: n,
        threshold: r,
        rootMargin: Y(i)
    });
    return l
}
async function Md(e) {
    return new Promise((t, n) => {
        const s = new Image,
            {
                src: r,
                srcset: i,
                sizes: o,
                class: l,
                loading: a,
                crossorigin: u,
                referrerPolicy: c,
                width: f,
                height: h,
                decoding: d,
                fetchPriority: p,
                ismap: g,
                usemap: _
            } = e;
        s.src = r, i != null && (s.srcset = i), o != null && (s.sizes = o), l != null && (s.className = l), a != null && (s.loading = a), u != null && (s.crossOrigin = u), c != null && (s.referrerPolicy = c), f != null && (s.width = f), h != null && (s.height = h), d != null && (s.decoding = d), p != null && (s.fetchPriority = p), g != null && (s.isMap = g), _ != null && (s.useMap = _), s.onload = () => t(s), s.onerror = n
    })
}

function Cm(e, t = {}) {
    const n = _d(() => Md(Y(e)), void 0, {
        resetOnExecute: !0,
        ...t
    });
    return le(() => Y(e), () => n.execute(t.delay), {
        deep: !0
    }), n
}

function Sm(e, t, n = {}) {
    const {
        window: s = je
    } = n;
    return Pc(e, t, s ? .localStorage, n)
}
const kd = {
    page: e => [e.pageX, e.pageY],
    client: e => [e.clientX, e.clientY],
    screen: e => [e.screenX, e.screenY],
    movement: e => e instanceof MouseEvent ? [e.movementX, e.movementY] : null
};

function Fd(e = {}) {
    const {
        type: t = "page",
        touch: n = !0,
        resetOnTouchEnds: s = !1,
        initialValue: r = {
            x: 0,
            y: 0
        },
        window: i = je,
        target: o = i,
        scroll: l = !0,
        eventFilter: a
    } = e;
    let u = null,
        c = 0,
        f = 0;
    const h = te(r.x),
        d = te(r.y),
        p = te(null),
        g = typeof t == "function" ? t : kd[t],
        _ = O => {
            const P = g(O);
            u = O, P && ([h.value, d.value] = P, p.value = "mouse"), i && (c = i.scrollX, f = i.scrollY)
        },
        v = O => {
            if (O.touches.length > 0) {
                const P = g(O.touches[0]);
                P && ([h.value, d.value] = P, p.value = "touch")
            }
        },
        w = () => {
            if (!u || !i) return;
            const O = g(u);
            u instanceof MouseEvent && O && (h.value = O[0] + i.scrollX - c, d.value = O[1] + i.scrollY - f)
        },
        y = () => {
            h.value = r.x, d.value = r.y
        },
        C = a ? O => a(() => _(O), {}) : O => _(O),
        S = a ? O => a(() => v(O), {}) : O => v(O),
        A = a ? () => a(() => w(), {}) : () => w();
    if (o) {
        const O = {
            passive: !0
        };
        me(o, ["mousemove", "dragover"], C, O), n && t !== "movement" && (me(o, ["touchstart", "touchmove"], S, O), s && me(o, "touchend", y, O)), l && t === "page" && me(i, "scroll", A, O)
    }
    return {
        x: h,
        y: d,
        sourceType: p
    }
}

function Em(e, t = {}) {
    const {
        windowResize: n = !0,
        windowScroll: s = !0,
        handleOutside: r = !0,
        window: i = je
    } = t, o = t.type || "page", {
        x: l,
        y: a,
        sourceType: u
    } = Fd(t), c = te(e ? ? i ? .document.body), f = te(0), h = te(0), d = te(0), p = te(0), g = te(0), _ = te(0), v = te(!0);

    function w() {
        if (!i) return;
        const S = Ve(c);
        if (!S || !(S instanceof Element)) return;
        const {
            left: A,
            top: O,
            width: P,
            height: E
        } = S.getBoundingClientRect();
        d.value = A + (o === "page" ? i.pageXOffset : 0), p.value = O + (o === "page" ? i.pageYOffset : 0), g.value = E, _.value = P;
        const x = l.value - d.value,
            H = a.value - p.value;
        v.value = P === 0 || E === 0 || x < 0 || H < 0 || x > P || H > E, r && (f.value = x, h.value = H)
    }
    const y = [];

    function C() {
        y.forEach(S => S()), y.length = 0
    }
    if (ss(() => {
            w()
        }), i) {
        const {
            stop: S
        } = xc(c, w), {
            stop: A
        } = Tc(c, w, {
            attributeFilter: ["style", "class"]
        }), O = le([c, l, a], w);
        y.push(S, A, O), me(document, "mouseleave", () => v.value = !0, {
            passive: !0
        }), s && y.push(me("scroll", w, {
            capture: !0,
            passive: !0
        })), n && y.push(me("resize", w, {
            passive: !0
        }))
    }
    return {
        x: l,
        y: a,
        sourceType: u,
        elementX: f,
        elementY: h,
        elementPositionX: d,
        elementPositionY: p,
        elementHeight: g,
        elementWidth: _,
        isOutside: v,
        stop: C
    }
}

function Om(e, t = _e, n = {}) {
    const {
        immediate: s = !0,
        manual: r = !1,
        type: i = "text/javascript",
        async: o = !0,
        crossOrigin: l,
        referrerPolicy: a,
        noModule: u,
        defer: c,
        document: f = vd,
        attrs: h = {},
        nonce: d = void 0
    } = n, p = te(null);
    let g = null;
    const _ = y => new Promise((C, S) => {
            const A = x => (p.value = x, C(x), x);
            if (!f) {
                C(!1);
                return
            }
            let O = !1,
                P = f.querySelector(`script[src="${Y(e)}"]`);
            P ? P.hasAttribute("data-loaded") && A(P) : (P = f.createElement("script"), P.type = i, P.async = o, P.src = Y(e), c && (P.defer = c), l && (P.crossOrigin = l), u && (P.noModule = u), a && (P.referrerPolicy = a), d && (P.nonce = d), Object.entries(h).forEach(([x, H]) => P ? .setAttribute(x, H)), O = !0);
            const E = {
                passive: !0
            };
            me(P, "error", x => S(x), E), me(P, "abort", x => S(x), E), me(P, "load", () => {
                P.setAttribute("data-loaded", "true"), t(P), A(P)
            }, E), O && (P = f.head.appendChild(P)), y || A(P)
        }),
        v = (y = !0) => (g || (g = _(y)), g),
        w = () => {
            if (!f) return;
            g = null, p.value && (p.value = null);
            const y = f.querySelector(`script[src="${Y(e)}"]`);
            y && f.head.removeChild(y)
        };
    return s && !r && ss(v), r || pd(w), {
        scriptTag: p,
        load: v,
        unload: w
    }
}

function Tm(e, t, n = {}) {
    const {
        window: s = je
    } = n;
    return Pc(e, t, s ? .sessionStorage, n)
}

function Pm() {
    const e = Ae([]);
    return e.value.set = t => {
        t && e.value.push(t)
    }, Pa(() => {
        e.value.length = 0
    }), e
}

function Id(e, t, n, s = {}) {
    var r, i, o;
    const {
        clone: l = !1,
        passive: a = !1,
        eventName: u,
        deep: c = !1,
        defaultValue: f,
        shouldEmit: h
    } = s, d = nt(), p = n || d ? .emit || ((r = d ? .$emit) == null ? void 0 : r.bind(d)) || ((o = (i = d ? .proxy) == null ? void 0 : i.$emit) == null ? void 0 : o.bind(d ? .proxy));
    let g = u;
    t || (t = "modelValue"), g = g || `update:${t.toString()}`;
    const _ = y => l ? typeof l == "function" ? l(y) : Ed(y) : y,
        v = () => rd(e[t]) ? _(e[t]) : f,
        w = y => {
            h ? h(y) && p(g, y) : p(g, y)
        };
    if (a) {
        const y = v(),
            C = Ae(y);
        let S = !1;
        return le(() => e[t], A => {
            S || (S = !0, C.value = _(A), tt(() => S = !1))
        }), le(C, A => {
            !S && (A !== e[t] || c) && w(A)
        }, {
            deep: c
        }), C
    } else return ue({
        get() {
            return v()
        },
        set(y) {
            w(y)
        }
    })
}

function xm(e, t, n = {}) {
    const s = {};
    for (const r in e) s[r] = Id(e, r, t, n);
    return s
}

function Am(e = {}) {
    const {
        window: t = je,
        initialWidth: n = Number.POSITIVE_INFINITY,
        initialHeight: s = Number.POSITIVE_INFINITY,
        listenOrientation: r = !0,
        includeScrollbar: i = !0,
        type: o = "inner"
    } = e, l = te(n), a = te(s), u = () => {
        if (t)
            if (o === "outer") l.value = t.outerWidth, a.value = t.outerHeight;
            else if (o === "visual" && t.visualViewport) {
            const {
                width: f,
                height: h,
                scale: d
            } = t.visualViewport;
            l.value = Math.round(f * d), a.value = Math.round(h * d)
        } else i ? (l.value = t.innerWidth, a.value = t.innerHeight) : (l.value = t.document.documentElement.clientWidth, a.value = t.document.documentElement.clientHeight)
    };
    u(), ss(u);
    const c = {
        passive: !0
    };
    if (me("resize", u, c), t && o === "visual" && t.visualViewport && me(t.visualViewport, "resize", u, c), r) {
        const f = Sd("(orientation: portrait)");
        le(f, () => u())
    }
    return {
        width: l,
        height: a
    }
}
const An = typeof window < "u";

function Dd(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module"
}
const ve = Object.assign;

function xr(e, t) {
    const n = {};
    for (const s in t) {
        const r = t[s];
        n[s] = at(r) ? r.map(e) : e(r)
    }
    return n
}
const Un = () => {},
    at = Array.isArray;

function Ar(e, t, n = "/") {
    let s, r = {},
        i = "",
        o = "";
    const l = t.indexOf("#");
    let a = t.indexOf("?");
    return l < a && l >= 0 && (a = -1), a > -1 && (s = t.slice(0, a), i = t.slice(a + 1, l > -1 ? l : t.length), r = e(i)), l > -1 && (s = s || t.slice(0, l), o = t.slice(l, t.length)), s = Nd(s ? ? t, n), {
        fullPath: s + (i && "?") + i + o,
        path: s,
        query: r,
        hash: o
    }
}

function Ld(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "")
}

function Hd(e, t, n) {
    const s = t.matched.length - 1,
        r = n.matched.length - 1;
    return s > -1 && s === r && bn(t.matched[s], n.matched[r]) && Ac(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}

function bn(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}

function Ac(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length) return !1;
    for (const n in e)
        if (!jd(e[n], t[n])) return !1;
    return !0
}

function jd(e, t) {
    return at(e) ? Zo(e, t) : at(t) ? Zo(t, e) : e === t
}

function Zo(e, t) {
    return at(t) ? e.length === t.length && e.every((n, s) => n === t[s]) : e.length === 1 && e[0] === t
}

function Nd(e, t) {
    if (e.startsWith("/")) return e;
    if (!e) return t;
    const n = t.split("/"),
        s = e.split("/"),
        r = s[s.length - 1];
    (r === ".." || r === ".") && s.push("");
    let i = n.length - 1,
        o, l;
    for (o = 0; o < s.length; o++)
        if (l = s[o], l !== ".")
            if (l === "..") i > 1 && i--;
            else break;
    return n.slice(0, i).join("/") + "/" + s.slice(o - (o === s.length ? 1 : 0)).join("/")
}
var Ns;
(function(e) {
    e.pop = "pop", e.push = "push"
})(Ns || (Ns = {}));
var el;
(function(e) {
    e.back = "back", e.forward = "forward", e.unknown = ""
})(el || (el = {}));

function $d(e, t) {
    const n = document.documentElement.getBoundingClientRect(),
        s = e.getBoundingClientRect();
    return {
        behavior: t.behavior,
        left: s.left - n.left - (t.left || 0),
        top: s.top - n.top - (t.top || 0)
    }
}
const Ud = () => ({
    left: window.pageXOffset,
    top: window.pageYOffset
});

function Bd(e) {
    let t;
    if ("el" in e) {
        const n = e.el,
            s = typeof n == "string" && n.startsWith("#"),
            r = typeof n == "string" ? s ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
        if (!r) return;
        t = $d(r, e)
    } else t = e;
    "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset)
}

function tl(e, t) {
    return (history.state ? history.state.position - t : -1) + e
}
const fi = new Map;

function Vd(e, t) {
    fi.set(e, t)
}

function Qd(e) {
    const t = fi.get(e);
    return fi.delete(e), t
}

function Wd(e) {
    return typeof e == "string" || e && typeof e == "object"
}

function Rc(e) {
    return typeof e == "string" || typeof e == "symbol"
}
const At = {
        path: "/",
        name: void 0,
        params: {},
        query: {},
        hash: "",
        fullPath: "/",
        matched: [],
        meta: {},
        redirectedFrom: void 0
    },
    Mc = Symbol("");
var nl;
(function(e) {
    e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated"
})(nl || (nl = {}));

function _n(e, t) {
    return ve(new Error, {
        type: e,
        [Mc]: !0
    }, t)
}

function vt(e, t) {
    return e instanceof Error && Mc in e && (t == null || !!(e.type & t))
}
const sl = "[^/]+?",
    Kd = {
        sensitive: !1,
        strict: !1,
        start: !0,
        end: !0
    },
    qd = /[.+*?^${}()[\]/\\]/g;

function Gd(e, t) {
    const n = ve({}, Kd, t),
        s = [];
    let r = n.start ? "^" : "";
    const i = [];
    for (const u of e) {
        const c = u.length ? [] : [90];
        n.strict && !u.length && (r += "/");
        for (let f = 0; f < u.length; f++) {
            const h = u[f];
            let d = 40 + (n.sensitive ? .25 : 0);
            if (h.type === 0) f || (r += "/"), r += h.value.replace(qd, "\\$&"), d += 40;
            else if (h.type === 1) {
                const {
                    value: p,
                    repeatable: g,
                    optional: _,
                    regexp: v
                } = h;
                i.push({
                    name: p,
                    repeatable: g,
                    optional: _
                });
                const w = v || sl;
                if (w !== sl) {
                    d += 10;
                    try {
                        new RegExp(`(${w})`)
                    } catch (C) {
                        throw new Error(`Invalid custom RegExp for param "${p}" (${w}): ` + C.message)
                    }
                }
                let y = g ? `((?:${w})(?:/(?:${w}))*)` : `(${w})`;
                f || (y = _ && u.length < 2 ? `(?:/${y})` : "/" + y), _ && (y += "?"), r += y, d += 20, _ && (d += -8), g && (d += -20), w === ".*" && (d += -50)
            }
            c.push(d)
        }
        s.push(c)
    }
    if (n.strict && n.end) {
        const u = s.length - 1;
        s[u][s[u].length - 1] += .7000000000000001
    }
    n.strict || (r += "/?"), n.end ? r += "$" : n.strict && (r += "(?:/|$)");
    const o = new RegExp(r, n.sensitive ? "" : "i");

    function l(u) {
        const c = u.match(o),
            f = {};
        if (!c) return null;
        for (let h = 1; h < c.length; h++) {
            const d = c[h] || "",
                p = i[h - 1];
            f[p.name] = d && p.repeatable ? d.split("/") : d
        }
        return f
    }

    function a(u) {
        let c = "",
            f = !1;
        for (const h of e) {
            (!f || !c.endsWith("/")) && (c += "/"), f = !1;
            for (const d of h)
                if (d.type === 0) c += d.value;
                else if (d.type === 1) {
                const {
                    value: p,
                    repeatable: g,
                    optional: _
                } = d, v = p in u ? u[p] : "";
                if (at(v) && !g) throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);
                const w = at(v) ? v.join("/") : v;
                if (!w)
                    if (_) h.length < 2 && (c.endsWith("/") ? c = c.slice(0, -1) : f = !0);
                    else throw new Error(`Missing required param "${p}"`);
                c += w
            }
        }
        return c || "/"
    }
    return {
        re: o,
        score: s,
        keys: i,
        parse: l,
        stringify: a
    }
}

function zd(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length;) {
        const s = t[n] - e[n];
        if (s) return s;
        n++
    }
    return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0
}

function Yd(e, t) {
    let n = 0;
    const s = e.score,
        r = t.score;
    for (; n < s.length && n < r.length;) {
        const i = zd(s[n], r[n]);
        if (i) return i;
        n++
    }
    if (Math.abs(r.length - s.length) === 1) {
        if (rl(s)) return 1;
        if (rl(r)) return -1
    }
    return r.length - s.length
}

function rl(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0
}
const Jd = {
        type: 0,
        value: ""
    },
    Xd = /[a-zA-Z0-9_]/;

function Zd(e) {
    if (!e) return [
        []
    ];
    if (e === "/") return [
        [Jd]
    ];
    if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);

    function t(d) {
        throw new Error(`ERR (${n})/"${u}": ${d}`)
    }
    let n = 0,
        s = n;
    const r = [];
    let i;

    function o() {
        i && r.push(i), i = []
    }
    let l = 0,
        a, u = "",
        c = "";

    function f() {
        u && (n === 0 ? i.push({
            type: 0,
            value: u
        }) : n === 1 || n === 2 || n === 3 ? (i.length > 1 && (a === "*" || a === "+") && t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`), i.push({
            type: 1,
            value: u,
            regexp: c,
            repeatable: a === "*" || a === "+",
            optional: a === "*" || a === "?"
        })) : t("Invalid state to consume buffer"), u = "")
    }

    function h() {
        u += a
    }
    for (; l < e.length;) {
        if (a = e[l++], a === "\\" && n !== 2) {
            s = n, n = 4;
            continue
        }
        switch (n) {
            case 0:
                a === "/" ? (u && f(), o()) : a === ":" ? (f(), n = 1) : h();
                break;
            case 4:
                h(), n = s;
                break;
            case 1:
                a === "(" ? n = 2 : Xd.test(a) ? h() : (f(), n = 0, a !== "*" && a !== "?" && a !== "+" && l--);
                break;
            case 2:
                a === ")" ? c[c.length - 1] == "\\" ? c = c.slice(0, -1) + a : n = 3 : c += a;
                break;
            case 3:
                f(), n = 0, a !== "*" && a !== "?" && a !== "+" && l--, c = "";
                break;
            default:
                t("Unknown state");
                break
        }
    }
    return n === 2 && t(`Unfinished custom RegExp for param "${u}"`), f(), o(), r
}

function ep(e, t, n) {
    const s = Gd(Zd(e.path), n),
        r = ve(s, {
            record: e,
            parent: t,
            children: [],
            alias: []
        });
    return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r
}

function tp(e, t) {
    const n = [],
        s = new Map;
    t = ll({
        strict: !1,
        end: !0,
        sensitive: !1
    }, t);

    function r(c) {
        return s.get(c)
    }

    function i(c, f, h) {
        const d = !h,
            p = np(c);
        p.aliasOf = h && h.record;
        const g = ll(t, c),
            _ = [p];
        if ("alias" in c) {
            const y = typeof c.alias == "string" ? [c.alias] : c.alias;
            for (const C of y) _.push(ve({}, p, {
                components: h ? h.record.components : p.components,
                path: C,
                aliasOf: h ? h.record : p
            }))
        }
        let v, w;
        for (const y of _) {
            const {
                path: C
            } = y;
            if (f && C[0] !== "/") {
                const S = f.record.path,
                    A = S[S.length - 1] === "/" ? "" : "/";
                y.path = f.record.path + (C && A + C)
            }
            if (v = ep(y, f, g), h ? h.alias.push(v) : (w = w || v, w !== v && w.alias.push(v), d && c.name && !ol(v) && o(c.name)), p.children) {
                const S = p.children;
                for (let A = 0; A < S.length; A++) i(S[A], v, h && h.children[A])
            }
            h = h || v, (v.record.components && Object.keys(v.record.components).length || v.record.name || v.record.redirect) && a(v)
        }
        return w ? () => {
            o(w)
        } : Un
    }

    function o(c) {
        if (Rc(c)) {
            const f = s.get(c);
            f && (s.delete(c), n.splice(n.indexOf(f), 1), f.children.forEach(o), f.alias.forEach(o))
        } else {
            const f = n.indexOf(c);
            f > -1 && (n.splice(f, 1), c.record.name && s.delete(c.record.name), c.children.forEach(o), c.alias.forEach(o))
        }
    }

    function l() {
        return n
    }

    function a(c) {
        let f = 0;
        for (; f < n.length && Yd(c, n[f]) >= 0 && (c.record.path !== n[f].record.path || !kc(c, n[f]));) f++;
        n.splice(f, 0, c), c.record.name && !ol(c) && s.set(c.record.name, c)
    }

    function u(c, f) {
        let h, d = {},
            p, g;
        if ("name" in c && c.name) {
            if (h = s.get(c.name), !h) throw _n(1, {
                location: c
            });
            g = h.record.name, d = ve(il(f.params, h.keys.filter(w => !w.optional).map(w => w.name)), c.params && il(c.params, h.keys.map(w => w.name))), p = h.stringify(d)
        } else if ("path" in c) p = c.path, h = n.find(w => w.re.test(p)), h && (d = h.parse(p), g = h.record.name);
        else {
            if (h = f.name ? s.get(f.name) : n.find(w => w.re.test(f.path)), !h) throw _n(1, {
                location: c,
                currentLocation: f
            });
            g = h.record.name, d = ve({}, f.params, c.params), p = h.stringify(d)
        }
        const _ = [];
        let v = h;
        for (; v;) _.unshift(v.record), v = v.parent;
        return {
            name: g,
            path: p,
            params: d,
            matched: _,
            meta: rp(_)
        }
    }
    return e.forEach(c => i(c)), {
        addRoute: i,
        resolve: u,
        removeRoute: o,
        getRoutes: l,
        getRecordMatcher: r
    }
}

function il(e, t) {
    const n = {};
    for (const s of t) s in e && (n[s] = e[s]);
    return n
}

function np(e) {
    return {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: void 0,
        beforeEnter: e.beforeEnter,
        props: sp(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set,
        updateGuards: new Set,
        enterCallbacks: {},
        components: "components" in e ? e.components || null : e.component && {
            default: e.component
        }
    }
}

function sp(e) {
    const t = {},
        n = e.props || !1;
    if ("component" in e) t.default = n;
    else
        for (const s in e.components) t[s] = typeof n == "object" ? n[s] : n;
    return t
}

function ol(e) {
    for (; e;) {
        if (e.record.aliasOf) return !0;
        e = e.parent
    }
    return !1
}

function rp(e) {
    return e.reduce((t, n) => ve(t, n.meta), {})
}

function ll(e, t) {
    const n = {};
    for (const s in e) n[s] = s in t ? t[s] : e[s];
    return n
}

function kc(e, t) {
    return t.children.some(n => n === e || kc(e, n))
}
const Fc = /#/g,
    ip = /&/g,
    op = /\//g,
    lp = /=/g,
    ap = /\?/g,
    Ic = /\+/g,
    cp = /%5B/g,
    up = /%5D/g,
    Dc = /%5E/g,
    fp = /%60/g,
    Lc = /%7B/g,
    hp = /%7C/g,
    Hc = /%7D/g,
    dp = /%20/g;

function Wi(e) {
    return encodeURI("" + e).replace(hp, "|").replace(cp, "[").replace(up, "]")
}

function pp(e) {
    return Wi(e).replace(Lc, "{").replace(Hc, "}").replace(Dc, "^")
}

function hi(e) {
    return Wi(e).replace(Ic, "%2B").replace(dp, "+").replace(Fc, "%23").replace(ip, "%26").replace(fp, "`").replace(Lc, "{").replace(Hc, "}").replace(Dc, "^")
}

function gp(e) {
    return hi(e).replace(lp, "%3D")
}

function mp(e) {
    return Wi(e).replace(Fc, "%23").replace(ap, "%3F")
}

function yp(e) {
    return e == null ? "" : mp(e).replace(op, "%2F")
}

function $s(e) {
    try {
        return decodeURIComponent("" + e)
    } catch {}
    return "" + e
}

function vp(e) {
    const t = {};
    if (e === "" || e === "?") return t;
    const s = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let r = 0; r < s.length; ++r) {
        const i = s[r].replace(Ic, " "),
            o = i.indexOf("="),
            l = $s(o < 0 ? i : i.slice(0, o)),
            a = o < 0 ? null : $s(i.slice(o + 1));
        if (l in t) {
            let u = t[l];
            at(u) || (u = t[l] = [u]), u.push(a)
        } else t[l] = a
    }
    return t
}

function al(e) {
    let t = "";
    for (let n in e) {
        const s = e[n];
        if (n = gp(n), s == null) {
            s !== void 0 && (t += (t.length ? "&" : "") + n);
            continue
        }(at(s) ? s.map(i => i && hi(i)) : [s && hi(s)]).forEach(i => {
            i !== void 0 && (t += (t.length ? "&" : "") + n, i != null && (t += "=" + i))
        })
    }
    return t
}

function bp(e) {
    const t = {};
    for (const n in e) {
        const s = e[n];
        s !== void 0 && (t[n] = at(s) ? s.map(r => r == null ? null : "" + r) : s == null ? s : "" + s)
    }
    return t
}
const _p = Symbol(""),
    cl = Symbol(""),
    cr = Symbol(""),
    Ki = Symbol(""),
    di = Symbol("");

function Rn() {
    let e = [];

    function t(s) {
        return e.push(s), () => {
            const r = e.indexOf(s);
            r > -1 && e.splice(r, 1)
        }
    }

    function n() {
        e = []
    }
    return {
        add: t,
        list: () => e.slice(),
        reset: n
    }
}

function Dt(e, t, n, s, r) {
    const i = s && (s.enterCallbacks[r] = s.enterCallbacks[r] || []);
    return () => new Promise((o, l) => {
        const a = f => {
                f === !1 ? l(_n(4, {
                    from: n,
                    to: t
                })) : f instanceof Error ? l(f) : Wd(f) ? l(_n(2, {
                    from: t,
                    to: f
                })) : (i && s.enterCallbacks[r] === i && typeof f == "function" && i.push(f), o())
            },
            u = e.call(s && s.instances[r], t, n, a);
        let c = Promise.resolve(u);
        e.length < 3 && (c = c.then(a)), c.catch(f => l(f))
    })
}

function Rr(e, t, n, s) {
    const r = [];
    for (const i of e)
        for (const o in i.components) {
            let l = i.components[o];
            if (!(t !== "beforeRouteEnter" && !i.instances[o]))
                if (wp(l)) {
                    const u = (l.__vccOpts || l)[t];
                    u && r.push(Dt(u, n, s, i, o))
                } else {
                    let a = l();
                    r.push(() => a.then(u => {
                        if (!u) return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));
                        const c = Dd(u) ? u.default : u;
                        i.components[o] = c;
                        const h = (c.__vccOpts || c)[t];
                        return h && Dt(h, n, s, i, o)()
                    }))
                }
        }
    return r
}

function wp(e) {
    return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e
}

function ul(e) {
    const t = He(cr),
        n = He(Ki),
        s = ue(() => t.resolve(Ze(e.to))),
        r = ue(() => {
            const {
                matched: a
            } = s.value, {
                length: u
            } = a, c = a[u - 1], f = n.matched;
            if (!c || !f.length) return -1;
            const h = f.findIndex(bn.bind(null, c));
            if (h > -1) return h;
            const d = fl(a[u - 2]);
            return u > 1 && fl(c) === d && f[f.length - 1].path !== d ? f.findIndex(bn.bind(null, a[u - 2])) : h
        }),
        i = ue(() => r.value > -1 && Op(n.params, s.value.params)),
        o = ue(() => r.value > -1 && r.value === n.matched.length - 1 && Ac(n.params, s.value.params));

    function l(a = {}) {
        return Ep(a) ? t[Ze(e.replace) ? "replace" : "push"](Ze(e.to)).catch(Un) : Promise.resolve()
    }
    return {
        route: s,
        href: ue(() => s.value.href),
        isActive: i,
        isExactActive: o,
        navigate: l
    }
}
const Cp = Fi({
        name: "RouterLink",
        compatConfig: {
            MODE: 3
        },
        props: {
            to: {
                type: [String, Object],
                required: !0
            },
            replace: Boolean,
            activeClass: String,
            exactActiveClass: String,
            custom: Boolean,
            ariaCurrentValue: {
                type: String,
                default: "page"
            }
        },
        useLink: ul,
        setup(e, {
            slots: t
        }) {
            const n = Zn(ul(e)),
                {
                    options: s
                } = He(cr),
                r = ue(() => ({
                    [hl(e.activeClass, s.linkActiveClass, "router-link-active")]: n.isActive,
                    [hl(e.exactActiveClass, s.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
                }));
            return () => {
                const i = t.default && t.default(n);
                return e.custom ? i : Vi("a", {
                    "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                    href: n.href,
                    onClick: n.navigate,
                    class: r.value
                }, i)
            }
        }
    }),
    Sp = Cp;

function Ep(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(t)) return
        }
        return e.preventDefault && e.preventDefault(), !0
    }
}

function Op(e, t) {
    for (const n in t) {
        const s = t[n],
            r = e[n];
        if (typeof s == "string") {
            if (s !== r) return !1
        } else if (!at(r) || r.length !== s.length || s.some((i, o) => i !== r[o])) return !1
    }
    return !0
}

function fl(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const hl = (e, t, n) => e ? ? t ? ? n,
    Tp = Fi({
        name: "RouterView",
        inheritAttrs: !1,
        props: {
            name: {
                type: String,
                default: "default"
            },
            route: Object
        },
        compatConfig: {
            MODE: 3
        },
        setup(e, {
            attrs: t,
            slots: n
        }) {
            const s = He(di),
                r = ue(() => e.route || s.value),
                i = He(cl, 0),
                o = ue(() => {
                    let u = Ze(i);
                    const {
                        matched: c
                    } = r.value;
                    let f;
                    for (;
                        (f = c[u]) && !f.components;) u++;
                    return u
                }),
                l = ue(() => r.value.matched[o.value]);
            vs(cl, ue(() => o.value + 1)), vs(_p, l), vs(di, r);
            const a = Ae();
            return le(() => [a.value, l.value, e.name], ([u, c, f], [h, d, p]) => {
                c && (c.instances[f] = u, d && d !== c && u && u === h && (c.leaveGuards.size || (c.leaveGuards = d.leaveGuards), c.updateGuards.size || (c.updateGuards = d.updateGuards))), u && c && (!d || !bn(c, d) || !h) && (c.enterCallbacks[f] || []).forEach(g => g(u))
            }, {
                flush: "post"
            }), () => {
                const u = r.value,
                    c = e.name,
                    f = l.value,
                    h = f && f.components[c];
                if (!h) return dl(n.default, {
                    Component: h,
                    route: u
                });
                const d = f.props[c],
                    p = d ? d === !0 ? u.params : typeof d == "function" ? d(u) : d : null,
                    _ = Vi(h, ve({}, p, t, {
                        onVnodeUnmounted: v => {
                            v.component.isUnmounted && (f.instances[c] = null)
                        },
                        ref: a
                    }));
                return dl(n.default, {
                    Component: _,
                    route: u
                }) || _
            }
        }
    });

function dl(e, t) {
    if (!e) return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n
}
const Pp = Tp;

function Rm(e) {
    const t = tp(e.routes, e),
        n = e.parseQuery || vp,
        s = e.stringifyQuery || al,
        r = e.history,
        i = Rn(),
        o = Rn(),
        l = Rn(),
        a = te(At);
    let u = At;
    An && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const c = xr.bind(null, M => "" + M),
        f = xr.bind(null, yp),
        h = xr.bind(null, $s);

    function d(M, Q) {
        let U, G;
        return Rc(M) ? (U = t.getRecordMatcher(M), G = Q) : G = M, t.addRoute(G, U)
    }

    function p(M) {
        const Q = t.getRecordMatcher(M);
        Q && t.removeRoute(Q)
    }

    function g() {
        return t.getRoutes().map(M => M.record)
    }

    function _(M) {
        return !!t.getRecordMatcher(M)
    }

    function v(M, Q) {
        if (Q = ve({}, Q || a.value), typeof M == "string") {
            const b = Ar(n, M, Q.path),
                T = t.resolve({
                    path: b.path
                }, Q),
                F = r.createHref(b.fullPath);
            return ve(b, T, {
                params: h(T.params),
                hash: $s(b.hash),
                redirectedFrom: void 0,
                href: F
            })
        }
        let U;
        if ("path" in M) U = ve({}, M, {
            path: Ar(n, M.path, Q.path).path
        });
        else {
            const b = ve({}, M.params);
            for (const T in b) b[T] == null && delete b[T];
            U = ve({}, M, {
                params: f(b)
            }), Q.params = f(Q.params)
        }
        const G = t.resolve(U, Q),
            ae = M.hash || "";
        G.params = c(h(G.params));
        const ye = Ld(s, ve({}, M, {
                hash: pp(ae),
                path: G.path
            })),
            m = r.createHref(ye);
        return ve({
            fullPath: ye,
            hash: ae,
            query: s === al ? bp(M.query) : M.query || {}
        }, G, {
            redirectedFrom: void 0,
            href: m,
            meta: { ...G.meta,
                state: M.state
            }
        })
    }

    function w(M) {
        return typeof M == "string" ? Ar(n, M, a.value.path) : ve({}, M)
    }

    function y(M, Q) {
        if (u !== M) return _n(8, {
            from: Q,
            to: M
        })
    }

    function C(M) {
        return O(M)
    }

    function S(M) {
        return C(ve(w(M), {
            replace: !0
        }))
    }

    function A(M) {
        const Q = M.matched[M.matched.length - 1];
        if (Q && Q.redirect) {
            const {
                redirect: U
            } = Q;
            let G = typeof U == "function" ? U(M) : U;
            return typeof G == "string" && (G = G.includes("?") || G.includes("#") ? G = w(G) : {
                path: G
            }, G.params = {}), ve({
                query: M.query,
                hash: M.hash,
                params: "path" in G ? {} : M.params
            }, G)
        }
    }

    function O(M, Q) {
        const U = u = v(M),
            G = a.value,
            ae = M.state,
            ye = M.force,
            m = M.replace === !0,
            b = A(U);
        if (b) return O(ve(w(b), {
            state: typeof b == "object" ? ve({}, ae, b.state) : ae,
            force: ye,
            replace: m
        }), Q || U);
        const T = U;
        T.redirectedFrom = Q;
        let F;
        return !ye && Hd(s, G, U) && (F = _n(16, {
            to: T,
            from: G
        }), ct(G, G, !0, !1)), (F ? Promise.resolve(F) : x(T, G)).catch(R => vt(R) ? vt(R, 2) ? R : Pt(R) : K(R, T, G)).then(R => {
            if (R) {
                if (vt(R, 2)) return O(ve({
                    replace: m
                }, w(R.to), {
                    state: typeof R.to == "object" ? ve({}, ae, R.to.state) : ae,
                    force: ye
                }), Q || T)
            } else R = k(T, G, !0, m, ae);
            return H(T, G, R), R
        })
    }

    function P(M, Q) {
        const U = y(M, Q);
        return U ? Promise.reject(U) : Promise.resolve()
    }

    function E(M) {
        const Q = tn.values().next().value;
        return Q && typeof Q.runWithContext == "function" ? Q.runWithContext(M) : M()
    }

    function x(M, Q) {
        let U;
        const [G, ae, ye] = xp(M, Q);
        U = Rr(G.reverse(), "beforeRouteLeave", M, Q);
        for (const b of G) b.leaveGuards.forEach(T => {
            U.push(Dt(T, M, Q))
        });
        const m = P.bind(null, M, Q);
        return U.push(m), Ge(U).then(() => {
            U = [];
            for (const b of i.list()) U.push(Dt(b, M, Q));
            return U.push(m), Ge(U)
        }).then(() => {
            U = Rr(ae, "beforeRouteUpdate", M, Q);
            for (const b of ae) b.updateGuards.forEach(T => {
                U.push(Dt(T, M, Q))
            });
            return U.push(m), Ge(U)
        }).then(() => {
            U = [];
            for (const b of ye)
                if (b.beforeEnter)
                    if (at(b.beforeEnter))
                        for (const T of b.beforeEnter) U.push(Dt(T, M, Q));
                    else U.push(Dt(b.beforeEnter, M, Q));
            return U.push(m), Ge(U)
        }).then(() => (M.matched.forEach(b => b.enterCallbacks = {}), U = Rr(ye, "beforeRouteEnter", M, Q), U.push(m), Ge(U))).then(() => {
            U = [];
            for (const b of o.list()) U.push(Dt(b, M, Q));
            return U.push(m), Ge(U)
        }).catch(b => vt(b, 8) ? b : Promise.reject(b))
    }

    function H(M, Q, U) {
        l.list().forEach(G => E(() => G(M, Q, U)))
    }

    function k(M, Q, U, G, ae) {
        const ye = y(M, Q);
        if (ye) return ye;
        const m = Q === At,
            b = An ? history.state : {};
        U && (G || m ? r.replace(M.fullPath, ve({
            scroll: m && b && b.scroll
        }, ae)) : r.push(M.fullPath, ae)), a.value = M, ct(M, Q, U, m), Pt()
    }
    let W;

    function V() {
        W || (W = r.listen((M, Q, U) => {
            const G = v(M),
                ae = A(G);
            if (ae) {
                O(ve(ae, {
                    replace: !0
                }), G).catch(Un);
                return
            }
            u = G;
            const ye = a.value;
            An && Vd(tl(ye.fullPath, U.delta), Ud()), x(G, ye).catch(m => vt(m, 12) ? m : vt(m, 2) ? (O(m.to, G).then(b => {
                vt(b, 20) && !U.delta && U.type === Ns.pop && r.go(-1, !1)
            }).catch(Un), Promise.reject()) : (U.delta && r.go(-U.delta, !1), K(m, G, ye))).then(m => {
                m = m || k(G, ye, !1), m && (U.delta && !vt(m, 8) ? r.go(-U.delta, !1) : U.type === Ns.pop && vt(m, 20) && r.go(-1, !1)), H(G, ye, m)
            }).catch(Un)
        }))
    }
    let X = Rn(),
        L = Rn(),
        ne;

    function K(M, Q, U) {
        Pt(M);
        const G = L.list();
        return G.length ? G.forEach(ae => ae(M, Q, U)) : console.error(M), Promise.reject(M)
    }

    function we() {
        return ne && a.value !== At ? Promise.resolve() : new Promise((M, Q) => {
            X.add([M, Q])
        })
    }

    function Pt(M) {
        return ne || (ne = !M, V(), X.list().forEach(([Q, U]) => M ? U(M) : Q()), X.reset()), M
    }

    function ct(M, Q, U, G) {
        const {
            scrollBehavior: ae
        } = e;
        if (!An || !ae) return Promise.resolve();
        const ye = !U && Qd(tl(M.fullPath, 0)) || (G || !U) && history.state && history.state.scroll || null;
        return tt().then(() => ae(M, Q, ye)).then(m => m && Bd(m)).catch(m => K(m, M, Q))
    }
    const Ne = M => r.go(M);
    let en;
    const tn = new Set,
        ur = {
            currentRoute: a,
            listening: !0,
            addRoute: d,
            removeRoute: p,
            hasRoute: _,
            getRoutes: g,
            resolve: v,
            options: e,
            push: C,
            replace: S,
            go: Ne,
            back: () => Ne(-1),
            forward: () => Ne(1),
            beforeEach: i.add,
            beforeResolve: o.add,
            afterEach: l.add,
            onError: L.add,
            isReady: we,
            install(M) {
                const Q = this;
                M.component("RouterLink", Sp), M.component("RouterView", Pp), M.config.globalProperties.$router = Q, Object.defineProperty(M.config.globalProperties, "$route", {
                    enumerable: !0,
                    get: () => Ze(a)
                }), An && !en && a.value === At && (en = !0, C(r.location).catch(ae => {}));
                const U = {};
                for (const ae in At) Object.defineProperty(U, ae, {
                    get: () => a.value[ae],
                    enumerable: !0
                });
                M.provide(cr, Q), M.provide(Ki, Js(U)), M.provide(di, a);
                const G = M.unmount;
                tn.add(M), M.unmount = function() {
                    tn.delete(M), tn.size < 1 && (u = At, W && W(), W = null, a.value = At, en = !1, ne = !1, r.destroy()), G()
                }
            }
        };

    function Ge(M) {
        return M.reduce((Q, U) => Q.then(() => E(U)), Promise.resolve())
    }
    return ur
}

function xp(e, t) {
    const n = [],
        s = [],
        r = [],
        i = Math.max(t.matched.length, e.matched.length);
    for (let o = 0; o < i; o++) {
        const l = t.matched[o];
        l && (e.matched.find(u => bn(u, l)) ? s.push(l) : n.push(l));
        const a = e.matched[o];
        a && (t.matched.find(u => bn(u, a)) || r.push(a))
    }
    return [n, s, r]
}

function Mm() {
    return He(cr)
}

function km() {
    return He(Ki)
}
var gs = {};
var pl;

function Ap() {
    if (pl) return gs;
    pl = 1, gs.parse = o, gs.serialize = u;
    var e = Object.prototype.toString,
        t = Object.prototype.hasOwnProperty,
        n = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/,
        s = /^("?)[\u0021\u0023-\u002B\u002D-\u003A\u003C-\u005B\u005D-\u007E]*\1$/,
        r = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
        i = /^[\u0020-\u003A\u003D-\u007E]*$/;

    function o(d, p) {
        if (typeof d != "string") throw new TypeError("argument str must be a string");
        var g = {},
            _ = d.length;
        if (_ < 2) return g;
        var v = p && p.decode || c,
            w = 0,
            y = 0,
            C = 0;
        do {
            if (y = d.indexOf("=", w), y === -1) break;
            if (C = d.indexOf(";", w), C === -1) C = _;
            else if (y > C) {
                w = d.lastIndexOf(";", y - 1) + 1;
                continue
            }
            var S = l(d, w, y),
                A = a(d, y, S),
                O = d.slice(S, A);
            if (!t.call(g, O)) {
                var P = l(d, y + 1, C),
                    E = a(d, C, P);
                d.charCodeAt(P) === 34 && d.charCodeAt(E - 1) === 34 && (P++, E--);
                var x = d.slice(P, E);
                g[O] = h(x, v)
            }
            w = C + 1
        } while (w < _);
        return g
    }

    function l(d, p, g) {
        do {
            var _ = d.charCodeAt(p);
            if (_ !== 32 && _ !== 9) return p
        } while (++p < g);
        return g
    }

    function a(d, p, g) {
        for (; p > g;) {
            var _ = d.charCodeAt(--p);
            if (_ !== 32 && _ !== 9) return p + 1
        }
        return g
    }

    function u(d, p, g) {
        var _ = g && g.encode || encodeURIComponent;
        if (typeof _ != "function") throw new TypeError("option encode is invalid");
        if (!n.test(d)) throw new TypeError("argument name is invalid");
        var v = _(p);
        if (!s.test(v)) throw new TypeError("argument val is invalid");
        var w = d + "=" + v;
        if (!g) return w;
        if (g.maxAge != null) {
            var y = Math.floor(g.maxAge);
            if (!isFinite(y)) throw new TypeError("option maxAge is invalid");
            w += "; Max-Age=" + y
        }
        if (g.domain) {
            if (!r.test(g.domain)) throw new TypeError("option domain is invalid");
            w += "; Domain=" + g.domain
        }
        if (g.path) {
            if (!i.test(g.path)) throw new TypeError("option path is invalid");
            w += "; Path=" + g.path
        }
        if (g.expires) {
            var C = g.expires;
            if (!f(C) || isNaN(C.valueOf())) throw new TypeError("option expires is invalid");
            w += "; Expires=" + C.toUTCString()
        }
        if (g.httpOnly && (w += "; HttpOnly"), g.secure && (w += "; Secure"), g.partitioned && (w += "; Partitioned"), g.priority) {
            var S = typeof g.priority == "string" ? g.priority.toLowerCase() : g.priority;
            switch (S) {
                case "low":
                    w += "; Priority=Low";
                    break;
                case "medium":
                    w += "; Priority=Medium";
                    break;
                case "high":
                    w += "; Priority=High";
                    break;
                default:
                    throw new TypeError("option priority is invalid")
            }
        }
        if (g.sameSite) {
            var A = typeof g.sameSite == "string" ? g.sameSite.toLowerCase() : g.sameSite;
            switch (A) {
                case !0:
                    w += "; SameSite=Strict";
                    break;
                case "lax":
                    w += "; SameSite=Lax";
                    break;
                case "strict":
                    w += "; SameSite=Strict";
                    break;
                case "none":
                    w += "; SameSite=None";
                    break;
                default:
                    throw new TypeError("option sameSite is invalid")
            }
        }
        return w
    }

    function c(d) {
        return d.indexOf("%") !== -1 ? decodeURIComponent(d) : d
    }

    function f(d) {
        return e.call(d) === "[object Date]"
    }

    function h(d, p) {
        try {
            return p(d)
        } catch {
            return d
        }
    }
    return gs
}
var ws = Ap();

function Rp() {
    const e = typeof global > "u" ? void 0 : global.TEST_HAS_DOCUMENT_COOKIE;
    return typeof e == "boolean" ? e : typeof document == "object" && typeof document.cookie == "string"
}

function Mp(e) {
    return typeof e == "string" ? ws.parse(e) : typeof e == "object" && e !== null ? e : {}
}

function Mr(e, t = {}) {
    const n = kp(e);
    if (!t.doNotParse) try {
        return JSON.parse(n)
    } catch {}
    return e
}

function kp(e) {
    return e && e[0] === "j" && e[1] === ":" ? e.substr(2) : e
}
class Fp {
    constructor(t, n = {}) {
        this.changeListeners = [], this.HAS_DOCUMENT_COOKIE = !1, this.update = () => {
            if (!this.HAS_DOCUMENT_COOKIE) return;
            const r = this.cookies;
            this.cookies = ws.parse(document.cookie), this._checkChanges(r)
        };
        const s = typeof document > "u" ? "" : document.cookie;
        this.cookies = Mp(t || s), this.defaultSetOptions = n, this.HAS_DOCUMENT_COOKIE = Rp()
    }
    _emitChange(t) {
        for (let n = 0; n < this.changeListeners.length; ++n) this.changeListeners[n](t)
    }
    _checkChanges(t) {
        new Set(Object.keys(t).concat(Object.keys(this.cookies))).forEach(s => {
            t[s] !== this.cookies[s] && this._emitChange({
                name: s,
                value: Mr(this.cookies[s])
            })
        })
    }
    _startPolling() {
        this.pollingInterval = setInterval(this.update, 300)
    }
    _stopPolling() {
        this.pollingInterval && clearInterval(this.pollingInterval)
    }
    get(t, n = {}) {
        return n.doNotUpdate || this.update(), Mr(this.cookies[t], n)
    }
    getAll(t = {}) {
        t.doNotUpdate || this.update();
        const n = {};
        for (let s in this.cookies) n[s] = Mr(this.cookies[s], t);
        return n
    }
    set(t, n, s) {
        s ? s = Object.assign(Object.assign({}, this.defaultSetOptions), s) : s = this.defaultSetOptions;
        const r = typeof n == "string" ? n : JSON.stringify(n);
        this.cookies = Object.assign(Object.assign({}, this.cookies), {
            [t]: r
        }), this.HAS_DOCUMENT_COOKIE && (document.cookie = ws.serialize(t, r, s)), this._emitChange({
            name: t,
            value: n,
            options: s
        })
    }
    remove(t, n) {
        const s = n = Object.assign(Object.assign(Object.assign({}, this.defaultSetOptions), n), {
            expires: new Date(1970, 1, 1, 0, 0, 1),
            maxAge: 0
        });
        this.cookies = Object.assign({}, this.cookies), delete this.cookies[t], this.HAS_DOCUMENT_COOKIE && (document.cookie = ws.serialize(t, "", s)), this._emitChange({
            name: t,
            value: void 0,
            options: n
        })
    }
    addChangeListener(t) {
        this.changeListeners.push(t), this.HAS_DOCUMENT_COOKIE && this.changeListeners.length === 1 && (typeof window == "object" && "cookieStore" in window ? window.cookieStore.addEventListener("change", this.update) : this._startPolling())
    }
    removeChangeListener(t) {
        const n = this.changeListeners.indexOf(t);
        n >= 0 && this.changeListeners.splice(n, 1), this.HAS_DOCUMENT_COOKIE && this.changeListeners.length === 0 && (typeof window == "object" && "cookieStore" in window ? window.cookieStore.removeEventListener("change", this.update) : this._stopPolling())
    }
}

function Fm(e, {
    doNotParse: t = !1,
    autoUpdateDependencies: n = !1
} = {}, s = new Fp) {
    const r = n ? [] : e;
    let i = s.getAll({
        doNotParse: !0
    });
    const o = te(0),
        l = () => {
            const a = s.getAll({
                doNotParse: !0
            });
            Ip(r || null, a, i) && o.value++, i = a
        };
    return s.addChangeListener(l), $t(() => {
        s.removeChangeListener(l)
    }), {
        get: (...a) => (n && r && !r.includes(a[0]) && r.push(a[0]), o.value, s.get(a[0], {
            doNotParse: t,
            ...a[1]
        })),
        getAll: (...a) => (o.value, s.getAll({
            doNotParse: t,
            ...a[0]
        })),
        set: (...a) => s.set(...a),
        remove: (...a) => s.remove(...a),
        addChangeListener: (...a) => s.addChangeListener(...a),
        removeChangeListener: (...a) => s.removeChangeListener(...a)
    }
}

function Ip(e, t, n) {
    if (!e) return !0;
    for (const s of e)
        if (t[s] !== n[s]) return !0;
    return !1
}
const Im = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [s, r] of t) n[s] = r;
    return n
};

function pi(e, t = {}, n) {
    for (const s in e) {
        const r = e[s],
            i = n ? `${n}:${s}` : s;
        typeof r == "object" && r !== null ? pi(r, t, i) : typeof r == "function" && (t[i] = r)
    }
    return t
}
const Dp = {
        run: e => e()
    },
    Lp = () => Dp,
    jc = typeof console.createTask < "u" ? console.createTask : Lp;

function Hp(e, t) {
    const n = t.shift(),
        s = jc(n);
    return e.reduce((r, i) => r.then(() => s.run(() => i(...t))), Promise.resolve())
}

function jp(e, t) {
    const n = t.shift(),
        s = jc(n);
    return Promise.all(e.map(r => s.run(() => r(...t))))
}

function kr(e, t) {
    for (const n of [...e]) n(t)
}
class Np {
    constructor() {
        this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this)
    }
    hook(t, n, s = {}) {
        if (!t || typeof n != "function") return () => {};
        const r = t;
        let i;
        for (; this._deprecatedHooks[t];) i = this._deprecatedHooks[t], t = i.to;
        if (i && !s.allowDeprecated) {
            let o = i.message;
            o || (o = `${r} hook has been deprecated` + (i.to ? `, please use ${i.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = new Set), this._deprecatedMessages.has(o) || (console.warn(o), this._deprecatedMessages.add(o))
        }
        if (!n.name) try {
            Object.defineProperty(n, "name", {
                get: () => "_" + t.replace(/\W+/g, "_") + "_hook_cb",
                configurable: !0
            })
        } catch {}
        return this._hooks[t] = this._hooks[t] || [], this._hooks[t].push(n), () => {
            n && (this.removeHook(t, n), n = void 0)
        }
    }
    hookOnce(t, n) {
        let s, r = (...i) => (typeof s == "function" && s(), s = void 0, r = void 0, n(...i));
        return s = this.hook(t, r), s
    }
    removeHook(t, n) {
        if (this._hooks[t]) {
            const s = this._hooks[t].indexOf(n);
            s !== -1 && this._hooks[t].splice(s, 1), this._hooks[t].length === 0 && delete this._hooks[t]
        }
    }
    deprecateHook(t, n) {
        this._deprecatedHooks[t] = typeof n == "string" ? {
            to: n
        } : n;
        const s = this._hooks[t] || [];
        delete this._hooks[t];
        for (const r of s) this.hook(t, r)
    }
    deprecateHooks(t) {
        Object.assign(this._deprecatedHooks, t);
        for (const n in t) this.deprecateHook(n, t[n])
    }
    addHooks(t) {
        const n = pi(t),
            s = Object.keys(n).map(r => this.hook(r, n[r]));
        return () => {
            for (const r of s.splice(0, s.length)) r()
        }
    }
    removeHooks(t) {
        const n = pi(t);
        for (const s in n) this.removeHook(s, n[s])
    }
    removeAllHooks() {
        for (const t in this._hooks) delete this._hooks[t]
    }
    callHook(t, ...n) {
        return n.unshift(t), this.callHookWith(Hp, t, ...n)
    }
    callHookParallel(t, ...n) {
        return n.unshift(t), this.callHookWith(jp, t, ...n)
    }
    callHookWith(t, n, ...s) {
        const r = this._before || this._after ? {
            name: n,
            args: s,
            context: {}
        } : void 0;
        this._before && kr(this._before, r);
        const i = t(n in this._hooks ? [...this._hooks[n]] : [], s);
        return i instanceof Promise ? i.finally(() => {
            this._after && r && kr(this._after, r)
        }) : (this._after && r && kr(this._after, r), i)
    }
    beforeEach(t) {
        return this._before = this._before || [], this._before.push(t), () => {
            if (this._before !== void 0) {
                const n = this._before.indexOf(t);
                n !== -1 && this._before.splice(n, 1)
            }
        }
    }
    afterEach(t) {
        return this._after = this._after || [], this._after.push(t), () => {
            if (this._after !== void 0) {
                const n = this._after.indexOf(t);
                n !== -1 && this._after.splice(n, 1)
            }
        }
    }
}

function $p() {
    return new Np
}

function Up(e) {
    return Array.isArray(e) ? e : [e]
}
const Bp = ["title", "titleTemplate", "script", "style", "noscript"],
    Cs = ["base", "meta", "link", "style", "script", "noscript"],
    Vp = ["title", "titleTemplate", "templateParams", "base", "htmlAttrs", "bodyAttrs", "meta", "link", "style", "script", "noscript"],
    Qp = ["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"],
    Nc = ["tagPosition", "tagPriority", "tagDuplicateStrategy", "children", "innerHTML", "textContent", "processTemplateParams"],
    Wp = typeof window < "u";

function qi(e) {
    let t = 9;
    for (let n = 0; n < e.length;) t = Math.imul(t ^ e.charCodeAt(n++), 9 ** 9);
    return ((t ^ t >>> 9) + 65536).toString(16).substring(1, 8).toLowerCase()
}

function gl(e) {
    return e._h || qi(e._d ? e._d : `${e.tag}:${e.textContent||e.innerHTML||""}:${Object.entries(e.props).map(([t,n])=>`${t}:${String(n)}`).join(",")}`)
}

function $c(e, t) {
    const {
        props: n,
        tag: s
    } = e;
    if (Qp.includes(s)) return s;
    if (s === "link" && n.rel === "canonical") return "canonical";
    if (n.charset) return "charset";
    const r = ["id"];
    s === "meta" && r.push("name", "property", "http-equiv");
    for (const i of r)
        if (typeof n[i] < "u") {
            const o = String(n[i]);
            return `${s}:${i}:${o}`
        }
    return !1
}

function ml(e, t) {
    return e == null ? t || null : typeof e == "function" ? e(t) : e
}
async function Kp(e, t, n) {
    const s = {
        tag: e,
        props: await Uc(typeof t == "object" && typeof t != "function" && !(t instanceof Promise) ? { ...t
        } : {
            [
                ["script", "noscript", "style"].includes(e) ? "innerHTML" : "textContent"
            ]: t
        }, ["templateParams", "titleTemplate"].includes(e))
    };
    return Nc.forEach(r => {
        const i = typeof s.props[r] < "u" ? s.props[r] : n[r];
        typeof i < "u" && ((!["innerHTML", "textContent", "children"].includes(r) || Bp.includes(s.tag)) && (s[r === "children" ? "innerHTML" : r] = i), delete s.props[r])
    }), s.props.body && (s.tagPosition = "bodyClose", delete s.props.body), s.tag === "script" && typeof s.innerHTML == "object" && (s.innerHTML = JSON.stringify(s.innerHTML), s.props.type = s.props.type || "application/json"), Array.isArray(s.props.content) ? s.props.content.map(r => ({ ...s,
        props: { ...s.props,
            content: r
        }
    })) : s
}

function qp(e, t) {
    const n = e === "class" ? " " : ";";
    return typeof t == "object" && !Array.isArray(t) && (t = Object.entries(t).filter(([, s]) => s).map(([s, r]) => e === "style" ? `${s}:${r}` : s)), (Array.isArray(t) ? t.join(n) : t) ? .split(n).filter(s => s.trim()).filter(Boolean).join(n)
}
async function Uc(e, t) {
    for (const n of Object.keys(e)) {
        if (["class", "style"].includes(n)) {
            e[n] = qp(n, e[n]);
            continue
        }
        if (e[n] instanceof Promise && (e[n] = await e[n]), !t && !Nc.includes(n)) {
            const s = String(e[n]),
                r = n.startsWith("data-");
            s === "true" || s === "" ? e[n] = r ? "true" : !0 : e[n] || (r && s === "false" ? e[n] = "false" : delete e[n])
        }
    }
    return e
}
const Gp = 10;
async function zp(e) {
    const t = [];
    return Object.entries(e.resolvedInput).filter(([n, s]) => typeof s < "u" && Vp.includes(n)).forEach(([n, s]) => {
        const r = Up(s);
        t.push(...r.map(i => Kp(n, i, e)).flat())
    }), (await Promise.all(t)).flat().filter(Boolean).map((n, s) => (n._e = e._i, e.mode && (n._m = e.mode), n._p = (e._i << Gp) + s, n))
}
const yl = {
        base: -10,
        title: 10
    },
    vl = {
        critical: -80,
        high: -10,
        low: 20
    };

function Us(e) {
    let t = 100;
    const n = e.tagPriority;
    return typeof n == "number" ? n : (e.tag === "meta" ? (e.props["http-equiv"] === "content-security-policy" && (t = -30), e.props.charset && (t = -20), e.props.name === "viewport" && (t = -15)) : e.tag === "link" && e.props.rel === "preconnect" ? t = 20 : e.tag in yl && (t = yl[e.tag]), typeof n == "string" && n in vl ? t + vl[n] : t)
}
const Yp = [{
        prefix: "before:",
        offset: -1
    }, {
        prefix: "after:",
        offset: 1
    }],
    bl = ["onload", "onerror", "onabort", "onprogress", "onloadstart"],
    Rt = "%separator";

function Ss(e, t, n) {
    if (typeof e != "string" || !e.includes("%")) return e;

    function s(o) {
        let l;
        return ["s", "pageTitle"].includes(o) ? l = t.pageTitle : o.includes(".") ? l = o.split(".").reduce((a, u) => a && a[u] || void 0, t) : l = t[o], typeof l < "u" ? (l || "").replace(/"/g, '\\"') : !1
    }
    let r = e;
    try {
        r = decodeURI(e)
    } catch {}
    return (r.match(/%(\w+\.+\w+)|%(\w+)/g) || []).sort().reverse().forEach(o => {
        const l = s(o.slice(1));
        typeof l == "string" && (e = e.replace(new RegExp(`\\${o}(\\W|$)`, "g"), (a, u) => `${l}${u}`).trim())
    }), e.includes(Rt) && (e.endsWith(Rt) && (e = e.slice(0, -Rt.length).trim()), e.startsWith(Rt) && (e = e.slice(Rt.length).trim()), e = e.replace(new RegExp(`\\${Rt}\\s*\\${Rt}`, "g"), Rt), e = Ss(e, {
        separator: n
    }, n)), e
}
async function Jp(e, t = {}) {
    const n = t.document || e.resolvedOptions.document;
    if (!n || !e.dirty) return;
    const s = {
        shouldRender: !0,
        tags: []
    };
    if (await e.hooks.callHook("dom:beforeRender", s), !s.shouldRender) return;
    const r = (await e.resolveTags()).map(c => ({
        tag: c,
        id: Cs.includes(c.tag) ? gl(c) : c.tag,
        shouldRender: !0
    }));
    let i = e._dom;
    if (!i) {
        i = {
            elMap: {
                htmlAttrs: n.documentElement,
                bodyAttrs: n.body
            }
        };
        for (const c of ["body", "head"]) {
            const f = n[c] ? .children,
                h = [];
            for (const d of [...f].filter(p => Cs.includes(p.tagName.toLowerCase()))) {
                const p = {
                    tag: d.tagName.toLowerCase(),
                    props: await Uc(d.getAttributeNames().reduce((v, w) => ({ ...v,
                        [w]: d.getAttribute(w)
                    }), {})),
                    innerHTML: d.innerHTML
                };
                let g = 1,
                    _ = $c(p);
                for (; _ && h.find(v => v._d === _);) _ = `${_}:${g++}`;
                p._d = _ || void 0, h.push(p), i.elMap[d.getAttribute("data-hid") || gl(p)] = d
            }
        }
    }
    i.pendingSideEffects = { ...i.sideEffects || {}
    }, i.sideEffects = {};

    function o(c, f, h) {
        const d = `${c}:${f}`;
        i.sideEffects[d] = h, delete i.pendingSideEffects[d]
    }

    function l({
        id: c,
        $el: f,
        tag: h
    }) {
        const d = h.tag.endsWith("Attrs");
        i.elMap[c] = f, d || (["textContent", "innerHTML"].forEach(p => {
            h[p] && h[p] !== f[p] && (f[p] = h[p])
        }), o(c, "el", () => {
            i.elMap[c] ? .remove(), delete i.elMap[c]
        }));
        for (const [p, g] of Object.entries(h._eventHandlers || {})) f.getAttribute(`data-${p}`) !== "" && ((h.tag === "bodyAttrs" ? n.defaultView : f).addEventListener(p.replace("on", ""), g.bind(f)), f.setAttribute(`data-${p}`, ""));
        Object.entries(h.props).forEach(([p, g]) => {
            const _ = `attr:${p}`;
            if (p === "class")
                for (const v of (g || "").split(" ").filter(Boolean)) d && o(c, `${_}:${v}`, () => f.classList.remove(v)), !f.classList.contains(v) && f.classList.add(v);
            else if (p === "style")
                for (const v of (g || "").split(";").filter(Boolean)) {
                    const [w, ...y] = v.split(":").map(C => C.trim());
                    o(c, `${_}:${v}:${w}`, () => {
                        f.style.removeProperty(w)
                    }), f.style.setProperty(w, y.join(":"))
                } else f.getAttribute(p) !== g && f.setAttribute(p, g === !0 ? "" : String(g)), d && o(c, _, () => f.removeAttribute(p))
        })
    }
    const a = [],
        u = {
            bodyClose: void 0,
            bodyOpen: void 0,
            head: void 0
        };
    for (const c of r) {
        const {
            tag: f,
            shouldRender: h,
            id: d
        } = c;
        if (h) {
            if (f.tag === "title") {
                n.title = f.textContent;
                continue
            }
            c.$el = c.$el || i.elMap[d], c.$el ? l(c) : Cs.includes(f.tag) && a.push(c)
        }
    }
    for (const c of a) {
        const f = c.tag.tagPosition || "head";
        c.$el = n.createElement(c.tag.tag), l(c), u[f] = u[f] || n.createDocumentFragment(), u[f].appendChild(c.$el)
    }
    for (const c of r) await e.hooks.callHook("dom:renderTag", c, n, o);
    u.head && n.head.appendChild(u.head), u.bodyOpen && n.body.insertBefore(u.bodyOpen, n.body.firstChild), u.bodyClose && n.body.appendChild(u.bodyClose), Object.values(i.pendingSideEffects).forEach(c => c()), e._dom = i, e.dirty = !1, await e.hooks.callHook("dom:rendered", {
        renders: r
    })
}
async function Xp(e, t = {}) {
    const n = t.delayFn || (s => setTimeout(s, 10));
    return e._domUpdatePromise = e._domUpdatePromise || new Promise(s => n(async () => {
        await Jp(e, t), delete e._domUpdatePromise, s()
    }))
}

function Zp(e) {
    return t => {
        const n = t.resolvedOptions.document ? .head.querySelector('script[id="unhead:payload"]') ? .innerHTML || !1;
        return n && t.push(JSON.parse(n)), {
            mode: "client",
            hooks: {
                "entries:updated": function(s) {
                    Xp(s, e)
                }
            }
        }
    }
}
const eg = ["templateParams", "htmlAttrs", "bodyAttrs"],
    tg = {
        hooks: {
            "tag:normalise": function({
                tag: e
            }) {
                ["hid", "vmid", "key"].forEach(s => {
                    e.props[s] && (e.key = e.props[s], delete e.props[s])
                });
                const n = $c(e) || (e.key ? `${e.tag}:${e.key}` : !1);
                n && (e._d = n)
            },
            "tags:resolve": function(e) {
                const t = {};
                e.tags.forEach(s => {
                    const r = (s.key ? `${s.tag}:${s.key}` : s._d) || s._p,
                        i = t[r];
                    if (i) {
                        let l = s ? .tagDuplicateStrategy;
                        if (!l && eg.includes(s.tag) && (l = "merge"), l === "merge") {
                            const a = i.props;
                            ["class", "style"].forEach(u => {
                                a[u] && (s.props[u] ? (u === "style" && !a[u].endsWith(";") && (a[u] += ";"), s.props[u] = `${a[u]} ${s.props[u]}`) : s.props[u] = a[u])
                            }), t[r].props = { ...a,
                                ...s.props
                            };
                            return
                        } else if (s._e === i._e) {
                            i._duped = i._duped || [], s._d = `${i._d}:${i._duped.length+1}`, i._duped.push(s);
                            return
                        } else if (Us(s) > Us(i)) return
                    }
                    const o = Object.keys(s.props).length + (s.innerHTML ? 1 : 0) + (s.textContent ? 1 : 0);
                    if (Cs.includes(s.tag) && o === 0) {
                        delete t[r];
                        return
                    }
                    t[r] = s
                });
                const n = [];
                Object.values(t).forEach(s => {
                    const r = s._duped;
                    delete s._duped, n.push(s), r && n.push(...r)
                }), e.tags = n, e.tags = e.tags.filter(s => !(s.tag === "meta" && (s.props.name || s.props.property) && !s.props.content))
            }
        }
    },
    ng = {
        mode: "server",
        hooks: {
            "tags:resolve": function(e) {
                const t = {};
                e.tags.filter(n => ["titleTemplate", "templateParams", "title"].includes(n.tag) && n._m === "server").forEach(n => {
                    t[n.tag] = n.tag.startsWith("title") ? n.textContent : n.props
                }), Object.keys(t).length && e.tags.push({
                    tag: "script",
                    innerHTML: JSON.stringify(t),
                    props: {
                        id: "unhead:payload",
                        type: "application/json"
                    }
                })
            }
        }
    },
    sg = ["script", "link", "bodyAttrs"],
    rg = e => ({
        hooks: {
            "tags:resolve": function(t) {
                for (const n of t.tags.filter(s => sg.includes(s.tag))) Object.entries(n.props).forEach(([s, r]) => {
                    s.startsWith("on") && typeof r == "function" && (e.ssr && bl.includes(s) ? n.props[s] = `this.dataset.${s}fired = true` : delete n.props[s], n._eventHandlers = n._eventHandlers || {}, n._eventHandlers[s] = r)
                }), e.ssr && n._eventHandlers && (n.props.src || n.props.href) && (n.key = n.key || qi(n.props.src || n.props.href))
            },
            "dom:renderTag": function({
                $el: t,
                tag: n
            }) {
                for (const s of Object.keys(t ? .dataset || {}).filter(r => bl.some(i => `${i}fired` === r))) {
                    const r = s.replace("fired", "");
                    n._eventHandlers ? .[r] ? .call(t, new Event(r.replace("on", "")))
                }
            }
        }
    }),
    ig = ["link", "style", "script", "noscript"],
    og = {
        hooks: {
            "tag:normalise": ({
                tag: e
            }) => {
                e.key && ig.includes(e.tag) && (e.props["data-hid"] = e._h = qi(e.key))
            }
        }
    },
    lg = {
        hooks: {
            "tags:resolve": e => {
                const t = n => e.tags.find(s => s._d === n) ? ._p;
                for (const {
                        prefix: n,
                        offset: s
                    } of Yp)
                    for (const r of e.tags.filter(i => typeof i.tagPriority == "string" && i.tagPriority.startsWith(n))) {
                        const i = t(r.tagPriority.replace(n, ""));
                        typeof i < "u" && (r._p = i + s)
                    }
                e.tags.sort((n, s) => n._p - s._p).sort((n, s) => Us(n) - Us(s))
            }
        }
    },
    ag = {
        meta: "content",
        link: "href",
        htmlAttrs: "lang"
    },
    cg = e => ({
        hooks: {
            "tags:resolve": t => {
                const {
                    tags: n
                } = t, s = n.find(l => l.tag === "title") ? .textContent, r = n.findIndex(l => l.tag === "templateParams"), i = r !== -1 ? n[r].props : {}, o = i.separator || "|";
                delete i.separator, i.pageTitle = Ss(i.pageTitle || s || "", i, o);
                for (const l of n.filter(a => a.processTemplateParams !== !1)) {
                    const a = ag[l.tag];
                    a && typeof l.props[a] == "string" ? l.props[a] = Ss(l.props[a], i, o) : (l.processTemplateParams === !0 || ["titleTemplate", "title"].includes(l.tag)) && ["innerHTML", "textContent"].forEach(u => {
                        typeof l[u] == "string" && (l[u] = Ss(l[u], i, o))
                    })
                }
                e._templateParams = i, e._separator = o, t.tags = n.filter(l => l.tag !== "templateParams")
            }
        }
    }),
    ug = {
        hooks: {
            "tags:resolve": e => {
                const {
                    tags: t
                } = e;
                let n = t.findIndex(r => r.tag === "titleTemplate");
                const s = t.findIndex(r => r.tag === "title");
                if (s !== -1 && n !== -1) {
                    const r = ml(t[n].textContent, t[s].textContent);
                    r !== null ? t[s].textContent = r || t[s].textContent : delete t[s]
                } else if (n !== -1) {
                    const r = ml(t[n].textContent);
                    r !== null && (t[n].textContent = r, t[n].tag = "title", n = -1)
                }
                n !== -1 && delete t[n], e.tags = t.filter(Boolean)
            }
        }
    },
    fg = {
        hooks: {
            "tags:afterResolve": function(e) {
                for (const t of e.tags) typeof t.innerHTML == "string" && (t.innerHTML && ["application/ld+json", "application/json"].includes(t.props.type) ? t.innerHTML = t.innerHTML.replace(/</g, "\\u003C") : t.innerHTML = t.innerHTML.replace(new RegExp(`</${t.tag}`, "g"), `<\\/${t.tag}`))
            }
        }
    };
let Bc;

function hg(e = {}) {
    const t = dg(e);
    return t.use(Zp()), Bc = t
}

function _l(e, t) {
    return !e || e === "server" && t || e === "client" && !t
}

function dg(e = {}) {
    const t = $p();
    t.addHooks(e.hooks || {}), e.document = e.document || (Wp ? document : void 0);
    const n = !e.document,
        s = () => {
            l.dirty = !0, t.callHook("entries:updated", l)
        };
    let r = 0,
        i = [];
    const o = [],
        l = {
            plugins: o,
            dirty: !1,
            resolvedOptions: e,
            hooks: t,
            headEntries() {
                return i
            },
            use(a) {
                const u = typeof a == "function" ? a(l) : a;
                (!u.key || !o.some(c => c.key === u.key)) && (o.push(u), _l(u.mode, n) && t.addHooks(u.hooks || {}))
            },
            push(a, u) {
                delete u ? .head;
                const c = {
                    _i: r++,
                    input: a,
                    ...u
                };
                return _l(c.mode, n) && (i.push(c), s()), {
                    dispose() {
                        i = i.filter(f => f._i !== c._i), t.callHook("entries:updated", l), s()
                    },
                    patch(f) {
                        i = i.map(h => (h._i === c._i && (h.input = c.input = f), h)), s()
                    }
                }
            },
            async resolveTags() {
                const a = {
                    tags: [],
                    entries: [...i]
                };
                await t.callHook("entries:resolve", a);
                for (const u of a.entries) {
                    const c = u.resolvedInput || u.input;
                    if (u.resolvedInput = await (u.transform ? u.transform(c) : c), u.resolvedInput)
                        for (const f of await zp(u)) {
                            const h = {
                                tag: f,
                                entry: u,
                                resolvedOptions: l.resolvedOptions
                            };
                            await t.callHook("tag:normalise", h), a.tags.push(h.tag)
                        }
                }
                return await t.callHook("tags:beforeResolve", a), await t.callHook("tags:resolve", a), await t.callHook("tags:afterResolve", a), a.tags
            },
            ssr: n
        };
    return [tg, ng, rg, og, lg, cg, ug, fg, ...e ? .plugins || []].forEach(a => l.use(a)), l.hooks.callHook("init", l), l
}

function pg() {
    return Bc
}
const gg = ic.startsWith("3");

function mg(e) {
    return typeof e == "function" ? e() : Ze(e)
}

function Bs(e, t = "") {
    if (e instanceof Promise) return e;
    const n = mg(e);
    return !e || !n ? n : Array.isArray(n) ? n.map(s => Bs(s, t)) : typeof n == "object" ? Object.fromEntries(Object.entries(n).map(([s, r]) => s === "titleTemplate" || s.startsWith("on") ? [s, Ze(r)] : [s, Bs(r, s)])) : n
}
const yg = {
        hooks: {
            "entries:resolve": function(e) {
                for (const t of e.entries) t.resolvedInput = Bs(t.input)
            }
        }
    },
    Vc = "usehead";

function vg(e) {
    return {
        install(n) {
            gg && (n.config.globalProperties.$unhead = e, n.config.globalProperties.$head = e, n.provide(Vc, e))
        }
    }.install
}

function Dm(e = {}) {
    e.domDelayFn = e.domDelayFn || (n => tt(() => setTimeout(() => n(), 0)));
    const t = hg(e);
    return t.use(yg), t.install = vg(t), t
}
const wl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
    Cl = "__unhead_injection_handler__";

function bg() {
    return Cl in wl ? wl[Cl]() : He(Vc) || pg()
}

function Lm(e, t = {}) {
    const n = t.head || bg();
    if (n) return n.ssr ? n.push(e, t) : _g(n, e, t)
}

function _g(e, t, n = {}) {
    const s = Ae(!1),
        r = Ae({});
    Qa(() => {
        r.value = s.value ? {} : Bs(t)
    });
    const i = e.push(r.value, n);
    return le(r, l => {
        i.patch(l)
    }), nt() && (Di(() => {
        i.dispose()
    }), Oa(() => {
        s.value = !0
    }), Ea(() => {
        s.value = !1
    })), i
}
const Qc = Zt ? window : void 0;

function kn(e) {
    var t;
    const n = Y(e);
    return (t = n ? .$el) != null ? t : n
}

function Es(...e) {
    const t = [],
        n = () => {
            t.forEach(l => l()), t.length = 0
        },
        s = (l, a, u, c) => (l.addEventListener(a, u, c), () => l.removeEventListener(a, u, c)),
        r = ue(() => {
            const l = Lt(Y(e[0])).filter(a => a != null);
            return l.every(a => typeof a != "string") ? l : void 0
        }),
        i = Ec(() => {
            var l, a;
            return [(a = (l = r.value) == null ? void 0 : l.map(u => kn(u))) != null ? a : [Qc].filter(u => u != null), Lt(Y(r.value ? e[1] : e[0])), Lt(Ze(r.value ? e[2] : e[1])), Y(r.value ? e[3] : e[2])]
        }, ([l, a, u, c]) => {
            if (n(), !l ? .length || !a ? .length || !u ? .length) return;
            const f = _c(c) ? { ...c
            } : c;
            t.push(...l.flatMap(h => a.flatMap(d => u.map(p => s(h, d, p, f)))))
        }, {
            flush: "post"
        }),
        o = () => {
            i(), n()
        };
    return $t(n), o
}
let Sl = !1;

function El(e, t, n = {}) {
    const {
        window: s = Qc,
        ignore: r = [],
        capture: i = !0,
        detectIframe: o = !1,
        controls: l = !1
    } = n;
    if (!s) return l ? {
        stop: _e,
        cancel: _e,
        trigger: _e
    } : _e;
    if (js && !Sl) {
        Sl = !0;
        const _ = {
            passive: !0
        };
        Array.from(s.document.body.children).forEach(v => v.addEventListener("click", _e, _)), s.document.documentElement.addEventListener("click", _e, _)
    }
    let a = !0;
    const u = _ => Y(r).some(v => {
        if (typeof v == "string") return Array.from(s.document.querySelectorAll(v)).some(w => w === _.target || _.composedPath().includes(w)); {
            const w = kn(v);
            return w && (_.target === w || _.composedPath().includes(w))
        }
    });

    function c(_) {
        const v = Y(_);
        return v && v.$.subTree.shapeFlag === 16
    }

    function f(_, v) {
        const w = Y(_),
            y = w.$.subTree && w.$.subTree.children;
        return y == null || !Array.isArray(y) ? !1 : y.some(C => C.el === v.target || v.composedPath().includes(C.el))
    }
    const h = _ => {
        const v = kn(e);
        if (_.target != null && !(!(v instanceof Element) && c(e) && f(e, _)) && !(!v || v === _.target || _.composedPath().includes(v))) {
            if ("detail" in _ && _.detail === 0 && (a = !u(_)), !a) {
                a = !0;
                return
            }
            t(_)
        }
    };
    let d = !1;
    const p = [Es(s, "click", _ => {
            d || (d = !0, setTimeout(() => {
                d = !1
            }, 0), h(_))
        }, {
            passive: !0,
            capture: i
        }), Es(s, "pointerdown", _ => {
            const v = kn(e);
            a = !u(_) && !!(v && !_.composedPath().includes(v))
        }, {
            passive: !0
        }), o && Es(s, "blur", _ => {
            setTimeout(() => {
                var v;
                const w = kn(e);
                ((v = s.document.activeElement) == null ? void 0 : v.tagName) === "IFRAME" && !w ? .contains(s.document.activeElement) && t(_)
            }, 0)
        }, {
            passive: !0
        })].filter(Boolean),
        g = () => p.forEach(_ => _());
    return l ? {
        stop: g,
        cancel: () => {
            a = !1
        },
        trigger: _ => {
            a = !0, h(_), a = !1
        }
    } : g
}
const Fr = new WeakMap,
    Hm = {
        mounted(e, t) {
            const n = !t.modifiers.bubble;
            let s;
            if (typeof t.value == "function") s = El(e, t.value, {
                capture: n
            });
            else {
                const [r, i] = t.value;
                s = El(e, r, Object.assign({
                    capture: n
                }, i))
            }
            Fr.set(e, s)
        },
        unmounted(e) {
            const t = Fr.get(e);
            t && typeof t == "function" ? t() : t ? .stop(), Fr.delete(e)
        }
    };

function Ir(e) {
    return typeof Window < "u" && e instanceof Window ? e.document.documentElement : typeof Document < "u" && e instanceof Document ? e.documentElement : e
}

function Wc(e) {
    const t = window.getComputedStyle(e);
    if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight) return !0; {
        const n = e.parentNode;
        return !n || n.tagName === "BODY" ? !1 : Wc(n)
    }
}

function wg(e) {
    const t = e || window.event,
        n = t.target;
    return Wc(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.preventDefault(), !1)
}
const Dr = new WeakMap;

function Cg(e, t = !1) {
    const n = te(t);
    let s = null,
        r = "";
    le(wc(e), l => {
        const a = Ir(Y(l));
        if (a) {
            const u = a;
            if (Dr.get(u) || Dr.set(u, u.style.overflow), u.style.overflow !== "hidden" && (r = u.style.overflow), u.style.overflow === "hidden") return n.value = !0;
            if (n.value) return u.style.overflow = "hidden"
        }
    }, {
        immediate: !0
    });
    const i = () => {
            const l = Ir(Y(e));
            !l || n.value || (js && (s = Es(l, "touchmove", a => {
                wg(a)
            }, {
                passive: !1
            })), l.style.overflow = "hidden", n.value = !0)
        },
        o = () => {
            const l = Ir(Y(e));
            !l || !n.value || (js && s ? .(), l.style.overflow = r, Dr.delete(l), n.value = !1)
        };
    return $t(o), ue({
        get() {
            return n.value
        },
        set(l) {
            l ? i() : o()
        }
    })
}

function Sg() {
    let e = !1;
    const t = te(!1);
    return (n, s) => {
        if (t.value = s.value, e) return;
        e = !0;
        const r = Cg(n, s.value);
        le(t, i => r.value = i)
    }
}
Sg();
export {
    Eg as $, tt as A, pm as B, Mg as C, Xg as D, em as E, Le as F, le as G, Di as H, Mm as I, Ig as J, lr as K, re as L, ff as M, Li as N, dm as O, lm as P, om as Q, At as R, qg as S, kg as T, Am as U, _m as V, bm as W, Em as X, zg as Y, tm as Z, Im as _, Zr as a, hm as a$, Id as a0, kh as a1, Ih as a2, Lg as a3, Vi as a4, Qa as a5, Pp as a6, hf as a7, Zn as a8, Dm as a9, vm as aA, md as aB, me as aC, nt as aD, Hm as aE, Hg as aF, Sm as aG, vp as aH, Rm as aI, cm as aJ, Kh as aK, sm as aL, He as aM, df as aN, Pc as aO, Tm as aP, al as aQ, rm as aR, im as aS, Ag as aT, Xs as aU, Om as aV, mm as aW, jf as aX, Oi as aY, oa as aZ, ed as a_, Cm as aa, Zf as ab, um as ac, km as ad, Lm as ae, Wg as af, te as ag, ym as ah, Fh as ai, Zg as aj, Bg as ak, xm as al, Vo as am, he as an, dd as ao, wc as ap, am as aq, Xn as ar, ca as as, gm as at, wm as au, yd as av, Rd as aw, Ng as ax, Fm as ay, Pm as az, Yg as b, Ug as b0, Rg as b1, Xf as b2, Jg as b3, nm as b4, Pa as b5, ue as c, Fi as d, Dg as e, ec as f, Ce as g, Fg as h, Gg as i, Ze as j, tc as k, Cu as l, Vg as m, Qg as n, Ds as o, $g as p, qs as q, Ae as r, Ks as s, er as t, Kg as u, jg as v, Zu as w, fm as x, xc as y, nr as z
};
//# sourceMappingURL=https://storefront.ecwid.dev:16088/static/vendor-fein6u71.js.map