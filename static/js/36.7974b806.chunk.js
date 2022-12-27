/*! For license information please see 36.7974b806.chunk.js.LICENSE.txt */
(this["webpackJsonp@uniswap/interface"] =
  this["webpackJsonp@uniswap/interface"] || []).push([
  [36],
  {
    1e3: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var r = !1,
        i = {
          Promise: void 0,
          set useDeprecatedSynchronousErrorHandling(t) {
            t && new Error().stack;
            r = t;
          },
          get useDeprecatedSynchronousErrorHandling() {
            return r;
          },
        };
    },
    1001: function (t, e, n) {
      "use strict";
      function r(t) {
        return "function" === typeof t;
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    1002: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      var r = (function () {
        function t() {
          return (
            Error.call(this),
            (this.message = "object unsubscribed"),
            (this.name = "ObjectUnsubscribedError"),
            this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
    },
    1003: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      var r = n(978),
        i = n(1004),
        o = n(1058);
      function s() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = t[t.length - 1];
        return Object(r.a)(n) ? (t.pop(), Object(o.a)(t, n)) : Object(i.a)(t);
      }
    },
    1004: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      var r = n(969),
        i = n(1114),
        o = n(1058);
      function s(t, e) {
        return e ? Object(o.a)(t, e) : new r.a(Object(i.a)(t));
      }
    },
    1005: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var r = n(967),
        i = n(1059),
        o = (function (t) {
          function e(n, r) {
            void 0 === r && (r = i.a.now);
            var o =
              t.call(this, n, function () {
                return e.delegate && e.delegate !== o ? e.delegate.now() : r();
              }) || this;
            return (o.actions = []), (o.active = !1), (o.scheduled = void 0), o;
          }
          return (
            r.a(e, t),
            (e.prototype.schedule = function (n, r, i) {
              return (
                void 0 === r && (r = 0),
                e.delegate && e.delegate !== this
                  ? e.delegate.schedule(n, r, i)
                  : t.prototype.schedule.call(this, n, r, i)
              );
            }),
            (e.prototype.flush = function (t) {
              var e = this.actions;
              if (this.active) e.push(t);
              else {
                var n;
                this.active = !0;
                do {
                  if ((n = t.execute(t.state, t.delay))) break;
                } while ((t = e.shift()));
                if (((this.active = !1), n)) {
                  for (; (t = e.shift()); ) t.unsubscribe();
                  throw n;
                }
              }
            }),
            e
          );
        })(i.a);
    },
    1006: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      var r = n(967),
        i = n(972),
        o = n(971),
        s = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.value = null), (e.hasNext = !1), (e.hasCompleted = !1), e;
          }
          return (
            r.a(e, t),
            (e.prototype._subscribe = function (e) {
              return this.hasError
                ? (e.error(this.thrownError), o.a.EMPTY)
                : this.hasCompleted && this.hasNext
                ? (e.next(this.value), e.complete(), o.a.EMPTY)
                : t.prototype._subscribe.call(this, e);
            }),
            (e.prototype.next = function (t) {
              this.hasCompleted || ((this.value = t), (this.hasNext = !0));
            }),
            (e.prototype.error = function (e) {
              this.hasCompleted || t.prototype.error.call(this, e);
            }),
            (e.prototype.complete = function () {
              (this.hasCompleted = !0),
                this.hasNext && t.prototype.next.call(this, this.value),
                t.prototype.complete.call(this);
            }),
            e
          );
        })(i.a);
    },
    1007: function (t, e, n) {
      "use strict";
      function r() {
        return "function" === typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : "@@iterator";
      }
      n.d(e, "a", function () {
        return i;
      });
      var i = r();
    },
    1008: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var r = n(1003),
        i = n(1061);
      function o() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return Object(i.a)()(r.a.apply(void 0, t));
      }
    },
    1009: function (t, e) {
      function n(t) {
        return t.sort(function (t, e) {
          return "latest" === t || "earliest" === e
            ? 1
            : "latest" === e || "earliest" === t
            ? -1
            : r(t) - r(e);
        });
      }
      function r(t) {
        return void 0 === t || null === t ? t : Number.parseInt(t, 16);
      }
      function i(t) {
        if (void 0 === t || null === t) return t;
        var e = t.toString(16);
        return e.length % 2 && (e = "0" + e), "0x" + e;
      }
      function o() {
        return Math.floor(16 * Math.random()).toString(16);
      }
      t.exports = {
        minBlockRef: function () {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          var i = n(e);
          return i[0];
        },
        maxBlockRef: function () {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          var i = n(e);
          return i[i.length - 1];
        },
        sortBlockRefs: n,
        bnToHex: function (t) {
          return "0x" + t.toString(16);
        },
        blockRefIsNumber: function (t) {
          return t && !["earliest", "latest", "pending"].includes(t);
        },
        hexToInt: r,
        incrementHexInt: function (t) {
          return void 0 === t || null === t ? t : i(r(t) + 1);
        },
        intToHex: i,
        unsafeRandomBytes: function (t) {
          for (var e = "0x", n = 0; n < t; n++) (e += o()), (e += o());
          return e;
        },
      };
    },
    1010: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "audit", function () {
          return o;
        }),
        n.d(e, "auditTime", function () {
          return l;
        }),
        n.d(e, "buffer", function () {
          return h;
        }),
        n.d(e, "bufferCount", function () {
          return v;
        }),
        n.d(e, "bufferTime", function () {
          return w;
        }),
        n.d(e, "bufferToggle", function () {
          return O;
        }),
        n.d(e, "bufferWhen", function () {
          return N;
        }),
        n.d(e, "catchError", function () {
          return P;
        }),
        n.d(e, "combineAll", function () {
          return F;
        }),
        n.d(e, "combineLatest", function () {
          return z;
        }),
        n.d(e, "concat", function () {
          return V;
        }),
        n.d(e, "concatAll", function () {
          return Y.a;
        }),
        n.d(e, "concatMap", function () {
          return J;
        }),
        n.d(e, "concatMapTo", function () {
          return K;
        }),
        n.d(e, "count", function () {
          return X;
        }),
        n.d(e, "debounce", function () {
          return $;
        }),
        n.d(e, "debounceTime", function () {
          return nt;
        }),
        n.d(e, "defaultIfEmpty", function () {
          return st;
        }),
        n.d(e, "delay", function () {
          return ht;
        }),
        n.d(e, "delayWhen", function () {
          return bt;
        }),
        n.d(e, "dematerialize", function () {
          return _t;
        }),
        n.d(e, "distinct", function () {
          return Et;
        }),
        n.d(e, "distinctUntilChanged", function () {
          return Ct;
        }),
        n.d(e, "distinctUntilKeyChanged", function () {
          return Ot;
        }),
        n.d(e, "elementAt", function () {
          return Wt;
        }),
        n.d(e, "endWith", function () {
          return qt;
        }),
        n.d(e, "every", function () {
          return Vt;
        }),
        n.d(e, "exhaust", function () {
          return Jt;
        }),
        n.d(e, "exhaustMap", function () {
          return Zt;
        }),
        n.d(e, "expand", function () {
          return ee;
        }),
        n.d(e, "filter", function () {
          return Tt.a;
        }),
        n.d(e, "finalize", function () {
          return ie;
        }),
        n.d(e, "find", function () {
          return ae;
        }),
        n.d(e, "findIndex", function () {
          return le;
        }),
        n.d(e, "first", function () {
          return fe;
        }),
        n.d(e, "groupBy", function () {
          return de.b;
        }),
        n.d(e, "ignoreElements", function () {
          return pe;
        }),
        n.d(e, "isEmpty", function () {
          return ye;
        }),
        n.d(e, "last", function () {
          return xe;
        }),
        n.d(e, "map", function () {
          return Qt.a;
        }),
        n.d(e, "mapTo", function () {
          return Ee;
        }),
        n.d(e, "materialize", function () {
          return Ce;
        }),
        n.d(e, "max", function () {
          return Le;
        }),
        n.d(e, "merge", function () {
          return De;
        }),
        n.d(e, "mergeAll", function () {
          return Be.a;
        }),
        n.d(e, "mergeMap", function () {
          return G.b;
        }),
        n.d(e, "flatMap", function () {
          return G.a;
        }),
        n.d(e, "mergeMapTo", function () {
          return He;
        }),
        n.d(e, "mergeScan", function () {
          return Fe;
        }),
        n.d(e, "min", function () {
          return ze;
        }),
        n.d(e, "multicast", function () {
          return Ve;
        }),
        n.d(e, "observeOn", function () {
          return Ge.b;
        }),
        n.d(e, "onErrorResumeNext", function () {
          return Je;
        }),
        n.d(e, "pairwise", function () {
          return Qe;
        }),
        n.d(e, "partition", function () {
          return en;
        }),
        n.d(e, "pluck", function () {
          return nn;
        }),
        n.d(e, "publish", function () {
          return sn;
        }),
        n.d(e, "publishBehavior", function () {
          return un;
        }),
        n.d(e, "publishLast", function () {
          return ln;
        }),
        n.d(e, "publishReplay", function () {
          return fn;
        }),
        n.d(e, "race", function () {
          return pn;
        }),
        n.d(e, "reduce", function () {
          return je;
        }),
        n.d(e, "repeat", function () {
          return vn;
        }),
        n.d(e, "repeatWhen", function () {
          return gn;
        }),
        n.d(e, "retry", function () {
          return _n;
        }),
        n.d(e, "retryWhen", function () {
          return En;
        }),
        n.d(e, "refCount", function () {
          return Cn.a;
        }),
        n.d(e, "sample", function () {
          return An;
        }),
        n.d(e, "sampleTime", function () {
          return In;
        }),
        n.d(e, "scan", function () {
          return Oe;
        }),
        n.d(e, "sequenceEqual", function () {
          return Ln;
        }),
        n.d(e, "share", function () {
          return Fn;
        }),
        n.d(e, "shareReplay", function () {
          return Un;
        }),
        n.d(e, "single", function () {
          return Wn;
        }),
        n.d(e, "skip", function () {
          return Vn;
        }),
        n.d(e, "skipLast", function () {
          return Jn;
        }),
        n.d(e, "skipUntil", function () {
          return Qn;
        }),
        n.d(e, "skipWhile", function () {
          return tr;
        }),
        n.d(e, "startWith", function () {
          return rr;
        }),
        n.d(e, "subscribeOn", function () {
          return ar;
        }),
        n.d(e, "switchAll", function () {
          return fr;
        }),
        n.d(e, "switchMap", function () {
          return cr;
        }),
        n.d(e, "switchMapTo", function () {
          return dr;
        }),
        n.d(e, "take", function () {
          return Ht;
        }),
        n.d(e, "takeLast", function () {
          return we;
        }),
        n.d(e, "takeUntil", function () {
          return pr;
        }),
        n.d(e, "takeWhile", function () {
          return yr;
        }),
        n.d(e, "tap", function () {
          return kr;
        }),
        n.d(e, "throttle", function () {
          return Mr;
        }),
        n.d(e, "throttleTime", function () {
          return Rr;
        }),
        n.d(e, "throwIfEmpty", function () {
          return jt;
        }),
        n.d(e, "timeInterval", function () {
          return jr;
        }),
        n.d(e, "timeout", function () {
          return Ur;
        }),
        n.d(e, "timeoutWith", function () {
          return Dr;
        }),
        n.d(e, "timestamp", function () {
          return Wr;
        }),
        n.d(e, "toArray", function () {
          return Vr;
        }),
        n.d(e, "window", function () {
          return Yr;
        }),
        n.d(e, "windowCount", function () {
          return Kr;
        }),
        n.d(e, "windowTime", function () {
          return Zr;
        }),
        n.d(e, "windowToggle", function () {
          return oi;
        }),
        n.d(e, "windowWhen", function () {
          return ui;
        }),
        n.d(e, "withLatestFrom", function () {
          return hi;
        }),
        n.d(e, "zip", function () {
          return vi;
        }),
        n.d(e, "zipAll", function () {
          return bi;
        });
      var r = n(967),
        i = n(970);
      function o(t) {
        return function (e) {
          return e.lift(new s(t));
        };
      }
      var s = (function () {
          function t(t) {
            this.durationSelector = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new a(t, this.durationSelector));
            }),
            t
          );
        })(),
        a = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (r.durationSelector = n), (r.hasValue = !1), r;
          }
          return (
            r.a(e, t),
            (e.prototype._next = function (t) {
              if (((this.value = t), (this.hasValue = !0), !this.throttled)) {
                var e = void 0;
                try {
                  e = (0, this.durationSelector)(t);
                } catch (r) {
                  return this.destination.error(r);
                }
                var n = Object(i.c)(e, new i.a(this));
                !n || n.closed
                  ? this.clearThrottle()
                  : this.add((this.throttled = n));
              }
            }),
            (e.prototype.clearThrottle = function () {
              var t = this,
                e = t.value,
                n = t.hasValue,
                r = t.throttled;
              r && (this.remove(r), (this.throttled = void 0), r.unsubscribe()),
                n &&
                  ((this.value = void 0),
                  (this.hasValue = !1),
                  this.destination.next(e));
            }),
            (e.prototype.notifyNext = function () {
              this.clearThrottle();
            }),
            (e.prototype.notifyComplete = function () {
              this.clearThrottle();
            }),
            e
          );
        })(i.b),
        u = n(973),
        c = n(1064);
      function l(t, e) {
        return (
          void 0 === e && (e = u.a),
          o(function () {
            return Object(c.a)(t, e);
          })
        );
      }
      function h(t) {
        return function (e) {
          return e.lift(new f(t));
        };
      }
      var f = (function () {
          function t(t) {
            this.closingNotifier = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new d(t, this.closingNotifier));
            }),
            t
          );
        })(),
        d = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (r.buffer = []), r.add(Object(i.c)(n, new i.a(r))), r;
          }
          return (
            r.a(e, t),
            (e.prototype._next = function (t) {
              this.buffer.push(t);
            }),
            (e.prototype.notifyNext = function () {
              var t = this.buffer;
              (this.buffer = []), this.destination.next(t);
            }),
            e
          );
        })(i.b),
        p = n(968);
      function v(t, e) {
        return (
          void 0 === e && (e = null),
          function (n) {
            return n.lift(new b(t, e));
          }
        );
      }
      var b = (function () {
          function t(t, e) {
            (this.bufferSize = t),
              (this.startBufferEvery = e),
              (this.subscriberClass = e && t !== e ? g : y);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new this.subscriberClass(
                  t,
                  this.bufferSize,
                  this.startBufferEvery
                )
              );
            }),
            t
          );
        })(),
        y = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (r.bufferSize = n), (r.buffer = []), r;
          }
          return (
            r.a(e, t),
            (e.prototype._next = function (t) {
              var e = this.buffer;
              e.push(t),
                e.length == this.bufferSize &&
                  (this.destination.next(e), (this.buffer = []));
            }),
            (e.prototype._complete = function () {
              var e = this.buffer;
              e.length > 0 && this.destination.next(e),
                t.prototype._complete.call(this);
            }),
            e
          );
        })(p.a),
        g = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, e) || this;
            return (
              (i.bufferSize = n),
              (i.startBufferEvery = r),
              (i.buffers = []),
              (i.count = 0),
              i
            );
          }
          return (
            r.a(e, t),
            (e.prototype._next = function (t) {
              var e = this,
                n = e.bufferSize,
                r = e.startBufferEvery,
                i = e.buffers,
                o = e.count;
              this.count++, o % r === 0 && i.push([]);
              for (var s = i.length; s--; ) {
                var a = i[s];
                a.push(t),
                  a.length === n && (i.splice(s, 1), this.destination.next(a));
              }
            }),
            (e.prototype._complete = function () {
              for (var e = this.buffers, n = this.destination; e.length > 0; ) {
                var r = e.shift();
                r.length > 0 && n.next(r);
              }
              t.prototype._complete.call(this);
            }),
            e
          );
        })(p.a),
        m = n(978);
      function w(t) {
        var e = arguments.length,
          n = u.a;
        Object(m.a)(arguments[arguments.length - 1]) &&
          ((n = arguments[arguments.length - 1]), e--);
        var r = null;
        e >= 2 && (r = arguments[1]);
        var i = Number.POSITIVE_INFINITY;
        return (
          e >= 3 && (i = arguments[2]),
          function (e) {
            return e.lift(new _(t, r, i, n));
          }
        );
      }
      var _ = (function () {
          function t(t, e, n, r) {
            (this.bufferTimeSpan = t),
              (this.bufferCreationInterval = e),
              (this.maxBufferSize = n),
              (this.scheduler = r);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new x(
                  t,
                  this.bufferTimeSpan,
                  this.bufferCreationInterval,
                  this.maxBufferSize,
                  this.scheduler
                )
              );
            }),
            t
          );
        })(),
        k = (function () {
          return function () {
            this.buffer = [];
          };
        })(),
        x = (function (t) {
          function e(e, n, r, i, o) {
            var s = t.call(this, e) || this;
            (s.bufferTimeSpan = n),
              (s.bufferCreationInterval = r),
              (s.maxBufferSize = i),
              (s.scheduler = o),
              (s.contexts = []);
            var a = s.openContext();
            if (((s.timespanOnly = null == r || r < 0), s.timespanOnly)) {
              var u = { subscriber: s, context: a, bufferTimeSpan: n };
              s.add((a.closeAction = o.schedule(E, n, u)));
            } else {
              var c = { subscriber: s, context: a },
                l = {
                  bufferTimeSpan: n,
                  bufferCreationInterval: r,
                  subscriber: s,
                  scheduler: o,
                };
              s.add((a.closeAction = o.schedule(M, n, c))),
                s.add(o.schedule(S, r, l));
            }
            return s;
          }
          return (
            r.a(e, t),
            (e.prototype._next = function (t) {
              for (var e, n = this.contexts, r = n.length, i = 0; i < r; i++) {
                var o = n[i],
                  s = o.buffer;
                s.push(t), s.length == this.maxBufferSize && (e = o);
              }
              e && this.onBufferFull(e);
            }),
            (e.prototype._error = function (e) {
              (this.contexts.length = 0), t.prototype._error.call(this, e);
            }),
            (e.prototype._complete = function () {
              for (
                var e = this.contexts, n = this.destination;
                e.length > 0;

              ) {
                var r = e.shift();
                n.next(r.buffer);
              }
              t.prototype._complete.call(this);
            }),
            (e.prototype._unsubscribe = function () {
              this.contexts = null;
            }),
            (e.prototype.onBufferFull = function (t) {
              this.closeContext(t);
              var e = t.closeAction;
              if (
                (e.unsubscribe(),
                this.remove(e),
                !this.closed && this.timespanOnly)
              ) {
                t = this.openContext();
                var n = this.bufferTimeSpan,
                  r = { subscriber: this, context: t, bufferTimeSpan: n };
                this.add((t.closeAction = this.scheduler.schedule(E, n, r)));
              }
            }),
            (e.prototype.openContext = function () {
              var t = new k();
              return this.contexts.push(t), t;
            }),
            (e.prototype.closeContext = function (t) {
              this.destination.next(t.buffer);
              var e = this.contexts;
              (e ? e.indexOf(t) : -1) >= 0 && e.splice(e.indexOf(t), 1);
            }),
            e
          );
        })(p.a);
      function E(t) {
        var e = t.subscriber,
          n = t.context;
        n && e.closeContext(n),
          e.closed ||
            ((t.context = e.openContext()),
            (t.context.closeAction = this.schedule(t, t.bufferTimeSpan)));
      }
      function S(t) {
        var e = t.bufferCreationInterval,
          n = t.bufferTimeSpan,
          r = t.subscriber,
          i = t.scheduler,
          o = r.openContext();
        r.closed ||
          (r.add(
            (o.closeAction = i.schedule(M, n, { subscriber: r, context: o }))
          ),
          this.schedule(t, e));
      }
      function M(t) {
        var e = t.subscriber,
          n = t.context;
        e.closeContext(n);
      }
      var C = n(971),
        A = n(988),
        R = n(984);
      function O(t, e) {
        return function (n) {
          return n.lift(new I(t, e));
        };
      }
      var I = (function () {
          function t(t, e) {
            (this.openings = t), (this.closingSelector = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new T(t, this.openings, this.closingSelector));
            }),
            t
          );
        })(),
        T = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, e) || this;
            return (
              (i.closingSelector = r),
              (i.contexts = []),
              i.add(Object(A.a)(i, n)),
              i
            );
          }
          return (
            r.a(e, t),
            (e.prototype._next = function (t) {
              for (var e = this.contexts, n = e.length, r = 0; r < n; r++)
                e[r].buffer.push(t);
            }),
            (e.prototype._error = function (e) {
              for (var n = this.contexts; n.length > 0; ) {
                var r = n.shift();
                r.subscription.unsubscribe(),
                  (r.buffer = null),
                  (r.subscription = null);
              }
              (this.contexts = null), t.prototype._error.call(this, e);
            }),
            (e.prototype._complete = function () {
              for (var e = this.contexts; e.length > 0; ) {
                var n = e.shift();
                this.destination.next(n.buffer),
                  n.subscription.unsubscribe(),
                  (n.buffer = null),
                  (n.subscription = null);
              }
              (this.contexts = null), t.prototype._complete.call(this);
            }),
            (e.prototype.notifyNext = function (t, e) {
              t ? this.closeBuffer(t) : this.openBuffer(e);
            }),
            (e.prototype.notifyComplete = function (t) {
              this.closeBuffer(t.context);
            }),
            (e.prototype.openBuffer = function (t) {
              try {
                var e = this.closingSelector.call(this, t);
                e && this.trySubscribe(e);
              } catch (n) {
                this._error(n);
              }
            }),
            (e.prototype.closeBuffer = function (t) {
              var e = this.contexts;
              if (e && t) {
                var n = t.buffer,
                  r = t.subscription;
                this.destination.next(n),
                  e.splice(e.indexOf(t), 1),
                  this.remove(r),
                  r.unsubscribe();
              }
            }),
            (e.prototype.trySubscribe = function (t) {
              var e = this.contexts,
                n = new C.a(),
                r = { buffer: [], subscription: n };
              e.push(r);
              var i = Object(A.a)(this, t, r);
              !i || i.closed
                ? this.closeBuffer(r)
                : ((i.context = r), this.add(i), n.add(i));
            }),
            e
          );
        })(R.a);
      function N(t) {
        return function (e) {
          return e.lift(new j(t));
        };
      }
      var j = (function () {
          function t(t) {
            this.closingSelector = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new L(t, this.closingSelector));
            }),
            t
          );
        })(),
        L = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (
              (r.closingSelector = n), (r.subscribing = !1), r.openBuffer(), r
            );
          }
          return (
            r.a(e, t),
            (e.prototype._next = function (t) {
              this.buffer.push(t);
            }),
            (e.prototype._complete = function () {
              var e = this.buffer;
              e && this.destination.next(e), t.prototype._complete.call(this);
            }),
            (e.prototype._unsubscribe = function () {
              (this.buffer = void 0), (this.subscribing = !1);
            }),
            (e.prototype.notifyNext = function () {
              this.openBuffer();
            }),
            (e.prototype.notifyComplete = function () {
              this.subscribing ? this.complete() : this.openBuffer();
            }),
            (e.prototype.openBuffer = function () {
              var t = this.closingSubscription;
              t && (this.remove(t), t.unsubscribe());
              var e,
                n = this.buffer;
              this.buffer && this.destination.next(n), (this.buffer = []);
              try {
                e = (0, this.closingSelector)();
              } catch (r) {
                return this.error(r);
              }
              (t = new C.a()),
                (this.closingSubscription = t),
                this.add(t),
                (this.subscribing = !0),
                t.add(Object(i.c)(e, new i.a(this))),
                (this.subscribing = !1);
            }),
            e
          );
        })(i.b);
      function P(t) {
        return function (e) {
          var n = new D(t),
            r = e.lift(n);
          return (n.caught = r);
        };
      }
      var D = (function () {
          function t(t) {
            this.selector = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new B(t, this.selector, this.caught));
            }),
            t
          );
        })(),
        B = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, e) || this;
            return (i.selector = n), (i.caught = r), i;
          }
          return (
            r.a(e, t),
            (e.prototype.error = function (e) {
              if (!this.isStopped) {
                var n = void 0;
                try {
                  n = this.selector(e, this.caught);
                } catch (s) {
                  return void t.prototype.error.call(this, s);
                }
                this._unsubscribeAndRecycle();
                var r = new i.a(this);
                this.add(r);
                var o = Object(i.c)(n, r);
                o !== r && this.add(o);
              }
            }),
            e
          );
        })(i.b),
        H = n(1023);
      function F(t) {
        return function (e) {
          return e.lift(new H.a(t));
        };
      }
      var U = n(974),
        W = n(977);
      function z() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = null;
        return (
          "function" === typeof t[t.length - 1] && (n = t.pop()),
          1 === t.length && Object(U.a)(t[0]) && (t = t[0].slice()),
          function (e) {
            return e.lift.call(Object(W.a)([e].concat(t)), new H.a(n));
          }
        );
      }
      var q = n(1008);
      function V() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return function (e) {
          return e.lift.call(q.a.apply(void 0, [e].concat(t)));
        };
      }
      var Y = n(1061),
        G = n(994);
      function J(t, e) {
        return Object(G.b)(t, e, 1);
      }
      function K(t, e) {
        return J(function () {
          return t;
        }, e);
      }
      function X(t) {
        return function (e) {
          return e.lift(new Q(t, e));
        };
      }
      var Q = (function () {
          function t(t, e) {
            (this.predicate = t), (this.source = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Z(t, this.predicate, this.source));
            }),
            t
          );
        })(),
        Z = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, e) || this;
            return (
              (i.predicate = n), (i.source = r), (i.count = 0), (i.index = 0), i
            );
          }
          return (
            r.a(e, t),
            (e.prototype._next = function (t) {
              this.predicate ? this._tryPredicate(t) : this.count++;
            }),
            (e.prototype._tryPredicate = function (t) {
              var e;
              try {
                e = this.predicate(t, this.index++, this.source);
              } catch (n) {
                return void this.destination.error(n);
              }
              e && this.count++;
            }),
            (e.prototype._complete = function () {
              this.destination.next(this.count), this.destination.complete();
            }),
            e
          );
        })(p.a);
      function $(t) {
        return function (e) {
          return e.lift(new tt(t));
        };
      }
      var tt = (function () {
          function t(t) {
            this.durationSelector = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new et(t, this.durationSelector));
            }),
            t
          );
        })(),
        et = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (r.durationSelector = n), (r.hasValue = !1), r;
          }
          return (
            r.a(e, t),
            (e.prototype._next = function (t) {
              try {
                var e = this.durationSelector.call(this, t);
                e && this._tryNext(t, e);
              } catch (n) {
                this.destination.error(n);
              }
            }),
            (e.prototype._complete = function () {
              this.emitValue(), this.destination.complete();
            }),
            (e.prototype._tryNext = function (t, e) {
              var n = this.durationSubscription;
              (this.value = t),
                (this.hasValue = !0),
                n && (n.unsubscribe(), this.remove(n)),
                (n = Object(i.c)(e, new i.a(this))) &&
                  !n.closed &&
                  this.add((this.durationSubscription = n));
            }),
            (e.prototype.notifyNext = function () {
              this.emitValue();
            }),
            (e.prototype.notifyComplete = function () {
              this.emitValue();
            }),
            (e.prototype.emitValue = function () {
              if (this.hasValue) {
                var e = this.value,
                  n = this.durationSubscription;
                n &&
                  ((this.durationSubscription = void 0),
                  n.unsubscribe(),
                  this.remove(n)),
                  (this.value = void 0),
                  (this.hasValue = !1),
                  t.prototype._next.call(this, e);
              }
            }),
            e
          );
        })(i.b);
      function nt(t, e) {
        return (
          void 0 === e && (e = u.a),
          function (n) {
            return n.lift(new rt(t, e));
          }
        );
      }
      var rt = (function () {
          function t(t, e) {
            (this.dueTime = t), (this.scheduler = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new it(t, this.dueTime, this.scheduler));
            }),
            t
          );
        })(),
        it = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, e) || this;
            return (
              (i.dueTime = n),
              (i.scheduler = r),
              (i.debouncedSubscription = null),
              (i.lastValue = null),
              (i.hasValue = !1),
              i
            );
          }
          return (
            r.a(e, t),
            (e.prototype._next = function (t) {
              this.clearDebounce(),
                (this.lastValue = t),
                (this.hasValue = !0),
                this.add(
                  (this.debouncedSubscription = this.scheduler.schedule(
                    ot,
                    this.dueTime,
                    this
                  ))
                );
            }),
            (e.prototype._complete = function () {
              this.debouncedNext(), this.destination.complete();
            }),
            (e.prototype.debouncedNext = function () {
              if ((this.clearDebounce(), this.hasValue)) {
                var t = this.lastValue;
                (this.lastValue = null),
                  (this.hasValue = !1),
                  this.destination.next(t);
              }
            }),
            (e.prototype.clearDebounce = function () {
              var t = this.debouncedSubscription;
              null !== t &&
                (this.remove(t),
                t.unsubscribe(),
                (this.debouncedSubscription = null));
            }),
            e
          );
        })(p.a);
      function ot(t) {
        t.debouncedNext();
      }
      function st(t) {
        return (
          void 0 === t && (t = null),
          function (e) {
            return e.lift(new at(t));
          }
        );
      }
      var at = (function () {
          function t(t) {
            this.defaultValue = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new ut(t, this.defaultValue));
            }),
            t
          );
        })(),
        ut = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (r.defaultValue = n), (r.isEmpty = !0), r;
          }
          return (
            r.a(e, t),
            (e.prototype._next = function (t) {
              (this.isEmpty = !1), this.destination.next(t);
            }),
            (e.prototype._complete = function () {
              this.isEmpty && this.destination.next(this.defaultValue),
                this.destination.complete();
            }),
            e
          );
        })(p.a);
      function ct(t) {
        return t instanceof Date && !isNaN(+t);
      }
      var lt = n(991);
      function ht(t, e) {
        void 0 === e && (e = u.a);
        var n = ct(t) ? +t - e.now() : Math.abs(t);
        return function (t) {
          return t.lift(new ft(n, e));
        };
      }
      var ft = (function () {
          function t(t, e) {
            (this.delay = t), (this.scheduler = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new dt(t, this.delay, this.scheduler));
            }),
            t
          );
        })(),
        dt = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, e) || this;
            return (
              (i.delay = n),
              (i.scheduler = r),
              (i.queue = []),
              (i.active = !1),
              (i.errored = !1),
              i
            );
          }
          return (
            r.a(e, t),
            (e.dispatch = function (t) {
              for (
                var e = t.source,
                  n = e.queue,
                  r = t.scheduler,
                  i = t.destination;
                n.length > 0 && n[0].time - r.now() <= 0;

              )
                n.shift().notification.observe(i);
              if (n.length > 0) {
                var o = Math.max(0, n[0].time - r.now());
                this.schedule(t, o);
              } else this.unsubscribe(), (e.active = !1);
            }),
            (e.prototype._schedule = function (t) {
              (this.active = !0),
                this.destination.add(
                  t.schedule(e.dispatch, this.delay, {
                    source: this,
                    destination: this.destination,
                    scheduler: t,
                  })
                );
            }),
            (e.prototype.scheduleNotification = function (t) {
              if (!0 !== this.errored) {
                var e = this.scheduler,
                  n = new pt(e.now() + this.delay, t);
                this.queue.push(n), !1 === this.active && this._schedule(e);
              }
            }),
            (e.prototype._next = function (t) {
              this.scheduleNotification(lt.a.createNext(t));
            }),
            (e.prototype._error = function (t) {
              (this.errored = !0),
                (this.queue = []),
                this.destination.error(t),
                this.unsubscribe();
            }),
            (e.prototype._complete = function () {
              this.scheduleNotification(lt.a.createComplete()),
                this.unsubscribe();
            }),
            e
          );
        })(p.a),
        pt = (function () {
          return function (t, e) {
            (this.time = t), (this.notification = e);
          };
        })(),
        vt = n(969);
      function bt(t, e) {
        return e
          ? function (n) {
              return new mt(n, e).lift(new yt(t));
            }
          : function (e) {
              return e.lift(new yt(t));
            };
      }
      var yt = (function () {
          function t(t) {
            this.delayDurationSelector = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new gt(t, this.delayDurationSelector));
            }),
            t
          );
        })(),
        gt = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (
              (r.delayDurationSelector = n),
              (r.completed = !1),
              (r.delayNotifierSubscriptions = []),
              (r.index = 0),
              r
            );
          }
          return (
            r.a(e, t),
            (e.prototype.notifyNext = function (t, e, n, r, i) {
              this.destination.next(t),
                this.removeSubscription(i),
                this.tryComplete();
            }),
            (e.prototype.notifyError = function (t, e) {
              this._error(t);
            }),
            (e.prototype.notifyComplete = function (t) {
              var e = this.removeSubscription(t);
              e && this.destination.next(e), this.tryComplete();
            }),
            (e.prototype._next = function (t) {
              var e = this.index++;
              try {
                var n = this.delayDurationSelector(t, e);
                n && this.tryDelay(n, t);
              } catch (r) {
                this.destination.error(r);
              }
            }),
            (e.prototype._complete = function () {
              (this.completed = !0), this.tryComplete(), this.unsubscribe();
            }),
            (e.prototype.removeSubscription = function (t) {
              t.unsubscribe();
              var e = this.delayNotifierSubscriptions.indexOf(t);
              return (
                -1 !== e && this.delayNotifierSubscriptions.splice(e, 1),
                t.outerValue
              );
            }),
            (e.prototype.tryDelay = function (t, e) {
              var n = Object(A.a)(this, t, e);
              n &&
                !n.closed &&
                (this.destination.add(n),
                this.delayNotifierSubscriptions.push(n));
            }),
            (e.prototype.tryComplete = function () {
              this.completed &&
                0 === this.delayNotifierSubscriptions.length &&
                this.destination.complete();
            }),
            e
          );
        })(R.a),
        mt = (function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            return (r.source = e), (r.subscriptionDelay = n), r;
          }
          return (
            r.a(e, t),
            (e.prototype._subscribe = function (t) {
              this.subscriptionDelay.subscribe(new wt(t, this.source));
            }),
            e
          );
        })(vt.a),
        wt = (function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            return (r.parent = e), (r.source = n), (r.sourceSubscribed = !1), r;
          }
          return (
            r.a(e, t),
            (e.prototype._next = function (t) {
              this.subscribeToSource();
            }),
            (e.prototype._error = function (t) {
              this.unsubscribe(), this.parent.error(t);
            }),
            (e.prototype._complete = function () {
              this.unsubscribe(), this.subscribeToSource();
            }),
            (e.prototype.subscribeToSource = function () {
              this.sourceSubscribed ||
                ((this.sourceSubscribed = !0),
                this.unsubscribe(),
                this.source.subscribe(this.parent));
            }),
            e
          );
        })(p.a);
      function _t() {
        return function (t) {
          return t.lift(new kt());
        };
      }
      var kt = (function () {
          function t() {}
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new xt(t));
            }),
            t
          );
        })(),
        xt = (function (t) {
          function e(e) {
            return t.call(this, e) || this;
          }
          return (
            r.a(e, t),
            (e.prototype._next = function (t) {
              t.observe(this.destination);
            }),
            e
          );
        })(p.a);
      function Et(t, e) {
        return function (n) {
          return n.lift(new St(t, e));
        };
      }
      var St = (function () {
          function t(t, e) {
            (this.keySelector = t), (this.flushes = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Mt(t, this.keySelector, this.flushes));
            }),
            t
          );
        })(),
        Mt = (function (t) {
          function e(e, n, r) {
            var o = t.call(this, e) || this;
            return (
              (o.keySelector = n),
              (o.values = new Set()),
              r && o.add(Object(i.c)(r, new i.a(o))),
              o
            );
          }
          return (
            r.a(e, t),
            (e.prototype.notifyNext = function () {
              this.values.clear();
            }),
            (e.prototype.notifyError = function (t) {
              this._error(t);
            }),
            (e.prototype._next = function (t) {
              this.keySelector
                ? this._useKeySelector(t)
                : this._finalizeNext(t, t);
            }),
            (e.prototype._useKeySelector = function (t) {
              var e,
                n = this.destination;
              try {
                e = this.keySelector(t);
              } catch (r) {
                return void n.error(r);
              }
              this._finalizeNext(e, t);
            }),
            (e.prototype._finalizeNext = function (t, e) {
              var n = this.values;
              n.has(t) || (n.add(t), this.destination.next(e));
            }),
            e
          );
        })(i.b);
      function Ct(t, e) {
        return function (n) {
          return n.lift(new At(t, e));
        };
      }
      var At = (function () {
          function t(t, e) {
            (this.compare = t), (this.keySelector = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Rt(t, this.compare, this.keySelector));
            }),
            t
          );
        })(),
        Rt = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, e) || this;
            return (
              (i.keySelector = r),
              (i.hasKey = !1),
              "function" === typeof n && (i.compare = n),
              i
            );
          }
          return (
            r.a(e, t),
            (e.prototype.compare = function (t, e) {
              return t === e;
            }),
            (e.prototype._next = function (t) {
              var e;
              try {
                var n = this.keySelector;
                e = n ? n(t) : t;
              } catch (i) {
                return this.destination.error(i);
              }
              var r = !1;
              if (this.hasKey)
                try {
                  r = (0, this.compare)(this.key, e);
                } catch (i) {
                  return this.destination.error(i);
                }
              else this.hasKey = !0;
              r || ((this.key = e), this.destination.next(t));
            }),
            e
          );
        })(p.a);
      function Ot(t, e) {
        return Ct(function (n, r) {
          return e ? e(n[t], r[t]) : n[t] === r[t];
        });
      }
      var It = n(992),
        Tt = n(985),
        Nt = n(993);
      function jt(t) {
        return (
          void 0 === t && (t = Dt),
          function (e) {
            return e.lift(new Lt(t));
          }
        );
      }
      var Lt = (function () {
          function t(t) {
            this.errorFactory = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Pt(t, this.errorFactory));
            }),
            t
          );
        })(),
        Pt = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (r.errorFactory = n), (r.hasValue = !1), r;
          }
          return (
            r.a(e, t),
            (e.prototype._next = function (t) {
              (this.hasValue = !0), this.destination.next(t);
            }),
            (e.prototype._complete = function () {
              if (this.hasValue) return this.destination.complete();
              var t = void 0;
              try {
                t = this.errorFactory();
              } catch (e) {
                t = e;
              }
              this.destination.error(t);
            }),
            e
          );
        })(p.a);
      function Dt() {
        return new Nt.a();
      }
      var Bt = n(976);
      function Ht(t) {
        return function (e) {
          return 0 === t ? Object(Bt.b)() : e.lift(new Ft(t));
        };
      }
      var Ft = (function () {
          function t(t) {
            if (((this.total = t), this.total < 0)) throw new It.a();
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Ut(t, this.total));
            }),
            t
          );
        })(),
        Ut = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (r.total = n), (r.count = 0), r;
          }
          return (
            r.a(e, t),
            (e.prototype._next = function (t) {
              var e = this.total,
                n = ++this.count;
              n <= e &&
                (this.destination.next(t),
                n === e && (this.destination.complete(), this.unsubscribe()));
            }),
            e
          );
        })(p.a);
      function Wt(t, e) {
        if (t < 0) throw new It.a();
        var n = arguments.length >= 2;
        return function (r) {
          return r.pipe(
            Object(Tt.a)(function (e, n) {
              return n === t;
            }),
            Ht(1),
            n
              ? st(e)
              : jt(function () {
                  return new It.a();
                })
          );
        };
      }
      var zt = n(1003);
      function qt() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return function (e) {
          return Object(q.a)(e, zt.a.apply(void 0, t));
        };
      }
      function Vt(t, e) {
        return function (n) {
          return n.lift(new Yt(t, e, n));
        };
      }
      var Yt = (function () {
          function t(t, e, n) {
            (this.predicate = t), (this.thisArg = e), (this.source = n);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new Gt(t, this.predicate, this.thisArg, this.source)
              );
            }),
            t
          );
        })(),
        Gt = (function (t) {
          function e(e, n, r, i) {
            var o = t.call(this, e) || this;
            return (
              (o.predicate = n),
              (o.thisArg = r),
              (o.source = i),
              (o.index = 0),
              (o.thisArg = r || o),
              o
            );
          }
          return (
            r.a(e, t),
            (e.prototype.notifyComplete = function (t) {
              this.destination.next(t), this.destination.complete();
            }),
            (e.prototype._next = function (t) {
              var e = !1;
              try {
                e = this.predicate.call(
                  this.thisArg,
                  t,
                  this.index++,
                  this.source
                );
              } catch (n) {
                return void this.destination.error(n);
              }
              e || this.notifyComplete(!1);
            }),
            (e.prototype._complete = function () {
              this.notifyComplete(!0);
            }),
            e
          );
        })(p.a);
      function Jt() {
        return function (t) {
          return t.lift(new Kt());
        };
      }
      var Kt = (function () {
          function t() {}
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Xt(t));
            }),
            t
          );
        })(),
        Xt = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return (n.hasCompleted = !1), (n.hasSubscription = !1), n;
          }
          return (
            r.a(e, t),
            (e.prototype._next = function (t) {
              this.hasSubscription ||
                ((this.hasSubscription = !0),
                this.add(Object(i.c)(t, new i.a(this))));
            }),
            (e.prototype._complete = function () {
              (this.hasCompleted = !0),
                this.hasSubscription || this.destination.complete();
            }),
            (e.prototype.notifyComplete = function () {
              (this.hasSubscription = !1),
                this.hasCompleted && this.destination.complete();
            }),
            e
          );
        })(i.b),
        Qt = n(975);
      function Zt(t, e) {
        return e
          ? function (n) {
              return n.pipe(
                Zt(function (n, r) {
                  return Object(W.a)(t(n, r)).pipe(
                    Object(Qt.a)(function (t, i) {
                      return e(n, t, r, i);
                    })
                  );
                })
              );
            }
          : function (e) {
              return e.lift(new $t(t));
            };
      }
      var $t = (function () {
          function t(t) {
            this.project = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new te(t, this.project));
            }),
            t
          );
        })(),
        te = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (
              (r.project = n),
              (r.hasSubscription = !1),
              (r.hasCompleted = !1),
              (r.index = 0),
              r
            );
          }
          return (
            r.a(e, t),
            (e.prototype._next = function (t) {
              this.hasSubscription || this.tryNext(t);
            }),
            (e.prototype.tryNext = function (t) {
              var e,
                n = this.index++;
              try {
                e = this.project(t, n);
              } catch (r) {
                return void this.destination.error(r);
              }
              (this.hasSubscription = !0), this._innerSub(e);
            }),
            (e.prototype._innerSub = function (t) {
              var e = new i.a(this),
                n = this.destination;
              n.add(e);
              var r = Object(i.c)(t, e);
              r !== e && n.add(r);
            }),
            (e.prototype._complete = function () {
              (this.hasCompleted = !0),
                this.hasSubscription || this.destination.complete(),
                this.unsubscribe();
            }),
            (e.prototype.notifyNext = function (t) {
              this.destination.next(t);
            }),
            (e.prototype.notifyError = function (t) {
              this.destination.error(t);
            }),
            (e.prototype.notifyComplete = function () {
              (this.hasSubscription = !1),
                this.hasCompleted && this.destination.complete();
            }),
            e
          );
        })(i.b);
      function ee(t, e, n) {
        return (
          void 0 === e && (e = Number.POSITIVE_INFINITY),
          (e = (e || 0) < 1 ? Number.POSITIVE_INFINITY : e),
          function (r) {
            return r.lift(new ne(t, e, n));
          }
        );
      }
      var ne = (function () {
          function t(t, e, n) {
            (this.project = t), (this.concurrent = e), (this.scheduler = n);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new re(t, this.project, this.concurrent, this.scheduler)
              );
            }),
            t
          );
        })(),
        re = (function (t) {
          function e(e, n, r, i) {
            var o = t.call(this, e) || this;
            return (
              (o.project = n),
              (o.concurrent = r),
              (o.scheduler = i),
              (o.index = 0),
              (o.active = 0),
              (o.hasCompleted = !1),
              r < Number.POSITIVE_INFINITY && (o.buffer = []),
              o
            );
          }
          return (
            r.a(e, t),
            (e.dispatch = function (t) {
              var e = t.subscriber,
                n = t.result,
                r = t.value,
                i = t.index;
              e.subscribeToProjection(n, r, i);
            }),
            (e.prototype._next = function (t) {
              var n = this.destination;
              if (n.closed) this._complete();
              else {
                var r = this.index++;
                if (this.active < this.concurrent) {
                  n.next(t);
                  try {
                    var i = (0, this.project)(t, r);
                    if (this.scheduler) {
                      var o = {
                        subscriber: this,
                        result: i,
                        value: t,
                        index: r,
                      };
                      this.destination.add(
                        this.scheduler.schedule(e.dispatch, 0, o)
                      );
                    } else this.subscribeToProjection(i, t, r);
                  } catch (s) {
                    n.error(s);
                  }
                } else this.buffer.push(t);
              }
            }),
            (e.prototype.subscribeToProjection = function (t, e, n) {
              this.active++,
                this.destination.add(Object(i.c)(t, new i.a(this)));
            }),
            (e.prototype._complete = function () {
              (this.hasCompleted = !0),
                this.hasCompleted &&
                  0 === this.active &&
                  this.destination.complete(),
                this.unsubscribe();
            }),
            (e.prototype.notifyNext = function (t) {
              this._next(t);
            }),
            (e.prototype.notifyComplete = function () {
              var t = this.buffer;
              this.active--,
                t && t.length > 0 && this._next(t.shift()),
                this.hasCompleted &&
                  0 === this.active &&
                  this.destination.complete();
            }),
            e
          );
        })(i.b);
      function ie(t) {
        return function (e) {
          return e.lift(new oe(t));
        };
      }
      var oe = (function () {
          function t(t) {
            this.callback = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new se(t, this.callback));
            }),
            t
          );
        })(),
        se = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return r.add(new C.a(n)), r;
          }
          return r.a(e, t), e;
        })(p.a);
      function ae(t, e) {
        if ("function" !== typeof t)
          throw new TypeError("predicate is not a function");
        return function (n) {
          return n.lift(new ue(t, n, !1, e));
        };
      }
      var ue = (function () {
          function t(t, e, n, r) {
            (this.predicate = t),
              (this.source = e),
              (this.yieldIndex = n),
              (this.thisArg = r);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new ce(
                  t,
                  this.predicate,
                  this.source,
                  this.yieldIndex,
                  this.thisArg
                )
              );
            }),
            t
          );
        })(),
        ce = (function (t) {
          function e(e, n, r, i, o) {
            var s = t.call(this, e) || this;
            return (
              (s.predicate = n),
              (s.source = r),
              (s.yieldIndex = i),
              (s.thisArg = o),
              (s.index = 0),
              s
            );
          }
          return (
            r.a(e, t),
            (e.prototype.notifyComplete = function (t) {
              var e = this.destination;
              e.next(t), e.complete(), this.unsubscribe();
            }),
            (e.prototype._next = function (t) {
              var e = this.predicate,
                n = this.thisArg,
                r = this.index++;
              try {
                e.call(n || this, t, r, this.source) &&
                  this.notifyComplete(this.yieldIndex ? r : t);
              } catch (i) {
                this.destination.error(i);
              }
            }),
            (e.prototype._complete = function () {
              this.notifyComplete(this.yieldIndex ? -1 : void 0);
            }),
            e
          );
        })(p.a);
      function le(t, e) {
        return function (n) {
          return n.lift(new ue(t, n, !0, e));
        };
      }
      var he = n(979);
      function fe(t, e) {
        var n = arguments.length >= 2;
        return function (r) {
          return r.pipe(
            t
              ? Object(Tt.a)(function (e, n) {
                  return t(e, n, r);
                })
              : he.a,
            Ht(1),
            n
              ? st(e)
              : jt(function () {
                  return new Nt.a();
                })
          );
        };
      }
      var de = n(1019);
      function pe() {
        return function (t) {
          return t.lift(new ve());
        };
      }
      var ve = (function () {
          function t() {}
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new be(t));
            }),
            t
          );
        })(),
        be = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return r.a(e, t), (e.prototype._next = function (t) {}), e;
        })(p.a);
      function ye() {
        return function (t) {
          return t.lift(new ge());
        };
      }
      var ge = (function () {
          function t() {}
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new me(t));
            }),
            t
          );
        })(),
        me = (function (t) {
          function e(e) {
            return t.call(this, e) || this;
          }
          return (
            r.a(e, t),
            (e.prototype.notifyComplete = function (t) {
              var e = this.destination;
              e.next(t), e.complete();
            }),
            (e.prototype._next = function (t) {
              this.notifyComplete(!1);
            }),
            (e.prototype._complete = function () {
              this.notifyComplete(!0);
            }),
            e
          );
        })(p.a);
      function we(t) {
        return function (e) {
          return 0 === t ? Object(Bt.b)() : e.lift(new _e(t));
        };
      }
      var _e = (function () {
          function t(t) {
            if (((this.total = t), this.total < 0)) throw new It.a();
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new ke(t, this.total));
            }),
            t
          );
        })(),
        ke = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (r.total = n), (r.ring = new Array()), (r.count = 0), r;
          }
          return (
            r.a(e, t),
            (e.prototype._next = function (t) {
              var e = this.ring,
                n = this.total,
                r = this.count++;
              e.length < n ? e.push(t) : (e[r % n] = t);
            }),
            (e.prototype._complete = function () {
              var t = this.destination,
                e = this.count;
              if (e > 0)
                for (
                  var n = this.count >= this.total ? this.total : this.count,
                    r = this.ring,
                    i = 0;
                  i < n;
                  i++
                ) {
                  var o = e++ % n;
                  t.next(r[o]);
                }
              t.complete();
            }),
            e
          );
        })(p.a);
      function xe(t, e) {
        var n = arguments.length >= 2;
        return function (r) {
          return r.pipe(
            t
              ? Object(Tt.a)(function (e, n) {
                  return t(e, n, r);
                })
              : he.a,
            we(1),
            n
              ? st(e)
              : jt(function () {
                  return new Nt.a();
                })
          );
        };
      }
      function Ee(t) {
        return function (e) {
          return e.lift(new Se(t));
        };
      }
      var Se = (function () {
          function t(t) {
            this.value = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Me(t, this.value));
            }),
            t
          );
        })(),
        Me = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (r.value = n), r;
          }
          return (
            r.a(e, t),
            (e.prototype._next = function (t) {
              this.destination.next(this.value);
            }),
            e
          );
        })(p.a);
      function Ce() {
        return function (t) {
          return t.lift(new Ae());
        };
      }
      var Ae = (function () {
          function t() {}
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Re(t));
            }),
            t
          );
        })(),
        Re = (function (t) {
          function e(e) {
            return t.call(this, e) || this;
          }
          return (
            r.a(e, t),
            (e.prototype._next = function (t) {
              this.destination.next(lt.a.createNext(t));
            }),
            (e.prototype._error = function (t) {
              var e = this.destination;
              e.next(lt.a.createError(t)), e.complete();
            }),
            (e.prototype._complete = function () {
              var t = this.destination;
              t.next(lt.a.createComplete()), t.complete();
            }),
            e
          );
        })(p.a);
      function Oe(t, e) {
        var n = !1;
        return (
          arguments.length >= 2 && (n = !0),
          function (r) {
            return r.lift(new Ie(t, e, n));
          }
        );
      }
      var Ie = (function () {
          function t(t, e, n) {
            void 0 === n && (n = !1),
              (this.accumulator = t),
              (this.seed = e),
              (this.hasSeed = n);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new Te(t, this.accumulator, this.seed, this.hasSeed)
              );
            }),
            t
          );
        })(),
        Te = (function (t) {
          function e(e, n, r, i) {
            var o = t.call(this, e) || this;
            return (
              (o.accumulator = n),
              (o._seed = r),
              (o.hasSeed = i),
              (o.index = 0),
              o
            );
          }
          return (
            r.a(e, t),
            Object.defineProperty(e.prototype, "seed", {
              get: function () {
                return this._seed;
              },
              set: function (t) {
                (this.hasSeed = !0), (this._seed = t);
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype._next = function (t) {
              if (this.hasSeed) return this._tryNext(t);
              (this.seed = t), this.destination.next(t);
            }),
            (e.prototype._tryNext = function (t) {
              var e,
                n = this.index++;
              try {
                e = this.accumulator(this.seed, t, n);
              } catch (r) {
                this.destination.error(r);
              }
              (this.seed = e), this.destination.next(e);
            }),
            e
          );
        })(p.a),
        Ne = n(1017);
      function je(t, e) {
        return arguments.length >= 2
          ? function (n) {
              return Object(Ne.a)(Oe(t, e), we(1), st(e))(n);
            }
          : function (e) {
              return Object(Ne.a)(
                Oe(function (e, n, r) {
                  return t(e, n, r + 1);
                }),
                we(1)
              )(e);
            };
      }
      function Le(t) {
        return je(
          "function" === typeof t
            ? function (e, n) {
                return t(e, n) > 0 ? e : n;
              }
            : function (t, e) {
                return t > e ? t : e;
              }
        );
      }
      var Pe = n(1062);
      function De() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return function (e) {
          return e.lift.call(Pe.a.apply(void 0, [e].concat(t)));
        };
      }
      var Be = n(1024);
      function He(t, e, n) {
        return (
          void 0 === n && (n = Number.POSITIVE_INFINITY),
          "function" === typeof e
            ? Object(G.b)(
                function () {
                  return t;
                },
                e,
                n
              )
            : ("number" === typeof e && (n = e),
              Object(G.b)(function () {
                return t;
              }, n))
        );
      }
      function Fe(t, e, n) {
        return (
          void 0 === n && (n = Number.POSITIVE_INFINITY),
          function (r) {
            return r.lift(new Ue(t, e, n));
          }
        );
      }
      var Ue = (function () {
          function t(t, e, n) {
            (this.accumulator = t), (this.seed = e), (this.concurrent = n);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new We(t, this.accumulator, this.seed, this.concurrent)
              );
            }),
            t
          );
        })(),
        We = (function (t) {
          function e(e, n, r, i) {
            var o = t.call(this, e) || this;
            return (
              (o.accumulator = n),
              (o.acc = r),
              (o.concurrent = i),
              (o.hasValue = !1),
              (o.hasCompleted = !1),
              (o.buffer = []),
              (o.active = 0),
              (o.index = 0),
              o
            );
          }
          return (
            r.a(e, t),
            (e.prototype._next = function (t) {
              if (this.active < this.concurrent) {
                var e = this.index++,
                  n = this.destination,
                  r = void 0;
                try {
                  r = (0, this.accumulator)(this.acc, t, e);
                } catch (i) {
                  return n.error(i);
                }
                this.active++, this._innerSub(r);
              } else this.buffer.push(t);
            }),
            (e.prototype._innerSub = function (t) {
              var e = new i.a(this),
                n = this.destination;
              n.add(e);
              var r = Object(i.c)(t, e);
              r !== e && n.add(r);
            }),
            (e.prototype._complete = function () {
              (this.hasCompleted = !0),
                0 === this.active &&
                  0 === this.buffer.length &&
                  (!1 === this.hasValue && this.destination.next(this.acc),
                  this.destination.complete()),
                this.unsubscribe();
            }),
            (e.prototype.notifyNext = function (t) {
              var e = this.destination;
              (this.acc = t), (this.hasValue = !0), e.next(t);
            }),
            (e.prototype.notifyComplete = function () {
              var t = this.buffer;
              this.active--,
                t.length > 0
                  ? this._next(t.shift())
                  : 0 === this.active &&
                    this.hasCompleted &&
                    (!1 === this.hasValue && this.destination.next(this.acc),
                    this.destination.complete());
            }),
            e
          );
        })(i.b);
      function ze(t) {
        return je(
          "function" === typeof t
            ? function (e, n) {
                return t(e, n) < 0 ? e : n;
              }
            : function (t, e) {
                return t < e ? t : e;
              }
        );
      }
      var qe = n(1055);
      function Ve(t, e) {
        return function (n) {
          var r;
          if (
            ((r =
              "function" === typeof t
                ? t
                : function () {
                    return t;
                  }),
            "function" === typeof e)
          )
            return n.lift(new Ye(r, e));
          var i = Object.create(n, qe.b);
          return (i.source = n), (i.subjectFactory = r), i;
        };
      }
      var Ye = (function () {
          function t(t, e) {
            (this.subjectFactory = t), (this.selector = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              var n = this.selector,
                r = this.subjectFactory(),
                i = n(r).subscribe(t);
              return i.add(e.subscribe(r)), i;
            }),
            t
          );
        })(),
        Ge = n(1057);
      function Je() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return (
          1 === t.length && Object(U.a)(t[0]) && (t = t[0]),
          function (e) {
            return e.lift(new Ke(t));
          }
        );
      }
      var Ke = (function () {
          function t(t) {
            this.nextSources = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Xe(t, this.nextSources));
            }),
            t
          );
        })(),
        Xe = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (r.destination = e), (r.nextSources = n), r;
          }
          return (
            r.a(e, t),
            (e.prototype.notifyError = function () {
              this.subscribeToNextSource();
            }),
            (e.prototype.notifyComplete = function () {
              this.subscribeToNextSource();
            }),
            (e.prototype._error = function (t) {
              this.subscribeToNextSource(), this.unsubscribe();
            }),
            (e.prototype._complete = function () {
              this.subscribeToNextSource(), this.unsubscribe();
            }),
            (e.prototype.subscribeToNextSource = function () {
              var t = this.nextSources.shift();
              if (t) {
                var e = new i.a(this),
                  n = this.destination;
                n.add(e);
                var r = Object(i.c)(t, e);
                r !== e && n.add(r);
              } else this.destination.complete();
            }),
            e
          );
        })(i.b);
      function Qe() {
        return function (t) {
          return t.lift(new Ze());
        };
      }
      var Ze = (function () {
          function t() {}
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new $e(t));
            }),
            t
          );
        })(),
        $e = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return (n.hasPrev = !1), n;
          }
          return (
            r.a(e, t),
            (e.prototype._next = function (t) {
              var e;
              this.hasPrev ? (e = [this.prev, t]) : (this.hasPrev = !0),
                (this.prev = t),
                e && this.destination.next(e);
            }),
            e
          );
        })(p.a),
        tn = n(1117);
      function en(t, e) {
        return function (n) {
          return [Object(Tt.a)(t, e)(n), Object(Tt.a)(Object(tn.a)(t, e))(n)];
        };
      }
      function nn() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = t.length;
        if (0 === n) throw new Error("list of properties cannot be empty.");
        return function (e) {
          return Object(Qt.a)(rn(t, n))(e);
        };
      }
      function rn(t, e) {
        return function (n) {
          for (var r = n, i = 0; i < e; i++) {
            var o = null != r ? r[t[i]] : void 0;
            if (void 0 === o) return;
            r = o;
          }
          return r;
        };
      }
      var on = n(972);
      function sn(t) {
        return t
          ? Ve(function () {
              return new on.a();
            }, t)
          : Ve(new on.a());
      }
      var an = n(1056);
      function un(t) {
        return function (e) {
          return Ve(new an.a(t))(e);
        };
      }
      var cn = n(1006);
      function ln() {
        return function (t) {
          return Ve(new cn.a())(t);
        };
      }
      var hn = n(1020);
      function fn(t, e, n, r) {
        n && "function" !== typeof n && (r = n);
        var i = "function" === typeof n ? n : void 0,
          o = new hn.a(t, e, r);
        return function (t) {
          return Ve(function () {
            return o;
          }, i)(t);
        };
      }
      var dn = n(1063);
      function pn() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return function (e) {
          return (
            1 === t.length && Object(U.a)(t[0]) && (t = t[0]),
            e.lift.call(dn.a.apply(void 0, [e].concat(t)))
          );
        };
      }
      function vn(t) {
        return (
          void 0 === t && (t = -1),
          function (e) {
            return 0 === t
              ? Object(Bt.b)()
              : t < 0
              ? e.lift(new bn(-1, e))
              : e.lift(new bn(t - 1, e));
          }
        );
      }
      var bn = (function () {
          function t(t, e) {
            (this.count = t), (this.source = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new yn(t, this.count, this.source));
            }),
            t
          );
        })(),
        yn = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, e) || this;
            return (i.count = n), (i.source = r), i;
          }
          return (
            r.a(e, t),
            (e.prototype.complete = function () {
              if (!this.isStopped) {
                var e = this.source,
                  n = this.count;
                if (0 === n) return t.prototype.complete.call(this);
                n > -1 && (this.count = n - 1),
                  e.subscribe(this._unsubscribeAndRecycle());
              }
            }),
            e
          );
        })(p.a);
      function gn(t) {
        return function (e) {
          return e.lift(new mn(t));
        };
      }
      var mn = (function () {
          function t(t) {
            this.notifier = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new wn(t, this.notifier, e));
            }),
            t
          );
        })(),
        wn = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, e) || this;
            return (
              (i.notifier = n),
              (i.source = r),
              (i.sourceIsBeingSubscribedTo = !0),
              i
            );
          }
          return (
            r.a(e, t),
            (e.prototype.notifyNext = function () {
              (this.sourceIsBeingSubscribedTo = !0),
                this.source.subscribe(this);
            }),
            (e.prototype.notifyComplete = function () {
              if (!1 === this.sourceIsBeingSubscribedTo)
                return t.prototype.complete.call(this);
            }),
            (e.prototype.complete = function () {
              if (((this.sourceIsBeingSubscribedTo = !1), !this.isStopped)) {
                if (
                  (this.retries || this.subscribeToRetries(),
                  !this.retriesSubscription || this.retriesSubscription.closed)
                )
                  return t.prototype.complete.call(this);
                this._unsubscribeAndRecycle(), this.notifications.next(void 0);
              }
            }),
            (e.prototype._unsubscribe = function () {
              var t = this.notifications,
                e = this.retriesSubscription;
              t && (t.unsubscribe(), (this.notifications = void 0)),
                e && (e.unsubscribe(), (this.retriesSubscription = void 0)),
                (this.retries = void 0);
            }),
            (e.prototype._unsubscribeAndRecycle = function () {
              var e = this._unsubscribe;
              return (
                (this._unsubscribe = null),
                t.prototype._unsubscribeAndRecycle.call(this),
                (this._unsubscribe = e),
                this
              );
            }),
            (e.prototype.subscribeToRetries = function () {
              var e;
              this.notifications = new on.a();
              try {
                e = (0, this.notifier)(this.notifications);
              } catch (n) {
                return t.prototype.complete.call(this);
              }
              (this.retries = e),
                (this.retriesSubscription = Object(i.c)(e, new i.a(this)));
            }),
            e
          );
        })(i.b);
      function _n(t) {
        return (
          void 0 === t && (t = -1),
          function (e) {
            return e.lift(new kn(t, e));
          }
        );
      }
      var kn = (function () {
          function t(t, e) {
            (this.count = t), (this.source = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new xn(t, this.count, this.source));
            }),
            t
          );
        })(),
        xn = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, e) || this;
            return (i.count = n), (i.source = r), i;
          }
          return (
            r.a(e, t),
            (e.prototype.error = function (e) {
              if (!this.isStopped) {
                var n = this.source,
                  r = this.count;
                if (0 === r) return t.prototype.error.call(this, e);
                r > -1 && (this.count = r - 1),
                  n.subscribe(this._unsubscribeAndRecycle());
              }
            }),
            e
          );
        })(p.a);
      function En(t) {
        return function (e) {
          return e.lift(new Sn(t, e));
        };
      }
      var Sn = (function () {
          function t(t, e) {
            (this.notifier = t), (this.source = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Mn(t, this.notifier, this.source));
            }),
            t
          );
        })(),
        Mn = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, e) || this;
            return (i.notifier = n), (i.source = r), i;
          }
          return (
            r.a(e, t),
            (e.prototype.error = function (e) {
              if (!this.isStopped) {
                var n = this.errors,
                  r = this.retries,
                  o = this.retriesSubscription;
                if (r)
                  (this.errors = void 0), (this.retriesSubscription = void 0);
                else {
                  n = new on.a();
                  try {
                    r = (0, this.notifier)(n);
                  } catch (s) {
                    return t.prototype.error.call(this, s);
                  }
                  o = Object(i.c)(r, new i.a(this));
                }
                this._unsubscribeAndRecycle(),
                  (this.errors = n),
                  (this.retries = r),
                  (this.retriesSubscription = o),
                  n.next(e);
              }
            }),
            (e.prototype._unsubscribe = function () {
              var t = this.errors,
                e = this.retriesSubscription;
              t && (t.unsubscribe(), (this.errors = void 0)),
                e && (e.unsubscribe(), (this.retriesSubscription = void 0)),
                (this.retries = void 0);
            }),
            (e.prototype.notifyNext = function () {
              var t = this._unsubscribe;
              (this._unsubscribe = null),
                this._unsubscribeAndRecycle(),
                (this._unsubscribe = t),
                this.source.subscribe(this);
            }),
            e
          );
        })(i.b),
        Cn = n(1018);
      function An(t) {
        return function (e) {
          return e.lift(new Rn(t));
        };
      }
      var Rn = (function () {
          function t(t) {
            this.notifier = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              var n = new On(t),
                r = e.subscribe(n);
              return r.add(Object(i.c)(this.notifier, new i.a(n))), r;
            }),
            t
          );
        })(),
        On = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.hasValue = !1), e;
          }
          return (
            r.a(e, t),
            (e.prototype._next = function (t) {
              (this.value = t), (this.hasValue = !0);
            }),
            (e.prototype.notifyNext = function () {
              this.emitValue();
            }),
            (e.prototype.notifyComplete = function () {
              this.emitValue();
            }),
            (e.prototype.emitValue = function () {
              this.hasValue &&
                ((this.hasValue = !1), this.destination.next(this.value));
            }),
            e
          );
        })(i.b);
      function In(t, e) {
        return (
          void 0 === e && (e = u.a),
          function (n) {
            return n.lift(new Tn(t, e));
          }
        );
      }
      var Tn = (function () {
          function t(t, e) {
            (this.period = t), (this.scheduler = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Nn(t, this.period, this.scheduler));
            }),
            t
          );
        })(),
        Nn = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, e) || this;
            return (
              (i.period = n),
              (i.scheduler = r),
              (i.hasValue = !1),
              i.add(r.schedule(jn, n, { subscriber: i, period: n })),
              i
            );
          }
          return (
            r.a(e, t),
            (e.prototype._next = function (t) {
              (this.lastValue = t), (this.hasValue = !0);
            }),
            (e.prototype.notifyNext = function () {
              this.hasValue &&
                ((this.hasValue = !1), this.destination.next(this.lastValue));
            }),
            e
          );
        })(p.a);
      function jn(t) {
        var e = t.subscriber,
          n = t.period;
        e.notifyNext(), this.schedule(t, n);
      }
      function Ln(t, e) {
        return function (n) {
          return n.lift(new Pn(t, e));
        };
      }
      var Pn = (function () {
          function t(t, e) {
            (this.compareTo = t), (this.comparator = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Dn(t, this.compareTo, this.comparator));
            }),
            t
          );
        })(),
        Dn = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, e) || this;
            return (
              (i.compareTo = n),
              (i.comparator = r),
              (i._a = []),
              (i._b = []),
              (i._oneComplete = !1),
              i.destination.add(n.subscribe(new Bn(e, i))),
              i
            );
          }
          return (
            r.a(e, t),
            (e.prototype._next = function (t) {
              this._oneComplete && 0 === this._b.length
                ? this.emit(!1)
                : (this._a.push(t), this.checkValues());
            }),
            (e.prototype._complete = function () {
              this._oneComplete
                ? this.emit(0 === this._a.length && 0 === this._b.length)
                : (this._oneComplete = !0),
                this.unsubscribe();
            }),
            (e.prototype.checkValues = function () {
              for (
                var t = this, e = t._a, n = t._b, r = t.comparator;
                e.length > 0 && n.length > 0;

              ) {
                var i = e.shift(),
                  o = n.shift(),
                  s = !1;
                try {
                  s = r ? r(i, o) : i === o;
                } catch (a) {
                  this.destination.error(a);
                }
                s || this.emit(!1);
              }
            }),
            (e.prototype.emit = function (t) {
              var e = this.destination;
              e.next(t), e.complete();
            }),
            (e.prototype.nextB = function (t) {
              this._oneComplete && 0 === this._a.length
                ? this.emit(!1)
                : (this._b.push(t), this.checkValues());
            }),
            (e.prototype.completeB = function () {
              this._oneComplete
                ? this.emit(0 === this._a.length && 0 === this._b.length)
                : (this._oneComplete = !0);
            }),
            e
          );
        })(p.a),
        Bn = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (r.parent = n), r;
          }
          return (
            r.a(e, t),
            (e.prototype._next = function (t) {
              this.parent.nextB(t);
            }),
            (e.prototype._error = function (t) {
              this.parent.error(t), this.unsubscribe();
            }),
            (e.prototype._complete = function () {
              this.parent.completeB(), this.unsubscribe();
            }),
            e
          );
        })(p.a);
      function Hn() {
        return new on.a();
      }
      function Fn() {
        return function (t) {
          return Object(Cn.a)()(Ve(Hn)(t));
        };
      }
      function Un(t, e, n) {
        var r;
        return (
          (r =
            t && "object" === typeof t
              ? t
              : { bufferSize: t, windowTime: e, refCount: !1, scheduler: n }),
          function (t) {
            return t.lift(
              (function (t) {
                var e,
                  n,
                  r = t.bufferSize,
                  i = void 0 === r ? Number.POSITIVE_INFINITY : r,
                  o = t.windowTime,
                  s = void 0 === o ? Number.POSITIVE_INFINITY : o,
                  a = t.refCount,
                  u = t.scheduler,
                  c = 0,
                  l = !1,
                  h = !1;
                return function (t) {
                  var r;
                  c++,
                    !e || l
                      ? ((l = !1),
                        (e = new hn.a(i, s, u)),
                        (r = e.subscribe(this)),
                        (n = t.subscribe({
                          next: function (t) {
                            e.next(t);
                          },
                          error: function (t) {
                            (l = !0), e.error(t);
                          },
                          complete: function () {
                            (h = !0), (n = void 0), e.complete();
                          },
                        })),
                        h && (n = void 0))
                      : (r = e.subscribe(this)),
                    this.add(function () {
                      c--,
                        r.unsubscribe(),
                        (r = void 0),
                        n &&
                          !h &&
                          a &&
                          0 === c &&
                          (n.unsubscribe(), (n = void 0), (e = void 0));
                    });
                };
              })(r)
            );
          }
        );
      }
      function Wn(t) {
        return function (e) {
          return e.lift(new zn(t, e));
        };
      }
      var zn = (function () {
          function t(t, e) {
            (this.predicate = t), (this.source = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new qn(t, this.predicate, this.source));
            }),
            t
          );
        })(),
        qn = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, e) || this;
            return (
              (i.predicate = n),
              (i.source = r),
              (i.seenValue = !1),
              (i.index = 0),
              i
            );
          }
          return (
            r.a(e, t),
            (e.prototype.applySingleValue = function (t) {
              this.seenValue
                ? this.destination.error(
                    "Sequence contains more than one element"
                  )
                : ((this.seenValue = !0), (this.singleValue = t));
            }),
            (e.prototype._next = function (t) {
              var e = this.index++;
              this.predicate ? this.tryNext(t, e) : this.applySingleValue(t);
            }),
            (e.prototype.tryNext = function (t, e) {
              try {
                this.predicate(t, e, this.source) && this.applySingleValue(t);
              } catch (n) {
                this.destination.error(n);
              }
            }),
            (e.prototype._complete = function () {
              var t = this.destination;
              this.index > 0
                ? (t.next(this.seenValue ? this.singleValue : void 0),
                  t.complete())
                : t.error(new Nt.a());
            }),
            e
          );
        })(p.a);
      function Vn(t) {
        return function (e) {
          return e.lift(new Yn(t));
        };
      }
      var Yn = (function () {
          function t(t) {
            this.total = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Gn(t, this.total));
            }),
            t
          );
        })(),
        Gn = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (r.total = n), (r.count = 0), r;
          }
          return (
            r.a(e, t),
            (e.prototype._next = function (t) {
              ++this.count > this.total && this.destination.next(t);
            }),
            e
          );
        })(p.a);
      function Jn(t) {
        return function (e) {
          return e.lift(new Kn(t));
        };
      }
      var Kn = (function () {
          function t(t) {
            if (((this._skipCount = t), this._skipCount < 0)) throw new It.a();
          }
          return (
            (t.prototype.call = function (t, e) {
              return 0 === this._skipCount
                ? e.subscribe(new p.a(t))
                : e.subscribe(new Xn(t, this._skipCount));
            }),
            t
          );
        })(),
        Xn = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (
              (r._skipCount = n), (r._count = 0), (r._ring = new Array(n)), r
            );
          }
          return (
            r.a(e, t),
            (e.prototype._next = function (t) {
              var e = this._skipCount,
                n = this._count++;
              if (n < e) this._ring[n] = t;
              else {
                var r = n % e,
                  i = this._ring,
                  o = i[r];
                (i[r] = t), this.destination.next(o);
              }
            }),
            e
          );
        })(p.a);
      function Qn(t) {
        return function (e) {
          return e.lift(new Zn(t));
        };
      }
      var Zn = (function () {
          function t(t) {
            this.notifier = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new $n(t, this.notifier));
            }),
            t
          );
        })(),
        $n = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            r.hasValue = !1;
            var o = new i.a(r);
            r.add(o), (r.innerSubscription = o);
            var s = Object(i.c)(n, o);
            return s !== o && (r.add(s), (r.innerSubscription = s)), r;
          }
          return (
            r.a(e, t),
            (e.prototype._next = function (e) {
              this.hasValue && t.prototype._next.call(this, e);
            }),
            (e.prototype.notifyNext = function () {
              (this.hasValue = !0),
                this.innerSubscription && this.innerSubscription.unsubscribe();
            }),
            (e.prototype.notifyComplete = function () {}),
            e
          );
        })(i.b);
      function tr(t) {
        return function (e) {
          return e.lift(new er(t));
        };
      }
      var er = (function () {
          function t(t) {
            this.predicate = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new nr(t, this.predicate));
            }),
            t
          );
        })(),
        nr = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (r.predicate = n), (r.skipping = !0), (r.index = 0), r;
          }
          return (
            r.a(e, t),
            (e.prototype._next = function (t) {
              var e = this.destination;
              this.skipping && this.tryCallPredicate(t),
                this.skipping || e.next(t);
            }),
            (e.prototype.tryCallPredicate = function (t) {
              try {
                var e = this.predicate(t, this.index++);
                this.skipping = Boolean(e);
              } catch (n) {
                this.destination.error(n);
              }
            }),
            e
          );
        })(p.a);
      function rr() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = t[t.length - 1];
        return Object(m.a)(n)
          ? (t.pop(),
            function (e) {
              return Object(q.a)(t, e, n);
            })
          : function (e) {
              return Object(q.a)(t, e);
            };
      }
      var ir = n(1029),
        or = n(1026),
        sr = (function (t) {
          function e(e, n, r) {
            void 0 === n && (n = 0), void 0 === r && (r = ir.a);
            var i = t.call(this) || this;
            return (
              (i.source = e),
              (i.delayTime = n),
              (i.scheduler = r),
              (!Object(or.a)(n) || n < 0) && (i.delayTime = 0),
              (r && "function" === typeof r.schedule) || (i.scheduler = ir.a),
              i
            );
          }
          return (
            r.a(e, t),
            (e.create = function (t, n, r) {
              return (
                void 0 === n && (n = 0),
                void 0 === r && (r = ir.a),
                new e(t, n, r)
              );
            }),
            (e.dispatch = function (t) {
              var e = t.source,
                n = t.subscriber;
              return this.add(e.subscribe(n));
            }),
            (e.prototype._subscribe = function (t) {
              var n = this.delayTime,
                r = this.source;
              return this.scheduler.schedule(e.dispatch, n, {
                source: r,
                subscriber: t,
              });
            }),
            e
          );
        })(vt.a);
      function ar(t, e) {
        return (
          void 0 === e && (e = 0),
          function (n) {
            return n.lift(new ur(t, e));
          }
        );
      }
      var ur = (function () {
        function t(t, e) {
          (this.scheduler = t), (this.delay = e);
        }
        return (
          (t.prototype.call = function (t, e) {
            return new sr(e, this.delay, this.scheduler).subscribe(t);
          }),
          t
        );
      })();
      function cr(t, e) {
        return "function" === typeof e
          ? function (n) {
              return n.pipe(
                cr(function (n, r) {
                  return Object(W.a)(t(n, r)).pipe(
                    Object(Qt.a)(function (t, i) {
                      return e(n, t, r, i);
                    })
                  );
                })
              );
            }
          : function (e) {
              return e.lift(new lr(t));
            };
      }
      var lr = (function () {
          function t(t) {
            this.project = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new hr(t, this.project));
            }),
            t
          );
        })(),
        hr = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (r.project = n), (r.index = 0), r;
          }
          return (
            r.a(e, t),
            (e.prototype._next = function (t) {
              var e,
                n = this.index++;
              try {
                e = this.project(t, n);
              } catch (r) {
                return void this.destination.error(r);
              }
              this._innerSub(e);
            }),
            (e.prototype._innerSub = function (t) {
              var e = this.innerSubscription;
              e && e.unsubscribe();
              var n = new i.a(this),
                r = this.destination;
              r.add(n),
                (this.innerSubscription = Object(i.c)(t, n)),
                this.innerSubscription !== n && r.add(this.innerSubscription);
            }),
            (e.prototype._complete = function () {
              var e = this.innerSubscription;
              (e && !e.closed) || t.prototype._complete.call(this),
                this.unsubscribe();
            }),
            (e.prototype._unsubscribe = function () {
              this.innerSubscription = void 0;
            }),
            (e.prototype.notifyComplete = function () {
              (this.innerSubscription = void 0),
                this.isStopped && t.prototype._complete.call(this);
            }),
            (e.prototype.notifyNext = function (t) {
              this.destination.next(t);
            }),
            e
          );
        })(i.b);
      function fr() {
        return cr(he.a);
      }
      function dr(t, e) {
        return e
          ? cr(function () {
              return t;
            }, e)
          : cr(function () {
              return t;
            });
      }
      function pr(t) {
        return function (e) {
          return e.lift(new vr(t));
        };
      }
      var vr = (function () {
          function t(t) {
            this.notifier = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              var n = new br(t),
                r = Object(i.c)(this.notifier, new i.a(n));
              return r && !n.seenValue ? (n.add(r), e.subscribe(n)) : n;
            }),
            t
          );
        })(),
        br = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return (n.seenValue = !1), n;
          }
          return (
            r.a(e, t),
            (e.prototype.notifyNext = function () {
              (this.seenValue = !0), this.complete();
            }),
            (e.prototype.notifyComplete = function () {}),
            e
          );
        })(i.b);
      function yr(t, e) {
        return (
          void 0 === e && (e = !1),
          function (n) {
            return n.lift(new gr(t, e));
          }
        );
      }
      var gr = (function () {
          function t(t, e) {
            (this.predicate = t), (this.inclusive = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new mr(t, this.predicate, this.inclusive));
            }),
            t
          );
        })(),
        mr = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, e) || this;
            return (i.predicate = n), (i.inclusive = r), (i.index = 0), i;
          }
          return (
            r.a(e, t),
            (e.prototype._next = function (t) {
              var e,
                n = this.destination;
              try {
                e = this.predicate(t, this.index++);
              } catch (r) {
                return void n.error(r);
              }
              this.nextOrComplete(t, e);
            }),
            (e.prototype.nextOrComplete = function (t, e) {
              var n = this.destination;
              Boolean(e)
                ? n.next(t)
                : (this.inclusive && n.next(t), n.complete());
            }),
            e
          );
        })(p.a),
        wr = n(1022),
        _r = n(1001);
      function kr(t, e, n) {
        return function (r) {
          return r.lift(new xr(t, e, n));
        };
      }
      var xr = (function () {
          function t(t, e, n) {
            (this.nextOrObserver = t), (this.error = e), (this.complete = n);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new Er(t, this.nextOrObserver, this.error, this.complete)
              );
            }),
            t
          );
        })(),
        Er = (function (t) {
          function e(e, n, r, i) {
            var o = t.call(this, e) || this;
            return (
              (o._tapNext = wr.a),
              (o._tapError = wr.a),
              (o._tapComplete = wr.a),
              (o._tapError = r || wr.a),
              (o._tapComplete = i || wr.a),
              Object(_r.a)(n)
                ? ((o._context = o), (o._tapNext = n))
                : n &&
                  ((o._context = n),
                  (o._tapNext = n.next || wr.a),
                  (o._tapError = n.error || wr.a),
                  (o._tapComplete = n.complete || wr.a)),
              o
            );
          }
          return (
            r.a(e, t),
            (e.prototype._next = function (t) {
              try {
                this._tapNext.call(this._context, t);
              } catch (e) {
                return void this.destination.error(e);
              }
              this.destination.next(t);
            }),
            (e.prototype._error = function (t) {
              try {
                this._tapError.call(this._context, t);
              } catch (t) {
                return void this.destination.error(t);
              }
              this.destination.error(t);
            }),
            (e.prototype._complete = function () {
              try {
                this._tapComplete.call(this._context);
              } catch (t) {
                return void this.destination.error(t);
              }
              return this.destination.complete();
            }),
            e
          );
        })(p.a),
        Sr = { leading: !0, trailing: !1 };
      function Mr(t, e) {
        return (
          void 0 === e && (e = Sr),
          function (n) {
            return n.lift(new Cr(t, !!e.leading, !!e.trailing));
          }
        );
      }
      var Cr = (function () {
          function t(t, e, n) {
            (this.durationSelector = t),
              (this.leading = e),
              (this.trailing = n);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new Ar(t, this.durationSelector, this.leading, this.trailing)
              );
            }),
            t
          );
        })(),
        Ar = (function (t) {
          function e(e, n, r, i) {
            var o = t.call(this, e) || this;
            return (
              (o.destination = e),
              (o.durationSelector = n),
              (o._leading = r),
              (o._trailing = i),
              (o._hasValue = !1),
              o
            );
          }
          return (
            r.a(e, t),
            (e.prototype._next = function (t) {
              (this._hasValue = !0),
                (this._sendValue = t),
                this._throttled ||
                  (this._leading ? this.send() : this.throttle(t));
            }),
            (e.prototype.send = function () {
              var t = this._hasValue,
                e = this._sendValue;
              t && (this.destination.next(e), this.throttle(e)),
                (this._hasValue = !1),
                (this._sendValue = void 0);
            }),
            (e.prototype.throttle = function (t) {
              var e = this.tryDurationSelector(t);
              e && this.add((this._throttled = Object(i.c)(e, new i.a(this))));
            }),
            (e.prototype.tryDurationSelector = function (t) {
              try {
                return this.durationSelector(t);
              } catch (e) {
                return this.destination.error(e), null;
              }
            }),
            (e.prototype.throttlingDone = function () {
              var t = this._throttled,
                e = this._trailing;
              t && t.unsubscribe(),
                (this._throttled = void 0),
                e && this.send();
            }),
            (e.prototype.notifyNext = function () {
              this.throttlingDone();
            }),
            (e.prototype.notifyComplete = function () {
              this.throttlingDone();
            }),
            e
          );
        })(i.b);
      function Rr(t, e, n) {
        return (
          void 0 === e && (e = u.a),
          void 0 === n && (n = Sr),
          function (r) {
            return r.lift(new Or(t, e, n.leading, n.trailing));
          }
        );
      }
      var Or = (function () {
          function t(t, e, n, r) {
            (this.duration = t),
              (this.scheduler = e),
              (this.leading = n),
              (this.trailing = r);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new Ir(
                  t,
                  this.duration,
                  this.scheduler,
                  this.leading,
                  this.trailing
                )
              );
            }),
            t
          );
        })(),
        Ir = (function (t) {
          function e(e, n, r, i, o) {
            var s = t.call(this, e) || this;
            return (
              (s.duration = n),
              (s.scheduler = r),
              (s.leading = i),
              (s.trailing = o),
              (s._hasTrailingValue = !1),
              (s._trailingValue = null),
              s
            );
          }
          return (
            r.a(e, t),
            (e.prototype._next = function (t) {
              this.throttled
                ? this.trailing &&
                  ((this._trailingValue = t), (this._hasTrailingValue = !0))
                : (this.add(
                    (this.throttled = this.scheduler.schedule(
                      Tr,
                      this.duration,
                      { subscriber: this }
                    ))
                  ),
                  this.leading
                    ? this.destination.next(t)
                    : this.trailing &&
                      ((this._trailingValue = t),
                      (this._hasTrailingValue = !0)));
            }),
            (e.prototype._complete = function () {
              this._hasTrailingValue
                ? (this.destination.next(this._trailingValue),
                  this.destination.complete())
                : this.destination.complete();
            }),
            (e.prototype.clearThrottle = function () {
              var t = this.throttled;
              t &&
                (this.trailing &&
                  this._hasTrailingValue &&
                  (this.destination.next(this._trailingValue),
                  (this._trailingValue = null),
                  (this._hasTrailingValue = !1)),
                t.unsubscribe(),
                this.remove(t),
                (this.throttled = null));
            }),
            e
          );
        })(p.a);
      function Tr(t) {
        t.subscriber.clearThrottle();
      }
      var Nr = n(1025);
      function jr(t) {
        return (
          void 0 === t && (t = u.a),
          function (e) {
            return Object(Nr.a)(function () {
              return e.pipe(
                Oe(
                  function (e, n) {
                    var r = e.current;
                    return { value: n, current: t.now(), last: r };
                  },
                  { current: t.now(), value: void 0, last: void 0 }
                ),
                Object(Qt.a)(function (t) {
                  var e = t.current,
                    n = t.last,
                    r = t.value;
                  return new Lr(r, e - n);
                })
              );
            });
          }
        );
      }
      var Lr = (function () {
          return function (t, e) {
            (this.value = t), (this.interval = e);
          };
        })(),
        Pr = n(1060);
      function Dr(t, e, n) {
        return (
          void 0 === n && (n = u.a),
          function (r) {
            var i = ct(t),
              o = i ? +t - n.now() : Math.abs(t);
            return r.lift(new Br(o, i, e, n));
          }
        );
      }
      var Br = (function () {
          function t(t, e, n, r) {
            (this.waitFor = t),
              (this.absoluteTimeout = e),
              (this.withObservable = n),
              (this.scheduler = r);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new Hr(
                  t,
                  this.absoluteTimeout,
                  this.waitFor,
                  this.withObservable,
                  this.scheduler
                )
              );
            }),
            t
          );
        })(),
        Hr = (function (t) {
          function e(e, n, r, i, o) {
            var s = t.call(this, e) || this;
            return (
              (s.absoluteTimeout = n),
              (s.waitFor = r),
              (s.withObservable = i),
              (s.scheduler = o),
              s.scheduleTimeout(),
              s
            );
          }
          return (
            r.a(e, t),
            (e.dispatchTimeout = function (t) {
              var e = t.withObservable;
              t._unsubscribeAndRecycle(), t.add(Object(i.c)(e, new i.a(t)));
            }),
            (e.prototype.scheduleTimeout = function () {
              var t = this.action;
              t
                ? (this.action = t.schedule(this, this.waitFor))
                : this.add(
                    (this.action = this.scheduler.schedule(
                      e.dispatchTimeout,
                      this.waitFor,
                      this
                    ))
                  );
            }),
            (e.prototype._next = function (e) {
              this.absoluteTimeout || this.scheduleTimeout(),
                t.prototype._next.call(this, e);
            }),
            (e.prototype._unsubscribe = function () {
              (this.action = void 0),
                (this.scheduler = null),
                (this.withObservable = null);
            }),
            e
          );
        })(i.b),
        Fr = n(1021);
      function Ur(t, e) {
        return void 0 === e && (e = u.a), Dr(t, Object(Fr.a)(new Pr.a()), e);
      }
      function Wr(t) {
        return (
          void 0 === t && (t = u.a),
          Object(Qt.a)(function (e) {
            return new zr(e, t.now());
          })
        );
      }
      var zr = (function () {
        return function (t, e) {
          (this.value = t), (this.timestamp = e);
        };
      })();
      function qr(t, e, n) {
        return 0 === n ? [e] : (t.push(e), t);
      }
      function Vr() {
        return je(qr, []);
      }
      function Yr(t) {
        return function (e) {
          return e.lift(new Gr(t));
        };
      }
      var Gr = (function () {
          function t(t) {
            this.windowBoundaries = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              var n = new Jr(t),
                r = e.subscribe(n);
              return (
                r.closed ||
                  n.add(Object(i.c)(this.windowBoundaries, new i.a(n))),
                r
              );
            }),
            t
          );
        })(),
        Jr = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return (n.window = new on.a()), e.next(n.window), n;
          }
          return (
            r.a(e, t),
            (e.prototype.notifyNext = function () {
              this.openWindow();
            }),
            (e.prototype.notifyError = function (t) {
              this._error(t);
            }),
            (e.prototype.notifyComplete = function () {
              this._complete();
            }),
            (e.prototype._next = function (t) {
              this.window.next(t);
            }),
            (e.prototype._error = function (t) {
              this.window.error(t), this.destination.error(t);
            }),
            (e.prototype._complete = function () {
              this.window.complete(), this.destination.complete();
            }),
            (e.prototype._unsubscribe = function () {
              this.window = null;
            }),
            (e.prototype.openWindow = function () {
              var t = this.window;
              t && t.complete();
              var e = this.destination,
                n = (this.window = new on.a());
              e.next(n);
            }),
            e
          );
        })(i.b);
      function Kr(t, e) {
        return (
          void 0 === e && (e = 0),
          function (n) {
            return n.lift(new Xr(t, e));
          }
        );
      }
      var Xr = (function () {
          function t(t, e) {
            (this.windowSize = t), (this.startWindowEvery = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new Qr(t, this.windowSize, this.startWindowEvery)
              );
            }),
            t
          );
        })(),
        Qr = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, e) || this;
            return (
              (i.destination = e),
              (i.windowSize = n),
              (i.startWindowEvery = r),
              (i.windows = [new on.a()]),
              (i.count = 0),
              e.next(i.windows[0]),
              i
            );
          }
          return (
            r.a(e, t),
            (e.prototype._next = function (t) {
              for (
                var e =
                    this.startWindowEvery > 0
                      ? this.startWindowEvery
                      : this.windowSize,
                  n = this.destination,
                  r = this.windowSize,
                  i = this.windows,
                  o = i.length,
                  s = 0;
                s < o && !this.closed;
                s++
              )
                i[s].next(t);
              var a = this.count - r + 1;
              if (
                (a >= 0 && a % e === 0 && !this.closed && i.shift().complete(),
                ++this.count % e === 0 && !this.closed)
              ) {
                var u = new on.a();
                i.push(u), n.next(u);
              }
            }),
            (e.prototype._error = function (t) {
              var e = this.windows;
              if (e) for (; e.length > 0 && !this.closed; ) e.shift().error(t);
              this.destination.error(t);
            }),
            (e.prototype._complete = function () {
              var t = this.windows;
              if (t)
                for (; t.length > 0 && !this.closed; ) t.shift().complete();
              this.destination.complete();
            }),
            (e.prototype._unsubscribe = function () {
              (this.count = 0), (this.windows = null);
            }),
            e
          );
        })(p.a);
      function Zr(t) {
        var e = u.a,
          n = null,
          r = Number.POSITIVE_INFINITY;
        return (
          Object(m.a)(arguments[3]) && (e = arguments[3]),
          Object(m.a)(arguments[2])
            ? (e = arguments[2])
            : Object(or.a)(arguments[2]) && (r = Number(arguments[2])),
          Object(m.a)(arguments[1])
            ? (e = arguments[1])
            : Object(or.a)(arguments[1]) && (n = Number(arguments[1])),
          function (i) {
            return i.lift(new $r(t, n, r, e));
          }
        );
      }
      var $r = (function () {
          function t(t, e, n, r) {
            (this.windowTimeSpan = t),
              (this.windowCreationInterval = e),
              (this.maxWindowSize = n),
              (this.scheduler = r);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new ei(
                  t,
                  this.windowTimeSpan,
                  this.windowCreationInterval,
                  this.maxWindowSize,
                  this.scheduler
                )
              );
            }),
            t
          );
        })(),
        ti = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e._numberOfNextedValues = 0), e;
          }
          return (
            r.a(e, t),
            (e.prototype.next = function (e) {
              this._numberOfNextedValues++, t.prototype.next.call(this, e);
            }),
            Object.defineProperty(e.prototype, "numberOfNextedValues", {
              get: function () {
                return this._numberOfNextedValues;
              },
              enumerable: !0,
              configurable: !0,
            }),
            e
          );
        })(on.a),
        ei = (function (t) {
          function e(e, n, r, i, o) {
            var s = t.call(this, e) || this;
            (s.destination = e),
              (s.windowTimeSpan = n),
              (s.windowCreationInterval = r),
              (s.maxWindowSize = i),
              (s.scheduler = o),
              (s.windows = []);
            var a = s.openWindow();
            if (null !== r && r >= 0) {
              var u = { subscriber: s, window: a, context: null },
                c = {
                  windowTimeSpan: n,
                  windowCreationInterval: r,
                  subscriber: s,
                  scheduler: o,
                };
              s.add(o.schedule(ii, n, u)), s.add(o.schedule(ri, r, c));
            } else {
              var l = { subscriber: s, window: a, windowTimeSpan: n };
              s.add(o.schedule(ni, n, l));
            }
            return s;
          }
          return (
            r.a(e, t),
            (e.prototype._next = function (t) {
              for (var e = this.windows, n = e.length, r = 0; r < n; r++) {
                var i = e[r];
                i.closed ||
                  (i.next(t),
                  i.numberOfNextedValues >= this.maxWindowSize &&
                    this.closeWindow(i));
              }
            }),
            (e.prototype._error = function (t) {
              for (var e = this.windows; e.length > 0; ) e.shift().error(t);
              this.destination.error(t);
            }),
            (e.prototype._complete = function () {
              for (var t = this.windows; t.length > 0; ) {
                var e = t.shift();
                e.closed || e.complete();
              }
              this.destination.complete();
            }),
            (e.prototype.openWindow = function () {
              var t = new ti();
              return this.windows.push(t), this.destination.next(t), t;
            }),
            (e.prototype.closeWindow = function (t) {
              t.complete();
              var e = this.windows;
              e.splice(e.indexOf(t), 1);
            }),
            e
          );
        })(p.a);
      function ni(t) {
        var e = t.subscriber,
          n = t.windowTimeSpan,
          r = t.window;
        r && e.closeWindow(r), (t.window = e.openWindow()), this.schedule(t, n);
      }
      function ri(t) {
        var e = t.windowTimeSpan,
          n = t.subscriber,
          r = t.scheduler,
          i = t.windowCreationInterval,
          o = n.openWindow(),
          s = this,
          a = { action: s, subscription: null },
          u = { subscriber: n, window: o, context: a };
        (a.subscription = r.schedule(ii, e, u)),
          s.add(a.subscription),
          s.schedule(t, i);
      }
      function ii(t) {
        var e = t.subscriber,
          n = t.window,
          r = t.context;
        r && r.action && r.subscription && r.action.remove(r.subscription),
          e.closeWindow(n);
      }
      function oi(t, e) {
        return function (n) {
          return n.lift(new si(t, e));
        };
      }
      var si = (function () {
          function t(t, e) {
            (this.openings = t), (this.closingSelector = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new ai(t, this.openings, this.closingSelector)
              );
            }),
            t
          );
        })(),
        ai = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, e) || this;
            return (
              (i.openings = n),
              (i.closingSelector = r),
              (i.contexts = []),
              i.add((i.openSubscription = Object(A.a)(i, n, n))),
              i
            );
          }
          return (
            r.a(e, t),
            (e.prototype._next = function (t) {
              var e = this.contexts;
              if (e)
                for (var n = e.length, r = 0; r < n; r++) e[r].window.next(t);
            }),
            (e.prototype._error = function (e) {
              var n = this.contexts;
              if (((this.contexts = null), n))
                for (var r = n.length, i = -1; ++i < r; ) {
                  var o = n[i];
                  o.window.error(e), o.subscription.unsubscribe();
                }
              t.prototype._error.call(this, e);
            }),
            (e.prototype._complete = function () {
              var e = this.contexts;
              if (((this.contexts = null), e))
                for (var n = e.length, r = -1; ++r < n; ) {
                  var i = e[r];
                  i.window.complete(), i.subscription.unsubscribe();
                }
              t.prototype._complete.call(this);
            }),
            (e.prototype._unsubscribe = function () {
              var t = this.contexts;
              if (((this.contexts = null), t))
                for (var e = t.length, n = -1; ++n < e; ) {
                  var r = t[n];
                  r.window.unsubscribe(), r.subscription.unsubscribe();
                }
            }),
            (e.prototype.notifyNext = function (t, e, n, r, i) {
              if (t === this.openings) {
                var o = void 0;
                try {
                  o = (0, this.closingSelector)(e);
                } catch (l) {
                  return this.error(l);
                }
                var s = new on.a(),
                  a = new C.a(),
                  u = { window: s, subscription: a };
                this.contexts.push(u);
                var c = Object(A.a)(this, o, u);
                c.closed
                  ? this.closeWindow(this.contexts.length - 1)
                  : ((c.context = u), a.add(c)),
                  this.destination.next(s);
              } else this.closeWindow(this.contexts.indexOf(t));
            }),
            (e.prototype.notifyError = function (t) {
              this.error(t);
            }),
            (e.prototype.notifyComplete = function (t) {
              t !== this.openSubscription &&
                this.closeWindow(this.contexts.indexOf(t.context));
            }),
            (e.prototype.closeWindow = function (t) {
              if (-1 !== t) {
                var e = this.contexts,
                  n = e[t],
                  r = n.window,
                  i = n.subscription;
                e.splice(t, 1), r.complete(), i.unsubscribe();
              }
            }),
            e
          );
        })(R.a);
      function ui(t) {
        return function (e) {
          return e.lift(new ci(t));
        };
      }
      var ci = (function () {
          function t(t) {
            this.closingSelector = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new li(t, this.closingSelector));
            }),
            t
          );
        })(),
        li = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (
              (r.destination = e), (r.closingSelector = n), r.openWindow(), r
            );
          }
          return (
            r.a(e, t),
            (e.prototype.notifyNext = function (t, e, n, r, i) {
              this.openWindow(i);
            }),
            (e.prototype.notifyError = function (t) {
              this._error(t);
            }),
            (e.prototype.notifyComplete = function (t) {
              this.openWindow(t);
            }),
            (e.prototype._next = function (t) {
              this.window.next(t);
            }),
            (e.prototype._error = function (t) {
              this.window.error(t),
                this.destination.error(t),
                this.unsubscribeClosingNotification();
            }),
            (e.prototype._complete = function () {
              this.window.complete(),
                this.destination.complete(),
                this.unsubscribeClosingNotification();
            }),
            (e.prototype.unsubscribeClosingNotification = function () {
              this.closingNotification &&
                this.closingNotification.unsubscribe();
            }),
            (e.prototype.openWindow = function (t) {
              void 0 === t && (t = null),
                t && (this.remove(t), t.unsubscribe());
              var e = this.window;
              e && e.complete();
              var n,
                r = (this.window = new on.a());
              this.destination.next(r);
              try {
                n = (0, this.closingSelector)();
              } catch (i) {
                return this.destination.error(i), void this.window.error(i);
              }
              this.add((this.closingNotification = Object(A.a)(this, n)));
            }),
            e
          );
        })(R.a);
      function hi() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return function (e) {
          var n;
          "function" === typeof t[t.length - 1] && (n = t.pop());
          var r = t;
          return e.lift(new fi(r, n));
        };
      }
      var fi = (function () {
          function t(t, e) {
            (this.observables = t), (this.project = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new di(t, this.observables, this.project));
            }),
            t
          );
        })(),
        di = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, e) || this;
            (i.observables = n), (i.project = r), (i.toRespond = []);
            var o = n.length;
            i.values = new Array(o);
            for (var s = 0; s < o; s++) i.toRespond.push(s);
            for (s = 0; s < o; s++) {
              var a = n[s];
              i.add(Object(A.a)(i, a, void 0, s));
            }
            return i;
          }
          return (
            r.a(e, t),
            (e.prototype.notifyNext = function (t, e, n) {
              this.values[n] = e;
              var r = this.toRespond;
              if (r.length > 0) {
                var i = r.indexOf(n);
                -1 !== i && r.splice(i, 1);
              }
            }),
            (e.prototype.notifyComplete = function () {}),
            (e.prototype._next = function (t) {
              if (0 === this.toRespond.length) {
                var e = [t].concat(this.values);
                this.project ? this._tryProject(e) : this.destination.next(e);
              }
            }),
            (e.prototype._tryProject = function (t) {
              var e;
              try {
                e = this.project.apply(this, t);
              } catch (n) {
                return void this.destination.error(n);
              }
              this.destination.next(e);
            }),
            e
          );
        })(R.a),
        pi = n(1027);
      function vi() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return function (e) {
          return e.lift.call(pi.b.apply(void 0, [e].concat(t)));
        };
      }
      function bi(t) {
        return function (e) {
          return e.lift(new pi.a(t));
        };
      }
    },
    1011: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var r = n(967),
        i = (function (t) {
          function e(e, n) {
            var r = t.call(this, e, n) || this;
            return (r.scheduler = e), (r.work = n), (r.pending = !1), r;
          }
          return (
            r.a(e, t),
            (e.prototype.schedule = function (t, e) {
              if ((void 0 === e && (e = 0), this.closed)) return this;
              this.state = t;
              var n = this.id,
                r = this.scheduler;
              return (
                null != n && (this.id = this.recycleAsyncId(r, n, e)),
                (this.pending = !0),
                (this.delay = e),
                (this.id = this.id || this.requestAsyncId(r, this.id, e)),
                this
              );
            }),
            (e.prototype.requestAsyncId = function (t, e, n) {
              return (
                void 0 === n && (n = 0), setInterval(t.flush.bind(t, this), n)
              );
            }),
            (e.prototype.recycleAsyncId = function (t, e, n) {
              if (
                (void 0 === n && (n = 0),
                null !== n && this.delay === n && !1 === this.pending)
              )
                return e;
              clearInterval(e);
            }),
            (e.prototype.execute = function (t, e) {
              if (this.closed) return new Error("executing a cancelled action");
              this.pending = !1;
              var n = this._execute(t, e);
              if (n) return n;
              !1 === this.pending &&
                null != this.id &&
                (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
            }),
            (e.prototype._execute = function (t, e) {
              var n = !1,
                r = void 0;
              try {
                this.work(t);
              } catch (i) {
                (n = !0), (r = (!!i && i) || new Error(i));
              }
              if (n) return this.unsubscribe(), r;
            }),
            (e.prototype._unsubscribe = function () {
              var t = this.id,
                e = this.scheduler,
                n = e.actions,
                r = n.indexOf(this);
              (this.work = null),
                (this.state = null),
                (this.pending = !1),
                (this.scheduler = null),
                -1 !== r && n.splice(r, 1),
                null != t && (this.id = this.recycleAsyncId(e, t, null)),
                (this.delay = null);
            }),
            e
          );
        })(
          (function (t) {
            function e(e, n) {
              return t.call(this) || this;
            }
            return (
              r.a(e, t),
              (e.prototype.schedule = function (t, e) {
                return void 0 === e && (e = 0), this;
              }),
              e
            );
          })(n(971).a)
        );
    },
    1012: function (t, e, n) {
      var r = n(1035);
      function i(e, n, o) {
        return (
          "undefined" !== typeof Reflect && Reflect.get
            ? (t.exports = i = Reflect.get)
            : (t.exports = i =
                function (t, e, n) {
                  var i = r(t, e);
                  if (i) {
                    var o = Object.getOwnPropertyDescriptor(i, e);
                    return o.get ? o.get.call(n) : o.value;
                  }
                }),
          i(e, n, o || e)
        );
      }
      t.exports = i;
    },
    1015: function (t, e, n) {
      "use strict";
      var r = n(91),
        i = n(92),
        o = n(273),
        s = n(274);
      function a(t, e, n) {
        try {
          Reflect.apply(t, e, n);
        } catch (r) {
          setTimeout(function () {
            throw r;
          });
        }
      }
      function u(t) {
        for (var e = t.length, n = new Array(e), r = 0; r < e; r += 1)
          n[r] = t[r];
        return n;
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var c = (function (t) {
        o(n, t);
        var e = s(n);
        function n() {
          return r(this, n), e.apply(this, arguments);
        }
        return (
          i(n, [
            {
              key: "emit",
              value: function (t) {
                var e = "error" === t,
                  n = this._events;
                if (void 0 !== n) e = e && void 0 === n.error;
                else if (!e) return !1;
                for (
                  var r = arguments.length,
                    i = new Array(r > 1 ? r - 1 : 0),
                    o = 1;
                  o < r;
                  o++
                )
                  i[o - 1] = arguments[o];
                if (e) {
                  var s;
                  if ((i.length > 0 && (s = i[0]), s instanceof Error)) throw s;
                  var c = new Error(
                    "Unhandled error.".concat(
                      s ? " (".concat(s.message, ")") : ""
                    )
                  );
                  throw ((c.context = s), c);
                }
                var l = n[t];
                if (void 0 === l) return !1;
                if ("function" === typeof l) a(l, this, i);
                else
                  for (var h = l.length, f = u(l), d = 0; d < h; d += 1)
                    a(f[d], this, i);
                return !0;
              },
            },
          ]),
          n
        );
      })(n(193).EventEmitter);
      e.default = c;
    },
    1016: function (t, e, n) {
      (function (t) {
        !(function (t, e) {
          "use strict";
          function r(t, e) {
            if (!t) throw new Error(e || "Assertion failed");
          }
          function i(t, e) {
            t.super_ = e;
            var n = function () {};
            (n.prototype = e.prototype),
              (t.prototype = new n()),
              (t.prototype.constructor = t);
          }
          function o(t, e, n) {
            if (o.isBN(t)) return t;
            (this.negative = 0),
              (this.words = null),
              (this.length = 0),
              (this.red = null),
              null !== t &&
                (("le" !== e && "be" !== e) || ((n = e), (e = 10)),
                this._init(t || 0, e || 10, n || "be"));
          }
          var s;
          "object" === typeof t ? (t.exports = o) : (e.BN = o),
            (o.BN = o),
            (o.wordSize = 26);
          try {
            s =
              "undefined" !== typeof window &&
              "undefined" !== typeof window.Buffer
                ? window.Buffer
                : n(1209).Buffer;
          } catch (A) {}
          function a(t, e) {
            var n = t.charCodeAt(e);
            return n >= 48 && n <= 57
              ? n - 48
              : n >= 65 && n <= 70
              ? n - 55
              : n >= 97 && n <= 102
              ? n - 87
              : void r(!1, "Invalid character in " + t);
          }
          function u(t, e, n) {
            var r = a(t, n);
            return n - 1 >= e && (r |= a(t, n - 1) << 4), r;
          }
          function c(t, e, n, i) {
            for (
              var o = 0, s = 0, a = Math.min(t.length, n), u = e;
              u < a;
              u++
            ) {
              var c = t.charCodeAt(u) - 48;
              (o *= i),
                (s = c >= 49 ? c - 49 + 10 : c >= 17 ? c - 17 + 10 : c),
                r(c >= 0 && s < i, "Invalid character"),
                (o += s);
            }
            return o;
          }
          function l(t, e) {
            (t.words = e.words),
              (t.length = e.length),
              (t.negative = e.negative),
              (t.red = e.red);
          }
          if (
            ((o.isBN = function (t) {
              return (
                t instanceof o ||
                (null !== t &&
                  "object" === typeof t &&
                  t.constructor.wordSize === o.wordSize &&
                  Array.isArray(t.words))
              );
            }),
            (o.max = function (t, e) {
              return t.cmp(e) > 0 ? t : e;
            }),
            (o.min = function (t, e) {
              return t.cmp(e) < 0 ? t : e;
            }),
            (o.prototype._init = function (t, e, n) {
              if ("number" === typeof t) return this._initNumber(t, e, n);
              if ("object" === typeof t) return this._initArray(t, e, n);
              "hex" === e && (e = 16), r(e === (0 | e) && e >= 2 && e <= 36);
              var i = 0;
              "-" === (t = t.toString().replace(/\s+/g, ""))[0] &&
                (i++, (this.negative = 1)),
                i < t.length &&
                  (16 === e
                    ? this._parseHex(t, i, n)
                    : (this._parseBase(t, e, i),
                      "le" === n && this._initArray(this.toArray(), e, n)));
            }),
            (o.prototype._initNumber = function (t, e, n) {
              t < 0 && ((this.negative = 1), (t = -t)),
                t < 67108864
                  ? ((this.words = [67108863 & t]), (this.length = 1))
                  : t < 4503599627370496
                  ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]),
                    (this.length = 2))
                  : (r(t < 9007199254740992),
                    (this.words = [67108863 & t, (t / 67108864) & 67108863, 1]),
                    (this.length = 3)),
                "le" === n && this._initArray(this.toArray(), e, n);
            }),
            (o.prototype._initArray = function (t, e, n) {
              if ((r("number" === typeof t.length), t.length <= 0))
                return (this.words = [0]), (this.length = 1), this;
              (this.length = Math.ceil(t.length / 3)),
                (this.words = new Array(this.length));
              for (var i = 0; i < this.length; i++) this.words[i] = 0;
              var o,
                s,
                a = 0;
              if ("be" === n)
                for (i = t.length - 1, o = 0; i >= 0; i -= 3)
                  (s = t[i] | (t[i - 1] << 8) | (t[i - 2] << 16)),
                    (this.words[o] |= (s << a) & 67108863),
                    (this.words[o + 1] = (s >>> (26 - a)) & 67108863),
                    (a += 24) >= 26 && ((a -= 26), o++);
              else if ("le" === n)
                for (i = 0, o = 0; i < t.length; i += 3)
                  (s = t[i] | (t[i + 1] << 8) | (t[i + 2] << 16)),
                    (this.words[o] |= (s << a) & 67108863),
                    (this.words[o + 1] = (s >>> (26 - a)) & 67108863),
                    (a += 24) >= 26 && ((a -= 26), o++);
              return this._strip();
            }),
            (o.prototype._parseHex = function (t, e, n) {
              (this.length = Math.ceil((t.length - e) / 6)),
                (this.words = new Array(this.length));
              for (var r = 0; r < this.length; r++) this.words[r] = 0;
              var i,
                o = 0,
                s = 0;
              if ("be" === n)
                for (r = t.length - 1; r >= e; r -= 2)
                  (i = u(t, e, r) << o),
                    (this.words[s] |= 67108863 & i),
                    o >= 18
                      ? ((o -= 18), (s += 1), (this.words[s] |= i >>> 26))
                      : (o += 8);
              else
                for (
                  r = (t.length - e) % 2 === 0 ? e + 1 : e;
                  r < t.length;
                  r += 2
                )
                  (i = u(t, e, r) << o),
                    (this.words[s] |= 67108863 & i),
                    o >= 18
                      ? ((o -= 18), (s += 1), (this.words[s] |= i >>> 26))
                      : (o += 8);
              this._strip();
            }),
            (o.prototype._parseBase = function (t, e, n) {
              (this.words = [0]), (this.length = 1);
              for (var r = 0, i = 1; i <= 67108863; i *= e) r++;
              r--, (i = (i / e) | 0);
              for (
                var o = t.length - n,
                  s = o % r,
                  a = Math.min(o, o - s) + n,
                  u = 0,
                  l = n;
                l < a;
                l += r
              )
                (u = c(t, l, l + r, e)),
                  this.imuln(i),
                  this.words[0] + u < 67108864
                    ? (this.words[0] += u)
                    : this._iaddn(u);
              if (0 !== s) {
                var h = 1;
                for (u = c(t, l, t.length, e), l = 0; l < s; l++) h *= e;
                this.imuln(h),
                  this.words[0] + u < 67108864
                    ? (this.words[0] += u)
                    : this._iaddn(u);
              }
              this._strip();
            }),
            (o.prototype.copy = function (t) {
              t.words = new Array(this.length);
              for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
              (t.length = this.length),
                (t.negative = this.negative),
                (t.red = this.red);
            }),
            (o.prototype._move = function (t) {
              l(t, this);
            }),
            (o.prototype.clone = function () {
              var t = new o(null);
              return this.copy(t), t;
            }),
            (o.prototype._expand = function (t) {
              for (; this.length < t; ) this.words[this.length++] = 0;
              return this;
            }),
            (o.prototype._strip = function () {
              for (; this.length > 1 && 0 === this.words[this.length - 1]; )
                this.length--;
              return this._normSign();
            }),
            (o.prototype._normSign = function () {
              return (
                1 === this.length && 0 === this.words[0] && (this.negative = 0),
                this
              );
            }),
            "undefined" !== typeof Symbol && "function" === typeof Symbol.for)
          )
            try {
              o.prototype[Symbol.for("nodejs.util.inspect.custom")] = h;
            } catch (A) {
              o.prototype.inspect = h;
            }
          else o.prototype.inspect = h;
          function h() {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
          }
          var f = [
              "",
              "0",
              "00",
              "000",
              "0000",
              "00000",
              "000000",
              "0000000",
              "00000000",
              "000000000",
              "0000000000",
              "00000000000",
              "000000000000",
              "0000000000000",
              "00000000000000",
              "000000000000000",
              "0000000000000000",
              "00000000000000000",
              "000000000000000000",
              "0000000000000000000",
              "00000000000000000000",
              "000000000000000000000",
              "0000000000000000000000",
              "00000000000000000000000",
              "000000000000000000000000",
              "0000000000000000000000000",
            ],
            d = [
              0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6,
              6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            ],
            p = [
              0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
              16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
              11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
              5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
              20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
              60466176,
            ];
          (o.prototype.toString = function (t, e) {
            var n;
            if (((e = 0 | e || 1), 16 === (t = t || 10) || "hex" === t)) {
              n = "";
              for (var i = 0, o = 0, s = 0; s < this.length; s++) {
                var a = this.words[s],
                  u = (16777215 & ((a << i) | o)).toString(16);
                (n =
                  0 !== (o = (a >>> (24 - i)) & 16777215) ||
                  s !== this.length - 1
                    ? f[6 - u.length] + u + n
                    : u + n),
                  (i += 2) >= 26 && ((i -= 26), s--);
              }
              for (0 !== o && (n = o.toString(16) + n); n.length % e !== 0; )
                n = "0" + n;
              return 0 !== this.negative && (n = "-" + n), n;
            }
            if (t === (0 | t) && t >= 2 && t <= 36) {
              var c = d[t],
                l = p[t];
              n = "";
              var h = this.clone();
              for (h.negative = 0; !h.isZero(); ) {
                var v = h.modrn(l).toString(t);
                n = (h = h.idivn(l)).isZero() ? v + n : f[c - v.length] + v + n;
              }
              for (this.isZero() && (n = "0" + n); n.length % e !== 0; )
                n = "0" + n;
              return 0 !== this.negative && (n = "-" + n), n;
            }
            r(!1, "Base should be between 2 and 36");
          }),
            (o.prototype.toNumber = function () {
              var t = this.words[0];
              return (
                2 === this.length
                  ? (t += 67108864 * this.words[1])
                  : 3 === this.length && 1 === this.words[2]
                  ? (t += 4503599627370496 + 67108864 * this.words[1])
                  : this.length > 2 &&
                    r(!1, "Number can only safely store up to 53 bits"),
                0 !== this.negative ? -t : t
              );
            }),
            (o.prototype.toJSON = function () {
              return this.toString(16, 2);
            }),
            s &&
              (o.prototype.toBuffer = function (t, e) {
                return this.toArrayLike(s, t, e);
              }),
            (o.prototype.toArray = function (t, e) {
              return this.toArrayLike(Array, t, e);
            });
          function v(t, e, n) {
            n.negative = e.negative ^ t.negative;
            var r = (t.length + e.length) | 0;
            (n.length = r), (r = (r - 1) | 0);
            var i = 0 | t.words[0],
              o = 0 | e.words[0],
              s = i * o,
              a = 67108863 & s,
              u = (s / 67108864) | 0;
            n.words[0] = a;
            for (var c = 1; c < r; c++) {
              for (
                var l = u >>> 26,
                  h = 67108863 & u,
                  f = Math.min(c, e.length - 1),
                  d = Math.max(0, c - t.length + 1);
                d <= f;
                d++
              ) {
                var p = (c - d) | 0;
                (l +=
                  ((s = (i = 0 | t.words[p]) * (o = 0 | e.words[d]) + h) /
                    67108864) |
                  0),
                  (h = 67108863 & s);
              }
              (n.words[c] = 0 | h), (u = 0 | l);
            }
            return 0 !== u ? (n.words[c] = 0 | u) : n.length--, n._strip();
          }
          (o.prototype.toArrayLike = function (t, e, n) {
            this._strip();
            var i = this.byteLength(),
              o = n || Math.max(1, i);
            r(i <= o, "byte array longer than desired length"),
              r(o > 0, "Requested array length <= 0");
            var s = (function (t, e) {
              return t.allocUnsafe ? t.allocUnsafe(e) : new t(e);
            })(t, o);
            return this["_toArrayLike" + ("le" === e ? "LE" : "BE")](s, i), s;
          }),
            (o.prototype._toArrayLikeLE = function (t, e) {
              for (var n = 0, r = 0, i = 0, o = 0; i < this.length; i++) {
                var s = (this.words[i] << o) | r;
                (t[n++] = 255 & s),
                  n < t.length && (t[n++] = (s >> 8) & 255),
                  n < t.length && (t[n++] = (s >> 16) & 255),
                  6 === o
                    ? (n < t.length && (t[n++] = (s >> 24) & 255),
                      (r = 0),
                      (o = 0))
                    : ((r = s >>> 24), (o += 2));
              }
              if (n < t.length) for (t[n++] = r; n < t.length; ) t[n++] = 0;
            }),
            (o.prototype._toArrayLikeBE = function (t, e) {
              for (
                var n = t.length - 1, r = 0, i = 0, o = 0;
                i < this.length;
                i++
              ) {
                var s = (this.words[i] << o) | r;
                (t[n--] = 255 & s),
                  n >= 0 && (t[n--] = (s >> 8) & 255),
                  n >= 0 && (t[n--] = (s >> 16) & 255),
                  6 === o
                    ? (n >= 0 && (t[n--] = (s >> 24) & 255), (r = 0), (o = 0))
                    : ((r = s >>> 24), (o += 2));
              }
              if (n >= 0) for (t[n--] = r; n >= 0; ) t[n--] = 0;
            }),
            Math.clz32
              ? (o.prototype._countBits = function (t) {
                  return 32 - Math.clz32(t);
                })
              : (o.prototype._countBits = function (t) {
                  var e = t,
                    n = 0;
                  return (
                    e >= 4096 && ((n += 13), (e >>>= 13)),
                    e >= 64 && ((n += 7), (e >>>= 7)),
                    e >= 8 && ((n += 4), (e >>>= 4)),
                    e >= 2 && ((n += 2), (e >>>= 2)),
                    n + e
                  );
                }),
            (o.prototype._zeroBits = function (t) {
              if (0 === t) return 26;
              var e = t,
                n = 0;
              return (
                0 === (8191 & e) && ((n += 13), (e >>>= 13)),
                0 === (127 & e) && ((n += 7), (e >>>= 7)),
                0 === (15 & e) && ((n += 4), (e >>>= 4)),
                0 === (3 & e) && ((n += 2), (e >>>= 2)),
                0 === (1 & e) && n++,
                n
              );
            }),
            (o.prototype.bitLength = function () {
              var t = this.words[this.length - 1],
                e = this._countBits(t);
              return 26 * (this.length - 1) + e;
            }),
            (o.prototype.zeroBits = function () {
              if (this.isZero()) return 0;
              for (var t = 0, e = 0; e < this.length; e++) {
                var n = this._zeroBits(this.words[e]);
                if (((t += n), 26 !== n)) break;
              }
              return t;
            }),
            (o.prototype.byteLength = function () {
              return Math.ceil(this.bitLength() / 8);
            }),
            (o.prototype.toTwos = function (t) {
              return 0 !== this.negative
                ? this.abs().inotn(t).iaddn(1)
                : this.clone();
            }),
            (o.prototype.fromTwos = function (t) {
              return this.testn(t - 1)
                ? this.notn(t).iaddn(1).ineg()
                : this.clone();
            }),
            (o.prototype.isNeg = function () {
              return 0 !== this.negative;
            }),
            (o.prototype.neg = function () {
              return this.clone().ineg();
            }),
            (o.prototype.ineg = function () {
              return this.isZero() || (this.negative ^= 1), this;
            }),
            (o.prototype.iuor = function (t) {
              for (; this.length < t.length; ) this.words[this.length++] = 0;
              for (var e = 0; e < t.length; e++)
                this.words[e] = this.words[e] | t.words[e];
              return this._strip();
            }),
            (o.prototype.ior = function (t) {
              return r(0 === (this.negative | t.negative)), this.iuor(t);
            }),
            (o.prototype.or = function (t) {
              return this.length > t.length
                ? this.clone().ior(t)
                : t.clone().ior(this);
            }),
            (o.prototype.uor = function (t) {
              return this.length > t.length
                ? this.clone().iuor(t)
                : t.clone().iuor(this);
            }),
            (o.prototype.iuand = function (t) {
              var e;
              e = this.length > t.length ? t : this;
              for (var n = 0; n < e.length; n++)
                this.words[n] = this.words[n] & t.words[n];
              return (this.length = e.length), this._strip();
            }),
            (o.prototype.iand = function (t) {
              return r(0 === (this.negative | t.negative)), this.iuand(t);
            }),
            (o.prototype.and = function (t) {
              return this.length > t.length
                ? this.clone().iand(t)
                : t.clone().iand(this);
            }),
            (o.prototype.uand = function (t) {
              return this.length > t.length
                ? this.clone().iuand(t)
                : t.clone().iuand(this);
            }),
            (o.prototype.iuxor = function (t) {
              var e, n;
              this.length > t.length
                ? ((e = this), (n = t))
                : ((e = t), (n = this));
              for (var r = 0; r < n.length; r++)
                this.words[r] = e.words[r] ^ n.words[r];
              if (this !== e)
                for (; r < e.length; r++) this.words[r] = e.words[r];
              return (this.length = e.length), this._strip();
            }),
            (o.prototype.ixor = function (t) {
              return r(0 === (this.negative | t.negative)), this.iuxor(t);
            }),
            (o.prototype.xor = function (t) {
              return this.length > t.length
                ? this.clone().ixor(t)
                : t.clone().ixor(this);
            }),
            (o.prototype.uxor = function (t) {
              return this.length > t.length
                ? this.clone().iuxor(t)
                : t.clone().iuxor(this);
            }),
            (o.prototype.inotn = function (t) {
              r("number" === typeof t && t >= 0);
              var e = 0 | Math.ceil(t / 26),
                n = t % 26;
              this._expand(e), n > 0 && e--;
              for (var i = 0; i < e; i++)
                this.words[i] = 67108863 & ~this.words[i];
              return (
                n > 0 &&
                  (this.words[i] = ~this.words[i] & (67108863 >> (26 - n))),
                this._strip()
              );
            }),
            (o.prototype.notn = function (t) {
              return this.clone().inotn(t);
            }),
            (o.prototype.setn = function (t, e) {
              r("number" === typeof t && t >= 0);
              var n = (t / 26) | 0,
                i = t % 26;
              return (
                this._expand(n + 1),
                (this.words[n] = e
                  ? this.words[n] | (1 << i)
                  : this.words[n] & ~(1 << i)),
                this._strip()
              );
            }),
            (o.prototype.iadd = function (t) {
              var e, n, r;
              if (0 !== this.negative && 0 === t.negative)
                return (
                  (this.negative = 0),
                  (e = this.isub(t)),
                  (this.negative ^= 1),
                  this._normSign()
                );
              if (0 === this.negative && 0 !== t.negative)
                return (
                  (t.negative = 0),
                  (e = this.isub(t)),
                  (t.negative = 1),
                  e._normSign()
                );
              this.length > t.length
                ? ((n = this), (r = t))
                : ((n = t), (r = this));
              for (var i = 0, o = 0; o < r.length; o++)
                (e = (0 | n.words[o]) + (0 | r.words[o]) + i),
                  (this.words[o] = 67108863 & e),
                  (i = e >>> 26);
              for (; 0 !== i && o < n.length; o++)
                (e = (0 | n.words[o]) + i),
                  (this.words[o] = 67108863 & e),
                  (i = e >>> 26);
              if (((this.length = n.length), 0 !== i))
                (this.words[this.length] = i), this.length++;
              else if (n !== this)
                for (; o < n.length; o++) this.words[o] = n.words[o];
              return this;
            }),
            (o.prototype.add = function (t) {
              var e;
              return 0 !== t.negative && 0 === this.negative
                ? ((t.negative = 0), (e = this.sub(t)), (t.negative ^= 1), e)
                : 0 === t.negative && 0 !== this.negative
                ? ((this.negative = 0),
                  (e = t.sub(this)),
                  (this.negative = 1),
                  e)
                : this.length > t.length
                ? this.clone().iadd(t)
                : t.clone().iadd(this);
            }),
            (o.prototype.isub = function (t) {
              if (0 !== t.negative) {
                t.negative = 0;
                var e = this.iadd(t);
                return (t.negative = 1), e._normSign();
              }
              if (0 !== this.negative)
                return (
                  (this.negative = 0),
                  this.iadd(t),
                  (this.negative = 1),
                  this._normSign()
                );
              var n,
                r,
                i = this.cmp(t);
              if (0 === i)
                return (
                  (this.negative = 0),
                  (this.length = 1),
                  (this.words[0] = 0),
                  this
                );
              i > 0 ? ((n = this), (r = t)) : ((n = t), (r = this));
              for (var o = 0, s = 0; s < r.length; s++)
                (o = (e = (0 | n.words[s]) - (0 | r.words[s]) + o) >> 26),
                  (this.words[s] = 67108863 & e);
              for (; 0 !== o && s < n.length; s++)
                (o = (e = (0 | n.words[s]) + o) >> 26),
                  (this.words[s] = 67108863 & e);
              if (0 === o && s < n.length && n !== this)
                for (; s < n.length; s++) this.words[s] = n.words[s];
              return (
                (this.length = Math.max(this.length, s)),
                n !== this && (this.negative = 1),
                this._strip()
              );
            }),
            (o.prototype.sub = function (t) {
              return this.clone().isub(t);
            });
          var b = function (t, e, n) {
            var r,
              i,
              o,
              s = t.words,
              a = e.words,
              u = n.words,
              c = 0,
              l = 0 | s[0],
              h = 8191 & l,
              f = l >>> 13,
              d = 0 | s[1],
              p = 8191 & d,
              v = d >>> 13,
              b = 0 | s[2],
              y = 8191 & b,
              g = b >>> 13,
              m = 0 | s[3],
              w = 8191 & m,
              _ = m >>> 13,
              k = 0 | s[4],
              x = 8191 & k,
              E = k >>> 13,
              S = 0 | s[5],
              M = 8191 & S,
              C = S >>> 13,
              A = 0 | s[6],
              R = 8191 & A,
              O = A >>> 13,
              I = 0 | s[7],
              T = 8191 & I,
              N = I >>> 13,
              j = 0 | s[8],
              L = 8191 & j,
              P = j >>> 13,
              D = 0 | s[9],
              B = 8191 & D,
              H = D >>> 13,
              F = 0 | a[0],
              U = 8191 & F,
              W = F >>> 13,
              z = 0 | a[1],
              q = 8191 & z,
              V = z >>> 13,
              Y = 0 | a[2],
              G = 8191 & Y,
              J = Y >>> 13,
              K = 0 | a[3],
              X = 8191 & K,
              Q = K >>> 13,
              Z = 0 | a[4],
              $ = 8191 & Z,
              tt = Z >>> 13,
              et = 0 | a[5],
              nt = 8191 & et,
              rt = et >>> 13,
              it = 0 | a[6],
              ot = 8191 & it,
              st = it >>> 13,
              at = 0 | a[7],
              ut = 8191 & at,
              ct = at >>> 13,
              lt = 0 | a[8],
              ht = 8191 & lt,
              ft = lt >>> 13,
              dt = 0 | a[9],
              pt = 8191 & dt,
              vt = dt >>> 13;
            (n.negative = t.negative ^ e.negative), (n.length = 19);
            var bt =
              (((c + (r = Math.imul(h, U))) | 0) +
                ((8191 & (i = ((i = Math.imul(h, W)) + Math.imul(f, U)) | 0)) <<
                  13)) |
              0;
            (c =
              ((((o = Math.imul(f, W)) + (i >>> 13)) | 0) + (bt >>> 26)) | 0),
              (bt &= 67108863),
              (r = Math.imul(p, U)),
              (i = ((i = Math.imul(p, W)) + Math.imul(v, U)) | 0),
              (o = Math.imul(v, W));
            var yt =
              (((c + (r = (r + Math.imul(h, q)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(h, V)) | 0) + Math.imul(f, q)) | 0)) <<
                  13)) |
              0;
            (c =
              ((((o = (o + Math.imul(f, V)) | 0) + (i >>> 13)) | 0) +
                (yt >>> 26)) |
              0),
              (yt &= 67108863),
              (r = Math.imul(y, U)),
              (i = ((i = Math.imul(y, W)) + Math.imul(g, U)) | 0),
              (o = Math.imul(g, W)),
              (r = (r + Math.imul(p, q)) | 0),
              (i = ((i = (i + Math.imul(p, V)) | 0) + Math.imul(v, q)) | 0),
              (o = (o + Math.imul(v, V)) | 0);
            var gt =
              (((c + (r = (r + Math.imul(h, G)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(h, J)) | 0) + Math.imul(f, G)) | 0)) <<
                  13)) |
              0;
            (c =
              ((((o = (o + Math.imul(f, J)) | 0) + (i >>> 13)) | 0) +
                (gt >>> 26)) |
              0),
              (gt &= 67108863),
              (r = Math.imul(w, U)),
              (i = ((i = Math.imul(w, W)) + Math.imul(_, U)) | 0),
              (o = Math.imul(_, W)),
              (r = (r + Math.imul(y, q)) | 0),
              (i = ((i = (i + Math.imul(y, V)) | 0) + Math.imul(g, q)) | 0),
              (o = (o + Math.imul(g, V)) | 0),
              (r = (r + Math.imul(p, G)) | 0),
              (i = ((i = (i + Math.imul(p, J)) | 0) + Math.imul(v, G)) | 0),
              (o = (o + Math.imul(v, J)) | 0);
            var mt =
              (((c + (r = (r + Math.imul(h, X)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(h, Q)) | 0) + Math.imul(f, X)) | 0)) <<
                  13)) |
              0;
            (c =
              ((((o = (o + Math.imul(f, Q)) | 0) + (i >>> 13)) | 0) +
                (mt >>> 26)) |
              0),
              (mt &= 67108863),
              (r = Math.imul(x, U)),
              (i = ((i = Math.imul(x, W)) + Math.imul(E, U)) | 0),
              (o = Math.imul(E, W)),
              (r = (r + Math.imul(w, q)) | 0),
              (i = ((i = (i + Math.imul(w, V)) | 0) + Math.imul(_, q)) | 0),
              (o = (o + Math.imul(_, V)) | 0),
              (r = (r + Math.imul(y, G)) | 0),
              (i = ((i = (i + Math.imul(y, J)) | 0) + Math.imul(g, G)) | 0),
              (o = (o + Math.imul(g, J)) | 0),
              (r = (r + Math.imul(p, X)) | 0),
              (i = ((i = (i + Math.imul(p, Q)) | 0) + Math.imul(v, X)) | 0),
              (o = (o + Math.imul(v, Q)) | 0);
            var wt =
              (((c + (r = (r + Math.imul(h, $)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(h, tt)) | 0) + Math.imul(f, $)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((o = (o + Math.imul(f, tt)) | 0) + (i >>> 13)) | 0) +
                (wt >>> 26)) |
              0),
              (wt &= 67108863),
              (r = Math.imul(M, U)),
              (i = ((i = Math.imul(M, W)) + Math.imul(C, U)) | 0),
              (o = Math.imul(C, W)),
              (r = (r + Math.imul(x, q)) | 0),
              (i = ((i = (i + Math.imul(x, V)) | 0) + Math.imul(E, q)) | 0),
              (o = (o + Math.imul(E, V)) | 0),
              (r = (r + Math.imul(w, G)) | 0),
              (i = ((i = (i + Math.imul(w, J)) | 0) + Math.imul(_, G)) | 0),
              (o = (o + Math.imul(_, J)) | 0),
              (r = (r + Math.imul(y, X)) | 0),
              (i = ((i = (i + Math.imul(y, Q)) | 0) + Math.imul(g, X)) | 0),
              (o = (o + Math.imul(g, Q)) | 0),
              (r = (r + Math.imul(p, $)) | 0),
              (i = ((i = (i + Math.imul(p, tt)) | 0) + Math.imul(v, $)) | 0),
              (o = (o + Math.imul(v, tt)) | 0);
            var _t =
              (((c + (r = (r + Math.imul(h, nt)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(h, rt)) | 0) + Math.imul(f, nt)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((o = (o + Math.imul(f, rt)) | 0) + (i >>> 13)) | 0) +
                (_t >>> 26)) |
              0),
              (_t &= 67108863),
              (r = Math.imul(R, U)),
              (i = ((i = Math.imul(R, W)) + Math.imul(O, U)) | 0),
              (o = Math.imul(O, W)),
              (r = (r + Math.imul(M, q)) | 0),
              (i = ((i = (i + Math.imul(M, V)) | 0) + Math.imul(C, q)) | 0),
              (o = (o + Math.imul(C, V)) | 0),
              (r = (r + Math.imul(x, G)) | 0),
              (i = ((i = (i + Math.imul(x, J)) | 0) + Math.imul(E, G)) | 0),
              (o = (o + Math.imul(E, J)) | 0),
              (r = (r + Math.imul(w, X)) | 0),
              (i = ((i = (i + Math.imul(w, Q)) | 0) + Math.imul(_, X)) | 0),
              (o = (o + Math.imul(_, Q)) | 0),
              (r = (r + Math.imul(y, $)) | 0),
              (i = ((i = (i + Math.imul(y, tt)) | 0) + Math.imul(g, $)) | 0),
              (o = (o + Math.imul(g, tt)) | 0),
              (r = (r + Math.imul(p, nt)) | 0),
              (i = ((i = (i + Math.imul(p, rt)) | 0) + Math.imul(v, nt)) | 0),
              (o = (o + Math.imul(v, rt)) | 0);
            var kt =
              (((c + (r = (r + Math.imul(h, ot)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(h, st)) | 0) + Math.imul(f, ot)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((o = (o + Math.imul(f, st)) | 0) + (i >>> 13)) | 0) +
                (kt >>> 26)) |
              0),
              (kt &= 67108863),
              (r = Math.imul(T, U)),
              (i = ((i = Math.imul(T, W)) + Math.imul(N, U)) | 0),
              (o = Math.imul(N, W)),
              (r = (r + Math.imul(R, q)) | 0),
              (i = ((i = (i + Math.imul(R, V)) | 0) + Math.imul(O, q)) | 0),
              (o = (o + Math.imul(O, V)) | 0),
              (r = (r + Math.imul(M, G)) | 0),
              (i = ((i = (i + Math.imul(M, J)) | 0) + Math.imul(C, G)) | 0),
              (o = (o + Math.imul(C, J)) | 0),
              (r = (r + Math.imul(x, X)) | 0),
              (i = ((i = (i + Math.imul(x, Q)) | 0) + Math.imul(E, X)) | 0),
              (o = (o + Math.imul(E, Q)) | 0),
              (r = (r + Math.imul(w, $)) | 0),
              (i = ((i = (i + Math.imul(w, tt)) | 0) + Math.imul(_, $)) | 0),
              (o = (o + Math.imul(_, tt)) | 0),
              (r = (r + Math.imul(y, nt)) | 0),
              (i = ((i = (i + Math.imul(y, rt)) | 0) + Math.imul(g, nt)) | 0),
              (o = (o + Math.imul(g, rt)) | 0),
              (r = (r + Math.imul(p, ot)) | 0),
              (i = ((i = (i + Math.imul(p, st)) | 0) + Math.imul(v, ot)) | 0),
              (o = (o + Math.imul(v, st)) | 0);
            var xt =
              (((c + (r = (r + Math.imul(h, ut)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(h, ct)) | 0) + Math.imul(f, ut)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((o = (o + Math.imul(f, ct)) | 0) + (i >>> 13)) | 0) +
                (xt >>> 26)) |
              0),
              (xt &= 67108863),
              (r = Math.imul(L, U)),
              (i = ((i = Math.imul(L, W)) + Math.imul(P, U)) | 0),
              (o = Math.imul(P, W)),
              (r = (r + Math.imul(T, q)) | 0),
              (i = ((i = (i + Math.imul(T, V)) | 0) + Math.imul(N, q)) | 0),
              (o = (o + Math.imul(N, V)) | 0),
              (r = (r + Math.imul(R, G)) | 0),
              (i = ((i = (i + Math.imul(R, J)) | 0) + Math.imul(O, G)) | 0),
              (o = (o + Math.imul(O, J)) | 0),
              (r = (r + Math.imul(M, X)) | 0),
              (i = ((i = (i + Math.imul(M, Q)) | 0) + Math.imul(C, X)) | 0),
              (o = (o + Math.imul(C, Q)) | 0),
              (r = (r + Math.imul(x, $)) | 0),
              (i = ((i = (i + Math.imul(x, tt)) | 0) + Math.imul(E, $)) | 0),
              (o = (o + Math.imul(E, tt)) | 0),
              (r = (r + Math.imul(w, nt)) | 0),
              (i = ((i = (i + Math.imul(w, rt)) | 0) + Math.imul(_, nt)) | 0),
              (o = (o + Math.imul(_, rt)) | 0),
              (r = (r + Math.imul(y, ot)) | 0),
              (i = ((i = (i + Math.imul(y, st)) | 0) + Math.imul(g, ot)) | 0),
              (o = (o + Math.imul(g, st)) | 0),
              (r = (r + Math.imul(p, ut)) | 0),
              (i = ((i = (i + Math.imul(p, ct)) | 0) + Math.imul(v, ut)) | 0),
              (o = (o + Math.imul(v, ct)) | 0);
            var Et =
              (((c + (r = (r + Math.imul(h, ht)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(h, ft)) | 0) + Math.imul(f, ht)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((o = (o + Math.imul(f, ft)) | 0) + (i >>> 13)) | 0) +
                (Et >>> 26)) |
              0),
              (Et &= 67108863),
              (r = Math.imul(B, U)),
              (i = ((i = Math.imul(B, W)) + Math.imul(H, U)) | 0),
              (o = Math.imul(H, W)),
              (r = (r + Math.imul(L, q)) | 0),
              (i = ((i = (i + Math.imul(L, V)) | 0) + Math.imul(P, q)) | 0),
              (o = (o + Math.imul(P, V)) | 0),
              (r = (r + Math.imul(T, G)) | 0),
              (i = ((i = (i + Math.imul(T, J)) | 0) + Math.imul(N, G)) | 0),
              (o = (o + Math.imul(N, J)) | 0),
              (r = (r + Math.imul(R, X)) | 0),
              (i = ((i = (i + Math.imul(R, Q)) | 0) + Math.imul(O, X)) | 0),
              (o = (o + Math.imul(O, Q)) | 0),
              (r = (r + Math.imul(M, $)) | 0),
              (i = ((i = (i + Math.imul(M, tt)) | 0) + Math.imul(C, $)) | 0),
              (o = (o + Math.imul(C, tt)) | 0),
              (r = (r + Math.imul(x, nt)) | 0),
              (i = ((i = (i + Math.imul(x, rt)) | 0) + Math.imul(E, nt)) | 0),
              (o = (o + Math.imul(E, rt)) | 0),
              (r = (r + Math.imul(w, ot)) | 0),
              (i = ((i = (i + Math.imul(w, st)) | 0) + Math.imul(_, ot)) | 0),
              (o = (o + Math.imul(_, st)) | 0),
              (r = (r + Math.imul(y, ut)) | 0),
              (i = ((i = (i + Math.imul(y, ct)) | 0) + Math.imul(g, ut)) | 0),
              (o = (o + Math.imul(g, ct)) | 0),
              (r = (r + Math.imul(p, ht)) | 0),
              (i = ((i = (i + Math.imul(p, ft)) | 0) + Math.imul(v, ht)) | 0),
              (o = (o + Math.imul(v, ft)) | 0);
            var St =
              (((c + (r = (r + Math.imul(h, pt)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(h, vt)) | 0) + Math.imul(f, pt)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((o = (o + Math.imul(f, vt)) | 0) + (i >>> 13)) | 0) +
                (St >>> 26)) |
              0),
              (St &= 67108863),
              (r = Math.imul(B, q)),
              (i = ((i = Math.imul(B, V)) + Math.imul(H, q)) | 0),
              (o = Math.imul(H, V)),
              (r = (r + Math.imul(L, G)) | 0),
              (i = ((i = (i + Math.imul(L, J)) | 0) + Math.imul(P, G)) | 0),
              (o = (o + Math.imul(P, J)) | 0),
              (r = (r + Math.imul(T, X)) | 0),
              (i = ((i = (i + Math.imul(T, Q)) | 0) + Math.imul(N, X)) | 0),
              (o = (o + Math.imul(N, Q)) | 0),
              (r = (r + Math.imul(R, $)) | 0),
              (i = ((i = (i + Math.imul(R, tt)) | 0) + Math.imul(O, $)) | 0),
              (o = (o + Math.imul(O, tt)) | 0),
              (r = (r + Math.imul(M, nt)) | 0),
              (i = ((i = (i + Math.imul(M, rt)) | 0) + Math.imul(C, nt)) | 0),
              (o = (o + Math.imul(C, rt)) | 0),
              (r = (r + Math.imul(x, ot)) | 0),
              (i = ((i = (i + Math.imul(x, st)) | 0) + Math.imul(E, ot)) | 0),
              (o = (o + Math.imul(E, st)) | 0),
              (r = (r + Math.imul(w, ut)) | 0),
              (i = ((i = (i + Math.imul(w, ct)) | 0) + Math.imul(_, ut)) | 0),
              (o = (o + Math.imul(_, ct)) | 0),
              (r = (r + Math.imul(y, ht)) | 0),
              (i = ((i = (i + Math.imul(y, ft)) | 0) + Math.imul(g, ht)) | 0),
              (o = (o + Math.imul(g, ft)) | 0);
            var Mt =
              (((c + (r = (r + Math.imul(p, pt)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(p, vt)) | 0) + Math.imul(v, pt)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((o = (o + Math.imul(v, vt)) | 0) + (i >>> 13)) | 0) +
                (Mt >>> 26)) |
              0),
              (Mt &= 67108863),
              (r = Math.imul(B, G)),
              (i = ((i = Math.imul(B, J)) + Math.imul(H, G)) | 0),
              (o = Math.imul(H, J)),
              (r = (r + Math.imul(L, X)) | 0),
              (i = ((i = (i + Math.imul(L, Q)) | 0) + Math.imul(P, X)) | 0),
              (o = (o + Math.imul(P, Q)) | 0),
              (r = (r + Math.imul(T, $)) | 0),
              (i = ((i = (i + Math.imul(T, tt)) | 0) + Math.imul(N, $)) | 0),
              (o = (o + Math.imul(N, tt)) | 0),
              (r = (r + Math.imul(R, nt)) | 0),
              (i = ((i = (i + Math.imul(R, rt)) | 0) + Math.imul(O, nt)) | 0),
              (o = (o + Math.imul(O, rt)) | 0),
              (r = (r + Math.imul(M, ot)) | 0),
              (i = ((i = (i + Math.imul(M, st)) | 0) + Math.imul(C, ot)) | 0),
              (o = (o + Math.imul(C, st)) | 0),
              (r = (r + Math.imul(x, ut)) | 0),
              (i = ((i = (i + Math.imul(x, ct)) | 0) + Math.imul(E, ut)) | 0),
              (o = (o + Math.imul(E, ct)) | 0),
              (r = (r + Math.imul(w, ht)) | 0),
              (i = ((i = (i + Math.imul(w, ft)) | 0) + Math.imul(_, ht)) | 0),
              (o = (o + Math.imul(_, ft)) | 0);
            var Ct =
              (((c + (r = (r + Math.imul(y, pt)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(y, vt)) | 0) + Math.imul(g, pt)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((o = (o + Math.imul(g, vt)) | 0) + (i >>> 13)) | 0) +
                (Ct >>> 26)) |
              0),
              (Ct &= 67108863),
              (r = Math.imul(B, X)),
              (i = ((i = Math.imul(B, Q)) + Math.imul(H, X)) | 0),
              (o = Math.imul(H, Q)),
              (r = (r + Math.imul(L, $)) | 0),
              (i = ((i = (i + Math.imul(L, tt)) | 0) + Math.imul(P, $)) | 0),
              (o = (o + Math.imul(P, tt)) | 0),
              (r = (r + Math.imul(T, nt)) | 0),
              (i = ((i = (i + Math.imul(T, rt)) | 0) + Math.imul(N, nt)) | 0),
              (o = (o + Math.imul(N, rt)) | 0),
              (r = (r + Math.imul(R, ot)) | 0),
              (i = ((i = (i + Math.imul(R, st)) | 0) + Math.imul(O, ot)) | 0),
              (o = (o + Math.imul(O, st)) | 0),
              (r = (r + Math.imul(M, ut)) | 0),
              (i = ((i = (i + Math.imul(M, ct)) | 0) + Math.imul(C, ut)) | 0),
              (o = (o + Math.imul(C, ct)) | 0),
              (r = (r + Math.imul(x, ht)) | 0),
              (i = ((i = (i + Math.imul(x, ft)) | 0) + Math.imul(E, ht)) | 0),
              (o = (o + Math.imul(E, ft)) | 0);
            var At =
              (((c + (r = (r + Math.imul(w, pt)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(w, vt)) | 0) + Math.imul(_, pt)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((o = (o + Math.imul(_, vt)) | 0) + (i >>> 13)) | 0) +
                (At >>> 26)) |
              0),
              (At &= 67108863),
              (r = Math.imul(B, $)),
              (i = ((i = Math.imul(B, tt)) + Math.imul(H, $)) | 0),
              (o = Math.imul(H, tt)),
              (r = (r + Math.imul(L, nt)) | 0),
              (i = ((i = (i + Math.imul(L, rt)) | 0) + Math.imul(P, nt)) | 0),
              (o = (o + Math.imul(P, rt)) | 0),
              (r = (r + Math.imul(T, ot)) | 0),
              (i = ((i = (i + Math.imul(T, st)) | 0) + Math.imul(N, ot)) | 0),
              (o = (o + Math.imul(N, st)) | 0),
              (r = (r + Math.imul(R, ut)) | 0),
              (i = ((i = (i + Math.imul(R, ct)) | 0) + Math.imul(O, ut)) | 0),
              (o = (o + Math.imul(O, ct)) | 0),
              (r = (r + Math.imul(M, ht)) | 0),
              (i = ((i = (i + Math.imul(M, ft)) | 0) + Math.imul(C, ht)) | 0),
              (o = (o + Math.imul(C, ft)) | 0);
            var Rt =
              (((c + (r = (r + Math.imul(x, pt)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(x, vt)) | 0) + Math.imul(E, pt)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((o = (o + Math.imul(E, vt)) | 0) + (i >>> 13)) | 0) +
                (Rt >>> 26)) |
              0),
              (Rt &= 67108863),
              (r = Math.imul(B, nt)),
              (i = ((i = Math.imul(B, rt)) + Math.imul(H, nt)) | 0),
              (o = Math.imul(H, rt)),
              (r = (r + Math.imul(L, ot)) | 0),
              (i = ((i = (i + Math.imul(L, st)) | 0) + Math.imul(P, ot)) | 0),
              (o = (o + Math.imul(P, st)) | 0),
              (r = (r + Math.imul(T, ut)) | 0),
              (i = ((i = (i + Math.imul(T, ct)) | 0) + Math.imul(N, ut)) | 0),
              (o = (o + Math.imul(N, ct)) | 0),
              (r = (r + Math.imul(R, ht)) | 0),
              (i = ((i = (i + Math.imul(R, ft)) | 0) + Math.imul(O, ht)) | 0),
              (o = (o + Math.imul(O, ft)) | 0);
            var Ot =
              (((c + (r = (r + Math.imul(M, pt)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(M, vt)) | 0) + Math.imul(C, pt)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((o = (o + Math.imul(C, vt)) | 0) + (i >>> 13)) | 0) +
                (Ot >>> 26)) |
              0),
              (Ot &= 67108863),
              (r = Math.imul(B, ot)),
              (i = ((i = Math.imul(B, st)) + Math.imul(H, ot)) | 0),
              (o = Math.imul(H, st)),
              (r = (r + Math.imul(L, ut)) | 0),
              (i = ((i = (i + Math.imul(L, ct)) | 0) + Math.imul(P, ut)) | 0),
              (o = (o + Math.imul(P, ct)) | 0),
              (r = (r + Math.imul(T, ht)) | 0),
              (i = ((i = (i + Math.imul(T, ft)) | 0) + Math.imul(N, ht)) | 0),
              (o = (o + Math.imul(N, ft)) | 0);
            var It =
              (((c + (r = (r + Math.imul(R, pt)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(R, vt)) | 0) + Math.imul(O, pt)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((o = (o + Math.imul(O, vt)) | 0) + (i >>> 13)) | 0) +
                (It >>> 26)) |
              0),
              (It &= 67108863),
              (r = Math.imul(B, ut)),
              (i = ((i = Math.imul(B, ct)) + Math.imul(H, ut)) | 0),
              (o = Math.imul(H, ct)),
              (r = (r + Math.imul(L, ht)) | 0),
              (i = ((i = (i + Math.imul(L, ft)) | 0) + Math.imul(P, ht)) | 0),
              (o = (o + Math.imul(P, ft)) | 0);
            var Tt =
              (((c + (r = (r + Math.imul(T, pt)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(T, vt)) | 0) + Math.imul(N, pt)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((o = (o + Math.imul(N, vt)) | 0) + (i >>> 13)) | 0) +
                (Tt >>> 26)) |
              0),
              (Tt &= 67108863),
              (r = Math.imul(B, ht)),
              (i = ((i = Math.imul(B, ft)) + Math.imul(H, ht)) | 0),
              (o = Math.imul(H, ft));
            var Nt =
              (((c + (r = (r + Math.imul(L, pt)) | 0)) | 0) +
                ((8191 &
                  (i =
                    ((i = (i + Math.imul(L, vt)) | 0) + Math.imul(P, pt)) |
                    0)) <<
                  13)) |
              0;
            (c =
              ((((o = (o + Math.imul(P, vt)) | 0) + (i >>> 13)) | 0) +
                (Nt >>> 26)) |
              0),
              (Nt &= 67108863);
            var jt =
              (((c + (r = Math.imul(B, pt))) | 0) +
                ((8191 &
                  (i = ((i = Math.imul(B, vt)) + Math.imul(H, pt)) | 0)) <<
                  13)) |
              0;
            return (
              (c =
                ((((o = Math.imul(H, vt)) + (i >>> 13)) | 0) + (jt >>> 26)) |
                0),
              (jt &= 67108863),
              (u[0] = bt),
              (u[1] = yt),
              (u[2] = gt),
              (u[3] = mt),
              (u[4] = wt),
              (u[5] = _t),
              (u[6] = kt),
              (u[7] = xt),
              (u[8] = Et),
              (u[9] = St),
              (u[10] = Mt),
              (u[11] = Ct),
              (u[12] = At),
              (u[13] = Rt),
              (u[14] = Ot),
              (u[15] = It),
              (u[16] = Tt),
              (u[17] = Nt),
              (u[18] = jt),
              0 !== c && ((u[19] = c), n.length++),
              n
            );
          };
          function y(t, e, n) {
            (n.negative = e.negative ^ t.negative),
              (n.length = t.length + e.length);
            for (var r = 0, i = 0, o = 0; o < n.length - 1; o++) {
              var s = i;
              i = 0;
              for (
                var a = 67108863 & r,
                  u = Math.min(o, e.length - 1),
                  c = Math.max(0, o - t.length + 1);
                c <= u;
                c++
              ) {
                var l = o - c,
                  h = (0 | t.words[l]) * (0 | e.words[c]),
                  f = 67108863 & h;
                (a = 67108863 & (f = (f + a) | 0)),
                  (i +=
                    (s =
                      ((s = (s + ((h / 67108864) | 0)) | 0) + (f >>> 26)) |
                      0) >>> 26),
                  (s &= 67108863);
              }
              (n.words[o] = a), (r = s), (s = i);
            }
            return 0 !== r ? (n.words[o] = r) : n.length--, n._strip();
          }
          function g(t, e, n) {
            return y(t, e, n);
          }
          function m(t, e) {
            (this.x = t), (this.y = e);
          }
          Math.imul || (b = v),
            (o.prototype.mulTo = function (t, e) {
              var n = this.length + t.length;
              return 10 === this.length && 10 === t.length
                ? b(this, t, e)
                : n < 63
                ? v(this, t, e)
                : n < 1024
                ? y(this, t, e)
                : g(this, t, e);
            }),
            (m.prototype.makeRBT = function (t) {
              for (
                var e = new Array(t), n = o.prototype._countBits(t) - 1, r = 0;
                r < t;
                r++
              )
                e[r] = this.revBin(r, n, t);
              return e;
            }),
            (m.prototype.revBin = function (t, e, n) {
              if (0 === t || t === n - 1) return t;
              for (var r = 0, i = 0; i < e; i++)
                (r |= (1 & t) << (e - i - 1)), (t >>= 1);
              return r;
            }),
            (m.prototype.permute = function (t, e, n, r, i, o) {
              for (var s = 0; s < o; s++) (r[s] = e[t[s]]), (i[s] = n[t[s]]);
            }),
            (m.prototype.transform = function (t, e, n, r, i, o) {
              this.permute(o, t, e, n, r, i);
              for (var s = 1; s < i; s <<= 1)
                for (
                  var a = s << 1,
                    u = Math.cos((2 * Math.PI) / a),
                    c = Math.sin((2 * Math.PI) / a),
                    l = 0;
                  l < i;
                  l += a
                )
                  for (var h = u, f = c, d = 0; d < s; d++) {
                    var p = n[l + d],
                      v = r[l + d],
                      b = n[l + d + s],
                      y = r[l + d + s],
                      g = h * b - f * y;
                    (y = h * y + f * b),
                      (b = g),
                      (n[l + d] = p + b),
                      (r[l + d] = v + y),
                      (n[l + d + s] = p - b),
                      (r[l + d + s] = v - y),
                      d !== a &&
                        ((g = u * h - c * f), (f = u * f + c * h), (h = g));
                  }
            }),
            (m.prototype.guessLen13b = function (t, e) {
              var n = 1 | Math.max(e, t),
                r = 1 & n,
                i = 0;
              for (n = (n / 2) | 0; n; n >>>= 1) i++;
              return 1 << (i + 1 + r);
            }),
            (m.prototype.conjugate = function (t, e, n) {
              if (!(n <= 1))
                for (var r = 0; r < n / 2; r++) {
                  var i = t[r];
                  (t[r] = t[n - r - 1]),
                    (t[n - r - 1] = i),
                    (i = e[r]),
                    (e[r] = -e[n - r - 1]),
                    (e[n - r - 1] = -i);
                }
            }),
            (m.prototype.normalize13b = function (t, e) {
              for (var n = 0, r = 0; r < e / 2; r++) {
                var i =
                  8192 * Math.round(t[2 * r + 1] / e) +
                  Math.round(t[2 * r] / e) +
                  n;
                (t[r] = 67108863 & i),
                  (n = i < 67108864 ? 0 : (i / 67108864) | 0);
              }
              return t;
            }),
            (m.prototype.convert13b = function (t, e, n, i) {
              for (var o = 0, s = 0; s < e; s++)
                (o += 0 | t[s]),
                  (n[2 * s] = 8191 & o),
                  (o >>>= 13),
                  (n[2 * s + 1] = 8191 & o),
                  (o >>>= 13);
              for (s = 2 * e; s < i; ++s) n[s] = 0;
              r(0 === o), r(0 === (-8192 & o));
            }),
            (m.prototype.stub = function (t) {
              for (var e = new Array(t), n = 0; n < t; n++) e[n] = 0;
              return e;
            }),
            (m.prototype.mulp = function (t, e, n) {
              var r = 2 * this.guessLen13b(t.length, e.length),
                i = this.makeRBT(r),
                o = this.stub(r),
                s = new Array(r),
                a = new Array(r),
                u = new Array(r),
                c = new Array(r),
                l = new Array(r),
                h = new Array(r),
                f = n.words;
              (f.length = r),
                this.convert13b(t.words, t.length, s, r),
                this.convert13b(e.words, e.length, c, r),
                this.transform(s, o, a, u, r, i),
                this.transform(c, o, l, h, r, i);
              for (var d = 0; d < r; d++) {
                var p = a[d] * l[d] - u[d] * h[d];
                (u[d] = a[d] * h[d] + u[d] * l[d]), (a[d] = p);
              }
              return (
                this.conjugate(a, u, r),
                this.transform(a, u, f, o, r, i),
                this.conjugate(f, o, r),
                this.normalize13b(f, r),
                (n.negative = t.negative ^ e.negative),
                (n.length = t.length + e.length),
                n._strip()
              );
            }),
            (o.prototype.mul = function (t) {
              var e = new o(null);
              return (
                (e.words = new Array(this.length + t.length)), this.mulTo(t, e)
              );
            }),
            (o.prototype.mulf = function (t) {
              var e = new o(null);
              return (
                (e.words = new Array(this.length + t.length)), g(this, t, e)
              );
            }),
            (o.prototype.imul = function (t) {
              return this.clone().mulTo(t, this);
            }),
            (o.prototype.imuln = function (t) {
              var e = t < 0;
              e && (t = -t), r("number" === typeof t), r(t < 67108864);
              for (var n = 0, i = 0; i < this.length; i++) {
                var o = (0 | this.words[i]) * t,
                  s = (67108863 & o) + (67108863 & n);
                (n >>= 26),
                  (n += (o / 67108864) | 0),
                  (n += s >>> 26),
                  (this.words[i] = 67108863 & s);
              }
              return (
                0 !== n && ((this.words[i] = n), this.length++),
                e ? this.ineg() : this
              );
            }),
            (o.prototype.muln = function (t) {
              return this.clone().imuln(t);
            }),
            (o.prototype.sqr = function () {
              return this.mul(this);
            }),
            (o.prototype.isqr = function () {
              return this.imul(this.clone());
            }),
            (o.prototype.pow = function (t) {
              var e = (function (t) {
                for (
                  var e = new Array(t.bitLength()), n = 0;
                  n < e.length;
                  n++
                ) {
                  var r = (n / 26) | 0,
                    i = n % 26;
                  e[n] = (t.words[r] >>> i) & 1;
                }
                return e;
              })(t);
              if (0 === e.length) return new o(1);
              for (
                var n = this, r = 0;
                r < e.length && 0 === e[r];
                r++, n = n.sqr()
              );
              if (++r < e.length)
                for (var i = n.sqr(); r < e.length; r++, i = i.sqr())
                  0 !== e[r] && (n = n.mul(i));
              return n;
            }),
            (o.prototype.iushln = function (t) {
              r("number" === typeof t && t >= 0);
              var e,
                n = t % 26,
                i = (t - n) / 26,
                o = (67108863 >>> (26 - n)) << (26 - n);
              if (0 !== n) {
                var s = 0;
                for (e = 0; e < this.length; e++) {
                  var a = this.words[e] & o,
                    u = ((0 | this.words[e]) - a) << n;
                  (this.words[e] = u | s), (s = a >>> (26 - n));
                }
                s && ((this.words[e] = s), this.length++);
              }
              if (0 !== i) {
                for (e = this.length - 1; e >= 0; e--)
                  this.words[e + i] = this.words[e];
                for (e = 0; e < i; e++) this.words[e] = 0;
                this.length += i;
              }
              return this._strip();
            }),
            (o.prototype.ishln = function (t) {
              return r(0 === this.negative), this.iushln(t);
            }),
            (o.prototype.iushrn = function (t, e, n) {
              var i;
              r("number" === typeof t && t >= 0),
                (i = e ? (e - (e % 26)) / 26 : 0);
              var o = t % 26,
                s = Math.min((t - o) / 26, this.length),
                a = 67108863 ^ ((67108863 >>> o) << o),
                u = n;
              if (((i -= s), (i = Math.max(0, i)), u)) {
                for (var c = 0; c < s; c++) u.words[c] = this.words[c];
                u.length = s;
              }
              if (0 === s);
              else if (this.length > s)
                for (this.length -= s, c = 0; c < this.length; c++)
                  this.words[c] = this.words[c + s];
              else (this.words[0] = 0), (this.length = 1);
              var l = 0;
              for (c = this.length - 1; c >= 0 && (0 !== l || c >= i); c--) {
                var h = 0 | this.words[c];
                (this.words[c] = (l << (26 - o)) | (h >>> o)), (l = h & a);
              }
              return (
                u && 0 !== l && (u.words[u.length++] = l),
                0 === this.length && ((this.words[0] = 0), (this.length = 1)),
                this._strip()
              );
            }),
            (o.prototype.ishrn = function (t, e, n) {
              return r(0 === this.negative), this.iushrn(t, e, n);
            }),
            (o.prototype.shln = function (t) {
              return this.clone().ishln(t);
            }),
            (o.prototype.ushln = function (t) {
              return this.clone().iushln(t);
            }),
            (o.prototype.shrn = function (t) {
              return this.clone().ishrn(t);
            }),
            (o.prototype.ushrn = function (t) {
              return this.clone().iushrn(t);
            }),
            (o.prototype.testn = function (t) {
              r("number" === typeof t && t >= 0);
              var e = t % 26,
                n = (t - e) / 26,
                i = 1 << e;
              return !(this.length <= n) && !!(this.words[n] & i);
            }),
            (o.prototype.imaskn = function (t) {
              r("number" === typeof t && t >= 0);
              var e = t % 26,
                n = (t - e) / 26;
              if (
                (r(
                  0 === this.negative,
                  "imaskn works only with positive numbers"
                ),
                this.length <= n)
              )
                return this;
              if (
                (0 !== e && n++,
                (this.length = Math.min(n, this.length)),
                0 !== e)
              ) {
                var i = 67108863 ^ ((67108863 >>> e) << e);
                this.words[this.length - 1] &= i;
              }
              return this._strip();
            }),
            (o.prototype.maskn = function (t) {
              return this.clone().imaskn(t);
            }),
            (o.prototype.iaddn = function (t) {
              return (
                r("number" === typeof t),
                r(t < 67108864),
                t < 0
                  ? this.isubn(-t)
                  : 0 !== this.negative
                  ? 1 === this.length && (0 | this.words[0]) <= t
                    ? ((this.words[0] = t - (0 | this.words[0])),
                      (this.negative = 0),
                      this)
                    : ((this.negative = 0),
                      this.isubn(t),
                      (this.negative = 1),
                      this)
                  : this._iaddn(t)
              );
            }),
            (o.prototype._iaddn = function (t) {
              this.words[0] += t;
              for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
                (this.words[e] -= 67108864),
                  e === this.length - 1
                    ? (this.words[e + 1] = 1)
                    : this.words[e + 1]++;
              return (this.length = Math.max(this.length, e + 1)), this;
            }),
            (o.prototype.isubn = function (t) {
              if ((r("number" === typeof t), r(t < 67108864), t < 0))
                return this.iaddn(-t);
              if (0 !== this.negative)
                return (
                  (this.negative = 0), this.iaddn(t), (this.negative = 1), this
                );
              if (
                ((this.words[0] -= t), 1 === this.length && this.words[0] < 0)
              )
                (this.words[0] = -this.words[0]), (this.negative = 1);
              else
                for (var e = 0; e < this.length && this.words[e] < 0; e++)
                  (this.words[e] += 67108864), (this.words[e + 1] -= 1);
              return this._strip();
            }),
            (o.prototype.addn = function (t) {
              return this.clone().iaddn(t);
            }),
            (o.prototype.subn = function (t) {
              return this.clone().isubn(t);
            }),
            (o.prototype.iabs = function () {
              return (this.negative = 0), this;
            }),
            (o.prototype.abs = function () {
              return this.clone().iabs();
            }),
            (o.prototype._ishlnsubmul = function (t, e, n) {
              var i,
                o,
                s = t.length + n;
              this._expand(s);
              var a = 0;
              for (i = 0; i < t.length; i++) {
                o = (0 | this.words[i + n]) + a;
                var u = (0 | t.words[i]) * e;
                (a = ((o -= 67108863 & u) >> 26) - ((u / 67108864) | 0)),
                  (this.words[i + n] = 67108863 & o);
              }
              for (; i < this.length - n; i++)
                (a = (o = (0 | this.words[i + n]) + a) >> 26),
                  (this.words[i + n] = 67108863 & o);
              if (0 === a) return this._strip();
              for (r(-1 === a), a = 0, i = 0; i < this.length; i++)
                (a = (o = -(0 | this.words[i]) + a) >> 26),
                  (this.words[i] = 67108863 & o);
              return (this.negative = 1), this._strip();
            }),
            (o.prototype._wordDiv = function (t, e) {
              var n = (this.length, t.length),
                r = this.clone(),
                i = t,
                s = 0 | i.words[i.length - 1];
              0 !== (n = 26 - this._countBits(s)) &&
                ((i = i.ushln(n)),
                r.iushln(n),
                (s = 0 | i.words[i.length - 1]));
              var a,
                u = r.length - i.length;
              if ("mod" !== e) {
                ((a = new o(null)).length = u + 1),
                  (a.words = new Array(a.length));
                for (var c = 0; c < a.length; c++) a.words[c] = 0;
              }
              var l = r.clone()._ishlnsubmul(i, 1, u);
              0 === l.negative && ((r = l), a && (a.words[u] = 1));
              for (var h = u - 1; h >= 0; h--) {
                var f =
                  67108864 * (0 | r.words[i.length + h]) +
                  (0 | r.words[i.length + h - 1]);
                for (
                  f = Math.min((f / s) | 0, 67108863), r._ishlnsubmul(i, f, h);
                  0 !== r.negative;

                )
                  f--,
                    (r.negative = 0),
                    r._ishlnsubmul(i, 1, h),
                    r.isZero() || (r.negative ^= 1);
                a && (a.words[h] = f);
              }
              return (
                a && a._strip(),
                r._strip(),
                "div" !== e && 0 !== n && r.iushrn(n),
                { div: a || null, mod: r }
              );
            }),
            (o.prototype.divmod = function (t, e, n) {
              return (
                r(!t.isZero()),
                this.isZero()
                  ? { div: new o(0), mod: new o(0) }
                  : 0 !== this.negative && 0 === t.negative
                  ? ((a = this.neg().divmod(t, e)),
                    "mod" !== e && (i = a.div.neg()),
                    "div" !== e &&
                      ((s = a.mod.neg()), n && 0 !== s.negative && s.iadd(t)),
                    { div: i, mod: s })
                  : 0 === this.negative && 0 !== t.negative
                  ? ((a = this.divmod(t.neg(), e)),
                    "mod" !== e && (i = a.div.neg()),
                    { div: i, mod: a.mod })
                  : 0 !== (this.negative & t.negative)
                  ? ((a = this.neg().divmod(t.neg(), e)),
                    "div" !== e &&
                      ((s = a.mod.neg()), n && 0 !== s.negative && s.isub(t)),
                    { div: a.div, mod: s })
                  : t.length > this.length || this.cmp(t) < 0
                  ? { div: new o(0), mod: this }
                  : 1 === t.length
                  ? "div" === e
                    ? { div: this.divn(t.words[0]), mod: null }
                    : "mod" === e
                    ? { div: null, mod: new o(this.modrn(t.words[0])) }
                    : {
                        div: this.divn(t.words[0]),
                        mod: new o(this.modrn(t.words[0])),
                      }
                  : this._wordDiv(t, e)
              );
              var i, s, a;
            }),
            (o.prototype.div = function (t) {
              return this.divmod(t, "div", !1).div;
            }),
            (o.prototype.mod = function (t) {
              return this.divmod(t, "mod", !1).mod;
            }),
            (o.prototype.umod = function (t) {
              return this.divmod(t, "mod", !0).mod;
            }),
            (o.prototype.divRound = function (t) {
              var e = this.divmod(t);
              if (e.mod.isZero()) return e.div;
              var n = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                r = t.ushrn(1),
                i = t.andln(1),
                o = n.cmp(r);
              return o < 0 || (1 === i && 0 === o)
                ? e.div
                : 0 !== e.div.negative
                ? e.div.isubn(1)
                : e.div.iaddn(1);
            }),
            (o.prototype.modrn = function (t) {
              var e = t < 0;
              e && (t = -t), r(t <= 67108863);
              for (
                var n = (1 << 26) % t, i = 0, o = this.length - 1;
                o >= 0;
                o--
              )
                i = (n * i + (0 | this.words[o])) % t;
              return e ? -i : i;
            }),
            (o.prototype.modn = function (t) {
              return this.modrn(t);
            }),
            (o.prototype.idivn = function (t) {
              var e = t < 0;
              e && (t = -t), r(t <= 67108863);
              for (var n = 0, i = this.length - 1; i >= 0; i--) {
                var o = (0 | this.words[i]) + 67108864 * n;
                (this.words[i] = (o / t) | 0), (n = o % t);
              }
              return this._strip(), e ? this.ineg() : this;
            }),
            (o.prototype.divn = function (t) {
              return this.clone().idivn(t);
            }),
            (o.prototype.egcd = function (t) {
              r(0 === t.negative), r(!t.isZero());
              var e = this,
                n = t.clone();
              e = 0 !== e.negative ? e.umod(t) : e.clone();
              for (
                var i = new o(1),
                  s = new o(0),
                  a = new o(0),
                  u = new o(1),
                  c = 0;
                e.isEven() && n.isEven();

              )
                e.iushrn(1), n.iushrn(1), ++c;
              for (var l = n.clone(), h = e.clone(); !e.isZero(); ) {
                for (
                  var f = 0, d = 1;
                  0 === (e.words[0] & d) && f < 26;
                  ++f, d <<= 1
                );
                if (f > 0)
                  for (e.iushrn(f); f-- > 0; )
                    (i.isOdd() || s.isOdd()) && (i.iadd(l), s.isub(h)),
                      i.iushrn(1),
                      s.iushrn(1);
                for (
                  var p = 0, v = 1;
                  0 === (n.words[0] & v) && p < 26;
                  ++p, v <<= 1
                );
                if (p > 0)
                  for (n.iushrn(p); p-- > 0; )
                    (a.isOdd() || u.isOdd()) && (a.iadd(l), u.isub(h)),
                      a.iushrn(1),
                      u.iushrn(1);
                e.cmp(n) >= 0
                  ? (e.isub(n), i.isub(a), s.isub(u))
                  : (n.isub(e), a.isub(i), u.isub(s));
              }
              return { a: a, b: u, gcd: n.iushln(c) };
            }),
            (o.prototype._invmp = function (t) {
              r(0 === t.negative), r(!t.isZero());
              var e = this,
                n = t.clone();
              e = 0 !== e.negative ? e.umod(t) : e.clone();
              for (
                var i, s = new o(1), a = new o(0), u = n.clone();
                e.cmpn(1) > 0 && n.cmpn(1) > 0;

              ) {
                for (
                  var c = 0, l = 1;
                  0 === (e.words[0] & l) && c < 26;
                  ++c, l <<= 1
                );
                if (c > 0)
                  for (e.iushrn(c); c-- > 0; )
                    s.isOdd() && s.iadd(u), s.iushrn(1);
                for (
                  var h = 0, f = 1;
                  0 === (n.words[0] & f) && h < 26;
                  ++h, f <<= 1
                );
                if (h > 0)
                  for (n.iushrn(h); h-- > 0; )
                    a.isOdd() && a.iadd(u), a.iushrn(1);
                e.cmp(n) >= 0 ? (e.isub(n), s.isub(a)) : (n.isub(e), a.isub(s));
              }
              return (i = 0 === e.cmpn(1) ? s : a).cmpn(0) < 0 && i.iadd(t), i;
            }),
            (o.prototype.gcd = function (t) {
              if (this.isZero()) return t.abs();
              if (t.isZero()) return this.abs();
              var e = this.clone(),
                n = t.clone();
              (e.negative = 0), (n.negative = 0);
              for (var r = 0; e.isEven() && n.isEven(); r++)
                e.iushrn(1), n.iushrn(1);
              for (;;) {
                for (; e.isEven(); ) e.iushrn(1);
                for (; n.isEven(); ) n.iushrn(1);
                var i = e.cmp(n);
                if (i < 0) {
                  var o = e;
                  (e = n), (n = o);
                } else if (0 === i || 0 === n.cmpn(1)) break;
                e.isub(n);
              }
              return n.iushln(r);
            }),
            (o.prototype.invm = function (t) {
              return this.egcd(t).a.umod(t);
            }),
            (o.prototype.isEven = function () {
              return 0 === (1 & this.words[0]);
            }),
            (o.prototype.isOdd = function () {
              return 1 === (1 & this.words[0]);
            }),
            (o.prototype.andln = function (t) {
              return this.words[0] & t;
            }),
            (o.prototype.bincn = function (t) {
              r("number" === typeof t);
              var e = t % 26,
                n = (t - e) / 26,
                i = 1 << e;
              if (this.length <= n)
                return this._expand(n + 1), (this.words[n] |= i), this;
              for (var o = i, s = n; 0 !== o && s < this.length; s++) {
                var a = 0 | this.words[s];
                (o = (a += o) >>> 26), (a &= 67108863), (this.words[s] = a);
              }
              return 0 !== o && ((this.words[s] = o), this.length++), this;
            }),
            (o.prototype.isZero = function () {
              return 1 === this.length && 0 === this.words[0];
            }),
            (o.prototype.cmpn = function (t) {
              var e,
                n = t < 0;
              if (0 !== this.negative && !n) return -1;
              if (0 === this.negative && n) return 1;
              if ((this._strip(), this.length > 1)) e = 1;
              else {
                n && (t = -t), r(t <= 67108863, "Number is too big");
                var i = 0 | this.words[0];
                e = i === t ? 0 : i < t ? -1 : 1;
              }
              return 0 !== this.negative ? 0 | -e : e;
            }),
            (o.prototype.cmp = function (t) {
              if (0 !== this.negative && 0 === t.negative) return -1;
              if (0 === this.negative && 0 !== t.negative) return 1;
              var e = this.ucmp(t);
              return 0 !== this.negative ? 0 | -e : e;
            }),
            (o.prototype.ucmp = function (t) {
              if (this.length > t.length) return 1;
              if (this.length < t.length) return -1;
              for (var e = 0, n = this.length - 1; n >= 0; n--) {
                var r = 0 | this.words[n],
                  i = 0 | t.words[n];
                if (r !== i) {
                  r < i ? (e = -1) : r > i && (e = 1);
                  break;
                }
              }
              return e;
            }),
            (o.prototype.gtn = function (t) {
              return 1 === this.cmpn(t);
            }),
            (o.prototype.gt = function (t) {
              return 1 === this.cmp(t);
            }),
            (o.prototype.gten = function (t) {
              return this.cmpn(t) >= 0;
            }),
            (o.prototype.gte = function (t) {
              return this.cmp(t) >= 0;
            }),
            (o.prototype.ltn = function (t) {
              return -1 === this.cmpn(t);
            }),
            (o.prototype.lt = function (t) {
              return -1 === this.cmp(t);
            }),
            (o.prototype.lten = function (t) {
              return this.cmpn(t) <= 0;
            }),
            (o.prototype.lte = function (t) {
              return this.cmp(t) <= 0;
            }),
            (o.prototype.eqn = function (t) {
              return 0 === this.cmpn(t);
            }),
            (o.prototype.eq = function (t) {
              return 0 === this.cmp(t);
            }),
            (o.red = function (t) {
              return new M(t);
            }),
            (o.prototype.toRed = function (t) {
              return (
                r(!this.red, "Already a number in reduction context"),
                r(0 === this.negative, "red works only with positives"),
                t.convertTo(this)._forceRed(t)
              );
            }),
            (o.prototype.fromRed = function () {
              return (
                r(
                  this.red,
                  "fromRed works only with numbers in reduction context"
                ),
                this.red.convertFrom(this)
              );
            }),
            (o.prototype._forceRed = function (t) {
              return (this.red = t), this;
            }),
            (o.prototype.forceRed = function (t) {
              return (
                r(!this.red, "Already a number in reduction context"),
                this._forceRed(t)
              );
            }),
            (o.prototype.redAdd = function (t) {
              return (
                r(this.red, "redAdd works only with red numbers"),
                this.red.add(this, t)
              );
            }),
            (o.prototype.redIAdd = function (t) {
              return (
                r(this.red, "redIAdd works only with red numbers"),
                this.red.iadd(this, t)
              );
            }),
            (o.prototype.redSub = function (t) {
              return (
                r(this.red, "redSub works only with red numbers"),
                this.red.sub(this, t)
              );
            }),
            (o.prototype.redISub = function (t) {
              return (
                r(this.red, "redISub works only with red numbers"),
                this.red.isub(this, t)
              );
            }),
            (o.prototype.redShl = function (t) {
              return (
                r(this.red, "redShl works only with red numbers"),
                this.red.shl(this, t)
              );
            }),
            (o.prototype.redMul = function (t) {
              return (
                r(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, t),
                this.red.mul(this, t)
              );
            }),
            (o.prototype.redIMul = function (t) {
              return (
                r(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, t),
                this.red.imul(this, t)
              );
            }),
            (o.prototype.redSqr = function () {
              return (
                r(this.red, "redSqr works only with red numbers"),
                this.red._verify1(this),
                this.red.sqr(this)
              );
            }),
            (o.prototype.redISqr = function () {
              return (
                r(this.red, "redISqr works only with red numbers"),
                this.red._verify1(this),
                this.red.isqr(this)
              );
            }),
            (o.prototype.redSqrt = function () {
              return (
                r(this.red, "redSqrt works only with red numbers"),
                this.red._verify1(this),
                this.red.sqrt(this)
              );
            }),
            (o.prototype.redInvm = function () {
              return (
                r(this.red, "redInvm works only with red numbers"),
                this.red._verify1(this),
                this.red.invm(this)
              );
            }),
            (o.prototype.redNeg = function () {
              return (
                r(this.red, "redNeg works only with red numbers"),
                this.red._verify1(this),
                this.red.neg(this)
              );
            }),
            (o.prototype.redPow = function (t) {
              return (
                r(this.red && !t.red, "redPow(normalNum)"),
                this.red._verify1(this),
                this.red.pow(this, t)
              );
            });
          var w = { k256: null, p224: null, p192: null, p25519: null };
          function _(t, e) {
            (this.name = t),
              (this.p = new o(e, 16)),
              (this.n = this.p.bitLength()),
              (this.k = new o(1).iushln(this.n).isub(this.p)),
              (this.tmp = this._tmp());
          }
          function k() {
            _.call(
              this,
              "k256",
              "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
            );
          }
          function x() {
            _.call(
              this,
              "p224",
              "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
            );
          }
          function E() {
            _.call(
              this,
              "p192",
              "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
            );
          }
          function S() {
            _.call(
              this,
              "25519",
              "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
            );
          }
          function M(t) {
            if ("string" === typeof t) {
              var e = o._prime(t);
              (this.m = e.p), (this.prime = e);
            } else
              r(t.gtn(1), "modulus must be greater than 1"),
                (this.m = t),
                (this.prime = null);
          }
          function C(t) {
            M.call(this, t),
              (this.shift = this.m.bitLength()),
              this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
              (this.r = new o(1).iushln(this.shift)),
              (this.r2 = this.imod(this.r.sqr())),
              (this.rinv = this.r._invmp(this.m)),
              (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
              (this.minv = this.minv.umod(this.r)),
              (this.minv = this.r.sub(this.minv));
          }
          (_.prototype._tmp = function () {
            var t = new o(null);
            return (t.words = new Array(Math.ceil(this.n / 13))), t;
          }),
            (_.prototype.ireduce = function (t) {
              var e,
                n = t;
              do {
                this.split(n, this.tmp),
                  (e = (n = (n = this.imulK(n)).iadd(this.tmp)).bitLength());
              } while (e > this.n);
              var r = e < this.n ? -1 : n.ucmp(this.p);
              return (
                0 === r
                  ? ((n.words[0] = 0), (n.length = 1))
                  : r > 0
                  ? n.isub(this.p)
                  : void 0 !== n.strip
                  ? n.strip()
                  : n._strip(),
                n
              );
            }),
            (_.prototype.split = function (t, e) {
              t.iushrn(this.n, 0, e);
            }),
            (_.prototype.imulK = function (t) {
              return t.imul(this.k);
            }),
            i(k, _),
            (k.prototype.split = function (t, e) {
              for (
                var n = 4194303, r = Math.min(t.length, 9), i = 0;
                i < r;
                i++
              )
                e.words[i] = t.words[i];
              if (((e.length = r), t.length <= 9))
                return (t.words[0] = 0), void (t.length = 1);
              var o = t.words[9];
              for (e.words[e.length++] = o & n, i = 10; i < t.length; i++) {
                var s = 0 | t.words[i];
                (t.words[i - 10] = ((s & n) << 4) | (o >>> 22)), (o = s);
              }
              (o >>>= 22),
                (t.words[i - 10] = o),
                0 === o && t.length > 10 ? (t.length -= 10) : (t.length -= 9);
            }),
            (k.prototype.imulK = function (t) {
              (t.words[t.length] = 0),
                (t.words[t.length + 1] = 0),
                (t.length += 2);
              for (var e = 0, n = 0; n < t.length; n++) {
                var r = 0 | t.words[n];
                (e += 977 * r),
                  (t.words[n] = 67108863 & e),
                  (e = 64 * r + ((e / 67108864) | 0));
              }
              return (
                0 === t.words[t.length - 1] &&
                  (t.length--, 0 === t.words[t.length - 1] && t.length--),
                t
              );
            }),
            i(x, _),
            i(E, _),
            i(S, _),
            (S.prototype.imulK = function (t) {
              for (var e = 0, n = 0; n < t.length; n++) {
                var r = 19 * (0 | t.words[n]) + e,
                  i = 67108863 & r;
                (r >>>= 26), (t.words[n] = i), (e = r);
              }
              return 0 !== e && (t.words[t.length++] = e), t;
            }),
            (o._prime = function (t) {
              if (w[t]) return w[t];
              var e;
              if ("k256" === t) e = new k();
              else if ("p224" === t) e = new x();
              else if ("p192" === t) e = new E();
              else {
                if ("p25519" !== t) throw new Error("Unknown prime " + t);
                e = new S();
              }
              return (w[t] = e), e;
            }),
            (M.prototype._verify1 = function (t) {
              r(0 === t.negative, "red works only with positives"),
                r(t.red, "red works only with red numbers");
            }),
            (M.prototype._verify2 = function (t, e) {
              r(
                0 === (t.negative | e.negative),
                "red works only with positives"
              ),
                r(t.red && t.red === e.red, "red works only with red numbers");
            }),
            (M.prototype.imod = function (t) {
              return this.prime
                ? this.prime.ireduce(t)._forceRed(this)
                : (l(t, t.umod(this.m)._forceRed(this)), t);
            }),
            (M.prototype.neg = function (t) {
              return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
            }),
            (M.prototype.add = function (t, e) {
              this._verify2(t, e);
              var n = t.add(e);
              return n.cmp(this.m) >= 0 && n.isub(this.m), n._forceRed(this);
            }),
            (M.prototype.iadd = function (t, e) {
              this._verify2(t, e);
              var n = t.iadd(e);
              return n.cmp(this.m) >= 0 && n.isub(this.m), n;
            }),
            (M.prototype.sub = function (t, e) {
              this._verify2(t, e);
              var n = t.sub(e);
              return n.cmpn(0) < 0 && n.iadd(this.m), n._forceRed(this);
            }),
            (M.prototype.isub = function (t, e) {
              this._verify2(t, e);
              var n = t.isub(e);
              return n.cmpn(0) < 0 && n.iadd(this.m), n;
            }),
            (M.prototype.shl = function (t, e) {
              return this._verify1(t), this.imod(t.ushln(e));
            }),
            (M.prototype.imul = function (t, e) {
              return this._verify2(t, e), this.imod(t.imul(e));
            }),
            (M.prototype.mul = function (t, e) {
              return this._verify2(t, e), this.imod(t.mul(e));
            }),
            (M.prototype.isqr = function (t) {
              return this.imul(t, t.clone());
            }),
            (M.prototype.sqr = function (t) {
              return this.mul(t, t);
            }),
            (M.prototype.sqrt = function (t) {
              if (t.isZero()) return t.clone();
              var e = this.m.andln(3);
              if ((r(e % 2 === 1), 3 === e)) {
                var n = this.m.add(new o(1)).iushrn(2);
                return this.pow(t, n);
              }
              for (
                var i = this.m.subn(1), s = 0;
                !i.isZero() && 0 === i.andln(1);

              )
                s++, i.iushrn(1);
              r(!i.isZero());
              var a = new o(1).toRed(this),
                u = a.redNeg(),
                c = this.m.subn(1).iushrn(1),
                l = this.m.bitLength();
              for (
                l = new o(2 * l * l).toRed(this);
                0 !== this.pow(l, c).cmp(u);

              )
                l.redIAdd(u);
              for (
                var h = this.pow(l, i),
                  f = this.pow(t, i.addn(1).iushrn(1)),
                  d = this.pow(t, i),
                  p = s;
                0 !== d.cmp(a);

              ) {
                for (var v = d, b = 0; 0 !== v.cmp(a); b++) v = v.redSqr();
                r(b < p);
                var y = this.pow(h, new o(1).iushln(p - b - 1));
                (f = f.redMul(y)), (h = y.redSqr()), (d = d.redMul(h)), (p = b);
              }
              return f;
            }),
            (M.prototype.invm = function (t) {
              var e = t._invmp(this.m);
              return 0 !== e.negative
                ? ((e.negative = 0), this.imod(e).redNeg())
                : this.imod(e);
            }),
            (M.prototype.pow = function (t, e) {
              if (e.isZero()) return new o(1).toRed(this);
              if (0 === e.cmpn(1)) return t.clone();
              var n = new Array(16);
              (n[0] = new o(1).toRed(this)), (n[1] = t);
              for (var r = 2; r < n.length; r++) n[r] = this.mul(n[r - 1], t);
              var i = n[0],
                s = 0,
                a = 0,
                u = e.bitLength() % 26;
              for (0 === u && (u = 26), r = e.length - 1; r >= 0; r--) {
                for (var c = e.words[r], l = u - 1; l >= 0; l--) {
                  var h = (c >> l) & 1;
                  i !== n[0] && (i = this.sqr(i)),
                    0 !== h || 0 !== s
                      ? ((s <<= 1),
                        (s |= h),
                        (4 === ++a || (0 === r && 0 === l)) &&
                          ((i = this.mul(i, n[s])), (a = 0), (s = 0)))
                      : (a = 0);
                }
                u = 26;
              }
              return i;
            }),
            (M.prototype.convertTo = function (t) {
              var e = t.umod(this.m);
              return e === t ? e.clone() : e;
            }),
            (M.prototype.convertFrom = function (t) {
              var e = t.clone();
              return (e.red = null), e;
            }),
            (o.mont = function (t) {
              return new C(t);
            }),
            i(C, M),
            (C.prototype.convertTo = function (t) {
              return this.imod(t.ushln(this.shift));
            }),
            (C.prototype.convertFrom = function (t) {
              var e = this.imod(t.mul(this.rinv));
              return (e.red = null), e;
            }),
            (C.prototype.imul = function (t, e) {
              if (t.isZero() || e.isZero())
                return (t.words[0] = 0), (t.length = 1), t;
              var n = t.imul(e),
                r = n
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                i = n.isub(r).iushrn(this.shift),
                o = i;
              return (
                i.cmp(this.m) >= 0
                  ? (o = i.isub(this.m))
                  : i.cmpn(0) < 0 && (o = i.iadd(this.m)),
                o._forceRed(this)
              );
            }),
            (C.prototype.mul = function (t, e) {
              if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
              var n = t.mul(e),
                r = n
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                i = n.isub(r).iushrn(this.shift),
                s = i;
              return (
                i.cmp(this.m) >= 0
                  ? (s = i.isub(this.m))
                  : i.cmpn(0) < 0 && (s = i.iadd(this.m)),
                s._forceRed(this)
              );
            }),
            (C.prototype.invm = function (t) {
              return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
            });
        })(t, this);
      }.call(this, n(276)(t)));
    },
    1017: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      }),
        n.d(e, "b", function () {
          return o;
        });
      var r = n(979);
      function i() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return o(t);
      }
      function o(t) {
        return 0 === t.length
          ? r.a
          : 1 === t.length
          ? t[0]
          : function (e) {
              return t.reduce(function (t, e) {
                return e(t);
              }, e);
            };
      }
    },
    1018: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var r = n(967),
        i = n(968);
      function o() {
        return function (t) {
          return t.lift(new s(t));
        };
      }
      var s = (function () {
          function t(t) {
            this.connectable = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              var n = this.connectable;
              n._refCount++;
              var r = new a(t, n),
                i = e.subscribe(r);
              return r.closed || (r.connection = n.connect()), i;
            }),
            t
          );
        })(),
        a = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (r.connectable = n), r;
          }
          return (
            r.a(e, t),
            (e.prototype._unsubscribe = function () {
              var t = this.connectable;
              if (t) {
                this.connectable = null;
                var e = t._refCount;
                if (e <= 0) this.connection = null;
                else if (((t._refCount = e - 1), e > 1)) this.connection = null;
                else {
                  var n = this.connection,
                    r = t._connection;
                  (this.connection = null),
                    !r || (n && r !== n) || r.unsubscribe();
                }
              } else this.connection = null;
            }),
            e
          );
        })(i.a);
    },
    1019: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return u;
      }),
        n.d(e, "a", function () {
          return f;
        });
      var r = n(967),
        i = n(968),
        o = n(971),
        s = n(969),
        a = n(972);
      function u(t, e, n, r) {
        return function (i) {
          return i.lift(new c(t, e, n, r));
        };
      }
      var c = (function () {
          function t(t, e, n, r) {
            (this.keySelector = t),
              (this.elementSelector = e),
              (this.durationSelector = n),
              (this.subjectSelector = r);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new l(
                  t,
                  this.keySelector,
                  this.elementSelector,
                  this.durationSelector,
                  this.subjectSelector
                )
              );
            }),
            t
          );
        })(),
        l = (function (t) {
          function e(e, n, r, i, o) {
            var s = t.call(this, e) || this;
            return (
              (s.keySelector = n),
              (s.elementSelector = r),
              (s.durationSelector = i),
              (s.subjectSelector = o),
              (s.groups = null),
              (s.attemptedToUnsubscribe = !1),
              (s.count = 0),
              s
            );
          }
          return (
            r.a(e, t),
            (e.prototype._next = function (t) {
              var e;
              try {
                e = this.keySelector(t);
              } catch (n) {
                return void this.error(n);
              }
              this._group(t, e);
            }),
            (e.prototype._group = function (t, e) {
              var n = this.groups;
              n || (n = this.groups = new Map());
              var r,
                i = n.get(e);
              if (this.elementSelector)
                try {
                  r = this.elementSelector(t);
                } catch (u) {
                  this.error(u);
                }
              else r = t;
              if (!i) {
                (i = this.subjectSelector ? this.subjectSelector() : new a.a()),
                  n.set(e, i);
                var o = new f(e, i, this);
                if ((this.destination.next(o), this.durationSelector)) {
                  var s = void 0;
                  try {
                    s = this.durationSelector(new f(e, i));
                  } catch (u) {
                    return void this.error(u);
                  }
                  this.add(s.subscribe(new h(e, i, this)));
                }
              }
              i.closed || i.next(r);
            }),
            (e.prototype._error = function (t) {
              var e = this.groups;
              e &&
                (e.forEach(function (e, n) {
                  e.error(t);
                }),
                e.clear()),
                this.destination.error(t);
            }),
            (e.prototype._complete = function () {
              var t = this.groups;
              t &&
                (t.forEach(function (t, e) {
                  t.complete();
                }),
                t.clear()),
                this.destination.complete();
            }),
            (e.prototype.removeGroup = function (t) {
              this.groups.delete(t);
            }),
            (e.prototype.unsubscribe = function () {
              this.closed ||
                ((this.attemptedToUnsubscribe = !0),
                0 === this.count && t.prototype.unsubscribe.call(this));
            }),
            e
          );
        })(i.a),
        h = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, n) || this;
            return (i.key = e), (i.group = n), (i.parent = r), i;
          }
          return (
            r.a(e, t),
            (e.prototype._next = function (t) {
              this.complete();
            }),
            (e.prototype._unsubscribe = function () {
              var t = this.parent,
                e = this.key;
              (this.key = this.parent = null), t && t.removeGroup(e);
            }),
            e
          );
        })(i.a),
        f = (function (t) {
          function e(e, n, r) {
            var i = t.call(this) || this;
            return (
              (i.key = e), (i.groupSubject = n), (i.refCountSubscription = r), i
            );
          }
          return (
            r.a(e, t),
            (e.prototype._subscribe = function (t) {
              var e = new o.a(),
                n = this.refCountSubscription,
                r = this.groupSubject;
              return (
                n && !n.closed && e.add(new d(n)), e.add(r.subscribe(t)), e
              );
            }),
            e
          );
        })(s.a),
        d = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (n.parent = e), e.count++, n;
          }
          return (
            r.a(e, t),
            (e.prototype.unsubscribe = function () {
              var e = this.parent;
              e.closed ||
                this.closed ||
                (t.prototype.unsubscribe.call(this),
                (e.count -= 1),
                0 === e.count && e.attemptedToUnsubscribe && e.unsubscribe());
            }),
            e
          );
        })(o.a);
    },
    1020: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return l;
      });
      var r = n(967),
        i = n(972),
        o = n(1031),
        s = n(971),
        a = n(1057),
        u = n(1002),
        c = n(1113),
        l = (function (t) {
          function e(e, n, r) {
            void 0 === e && (e = Number.POSITIVE_INFINITY),
              void 0 === n && (n = Number.POSITIVE_INFINITY);
            var i = t.call(this) || this;
            return (
              (i.scheduler = r),
              (i._events = []),
              (i._infiniteTimeWindow = !1),
              (i._bufferSize = e < 1 ? 1 : e),
              (i._windowTime = n < 1 ? 1 : n),
              n === Number.POSITIVE_INFINITY
                ? ((i._infiniteTimeWindow = !0),
                  (i.next = i.nextInfiniteTimeWindow))
                : (i.next = i.nextTimeWindow),
              i
            );
          }
          return (
            r.a(e, t),
            (e.prototype.nextInfiniteTimeWindow = function (e) {
              if (!this.isStopped) {
                var n = this._events;
                n.push(e), n.length > this._bufferSize && n.shift();
              }
              t.prototype.next.call(this, e);
            }),
            (e.prototype.nextTimeWindow = function (e) {
              this.isStopped ||
                (this._events.push(new h(this._getNow(), e)),
                this._trimBufferThenGetEvents()),
                t.prototype.next.call(this, e);
            }),
            (e.prototype._subscribe = function (t) {
              var e,
                n = this._infiniteTimeWindow,
                r = n ? this._events : this._trimBufferThenGetEvents(),
                i = this.scheduler,
                o = r.length;
              if (this.closed) throw new u.a();
              if (
                (this.isStopped || this.hasError
                  ? (e = s.a.EMPTY)
                  : (this.observers.push(t), (e = new c.a(this, t))),
                i && t.add((t = new a.a(t, i))),
                n)
              )
                for (var l = 0; l < o && !t.closed; l++) t.next(r[l]);
              else for (l = 0; l < o && !t.closed; l++) t.next(r[l].value);
              return (
                this.hasError
                  ? t.error(this.thrownError)
                  : this.isStopped && t.complete(),
                e
              );
            }),
            (e.prototype._getNow = function () {
              return (this.scheduler || o.a).now();
            }),
            (e.prototype._trimBufferThenGetEvents = function () {
              for (
                var t = this._getNow(),
                  e = this._bufferSize,
                  n = this._windowTime,
                  r = this._events,
                  i = r.length,
                  o = 0;
                o < i && !(t - r[o].time < n);

              )
                o++;
              return (
                i > e && (o = Math.max(o, i - e)), o > 0 && r.splice(0, o), r
              );
            }),
            e
          );
        })(i.a),
        h = (function () {
          return function (t, e) {
            (this.time = t), (this.value = e);
          };
        })();
    },
    1021: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var r = n(969);
      function i(t, e) {
        return e
          ? new r.a(function (n) {
              return e.schedule(o, 0, { error: t, subscriber: n });
            })
          : new r.a(function (e) {
              return e.error(t);
            });
      }
      function o(t) {
        var e = t.error;
        t.subscriber.error(e);
      }
    },
    1022: function (t, e, n) {
      "use strict";
      function r() {}
      n.d(e, "a", function () {
        return r;
      });
    },
    1023: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return l;
      }),
        n.d(e, "a", function () {
          return h;
        });
      var r = n(967),
        i = n(978),
        o = n(974),
        s = n(984),
        a = n(988),
        u = n(1004),
        c = {};
      function l() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = void 0,
          r = void 0;
        return (
          Object(i.a)(t[t.length - 1]) && (r = t.pop()),
          "function" === typeof t[t.length - 1] && (n = t.pop()),
          1 === t.length && Object(o.a)(t[0]) && (t = t[0]),
          Object(u.a)(t, r).lift(new h(n))
        );
      }
      var h = (function () {
          function t(t) {
            this.resultSelector = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new f(t, this.resultSelector));
            }),
            t
          );
        })(),
        f = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (
              (r.resultSelector = n),
              (r.active = 0),
              (r.values = []),
              (r.observables = []),
              r
            );
          }
          return (
            r.a(e, t),
            (e.prototype._next = function (t) {
              this.values.push(c), this.observables.push(t);
            }),
            (e.prototype._complete = function () {
              var t = this.observables,
                e = t.length;
              if (0 === e) this.destination.complete();
              else {
                (this.active = e), (this.toRespond = e);
                for (var n = 0; n < e; n++) {
                  var r = t[n];
                  this.add(Object(a.a)(this, r, void 0, n));
                }
              }
            }),
            (e.prototype.notifyComplete = function (t) {
              0 === (this.active -= 1) && this.destination.complete();
            }),
            (e.prototype.notifyNext = function (t, e, n) {
              var r = this.values,
                i = r[n],
                o = this.toRespond
                  ? i === c
                    ? --this.toRespond
                    : this.toRespond
                  : 0;
              (r[n] = e),
                0 === o &&
                  (this.resultSelector
                    ? this._tryResultSelector(r)
                    : this.destination.next(r.slice()));
            }),
            (e.prototype._tryResultSelector = function (t) {
              var e;
              try {
                e = this.resultSelector.apply(this, t);
              } catch (n) {
                return void this.destination.error(n);
              }
              this.destination.next(e);
            }),
            e
          );
        })(s.a);
    },
    1024: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var r = n(994),
        i = n(979);
      function o(t) {
        return (
          void 0 === t && (t = Number.POSITIVE_INFINITY), Object(r.b)(i.a, t)
        );
      }
    },
    1025: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      var r = n(969),
        i = n(977),
        o = n(976);
      function s(t) {
        return new r.a(function (e) {
          var n;
          try {
            n = t();
          } catch (r) {
            return void e.error(r);
          }
          return (n ? Object(i.a)(n) : Object(o.b)()).subscribe(e);
        });
      }
    },
    1026: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var r = n(974);
      function i(t) {
        return !Object(r.a)(t) && t - parseFloat(t) + 1 >= 0;
      }
    },
    1027: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return c;
      }),
        n.d(e, "a", function () {
          return l;
        });
      var r = n(967),
        i = n(1004),
        o = n(974),
        s = n(968),
        a = n(1007),
        u = n(970);
      function c() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = t[t.length - 1];
        return (
          "function" === typeof n && t.pop(),
          Object(i.a)(t, void 0).lift(new l(n))
        );
      }
      var l = (function () {
          function t(t) {
            this.resultSelector = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new h(t, this.resultSelector));
            }),
            t
          );
        })(),
        h = (function (t) {
          function e(e, n, r) {
            void 0 === r && (r = Object.create(null));
            var i = t.call(this, e) || this;
            return (
              (i.resultSelector = n),
              (i.iterators = []),
              (i.active = 0),
              (i.resultSelector = "function" === typeof n ? n : void 0),
              i
            );
          }
          return (
            r.a(e, t),
            (e.prototype._next = function (t) {
              var e = this.iterators;
              Object(o.a)(t)
                ? e.push(new d(t))
                : "function" === typeof t[a.a]
                ? e.push(new f(t[a.a]()))
                : e.push(new p(this.destination, this, t));
            }),
            (e.prototype._complete = function () {
              var t = this.iterators,
                e = t.length;
              if ((this.unsubscribe(), 0 !== e)) {
                this.active = e;
                for (var n = 0; n < e; n++) {
                  var r = t[n];
                  if (r.stillUnsubscribed) this.destination.add(r.subscribe());
                  else this.active--;
                }
              } else this.destination.complete();
            }),
            (e.prototype.notifyInactive = function () {
              this.active--, 0 === this.active && this.destination.complete();
            }),
            (e.prototype.checkIterators = function () {
              for (
                var t = this.iterators,
                  e = t.length,
                  n = this.destination,
                  r = 0;
                r < e;
                r++
              ) {
                if ("function" === typeof (s = t[r]).hasValue && !s.hasValue())
                  return;
              }
              var i = !1,
                o = [];
              for (r = 0; r < e; r++) {
                var s,
                  a = (s = t[r]).next();
                if ((s.hasCompleted() && (i = !0), a.done))
                  return void n.complete();
                o.push(a.value);
              }
              this.resultSelector ? this._tryresultSelector(o) : n.next(o),
                i && n.complete();
            }),
            (e.prototype._tryresultSelector = function (t) {
              var e;
              try {
                e = this.resultSelector.apply(this, t);
              } catch (n) {
                return void this.destination.error(n);
              }
              this.destination.next(e);
            }),
            e
          );
        })(s.a),
        f = (function () {
          function t(t) {
            (this.iterator = t), (this.nextResult = t.next());
          }
          return (
            (t.prototype.hasValue = function () {
              return !0;
            }),
            (t.prototype.next = function () {
              var t = this.nextResult;
              return (this.nextResult = this.iterator.next()), t;
            }),
            (t.prototype.hasCompleted = function () {
              var t = this.nextResult;
              return Boolean(t && t.done);
            }),
            t
          );
        })(),
        d = (function () {
          function t(t) {
            (this.array = t),
              (this.index = 0),
              (this.length = 0),
              (this.length = t.length);
          }
          return (
            (t.prototype[a.a] = function () {
              return this;
            }),
            (t.prototype.next = function (t) {
              var e = this.index++,
                n = this.array;
              return e < this.length
                ? { value: n[e], done: !1 }
                : { value: null, done: !0 };
            }),
            (t.prototype.hasValue = function () {
              return this.array.length > this.index;
            }),
            (t.prototype.hasCompleted = function () {
              return this.array.length === this.index;
            }),
            t
          );
        })(),
        p = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, e) || this;
            return (
              (i.parent = n),
              (i.observable = r),
              (i.stillUnsubscribed = !0),
              (i.buffer = []),
              (i.isComplete = !1),
              i
            );
          }
          return (
            r.a(e, t),
            (e.prototype[a.a] = function () {
              return this;
            }),
            (e.prototype.next = function () {
              var t = this.buffer;
              return 0 === t.length && this.isComplete
                ? { value: null, done: !0 }
                : { value: t.shift(), done: !1 };
            }),
            (e.prototype.hasValue = function () {
              return this.buffer.length > 0;
            }),
            (e.prototype.hasCompleted = function () {
              return 0 === this.buffer.length && this.isComplete;
            }),
            (e.prototype.notifyComplete = function () {
              this.buffer.length > 0
                ? ((this.isComplete = !0), this.parent.notifyInactive())
                : this.destination.complete();
            }),
            (e.prototype.notifyNext = function (t) {
              this.buffer.push(t), this.parent.checkIterators();
            }),
            (e.prototype.subscribe = function () {
              return Object(u.c)(this.observable, new u.a(this));
            }),
            e
          );
        })(u.b);
    },
    1028: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "useState", function () {
          return v;
        }),
        n.d(e, "useReducer", function () {
          return b;
        }),
        n.d(e, "useEffect", function () {
          return y;
        }),
        n.d(e, "useLayoutEffect", function () {
          return g;
        }),
        n.d(e, "useRef", function () {
          return m;
        }),
        n.d(e, "useImperativeHandle", function () {
          return w;
        }),
        n.d(e, "useMemo", function () {
          return _;
        }),
        n.d(e, "useCallback", function () {
          return k;
        }),
        n.d(e, "useContext", function () {
          return x;
        }),
        n.d(e, "useDebugValue", function () {
          return E;
        }),
        n.d(e, "useErrorBoundary", function () {
          return S;
        });
      var r,
        i,
        o,
        s = n(987),
        a = 0,
        u = [],
        c = s.options.__b,
        l = s.options.__r,
        h = s.options.diffed,
        f = s.options.__c,
        d = s.options.unmount;
      function p(t, e) {
        s.options.__h && s.options.__h(i, t, a || e), (a = 0);
        var n = i.__H || (i.__H = { __: [], __h: [] });
        return t >= n.__.length && n.__.push({}), n.__[t];
      }
      function v(t) {
        return (a = 1), b(I, t);
      }
      function b(t, e, n) {
        var o = p(r++, 2);
        return (
          (o.t = t),
          o.__c ||
            ((o.__ = [
              n ? n(e) : I(void 0, e),
              function (t) {
                var e = o.t(o.__[0], t);
                o.__[0] !== e && ((o.__ = [e, o.__[1]]), o.__c.setState({}));
              },
            ]),
            (o.__c = i)),
          o.__
        );
      }
      function y(t, e) {
        var n = p(r++, 3);
        !s.options.__s &&
          O(n.__H, e) &&
          ((n.__ = t), (n.__H = e), i.__H.__h.push(n));
      }
      function g(t, e) {
        var n = p(r++, 4);
        !s.options.__s &&
          O(n.__H, e) &&
          ((n.__ = t), (n.__H = e), i.__h.push(n));
      }
      function m(t) {
        return (
          (a = 5),
          _(function () {
            return { current: t };
          }, [])
        );
      }
      function w(t, e, n) {
        (a = 6),
          g(
            function () {
              "function" == typeof t ? t(e()) : t && (t.current = e());
            },
            null == n ? n : n.concat(t)
          );
      }
      function _(t, e) {
        var n = p(r++, 7);
        return O(n.__H, e) && ((n.__ = t()), (n.__H = e), (n.__h = t)), n.__;
      }
      function k(t, e) {
        return (
          (a = 8),
          _(function () {
            return t;
          }, e)
        );
      }
      function x(t) {
        var e = i.context[t.__c],
          n = p(r++, 9);
        return (
          (n.__c = t),
          e ? (null == n.__ && ((n.__ = !0), e.sub(i)), e.props.value) : t.__
        );
      }
      function E(t, e) {
        s.options.useDebugValue && s.options.useDebugValue(e ? e(t) : t);
      }
      function S(t) {
        var e = p(r++, 10),
          n = v();
        return (
          (e.__ = t),
          i.componentDidCatch ||
            (i.componentDidCatch = function (t) {
              e.__ && e.__(t), n[1](t);
            }),
          [
            n[0],
            function () {
              n[1](void 0);
            },
          ]
        );
      }
      function M() {
        u.forEach(function (t) {
          if (t.__P)
            try {
              t.__H.__h.forEach(A), t.__H.__h.forEach(R), (t.__H.__h = []);
            } catch (i) {
              (t.__H.__h = []), s.options.__e(i, t.__v);
            }
        }),
          (u = []);
      }
      (s.options.__b = function (t) {
        (i = null), c && c(t);
      }),
        (s.options.__r = function (t) {
          l && l(t), (r = 0);
          var e = (i = t.__c).__H;
          e && (e.__h.forEach(A), e.__h.forEach(R), (e.__h = []));
        }),
        (s.options.diffed = function (t) {
          h && h(t);
          var e = t.__c;
          e &&
            e.__H &&
            e.__H.__h.length &&
            ((1 !== u.push(e) && o === s.options.requestAnimationFrame) ||
              (
                (o = s.options.requestAnimationFrame) ||
                function (t) {
                  var e,
                    n = function () {
                      clearTimeout(r),
                        C && cancelAnimationFrame(e),
                        setTimeout(t);
                    },
                    r = setTimeout(n, 100);
                  C && (e = requestAnimationFrame(n));
                }
              )(M)),
            (i = void 0);
        }),
        (s.options.__c = function (t, e) {
          e.some(function (t) {
            try {
              t.__h.forEach(A),
                (t.__h = t.__h.filter(function (t) {
                  return !t.__ || R(t);
                }));
            } catch (o) {
              e.some(function (t) {
                t.__h && (t.__h = []);
              }),
                (e = []),
                s.options.__e(o, t.__v);
            }
          }),
            f && f(t, e);
        }),
        (s.options.unmount = function (t) {
          d && d(t);
          var e = t.__c;
          if (e && e.__H)
            try {
              e.__H.__.forEach(A);
            } catch (t) {
              s.options.__e(t, e.__v);
            }
        });
      var C = "function" == typeof requestAnimationFrame;
      function A(t) {
        var e = i;
        "function" == typeof t.__c && t.__c(), (i = e);
      }
      function R(t) {
        var e = i;
        (t.__c = t.__()), (i = e);
      }
      function O(t, e) {
        return (
          !t ||
          t.length !== e.length ||
          e.some(function (e, n) {
            return e !== t[n];
          })
        );
      }
      function I(t, e) {
        return "function" == typeof e ? e(t) : e;
      }
    },
    1029: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return f;
      }),
        n.d(e, "a", function () {
          return d;
        });
      var r = n(967),
        i = 1,
        o = (function () {
          return Promise.resolve();
        })(),
        s = {};
      function a(t) {
        return t in s && (delete s[t], !0);
      }
      var u = function (t) {
          var e = i++;
          return (
            (s[e] = !0),
            o.then(function () {
              return a(e) && t();
            }),
            e
          );
        },
        c = function (t) {
          a(t);
        },
        l = (function (t) {
          function e(e, n) {
            var r = t.call(this, e, n) || this;
            return (r.scheduler = e), (r.work = n), r;
          }
          return (
            r.a(e, t),
            (e.prototype.requestAsyncId = function (e, n, r) {
              return (
                void 0 === r && (r = 0),
                null !== r && r > 0
                  ? t.prototype.requestAsyncId.call(this, e, n, r)
                  : (e.actions.push(this),
                    e.scheduled || (e.scheduled = u(e.flush.bind(e, null))))
              );
            }),
            (e.prototype.recycleAsyncId = function (e, n, r) {
              if (
                (void 0 === r && (r = 0),
                (null !== r && r > 0) || (null === r && this.delay > 0))
              )
                return t.prototype.recycleAsyncId.call(this, e, n, r);
              0 === e.actions.length && (c(n), (e.scheduled = void 0));
            }),
            e
          );
        })(n(1011).a),
        h = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            r.a(e, t),
            (e.prototype.flush = function (t) {
              (this.active = !0), (this.scheduled = void 0);
              var e,
                n = this.actions,
                r = -1,
                i = n.length;
              t = t || n.shift();
              do {
                if ((e = t.execute(t.state, t.delay))) break;
              } while (++r < i && (t = n.shift()));
              if (((this.active = !1), e)) {
                for (; ++r < i && (t = n.shift()); ) t.unsubscribe();
                throw e;
              }
            }),
            e
          );
        })(n(1005).a),
        f = new h(l),
        d = f;
    },
    1030: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return l;
      });
      var r = n(1114),
        i = n(1050),
        o = n(1007),
        s = n(983),
        a = n(1115),
        u = n(1116),
        c = n(1053),
        l = function (t) {
          if (t && "function" === typeof t[s.a])
            return (
              (l = t),
              function (t) {
                var e = l[s.a]();
                if ("function" !== typeof e.subscribe)
                  throw new TypeError(
                    "Provided object does not correctly implement Symbol.observable"
                  );
                return e.subscribe(t);
              }
            );
          if (Object(a.a)(t)) return Object(r.a)(t);
          if (Object(u.a)(t))
            return (
              (n = t),
              function (t) {
                return (
                  n
                    .then(
                      function (e) {
                        t.closed || (t.next(e), t.complete());
                      },
                      function (e) {
                        return t.error(e);
                      }
                    )
                    .then(null, i.a),
                  t
                );
              }
            );
          if (t && "function" === typeof t[o.a])
            return (
              (e = t),
              function (t) {
                for (var n = e[o.a](); ; ) {
                  var r = void 0;
                  try {
                    r = n.next();
                  } catch (i) {
                    return t.error(i), t;
                  }
                  if (r.done) {
                    t.complete();
                    break;
                  }
                  if ((t.next(r.value), t.closed)) break;
                }
                return (
                  "function" === typeof n.return &&
                    t.add(function () {
                      n.return && n.return();
                    }),
                  t
                );
              }
            );
          var e,
            n,
            l,
            h = Object(c.a)(t) ? "an invalid object" : "'" + t + "'";
          throw new TypeError(
            "You provided " +
              h +
              " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable."
          );
        };
    },
    1031: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return s;
      }),
        n.d(e, "a", function () {
          return a;
        });
      var r = n(967),
        i = (function (t) {
          function e(e, n) {
            var r = t.call(this, e, n) || this;
            return (r.scheduler = e), (r.work = n), r;
          }
          return (
            r.a(e, t),
            (e.prototype.schedule = function (e, n) {
              return (
                void 0 === n && (n = 0),
                n > 0
                  ? t.prototype.schedule.call(this, e, n)
                  : ((this.delay = n),
                    (this.state = e),
                    this.scheduler.flush(this),
                    this)
              );
            }),
            (e.prototype.execute = function (e, n) {
              return n > 0 || this.closed
                ? t.prototype.execute.call(this, e, n)
                : this._execute(e, n);
            }),
            (e.prototype.requestAsyncId = function (e, n, r) {
              return (
                void 0 === r && (r = 0),
                (null !== r && r > 0) || (null === r && this.delay > 0)
                  ? t.prototype.requestAsyncId.call(this, e, n, r)
                  : e.flush(this)
              );
            }),
            e
          );
        })(n(1011).a),
        o = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return r.a(e, t), e;
        })(n(1005).a),
        s = new o(i),
        a = s;
    },
    1035: function (t, e, n) {
      var r = n(454);
      t.exports = function (t, e) {
        for (
          ;
          !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = r(t));

        );
        return t;
      };
    },
    1043: function (t, e, n) {
      "use strict";
      (function (t) {
        var r = n(2),
          i = n(168),
          o = n(91),
          s = n(92),
          a = n(275),
          u = n(273),
          c = n(274),
          l =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.WalletLinkProvider = void 0);
        var h = l(n(1015)),
          f = l(n(1016)),
          d = n(1044),
          p = n(1047),
          v = n(1213),
          b = n(1048),
          y = n(1049),
          g = n(1118),
          m = n(986),
          w = l(n(1217)),
          _ = n(1234),
          k = n(1235),
          x = n(1236),
          E = "DefaultChainId",
          S = "DefaultJsonRpcUrl",
          M = "HasChainBeenSwitched",
          C = "HasChainOverriddenFromRelay",
          A = (function (e) {
            u(l, e);
            var n = c(l);
            function l(t) {
              var e, r;
              o(this, l),
                ((e = n.call(this))._filterPolyfill = new _.FilterPolyfill(
                  a(e)
                )),
                (e._subscriptionManager = new x.SubscriptionManager(a(e))),
                (e._relay = null),
                (e._addresses = []),
                (e.hasMadeFirstChainChangedEmission = !1),
                (e._send = e.send.bind(a(e))),
                (e._sendAsync = e.sendAsync.bind(a(e))),
                (e.setProviderInfo = e.setProviderInfo.bind(a(e))),
                (e.updateProviderInfo = e.updateProviderInfo.bind(a(e))),
                (e.getChainId = e.getChainId.bind(a(e))),
                (e.setAppInfo = e.setAppInfo.bind(a(e))),
                (e.enable = e.enable.bind(a(e))),
                (e.close = e.close.bind(a(e))),
                (e.send = e.send.bind(a(e))),
                (e.sendAsync = e.sendAsync.bind(a(e))),
                (e.request = e.request.bind(a(e))),
                (e._setAddresses = e._setAddresses.bind(a(e))),
                (e.scanQRCode = e.scanQRCode.bind(a(e))),
                (e.genericRequest = e.genericRequest.bind(a(e))),
                (e._jsonRpcUrlFromOpts = t.jsonRpcUrl),
                (e._overrideIsMetaMask = t.overrideIsMetaMask),
                (e._relayProvider = t.relayProvider),
                (e._storage = t.storage),
                (e._relayEventManager = t.relayEventManager),
                (e._walletLinkAnalytics = t.walletLinkAnalytics
                  ? t.walletLinkAnalytics
                  : new p.WalletLinkAnalytics()),
                (e.isCoinbaseWallet =
                  null === (r = t.overrideIsCoinbaseWallet) ||
                  void 0 === r ||
                  r);
              var i = e.getChainId(),
                s = (0, m.prepend0x)(i.toString(16));
              e.emit("connect", { chainIdStr: s });
              var u = e._storage.getItem(g.LOCAL_STORAGE_ADDRESSES_KEY);
              if (u) {
                var c = u.split(" ");
                "" !== c[0] &&
                  ((e._addresses = c), e.emit("accountsChanged", c));
              }
              return (
                e._subscriptionManager.events.on("notification", function (t) {
                  e.emit("message", { type: t.method, data: t.params });
                }),
                e._addresses.length > 0 && e.initializeRelay(),
                window.addEventListener("message", function (t) {
                  var n;
                  if (
                    "walletLinkMessage" === t.data.type &&
                    "defaultChainChanged" === t.data.data.action
                  ) {
                    var r = t.data.data.chainId,
                      i =
                        null !== (n = t.data.data.jsonRpcUrl) && void 0 !== n
                          ? n
                          : e.jsonRpcUrl;
                    e.updateProviderInfo(i, Number(r), !0);
                  }
                }),
                e
              );
            }
            return (
              s(l, [
                {
                  key: "selectedAddress",
                  get: function () {
                    return this._addresses[0] || void 0;
                  },
                },
                {
                  key: "networkVersion",
                  get: function () {
                    return this.getChainId().toString(10);
                  },
                },
                {
                  key: "chainId",
                  get: function () {
                    return (0, m.prepend0x)(this.getChainId().toString(16));
                  },
                },
                {
                  key: "isWalletLink",
                  get: function () {
                    return !0;
                  },
                },
                {
                  key: "isMetaMask",
                  get: function () {
                    return this._overrideIsMetaMask;
                  },
                },
                {
                  key: "host",
                  get: function () {
                    return this.jsonRpcUrl;
                  },
                },
                {
                  key: "connected",
                  get: function () {
                    return !0;
                  },
                },
                {
                  key: "isConnected",
                  value: function () {
                    return !0;
                  },
                },
                {
                  key: "jsonRpcUrl",
                  get: function () {
                    var t;
                    return null !== (t = this._storage.getItem(S)) &&
                      void 0 !== t
                      ? t
                      : this._jsonRpcUrlFromOpts;
                  },
                  set: function (t) {
                    this._storage.setItem(S, t);
                  },
                },
                {
                  key: "isChainOverridden",
                  get: function () {
                    return "true" === this._storage.getItem(C);
                  },
                  set: function (t) {
                    this._storage.setItem(C, t.toString());
                  },
                },
                {
                  key: "setProviderInfo",
                  value: function (t, e) {
                    this.isChainOverridden ||
                      this.updateProviderInfo(t, this.getChainId(), !1);
                  },
                },
                {
                  key: "updateProviderInfo",
                  value: function (t, e, n) {
                    if (!("true" === this._storage.getItem(M)) || !n) {
                      n && (this.isChainOverridden = !0), (this.jsonRpcUrl = t);
                      var r = this.getChainId();
                      this._storage.setItem(E, e.toString(10)),
                        (!((0, m.ensureIntNumber)(e) !== r) &&
                          this.hasMadeFirstChainChangedEmission) ||
                          (this.emit("chainChanged", this.getChainId()),
                          (this.hasMadeFirstChainChangedEmission = !0));
                    }
                  },
                },
                {
                  key: "addEthereumChain",
                  value: (function () {
                    var t = i(
                      r.mark(function t(e, n, i, o, s, a) {
                        var u, c, l, h;
                        return r.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (
                                    (0, m.ensureIntNumber)(e) !==
                                    this.getChainId()
                                  ) {
                                    t.next = 2;
                                    break;
                                  }
                                  return t.abrupt("return", !1);
                                case 2:
                                  return (t.next = 4), this.initializeRelay();
                                case 4:
                                  return (
                                    (l = t.sent),
                                    (t.next = 7),
                                    l.addEthereumChain(
                                      e.toString(),
                                      n,
                                      s,
                                      i,
                                      o,
                                      a
                                    ).promise
                                  );
                                case 7:
                                  if (
                                    "boolean" !== typeof (h = t.sent).result
                                  ) {
                                    t.next = 11;
                                    break;
                                  }
                                  return (
                                    !0 === h.result &&
                                      (this._storage.setItem(M, "true"),
                                      this.updateProviderInfo(n[0], e, !1)),
                                    t.abrupt("return", !0 === h.result)
                                  );
                                case 11:
                                  return (
                                    !0 ===
                                      (null === (u = h.result) || void 0 === u
                                        ? void 0
                                        : u.isApproved) &&
                                      (this._storage.setItem(M, "true"),
                                      this.updateProviderInfo(n[0], e, !1)),
                                    t.abrupt(
                                      "return",
                                      !0 ===
                                        (null === (c = h.result) || void 0 === c
                                          ? void 0
                                          : c.isApproved)
                                    )
                                  );
                                case 13:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          this
                        );
                      })
                    );
                    return function (e, n, r, i, o, s) {
                      return t.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "switchEthereumChain",
                  value: (function () {
                    var t = i(
                      r.mark(function t(e) {
                        var n, i, o, s, a, u;
                        return r.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (
                                    (0, m.ensureIntNumber)(e) !==
                                    this.getChainId()
                                  ) {
                                    t.next = 2;
                                    break;
                                  }
                                  return t.abrupt("return");
                                case 2:
                                  return (t.next = 4), this.initializeRelay();
                                case 4:
                                  return (
                                    (i = t.sent),
                                    (t.next = 7),
                                    i.switchEthereumChain(e.toString(10))
                                      .promise
                                  );
                                case 7:
                                  if (!(o = t.sent).errorCode) {
                                    t.next = 10;
                                    break;
                                  }
                                  throw d.ethErrors.provider.custom({
                                    code: o.errorCode,
                                  });
                                case 10:
                                  "boolean" !== typeof o.result
                                    ? (s = o.result).isApproved &&
                                      s.rpcUrl.length > 0 &&
                                      (this._storage.setItem(M, "true"),
                                      this.updateProviderInfo(s.rpcUrl, e, !1))
                                    : o.result &&
                                      (this._storage.setItem(M, "true"),
                                      (a = v.EthereumChain.fromChainId(
                                        BigInt(e)
                                      )),
                                      (u =
                                        null !==
                                          (n = v.EthereumChain.rpcUrl(a)) &&
                                        void 0 !== n
                                          ? n
                                          : ""),
                                      this.updateProviderInfo(u, e, !1));
                                case 11:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          this
                        );
                      })
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "setAppInfo",
                  value: function (t, e) {
                    this.initializeRelay().then(function (n) {
                      return n.setAppInfo(t, e);
                    });
                  },
                },
                {
                  key: "enable",
                  value: (function () {
                    var t = i(
                      r.mark(function t() {
                        return r.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (
                                    (this._walletLinkAnalytics.sendEvent(
                                      b.EVENTS.ETH_ACCOUNTS_STATE,
                                      {
                                        method: "provider::enable",
                                        addresses_length:
                                          this._addresses.length,
                                        sessionIdHash: this._relay
                                          ? y.Session.hash(
                                              this._relay.session.id
                                            )
                                          : null,
                                      }
                                    ),
                                    !(this._addresses.length > 0))
                                  ) {
                                    t.next = 3;
                                    break;
                                  }
                                  return t.abrupt("return", this._addresses);
                                case 3:
                                  return (
                                    (t.next = 5),
                                    this._send(
                                      k.JSONRPCMethod.eth_requestAccounts
                                    )
                                  );
                                case 5:
                                  return t.abrupt("return", t.sent);
                                case 6:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          this
                        );
                      })
                    );
                    return function () {
                      return t.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "close",
                  value: function () {
                    this.initializeRelay().then(function (t) {
                      return t.resetAndReload();
                    });
                  },
                },
                {
                  key: "send",
                  value: function (t, e) {
                    var n = this;
                    if ("string" === typeof t) {
                      var r = {
                        jsonrpc: "2.0",
                        id: 0,
                        method: t,
                        params: Array.isArray(e) ? e : void 0 !== e ? [e] : [],
                      };
                      return this._sendRequestAsync(r).then(function (t) {
                        return t.result;
                      });
                    }
                    if ("function" === typeof e) {
                      var i = t,
                        o = e;
                      return this._sendAsync(i, o);
                    }
                    if (Array.isArray(t))
                      return t.map(function (t) {
                        return n._sendRequest(t);
                      });
                    var s = t;
                    return this._sendRequest(s);
                  },
                },
                {
                  key: "sendAsync",
                  value: function (t, e) {
                    if ("function" !== typeof e)
                      throw new Error("callback is required");
                    if (Array.isArray(t)) {
                      var n = e;
                      this._sendMultipleRequestsAsync(t)
                        .then(function (t) {
                          return n(null, t);
                        })
                        .catch(function (t) {
                          return n(t, null);
                        });
                    } else {
                      var r = e;
                      this._sendRequestAsync(t)
                        .then(function (t) {
                          return r(null, t);
                        })
                        .catch(function (t) {
                          return r(t, null);
                        });
                    }
                  },
                },
                {
                  key: "request",
                  value: (function () {
                    var t = i(
                      r.mark(function t(e) {
                        var n, i, o, s, a;
                        return r.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (
                                    e &&
                                    "object" === typeof e &&
                                    !Array.isArray(e)
                                  ) {
                                    t.next = 2;
                                    break;
                                  }
                                  throw d.ethErrors.rpc.invalidRequest({
                                    message:
                                      "Expected a single, non-array, object argument.",
                                    data: e,
                                  });
                                case 2:
                                  if (
                                    ((n = e.method),
                                    (i = e.params),
                                    "string" === typeof n && 0 !== n.length)
                                  ) {
                                    t.next = 5;
                                    break;
                                  }
                                  throw d.ethErrors.rpc.invalidRequest({
                                    message:
                                      "'args.method' must be a non-empty string.",
                                    data: e,
                                  });
                                case 5:
                                  if (
                                    void 0 === i ||
                                    Array.isArray(i) ||
                                    ("object" === typeof i && null !== i)
                                  ) {
                                    t.next = 7;
                                    break;
                                  }
                                  throw d.ethErrors.rpc.invalidRequest({
                                    message:
                                      "'args.params' must be an object or array if provided.",
                                    data: e,
                                  });
                                case 7:
                                  return (
                                    (o = void 0 === i ? [] : i),
                                    (s =
                                      this._relayEventManager.makeRequestId()),
                                    (t.next = 11),
                                    this._sendRequestAsync({
                                      method: n,
                                      params: o,
                                      jsonrpc: "2.0",
                                      id: s,
                                    })
                                  );
                                case 11:
                                  return (
                                    (a = t.sent), t.abrupt("return", a.result)
                                  );
                                case 13:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          this
                        );
                      })
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "scanQRCode",
                  value: (function () {
                    var t = i(
                      r.mark(function t(e) {
                        var n, i;
                        return r.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (t.next = 2), this.initializeRelay();
                                case 2:
                                  return (
                                    (n = t.sent),
                                    (t.next = 5),
                                    n.scanQRCode((0, m.ensureRegExpString)(e))
                                      .promise
                                  );
                                case 5:
                                  if ("string" === typeof (i = t.sent).result) {
                                    t.next = 8;
                                    break;
                                  }
                                  throw new Error("result was not a string");
                                case 8:
                                  return t.abrupt("return", i.result);
                                case 9:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          this
                        );
                      })
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "genericRequest",
                  value: (function () {
                    var t = i(
                      r.mark(function t(e, n) {
                        var i, o;
                        return r.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (t.next = 2), this.initializeRelay();
                                case 2:
                                  return (
                                    (i = t.sent),
                                    (t.next = 5),
                                    i.genericRequest(e, n).promise
                                  );
                                case 5:
                                  if ("string" === typeof (o = t.sent).result) {
                                    t.next = 8;
                                    break;
                                  }
                                  throw new Error("result was not a string");
                                case 8:
                                  return t.abrupt("return", o.result);
                                case 9:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          this
                        );
                      })
                    );
                    return function (e, n) {
                      return t.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "supportsSubscriptions",
                  value: function () {
                    return !1;
                  },
                },
                {
                  key: "subscribe",
                  value: function () {
                    throw new Error("Subscriptions are not supported");
                  },
                },
                {
                  key: "unsubscribe",
                  value: function () {
                    throw new Error("Subscriptions are not supported");
                  },
                },
                {
                  key: "disconnect",
                  value: function () {
                    return !0;
                  },
                },
                {
                  key: "_sendRequest",
                  value: function (t) {
                    var e = { jsonrpc: "2.0", id: t.id },
                      n = t.method;
                    if (
                      ((e.result = this._handleSynchronousMethods(t)),
                      void 0 === e.result)
                    )
                      throw new Error(
                        "WalletLink does not support calling ".concat(
                          n,
                          " synchronously without "
                        ) +
                          "a callback. Please provide a callback parameter to call ".concat(
                            n,
                            " "
                          ) +
                          "asynchronously."
                      );
                    return e;
                  },
                },
                {
                  key: "_setAddresses",
                  value: function (t) {
                    if (!Array.isArray(t))
                      throw new Error("addresses is not an array");
                    var e = t.map(function (t) {
                      return (0, m.ensureAddressString)(t);
                    });
                    JSON.stringify(e) !== JSON.stringify(this._addresses) &&
                      ((this._addresses = e),
                      this.emit("accountsChanged", this._addresses),
                      this._storage.setItem(
                        g.LOCAL_STORAGE_ADDRESSES_KEY,
                        e.join(" ")
                      ),
                      window.dispatchEvent(
                        new CustomEvent("walletlink:addresses", {
                          detail: this._addresses,
                        })
                      ));
                  },
                },
                {
                  key: "_sendRequestAsync",
                  value: function (t) {
                    var e = this;
                    return new Promise(function (n, r) {
                      try {
                        var i = e._handleSynchronousMethods(t);
                        if (void 0 !== i)
                          return n({ jsonrpc: "2.0", id: t.id, result: i });
                        var o = e._handleAsynchronousFilterMethods(t);
                        if (void 0 !== o)
                          return void o
                            .then(function (e) {
                              return n(
                                Object.assign(Object.assign({}, e), {
                                  id: t.id,
                                })
                              );
                            })
                            .catch(function (t) {
                              return r(t);
                            });
                        var s = e._handleSubscriptionMethods(t);
                        if (void 0 !== s)
                          return void s
                            .then(function (e) {
                              return n({
                                jsonrpc: "2.0",
                                id: t.id,
                                result: e.result,
                              });
                            })
                            .catch(function (t) {
                              return r(t);
                            });
                      } catch (a) {
                        return r(a);
                      }
                      e._handleAsynchronousMethods(t)
                        .then(function (e) {
                          return (
                            e &&
                            n(Object.assign(Object.assign({}, e), { id: t.id }))
                          );
                        })
                        .catch(function (t) {
                          return r(t);
                        });
                    });
                  },
                },
                {
                  key: "_sendMultipleRequestsAsync",
                  value: function (t) {
                    var e = this;
                    return Promise.all(
                      t.map(function (t) {
                        return e._sendRequestAsync(t);
                      })
                    );
                  },
                },
                {
                  key: "_handleSynchronousMethods",
                  value: function (t) {
                    var e = t.method,
                      n = t.params || [];
                    switch (e) {
                      case k.JSONRPCMethod.eth_accounts:
                        return this._eth_accounts();
                      case k.JSONRPCMethod.eth_coinbase:
                        return this._eth_coinbase();
                      case k.JSONRPCMethod.eth_uninstallFilter:
                        return this._eth_uninstallFilter(n);
                      case k.JSONRPCMethod.net_version:
                        return this._net_version();
                      case k.JSONRPCMethod.eth_chainId:
                        return this._eth_chainId();
                      default:
                        return;
                    }
                  },
                },
                {
                  key: "_handleAsynchronousMethods",
                  value: (function () {
                    var t = i(
                      r.mark(function t(e) {
                        var n, i, o;
                        return r.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  (n = e.method),
                                    (i = e.params || []),
                                    (t.t0 = n),
                                    (t.next =
                                      t.t0 ===
                                      k.JSONRPCMethod.eth_requestAccounts
                                        ? 5
                                        : t.t0 === k.JSONRPCMethod.eth_sign
                                        ? 6
                                        : t.t0 === k.JSONRPCMethod.eth_ecRecover
                                        ? 7
                                        : t.t0 === k.JSONRPCMethod.personal_sign
                                        ? 8
                                        : t.t0 ===
                                          k.JSONRPCMethod.personal_ecRecover
                                        ? 9
                                        : t.t0 ===
                                          k.JSONRPCMethod.eth_signTransaction
                                        ? 10
                                        : t.t0 ===
                                          k.JSONRPCMethod.eth_sendRawTransaction
                                        ? 11
                                        : t.t0 ===
                                          k.JSONRPCMethod.eth_sendTransaction
                                        ? 12
                                        : t.t0 ===
                                          k.JSONRPCMethod.eth_signTypedData_v1
                                        ? 13
                                        : t.t0 ===
                                          k.JSONRPCMethod.eth_signTypedData_v2
                                        ? 14
                                        : t.t0 ===
                                          k.JSONRPCMethod.eth_signTypedData_v3
                                        ? 15
                                        : t.t0 ===
                                            k.JSONRPCMethod
                                              .eth_signTypedData_v4 ||
                                          t.t0 ===
                                            k.JSONRPCMethod.eth_signTypedData
                                        ? 16
                                        : t.t0 ===
                                          k.JSONRPCMethod.walletlink_arbitrary
                                        ? 17
                                        : t.t0 ===
                                          k.JSONRPCMethod
                                            .wallet_addEthereumChain
                                        ? 18
                                        : t.t0 ===
                                          k.JSONRPCMethod
                                            .wallet_switchEthereumChain
                                        ? 19
                                        : 20);
                                  break;
                                case 5:
                                  return t.abrupt(
                                    "return",
                                    this._eth_requestAccounts()
                                  );
                                case 6:
                                  return t.abrupt("return", this._eth_sign(i));
                                case 7:
                                  return t.abrupt(
                                    "return",
                                    this._eth_ecRecover(i)
                                  );
                                case 8:
                                  return t.abrupt(
                                    "return",
                                    this._personal_sign(i)
                                  );
                                case 9:
                                  return t.abrupt(
                                    "return",
                                    this._personal_ecRecover(i)
                                  );
                                case 10:
                                  return t.abrupt(
                                    "return",
                                    this._eth_signTransaction(i)
                                  );
                                case 11:
                                  return t.abrupt(
                                    "return",
                                    this._eth_sendRawTransaction(i)
                                  );
                                case 12:
                                  return t.abrupt(
                                    "return",
                                    this._eth_sendTransaction(i)
                                  );
                                case 13:
                                  return t.abrupt(
                                    "return",
                                    this._eth_signTypedData_v1(i)
                                  );
                                case 14:
                                  return t.abrupt(
                                    "return",
                                    this._throwUnsupportedMethodError()
                                  );
                                case 15:
                                  return t.abrupt(
                                    "return",
                                    this._eth_signTypedData_v3(i)
                                  );
                                case 16:
                                  return t.abrupt(
                                    "return",
                                    this._eth_signTypedData_v4(i)
                                  );
                                case 17:
                                  return t.abrupt(
                                    "return",
                                    this._walletlink_arbitrary(i)
                                  );
                                case 18:
                                  return t.abrupt(
                                    "return",
                                    this._wallet_addEthereumChain(i)
                                  );
                                case 19:
                                  return t.abrupt(
                                    "return",
                                    this._wallet_switchEthereumChain(i)
                                  );
                                case 20:
                                  return (t.next = 22), this.initializeRelay();
                                case 22:
                                  return (
                                    (o = t.sent),
                                    t.abrupt(
                                      "return",
                                      o.makeEthereumJSONRPCRequest(
                                        e,
                                        this.jsonRpcUrl
                                      )
                                    )
                                  );
                                case 24:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          this
                        );
                      })
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "_handleAsynchronousFilterMethods",
                  value: function (t) {
                    var e = t.method,
                      n = t.params || [];
                    switch (e) {
                      case k.JSONRPCMethod.eth_newFilter:
                        return this._eth_newFilter(n);
                      case k.JSONRPCMethod.eth_newBlockFilter:
                        return this._eth_newBlockFilter();
                      case k.JSONRPCMethod.eth_newPendingTransactionFilter:
                        return this._eth_newPendingTransactionFilter();
                      case k.JSONRPCMethod.eth_getFilterChanges:
                        return this._eth_getFilterChanges(n);
                      case k.JSONRPCMethod.eth_getFilterLogs:
                        return this._eth_getFilterLogs(n);
                    }
                  },
                },
                {
                  key: "_handleSubscriptionMethods",
                  value: function (t) {
                    switch (t.method) {
                      case k.JSONRPCMethod.eth_subscribe:
                      case k.JSONRPCMethod.eth_unsubscribe:
                        return this._subscriptionManager.handleRequest(t);
                    }
                  },
                },
                {
                  key: "_isKnownAddress",
                  value: function (t) {
                    try {
                      var e = (0, m.ensureAddressString)(t);
                      return this._addresses.includes(e);
                    } catch (n) {}
                    return !1;
                  },
                },
                {
                  key: "_ensureKnownAddress",
                  value: function (t) {
                    if (!this._isKnownAddress(t))
                      throw new Error("Unknown Ethereum address");
                  },
                },
                {
                  key: "_prepareTransactionParams",
                  value: function (e) {
                    var n = e.from
                      ? (0, m.ensureAddressString)(e.from)
                      : this.selectedAddress;
                    if (!n) throw new Error("Ethereum address is unavailable");
                    return (
                      this._ensureKnownAddress(n),
                      {
                        fromAddress: n,
                        toAddress: e.to
                          ? (0, m.ensureAddressString)(e.to)
                          : null,
                        weiValue:
                          null != e.value
                            ? (0, m.ensureBN)(e.value)
                            : new f.default(0),
                        data: e.data ? (0, m.ensureBuffer)(e.data) : t.alloc(0),
                        nonce:
                          null != e.nonce
                            ? (0, m.ensureIntNumber)(e.nonce)
                            : null,
                        gasPriceInWei:
                          null != e.gasPrice
                            ? (0, m.ensureBN)(e.gasPrice)
                            : null,
                        maxFeePerGas:
                          null != e.maxFeePerGas
                            ? (0, m.ensureBN)(e.maxFeePerGas)
                            : null,
                        maxPriorityFeePerGas:
                          null != e.maxPriorityFeePerGas
                            ? (0, m.ensureBN)(e.maxPriorityFeePerGas)
                            : null,
                        gasLimit: null != e.gas ? (0, m.ensureBN)(e.gas) : null,
                        chainId: this.getChainId(),
                      }
                    );
                  },
                },
                {
                  key: "_requireAuthorization",
                  value: function () {
                    if (0 === this._addresses.length)
                      throw d.ethErrors.provider.unauthorized({});
                  },
                },
                {
                  key: "_throwUnsupportedMethodError",
                  value: function () {
                    throw d.ethErrors.provider.unsupportedMethod({});
                  },
                },
                {
                  key: "_signEthereumMessage",
                  value: (function () {
                    var t = i(
                      r.mark(function t(e, n, i, o) {
                        var s, a;
                        return r.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    this._ensureKnownAddress(n),
                                    (t.prev = 1),
                                    (t.next = 4),
                                    this.initializeRelay()
                                  );
                                case 4:
                                  return (
                                    (s = t.sent),
                                    (t.next = 7),
                                    s.signEthereumMessage(e, n, i, o).promise
                                  );
                                case 7:
                                  return (
                                    (a = t.sent),
                                    t.abrupt("return", {
                                      jsonrpc: "2.0",
                                      id: 0,
                                      result: a.result,
                                    })
                                  );
                                case 11:
                                  if (
                                    ((t.prev = 11),
                                    (t.t0 = t.catch(1)),
                                    "string" !== typeof t.t0.message ||
                                      !t.t0.message.match(/(denied|rejected)/i))
                                  ) {
                                    t.next = 15;
                                    break;
                                  }
                                  throw d.ethErrors.provider.userRejectedRequest(
                                    "User denied message signature"
                                  );
                                case 15:
                                  throw t.t0;
                                case 16:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          this,
                          [[1, 11]]
                        );
                      })
                    );
                    return function (e, n, r, i) {
                      return t.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "_ethereumAddressFromSignedMessage",
                  value: (function () {
                    var t = i(
                      r.mark(function t(e, n, i) {
                        var o, s;
                        return r.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (t.next = 2), this.initializeRelay();
                                case 2:
                                  return (
                                    (o = t.sent),
                                    (t.next = 5),
                                    o.ethereumAddressFromSignedMessage(e, n, i)
                                      .promise
                                  );
                                case 5:
                                  return (
                                    (s = t.sent),
                                    t.abrupt("return", {
                                      jsonrpc: "2.0",
                                      id: 0,
                                      result: s.result,
                                    })
                                  );
                                case 7:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          this
                        );
                      })
                    );
                    return function (e, n, r) {
                      return t.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "_eth_accounts",
                  value: function () {
                    return this._addresses;
                  },
                },
                {
                  key: "_eth_coinbase",
                  value: function () {
                    return this.selectedAddress || null;
                  },
                },
                {
                  key: "_net_version",
                  value: function () {
                    return this.getChainId().toString(10);
                  },
                },
                {
                  key: "_eth_chainId",
                  value: function () {
                    return (0, m.hexStringFromIntNumber)(this.getChainId());
                  },
                },
                {
                  key: "getChainId",
                  value: function () {
                    var t = this._storage.getItem(E) || "1",
                      e = parseInt(t, 10);
                    return (0, m.ensureIntNumber)(e);
                  },
                },
                {
                  key: "_eth_requestAccounts",
                  value: (function () {
                    var t = i(
                      r.mark(function t() {
                        var e, n;
                        return r.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (
                                    (this._walletLinkAnalytics.sendEvent(
                                      b.EVENTS.ETH_ACCOUNTS_STATE,
                                      {
                                        method:
                                          "provider::_eth_requestAccounts",
                                        addresses_length:
                                          this._addresses.length,
                                        sessionIdHash: this._relay
                                          ? y.Session.hash(
                                              this._relay.session.id
                                            )
                                          : null,
                                      }
                                    ),
                                    !(this._addresses.length > 0))
                                  ) {
                                    t.next = 3;
                                    break;
                                  }
                                  return t.abrupt(
                                    "return",
                                    Promise.resolve({
                                      jsonrpc: "2.0",
                                      id: 0,
                                      result: this._addresses,
                                    })
                                  );
                                case 3:
                                  return (
                                    (t.prev = 3),
                                    (t.next = 6),
                                    this.initializeRelay()
                                  );
                                case 6:
                                  return (
                                    (n = t.sent),
                                    (t.next = 9),
                                    n.requestEthereumAccounts().promise
                                  );
                                case 9:
                                  (e = t.sent), (t.next = 17);
                                  break;
                                case 12:
                                  if (
                                    ((t.prev = 12),
                                    (t.t0 = t.catch(3)),
                                    "string" !== typeof t.t0.message ||
                                      !t.t0.message.match(/(denied|rejected)/i))
                                  ) {
                                    t.next = 16;
                                    break;
                                  }
                                  throw d.ethErrors.provider.userRejectedRequest(
                                    "User denied account authorization"
                                  );
                                case 16:
                                  throw t.t0;
                                case 17:
                                  if (e.result) {
                                    t.next = 19;
                                    break;
                                  }
                                  throw new Error("accounts received is empty");
                                case 19:
                                  return (
                                    this._setAddresses(e.result),
                                    t.abrupt("return", {
                                      jsonrpc: "2.0",
                                      id: 0,
                                      result: this._addresses,
                                    })
                                  );
                                case 21:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          this,
                          [[3, 12]]
                        );
                      })
                    );
                    return function () {
                      return t.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "_eth_sign",
                  value: function (t) {
                    this._requireAuthorization();
                    var e = (0, m.ensureAddressString)(t[0]),
                      n = (0, m.ensureBuffer)(t[1]);
                    return this._signEthereumMessage(n, e, !1);
                  },
                },
                {
                  key: "_eth_ecRecover",
                  value: function (t) {
                    var e = (0, m.ensureBuffer)(t[0]),
                      n = (0, m.ensureBuffer)(t[1]);
                    return this._ethereumAddressFromSignedMessage(e, n, !1);
                  },
                },
                {
                  key: "_personal_sign",
                  value: function (t) {
                    this._requireAuthorization();
                    var e = (0, m.ensureBuffer)(t[0]),
                      n = (0, m.ensureAddressString)(t[1]);
                    return this._signEthereumMessage(e, n, !0);
                  },
                },
                {
                  key: "_personal_ecRecover",
                  value: function (t) {
                    var e = (0, m.ensureBuffer)(t[0]),
                      n = (0, m.ensureBuffer)(t[1]);
                    return this._ethereumAddressFromSignedMessage(e, n, !0);
                  },
                },
                {
                  key: "_eth_signTransaction",
                  value: (function () {
                    var t = i(
                      r.mark(function t(e) {
                        var n, i, o;
                        return r.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    this._requireAuthorization(),
                                    (n = this._prepareTransactionParams(
                                      e[0] || {}
                                    )),
                                    (t.prev = 2),
                                    (t.next = 5),
                                    this.initializeRelay()
                                  );
                                case 5:
                                  return (
                                    (i = t.sent),
                                    (t.next = 8),
                                    i.signEthereumTransaction(n).promise
                                  );
                                case 8:
                                  return (
                                    (o = t.sent),
                                    t.abrupt("return", {
                                      jsonrpc: "2.0",
                                      id: 0,
                                      result: o.result,
                                    })
                                  );
                                case 12:
                                  if (
                                    ((t.prev = 12),
                                    (t.t0 = t.catch(2)),
                                    "string" !== typeof t.t0.message ||
                                      !t.t0.message.match(/(denied|rejected)/i))
                                  ) {
                                    t.next = 16;
                                    break;
                                  }
                                  throw d.ethErrors.provider.userRejectedRequest(
                                    "User denied transaction signature"
                                  );
                                case 16:
                                  throw t.t0;
                                case 17:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          this,
                          [[2, 12]]
                        );
                      })
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "_eth_sendRawTransaction",
                  value: (function () {
                    var t = i(
                      r.mark(function t(e) {
                        var n, i, o;
                        return r.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (n = (0, m.ensureBuffer)(e[0])),
                                    (t.next = 3),
                                    this.initializeRelay()
                                  );
                                case 3:
                                  return (
                                    (i = t.sent),
                                    (t.next = 6),
                                    i.submitEthereumTransaction(
                                      n,
                                      this.getChainId()
                                    ).promise
                                  );
                                case 6:
                                  return (
                                    (o = t.sent),
                                    t.abrupt("return", {
                                      jsonrpc: "2.0",
                                      id: 0,
                                      result: o.result,
                                    })
                                  );
                                case 8:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          this
                        );
                      })
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "_eth_sendTransaction",
                  value: (function () {
                    var t = i(
                      r.mark(function t(e) {
                        var n, i, o;
                        return r.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    this._requireAuthorization(),
                                    (n = this._prepareTransactionParams(
                                      e[0] || {}
                                    )),
                                    (t.prev = 2),
                                    (t.next = 5),
                                    this.initializeRelay()
                                  );
                                case 5:
                                  return (
                                    (i = t.sent),
                                    (t.next = 8),
                                    i.signAndSubmitEthereumTransaction(n)
                                      .promise
                                  );
                                case 8:
                                  return (
                                    (o = t.sent),
                                    t.abrupt("return", {
                                      jsonrpc: "2.0",
                                      id: 0,
                                      result: o.result,
                                    })
                                  );
                                case 12:
                                  if (
                                    ((t.prev = 12),
                                    (t.t0 = t.catch(2)),
                                    "string" !== typeof t.t0.message ||
                                      !t.t0.message.match(/(denied|rejected)/i))
                                  ) {
                                    t.next = 16;
                                    break;
                                  }
                                  throw d.ethErrors.provider.userRejectedRequest(
                                    "User denied transaction signature"
                                  );
                                case 16:
                                  throw t.t0;
                                case 17:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          this,
                          [[2, 12]]
                        );
                      })
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "_eth_signTypedData_v1",
                  value: (function () {
                    var t = i(
                      r.mark(function t(e) {
                        var n, i, o, s;
                        return r.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    this._requireAuthorization(),
                                    (n = (0, m.ensureParsedJSONObject)(e[0])),
                                    (i = (0, m.ensureAddressString)(e[1])),
                                    this._ensureKnownAddress(i),
                                    (o = w.default.hashForSignTypedDataLegacy({
                                      data: n,
                                    })),
                                    (s = JSON.stringify(n, null, 2)),
                                    t.abrupt(
                                      "return",
                                      this._signEthereumMessage(o, i, !1, s)
                                    )
                                  );
                                case 7:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          this
                        );
                      })
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "_eth_signTypedData_v3",
                  value: (function () {
                    var t = i(
                      r.mark(function t(e) {
                        var n, i, o, s;
                        return r.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    this._requireAuthorization(),
                                    (n = (0, m.ensureAddressString)(e[0])),
                                    (i = (0, m.ensureParsedJSONObject)(e[1])),
                                    this._ensureKnownAddress(n),
                                    (o = w.default.hashForSignTypedData_v3({
                                      data: i,
                                    })),
                                    (s = JSON.stringify(i, null, 2)),
                                    t.abrupt(
                                      "return",
                                      this._signEthereumMessage(o, n, !1, s)
                                    )
                                  );
                                case 7:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          this
                        );
                      })
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "_eth_signTypedData_v4",
                  value: (function () {
                    var t = i(
                      r.mark(function t(e) {
                        var n, i, o, s;
                        return r.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    this._requireAuthorization(),
                                    (n = (0, m.ensureAddressString)(e[0])),
                                    (i = (0, m.ensureParsedJSONObject)(e[1])),
                                    this._ensureKnownAddress(n),
                                    (o = w.default.hashForSignTypedData_v4({
                                      data: i,
                                    })),
                                    (s = JSON.stringify(i, null, 2)),
                                    t.abrupt(
                                      "return",
                                      this._signEthereumMessage(o, n, !1, s)
                                    )
                                  );
                                case 7:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          this
                        );
                      })
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "_walletlink_arbitrary",
                  value: (function () {
                    var t = i(
                      r.mark(function t(e) {
                        var n, i, o;
                        return r.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (
                                    ((n = e[0]), "string" === typeof (i = e[1]))
                                  ) {
                                    t.next = 4;
                                    break;
                                  }
                                  throw new Error("parameter must be a string");
                                case 4:
                                  if ("object" === typeof n && null !== n) {
                                    t.next = 6;
                                    break;
                                  }
                                  throw new Error(
                                    "parameter must be an object"
                                  );
                                case 6:
                                  return (
                                    (t.next = 8), this.genericRequest(n, i)
                                  );
                                case 8:
                                  return (
                                    (o = t.sent),
                                    t.abrupt("return", {
                                      jsonrpc: "2.0",
                                      id: 0,
                                      result: o,
                                    })
                                  );
                                case 10:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          this
                        );
                      })
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "_wallet_addEthereumChain",
                  value: (function () {
                    var t = i(
                      r.mark(function t(e) {
                        var n, i, o, s, a, u;
                        return r.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (
                                    ((a = e[0]),
                                    0 !==
                                      (null === (n = a.rpcUrls) || void 0 === n
                                        ? void 0
                                        : n.length))
                                  ) {
                                    t.next = 3;
                                    break;
                                  }
                                  return t.abrupt("return", {
                                    jsonrpc: "2.0",
                                    id: 0,
                                    error: {
                                      code: 2,
                                      message:
                                        "please pass in at least 1 rpcUrl",
                                    },
                                  });
                                case 3:
                                  if (
                                    a.chainName &&
                                    "" !== a.chainName.trim()
                                  ) {
                                    t.next = 5;
                                    break;
                                  }
                                  throw d.ethErrors.provider.custom({
                                    code: 0,
                                    message: "chainName is a required field",
                                  });
                                case 5:
                                  if (a.nativeCurrency) {
                                    t.next = 7;
                                    break;
                                  }
                                  throw d.ethErrors.provider.custom({
                                    code: 0,
                                    message:
                                      "nativeCurrency is a required field",
                                  });
                                case 7:
                                  return (
                                    (u = parseInt(a.chainId, 16)),
                                    (t.next = 10),
                                    this.addEthereumChain(
                                      u,
                                      null !== (i = a.rpcUrls) && void 0 !== i
                                        ? i
                                        : [],
                                      null !== (o = a.blockExplorerUrls) &&
                                        void 0 !== o
                                        ? o
                                        : [],
                                      a.chainName,
                                      null !== (s = a.iconUrls) && void 0 !== s
                                        ? s
                                        : [],
                                      a.nativeCurrency
                                    )
                                  );
                                case 10:
                                  if (!t.sent) {
                                    t.next = 15;
                                    break;
                                  }
                                  return t.abrupt("return", {
                                    jsonrpc: "2.0",
                                    id: 0,
                                    result: null,
                                  });
                                case 15:
                                  return t.abrupt("return", {
                                    jsonrpc: "2.0",
                                    id: 0,
                                    error: {
                                      code: 2,
                                      message: "unable to add ethereum chain",
                                    },
                                  });
                                case 16:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          this
                        );
                      })
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "_wallet_switchEthereumChain",
                  value: (function () {
                    var t = i(
                      r.mark(function t(e) {
                        var n;
                        return r.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (n = e[0]),
                                    (t.next = 3),
                                    this.switchEthereumChain(
                                      parseInt(n.chainId, 16)
                                    )
                                  );
                                case 3:
                                  return t.abrupt("return", {
                                    jsonrpc: "2.0",
                                    id: 0,
                                    result: null,
                                  });
                                case 4:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          this
                        );
                      })
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "_eth_uninstallFilter",
                  value: function (t) {
                    var e = (0, m.ensureHexString)(t[0]);
                    return this._filterPolyfill.uninstallFilter(e);
                  },
                },
                {
                  key: "_eth_newFilter",
                  value: (function () {
                    var t = i(
                      r.mark(function t(e) {
                        var n, i;
                        return r.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (n = e[0]),
                                    (t.next = 3),
                                    this._filterPolyfill.newFilter(n)
                                  );
                                case 3:
                                  return (
                                    (i = t.sent),
                                    t.abrupt("return", {
                                      jsonrpc: "2.0",
                                      id: 0,
                                      result: i,
                                    })
                                  );
                                case 5:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          this
                        );
                      })
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "_eth_newBlockFilter",
                  value: (function () {
                    var t = i(
                      r.mark(function t() {
                        var e;
                        return r.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (t.next = 2),
                                    this._filterPolyfill.newBlockFilter()
                                  );
                                case 2:
                                  return (
                                    (e = t.sent),
                                    t.abrupt("return", {
                                      jsonrpc: "2.0",
                                      id: 0,
                                      result: e,
                                    })
                                  );
                                case 4:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          this
                        );
                      })
                    );
                    return function () {
                      return t.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "_eth_newPendingTransactionFilter",
                  value: (function () {
                    var t = i(
                      r.mark(function t() {
                        var e;
                        return r.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (t.next = 2),
                                    this._filterPolyfill.newPendingTransactionFilter()
                                  );
                                case 2:
                                  return (
                                    (e = t.sent),
                                    t.abrupt("return", {
                                      jsonrpc: "2.0",
                                      id: 0,
                                      result: e,
                                    })
                                  );
                                case 4:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          this
                        );
                      })
                    );
                    return function () {
                      return t.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "_eth_getFilterChanges",
                  value: function (t) {
                    var e = (0, m.ensureHexString)(t[0]);
                    return this._filterPolyfill.getFilterChanges(e);
                  },
                },
                {
                  key: "_eth_getFilterLogs",
                  value: function (t) {
                    var e = (0, m.ensureHexString)(t[0]);
                    return this._filterPolyfill.getFilterLogs(e);
                  },
                },
                {
                  key: "initializeRelay",
                  value: function () {
                    var t = this;
                    return this._relay
                      ? Promise.resolve(this._relay)
                      : this._relayProvider().then(function (e) {
                          return (
                            e.setAccountsCallback(function (e) {
                              return t._setAddresses(e);
                            }),
                            e.setChainCallback(function (e, n) {
                              t.updateProviderInfo(n, parseInt(e, 10), !0);
                            }),
                            (t._relay = e),
                            e
                          );
                        });
                  },
                },
              ]),
              l
            );
          })(h.default);
        e.WalletLinkProvider = A;
      }.call(this, n(230).Buffer));
    },
    1044: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.getMessageFromCode =
          e.serializeError =
          e.EthereumProviderError =
          e.EthereumRpcError =
          e.ethErrors =
          e.errorCodes =
            void 0);
      var r = n(1045);
      Object.defineProperty(e, "EthereumRpcError", {
        enumerable: !0,
        get: function () {
          return r.EthereumRpcError;
        },
      }),
        Object.defineProperty(e, "EthereumProviderError", {
          enumerable: !0,
          get: function () {
            return r.EthereumProviderError;
          },
        });
      var i = n(1111);
      Object.defineProperty(e, "serializeError", {
        enumerable: !0,
        get: function () {
          return i.serializeError;
        },
      }),
        Object.defineProperty(e, "getMessageFromCode", {
          enumerable: !0,
          get: function () {
            return i.getMessageFromCode;
          },
        });
      var o = n(1212);
      Object.defineProperty(e, "ethErrors", {
        enumerable: !0,
        get: function () {
          return o.ethErrors;
        },
      });
      var s = n(1046);
      Object.defineProperty(e, "errorCodes", {
        enumerable: !0,
        get: function () {
          return s.errorCodes;
        },
      });
    },
    1045: function (t, e, n) {
      "use strict";
      var r = n(91),
        i = n(92),
        o = n(273),
        s = n(274),
        a = n(1109);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.EthereumProviderError = e.EthereumRpcError = void 0);
      var u = n(1110),
        c = (function (t) {
          o(n, t);
          var e = s(n);
          function n(t, i, o) {
            var s;
            if ((r(this, n), !Number.isInteger(t)))
              throw new Error('"code" must be an integer.');
            if (!i || "string" !== typeof i)
              throw new Error('"message" must be a nonempty string.');
            return (
              ((s = e.call(this, i)).code = t), void 0 !== o && (s.data = o), s
            );
          }
          return (
            i(n, [
              {
                key: "serialize",
                value: function () {
                  var t = { code: this.code, message: this.message };
                  return (
                    void 0 !== this.data && (t.data = this.data),
                    this.stack && (t.stack = this.stack),
                    t
                  );
                },
              },
              {
                key: "toString",
                value: function () {
                  return u.default(this.serialize(), h, 2);
                },
              },
            ]),
            n
          );
        })(a(Error));
      e.EthereumRpcError = c;
      var l = (function (t) {
        o(n, t);
        var e = s(n);
        function n(t, i, o) {
          if (
            (r(this, n),
            !(function (t) {
              return Number.isInteger(t) && t >= 1e3 && t <= 4999;
            })(t))
          )
            throw new Error(
              '"code" must be an integer such that: 1000 <= code <= 4999'
            );
          return e.call(this, t, i, o);
        }
        return i(n);
      })(c);
      function h(t, e) {
        if ("[Circular]" !== e) return e;
      }
      e.EthereumProviderError = l;
    },
    1046: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.errorValues = e.errorCodes = void 0),
        (e.errorCodes = {
          rpc: {
            invalidInput: -32e3,
            resourceNotFound: -32001,
            resourceUnavailable: -32002,
            transactionRejected: -32003,
            methodNotSupported: -32004,
            limitExceeded: -32005,
            parse: -32700,
            invalidRequest: -32600,
            methodNotFound: -32601,
            invalidParams: -32602,
            internal: -32603,
          },
          provider: {
            userRejectedRequest: 4001,
            unauthorized: 4100,
            unsupportedMethod: 4200,
            disconnected: 4900,
            chainDisconnected: 4901,
          },
        }),
        (e.errorValues = {
          "-32700": {
            standard: "JSON RPC 2.0",
            message:
              "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
          },
          "-32600": {
            standard: "JSON RPC 2.0",
            message: "The JSON sent is not a valid Request object.",
          },
          "-32601": {
            standard: "JSON RPC 2.0",
            message: "The method does not exist / is not available.",
          },
          "-32602": {
            standard: "JSON RPC 2.0",
            message: "Invalid method parameter(s).",
          },
          "-32603": {
            standard: "JSON RPC 2.0",
            message: "Internal JSON-RPC error.",
          },
          "-32000": { standard: "EIP-1474", message: "Invalid input." },
          "-32001": { standard: "EIP-1474", message: "Resource not found." },
          "-32002": { standard: "EIP-1474", message: "Resource unavailable." },
          "-32003": { standard: "EIP-1474", message: "Transaction rejected." },
          "-32004": { standard: "EIP-1474", message: "Method not supported." },
          "-32005": {
            standard: "EIP-1474",
            message: "Request limit exceeded.",
          },
          4001: { standard: "EIP-1193", message: "User rejected the request." },
          4100: {
            standard: "EIP-1193",
            message:
              "The requested account and/or method has not been authorized by the user.",
          },
          4200: {
            standard: "EIP-1193",
            message:
              "The requested method is not supported by this Ethereum provider.",
          },
          4900: {
            standard: "EIP-1193",
            message: "The provider is disconnected from all chains.",
          },
          4901: {
            standard: "EIP-1193",
            message: "The provider is disconnected from the specified chain.",
          },
        });
    },
    1047: function (t, e, n) {
      "use strict";
      var r = n(91),
        i = n(92);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.WalletLinkAnalytics = void 0);
      var o = (function () {
        function t() {
          r(this, t);
        }
        return i(t, [{ key: "sendEvent", value: function (t, e) {} }]), t;
      })();
      e.WalletLinkAnalytics = o;
    },
    1048: function (t, e, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, n, r) {
                void 0 === r && (r = n),
                  Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: function () {
                      return e[n];
                    },
                  });
              }
            : function (t, e, n, r) {
                void 0 === r && (r = n), (t[r] = e[n]);
              }),
        i =
          (this && this.__exportStar) ||
          function (t, e) {
            for (var n in t)
              "default" === n ||
                Object.prototype.hasOwnProperty.call(e, n) ||
                r(e, t, n);
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        i(n(1214), e),
        i(n(1215), e);
    },
    1049: function (t, e, n) {
      "use strict";
      var r = n(91),
        i = n(92);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Session = void 0);
      var o = n(1216),
        s = n(997),
        a = n(1010),
        u = n(986),
        c = "session:id",
        l = "session:secret",
        h = "session:linked",
        f = (function () {
          function t(e, n, i, s) {
            r(this, t),
              (this._storage = e),
              (this._id = n || (0, u.randomBytesHex)(16)),
              (this._secret = i || (0, u.randomBytesHex)(32));
            var a = o.sha256.create();
            a.update(
              "".concat(this._id, ", ").concat(this._secret, " WalletLink")
            ),
              (this._key = a.hex()),
              (this._linked = !!s);
          }
          return (
            i(
              t,
              [
                {
                  key: "id",
                  get: function () {
                    return this._id;
                  },
                },
                {
                  key: "secret",
                  get: function () {
                    return this._secret;
                  },
                },
                {
                  key: "key",
                  get: function () {
                    return this._key;
                  },
                },
                {
                  key: "linked",
                  get: function () {
                    return this._linked;
                  },
                  set: function (t) {
                    (this._linked = t), this.persistLinked();
                  },
                },
                {
                  key: "save",
                  value: function () {
                    return (
                      this._storage.setItem(c, this._id),
                      this._storage.setItem(l, this._secret),
                      this.persistLinked(),
                      this
                    );
                  },
                },
                {
                  key: "persistLinked",
                  value: function () {
                    this._storage.setItem(h, this._linked ? "1" : "0");
                  },
                },
              ],
              [
                {
                  key: "load",
                  value: function (e) {
                    var n = e.getItem(c),
                      r = e.getItem(h),
                      i = e.getItem(l);
                    return n && i ? new t(e, n, i, "1" === r) : null;
                  },
                },
                {
                  key: "persistedSessionIdChange$",
                  get: function () {
                    return (0, s.fromEvent)(window, "storage").pipe(
                      (0, a.filter)(function (t) {
                        return t.key === c;
                      }),
                      (0, a.map)(function (t) {
                        return {
                          oldValue: t.oldValue || null,
                          newValue: t.newValue || null,
                        };
                      })
                    );
                  },
                },
                {
                  key: "hash",
                  value: function (t) {
                    var e = o.sha256.create();
                    return e.update(t).hex();
                  },
                },
              ]
            ),
            t
          );
        })();
      e.Session = f;
    },
    1050: function (t, e, n) {
      "use strict";
      function r(t) {
        setTimeout(function () {
          throw t;
        }, 0);
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    1051: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      var r = (function () {
        return "function" === typeof Symbol
          ? Symbol("rxSubscriber")
          : "@@rxSubscriber_" + Math.random();
      })();
    },
    1052: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      var r = (function () {
        function t(t) {
          return (
            Error.call(this),
            (this.message = t
              ? t.length +
                " errors occurred during unsubscription:\n" +
                t
                  .map(function (t, e) {
                    return e + 1 + ") " + t.toString();
                  })
                  .join("\n  ")
              : ""),
            (this.name = "UnsubscriptionError"),
            (this.errors = t),
            this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
    },
    1053: function (t, e, n) {
      "use strict";
      function r(t) {
        return null !== t && "object" === typeof t;
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    1054: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var r = n(968);
      function i(t) {
        for (; t; ) {
          var e = t,
            n = e.closed,
            i = e.destination,
            o = e.isStopped;
          if (n || o) return !1;
          t = i && i instanceof r.a ? i : null;
        }
        return !0;
      }
    },
    1055: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return c;
      }),
        n.d(e, "b", function () {
          return l;
        });
      var r = n(967),
        i = n(972),
        o = n(969),
        s = n(968),
        a = n(971),
        u = n(1018),
        c = (function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            return (
              (r.source = e),
              (r.subjectFactory = n),
              (r._refCount = 0),
              (r._isComplete = !1),
              r
            );
          }
          return (
            r.a(e, t),
            (e.prototype._subscribe = function (t) {
              return this.getSubject().subscribe(t);
            }),
            (e.prototype.getSubject = function () {
              var t = this._subject;
              return (
                (t && !t.isStopped) || (this._subject = this.subjectFactory()),
                this._subject
              );
            }),
            (e.prototype.connect = function () {
              var t = this._connection;
              return (
                t ||
                  ((this._isComplete = !1),
                  (t = this._connection = new a.a()).add(
                    this.source.subscribe(new h(this.getSubject(), this))
                  ),
                  t.closed && ((this._connection = null), (t = a.a.EMPTY))),
                t
              );
            }),
            (e.prototype.refCount = function () {
              return Object(u.a)()(this);
            }),
            e
          );
        })(o.a),
        l = (function () {
          var t = c.prototype;
          return {
            operator: { value: null },
            _refCount: { value: 0, writable: !0 },
            _subject: { value: null, writable: !0 },
            _connection: { value: null, writable: !0 },
            _subscribe: { value: t._subscribe },
            _isComplete: { value: t._isComplete, writable: !0 },
            getSubject: { value: t.getSubject },
            connect: { value: t.connect },
            refCount: { value: t.refCount },
          };
        })(),
        h = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (r.connectable = n), r;
          }
          return (
            r.a(e, t),
            (e.prototype._error = function (e) {
              this._unsubscribe(), t.prototype._error.call(this, e);
            }),
            (e.prototype._complete = function () {
              (this.connectable._isComplete = !0),
                this._unsubscribe(),
                t.prototype._complete.call(this);
            }),
            (e.prototype._unsubscribe = function () {
              var t = this.connectable;
              if (t) {
                this.connectable = null;
                var e = t._connection;
                (t._refCount = 0),
                  (t._subject = null),
                  (t._connection = null),
                  e && e.unsubscribe();
              }
            }),
            e
          );
        })(i.b);
      s.a;
    },
    1056: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      var r = n(967),
        i = n(972),
        o = n(1002),
        s = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (n._value = e), n;
          }
          return (
            r.a(e, t),
            Object.defineProperty(e.prototype, "value", {
              get: function () {
                return this.getValue();
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype._subscribe = function (e) {
              var n = t.prototype._subscribe.call(this, e);
              return n && !n.closed && e.next(this._value), n;
            }),
            (e.prototype.getValue = function () {
              if (this.hasError) throw this.thrownError;
              if (this.closed) throw new o.a();
              return this._value;
            }),
            (e.prototype.next = function (e) {
              t.prototype.next.call(this, (this._value = e));
            }),
            e
          );
        })(i.a);
    },
    1057: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return s;
      }),
        n.d(e, "a", function () {
          return u;
        });
      var r = n(967),
        i = n(968),
        o = n(991);
      function s(t, e) {
        return (
          void 0 === e && (e = 0),
          function (n) {
            return n.lift(new a(t, e));
          }
        );
      }
      var a = (function () {
          function t(t, e) {
            void 0 === e && (e = 0), (this.scheduler = t), (this.delay = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new u(t, this.scheduler, this.delay));
            }),
            t
          );
        })(),
        u = (function (t) {
          function e(e, n, r) {
            void 0 === r && (r = 0);
            var i = t.call(this, e) || this;
            return (i.scheduler = n), (i.delay = r), i;
          }
          return (
            r.a(e, t),
            (e.dispatch = function (t) {
              var e = t.notification,
                n = t.destination;
              e.observe(n), this.unsubscribe();
            }),
            (e.prototype.scheduleMessage = function (t) {
              this.destination.add(
                this.scheduler.schedule(
                  e.dispatch,
                  this.delay,
                  new c(t, this.destination)
                )
              );
            }),
            (e.prototype._next = function (t) {
              this.scheduleMessage(o.a.createNext(t));
            }),
            (e.prototype._error = function (t) {
              this.scheduleMessage(o.a.createError(t)), this.unsubscribe();
            }),
            (e.prototype._complete = function () {
              this.scheduleMessage(o.a.createComplete()), this.unsubscribe();
            }),
            e
          );
        })(i.a),
        c = (function () {
          return function (t, e) {
            (this.notification = t), (this.destination = e);
          };
        })();
    },
    1058: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var r = n(969),
        i = n(971);
      function o(t, e) {
        return new r.a(function (n) {
          var r = new i.a(),
            o = 0;
          return (
            r.add(
              e.schedule(function () {
                o !== t.length
                  ? (n.next(t[o++]), n.closed || r.add(this.schedule()))
                  : n.complete();
              })
            ),
            r
          );
        });
      }
    },
    1059: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      var r = (function () {
        function t(e, n) {
          void 0 === n && (n = t.now),
            (this.SchedulerAction = e),
            (this.now = n);
        }
        return (
          (t.prototype.schedule = function (t, e, n) {
            return (
              void 0 === e && (e = 0),
              new this.SchedulerAction(this, t).schedule(n, e)
            );
          }),
          (t.now = function () {
            return Date.now();
          }),
          t
        );
      })();
    },
    1060: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      var r = (function () {
        function t() {
          return (
            Error.call(this),
            (this.message = "Timeout has occurred"),
            (this.name = "TimeoutError"),
            this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
    },
    1061: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var r = n(1024);
      function i() {
        return Object(r.a)(1);
      }
    },
    1062: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return a;
      });
      var r = n(969),
        i = n(978),
        o = n(1024),
        s = n(1004);
      function a() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = Number.POSITIVE_INFINITY,
          a = null,
          u = t[t.length - 1];
        return (
          Object(i.a)(u)
            ? ((a = t.pop()),
              t.length > 1 &&
                "number" === typeof t[t.length - 1] &&
                (n = t.pop()))
            : "number" === typeof u && (n = t.pop()),
          null === a && 1 === t.length && t[0] instanceof r.a
            ? t[0]
            : Object(o.a)(n)(Object(s.a)(t, a))
        );
      }
    },
    1063: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return u;
      });
      var r = n(967),
        i = n(974),
        o = n(1004),
        s = n(984),
        a = n(988);
      function u() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        if (1 === t.length) {
          if (!Object(i.a)(t[0])) return t[0];
          t = t[0];
        }
        return Object(o.a)(t, void 0).lift(new c());
      }
      var c = (function () {
          function t() {}
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new l(t));
            }),
            t
          );
        })(),
        l = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return (
              (n.hasFirst = !1), (n.observables = []), (n.subscriptions = []), n
            );
          }
          return (
            r.a(e, t),
            (e.prototype._next = function (t) {
              this.observables.push(t);
            }),
            (e.prototype._complete = function () {
              var t = this.observables,
                e = t.length;
              if (0 === e) this.destination.complete();
              else {
                for (var n = 0; n < e && !this.hasFirst; n++) {
                  var r = t[n],
                    i = Object(a.a)(this, r, void 0, n);
                  this.subscriptions && this.subscriptions.push(i), this.add(i);
                }
                this.observables = null;
              }
            }),
            (e.prototype.notifyNext = function (t, e, n) {
              if (!this.hasFirst) {
                this.hasFirst = !0;
                for (var r = 0; r < this.subscriptions.length; r++)
                  if (r !== n) {
                    var i = this.subscriptions[r];
                    i.unsubscribe(), this.remove(i);
                  }
                this.subscriptions = null;
              }
              this.destination.next(e);
            }),
            e
          );
        })(s.a);
    },
    1064: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return a;
      });
      var r = n(969),
        i = n(973),
        o = n(1026),
        s = n(978);
      function a(t, e, n) {
        void 0 === t && (t = 0);
        var a = -1;
        return (
          Object(o.a)(e)
            ? (a = Number(e) < 1 ? 1 : Number(e))
            : Object(s.a)(e) && (n = e),
          Object(s.a)(n) || (n = i.a),
          new r.a(function (e) {
            var r = Object(o.a)(t) ? t : +t - n.now();
            return n.schedule(u, r, { index: 0, period: a, subscriber: e });
          })
        );
      }
      function u(t) {
        var e = t.index,
          n = t.period,
          r = t.subscriber;
        if ((r.next(e), !r.closed)) {
          if (-1 === n) return r.complete();
          (t.index = e + 1), this.schedule(t, n);
        }
      }
    },
    1065: function (t, e, n) {
      "use strict";
      function r() {
        return function (t) {
          return t;
        };
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.RegExpString =
          e.IntNumber =
          e.BigIntString =
          e.AddressString =
          e.HexString =
          e.OpaqueType =
            void 0),
        (e.OpaqueType = r),
        (e.HexString = function (t) {
          return t;
        }),
        (e.AddressString = function (t) {
          return t;
        }),
        (e.BigIntString = function (t) {
          return t;
        }),
        (e.IntNumber = function (t) {
          return Math.floor(t);
        }),
        (e.RegExpString = function (t) {
          return t;
        });
    },
    1066: function (t, e, n) {
      "use strict";
      var r = n(995).codes.ERR_STREAM_PREMATURE_CLOSE;
      function i() {}
      t.exports = function t(e, n, o) {
        if ("function" === typeof n) return t(e, null, n);
        n || (n = {}),
          (o = (function (t) {
            var e = !1;
            return function () {
              if (!e) {
                e = !0;
                for (
                  var n = arguments.length, r = new Array(n), i = 0;
                  i < n;
                  i++
                )
                  r[i] = arguments[i];
                t.apply(this, r);
              }
            };
          })(o || i));
        var s = n.readable || (!1 !== n.readable && e.readable),
          a = n.writable || (!1 !== n.writable && e.writable),
          u = function () {
            e.writable || l();
          },
          c = e._writableState && e._writableState.finished,
          l = function () {
            (a = !1), (c = !0), s || o.call(e);
          },
          h = e._readableState && e._readableState.endEmitted,
          f = function () {
            (s = !1), (h = !0), a || o.call(e);
          },
          d = function (t) {
            o.call(e, t);
          },
          p = function () {
            var t;
            return s && !h
              ? ((e._readableState && e._readableState.ended) || (t = new r()),
                o.call(e, t))
              : a && !c
              ? ((e._writableState && e._writableState.ended) || (t = new r()),
                o.call(e, t))
              : void 0;
          },
          v = function () {
            e.req.on("finish", l);
          };
        return (
          !(function (t) {
            return t.setHeader && "function" === typeof t.abort;
          })(e)
            ? a && !e._writableState && (e.on("end", u), e.on("close", u))
            : (e.on("complete", l),
              e.on("abort", p),
              e.req ? v() : e.on("request", v)),
          e.on("end", f),
          e.on("finish", l),
          !1 !== n.error && e.on("error", d),
          e.on("close", p),
          function () {
            e.removeListener("complete", l),
              e.removeListener("abort", p),
              e.removeListener("request", v),
              e.req && e.req.removeListener("finish", l),
              e.removeListener("end", u),
              e.removeListener("close", u),
              e.removeListener("finish", l),
              e.removeListener("end", f),
              e.removeListener("error", d),
              e.removeListener("close", p);
          }
        );
      };
    },
    1067: function (t, e, n) {
      "use strict";
      var r = n(91),
        i = n(92),
        o = n(273),
        s = n(274),
        a = n(1109);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.EthereumProviderError = e.EthereumRpcError = void 0);
      var u = n(1110),
        c = (function (t) {
          o(n, t);
          var e = s(n);
          function n(t, i, o) {
            var s;
            if ((r(this, n), !Number.isInteger(t)))
              throw new Error('"code" must be an integer.');
            if (!i || "string" !== typeof i)
              throw new Error('"message" must be a nonempty string.');
            return (
              ((s = e.call(this, i)).code = t), void 0 !== o && (s.data = o), s
            );
          }
          return (
            i(n, [
              {
                key: "serialize",
                value: function () {
                  var t = { code: this.code, message: this.message };
                  return (
                    void 0 !== this.data && (t.data = this.data),
                    this.stack && (t.stack = this.stack),
                    t
                  );
                },
              },
              {
                key: "toString",
                value: function () {
                  return u.default(this.serialize(), h, 2);
                },
              },
            ]),
            n
          );
        })(a(Error));
      e.EthereumRpcError = c;
      var l = (function (t) {
        o(n, t);
        var e = s(n);
        function n(t, i, o) {
          if (
            (r(this, n),
            !(function (t) {
              return Number.isInteger(t) && t >= 1e3 && t <= 4999;
            })(t))
          )
            throw new Error(
              '"code" must be an integer such that: 1000 <= code <= 4999'
            );
          return e.call(this, t, i, o);
        }
        return i(n);
      })(c);
      function h(t, e) {
        if ("[Circular]" !== e) return e;
      }
      e.EthereumProviderError = l;
    },
    1068: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.errorValues = e.errorCodes = void 0),
        (e.errorCodes = {
          rpc: {
            invalidInput: -32e3,
            resourceNotFound: -32001,
            resourceUnavailable: -32002,
            transactionRejected: -32003,
            methodNotSupported: -32004,
            limitExceeded: -32005,
            parse: -32700,
            invalidRequest: -32600,
            methodNotFound: -32601,
            invalidParams: -32602,
            internal: -32603,
          },
          provider: {
            userRejectedRequest: 4001,
            unauthorized: 4100,
            unsupportedMethod: 4200,
            disconnected: 4900,
            chainDisconnected: 4901,
          },
        }),
        (e.errorValues = {
          "-32700": {
            standard: "JSON RPC 2.0",
            message:
              "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
          },
          "-32600": {
            standard: "JSON RPC 2.0",
            message: "The JSON sent is not a valid Request object.",
          },
          "-32601": {
            standard: "JSON RPC 2.0",
            message: "The method does not exist / is not available.",
          },
          "-32602": {
            standard: "JSON RPC 2.0",
            message: "Invalid method parameter(s).",
          },
          "-32603": {
            standard: "JSON RPC 2.0",
            message: "Internal JSON-RPC error.",
          },
          "-32000": { standard: "EIP-1474", message: "Invalid input." },
          "-32001": { standard: "EIP-1474", message: "Resource not found." },
          "-32002": { standard: "EIP-1474", message: "Resource unavailable." },
          "-32003": { standard: "EIP-1474", message: "Transaction rejected." },
          "-32004": { standard: "EIP-1474", message: "Method not supported." },
          "-32005": {
            standard: "EIP-1474",
            message: "Request limit exceeded.",
          },
          4001: { standard: "EIP-1193", message: "User rejected the request." },
          4100: {
            standard: "EIP-1193",
            message:
              "The requested account and/or method has not been authorized by the user.",
          },
          4200: {
            standard: "EIP-1193",
            message:
              "The requested method is not supported by this Ethereum provider.",
          },
          4900: {
            standard: "EIP-1193",
            message: "The provider is disconnected from all chains.",
          },
          4901: {
            standard: "EIP-1193",
            message: "The provider is disconnected from the specified chain.",
          },
        });
    },
    1069: function (t, e, n) {
      var r = n(2),
        i = n(168),
        o = n(91),
        s = n(92),
        a = n(273),
        u = n(274),
        c = (function (t) {
          "use strict";
          a(n, t);
          var e = u(n);
          function n() {
            var t;
            return o(this, n), ((t = e.call(this)).updates = []), t;
          }
          return (
            s(n, [
              {
                key: "initialize",
                value: (function () {
                  var t = i(
                    r.mark(function t() {
                      return r.wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "update",
                value: (function () {
                  var t = i(
                    r.mark(function t() {
                      return r.wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              throw new Error(
                                "BaseFilter - no update method specified"
                              );
                            case 1:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "addResults",
                value: function (t) {
                  var e = this;
                  (this.updates = this.updates.concat(t)),
                    t.forEach(function (t) {
                      return e.emit("update", t);
                    });
                },
              },
              { key: "addInitialResults", value: function (t) {} },
              {
                key: "getChangesAndClear",
                value: function () {
                  var t = this.updates;
                  return (this.updates = []), t;
                },
              },
            ]),
            n
          );
        })(n(1015).default);
      t.exports = c;
    },
    1070: function (t, e, n) {
      var r = n(2),
        i = n(168);
      function o() {
        return (o = i(
          r.mark(function t(e) {
            var n, i, o, c, l, h, f;
            return r.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (n = e.provider),
                      (i = e.fromBlock),
                      (o = e.toBlock),
                      i || (i = o),
                      (c = s(i)),
                      (l = s(o)),
                      (h = Array(l - c + 1)
                        .fill()
                        .map(function (t, e) {
                          return c + e;
                        })
                        .map(a)),
                      (t.next = 8),
                      Promise.all(
                        h.map(function (t) {
                          return u(n, "eth_getBlockByNumber", [t, !1]);
                        })
                      )
                    );
                  case 8:
                    return (f = t.sent), t.abrupt("return", f);
                  case 10:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function s(t) {
        return void 0 === t || null === t ? t : Number.parseInt(t, 16);
      }
      function a(t) {
        return void 0 === t || null === t ? t : "0x" + t.toString(16);
      }
      function u(t, e, n) {
        return new Promise(function (r, i) {
          t.sendAsync(
            { id: 1, jsonrpc: "2.0", method: e, params: n },
            function (t, e) {
              if (t) return i(t);
              r(e.result);
            }
          );
        });
      }
      t.exports = function (t) {
        return o.apply(this, arguments);
      };
    },
    1071: function (t, e, n) {
      "use strict";
      function r(t) {
        var e,
          n,
          i = "";
        if ("string" === typeof t || "number" === typeof t) i += t;
        else if ("object" === typeof t)
          if (Array.isArray(t))
            for (e = 0; e < t.length; e++)
              t[e] && (n = r(t[e])) && (i && (i += " "), (i += n));
          else for (e in t) t[e] && (i && (i += " "), (i += e));
        return i;
      }
      n.r(e),
        (e.default = function () {
          for (var t, e, n = 0, i = ""; n < arguments.length; )
            (t = arguments[n++]) && (e = r(t)) && (i && (i += " "), (i += e));
          return i;
        });
    },
    1072: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.RelayMessageType = void 0),
        (function (t) {
          (t.SESSION_ID_REQUEST = "SESSION_ID_REQUEST"),
            (t.SESSION_ID_RESPONSE = "SESSION_ID_RESPONSE"),
            (t.LINKED = "LINKED"),
            (t.UNLINKED = "UNLINKED"),
            (t.WEB3_REQUEST = "WEB3_REQUEST"),
            (t.WEB3_REQUEST_CANCELED = "WEB3_REQUEST_CANCELED"),
            (t.WEB3_RESPONSE = "WEB3_RESPONSE");
        })(e.RelayMessageType || (e.RelayMessageType = {}));
    },
    1074: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return l;
      });
      var r = n(969),
        i = n(971),
        o = n(983);
      var s = n(1058),
        a = n(1007);
      var u = n(1116),
        c = n(1115);
      function l(t, e) {
        if (null != t) {
          if (
            (function (t) {
              return t && "function" === typeof t[o.a];
            })(t)
          )
            return (function (t, e) {
              return new r.a(function (n) {
                var r = new i.a();
                return (
                  r.add(
                    e.schedule(function () {
                      var i = t[o.a]();
                      r.add(
                        i.subscribe({
                          next: function (t) {
                            r.add(
                              e.schedule(function () {
                                return n.next(t);
                              })
                            );
                          },
                          error: function (t) {
                            r.add(
                              e.schedule(function () {
                                return n.error(t);
                              })
                            );
                          },
                          complete: function () {
                            r.add(
                              e.schedule(function () {
                                return n.complete();
                              })
                            );
                          },
                        })
                      );
                    })
                  ),
                  r
                );
              });
            })(t, e);
          if (Object(u.a)(t))
            return (function (t, e) {
              return new r.a(function (n) {
                var r = new i.a();
                return (
                  r.add(
                    e.schedule(function () {
                      return t.then(
                        function (t) {
                          r.add(
                            e.schedule(function () {
                              n.next(t),
                                r.add(
                                  e.schedule(function () {
                                    return n.complete();
                                  })
                                );
                            })
                          );
                        },
                        function (t) {
                          r.add(
                            e.schedule(function () {
                              return n.error(t);
                            })
                          );
                        }
                      );
                    })
                  ),
                  r
                );
              });
            })(t, e);
          if (Object(c.a)(t)) return Object(s.a)(t, e);
          if (
            (function (t) {
              return t && "function" === typeof t[a.a];
            })(t) ||
            "string" === typeof t
          )
            return (function (t, e) {
              if (!t) throw new Error("Iterable cannot be null");
              return new r.a(function (n) {
                var r,
                  o = new i.a();
                return (
                  o.add(function () {
                    r && "function" === typeof r.return && r.return();
                  }),
                  o.add(
                    e.schedule(function () {
                      (r = t[a.a]()),
                        o.add(
                          e.schedule(function () {
                            if (!n.closed) {
                              var t, e;
                              try {
                                var i = r.next();
                                (t = i.value), (e = i.done);
                              } catch (o) {
                                return void n.error(o);
                              }
                              e ? n.complete() : (n.next(t), this.schedule());
                            }
                          })
                        );
                    })
                  ),
                  o
                );
              });
            })(t, e);
        }
        throw new TypeError(
          ((null !== t && typeof t) || t) + " is not observable"
        );
      }
    },
    1109: function (t, e, n) {
      var r = n(454),
        i = n(456),
        o = n(1210),
        s = n(1211);
      function a(e) {
        var n = "function" === typeof Map ? new Map() : void 0;
        return (
          (t.exports = a =
            function (t) {
              if (null === t || !o(t)) return t;
              if ("function" !== typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              if ("undefined" !== typeof n) {
                if (n.has(t)) return n.get(t);
                n.set(t, e);
              }
              function e() {
                return s(t, arguments, r(this).constructor);
              }
              return (
                (e.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                i(e, t)
              );
            }),
          a(e)
        );
      }
      t.exports = a;
    },
    1110: function (t, e) {
      (t.exports = i), (i.default = i), (i.stable = a), (i.stableStringify = a);
      var n = [],
        r = [];
      function i(t, e, i) {
        var s;
        for (
          o(t, "", [], void 0),
            s =
              0 === r.length
                ? JSON.stringify(t, e, i)
                : JSON.stringify(t, c(e), i);
          0 !== n.length;

        ) {
          var a = n.pop();
          4 === a.length
            ? Object.defineProperty(a[0], a[1], a[3])
            : (a[0][a[1]] = a[2]);
        }
        return s;
      }
      function o(t, e, i, s) {
        var a;
        if ("object" === typeof t && null !== t) {
          for (a = 0; a < i.length; a++)
            if (i[a] === t) {
              var u = Object.getOwnPropertyDescriptor(s, e);
              return void (void 0 !== u.get
                ? u.configurable
                  ? (Object.defineProperty(s, e, { value: "[Circular]" }),
                    n.push([s, e, t, u]))
                  : r.push([t, e])
                : ((s[e] = "[Circular]"), n.push([s, e, t])));
            }
          if ((i.push(t), Array.isArray(t)))
            for (a = 0; a < t.length; a++) o(t[a], a, i, t);
          else {
            var c = Object.keys(t);
            for (a = 0; a < c.length; a++) {
              var l = c[a];
              o(t[l], l, i, t);
            }
          }
          i.pop();
        }
      }
      function s(t, e) {
        return t < e ? -1 : t > e ? 1 : 0;
      }
      function a(t, e, i) {
        var o,
          s = u(t, "", [], void 0) || t;
        for (
          o =
            0 === r.length
              ? JSON.stringify(s, e, i)
              : JSON.stringify(s, c(e), i);
          0 !== n.length;

        ) {
          var a = n.pop();
          4 === a.length
            ? Object.defineProperty(a[0], a[1], a[3])
            : (a[0][a[1]] = a[2]);
        }
        return o;
      }
      function u(t, e, i, o) {
        var a;
        if ("object" === typeof t && null !== t) {
          for (a = 0; a < i.length; a++)
            if (i[a] === t) {
              var c = Object.getOwnPropertyDescriptor(o, e);
              return void (void 0 !== c.get
                ? c.configurable
                  ? (Object.defineProperty(o, e, { value: "[Circular]" }),
                    n.push([o, e, t, c]))
                  : r.push([t, e])
                : ((o[e] = "[Circular]"), n.push([o, e, t])));
            }
          if ("function" === typeof t.toJSON) return;
          if ((i.push(t), Array.isArray(t)))
            for (a = 0; a < t.length; a++) u(t[a], a, i, t);
          else {
            var l = {},
              h = Object.keys(t).sort(s);
            for (a = 0; a < h.length; a++) {
              var f = h[a];
              u(t[f], f, i, t), (l[f] = t[f]);
            }
            if (void 0 === o) return l;
            n.push([o, e, t]), (o[e] = l);
          }
          i.pop();
        }
      }
      function c(t) {
        return (
          (t =
            void 0 !== t
              ? t
              : function (t, e) {
                  return e;
                }),
          function (e, n) {
            if (r.length > 0)
              for (var i = 0; i < r.length; i++) {
                var o = r[i];
                if (o[1] === e && o[0] === n) {
                  (n = "[Circular]"), r.splice(i, 1);
                  break;
                }
              }
            return t.call(this, e, n);
          }
        );
      }
    },
    1111: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.serializeError =
          e.isValidCode =
          e.getMessageFromCode =
          e.JSON_RPC_SERVER_ERROR_MESSAGE =
            void 0);
      var r = n(1046),
        i = n(1045),
        o = r.errorCodes.rpc.internal,
        s = "Unspecified error message. This is a bug, please report it.",
        a = { code: o, message: u(o) };
      function u(t) {
        var n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s;
        if (Number.isInteger(t)) {
          var i = t.toString();
          if (f(r.errorValues, i)) return r.errorValues[i].message;
          if (l(t)) return e.JSON_RPC_SERVER_ERROR_MESSAGE;
        }
        return n;
      }
      function c(t) {
        if (!Number.isInteger(t)) return !1;
        var e = t.toString();
        return !!r.errorValues[e] || !!l(t);
      }
      function l(t) {
        return t >= -32099 && t <= -32e3;
      }
      function h(t) {
        return t && "object" === typeof t && !Array.isArray(t)
          ? Object.assign({}, t)
          : t;
      }
      function f(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }
      (e.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error."),
        (e.getMessageFromCode = u),
        (e.isValidCode = c),
        (e.serializeError = function (t) {
          var e,
            n,
            r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            o = r.fallbackError,
            s = void 0 === o ? a : o,
            l = r.shouldIncludeStack,
            d = void 0 !== l && l;
          if (!s || !Number.isInteger(s.code) || "string" !== typeof s.message)
            throw new Error(
              "Must provide fallback error with integer number code and string message."
            );
          if (t instanceof i.EthereumRpcError) return t.serialize();
          var p = {};
          if (
            t &&
            "object" === typeof t &&
            !Array.isArray(t) &&
            f(t, "code") &&
            c(t.code)
          ) {
            var v = t;
            (p.code = v.code),
              v.message && "string" === typeof v.message
                ? ((p.message = v.message), f(v, "data") && (p.data = v.data))
                : ((p.message = u(p.code)), (p.data = { originalError: h(t) }));
          } else {
            p.code = s.code;
            var b = null === (e = t) || void 0 === e ? void 0 : e.message;
            (p.message = b && "string" === typeof b ? b : s.message),
              (p.data = { originalError: h(t) });
          }
          var y = null === (n = t) || void 0 === n ? void 0 : n.stack;
          return d && t && y && "string" === typeof y && (p.stack = y), p;
        });
    },
    1112: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var r = n(1e3),
        i = n(1050),
        o = {
          closed: !0,
          next: function (t) {},
          error: function (t) {
            if (r.a.useDeprecatedSynchronousErrorHandling) throw t;
            Object(i.a)(t);
          },
          complete: function () {},
        };
    },
    1113: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var r = n(967),
        i = (function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            return (r.subject = e), (r.subscriber = n), (r.closed = !1), r;
          }
          return (
            r.a(e, t),
            (e.prototype.unsubscribe = function () {
              if (!this.closed) {
                this.closed = !0;
                var t = this.subject,
                  e = t.observers;
                if (
                  ((this.subject = null),
                  e && 0 !== e.length && !t.isStopped && !t.closed)
                ) {
                  var n = e.indexOf(this.subscriber);
                  -1 !== n && e.splice(n, 1);
                }
              }
            }),
            e
          );
        })(n(971).a);
    },
    1114: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      var r = function (t) {
        return function (e) {
          for (var n = 0, r = t.length; n < r && !e.closed; n++) e.next(t[n]);
          e.complete();
        };
      };
    },
    1115: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      var r = function (t) {
        return t && "number" === typeof t.length && "function" !== typeof t;
      };
    },
    1116: function (t, e, n) {
      "use strict";
      function r(t) {
        return (
          !!t &&
          "function" !== typeof t.subscribe &&
          "function" === typeof t.then
        );
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    1117: function (t, e, n) {
      "use strict";
      function r(t, e) {
        function n() {
          return !n.pred.apply(n.thisArg, arguments);
        }
        return (n.pred = t), (n.thisArg = e), n;
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    1118: function (t, e, n) {
      "use strict";
      var r = n(2),
        i = n(168),
        o = n(91),
        s = n(92);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.WalletLinkRelayAbstract =
          e.APP_VERSION_KEY =
          e.LOCAL_STORAGE_ADDRESSES_KEY =
          e.WALLET_USER_NAME_KEY =
            void 0);
      var a = n(1044);
      (e.WALLET_USER_NAME_KEY = "walletUsername"),
        (e.LOCAL_STORAGE_ADDRESSES_KEY = "Addresses"),
        (e.APP_VERSION_KEY = "AppVersion");
      var u = (function () {
        function t() {
          o(this, t);
        }
        return (
          s(t, [
            {
              key: "makeEthereumJSONRPCRequest",
              value: (function () {
                var t = i(
                  r.mark(function t(e, n) {
                    return r.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (n) {
                              t.next = 2;
                              break;
                            }
                            throw new Error("Error: No jsonRpcUrl provided");
                          case 2:
                            return t.abrupt(
                              "return",
                              window
                                .fetch(n, {
                                  method: "POST",
                                  body: JSON.stringify(e),
                                  mode: "cors",
                                  headers: {
                                    "Content-Type": "application/json",
                                  },
                                })
                                .then(function (t) {
                                  return t.json();
                                })
                                .then(function (t) {
                                  if (!t) throw a.ethErrors.rpc.parse({});
                                  var e = t,
                                    n = e.error;
                                  if (n) throw (0, a.serializeError)(n);
                                  return e;
                                })
                            );
                          case 3:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                );
                return function (e, n) {
                  return t.apply(this, arguments);
                };
              })(),
            },
          ]),
          t
        );
      })();
      e.WalletLinkRelayAbstract = u;
    },
    1119: function (t, e, n) {
      (function (e) {
        var r = n(1218),
          i = n(1016);
        function o(t) {
          return e.allocUnsafe(t).fill(0);
        }
        function s(t, e, n) {
          var r = o(e);
          return (
            (t = a(t)),
            n
              ? t.length < e
                ? (t.copy(r), r)
                : t.slice(0, e)
              : t.length < e
              ? (t.copy(r, e - t.length), r)
              : t.slice(-e)
          );
        }
        function a(t) {
          if (!e.isBuffer(t))
            if (Array.isArray(t)) t = e.from(t);
            else if ("string" === typeof t)
              t = u(t)
                ? e.from((n = c(t)).length % 2 ? "0" + n : n, "hex")
                : e.from(t);
            else if ("number" === typeof t) t = intToBuffer(t);
            else if (null === t || void 0 === t) t = e.allocUnsafe(0);
            else if (i.isBN(t)) t = t.toArrayLike(e);
            else {
              if (!t.toArray) throw new Error("invalid type");
              t = e.from(t.toArray());
            }
          var n;
          return t;
        }
        function u(t) {
          return "string" === typeof t && t.match(/^0x[0-9A-Fa-f]*$/);
        }
        function c(t) {
          return "string" === typeof t && t.startsWith("0x") ? t.slice(2) : t;
        }
        t.exports = {
          zeros: o,
          setLength: s,
          setLengthRight: function (t, e) {
            return s(t, e, !0);
          },
          isHexString: u,
          stripHexPrefix: c,
          toBuffer: a,
          bufferToHex: function (t) {
            return "0x" + (t = a(t)).toString("hex");
          },
          keccak: function (t, e) {
            return (
              (t = a(t)),
              e || (e = 256),
              r("keccak" + e)
                .update(t)
                .digest()
            );
          },
        };
      }.call(this, n(230).Buffer));
    },
    1120: function (t, e, n) {
      ((e = t.exports = n(1121)).Stream = e),
        (e.Readable = e),
        (e.Writable = n(1125)),
        (e.Duplex = n(996)),
        (e.Transform = n(1127)),
        (e.PassThrough = n(1228)),
        (e.finished = n(1066)),
        (e.pipeline = n(1229));
    },
    1121: function (t, e, n) {
      "use strict";
      (function (e, r) {
        var i;
        (t.exports = S), (S.ReadableState = E);
        n(193).EventEmitter;
        var o = function (t, e) {
            return t.listeners(e).length;
          },
          s = n(1122),
          a = n(230).Buffer,
          u = e.Uint8Array || function () {};
        var c,
          l = n(1221);
        c = l && l.debuglog ? l.debuglog("stream") : function () {};
        var h,
          f,
          d,
          p = n(1222),
          v = n(1123),
          b = n(1124).getHighWaterMark,
          y = n(995).codes,
          g = y.ERR_INVALID_ARG_TYPE,
          m = y.ERR_STREAM_PUSH_AFTER_EOF,
          w = y.ERR_METHOD_NOT_IMPLEMENTED,
          _ = y.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
        n(455)(S, s);
        var k = v.errorOrDestroy,
          x = ["error", "close", "destroy", "pause", "resume"];
        function E(t, e, r) {
          (i = i || n(996)),
            (t = t || {}),
            "boolean" !== typeof r && (r = e instanceof i),
            (this.objectMode = !!t.objectMode),
            r && (this.objectMode = this.objectMode || !!t.readableObjectMode),
            (this.highWaterMark = b(this, t, "readableHighWaterMark", r)),
            (this.buffer = new p()),
            (this.length = 0),
            (this.pipes = null),
            (this.pipesCount = 0),
            (this.flowing = null),
            (this.ended = !1),
            (this.endEmitted = !1),
            (this.reading = !1),
            (this.sync = !0),
            (this.needReadable = !1),
            (this.emittedReadable = !1),
            (this.readableListening = !1),
            (this.resumeScheduled = !1),
            (this.paused = !0),
            (this.emitClose = !1 !== t.emitClose),
            (this.autoDestroy = !!t.autoDestroy),
            (this.destroyed = !1),
            (this.defaultEncoding = t.defaultEncoding || "utf8"),
            (this.awaitDrain = 0),
            (this.readingMore = !1),
            (this.decoder = null),
            (this.encoding = null),
            t.encoding &&
              (h || (h = n(1126).StringDecoder),
              (this.decoder = new h(t.encoding)),
              (this.encoding = t.encoding));
        }
        function S(t) {
          if (((i = i || n(996)), !(this instanceof S))) return new S(t);
          var e = this instanceof i;
          (this._readableState = new E(t, this, e)),
            (this.readable = !0),
            t &&
              ("function" === typeof t.read && (this._read = t.read),
              "function" === typeof t.destroy && (this._destroy = t.destroy)),
            s.call(this);
        }
        function M(t, e, n, r, i) {
          c("readableAddChunk", e);
          var o,
            s = t._readableState;
          if (null === e)
            (s.reading = !1),
              (function (t, e) {
                if ((c("onEofChunk"), e.ended)) return;
                if (e.decoder) {
                  var n = e.decoder.end();
                  n &&
                    n.length &&
                    (e.buffer.push(n),
                    (e.length += e.objectMode ? 1 : n.length));
                }
                (e.ended = !0),
                  e.sync
                    ? O(t)
                    : ((e.needReadable = !1),
                      e.emittedReadable || ((e.emittedReadable = !0), I(t)));
              })(t, s);
          else if (
            (i ||
              (o = (function (t, e) {
                var n;
                (r = e),
                  a.isBuffer(r) ||
                    r instanceof u ||
                    "string" === typeof e ||
                    void 0 === e ||
                    t.objectMode ||
                    (n = new g("chunk", ["string", "Buffer", "Uint8Array"], e));
                var r;
                return n;
              })(s, e)),
            o)
          )
            k(t, o);
          else if (s.objectMode || (e && e.length > 0))
            if (
              ("string" === typeof e ||
                s.objectMode ||
                Object.getPrototypeOf(e) === a.prototype ||
                (e = (function (t) {
                  return a.from(t);
                })(e)),
              r)
            )
              s.endEmitted ? k(t, new _()) : C(t, s, e, !0);
            else if (s.ended) k(t, new m());
            else {
              if (s.destroyed) return !1;
              (s.reading = !1),
                s.decoder && !n
                  ? ((e = s.decoder.write(e)),
                    s.objectMode || 0 !== e.length ? C(t, s, e, !1) : T(t, s))
                  : C(t, s, e, !1);
            }
          else r || ((s.reading = !1), T(t, s));
          return !s.ended && (s.length < s.highWaterMark || 0 === s.length);
        }
        function C(t, e, n, r) {
          e.flowing && 0 === e.length && !e.sync
            ? ((e.awaitDrain = 0), t.emit("data", n))
            : ((e.length += e.objectMode ? 1 : n.length),
              r ? e.buffer.unshift(n) : e.buffer.push(n),
              e.needReadable && O(t)),
            T(t, e);
        }
        Object.defineProperty(S.prototype, "destroyed", {
          enumerable: !1,
          get: function () {
            return (
              void 0 !== this._readableState && this._readableState.destroyed
            );
          },
          set: function (t) {
            this._readableState && (this._readableState.destroyed = t);
          },
        }),
          (S.prototype.destroy = v.destroy),
          (S.prototype._undestroy = v.undestroy),
          (S.prototype._destroy = function (t, e) {
            e(t);
          }),
          (S.prototype.push = function (t, e) {
            var n,
              r = this._readableState;
            return (
              r.objectMode
                ? (n = !0)
                : "string" === typeof t &&
                  ((e = e || r.defaultEncoding) !== r.encoding &&
                    ((t = a.from(t, e)), (e = "")),
                  (n = !0)),
              M(this, t, e, !1, n)
            );
          }),
          (S.prototype.unshift = function (t) {
            return M(this, t, null, !0, !1);
          }),
          (S.prototype.isPaused = function () {
            return !1 === this._readableState.flowing;
          }),
          (S.prototype.setEncoding = function (t) {
            h || (h = n(1126).StringDecoder);
            var e = new h(t);
            (this._readableState.decoder = e),
              (this._readableState.encoding =
                this._readableState.decoder.encoding);
            for (var r = this._readableState.buffer.head, i = ""; null !== r; )
              (i += e.write(r.data)), (r = r.next);
            return (
              this._readableState.buffer.clear(),
              "" !== i && this._readableState.buffer.push(i),
              (this._readableState.length = i.length),
              this
            );
          });
        var A = 1073741824;
        function R(t, e) {
          return t <= 0 || (0 === e.length && e.ended)
            ? 0
            : e.objectMode
            ? 1
            : t !== t
            ? e.flowing && e.length
              ? e.buffer.head.data.length
              : e.length
            : (t > e.highWaterMark &&
                (e.highWaterMark = (function (t) {
                  return (
                    t >= A
                      ? (t = A)
                      : (t--,
                        (t |= t >>> 1),
                        (t |= t >>> 2),
                        (t |= t >>> 4),
                        (t |= t >>> 8),
                        (t |= t >>> 16),
                        t++),
                    t
                  );
                })(t)),
              t <= e.length
                ? t
                : e.ended
                ? e.length
                : ((e.needReadable = !0), 0));
        }
        function O(t) {
          var e = t._readableState;
          c("emitReadable", e.needReadable, e.emittedReadable),
            (e.needReadable = !1),
            e.emittedReadable ||
              (c("emitReadable", e.flowing),
              (e.emittedReadable = !0),
              r.nextTick(I, t));
        }
        function I(t) {
          var e = t._readableState;
          c("emitReadable_", e.destroyed, e.length, e.ended),
            e.destroyed ||
              (!e.length && !e.ended) ||
              (t.emit("readable"), (e.emittedReadable = !1)),
            (e.needReadable =
              !e.flowing && !e.ended && e.length <= e.highWaterMark),
            D(t);
        }
        function T(t, e) {
          e.readingMore || ((e.readingMore = !0), r.nextTick(N, t, e));
        }
        function N(t, e) {
          for (
            ;
            !e.reading &&
            !e.ended &&
            (e.length < e.highWaterMark || (e.flowing && 0 === e.length));

          ) {
            var n = e.length;
            if ((c("maybeReadMore read 0"), t.read(0), n === e.length)) break;
          }
          e.readingMore = !1;
        }
        function j(t) {
          var e = t._readableState;
          (e.readableListening = t.listenerCount("readable") > 0),
            e.resumeScheduled && !e.paused
              ? (e.flowing = !0)
              : t.listenerCount("data") > 0 && t.resume();
        }
        function L(t) {
          c("readable nexttick read 0"), t.read(0);
        }
        function P(t, e) {
          c("resume", e.reading),
            e.reading || t.read(0),
            (e.resumeScheduled = !1),
            t.emit("resume"),
            D(t),
            e.flowing && !e.reading && t.read(0);
        }
        function D(t) {
          var e = t._readableState;
          for (c("flow", e.flowing); e.flowing && null !== t.read(); );
        }
        function B(t, e) {
          return 0 === e.length
            ? null
            : (e.objectMode
                ? (n = e.buffer.shift())
                : !t || t >= e.length
                ? ((n = e.decoder
                    ? e.buffer.join("")
                    : 1 === e.buffer.length
                    ? e.buffer.first()
                    : e.buffer.concat(e.length)),
                  e.buffer.clear())
                : (n = e.buffer.consume(t, e.decoder)),
              n);
          var n;
        }
        function H(t) {
          var e = t._readableState;
          c("endReadable", e.endEmitted),
            e.endEmitted || ((e.ended = !0), r.nextTick(F, e, t));
        }
        function F(t, e) {
          if (
            (c("endReadableNT", t.endEmitted, t.length),
            !t.endEmitted &&
              0 === t.length &&
              ((t.endEmitted = !0),
              (e.readable = !1),
              e.emit("end"),
              t.autoDestroy))
          ) {
            var n = e._writableState;
            (!n || (n.autoDestroy && n.finished)) && e.destroy();
          }
        }
        function U(t, e) {
          for (var n = 0, r = t.length; n < r; n++) if (t[n] === e) return n;
          return -1;
        }
        (S.prototype.read = function (t) {
          c("read", t), (t = parseInt(t, 10));
          var e = this._readableState,
            n = t;
          if (
            (0 !== t && (e.emittedReadable = !1),
            0 === t &&
              e.needReadable &&
              ((0 !== e.highWaterMark
                ? e.length >= e.highWaterMark
                : e.length > 0) ||
                e.ended))
          )
            return (
              c("read: emitReadable", e.length, e.ended),
              0 === e.length && e.ended ? H(this) : O(this),
              null
            );
          if (0 === (t = R(t, e)) && e.ended)
            return 0 === e.length && H(this), null;
          var r,
            i = e.needReadable;
          return (
            c("need readable", i),
            (0 === e.length || e.length - t < e.highWaterMark) &&
              c("length less than watermark", (i = !0)),
            e.ended || e.reading
              ? c("reading or ended", (i = !1))
              : i &&
                (c("do read"),
                (e.reading = !0),
                (e.sync = !0),
                0 === e.length && (e.needReadable = !0),
                this._read(e.highWaterMark),
                (e.sync = !1),
                e.reading || (t = R(n, e))),
            null === (r = t > 0 ? B(t, e) : null)
              ? ((e.needReadable = e.length <= e.highWaterMark), (t = 0))
              : ((e.length -= t), (e.awaitDrain = 0)),
            0 === e.length &&
              (e.ended || (e.needReadable = !0), n !== t && e.ended && H(this)),
            null !== r && this.emit("data", r),
            r
          );
        }),
          (S.prototype._read = function (t) {
            k(this, new w("_read()"));
          }),
          (S.prototype.pipe = function (t, e) {
            var n = this,
              i = this._readableState;
            switch (i.pipesCount) {
              case 0:
                i.pipes = t;
                break;
              case 1:
                i.pipes = [i.pipes, t];
                break;
              default:
                i.pipes.push(t);
            }
            (i.pipesCount += 1), c("pipe count=%d opts=%j", i.pipesCount, e);
            var s =
              (!e || !1 !== e.end) && t !== r.stdout && t !== r.stderr ? u : b;
            function a(e, r) {
              c("onunpipe"),
                e === n &&
                  r &&
                  !1 === r.hasUnpiped &&
                  ((r.hasUnpiped = !0),
                  c("cleanup"),
                  t.removeListener("close", p),
                  t.removeListener("finish", v),
                  t.removeListener("drain", l),
                  t.removeListener("error", d),
                  t.removeListener("unpipe", a),
                  n.removeListener("end", u),
                  n.removeListener("end", b),
                  n.removeListener("data", f),
                  (h = !0),
                  !i.awaitDrain ||
                    (t._writableState && !t._writableState.needDrain) ||
                    l());
            }
            function u() {
              c("onend"), t.end();
            }
            i.endEmitted ? r.nextTick(s) : n.once("end", s), t.on("unpipe", a);
            var l = (function (t) {
              return function () {
                var e = t._readableState;
                c("pipeOnDrain", e.awaitDrain),
                  e.awaitDrain && e.awaitDrain--,
                  0 === e.awaitDrain &&
                    o(t, "data") &&
                    ((e.flowing = !0), D(t));
              };
            })(n);
            t.on("drain", l);
            var h = !1;
            function f(e) {
              c("ondata");
              var r = t.write(e);
              c("dest.write", r),
                !1 === r &&
                  (((1 === i.pipesCount && i.pipes === t) ||
                    (i.pipesCount > 1 && -1 !== U(i.pipes, t))) &&
                    !h &&
                    (c("false write response, pause", i.awaitDrain),
                    i.awaitDrain++),
                  n.pause());
            }
            function d(e) {
              c("onerror", e),
                b(),
                t.removeListener("error", d),
                0 === o(t, "error") && k(t, e);
            }
            function p() {
              t.removeListener("finish", v), b();
            }
            function v() {
              c("onfinish"), t.removeListener("close", p), b();
            }
            function b() {
              c("unpipe"), n.unpipe(t);
            }
            return (
              n.on("data", f),
              (function (t, e, n) {
                if ("function" === typeof t.prependListener)
                  return t.prependListener(e, n);
                t._events && t._events[e]
                  ? Array.isArray(t._events[e])
                    ? t._events[e].unshift(n)
                    : (t._events[e] = [n, t._events[e]])
                  : t.on(e, n);
              })(t, "error", d),
              t.once("close", p),
              t.once("finish", v),
              t.emit("pipe", n),
              i.flowing || (c("pipe resume"), n.resume()),
              t
            );
          }),
          (S.prototype.unpipe = function (t) {
            var e = this._readableState,
              n = { hasUnpiped: !1 };
            if (0 === e.pipesCount) return this;
            if (1 === e.pipesCount)
              return (
                (t && t !== e.pipes) ||
                  (t || (t = e.pipes),
                  (e.pipes = null),
                  (e.pipesCount = 0),
                  (e.flowing = !1),
                  t && t.emit("unpipe", this, n)),
                this
              );
            if (!t) {
              var r = e.pipes,
                i = e.pipesCount;
              (e.pipes = null), (e.pipesCount = 0), (e.flowing = !1);
              for (var o = 0; o < i; o++)
                r[o].emit("unpipe", this, { hasUnpiped: !1 });
              return this;
            }
            var s = U(e.pipes, t);
            return (
              -1 === s ||
                (e.pipes.splice(s, 1),
                (e.pipesCount -= 1),
                1 === e.pipesCount && (e.pipes = e.pipes[0]),
                t.emit("unpipe", this, n)),
              this
            );
          }),
          (S.prototype.on = function (t, e) {
            var n = s.prototype.on.call(this, t, e),
              i = this._readableState;
            return (
              "data" === t
                ? ((i.readableListening = this.listenerCount("readable") > 0),
                  !1 !== i.flowing && this.resume())
                : "readable" === t &&
                  (i.endEmitted ||
                    i.readableListening ||
                    ((i.readableListening = i.needReadable = !0),
                    (i.flowing = !1),
                    (i.emittedReadable = !1),
                    c("on readable", i.length, i.reading),
                    i.length ? O(this) : i.reading || r.nextTick(L, this))),
              n
            );
          }),
          (S.prototype.addListener = S.prototype.on),
          (S.prototype.removeListener = function (t, e) {
            var n = s.prototype.removeListener.call(this, t, e);
            return "readable" === t && r.nextTick(j, this), n;
          }),
          (S.prototype.removeAllListeners = function (t) {
            var e = s.prototype.removeAllListeners.apply(this, arguments);
            return ("readable" !== t && void 0 !== t) || r.nextTick(j, this), e;
          }),
          (S.prototype.resume = function () {
            var t = this._readableState;
            return (
              t.flowing ||
                (c("resume"),
                (t.flowing = !t.readableListening),
                (function (t, e) {
                  e.resumeScheduled ||
                    ((e.resumeScheduled = !0), r.nextTick(P, t, e));
                })(this, t)),
              (t.paused = !1),
              this
            );
          }),
          (S.prototype.pause = function () {
            return (
              c("call pause flowing=%j", this._readableState.flowing),
              !1 !== this._readableState.flowing &&
                (c("pause"),
                (this._readableState.flowing = !1),
                this.emit("pause")),
              (this._readableState.paused = !0),
              this
            );
          }),
          (S.prototype.wrap = function (t) {
            var e = this,
              n = this._readableState,
              r = !1;
            for (var i in (t.on("end", function () {
              if ((c("wrapped end"), n.decoder && !n.ended)) {
                var t = n.decoder.end();
                t && t.length && e.push(t);
              }
              e.push(null);
            }),
            t.on("data", function (i) {
              (c("wrapped data"),
              n.decoder && (i = n.decoder.write(i)),
              !n.objectMode || (null !== i && void 0 !== i)) &&
                (n.objectMode || (i && i.length)) &&
                (e.push(i) || ((r = !0), t.pause()));
            }),
            t))
              void 0 === this[i] &&
                "function" === typeof t[i] &&
                (this[i] = (function (e) {
                  return function () {
                    return t[e].apply(t, arguments);
                  };
                })(i));
            for (var o = 0; o < x.length; o++)
              t.on(x[o], this.emit.bind(this, x[o]));
            return (
              (this._read = function (e) {
                c("wrapped _read", e), r && ((r = !1), t.resume());
              }),
              this
            );
          }),
          "function" === typeof Symbol &&
            (S.prototype[Symbol.asyncIterator] = function () {
              return void 0 === f && (f = n(1226)), f(this);
            }),
          Object.defineProperty(S.prototype, "readableHighWaterMark", {
            enumerable: !1,
            get: function () {
              return this._readableState.highWaterMark;
            },
          }),
          Object.defineProperty(S.prototype, "readableBuffer", {
            enumerable: !1,
            get: function () {
              return this._readableState && this._readableState.buffer;
            },
          }),
          Object.defineProperty(S.prototype, "readableFlowing", {
            enumerable: !1,
            get: function () {
              return this._readableState.flowing;
            },
            set: function (t) {
              this._readableState && (this._readableState.flowing = t);
            },
          }),
          (S._fromList = B),
          Object.defineProperty(S.prototype, "readableLength", {
            enumerable: !1,
            get: function () {
              return this._readableState.length;
            },
          }),
          "function" === typeof Symbol &&
            (S.from = function (t, e) {
              return void 0 === d && (d = n(1227)), d(S, t, e);
            });
      }.call(this, n(52), n(72)));
    },
    1122: function (t, e, n) {
      t.exports = n(193).EventEmitter;
    },
    1123: function (t, e, n) {
      "use strict";
      (function (e) {
        function n(t, e) {
          i(t, e), r(t);
        }
        function r(t) {
          (t._writableState && !t._writableState.emitClose) ||
            (t._readableState && !t._readableState.emitClose) ||
            t.emit("close");
        }
        function i(t, e) {
          t.emit("error", e);
        }
        t.exports = {
          destroy: function (t, o) {
            var s = this,
              a = this._readableState && this._readableState.destroyed,
              u = this._writableState && this._writableState.destroyed;
            return a || u
              ? (o
                  ? o(t)
                  : t &&
                    (this._writableState
                      ? this._writableState.errorEmitted ||
                        ((this._writableState.errorEmitted = !0),
                        e.nextTick(i, this, t))
                      : e.nextTick(i, this, t)),
                this)
              : (this._readableState && (this._readableState.destroyed = !0),
                this._writableState && (this._writableState.destroyed = !0),
                this._destroy(t || null, function (t) {
                  !o && t
                    ? s._writableState
                      ? s._writableState.errorEmitted
                        ? e.nextTick(r, s)
                        : ((s._writableState.errorEmitted = !0),
                          e.nextTick(n, s, t))
                      : e.nextTick(n, s, t)
                    : o
                    ? (e.nextTick(r, s), o(t))
                    : e.nextTick(r, s);
                }),
                this);
          },
          undestroy: function () {
            this._readableState &&
              ((this._readableState.destroyed = !1),
              (this._readableState.reading = !1),
              (this._readableState.ended = !1),
              (this._readableState.endEmitted = !1)),
              this._writableState &&
                ((this._writableState.destroyed = !1),
                (this._writableState.ended = !1),
                (this._writableState.ending = !1),
                (this._writableState.finalCalled = !1),
                (this._writableState.prefinished = !1),
                (this._writableState.finished = !1),
                (this._writableState.errorEmitted = !1));
          },
          errorOrDestroy: function (t, e) {
            var n = t._readableState,
              r = t._writableState;
            (n && n.autoDestroy) || (r && r.autoDestroy)
              ? t.destroy(e)
              : t.emit("error", e);
          },
        };
      }.call(this, n(72)));
    },
    1124: function (t, e, n) {
      "use strict";
      var r = n(995).codes.ERR_INVALID_OPT_VALUE;
      t.exports = {
        getHighWaterMark: function (t, e, n, i) {
          var o = (function (t, e, n) {
            return null != t.highWaterMark ? t.highWaterMark : e ? t[n] : null;
          })(e, i, n);
          if (null != o) {
            if (!isFinite(o) || Math.floor(o) !== o || o < 0)
              throw new r(i ? n : "highWaterMark", o);
            return Math.floor(o);
          }
          return t.objectMode ? 16 : 16384;
        },
      };
    },
    1125: function (t, e, n) {
      "use strict";
      (function (e, r) {
        function i(t) {
          var e = this;
          (this.next = null),
            (this.entry = null),
            (this.finish = function () {
              !(function (t, e, n) {
                var r = t.entry;
                t.entry = null;
                for (; r; ) {
                  var i = r.callback;
                  e.pendingcb--, i(n), (r = r.next);
                }
                e.corkedRequestsFree.next = t;
              })(e, t);
            });
        }
        var o;
        (t.exports = S), (S.WritableState = E);
        var s = { deprecate: n(1224) },
          a = n(1122),
          u = n(230).Buffer,
          c = e.Uint8Array || function () {};
        var l,
          h = n(1123),
          f = n(1124).getHighWaterMark,
          d = n(995).codes,
          p = d.ERR_INVALID_ARG_TYPE,
          v = d.ERR_METHOD_NOT_IMPLEMENTED,
          b = d.ERR_MULTIPLE_CALLBACK,
          y = d.ERR_STREAM_CANNOT_PIPE,
          g = d.ERR_STREAM_DESTROYED,
          m = d.ERR_STREAM_NULL_VALUES,
          w = d.ERR_STREAM_WRITE_AFTER_END,
          _ = d.ERR_UNKNOWN_ENCODING,
          k = h.errorOrDestroy;
        function x() {}
        function E(t, e, s) {
          (o = o || n(996)),
            (t = t || {}),
            "boolean" !== typeof s && (s = e instanceof o),
            (this.objectMode = !!t.objectMode),
            s && (this.objectMode = this.objectMode || !!t.writableObjectMode),
            (this.highWaterMark = f(this, t, "writableHighWaterMark", s)),
            (this.finalCalled = !1),
            (this.needDrain = !1),
            (this.ending = !1),
            (this.ended = !1),
            (this.finished = !1),
            (this.destroyed = !1);
          var a = !1 === t.decodeStrings;
          (this.decodeStrings = !a),
            (this.defaultEncoding = t.defaultEncoding || "utf8"),
            (this.length = 0),
            (this.writing = !1),
            (this.corked = 0),
            (this.sync = !0),
            (this.bufferProcessing = !1),
            (this.onwrite = function (t) {
              !(function (t, e) {
                var n = t._writableState,
                  i = n.sync,
                  o = n.writecb;
                if ("function" !== typeof o) throw new b();
                if (
                  ((function (t) {
                    (t.writing = !1),
                      (t.writecb = null),
                      (t.length -= t.writelen),
                      (t.writelen = 0);
                  })(n),
                  e)
                )
                  !(function (t, e, n, i, o) {
                    --e.pendingcb,
                      n
                        ? (r.nextTick(o, i),
                          r.nextTick(I, t, e),
                          (t._writableState.errorEmitted = !0),
                          k(t, i))
                        : (o(i),
                          (t._writableState.errorEmitted = !0),
                          k(t, i),
                          I(t, e));
                  })(t, n, i, e, o);
                else {
                  var s = R(n) || t.destroyed;
                  s ||
                    n.corked ||
                    n.bufferProcessing ||
                    !n.bufferedRequest ||
                    A(t, n),
                    i ? r.nextTick(C, t, n, s, o) : C(t, n, s, o);
                }
              })(e, t);
            }),
            (this.writecb = null),
            (this.writelen = 0),
            (this.bufferedRequest = null),
            (this.lastBufferedRequest = null),
            (this.pendingcb = 0),
            (this.prefinished = !1),
            (this.errorEmitted = !1),
            (this.emitClose = !1 !== t.emitClose),
            (this.autoDestroy = !!t.autoDestroy),
            (this.bufferedRequestCount = 0),
            (this.corkedRequestsFree = new i(this));
        }
        function S(t) {
          var e = this instanceof (o = o || n(996));
          if (!e && !l.call(S, this)) return new S(t);
          (this._writableState = new E(t, this, e)),
            (this.writable = !0),
            t &&
              ("function" === typeof t.write && (this._write = t.write),
              "function" === typeof t.writev && (this._writev = t.writev),
              "function" === typeof t.destroy && (this._destroy = t.destroy),
              "function" === typeof t.final && (this._final = t.final)),
            a.call(this);
        }
        function M(t, e, n, r, i, o, s) {
          (e.writelen = r),
            (e.writecb = s),
            (e.writing = !0),
            (e.sync = !0),
            e.destroyed
              ? e.onwrite(new g("write"))
              : n
              ? t._writev(i, e.onwrite)
              : t._write(i, o, e.onwrite),
            (e.sync = !1);
        }
        function C(t, e, n, r) {
          n ||
            (function (t, e) {
              0 === e.length &&
                e.needDrain &&
                ((e.needDrain = !1), t.emit("drain"));
            })(t, e),
            e.pendingcb--,
            r(),
            I(t, e);
        }
        function A(t, e) {
          e.bufferProcessing = !0;
          var n = e.bufferedRequest;
          if (t._writev && n && n.next) {
            var r = e.bufferedRequestCount,
              o = new Array(r),
              s = e.corkedRequestsFree;
            s.entry = n;
            for (var a = 0, u = !0; n; )
              (o[a] = n), n.isBuf || (u = !1), (n = n.next), (a += 1);
            (o.allBuffers = u),
              M(t, e, !0, e.length, o, "", s.finish),
              e.pendingcb++,
              (e.lastBufferedRequest = null),
              s.next
                ? ((e.corkedRequestsFree = s.next), (s.next = null))
                : (e.corkedRequestsFree = new i(e)),
              (e.bufferedRequestCount = 0);
          } else {
            for (; n; ) {
              var c = n.chunk,
                l = n.encoding,
                h = n.callback;
              if (
                (M(t, e, !1, e.objectMode ? 1 : c.length, c, l, h),
                (n = n.next),
                e.bufferedRequestCount--,
                e.writing)
              )
                break;
            }
            null === n && (e.lastBufferedRequest = null);
          }
          (e.bufferedRequest = n), (e.bufferProcessing = !1);
        }
        function R(t) {
          return (
            t.ending &&
            0 === t.length &&
            null === t.bufferedRequest &&
            !t.finished &&
            !t.writing
          );
        }
        function O(t, e) {
          t._final(function (n) {
            e.pendingcb--,
              n && k(t, n),
              (e.prefinished = !0),
              t.emit("prefinish"),
              I(t, e);
          });
        }
        function I(t, e) {
          var n = R(e);
          if (
            n &&
            ((function (t, e) {
              e.prefinished ||
                e.finalCalled ||
                ("function" !== typeof t._final || e.destroyed
                  ? ((e.prefinished = !0), t.emit("prefinish"))
                  : (e.pendingcb++, (e.finalCalled = !0), r.nextTick(O, t, e)));
            })(t, e),
            0 === e.pendingcb &&
              ((e.finished = !0), t.emit("finish"), e.autoDestroy))
          ) {
            var i = t._readableState;
            (!i || (i.autoDestroy && i.endEmitted)) && t.destroy();
          }
          return n;
        }
        n(455)(S, a),
          (E.prototype.getBuffer = function () {
            for (var t = this.bufferedRequest, e = []; t; )
              e.push(t), (t = t.next);
            return e;
          }),
          (function () {
            try {
              Object.defineProperty(E.prototype, "buffer", {
                get: s.deprecate(
                  function () {
                    return this.getBuffer();
                  },
                  "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
                  "DEP0003"
                ),
              });
            } catch (t) {}
          })(),
          "function" === typeof Symbol &&
          Symbol.hasInstance &&
          "function" === typeof Function.prototype[Symbol.hasInstance]
            ? ((l = Function.prototype[Symbol.hasInstance]),
              Object.defineProperty(S, Symbol.hasInstance, {
                value: function (t) {
                  return (
                    !!l.call(this, t) ||
                    (this === S && t && t._writableState instanceof E)
                  );
                },
              }))
            : (l = function (t) {
                return t instanceof this;
              }),
          (S.prototype.pipe = function () {
            k(this, new y());
          }),
          (S.prototype.write = function (t, e, n) {
            var i,
              o = this._writableState,
              s = !1,
              a = !o.objectMode && ((i = t), u.isBuffer(i) || i instanceof c);
            return (
              a &&
                !u.isBuffer(t) &&
                (t = (function (t) {
                  return u.from(t);
                })(t)),
              "function" === typeof e && ((n = e), (e = null)),
              a ? (e = "buffer") : e || (e = o.defaultEncoding),
              "function" !== typeof n && (n = x),
              o.ending
                ? (function (t, e) {
                    var n = new w();
                    k(t, n), r.nextTick(e, n);
                  })(this, n)
                : (a ||
                    (function (t, e, n, i) {
                      var o;
                      return (
                        null === n
                          ? (o = new m())
                          : "string" === typeof n ||
                            e.objectMode ||
                            (o = new p("chunk", ["string", "Buffer"], n)),
                        !o || (k(t, o), r.nextTick(i, o), !1)
                      );
                    })(this, o, t, n)) &&
                  (o.pendingcb++,
                  (s = (function (t, e, n, r, i, o) {
                    if (!n) {
                      var s = (function (t, e, n) {
                        t.objectMode ||
                          !1 === t.decodeStrings ||
                          "string" !== typeof e ||
                          (e = u.from(e, n));
                        return e;
                      })(e, r, i);
                      r !== s && ((n = !0), (i = "buffer"), (r = s));
                    }
                    var a = e.objectMode ? 1 : r.length;
                    e.length += a;
                    var c = e.length < e.highWaterMark;
                    c || (e.needDrain = !0);
                    if (e.writing || e.corked) {
                      var l = e.lastBufferedRequest;
                      (e.lastBufferedRequest = {
                        chunk: r,
                        encoding: i,
                        isBuf: n,
                        callback: o,
                        next: null,
                      }),
                        l
                          ? (l.next = e.lastBufferedRequest)
                          : (e.bufferedRequest = e.lastBufferedRequest),
                        (e.bufferedRequestCount += 1);
                    } else M(t, e, !1, a, r, i, o);
                    return c;
                  })(this, o, a, t, e, n))),
              s
            );
          }),
          (S.prototype.cork = function () {
            this._writableState.corked++;
          }),
          (S.prototype.uncork = function () {
            var t = this._writableState;
            t.corked &&
              (t.corked--,
              t.writing ||
                t.corked ||
                t.bufferProcessing ||
                !t.bufferedRequest ||
                A(this, t));
          }),
          (S.prototype.setDefaultEncoding = function (t) {
            if (
              ("string" === typeof t && (t = t.toLowerCase()),
              !(
                [
                  "hex",
                  "utf8",
                  "utf-8",
                  "ascii",
                  "binary",
                  "base64",
                  "ucs2",
                  "ucs-2",
                  "utf16le",
                  "utf-16le",
                  "raw",
                ].indexOf((t + "").toLowerCase()) > -1
              ))
            )
              throw new _(t);
            return (this._writableState.defaultEncoding = t), this;
          }),
          Object.defineProperty(S.prototype, "writableBuffer", {
            enumerable: !1,
            get: function () {
              return this._writableState && this._writableState.getBuffer();
            },
          }),
          Object.defineProperty(S.prototype, "writableHighWaterMark", {
            enumerable: !1,
            get: function () {
              return this._writableState.highWaterMark;
            },
          }),
          (S.prototype._write = function (t, e, n) {
            n(new v("_write()"));
          }),
          (S.prototype._writev = null),
          (S.prototype.end = function (t, e, n) {
            var i = this._writableState;
            return (
              "function" === typeof t
                ? ((n = t), (t = null), (e = null))
                : "function" === typeof e && ((n = e), (e = null)),
              null !== t && void 0 !== t && this.write(t, e),
              i.corked && ((i.corked = 1), this.uncork()),
              i.ending ||
                (function (t, e, n) {
                  (e.ending = !0),
                    I(t, e),
                    n && (e.finished ? r.nextTick(n) : t.once("finish", n));
                  (e.ended = !0), (t.writable = !1);
                })(this, i, n),
              this
            );
          }),
          Object.defineProperty(S.prototype, "writableLength", {
            enumerable: !1,
            get: function () {
              return this._writableState.length;
            },
          }),
          Object.defineProperty(S.prototype, "destroyed", {
            enumerable: !1,
            get: function () {
              return (
                void 0 !== this._writableState && this._writableState.destroyed
              );
            },
            set: function (t) {
              this._writableState && (this._writableState.destroyed = t);
            },
          }),
          (S.prototype.destroy = h.destroy),
          (S.prototype._undestroy = h.undestroy),
          (S.prototype._destroy = function (t, e) {
            e(t);
          });
      }.call(this, n(52), n(72)));
    },
    1126: function (t, e, n) {
      "use strict";
      var r = n(1225).Buffer,
        i =
          r.isEncoding ||
          function (t) {
            switch ((t = "" + t) && t.toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
              case "raw":
                return !0;
              default:
                return !1;
            }
          };
      function o(t) {
        var e;
        switch (
          ((this.encoding = (function (t) {
            var e = (function (t) {
              if (!t) return "utf8";
              for (var e; ; )
                switch (t) {
                  case "utf8":
                  case "utf-8":
                    return "utf8";
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return "utf16le";
                  case "latin1":
                  case "binary":
                    return "latin1";
                  case "base64":
                  case "ascii":
                  case "hex":
                    return t;
                  default:
                    if (e) return;
                    (t = ("" + t).toLowerCase()), (e = !0);
                }
            })(t);
            if ("string" !== typeof e && (r.isEncoding === i || !i(t)))
              throw new Error("Unknown encoding: " + t);
            return e || t;
          })(t)),
          this.encoding)
        ) {
          case "utf16le":
            (this.text = u), (this.end = c), (e = 4);
            break;
          case "utf8":
            (this.fillLast = a), (e = 4);
            break;
          case "base64":
            (this.text = l), (this.end = h), (e = 3);
            break;
          default:
            return (this.write = f), void (this.end = d);
        }
        (this.lastNeed = 0),
          (this.lastTotal = 0),
          (this.lastChar = r.allocUnsafe(e));
      }
      function s(t) {
        return t <= 127
          ? 0
          : t >> 5 === 6
          ? 2
          : t >> 4 === 14
          ? 3
          : t >> 3 === 30
          ? 4
          : t >> 6 === 2
          ? -1
          : -2;
      }
      function a(t) {
        var e = this.lastTotal - this.lastNeed,
          n = (function (t, e, n) {
            if (128 !== (192 & e[0])) return (t.lastNeed = 0), "\ufffd";
            if (t.lastNeed > 1 && e.length > 1) {
              if (128 !== (192 & e[1])) return (t.lastNeed = 1), "\ufffd";
              if (t.lastNeed > 2 && e.length > 2 && 128 !== (192 & e[2]))
                return (t.lastNeed = 2), "\ufffd";
            }
          })(this, t);
        return void 0 !== n
          ? n
          : this.lastNeed <= t.length
          ? (t.copy(this.lastChar, e, 0, this.lastNeed),
            this.lastChar.toString(this.encoding, 0, this.lastTotal))
          : (t.copy(this.lastChar, e, 0, t.length),
            void (this.lastNeed -= t.length));
      }
      function u(t, e) {
        if ((t.length - e) % 2 === 0) {
          var n = t.toString("utf16le", e);
          if (n) {
            var r = n.charCodeAt(n.length - 1);
            if (r >= 55296 && r <= 56319)
              return (
                (this.lastNeed = 2),
                (this.lastTotal = 4),
                (this.lastChar[0] = t[t.length - 2]),
                (this.lastChar[1] = t[t.length - 1]),
                n.slice(0, -1)
              );
          }
          return n;
        }
        return (
          (this.lastNeed = 1),
          (this.lastTotal = 2),
          (this.lastChar[0] = t[t.length - 1]),
          t.toString("utf16le", e, t.length - 1)
        );
      }
      function c(t) {
        var e = t && t.length ? this.write(t) : "";
        if (this.lastNeed) {
          var n = this.lastTotal - this.lastNeed;
          return e + this.lastChar.toString("utf16le", 0, n);
        }
        return e;
      }
      function l(t, e) {
        var n = (t.length - e) % 3;
        return 0 === n
          ? t.toString("base64", e)
          : ((this.lastNeed = 3 - n),
            (this.lastTotal = 3),
            1 === n
              ? (this.lastChar[0] = t[t.length - 1])
              : ((this.lastChar[0] = t[t.length - 2]),
                (this.lastChar[1] = t[t.length - 1])),
            t.toString("base64", e, t.length - n));
      }
      function h(t) {
        var e = t && t.length ? this.write(t) : "";
        return this.lastNeed
          ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed)
          : e;
      }
      function f(t) {
        return t.toString(this.encoding);
      }
      function d(t) {
        return t && t.length ? this.write(t) : "";
      }
      (e.StringDecoder = o),
        (o.prototype.write = function (t) {
          if (0 === t.length) return "";
          var e, n;
          if (this.lastNeed) {
            if (void 0 === (e = this.fillLast(t))) return "";
            (n = this.lastNeed), (this.lastNeed = 0);
          } else n = 0;
          return n < t.length
            ? e
              ? e + this.text(t, n)
              : this.text(t, n)
            : e || "";
        }),
        (o.prototype.end = function (t) {
          var e = t && t.length ? this.write(t) : "";
          return this.lastNeed ? e + "\ufffd" : e;
        }),
        (o.prototype.text = function (t, e) {
          var n = (function (t, e, n) {
            var r = e.length - 1;
            if (r < n) return 0;
            var i = s(e[r]);
            if (i >= 0) return i > 0 && (t.lastNeed = i - 1), i;
            if (--r < n || -2 === i) return 0;
            if ((i = s(e[r])) >= 0) return i > 0 && (t.lastNeed = i - 2), i;
            if (--r < n || -2 === i) return 0;
            if ((i = s(e[r])) >= 0)
              return i > 0 && (2 === i ? (i = 0) : (t.lastNeed = i - 3)), i;
            return 0;
          })(this, t, e);
          if (!this.lastNeed) return t.toString("utf8", e);
          this.lastTotal = n;
          var r = t.length - (n - this.lastNeed);
          return t.copy(this.lastChar, 0, r), t.toString("utf8", e, r);
        }),
        (o.prototype.fillLast = function (t) {
          if (this.lastNeed <= t.length)
            return (
              t.copy(
                this.lastChar,
                this.lastTotal - this.lastNeed,
                0,
                this.lastNeed
              ),
              this.lastChar.toString(this.encoding, 0, this.lastTotal)
            );
          t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length),
            (this.lastNeed -= t.length);
        });
    },
    1127: function (t, e, n) {
      "use strict";
      t.exports = l;
      var r = n(995).codes,
        i = r.ERR_METHOD_NOT_IMPLEMENTED,
        o = r.ERR_MULTIPLE_CALLBACK,
        s = r.ERR_TRANSFORM_ALREADY_TRANSFORMING,
        a = r.ERR_TRANSFORM_WITH_LENGTH_0,
        u = n(996);
      function c(t, e) {
        var n = this._transformState;
        n.transforming = !1;
        var r = n.writecb;
        if (null === r) return this.emit("error", new o());
        (n.writechunk = null),
          (n.writecb = null),
          null != e && this.push(e),
          r(t);
        var i = this._readableState;
        (i.reading = !1),
          (i.needReadable || i.length < i.highWaterMark) &&
            this._read(i.highWaterMark);
      }
      function l(t) {
        if (!(this instanceof l)) return new l(t);
        u.call(this, t),
          (this._transformState = {
            afterTransform: c.bind(this),
            needTransform: !1,
            transforming: !1,
            writecb: null,
            writechunk: null,
            writeencoding: null,
          }),
          (this._readableState.needReadable = !0),
          (this._readableState.sync = !1),
          t &&
            ("function" === typeof t.transform &&
              (this._transform = t.transform),
            "function" === typeof t.flush && (this._flush = t.flush)),
          this.on("prefinish", h);
      }
      function h() {
        var t = this;
        "function" !== typeof this._flush || this._readableState.destroyed
          ? f(this, null, null)
          : this._flush(function (e, n) {
              f(t, e, n);
            });
      }
      function f(t, e, n) {
        if (e) return t.emit("error", e);
        if ((null != n && t.push(n), t._writableState.length)) throw new a();
        if (t._transformState.transforming) throw new s();
        return t.push(null);
      }
      n(455)(l, u),
        (l.prototype.push = function (t, e) {
          return (
            (this._transformState.needTransform = !1),
            u.prototype.push.call(this, t, e)
          );
        }),
        (l.prototype._transform = function (t, e, n) {
          n(new i("_transform()"));
        }),
        (l.prototype._write = function (t, e, n) {
          var r = this._transformState;
          if (
            ((r.writecb = n),
            (r.writechunk = t),
            (r.writeencoding = e),
            !r.transforming)
          ) {
            var i = this._readableState;
            (r.needTransform || i.needReadable || i.length < i.highWaterMark) &&
              this._read(i.highWaterMark);
          }
        }),
        (l.prototype._read = function (t) {
          var e = this._transformState;
          null === e.writechunk || e.transforming
            ? (e.needTransform = !0)
            : ((e.transforming = !0),
              this._transform(e.writechunk, e.writeencoding, e.afterTransform));
        }),
        (l.prototype._destroy = function (t, e) {
          u.prototype._destroy.call(this, t, function (t) {
            e(t);
          });
        });
    },
    1128: function (t, e, n) {
      "use strict";
      var r = function (t, e) {
        return function () {
          for (
            var n = this,
              r = e.promiseModule,
              i = new Array(arguments.length),
              o = 0;
            o < arguments.length;
            o++
          )
            i[o] = arguments[o];
          return new r(function (r, o) {
            e.errorFirst
              ? i.push(function (t, n) {
                  if (e.multiArgs) {
                    for (
                      var i = new Array(arguments.length - 1), s = 1;
                      s < arguments.length;
                      s++
                    )
                      i[s - 1] = arguments[s];
                    t ? (i.unshift(t), o(i)) : r(i);
                  } else t ? o(t) : r(n);
                })
              : i.push(function (t) {
                  if (e.multiArgs) {
                    for (
                      var n = new Array(arguments.length - 1), i = 0;
                      i < arguments.length;
                      i++
                    )
                      n[i] = arguments[i];
                    r(n);
                  } else r(t);
                }),
              t.apply(n, i);
          });
        };
      };
      t.exports = function (t, e) {
        e = Object.assign(
          {
            exclude: [/.+(Sync|Stream)$/],
            errorFirst: !0,
            promiseModule: Promise,
          },
          e
        );
        var n,
          i = function (t) {
            var n = function (e) {
              return "string" === typeof e ? t === e : e.test(t);
            };
            return e.include ? e.include.some(n) : !e.exclude.some(n);
          };
        for (var o in ((n =
          "function" === typeof t
            ? function () {
                return e.excludeMain
                  ? t.apply(this, arguments)
                  : r(t, e).apply(this, arguments);
              }
            : Object.create(Object.getPrototypeOf(t))),
        t)) {
          var s = t[o];
          n[o] = "function" === typeof s && i(o) ? r(s, e) : s;
        }
        return n;
      };
    },
    1129: function (t, e, n) {
      var r = n(1239),
        i = n(1240)();
      function o(t) {
        this.currentProvider = t;
      }
      function s(t) {
        return function () {
          var e = this,
            n = [].slice.call(arguments),
            r = n.pop();
          e.sendAsync({ method: t, params: n }, r);
        };
      }
      function a(t, e) {
        return function () {
          var n = this,
            r = [].slice.call(arguments),
            i = r.pop();
          r.length < t && r.push("latest"),
            n.sendAsync({ method: e, params: r }, i);
        };
      }
      (t.exports = o),
        (o.prototype.getBalance = a(2, "eth_getBalance")),
        (o.prototype.getCode = a(2, "eth_getCode")),
        (o.prototype.getTransactionCount = a(2, "eth_getTransactionCount")),
        (o.prototype.getStorageAt = a(3, "eth_getStorageAt")),
        (o.prototype.call = a(2, "eth_call")),
        (o.prototype.protocolVersion = s("eth_protocolVersion")),
        (o.prototype.syncing = s("eth_syncing")),
        (o.prototype.coinbase = s("eth_coinbase")),
        (o.prototype.mining = s("eth_mining")),
        (o.prototype.hashrate = s("eth_hashrate")),
        (o.prototype.gasPrice = s("eth_gasPrice")),
        (o.prototype.accounts = s("eth_accounts")),
        (o.prototype.blockNumber = s("eth_blockNumber")),
        (o.prototype.getBlockTransactionCountByHash = s(
          "eth_getBlockTransactionCountByHash"
        )),
        (o.prototype.getBlockTransactionCountByNumber = s(
          "eth_getBlockTransactionCountByNumber"
        )),
        (o.prototype.getUncleCountByBlockHash = s(
          "eth_getUncleCountByBlockHash"
        )),
        (o.prototype.getUncleCountByBlockNumber = s(
          "eth_getUncleCountByBlockNumber"
        )),
        (o.prototype.sign = s("eth_sign")),
        (o.prototype.sendTransaction = s("eth_sendTransaction")),
        (o.prototype.sendRawTransaction = s("eth_sendRawTransaction")),
        (o.prototype.estimateGas = s("eth_estimateGas")),
        (o.prototype.getBlockByHash = s("eth_getBlockByHash")),
        (o.prototype.getBlockByNumber = s("eth_getBlockByNumber")),
        (o.prototype.getTransactionByHash = s("eth_getTransactionByHash")),
        (o.prototype.getTransactionByBlockHashAndIndex = s(
          "eth_getTransactionByBlockHashAndIndex"
        )),
        (o.prototype.getTransactionByBlockNumberAndIndex = s(
          "eth_getTransactionByBlockNumberAndIndex"
        )),
        (o.prototype.getTransactionReceipt = s("eth_getTransactionReceipt")),
        (o.prototype.getUncleByBlockHashAndIndex = s(
          "eth_getUncleByBlockHashAndIndex"
        )),
        (o.prototype.getUncleByBlockNumberAndIndex = s(
          "eth_getUncleByBlockNumberAndIndex"
        )),
        (o.prototype.getCompilers = s("eth_getCompilers")),
        (o.prototype.compileLLL = s("eth_compileLLL")),
        (o.prototype.compileSolidity = s("eth_compileSolidity")),
        (o.prototype.compileSerpent = s("eth_compileSerpent")),
        (o.prototype.newFilter = s("eth_newFilter")),
        (o.prototype.newBlockFilter = s("eth_newBlockFilter")),
        (o.prototype.newPendingTransactionFilter = s(
          "eth_newPendingTransactionFilter"
        )),
        (o.prototype.uninstallFilter = s("eth_uninstallFilter")),
        (o.prototype.getFilterChanges = s("eth_getFilterChanges")),
        (o.prototype.getFilterLogs = s("eth_getFilterLogs")),
        (o.prototype.getLogs = s("eth_getLogs")),
        (o.prototype.getWork = s("eth_getWork")),
        (o.prototype.submitWork = s("eth_submitWork")),
        (o.prototype.submitHashrate = s("eth_submitHashrate")),
        (o.prototype.sendAsync = function (t, e) {
          var n;
          this.currentProvider.sendAsync(
            ((n = t), r({ id: i(), jsonrpc: "2.0", params: [] }, n)),
            function (t, n) {
              if (
                (!t &&
                  n.error &&
                  (t = new Error("EthQuery - RPC Error - " + n.error.message)),
                t)
              )
                return e(t);
              e(null, n.result);
            }
          );
        });
    },
    1130: function (t, e, n) {
      t.exports = n(1246);
    },
    1131: function (t, e, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, n, r) {
                void 0 === r && (r = n),
                  Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: function () {
                      return e[n];
                    },
                  });
              }
            : function (t, e, n, r) {
                void 0 === r && (r = n), (t[r] = e[n]);
              }),
        i =
          (this && this.__exportStar) ||
          function (t, e) {
            for (var n in t)
              "default" === n ||
                Object.prototype.hasOwnProperty.call(e, n) ||
                r(e, t, n);
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        i(n(1247), e),
        i(n(1248), e),
        i(n(1249), e),
        i(n(1132), e),
        i(n(1133), e),
        i(n(1252), e);
    },
    1132: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.getUniqueId = void 0);
      var r = 4294967295,
        i = Math.floor(Math.random() * r);
      e.getUniqueId = function () {
        return (i = (i + 1) % r);
      };
    },
    1133: function (t, e, n) {
      "use strict";
      var r = n(232),
        i = n(2),
        o = n(231),
        s = n(168),
        a = n(91),
        u = n(92),
        c = n(273),
        l = n(274),
        h =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.JsonRpcEngine = void 0);
      var f = h(n(1015)),
        d = n(1250),
        p = (function (t) {
          c(n, t);
          var e = l(n);
          function n() {
            var t;
            return a(this, n), ((t = e.call(this))._middleware = []), t;
          }
          return (
            u(
              n,
              [
                {
                  key: "push",
                  value: function (t) {
                    this._middleware.push(t);
                  },
                },
                {
                  key: "handle",
                  value: function (t, e) {
                    if (e && "function" !== typeof e)
                      throw new Error(
                        '"callback" must be a function if provided.'
                      );
                    return Array.isArray(t)
                      ? e
                        ? this._handleBatch(t, e)
                        : this._handleBatch(t)
                      : e
                      ? this._handle(t, e)
                      : this._promiseHandle(t);
                  },
                },
                {
                  key: "asMiddleware",
                  value: function () {
                    var t = this;
                    return (function () {
                      var e = s(
                        i.mark(function e(r, a, u, c) {
                          var l, h, f, d, p;
                          return i.wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.prev = 0),
                                      (e.next = 3),
                                      n._runAllMiddleware(r, a, t._middleware)
                                    );
                                  case 3:
                                    if (
                                      ((l = e.sent),
                                      (h = o(l, 3)),
                                      (f = h[0]),
                                      (d = h[1]),
                                      (p = h[2]),
                                      !d)
                                    ) {
                                      e.next = 12;
                                      break;
                                    }
                                    return (
                                      (e.next = 11), n._runReturnHandlers(p)
                                    );
                                  case 11:
                                    return e.abrupt("return", c(f));
                                  case 12:
                                    return e.abrupt(
                                      "return",
                                      u(
                                        (function () {
                                          var t = s(
                                            i.mark(function t(e) {
                                              return i.wrap(
                                                function (t) {
                                                  for (;;)
                                                    switch ((t.prev = t.next)) {
                                                      case 0:
                                                        return (
                                                          (t.prev = 0),
                                                          (t.next = 3),
                                                          n._runReturnHandlers(
                                                            p
                                                          )
                                                        );
                                                      case 3:
                                                        t.next = 8;
                                                        break;
                                                      case 5:
                                                        return (
                                                          (t.prev = 5),
                                                          (t.t0 = t.catch(0)),
                                                          t.abrupt(
                                                            "return",
                                                            e(t.t0)
                                                          )
                                                        );
                                                      case 8:
                                                        return t.abrupt(
                                                          "return",
                                                          e()
                                                        );
                                                      case 9:
                                                      case "end":
                                                        return t.stop();
                                                    }
                                                },
                                                t,
                                                null,
                                                [[0, 5]]
                                              );
                                            })
                                          );
                                          return function (e) {
                                            return t.apply(this, arguments);
                                          };
                                        })()
                                      )
                                    );
                                  case 15:
                                    return (
                                      (e.prev = 15),
                                      (e.t0 = e.catch(0)),
                                      e.abrupt("return", c(e.t0))
                                    );
                                  case 18:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            null,
                            [[0, 15]]
                          );
                        })
                      );
                      return function (t, n, r, i) {
                        return e.apply(this, arguments);
                      };
                    })();
                  },
                },
                {
                  key: "_handleBatch",
                  value: (function () {
                    var t = s(
                      i.mark(function t(e, n) {
                        var r;
                        return i.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (t.prev = 0),
                                    (t.next = 3),
                                    Promise.all(
                                      e.map(this._promiseHandle.bind(this))
                                    )
                                  );
                                case 3:
                                  if (((r = t.sent), !n)) {
                                    t.next = 6;
                                    break;
                                  }
                                  return t.abrupt("return", n(null, r));
                                case 6:
                                  return t.abrupt("return", r);
                                case 9:
                                  if (((t.prev = 9), (t.t0 = t.catch(0)), !n)) {
                                    t.next = 13;
                                    break;
                                  }
                                  return t.abrupt("return", n(t.t0));
                                case 13:
                                  throw t.t0;
                                case 14:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          this,
                          [[0, 9]]
                        );
                      })
                    );
                    return function (e, n) {
                      return t.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "_promiseHandle",
                  value: function (t) {
                    var e = this;
                    return new Promise(function (n) {
                      e._handle(t, function (t, e) {
                        n(e);
                      });
                    });
                  },
                },
                {
                  key: "_handle",
                  value: (function () {
                    var t = s(
                      i.mark(function t(e, n) {
                        var r, o, s, a, u;
                        return i.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (
                                    e &&
                                    !Array.isArray(e) &&
                                    "object" === typeof e
                                  ) {
                                    t.next = 3;
                                    break;
                                  }
                                  return (
                                    (r = new d.EthereumRpcError(
                                      d.errorCodes.rpc.invalidRequest,
                                      "Requests must be plain objects. Received: ".concat(
                                        typeof e
                                      ),
                                      { request: e }
                                    )),
                                    t.abrupt(
                                      "return",
                                      n(r, {
                                        id: void 0,
                                        jsonrpc: "2.0",
                                        error: r,
                                      })
                                    )
                                  );
                                case 3:
                                  if ("string" === typeof e.method) {
                                    t.next = 6;
                                    break;
                                  }
                                  return (
                                    (o = new d.EthereumRpcError(
                                      d.errorCodes.rpc.invalidRequest,
                                      "Must specify a string method. Received: ".concat(
                                        typeof e.method
                                      ),
                                      { request: e }
                                    )),
                                    t.abrupt(
                                      "return",
                                      n(o, {
                                        id: e.id,
                                        jsonrpc: "2.0",
                                        error: o,
                                      })
                                    )
                                  );
                                case 6:
                                  return (
                                    (s = Object.assign({}, e)),
                                    (a = { id: s.id, jsonrpc: s.jsonrpc }),
                                    (u = null),
                                    (t.prev = 9),
                                    (t.next = 12),
                                    this._processRequest(s, a)
                                  );
                                case 12:
                                  t.next = 17;
                                  break;
                                case 14:
                                  (t.prev = 14),
                                    (t.t0 = t.catch(9)),
                                    (u = t.t0);
                                case 17:
                                  return (
                                    u &&
                                      (delete a.result,
                                      a.error ||
                                        (a.error = d.serializeError(u))),
                                    t.abrupt("return", n(u, a))
                                  );
                                case 19:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          this,
                          [[9, 14]]
                        );
                      })
                    );
                    return function (e, n) {
                      return t.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "_processRequest",
                  value: (function () {
                    var t = s(
                      i.mark(function t(e, r) {
                        var s, a, u, c, l;
                        return i.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (t.next = 2),
                                    n._runAllMiddleware(e, r, this._middleware)
                                  );
                                case 2:
                                  return (
                                    (s = t.sent),
                                    (a = o(s, 3)),
                                    (u = a[0]),
                                    (c = a[1]),
                                    (l = a[2]),
                                    n._checkForCompletion(e, r, c),
                                    (t.next = 10),
                                    n._runReturnHandlers(l)
                                  );
                                case 10:
                                  if (!u) {
                                    t.next = 12;
                                    break;
                                  }
                                  throw u;
                                case 12:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          this
                        );
                      })
                    );
                    return function (e, n) {
                      return t.apply(this, arguments);
                    };
                  })(),
                },
              ],
              [
                {
                  key: "_runAllMiddleware",
                  value: (function () {
                    var t = s(
                      i.mark(function t(e, s, a) {
                        var u, c, l, h, f, d, p, v;
                        return i.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  (u = []),
                                    (c = null),
                                    (l = !1),
                                    (h = r(a)),
                                    (t.prev = 4),
                                    h.s();
                                case 6:
                                  if ((f = h.n()).done) {
                                    t.next = 18;
                                    break;
                                  }
                                  return (
                                    (d = f.value),
                                    (t.next = 10),
                                    n._runMiddleware(e, s, d, u)
                                  );
                                case 10:
                                  if (
                                    ((p = t.sent),
                                    (v = o(p, 2)),
                                    (c = v[0]),
                                    !(l = v[1]))
                                  ) {
                                    t.next = 16;
                                    break;
                                  }
                                  return t.abrupt("break", 18);
                                case 16:
                                  t.next = 6;
                                  break;
                                case 18:
                                  t.next = 23;
                                  break;
                                case 20:
                                  (t.prev = 20), (t.t0 = t.catch(4)), h.e(t.t0);
                                case 23:
                                  return (t.prev = 23), h.f(), t.finish(23);
                                case 26:
                                  return t.abrupt("return", [
                                    c,
                                    l,
                                    u.reverse(),
                                  ]);
                                case 27:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          null,
                          [[4, 20, 23, 26]]
                        );
                      })
                    );
                    return function (e, n, r) {
                      return t.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "_runMiddleware",
                  value: function (t, e, n, r) {
                    return new Promise(function (i) {
                      var o = function (t) {
                        var n = t || e.error;
                        n && (e.error = d.serializeError(n)), i([n, !0]);
                      };
                      try {
                        n(
                          t,
                          e,
                          function (n) {
                            e.error
                              ? o(e.error)
                              : (n &&
                                  ("function" !== typeof n &&
                                    o(
                                      new d.EthereumRpcError(
                                        d.errorCodes.rpc.internal,
                                        'JsonRpcEngine: "next" return handlers must be functions. ' +
                                          'Received "'
                                            .concat(
                                              typeof n,
                                              '" for request:\n'
                                            )
                                            .concat(v(t)),
                                        { request: t }
                                      )
                                    ),
                                  r.push(n)),
                                i([null, !1]));
                          },
                          o
                        );
                      } catch (s) {
                        o(s);
                      }
                    });
                  },
                },
                {
                  key: "_runReturnHandlers",
                  value: (function () {
                    var t = s(
                      i.mark(function t(e) {
                        var n, o, s;
                        return i.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  (n = r(e)),
                                    (t.prev = 1),
                                    (s = i.mark(function t() {
                                      var e;
                                      return i.wrap(function (t) {
                                        for (;;)
                                          switch ((t.prev = t.next)) {
                                            case 0:
                                              return (
                                                (e = o.value),
                                                (t.next = 3),
                                                new Promise(function (t, n) {
                                                  e(function (e) {
                                                    return e ? n(e) : t();
                                                  });
                                                })
                                              );
                                            case 3:
                                            case "end":
                                              return t.stop();
                                          }
                                      }, t);
                                    })),
                                    n.s();
                                case 4:
                                  if ((o = n.n()).done) {
                                    t.next = 8;
                                    break;
                                  }
                                  return t.delegateYield(s(), "t0", 6);
                                case 6:
                                  t.next = 4;
                                  break;
                                case 8:
                                  t.next = 13;
                                  break;
                                case 10:
                                  (t.prev = 10), (t.t1 = t.catch(1)), n.e(t.t1);
                                case 13:
                                  return (t.prev = 13), n.f(), t.finish(13);
                                case 16:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          null,
                          [[1, 10, 13, 16]]
                        );
                      })
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "_checkForCompletion",
                  value: function (t, e, n) {
                    if (!("result" in e) && !("error" in e))
                      throw new d.EthereumRpcError(
                        d.errorCodes.rpc.internal,
                        "JsonRpcEngine: Response has no error or result for request:\n".concat(
                          v(t)
                        ),
                        { request: t }
                      );
                    if (!n)
                      throw new d.EthereumRpcError(
                        d.errorCodes.rpc.internal,
                        "JsonRpcEngine: Nothing ended request:\n".concat(v(t)),
                        { request: t }
                      );
                  },
                },
              ]
            ),
            n
          );
        })(f.default);
      function v(t) {
        return JSON.stringify(t, null, 2);
      }
      e.JsonRpcEngine = p;
    },
    1134: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.serializeError =
          e.isValidCode =
          e.getMessageFromCode =
          e.JSON_RPC_SERVER_ERROR_MESSAGE =
            void 0);
      var r = n(1068),
        i = n(1067),
        o = r.errorCodes.rpc.internal,
        s = "Unspecified error message. This is a bug, please report it.",
        a = { code: o, message: u(o) };
      function u(t) {
        var n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s;
        if (Number.isInteger(t)) {
          var i = t.toString();
          if (f(r.errorValues, i)) return r.errorValues[i].message;
          if (l(t)) return e.JSON_RPC_SERVER_ERROR_MESSAGE;
        }
        return n;
      }
      function c(t) {
        if (!Number.isInteger(t)) return !1;
        var e = t.toString();
        return !!r.errorValues[e] || !!l(t);
      }
      function l(t) {
        return t >= -32099 && t <= -32e3;
      }
      function h(t) {
        return t && "object" === typeof t && !Array.isArray(t)
          ? Object.assign({}, t)
          : t;
      }
      function f(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }
      (e.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error."),
        (e.getMessageFromCode = u),
        (e.isValidCode = c),
        (e.serializeError = function (t) {
          var e,
            n,
            r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            o = r.fallbackError,
            s = void 0 === o ? a : o,
            l = r.shouldIncludeStack,
            d = void 0 !== l && l;
          if (!s || !Number.isInteger(s.code) || "string" !== typeof s.message)
            throw new Error(
              "Must provide fallback error with integer number code and string message."
            );
          if (t instanceof i.EthereumRpcError) return t.serialize();
          var p = {};
          if (
            t &&
            "object" === typeof t &&
            !Array.isArray(t) &&
            f(t, "code") &&
            c(t.code)
          ) {
            var v = t;
            (p.code = v.code),
              v.message && "string" === typeof v.message
                ? ((p.message = v.message), f(v, "data") && (p.data = v.data))
                : ((p.message = u(p.code)), (p.data = { originalError: h(t) }));
          } else {
            p.code = s.code;
            var b = null === (e = t) || void 0 === e ? void 0 : e.message;
            (p.message = b && "string" === typeof b ? b : s.message),
              (p.data = { originalError: h(t) });
          }
          var y = null === (n = t) || void 0 === n ? void 0 : n.stack;
          return d && t && y && "string" === typeof y && (p.stack = y), p;
        });
    },
    1135: function (t, e, n) {
      "use strict";
      var r = n(91),
        i = n(92);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.WalletLink = void 0);
      var o = n(1047),
        s = n(1259),
        a = n(1043),
        u = n(1260),
        c = n(1277),
        l = n(1288),
        h = n(986),
        f =
          Object({
            NODE_ENV: "production",
            PUBLIC_URL: "",
            WDS_SOCKET_HOST: void 0,
            WDS_SOCKET_PATH: void 0,
            WDS_SOCKET_PORT: void 0,
            FAST_REFRESH: !0,
            REACT_APP_INFURA_KEY: "9428ad2ad11d4b54b6c20b88993e4598",
            REACT_APP_PORTIS_ID: "",
            REACT_APP_FORTMATIC_KEY: "",
            REACT_APP_GOOGLE_ANALYTICS_ID: "",
            REACT_APP_FIREBASE_KEY: "",
            REACT_APP_IS_PRODUCTION_DEPLOY: "true",
            REACT_APP_NETWORK_URL:
              "https://mainnet.infura.io/v3/9428ad2ad11d4b54b6c20b88993e4598",
            REACT_APP_CHAIN_ID: "1",
          }).WALLETLINK_URL || "https://www.walletlink.org",
        d =
          Object({
            NODE_ENV: "production",
            PUBLIC_URL: "",
            WDS_SOCKET_HOST: void 0,
            WDS_SOCKET_PATH: void 0,
            WDS_SOCKET_PORT: void 0,
            FAST_REFRESH: !0,
            REACT_APP_INFURA_KEY: "9428ad2ad11d4b54b6c20b88993e4598",
            REACT_APP_PORTIS_ID: "",
            REACT_APP_FORTMATIC_KEY: "",
            REACT_APP_GOOGLE_ANALYTICS_ID: "",
            REACT_APP_FIREBASE_KEY: "",
            REACT_APP_IS_PRODUCTION_DEPLOY: "true",
            REACT_APP_NETWORK_URL:
              "https://mainnet.infura.io/v3/9428ad2ad11d4b54b6c20b88993e4598",
            REACT_APP_CHAIN_ID: "1",
          }).WALLETLINK_VERSION ||
          n(1289).version ||
          "unknown",
        p = (function () {
          function t(e) {
            var n;
            r(this, t),
              (this._appName = ""),
              (this._appLogoUrl = null),
              (this._relay = null),
              (this._relayEventManager = null);
            var i,
              a = e.walletLinkUrl || f;
            (i = e.walletLinkUIConstructor
              ? e.walletLinkUIConstructor
              : function (t) {
                  return new u.WalletLinkSdkUI(t);
                }),
              "undefined" === typeof e.overrideIsMetaMask
                ? (this._overrideIsMetaMask = !1)
                : (this._overrideIsMetaMask = e.overrideIsMetaMask),
              (this._overrideIsCoinbaseWallet =
                null === (n = e.overrideIsCoinbaseWallet) || void 0 === n || n),
              (this._walletLinkAnalytics = e.walletLinkAnalytics
                ? e.walletLinkAnalytics
                : new o.WalletLinkAnalytics());
            var h = new URL(a),
              p = "".concat(h.protocol, "//").concat(h.host);
            (this._storage = new s.ScopedLocalStorage(
              "-walletlink:".concat(p)
            )),
              this._storage.setItem("version", t.VERSION),
              "undefined" === typeof window.walletLinkExtension &&
                ((this._relayEventManager =
                  new l.WalletLinkRelayEventManager()),
                (this._relay = new c.WalletLinkRelay({
                  walletLinkUrl: a,
                  version: d,
                  darkMode: !!e.darkMode,
                  walletLinkUIConstructor: i,
                  storage: this._storage,
                  relayEventManager: this._relayEventManager,
                  walletLinkAnalytics: this._walletLinkAnalytics,
                })),
                this.setAppInfo(e.appName, e.appLogoUrl),
                this._relay.attachUI());
          }
          return (
            i(t, [
              {
                key: "makeWeb3Provider",
                value: function () {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "",
                    e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 1;
                  if ("undefined" !== typeof window.walletLinkExtension)
                    return (
                      ("boolean" ===
                        typeof window.walletLinkExtension.isCipher &&
                        window.walletLinkExtension.isCipher) ||
                        window.walletLinkExtension.setProviderInfo(t, e),
                      window.walletLinkExtension
                    );
                  var n = this._relay;
                  if (!n || !this._relayEventManager || !this._storage)
                    throw new Error(
                      "Relay not initialized, should never happen"
                    );
                  return (
                    t || n.setConnectDisabled(!0),
                    new a.WalletLinkProvider({
                      relayProvider: function () {
                        return Promise.resolve(n);
                      },
                      relayEventManager: this._relayEventManager,
                      storage: this._storage,
                      jsonRpcUrl: t,
                      chainId: e,
                      walletLinkAnalytics: this._walletLinkAnalytics,
                      overrideIsMetaMask: this._overrideIsMetaMask,
                      overrideIsCoinbaseWallet: this._overrideIsCoinbaseWallet,
                    })
                  );
                },
              },
              {
                key: "setAppInfo",
                value: function (t, e) {
                  var n;
                  (this._appName = t || "DApp"),
                    (this._appLogoUrl = e || (0, h.getFavicon)()),
                    "undefined" !== typeof window.walletLinkExtension
                      ? ("boolean" ===
                          typeof window.walletLinkExtension.isCipher &&
                          window.walletLinkExtension.isCipher) ||
                        window.walletLinkExtension.setAppInfo(
                          this._appName,
                          this._appLogoUrl
                        )
                      : null === (n = this._relay) ||
                        void 0 === n ||
                        n.setAppInfo(this._appName, this._appLogoUrl);
                },
              },
              {
                key: "disconnect",
                value: function () {
                  var t;
                  "undefined" !== typeof window.walletLinkExtension
                    ? window.walletLinkExtension.close()
                    : null === (t = this._relay) ||
                      void 0 === t ||
                      t.resetAndReload();
                },
              },
            ]),
            t
          );
        })();
      (e.WalletLink = p), (p.VERSION = d);
    },
    1136: function (t, e, n) {
      "use strict";
      (function (t) {
        var r = n(231),
          i =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.QRCode = void 0);
        var o = n(987),
          s = n(1028),
          a = i(n(1264));
        e.QRCode = function (e) {
          var n = (0, s.useState)(""),
            i = r(n, 2),
            u = i[0],
            c = i[1];
          return (
            (0, s.useEffect)(function () {
              var n,
                r,
                i = new a.default({
                  content: e.content,
                  background: e.bgColor || "#ffffff",
                  color: e.fgColor || "#000000",
                  container: "svg",
                  ecl: "M",
                  width: null !== (n = e.width) && void 0 !== n ? n : 256,
                  height: null !== (r = e.height) && void 0 !== r ? r : 256,
                  padding: 0,
                  image: e.image,
                }),
                o = t.from(i.svg(), "utf8").toString("base64");
              c("data:image/svg+xml;base64,".concat(o));
            }),
            u ? (0, o.h)("img", { src: u, alt: "QR Code" }) : null
          );
        };
      }.call(this, n(230).Buffer));
    },
    1137: function (t, e, n) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Spinner = void 0);
      var i = n(987),
        o = r(n(1265));
      e.Spinner = function (t) {
        var e,
          n = null !== (e = t.size) && void 0 !== e ? e : 64,
          r = t.color || "#000";
        return (0, i.h)(
          "div",
          { class: "-walletlink-spinner" },
          (0, i.h)("style", null, o.default),
          (0, i.h)(
            "svg",
            {
              viewBox: "0 0 100 100",
              xmlns: "http://www.w3.org/2000/svg",
              style: { width: n, height: n },
            },
            (0, i.h)("circle", { style: { cx: 50, cy: 50, r: 45, stroke: r } })
          )
        );
      };
    },
    1138: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Web3Method = void 0),
        (function (t) {
          (t.requestEthereumAccounts = "requestEthereumAccounts"),
            (t.signEthereumMessage = "signEthereumMessage"),
            (t.signEthereumTransaction = "signEthereumTransaction"),
            (t.submitEthereumTransaction = "submitEthereumTransaction"),
            (t.ethereumAddressFromSignedMessage =
              "ethereumAddressFromSignedMessage"),
            (t.scanQRCode = "scanQRCode"),
            (t.generic = "generic"),
            (t.childRequestEthereumAccounts = "childRequestEthereumAccounts"),
            (t.addEthereumChain = "addEthereumChain"),
            (t.switchEthereumChain = "switchEthereumChain"),
            (t.makeEthereumJSONRPCRequest = "makeEthereumJSONRPCRequest");
        })(e.Web3Method || (e.Web3Method = {}));
    },
    1210: function (t, e) {
      t.exports = function (t) {
        return -1 !== Function.toString.call(t).indexOf("[native code]");
      };
    },
    1211: function (t, e, n) {
      var r = n(456),
        i = n(458);
      function o(e, n, s) {
        return (
          i()
            ? (t.exports = o = Reflect.construct)
            : (t.exports = o =
                function (t, e, n) {
                  var i = [null];
                  i.push.apply(i, e);
                  var o = new (Function.bind.apply(t, i))();
                  return n && r(o, n.prototype), o;
                }),
          o.apply(null, arguments)
        );
      }
      t.exports = o;
    },
    1212: function (t, e, n) {
      "use strict";
      var r = n(231);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.ethErrors = void 0);
      var i = n(1045),
        o = n(1111),
        s = n(1046);
      function a(t, e) {
        var n = c(e),
          s = r(n, 2),
          a = s[0],
          u = s[1];
        return new i.EthereumRpcError(t, a || o.getMessageFromCode(t), u);
      }
      function u(t, e) {
        var n = c(e),
          s = r(n, 2),
          a = s[0],
          u = s[1];
        return new i.EthereumProviderError(t, a || o.getMessageFromCode(t), u);
      }
      function c(t) {
        if (t) {
          if ("string" === typeof t) return [t];
          if ("object" === typeof t && !Array.isArray(t)) {
            var e = t.message,
              n = t.data;
            if (e && "string" !== typeof e)
              throw new Error("Must specify string message.");
            return [e || void 0, n];
          }
        }
        return [];
      }
      e.ethErrors = {
        rpc: {
          parse: function (t) {
            return a(s.errorCodes.rpc.parse, t);
          },
          invalidRequest: function (t) {
            return a(s.errorCodes.rpc.invalidRequest, t);
          },
          invalidParams: function (t) {
            return a(s.errorCodes.rpc.invalidParams, t);
          },
          methodNotFound: function (t) {
            return a(s.errorCodes.rpc.methodNotFound, t);
          },
          internal: function (t) {
            return a(s.errorCodes.rpc.internal, t);
          },
          server: function (t) {
            if (!t || "object" !== typeof t || Array.isArray(t))
              throw new Error(
                "Ethereum RPC Server errors must provide single object argument."
              );
            var e = t.code;
            if (!Number.isInteger(e) || e > -32005 || e < -32099)
              throw new Error(
                '"code" must be an integer such that: -32099 <= code <= -32005'
              );
            return a(e, t);
          },
          invalidInput: function (t) {
            return a(s.errorCodes.rpc.invalidInput, t);
          },
          resourceNotFound: function (t) {
            return a(s.errorCodes.rpc.resourceNotFound, t);
          },
          resourceUnavailable: function (t) {
            return a(s.errorCodes.rpc.resourceUnavailable, t);
          },
          transactionRejected: function (t) {
            return a(s.errorCodes.rpc.transactionRejected, t);
          },
          methodNotSupported: function (t) {
            return a(s.errorCodes.rpc.methodNotSupported, t);
          },
          limitExceeded: function (t) {
            return a(s.errorCodes.rpc.limitExceeded, t);
          },
        },
        provider: {
          userRejectedRequest: function (t) {
            return u(s.errorCodes.provider.userRejectedRequest, t);
          },
          unauthorized: function (t) {
            return u(s.errorCodes.provider.unauthorized, t);
          },
          unsupportedMethod: function (t) {
            return u(s.errorCodes.provider.unsupportedMethod, t);
          },
          disconnected: function (t) {
            return u(s.errorCodes.provider.disconnected, t);
          },
          chainDisconnected: function (t) {
            return u(s.errorCodes.provider.chainDisconnected, t);
          },
          custom: function (t) {
            if (!t || "object" !== typeof t || Array.isArray(t))
              throw new Error(
                "Ethereum Provider custom errors must provide single object argument."
              );
            var e = t.code,
              n = t.message,
              r = t.data;
            if (!n || "string" !== typeof n)
              throw new Error('"message" must be a nonempty string');
            return new i.EthereumProviderError(e, n, r);
          },
        },
      };
    },
    1213: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.EthereumChain = void 0),
        (function (t) {
          (t[(t.ETHEREUM_MAINNET = 1)] = "ETHEREUM_MAINNET"),
            (t[(t.OPTIMISM_MAINNET = 10)] = "OPTIMISM_MAINNET"),
            (t[(t.POLYGON_MAINNET = 137)] = "POLYGON_MAINNET"),
            (t[(t.ETHEREUM_CLASSIC_MAINNET = 61)] = "ETHEREUM_CLASSIC_MAINNET"),
            (t[(t.BSC_MAINNET = 56)] = "BSC_MAINNET"),
            (t[(t.FANTOM_MAINNET = 250)] = "FANTOM_MAINNET"),
            (t[(t.ARBITRUM_MAINNET = 42161)] = "ARBITRUM_MAINNET"),
            (t[(t.XDAI_MAINNET = 100)] = "XDAI_MAINNET"),
            (t[(t.AVALANCHE_MAINNET = 43114)] = "AVALANCHE_MAINNET"),
            (t[(t.ROPSTEN = 3)] = "ROPSTEN"),
            (t[(t.RINKEBY = 4)] = "RINKEBY"),
            (t[(t.GOERLI = 5)] = "GOERLI"),
            (t[(t.KOVAN = 42)] = "KOVAN"),
            (t[(t.OPTIMISM_KOVAN = 69)] = "OPTIMISM_KOVAN"),
            (t[(t.POLYGON_TESTNET = 80001)] = "POLYGON_TESTNET"),
            (t[(t.BSC_TESTNET = 97)] = "BSC_TESTNET"),
            (t[(t.FANTOM_TESTNET = 4002)] = "FANTOM_TESTNET"),
            (t[(t.ARBITRUM_TESTNET = 421611)] = "ARBITRUM_TESTNET"),
            (t[(t.AVALANCHE_FUJI = 43113)] = "AVALANCHE_FUJI");
        })(e.EthereumChain || (e.EthereumChain = {})),
        (function (t) {
          (t.rpcUrl = function (e) {
            switch (e) {
              case t.ETHEREUM_MAINNET:
                return "https://mainnet-infura.wallet.coinbase.com";
              case t.ROPSTEN:
                return "https://ropsten-infura.wallet.coinbase.com";
              case t.RINKEBY:
                return "https://rinkeby-infura.wallet.coinbase.com";
              case t.KOVAN:
                return "https://kovan-infura.wallet.coinbase.com";
              case t.GOERLI:
                return "https://goerli-node.wallet.coinbase.com";
              case t.OPTIMISM_KOVAN:
                return "https://optimism-node.wallet.coinbase.com";
              case t.OPTIMISM_MAINNET:
                return "https://optimism-mainnet.wallet.coinbase.com";
              case t.POLYGON_MAINNET:
                return "https://polygon-mainnet-infura.wallet.coinbase.com";
              case t.POLYGON_TESTNET:
                return "https://polygon-mumbai-infura.wallet.coinbase.com";
              case t.BSC_MAINNET:
                return "https://bsc-dataseed.binance.org";
              case t.BSC_TESTNET:
                return "https://data-seed-prebsc-1-s1.binance.org:8545";
              case t.FANTOM_MAINNET:
                return "https://rpcapi.fantom.network";
              case t.FANTOM_TESTNET:
                return "https://rpc.testnet.fantom.network";
              case t.ARBITRUM_MAINNET:
                return "https://l2-mainnet.wallet.coinbase.com?targetName=arbitrum";
              case t.ARBITRUM_TESTNET:
                return "https://rinkeby.arbitrum.io/rpc";
              case t.XDAI_MAINNET:
                return "https://rpc.xdaichain.com";
              case t.AVALANCHE_MAINNET:
                return "https://api.avax.network/ext/bc/C/rpc";
              case t.AVALANCHE_FUJI:
                return "https://api.avax-test.network/ext/bc/C/rpc";
              default:
                return;
            }
          }),
            (t.fromChainId = function (e) {
              switch (Number(e)) {
                case t.ETHEREUM_MAINNET.valueOf():
                  return t.ETHEREUM_MAINNET;
                case t.OPTIMISM_MAINNET.valueOf():
                  return t.OPTIMISM_MAINNET;
                case t.POLYGON_MAINNET.valueOf():
                  return t.POLYGON_MAINNET;
                case t.ETHEREUM_CLASSIC_MAINNET.valueOf():
                  return t.ETHEREUM_CLASSIC_MAINNET;
                case t.BSC_MAINNET.valueOf():
                  return t.BSC_MAINNET;
                case t.FANTOM_MAINNET.valueOf():
                  return t.FANTOM_MAINNET;
                case t.ARBITRUM_MAINNET.valueOf():
                  return t.ARBITRUM_MAINNET;
                case t.AVALANCHE_MAINNET.valueOf():
                  return t.AVALANCHE_MAINNET;
                case t.XDAI_MAINNET.valueOf():
                  return t.XDAI_MAINNET;
                case t.ROPSTEN.valueOf():
                  return t.ROPSTEN;
                case t.RINKEBY.valueOf():
                  return t.RINKEBY;
                case t.GOERLI.valueOf():
                  return t.GOERLI;
                case t.KOVAN.valueOf():
                  return t.KOVAN;
                case t.OPTIMISM_KOVAN.valueOf():
                  return t.OPTIMISM_KOVAN;
                case t.POLYGON_TESTNET.valueOf():
                  return t.POLYGON_TESTNET;
                case t.BSC_TESTNET.valueOf():
                  return t.BSC_TESTNET;
                case t.FANTOM_TESTNET.valueOf():
                  return t.FANTOM_TESTNET;
                case t.ARBITRUM_TESTNET.valueOf():
                  return t.ARBITRUM_TESTNET;
                case t.AVALANCHE_FUJI.valueOf():
                  return t.AVALANCHE_FUJI;
                default:
                  return;
              }
            });
        })(e.EthereumChain || (e.EthereumChain = {}));
    },
    1214: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.EVENTS = void 0),
        (e.EVENTS = {
          REQUEST_CHILD_ETHEREUM_ACCOUNTS_START:
            "walletlink_sdk.request_child_ethereum_accounts.start",
          REQUEST_CHILD_ETHEREUM_ACCOUNTS_RESPONSE:
            "walletlink_sdk.request_child_ethereum_accounts.response",
          STARTED_CONNECTING: "walletlink_sdk.started.connecting",
          CONNECTED_STATE_CHANGE: "walletlink_sdk.connected",
          DISCONNECTED: "walletlink_sdk.disconnected",
          METADATA_DESTROYED: "walletlink_sdk_metadata_destroyed",
          LINKED: "walletlink_sdk.linked",
          FAILURE: "walletlink_sdk.generic_failure",
          SESSION_CONFIG_RECEIVED:
            "walletlink_sdk.session_config_event_received",
          ETH_ACCOUNTS_STATE: "walletlink_sdk.eth_accounts_state",
          SESSION_STATE_CHANGE: "walletlink_sdk.session_state_change",
          UNLINKED_ERROR_STATE: "walletlink_sdk.unlinked_error_state",
          SKIPPED_CLEARING_SESSION: "walletlink_sdk.skipped_clearing_session",
          GENERAL_ERROR: "walletlink_sdk.general_error",
          WEB3_REQUEST: "walletlink_sdk.web3.request",
          WEB3_RESPONSE: "walletlink_sdk.web3.response",
        });
    },
    1215: function (t, e, n) {
      "use strict";
      var r = n(92),
        i = n(91);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.WalletLinkAnalyticsAbstract = void 0);
      var o = r(function t() {
        i(this, t);
      });
      e.WalletLinkAnalyticsAbstract = o;
    },
    1216: function (module, exports, __webpack_require__) {
      (function (process, global) {
        var __WEBPACK_AMD_DEFINE_RESULT__;
        (function () {
          "use strict";
          var ERROR = "input is invalid type",
            WINDOW = "object" === typeof window,
            root = WINDOW ? window : {};
          root.JS_SHA256_NO_WINDOW && (WINDOW = !1);
          var WEB_WORKER = !WINDOW && "object" === typeof self,
            NODE_JS =
              !root.JS_SHA256_NO_NODE_JS &&
              "object" === typeof process &&
              process.versions &&
              process.versions.node;
          NODE_JS ? (root = global) : WEB_WORKER && (root = self);
          var COMMON_JS =
              !root.JS_SHA256_NO_COMMON_JS &&
              "object" === typeof module &&
              module.exports,
            AMD = __webpack_require__(100),
            ARRAY_BUFFER =
              !root.JS_SHA256_NO_ARRAY_BUFFER &&
              "undefined" !== typeof ArrayBuffer,
            HEX_CHARS = "0123456789abcdef".split(""),
            EXTRA = [-2147483648, 8388608, 32768, 128],
            SHIFT = [24, 16, 8, 0],
            K = [
              1116352408, 1899447441, 3049323471, 3921009573, 961987163,
              1508970993, 2453635748, 2870763221, 3624381080, 310598401,
              607225278, 1426881987, 1925078388, 2162078206, 2614888103,
              3248222580, 3835390401, 4022224774, 264347078, 604807628,
              770255983, 1249150122, 1555081692, 1996064986, 2554220882,
              2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
              113926993, 338241895, 666307205, 773529912, 1294757372,
              1396182291, 1695183700, 1986661051, 2177026350, 2456956037,
              2730485921, 2820302411, 3259730800, 3345764771, 3516065817,
              3600352804, 4094571909, 275423344, 430227734, 506948616,
              659060556, 883997877, 958139571, 1322822218, 1537002063,
              1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
              2428436474, 2756734187, 3204031479, 3329325298,
            ],
            OUTPUT_TYPES = ["hex", "array", "digest", "arrayBuffer"],
            blocks = [];
          (!root.JS_SHA256_NO_NODE_JS && Array.isArray) ||
            (Array.isArray = function (t) {
              return "[object Array]" === Object.prototype.toString.call(t);
            }),
            !ARRAY_BUFFER ||
              (!root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView) ||
              (ArrayBuffer.isView = function (t) {
                return (
                  "object" === typeof t &&
                  t.buffer &&
                  t.buffer.constructor === ArrayBuffer
                );
              });
          var createOutputMethod = function (t, e) {
              return function (n) {
                return new Sha256(e, !0).update(n)[t]();
              };
            },
            createMethod = function (t) {
              var e = createOutputMethod("hex", t);
              NODE_JS && (e = nodeWrap(e, t)),
                (e.create = function () {
                  return new Sha256(t);
                }),
                (e.update = function (t) {
                  return e.create().update(t);
                });
              for (var n = 0; n < OUTPUT_TYPES.length; ++n) {
                var r = OUTPUT_TYPES[n];
                e[r] = createOutputMethod(r, t);
              }
              return e;
            },
            nodeWrap = function nodeWrap(method, is224) {
              var crypto = eval("require('crypto')"),
                Buffer = eval("require('buffer').Buffer"),
                algorithm = is224 ? "sha224" : "sha256",
                nodeMethod = function (t) {
                  if ("string" === typeof t)
                    return crypto
                      .createHash(algorithm)
                      .update(t, "utf8")
                      .digest("hex");
                  if (null === t || void 0 === t) throw new Error(ERROR);
                  return (
                    t.constructor === ArrayBuffer && (t = new Uint8Array(t)),
                    Array.isArray(t) ||
                    ArrayBuffer.isView(t) ||
                    t.constructor === Buffer
                      ? crypto
                          .createHash(algorithm)
                          .update(new Buffer(t))
                          .digest("hex")
                      : method(t)
                  );
                };
              return nodeMethod;
            },
            createHmacOutputMethod = function (t, e) {
              return function (n, r) {
                return new HmacSha256(n, e, !0).update(r)[t]();
              };
            },
            createHmacMethod = function (t) {
              var e = createHmacOutputMethod("hex", t);
              (e.create = function (e) {
                return new HmacSha256(e, t);
              }),
                (e.update = function (t, n) {
                  return e.create(t).update(n);
                });
              for (var n = 0; n < OUTPUT_TYPES.length; ++n) {
                var r = OUTPUT_TYPES[n];
                e[r] = createHmacOutputMethod(r, t);
              }
              return e;
            };
          function Sha256(t, e) {
            e
              ? ((blocks[0] =
                  blocks[16] =
                  blocks[1] =
                  blocks[2] =
                  blocks[3] =
                  blocks[4] =
                  blocks[5] =
                  blocks[6] =
                  blocks[7] =
                  blocks[8] =
                  blocks[9] =
                  blocks[10] =
                  blocks[11] =
                  blocks[12] =
                  blocks[13] =
                  blocks[14] =
                  blocks[15] =
                    0),
                (this.blocks = blocks))
              : (this.blocks = [
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                ]),
              t
                ? ((this.h0 = 3238371032),
                  (this.h1 = 914150663),
                  (this.h2 = 812702999),
                  (this.h3 = 4144912697),
                  (this.h4 = 4290775857),
                  (this.h5 = 1750603025),
                  (this.h6 = 1694076839),
                  (this.h7 = 3204075428))
                : ((this.h0 = 1779033703),
                  (this.h1 = 3144134277),
                  (this.h2 = 1013904242),
                  (this.h3 = 2773480762),
                  (this.h4 = 1359893119),
                  (this.h5 = 2600822924),
                  (this.h6 = 528734635),
                  (this.h7 = 1541459225)),
              (this.block = this.start = this.bytes = this.hBytes = 0),
              (this.finalized = this.hashed = !1),
              (this.first = !0),
              (this.is224 = t);
          }
          function HmacSha256(t, e, n) {
            var r,
              i = typeof t;
            if ("string" === i) {
              var o,
                s = [],
                a = t.length,
                u = 0;
              for (r = 0; r < a; ++r)
                (o = t.charCodeAt(r)) < 128
                  ? (s[u++] = o)
                  : o < 2048
                  ? ((s[u++] = 192 | (o >> 6)), (s[u++] = 128 | (63 & o)))
                  : o < 55296 || o >= 57344
                  ? ((s[u++] = 224 | (o >> 12)),
                    (s[u++] = 128 | ((o >> 6) & 63)),
                    (s[u++] = 128 | (63 & o)))
                  : ((o =
                      65536 +
                      (((1023 & o) << 10) | (1023 & t.charCodeAt(++r)))),
                    (s[u++] = 240 | (o >> 18)),
                    (s[u++] = 128 | ((o >> 12) & 63)),
                    (s[u++] = 128 | ((o >> 6) & 63)),
                    (s[u++] = 128 | (63 & o)));
              t = s;
            } else {
              if ("object" !== i) throw new Error(ERROR);
              if (null === t) throw new Error(ERROR);
              if (ARRAY_BUFFER && t.constructor === ArrayBuffer)
                t = new Uint8Array(t);
              else if (
                !Array.isArray(t) &&
                (!ARRAY_BUFFER || !ArrayBuffer.isView(t))
              )
                throw new Error(ERROR);
            }
            t.length > 64 && (t = new Sha256(e, !0).update(t).array());
            var c = [],
              l = [];
            for (r = 0; r < 64; ++r) {
              var h = t[r] || 0;
              (c[r] = 92 ^ h), (l[r] = 54 ^ h);
            }
            Sha256.call(this, e, n),
              this.update(l),
              (this.oKeyPad = c),
              (this.inner = !0),
              (this.sharedMemory = n);
          }
          (Sha256.prototype.update = function (t) {
            if (!this.finalized) {
              var e,
                n = typeof t;
              if ("string" !== n) {
                if ("object" !== n) throw new Error(ERROR);
                if (null === t) throw new Error(ERROR);
                if (ARRAY_BUFFER && t.constructor === ArrayBuffer)
                  t = new Uint8Array(t);
                else if (
                  !Array.isArray(t) &&
                  (!ARRAY_BUFFER || !ArrayBuffer.isView(t))
                )
                  throw new Error(ERROR);
                e = !0;
              }
              for (var r, i, o = 0, s = t.length, a = this.blocks; o < s; ) {
                if (
                  (this.hashed &&
                    ((this.hashed = !1),
                    (a[0] = this.block),
                    (a[16] =
                      a[1] =
                      a[2] =
                      a[3] =
                      a[4] =
                      a[5] =
                      a[6] =
                      a[7] =
                      a[8] =
                      a[9] =
                      a[10] =
                      a[11] =
                      a[12] =
                      a[13] =
                      a[14] =
                      a[15] =
                        0)),
                  e)
                )
                  for (i = this.start; o < s && i < 64; ++o)
                    a[i >> 2] |= t[o] << SHIFT[3 & i++];
                else
                  for (i = this.start; o < s && i < 64; ++o)
                    (r = t.charCodeAt(o)) < 128
                      ? (a[i >> 2] |= r << SHIFT[3 & i++])
                      : r < 2048
                      ? ((a[i >> 2] |= (192 | (r >> 6)) << SHIFT[3 & i++]),
                        (a[i >> 2] |= (128 | (63 & r)) << SHIFT[3 & i++]))
                      : r < 55296 || r >= 57344
                      ? ((a[i >> 2] |= (224 | (r >> 12)) << SHIFT[3 & i++]),
                        (a[i >> 2] |=
                          (128 | ((r >> 6) & 63)) << SHIFT[3 & i++]),
                        (a[i >> 2] |= (128 | (63 & r)) << SHIFT[3 & i++]))
                      : ((r =
                          65536 +
                          (((1023 & r) << 10) | (1023 & t.charCodeAt(++o)))),
                        (a[i >> 2] |= (240 | (r >> 18)) << SHIFT[3 & i++]),
                        (a[i >> 2] |=
                          (128 | ((r >> 12) & 63)) << SHIFT[3 & i++]),
                        (a[i >> 2] |=
                          (128 | ((r >> 6) & 63)) << SHIFT[3 & i++]),
                        (a[i >> 2] |= (128 | (63 & r)) << SHIFT[3 & i++]));
                (this.lastByteIndex = i),
                  (this.bytes += i - this.start),
                  i >= 64
                    ? ((this.block = a[16]),
                      (this.start = i - 64),
                      this.hash(),
                      (this.hashed = !0))
                    : (this.start = i);
              }
              return (
                this.bytes > 4294967295 &&
                  ((this.hBytes += (this.bytes / 4294967296) << 0),
                  (this.bytes = this.bytes % 4294967296)),
                this
              );
            }
          }),
            (Sha256.prototype.finalize = function () {
              if (!this.finalized) {
                this.finalized = !0;
                var t = this.blocks,
                  e = this.lastByteIndex;
                (t[16] = this.block),
                  (t[e >> 2] |= EXTRA[3 & e]),
                  (this.block = t[16]),
                  e >= 56 &&
                    (this.hashed || this.hash(),
                    (t[0] = this.block),
                    (t[16] =
                      t[1] =
                      t[2] =
                      t[3] =
                      t[4] =
                      t[5] =
                      t[6] =
                      t[7] =
                      t[8] =
                      t[9] =
                      t[10] =
                      t[11] =
                      t[12] =
                      t[13] =
                      t[14] =
                      t[15] =
                        0)),
                  (t[14] = (this.hBytes << 3) | (this.bytes >>> 29)),
                  (t[15] = this.bytes << 3),
                  this.hash();
              }
            }),
            (Sha256.prototype.hash = function () {
              var t,
                e,
                n,
                r,
                i,
                o,
                s,
                a,
                u,
                c = this.h0,
                l = this.h1,
                h = this.h2,
                f = this.h3,
                d = this.h4,
                p = this.h5,
                v = this.h6,
                b = this.h7,
                y = this.blocks;
              for (t = 16; t < 64; ++t)
                (e =
                  (((i = y[t - 15]) >>> 7) | (i << 25)) ^
                  ((i >>> 18) | (i << 14)) ^
                  (i >>> 3)),
                  (n =
                    (((i = y[t - 2]) >>> 17) | (i << 15)) ^
                    ((i >>> 19) | (i << 13)) ^
                    (i >>> 10)),
                  (y[t] = (y[t - 16] + e + y[t - 7] + n) << 0);
              for (u = l & h, t = 0; t < 64; t += 4)
                this.first
                  ? (this.is224
                      ? ((o = 300032),
                        (b = ((i = y[0] - 1413257819) - 150054599) << 0),
                        (f = (i + 24177077) << 0))
                      : ((o = 704751109),
                        (b = ((i = y[0] - 210244248) - 1521486534) << 0),
                        (f = (i + 143694565) << 0)),
                    (this.first = !1))
                  : ((e =
                      ((c >>> 2) | (c << 30)) ^
                      ((c >>> 13) | (c << 19)) ^
                      ((c >>> 22) | (c << 10))),
                    (r = (o = c & l) ^ (c & h) ^ u),
                    (b =
                      (f +
                        (i =
                          b +
                          (n =
                            ((d >>> 6) | (d << 26)) ^
                            ((d >>> 11) | (d << 21)) ^
                            ((d >>> 25) | (d << 7))) +
                          ((d & p) ^ (~d & v)) +
                          K[t] +
                          y[t])) <<
                      0),
                    (f = (i + (e + r)) << 0)),
                  (e =
                    ((f >>> 2) | (f << 30)) ^
                    ((f >>> 13) | (f << 19)) ^
                    ((f >>> 22) | (f << 10))),
                  (r = (s = f & c) ^ (f & l) ^ o),
                  (v =
                    (h +
                      (i =
                        v +
                        (n =
                          ((b >>> 6) | (b << 26)) ^
                          ((b >>> 11) | (b << 21)) ^
                          ((b >>> 25) | (b << 7))) +
                        ((b & d) ^ (~b & p)) +
                        K[t + 1] +
                        y[t + 1])) <<
                    0),
                  (e =
                    (((h = (i + (e + r)) << 0) >>> 2) | (h << 30)) ^
                    ((h >>> 13) | (h << 19)) ^
                    ((h >>> 22) | (h << 10))),
                  (r = (a = h & f) ^ (h & c) ^ s),
                  (p =
                    (l +
                      (i =
                        p +
                        (n =
                          ((v >>> 6) | (v << 26)) ^
                          ((v >>> 11) | (v << 21)) ^
                          ((v >>> 25) | (v << 7))) +
                        ((v & b) ^ (~v & d)) +
                        K[t + 2] +
                        y[t + 2])) <<
                    0),
                  (e =
                    (((l = (i + (e + r)) << 0) >>> 2) | (l << 30)) ^
                    ((l >>> 13) | (l << 19)) ^
                    ((l >>> 22) | (l << 10))),
                  (r = (u = l & h) ^ (l & f) ^ a),
                  (d =
                    (c +
                      (i =
                        d +
                        (n =
                          ((p >>> 6) | (p << 26)) ^
                          ((p >>> 11) | (p << 21)) ^
                          ((p >>> 25) | (p << 7))) +
                        ((p & v) ^ (~p & b)) +
                        K[t + 3] +
                        y[t + 3])) <<
                    0),
                  (c = (i + (e + r)) << 0);
              (this.h0 = (this.h0 + c) << 0),
                (this.h1 = (this.h1 + l) << 0),
                (this.h2 = (this.h2 + h) << 0),
                (this.h3 = (this.h3 + f) << 0),
                (this.h4 = (this.h4 + d) << 0),
                (this.h5 = (this.h5 + p) << 0),
                (this.h6 = (this.h6 + v) << 0),
                (this.h7 = (this.h7 + b) << 0);
            }),
            (Sha256.prototype.hex = function () {
              this.finalize();
              var t = this.h0,
                e = this.h1,
                n = this.h2,
                r = this.h3,
                i = this.h4,
                o = this.h5,
                s = this.h6,
                a = this.h7,
                u =
                  HEX_CHARS[(t >> 28) & 15] +
                  HEX_CHARS[(t >> 24) & 15] +
                  HEX_CHARS[(t >> 20) & 15] +
                  HEX_CHARS[(t >> 16) & 15] +
                  HEX_CHARS[(t >> 12) & 15] +
                  HEX_CHARS[(t >> 8) & 15] +
                  HEX_CHARS[(t >> 4) & 15] +
                  HEX_CHARS[15 & t] +
                  HEX_CHARS[(e >> 28) & 15] +
                  HEX_CHARS[(e >> 24) & 15] +
                  HEX_CHARS[(e >> 20) & 15] +
                  HEX_CHARS[(e >> 16) & 15] +
                  HEX_CHARS[(e >> 12) & 15] +
                  HEX_CHARS[(e >> 8) & 15] +
                  HEX_CHARS[(e >> 4) & 15] +
                  HEX_CHARS[15 & e] +
                  HEX_CHARS[(n >> 28) & 15] +
                  HEX_CHARS[(n >> 24) & 15] +
                  HEX_CHARS[(n >> 20) & 15] +
                  HEX_CHARS[(n >> 16) & 15] +
                  HEX_CHARS[(n >> 12) & 15] +
                  HEX_CHARS[(n >> 8) & 15] +
                  HEX_CHARS[(n >> 4) & 15] +
                  HEX_CHARS[15 & n] +
                  HEX_CHARS[(r >> 28) & 15] +
                  HEX_CHARS[(r >> 24) & 15] +
                  HEX_CHARS[(r >> 20) & 15] +
                  HEX_CHARS[(r >> 16) & 15] +
                  HEX_CHARS[(r >> 12) & 15] +
                  HEX_CHARS[(r >> 8) & 15] +
                  HEX_CHARS[(r >> 4) & 15] +
                  HEX_CHARS[15 & r] +
                  HEX_CHARS[(i >> 28) & 15] +
                  HEX_CHARS[(i >> 24) & 15] +
                  HEX_CHARS[(i >> 20) & 15] +
                  HEX_CHARS[(i >> 16) & 15] +
                  HEX_CHARS[(i >> 12) & 15] +
                  HEX_CHARS[(i >> 8) & 15] +
                  HEX_CHARS[(i >> 4) & 15] +
                  HEX_CHARS[15 & i] +
                  HEX_CHARS[(o >> 28) & 15] +
                  HEX_CHARS[(o >> 24) & 15] +
                  HEX_CHARS[(o >> 20) & 15] +
                  HEX_CHARS[(o >> 16) & 15] +
                  HEX_CHARS[(o >> 12) & 15] +
                  HEX_CHARS[(o >> 8) & 15] +
                  HEX_CHARS[(o >> 4) & 15] +
                  HEX_CHARS[15 & o] +
                  HEX_CHARS[(s >> 28) & 15] +
                  HEX_CHARS[(s >> 24) & 15] +
                  HEX_CHARS[(s >> 20) & 15] +
                  HEX_CHARS[(s >> 16) & 15] +
                  HEX_CHARS[(s >> 12) & 15] +
                  HEX_CHARS[(s >> 8) & 15] +
                  HEX_CHARS[(s >> 4) & 15] +
                  HEX_CHARS[15 & s];
              return (
                this.is224 ||
                  (u +=
                    HEX_CHARS[(a >> 28) & 15] +
                    HEX_CHARS[(a >> 24) & 15] +
                    HEX_CHARS[(a >> 20) & 15] +
                    HEX_CHARS[(a >> 16) & 15] +
                    HEX_CHARS[(a >> 12) & 15] +
                    HEX_CHARS[(a >> 8) & 15] +
                    HEX_CHARS[(a >> 4) & 15] +
                    HEX_CHARS[15 & a]),
                u
              );
            }),
            (Sha256.prototype.toString = Sha256.prototype.hex),
            (Sha256.prototype.digest = function () {
              this.finalize();
              var t = this.h0,
                e = this.h1,
                n = this.h2,
                r = this.h3,
                i = this.h4,
                o = this.h5,
                s = this.h6,
                a = this.h7,
                u = [
                  (t >> 24) & 255,
                  (t >> 16) & 255,
                  (t >> 8) & 255,
                  255 & t,
                  (e >> 24) & 255,
                  (e >> 16) & 255,
                  (e >> 8) & 255,
                  255 & e,
                  (n >> 24) & 255,
                  (n >> 16) & 255,
                  (n >> 8) & 255,
                  255 & n,
                  (r >> 24) & 255,
                  (r >> 16) & 255,
                  (r >> 8) & 255,
                  255 & r,
                  (i >> 24) & 255,
                  (i >> 16) & 255,
                  (i >> 8) & 255,
                  255 & i,
                  (o >> 24) & 255,
                  (o >> 16) & 255,
                  (o >> 8) & 255,
                  255 & o,
                  (s >> 24) & 255,
                  (s >> 16) & 255,
                  (s >> 8) & 255,
                  255 & s,
                ];
              return (
                this.is224 ||
                  u.push(
                    (a >> 24) & 255,
                    (a >> 16) & 255,
                    (a >> 8) & 255,
                    255 & a
                  ),
                u
              );
            }),
            (Sha256.prototype.array = Sha256.prototype.digest),
            (Sha256.prototype.arrayBuffer = function () {
              this.finalize();
              var t = new ArrayBuffer(this.is224 ? 28 : 32),
                e = new DataView(t);
              return (
                e.setUint32(0, this.h0),
                e.setUint32(4, this.h1),
                e.setUint32(8, this.h2),
                e.setUint32(12, this.h3),
                e.setUint32(16, this.h4),
                e.setUint32(20, this.h5),
                e.setUint32(24, this.h6),
                this.is224 || e.setUint32(28, this.h7),
                t
              );
            }),
            (HmacSha256.prototype = new Sha256()),
            (HmacSha256.prototype.finalize = function () {
              if ((Sha256.prototype.finalize.call(this), this.inner)) {
                this.inner = !1;
                var t = this.array();
                Sha256.call(this, this.is224, this.sharedMemory),
                  this.update(this.oKeyPad),
                  this.update(t),
                  Sha256.prototype.finalize.call(this);
              }
            });
          var exports = createMethod();
          (exports.sha256 = exports),
            (exports.sha224 = createMethod(!0)),
            (exports.sha256.hmac = createHmacMethod()),
            (exports.sha224.hmac = createHmacMethod(!0)),
            COMMON_JS
              ? (module.exports = exports)
              : ((root.sha256 = exports.sha256),
                (root.sha224 = exports.sha224),
                AMD &&
                  ((__WEBPACK_AMD_DEFINE_RESULT__ = function () {
                    return exports;
                  }.call(exports, __webpack_require__, exports, module)),
                  void 0 === __WEBPACK_AMD_DEFINE_RESULT__ ||
                    (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)));
        })();
      }.call(this, __webpack_require__(72), __webpack_require__(52)));
    },
    1217: function (t, e, n) {
      (function (e) {
        var r = n(232),
          i = n(231),
          o = n(1119),
          s = n(1233),
          a = {
            type: "object",
            properties: {
              types: {
                type: "object",
                additionalProperties: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      name: { type: "string" },
                      type: { type: "string" },
                    },
                    required: ["name", "type"],
                  },
                },
              },
              primaryType: { type: "string" },
              domain: { type: "object" },
              message: { type: "object" },
            },
            required: ["types", "primaryType", "domain", "message"],
          },
          u = {
            encodeData: function (t, n, a) {
              var u = this,
                c =
                  !(arguments.length > 3 && void 0 !== arguments[3]) ||
                  arguments[3],
                l = ["bytes32"],
                h = [this.hashType(t, a)];
              if (c) {
                var f,
                  d = function t(n, r, l) {
                    if (void 0 !== a[r])
                      return [
                        "bytes32",
                        null == l
                          ? "0x0000000000000000000000000000000000000000000000000000000000000000"
                          : o.keccak(u.encodeData(r, l, a, c)),
                      ];
                    if (void 0 === l)
                      throw new Error(
                        "missing value for field "
                          .concat(n, " of type ")
                          .concat(r)
                      );
                    if ("bytes" === r) return ["bytes32", o.keccak(l)];
                    if ("string" === r)
                      return (
                        "string" === typeof l && (l = e.from(l, "utf8")),
                        ["bytes32", o.keccak(l)]
                      );
                    if (r.lastIndexOf("]") === r.length - 1) {
                      var h = r.slice(0, r.lastIndexOf("[")),
                        f = l.map(function (e) {
                          return t(n, h, e);
                        });
                      return [
                        "bytes32",
                        o.keccak(
                          s.rawEncode(
                            f.map(function (t) {
                              return i(t, 1)[0];
                            }),
                            f.map(function (t) {
                              return i(t, 2)[1];
                            })
                          )
                        ),
                      ];
                    }
                    return [r, l];
                  },
                  p = r(a[t]);
                try {
                  for (p.s(); !(f = p.n()).done; ) {
                    var v = f.value,
                      b = d(v.name, v.type, n[v.name]),
                      y = i(b, 2),
                      g = y[0],
                      m = y[1];
                    l.push(g), h.push(m);
                  }
                } catch (E) {
                  p.e(E);
                } finally {
                  p.f();
                }
              } else {
                var w,
                  _ = r(a[t]);
                try {
                  for (_.s(); !(w = _.n()).done; ) {
                    var k = w.value,
                      x = n[k.name];
                    if (void 0 !== x)
                      if ("bytes" === k.type)
                        l.push("bytes32"), (x = o.keccak(x)), h.push(x);
                      else if ("string" === k.type)
                        l.push("bytes32"),
                          "string" === typeof x && (x = e.from(x, "utf8")),
                          (x = o.keccak(x)),
                          h.push(x);
                      else if (void 0 !== a[k.type])
                        l.push("bytes32"),
                          (x = o.keccak(this.encodeData(k.type, x, a, c))),
                          h.push(x);
                      else {
                        if (k.type.lastIndexOf("]") === k.type.length - 1)
                          throw new Error(
                            "Arrays currently unimplemented in encodeData"
                          );
                        l.push(k.type), h.push(x);
                      }
                  }
                } catch (E) {
                  _.e(E);
                } finally {
                  _.f();
                }
              }
              return s.rawEncode(l, h);
            },
            encodeType: function (t, e) {
              var n = "",
                i = this.findTypeDependencies(t, e).filter(function (e) {
                  return e !== t;
                });
              i = [t].concat(i.sort());
              var o,
                s = r(i);
              try {
                for (s.s(); !(o = s.n()).done; ) {
                  var a = o.value;
                  if (!e[a])
                    throw new Error("No type definition specified: " + a);
                  n +=
                    a +
                    "(" +
                    e[a]
                      .map(function (t) {
                        var e = t.name;
                        return t.type + " " + e;
                      })
                      .join(",") +
                    ")";
                }
              } catch (u) {
                s.e(u);
              } finally {
                s.f();
              }
              return n;
            },
            findTypeDependencies: function (t, e) {
              var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [];
              if (((t = t.match(/^\w*/)[0]), n.includes(t) || void 0 === e[t]))
                return n;
              n.push(t);
              var i,
                o = r(e[t]);
              try {
                for (o.s(); !(i = o.n()).done; ) {
                  var s,
                    a = i.value,
                    u = r(this.findTypeDependencies(a.type, e, n));
                  try {
                    for (u.s(); !(s = u.n()).done; ) {
                      var c = s.value;
                      !n.includes(c) && n.push(c);
                    }
                  } catch (l) {
                    u.e(l);
                  } finally {
                    u.f();
                  }
                }
              } catch (l) {
                o.e(l);
              } finally {
                o.f();
              }
              return n;
            },
            hashStruct: function (t, e, n) {
              var r =
                !(arguments.length > 3 && void 0 !== arguments[3]) ||
                arguments[3];
              return o.keccak(this.encodeData(t, e, n, r));
            },
            hashType: function (t, e) {
              return o.keccak(this.encodeType(t, e));
            },
            sanitizeData: function (t) {
              var e = {};
              for (var n in a.properties) t[n] && (e[n] = t[n]);
              return (
                e.types &&
                  (e.types = Object.assign({ EIP712Domain: [] }, e.types)),
                e
              );
            },
            hash: function (t) {
              var n =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1],
                r = this.sanitizeData(t),
                i = [e.from("1901", "hex")];
              return (
                i.push(this.hashStruct("EIP712Domain", r.domain, r.types, n)),
                "EIP712Domain" !== r.primaryType &&
                  i.push(this.hashStruct(r.primaryType, r.message, r.types, n)),
                o.keccak(e.concat(i))
              );
            },
          };
        t.exports = {
          TYPED_MESSAGE_SCHEMA: a,
          TypedDataUtils: u,
          hashForSignTypedDataLegacy: function (t) {
            return (function (t) {
              var e = new Error("Expect argument to be non-empty array");
              if ("object" !== typeof t || !t.length) throw e;
              var n = t.map(function (t) {
                  return "bytes" === t.type ? o.toBuffer(t.value) : t.value;
                }),
                r = t.map(function (t) {
                  return t.type;
                }),
                i = t.map(function (t) {
                  if (!t.name) throw e;
                  return t.type + " " + t.name;
                });
              return s.soliditySHA3(
                ["bytes32", "bytes32"],
                [
                  s.soliditySHA3(new Array(t.length).fill("string"), i),
                  s.soliditySHA3(r, n),
                ]
              );
            })(t.data);
          },
          hashForSignTypedData_v3: function (t) {
            return u.hash(t.data, !1);
          },
          hashForSignTypedData_v4: function (t) {
            return u.hash(t.data);
          },
        };
      }.call(this, n(230).Buffer));
    },
    1218: function (t, e, n) {
      t.exports = n(1219)(n(1231));
    },
    1219: function (t, e, n) {
      var r = n(1220),
        i = n(1230);
      t.exports = function (t) {
        var e = r(t),
          n = i(t);
        return function (t, r) {
          switch ("string" === typeof t ? t.toLowerCase() : t) {
            case "keccak224":
              return new e(1152, 448, null, 224, r);
            case "keccak256":
              return new e(1088, 512, null, 256, r);
            case "keccak384":
              return new e(832, 768, null, 384, r);
            case "keccak512":
              return new e(576, 1024, null, 512, r);
            case "sha3-224":
              return new e(1152, 448, 6, 224, r);
            case "sha3-256":
              return new e(1088, 512, 6, 256, r);
            case "sha3-384":
              return new e(832, 768, 6, 384, r);
            case "sha3-512":
              return new e(576, 1024, 6, 512, r);
            case "shake128":
              return new n(1344, 256, 31, r);
            case "shake256":
              return new n(1088, 512, 31, r);
            default:
              throw new Error("Invald algorithm: " + t);
          }
        };
      };
    },
    1220: function (t, e, n) {
      (function (e) {
        var r = n(91),
          i = n(92),
          o = n(273),
          s = n(274),
          a = n(1120).Transform;
        t.exports = function (t) {
          return (function (n) {
            "use strict";
            o(u, n);
            var a = s(u);
            function u(e, n, i, o, s) {
              var c;
              return (
                r(this, u),
                ((c = a.call(this, s))._rate = e),
                (c._capacity = n),
                (c._delimitedSuffix = i),
                (c._hashBitLength = o),
                (c._options = s),
                (c._state = new t()),
                c._state.initialize(e, n),
                (c._finalized = !1),
                c
              );
            }
            return (
              i(u, [
                {
                  key: "_transform",
                  value: function (t, e, n) {
                    var r = null;
                    try {
                      this.update(t, e);
                    } catch (i) {
                      r = i;
                    }
                    n(r);
                  },
                },
                {
                  key: "_flush",
                  value: function (t) {
                    var e = null;
                    try {
                      this.push(this.digest());
                    } catch (n) {
                      e = n;
                    }
                    t(e);
                  },
                },
                {
                  key: "update",
                  value: function (t, n) {
                    if (!e.isBuffer(t) && "string" !== typeof t)
                      throw new TypeError("Data must be a string or a buffer");
                    if (this._finalized)
                      throw new Error("Digest already called");
                    return (
                      e.isBuffer(t) || (t = e.from(t, n)),
                      this._state.absorb(t),
                      this
                    );
                  },
                },
                {
                  key: "digest",
                  value: function (t) {
                    if (this._finalized)
                      throw new Error("Digest already called");
                    (this._finalized = !0),
                      this._delimitedSuffix &&
                        this._state.absorbLastFewBits(this._delimitedSuffix);
                    var e = this._state.squeeze(this._hashBitLength / 8);
                    return (
                      void 0 !== t && (e = e.toString(t)), this._resetState(), e
                    );
                  },
                },
                {
                  key: "_resetState",
                  value: function () {
                    return (
                      this._state.initialize(this._rate, this._capacity), this
                    );
                  },
                },
                {
                  key: "_clone",
                  value: function () {
                    var t = new u(
                      this._rate,
                      this._capacity,
                      this._delimitedSuffix,
                      this._hashBitLength,
                      this._options
                    );
                    return (
                      this._state.copy(t._state),
                      (t._finalized = this._finalized),
                      t
                    );
                  },
                },
              ]),
              u
            );
          })(a);
        };
      }.call(this, n(230).Buffer));
    },
    1222: function (t, e, n) {
      "use strict";
      function r(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function i(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function o(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      var s = n(230).Buffer,
        a = n(1223).inspect,
        u = (a && a.custom) || "inspect";
      t.exports = (function () {
        function t() {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.head = null),
            (this.tail = null),
            (this.length = 0);
        }
        var e, n, c;
        return (
          (e = t),
          (n = [
            {
              key: "push",
              value: function (t) {
                var e = { data: t, next: null };
                this.length > 0 ? (this.tail.next = e) : (this.head = e),
                  (this.tail = e),
                  ++this.length;
              },
            },
            {
              key: "unshift",
              value: function (t) {
                var e = { data: t, next: this.head };
                0 === this.length && (this.tail = e),
                  (this.head = e),
                  ++this.length;
              },
            },
            {
              key: "shift",
              value: function () {
                if (0 !== this.length) {
                  var t = this.head.data;
                  return (
                    1 === this.length
                      ? (this.head = this.tail = null)
                      : (this.head = this.head.next),
                    --this.length,
                    t
                  );
                }
              },
            },
            {
              key: "clear",
              value: function () {
                (this.head = this.tail = null), (this.length = 0);
              },
            },
            {
              key: "join",
              value: function (t) {
                if (0 === this.length) return "";
                for (var e = this.head, n = "" + e.data; (e = e.next); )
                  n += t + e.data;
                return n;
              },
            },
            {
              key: "concat",
              value: function (t) {
                if (0 === this.length) return s.alloc(0);
                for (
                  var e, n, r, i = s.allocUnsafe(t >>> 0), o = this.head, a = 0;
                  o;

                )
                  (e = o.data),
                    (n = i),
                    (r = a),
                    s.prototype.copy.call(e, n, r),
                    (a += o.data.length),
                    (o = o.next);
                return i;
              },
            },
            {
              key: "consume",
              value: function (t, e) {
                var n;
                return (
                  t < this.head.data.length
                    ? ((n = this.head.data.slice(0, t)),
                      (this.head.data = this.head.data.slice(t)))
                    : (n =
                        t === this.head.data.length
                          ? this.shift()
                          : e
                          ? this._getString(t)
                          : this._getBuffer(t)),
                  n
                );
              },
            },
            {
              key: "first",
              value: function () {
                return this.head.data;
              },
            },
            {
              key: "_getString",
              value: function (t) {
                var e = this.head,
                  n = 1,
                  r = e.data;
                for (t -= r.length; (e = e.next); ) {
                  var i = e.data,
                    o = t > i.length ? i.length : t;
                  if (
                    (o === i.length ? (r += i) : (r += i.slice(0, t)),
                    0 === (t -= o))
                  ) {
                    o === i.length
                      ? (++n,
                        e.next
                          ? (this.head = e.next)
                          : (this.head = this.tail = null))
                      : ((this.head = e), (e.data = i.slice(o)));
                    break;
                  }
                  ++n;
                }
                return (this.length -= n), r;
              },
            },
            {
              key: "_getBuffer",
              value: function (t) {
                var e = s.allocUnsafe(t),
                  n = this.head,
                  r = 1;
                for (n.data.copy(e), t -= n.data.length; (n = n.next); ) {
                  var i = n.data,
                    o = t > i.length ? i.length : t;
                  if ((i.copy(e, e.length - t, 0, o), 0 === (t -= o))) {
                    o === i.length
                      ? (++r,
                        n.next
                          ? (this.head = n.next)
                          : (this.head = this.tail = null))
                      : ((this.head = n), (n.data = i.slice(o)));
                    break;
                  }
                  ++r;
                }
                return (this.length -= r), e;
              },
            },
            {
              key: u,
              value: function (t, e) {
                return a(
                  this,
                  (function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                      var n = null != arguments[e] ? arguments[e] : {};
                      e % 2
                        ? r(Object(n), !0).forEach(function (e) {
                            i(t, e, n[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            t,
                            Object.getOwnPropertyDescriptors(n)
                          )
                        : r(Object(n)).forEach(function (e) {
                            Object.defineProperty(
                              t,
                              e,
                              Object.getOwnPropertyDescriptor(n, e)
                            );
                          });
                    }
                    return t;
                  })({}, e, { depth: 0, customInspect: !1 })
                );
              },
            },
          ]),
          n && o(e.prototype, n),
          c && o(e, c),
          t
        );
      })();
    },
    1224: function (t, e, n) {
      (function (e) {
        function n(t) {
          try {
            if (!e.localStorage) return !1;
          } catch (r) {
            return !1;
          }
          var n = e.localStorage[t];
          return null != n && "true" === String(n).toLowerCase();
        }
        t.exports = function (t, e) {
          if (n("noDeprecation")) return t;
          var r = !1;
          return function () {
            if (!r) {
              if (n("throwDeprecation")) throw new Error(e);
              n("traceDeprecation") ? console.trace(e) : console.warn(e),
                (r = !0);
            }
            return t.apply(this, arguments);
          };
        };
      }.call(this, n(52)));
    },
    1225: function (t, e, n) {
      var r = n(230),
        i = r.Buffer;
      function o(t, e) {
        for (var n in t) e[n] = t[n];
      }
      function s(t, e, n) {
        return i(t, e, n);
      }
      i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow
        ? (t.exports = r)
        : (o(r, e), (e.Buffer = s)),
        (s.prototype = Object.create(i.prototype)),
        o(i, s),
        (s.from = function (t, e, n) {
          if ("number" === typeof t)
            throw new TypeError("Argument must not be a number");
          return i(t, e, n);
        }),
        (s.alloc = function (t, e, n) {
          if ("number" !== typeof t)
            throw new TypeError("Argument must be a number");
          var r = i(t);
          return (
            void 0 !== e
              ? "string" === typeof n
                ? r.fill(e, n)
                : r.fill(e)
              : r.fill(0),
            r
          );
        }),
        (s.allocUnsafe = function (t) {
          if ("number" !== typeof t)
            throw new TypeError("Argument must be a number");
          return i(t);
        }),
        (s.allocUnsafeSlow = function (t) {
          if ("number" !== typeof t)
            throw new TypeError("Argument must be a number");
          return r.SlowBuffer(t);
        });
    },
    1226: function (t, e, n) {
      "use strict";
      (function (e) {
        var r;
        function i(t, e, n) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        var o = n(1066),
          s = Symbol("lastResolve"),
          a = Symbol("lastReject"),
          u = Symbol("error"),
          c = Symbol("ended"),
          l = Symbol("lastPromise"),
          h = Symbol("handlePromise"),
          f = Symbol("stream");
        function d(t, e) {
          return { value: t, done: e };
        }
        function p(t) {
          var e = t[s];
          if (null !== e) {
            var n = t[f].read();
            null !== n &&
              ((t[l] = null), (t[s] = null), (t[a] = null), e(d(n, !1)));
          }
        }
        function v(t) {
          e.nextTick(p, t);
        }
        var b = Object.getPrototypeOf(function () {}),
          y = Object.setPrototypeOf(
            (i(
              (r = {
                get stream() {
                  return this[f];
                },
                next: function () {
                  var t = this,
                    n = this[u];
                  if (null !== n) return Promise.reject(n);
                  if (this[c]) return Promise.resolve(d(void 0, !0));
                  if (this[f].destroyed)
                    return new Promise(function (n, r) {
                      e.nextTick(function () {
                        t[u] ? r(t[u]) : n(d(void 0, !0));
                      });
                    });
                  var r,
                    i = this[l];
                  if (i)
                    r = new Promise(
                      (function (t, e) {
                        return function (n, r) {
                          t.then(function () {
                            e[c] ? n(d(void 0, !0)) : e[h](n, r);
                          }, r);
                        };
                      })(i, this)
                    );
                  else {
                    var o = this[f].read();
                    if (null !== o) return Promise.resolve(d(o, !1));
                    r = new Promise(this[h]);
                  }
                  return (this[l] = r), r;
                },
              }),
              Symbol.asyncIterator,
              function () {
                return this;
              }
            ),
            i(r, "return", function () {
              var t = this;
              return new Promise(function (e, n) {
                t[f].destroy(null, function (t) {
                  t ? n(t) : e(d(void 0, !0));
                });
              });
            }),
            r),
            b
          );
        t.exports = function (t) {
          var e,
            n = Object.create(
              y,
              (i((e = {}), f, { value: t, writable: !0 }),
              i(e, s, { value: null, writable: !0 }),
              i(e, a, { value: null, writable: !0 }),
              i(e, u, { value: null, writable: !0 }),
              i(e, c, { value: t._readableState.endEmitted, writable: !0 }),
              i(e, h, {
                value: function (t, e) {
                  var r = n[f].read();
                  r
                    ? ((n[l] = null), (n[s] = null), (n[a] = null), t(d(r, !1)))
                    : ((n[s] = t), (n[a] = e));
                },
                writable: !0,
              }),
              e)
            );
          return (
            (n[l] = null),
            o(t, function (t) {
              if (t && "ERR_STREAM_PREMATURE_CLOSE" !== t.code) {
                var e = n[a];
                return (
                  null !== e &&
                    ((n[l] = null), (n[s] = null), (n[a] = null), e(t)),
                  void (n[u] = t)
                );
              }
              var r = n[s];
              null !== r &&
                ((n[l] = null), (n[s] = null), (n[a] = null), r(d(void 0, !0))),
                (n[c] = !0);
            }),
            t.on("readable", v.bind(null, n)),
            n
          );
        };
      }.call(this, n(72)));
    },
    1227: function (t, e) {
      t.exports = function () {
        throw new Error("Readable.from is not available in the browser");
      };
    },
    1228: function (t, e, n) {
      "use strict";
      t.exports = i;
      var r = n(1127);
      function i(t) {
        if (!(this instanceof i)) return new i(t);
        r.call(this, t);
      }
      n(455)(i, r),
        (i.prototype._transform = function (t, e, n) {
          n(null, t);
        });
    },
    1229: function (t, e, n) {
      "use strict";
      var r;
      var i = n(995).codes,
        o = i.ERR_MISSING_ARGS,
        s = i.ERR_STREAM_DESTROYED;
      function a(t) {
        if (t) throw t;
      }
      function u(t, e, i, o) {
        o = (function (t) {
          var e = !1;
          return function () {
            e || ((e = !0), t.apply(void 0, arguments));
          };
        })(o);
        var a = !1;
        t.on("close", function () {
          a = !0;
        }),
          void 0 === r && (r = n(1066)),
          r(t, { readable: e, writable: i }, function (t) {
            if (t) return o(t);
            (a = !0), o();
          });
        var u = !1;
        return function (e) {
          if (!a && !u)
            return (
              (u = !0),
              (function (t) {
                return t.setHeader && "function" === typeof t.abort;
              })(t)
                ? t.abort()
                : "function" === typeof t.destroy
                ? t.destroy()
                : void o(e || new s("pipe"))
            );
        };
      }
      function c(t) {
        t();
      }
      function l(t, e) {
        return t.pipe(e);
      }
      function h(t) {
        return t.length
          ? "function" !== typeof t[t.length - 1]
            ? a
            : t.pop()
          : a;
      }
      t.exports = function () {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        var r,
          i = h(e);
        if ((Array.isArray(e[0]) && (e = e[0]), e.length < 2))
          throw new o("streams");
        var s = e.map(function (t, n) {
          var o = n < e.length - 1;
          return u(t, o, n > 0, function (t) {
            r || (r = t), t && s.forEach(c), o || (s.forEach(c), i(r));
          });
        });
        return e.reduce(l);
      };
    },
    1230: function (t, e, n) {
      (function (e) {
        var r = n(91),
          i = n(92),
          o = n(273),
          s = n(274),
          a = n(1120).Transform;
        t.exports = function (t) {
          return (function (n) {
            "use strict";
            o(u, n);
            var a = s(u);
            function u(e, n, i, o) {
              var s;
              return (
                r(this, u),
                ((s = a.call(this, o))._rate = e),
                (s._capacity = n),
                (s._delimitedSuffix = i),
                (s._options = o),
                (s._state = new t()),
                s._state.initialize(e, n),
                (s._finalized = !1),
                s
              );
            }
            return (
              i(u, [
                {
                  key: "_transform",
                  value: function (t, e, n) {
                    var r = null;
                    try {
                      this.update(t, e);
                    } catch (i) {
                      r = i;
                    }
                    n(r);
                  },
                },
                { key: "_flush", value: function () {} },
                {
                  key: "_read",
                  value: function (t) {
                    this.push(this.squeeze(t));
                  },
                },
                {
                  key: "update",
                  value: function (t, n) {
                    if (!e.isBuffer(t) && "string" !== typeof t)
                      throw new TypeError("Data must be a string or a buffer");
                    if (this._finalized)
                      throw new Error("Squeeze already called");
                    return (
                      e.isBuffer(t) || (t = e.from(t, n)),
                      this._state.absorb(t),
                      this
                    );
                  },
                },
                {
                  key: "squeeze",
                  value: function (t, e) {
                    this._finalized ||
                      ((this._finalized = !0),
                      this._state.absorbLastFewBits(this._delimitedSuffix));
                    var n = this._state.squeeze(t);
                    return void 0 !== e && (n = n.toString(e)), n;
                  },
                },
                {
                  key: "_resetState",
                  value: function () {
                    return (
                      this._state.initialize(this._rate, this._capacity), this
                    );
                  },
                },
                {
                  key: "_clone",
                  value: function () {
                    var t = new u(
                      this._rate,
                      this._capacity,
                      this._delimitedSuffix,
                      this._options
                    );
                    return (
                      this._state.copy(t._state),
                      (t._finalized = this._finalized),
                      t
                    );
                  },
                },
              ]),
              u
            );
          })(a);
        };
      }.call(this, n(230).Buffer));
    },
    1231: function (t, e, n) {
      (function (e) {
        var r = n(1232);
        function i() {
          (this.state = [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0,
          ]),
            (this.blockSize = null),
            (this.count = 0),
            (this.squeezing = !1);
        }
        (i.prototype.initialize = function (t, e) {
          for (var n = 0; n < 50; ++n) this.state[n] = 0;
          (this.blockSize = t / 8), (this.count = 0), (this.squeezing = !1);
        }),
          (i.prototype.absorb = function (t) {
            for (var e = 0; e < t.length; ++e)
              (this.state[~~(this.count / 4)] ^=
                t[e] << ((this.count % 4) * 8)),
                (this.count += 1),
                this.count === this.blockSize &&
                  (r.p1600(this.state), (this.count = 0));
          }),
          (i.prototype.absorbLastFewBits = function (t) {
            (this.state[~~(this.count / 4)] ^= t << ((this.count % 4) * 8)),
              0 !== (128 & t) &&
                this.count === this.blockSize - 1 &&
                r.p1600(this.state),
              (this.state[~~((this.blockSize - 1) / 4)] ^=
                128 << (((this.blockSize - 1) % 4) * 8)),
              r.p1600(this.state),
              (this.count = 0),
              (this.squeezing = !0);
          }),
          (i.prototype.squeeze = function (t) {
            this.squeezing || this.absorbLastFewBits(1);
            for (var n = e.alloc(t), i = 0; i < t; ++i)
              (n[i] =
                (this.state[~~(this.count / 4)] >>> ((this.count % 4) * 8)) &
                255),
                (this.count += 1),
                this.count === this.blockSize &&
                  (r.p1600(this.state), (this.count = 0));
            return n;
          }),
          (i.prototype.copy = function (t) {
            for (var e = 0; e < 50; ++e) t.state[e] = this.state[e];
            (t.blockSize = this.blockSize),
              (t.count = this.count),
              (t.squeezing = this.squeezing);
          }),
          (t.exports = i);
      }.call(this, n(230).Buffer));
    },
    1232: function (t, e) {
      var n = [
        1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0,
        2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136,
        0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905,
        2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648,
        32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896,
        2147483648, 2147483649, 0, 2147516424, 2147483648,
      ];
      e.p1600 = function (t) {
        for (var e = 0; e < 24; ++e) {
          var r = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40],
            i = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41],
            o = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42],
            s = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43],
            a = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44],
            u = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45],
            c = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46],
            l = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47],
            h = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48],
            f = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49],
            d = h ^ ((o << 1) | (s >>> 31)),
            p = f ^ ((s << 1) | (o >>> 31)),
            v = t[0] ^ d,
            b = t[1] ^ p,
            y = t[10] ^ d,
            g = t[11] ^ p,
            m = t[20] ^ d,
            w = t[21] ^ p,
            _ = t[30] ^ d,
            k = t[31] ^ p,
            x = t[40] ^ d,
            E = t[41] ^ p;
          (d = r ^ ((a << 1) | (u >>> 31))), (p = i ^ ((u << 1) | (a >>> 31)));
          var S = t[2] ^ d,
            M = t[3] ^ p,
            C = t[12] ^ d,
            A = t[13] ^ p,
            R = t[22] ^ d,
            O = t[23] ^ p,
            I = t[32] ^ d,
            T = t[33] ^ p,
            N = t[42] ^ d,
            j = t[43] ^ p;
          (d = o ^ ((c << 1) | (l >>> 31))), (p = s ^ ((l << 1) | (c >>> 31)));
          var L = t[4] ^ d,
            P = t[5] ^ p,
            D = t[14] ^ d,
            B = t[15] ^ p,
            H = t[24] ^ d,
            F = t[25] ^ p,
            U = t[34] ^ d,
            W = t[35] ^ p,
            z = t[44] ^ d,
            q = t[45] ^ p;
          (d = a ^ ((h << 1) | (f >>> 31))), (p = u ^ ((f << 1) | (h >>> 31)));
          var V = t[6] ^ d,
            Y = t[7] ^ p,
            G = t[16] ^ d,
            J = t[17] ^ p,
            K = t[26] ^ d,
            X = t[27] ^ p,
            Q = t[36] ^ d,
            Z = t[37] ^ p,
            $ = t[46] ^ d,
            tt = t[47] ^ p;
          (d = c ^ ((r << 1) | (i >>> 31))), (p = l ^ ((i << 1) | (r >>> 31)));
          var et = t[8] ^ d,
            nt = t[9] ^ p,
            rt = t[18] ^ d,
            it = t[19] ^ p,
            ot = t[28] ^ d,
            st = t[29] ^ p,
            at = t[38] ^ d,
            ut = t[39] ^ p,
            ct = t[48] ^ d,
            lt = t[49] ^ p,
            ht = v,
            ft = b,
            dt = (g << 4) | (y >>> 28),
            pt = (y << 4) | (g >>> 28),
            vt = (m << 3) | (w >>> 29),
            bt = (w << 3) | (m >>> 29),
            yt = (k << 9) | (_ >>> 23),
            gt = (_ << 9) | (k >>> 23),
            mt = (x << 18) | (E >>> 14),
            wt = (E << 18) | (x >>> 14),
            _t = (S << 1) | (M >>> 31),
            kt = (M << 1) | (S >>> 31),
            xt = (A << 12) | (C >>> 20),
            Et = (C << 12) | (A >>> 20),
            St = (R << 10) | (O >>> 22),
            Mt = (O << 10) | (R >>> 22),
            Ct = (T << 13) | (I >>> 19),
            At = (I << 13) | (T >>> 19),
            Rt = (N << 2) | (j >>> 30),
            Ot = (j << 2) | (N >>> 30),
            It = (P << 30) | (L >>> 2),
            Tt = (L << 30) | (P >>> 2),
            Nt = (D << 6) | (B >>> 26),
            jt = (B << 6) | (D >>> 26),
            Lt = (F << 11) | (H >>> 21),
            Pt = (H << 11) | (F >>> 21),
            Dt = (U << 15) | (W >>> 17),
            Bt = (W << 15) | (U >>> 17),
            Ht = (q << 29) | (z >>> 3),
            Ft = (z << 29) | (q >>> 3),
            Ut = (V << 28) | (Y >>> 4),
            Wt = (Y << 28) | (V >>> 4),
            zt = (J << 23) | (G >>> 9),
            qt = (G << 23) | (J >>> 9),
            Vt = (K << 25) | (X >>> 7),
            Yt = (X << 25) | (K >>> 7),
            Gt = (Q << 21) | (Z >>> 11),
            Jt = (Z << 21) | (Q >>> 11),
            Kt = (tt << 24) | ($ >>> 8),
            Xt = ($ << 24) | (tt >>> 8),
            Qt = (et << 27) | (nt >>> 5),
            Zt = (nt << 27) | (et >>> 5),
            $t = (rt << 20) | (it >>> 12),
            te = (it << 20) | (rt >>> 12),
            ee = (st << 7) | (ot >>> 25),
            ne = (ot << 7) | (st >>> 25),
            re = (at << 8) | (ut >>> 24),
            ie = (ut << 8) | (at >>> 24),
            oe = (ct << 14) | (lt >>> 18),
            se = (lt << 14) | (ct >>> 18);
          (t[0] = ht ^ (~xt & Lt)),
            (t[1] = ft ^ (~Et & Pt)),
            (t[10] = Ut ^ (~$t & vt)),
            (t[11] = Wt ^ (~te & bt)),
            (t[20] = _t ^ (~Nt & Vt)),
            (t[21] = kt ^ (~jt & Yt)),
            (t[30] = Qt ^ (~dt & St)),
            (t[31] = Zt ^ (~pt & Mt)),
            (t[40] = It ^ (~zt & ee)),
            (t[41] = Tt ^ (~qt & ne)),
            (t[2] = xt ^ (~Lt & Gt)),
            (t[3] = Et ^ (~Pt & Jt)),
            (t[12] = $t ^ (~vt & Ct)),
            (t[13] = te ^ (~bt & At)),
            (t[22] = Nt ^ (~Vt & re)),
            (t[23] = jt ^ (~Yt & ie)),
            (t[32] = dt ^ (~St & Dt)),
            (t[33] = pt ^ (~Mt & Bt)),
            (t[42] = zt ^ (~ee & yt)),
            (t[43] = qt ^ (~ne & gt)),
            (t[4] = Lt ^ (~Gt & oe)),
            (t[5] = Pt ^ (~Jt & se)),
            (t[14] = vt ^ (~Ct & Ht)),
            (t[15] = bt ^ (~At & Ft)),
            (t[24] = Vt ^ (~re & mt)),
            (t[25] = Yt ^ (~ie & wt)),
            (t[34] = St ^ (~Dt & Kt)),
            (t[35] = Mt ^ (~Bt & Xt)),
            (t[44] = ee ^ (~yt & Rt)),
            (t[45] = ne ^ (~gt & Ot)),
            (t[6] = Gt ^ (~oe & ht)),
            (t[7] = Jt ^ (~se & ft)),
            (t[16] = Ct ^ (~Ht & Ut)),
            (t[17] = At ^ (~Ft & Wt)),
            (t[26] = re ^ (~mt & _t)),
            (t[27] = ie ^ (~wt & kt)),
            (t[36] = Dt ^ (~Kt & Qt)),
            (t[37] = Bt ^ (~Xt & Zt)),
            (t[46] = yt ^ (~Rt & It)),
            (t[47] = gt ^ (~Ot & Tt)),
            (t[8] = oe ^ (~ht & xt)),
            (t[9] = se ^ (~ft & Et)),
            (t[18] = Ht ^ (~Ut & $t)),
            (t[19] = Ft ^ (~Wt & te)),
            (t[28] = mt ^ (~_t & Nt)),
            (t[29] = wt ^ (~kt & jt)),
            (t[38] = Kt ^ (~Qt & dt)),
            (t[39] = Xt ^ (~Zt & pt)),
            (t[48] = Rt ^ (~It & zt)),
            (t[49] = Ot ^ (~Tt & qt)),
            (t[0] ^= n[2 * e]),
            (t[1] ^= n[2 * e + 1]);
        }
      };
    },
    1233: function (t, e, n) {
      (function (e) {
        var r = n(1119),
          i = n(1016);
        function o(t) {
          return t.startsWith("int[")
            ? "int256" + t.slice(3)
            : "int" === t
            ? "int256"
            : t.startsWith("uint[")
            ? "uint256" + t.slice(4)
            : "uint" === t
            ? "uint256"
            : t.startsWith("fixed[")
            ? "fixed128x128" + t.slice(5)
            : "fixed" === t
            ? "fixed128x128"
            : t.startsWith("ufixed[")
            ? "ufixed128x128" + t.slice(6)
            : "ufixed" === t
            ? "ufixed128x128"
            : t;
        }
        function s(t) {
          return parseInt(/^\D+(\d+)$/.exec(t)[1], 10);
        }
        function a(t) {
          var e = /^\D+(\d+)x(\d+)$/.exec(t);
          return [parseInt(e[1], 10), parseInt(e[2], 10)];
        }
        function u(t) {
          var e = t.match(/(.*)\[(.*?)\]$/);
          return e ? ("" === e[2] ? "dynamic" : parseInt(e[2], 10)) : null;
        }
        function c(t) {
          var e = typeof t;
          if ("string" === e)
            return r.isHexString(t)
              ? new i(r.stripHexPrefix(t), 16)
              : new i(t, 10);
          if ("number" === e) return new i(t);
          if (t.toArray) return t;
          throw new Error("Argument is not a number");
        }
        function l(t, n) {
          var o, h, f, d;
          if ("address" === t) return l("uint160", c(n));
          if ("bool" === t) return l("uint8", n ? 1 : 0);
          if ("string" === t) return l("bytes", new e(n, "utf8"));
          if (
            (function (t) {
              return t.lastIndexOf("]") === t.length - 1;
            })(t)
          ) {
            if ("undefined" === typeof n.length)
              throw new Error("Not an array?");
            if ("dynamic" !== (o = u(t)) && 0 !== o && n.length > o)
              throw new Error("Elements exceed array size: " + o);
            for (d in ((f = []),
            (t = t.slice(0, t.lastIndexOf("["))),
            "string" === typeof n && (n = JSON.parse(n)),
            n))
              f.push(l(t, n[d]));
            if ("dynamic" === o) {
              var p = l("uint256", n.length);
              f.unshift(p);
            }
            return e.concat(f);
          }
          if ("bytes" === t)
            return (
              (n = new e(n)),
              (f = e.concat([l("uint256", n.length), n])),
              n.length % 32 !== 0 &&
                (f = e.concat([f, r.zeros(32 - (n.length % 32))])),
              f
            );
          if (t.startsWith("bytes")) {
            if ((o = s(t)) < 1 || o > 32)
              throw new Error("Invalid bytes<N> width: " + o);
            return r.setLengthRight(n, 32);
          }
          if (t.startsWith("uint")) {
            if ((o = s(t)) % 8 || o < 8 || o > 256)
              throw new Error("Invalid uint<N> width: " + o);
            if ((h = c(n)).bitLength() > o)
              throw new Error(
                "Supplied uint exceeds width: " + o + " vs " + h.bitLength()
              );
            if (h < 0) throw new Error("Supplied uint is negative");
            return h.toArrayLike(e, "be", 32);
          }
          if (t.startsWith("int")) {
            if ((o = s(t)) % 8 || o < 8 || o > 256)
              throw new Error("Invalid int<N> width: " + o);
            if ((h = c(n)).bitLength() > o)
              throw new Error(
                "Supplied int exceeds width: " + o + " vs " + h.bitLength()
              );
            return h.toTwos(256).toArrayLike(e, "be", 32);
          }
          if (t.startsWith("ufixed")) {
            if (((o = a(t)), (h = c(n)) < 0))
              throw new Error("Supplied ufixed is negative");
            return l("uint256", h.mul(new i(2).pow(new i(o[1]))));
          }
          if (t.startsWith("fixed"))
            return (o = a(t)), l("int256", c(n).mul(new i(2).pow(new i(o[1]))));
          throw new Error("Unsupported or invalid type: " + t);
        }
        function h(t) {
          return "string" === t || "bytes" === t || "dynamic" === u(t);
        }
        function f(t, n) {
          if (t.length !== n.length)
            throw new Error("Number of types are not matching the values");
          for (var i, a, u = [], l = 0; l < t.length; l++) {
            var h = o(t[l]),
              f = n[l];
            if ("bytes" === h) u.push(f);
            else if ("string" === h) u.push(new e(f, "utf8"));
            else if ("bool" === h) u.push(new e(f ? "01" : "00", "hex"));
            else if ("address" === h) u.push(r.setLength(f, 20));
            else if (h.startsWith("bytes")) {
              if ((i = s(h)) < 1 || i > 32)
                throw new Error("Invalid bytes<N> width: " + i);
              u.push(r.setLengthRight(f, i));
            } else if (h.startsWith("uint")) {
              if ((i = s(h)) % 8 || i < 8 || i > 256)
                throw new Error("Invalid uint<N> width: " + i);
              if ((a = c(f)).bitLength() > i)
                throw new Error(
                  "Supplied uint exceeds width: " + i + " vs " + a.bitLength()
                );
              u.push(a.toArrayLike(e, "be", i / 8));
            } else {
              if (!h.startsWith("int"))
                throw new Error("Unsupported or invalid type: " + h);
              if ((i = s(h)) % 8 || i < 8 || i > 256)
                throw new Error("Invalid int<N> width: " + i);
              if ((a = c(f)).bitLength() > i)
                throw new Error(
                  "Supplied int exceeds width: " + i + " vs " + a.bitLength()
                );
              u.push(a.toTwos(i).toArrayLike(e, "be", i / 8));
            }
          }
          return e.concat(u);
        }
        t.exports = {
          rawEncode: function (t, n) {
            var r = [],
              i = [],
              s = 32 * t.length;
            for (var a in t) {
              var u = o(t[a]),
                c = l(u, n[a]);
              h(u)
                ? (r.push(l("uint256", s)), i.push(c), (s += c.length))
                : r.push(c);
            }
            return e.concat(r.concat(i));
          },
          solidityPack: f,
          soliditySHA3: function (t, e) {
            return r.keccak(f(t, e));
          },
        };
      }.call(this, n(230).Buffer));
    },
    1234: function (t, e, n) {
      "use strict";
      var r = n(453),
        i = n(2),
        o = n(168),
        s = n(91),
        a = n(92);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.filterFromParam = e.FilterPolyfill = void 0);
      var u = n(1065),
        c = n(986),
        l = { jsonrpc: "2.0", id: 0 },
        h = (function () {
          function t(e) {
            s(this, t),
              (this.logFilters = new Map()),
              (this.blockFilters = new Set()),
              (this.pendingTransactionFilters = new Set()),
              (this.cursors = new Map()),
              (this.timeouts = new Map()),
              (this.nextFilterId = (0, u.IntNumber)(1)),
              (this.provider = e);
          }
          return (
            a(t, [
              {
                key: "newFilter",
                value: (function () {
                  var t = o(
                    i.mark(function t(e) {
                      var n, r, o;
                      return i.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (n = f(e)),
                                  (r = this.makeFilterId()),
                                  (t.next = 4),
                                  this.setInitialCursorPosition(r, n.fromBlock)
                                );
                              case 4:
                                return (
                                  (o = t.sent),
                                  console.log(
                                    "Installing new log filter(".concat(
                                      r,
                                      "):"
                                    ),
                                    n,
                                    "initial cursor position:",
                                    o
                                  ),
                                  this.logFilters.set(r, n),
                                  this.setFilterTimeout(r),
                                  t.abrupt(
                                    "return",
                                    (0, c.hexStringFromIntNumber)(r)
                                  )
                                );
                              case 9:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "newBlockFilter",
                value: (function () {
                  var t = o(
                    i.mark(function t() {
                      var e, n;
                      return i.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (e = this.makeFilterId()),
                                  (t.next = 3),
                                  this.setInitialCursorPosition(e, "latest")
                                );
                              case 3:
                                return (
                                  (n = t.sent),
                                  console.log(
                                    "Installing new block filter (".concat(
                                      e,
                                      ") with initial cursor position:"
                                    ),
                                    n
                                  ),
                                  this.blockFilters.add(e),
                                  this.setFilterTimeout(e),
                                  t.abrupt(
                                    "return",
                                    (0, c.hexStringFromIntNumber)(e)
                                  )
                                );
                              case 8:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "newPendingTransactionFilter",
                value: (function () {
                  var t = o(
                    i.mark(function t() {
                      var e, n;
                      return i.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (e = this.makeFilterId()),
                                  (t.next = 3),
                                  this.setInitialCursorPosition(e, "latest")
                                );
                              case 3:
                                return (
                                  (n = t.sent),
                                  console.log(
                                    "Installing new block filter (".concat(
                                      e,
                                      ") with initial cursor position:"
                                    ),
                                    n
                                  ),
                                  this.pendingTransactionFilters.add(e),
                                  this.setFilterTimeout(e),
                                  t.abrupt(
                                    "return",
                                    (0, c.hexStringFromIntNumber)(e)
                                  )
                                );
                              case 8:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "uninstallFilter",
                value: function (t) {
                  var e = (0, c.intNumberFromHexString)(t);
                  return (
                    console.log("Uninstalling filter (".concat(e, ")")),
                    this.deleteFilter(e),
                    !0
                  );
                },
              },
              {
                key: "getFilterChanges",
                value: function (t) {
                  var e = (0, c.intNumberFromHexString)(t);
                  return (
                    this.timeouts.has(e) && this.setFilterTimeout(e),
                    this.logFilters.has(e)
                      ? this.getLogFilterChanges(e)
                      : this.blockFilters.has(e)
                      ? this.getBlockFilterChanges(e)
                      : this.pendingTransactionFilters.has(e)
                      ? this.getPendingTransactionFilterChanges(e)
                      : Promise.resolve(b())
                  );
                },
              },
              {
                key: "getFilterLogs",
                value: (function () {
                  var t = o(
                    i.mark(function t(e) {
                      var n, r;
                      return i.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  ((n = (0, c.intNumberFromHexString)(e)),
                                  (r = this.logFilters.get(n)))
                                ) {
                                  t.next = 4;
                                  break;
                                }
                                return t.abrupt("return", b());
                              case 4:
                                return t.abrupt(
                                  "return",
                                  this.sendAsyncPromise(
                                    Object.assign(Object.assign({}, l), {
                                      method: "eth_getLogs",
                                      params: [d(r)],
                                    })
                                  )
                                );
                              case 5:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "makeFilterId",
                value: function () {
                  return (0, u.IntNumber)(++this.nextFilterId);
                },
              },
              {
                key: "sendAsyncPromise",
                value: function (t) {
                  var e = this;
                  return new Promise(function (n, r) {
                    e.provider.sendAsync(t, function (t, e) {
                      return t
                        ? r(t)
                        : Array.isArray(e) || null == e
                        ? r(
                            new Error(
                              "unexpected response received: ".concat(
                                JSON.stringify(e)
                              )
                            )
                          )
                        : void n(e);
                    });
                  });
                },
              },
              {
                key: "deleteFilter",
                value: function (t) {
                  console.log("Deleting filter (".concat(t, ")")),
                    this.logFilters.delete(t),
                    this.blockFilters.delete(t),
                    this.pendingTransactionFilters.delete(t),
                    this.cursors.delete(t),
                    this.timeouts.delete(t);
                },
              },
              {
                key: "getLogFilterChanges",
                value: (function () {
                  var t = o(
                    i.mark(function t(e) {
                      var n, o, s, a, h, f, p, v;
                      return i.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  ((n = this.logFilters.get(e)),
                                  (o = this.cursors.get(e)) && n)
                                ) {
                                  t.next = 4;
                                  break;
                                }
                                return t.abrupt("return", b());
                              case 4:
                                return (
                                  (t.next = 6), this.getCurrentBlockHeight()
                                );
                              case 6:
                                if (
                                  ((s = t.sent),
                                  (a = "latest" === n.toBlock ? s : n.toBlock),
                                  !(o > s))
                                ) {
                                  t.next = 10;
                                  break;
                                }
                                return t.abrupt("return", y());
                              case 10:
                                if (!(o > n.toBlock)) {
                                  t.next = 12;
                                  break;
                                }
                                return t.abrupt("return", y());
                              case 12:
                                return (
                                  console.log(
                                    "Fetching logs from "
                                      .concat(o, " to ")
                                      .concat(a, " for filter ")
                                      .concat(e)
                                  ),
                                  (t.next = 15),
                                  this.sendAsyncPromise(
                                    Object.assign(Object.assign({}, l), {
                                      method: "eth_getLogs",
                                      params: [
                                        d(
                                          Object.assign(Object.assign({}, n), {
                                            fromBlock: o,
                                            toBlock: a,
                                          })
                                        ),
                                      ],
                                    })
                                  )
                                );
                              case 15:
                                return (
                                  (h = t.sent),
                                  Array.isArray(h.result) &&
                                    ((f = h.result.map(function (t) {
                                      return (0,
                                      c.intNumberFromHexString)(t.blockNumber || "0x0");
                                    })),
                                    (p = Math.max.apply(Math, r(f))) &&
                                      p > o &&
                                      ((v = (0, u.IntNumber)(p + 1)),
                                      console.log(
                                        "Moving cursor position for filter ("
                                          .concat(e, ") from ")
                                          .concat(o, " to ")
                                          .concat(v)
                                      ),
                                      this.cursors.set(e, v))),
                                  t.abrupt("return", h)
                                );
                              case 18:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getBlockFilterChanges",
                value: (function () {
                  var t = o(
                    i.mark(function t(e) {
                      var n,
                        r,
                        o,
                        s,
                        a = this;
                      return i.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if ((n = this.cursors.get(e))) {
                                  t.next = 3;
                                  break;
                                }
                                return t.abrupt("return", b());
                              case 3:
                                return (
                                  (t.next = 5), this.getCurrentBlockHeight()
                                );
                              case 5:
                                if (((r = t.sent), !(n > r))) {
                                  t.next = 8;
                                  break;
                                }
                                return t.abrupt("return", y());
                              case 8:
                                return (
                                  console.log(
                                    "Fetching blocks from "
                                      .concat(n, " to ")
                                      .concat(r, " for filter (")
                                      .concat(e, ")")
                                  ),
                                  (t.next = 11),
                                  Promise.all(
                                    (0, c.range)(n, r + 1).map(function (t) {
                                      return a.getBlockHashByNumber(
                                        (0, u.IntNumber)(t)
                                      );
                                    })
                                  )
                                );
                              case 11:
                                return (
                                  (o = t.sent.filter(function (t) {
                                    return !!t;
                                  })),
                                  (s = (0, u.IntNumber)(n + o.length)),
                                  console.log(
                                    "Moving cursor position for filter ("
                                      .concat(e, ") from ")
                                      .concat(n, " to ")
                                      .concat(s)
                                  ),
                                  this.cursors.set(e, s),
                                  t.abrupt(
                                    "return",
                                    Object.assign(Object.assign({}, l), {
                                      result: o,
                                    })
                                  )
                                );
                              case 16:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getPendingTransactionFilterChanges",
                value: (function () {
                  var t = o(
                    i.mark(function t(e) {
                      return i.wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return t.abrupt("return", Promise.resolve(y()));
                            case 1:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "setInitialCursorPosition",
                value: (function () {
                  var t = o(
                    i.mark(function t(e, n) {
                      var r, o;
                      return i.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.next = 2), this.getCurrentBlockHeight()
                                );
                              case 2:
                                return (
                                  (r = t.sent),
                                  (o = "number" === typeof n && n > r ? n : r),
                                  this.cursors.set(e, o),
                                  t.abrupt("return", o)
                                );
                              case 6:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e, n) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "setFilterTimeout",
                value: function (t) {
                  var e = this,
                    n = this.timeouts.get(t);
                  n && window.clearTimeout(n);
                  var r = window.setTimeout(function () {
                    console.log("Filter (".concat(t, ") timed out")),
                      e.deleteFilter(t);
                  }, 3e5);
                  this.timeouts.set(t, r);
                },
              },
              {
                key: "getCurrentBlockHeight",
                value: (function () {
                  var t = o(
                    i.mark(function t() {
                      var e, n;
                      return i.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.next = 2),
                                  this.sendAsyncPromise(
                                    Object.assign(Object.assign({}, l), {
                                      method: "eth_blockNumber",
                                      params: [],
                                    })
                                  )
                                );
                              case 2:
                                return (
                                  (e = t.sent),
                                  (n = e.result),
                                  t.abrupt(
                                    "return",
                                    (0, c.intNumberFromHexString)(
                                      (0, c.ensureHexString)(n)
                                    )
                                  )
                                );
                              case 5:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getBlockHashByNumber",
                value: (function () {
                  var t = o(
                    i.mark(function t(e) {
                      var n;
                      return i.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.next = 2),
                                  this.sendAsyncPromise(
                                    Object.assign(Object.assign({}, l), {
                                      method: "eth_getBlockByNumber",
                                      params: [
                                        (0, c.hexStringFromIntNumber)(e),
                                        !1,
                                      ],
                                    })
                                  )
                                );
                              case 2:
                                if (
                                  !(n = t.sent).result ||
                                  "string" !== typeof n.result.hash
                                ) {
                                  t.next = 5;
                                  break;
                                }
                                return t.abrupt(
                                  "return",
                                  (0, c.ensureHexString)(n.result.hash)
                                );
                              case 5:
                                return t.abrupt("return", null);
                              case 6:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
            ]),
            t
          );
        })();
      function f(t) {
        return {
          fromBlock: p(t.fromBlock),
          toBlock: p(t.toBlock),
          addresses:
            void 0 === t.address
              ? null
              : Array.isArray(t.address)
              ? t.address
              : [t.address],
          topics: t.topics || [],
        };
      }
      function d(t) {
        var e = {
          fromBlock: v(t.fromBlock),
          toBlock: v(t.toBlock),
          topics: t.topics,
        };
        return null !== t.addresses && (e.address = t.addresses), e;
      }
      function p(t) {
        if (void 0 === t || "latest" === t || "pending" === t) return "latest";
        if ("earliest" === t) return (0, u.IntNumber)(0);
        if ((0, c.isHexString)(t)) return (0, c.intNumberFromHexString)(t);
        throw new Error("Invalid block option: ".concat(String(t)));
      }
      function v(t) {
        return "latest" === t ? t : (0, c.hexStringFromIntNumber)(t);
      }
      function b() {
        return Object.assign(Object.assign({}, l), {
          error: { code: -32e3, message: "filter not found" },
        });
      }
      function y() {
        return Object.assign(Object.assign({}, l), { result: [] });
      }
      (e.FilterPolyfill = h), (e.filterFromParam = f);
    },
    1235: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.JSONRPCMethod = void 0),
        (function (t) {
          (t.eth_accounts = "eth_accounts"),
            (t.eth_coinbase = "eth_coinbase"),
            (t.net_version = "net_version"),
            (t.eth_chainId = "eth_chainId"),
            (t.eth_uninstallFilter = "eth_uninstallFilter"),
            (t.eth_requestAccounts = "eth_requestAccounts"),
            (t.eth_sign = "eth_sign"),
            (t.eth_ecRecover = "eth_ecRecover"),
            (t.personal_sign = "personal_sign"),
            (t.personal_ecRecover = "personal_ecRecover"),
            (t.eth_signTransaction = "eth_signTransaction"),
            (t.eth_sendRawTransaction = "eth_sendRawTransaction"),
            (t.eth_sendTransaction = "eth_sendTransaction"),
            (t.eth_signTypedData_v1 = "eth_signTypedData_v1"),
            (t.eth_signTypedData_v2 = "eth_signTypedData_v2"),
            (t.eth_signTypedData_v3 = "eth_signTypedData_v3"),
            (t.eth_signTypedData_v4 = "eth_signTypedData_v4"),
            (t.eth_signTypedData = "eth_signTypedData"),
            (t.walletlink_arbitrary = "walletlink_arbitrary"),
            (t.wallet_addEthereumChain = "wallet_addEthereumChain"),
            (t.wallet_switchEthereumChain = "wallet_switchEthereumChain"),
            (t.eth_subscribe = "eth_subscribe"),
            (t.eth_unsubscribe = "eth_unsubscribe"),
            (t.eth_newFilter = "eth_newFilter"),
            (t.eth_newBlockFilter = "eth_newBlockFilter"),
            (t.eth_newPendingTransactionFilter =
              "eth_newPendingTransactionFilter"),
            (t.eth_getFilterChanges = "eth_getFilterChanges"),
            (t.eth_getFilterLogs = "eth_getFilterLogs");
        })(e.JSONRPCMethod || (e.JSONRPCMethod = {}));
    },
    1236: function (t, e, n) {
      "use strict";
      var r = n(2),
        i = n(168),
        o = n(91),
        s = n(92);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.SubscriptionManager = void 0);
      var a = n(1237),
        u = n(1245),
        c = function () {},
        l = (function () {
          function t(e) {
            o(this, t);
            var n = new a({
                provider: e,
                pollingInterval: 15e3,
                setSkipCacheFlag: !0,
              }),
              r = u({ blockTracker: n, provider: e }),
              i = r.events,
              s = r.middleware;
            (this.events = i), (this.subscriptionMiddleware = s);
          }
          return (
            s(t, [
              {
                key: "handleRequest",
                value: (function () {
                  var t = i(
                    r.mark(function t(e) {
                      var n;
                      return r.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (n = {}),
                                  (t.next = 3),
                                  this.subscriptionMiddleware(e, n, c, c)
                                );
                              case 3:
                                return t.abrupt("return", n);
                              case 4:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "destroy",
                value: function () {
                  this.subscriptionMiddleware.destroy();
                },
              },
            ]),
            t
          );
        })();
      e.SubscriptionManager = l;
    },
    1237: function (t, e, n) {
      var r = n(2),
        i = n(168),
        o = n(91),
        s = n(92),
        a = n(273),
        u = n(274),
        c = n(1128),
        l = n(1238),
        h = (function (t) {
          "use strict";
          a(n, t);
          var e = u(n);
          function n() {
            var t,
              r =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
            if ((o(this, n), !r.provider))
              throw new Error("PollingBlockTracker - no provider specified.");
            var i = r.pollingInterval || 2e4,
              s = r.retryTimeout || i / 10,
              a = void 0 === r.keepEventLoopActive || r.keepEventLoopActive,
              u = r.setSkipCacheFlag || !1;
            return (
              ((t = e.call(
                this,
                Object.assign({ blockResetDuration: i }, r)
              ))._provider = r.provider),
              (t._pollingInterval = i),
              (t._retryTimeout = s),
              (t._keepEventLoopActive = a),
              (t._setSkipCacheFlag = u),
              t
            );
          }
          return (
            s(n, [
              {
                key: "checkForLatestBlock",
                value: (function () {
                  var t = i(
                    r.mark(function t() {
                      return r.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.next = 2), this._updateLatestBlock();
                              case 2:
                                return (t.next = 4), this.getLatestBlock();
                              case 4:
                                return t.abrupt("return", t.sent);
                              case 5:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_start",
                value: function () {
                  var t = this;
                  this._performSync().catch(function (e) {
                    return t.emit("error", e);
                  });
                },
              },
              {
                key: "_performSync",
                value: (function () {
                  var t = i(
                    r.mark(function t() {
                      var e;
                      return r.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (!this._isRunning) {
                                  t.next = 16;
                                  break;
                                }
                                return (
                                  (t.prev = 1),
                                  (t.next = 4),
                                  this._updateLatestBlock()
                                );
                              case 4:
                                return (
                                  (t.next = 6),
                                  f(
                                    this._pollingInterval,
                                    !this._keepEventLoopActive
                                  )
                                );
                              case 6:
                                t.next = 14;
                                break;
                              case 8:
                                (t.prev = 8),
                                  (t.t0 = t.catch(1)),
                                  (e = new Error(
                                    "PollingBlockTracker - encountered an error while attempting to update latest block:\n".concat(
                                      t.t0.stack
                                    )
                                  ));
                                try {
                                  this.emit("error", e);
                                } catch (n) {
                                  console.error(e);
                                }
                                return (
                                  (t.next = 14),
                                  f(
                                    this._retryTimeout,
                                    !this._keepEventLoopActive
                                  )
                                );
                              case 14:
                                t.next = 0;
                                break;
                              case 16:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[1, 8]]
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_updateLatestBlock",
                value: (function () {
                  var t = i(
                    r.mark(function t() {
                      var e;
                      return r.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.next = 2), this._fetchLatestBlock();
                              case 2:
                                (e = t.sent), this._newPotentialLatest(e);
                              case 4:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_fetchLatestBlock",
                value: (function () {
                  var t = i(
                    r.mark(function t() {
                      var e,
                        n,
                        i = this;
                      return r.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (e = {
                                    jsonrpc: "2.0",
                                    id: 1,
                                    method: "eth_blockNumber",
                                    params: [],
                                  }),
                                  this._setSkipCacheFlag && (e.skipCache = !0),
                                  (t.next = 4),
                                  c(function (t) {
                                    return i._provider.sendAsync(e, t);
                                  })()
                                );
                              case 4:
                                if (!(n = t.sent).error) {
                                  t.next = 7;
                                  break;
                                }
                                throw new Error(
                                  "PollingBlockTracker - encountered error fetching block:\n".concat(
                                    n.error
                                  )
                                );
                              case 7:
                                return t.abrupt("return", n.result);
                              case 8:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
            ]),
            n
          );
        })(l);
      function f(t, e) {
        return new Promise(function (n) {
          var r = setTimeout(n, t);
          r.unref && e && r.unref();
        });
      }
      t.exports = h;
    },
    1238: function (t, e, n) {
      var r = n(2),
        i = n(168),
        o = n(91),
        s = n(92),
        a = n(275),
        u = n(1012),
        c = n(454),
        l = n(273),
        h = n(274),
        f = (n(1129), n(1128), n(1241)),
        d = function (t, e) {
          return t + e;
        },
        p = ["sync", "latest"],
        v = (function (t) {
          "use strict";
          l(n, t);
          var e = h(n);
          function n() {
            var t,
              r =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
            return (
              o(this, n),
              ((t = e.call(this))._blockResetDuration =
                r.blockResetDuration || 2e4),
              t._blockResetTimeout,
              (t._currentBlock = null),
              (t._isRunning = !1),
              (t._onNewListener = t._onNewListener.bind(a(t))),
              (t._onRemoveListener = t._onRemoveListener.bind(a(t))),
              (t._resetCurrentBlock = t._resetCurrentBlock.bind(a(t))),
              t._setupInternalEvents(),
              t
            );
          }
          return (
            s(n, [
              {
                key: "isRunning",
                value: function () {
                  return this._isRunning;
                },
              },
              {
                key: "getCurrentBlock",
                value: function () {
                  return this._currentBlock;
                },
              },
              {
                key: "getLatestBlock",
                value: (function () {
                  var t = i(
                    r.mark(function t() {
                      var e,
                        n = this;
                      return r.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (!this._currentBlock) {
                                  t.next = 2;
                                  break;
                                }
                                return t.abrupt("return", this._currentBlock);
                              case 2:
                                return (
                                  (t.next = 4),
                                  new Promise(function (t) {
                                    return n.once("latest", t);
                                  })
                                );
                              case 4:
                                return (e = t.sent), t.abrupt("return", e);
                              case 6:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "removeAllListeners",
                value: function (t) {
                  t
                    ? u(c(n.prototype), "removeAllListeners", this).call(
                        this,
                        t
                      )
                    : u(c(n.prototype), "removeAllListeners", this).call(this),
                    this._setupInternalEvents(),
                    this._onRemoveListener();
                },
              },
              { key: "_start", value: function () {} },
              { key: "_end", value: function () {} },
              {
                key: "_setupInternalEvents",
                value: function () {
                  this.removeListener("newListener", this._onNewListener),
                    this.removeListener(
                      "removeListener",
                      this._onRemoveListener
                    ),
                    this.on("newListener", this._onNewListener),
                    this.on("removeListener", this._onRemoveListener);
                },
              },
              {
                key: "_onNewListener",
                value: function (t, e) {
                  p.includes(t) && this._maybeStart();
                },
              },
              {
                key: "_onRemoveListener",
                value: function (t, e) {
                  this._getBlockTrackerEventCount() > 0 || this._maybeEnd();
                },
              },
              {
                key: "_maybeStart",
                value: function () {
                  this._isRunning ||
                    ((this._isRunning = !0),
                    this._cancelBlockResetTimeout(),
                    this._start());
                },
              },
              {
                key: "_maybeEnd",
                value: function () {
                  this._isRunning &&
                    ((this._isRunning = !1),
                    this._setupBlockResetTimeout(),
                    this._end());
                },
              },
              {
                key: "_getBlockTrackerEventCount",
                value: function () {
                  var t = this;
                  return p
                    .map(function (e) {
                      return t.listenerCount(e);
                    })
                    .reduce(d);
                },
              },
              {
                key: "_newPotentialLatest",
                value: function (t) {
                  var e = this._currentBlock;
                  (e && b(t) <= b(e)) || this._setCurrentBlock(t);
                },
              },
              {
                key: "_setCurrentBlock",
                value: function (t) {
                  var e = this._currentBlock;
                  (this._currentBlock = t),
                    this.emit("latest", t),
                    this.emit("sync", { oldBlock: e, newBlock: t });
                },
              },
              {
                key: "_setupBlockResetTimeout",
                value: function () {
                  this._cancelBlockResetTimeout(),
                    (this._blockResetTimeout = setTimeout(
                      this._resetCurrentBlock,
                      this._blockResetDuration
                    )),
                    this._blockResetTimeout.unref &&
                      this._blockResetTimeout.unref();
                },
              },
              {
                key: "_cancelBlockResetTimeout",
                value: function () {
                  clearTimeout(this._blockResetTimeout);
                },
              },
              {
                key: "_resetCurrentBlock",
                value: function () {
                  this._currentBlock = null;
                },
              },
            ]),
            n
          );
        })(f);
      function b(t) {
        return Number.parseInt(t, 16);
      }
      t.exports = v;
    },
    1239: function (t, e) {
      t.exports = function () {
        for (var t = {}, e = 0; e < arguments.length; e++) {
          var r = arguments[e];
          for (var i in r) n.call(r, i) && (t[i] = r[i]);
        }
        return t;
      };
      var n = Object.prototype.hasOwnProperty;
    },
    1240: function (t, e) {
      t.exports = function (t) {
        var e = (t = t || {}).max || Number.MAX_SAFE_INTEGER,
          n =
            "undefined" !== typeof t.start
              ? t.start
              : Math.floor(Math.random() * e);
        return function () {
          return (n %= e), n++;
        };
      };
    },
    1241: function (t, e, n) {
      var r = n(1242),
        i = n(193),
        o = "object" === typeof Reflect ? Reflect : null,
        s =
          o && "function" === typeof o.apply
            ? o.apply
            : function (t, e, n) {
                return Function.prototype.apply.call(t, e, n);
              };
      function a() {
        i.call(this);
      }
      function u(t, e, n) {
        try {
          s(t, e, n);
        } catch (r) {
          setTimeout(function () {
            throw r;
          });
        }
      }
      function c(t, e) {
        for (var n = new Array(e), r = 0; r < e; ++r) n[r] = t[r];
        return n;
      }
      (t.exports = a),
        r.inherits(a, i),
        (a.prototype.emit = function (t) {
          for (var e = [], n = 1; n < arguments.length; n++)
            e.push(arguments[n]);
          var r = "error" === t,
            i = this._events;
          if (void 0 !== i) r = r && void 0 === i.error;
          else if (!r) return !1;
          if (r) {
            var o;
            if ((e.length > 0 && (o = e[0]), o instanceof Error)) throw o;
            var s = new Error(
              "Unhandled error." + (o ? " (" + o.message + ")" : "")
            );
            throw ((s.context = o), s);
          }
          var a = i[t];
          if (void 0 === a) return !1;
          if ("function" === typeof a) u(a, this, e);
          else {
            var l = a.length,
              h = c(a, l);
            for (n = 0; n < l; ++n) u(h[n], this, e);
          }
          return !0;
        });
    },
    1242: function (t, e, n) {
      (function (t) {
        var r =
            Object.getOwnPropertyDescriptors ||
            function (t) {
              for (var e = Object.keys(t), n = {}, r = 0; r < e.length; r++)
                n[e[r]] = Object.getOwnPropertyDescriptor(t, e[r]);
              return n;
            },
          i = /%[sdj%]/g;
        (e.format = function (t) {
          if (!y(t)) {
            for (var e = [], n = 0; n < arguments.length; n++)
              e.push(a(arguments[n]));
            return e.join(" ");
          }
          n = 1;
          for (
            var r = arguments,
              o = r.length,
              s = String(t).replace(i, function (t) {
                if ("%%" === t) return "%";
                if (n >= o) return t;
                switch (t) {
                  case "%s":
                    return String(r[n++]);
                  case "%d":
                    return Number(r[n++]);
                  case "%j":
                    try {
                      return JSON.stringify(r[n++]);
                    } catch (e) {
                      return "[Circular]";
                    }
                  default:
                    return t;
                }
              }),
              u = r[n];
            n < o;
            u = r[++n]
          )
            v(u) || !w(u) ? (s += " " + u) : (s += " " + a(u));
          return s;
        }),
          (e.deprecate = function (n, r) {
            if ("undefined" !== typeof t && !0 === t.noDeprecation) return n;
            if ("undefined" === typeof t)
              return function () {
                return e.deprecate(n, r).apply(this, arguments);
              };
            var i = !1;
            return function () {
              if (!i) {
                if (t.throwDeprecation) throw new Error(r);
                t.traceDeprecation ? console.trace(r) : console.error(r),
                  (i = !0);
              }
              return n.apply(this, arguments);
            };
          });
        var o,
          s = {};
        function a(t, n) {
          var r = { seen: [], stylize: c };
          return (
            arguments.length >= 3 && (r.depth = arguments[2]),
            arguments.length >= 4 && (r.colors = arguments[3]),
            p(n) ? (r.showHidden = n) : n && e._extend(r, n),
            g(r.showHidden) && (r.showHidden = !1),
            g(r.depth) && (r.depth = 2),
            g(r.colors) && (r.colors = !1),
            g(r.customInspect) && (r.customInspect = !0),
            r.colors && (r.stylize = u),
            l(r, t, r.depth)
          );
        }
        function u(t, e) {
          var n = a.styles[e];
          return n
            ? "\x1b[" +
                a.colors[n][0] +
                "m" +
                t +
                "\x1b[" +
                a.colors[n][1] +
                "m"
            : t;
        }
        function c(t, e) {
          return t;
        }
        function l(t, n, r) {
          if (
            t.customInspect &&
            n &&
            x(n.inspect) &&
            n.inspect !== e.inspect &&
            (!n.constructor || n.constructor.prototype !== n)
          ) {
            var i = n.inspect(r, t);
            return y(i) || (i = l(t, i, r)), i;
          }
          var o = (function (t, e) {
            if (g(e)) return t.stylize("undefined", "undefined");
            if (y(e)) {
              var n =
                "'" +
                JSON.stringify(e)
                  .replace(/^"|"$/g, "")
                  .replace(/'/g, "\\'")
                  .replace(/\\"/g, '"') +
                "'";
              return t.stylize(n, "string");
            }
            if (b(e)) return t.stylize("" + e, "number");
            if (p(e)) return t.stylize("" + e, "boolean");
            if (v(e)) return t.stylize("null", "null");
          })(t, n);
          if (o) return o;
          var s = Object.keys(n),
            a = (function (t) {
              var e = {};
              return (
                t.forEach(function (t, n) {
                  e[t] = !0;
                }),
                e
              );
            })(s);
          if (
            (t.showHidden && (s = Object.getOwnPropertyNames(n)),
            k(n) &&
              (s.indexOf("message") >= 0 || s.indexOf("description") >= 0))
          )
            return h(n);
          if (0 === s.length) {
            if (x(n)) {
              var u = n.name ? ": " + n.name : "";
              return t.stylize("[Function" + u + "]", "special");
            }
            if (m(n))
              return t.stylize(RegExp.prototype.toString.call(n), "regexp");
            if (_(n)) return t.stylize(Date.prototype.toString.call(n), "date");
            if (k(n)) return h(n);
          }
          var c,
            w = "",
            E = !1,
            S = ["{", "}"];
          (d(n) && ((E = !0), (S = ["[", "]"])), x(n)) &&
            (w = " [Function" + (n.name ? ": " + n.name : "") + "]");
          return (
            m(n) && (w = " " + RegExp.prototype.toString.call(n)),
            _(n) && (w = " " + Date.prototype.toUTCString.call(n)),
            k(n) && (w = " " + h(n)),
            0 !== s.length || (E && 0 != n.length)
              ? r < 0
                ? m(n)
                  ? t.stylize(RegExp.prototype.toString.call(n), "regexp")
                  : t.stylize("[Object]", "special")
                : (t.seen.push(n),
                  (c = E
                    ? (function (t, e, n, r, i) {
                        for (var o = [], s = 0, a = e.length; s < a; ++s)
                          A(e, String(s))
                            ? o.push(f(t, e, n, r, String(s), !0))
                            : o.push("");
                        return (
                          i.forEach(function (i) {
                            i.match(/^\d+$/) || o.push(f(t, e, n, r, i, !0));
                          }),
                          o
                        );
                      })(t, n, r, a, s)
                    : s.map(function (e) {
                        return f(t, n, r, a, e, E);
                      })),
                  t.seen.pop(),
                  (function (t, e, n) {
                    if (
                      t.reduce(function (t, e) {
                        return (
                          e.indexOf("\n") >= 0 && 0,
                          t + e.replace(/\u001b\[\d\d?m/g, "").length + 1
                        );
                      }, 0) > 60
                    )
                      return (
                        n[0] +
                        ("" === e ? "" : e + "\n ") +
                        " " +
                        t.join(",\n  ") +
                        " " +
                        n[1]
                      );
                    return n[0] + e + " " + t.join(", ") + " " + n[1];
                  })(c, w, S))
              : S[0] + w + S[1]
          );
        }
        function h(t) {
          return "[" + Error.prototype.toString.call(t) + "]";
        }
        function f(t, e, n, r, i, o) {
          var s, a, u;
          if (
            ((u = Object.getOwnPropertyDescriptor(e, i) || { value: e[i] }).get
              ? (a = u.set
                  ? t.stylize("[Getter/Setter]", "special")
                  : t.stylize("[Getter]", "special"))
              : u.set && (a = t.stylize("[Setter]", "special")),
            A(r, i) || (s = "[" + i + "]"),
            a ||
              (t.seen.indexOf(u.value) < 0
                ? (a = v(n)
                    ? l(t, u.value, null)
                    : l(t, u.value, n - 1)).indexOf("\n") > -1 &&
                  (a = o
                    ? a
                        .split("\n")
                        .map(function (t) {
                          return "  " + t;
                        })
                        .join("\n")
                        .substr(2)
                    : "\n" +
                      a
                        .split("\n")
                        .map(function (t) {
                          return "   " + t;
                        })
                        .join("\n"))
                : (a = t.stylize("[Circular]", "special"))),
            g(s))
          ) {
            if (o && i.match(/^\d+$/)) return a;
            (s = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
              ? ((s = s.substr(1, s.length - 2)), (s = t.stylize(s, "name")))
              : ((s = s
                  .replace(/'/g, "\\'")
                  .replace(/\\"/g, '"')
                  .replace(/(^"|"$)/g, "'")),
                (s = t.stylize(s, "string")));
          }
          return s + ": " + a;
        }
        function d(t) {
          return Array.isArray(t);
        }
        function p(t) {
          return "boolean" === typeof t;
        }
        function v(t) {
          return null === t;
        }
        function b(t) {
          return "number" === typeof t;
        }
        function y(t) {
          return "string" === typeof t;
        }
        function g(t) {
          return void 0 === t;
        }
        function m(t) {
          return w(t) && "[object RegExp]" === E(t);
        }
        function w(t) {
          return "object" === typeof t && null !== t;
        }
        function _(t) {
          return w(t) && "[object Date]" === E(t);
        }
        function k(t) {
          return w(t) && ("[object Error]" === E(t) || t instanceof Error);
        }
        function x(t) {
          return "function" === typeof t;
        }
        function E(t) {
          return Object.prototype.toString.call(t);
        }
        function S(t) {
          return t < 10 ? "0" + t.toString(10) : t.toString(10);
        }
        (e.debuglog = function (n) {
          if (
            (g(o) &&
              (o =
                Object({
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                  REACT_APP_INFURA_KEY: "9428ad2ad11d4b54b6c20b88993e4598",
                  REACT_APP_PORTIS_ID: "",
                  REACT_APP_FORTMATIC_KEY: "",
                  REACT_APP_GOOGLE_ANALYTICS_ID: "",
                  REACT_APP_FIREBASE_KEY: "",
                  REACT_APP_IS_PRODUCTION_DEPLOY: "true",
                  REACT_APP_NETWORK_URL:
                    "https://mainnet.infura.io/v3/9428ad2ad11d4b54b6c20b88993e4598",
                  REACT_APP_CHAIN_ID: "1",
                }).NODE_DEBUG || ""),
            (n = n.toUpperCase()),
            !s[n])
          )
            if (new RegExp("\\b" + n + "\\b", "i").test(o)) {
              var r = t.pid;
              s[n] = function () {
                var t = e.format.apply(e, arguments);
                console.error("%s %d: %s", n, r, t);
              };
            } else s[n] = function () {};
          return s[n];
        }),
          (e.inspect = a),
          (a.colors = {
            bold: [1, 22],
            italic: [3, 23],
            underline: [4, 24],
            inverse: [7, 27],
            white: [37, 39],
            grey: [90, 39],
            black: [30, 39],
            blue: [34, 39],
            cyan: [36, 39],
            green: [32, 39],
            magenta: [35, 39],
            red: [31, 39],
            yellow: [33, 39],
          }),
          (a.styles = {
            special: "cyan",
            number: "yellow",
            boolean: "yellow",
            undefined: "grey",
            null: "bold",
            string: "green",
            date: "magenta",
            regexp: "red",
          }),
          (e.isArray = d),
          (e.isBoolean = p),
          (e.isNull = v),
          (e.isNullOrUndefined = function (t) {
            return null == t;
          }),
          (e.isNumber = b),
          (e.isString = y),
          (e.isSymbol = function (t) {
            return "symbol" === typeof t;
          }),
          (e.isUndefined = g),
          (e.isRegExp = m),
          (e.isObject = w),
          (e.isDate = _),
          (e.isError = k),
          (e.isFunction = x),
          (e.isPrimitive = function (t) {
            return (
              null === t ||
              "boolean" === typeof t ||
              "number" === typeof t ||
              "string" === typeof t ||
              "symbol" === typeof t ||
              "undefined" === typeof t
            );
          }),
          (e.isBuffer = n(1243));
        var M = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
        function C() {
          var t = new Date(),
            e = [S(t.getHours()), S(t.getMinutes()), S(t.getSeconds())].join(
              ":"
            );
          return [t.getDate(), M[t.getMonth()], e].join(" ");
        }
        function A(t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }
        (e.log = function () {
          console.log("%s - %s", C(), e.format.apply(e, arguments));
        }),
          (e.inherits = n(1244)),
          (e._extend = function (t, e) {
            if (!e || !w(e)) return t;
            for (var n = Object.keys(e), r = n.length; r--; ) t[n[r]] = e[n[r]];
            return t;
          });
        var R =
          "undefined" !== typeof Symbol
            ? Symbol("util.promisify.custom")
            : void 0;
        function O(t, e) {
          if (!t) {
            var n = new Error("Promise was rejected with a falsy value");
            (n.reason = t), (t = n);
          }
          return e(t);
        }
        (e.promisify = function (t) {
          if ("function" !== typeof t)
            throw new TypeError(
              'The "original" argument must be of type Function'
            );
          if (R && t[R]) {
            var e;
            if ("function" !== typeof (e = t[R]))
              throw new TypeError(
                'The "util.promisify.custom" argument must be of type Function'
              );
            return (
              Object.defineProperty(e, R, {
                value: e,
                enumerable: !1,
                writable: !1,
                configurable: !0,
              }),
              e
            );
          }
          function e() {
            for (
              var e,
                n,
                r = new Promise(function (t, r) {
                  (e = t), (n = r);
                }),
                i = [],
                o = 0;
              o < arguments.length;
              o++
            )
              i.push(arguments[o]);
            i.push(function (t, r) {
              t ? n(t) : e(r);
            });
            try {
              t.apply(this, i);
            } catch (s) {
              n(s);
            }
            return r;
          }
          return (
            Object.setPrototypeOf(e, Object.getPrototypeOf(t)),
            R &&
              Object.defineProperty(e, R, {
                value: e,
                enumerable: !1,
                writable: !1,
                configurable: !0,
              }),
            Object.defineProperties(e, r(t))
          );
        }),
          (e.promisify.custom = R),
          (e.callbackify = function (e) {
            if ("function" !== typeof e)
              throw new TypeError(
                'The "original" argument must be of type Function'
              );
            function n() {
              for (var n = [], r = 0; r < arguments.length; r++)
                n.push(arguments[r]);
              var i = n.pop();
              if ("function" !== typeof i)
                throw new TypeError(
                  "The last argument must be of type Function"
                );
              var o = this,
                s = function () {
                  return i.apply(o, arguments);
                };
              e.apply(this, n).then(
                function (e) {
                  t.nextTick(s, null, e);
                },
                function (e) {
                  t.nextTick(O, e, s);
                }
              );
            }
            return (
              Object.setPrototypeOf(n, Object.getPrototypeOf(e)),
              Object.defineProperties(n, r(e)),
              n
            );
          });
      }.call(this, n(72)));
    },
    1243: function (t, e) {
      t.exports = function (t) {
        return (
          t &&
          "object" === typeof t &&
          "function" === typeof t.copy &&
          "function" === typeof t.fill &&
          "function" === typeof t.readUInt8
        );
      };
    },
    1244: function (t, e) {
      "function" === typeof Object.create
        ? (t.exports = function (t, e) {
            (t.super_ = e),
              (t.prototype = Object.create(e.prototype, {
                constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              }));
          })
        : (t.exports = function (t, e) {
            t.super_ = e;
            var n = function () {};
            (n.prototype = e.prototype),
              (t.prototype = new n()),
              (t.prototype.constructor = t);
          });
    },
    1245: function (t, e, n) {
      var r = n(2),
        i = n(168),
        o = n(1015).default,
        s = n(1130),
        a = n(1131).createAsyncMiddleware,
        u = n(1253),
        c = n(1009),
        l = c.unsafeRandomBytes,
        h = c.incrementHexInt,
        f = n(1070);
      function d(t) {
        return {
          hash: t.hash,
          parentHash: t.parentHash,
          sha3Uncles: t.sha3Uncles,
          miner: t.miner,
          stateRoot: t.stateRoot,
          transactionsRoot: t.transactionsRoot,
          receiptsRoot: t.receiptsRoot,
          logsBloom: t.logsBloom,
          difficulty: t.difficulty,
          number: t.number,
          gasLimit: t.gasLimit,
          gasUsed: t.gasUsed,
          nonce: t.nonce,
          mixHash: t.mixHash,
          timestamp: t.timestamp,
          extraData: t.extraData,
        };
      }
      t.exports = function (t) {
        var e = t.blockTracker,
          n = t.provider,
          c = {},
          p = u({ blockTracker: e, provider: n }),
          v = !1,
          b = new o(),
          y = s({
            eth_subscribe: a(function (t, e) {
              return g.apply(this, arguments);
            }),
            eth_unsubscribe: a(function (t, e) {
              return m.apply(this, arguments);
            }),
          });
        return (
          (y.destroy = function () {
            for (var t in (b.removeAllListeners(), c))
              c[t].destroy(), delete c[t];
            v = !0;
          }),
          { events: b, middleware: y }
        );
        function g() {
          return (
            (g = i(
              r.mark(function t(o, s) {
                var a, u, b, y, g, m, _;
                return r.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          ((_ = function (t) {
                            var e = t.subId,
                              n = t.filter;
                            n.on("update", function (t) {
                              return w(e, t);
                            });
                            var o = {
                              type: a,
                              destroy: (function () {
                                var t = i(
                                  r.mark(function t() {
                                    return r.wrap(function (t) {
                                      for (;;)
                                        switch ((t.prev = t.next)) {
                                          case 0:
                                            return (
                                              (t.next = 2),
                                              p.uninstallFilter(n.idHex)
                                            );
                                          case 2:
                                            return t.abrupt("return", t.sent);
                                          case 3:
                                          case "end":
                                            return t.stop();
                                        }
                                    }, t);
                                  })
                                );
                                return function () {
                                  return t.apply(this, arguments);
                                };
                              })(),
                            };
                            return o;
                          }),
                          (m = function (t) {
                            var o = t.subId,
                              s = {
                                type: a,
                                destroy: (function () {
                                  var t = i(
                                    r.mark(function t() {
                                      return r.wrap(function (t) {
                                        for (;;)
                                          switch ((t.prev = t.next)) {
                                            case 0:
                                              e.removeListener(
                                                "sync",
                                                s.update
                                              );
                                            case 1:
                                            case "end":
                                              return t.stop();
                                          }
                                      }, t);
                                    })
                                  );
                                  return function () {
                                    return t.apply(this, arguments);
                                  };
                                })(),
                                update: (function () {
                                  var t = i(
                                    r.mark(function t(e) {
                                      var i, s, a, u, c;
                                      return r.wrap(function (t) {
                                        for (;;)
                                          switch ((t.prev = t.next)) {
                                            case 0:
                                              return (
                                                (i = e.oldBlock),
                                                (s = e.newBlock),
                                                (a = s),
                                                (u = h(i)),
                                                (t.next = 5),
                                                f({
                                                  provider: n,
                                                  fromBlock: u,
                                                  toBlock: a,
                                                })
                                              );
                                            case 5:
                                              (c = t.sent),
                                                c.map(d).forEach(function (t) {
                                                  w(o, t);
                                                });
                                            case 8:
                                            case "end":
                                              return t.stop();
                                          }
                                      }, t);
                                    })
                                  );
                                  return function (e) {
                                    return t.apply(this, arguments);
                                  };
                                })(),
                              };
                            return e.on("sync", s.update), s;
                          }),
                          !v)
                        ) {
                          t.next = 4;
                          break;
                        }
                        throw new Error(
                          "SubscriptionManager - attempting to use after destroying"
                        );
                      case 4:
                        (a = o.params[0]),
                          (u = l(16)),
                          (t.t0 = a),
                          (t.next =
                            "newHeads" === t.t0
                              ? 9
                              : "logs" === t.t0
                              ? 11
                              : 17);
                        break;
                      case 9:
                        return (b = m({ subId: u })), t.abrupt("break", 18);
                      case 11:
                        return (
                          (y = o.params[1]), (t.next = 14), p.newLogFilter(y)
                        );
                      case 14:
                        return (
                          (g = t.sent),
                          (b = _({ subId: u, filter: g })),
                          t.abrupt("break", 18)
                        );
                      case 17:
                        throw new Error(
                          'SubscriptionManager - unsupported subscription type "'.concat(
                            a,
                            '"'
                          )
                        );
                      case 18:
                        return (c[u] = b), (s.result = u), t.abrupt("return");
                      case 21:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )),
            g.apply(this, arguments)
          );
        }
        function m() {
          return (m = i(
            r.mark(function t(e, n) {
              var i, o;
              return r.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (!v) {
                        t.next = 2;
                        break;
                      }
                      throw new Error(
                        "SubscriptionManager - attempting to use after destroying"
                      );
                    case 2:
                      if (((i = e.params[0]), (o = c[i]))) {
                        t.next = 7;
                        break;
                      }
                      return (n.result = !1), t.abrupt("return");
                    case 7:
                      return delete c[i], (t.next = 10), o.destroy();
                    case 10:
                      n.result = !0;
                    case 11:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )).apply(this, arguments);
        }
        function w(t, e) {
          b.emit("notification", {
            jsonrpc: "2.0",
            method: "eth_subscription",
            params: { subscription: t, result: e },
          });
        }
      };
    },
    1246: function (t, e) {
      t.exports = function (t) {
        return function (e, n, r, i) {
          var o = t[e.method];
          return void 0 === o
            ? r()
            : "function" === typeof o
            ? o(e, n, r, i)
            : ((n.result = o), i());
        };
      };
    },
    1247: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.createIdRemapMiddleware = void 0);
      var r = n(1132);
      e.createIdRemapMiddleware = function () {
        return function (t, e, n, i) {
          var o = t.id,
            s = r.getUniqueId();
          (t.id = s),
            (e.id = s),
            n(function (n) {
              (t.id = o), (e.id = o), n();
            });
        };
      };
    },
    1248: function (t, e, n) {
      "use strict";
      var r = n(2),
        i = n(168);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.createAsyncMiddleware = void 0),
        (e.createAsyncMiddleware = function (t) {
          return (function () {
            var e = i(
              r.mark(function e(n, o, s, a) {
                var u, c, l, h, f;
                return r.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (c = new Promise(function (t) {
                              u = t;
                            })),
                            (l = null),
                            (h = !1),
                            (f = (function () {
                              var t = i(
                                r.mark(function t() {
                                  return r.wrap(function (t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          return (
                                            (h = !0),
                                            s(function (t) {
                                              (l = t), u();
                                            }),
                                            (t.next = 4),
                                            c
                                          );
                                        case 4:
                                        case "end":
                                          return t.stop();
                                      }
                                  }, t);
                                })
                              );
                              return function () {
                                return t.apply(this, arguments);
                              };
                            })()),
                            (e.prev = 4),
                            (e.next = 7),
                            t(n, o, f)
                          );
                        case 7:
                          if (!h) {
                            e.next = 13;
                            break;
                          }
                          return (e.next = 10), c;
                        case 10:
                          l(null), (e.next = 14);
                          break;
                        case 13:
                          a(null);
                        case 14:
                          e.next = 19;
                          break;
                        case 16:
                          (e.prev = 16),
                            (e.t0 = e.catch(4)),
                            l ? l(e.t0) : a(e.t0);
                        case 19:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[4, 16]]
                );
              })
            );
            return function (t, n, r, i) {
              return e.apply(this, arguments);
            };
          })();
        });
    },
    1249: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.createScaffoldMiddleware = void 0),
        (e.createScaffoldMiddleware = function (t) {
          return function (e, n, r, i) {
            var o = t[e.method];
            return void 0 === o
              ? r()
              : "function" === typeof o
              ? o(e, n, r, i)
              : ((n.result = o), i());
          };
        });
    },
    1250: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.getMessageFromCode =
          e.serializeError =
          e.EthereumProviderError =
          e.EthereumRpcError =
          e.ethErrors =
          e.errorCodes =
            void 0);
      var r = n(1067);
      Object.defineProperty(e, "EthereumRpcError", {
        enumerable: !0,
        get: function () {
          return r.EthereumRpcError;
        },
      }),
        Object.defineProperty(e, "EthereumProviderError", {
          enumerable: !0,
          get: function () {
            return r.EthereumProviderError;
          },
        });
      var i = n(1134);
      Object.defineProperty(e, "serializeError", {
        enumerable: !0,
        get: function () {
          return i.serializeError;
        },
      }),
        Object.defineProperty(e, "getMessageFromCode", {
          enumerable: !0,
          get: function () {
            return i.getMessageFromCode;
          },
        });
      var o = n(1251);
      Object.defineProperty(e, "ethErrors", {
        enumerable: !0,
        get: function () {
          return o.ethErrors;
        },
      });
      var s = n(1068);
      Object.defineProperty(e, "errorCodes", {
        enumerable: !0,
        get: function () {
          return s.errorCodes;
        },
      });
    },
    1251: function (t, e, n) {
      "use strict";
      var r = n(231);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.ethErrors = void 0);
      var i = n(1067),
        o = n(1134),
        s = n(1068);
      function a(t, e) {
        var n = c(e),
          s = r(n, 2),
          a = s[0],
          u = s[1];
        return new i.EthereumRpcError(t, a || o.getMessageFromCode(t), u);
      }
      function u(t, e) {
        var n = c(e),
          s = r(n, 2),
          a = s[0],
          u = s[1];
        return new i.EthereumProviderError(t, a || o.getMessageFromCode(t), u);
      }
      function c(t) {
        if (t) {
          if ("string" === typeof t) return [t];
          if ("object" === typeof t && !Array.isArray(t)) {
            var e = t.message,
              n = t.data;
            if (e && "string" !== typeof e)
              throw new Error("Must specify string message.");
            return [e || void 0, n];
          }
        }
        return [];
      }
      e.ethErrors = {
        rpc: {
          parse: function (t) {
            return a(s.errorCodes.rpc.parse, t);
          },
          invalidRequest: function (t) {
            return a(s.errorCodes.rpc.invalidRequest, t);
          },
          invalidParams: function (t) {
            return a(s.errorCodes.rpc.invalidParams, t);
          },
          methodNotFound: function (t) {
            return a(s.errorCodes.rpc.methodNotFound, t);
          },
          internal: function (t) {
            return a(s.errorCodes.rpc.internal, t);
          },
          server: function (t) {
            if (!t || "object" !== typeof t || Array.isArray(t))
              throw new Error(
                "Ethereum RPC Server errors must provide single object argument."
              );
            var e = t.code;
            if (!Number.isInteger(e) || e > -32005 || e < -32099)
              throw new Error(
                '"code" must be an integer such that: -32099 <= code <= -32005'
              );
            return a(e, t);
          },
          invalidInput: function (t) {
            return a(s.errorCodes.rpc.invalidInput, t);
          },
          resourceNotFound: function (t) {
            return a(s.errorCodes.rpc.resourceNotFound, t);
          },
          resourceUnavailable: function (t) {
            return a(s.errorCodes.rpc.resourceUnavailable, t);
          },
          transactionRejected: function (t) {
            return a(s.errorCodes.rpc.transactionRejected, t);
          },
          methodNotSupported: function (t) {
            return a(s.errorCodes.rpc.methodNotSupported, t);
          },
          limitExceeded: function (t) {
            return a(s.errorCodes.rpc.limitExceeded, t);
          },
        },
        provider: {
          userRejectedRequest: function (t) {
            return u(s.errorCodes.provider.userRejectedRequest, t);
          },
          unauthorized: function (t) {
            return u(s.errorCodes.provider.unauthorized, t);
          },
          unsupportedMethod: function (t) {
            return u(s.errorCodes.provider.unsupportedMethod, t);
          },
          disconnected: function (t) {
            return u(s.errorCodes.provider.disconnected, t);
          },
          chainDisconnected: function (t) {
            return u(s.errorCodes.provider.chainDisconnected, t);
          },
          custom: function (t) {
            if (!t || "object" !== typeof t || Array.isArray(t))
              throw new Error(
                "Ethereum Provider custom errors must provide single object argument."
              );
            var e = t.code,
              n = t.message,
              r = t.data;
            if (!n || "string" !== typeof n)
              throw new Error('"message" must be a nonempty string');
            return new i.EthereumProviderError(e, n, r);
          },
        },
      };
    },
    1252: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.mergeMiddleware = void 0);
      var r = n(1133);
      e.mergeMiddleware = function (t) {
        var e = new r.JsonRpcEngine();
        return (
          t.forEach(function (t) {
            return e.push(t);
          }),
          e.asMiddleware()
        );
      };
    },
    1253: function (t, e, n) {
      var r = n(2),
        i = n(168),
        o = n(1290).Mutex,
        s = n(1131).createAsyncMiddleware,
        a = n(1130),
        u = n(1254),
        c = n(1257),
        l = n(1258),
        h = n(1009),
        f = h.intToHex,
        d = h.hexToInt;
      function p(t) {
        return v(
          i(
            r.mark(function e() {
              var n,
                i,
                o = arguments;
              return r.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), t.apply(void 0, o);
                    case 2:
                      return (n = e.sent), (i = f(n.id)), e.abrupt("return", i);
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )
        );
      }
      function v(t) {
        return s(
          (function () {
            var e = i(
              r.mark(function e(n, i) {
                var o;
                return r.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), t.apply(null, n.params);
                      case 2:
                        (o = e.sent), (i.result = o);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t, n) {
              return e.apply(this, arguments);
            };
          })()
        );
      }
      function b(t, e) {
        var n = [];
        for (var r in t) n.push(t[r]);
        return n;
      }
      t.exports = function (t) {
        var e = t.blockTracker,
          n = t.provider,
          s = 0,
          h = {},
          y = new o(),
          g = (function (t) {
            var e = t.mutex;
            return function (t) {
              return (function () {
                var n = i(
                  r.mark(function n(i, o, s, a) {
                    return r.wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (n.next = 2), e.acquire();
                          case 2:
                            (0, n.sent)(), t(i, o, s, a);
                          case 5:
                          case "end":
                            return n.stop();
                        }
                    }, n);
                  })
                );
                return function (t, e, r, i) {
                  return n.apply(this, arguments);
                };
              })();
            };
          })({ mutex: y }),
          m = a({
            eth_newFilter: g(p(_)),
            eth_newBlockFilter: g(p(x)),
            eth_newPendingTransactionFilter: g(p(S)),
            eth_uninstallFilter: g(v(I)),
            eth_getFilterChanges: g(v(C)),
            eth_getFilterLogs: g(v(R)),
          }),
          w = (function () {
            var t = i(
              r.mark(function t(e) {
                var n, o, s;
                return r.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((n = e.oldBlock), (o = e.newBlock), 0 !== h.length)
                          ) {
                            t.next = 3;
                            break;
                          }
                          return t.abrupt("return");
                        case 3:
                          return (t.next = 5), y.acquire();
                        case 5:
                          return (
                            (s = t.sent),
                            (t.prev = 6),
                            (t.next = 9),
                            Promise.all(
                              b(h).map(
                                (function () {
                                  var t = i(
                                    r.mark(function t(e) {
                                      return r.wrap(
                                        function (t) {
                                          for (;;)
                                            switch ((t.prev = t.next)) {
                                              case 0:
                                                return (
                                                  (t.prev = 0),
                                                  (t.next = 3),
                                                  e.update({
                                                    oldBlock: n,
                                                    newBlock: o,
                                                  })
                                                );
                                              case 3:
                                                t.next = 8;
                                                break;
                                              case 5:
                                                (t.prev = 5),
                                                  (t.t0 = t.catch(0)),
                                                  console.error(t.t0);
                                              case 8:
                                              case "end":
                                                return t.stop();
                                            }
                                        },
                                        t,
                                        null,
                                        [[0, 5]]
                                      );
                                    })
                                  );
                                  return function (e) {
                                    return t.apply(this, arguments);
                                  };
                                })()
                              )
                            )
                          );
                        case 9:
                          t.next = 14;
                          break;
                        case 11:
                          (t.prev = 11),
                            (t.t0 = t.catch(6)),
                            console.error(t.t0);
                        case 14:
                          s();
                        case 15:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[6, 11]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        return (
          (m.newLogFilter = _),
          (m.newBlockFilter = x),
          (m.newPendingTransactionFilter = S),
          (m.uninstallFilter = I),
          (m.getFilterChanges = C),
          (m.getFilterLogs = R),
          (m.destroy = function () {
            !(function () {
              D.apply(this, arguments);
            })();
          }),
          m
        );
        function _(t) {
          return k.apply(this, arguments);
        }
        function k() {
          return (k = i(
            r.mark(function t(e) {
              var i;
              return r.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (i = new u({ provider: n, params: e })),
                        (t.next = 3),
                        N(i)
                      );
                    case 3:
                      return t.sent, t.abrupt("return", i);
                    case 5:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )).apply(this, arguments);
        }
        function x() {
          return E.apply(this, arguments);
        }
        function E() {
          return (E = i(
            r.mark(function t() {
              var e;
              return r.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (e = new c({ provider: n })), (t.next = 3), N(e);
                    case 3:
                      return t.sent, t.abrupt("return", e);
                    case 5:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )).apply(this, arguments);
        }
        function S() {
          return M.apply(this, arguments);
        }
        function M() {
          return (M = i(
            r.mark(function t() {
              var e;
              return r.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (e = new l({ provider: n })), (t.next = 3), N(e);
                    case 3:
                      return t.sent, t.abrupt("return", e);
                    case 5:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )).apply(this, arguments);
        }
        function C(t) {
          return A.apply(this, arguments);
        }
        function A() {
          return (
            (A = i(
              r.mark(function t(e) {
                var n, i, o;
                return r.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (((n = d(e)), (i = h[n]))) {
                          t.next = 4;
                          break;
                        }
                        throw new Error('No filter for index "'.concat(n, '"'));
                      case 4:
                        return (
                          (o = i.getChangesAndClear()), t.abrupt("return", o)
                        );
                      case 6:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )),
            A.apply(this, arguments)
          );
        }
        function R(t) {
          return O.apply(this, arguments);
        }
        function O() {
          return (
            (O = i(
              r.mark(function t(e) {
                var n, i;
                return r.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (((n = d(e)), (i = h[n]))) {
                          t.next = 4;
                          break;
                        }
                        throw new Error('No filter for index "'.concat(n, '"'));
                      case 4:
                        return (
                          "log" === i.type
                            ? (results = i.getAllResults())
                            : (results = []),
                          t.abrupt("return", results)
                        );
                      case 6:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )),
            O.apply(this, arguments)
          );
        }
        function I(t) {
          return T.apply(this, arguments);
        }
        function T() {
          return (
            (T = i(
              r.mark(function t(e) {
                var n, i, o;
                return r.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (((n = d(e)), (i = h[n]), !(o = Boolean(i)))) {
                          t.next = 6;
                          break;
                        }
                        return (t.next = 6), L(n);
                      case 6:
                        return t.abrupt("return", o);
                      case 7:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )),
            T.apply(this, arguments)
          );
        }
        function N(t) {
          return j.apply(this, arguments);
        }
        function j() {
          return (j = i(
            r.mark(function t(n) {
              var i, o, a;
              return r.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (i = b(h).length), (t.next = 3), e.getLatestBlock()
                      );
                    case 3:
                      return (
                        (o = t.sent),
                        (t.next = 6),
                        n.initialize({ currentBlock: o })
                      );
                    case 6:
                      return (
                        s++,
                        (h[s] = n),
                        (n.id = s),
                        (n.idHex = f(s)),
                        (a = b(h).length),
                        B({ prevFilterCount: i, newFilterCount: a }),
                        t.abrupt("return", s)
                      );
                    case 13:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )).apply(this, arguments);
        }
        function L(t) {
          return P.apply(this, arguments);
        }
        function P() {
          return (
            (P = i(
              r.mark(function t(e) {
                var n, i;
                return r.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        (n = b(h).length),
                          delete h[e],
                          (i = b(h).length),
                          B({ prevFilterCount: n, newFilterCount: i });
                      case 4:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )),
            P.apply(this, arguments)
          );
        }
        function D() {
          return (D = i(
            r.mark(function t() {
              var e;
              return r.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      (e = b(h).length),
                        (h = {}),
                        B({ prevFilterCount: e, newFilterCount: 0 });
                    case 3:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )).apply(this, arguments);
        }
        function B(t) {
          var n = t.prevFilterCount,
            r = t.newFilterCount;
          0 === n && r > 0
            ? e.on("sync", w)
            : n > 0 && 0 === r && e.removeListener("sync", w);
        }
      };
    },
    1254: function (t, e, n) {
      var r = n(2),
        i = n(168),
        o = n(91),
        s = n(92),
        a = n(273),
        u = n(274),
        c = n(1129),
        l = n(1255),
        h = n(1256),
        f = n(1009),
        d = (f.bnToHex, f.hexToInt),
        p = f.incrementHexInt,
        v = f.minBlockRef,
        b = f.blockRefIsNumber,
        y = (function (t) {
          "use strict";
          a(n, t);
          var e = u(n);
          function n(t) {
            var r,
              i = t.provider,
              s = t.params;
            return (
              o(this, n),
              ((r = e.call(this)).type = "log"),
              (r.ethQuery = new c(i)),
              (r.params = Object.assign(
                {
                  fromBlock: "latest",
                  toBlock: "latest",
                  address: void 0,
                  topics: [],
                },
                s
              )),
              r.params.address &&
                (Array.isArray(r.params.address) ||
                  (r.params.address = [r.params.address]),
                (r.params.address = r.params.address.map(function (t) {
                  return t.toLowerCase();
                }))),
              r
            );
          }
          return (
            s(n, [
              {
                key: "initialize",
                value: (function () {
                  var t = i(
                    r.mark(function t(e) {
                      var n, i, o, s, a;
                      return r.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (n = e.currentBlock),
                                  (i = this.params.fromBlock),
                                  ["latest", "pending"].includes(i) && (i = n),
                                  "earliest" === i && (i = "0x0"),
                                  (this.params.fromBlock = i),
                                  (o = v(this.params.toBlock, n)),
                                  (s = Object.assign({}, this.params, {
                                    toBlock: o,
                                  })),
                                  (t.next = 9),
                                  this._fetchLogs(s)
                                );
                              case 9:
                                (a = t.sent), this.addInitialResults(a);
                              case 11:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "update",
                value: (function () {
                  var t = i(
                    r.mark(function t(e) {
                      var n,
                        i,
                        o,
                        s,
                        a,
                        u,
                        c,
                        l = this;
                      return r.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (n = e.oldBlock),
                                  (i = e.newBlock),
                                  (o = i),
                                  (s = n ? p(n) : i),
                                  (a = Object.assign({}, this.params, {
                                    fromBlock: s,
                                    toBlock: o,
                                  })),
                                  (t.next = 6),
                                  this._fetchLogs(a)
                                );
                              case 6:
                                (u = t.sent),
                                  (c = u.filter(function (t) {
                                    return l.matchLog(t);
                                  })),
                                  this.addResults(c);
                              case 9:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_fetchLogs",
                value: (function () {
                  var t = i(
                    r.mark(function t(e) {
                      var n,
                        i = this;
                      return r.wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.next = 2),
                                l(function (t) {
                                  return i.ethQuery.getLogs(e, t);
                                })()
                              );
                            case 2:
                              return (n = t.sent), t.abrupt("return", n);
                            case 4:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "matchLog",
                value: function (t) {
                  if (d(this.params.fromBlock) >= d(t.blockNumber)) return !1;
                  if (
                    b(this.params.toBlock) &&
                    d(this.params.toBlock) <= d(t.blockNumber)
                  )
                    return !1;
                  var e = t.address && t.address.toLowerCase();
                  return (
                    !(
                      this.params.address &&
                      e &&
                      !this.params.address.includes(e)
                    ) &&
                    this.params.topics.every(function (e, n) {
                      var r = t.topics[n];
                      if (!r) return !1;
                      r = r.toLowerCase();
                      var i = Array.isArray(e) ? e : [e];
                      return (
                        !!i.includes(null) ||
                        (i = i.map(function (t) {
                          return t.toLowerCase();
                        })).includes(r)
                      );
                    })
                  );
                },
              },
            ]),
            n
          );
        })(h);
      t.exports = y;
    },
    1255: function (t, e, n) {
      "use strict";
      var r = n(459),
        i = function (t, e, n, r) {
          return function () {
            for (
              var i = this, o = arguments.length, s = new Array(o), a = 0;
              a < o;
              a++
            )
              s[a] = arguments[a];
            var u = e.promiseModule;
            return new u(function (o, a) {
              e.multiArgs
                ? s.push(function () {
                    for (
                      var t = arguments.length, n = new Array(t), r = 0;
                      r < t;
                      r++
                    )
                      n[r] = arguments[r];
                    e.errorFirst ? (n[0] ? a(n) : (n.shift(), o(n))) : o(n);
                  })
                : e.errorFirst
                ? s.push(function (t, e) {
                    t ? a(t) : o(e);
                  })
                : s.push(o);
              var u = i === n ? r : i;
              Reflect.apply(t, u, s);
            });
          };
        },
        o = new WeakMap();
      t.exports = function (t, e) {
        e = r(
          {
            exclude: [/.+(?:Sync|Stream)$/],
            errorFirst: !0,
            promiseModule: Promise,
          },
          e
        );
        var n = typeof t;
        if (null === t || ("object" !== n && "function" !== n))
          throw new TypeError(
            "Expected `input` to be a `Function` or `Object`, got `".concat(
              null === t ? "null" : n,
              "`"
            )
          );
        var s = new WeakMap(),
          a = new Proxy(t, {
            apply: function (t, n, r) {
              var o = s.get(t);
              if (o) return Reflect.apply(o, n, r);
              var u = e.excludeMain ? t : i(t, e, a, t);
              return s.set(t, u), Reflect.apply(u, n, r);
            },
            get: function (t, n) {
              var r = t[n];
              if (
                !(function (t, n) {
                  var r = o.get(t);
                  if ((r || ((r = {}), o.set(t, r)), n in r)) return r[n];
                  var i = function (t) {
                      return "string" === typeof t || "symbol" === typeof n
                        ? n === t
                        : t.test(n);
                    },
                    s = Reflect.getOwnPropertyDescriptor(t, n),
                    a = void 0 === s || s.writable || s.configurable,
                    u =
                      (e.include ? e.include.some(i) : !e.exclude.some(i)) && a;
                  return (r[n] = u), u;
                })(t, n) ||
                r === Function.prototype[n]
              )
                return r;
              var u = s.get(r);
              if (u) return u;
              if ("function" === typeof r) {
                var c = i(r, e, a, t);
                return s.set(r, c), c;
              }
              return r;
            },
          });
        return a;
      };
    },
    1256: function (t, e, n) {
      var r = n(2),
        i = n(168),
        o = n(91),
        s = n(92),
        a = n(1012),
        u = n(454),
        c = n(273),
        l = n(274),
        h = (function (t) {
          "use strict";
          c(n, t);
          var e = l(n);
          function n() {
            var t;
            return o(this, n), ((t = e.call(this)).allResults = []), t;
          }
          return (
            s(n, [
              {
                key: "update",
                value: (function () {
                  var t = i(
                    r.mark(function t() {
                      return r.wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              throw new Error(
                                "BaseFilterWithHistory - no update method specified"
                              );
                            case 1:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "addResults",
                value: function (t) {
                  (this.allResults = this.allResults.concat(t)),
                    a(u(n.prototype), "addResults", this).call(this, t);
                },
              },
              {
                key: "addInitialResults",
                value: function (t) {
                  (this.allResults = this.allResults.concat(t)),
                    a(u(n.prototype), "addInitialResults", this).call(this, t);
                },
              },
              {
                key: "getAllResults",
                value: function () {
                  return this.allResults;
                },
              },
            ]),
            n
          );
        })(n(1069));
      t.exports = h;
    },
    1257: function (t, e, n) {
      var r = n(2),
        i = n(168),
        o = n(91),
        s = n(92),
        a = n(273),
        u = n(274),
        c = n(1069),
        l = n(1070),
        h = n(1009).incrementHexInt,
        f = (function (t) {
          "use strict";
          a(n, t);
          var e = u(n);
          function n(t) {
            var r,
              i = t.provider;
            t.params;
            return (
              o(this, n),
              ((r = e.call(this)).type = "block"),
              (r.provider = i),
              r
            );
          }
          return (
            s(n, [
              {
                key: "update",
                value: (function () {
                  var t = i(
                    r.mark(function t(e) {
                      var n, i, o, s, a, u;
                      return r.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (n = e.oldBlock),
                                  (i = e.newBlock),
                                  (o = i),
                                  (s = h(n)),
                                  (t.next = 5),
                                  l({
                                    provider: this.provider,
                                    fromBlock: s,
                                    toBlock: o,
                                  })
                                );
                              case 5:
                                (a = t.sent),
                                  (u = a.map(function (t) {
                                    return t.hash;
                                  })),
                                  this.addResults(u);
                              case 8:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
            ]),
            n
          );
        })(c);
      t.exports = f;
    },
    1258: function (t, e, n) {
      var r = n(2),
        i = n(453),
        o = n(232),
        s = n(168),
        a = n(91),
        u = n(92),
        c = n(273),
        l = n(274),
        h = n(1069),
        f = n(1070),
        d = n(1009).incrementHexInt,
        p = (function (t) {
          "use strict";
          c(n, t);
          var e = l(n);
          function n(t) {
            var r,
              i = t.provider;
            return (
              a(this, n), ((r = e.call(this)).type = "tx"), (r.provider = i), r
            );
          }
          return (
            u(n, [
              {
                key: "update",
                value: (function () {
                  var t = s(
                    r.mark(function t(e) {
                      var n, s, a, u, c, l, h, p;
                      return r.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (n = e.oldBlock),
                                  (s = n),
                                  (a = d(n)),
                                  (t.next = 5),
                                  f({
                                    provider: this.provider,
                                    fromBlock: a,
                                    toBlock: s,
                                  })
                                );
                              case 5:
                                (u = t.sent), (c = []), (l = o(u));
                                try {
                                  for (l.s(); !(h = l.n()).done; )
                                    (p = h.value),
                                      c.push.apply(c, i(p.transactions));
                                } catch (r) {
                                  l.e(r);
                                } finally {
                                  l.f();
                                }
                                this.addResults(c);
                              case 10:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              },
            ]),
            n
          );
        })(h);
      t.exports = p;
    },
    1259: function (t, e, n) {
      "use strict";
      var r = n(91),
        i = n(92);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.ScopedLocalStorage = void 0);
      var o = (function () {
        function t(e) {
          r(this, t), (this.scope = e);
        }
        return (
          i(t, [
            {
              key: "setItem",
              value: function (t, e) {
                localStorage.setItem(this.scopedKey(t), e);
              },
            },
            {
              key: "getItem",
              value: function (t) {
                return localStorage.getItem(this.scopedKey(t));
              },
            },
            {
              key: "removeItem",
              value: function (t) {
                localStorage.removeItem(this.scopedKey(t));
              },
            },
            {
              key: "clear",
              value: function () {
                for (
                  var t = this.scopedKey(""), e = [], n = 0;
                  n < localStorage.length;
                  n++
                ) {
                  var r = localStorage.key(n);
                  "string" === typeof r && r.startsWith(t) && e.push(r);
                }
                e.forEach(function (t) {
                  return localStorage.removeItem(t);
                });
              },
            },
            {
              key: "scopedKey",
              value: function (t) {
                return "".concat(this.scope, ":").concat(t);
              },
            },
          ]),
          t
        );
      })();
      e.ScopedLocalStorage = o;
    },
    1260: function (t, e, n) {
      "use strict";
      var r = n(91),
        i = n(92),
        o = n(273),
        s = n(274);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.WalletLinkSdkUI = void 0);
      var a = n(1261),
        u = n(1272),
        c = n(1274),
        l = (function (t) {
          o(n, t);
          var e = s(n);
          function n(t) {
            var i;
            return (
              r(this, n),
              ((i = e.call(this, t)).attached = !1),
              (i.snackbar = new u.Snackbar({ darkMode: t.darkMode })),
              (i.linkFlow = new a.LinkFlow({
                darkMode: t.darkMode,
                version: t.version,
                sessionId: t.session.id,
                sessionSecret: t.session.secret,
                walletLinkUrl: t.walletLinkUrl,
                connected$: t.connected$,
                isParentConnection: !1,
              })),
              i
            );
          }
          return (
            i(n, [
              {
                key: "attach",
                value: function () {
                  if (this.attached)
                    throw new Error("WalletLinkUI is already attached");
                  var t = document.documentElement,
                    e = document.createElement("div");
                  (e.className = "-walletlink-css-reset"),
                    t.appendChild(e),
                    this.linkFlow.attach(e),
                    this.snackbar.attach(e),
                    (this.attached = !0),
                    (0, c.injectCssReset)();
                },
              },
              {
                key: "setConnectDisabled",
                value: function (t) {
                  this.linkFlow.setConnectDisabled(t);
                },
              },
              { key: "addEthereumChain", value: function (t) {} },
              { key: "switchEthereumChain", value: function (t) {} },
              {
                key: "requestEthereumAccounts",
                value: function (t) {
                  this.linkFlow.open({ onCancel: t.onCancel });
                },
              },
              {
                key: "hideRequestEthereumAccounts",
                value: function () {
                  this.linkFlow.close();
                },
              },
              { key: "signEthereumMessage", value: function (t) {} },
              { key: "signEthereumTransaction", value: function (t) {} },
              { key: "submitEthereumTransaction", value: function (t) {} },
              {
                key: "ethereumAddressFromSignedMessage",
                value: function (t) {},
              },
              {
                key: "showConnecting",
                value: function (t) {
                  var e;
                  return (
                    (e = t.isUnlinkedErrorState
                      ? {
                          autoExpand: !0,
                          message: "Connection lost",
                          menuItems: [
                            {
                              isRed: !1,
                              info: "Reset connection",
                              svgWidth: "10",
                              svgHeight: "11",
                              path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                              defaultFillRule: "evenodd",
                              defaultClipRule: "evenodd",
                              onClick: t.onResetConnection,
                            },
                          ],
                        }
                      : {
                          message: "Confirm on phone",
                          menuItems: [
                            {
                              isRed: !0,
                              info: "Cancel transaction",
                              svgWidth: "11",
                              svgHeight: "11",
                              path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
                              defaultFillRule: "inherit",
                              defaultClipRule: "inherit",
                              onClick: t.onCancel,
                            },
                            {
                              isRed: !1,
                              info: "Reset connection",
                              svgWidth: "10",
                              svgHeight: "11",
                              path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                              defaultFillRule: "evenodd",
                              defaultClipRule: "evenodd",
                              onClick: t.onResetConnection,
                            },
                          ],
                        }),
                    this.snackbar.presentItem(e)
                  );
                },
              },
              {
                key: "reloadUI",
                value: function () {
                  document.location.reload();
                },
              },
              {
                key: "inlineAccountsResponse",
                value: function () {
                  return !1;
                },
              },
              {
                key: "inlineAddEthereumChain",
                value: function (t) {
                  return !1;
                },
              },
              {
                key: "inlineSwitchEthereumChain",
                value: function () {
                  return !1;
                },
              },
              {
                key: "isStandalone",
                value: function () {
                  return !1;
                },
              },
            ]),
            n
          );
        })(n(1276).WalletLinkUI);
      e.WalletLinkSdkUI = l;
    },
    1261: function (t, e, n) {
      "use strict";
      var r = n(91),
        i = n(92);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.LinkFlow = void 0);
      var o = n(987),
        s = n(997),
        a = n(1010),
        u = n(1262),
        c = n(1266),
        l = (function () {
          function t(e) {
            var n = this;
            r(this, t),
              (this.extensionUI$ = new s.BehaviorSubject({})),
              (this.subscriptions = new s.Subscription()),
              (this.isConnected = !1),
              (this.isOpen = !1),
              (this.onCancel = null),
              (this.root = null),
              (this.connectDisabled = !1),
              (this.darkMode = e.darkMode),
              (this.version = e.version),
              (this.sessionId = e.sessionId),
              (this.sessionSecret = e.sessionSecret),
              (this.walletLinkUrl = e.walletLinkUrl),
              (this.isParentConnection = e.isParentConnection),
              (this.connected$ = e.connected$),
              fetch("https://api.wallet.coinbase.com/rpc/v2/getFeatureFlags")
                .then(function (t) {
                  return t.json();
                })
                .then(function (t) {
                  var e = t.result.desktop.extension_ui;
                  "undefined" === typeof e
                    ? n.extensionUI$.next({ value: !1 })
                    : n.extensionUI$.next({ value: e });
                })
                .catch(function (t) {
                  console.error("Couldn't fetch feature flags - ", t),
                    n.extensionUI$.next({ value: !1 });
                });
          }
          return (
            i(t, [
              {
                key: "attach",
                value: function (t) {
                  var e = this;
                  (this.root = document.createElement("div")),
                    (this.root.className = "-walletlink-link-flow-root"),
                    t.appendChild(this.root),
                    this.render(),
                    this.subscriptions.add(
                      this.connected$.subscribe(function (t) {
                        e.isConnected !== t &&
                          ((e.isConnected = t), e.render());
                      })
                    );
                },
              },
              {
                key: "detach",
                value: function () {
                  var t;
                  this.root &&
                    (this.subscriptions.unsubscribe(),
                    (0, o.render)(null, this.root),
                    null === (t = this.root.parentElement) ||
                      void 0 === t ||
                      t.removeChild(this.root));
                },
              },
              {
                key: "setConnectDisabled",
                value: function (t) {
                  this.connectDisabled = t;
                },
              },
              {
                key: "open",
                value: function (t) {
                  (this.isOpen = !0),
                    (this.onCancel = t.onCancel),
                    this.render();
                },
              },
              {
                key: "close",
                value: function () {
                  (this.isOpen = !1), (this.onCancel = null), this.render();
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this;
                  if (this.root) {
                    var e = this.extensionUI$
                      .pipe(
                        (0, a.first)(function (t) {
                          return void 0 !== t.value;
                        })
                      )
                      .subscribe(function (e) {
                        t.root &&
                          (0, o.render)(
                            e.value
                              ? (0, o.h)(c.TryExtensionLinkDialog, {
                                  darkMode: t.darkMode,
                                  version: t.version,
                                  sessionId: t.sessionId,
                                  sessionSecret: t.sessionSecret,
                                  walletLinkUrl: t.walletLinkUrl,
                                  isOpen: t.isOpen,
                                  isConnected: t.isConnected,
                                  isParentConnection: t.isParentConnection,
                                  onCancel: t.onCancel,
                                  connectDisabled: t.connectDisabled,
                                })
                              : (0, o.h)(u.LinkDialog, {
                                  darkMode: t.darkMode,
                                  version: t.version,
                                  sessionId: t.sessionId,
                                  sessionSecret: t.sessionSecret,
                                  walletLinkUrl: t.walletLinkUrl,
                                  isOpen: t.isOpen,
                                  isConnected: t.isConnected,
                                  isParentConnection: t.isParentConnection,
                                  onCancel: t.onCancel,
                                }),
                            t.root
                          );
                      });
                    this.subscriptions.add(e);
                  }
                },
              },
            ]),
            t
          );
        })();
      e.LinkFlow = l;
    },
    1262: function (t, e, n) {
      "use strict";
      var r = n(231),
        i =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.LinkDialog = void 0);
      var o = i(n(1071)),
        s = n(987),
        a = n(1028),
        u = i(n(1263)),
        c = n(1136),
        l = n(1137);
      e.LinkDialog = function (t) {
        var e = (0, a.useState)(!t.isOpen),
          n = r(e, 2),
          i = n[0],
          c = n[1],
          l = (0, a.useState)(!t.isOpen),
          d = r(l, 2),
          p = d[0],
          v = d[1];
        return (
          (0, a.useEffect)(
            function () {
              var e = t.isOpen,
                n = [
                  window.setTimeout(function () {
                    v(!e);
                  }, 10),
                ];
              return (
                e
                  ? c(!1)
                  : n.push(
                      window.setTimeout(function () {
                        c(!0);
                      }, 360)
                    ),
                function () {
                  n.forEach(window.clearTimeout);
                }
              );
            },
            [t.isOpen]
          ),
          (0, s.h)(
            "div",
            {
              class: (0, o.default)(
                "-walletlink-link-dialog-container",
                t.darkMode && "-walletlink-link-dialog-container-dark",
                i && "-walletlink-link-dialog-container-hidden"
              ),
            },
            (0, s.h)("style", null, u.default),
            (0, s.h)("div", {
              class: (0, o.default)(
                "-walletlink-link-dialog-backdrop",
                p && "-walletlink-link-dialog-backdrop-hidden"
              ),
            }),
            (0, s.h)(
              "div",
              { class: "-walletlink-link-dialog" },
              (0, s.h)(
                "div",
                {
                  class: (0, o.default)(
                    "-walletlink-link-dialog-box",
                    p && "-walletlink-link-dialog-box-hidden"
                  ),
                },
                (0, s.h)(h, {
                  darkMode: t.darkMode,
                  version: t.version,
                  sessionId: t.sessionId,
                  sessionSecret: t.sessionSecret,
                  walletLinkUrl: t.walletLinkUrl,
                  isConnected: t.isConnected,
                  isParentConnection: t.isParentConnection,
                }),
                t.onCancel && (0, s.h)(f, { onClick: t.onCancel })
              )
            )
          )
        );
      };
      var h = function (t) {
          var e = window.encodeURIComponent(t.walletLinkUrl),
            n = t.isParentConnection ? "parent-id" : "id",
            r = ""
              .concat(t.walletLinkUrl, "/#/link?")
              .concat(n, "=")
              .concat(t.sessionId, "&secret=")
              .concat(t.sessionSecret, "&server=")
              .concat(e, "&v=1");
          return (0, s.h)(
            "div",
            { class: "-walletlink-link-dialog-box-content" },
            (0, s.h)("h3", null, "Scan to", (0, s.h)("br", null), " Connect"),
            (0, s.h)(
              "div",
              { class: "-walletlink-link-dialog-box-content-qrcode" },
              (0, s.h)(
                "div",
                { class: "-walletlink-link-dialog-box-content-qrcode-wrapper" },
                (0, s.h)(c.QRCode, {
                  content: r,
                  width: 224,
                  height: 224,
                  fgColor: "#000",
                  bgColor: "transparent",
                })
              ),
              (0, s.h)("input", { type: "hidden", value: r }),
              !t.isConnected &&
                (0, s.h)(
                  "div",
                  {
                    class:
                      "-walletlink-link-dialog-box-content-qrcode-connecting",
                  },
                  (0, s.h)(l.Spinner, {
                    size: 128,
                    color: t.darkMode ? "#fff" : "#000",
                  }),
                  (0, s.h)("p", null, "Connecting...")
                ),
              (0, s.h)(
                "p",
                { title: "WalletLink v".concat(t.version) },
                "Powered by WalletLink"
              )
            ),
            (0, s.h)(
              "a",
              {
                href: "".concat(t.walletLinkUrl, "/#/wallets"),
                target: "_blank",
                rel: "noopener",
              },
              "Don\u2019t have a wallet app?"
            )
          );
        },
        f = function (t) {
          return (0, s.h)(
            "button",
            { class: "-walletlink-link-dialog-box-cancel", onClick: t.onClick },
            (0, s.h)("div", { class: "-walletlink-link-dialog-box-cancel-x" })
          );
        };
    },
    1263: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default =
          '.-walletlink-css-reset .-walletlink-link-dialog{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center}.-walletlink-css-reset .-walletlink-link-dialog-backdrop{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.33);transition:opacity .25s}.-walletlink-css-reset .-walletlink-link-dialog-backdrop-hidden{opacity:0}.-walletlink-css-reset .-walletlink-link-dialog-box{display:flex;position:relative;flex-direction:column;background-color:#f6f6f6;border-radius:16px;box-shadow:0px 16px 24px rgba(0,0,0,.1),0px 0px 8px rgba(0,0,0,.05);transform:scale(1);transition:opacity .25s,transform .25s;overflow:hidden}.-walletlink-css-reset .-walletlink-link-dialog-box-hidden{opacity:0;transform:scale(0.85)}.-walletlink-css-reset .-walletlink-link-dialog-box-content{padding:24px;text-align:center}.-walletlink-css-reset .-walletlink-link-dialog-box-content h3{display:block;margin-bottom:24px;text-align:left;text-transform:uppercase;font-size:22px;font-weight:bold;line-height:1.2;color:#000}.-walletlink-css-reset .-walletlink-link-dialog-box-content-qrcode{position:relative;display:block;margin-bottom:24px;background-color:#f6f6f6;padding:16px;border-radius:16px;box-shadow:4px 4px 8px rgba(0,0,0,.15),-8px -8px 8px #fff;overflow:hidden}.-walletlink-css-reset .-walletlink-link-dialog-box-content-qrcode-wrapper{display:block;width:232px;height:232px;padding:4px;border-radius:4px;background:#f4f4f4;margin-bottom:16px}.-walletlink-css-reset .-walletlink-link-dialog-box-content-qrcode-wrapper img{display:block;width:224px;height:224px}.-walletlink-css-reset .-walletlink-link-dialog-box-content-qrcode>p{display:block;color:gray;font-weight:bold;font-size:12px;text-align:center}.-walletlink-css-reset .-walletlink-link-dialog-box-content-qrcode-connecting{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(246,246,246,.98)}.-walletlink-css-reset .-walletlink-link-dialog-box-content-qrcode-connecting p{margin-top:16px;color:#333;font-size:12px;font-weight:bold}.-walletlink-css-reset .-walletlink-link-dialog-box-content a{text-align:center;cursor:pointer;transition:color .1s;font-size:14px}.-walletlink-css-reset .-walletlink-link-dialog-box-content a,.-walletlink-css-reset .-walletlink-link-dialog-box-content a:link,.-walletlink-css-reset .-walletlink-link-dialog-box-content a:visited{color:#999}.-walletlink-css-reset .-walletlink-link-dialog-box-content a:hover,.-walletlink-css-reset .-walletlink-link-dialog-box-content a:active{color:#666;text-decoration:underline}.-walletlink-css-reset .-walletlink-link-dialog-box-cancel{position:absolute;-webkit-appearance:none;display:flex;align-items:center;justify-content:center;top:24px;right:24px;width:24px;height:24px;border-radius:12px;background-color:#e7e7e7;cursor:pointer}.-walletlink-css-reset .-walletlink-link-dialog-box-cancel-x{position:relative;display:block}.-walletlink-css-reset .-walletlink-link-dialog-box-cancel-x::before,.-walletlink-css-reset .-walletlink-link-dialog-box-cancel-x::after{content:"";position:absolute;display:block;top:-1px;left:-7px;width:14px;height:2px;background-color:#999;transition:background-color .2s}.-walletlink-css-reset .-walletlink-link-dialog-box-cancel-x::before{transform:rotate(45deg)}.-walletlink-css-reset .-walletlink-link-dialog-box-cancel-x::after{transform:rotate(135deg)}.-walletlink-css-reset .-walletlink-link-dialog-box-cancel:hover .-walletlink-link-dialog-box-cancel-x-a,.-walletlink-css-reset .-walletlink-link-dialog-box-cancel:hover .-walletlink-link-dialog-box-cancel-x-b{background-color:#000}.-walletlink-css-reset .-walletlink-link-dialog-container{display:block}.-walletlink-css-reset .-walletlink-link-dialog-container-hidden{display:none}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box{background-color:#2a2a2a}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content h3{color:#ccc}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content-qrcode{background-color:#2a2a2a;box-shadow:4px 4px 8px rgba(0,0,0,.5),-8px -8px 8px #343434}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content-qrcode>p{color:#999}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content-qrcode-connecting{background:rgba(42,42,42,.98)}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content-qrcode-connecting p{color:#ddd}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content a,.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content a:link,.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content a:visited{color:#888}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content a:hover,.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content a:active{color:#aaa}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-cancel{background-color:#333}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-cancel-x::before,.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-cancel-x::after{background-color:#aaa}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-cancel:hover .-walletlink-link-dialog-box-cancel-x::before,.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-cancel:hover .-walletlink-link-dialog-box-cancel-x::after{background-color:#eee}');
    },
    1264: function (t, e) {
      function n(t) {
        (this.mode = i.MODE_8BIT_BYTE), (this.data = t), (this.parsedData = []);
        for (var e = 0, n = this.data.length; e < n; e++) {
          var r = [],
            o = this.data.charCodeAt(e);
          o > 65536
            ? ((r[0] = 240 | ((1835008 & o) >>> 18)),
              (r[1] = 128 | ((258048 & o) >>> 12)),
              (r[2] = 128 | ((4032 & o) >>> 6)),
              (r[3] = 128 | (63 & o)))
            : o > 2048
            ? ((r[0] = 224 | ((61440 & o) >>> 12)),
              (r[1] = 128 | ((4032 & o) >>> 6)),
              (r[2] = 128 | (63 & o)))
            : o > 128
            ? ((r[0] = 192 | ((1984 & o) >>> 6)), (r[1] = 128 | (63 & o)))
            : (r[0] = o),
            this.parsedData.push(r);
        }
        (this.parsedData = Array.prototype.concat.apply([], this.parsedData)),
          this.parsedData.length != this.data.length &&
            (this.parsedData.unshift(191),
            this.parsedData.unshift(187),
            this.parsedData.unshift(239));
      }
      function r(t, e) {
        (this.typeNumber = t),
          (this.errorCorrectLevel = e),
          (this.modules = null),
          (this.moduleCount = 0),
          (this.dataCache = null),
          (this.dataList = []);
      }
      (n.prototype = {
        getLength: function (t) {
          return this.parsedData.length;
        },
        write: function (t) {
          for (var e = 0, n = this.parsedData.length; e < n; e++)
            t.put(this.parsedData[e], 8);
        },
      }),
        (r.prototype = {
          addData: function (t) {
            var e = new n(t);
            this.dataList.push(e), (this.dataCache = null);
          },
          isDark: function (t, e) {
            if (
              t < 0 ||
              this.moduleCount <= t ||
              e < 0 ||
              this.moduleCount <= e
            )
              throw new Error(t + "," + e);
            return this.modules[t][e];
          },
          getModuleCount: function () {
            return this.moduleCount;
          },
          make: function () {
            this.makeImpl(!1, this.getBestMaskPattern());
          },
          makeImpl: function (t, e) {
            (this.moduleCount = 4 * this.typeNumber + 17),
              (this.modules = new Array(this.moduleCount));
            for (var n = 0; n < this.moduleCount; n++) {
              this.modules[n] = new Array(this.moduleCount);
              for (var i = 0; i < this.moduleCount; i++)
                this.modules[n][i] = null;
            }
            this.setupPositionProbePattern(0, 0),
              this.setupPositionProbePattern(this.moduleCount - 7, 0),
              this.setupPositionProbePattern(0, this.moduleCount - 7),
              this.setupPositionAdjustPattern(),
              this.setupTimingPattern(),
              this.setupTypeInfo(t, e),
              this.typeNumber >= 7 && this.setupTypeNumber(t),
              null == this.dataCache &&
                (this.dataCache = r.createData(
                  this.typeNumber,
                  this.errorCorrectLevel,
                  this.dataList
                )),
              this.mapData(this.dataCache, e);
          },
          setupPositionProbePattern: function (t, e) {
            for (var n = -1; n <= 7; n++)
              if (!(t + n <= -1 || this.moduleCount <= t + n))
                for (var r = -1; r <= 7; r++)
                  e + r <= -1 ||
                    this.moduleCount <= e + r ||
                    (this.modules[t + n][e + r] =
                      (0 <= n && n <= 6 && (0 == r || 6 == r)) ||
                      (0 <= r && r <= 6 && (0 == n || 6 == n)) ||
                      (2 <= n && n <= 4 && 2 <= r && r <= 4));
          },
          getBestMaskPattern: function () {
            for (var t = 0, e = 0, n = 0; n < 8; n++) {
              this.makeImpl(!0, n);
              var r = y.getLostPoint(this);
              (0 == n || t > r) && ((t = r), (e = n));
            }
            return e;
          },
          createMovieClip: function (t, e, n) {
            var r = t.createEmptyMovieClip(e, n);
            this.make();
            for (var i = 0; i < this.modules.length; i++)
              for (var o = 1 * i, s = 0; s < this.modules[i].length; s++) {
                var a = 1 * s;
                this.modules[i][s] &&
                  (r.beginFill(0, 100),
                  r.moveTo(a, o),
                  r.lineTo(a + 1, o),
                  r.lineTo(a + 1, o + 1),
                  r.lineTo(a, o + 1),
                  r.endFill());
              }
            return r;
          },
          setupTimingPattern: function () {
            for (var t = 8; t < this.moduleCount - 8; t++)
              null == this.modules[t][6] && (this.modules[t][6] = t % 2 == 0);
            for (var e = 8; e < this.moduleCount - 8; e++)
              null == this.modules[6][e] && (this.modules[6][e] = e % 2 == 0);
          },
          setupPositionAdjustPattern: function () {
            for (
              var t = y.getPatternPosition(this.typeNumber), e = 0;
              e < t.length;
              e++
            )
              for (var n = 0; n < t.length; n++) {
                var r = t[e],
                  i = t[n];
                if (null == this.modules[r][i])
                  for (var o = -2; o <= 2; o++)
                    for (var s = -2; s <= 2; s++)
                      this.modules[r + o][i + s] =
                        -2 == o ||
                        2 == o ||
                        -2 == s ||
                        2 == s ||
                        (0 == o && 0 == s);
              }
          },
          setupTypeNumber: function (t) {
            for (
              var e = y.getBCHTypeNumber(this.typeNumber), n = 0;
              n < 18;
              n++
            ) {
              var r = !t && 1 == ((e >> n) & 1);
              this.modules[Math.floor(n / 3)][
                (n % 3) + this.moduleCount - 8 - 3
              ] = r;
            }
            for (n = 0; n < 18; n++) {
              r = !t && 1 == ((e >> n) & 1);
              this.modules[(n % 3) + this.moduleCount - 8 - 3][
                Math.floor(n / 3)
              ] = r;
            }
          },
          setupTypeInfo: function (t, e) {
            for (
              var n = (this.errorCorrectLevel << 3) | e,
                r = y.getBCHTypeInfo(n),
                i = 0;
              i < 15;
              i++
            ) {
              var o = !t && 1 == ((r >> i) & 1);
              i < 6
                ? (this.modules[i][8] = o)
                : i < 8
                ? (this.modules[i + 1][8] = o)
                : (this.modules[this.moduleCount - 15 + i][8] = o);
            }
            for (i = 0; i < 15; i++) {
              o = !t && 1 == ((r >> i) & 1);
              i < 8
                ? (this.modules[8][this.moduleCount - i - 1] = o)
                : i < 9
                ? (this.modules[8][15 - i - 1 + 1] = o)
                : (this.modules[8][15 - i - 1] = o);
            }
            this.modules[this.moduleCount - 8][8] = !t;
          },
          mapData: function (t, e) {
            for (
              var n = -1,
                r = this.moduleCount - 1,
                i = 7,
                o = 0,
                s = this.moduleCount - 1;
              s > 0;
              s -= 2
            )
              for (6 == s && s--; ; ) {
                for (var a = 0; a < 2; a++)
                  if (null == this.modules[r][s - a]) {
                    var u = !1;
                    o < t.length && (u = 1 == ((t[o] >>> i) & 1)),
                      y.getMask(e, r, s - a) && (u = !u),
                      (this.modules[r][s - a] = u),
                      -1 == --i && (o++, (i = 7));
                  }
                if ((r += n) < 0 || this.moduleCount <= r) {
                  (r -= n), (n = -n);
                  break;
                }
              }
          },
        }),
        (r.PAD0 = 236),
        (r.PAD1 = 17),
        (r.createData = function (t, e, n) {
          for (
            var i = _.getRSBlocks(t, e), o = new k(), s = 0;
            s < n.length;
            s++
          ) {
            var a = n[s];
            o.put(a.mode, 4),
              o.put(a.getLength(), y.getLengthInBits(a.mode, t)),
              a.write(o);
          }
          var u = 0;
          for (s = 0; s < i.length; s++) u += i[s].dataCount;
          if (o.getLengthInBits() > 8 * u)
            throw new Error(
              "code length overflow. (" +
                o.getLengthInBits() +
                ">" +
                8 * u +
                ")"
            );
          for (
            o.getLengthInBits() + 4 <= 8 * u && o.put(0, 4);
            o.getLengthInBits() % 8 != 0;

          )
            o.putBit(!1);
          for (
            ;
            !(o.getLengthInBits() >= 8 * u) &&
            (o.put(r.PAD0, 8), !(o.getLengthInBits() >= 8 * u));

          )
            o.put(r.PAD1, 8);
          return r.createBytes(o, i);
        }),
        (r.createBytes = function (t, e) {
          for (
            var n = 0,
              r = 0,
              i = 0,
              o = new Array(e.length),
              s = new Array(e.length),
              a = 0;
            a < e.length;
            a++
          ) {
            var u = e[a].dataCount,
              c = e[a].totalCount - u;
            (r = Math.max(r, u)), (i = Math.max(i, c)), (o[a] = new Array(u));
            for (var l = 0; l < o[a].length; l++)
              o[a][l] = 255 & t.buffer[l + n];
            n += u;
            var h = y.getErrorCorrectPolynomial(c),
              f = new w(o[a], h.getLength() - 1).mod(h);
            s[a] = new Array(h.getLength() - 1);
            for (l = 0; l < s[a].length; l++) {
              var d = l + f.getLength() - s[a].length;
              s[a][l] = d >= 0 ? f.get(d) : 0;
            }
          }
          var p = 0;
          for (l = 0; l < e.length; l++) p += e[l].totalCount;
          var v = new Array(p),
            b = 0;
          for (l = 0; l < r; l++)
            for (a = 0; a < e.length; a++)
              l < o[a].length && (v[b++] = o[a][l]);
          for (l = 0; l < i; l++)
            for (a = 0; a < e.length; a++)
              l < s[a].length && (v[b++] = s[a][l]);
          return v;
        });
      for (
        var i = {
            MODE_NUMBER: 1,
            MODE_ALPHA_NUM: 2,
            MODE_8BIT_BYTE: 4,
            MODE_KANJI: 8,
          },
          o = 1,
          s = 0,
          a = 3,
          u = 2,
          c = 0,
          l = 1,
          h = 2,
          f = 3,
          d = 4,
          p = 5,
          v = 6,
          b = 7,
          y = {
            PATTERN_POSITION_TABLE: [
              [],
              [6, 18],
              [6, 22],
              [6, 26],
              [6, 30],
              [6, 34],
              [6, 22, 38],
              [6, 24, 42],
              [6, 26, 46],
              [6, 28, 50],
              [6, 30, 54],
              [6, 32, 58],
              [6, 34, 62],
              [6, 26, 46, 66],
              [6, 26, 48, 70],
              [6, 26, 50, 74],
              [6, 30, 54, 78],
              [6, 30, 56, 82],
              [6, 30, 58, 86],
              [6, 34, 62, 90],
              [6, 28, 50, 72, 94],
              [6, 26, 50, 74, 98],
              [6, 30, 54, 78, 102],
              [6, 28, 54, 80, 106],
              [6, 32, 58, 84, 110],
              [6, 30, 58, 86, 114],
              [6, 34, 62, 90, 118],
              [6, 26, 50, 74, 98, 122],
              [6, 30, 54, 78, 102, 126],
              [6, 26, 52, 78, 104, 130],
              [6, 30, 56, 82, 108, 134],
              [6, 34, 60, 86, 112, 138],
              [6, 30, 58, 86, 114, 142],
              [6, 34, 62, 90, 118, 146],
              [6, 30, 54, 78, 102, 126, 150],
              [6, 24, 50, 76, 102, 128, 154],
              [6, 28, 54, 80, 106, 132, 158],
              [6, 32, 58, 84, 110, 136, 162],
              [6, 26, 54, 82, 110, 138, 166],
              [6, 30, 58, 86, 114, 142, 170],
            ],
            G15: 1335,
            G18: 7973,
            G15_MASK: 21522,
            getBCHTypeInfo: function (t) {
              for (
                var e = t << 10;
                y.getBCHDigit(e) - y.getBCHDigit(y.G15) >= 0;

              )
                e ^= y.G15 << (y.getBCHDigit(e) - y.getBCHDigit(y.G15));
              return ((t << 10) | e) ^ y.G15_MASK;
            },
            getBCHTypeNumber: function (t) {
              for (
                var e = t << 12;
                y.getBCHDigit(e) - y.getBCHDigit(y.G18) >= 0;

              )
                e ^= y.G18 << (y.getBCHDigit(e) - y.getBCHDigit(y.G18));
              return (t << 12) | e;
            },
            getBCHDigit: function (t) {
              for (var e = 0; 0 != t; ) e++, (t >>>= 1);
              return e;
            },
            getPatternPosition: function (t) {
              return y.PATTERN_POSITION_TABLE[t - 1];
            },
            getMask: function (t, e, n) {
              switch (t) {
                case c:
                  return (e + n) % 2 == 0;
                case l:
                  return e % 2 == 0;
                case h:
                  return n % 3 == 0;
                case f:
                  return (e + n) % 3 == 0;
                case d:
                  return (Math.floor(e / 2) + Math.floor(n / 3)) % 2 == 0;
                case p:
                  return ((e * n) % 2) + ((e * n) % 3) == 0;
                case v:
                  return (((e * n) % 2) + ((e * n) % 3)) % 2 == 0;
                case b:
                  return (((e * n) % 3) + ((e + n) % 2)) % 2 == 0;
                default:
                  throw new Error("bad maskPattern:" + t);
              }
            },
            getErrorCorrectPolynomial: function (t) {
              for (var e = new w([1], 0), n = 0; n < t; n++)
                e = e.multiply(new w([1, g.gexp(n)], 0));
              return e;
            },
            getLengthInBits: function (t, e) {
              if (1 <= e && e < 10)
                switch (t) {
                  case i.MODE_NUMBER:
                    return 10;
                  case i.MODE_ALPHA_NUM:
                    return 9;
                  case i.MODE_8BIT_BYTE:
                  case i.MODE_KANJI:
                    return 8;
                  default:
                    throw new Error("mode:" + t);
                }
              else if (e < 27)
                switch (t) {
                  case i.MODE_NUMBER:
                    return 12;
                  case i.MODE_ALPHA_NUM:
                    return 11;
                  case i.MODE_8BIT_BYTE:
                    return 16;
                  case i.MODE_KANJI:
                    return 10;
                  default:
                    throw new Error("mode:" + t);
                }
              else {
                if (!(e < 41)) throw new Error("type:" + e);
                switch (t) {
                  case i.MODE_NUMBER:
                    return 14;
                  case i.MODE_ALPHA_NUM:
                    return 13;
                  case i.MODE_8BIT_BYTE:
                    return 16;
                  case i.MODE_KANJI:
                    return 12;
                  default:
                    throw new Error("mode:" + t);
                }
              }
            },
            getLostPoint: function (t) {
              for (var e = t.getModuleCount(), n = 0, r = 0; r < e; r++)
                for (var i = 0; i < e; i++) {
                  for (var o = 0, s = t.isDark(r, i), a = -1; a <= 1; a++)
                    if (!(r + a < 0 || e <= r + a))
                      for (var u = -1; u <= 1; u++)
                        i + u < 0 ||
                          e <= i + u ||
                          (0 == a && 0 == u) ||
                          (s == t.isDark(r + a, i + u) && o++);
                  o > 5 && (n += 3 + o - 5);
                }
              for (r = 0; r < e - 1; r++)
                for (i = 0; i < e - 1; i++) {
                  var c = 0;
                  t.isDark(r, i) && c++,
                    t.isDark(r + 1, i) && c++,
                    t.isDark(r, i + 1) && c++,
                    t.isDark(r + 1, i + 1) && c++,
                    (0 != c && 4 != c) || (n += 3);
                }
              for (r = 0; r < e; r++)
                for (i = 0; i < e - 6; i++)
                  t.isDark(r, i) &&
                    !t.isDark(r, i + 1) &&
                    t.isDark(r, i + 2) &&
                    t.isDark(r, i + 3) &&
                    t.isDark(r, i + 4) &&
                    !t.isDark(r, i + 5) &&
                    t.isDark(r, i + 6) &&
                    (n += 40);
              for (i = 0; i < e; i++)
                for (r = 0; r < e - 6; r++)
                  t.isDark(r, i) &&
                    !t.isDark(r + 1, i) &&
                    t.isDark(r + 2, i) &&
                    t.isDark(r + 3, i) &&
                    t.isDark(r + 4, i) &&
                    !t.isDark(r + 5, i) &&
                    t.isDark(r + 6, i) &&
                    (n += 40);
              var l = 0;
              for (i = 0; i < e; i++)
                for (r = 0; r < e; r++) t.isDark(r, i) && l++;
              return (n += 10 * (Math.abs((100 * l) / e / e - 50) / 5));
            },
          },
          g = {
            glog: function (t) {
              if (t < 1) throw new Error("glog(" + t + ")");
              return g.LOG_TABLE[t];
            },
            gexp: function (t) {
              for (; t < 0; ) t += 255;
              for (; t >= 256; ) t -= 255;
              return g.EXP_TABLE[t];
            },
            EXP_TABLE: new Array(256),
            LOG_TABLE: new Array(256),
          },
          m = 0;
        m < 8;
        m++
      )
        g.EXP_TABLE[m] = 1 << m;
      for (m = 8; m < 256; m++)
        g.EXP_TABLE[m] =
          g.EXP_TABLE[m - 4] ^
          g.EXP_TABLE[m - 5] ^
          g.EXP_TABLE[m - 6] ^
          g.EXP_TABLE[m - 8];
      for (m = 0; m < 255; m++) g.LOG_TABLE[g.EXP_TABLE[m]] = m;
      function w(t, e) {
        if (void 0 == t.length) throw new Error(t.length + "/" + e);
        for (var n = 0; n < t.length && 0 == t[n]; ) n++;
        this.num = new Array(t.length - n + e);
        for (var r = 0; r < t.length - n; r++) this.num[r] = t[r + n];
      }
      function _(t, e) {
        (this.totalCount = t), (this.dataCount = e);
      }
      function k() {
        (this.buffer = []), (this.length = 0);
      }
      (w.prototype = {
        get: function (t) {
          return this.num[t];
        },
        getLength: function () {
          return this.num.length;
        },
        multiply: function (t) {
          for (
            var e = new Array(this.getLength() + t.getLength() - 1), n = 0;
            n < this.getLength();
            n++
          )
            for (var r = 0; r < t.getLength(); r++)
              e[n + r] ^= g.gexp(g.glog(this.get(n)) + g.glog(t.get(r)));
          return new w(e, 0);
        },
        mod: function (t) {
          if (this.getLength() - t.getLength() < 0) return this;
          for (
            var e = g.glog(this.get(0)) - g.glog(t.get(0)),
              n = new Array(this.getLength()),
              r = 0;
            r < this.getLength();
            r++
          )
            n[r] = this.get(r);
          for (r = 0; r < t.getLength(); r++)
            n[r] ^= g.gexp(g.glog(t.get(r)) + e);
          return new w(n, 0).mod(t);
        },
      }),
        (_.RS_BLOCK_TABLE = [
          [1, 26, 19],
          [1, 26, 16],
          [1, 26, 13],
          [1, 26, 9],
          [1, 44, 34],
          [1, 44, 28],
          [1, 44, 22],
          [1, 44, 16],
          [1, 70, 55],
          [1, 70, 44],
          [2, 35, 17],
          [2, 35, 13],
          [1, 100, 80],
          [2, 50, 32],
          [2, 50, 24],
          [4, 25, 9],
          [1, 134, 108],
          [2, 67, 43],
          [2, 33, 15, 2, 34, 16],
          [2, 33, 11, 2, 34, 12],
          [2, 86, 68],
          [4, 43, 27],
          [4, 43, 19],
          [4, 43, 15],
          [2, 98, 78],
          [4, 49, 31],
          [2, 32, 14, 4, 33, 15],
          [4, 39, 13, 1, 40, 14],
          [2, 121, 97],
          [2, 60, 38, 2, 61, 39],
          [4, 40, 18, 2, 41, 19],
          [4, 40, 14, 2, 41, 15],
          [2, 146, 116],
          [3, 58, 36, 2, 59, 37],
          [4, 36, 16, 4, 37, 17],
          [4, 36, 12, 4, 37, 13],
          [2, 86, 68, 2, 87, 69],
          [4, 69, 43, 1, 70, 44],
          [6, 43, 19, 2, 44, 20],
          [6, 43, 15, 2, 44, 16],
          [4, 101, 81],
          [1, 80, 50, 4, 81, 51],
          [4, 50, 22, 4, 51, 23],
          [3, 36, 12, 8, 37, 13],
          [2, 116, 92, 2, 117, 93],
          [6, 58, 36, 2, 59, 37],
          [4, 46, 20, 6, 47, 21],
          [7, 42, 14, 4, 43, 15],
          [4, 133, 107],
          [8, 59, 37, 1, 60, 38],
          [8, 44, 20, 4, 45, 21],
          [12, 33, 11, 4, 34, 12],
          [3, 145, 115, 1, 146, 116],
          [4, 64, 40, 5, 65, 41],
          [11, 36, 16, 5, 37, 17],
          [11, 36, 12, 5, 37, 13],
          [5, 109, 87, 1, 110, 88],
          [5, 65, 41, 5, 66, 42],
          [5, 54, 24, 7, 55, 25],
          [11, 36, 12],
          [5, 122, 98, 1, 123, 99],
          [7, 73, 45, 3, 74, 46],
          [15, 43, 19, 2, 44, 20],
          [3, 45, 15, 13, 46, 16],
          [1, 135, 107, 5, 136, 108],
          [10, 74, 46, 1, 75, 47],
          [1, 50, 22, 15, 51, 23],
          [2, 42, 14, 17, 43, 15],
          [5, 150, 120, 1, 151, 121],
          [9, 69, 43, 4, 70, 44],
          [17, 50, 22, 1, 51, 23],
          [2, 42, 14, 19, 43, 15],
          [3, 141, 113, 4, 142, 114],
          [3, 70, 44, 11, 71, 45],
          [17, 47, 21, 4, 48, 22],
          [9, 39, 13, 16, 40, 14],
          [3, 135, 107, 5, 136, 108],
          [3, 67, 41, 13, 68, 42],
          [15, 54, 24, 5, 55, 25],
          [15, 43, 15, 10, 44, 16],
          [4, 144, 116, 4, 145, 117],
          [17, 68, 42],
          [17, 50, 22, 6, 51, 23],
          [19, 46, 16, 6, 47, 17],
          [2, 139, 111, 7, 140, 112],
          [17, 74, 46],
          [7, 54, 24, 16, 55, 25],
          [34, 37, 13],
          [4, 151, 121, 5, 152, 122],
          [4, 75, 47, 14, 76, 48],
          [11, 54, 24, 14, 55, 25],
          [16, 45, 15, 14, 46, 16],
          [6, 147, 117, 4, 148, 118],
          [6, 73, 45, 14, 74, 46],
          [11, 54, 24, 16, 55, 25],
          [30, 46, 16, 2, 47, 17],
          [8, 132, 106, 4, 133, 107],
          [8, 75, 47, 13, 76, 48],
          [7, 54, 24, 22, 55, 25],
          [22, 45, 15, 13, 46, 16],
          [10, 142, 114, 2, 143, 115],
          [19, 74, 46, 4, 75, 47],
          [28, 50, 22, 6, 51, 23],
          [33, 46, 16, 4, 47, 17],
          [8, 152, 122, 4, 153, 123],
          [22, 73, 45, 3, 74, 46],
          [8, 53, 23, 26, 54, 24],
          [12, 45, 15, 28, 46, 16],
          [3, 147, 117, 10, 148, 118],
          [3, 73, 45, 23, 74, 46],
          [4, 54, 24, 31, 55, 25],
          [11, 45, 15, 31, 46, 16],
          [7, 146, 116, 7, 147, 117],
          [21, 73, 45, 7, 74, 46],
          [1, 53, 23, 37, 54, 24],
          [19, 45, 15, 26, 46, 16],
          [5, 145, 115, 10, 146, 116],
          [19, 75, 47, 10, 76, 48],
          [15, 54, 24, 25, 55, 25],
          [23, 45, 15, 25, 46, 16],
          [13, 145, 115, 3, 146, 116],
          [2, 74, 46, 29, 75, 47],
          [42, 54, 24, 1, 55, 25],
          [23, 45, 15, 28, 46, 16],
          [17, 145, 115],
          [10, 74, 46, 23, 75, 47],
          [10, 54, 24, 35, 55, 25],
          [19, 45, 15, 35, 46, 16],
          [17, 145, 115, 1, 146, 116],
          [14, 74, 46, 21, 75, 47],
          [29, 54, 24, 19, 55, 25],
          [11, 45, 15, 46, 46, 16],
          [13, 145, 115, 6, 146, 116],
          [14, 74, 46, 23, 75, 47],
          [44, 54, 24, 7, 55, 25],
          [59, 46, 16, 1, 47, 17],
          [12, 151, 121, 7, 152, 122],
          [12, 75, 47, 26, 76, 48],
          [39, 54, 24, 14, 55, 25],
          [22, 45, 15, 41, 46, 16],
          [6, 151, 121, 14, 152, 122],
          [6, 75, 47, 34, 76, 48],
          [46, 54, 24, 10, 55, 25],
          [2, 45, 15, 64, 46, 16],
          [17, 152, 122, 4, 153, 123],
          [29, 74, 46, 14, 75, 47],
          [49, 54, 24, 10, 55, 25],
          [24, 45, 15, 46, 46, 16],
          [4, 152, 122, 18, 153, 123],
          [13, 74, 46, 32, 75, 47],
          [48, 54, 24, 14, 55, 25],
          [42, 45, 15, 32, 46, 16],
          [20, 147, 117, 4, 148, 118],
          [40, 75, 47, 7, 76, 48],
          [43, 54, 24, 22, 55, 25],
          [10, 45, 15, 67, 46, 16],
          [19, 148, 118, 6, 149, 119],
          [18, 75, 47, 31, 76, 48],
          [34, 54, 24, 34, 55, 25],
          [20, 45, 15, 61, 46, 16],
        ]),
        (_.getRSBlocks = function (t, e) {
          var n = _.getRsBlockTable(t, e);
          if (void 0 == n)
            throw new Error(
              "bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e
            );
          for (var r = n.length / 3, i = [], o = 0; o < r; o++)
            for (
              var s = n[3 * o + 0], a = n[3 * o + 1], u = n[3 * o + 2], c = 0;
              c < s;
              c++
            )
              i.push(new _(a, u));
          return i;
        }),
        (_.getRsBlockTable = function (t, e) {
          switch (e) {
            case o:
              return _.RS_BLOCK_TABLE[4 * (t - 1) + 0];
            case s:
              return _.RS_BLOCK_TABLE[4 * (t - 1) + 1];
            case a:
              return _.RS_BLOCK_TABLE[4 * (t - 1) + 2];
            case u:
              return _.RS_BLOCK_TABLE[4 * (t - 1) + 3];
            default:
              return;
          }
        }),
        (k.prototype = {
          get: function (t) {
            var e = Math.floor(t / 8);
            return 1 == ((this.buffer[e] >>> (7 - (t % 8))) & 1);
          },
          put: function (t, e) {
            for (var n = 0; n < e; n++)
              this.putBit(1 == ((t >>> (e - n - 1)) & 1));
          },
          getLengthInBits: function () {
            return this.length;
          },
          putBit: function (t) {
            var e = Math.floor(this.length / 8);
            this.buffer.length <= e && this.buffer.push(0),
              t && (this.buffer[e] |= 128 >>> this.length % 8),
              this.length++;
          },
        });
      var x = [
        [17, 14, 11, 7],
        [32, 26, 20, 14],
        [53, 42, 32, 24],
        [78, 62, 46, 34],
        [106, 84, 60, 44],
        [134, 106, 74, 58],
        [154, 122, 86, 64],
        [192, 152, 108, 84],
        [230, 180, 130, 98],
        [271, 213, 151, 119],
        [321, 251, 177, 137],
        [367, 287, 203, 155],
        [425, 331, 241, 177],
        [458, 362, 258, 194],
        [520, 412, 292, 220],
        [586, 450, 322, 250],
        [644, 504, 364, 280],
        [718, 560, 394, 310],
        [792, 624, 442, 338],
        [858, 666, 482, 382],
        [929, 711, 509, 403],
        [1003, 779, 565, 439],
        [1091, 857, 611, 461],
        [1171, 911, 661, 511],
        [1273, 997, 715, 535],
        [1367, 1059, 751, 593],
        [1465, 1125, 805, 625],
        [1528, 1190, 868, 658],
        [1628, 1264, 908, 698],
        [1732, 1370, 982, 742],
        [1840, 1452, 1030, 790],
        [1952, 1538, 1112, 842],
        [2068, 1628, 1168, 898],
        [2188, 1722, 1228, 958],
        [2303, 1809, 1283, 983],
        [2431, 1911, 1351, 1051],
        [2563, 1989, 1423, 1093],
        [2699, 2099, 1499, 1139],
        [2809, 2213, 1579, 1219],
        [2953, 2331, 1663, 1273],
      ];
      function E(t) {
        if (
          ((this.options = {
            padding: 4,
            width: 256,
            height: 256,
            typeNumber: 4,
            color: "#000000",
            background: "#ffffff",
            ecl: "M",
            image: { svg: "", width: 0, height: 0 },
          }),
          "string" === typeof t && (t = { content: t }),
          t)
        )
          for (var e in t) this.options[e] = t[e];
        if ("string" !== typeof this.options.content)
          throw new Error("Expected 'content' as string!");
        if (0 === this.options.content.length)
          throw new Error("Expected 'content' to be non-empty!");
        if (!(this.options.padding >= 0))
          throw new Error("Expected 'padding' value to be non-negative!");
        if (!(this.options.width > 0) || !(this.options.height > 0))
          throw new Error(
            "Expected 'width' or 'height' value to be higher than zero!"
          );
        var n = this.options.content,
          i = (function (t, e) {
            for (
              var n = (function (t) {
                  var e = encodeURI(t)
                    .toString()
                    .replace(/\%[0-9a-fA-F]{2}/g, "a");
                  return e.length + (e.length != t ? 3 : 0);
                })(t),
                r = 1,
                i = 0,
                o = 0,
                s = x.length;
              o <= s;
              o++
            ) {
              var a = x[o];
              if (!a)
                throw new Error(
                  "Content too long: expected " + i + " but got " + n
                );
              switch (e) {
                case "L":
                  i = a[0];
                  break;
                case "M":
                  i = a[1];
                  break;
                case "Q":
                  i = a[2];
                  break;
                case "H":
                  i = a[3];
                  break;
                default:
                  throw new Error("Unknwon error correction level: " + e);
              }
              if (n <= i) break;
              r++;
            }
            if (r > x.length) throw new Error("Content too long");
            return r;
          })(n, this.options.ecl),
          c = (function (t) {
            switch (t) {
              case "L":
                return o;
              case "M":
                return s;
              case "Q":
                return a;
              case "H":
                return u;
              default:
                throw new Error("Unknwon error correction level: " + t);
            }
          })(this.options.ecl);
        (this.qrcode = new r(i, c)), this.qrcode.addData(n), this.qrcode.make();
      }
      (E.prototype.svg = function (t) {
        var e = this.options || {},
          n = this.qrcode.modules;
        "undefined" == typeof t && (t = { container: e.container || "svg" });
        for (
          var r = "undefined" == typeof e.pretty || !!e.pretty,
            i = r ? "  " : "",
            o = r ? "\r\n" : "",
            s = e.width,
            a = e.height,
            u = n.length,
            c = s / (u + 2 * e.padding),
            l = a / (u + 2 * e.padding),
            h = "undefined" != typeof e.join && !!e.join,
            f = "undefined" != typeof e.swap && !!e.swap,
            d = "undefined" == typeof e.xmlDeclaration || !!e.xmlDeclaration,
            p = "undefined" != typeof e.predefined && !!e.predefined,
            v = p
              ? i +
                '<defs><path id="qrmodule" d="M0 0 h' +
                l +
                " v" +
                c +
                ' H0 z" style="fill:' +
                e.color +
                ';shape-rendering:crispEdges;" /></defs>' +
                o
              : "",
            b =
              i +
              '<rect x="0" y="0" width="' +
              s +
              '" height="' +
              a +
              '" style="fill:' +
              e.background +
              ';shape-rendering:crispEdges;"/>' +
              o,
            y = "",
            g = "",
            m = 0;
          m < u;
          m++
        )
          for (var w = 0; w < u; w++) {
            if (n[w][m]) {
              var _ = w * c + e.padding * c,
                k = m * l + e.padding * l;
              if (f) {
                var x = _;
                (_ = k), (k = x);
              }
              if (h) {
                var E = c + _,
                  S = l + k;
                (_ = Number.isInteger(_) ? Number(_) : _.toFixed(2)),
                  (k = Number.isInteger(k) ? Number(k) : k.toFixed(2)),
                  (E = Number.isInteger(E) ? Number(E) : E.toFixed(2)),
                  (g +=
                    "M" +
                    _ +
                    "," +
                    k +
                    " V" +
                    (S = Number.isInteger(S) ? Number(S) : S.toFixed(2)) +
                    " H" +
                    E +
                    " V" +
                    k +
                    " H" +
                    _ +
                    " Z ");
              } else
                y += p
                  ? i +
                    '<use x="' +
                    _.toString() +
                    '" y="' +
                    k.toString() +
                    '" href="#qrmodule" />' +
                    o
                  : i +
                    '<rect x="' +
                    _.toString() +
                    '" y="' +
                    k.toString() +
                    '" width="' +
                    c +
                    '" height="' +
                    l +
                    '" style="fill:' +
                    e.color +
                    ';shape-rendering:crispEdges;"/>' +
                    o;
            }
          }
        h &&
          (y =
            i +
            '<path x="0" y="0" style="fill:' +
            e.color +
            ';shape-rendering:crispEdges;" d="' +
            g +
            '" />');
        var M = "";
        if (void 0 !== this.options.image && this.options.image.svg) {
          var C = (s * this.options.image.width) / 100,
            A = (a * this.options.image.height) / 100,
            R = a / 2 - A / 2;
          (M += '<svg x="'
            .concat(s / 2 - C / 2, '" y="')
            .concat(R, '" width="')
            .concat(C, '" height="')
            .concat(
              A,
              '" viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet">'
            )),
            (M += this.options.image.svg + o),
            (M += "</svg>");
        }
        var O = "";
        switch (t.container) {
          case "svg":
            d && (O += '<?xml version="1.0" standalone="yes"?>' + o),
              (O +=
                '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="' +
                s +
                '" height="' +
                a +
                '">' +
                o),
              (O += v + b + y),
              (O += M),
              (O += "</svg>");
            break;
          case "svg-viewbox":
            d && (O += '<?xml version="1.0" standalone="yes"?>' + o),
              (O +=
                '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 ' +
                s +
                " " +
                a +
                '">' +
                o),
              (O += v + b + y),
              (O += M),
              (O += "</svg>");
            break;
          case "g":
            (O += '<g width="' + s + '" height="' + a + '">' + o),
              (O += v + b + y),
              (O += M),
              (O += "</g>");
            break;
          default:
            O += (v + b + y + M).replace(/^\s+/, "");
        }
        return O;
      }),
        (t.exports = E);
    },
    1265: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default =
          ".-walletlink-css-reset .-walletlink-spinner{display:inline-block}.-walletlink-css-reset .-walletlink-spinner svg{display:inline-block;animation:2s linear infinite -walletlink-spinner-svg}.-walletlink-css-reset .-walletlink-spinner svg circle{animation:1.9s ease-in-out infinite both -walletlink-spinner-circle;display:block;fill:transparent;stroke-dasharray:283;stroke-dashoffset:280;stroke-linecap:round;stroke-width:10px;transform-origin:50% 50%}@keyframes -walletlink-spinner-svg{0%{transform:rotateZ(0deg)}100%{transform:rotateZ(360deg)}}@keyframes -walletlink-spinner-circle{0%,25%{stroke-dashoffset:280;transform:rotate(0)}50%,75%{stroke-dashoffset:75;transform:rotate(45deg)}100%{stroke-dashoffset:280;transform:rotate(360deg)}}");
    },
    1266: function (t, e, n) {
      "use strict";
      var r = n(231),
        i =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.TryExtensionLinkDialog = void 0);
      var o = i(n(1071)),
        s = n(987),
        a = n(1028),
        u = i(n(1267)),
        c = i(n(1268)),
        l = i(n(1269)),
        h = i(n(1270)),
        f = n(1136),
        d = n(1137),
        p = i(n(1271));
      e.TryExtensionLinkDialog = function (t) {
        var e = (0, a.useState)(!t.isOpen),
          n = r(e, 2),
          i = n[0],
          u = n[1],
          c = (0, a.useState)(!t.isOpen),
          l = r(c, 2),
          h = l[0],
          f = l[1];
        return (
          (0, a.useEffect)(
            function () {
              var e = t.isOpen,
                n = [
                  window.setTimeout(function () {
                    f(!e);
                  }, 10),
                ];
              return (
                e
                  ? u(!1)
                  : n.push(
                      window.setTimeout(function () {
                        u(!0);
                      }, 360)
                    ),
                function () {
                  n.forEach(window.clearTimeout);
                }
              );
            },
            [t.isOpen]
          ),
          (0, s.h)(
            "div",
            {
              class: (0, o.default)(
                "-walletlink-extension-dialog-container",
                i && "-walletlink-extension-dialog-container-hidden"
              ),
            },
            (0, s.h)("style", null, p.default),
            (0, s.h)("div", {
              class: (0, o.default)(
                "-walletlink-extension-dialog-backdrop",
                h && "-walletlink-extension-dialog-backdrop-hidden"
              ),
            }),
            (0, s.h)(
              "div",
              { class: "-walletlink-extension-dialog" },
              (0, s.h)(
                "div",
                {
                  class: (0, o.default)(
                    "-walletlink-extension-dialog-box",
                    h && "-walletlink-extension-dialog-box-hidden"
                  ),
                },
                (0, s.h)(v, {
                  onInstallClick: function () {
                    window.open(
                      "https://api.wallet.coinbase.com/rpc/v2/desktop/chrome",
                      "_blank"
                    );
                  },
                }),
                t.connectDisabled
                  ? null
                  : (0, s.h)(b, {
                      darkMode: t.darkMode,
                      version: t.version,
                      sessionId: t.sessionId,
                      sessionSecret: t.sessionSecret,
                      walletLinkUrl: t.walletLinkUrl,
                      isConnected: t.isConnected,
                      isParentConnection: t.isParentConnection,
                    }),
                t.onCancel && (0, s.h)(g, { onClick: t.onCancel })
              )
            )
          )
        );
      };
      var v = function (t) {
          return (0, s.h)(
            "div",
            { class: "-walletlink-extension-dialog-box-top" },
            (0, s.h)(
              "div",
              { class: "-walletlink-extension-dialog-box-top-install-region" },
              (0, s.h)("h2", null, "Try the Coinbase Wallet extension"),
              (0, s.h)("button", { onClick: t.onInstallClick }, "Install")
            ),
            (0, s.h)(
              "div",
              { class: "-walletlink-extension-dialog-box-top-info-region" },
              (0, s.h)(y, {
                icon: c.default,
                text: "Connect to crypto apps with one click",
              }),
              (0, s.h)(y, {
                icon: l.default,
                text: "Your private key is stored securely",
              }),
              (0, s.h)(y, {
                icon: u.default,
                text: "Works with Ethereum, Polygon, and more",
              })
            )
          );
        },
        b = function (t) {
          var e = window.encodeURIComponent(t.walletLinkUrl),
            n = t.isParentConnection ? "parent-id" : "id",
            r = ""
              .concat(t.walletLinkUrl, "/#/link?")
              .concat(n, "=")
              .concat(t.sessionId, "&secret=")
              .concat(t.sessionSecret, "&server=")
              .concat(e, "&v=1");
          return (0, s.h)(
            "div",
            { class: "-walletlink-extension-dialog-box-bottom" },
            (0, s.h)(
              "div",
              {
                class:
                  "-walletlink-extension-dialog-box-bottom-description-region",
              },
              (0, s.h)("h2", null, "Or scan to connect"),
              (0, s.h)(
                "body",
                {
                  class: "-walletlink-extension-dialog-box-bottom-description",
                },
                "Open ",
                (0, s.h)(
                  "a",
                  { href: "https://wallet.coinbase.com/" },
                  "Coinbase Wallet"
                ),
                " on your mobile phone and scan"
              )
            ),
            (0, s.h)(
              "div",
              { class: "-walletlink-extension-dialog-box-bottom-qr-region" },
              (0, s.h)(
                "div",
                { class: "-walletlink-extension-dialog-box-bottom-qr-wrapper" },
                (0, s.h)(f.QRCode, {
                  content: r,
                  width: 150,
                  height: 150,
                  fgColor: "#000",
                  bgColor: "transparent",
                  image: { svg: h.default, width: 34, height: 34 },
                })
              ),
              (0, s.h)("input", { type: "hidden", value: r }),
              !t.isConnected &&
                (0, s.h)(
                  "div",
                  {
                    class:
                      "-walletlink-extension-dialog-box-bottom-qr-connecting",
                  },
                  (0, s.h)(d.Spinner, { size: 36, color: "#000" }),
                  (0, s.h)("p", null, "Connecting...")
                )
            )
          );
        },
        y = function (t) {
          return (0, s.h)(
            "div",
            { class: "-walletlink-extension-dialog-box-top-description" },
            (0, s.h)(
              "div",
              {
                class:
                  "-walletlink-extension-dialog-box-top-description-icon-wrapper",
              },
              (0, s.h)("img", { src: t.icon })
            ),
            (0, s.h)(
              "body",
              {
                class: "-walletlink-extension-dialog-box-top-description-text",
              },
              t.text
            )
          );
        },
        g = function (t) {
          return (0, s.h)(
            "button",
            {
              class: "-walletlink-extension-dialog-box-cancel",
              onClick: t.onClick,
            },
            (0, s.h)("div", {
              class: "-walletlink-extension-dialog-box-cancel-x",
            })
          );
        };
    },
    1267: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default =
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTggMEMzLjU4IDAgMCAzLjU4IDAgOHMzLjU4IDggOCA4IDgtMy41OCA4LTgtMy41OC04LTgtOFptNS45MSA3aC0xLjk0Yy0uMS0xLjU3LS40Mi0zLS45MS00LjE1IDEuNDguODggMi41NSAyLjM4IDIuODUgNC4xNVpNOCAxNGMtLjQ1IDAtMS43Mi0xLjc3LTEuOTUtNWgzLjljLS4yMyAzLjIzLTEuNSA1LTEuOTUgNVpNNi4wNSA3QzYuMjggMy43NyA3LjU1IDIgOCAyYy40NSAwIDEuNzIgMS43NyAxLjk1IDVoLTMuOVpNNC45NCAyLjg1QzQuNDYgNCA0LjEzIDUuNDMgNC4wMyA3SDIuMDljLjMtMS43NyAxLjM3LTMuMjcgMi44NS00LjE1Wk0yLjA5IDloMS45NGMuMSAxLjU3LjQyIDMgLjkxIDQuMTVBNS45OTggNS45OTggMCAwIDEgMi4wOSA5Wm04Ljk3IDQuMTVjLjQ4LTEuMTUuODEtMi41OC45MS00LjE1aDEuOTRhNS45OTggNS45OTggMCAwIDEtMi44NSA0LjE1WiIgZmlsbD0iIzE2NTJGMCIvPjwvc3ZnPg==");
    },
    1268: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default =
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE1LjYzNSAyLjExN2EzLjg4OSAzLjg4OSAwIDAgMC01LjUyMSAwTDYuODkgNS4zMzVBMy44OTQgMy44OTQgMCAwIDAgNS44IDguNzM5Yy4wODMuNTA2LjI2OCAxLjAxMS41NTMgMS40NjYuMTUxLjI1My4zMzYuNDcyLjUzNy42OTFsLjYyMS42MjQgMS4xNDEtMS4xNDYtLjYyLS42MjRhMi4xMDUgMi4xMDUgMCAwIDEtLjQ4Ny0uNzQxIDIuMzQgMi4zNCAwIDAgMSAuNTAzLTIuNTFsMy4yMDYtMy4yMmEyLjI5MyAyLjI5MyAwIDAgMSAzLjIzOSAwYy44OS44OTQuODkgMi4zNDMgMCAzLjI1M2wtMS41MjcgMS41MzNjLjIzNC42NC4zMzUgMS4zMzEuMzAyIDIuMDA1bDIuMzgzLTIuMzkyYzEuNTEtMS41MzQgMS40OTMtNC4wMjgtLjAxNy01LjU2MVoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBkPSJNMTEuMjcxIDcuNzQ1YTMuMTMgMy4xMyAwIDAgMC0uNTU0LS42OWwtLjYyLS42MjQtMS4xNDIgMS4xNDYuNjIxLjYyM2MuMjE4LjIyLjM4Ni40ODkuNDg3Ljc1OC4zMzUuODI2LjE2NyAxLjgyLS41MDQgMi40OTRsLTMuMjA1IDMuMjE5YTIuMjkzIDIuMjkzIDAgMCAxLTMuMjQgMCAyLjMxNiAyLjMxNiAwIDAgMSAwLTMuMjUybDEuNTI4LTEuNTM0YTQuODE1IDQuODE1IDAgMCAxLS4yODUtMi4wMDVsLTIuMzgzIDIuMzkzYTMuOTI3IDMuOTI3IDAgMCAwIDAgNS41NDQgMy45MDkgMy45MDkgMCAwIDAgNS41MzggMGwzLjIwNS0zLjIxOWEzLjk1OCAzLjk1OCAwIDAgMCAxLjA5MS0zLjQwNCA0LjIxMSA0LjIxMSAwIDAgMC0uNTM3LTEuNDQ5WiIgZmlsbD0iIzE2NTJGMCIvPjwvc3ZnPg==");
    },
    1269: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default =
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgN3Y5aDE0VjdIMVptNy41IDQuMzlWMTRoLTF2LTIuNjFjLS40NC0uMTktLjc1LS42My0uNzUtMS4xNGExLjI1IDEuMjUgMCAwIDEgMi41IDBjMCAuNTEtLjMxLjk1LS43NSAxLjE0Wk01LjY3IDZWNC4zM0M1LjY3IDMuMDUgNi43MSAyIDggMnMyLjMzIDEuMDUgMi4zMyAyLjMzVjZoMlY0LjMzQzEyLjMzIDEuOTQgMTAuMzkgMCA4IDBTMy42NyAxLjk0IDMuNjcgNC4zM1Y2aDJaIiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+");
    },
    1270: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default =
          '<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">\n<circle cx="50" cy="50" r="50" fill="white"/>\n<circle cx="49.9996" cy="49.9996" r="43.6363" fill="#1B53E4"/>\n<circle cx="49.9996" cy="49.9996" r="43.6363" stroke="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M19.3379 49.9484C19.3379 66.8508 33.04 80.553 49.9425 80.553C66.8449 80.553 80.5471 66.8508 80.5471 49.9484C80.5471 33.0459 66.8449 19.3438 49.9425 19.3438C33.04 19.3438 19.3379 33.0459 19.3379 49.9484ZM44.0817 40.0799C41.8725 40.0799 40.0817 41.8708 40.0817 44.0799V55.8029C40.0817 58.012 41.8725 59.8029 44.0817 59.8029H55.8046C58.0138 59.8029 59.8046 58.012 59.8046 55.8029V44.0799C59.8046 41.8708 58.0138 40.0799 55.8046 40.0799H44.0817Z" fill="white"/>\n</svg>\n\n');
    },
    1271: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default =
          '.-walletlink-css-reset .-walletlink-extension-dialog{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center}.-walletlink-css-reset .-walletlink-extension-dialog-backdrop{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.5);transition:opacity .25s}.-walletlink-css-reset .-walletlink-extension-dialog-backdrop-hidden{opacity:0}.-walletlink-css-reset .-walletlink-extension-dialog-box{display:flex;position:relative;max-width:500px;flex-direction:column;transform:scale(1);transition:opacity .25s,transform .25s}.-walletlink-css-reset .-walletlink-extension-dialog-box-hidden{opacity:0;transform:scale(0.85)}.-walletlink-css-reset .-walletlink-extension-dialog-box-top{display:flex;flex-direction:row;background-color:#fff;border-radius:8px;overflow:hidden;min-height:300px}.-walletlink-css-reset .-walletlink-extension-dialog-box-top-install-region{display:flex;flex-basis:50%;flex-direction:column;justify-content:center;padding:32px}.-walletlink-css-reset .-walletlink-extension-dialog-box-top-install-region button{display:block;border-radius:8px;background-color:#1652f0;color:#fff;width:90%;min-width:fit-content;height:44px;margin-top:16px;font-size:16px;padding-left:16px;padding-right:16px;cursor:pointer;font-weight:500;text-align:center}.-walletlink-css-reset .-walletlink-extension-dialog-box-top-info-region{display:flex;flex-basis:50%;flex-direction:column;justify-content:center;background-color:#fafbfc}.-walletlink-css-reset .-walletlink-extension-dialog-box-top-description{display:flex;flex-direction:row;align-items:center;padding-top:14px;padding-bottom:14px;padding-left:24px;padding-right:32px}.-walletlink-css-reset .-walletlink-extension-dialog-box-top-description-icon-wrapper{display:block;position:relative;width:40px;height:40px;flex-shrink:0;flex-grow:0;border-radius:20px;background-color:#fff;box-shadow:0px 0px 8px rgba(0,0,0,.04),0px 16px 24px rgba(0,0,0,.06)}.-walletlink-css-reset .-walletlink-extension-dialog-box-top-description-icon-wrapper img{position:absolute;top:0;bottom:0;left:0;right:0;margin:auto}.-walletlink-css-reset .-walletlink-extension-dialog-box-top-description-text{margin-left:16px;flex-grow:1;font-size:13px;line-height:19px;color:#000;align-self:center}.-walletlink-css-reset .-walletlink-extension-dialog-box-bottom{display:flex;flex-direction:row;overflow:hidden;border-radius:8px;background-color:#fff;margin-top:8px}.-walletlink-css-reset .-walletlink-extension-dialog-box-bottom-description-region{display:flex;flex-direction:column;justify-content:center;padding:32px;flex-grow:1}.-walletlink-css-reset .-walletlink-extension-dialog-box-bottom-description{font-size:13px;line-height:19px;margin-top:12px;color:#aaa}.-walletlink-css-reset .-walletlink-extension-dialog-box-bottom-description a{font-size:inherit;line-height:inherit;color:#1652f0;cursor:pointer}.-walletlink-css-reset .-walletlink-extension-dialog-box-bottom-qr-region{position:relative;flex-shrink:0;display:flex;flex-direction:column;justify-content:center;padding-left:24px;padding-right:24px;padding-top:16px;padding-bottom:16px}.-walletlink-css-reset .-walletlink-extension-dialog-box-bottom-qr-wrapper{position:relative;display:block;padding:8px;border-radius:8px;box-shadow:0px 4px 12px rgba(0,0,0,.1)}.-walletlink-css-reset .-walletlink-extension-dialog-box-bottom-qr-wrapper img{display:block}.-walletlink-css-reset .-walletlink-extension-dialog-box-bottom-qr-connecting{position:absolute;top:0;bottom:0;left:0;right:0;display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:rgba(255,255,255,.95)}.-walletlink-css-reset .-walletlink-extension-dialog-box-bottom-qr-connecting>p{font-size:12px;font-weight:bold;color:#000;margin-top:16px}.-walletlink-css-reset .-walletlink-extension-dialog-box-cancel{position:absolute;-webkit-appearance:none;display:flex;align-items:center;justify-content:center;top:16px;right:16px;width:24px;height:24px;border-radius:12px;background-color:#fafbfc;cursor:pointer}.-walletlink-css-reset .-walletlink-extension-dialog-box-cancel-x{position:relative;display:block;cursor:pointer}.-walletlink-css-reset .-walletlink-extension-dialog-box-cancel-x::before,.-walletlink-css-reset .-walletlink-extension-dialog-box-cancel-x::after{content:"";position:absolute;display:block;top:-1px;left:-7px;width:14px;height:1px;background-color:#000;transition:background-color .2s}.-walletlink-css-reset .-walletlink-extension-dialog-box-cancel-x::before{transform:rotate(45deg)}.-walletlink-css-reset .-walletlink-extension-dialog-box-cancel-x::after{transform:rotate(135deg)}.-walletlink-css-reset .-walletlink-extension-dialog-box-cancel:hover .-walletlink-link-dialog-box-cancel-x-a,.-walletlink-css-reset .-walletlink-extension-dialog-box-cancel:hover .-walletlink-link-dialog-box-cancel-x-b{background-color:#000}.-walletlink-css-reset .-walletlink-extension-dialog-container{display:block}.-walletlink-css-reset .-walletlink-extension-dialog-container-hidden{display:none}.-walletlink-css-reset .-walletlink-extension-dialog h2{display:block;text-align:left;font-size:22px;font-weight:600;line-height:28px;color:#000}');
    },
    1272: function (t, e, n) {
      "use strict";
      var r = n(231),
        i = n(91),
        o = n(92),
        s =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Snackbar = void 0);
      var a = s(n(1071)),
        u = n(987),
        c = n(1028),
        l = s(n(1273)),
        h = (function () {
          function t(e) {
            i(this, t),
              (this.items = new Map()),
              (this.nextItemKey = 0),
              (this.root = null),
              (this.darkMode = e.darkMode);
          }
          return (
            o(t, [
              {
                key: "attach",
                value: function (t) {
                  (this.root = document.createElement("div")),
                    (this.root.className = "-walletlink-snackbar-root"),
                    t.appendChild(this.root),
                    this.render();
                },
              },
              {
                key: "presentItem",
                value: function (t) {
                  var e = this,
                    n = this.nextItemKey++;
                  return (
                    this.items.set(n, t),
                    this.render(),
                    function () {
                      e.items.delete(n), e.render();
                    }
                  );
                },
              },
              {
                key: "clear",
                value: function () {
                  this.items.clear(), this.render();
                },
              },
              {
                key: "render",
                value: function () {
                  this.root &&
                    (0, u.render)(
                      (0, u.h)(
                        "div",
                        null,
                        (0, u.h)(
                          f,
                          { darkMode: this.darkMode },
                          Array.from(this.items.entries()).map(function (t) {
                            var e = r(t, 2),
                              n = e[0],
                              i = e[1];
                            return (0,
                            u.h)(d, Object.assign({}, i, { key: n }));
                          })
                        )
                      ),
                      this.root
                    );
                },
              },
            ]),
            t
          );
        })();
      e.Snackbar = h;
      var f = function (t) {
          return (0, u.h)(
            "div",
            { class: (0, a.default)("-walletlink-snackbar-container") },
            (0, u.h)("style", null, l.default),
            (0, u.h)("div", { class: "-walletlink-snackbar" }, t.children)
          );
        },
        d = function (t) {
          var e = t.autoExpand,
            n = t.message,
            i = t.menuItems,
            o = (0, c.useState)(!0),
            s = r(o, 2),
            l = s[0],
            h = s[1],
            f = (0, c.useState)(null !== e && void 0 !== e && e),
            d = r(f, 2),
            p = d[0],
            v = d[1];
          (0, c.useEffect)(function () {
            var t = [
              window.setTimeout(function () {
                h(!1);
              }, 1),
              window.setTimeout(function () {
                v(!0);
              }, 1e4),
            ];
            return function () {
              t.forEach(window.clearTimeout);
            };
          });
          return (0, u.h)(
            "div",
            {
              class: (0, a.default)(
                "-walletlink-snackbar-instance",
                l && "-walletlink-snackbar-instance-hidden",
                p && "-walletlink-snackbar-instance-expanded"
              ),
            },
            (0, u.h)(
              "div",
              {
                class: "-walletlink-snackbar-instance-header",
                onClick: function () {
                  v(!p);
                },
              },
              (0, u.h)("img", {
                src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+",
                class: "-walletlink-snackbar-instance-header-cblogo",
              }),
              (0, u.h)(
                "div",
                { class: "-walletlink-snackbar-instance-header-message" },
                n
              ),
              (0, u.h)(
                "div",
                { class: "-gear-container" },
                !p &&
                  (0, u.h)(
                    "svg",
                    {
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                    },
                    (0, u.h)("circle", {
                      cx: "12",
                      cy: "12",
                      r: "12",
                      fill: "#F5F7F8",
                    })
                  ),
                (0, u.h)("img", {
                  src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=",
                  class: "-gear-icon",
                  title: "Expand",
                })
              )
            ),
            i &&
              i.length > 0 &&
              (0, u.h)(
                "div",
                { class: "-walletlink-snackbar-instance-menu" },
                i.map(function (t, e) {
                  return (0,
                  u.h)("div", { class: (0, a.default)("-walletlink-snackbar-instance-menu-item", t.isRed && "-walletlink-snackbar-instance-menu-item-is-red"), onClick: t.onClick, key: e }, (0, u.h)("svg", { width: t.svgWidth, height: t.svgHeight, viewBox: "0 0 10 11", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, (0, u.h)("path", { "fill-rule": t.defaultFillRule, "clip-rule": t.defaultClipRule, d: t.path, fill: "#AAAAAA" })), (0, u.h)("span", { class: (0, a.default)("-walletlink-snackbar-instance-menu-item-info", t.isRed && "-walletlink-snackbar-instance-menu-item-info-is-red") }, t.info));
                })
              )
          );
        };
    },
    1273: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default =
          ".-walletlink-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-walletlink-css-reset .-gear-container *{user-select:none}.-walletlink-css-reset .-gear-container svg{opacity:0;position:absolute}.-walletlink-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-walletlink-css-reset .-walletlink-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-walletlink-css-reset .-walletlink-snackbar *{user-select:none}.-walletlink-css-reset .-walletlink-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-walletlink-css-reset .-walletlink-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-walletlink-css-reset .-walletlink-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-walletlink-css-reset .-walletlink-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-walletlink-css-reset .-walletlink-snackbar-instance-header *{cursor:pointer}.-walletlink-css-reset .-walletlink-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-walletlink-css-reset .-walletlink-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-walletlink-css-reset .-walletlink-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-walletlink-css-reset .-walletlink-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-walletlink-css-reset .-walletlink-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-walletlink-css-reset .-walletlink-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-walletlink-css-reset .-walletlink-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-walletlink-css-reset .-walletlink-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-walletlink-css-reset .-walletlink-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-walletlink-css-reset .-walletlink-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-walletlink-css-reset .-walletlink-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-walletlink-css-reset .-walletlink-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-walletlink-css-reset .-walletlink-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-walletlink-css-reset .-walletlink-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-walletlink-css-reset .-walletlink-snackbar-instance-expanded .-walletlink-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}");
    },
    1274: function (t, e, n) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.injectCssReset = void 0);
      var i = r(n(1275));
      e.injectCssReset = function () {
        var t = document.createElement("style");
        (t.type = "text/css"),
          t.appendChild(document.createTextNode(i.default)),
          document.documentElement.appendChild(t);
      };
    },
    1275: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default =
          '@namespace svg "http://www.w3.org/2000/svg";.-walletlink-css-reset,.-walletlink-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:transparent;background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;bottom:auto;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:block;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";right:auto;tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;width:auto;word-spacing:normal;z-index:auto}.-walletlink-css-reset *{box-sizing:border-box;display:initial;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-walletlink-css-reset [class*=container]{margin:0;padding:0}.-walletlink-css-reset style{display:none}');
    },
    1276: function (t, e, n) {
      "use strict";
      var r = n(91),
        i = n(92);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.WalletLinkUI = void 0);
      var o = (function () {
        function t(e) {
          r(this, t);
        }
        return i(t, [{ key: "setConnectDisabled", value: function (t) {} }]), t;
      })();
      e.WalletLinkUI = o;
    },
    1277: function (t, e, n) {
      "use strict";
      var r = n(231),
        i = n(91),
        o = n(92),
        s = n(273),
        a = n(274),
        u =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, n, r) {
                void 0 === r && (r = n),
                  Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: function () {
                      return e[n];
                    },
                  });
              }
            : function (t, e, n, r) {
                void 0 === r && (r = n), (t[r] = e[n]);
              }),
        c =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (t, e) {
                Object.defineProperty(t, "default", {
                  enumerable: !0,
                  value: e,
                });
              }
            : function (t, e) {
                t.default = e;
              }),
        l =
          (this && this.__decorate) ||
          function (t, e, n, r) {
            var i,
              o = arguments.length,
              s =
                o < 3
                  ? e
                  : null === r
                  ? (r = Object.getOwnPropertyDescriptor(e, n))
                  : r;
            if (
              "object" === typeof Reflect &&
              "function" === typeof Reflect.decorate
            )
              s = Reflect.decorate(t, e, n, r);
            else
              for (var a = t.length - 1; a >= 0; a--)
                (i = t[a]) &&
                  (s = (o < 3 ? i(s) : o > 3 ? i(e, n, s) : i(e, n)) || s);
            return o > 3 && s && Object.defineProperty(e, n, s), s;
          },
        h =
          (this && this.__importStar) ||
          function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var n in t)
                "default" !== n &&
                  Object.prototype.hasOwnProperty.call(t, n) &&
                  u(e, t, n);
            return c(e, t), e;
          },
        f =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.WalletLinkRelay = void 0);
      var d = f(n(1278)),
        p = n(1044),
        v = n(997),
        b = n(1010),
        y = n(1047),
        g = n(1279),
        m = n(1048),
        w = n(986),
        _ = h(n(1283)),
        k = n(1049),
        x = n(1118),
        E = n(1138),
        S = n(1284),
        M = n(1285),
        C = n(1286),
        A = n(1287),
        R = (function (t) {
          s(n, t);
          var e = a(n);
          function n(t) {
            var o;
            return (
              i(this, n),
              ((o = e.call(this)).accountsCallback = null),
              (o.chainCallback = null),
              (o.appName = ""),
              (o.appLogoUrl = null),
              (o.subscriptions = new v.Subscription()),
              (o.walletLinkUrl = t.walletLinkUrl),
              (o.storage = t.storage),
              (o._session =
                k.Session.load(t.storage) || new k.Session(t.storage).save()),
              (o.relayEventManager = t.relayEventManager),
              (o.walletLinkAnalytics = t.walletLinkAnalytics
                ? t.walletLinkAnalytics
                : new y.WalletLinkAnalytics()),
              (o.connection = new g.WalletLinkConnection(
                o._session.id,
                o._session.key,
                o.walletLinkUrl,
                o.walletLinkAnalytics
              )),
              o.subscriptions.add(
                o.connection.incomingEvent$
                  .pipe(
                    (0, b.filter)(function (t) {
                      return "Web3Response" === t.event;
                    })
                  )
                  .subscribe({ next: o.handleIncomingEvent })
              ),
              o.subscriptions.add(
                o.connection.linked$
                  .pipe(
                    (0, b.skip)(1),
                    (0, b.tap)(function (t) {
                      var e;
                      o.isLinked = t;
                      var n = o.storage.getItem(x.LOCAL_STORAGE_ADDRESSES_KEY);
                      if (((o.isUnlinkedErrorState = !1), n)) {
                        var r = n.split(" "),
                          i =
                            "true" === o.storage.getItem("IsStandaloneSigning");
                        if ("" !== r[0] && !t && !i) {
                          o.isUnlinkedErrorState = !0;
                          var s = o.getSessionIdHash();
                          null === (e = o.walletLinkAnalytics) ||
                            void 0 === e ||
                            e.sendEvent(m.EVENTS.UNLINKED_ERROR_STATE, {
                              sessionIdHash: s,
                            });
                        }
                      }
                    })
                  )
                  .subscribe()
              ),
              o.subscriptions.add(
                o.connection.sessionConfig$
                  .pipe(
                    (0, b.filter)(function (t) {
                      return !!t.metadata && "1" === t.metadata.__destroyed;
                    })
                  )
                  .subscribe(function () {
                    var t,
                      e = o.connection.isDestroyed;
                    return (
                      null === (t = o.walletLinkAnalytics) ||
                        void 0 === t ||
                        t.sendEvent(m.EVENTS.METADATA_DESTROYED, {
                          alreadyDestroyed: e,
                          sessionIdHash: o.getSessionIdHash(),
                        }),
                      o.resetAndReload()
                    );
                  })
              ),
              o.subscriptions.add(
                o.connection.sessionConfig$
                  .pipe(
                    (0, b.filter)(function (t) {
                      return t.metadata && void 0 !== t.metadata.WalletUsername;
                    })
                  )
                  .pipe(
                    (0, b.mergeMap)(function (t) {
                      return _.decrypt(
                        t.metadata.WalletUsername,
                        o._session.secret
                      );
                    })
                  )
                  .subscribe({
                    next: function (t) {
                      o.storage.setItem(x.WALLET_USER_NAME_KEY, t);
                    },
                    error: function () {
                      var t;
                      null === (t = o.walletLinkAnalytics) ||
                        void 0 === t ||
                        t.sendEvent(m.EVENTS.GENERAL_ERROR, {
                          message: "Had error decrypting",
                          value: "username",
                        });
                    },
                  })
              ),
              o.subscriptions.add(
                o.connection.sessionConfig$
                  .pipe(
                    (0, b.filter)(function (t) {
                      return t.metadata && void 0 !== t.metadata.AppVersion;
                    })
                  )
                  .pipe(
                    (0, b.mergeMap)(function (t) {
                      return _.decrypt(
                        t.metadata.AppVersion,
                        o._session.secret
                      );
                    })
                  )
                  .subscribe({
                    next: function (t) {
                      o.storage.setItem(x.APP_VERSION_KEY, t);
                    },
                    error: function () {
                      var t;
                      null === (t = o.walletLinkAnalytics) ||
                        void 0 === t ||
                        t.sendEvent(m.EVENTS.GENERAL_ERROR, {
                          message: "Had error decrypting",
                          value: "appversion",
                        });
                    },
                  })
              ),
              o.subscriptions.add(
                o.connection.sessionConfig$
                  .pipe(
                    (0, b.filter)(function (t) {
                      return (
                        t.metadata &&
                        void 0 !== t.metadata.ChainId &&
                        void 0 !== t.metadata.JsonRpcUrl
                      );
                    })
                  )
                  .pipe(
                    (0, b.mergeMap)(function (t) {
                      return (0,
                      v.zip)(_.decrypt(t.metadata.ChainId, o._session.secret), _.decrypt(t.metadata.JsonRpcUrl, o._session.secret));
                    })
                  )
                  .pipe((0, b.distinctUntilChanged)())
                  .subscribe({
                    next: function (t) {
                      var e = r(t, 2),
                        n = e[0],
                        i = e[1];
                      o.chainCallback && o.chainCallback(n, i);
                    },
                    error: function () {
                      var t;
                      null === (t = o.walletLinkAnalytics) ||
                        void 0 === t ||
                        t.sendEvent(m.EVENTS.GENERAL_ERROR, {
                          message: "Had error decrypting",
                          value: "chainId|jsonRpcUrl",
                        });
                    },
                  })
              ),
              o.subscriptions.add(
                o.connection.sessionConfig$
                  .pipe(
                    (0, b.filter)(function (t) {
                      return (
                        t.metadata && void 0 !== t.metadata.EthereumAddress
                      );
                    })
                  )
                  .pipe(
                    (0, b.mergeMap)(function (t) {
                      return _.decrypt(
                        t.metadata.EthereumAddress,
                        o._session.secret
                      );
                    })
                  )
                  .subscribe({
                    next: function (t) {
                      o.accountsCallback && o.accountsCallback([t]),
                        n.accountRequestCallbackIds.size > 0 &&
                          (Array.from(
                            n.accountRequestCallbackIds.values()
                          ).forEach(function (e) {
                            var n = (0, A.Web3ResponseMessage)({
                              id: e,
                              response: (0, C.RequestEthereumAccountsResponse)([
                                t,
                              ]),
                            });
                            o.invokeCallback(
                              Object.assign(Object.assign({}, n), { id: e })
                            );
                          }),
                          n.accountRequestCallbackIds.clear());
                    },
                    error: function () {
                      var t;
                      null === (t = o.walletLinkAnalytics) ||
                        void 0 === t ||
                        t.sendEvent(m.EVENTS.GENERAL_ERROR, {
                          message: "Had error decrypting",
                          value: "selectedAddress",
                        });
                    },
                  })
              ),
              (o.ui = t.walletLinkUIConstructor({
                walletLinkUrl: t.walletLinkUrl,
                version: t.version,
                darkMode: t.darkMode,
                session: o._session,
                connected$: o.connection.connected$,
              })),
              o.connection.connect(),
              o
            );
          }
          return (
            o(n, [
              {
                key: "attachUI",
                value: function () {
                  this.ui.attach();
                },
              },
              {
                key: "resetAndReload",
                value: function () {
                  var t = this;
                  this.connection
                    .setSessionMetadata("__destroyed", "1")
                    .pipe(
                      (0, b.timeout)(1e3),
                      (0, b.catchError)(function (t) {
                        return (0, v.of)(null);
                      })
                    )
                    .subscribe(
                      function (e) {
                        var n, r, i;
                        try {
                          t.subscriptions.unsubscribe();
                        } catch (s) {
                          null === (n = t.walletLinkAnalytics) ||
                            void 0 === n ||
                            n.sendEvent(m.EVENTS.GENERAL_ERROR, {
                              message: "Had error unsubscribing",
                            });
                        }
                        null === (r = t.walletLinkAnalytics) ||
                          void 0 === r ||
                          r.sendEvent(m.EVENTS.SESSION_STATE_CHANGE, {
                            method: "relay::resetAndReload",
                            sessionMetadataChange: "__destroyed, 1",
                            sessionIdHash: t.getSessionIdHash(),
                          }),
                          t.connection.destroy();
                        var o = k.Session.load(t.storage);
                        (null === o || void 0 === o ? void 0 : o.id) ===
                        t._session.id
                          ? t.storage.clear()
                          : o &&
                            (null === (i = t.walletLinkAnalytics) ||
                              void 0 === i ||
                              i.sendEvent(m.EVENTS.SKIPPED_CLEARING_SESSION, {
                                sessionIdHash: t.getSessionIdHash(),
                                storedSessionIdHash: k.Session.hash(o.id),
                              })),
                          t.ui.reloadUI();
                      },
                      function (e) {
                        var n;
                        null === (n = t.walletLinkAnalytics) ||
                          void 0 === n ||
                          n.sendEvent(m.EVENTS.FAILURE, {
                            method: "relay::resetAndReload",
                            message: "failed to reset and reload with ".concat(
                              e
                            ),
                            sessionIdHash: t.getSessionIdHash(),
                          });
                      }
                    );
                },
              },
              {
                key: "setAppInfo",
                value: function (t, e) {
                  (this.appName = t), (this.appLogoUrl = e);
                },
              },
              {
                key: "getStorageItem",
                value: function (t) {
                  return this.storage.getItem(t);
                },
              },
              {
                key: "session",
                get: function () {
                  return this._session;
                },
              },
              {
                key: "setStorageItem",
                value: function (t, e) {
                  this.storage.setItem(t, e);
                },
              },
              {
                key: "signEthereumMessage",
                value: function (t, e, n, r) {
                  return this.sendRequest({
                    method: E.Web3Method.signEthereumMessage,
                    params: {
                      message: (0, w.hexStringFromBuffer)(t, !0),
                      address: e,
                      addPrefix: n,
                      typedDataJson: r || null,
                    },
                  });
                },
              },
              {
                key: "ethereumAddressFromSignedMessage",
                value: function (t, e, n) {
                  return this.sendRequest({
                    method: E.Web3Method.ethereumAddressFromSignedMessage,
                    params: {
                      message: (0, w.hexStringFromBuffer)(t, !0),
                      signature: (0, w.hexStringFromBuffer)(e, !0),
                      addPrefix: n,
                    },
                  });
                },
              },
              {
                key: "signEthereumTransaction",
                value: function (t) {
                  return this.sendRequest({
                    method: E.Web3Method.signEthereumTransaction,
                    params: {
                      fromAddress: t.fromAddress,
                      toAddress: t.toAddress,
                      weiValue: (0, w.bigIntStringFromBN)(t.weiValue),
                      data: (0, w.hexStringFromBuffer)(t.data, !0),
                      nonce: t.nonce,
                      gasPriceInWei: t.gasPriceInWei
                        ? (0, w.bigIntStringFromBN)(t.gasPriceInWei)
                        : null,
                      maxFeePerGas: t.gasPriceInWei
                        ? (0, w.bigIntStringFromBN)(t.gasPriceInWei)
                        : null,
                      maxPriorityFeePerGas: t.gasPriceInWei
                        ? (0, w.bigIntStringFromBN)(t.gasPriceInWei)
                        : null,
                      gasLimit: t.gasLimit
                        ? (0, w.bigIntStringFromBN)(t.gasLimit)
                        : null,
                      chainId: t.chainId,
                      shouldSubmit: !1,
                    },
                  });
                },
              },
              {
                key: "signAndSubmitEthereumTransaction",
                value: function (t) {
                  return this.sendRequest({
                    method: E.Web3Method.signEthereumTransaction,
                    params: {
                      fromAddress: t.fromAddress,
                      toAddress: t.toAddress,
                      weiValue: (0, w.bigIntStringFromBN)(t.weiValue),
                      data: (0, w.hexStringFromBuffer)(t.data, !0),
                      nonce: t.nonce,
                      gasPriceInWei: t.gasPriceInWei
                        ? (0, w.bigIntStringFromBN)(t.gasPriceInWei)
                        : null,
                      maxFeePerGas: t.maxFeePerGas
                        ? (0, w.bigIntStringFromBN)(t.maxFeePerGas)
                        : null,
                      maxPriorityFeePerGas: t.maxPriorityFeePerGas
                        ? (0, w.bigIntStringFromBN)(t.maxPriorityFeePerGas)
                        : null,
                      gasLimit: t.gasLimit
                        ? (0, w.bigIntStringFromBN)(t.gasLimit)
                        : null,
                      chainId: t.chainId,
                      shouldSubmit: !0,
                    },
                  });
                },
              },
              {
                key: "submitEthereumTransaction",
                value: function (t, e) {
                  return this.sendRequest({
                    method: E.Web3Method.submitEthereumTransaction,
                    params: {
                      signedTransaction: (0, w.hexStringFromBuffer)(t, !0),
                      chainId: e,
                    },
                  });
                },
              },
              {
                key: "scanQRCode",
                value: function (t) {
                  return this.sendRequest({
                    method: E.Web3Method.scanQRCode,
                    params: { regExp: t },
                  });
                },
              },
              {
                key: "genericRequest",
                value: function (t, e) {
                  return this.sendRequest({
                    method: E.Web3Method.generic,
                    params: { action: e, data: t },
                  });
                },
              },
              {
                key: "sendGenericMessage",
                value: function (t) {
                  return this.sendRequest(t);
                },
              },
              {
                key: "sendRequest",
                value: function (t) {
                  var e = this,
                    n = null,
                    r = (0, w.randomBytesHex)(8),
                    i = function () {
                      e.publishWeb3RequestCanceledEvent(r),
                        e.handleWeb3ResponseMessage(
                          (0, A.Web3ResponseMessage)({
                            id: r,
                            response: (0, C.ErrorResponse)(
                              t.method,
                              "User rejected request"
                            ),
                          })
                        ),
                        null === n || void 0 === n || n();
                    };
                  return {
                    promise: new Promise(function (o, s) {
                      e.ui.isStandalone() ||
                        (n = e.ui.showConnecting({
                          isUnlinkedErrorState: e.isUnlinkedErrorState,
                          onCancel: i,
                          onResetConnection: e.resetAndReload,
                        })),
                        e.relayEventManager.callbacks.set(r, function (t) {
                          if (
                            (null === n || void 0 === n || n(), t.errorMessage)
                          )
                            return s(new Error(t.errorMessage));
                          o(t);
                        }),
                        e.ui.isStandalone()
                          ? e.sendRequestStandalone(r, t)
                          : e.publishWeb3RequestEvent(r, t);
                    }),
                    cancel: i,
                  };
                },
              },
              {
                key: "setConnectDisabled",
                value: function (t) {
                  this.ui.setConnectDisabled(t);
                },
              },
              {
                key: "setAccountsCallback",
                value: function (t) {
                  this.accountsCallback = t;
                },
              },
              {
                key: "setChainCallback",
                value: function (t) {
                  this.chainCallback = t;
                },
              },
              {
                key: "publishWeb3RequestEvent",
                value: function (t, e) {
                  var n,
                    r = this,
                    i = (0, M.Web3RequestMessage)({ id: t, request: e }),
                    o = k.Session.load(this.storage);
                  null === (n = this.walletLinkAnalytics) ||
                    void 0 === n ||
                    n.sendEvent(m.EVENTS.WEB3_REQUEST, {
                      eventId: i.id,
                      method: "relay::".concat(i.request.method),
                      sessionIdHash: this.getSessionIdHash(),
                      storedSessionIdHash: o ? k.Session.hash(o.id) : "",
                      isSessionMismatched: (
                        (null === o || void 0 === o ? void 0 : o.id) !==
                        this._session.id
                      ).toString(),
                    }),
                    this.subscriptions.add(
                      this.publishEvent("Web3Request", i, !0).subscribe({
                        error: function (t) {
                          r.handleWeb3ResponseMessage(
                            (0, A.Web3ResponseMessage)({
                              id: i.id,
                              response: {
                                method: i.request.method,
                                errorMessage: t.message,
                              },
                            })
                          );
                        },
                      })
                    );
                },
              },
              {
                key: "publishWeb3RequestCanceledEvent",
                value: function (t) {
                  var e = (0, S.Web3RequestCanceledMessage)(t);
                  this.subscriptions.add(
                    this.publishEvent("Web3RequestCanceled", e, !1).subscribe()
                  );
                },
              },
              {
                key: "publishEvent",
                value: function (t, e, n) {
                  var r = this,
                    i = this.session.secret;
                  return new v.Observable(function (t) {
                    _.encrypt(
                      JSON.stringify(
                        Object.assign(Object.assign({}, e), {
                          origin: location.origin,
                        })
                      ),
                      i
                    ).then(function (e) {
                      t.next(e), t.complete();
                    });
                  }).pipe(
                    (0, b.mergeMap)(function (e) {
                      return r.connection.publishEvent(t, e, n);
                    })
                  );
                },
              },
              {
                key: "handleIncomingEvent",
                value: function (t) {
                  var e = this;
                  try {
                    this.subscriptions.add(
                      _.decrypt(t.data, this.session.secret)
                        .pipe(
                          (0, b.map)(function (t) {
                            return JSON.parse(t);
                          })
                        )
                        .subscribe({
                          next: function (t) {
                            var n = (0, A.isWeb3ResponseMessage)(t) ? t : null;
                            n && e.handleWeb3ResponseMessage(n);
                          },
                          error: function () {
                            var t;
                            null === (t = e.walletLinkAnalytics) ||
                              void 0 === t ||
                              t.sendEvent(m.EVENTS.GENERAL_ERROR, {
                                message: "Had error decrypting",
                                value: "incomingEvent",
                              });
                          },
                        })
                    );
                  } catch (n) {
                    return;
                  }
                },
              },
              {
                key: "handleWeb3ResponseMessage",
                value: function (t) {
                  var e,
                    r = this,
                    i = t.response;
                  if (
                    (null === (e = this.walletLinkAnalytics) ||
                      void 0 === e ||
                      e.sendEvent(m.EVENTS.WEB3_RESPONSE, {
                        eventId: t.id,
                        method: "relay::".concat(i.method),
                        sessionIdHash: this.getSessionIdHash(),
                      }),
                    (0, C.isRequestEthereumAccountsResponse)(i))
                  )
                    return (
                      Array.from(n.accountRequestCallbackIds.values()).forEach(
                        function (e) {
                          return r.invokeCallback(
                            Object.assign(Object.assign({}, t), { id: e })
                          );
                        }
                      ),
                      void n.accountRequestCallbackIds.clear()
                    );
                  this.invokeCallback(t);
                },
              },
              {
                key: "invokeCallback",
                value: function (t) {
                  var e = this.relayEventManager.callbacks.get(t.id);
                  e &&
                    (e(t.response),
                    this.relayEventManager.callbacks.delete(t.id));
                },
              },
              {
                key: "requestEthereumAccounts",
                value: function () {
                  var t = this,
                    e = {
                      method: E.Web3Method.requestEthereumAccounts,
                      params: {
                        appName: this.appName,
                        appLogoUrl: this.appLogoUrl || null,
                      },
                    },
                    r = (0, w.randomBytesHex)(8),
                    i = function () {
                      t.publishWeb3RequestCanceledEvent(r),
                        t.handleWeb3ResponseMessage(
                          (0, A.Web3ResponseMessage)({
                            id: r,
                            response: (0, C.ErrorResponse)(
                              e.method,
                              "User rejected request"
                            ),
                          })
                        );
                    };
                  return {
                    promise: new Promise(function (o, s) {
                      var a;
                      t.relayEventManager.callbacks.set(r, function (e) {
                        if (
                          (t.ui.hideRequestEthereumAccounts(), e.errorMessage)
                        )
                          return s(new Error(e.errorMessage));
                        o(e);
                      });
                      var u =
                        (null ===
                          (a =
                            null === window || void 0 === window
                              ? void 0
                              : window.navigator) || void 0 === a
                          ? void 0
                          : a.userAgent) || null;
                      if (
                        u &&
                        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                          u
                        )
                      )
                        window.location.href =
                          "https://go.cb-w.com/xoXnYwQimhb?cb_url=".concat(
                            window.location.href
                          );
                      else {
                        if (t.ui.inlineAccountsResponse()) {
                          t.ui.requestEthereumAccounts({
                            onCancel: i,
                            onAccounts: function (e) {
                              t.handleWeb3ResponseMessage(
                                (0, A.Web3ResponseMessage)({
                                  id: r,
                                  response: (0,
                                  C.RequestEthereumAccountsResponse)(e),
                                })
                              );
                            },
                          });
                        } else t.ui.requestEthereumAccounts({ onCancel: i });
                        n.accountRequestCallbackIds.add(r),
                          t.ui.inlineAccountsResponse() ||
                            t.ui.isStandalone() ||
                            t.publishWeb3RequestEvent(r, e);
                      }
                    }),
                    cancel: i,
                  };
                },
              },
              {
                key: "addEthereumChain",
                value: function (t, e, n, r, i, o) {
                  var s = this,
                    a = {
                      method: E.Web3Method.addEthereumChain,
                      params: {
                        chainId: t,
                        rpcUrls: e,
                        blockExplorerUrls: r,
                        chainName: i,
                        iconUrls: n,
                        nativeCurrency: o,
                      },
                    },
                    u = null,
                    c = (0, w.randomBytesHex)(8),
                    l = function () {
                      s.publishWeb3RequestCanceledEvent(c),
                        s.handleWeb3ResponseMessage(
                          (0, A.Web3ResponseMessage)({
                            id: c,
                            response: (0, C.ErrorResponse)(
                              a.method,
                              "User rejected request"
                            ),
                          })
                        ),
                        null === u || void 0 === u || u();
                    };
                  return (
                    this.ui.inlineAddEthereumChain(t) ||
                      (u = this.ui.showConnecting({
                        isUnlinkedErrorState: this.isUnlinkedErrorState,
                        onCancel: l,
                        onResetConnection: this.resetAndReload,
                      })),
                    {
                      promise: new Promise(function (e, n) {
                        s.relayEventManager.callbacks.set(c, function (t) {
                          if (
                            (null === u || void 0 === u || u(), t.errorMessage)
                          )
                            return n(new Error(t.errorMessage));
                          e(t);
                        });
                        s.ui.inlineAddEthereumChain(t) &&
                          s.ui.addEthereumChain({
                            onCancel: function () {
                              s.handleWeb3ResponseMessage(
                                (0, A.Web3ResponseMessage)({
                                  id: c,
                                  response: (0, C.AddEthereumChainResponse)({
                                    isApproved: !1,
                                    rpcUrl: "",
                                  }),
                                })
                              );
                            },
                            onApprove: function (t) {
                              s.handleWeb3ResponseMessage(
                                (0, A.Web3ResponseMessage)({
                                  id: c,
                                  response: (0, C.AddEthereumChainResponse)({
                                    isApproved: !0,
                                    rpcUrl: t,
                                  }),
                                })
                              );
                            },
                            chainId: a.params.chainId,
                            rpcUrls: a.params.rpcUrls,
                            blockExplorerUrls: a.params.blockExplorerUrls,
                            chainName: a.params.chainName,
                            iconUrls: a.params.iconUrls,
                            nativeCurrency: a.params.nativeCurrency,
                          }),
                          s.ui.inlineAddEthereumChain(t) ||
                            s.ui.isStandalone() ||
                            s.publishWeb3RequestEvent(c, a);
                      }),
                      cancel: l,
                    }
                  );
                },
              },
              {
                key: "switchEthereumChain",
                value: function (t) {
                  var e = this,
                    n = {
                      method: E.Web3Method.switchEthereumChain,
                      params: { chainId: t },
                    },
                    r = null,
                    i = (0, w.randomBytesHex)(8),
                    o = function () {
                      e.publishWeb3RequestCanceledEvent(i),
                        e.handleWeb3ResponseMessage(
                          (0, A.Web3ResponseMessage)({
                            id: i,
                            response: (0, C.ErrorResponse)(
                              n.method,
                              "User rejected request"
                            ),
                          })
                        ),
                        null === r || void 0 === r || r();
                    };
                  return (
                    this.ui.inlineSwitchEthereumChain() ||
                      (r = this.ui.showConnecting({
                        isUnlinkedErrorState: this.isUnlinkedErrorState,
                        onCancel: o,
                        onResetConnection: this.resetAndReload,
                      })),
                    {
                      promise: new Promise(function (t, o) {
                        e.relayEventManager.callbacks.set(i, function (e) {
                          return (
                            null === r || void 0 === r || r(),
                            e.errorMessage && e.errorCode
                              ? o(
                                  p.ethErrors.provider.custom({
                                    code: e.errorCode,
                                    message:
                                      "Unrecognized chain ID. Try adding the chain using addEthereumChain first.",
                                  })
                                )
                              : e.errorMessage
                              ? o(new Error(e.errorMessage))
                              : void t(e)
                          );
                        });
                        e.ui.switchEthereumChain({
                          onCancel: function (t) {
                            t
                              ? e.handleWeb3ResponseMessage(
                                  (0, A.Web3ResponseMessage)({
                                    id: i,
                                    response: (0, C.ErrorResponse)(
                                      E.Web3Method.switchEthereumChain,
                                      "unsupported chainId",
                                      t
                                    ),
                                  })
                                )
                              : e.handleWeb3ResponseMessage(
                                  (0, A.Web3ResponseMessage)({
                                    id: i,
                                    response: (0,
                                    C.SwitchEthereumChainResponse)({
                                      isApproved: !1,
                                      rpcUrl: "",
                                    }),
                                  })
                                );
                          },
                          onApprove: function (t) {
                            e.handleWeb3ResponseMessage(
                              (0, A.Web3ResponseMessage)({
                                id: i,
                                response: (0, C.SwitchEthereumChainResponse)({
                                  isApproved: !0,
                                  rpcUrl: t,
                                }),
                              })
                            );
                          },
                          chainId: n.params.chainId,
                        }),
                          e.ui.inlineSwitchEthereumChain() ||
                            e.ui.isStandalone() ||
                            e.publishWeb3RequestEvent(i, n);
                      }),
                      cancel: o,
                    }
                  );
                },
              },
              {
                key: "getSessionIdHash",
                value: function () {
                  return k.Session.hash(this._session.id);
                },
              },
              {
                key: "sendRequestStandalone",
                value: function (t, e) {
                  var n = this,
                    r = function () {
                      n.handleWeb3ResponseMessage(
                        (0, A.Web3ResponseMessage)({
                          id: t,
                          response: (0, C.ErrorResponse)(
                            e.method,
                            "User rejected request"
                          ),
                        })
                      );
                    },
                    i = function (e) {
                      n.handleWeb3ResponseMessage(
                        (0, A.Web3ResponseMessage)({ id: t, response: e })
                      );
                    };
                  switch (e.method) {
                    case E.Web3Method.signEthereumMessage:
                      this.ui.signEthereumMessage({
                        request: e,
                        onSuccess: i,
                        onCancel: r,
                      });
                      break;
                    case E.Web3Method.signEthereumTransaction:
                      this.ui.signEthereumTransaction({
                        request: e,
                        onSuccess: i,
                        onCancel: r,
                      });
                      break;
                    case E.Web3Method.submitEthereumTransaction:
                      this.ui.submitEthereumTransaction({
                        request: e,
                        onSuccess: i,
                        onCancel: r,
                      });
                      break;
                    case E.Web3Method.ethereumAddressFromSignedMessage:
                      this.ui.ethereumAddressFromSignedMessage({
                        request: e,
                        onSuccess: i,
                      });
                      break;
                    default:
                      r();
                  }
                },
              },
            ]),
            n
          );
        })(x.WalletLinkRelayAbstract);
      (R.accountRequestCallbackIds = new Set()),
        l([d.default], R.prototype, "resetAndReload", null),
        l([d.default], R.prototype, "handleIncomingEvent", null),
        (e.WalletLinkRelay = R);
    },
    1278: function (t, e, n) {
      "use strict";
      var r;
      function i(t, e, n) {
        if (!n || typeof n.value !== r.typeOfFunction)
          throw new TypeError(
            "Only methods can be decorated with @bind. <" +
              e +
              "> is not a method!"
          );
        return {
          configurable: r.boolTrue,
          get: function () {
            var t = n.value.bind(this);
            return (
              Object.defineProperty(this, e, {
                value: t,
                configurable: r.boolTrue,
                writable: r.boolTrue,
              }),
              t
            );
          },
        };
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t) {
          (t.typeOfFunction = "function"), (t.boolTrue = !0);
        })(r || (r = {})),
        (e.bind = i),
        (e.default = i);
    },
    1279: function (t, e, n) {
      "use strict";
      var r = n(460),
        i = n(91),
        o = n(92);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.WalletLinkConnection = void 0);
      var s = n(997),
        a = n(1010),
        u = n(1048),
        c = n(1049),
        l = n(1065),
        h = n(1280),
        f = n(1281),
        d = n(1282),
        p = 1e4,
        v = (function () {
          function t(e, n, r, o) {
            var h = this,
              d =
                arguments.length > 4 && void 0 !== arguments[4]
                  ? arguments[4]
                  : WebSocket;
            i(this, t),
              (this.sessionId = e),
              (this.sessionKey = n),
              (this.subscriptions = new s.Subscription()),
              (this.destroyed = !1),
              (this.lastHeartbeatResponse = 0),
              (this.nextReqId = (0, l.IntNumber)(1)),
              (this.connectedSubject = new s.BehaviorSubject(!1)),
              (this.linkedSubject = new s.BehaviorSubject(!1)),
              (this.sessionConfigSubject = new s.ReplaySubject(1));
            var v = new f.RxWebSocket(r + "/rpc", d);
            (this.ws = v),
              (this.walletLinkAnalytics = o),
              this.subscriptions.add(
                v.connectionState$
                  .pipe(
                    (0, a.tap)(function (t) {
                      return h.walletLinkAnalytics.sendEvent(
                        u.EVENTS.CONNECTED_STATE_CHANGE,
                        { state: t, sessionIdHash: c.Session.hash(e) }
                      );
                    }),
                    (0, a.skip)(1),
                    (0, a.filter)(function (t) {
                      return (
                        t === f.ConnectionState.DISCONNECTED && !h.destroyed
                      );
                    }),
                    (0, a.delay)(5e3),
                    (0, a.filter)(function (t) {
                      return !h.destroyed;
                    }),
                    (0, a.flatMap)(function (t) {
                      return v.connect();
                    }),
                    (0, a.retry)()
                  )
                  .subscribe()
              ),
              this.subscriptions.add(
                v.connectionState$
                  .pipe(
                    (0, a.skip)(2),
                    (0, a.switchMap)(function (t) {
                      return (0, s.iif)(
                        function () {
                          return t === f.ConnectionState.CONNECTED;
                        },
                        h.authenticate().pipe(
                          (0, a.tap)(function (t) {
                            return h.sendIsLinked();
                          }),
                          (0, a.tap)(function (t) {
                            return h.sendGetSessionConfig();
                          }),
                          (0, a.map)(function (t) {
                            return !0;
                          })
                        ),
                        (0, s.of)(!1)
                      );
                    }),
                    (0, a.distinctUntilChanged)(),
                    (0, a.catchError)(function (t) {
                      return (0, s.of)(!1);
                    })
                  )
                  .subscribe(function (t) {
                    return h.connectedSubject.next(t);
                  })
              ),
              this.subscriptions.add(
                v.connectionState$
                  .pipe(
                    (0, a.skip)(1),
                    (0, a.switchMap)(function (t) {
                      return (0, s.iif)(function () {
                        return t === f.ConnectionState.CONNECTED;
                      }, (0, s.timer)(0, p));
                    })
                  )
                  .subscribe(function (t) {
                    return 0 === t ? h.updateLastHeartbeat() : h.heartbeat();
                  })
              ),
              this.subscriptions.add(
                v.incomingData$
                  .pipe(
                    (0, a.filter)(function (t) {
                      return "h" === t;
                    })
                  )
                  .subscribe(function (t) {
                    return h.updateLastHeartbeat();
                  })
              ),
              this.subscriptions.add(
                v.incomingJSONData$
                  .pipe(
                    (0, a.filter)(function (t) {
                      return ["IsLinkedOK", "Linked"].includes(t.type);
                    })
                  )
                  .subscribe(function (t) {
                    var n = t;
                    h.walletLinkAnalytics.sendEvent(u.EVENTS.LINKED, {
                      sessionIdHash: c.Session.hash(e),
                      linked: n.linked,
                      type: t.type,
                      onlineGuests: n.onlineGuests,
                    }),
                      h.linkedSubject.next(n.linked || n.onlineGuests > 0);
                  })
              ),
              this.subscriptions.add(
                v.incomingJSONData$
                  .pipe(
                    (0, a.filter)(function (t) {
                      return [
                        "GetSessionConfigOK",
                        "SessionConfigUpdated",
                      ].includes(t.type);
                    })
                  )
                  .subscribe(function (t) {
                    var n = t;
                    h.walletLinkAnalytics.sendEvent(
                      u.EVENTS.SESSION_CONFIG_RECEIVED,
                      {
                        sessionIdHash: c.Session.hash(e),
                        metadata_keys:
                          n && n.metadata ? Object.keys(n.metadata) : void 0,
                      }
                    ),
                      h.sessionConfigSubject.next({
                        webhookId: n.webhookId,
                        webhookUrl: n.webhookUrl,
                        metadata: n.metadata,
                      });
                  })
              );
          }
          return (
            o(t, [
              {
                key: "connect",
                value: function () {
                  if (this.destroyed) throw new Error("instance is destroyed");
                  this.walletLinkAnalytics.sendEvent(
                    u.EVENTS.STARTED_CONNECTING,
                    { sessionIdHash: c.Session.hash(this.sessionId) }
                  ),
                    this.ws.connect().subscribe();
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.subscriptions.unsubscribe(),
                    this.ws.disconnect(),
                    this.walletLinkAnalytics.sendEvent(u.EVENTS.DISCONNECTED, {
                      sessionIdHash: c.Session.hash(this.sessionId),
                    }),
                    (this.destroyed = !0);
                },
              },
              {
                key: "isDestroyed",
                get: function () {
                  return this.destroyed;
                },
              },
              {
                key: "connected$",
                get: function () {
                  return this.connectedSubject.asObservable();
                },
              },
              {
                key: "onceConnected$",
                get: function () {
                  return this.connected$.pipe(
                    (0, a.filter)(function (t) {
                      return t;
                    }),
                    (0, a.take)(1),
                    (0, a.map)(function () {})
                  );
                },
              },
              {
                key: "linked$",
                get: function () {
                  return this.linkedSubject.asObservable();
                },
              },
              {
                key: "onceLinked$",
                get: function () {
                  return this.linked$.pipe(
                    (0, a.filter)(function (t) {
                      return t;
                    }),
                    (0, a.take)(1),
                    (0, a.map)(function () {})
                  );
                },
              },
              {
                key: "sessionConfig$",
                get: function () {
                  return this.sessionConfigSubject.asObservable();
                },
              },
              {
                key: "incomingEvent$",
                get: function () {
                  return this.ws.incomingJSONData$.pipe(
                    (0, a.filter)(function (t) {
                      if ("Event" !== t.type) return !1;
                      var e = t;
                      return (
                        "string" === typeof e.sessionId &&
                        "string" === typeof e.eventId &&
                        "string" === typeof e.event &&
                        "string" === typeof e.data
                      );
                    }),
                    (0, a.map)(function (t) {
                      return t;
                    })
                  );
                },
              },
              {
                key: "setSessionMetadata",
                value: function (t, e) {
                  var n = this,
                    i = (0, h.ClientMessageSetSessionConfig)({
                      id: (0, l.IntNumber)(this.nextReqId++),
                      sessionId: this.sessionId,
                      metadata: r({}, t, e),
                    });
                  return this.onceConnected$.pipe(
                    (0, a.flatMap)(function (t) {
                      return n.makeRequest(i);
                    }),
                    (0, a.map)(function (t) {
                      if ((0, d.isServerMessageFail)(t))
                        throw new Error(
                          t.error || "failed to set session metadata"
                        );
                    })
                  );
                },
              },
              {
                key: "publishEvent",
                value: function (t, e) {
                  var n = this,
                    r =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2],
                    i = (0, h.ClientMessagePublishEvent)({
                      id: (0, l.IntNumber)(this.nextReqId++),
                      sessionId: this.sessionId,
                      event: t,
                      data: e,
                      callWebhook: r,
                    });
                  return this.onceLinked$.pipe(
                    (0, a.flatMap)(function (t) {
                      return n.makeRequest(i);
                    }),
                    (0, a.map)(function (t) {
                      if ((0, d.isServerMessageFail)(t))
                        throw new Error(t.error || "failed to publish event");
                      return t.eventId;
                    })
                  );
                },
              },
              {
                key: "sendData",
                value: function (t) {
                  this.ws.sendData(JSON.stringify(t));
                },
              },
              {
                key: "updateLastHeartbeat",
                value: function () {
                  this.lastHeartbeatResponse = Date.now();
                },
              },
              {
                key: "heartbeat",
                value: function () {
                  if (Date.now() - this.lastHeartbeatResponse > 2e4)
                    this.ws.disconnect();
                  else
                    try {
                      this.ws.sendData("h");
                    } catch (t) {}
                },
              },
              {
                key: "makeRequest",
                value: function (t) {
                  var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 6e4,
                    n = t.id;
                  try {
                    this.sendData(t);
                  } catch (r) {
                    return (0, s.throwError)(r);
                  }
                  return this.ws.incomingJSONData$.pipe(
                    (0, a.timeoutWith)(
                      e,
                      (0, s.throwError)(
                        new Error("request ".concat(n, " timed out"))
                      )
                    ),
                    (0, a.filter)(function (t) {
                      return t.id === n;
                    }),
                    (0, a.take)(1)
                  );
                },
              },
              {
                key: "authenticate",
                value: function () {
                  var t = (0, h.ClientMessageHostSession)({
                    id: (0, l.IntNumber)(this.nextReqId++),
                    sessionId: this.sessionId,
                    sessionKey: this.sessionKey,
                  });
                  return this.makeRequest(t).pipe(
                    (0, a.map)(function (t) {
                      if ((0, d.isServerMessageFail)(t))
                        throw new Error(t.error || "failed to authentcate");
                    })
                  );
                },
              },
              {
                key: "sendIsLinked",
                value: function () {
                  var t = (0, h.ClientMessageIsLinked)({
                    id: (0, l.IntNumber)(this.nextReqId++),
                    sessionId: this.sessionId,
                  });
                  this.sendData(t);
                },
              },
              {
                key: "sendGetSessionConfig",
                value: function () {
                  var t = (0, h.ClientMessageGetSessionConfig)({
                    id: (0, l.IntNumber)(this.nextReqId++),
                    sessionId: this.sessionId,
                  });
                  this.sendData(t);
                },
              },
            ]),
            t
          );
        })();
      e.WalletLinkConnection = v;
    },
    1280: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.ClientMessagePublishEvent =
          e.ClientMessageSetSessionConfig =
          e.ClientMessageGetSessionConfig =
          e.ClientMessageIsLinked =
          e.ClientMessageHostSession =
            void 0),
        (e.ClientMessageHostSession = function (t) {
          return Object.assign({ type: "HostSession" }, t);
        }),
        (e.ClientMessageIsLinked = function (t) {
          return Object.assign({ type: "IsLinked" }, t);
        }),
        (e.ClientMessageGetSessionConfig = function (t) {
          return Object.assign({ type: "GetSessionConfig" }, t);
        }),
        (e.ClientMessageSetSessionConfig = function (t) {
          return Object.assign({ type: "SetSessionConfig" }, t);
        }),
        (e.ClientMessagePublishEvent = function (t) {
          return Object.assign({ type: "PublishEvent" }, t);
        });
    },
    1281: function (t, e, n) {
      "use strict";
      var r = n(91),
        i = n(92);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.RxWebSocket = e.ConnectionState = void 0);
      var o,
        s = n(997),
        a = n(1010);
      !(function (t) {
        (t[(t.DISCONNECTED = 0)] = "DISCONNECTED"),
          (t[(t.CONNECTING = 1)] = "CONNECTING"),
          (t[(t.CONNECTED = 2)] = "CONNECTED");
      })((o = e.ConnectionState || (e.ConnectionState = {})));
      var u = (function () {
        function t(e) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : WebSocket;
          r(this, t),
            (this.WebSocketClass = n),
            (this.webSocket = null),
            (this.connectionStateSubject = new s.BehaviorSubject(
              o.DISCONNECTED
            )),
            (this.incomingDataSubject = new s.Subject()),
            (this.url = e.replace(/^http/, "ws"));
        }
        return (
          i(t, [
            {
              key: "connect",
              value: function () {
                var t = this;
                return this.webSocket
                  ? (0, s.throwError)(new Error("webSocket object is not null"))
                  : new s.Observable(function (e) {
                      var n;
                      try {
                        t.webSocket = n = new t.WebSocketClass(t.url);
                      } catch (r) {
                        return void e.error(r);
                      }
                      t.connectionStateSubject.next(o.CONNECTING),
                        (n.onclose = function (n) {
                          t.clearWebSocket(),
                            e.error(
                              new Error(
                                "websocket error "
                                  .concat(n.code, ": ")
                                  .concat(n.reason)
                              )
                            ),
                            t.connectionStateSubject.next(o.DISCONNECTED);
                        }),
                        (n.onopen = function (n) {
                          e.next(),
                            e.complete(),
                            t.connectionStateSubject.next(o.CONNECTED);
                        }),
                        (n.onmessage = function (e) {
                          t.incomingDataSubject.next(e.data);
                        });
                    }).pipe((0, a.take)(1));
              },
            },
            {
              key: "disconnect",
              value: function () {
                var t = this.webSocket;
                if (t) {
                  this.clearWebSocket(),
                    this.connectionStateSubject.next(o.DISCONNECTED);
                  try {
                    t.close();
                  } catch (e) {}
                }
              },
            },
            {
              key: "connectionState$",
              get: function () {
                return this.connectionStateSubject.asObservable();
              },
            },
            {
              key: "incomingData$",
              get: function () {
                return this.incomingDataSubject.asObservable();
              },
            },
            {
              key: "incomingJSONData$",
              get: function () {
                return this.incomingData$.pipe(
                  (0, a.flatMap)(function (t) {
                    var e;
                    try {
                      e = JSON.parse(t);
                    } catch (n) {
                      return (0, s.empty)();
                    }
                    return (0, s.of)(e);
                  })
                );
              },
            },
            {
              key: "sendData",
              value: function (t) {
                var e = this.webSocket;
                if (!e) throw new Error("websocket is not connected");
                e.send(t);
              },
            },
            {
              key: "clearWebSocket",
              value: function () {
                var t = this.webSocket;
                t &&
                  ((this.webSocket = null),
                  (t.onclose = null),
                  (t.onerror = null),
                  (t.onmessage = null),
                  (t.onopen = null));
              },
            },
          ]),
          t
        );
      })();
      e.RxWebSocket = u;
    },
    1282: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.isServerMessageFail = void 0),
        (e.isServerMessageFail = function (t) {
          return (
            t &&
            "Fail" === t.type &&
            "number" === typeof t.id &&
            "string" === typeof t.sessionId &&
            "string" === typeof t.error
          );
        });
    },
    1283: function (t, e, n) {
      "use strict";
      var r = n(2),
        i = n(453),
        o = n(168);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.decrypt = e.encrypt = void 0);
      var s = n(997),
        a = n(986);
      function u() {
        return (u = o(
          r.mark(function t(e, n) {
            var o, s, u, c, l, h, f, d, p;
            return r.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (64 === n.length) {
                      t.next = 2;
                      break;
                    }
                    throw Error("secret must be 256 bits");
                  case 2:
                    return (
                      (o = crypto.getRandomValues(new Uint8Array(12))),
                      (t.next = 5),
                      crypto.subtle.importKey(
                        "raw",
                        (0, a.hexStringToUint8Array)(n),
                        { name: "aes-gcm" },
                        !1,
                        ["encrypt", "decrypt"]
                      )
                    );
                  case 5:
                    return (
                      (s = t.sent),
                      (u = new TextEncoder()),
                      (t.next = 9),
                      window.crypto.subtle.encrypt(
                        { name: "AES-GCM", iv: o },
                        s,
                        u.encode(e)
                      )
                    );
                  case 9:
                    return (
                      (c = t.sent),
                      16,
                      (l = c.slice(c.byteLength - 16)),
                      (h = c.slice(0, c.byteLength - 16)),
                      (f = new Uint8Array(l)),
                      (d = new Uint8Array(h)),
                      (p = new Uint8Array([].concat(i(o), i(f), i(d)))),
                      t.abrupt("return", (0, a.uint8ArrayToHex)(p))
                    );
                  case 17:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      (e.encrypt = function (t, e) {
        return u.apply(this, arguments);
      }),
        (e.decrypt = function (t, e) {
          if (64 !== e.length) throw Error("secret must be 256 bits");
          return new s.Observable(function (n) {
            o(
              r.mark(function o() {
                var s, u, c, l, h, f, d, p, v;
                return r.wrap(
                  function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (r.next = 2),
                            crypto.subtle.importKey(
                              "raw",
                              (0, a.hexStringToUint8Array)(e),
                              { name: "aes-gcm" },
                              !1,
                              ["encrypt", "decrypt"]
                            )
                          );
                        case 2:
                          return (
                            (s = r.sent),
                            (u = (0, a.hexStringToUint8Array)(t)),
                            (c = u.slice(0, 12)),
                            (l = u.slice(12, 28)),
                            (h = u.slice(28)),
                            (f = new Uint8Array([].concat(i(h), i(l)))),
                            (d = { name: "AES-GCM", iv: new Uint8Array(c) }),
                            (r.prev = 9),
                            (r.next = 12),
                            window.crypto.subtle.decrypt(d, s, f)
                          );
                        case 12:
                          (p = r.sent),
                            (v = new TextDecoder()),
                            n.next(v.decode(p)),
                            n.complete(),
                            (r.next = 21);
                          break;
                        case 18:
                          (r.prev = 18), (r.t0 = r.catch(9)), n.error(r.t0);
                        case 21:
                        case "end":
                          return r.stop();
                      }
                  },
                  o,
                  null,
                  [[9, 18]]
                );
              })
            )();
          });
        });
    },
    1284: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Web3RequestCanceledMessage = void 0);
      var r = n(1072);
      e.Web3RequestCanceledMessage = function (t) {
        return { type: r.RelayMessageType.WEB3_REQUEST_CANCELED, id: t };
      };
    },
    1285: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Web3RequestMessage = void 0);
      var r = n(1072);
      e.Web3RequestMessage = function (t) {
        return Object.assign({ type: r.RelayMessageType.WEB3_REQUEST }, t);
      };
    },
    1286: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.EthereumAddressFromSignedMessageResponse =
          e.SubmitEthereumTransactionResponse =
          e.SignEthereumTransactionResponse =
          e.SignEthereumMessageResponse =
          e.isRequestEthereumAccountsResponse =
          e.RequestEthereumAccountsResponse =
          e.SwitchEthereumChainResponse =
          e.AddEthereumChainResponse =
          e.ErrorResponse =
            void 0);
      var r = n(1138);
      (e.ErrorResponse = function (t, e, n) {
        return { method: t, errorMessage: e, errorCode: n };
      }),
        (e.AddEthereumChainResponse = function (t) {
          return { method: r.Web3Method.addEthereumChain, result: t };
        }),
        (e.SwitchEthereumChainResponse = function (t) {
          return { method: r.Web3Method.switchEthereumChain, result: t };
        }),
        (e.RequestEthereumAccountsResponse = function (t) {
          return { method: r.Web3Method.requestEthereumAccounts, result: t };
        }),
        (e.isRequestEthereumAccountsResponse = function (t) {
          return t && t.method === r.Web3Method.requestEthereumAccounts;
        }),
        (e.SignEthereumMessageResponse = function (t) {
          return { method: r.Web3Method.signEthereumMessage, result: t };
        }),
        (e.SignEthereumTransactionResponse = function (t) {
          return { method: r.Web3Method.signEthereumTransaction, result: t };
        }),
        (e.SubmitEthereumTransactionResponse = function (t) {
          return { method: r.Web3Method.submitEthereumTransaction, result: t };
        }),
        (e.EthereumAddressFromSignedMessageResponse = function (t) {
          return {
            method: r.Web3Method.ethereumAddressFromSignedMessage,
            result: t,
          };
        });
    },
    1287: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.isWeb3ResponseMessage = e.Web3ResponseMessage = void 0);
      var r = n(1072);
      (e.Web3ResponseMessage = function (t) {
        return Object.assign({ type: r.RelayMessageType.WEB3_RESPONSE }, t);
      }),
        (e.isWeb3ResponseMessage = function (t) {
          return t && t.type === r.RelayMessageType.WEB3_RESPONSE;
        });
    },
    1288: function (t, e, n) {
      "use strict";
      var r = n(91),
        i = n(92);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.WalletLinkRelayEventManager = void 0);
      var o = n(986),
        s = (function () {
          function t() {
            r(this, t), (this._nextRequestId = 0), (this.callbacks = new Map());
          }
          return (
            i(t, [
              {
                key: "makeRequestId",
                value: function () {
                  this._nextRequestId = (this._nextRequestId + 1) % 2147483647;
                  var t = this._nextRequestId,
                    e = (0, o.prepend0x)(t.toString(16));
                  return this.callbacks.get(e) && this.callbacks.delete(e), t;
                },
              },
            ]),
            t
          );
        })();
      e.WalletLinkRelayEventManager = s;
    },
    1289: function (t) {
      t.exports = JSON.parse(
        '{"name":"walletlink","version":"2.4.6","description":"WalletLink JavaScript SDK","keywords":["cipher","cipherbrowser","coinbase","coinbasewallet","eth","ether","ethereum","etherium","injection","toshi","wallet","walletlink","web3"],"main":"dist/index.js","types":"dist/index.d.ts","repository":"https://github.com/walletlink/walletlink.git","author":"Coinbase, Inc.","license":"Apache-2.0","scripts":{"tsc":"tsc --noEmit --pretty","test":"yarn build-npm && karma start","build":"node compile-assets.js && webpack --config webpack.config.js","build-chrome":"webpack --config webpack.config.chrome.js","build-npm":"tsc -p ./tsconfig.build.json","build:dev":"export WALLETLINK_URL=\'http://localhost:3000\'; yarn build && yarn build-chrome","build:dev:watch":"nodemon -e \'ts,tsx,js,json,css,scss,svg\' --ignore \'src/**/*-css.ts\' --ignore \'src/**/*-svg.ts\' --watch src/ --watch chrome/ --exec \'yarn build:dev\'","build:prod":"yarn build && yarn build-chrome && yarn build-npm && cp ./package.json ../README.md ../LICENSE build/npm && cp -a src/vendor-js build/npm/dist && sed -i.bak \'s|  \\"private\\": true,||g\' build/npm/package.json && rm -f build/npm/package.json.bak","lint":"eslint ./src --ext .ts,.tsx","lint:watch":"nodemon -e ts,tsx,js,json,css,scss,svg --watch src/ --exec \'yarn tsc && yarn lint\'"},"dependencies":{"@metamask/safe-event-emitter":"2.0.0","bind-decorator":"^1.0.11","bn.js":"^5.1.1","clsx":"^1.1.0","eth-block-tracker":"4.4.3","eth-json-rpc-filters":"4.2.2","eth-rpc-errors":"4.0.2","js-sha256":"0.9.0","json-rpc-engine":"6.1.0","keccak":"^3.0.1","preact":"^10.5.9","rxjs":"^6.6.3","stream-browserify":"^3.0.0"},"devDependencies":{"@types/bn.js":"^4.11.6","@types/node":"^14.14.20","@typescript-eslint/eslint-plugin":"^5.7.0","@typescript-eslint/eslint-plugin-tslint":"^5.7.0","@typescript-eslint/parser":"^5.7.0","browserify":"17.0.0","copy-webpack-plugin":"^6.4.1","core-js":"^3.8.2","eslint":"^8.4.1","eslint-config-prettier":"^8.3.0","eslint-plugin-import":"^2.25.3","eslint-plugin-preact":"^0.1.0","eslint-plugin-prettier":"^4.0.0","eslint-plugin-simple-import-sort":"^7.0.0","jasmine":"3.8.0","karma":"^6.3.2","karma-browserify":"8.1.0","karma-chrome-launcher":"^3.1.0","karma-jasmine":"^4.0.1","nodemon":"^2.0.6","prettier":"^2.5.1","raw-loader":"^4.0.2","regenerator-runtime":"^0.13.7","sass":"^1.32.0","svgo":"^2.8.0","ts-jest":"^26.4.4","ts-loader":"^8.0.13","tslib":"^2.0.3","typescript":"^4.1.3","watchify":"4.0.0","webpack":"^5.49.0","webpack-cli":"^3.3.12","whatwg-fetch":"^3.5.0"},"engines":{"node":">= 10.0.0"},"jest":{"transform":{"^.+\\\\.tsx?$":"ts-jest"},"testEnvironment":"node","testPathIgnorePatterns":["<rootDir>/dist/","<rootDir>/node_modules/"],"testRegex":"(/__tests__/.*|\\\\.(test|spec))\\\\.(ts|tsx|js)$","moduleFileExtensions":["ts","js","json"]}}'
      );
    },
    1290: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "Mutex", function () {
          return o;
        }),
        n.d(e, "Semaphore", function () {
          return i;
        }),
        n.d(e, "withTimeout", function () {
          return s;
        });
      var r = n(97),
        i = (function () {
          function t(t) {
            if (((this._maxConcurrency = t), (this._queue = []), t <= 0))
              throw new Error(
                "semaphore must be initialized to a positive value"
              );
            this._value = t;
          }
          return (
            (t.prototype.acquire = function () {
              var t = this,
                e = this.isLocked(),
                n = new Promise(function (e) {
                  return t._queue.push(e);
                });
              return e || this._dispatch(), n;
            }),
            (t.prototype.runExclusive = function (t) {
              return Object(r.a)(this, void 0, void 0, function () {
                var e, n, i;
                return Object(r.b)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return [4, this.acquire()];
                    case 1:
                      (e = r.sent()), (n = e[0]), (i = e[1]), (r.label = 2);
                    case 2:
                      return r.trys.push([2, , 4, 5]), [4, t(n)];
                    case 3:
                      return [2, r.sent()];
                    case 4:
                      return i(), [7];
                    case 5:
                      return [2];
                  }
                });
              });
            }),
            (t.prototype.isLocked = function () {
              return this._value <= 0;
            }),
            (t.prototype.release = function () {
              if (this._maxConcurrency > 1)
                throw new Error(
                  "this method is unavailabel on semaphores with concurrency > 1; use the scoped release returned by acquire instead"
                );
              if (this._currentReleaser) {
                var t = this._currentReleaser;
                (this._currentReleaser = void 0), t();
              }
            }),
            (t.prototype._dispatch = function () {
              var t = this,
                e = this._queue.shift();
              if (e) {
                var n = !1;
                (this._currentReleaser = function () {
                  n || ((n = !0), t._value++, t._dispatch());
                }),
                  e([this._value--, this._currentReleaser]);
              }
            }),
            t
          );
        })(),
        o = (function () {
          function t() {
            this._semaphore = new i(1);
          }
          return (
            (t.prototype.acquire = function () {
              return Object(r.a)(this, void 0, void 0, function () {
                var t;
                return Object(r.b)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [4, this._semaphore.acquire()];
                    case 1:
                      return (t = e.sent()), [2, t[1]];
                  }
                });
              });
            }),
            (t.prototype.runExclusive = function (t) {
              return this._semaphore.runExclusive(function () {
                return t();
              });
            }),
            (t.prototype.isLocked = function () {
              return this._semaphore.isLocked();
            }),
            (t.prototype.release = function () {
              this._semaphore.release();
            }),
            t
          );
        })();
      function s(t, e, n) {
        var i = this;
        return (
          void 0 === n && (n = new Error("timeout")),
          {
            acquire: function () {
              return new Promise(function (o, s) {
                return Object(r.a)(i, void 0, void 0, function () {
                  var i, a;
                  return Object(r.b)(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return (
                          (i = !1),
                          setTimeout(function () {
                            (i = !0), s(n);
                          }, e),
                          [4, t.acquire()]
                        );
                      case 1:
                        return (
                          (a = r.sent()),
                          i ? (Array.isArray(a) ? a[1] : a)() : o(a),
                          [2]
                        );
                    }
                  });
                });
              });
            },
            runExclusive: function (t) {
              return Object(r.a)(this, void 0, void 0, function () {
                var e, n;
                return Object(r.b)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      (e = function () {}), (r.label = 1);
                    case 1:
                      return r.trys.push([1, , 7, 8]), [4, this.acquire()];
                    case 2:
                      return (
                        (n = r.sent()),
                        Array.isArray(n) ? ((e = n[1]), [4, t(n[0])]) : [3, 4]
                      );
                    case 3:
                      return [2, r.sent()];
                    case 4:
                      return (e = n), [4, t()];
                    case 5:
                      return [2, r.sent()];
                    case 6:
                      return [3, 8];
                    case 7:
                      return e(), [7];
                    case 8:
                      return [2];
                  }
                });
              });
            },
            release: function () {
              t.release();
            },
            isLocked: function () {
              return t.isLocked();
            },
          }
        );
      }
    },
    872: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.WalletLink = e.WalletLinkProvider = void 0);
      var r = n(1043),
        i = n(1135),
        o = n(1043);
      Object.defineProperty(e, "WalletLinkProvider", {
        enumerable: !0,
        get: function () {
          return o.WalletLinkProvider;
        },
      });
      var s = n(1135);
      Object.defineProperty(e, "WalletLink", {
        enumerable: !0,
        get: function () {
          return s.WalletLink;
        },
      }),
        (e.default = i.WalletLink),
        "undefined" !== typeof window &&
          ((window.WalletLink = i.WalletLink),
          (window.WalletLinkProvider = r.WalletLinkProvider));
    },
    967: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var r = function (t, e) {
        return (
          (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            }),
          r(t, e)
        );
      };
      function i(t, e) {
        function n() {
          this.constructor = t;
        }
        r(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((n.prototype = e.prototype), new n()));
      }
    },
    968: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return l;
      });
      var r = n(967),
        i = n(1001),
        o = n(1112),
        s = n(971),
        a = n(1051),
        u = n(1e3),
        c = n(1050),
        l = (function (t) {
          function e(n, r, i) {
            var s = t.call(this) || this;
            switch (
              ((s.syncErrorValue = null),
              (s.syncErrorThrown = !1),
              (s.syncErrorThrowable = !1),
              (s.isStopped = !1),
              arguments.length)
            ) {
              case 0:
                s.destination = o.a;
                break;
              case 1:
                if (!n) {
                  s.destination = o.a;
                  break;
                }
                if ("object" === typeof n) {
                  n instanceof e
                    ? ((s.syncErrorThrowable = n.syncErrorThrowable),
                      (s.destination = n),
                      n.add(s))
                    : ((s.syncErrorThrowable = !0),
                      (s.destination = new h(s, n)));
                  break;
                }
              default:
                (s.syncErrorThrowable = !0),
                  (s.destination = new h(s, n, r, i));
            }
            return s;
          }
          return (
            r.a(e, t),
            (e.prototype[a.a] = function () {
              return this;
            }),
            (e.create = function (t, n, r) {
              var i = new e(t, n, r);
              return (i.syncErrorThrowable = !1), i;
            }),
            (e.prototype.next = function (t) {
              this.isStopped || this._next(t);
            }),
            (e.prototype.error = function (t) {
              this.isStopped || ((this.isStopped = !0), this._error(t));
            }),
            (e.prototype.complete = function () {
              this.isStopped || ((this.isStopped = !0), this._complete());
            }),
            (e.prototype.unsubscribe = function () {
              this.closed ||
                ((this.isStopped = !0), t.prototype.unsubscribe.call(this));
            }),
            (e.prototype._next = function (t) {
              this.destination.next(t);
            }),
            (e.prototype._error = function (t) {
              this.destination.error(t), this.unsubscribe();
            }),
            (e.prototype._complete = function () {
              this.destination.complete(), this.unsubscribe();
            }),
            (e.prototype._unsubscribeAndRecycle = function () {
              var t = this._parentOrParents;
              return (
                (this._parentOrParents = null),
                this.unsubscribe(),
                (this.closed = !1),
                (this.isStopped = !1),
                (this._parentOrParents = t),
                this
              );
            }),
            e
          );
        })(s.a),
        h = (function (t) {
          function e(e, n, r, s) {
            var a,
              u = t.call(this) || this;
            u._parentSubscriber = e;
            var c = u;
            return (
              Object(i.a)(n)
                ? (a = n)
                : n &&
                  ((a = n.next),
                  (r = n.error),
                  (s = n.complete),
                  n !== o.a &&
                    ((c = Object.create(n)),
                    Object(i.a)(c.unsubscribe) && u.add(c.unsubscribe.bind(c)),
                    (c.unsubscribe = u.unsubscribe.bind(u)))),
              (u._context = c),
              (u._next = a),
              (u._error = r),
              (u._complete = s),
              u
            );
          }
          return (
            r.a(e, t),
            (e.prototype.next = function (t) {
              if (!this.isStopped && this._next) {
                var e = this._parentSubscriber;
                u.a.useDeprecatedSynchronousErrorHandling &&
                e.syncErrorThrowable
                  ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe()
                  : this.__tryOrUnsub(this._next, t);
              }
            }),
            (e.prototype.error = function (t) {
              if (!this.isStopped) {
                var e = this._parentSubscriber,
                  n = u.a.useDeprecatedSynchronousErrorHandling;
                if (this._error)
                  n && e.syncErrorThrowable
                    ? (this.__tryOrSetError(e, this._error, t),
                      this.unsubscribe())
                    : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
                else if (e.syncErrorThrowable)
                  n
                    ? ((e.syncErrorValue = t), (e.syncErrorThrown = !0))
                    : Object(c.a)(t),
                    this.unsubscribe();
                else {
                  if ((this.unsubscribe(), n)) throw t;
                  Object(c.a)(t);
                }
              }
            }),
            (e.prototype.complete = function () {
              var t = this;
              if (!this.isStopped) {
                var e = this._parentSubscriber;
                if (this._complete) {
                  var n = function () {
                    return t._complete.call(t._context);
                  };
                  u.a.useDeprecatedSynchronousErrorHandling &&
                  e.syncErrorThrowable
                    ? (this.__tryOrSetError(e, n), this.unsubscribe())
                    : (this.__tryOrUnsub(n), this.unsubscribe());
                } else this.unsubscribe();
              }
            }),
            (e.prototype.__tryOrUnsub = function (t, e) {
              try {
                t.call(this._context, e);
              } catch (n) {
                if (
                  (this.unsubscribe(),
                  u.a.useDeprecatedSynchronousErrorHandling)
                )
                  throw n;
                Object(c.a)(n);
              }
            }),
            (e.prototype.__tryOrSetError = function (t, e, n) {
              if (!u.a.useDeprecatedSynchronousErrorHandling)
                throw new Error("bad call");
              try {
                e.call(this._context, n);
              } catch (r) {
                return u.a.useDeprecatedSynchronousErrorHandling
                  ? ((t.syncErrorValue = r), (t.syncErrorThrown = !0), !0)
                  : (Object(c.a)(r), !0);
              }
              return !1;
            }),
            (e.prototype._unsubscribe = function () {
              var t = this._parentSubscriber;
              (this._context = null),
                (this._parentSubscriber = null),
                t.unsubscribe();
            }),
            e
          );
        })(l);
    },
    969: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return l;
      });
      var r = n(1054),
        i = n(968),
        o = n(1051),
        s = n(1112);
      var a = n(983),
        u = n(1017),
        c = n(1e3),
        l = (function () {
          function t(t) {
            (this._isScalar = !1), t && (this._subscribe = t);
          }
          return (
            (t.prototype.lift = function (e) {
              var n = new t();
              return (n.source = this), (n.operator = e), n;
            }),
            (t.prototype.subscribe = function (t, e, n) {
              var r = this.operator,
                a = (function (t, e, n) {
                  if (t) {
                    if (t instanceof i.a) return t;
                    if (t[o.a]) return t[o.a]();
                  }
                  return t || e || n ? new i.a(t, e, n) : new i.a(s.a);
                })(t, e, n);
              if (
                (r
                  ? a.add(r.call(a, this.source))
                  : a.add(
                      this.source ||
                        (c.a.useDeprecatedSynchronousErrorHandling &&
                          !a.syncErrorThrowable)
                        ? this._subscribe(a)
                        : this._trySubscribe(a)
                    ),
                c.a.useDeprecatedSynchronousErrorHandling &&
                  a.syncErrorThrowable &&
                  ((a.syncErrorThrowable = !1), a.syncErrorThrown))
              )
                throw a.syncErrorValue;
              return a;
            }),
            (t.prototype._trySubscribe = function (t) {
              try {
                return this._subscribe(t);
              } catch (e) {
                c.a.useDeprecatedSynchronousErrorHandling &&
                  ((t.syncErrorThrown = !0), (t.syncErrorValue = e)),
                  Object(r.a)(t) ? t.error(e) : console.warn(e);
              }
            }),
            (t.prototype.forEach = function (t, e) {
              var n = this;
              return new (e = h(e))(function (e, r) {
                var i;
                i = n.subscribe(
                  function (e) {
                    try {
                      t(e);
                    } catch (n) {
                      r(n), i && i.unsubscribe();
                    }
                  },
                  r,
                  e
                );
              });
            }),
            (t.prototype._subscribe = function (t) {
              var e = this.source;
              return e && e.subscribe(t);
            }),
            (t.prototype[a.a] = function () {
              return this;
            }),
            (t.prototype.pipe = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              return 0 === t.length ? this : Object(u.b)(t)(this);
            }),
            (t.prototype.toPromise = function (t) {
              var e = this;
              return new (t = h(t))(function (t, n) {
                var r;
                e.subscribe(
                  function (t) {
                    return (r = t);
                  },
                  function (t) {
                    return n(t);
                  },
                  function () {
                    return t(r);
                  }
                );
              });
            }),
            (t.create = function (e) {
              return new t(e);
            }),
            t
          );
        })();
      function h(t) {
        if ((t || (t = c.a.Promise || Promise), !t))
          throw new Error("no Promise impl found");
        return t;
      }
    },
    970: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return a;
      }),
        n.d(e, "b", function () {
          return u;
        }),
        n.d(e, "c", function () {
          return c;
        });
      var r = n(967),
        i = n(968),
        o = n(969),
        s = n(1030),
        a = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (n.parent = e), n;
          }
          return (
            r.a(e, t),
            (e.prototype._next = function (t) {
              this.parent.notifyNext(t);
            }),
            (e.prototype._error = function (t) {
              this.parent.notifyError(t), this.unsubscribe();
            }),
            (e.prototype._complete = function () {
              this.parent.notifyComplete(), this.unsubscribe();
            }),
            e
          );
        })(i.a),
        u =
          (i.a,
          (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              r.a(e, t),
              (e.prototype.notifyNext = function (t) {
                this.destination.next(t);
              }),
              (e.prototype.notifyError = function (t) {
                this.destination.error(t);
              }),
              (e.prototype.notifyComplete = function () {
                this.destination.complete();
              }),
              e
            );
          })(i.a));
      i.a;
      function c(t, e) {
        if (!e.closed) {
          if (t instanceof o.a) return t.subscribe(e);
          var n;
          try {
            n = Object(s.a)(t)(e);
          } catch (r) {
            e.error(r);
          }
          return n;
        }
      }
    },
    971: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return a;
      });
      var r = n(974),
        i = n(1053),
        o = n(1001),
        s = n(1052),
        a = (function () {
          function t(t) {
            (this.closed = !1),
              (this._parentOrParents = null),
              (this._subscriptions = null),
              t && ((this._ctorUnsubscribe = !0), (this._unsubscribe = t));
          }
          var e;
          return (
            (t.prototype.unsubscribe = function () {
              var e;
              if (!this.closed) {
                var n = this,
                  a = n._parentOrParents,
                  c = n._ctorUnsubscribe,
                  l = n._unsubscribe,
                  h = n._subscriptions;
                if (
                  ((this.closed = !0),
                  (this._parentOrParents = null),
                  (this._subscriptions = null),
                  a instanceof t)
                )
                  a.remove(this);
                else if (null !== a)
                  for (var f = 0; f < a.length; ++f) {
                    a[f].remove(this);
                  }
                if (Object(o.a)(l)) {
                  c && (this._unsubscribe = void 0);
                  try {
                    l.call(this);
                  } catch (v) {
                    e = v instanceof s.a ? u(v.errors) : [v];
                  }
                }
                if (Object(r.a)(h)) {
                  f = -1;
                  for (var d = h.length; ++f < d; ) {
                    var p = h[f];
                    if (Object(i.a)(p))
                      try {
                        p.unsubscribe();
                      } catch (v) {
                        (e = e || []),
                          v instanceof s.a
                            ? (e = e.concat(u(v.errors)))
                            : e.push(v);
                      }
                  }
                }
                if (e) throw new s.a(e);
              }
            }),
            (t.prototype.add = function (e) {
              var n = e;
              if (!e) return t.EMPTY;
              switch (typeof e) {
                case "function":
                  n = new t(e);
                case "object":
                  if (
                    n === this ||
                    n.closed ||
                    "function" !== typeof n.unsubscribe
                  )
                    return n;
                  if (this.closed) return n.unsubscribe(), n;
                  if (!(n instanceof t)) {
                    var r = n;
                    (n = new t())._subscriptions = [r];
                  }
                  break;
                default:
                  throw new Error(
                    "unrecognized teardown " + e + " added to Subscription."
                  );
              }
              var i = n._parentOrParents;
              if (null === i) n._parentOrParents = this;
              else if (i instanceof t) {
                if (i === this) return n;
                n._parentOrParents = [i, this];
              } else {
                if (-1 !== i.indexOf(this)) return n;
                i.push(this);
              }
              var o = this._subscriptions;
              return null === o ? (this._subscriptions = [n]) : o.push(n), n;
            }),
            (t.prototype.remove = function (t) {
              var e = this._subscriptions;
              if (e) {
                var n = e.indexOf(t);
                -1 !== n && e.splice(n, 1);
              }
            }),
            (t.EMPTY = (((e = new t()).closed = !0), e)),
            t
          );
        })();
      function u(t) {
        return t.reduce(function (t, e) {
          return t.concat(e instanceof s.a ? e.errors : e);
        }, []);
      }
    },
    972: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return l;
      }),
        n.d(e, "a", function () {
          return h;
        });
      var r = n(967),
        i = n(969),
        o = n(968),
        s = n(971),
        a = n(1002),
        u = n(1113),
        c = n(1051),
        l = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return (n.destination = e), n;
          }
          return r.a(e, t), e;
        })(o.a),
        h = (function (t) {
          function e() {
            var e = t.call(this) || this;
            return (
              (e.observers = []),
              (e.closed = !1),
              (e.isStopped = !1),
              (e.hasError = !1),
              (e.thrownError = null),
              e
            );
          }
          return (
            r.a(e, t),
            (e.prototype[c.a] = function () {
              return new l(this);
            }),
            (e.prototype.lift = function (t) {
              var e = new f(this, this);
              return (e.operator = t), e;
            }),
            (e.prototype.next = function (t) {
              if (this.closed) throw new a.a();
              if (!this.isStopped)
                for (
                  var e = this.observers, n = e.length, r = e.slice(), i = 0;
                  i < n;
                  i++
                )
                  r[i].next(t);
            }),
            (e.prototype.error = function (t) {
              if (this.closed) throw new a.a();
              (this.hasError = !0),
                (this.thrownError = t),
                (this.isStopped = !0);
              for (
                var e = this.observers, n = e.length, r = e.slice(), i = 0;
                i < n;
                i++
              )
                r[i].error(t);
              this.observers.length = 0;
            }),
            (e.prototype.complete = function () {
              if (this.closed) throw new a.a();
              this.isStopped = !0;
              for (
                var t = this.observers, e = t.length, n = t.slice(), r = 0;
                r < e;
                r++
              )
                n[r].complete();
              this.observers.length = 0;
            }),
            (e.prototype.unsubscribe = function () {
              (this.isStopped = !0),
                (this.closed = !0),
                (this.observers = null);
            }),
            (e.prototype._trySubscribe = function (e) {
              if (this.closed) throw new a.a();
              return t.prototype._trySubscribe.call(this, e);
            }),
            (e.prototype._subscribe = function (t) {
              if (this.closed) throw new a.a();
              return this.hasError
                ? (t.error(this.thrownError), s.a.EMPTY)
                : this.isStopped
                ? (t.complete(), s.a.EMPTY)
                : (this.observers.push(t), new u.a(this, t));
            }),
            (e.prototype.asObservable = function () {
              var t = new i.a();
              return (t.source = this), t;
            }),
            (e.create = function (t, e) {
              return new f(t, e);
            }),
            e
          );
        })(i.a),
        f = (function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            return (r.destination = e), (r.source = n), r;
          }
          return (
            r.a(e, t),
            (e.prototype.next = function (t) {
              var e = this.destination;
              e && e.next && e.next(t);
            }),
            (e.prototype.error = function (t) {
              var e = this.destination;
              e && e.error && this.destination.error(t);
            }),
            (e.prototype.complete = function () {
              var t = this.destination;
              t && t.complete && this.destination.complete();
            }),
            (e.prototype._subscribe = function (t) {
              return this.source ? this.source.subscribe(t) : s.a.EMPTY;
            }),
            e
          );
        })(h);
    },
    973: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return i;
      }),
        n.d(e, "a", function () {
          return o;
        });
      var r = n(1011),
        i = new (n(1005).a)(r.a),
        o = i;
    },
    974: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      var r = (function () {
        return (
          Array.isArray ||
          function (t) {
            return t && "number" === typeof t.length;
          }
        );
      })();
    },
    975: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var r = n(967),
        i = n(968);
      function o(t, e) {
        return function (n) {
          if ("function" !== typeof t)
            throw new TypeError(
              "argument is not a function. Are you looking for `mapTo()`?"
            );
          return n.lift(new s(t, e));
        };
      }
      var s = (function () {
          function t(t, e) {
            (this.project = t), (this.thisArg = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new a(t, this.project, this.thisArg));
            }),
            t
          );
        })(),
        a = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, e) || this;
            return (i.project = n), (i.count = 0), (i.thisArg = r || i), i;
          }
          return (
            r.a(e, t),
            (e.prototype._next = function (t) {
              var e;
              try {
                e = this.project.call(this.thisArg, t, this.count++);
              } catch (n) {
                return void this.destination.error(n);
              }
              this.destination.next(e);
            }),
            e
          );
        })(i.a);
    },
    976: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      }),
        n.d(e, "b", function () {
          return o;
        });
      var r = n(969),
        i = new r.a(function (t) {
          return t.complete();
        });
      function o(t) {
        return t
          ? (function (t) {
              return new r.a(function (e) {
                return t.schedule(function () {
                  return e.complete();
                });
              });
            })(t)
          : i;
      }
    },
    977: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      var r = n(969),
        i = n(1030),
        o = n(1074);
      function s(t, e) {
        return e
          ? Object(o.a)(t, e)
          : t instanceof r.a
          ? t
          : new r.a(Object(i.a)(t));
      }
    },
    978: function (t, e, n) {
      "use strict";
      function r(t) {
        return t && "function" === typeof t.schedule;
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    979: function (t, e, n) {
      "use strict";
      function r(t) {
        return t;
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    983: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      var r = (function () {
        return (
          ("function" === typeof Symbol && Symbol.observable) || "@@observable"
        );
      })();
    },
    984: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var r = n(967),
        i = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            r.a(e, t),
            (e.prototype.notifyNext = function (t, e, n, r, i) {
              this.destination.next(e);
            }),
            (e.prototype.notifyError = function (t, e) {
              this.destination.error(t);
            }),
            (e.prototype.notifyComplete = function (t) {
              this.destination.complete();
            }),
            e
          );
        })(n(968).a);
    },
    985: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var r = n(967),
        i = n(968);
      function o(t, e) {
        return function (n) {
          return n.lift(new s(t, e));
        };
      }
      var s = (function () {
          function t(t, e) {
            (this.predicate = t), (this.thisArg = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new a(t, this.predicate, this.thisArg));
            }),
            t
          );
        })(),
        a = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, e) || this;
            return (i.predicate = n), (i.thisArg = r), (i.count = 0), i;
          }
          return (
            r.a(e, t),
            (e.prototype._next = function (t) {
              var e;
              try {
                e = this.predicate.call(this.thisArg, t, this.count++);
              } catch (n) {
                return void this.destination.error(n);
              }
              e && this.destination.next(t);
            }),
            e
          );
        })(i.a);
    },
    986: function (t, e, n) {
      "use strict";
      (function (t) {
        var r = n(453),
          i =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getFavicon =
            e.range =
            e.isBigNumber =
            e.ensureParsedJSONObject =
            e.ensureBN =
            e.ensureRegExpString =
            e.ensureIntNumber =
            e.ensureBuffer =
            e.ensureAddressString =
            e.ensureEvenLengthHexString =
            e.ensureHexString =
            e.isHexString =
            e.prepend0x =
            e.strip0x =
            e.has0xPrefix =
            e.hexStringFromIntNumber =
            e.intNumberFromHexString =
            e.bigIntStringFromBN =
            e.hexStringFromBuffer =
            e.hexStringToUint8Array =
            e.uint8ArrayToHex =
            e.randomBytesHex =
              void 0);
        var o = i(n(1016)),
          s = n(1065),
          a = /^[0-9]*$/,
          u = /^[a-f0-9]*$/;
        function c(t) {
          return r(t)
            .map(function (t) {
              return t.toString(16).padStart(2, "0");
            })
            .join("");
        }
        function l(t) {
          return t.startsWith("0x") || t.startsWith("0X");
        }
        function h(t) {
          return l(t) ? t.slice(2) : t;
        }
        function f(t) {
          return l(t) ? "0x" + t.slice(2) : "0x" + t;
        }
        function d(t) {
          if ("string" !== typeof t) return !1;
          var e = h(t).toLowerCase();
          return u.test(e);
        }
        function p(t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if ("string" === typeof t) {
            var n = h(t).toLowerCase();
            if (u.test(n)) return (0, s.HexString)(e ? "0x" + n : n);
          }
          throw new Error(
            '"'.concat(String(t), '" is not a hexadecimal string')
          );
        }
        function v(t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = p(t, !1);
          return (
            n.length % 2 === 1 && (n = (0, s.HexString)("0" + n)),
            e ? (0, s.HexString)("0x" + n) : n
          );
        }
        function b(t) {
          if ("number" === typeof t && Number.isInteger(t))
            return (0, s.IntNumber)(t);
          if ("string" === typeof t) {
            if (a.test(t)) return (0, s.IntNumber)(Number(t));
            if (d(t))
              return (0, s.IntNumber)(new o.default(v(t, !1), 16).toNumber());
          }
          throw new Error("Not an integer: ".concat(String(t)));
        }
        function y(t) {
          if (null == t || "function" !== typeof t.constructor) return !1;
          var e = t.constructor;
          return "function" === typeof e.config && "number" === typeof e.EUCLID;
        }
        (e.randomBytesHex = function (t) {
          return c(crypto.getRandomValues(new Uint8Array(t)));
        }),
          (e.uint8ArrayToHex = c),
          (e.hexStringToUint8Array = function (t) {
            return new Uint8Array(
              t.match(/.{1,2}/g).map(function (t) {
                return parseInt(t, 16);
              })
            );
          }),
          (e.hexStringFromBuffer = function (t) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n = t.toString("hex");
            return (0, s.HexString)(e ? "0x" + n : n);
          }),
          (e.bigIntStringFromBN = function (t) {
            return (0, s.BigIntString)(t.toString(10));
          }),
          (e.intNumberFromHexString = function (t) {
            return (0, s.IntNumber)(new o.default(v(t, !1), 16).toNumber());
          }),
          (e.hexStringFromIntNumber = function (t) {
            return (0, s.HexString)("0x" + new o.default(t).toString(16));
          }),
          (e.has0xPrefix = l),
          (e.strip0x = h),
          (e.prepend0x = f),
          (e.isHexString = d),
          (e.ensureHexString = p),
          (e.ensureEvenLengthHexString = v),
          (e.ensureAddressString = function (t) {
            if ("string" === typeof t) {
              var e = h(t).toLowerCase();
              if (d(e) && 40 === e.length) return (0, s.AddressString)(f(e));
            }
            throw new Error("Invalid Ethereum address: ".concat(String(t)));
          }),
          (e.ensureBuffer = function (e) {
            if (t.isBuffer(e)) return e;
            if ("string" === typeof e) {
              if (d(e)) {
                var n = v(e, !1);
                return t.from(n, "hex");
              }
              return t.from(e, "utf8");
            }
            throw new Error("Not binary data: ".concat(String(e)));
          }),
          (e.ensureIntNumber = b),
          (e.ensureRegExpString = function (t) {
            if (t instanceof RegExp) return (0, s.RegExpString)(t.toString());
            throw new Error("Not a RegExp: ".concat(String(t)));
          }),
          (e.ensureBN = function (t) {
            if (null !== t && (o.default.isBN(t) || y(t)))
              return new o.default(t.toString(10), 10);
            if ("number" === typeof t) return new o.default(b(t));
            if ("string" === typeof t) {
              if (a.test(t)) return new o.default(t, 10);
              if (d(t)) return new o.default(v(t, !1), 16);
            }
            throw new Error("Not an integer: ".concat(String(t)));
          }),
          (e.ensureParsedJSONObject = function (t) {
            if ("string" === typeof t) return JSON.parse(t);
            if ("object" === typeof t) return t;
            throw new Error(
              "Not a JSON string or an object: ".concat(String(t))
            );
          }),
          (e.isBigNumber = y),
          (e.range = function (t, e) {
            return Array.from({ length: e - t }, function (e, n) {
              return t + n;
            });
          }),
          (e.getFavicon = function () {
            var t =
                document.querySelector('link[sizes="192x192"]') ||
                document.querySelector('link[sizes="180x180"]') ||
                document.querySelector('link[rel="icon"]') ||
                document.querySelector('link[rel="shortcut icon"]'),
              e = document.location,
              n = e.protocol,
              r = e.host,
              i = t ? t.getAttribute("href") : null;
            return !i || i.startsWith("javascript:")
              ? null
              : i.startsWith("http://") ||
                i.startsWith("https://") ||
                i.startsWith("data:")
              ? i
              : i.startsWith("//")
              ? n + i
              : "".concat(n, "//").concat(r).concat(i);
          });
      }.call(this, n(230).Buffer));
    },
    987: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "render", function () {
          return D;
        }),
        n.d(e, "hydrate", function () {
          return B;
        }),
        n.d(e, "createElement", function () {
          return p;
        }),
        n.d(e, "h", function () {
          return p;
        }),
        n.d(e, "Fragment", function () {
          return y;
        }),
        n.d(e, "createRef", function () {
          return b;
        }),
        n.d(e, "isValidElement", function () {
          return i;
        }),
        n.d(e, "Component", function () {
          return g;
        }),
        n.d(e, "cloneElement", function () {
          return H;
        }),
        n.d(e, "createContext", function () {
          return F;
        }),
        n.d(e, "toChildArray", function () {
          return S;
        }),
        n.d(e, "options", function () {
          return r;
        });
      var r,
        i,
        o,
        s,
        a,
        u,
        c = {},
        l = [],
        h = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      function f(t, e) {
        for (var n in e) t[n] = e[n];
        return t;
      }
      function d(t) {
        var e = t.parentNode;
        e && e.removeChild(t);
      }
      function p(t, e, n) {
        var r,
          i,
          o,
          s = arguments,
          a = {};
        for (o in e)
          "key" == o ? (r = e[o]) : "ref" == o ? (i = e[o]) : (a[o] = e[o]);
        if (arguments.length > 3)
          for (n = [n], o = 3; o < arguments.length; o++) n.push(s[o]);
        if (
          (null != n && (a.children = n),
          "function" == typeof t && null != t.defaultProps)
        )
          for (o in t.defaultProps)
            void 0 === a[o] && (a[o] = t.defaultProps[o]);
        return v(t, a, r, i, null);
      }
      function v(t, e, n, i, o) {
        var s = {
          type: t,
          props: e,
          key: n,
          ref: i,
          __k: null,
          __: null,
          __b: 0,
          __e: null,
          __d: void 0,
          __c: null,
          __h: null,
          constructor: void 0,
          __v: null == o ? ++r.__v : o,
        };
        return null != r.vnode && r.vnode(s), s;
      }
      function b() {
        return { current: null };
      }
      function y(t) {
        return t.children;
      }
      function g(t, e) {
        (this.props = t), (this.context = e);
      }
      function m(t, e) {
        if (null == e) return t.__ ? m(t.__, t.__.__k.indexOf(t) + 1) : null;
        for (var n; e < t.__k.length; e++)
          if (null != (n = t.__k[e]) && null != n.__e) return n.__e;
        return "function" == typeof t.type ? m(t) : null;
      }
      function w(t) {
        var e, n;
        if (null != (t = t.__) && null != t.__c) {
          for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
            if (null != (n = t.__k[e]) && null != n.__e) {
              t.__e = t.__c.base = n.__e;
              break;
            }
          return w(t);
        }
      }
      function _(t) {
        ((!t.__d && (t.__d = !0) && o.push(t) && !k.__r++) ||
          a !== r.debounceRendering) &&
          ((a = r.debounceRendering) || s)(k);
      }
      function k() {
        for (var t; (k.__r = o.length); )
          (t = o.sort(function (t, e) {
            return t.__v.__b - e.__v.__b;
          })),
            (o = []),
            t.some(function (t) {
              var e, n, r, i, o, s;
              t.__d &&
                ((o = (i = (e = t).__v).__e),
                (s = e.__P) &&
                  ((n = []),
                  ((r = f({}, i)).__v = i.__v + 1),
                  I(
                    s,
                    i,
                    r,
                    e.__n,
                    void 0 !== s.ownerSVGElement,
                    null != i.__h ? [o] : null,
                    n,
                    null == o ? m(i) : o,
                    i.__h
                  ),
                  T(n, i),
                  i.__e != o && w(i)));
            });
      }
      function x(t, e, n, r, i, o, s, a, u, h) {
        var f,
          d,
          p,
          b,
          g,
          w,
          _,
          k = (r && r.__k) || l,
          x = k.length;
        for (n.__k = [], f = 0; f < e.length; f++)
          if (
            null !=
            (b = n.__k[f] =
              null == (b = e[f]) || "boolean" == typeof b
                ? null
                : "string" == typeof b ||
                  "number" == typeof b ||
                  "bigint" == typeof b
                ? v(null, b, null, null, b)
                : Array.isArray(b)
                ? v(y, { children: b }, null, null, null)
                : b.__b > 0
                ? v(b.type, b.props, b.key, null, b.__v)
                : b)
          ) {
            if (
              ((b.__ = n),
              (b.__b = n.__b + 1),
              null === (p = k[f]) || (p && b.key == p.key && b.type === p.type))
            )
              k[f] = void 0;
            else
              for (d = 0; d < x; d++) {
                if ((p = k[d]) && b.key == p.key && b.type === p.type) {
                  k[d] = void 0;
                  break;
                }
                p = null;
              }
            I(t, b, (p = p || c), i, o, s, a, u, h),
              (g = b.__e),
              (d = b.ref) &&
                p.ref != d &&
                (_ || (_ = []),
                p.ref && _.push(p.ref, null, b),
                _.push(d, b.__c || g, b)),
              null != g
                ? (null == w && (w = g),
                  "function" == typeof b.type &&
                  null != b.__k &&
                  b.__k === p.__k
                    ? (b.__d = u = E(b, u, t))
                    : (u = M(t, b, p, k, g, u)),
                  h || "option" !== n.type
                    ? "function" == typeof n.type && (n.__d = u)
                    : (t.value = ""))
                : u && p.__e == u && u.parentNode != t && (u = m(p));
          }
        for (n.__e = w, f = x; f--; )
          null != k[f] &&
            ("function" == typeof n.type &&
              null != k[f].__e &&
              k[f].__e == n.__d &&
              (n.__d = m(r, f + 1)),
            L(k[f], k[f]));
        if (_) for (f = 0; f < _.length; f++) j(_[f], _[++f], _[++f]);
      }
      function E(t, e, n) {
        var r, i;
        for (r = 0; r < t.__k.length; r++)
          (i = t.__k[r]) &&
            ((i.__ = t),
            (e =
              "function" == typeof i.type
                ? E(i, e, n)
                : M(n, i, i, t.__k, i.__e, e)));
        return e;
      }
      function S(t, e) {
        return (
          (e = e || []),
          null == t ||
            "boolean" == typeof t ||
            (Array.isArray(t)
              ? t.some(function (t) {
                  S(t, e);
                })
              : e.push(t)),
          e
        );
      }
      function M(t, e, n, r, i, o) {
        var s, a, u;
        if (void 0 !== e.__d) (s = e.__d), (e.__d = void 0);
        else if (null == n || i != o || null == i.parentNode)
          t: if (null == o || o.parentNode !== t) t.appendChild(i), (s = null);
          else {
            for (a = o, u = 0; (a = a.nextSibling) && u < r.length; u += 2)
              if (a == i) break t;
            t.insertBefore(i, o), (s = o);
          }
        return void 0 !== s ? s : i.nextSibling;
      }
      function C(t, e, n) {
        "-" === e[0]
          ? t.setProperty(e, n)
          : (t[e] =
              null == n
                ? ""
                : "number" != typeof n || h.test(e)
                ? n
                : n + "px");
      }
      function A(t, e, n, r, i) {
        var o;
        t: if ("style" === e)
          if ("string" == typeof n) t.style.cssText = n;
          else {
            if (("string" == typeof r && (t.style.cssText = r = ""), r))
              for (e in r) (n && e in n) || C(t.style, e, "");
            if (n) for (e in n) (r && n[e] === r[e]) || C(t.style, e, n[e]);
          }
        else if ("o" === e[0] && "n" === e[1])
          (o = e !== (e = e.replace(/Capture$/, ""))),
            (e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2)),
            t.l || (t.l = {}),
            (t.l[e + o] = n),
            n
              ? r || t.addEventListener(e, o ? O : R, o)
              : t.removeEventListener(e, o ? O : R, o);
        else if ("dangerouslySetInnerHTML" !== e) {
          if (i) e = e.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
          else if (
            "href" !== e &&
            "list" !== e &&
            "form" !== e &&
            "tabIndex" !== e &&
            "download" !== e &&
            e in t
          )
            try {
              t[e] = null == n ? "" : n;
              break t;
            } catch (t) {}
          "function" == typeof n ||
            (null != n && (!1 !== n || ("a" === e[0] && "r" === e[1]))
              ? t.setAttribute(e, n)
              : t.removeAttribute(e));
        }
      }
      function R(t) {
        this.l[t.type + !1](r.event ? r.event(t) : t);
      }
      function O(t) {
        this.l[t.type + !0](r.event ? r.event(t) : t);
      }
      function I(t, e, n, i, o, s, a, u, c) {
        var l,
          h,
          d,
          p,
          v,
          b,
          m,
          w,
          _,
          k,
          E,
          S = e.type;
        if (void 0 !== e.constructor) return null;
        null != n.__h &&
          ((c = n.__h), (u = e.__e = n.__e), (e.__h = null), (s = [u])),
          (l = r.__b) && l(e);
        try {
          t: if ("function" == typeof S) {
            if (
              ((w = e.props),
              (_ = (l = S.contextType) && i[l.__c]),
              (k = l ? (_ ? _.props.value : l.__) : i),
              n.__c
                ? (m = (h = e.__c = n.__c).__ = h.__E)
                : ("prototype" in S && S.prototype.render
                    ? (e.__c = h = new S(w, k))
                    : ((e.__c = h = new g(w, k)),
                      (h.constructor = S),
                      (h.render = P)),
                  _ && _.sub(h),
                  (h.props = w),
                  h.state || (h.state = {}),
                  (h.context = k),
                  (h.__n = i),
                  (d = h.__d = !0),
                  (h.__h = [])),
              null == h.__s && (h.__s = h.state),
              null != S.getDerivedStateFromProps &&
                (h.__s == h.state && (h.__s = f({}, h.__s)),
                f(h.__s, S.getDerivedStateFromProps(w, h.__s))),
              (p = h.props),
              (v = h.state),
              d)
            )
              null == S.getDerivedStateFromProps &&
                null != h.componentWillMount &&
                h.componentWillMount(),
                null != h.componentDidMount && h.__h.push(h.componentDidMount);
            else {
              if (
                (null == S.getDerivedStateFromProps &&
                  w !== p &&
                  null != h.componentWillReceiveProps &&
                  h.componentWillReceiveProps(w, k),
                (!h.__e &&
                  null != h.shouldComponentUpdate &&
                  !1 === h.shouldComponentUpdate(w, h.__s, k)) ||
                  e.__v === n.__v)
              ) {
                (h.props = w),
                  (h.state = h.__s),
                  e.__v !== n.__v && (h.__d = !1),
                  (h.__v = e),
                  (e.__e = n.__e),
                  (e.__k = n.__k),
                  e.__k.forEach(function (t) {
                    t && (t.__ = e);
                  }),
                  h.__h.length && a.push(h);
                break t;
              }
              null != h.componentWillUpdate &&
                h.componentWillUpdate(w, h.__s, k),
                null != h.componentDidUpdate &&
                  h.__h.push(function () {
                    h.componentDidUpdate(p, v, b);
                  });
            }
            (h.context = k),
              (h.props = w),
              (h.state = h.__s),
              (l = r.__r) && l(e),
              (h.__d = !1),
              (h.__v = e),
              (h.__P = t),
              (l = h.render(h.props, h.state, h.context)),
              (h.state = h.__s),
              null != h.getChildContext &&
                (i = f(f({}, i), h.getChildContext())),
              d ||
                null == h.getSnapshotBeforeUpdate ||
                (b = h.getSnapshotBeforeUpdate(p, v)),
              (E =
                null != l && l.type === y && null == l.key
                  ? l.props.children
                  : l),
              x(t, Array.isArray(E) ? E : [E], e, n, i, o, s, a, u, c),
              (h.base = e.__e),
              (e.__h = null),
              h.__h.length && a.push(h),
              m && (h.__E = h.__ = null),
              (h.__e = !1);
          } else
            null == s && e.__v === n.__v
              ? ((e.__k = n.__k), (e.__e = n.__e))
              : (e.__e = N(n.__e, e, n, i, o, s, a, c));
          (l = r.diffed) && l(e);
        } catch (t) {
          (e.__v = null),
            (c || null != s) &&
              ((e.__e = u), (e.__h = !!c), (s[s.indexOf(u)] = null)),
            r.__e(t, e, n);
        }
      }
      function T(t, e) {
        r.__c && r.__c(e, t),
          t.some(function (e) {
            try {
              (t = e.__h),
                (e.__h = []),
                t.some(function (t) {
                  t.call(e);
                });
            } catch (t) {
              r.__e(t, e.__v);
            }
          });
      }
      function N(t, e, n, r, i, o, s, a) {
        var u,
          h,
          f,
          p,
          v = n.props,
          b = e.props,
          y = e.type,
          g = 0;
        if (("svg" === y && (i = !0), null != o))
          for (; g < o.length; g++)
            if (
              (u = o[g]) &&
              (u === t || (y ? u.localName == y : 3 == u.nodeType))
            ) {
              (t = u), (o[g] = null);
              break;
            }
        if (null == t) {
          if (null === y) return document.createTextNode(b);
          (t = i
            ? document.createElementNS("http://www.w3.org/2000/svg", y)
            : document.createElement(y, b.is && b)),
            (o = null),
            (a = !1);
        }
        if (null === y) v === b || (a && t.data === b) || (t.data = b);
        else {
          if (
            ((o = o && l.slice.call(t.childNodes)),
            (h = (v = n.props || c).dangerouslySetInnerHTML),
            (f = b.dangerouslySetInnerHTML),
            !a)
          ) {
            if (null != o)
              for (v = {}, p = 0; p < t.attributes.length; p++)
                v[t.attributes[p].name] = t.attributes[p].value;
            (f || h) &&
              ((f &&
                ((h && f.__html == h.__html) || f.__html === t.innerHTML)) ||
                (t.innerHTML = (f && f.__html) || ""));
          }
          if (
            ((function (t, e, n, r, i) {
              var o;
              for (o in n)
                "children" === o ||
                  "key" === o ||
                  o in e ||
                  A(t, o, null, n[o], r);
              for (o in e)
                (i && "function" != typeof e[o]) ||
                  "children" === o ||
                  "key" === o ||
                  "value" === o ||
                  "checked" === o ||
                  n[o] === e[o] ||
                  A(t, o, e[o], n[o], r);
            })(t, b, v, i, a),
            f)
          )
            e.__k = [];
          else if (
            ((g = e.props.children),
            x(
              t,
              Array.isArray(g) ? g : [g],
              e,
              n,
              r,
              i && "foreignObject" !== y,
              o,
              s,
              t.firstChild,
              a
            ),
            null != o)
          )
            for (g = o.length; g--; ) null != o[g] && d(o[g]);
          a ||
            ("value" in b &&
              void 0 !== (g = b.value) &&
              (g !== t.value || ("progress" === y && !g)) &&
              A(t, "value", g, v.value, !1),
            "checked" in b &&
              void 0 !== (g = b.checked) &&
              g !== t.checked &&
              A(t, "checked", g, v.checked, !1));
        }
        return t;
      }
      function j(t, e, n) {
        try {
          "function" == typeof t ? t(e) : (t.current = e);
        } catch (t) {
          r.__e(t, n);
        }
      }
      function L(t, e, n) {
        var i, o, s;
        if (
          (r.unmount && r.unmount(t),
          (i = t.ref) && ((i.current && i.current !== t.__e) || j(i, null, e)),
          n || "function" == typeof t.type || (n = null != (o = t.__e)),
          (t.__e = t.__d = void 0),
          null != (i = t.__c))
        ) {
          if (i.componentWillUnmount)
            try {
              i.componentWillUnmount();
            } catch (t) {
              r.__e(t, e);
            }
          i.base = i.__P = null;
        }
        if ((i = t.__k)) for (s = 0; s < i.length; s++) i[s] && L(i[s], e, n);
        null != o && d(o);
      }
      function P(t, e, n) {
        return this.constructor(t, n);
      }
      function D(t, e, n) {
        var i, o, s;
        r.__ && r.__(t, e),
          (o = (i = "function" == typeof n) ? null : (n && n.__k) || e.__k),
          (s = []),
          I(
            e,
            (t = ((!i && n) || e).__k = p(y, null, [t])),
            o || c,
            c,
            void 0 !== e.ownerSVGElement,
            !i && n
              ? [n]
              : o
              ? null
              : e.firstChild
              ? l.slice.call(e.childNodes)
              : null,
            s,
            !i && n ? n : o ? o.__e : e.firstChild,
            i
          ),
          T(s, t);
      }
      function B(t, e) {
        D(t, e, B);
      }
      function H(t, e, n) {
        var r,
          i,
          o,
          s = arguments,
          a = f({}, t.props);
        for (o in e)
          "key" == o ? (r = e[o]) : "ref" == o ? (i = e[o]) : (a[o] = e[o]);
        if (arguments.length > 3)
          for (n = [n], o = 3; o < arguments.length; o++) n.push(s[o]);
        return (
          null != n && (a.children = n),
          v(t.type, a, r || t.key, i || t.ref, null)
        );
      }
      function F(t, e) {
        var n = {
          __c: (e = "__cC" + u++),
          __: t,
          Consumer: function (t, e) {
            return t.children(e);
          },
          Provider: function (t) {
            var n, r;
            return (
              this.getChildContext ||
                ((n = []),
                ((r = {})[e] = this),
                (this.getChildContext = function () {
                  return r;
                }),
                (this.shouldComponentUpdate = function (t) {
                  this.props.value !== t.value && n.some(_);
                }),
                (this.sub = function (t) {
                  n.push(t);
                  var e = t.componentWillUnmount;
                  t.componentWillUnmount = function () {
                    n.splice(n.indexOf(t), 1), e && e.call(t);
                  };
                })),
              t.children
            );
          },
        };
        return (n.Provider.__ = n.Consumer.contextType = n);
      }
      (r = {
        __e: function (t, e) {
          for (var n, r, i; (e = e.__); )
            if ((n = e.__c) && !n.__)
              try {
                if (
                  ((r = n.constructor) &&
                    null != r.getDerivedStateFromError &&
                    (n.setState(r.getDerivedStateFromError(t)), (i = n.__d)),
                  null != n.componentDidCatch &&
                    (n.componentDidCatch(t), (i = n.__d)),
                  i)
                )
                  return (n.__E = n);
              } catch (e) {
                t = e;
              }
          throw t;
        },
        __v: 0,
      }),
        (i = function (t) {
          return null != t && void 0 === t.constructor;
        }),
        (g.prototype.setState = function (t, e) {
          var n;
          (n =
            null != this.__s && this.__s !== this.state
              ? this.__s
              : (this.__s = f({}, this.state))),
            "function" == typeof t && (t = t(f({}, n), this.props)),
            t && f(n, t),
            null != t && this.__v && (e && this.__h.push(e), _(this));
        }),
        (g.prototype.forceUpdate = function (t) {
          this.__v && ((this.__e = !0), t && this.__h.push(t), _(this));
        }),
        (g.prototype.render = y),
        (o = []),
        (s =
          "function" == typeof Promise
            ? Promise.prototype.then.bind(Promise.resolve())
            : setTimeout),
        (k.__r = 0),
        (u = 0);
    },
    988: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return a;
      });
      var r = n(967),
        i = (function (t) {
          function e(e, n, r) {
            var i = t.call(this) || this;
            return (
              (i.parent = e),
              (i.outerValue = n),
              (i.outerIndex = r),
              (i.index = 0),
              i
            );
          }
          return (
            r.a(e, t),
            (e.prototype._next = function (t) {
              this.parent.notifyNext(
                this.outerValue,
                t,
                this.outerIndex,
                this.index++,
                this
              );
            }),
            (e.prototype._error = function (t) {
              this.parent.notifyError(t, this), this.unsubscribe();
            }),
            (e.prototype._complete = function () {
              this.parent.notifyComplete(this), this.unsubscribe();
            }),
            e
          );
        })(n(968).a),
        o = n(1030),
        s = n(969);
      function a(t, e, n, r, a) {
        if ((void 0 === a && (a = new i(t, n, r)), !a.closed))
          return e instanceof s.a ? e.subscribe(a) : Object(o.a)(e)(a);
      }
    },
    991: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return r;
      }),
        n.d(e, "a", function () {
          return a;
        });
      var r,
        i = n(976),
        o = n(1003),
        s = n(1021);
      r || (r = {});
      var a = (function () {
        function t(t, e, n) {
          (this.kind = t),
            (this.value = e),
            (this.error = n),
            (this.hasValue = "N" === t);
        }
        return (
          (t.prototype.observe = function (t) {
            switch (this.kind) {
              case "N":
                return t.next && t.next(this.value);
              case "E":
                return t.error && t.error(this.error);
              case "C":
                return t.complete && t.complete();
            }
          }),
          (t.prototype.do = function (t, e, n) {
            switch (this.kind) {
              case "N":
                return t && t(this.value);
              case "E":
                return e && e(this.error);
              case "C":
                return n && n();
            }
          }),
          (t.prototype.accept = function (t, e, n) {
            return t && "function" === typeof t.next
              ? this.observe(t)
              : this.do(t, e, n);
          }),
          (t.prototype.toObservable = function () {
            switch (this.kind) {
              case "N":
                return Object(o.a)(this.value);
              case "E":
                return Object(s.a)(this.error);
              case "C":
                return Object(i.b)();
            }
            throw new Error("unexpected notification kind value");
          }),
          (t.createNext = function (e) {
            return "undefined" !== typeof e
              ? new t("N", e)
              : t.undefinedValueNotification;
          }),
          (t.createError = function (e) {
            return new t("E", void 0, e);
          }),
          (t.createComplete = function () {
            return t.completeNotification;
          }),
          (t.completeNotification = new t("C")),
          (t.undefinedValueNotification = new t("N", void 0)),
          t
        );
      })();
    },
    992: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      var r = (function () {
        function t() {
          return (
            Error.call(this),
            (this.message = "argument out of range"),
            (this.name = "ArgumentOutOfRangeError"),
            this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
    },
    993: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      var r = (function () {
        function t() {
          return (
            Error.call(this),
            (this.message = "no elements in sequence"),
            (this.name = "EmptyError"),
            this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
    },
    994: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return a;
      }),
        n.d(e, "a", function () {
          return l;
        });
      var r = n(967),
        i = n(975),
        o = n(977),
        s = n(970);
      function a(t, e, n) {
        return (
          void 0 === n && (n = Number.POSITIVE_INFINITY),
          "function" === typeof e
            ? function (r) {
                return r.pipe(
                  a(function (n, r) {
                    return Object(o.a)(t(n, r)).pipe(
                      Object(i.a)(function (t, i) {
                        return e(n, t, r, i);
                      })
                    );
                  }, n)
                );
              }
            : ("number" === typeof e && (n = e),
              function (e) {
                return e.lift(new u(t, n));
              })
        );
      }
      var u = (function () {
          function t(t, e) {
            void 0 === e && (e = Number.POSITIVE_INFINITY),
              (this.project = t),
              (this.concurrent = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new c(t, this.project, this.concurrent));
            }),
            t
          );
        })(),
        c = (function (t) {
          function e(e, n, r) {
            void 0 === r && (r = Number.POSITIVE_INFINITY);
            var i = t.call(this, e) || this;
            return (
              (i.project = n),
              (i.concurrent = r),
              (i.hasCompleted = !1),
              (i.buffer = []),
              (i.active = 0),
              (i.index = 0),
              i
            );
          }
          return (
            r.a(e, t),
            (e.prototype._next = function (t) {
              this.active < this.concurrent
                ? this._tryNext(t)
                : this.buffer.push(t);
            }),
            (e.prototype._tryNext = function (t) {
              var e,
                n = this.index++;
              try {
                e = this.project(t, n);
              } catch (r) {
                return void this.destination.error(r);
              }
              this.active++, this._innerSub(e);
            }),
            (e.prototype._innerSub = function (t) {
              var e = new s.a(this),
                n = this.destination;
              n.add(e);
              var r = Object(s.c)(t, e);
              r !== e && n.add(r);
            }),
            (e.prototype._complete = function () {
              (this.hasCompleted = !0),
                0 === this.active &&
                  0 === this.buffer.length &&
                  this.destination.complete(),
                this.unsubscribe();
            }),
            (e.prototype.notifyNext = function (t) {
              this.destination.next(t);
            }),
            (e.prototype.notifyComplete = function () {
              var t = this.buffer;
              this.active--,
                t.length > 0
                  ? this._next(t.shift())
                  : 0 === this.active &&
                    this.hasCompleted &&
                    this.destination.complete();
            }),
            e
          );
        })(s.b),
        l = a;
    },
    995: function (t, e, n) {
      "use strict";
      var r = {};
      function i(t, e, n) {
        n || (n = Error);
        var i = (function (t) {
          var n, r;
          function i(n, r, i) {
            return (
              t.call(
                this,
                (function (t, n, r) {
                  return "string" === typeof e ? e : e(t, n, r);
                })(n, r, i)
              ) || this
            );
          }
          return (
            (r = t),
            ((n = i).prototype = Object.create(r.prototype)),
            (n.prototype.constructor = n),
            (n.__proto__ = r),
            i
          );
        })(n);
        (i.prototype.name = n.name), (i.prototype.code = t), (r[t] = i);
      }
      function o(t, e) {
        if (Array.isArray(t)) {
          var n = t.length;
          return (
            (t = t.map(function (t) {
              return String(t);
            })),
            n > 2
              ? "one of "
                  .concat(e, " ")
                  .concat(t.slice(0, n - 1).join(", "), ", or ") + t[n - 1]
              : 2 === n
              ? "one of ".concat(e, " ").concat(t[0], " or ").concat(t[1])
              : "of ".concat(e, " ").concat(t[0])
          );
        }
        return "of ".concat(e, " ").concat(String(t));
      }
      i(
        "ERR_INVALID_OPT_VALUE",
        function (t, e) {
          return 'The value "' + e + '" is invalid for option "' + t + '"';
        },
        TypeError
      ),
        i(
          "ERR_INVALID_ARG_TYPE",
          function (t, e, n) {
            var r, i, s, a;
            if (
              ("string" === typeof e &&
              ((i = "not "), e.substr(!s || s < 0 ? 0 : +s, i.length) === i)
                ? ((r = "must not be"), (e = e.replace(/^not /, "")))
                : (r = "must be"),
              (function (t, e, n) {
                return (
                  (void 0 === n || n > t.length) && (n = t.length),
                  t.substring(n - e.length, n) === e
                );
              })(t, " argument"))
            )
              a = "The ".concat(t, " ").concat(r, " ").concat(o(e, "type"));
            else {
              var u = (function (t, e, n) {
                return (
                  "number" !== typeof n && (n = 0),
                  !(n + e.length > t.length) && -1 !== t.indexOf(e, n)
                );
              })(t, ".")
                ? "property"
                : "argument";
              a = 'The "'
                .concat(t, '" ')
                .concat(u, " ")
                .concat(r, " ")
                .concat(o(e, "type"));
            }
            return (a += ". Received type ".concat(typeof n));
          },
          TypeError
        ),
        i("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"),
        i("ERR_METHOD_NOT_IMPLEMENTED", function (t) {
          return "The " + t + " method is not implemented";
        }),
        i("ERR_STREAM_PREMATURE_CLOSE", "Premature close"),
        i("ERR_STREAM_DESTROYED", function (t) {
          return "Cannot call " + t + " after a stream was destroyed";
        }),
        i("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"),
        i("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"),
        i("ERR_STREAM_WRITE_AFTER_END", "write after end"),
        i(
          "ERR_STREAM_NULL_VALUES",
          "May not write null values to stream",
          TypeError
        ),
        i(
          "ERR_UNKNOWN_ENCODING",
          function (t) {
            return "Unknown encoding: " + t;
          },
          TypeError
        ),
        i(
          "ERR_STREAM_UNSHIFT_AFTER_END_EVENT",
          "stream.unshift() after end event"
        ),
        (t.exports.codes = r);
    },
    996: function (t, e, n) {
      "use strict";
      (function (e) {
        var r =
          Object.keys ||
          function (t) {
            var e = [];
            for (var n in t) e.push(n);
            return e;
          };
        t.exports = c;
        var i = n(1121),
          o = n(1125);
        n(455)(c, i);
        for (var s = r(o.prototype), a = 0; a < s.length; a++) {
          var u = s[a];
          c.prototype[u] || (c.prototype[u] = o.prototype[u]);
        }
        function c(t) {
          if (!(this instanceof c)) return new c(t);
          i.call(this, t),
            o.call(this, t),
            (this.allowHalfOpen = !0),
            t &&
              (!1 === t.readable && (this.readable = !1),
              !1 === t.writable && (this.writable = !1),
              !1 === t.allowHalfOpen &&
                ((this.allowHalfOpen = !1), this.once("end", l)));
        }
        function l() {
          this._writableState.ended || e.nextTick(h, this);
        }
        function h(t) {
          t.end();
        }
        Object.defineProperty(c.prototype, "writableHighWaterMark", {
          enumerable: !1,
          get: function () {
            return this._writableState.highWaterMark;
          },
        }),
          Object.defineProperty(c.prototype, "writableBuffer", {
            enumerable: !1,
            get: function () {
              return this._writableState && this._writableState.getBuffer();
            },
          }),
          Object.defineProperty(c.prototype, "writableLength", {
            enumerable: !1,
            get: function () {
              return this._writableState.length;
            },
          }),
          Object.defineProperty(c.prototype, "destroyed", {
            enumerable: !1,
            get: function () {
              return (
                void 0 !== this._readableState &&
                void 0 !== this._writableState &&
                this._readableState.destroyed &&
                this._writableState.destroyed
              );
            },
            set: function (t) {
              void 0 !== this._readableState &&
                void 0 !== this._writableState &&
                ((this._readableState.destroyed = t),
                (this._writableState.destroyed = t));
            },
          });
      }.call(this, n(72)));
    },
    997: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "Observable", function () {
          return r.a;
        }),
        n.d(e, "ConnectableObservable", function () {
          return i.a;
        }),
        n.d(e, "GroupedObservable", function () {
          return o.a;
        }),
        n.d(e, "observable", function () {
          return s.a;
        }),
        n.d(e, "Subject", function () {
          return a.a;
        }),
        n.d(e, "BehaviorSubject", function () {
          return u.a;
        }),
        n.d(e, "ReplaySubject", function () {
          return c.a;
        }),
        n.d(e, "AsyncSubject", function () {
          return l.a;
        }),
        n.d(e, "asap", function () {
          return h.a;
        }),
        n.d(e, "asapScheduler", function () {
          return h.b;
        }),
        n.d(e, "async", function () {
          return f.a;
        }),
        n.d(e, "asyncScheduler", function () {
          return f.b;
        }),
        n.d(e, "queue", function () {
          return d.a;
        }),
        n.d(e, "queueScheduler", function () {
          return d.b;
        }),
        n.d(e, "animationFrame", function () {
          return w;
        }),
        n.d(e, "animationFrameScheduler", function () {
          return m;
        }),
        n.d(e, "VirtualTimeScheduler", function () {
          return _;
        }),
        n.d(e, "VirtualAction", function () {
          return k;
        }),
        n.d(e, "Scheduler", function () {
          return x.a;
        }),
        n.d(e, "Subscription", function () {
          return E.a;
        }),
        n.d(e, "Subscriber", function () {
          return S.a;
        }),
        n.d(e, "Notification", function () {
          return M.a;
        }),
        n.d(e, "NotificationKind", function () {
          return M.b;
        }),
        n.d(e, "pipe", function () {
          return C.a;
        }),
        n.d(e, "noop", function () {
          return A.a;
        }),
        n.d(e, "identity", function () {
          return R.a;
        }),
        n.d(e, "isObservable", function () {
          return O;
        }),
        n.d(e, "ArgumentOutOfRangeError", function () {
          return I.a;
        }),
        n.d(e, "EmptyError", function () {
          return T.a;
        }),
        n.d(e, "ObjectUnsubscribedError", function () {
          return N.a;
        }),
        n.d(e, "UnsubscriptionError", function () {
          return j.a;
        }),
        n.d(e, "TimeoutError", function () {
          return L.a;
        }),
        n.d(e, "bindCallback", function () {
          return F;
        }),
        n.d(e, "bindNodeCallback", function () {
          return z;
        }),
        n.d(e, "combineLatest", function () {
          return G.b;
        }),
        n.d(e, "concat", function () {
          return J.a;
        }),
        n.d(e, "defer", function () {
          return K.a;
        }),
        n.d(e, "empty", function () {
          return X.b;
        }),
        n.d(e, "forkJoin", function () {
          return $;
        }),
        n.d(e, "from", function () {
          return Z.a;
        }),
        n.d(e, "fromEvent", function () {
          return nt;
        }),
        n.d(e, "fromEventPattern", function () {
          return it;
        }),
        n.d(e, "generate", function () {
          return ot;
        }),
        n.d(e, "iif", function () {
          return at;
        }),
        n.d(e, "interval", function () {
          return ct;
        }),
        n.d(e, "merge", function () {
          return ht.a;
        }),
        n.d(e, "never", function () {
          return dt;
        }),
        n.d(e, "of", function () {
          return pt.a;
        }),
        n.d(e, "onErrorResumeNext", function () {
          return vt;
        }),
        n.d(e, "pairs", function () {
          return bt;
        }),
        n.d(e, "partition", function () {
          return _t;
        }),
        n.d(e, "race", function () {
          return kt.a;
        }),
        n.d(e, "range", function () {
          return xt;
        }),
        n.d(e, "throwError", function () {
          return St.a;
        }),
        n.d(e, "timer", function () {
          return Mt.a;
        }),
        n.d(e, "using", function () {
          return Ct;
        }),
        n.d(e, "zip", function () {
          return At.b;
        }),
        n.d(e, "scheduled", function () {
          return Rt.a;
        }),
        n.d(e, "EMPTY", function () {
          return X.a;
        }),
        n.d(e, "NEVER", function () {
          return ft;
        }),
        n.d(e, "config", function () {
          return Ot.a;
        });
      var r = n(969),
        i = n(1055),
        o = n(1019),
        s = n(983),
        a = n(972),
        u = n(1056),
        c = n(1020),
        l = n(1006),
        h = n(1029),
        f = n(973),
        d = n(1031),
        p = n(967),
        v = n(1011),
        b = (function (t) {
          function e(e, n) {
            var r = t.call(this, e, n) || this;
            return (r.scheduler = e), (r.work = n), r;
          }
          return (
            p.a(e, t),
            (e.prototype.requestAsyncId = function (e, n, r) {
              return (
                void 0 === r && (r = 0),
                null !== r && r > 0
                  ? t.prototype.requestAsyncId.call(this, e, n, r)
                  : (e.actions.push(this),
                    e.scheduled ||
                      (e.scheduled = requestAnimationFrame(function () {
                        return e.flush(null);
                      })))
              );
            }),
            (e.prototype.recycleAsyncId = function (e, n, r) {
              if (
                (void 0 === r && (r = 0),
                (null !== r && r > 0) || (null === r && this.delay > 0))
              )
                return t.prototype.recycleAsyncId.call(this, e, n, r);
              0 === e.actions.length &&
                (cancelAnimationFrame(n), (e.scheduled = void 0));
            }),
            e
          );
        })(v.a),
        y = n(1005),
        g = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            p.a(e, t),
            (e.prototype.flush = function (t) {
              (this.active = !0), (this.scheduled = void 0);
              var e,
                n = this.actions,
                r = -1,
                i = n.length;
              t = t || n.shift();
              do {
                if ((e = t.execute(t.state, t.delay))) break;
              } while (++r < i && (t = n.shift()));
              if (((this.active = !1), e)) {
                for (; ++r < i && (t = n.shift()); ) t.unsubscribe();
                throw e;
              }
            }),
            e
          );
        })(y.a),
        m = new g(b),
        w = m,
        _ = (function (t) {
          function e(e, n) {
            void 0 === e && (e = k),
              void 0 === n && (n = Number.POSITIVE_INFINITY);
            var r =
              t.call(this, e, function () {
                return r.frame;
              }) || this;
            return (r.maxFrames = n), (r.frame = 0), (r.index = -1), r;
          }
          return (
            p.a(e, t),
            (e.prototype.flush = function () {
              for (
                var t, e, n = this.actions, r = this.maxFrames;
                (e = n[0]) &&
                e.delay <= r &&
                (n.shift(),
                (this.frame = e.delay),
                !(t = e.execute(e.state, e.delay)));

              );
              if (t) {
                for (; (e = n.shift()); ) e.unsubscribe();
                throw t;
              }
            }),
            (e.frameTimeFactor = 10),
            e
          );
        })(y.a),
        k = (function (t) {
          function e(e, n, r) {
            void 0 === r && (r = e.index += 1);
            var i = t.call(this, e, n) || this;
            return (
              (i.scheduler = e),
              (i.work = n),
              (i.index = r),
              (i.active = !0),
              (i.index = e.index = r),
              i
            );
          }
          return (
            p.a(e, t),
            (e.prototype.schedule = function (n, r) {
              if ((void 0 === r && (r = 0), !this.id))
                return t.prototype.schedule.call(this, n, r);
              this.active = !1;
              var i = new e(this.scheduler, this.work);
              return this.add(i), i.schedule(n, r);
            }),
            (e.prototype.requestAsyncId = function (t, n, r) {
              void 0 === r && (r = 0), (this.delay = t.frame + r);
              var i = t.actions;
              return i.push(this), i.sort(e.sortActions), !0;
            }),
            (e.prototype.recycleAsyncId = function (t, e, n) {
              void 0 === n && (n = 0);
            }),
            (e.prototype._execute = function (e, n) {
              if (!0 === this.active)
                return t.prototype._execute.call(this, e, n);
            }),
            (e.sortActions = function (t, e) {
              return t.delay === e.delay
                ? t.index === e.index
                  ? 0
                  : t.index > e.index
                  ? 1
                  : -1
                : t.delay > e.delay
                ? 1
                : -1;
            }),
            e
          );
        })(v.a),
        x = n(1059),
        E = n(971),
        S = n(968),
        M = n(991),
        C = n(1017),
        A = n(1022),
        R = n(979);
      function O(t) {
        return (
          !!t &&
          (t instanceof r.a ||
            ("function" === typeof t.lift && "function" === typeof t.subscribe))
        );
      }
      var I = n(992),
        T = n(993),
        N = n(1002),
        j = n(1052),
        L = n(1060),
        P = n(975),
        D = n(1054),
        B = n(974),
        H = n(978);
      function F(t, e, n) {
        if (e) {
          if (!Object(H.a)(e))
            return function () {
              for (var r = [], i = 0; i < arguments.length; i++)
                r[i] = arguments[i];
              return F(t, n)
                .apply(void 0, r)
                .pipe(
                  Object(P.a)(function (t) {
                    return Object(B.a)(t) ? e.apply(void 0, t) : e(t);
                  })
                );
            };
          n = e;
        }
        return function () {
          for (var e = [], i = 0; i < arguments.length; i++)
            e[i] = arguments[i];
          var o,
            s = this,
            a = { context: s, subject: o, callbackFunc: t, scheduler: n };
          return new r.a(function (r) {
            if (n) {
              var i = { args: e, subscriber: r, params: a };
              return n.schedule(U, 0, i);
            }
            if (!o) {
              o = new l.a();
              try {
                t.apply(
                  s,
                  e.concat([
                    function () {
                      for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                      o.next(t.length <= 1 ? t[0] : t), o.complete();
                    },
                  ])
                );
              } catch (u) {
                Object(D.a)(o) ? o.error(u) : console.warn(u);
              }
            }
            return o.subscribe(r);
          });
        };
      }
      function U(t) {
        var e = this,
          n = t.args,
          r = t.subscriber,
          i = t.params,
          o = i.callbackFunc,
          s = i.context,
          a = i.scheduler,
          u = i.subject;
        if (!u) {
          u = i.subject = new l.a();
          try {
            o.apply(
              s,
              n.concat([
                function () {
                  for (var t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                  var r = t.length <= 1 ? t[0] : t;
                  e.add(a.schedule(W, 0, { value: r, subject: u }));
                },
              ])
            );
          } catch (c) {
            u.error(c);
          }
        }
        this.add(u.subscribe(r));
      }
      function W(t) {
        var e = t.value,
          n = t.subject;
        n.next(e), n.complete();
      }
      function z(t, e, n) {
        if (e) {
          if (!Object(H.a)(e))
            return function () {
              for (var r = [], i = 0; i < arguments.length; i++)
                r[i] = arguments[i];
              return z(t, n)
                .apply(void 0, r)
                .pipe(
                  Object(P.a)(function (t) {
                    return Object(B.a)(t) ? e.apply(void 0, t) : e(t);
                  })
                );
            };
          n = e;
        }
        return function () {
          for (var e = [], i = 0; i < arguments.length; i++)
            e[i] = arguments[i];
          var o = {
            subject: void 0,
            args: e,
            callbackFunc: t,
            scheduler: n,
            context: this,
          };
          return new r.a(function (r) {
            var i = o.context,
              s = o.subject;
            if (n)
              return n.schedule(q, 0, { params: o, subscriber: r, context: i });
            if (!s) {
              s = o.subject = new l.a();
              try {
                t.apply(
                  i,
                  e.concat([
                    function () {
                      for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                      var n = t.shift();
                      n
                        ? s.error(n)
                        : (s.next(t.length <= 1 ? t[0] : t), s.complete());
                    },
                  ])
                );
              } catch (a) {
                Object(D.a)(s) ? s.error(a) : console.warn(a);
              }
            }
            return s.subscribe(r);
          });
        };
      }
      function q(t) {
        var e = this,
          n = t.params,
          r = t.subscriber,
          i = t.context,
          o = n.callbackFunc,
          s = n.args,
          a = n.scheduler,
          u = n.subject;
        if (!u) {
          u = n.subject = new l.a();
          try {
            o.apply(
              i,
              s.concat([
                function () {
                  for (var t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                  var r = t.shift();
                  if (r) e.add(a.schedule(Y, 0, { err: r, subject: u }));
                  else {
                    var i = t.length <= 1 ? t[0] : t;
                    e.add(a.schedule(V, 0, { value: i, subject: u }));
                  }
                },
              ])
            );
          } catch (c) {
            this.add(a.schedule(Y, 0, { err: c, subject: u }));
          }
        }
        this.add(u.subscribe(r));
      }
      function V(t) {
        var e = t.value,
          n = t.subject;
        n.next(e), n.complete();
      }
      function Y(t) {
        var e = t.err;
        t.subject.error(e);
      }
      var G = n(1023),
        J = n(1008),
        K = n(1025),
        X = n(976),
        Q = n(1053),
        Z = n(977);
      function $() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        if (1 === t.length) {
          var n = t[0];
          if (Object(B.a)(n)) return tt(n, null);
          if (Object(Q.a)(n) && Object.getPrototypeOf(n) === Object.prototype) {
            var r = Object.keys(n);
            return tt(
              r.map(function (t) {
                return n[t];
              }),
              r
            );
          }
        }
        if ("function" === typeof t[t.length - 1]) {
          var i = t.pop();
          return tt(
            (t = 1 === t.length && Object(B.a)(t[0]) ? t[0] : t),
            null
          ).pipe(
            Object(P.a)(function (t) {
              return i.apply(void 0, t);
            })
          );
        }
        return tt(t, null);
      }
      function tt(t, e) {
        return new r.a(function (n) {
          var r = t.length;
          if (0 !== r)
            for (
              var i = new Array(r),
                o = 0,
                s = 0,
                a = function (a) {
                  var u = Object(Z.a)(t[a]),
                    c = !1;
                  n.add(
                    u.subscribe({
                      next: function (t) {
                        c || ((c = !0), s++), (i[a] = t);
                      },
                      error: function (t) {
                        return n.error(t);
                      },
                      complete: function () {
                        (++o !== r && c) ||
                          (s === r &&
                            n.next(
                              e
                                ? e.reduce(function (t, e, n) {
                                    return (t[e] = i[n]), t;
                                  }, {})
                                : i
                            ),
                          n.complete());
                      },
                    })
                  );
                },
                u = 0;
              u < r;
              u++
            )
              a(u);
          else n.complete();
        });
      }
      var et = n(1001);
      function nt(t, e, n, i) {
        return (
          Object(et.a)(n) && ((i = n), (n = void 0)),
          i
            ? nt(t, e, n).pipe(
                Object(P.a)(function (t) {
                  return Object(B.a)(t) ? i.apply(void 0, t) : i(t);
                })
              )
            : new r.a(function (r) {
                rt(
                  t,
                  e,
                  function (t) {
                    arguments.length > 1
                      ? r.next(Array.prototype.slice.call(arguments))
                      : r.next(t);
                  },
                  r,
                  n
                );
              })
        );
      }
      function rt(t, e, n, r, i) {
        var o;
        if (
          (function (t) {
            return (
              t &&
              "function" === typeof t.addEventListener &&
              "function" === typeof t.removeEventListener
            );
          })(t)
        ) {
          var s = t;
          t.addEventListener(e, n, i),
            (o = function () {
              return s.removeEventListener(e, n, i);
            });
        } else if (
          (function (t) {
            return (
              t && "function" === typeof t.on && "function" === typeof t.off
            );
          })(t)
        ) {
          var a = t;
          t.on(e, n),
            (o = function () {
              return a.off(e, n);
            });
        } else if (
          (function (t) {
            return (
              t &&
              "function" === typeof t.addListener &&
              "function" === typeof t.removeListener
            );
          })(t)
        ) {
          var u = t;
          t.addListener(e, n),
            (o = function () {
              return u.removeListener(e, n);
            });
        } else {
          if (!t || !t.length) throw new TypeError("Invalid event target");
          for (var c = 0, l = t.length; c < l; c++) rt(t[c], e, n, r, i);
        }
        r.add(o);
      }
      function it(t, e, n) {
        return n
          ? it(t, e).pipe(
              Object(P.a)(function (t) {
                return Object(B.a)(t) ? n.apply(void 0, t) : n(t);
              })
            )
          : new r.a(function (n) {
              var r,
                i = function () {
                  for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                  return n.next(1 === t.length ? t[0] : t);
                };
              try {
                r = t(i);
              } catch (o) {
                return void n.error(o);
              }
              if (Object(et.a)(e))
                return function () {
                  return e(i, r);
                };
            });
      }
      function ot(t, e, n, i, o) {
        var s, a;
        if (1 == arguments.length) {
          var u = t;
          (a = u.initialState),
            (e = u.condition),
            (n = u.iterate),
            (s = u.resultSelector || R.a),
            (o = u.scheduler);
        } else
          void 0 === i || Object(H.a)(i)
            ? ((a = t), (s = R.a), (o = i))
            : ((a = t), (s = i));
        return new r.a(function (t) {
          var r = a;
          if (o)
            return o.schedule(st, 0, {
              subscriber: t,
              iterate: n,
              condition: e,
              resultSelector: s,
              state: r,
            });
          for (;;) {
            if (e) {
              var i = void 0;
              try {
                i = e(r);
              } catch (c) {
                return void t.error(c);
              }
              if (!i) {
                t.complete();
                break;
              }
            }
            var u = void 0;
            try {
              u = s(r);
            } catch (c) {
              return void t.error(c);
            }
            if ((t.next(u), t.closed)) break;
            try {
              r = n(r);
            } catch (c) {
              return void t.error(c);
            }
          }
        });
      }
      function st(t) {
        var e = t.subscriber,
          n = t.condition;
        if (!e.closed) {
          if (t.needIterate)
            try {
              t.state = t.iterate(t.state);
            } catch (o) {
              return void e.error(o);
            }
          else t.needIterate = !0;
          if (n) {
            var r = void 0;
            try {
              r = n(t.state);
            } catch (o) {
              return void e.error(o);
            }
            if (!r) return void e.complete();
            if (e.closed) return;
          }
          var i;
          try {
            i = t.resultSelector(t.state);
          } catch (o) {
            return void e.error(o);
          }
          if (!e.closed && (e.next(i), !e.closed)) return this.schedule(t);
        }
      }
      function at(t, e, n) {
        return (
          void 0 === e && (e = X.a),
          void 0 === n && (n = X.a),
          Object(K.a)(function () {
            return t() ? e : n;
          })
        );
      }
      var ut = n(1026);
      function ct(t, e) {
        return (
          void 0 === t && (t = 0),
          void 0 === e && (e = f.a),
          (!Object(ut.a)(t) || t < 0) && (t = 0),
          (e && "function" === typeof e.schedule) || (e = f.a),
          new r.a(function (n) {
            return (
              n.add(
                e.schedule(lt, t, { subscriber: n, counter: 0, period: t })
              ),
              n
            );
          })
        );
      }
      function lt(t) {
        var e = t.subscriber,
          n = t.counter,
          r = t.period;
        e.next(n),
          this.schedule({ subscriber: e, counter: n + 1, period: r }, r);
      }
      var ht = n(1062),
        ft = new r.a(A.a);
      function dt() {
        return ft;
      }
      var pt = n(1003);
      function vt() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        if (0 === t.length) return X.a;
        var n = t[0],
          i = t.slice(1);
        return 1 === t.length && Object(B.a)(n)
          ? vt.apply(void 0, n)
          : new r.a(function (t) {
              var e = function () {
                return t.add(vt.apply(void 0, i).subscribe(t));
              };
              return Object(Z.a)(n).subscribe({
                next: function (e) {
                  t.next(e);
                },
                error: e,
                complete: e,
              });
            });
      }
      function bt(t, e) {
        return e
          ? new r.a(function (n) {
              var r = Object.keys(t),
                i = new E.a();
              return (
                i.add(
                  e.schedule(yt, 0, {
                    keys: r,
                    index: 0,
                    subscriber: n,
                    subscription: i,
                    obj: t,
                  })
                ),
                i
              );
            })
          : new r.a(function (e) {
              for (
                var n = Object.keys(t), r = 0;
                r < n.length && !e.closed;
                r++
              ) {
                var i = n[r];
                t.hasOwnProperty(i) && e.next([i, t[i]]);
              }
              e.complete();
            });
      }
      function yt(t) {
        var e = t.keys,
          n = t.index,
          r = t.subscriber,
          i = t.subscription,
          o = t.obj;
        if (!r.closed)
          if (n < e.length) {
            var s = e[n];
            r.next([s, o[s]]),
              i.add(
                this.schedule({
                  keys: e,
                  index: n + 1,
                  subscriber: r,
                  subscription: i,
                  obj: o,
                })
              );
          } else r.complete();
      }
      var gt = n(1117),
        mt = n(1030),
        wt = n(985);
      function _t(t, e, n) {
        return [
          Object(wt.a)(e, n)(new r.a(Object(mt.a)(t))),
          Object(wt.a)(Object(gt.a)(e, n))(new r.a(Object(mt.a)(t))),
        ];
      }
      var kt = n(1063);
      function xt(t, e, n) {
        return (
          void 0 === t && (t = 0),
          new r.a(function (r) {
            void 0 === e && ((e = t), (t = 0));
            var i = 0,
              o = t;
            if (n)
              return n.schedule(Et, 0, {
                index: i,
                count: e,
                start: t,
                subscriber: r,
              });
            for (;;) {
              if (i++ >= e) {
                r.complete();
                break;
              }
              if ((r.next(o++), r.closed)) break;
            }
          })
        );
      }
      function Et(t) {
        var e = t.start,
          n = t.index,
          r = t.count,
          i = t.subscriber;
        n >= r
          ? i.complete()
          : (i.next(e),
            i.closed ||
              ((t.index = n + 1), (t.start = e + 1), this.schedule(t)));
      }
      var St = n(1021),
        Mt = n(1064);
      function Ct(t, e) {
        return new r.a(function (n) {
          var r, i;
          try {
            r = t();
          } catch (s) {
            return void n.error(s);
          }
          try {
            i = e(r);
          } catch (s) {
            return void n.error(s);
          }
          var o = (i ? Object(Z.a)(i) : X.a).subscribe(n);
          return function () {
            o.unsubscribe(), r && r.unsubscribe();
          };
        });
      }
      var At = n(1027),
        Rt = n(1074),
        Ot = n(1e3);
    },
  },
]);
//# sourceMappingURL=36.7974b806.chunk.js.map
