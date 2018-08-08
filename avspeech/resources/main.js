for (var k, aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
		if (c.get || c.set) throw new TypeError("ES3 does not support getters and setters.");
		a != Array.prototype && a != Object.prototype && (a[b] = c.value)
	}, l = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this, ba = function () {
		ba = function () {};
		l.Symbol || (l.Symbol = ca)
	}, da = 0, ca = function (a) {
		return "jscomp_symbol_" + (a || "") + da++
	}, fa = function () {
		ba();
		var a = l.Symbol.iterator;
		a || (a = l.Symbol.iterator =
			l.Symbol("iterator"));
		"function" != typeof Array.prototype[a] && aa(Array.prototype, a, {
			configurable: !0,
			writable: !0,
			value: function () {
				return ea(this)
			}
		});
		fa = function () {}
	}, ea = function (a) {
		var b = 0;
		return ha(function () {
			return b < a.length ? {
				done: !1,
				value: a[b++]
			} : {
				done: !0
			}
		})
	}, ha = function (a) {
		fa();
		a = {
			next: a
		};
		a[l.Symbol.iterator] = function () {
			return this
		};
		return a
	}, ia = function (a) {
		fa();
		var b = a[Symbol.iterator];
		return b ? b.call(a) : ea(a)
	}, m = l, ja = ["Array", "from"], ka = 0; ka < ja.length - 1; ka++) {
	var la = ja[ka];
	la in m || (m[la] = {});
	m = m[la]
}
var ma = ja[ja.length - 1],
	na = m[ma],
	oa = na ? na : function (a, b, c) {
		fa();
		b = null != b ? b : function (a) {
			return a
		};
		var d = [],
			e = a[Symbol.iterator];
		if ("function" == typeof e)
			for (a = e.call(a); !(e = a.next()).done;) d.push(b.call(c, e.value));
		else
			for (var e = a.length, f = 0; f < e; f++) d.push(b.call(c, a[f]));
		return d
	};
oa != na && null != oa && aa(m, ma, {
	configurable: !0,
	writable: !0,
	value: oa
});
var pa = pa || {},
	n = this,
	qa = function () {},
	r = function (a) {
		var b = typeof a;
		if ("object" == b)
			if (a) {
				if (a instanceof Array) return "array";
				if (a instanceof Object) return b;
				var c = Object.prototype.toString.call(a);
				if ("[object Window]" == c) return "object";
				if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
				if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable &&
					!a.propertyIsEnumerable("call")) return "function"
			} else return "null";
		else if ("function" == b && "undefined" == typeof a.call) return "object";
		return b
	},
	u = function (a) {
		return "array" == r(a)
	},
	ra = function (a) {
		var b = r(a);
		return "array" == b || "object" == b && "number" == typeof a.length
	},
	v = function (a) {
		return "string" == typeof a
	},
	w = function (a) {
		return "number" == typeof a
	},
	sa = function (a) {
		return "function" == r(a)
	},
	ta = function (a) {
		var b = typeof a;
		return "object" == b && null != a || "function" == b
	},
	ua = function (a, b, c) {
		return a.call.apply(a.bind, arguments)
	},
	va = function (a, b, c) {
		if (!a) throw Error();
		if (2 < arguments.length) {
			var d = Array.prototype.slice.call(arguments, 2);
			return function () {
				var c = Array.prototype.slice.call(arguments);
				Array.prototype.unshift.apply(c, d);
				return a.apply(b, c)
			}
		}
		return function () {
			return a.apply(b, arguments)
		}
	},
	x = function (a, b, c) {
		x = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ua : va;
		return x.apply(null, arguments)
	},
	wa = Date.now || function () {
		return +new Date
	},
	xa = function (a, b) {
		a = a.split(".");
		var c = n;
		a[0] in
			c || !c.execScript || c.execScript("var " + a[0]);
		for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {} : c[d] = b
	},
	y = function (a, b) {
		function c() {}
		c.prototype = b.prototype;
		a.ta = b.prototype;
		a.prototype = new c;
		a.prototype.constructor = a;
		a.Gb = function (a, c, f) {
			for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
			return b.prototype[c].apply(a, d)
		}
	};
var ya = function (a) {
	if (Error.captureStackTrace) Error.captureStackTrace(this, ya);
	else {
		var b = Error().stack;
		b && (this.stack = b)
	}
	a && (this.message = String(a))
};
y(ya, Error);
ya.prototype.name = "CustomError";
var za;
var Aa = function (a, b) {
		for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) d += c.shift() + e.shift();
		return d + c.join("%s")
	},
	Ba = String.prototype.trim ? function (a) {
		return a.trim()
	} : function (a) {
		return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
	},
	z = function (a) {
		if (!Ca.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Da, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Ea, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Fa, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Ga, "&quot;")); - 1 != a.indexOf("'") &&
			(a = a.replace(Ha, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Ia, "&#0;"));
		return a
	},
	Da = /&/g,
	Ea = /</g,
	Fa = />/g,
	Ga = /"/g,
	Ha = /'/g,
	Ia = /\x00/g,
	Ca = /[\x00&<>"']/,
	Ja = function (a, b) {
		return -1 != a.toLowerCase().indexOf(b.toLowerCase())
	},
	Ka = function (a, b) {
		return a < b ? -1 : a > b ? 1 : 0
	};
var La = function (a, b) {
	b.unshift(a);
	ya.call(this, Aa.apply(null, b));
	b.shift()
};
y(La, ya);
La.prototype.name = "AssertionError";
var Ma = function (a, b, c, d) {
		var e = "Assertion failed";
		if (c) var e = e + (": " + c),
			f = d;
		else a && (e += ": " + a, f = b);
		throw new La("" + e, f || []);
	},
	A = function (a, b, c) {
		a || Ma("", null, b, Array.prototype.slice.call(arguments, 2))
	},
	B = function (a, b) {
		throw new La("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
	},
	Na = function (a, b, c) {
		v(a) || Ma("Expected string but got %s: %s.", [r(a), a], b, Array.prototype.slice.call(arguments, 2));
		return a
	};
var Oa = Array.prototype.indexOf ? function (a, b, c) {
		A(null != a.length);
		return Array.prototype.indexOf.call(a, b, c)
	} : function (a, b, c) {
		c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
		if (v(a)) return v(b) && 1 == b.length ? a.indexOf(b, c) : -1;
		for (; c < a.length; c++)
			if (c in a && a[c] === b) return c;
		return -1
	},
	C = Array.prototype.forEach ? function (a, b, c) {
		A(null != a.length);
		Array.prototype.forEach.call(a, b, c)
	} : function (a, b, c) {
		for (var d = a.length, e = v(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
	},
	Pa = Array.prototype.filter ? function (a,
		b, c) {
		A(null != a.length);
		return Array.prototype.filter.call(a, b, c)
	} : function (a, b, c) {
		for (var d = a.length, e = [], f = 0, g = v(a) ? a.split("") : a, h = 0; h < d; h++)
			if (h in g) {
				var t = g[h];
				b.call(c, t, h, a) && (e[f++] = t)
			}
		return e
	},
	Qa = Array.prototype.map ? function (a, b, c) {
		A(null != a.length);
		return Array.prototype.map.call(a, b, c)
	} : function (a, b, c) {
		for (var d = a.length, e = Array(d), f = v(a) ? a.split("") : a, g = 0; g < d; g++) g in f && (e[g] = b.call(c, f[g], g, a));
		return e
	},
	Ra = Array.prototype.some ? function (a, b, c) {
		A(null != a.length);
		return Array.prototype.some.call(a,
			b, c)
	} : function (a, b, c) {
		for (var d = a.length, e = v(a) ? a.split("") : a, f = 0; f < d; f++)
			if (f in e && b.call(c, e[f], f, a)) return !0;
		return !1
	},
	Ta = function (a) {
		var b;
		a: {
			b = Sa;
			for (var c = a.length, d = v(a) ? a.split("") : a, e = 0; e < c; e++)
				if (e in d && b.call(void 0, d[e], e, a)) {
					b = e;
					break a
				}
			b = -1
		}
		return 0 > b ? null : v(a) ? a.charAt(b) : a[b]
	},
	Ua = function (a, b) {
		b = Oa(a, b);
		var c;
		if (c = 0 <= b) A(null != a.length), Array.prototype.splice.call(a, b, 1);
		return c
	},
	Va = function (a) {
		var b = a.length;
		if (0 < b) {
			for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
			return c
		}
		return []
	},
	Wa =
	function (a) {
		for (var b = Math.random, c = a.length - 1; 0 < c; c--) {
			var d = Math.floor(b() * (c + 1)),
				e = a[c];
			a[c] = a[d];
			a[d] = e
		}
	};
var D;
a: {
	var Xa = n.navigator;
	if (Xa) {
		var Ya = Xa.userAgent;
		if (Ya) {
			D = Ya;
			break a
		}
	}
	D = ""
}
var E = function (a) {
	return -1 != D.indexOf(a)
};
var Za = function (a, b, c) {
		for (var d in a) b.call(c, a[d], d, a)
	},
	$a = function (a) {
		var b = [],
			c = 0,
			d;
		for (d in a) b[c++] = a[d];
		return b
	},
	ab = function (a) {
		var b = [],
			c = 0,
			d;
		for (d in a) b[c++] = d;
		return b
	},
	bb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
	cb = function (a, b) {
		for (var c, d, e = 1; e < arguments.length; e++) {
			d = arguments[e];
			for (c in d) a[c] = d[c];
			for (var f = 0; f < bb.length; f++) c = bb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
		}
	};
var db = function (a) {
	db[" "](a);
	return a
};
db[" "] = qa;
var fb = function (a, b) {
	var c = eb;
	return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
};
var gb = E("Opera"),
	F = E("Trident") || E("MSIE"),
	hb = E("Edge"),
	ib = E("Gecko") && !(Ja(D, "WebKit") && !E("Edge")) && !(E("Trident") || E("MSIE")) && !E("Edge"),
	jb = Ja(D, "WebKit") && !E("Edge"),
	kb = function () {
		var a = n.document;
		return a ? a.documentMode : void 0
	},
	lb;
a: {
	var mb = "",
		nb = function () {
			var a = D;
			if (ib) return /rv\:([^\);]+)(\)|;)/.exec(a);
			if (hb) return /Edge\/([\d\.]+)/.exec(a);
			if (F) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
			if (jb) return /WebKit\/(\S+)/.exec(a);
			if (gb) return /(?:Version)[ \/]?(\S+)/.exec(a)
		}();nb && (mb = nb ? nb[1] : "");
	if (F) {
		var ob = kb();
		if (null != ob && ob > parseFloat(mb)) {
			lb = String(ob);
			break a
		}
	}
	lb = mb
}
var pb = lb,
	eb = {},
	G = function (a) {
		return fb(a, function () {
			for (var b = 0, c = Ba(String(pb)).split("."), d = Ba(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
				var g = c[f] || "",
					h = d[f] || "";
				do {
					g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
					h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
					if (0 == g[0].length && 0 == h[0].length) break;
					b = Ka(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || Ka(0 == g[2].length, 0 == h[2].length) || Ka(g[2], h[2]);
					g = g[3];
					h = h[3]
				} while (0 == b)
			}
			return 0 <= b
		})
	},
	qb;
var rb = n.document;
qb = rb && F ? kb() || ("CSS1Compat" == rb.compatMode ? parseInt(pb, 10) : 5) : void 0;
var sb = !F || 9 <= Number(qb),
	tb = !ib && !F || F && 9 <= Number(qb) || ib && G("1.9.1"),
	ub = F && !G("9");
var wb = function () {
	this.sa = "";
	this.pb = vb
};
wb.prototype.ka = !0;
wb.prototype.ia = function () {
	return this.sa
};
wb.prototype.toString = function () {
	return "Const{" + this.sa + "}"
};
var xb = function (a) {
		if (a instanceof wb && a.constructor === wb && a.pb === vb) return a.sa;
		B("expected object of type Const, got '" + a + "'");
		return "type_error:Const"
	},
	vb = {},
	yb = function (a) {
		var b = new wb;
		b.sa = a;
		return b
	};
yb("");
var Ab = function () {
	this.La = "";
	this.qb = zb
};
k = Ab.prototype;
k.ka = !0;
k.ia = function () {
	return this.La
};
k.Fa = !0;
k.Z = function () {
	return 1
};
k.toString = function () {
	return "TrustedResourceUrl{" + this.La + "}"
};
var zb = {};
var Cb = function () {
	this.C = "";
	this.ob = Bb
};
k = Cb.prototype;
k.ka = !0;
k.ia = function () {
	return this.C
};
k.Fa = !0;
k.Z = function () {
	return 1
};
k.toString = function () {
	return "SafeUrl{" + this.C + "}"
};
var Bb = {};
var H = function () {
	this.C = "";
	this.nb = Db;
	this.Ra = null
};
k = H.prototype;
k.Fa = !0;
k.Z = function () {
	return this.Ra
};
k.ka = !0;
k.ia = function () {
	return this.C
};
k.toString = function () {
	return "SafeHtml{" + this.C + "}"
};
var Eb = function (a) {
		if (a instanceof H && a.constructor === H && a.nb === Db) return a.C;
		B("expected object of type SafeHtml, got '" + a + "' of type " + r(a));
		return "type_error:SafeHtml"
	},
	Fb = function (a) {
		if (a instanceof H) return a;
		var b = null;
		a.Fa && (b = a.Z());
		return I(z(a.ka ? a.ia() : String(a)), b)
	},
	Gb = function (a) {
		var b = 0,
			c = "",
			d = function (a) {
				u(a) ? C(a, d) : (a = Fb(a), c += Eb(a), a = a.Z(), 0 == b ? b = a : 0 != a && b != a && (b = null))
			};
		C(arguments, d);
		return I(c, b)
	},
	Db = {},
	I = function (a, b) {
		return (new H).wb(a, b)
	};
H.prototype.wb = function (a, b) {
	this.C = a;
	this.Ra = b;
	return this
};
I("<!DOCTYPE html>", 0);
I("", 0);
var Hb = I("<br>", 0);
var Ib = {
		MATH: !0,
		SCRIPT: !0,
		STYLE: !0,
		SVG: !0,
		TEMPLATE: !0
	},
	Jb = function (a, b) {
		if (Ib[a.tagName.toUpperCase()]) throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " + a.tagName + ".");
		a.innerHTML = Eb(b)
	};
var J = function (a) {
		var b = document;
		return v(a) ? b.getElementById(a) : a
	},
	K = function (a, b) {
		var c = b || document;
		return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : Kb(a, b)
	},
	Kb = function (a, b) {
		var c, d, e;
		c = document;
		b = b || c;
		if (b.querySelectorAll && b.querySelector && a) return b.querySelectorAll("" + (a ? "." + a : ""));
		if (a && b.getElementsByClassName) {
			var f = b.getElementsByClassName(a);
			return f
		}
		f = b.getElementsByTagName("*");
		if (a) {
			e = {};
			for (c = d = 0; b = f[c]; c++) {
				var g = b.className,
					h;
				if (h = "function" == typeof g.split) h =
					0 <= Oa(g.split(/\s+/), a);
				h && (e[d++] = b)
			}
			e.length = d;
			return e
		}
		return f
	},
	Mb = function (a, b) {
		Za(b, function (b, d) {
			"style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : Lb.hasOwnProperty(d) ? a.setAttribute(Lb[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
		})
	},
	Lb = {
		cellpadding: "cellPadding",
		cellspacing: "cellSpacing",
		colspan: "colSpan",
		frameborder: "frameBorder",
		height: "height",
		maxlength: "maxLength",
		nonce: "nonce",
		role: "role",
		rowspan: "rowSpan",
		type: "type",
		usemap: "useMap",
		valign: "vAlign",
		width: "width"
	},
	Nb = function () {
		var a = document;
		return a.scrollingElement ? a.scrollingElement : jb || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement
	},
	Pb = function (a, b, c) {
		var d = arguments,
			e = document,
			f = String(d[0]),
			g = d[1];
		if (!sb && g && (g.name || g.type)) {
			f = ["<", f];
			g.name && f.push(' name="', z(g.name), '"');
			if (g.type) {
				f.push(' type="', z(g.type), '"');
				var h = {};
				cb(h, g);
				delete h.type;
				g = h
			}
			f.push(">");
			f = f.join("")
		}
		f = e.createElement(f);
		g && (v(g) ? f.className = g : u(g) ? f.className =
			g.join(" ") : Mb(f, g));
		2 < d.length && Ob(e, f, d);
		return f
	},
	Ob = function (a, b, c) {
		function d(c) {
			c && b.appendChild(v(c) ? a.createTextNode(c) : c)
		}
		for (var e = 2; e < c.length; e++) {
			var f = c[e];
			if (!ra(f) || ta(f) && 0 < f.nodeType) d(f);
			else {
				var g;
				a: {
					if (f && "number" == typeof f.length) {
						if (ta(f)) {
							g = "function" == typeof f.item || "string" == typeof f.item;
							break a
						}
						if (sa(f)) {
							g = "function" == typeof f.item;
							break a
						}
					}
					g = !1
				}
				C(g ? Va(f) : f, d)
			}
		}
	},
	Qb = function (a) {
		for (var b; b = a.firstChild;) a.removeChild(b)
	},
	L = function (a, b) {
		A(null != a, "goog.dom.setTextContent expects a non-null value for node");
		if ("textContent" in a) a.textContent = b;
		else if (3 == a.nodeType) a.data = b;
		else if (a.firstChild && 3 == a.firstChild.nodeType) {
			for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
			a.firstChild.data = b
		} else Qb(a), A(a, "Node cannot be null or undefined."), a.appendChild((9 == a.nodeType ? a : a.ownerDocument || a.document).createTextNode(String(b)))
	},
	Rb = {
		SCRIPT: 1,
		STYLE: 1,
		HEAD: 1,
		IFRAME: 1,
		OBJECT: 1
	},
	Sb = {
		IMG: " ",
		BR: "\n"
	},
	M = function (a) {
		if (ub && null !== a && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
		else {
			var b = [];
			Tb(a, b, !0);
			a = b.join("")
		}
		a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
		a = a.replace(/\u200B/g, "");
		ub || (a = a.replace(/ +/g, " "));
		" " != a && (a = a.replace(/^\s*/, ""));
		return a
	},
	Tb = function (a, b, c) {
		if (!(a.nodeName in Rb))
			if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
			else if (a.nodeName in Sb) b.push(Sb[a.nodeName]);
		else
			for (a = a.firstChild; a;) Tb(a, b, c), a = a.nextSibling
	},
	Ub = function (a) {
		this.ha = a || n.document || document
	};
k = Ub.prototype;
k.getElementsByTagName = function (a, b) {
	return (b || this.ha).getElementsByTagName(String(a))
};
k.createElement = function (a) {
	return this.ha.createElement(String(a))
};
k.createTextNode = function (a) {
	return this.ha.createTextNode(String(a))
};
k.appendChild = function (a, b) {
	a.appendChild(b)
};
k.Ua = function (a) {
	return tb && void 0 != a.children ? a.children : Pa(a.childNodes, function (a) {
		return 1 == a.nodeType
	})
};
k.contains = function (a, b) {
	if (!a || !b) return !1;
	if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
	if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
	for (; b && a != b;) b = b.parentNode;
	return b == a
};
var Vb = function (a, b, c, d, e) {
	this.fb = a;
	this.X = b;
	this.Cb = c;
	this.Eb = d;
	this.H = 0;
	this.za = !1;
	this.K = [];
	this.Db = 1;
	n[e] = x(this.vb, this)
};
Vb.prototype.vb = function (a) {
	if (Wb(this)) {
		for (var b = 0, c = a.length, d = this.X; b < Math.min(d, c); b++) this.K.push(a[b]), this.X--;
		this.za = !1;
		Xb(this)
	}
};
var Xb = function (a) {
		if (a.K && a.H) {
			for (var b = [], c = 0, d = a.K.length; c < Math.min(a.H, d); c++) b.push(a.K.shift());
			a.Eb(b);
			a.H -= b.length
		}
		if (a.K.length < a.fb && 0 < a.X && Wb(a) && !a.za) {
			a.za = !0;
			a = a.Cb(a.Db++);
			b = document.getElementsByTagName("HEAD");
			if (!b) throw Error("No head element found in which to inject script");
			b[0].appendChild(Pb("SCRIPT", {
				src: a
			}))
		}
	},
	Yb = function (a) {
		a.H += Math.min(a.fb, Math.max(a.X, a.K.length));
		Xb(a)
	},
	Wb = function (a) {
		return 0 < a.X || 0 < a.H || 0 < a.K.length
	};
var Zb = "StopIteration" in n ? n.StopIteration : {
		message: "StopIteration",
		stack: ""
	},
	$b = function () {};
$b.prototype.next = function () {
	throw Zb;
};
$b.prototype.rb = function () {
	return this
};
var N = function (a, b) {
	this.v = {};
	this.b = [];
	this.wa = this.W = 0;
	var c = arguments.length;
	if (1 < c) {
		if (c % 2) throw Error("Uneven number of arguments");
		for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
	} else a && this.addAll(a)
};
N.prototype.S = function () {
	ac(this);
	for (var a = [], b = 0; b < this.b.length; b++) a.push(this.v[this.b[b]]);
	return a
};
N.prototype.R = function () {
	ac(this);
	return this.b.concat()
};
N.prototype.remove = function (a) {
	return Object.prototype.hasOwnProperty.call(this.v, a) ? (delete this.v[a], this.W--, this.wa++, this.b.length > 2 * this.W && ac(this), !0) : !1
};
var ac = function (a) {
	if (a.W != a.b.length) {
		for (var b = 0, c = 0; b < a.b.length;) {
			var d = a.b[b];
			Object.prototype.hasOwnProperty.call(a.v, d) && (a.b[c++] = d);
			b++
		}
		a.b.length = c
	}
	if (a.W != a.b.length) {
		for (var e = {}, c = b = 0; b < a.b.length;) d = a.b[b], Object.prototype.hasOwnProperty.call(e, d) || (a.b[c++] = d, e[d] = 1), b++;
		a.b.length = c
	}
};
k = N.prototype;
k.get = function (a, b) {
	return Object.prototype.hasOwnProperty.call(this.v, a) ? this.v[a] : b
};
k.set = function (a, b) {
	Object.prototype.hasOwnProperty.call(this.v, a) || (this.W++, this.b.push(a), this.wa++);
	this.v[a] = b
};
k.addAll = function (a) {
	var b;
	a instanceof N ? (b = a.R(), a = a.S()) : (b = ab(a), a = $a(a));
	for (var c = 0; c < b.length; c++) this.set(b[c], a[c])
};
k.forEach = function (a, b) {
	for (var c = this.R(), d = 0; d < c.length; d++) {
		var e = c[d],
			f = this.get(e);
		a.call(b, f, e, this)
	}
};
k.clone = function () {
	return new N(this)
};
k.rb = function (a) {
	ac(this);
	var b = 0,
		c = this.wa,
		d = this,
		e = new $b;
	e.next = function () {
		if (c != d.wa) throw Error("The map has changed since the iterator was created");
		if (b >= d.b.length) throw Zb;
		var e = d.b[b++];
		return a ? e : d.v[e]
	};
	return e
};
var bc = function (a) {
		if (a.S && "function" == typeof a.S) return a.S();
		if (v(a)) return a.split("");
		if (ra(a)) {
			for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
			return b
		}
		return $a(a)
	},
	cc = function (a, b) {
		if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);
		else if (ra(a) || v(a)) C(a, b, void 0);
		else {
			var c;
			if (a.R && "function" == typeof a.R) c = a.R();
			else if (a.S && "function" == typeof a.S) c = void 0;
			else if (ra(a) || v(a)) {
				c = [];
				for (var d = a.length, e = 0; e < d; e++) c.push(e)
			} else c = ab(a);
			for (var d = bc(a), e = d.length, f = 0; f < e; f++) b.call(void 0,
				d[f], c && c[f], a)
		}
	};
var dc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
var ec = {
		Hb: !0
	},
	fc = {
		Kb: !0
	},
	gc = {
		Jb: !0
	},
	hc = {
		Ib: !0
	},
	O = function () {
		throw Error("Do not instantiate directly");
	};
O.prototype.P = null;
O.prototype.toString = function () {
	return this.content
};
var ic = function () {
	O.call(this)
};
y(ic, O);
ic.prototype.s = ec;
var jc = function () {
	O.call(this)
};
y(jc, O);
jc.prototype.s = fc;
jc.prototype.P = 1;
var kc = function () {
	O.call(this)
};
y(kc, O);
kc.prototype.s = gc;
kc.prototype.P = 1;
F && G(8);
var nc = function (a, b, c) {
		A(b, "Soy template may not be null.");
		a.innerHTML = lc(b(c || mc, void 0, void 0))
	},
	lc = function (a) {
		if (!ta(a)) return String(a);
		if (a instanceof O) {
			if (a.s === ec) return Na(a.content);
			if (a.s === hc) return z(a.content)
		}
		B("Soy template output is unsafe for use as HTML: " + a);
		return "zSoyz"
	},
	oc = /^<(body|caption|col|colgroup|head|html|tr|td|th|tbody|thead|tfoot)>/i,
	mc = {};
var pc = function (a) {
		if (null != a) switch (a.P) {
			case 1:
				return 1;
			case -1:
				return -1;
			case 0:
				return 0
		}
		return null
	},
	qc = function (a) {
		return null != a && a.s === ec ? (A(a.constructor === ic), a) : a instanceof H ? P(Eb(a), a.Z()) : P(z(String(String(a))), pc(a))
	},
	P = function (a) {
		function b(a) {
			this.content = a
		}
		b.prototype = a.prototype;
		return function (a, d) {
			a = new b(String(a));
			void 0 !== d && (a.P = d);
			return a
		}
	}(ic),
	rc = function (a, b) {
		var c = new Ub(void 0);
		A(a, "Soy template may not be null.");
		c = c || za || (za = new Ub);
		a = a(b || mc, void 0, void 0);
		b = lc(a);
		var d = b.match(oc);
		A(!d, "This template starts with a %s, which cannot be a child of a <div>, as required by soy internals. Consider using goog.soy.renderElement instead.\nTemplate output: %s", d && d[0], b);
		if (a instanceof O)
			if (a.s === hc) a = Fb(a.toString());
			else {
				if (a.s !== ec) throw Error("Sanitized content was not of kind TEXT or HTML.");
				b = yb("Soy SanitizedContent of kind HTML produces SafeHtml-contract-compliant value.");
				d = a.toString();
				a = a.P;
				Na(xb(b), "must provide justification");
				A(!/^[\s\xa0]*$/.test(xb(b)),
					"must provide non-empty justification");
				a = I(d, a || null)
			}
		else a = I(b, null);
		c = c.ha;
		b = a;
		a = c.createElement("DIV");
		F ? (Jb(a, Gb(Hb, b)), a.removeChild(a.firstChild)) : Jb(a, b);
		if (1 == a.childNodes.length) c = a.removeChild(a.firstChild);
		else
			for (c = c.createDocumentFragment(); a.firstChild;) c.appendChild(a.firstChild);
		return c
	};
(function (a) {
	function b(a) {
		this.content = a
	}
	b.prototype = a.prototype;
	return function (a, d) {
		a = String(a);
		if (!a) return "";
		a = new b(a);
		void 0 !== d && (a.P = d);
		return a
	}
})(ic);
var Q = function (a) {
		return null != a && a.s === ec ? (A(a.constructor === ic), String(String(a.content).replace(sc, "").replace(tc, "&lt;")).replace(uc, vc)) : z(String(a))
	},
	wc = /['()]/g,
	xc = function (a) {
		return "%" + a.charCodeAt(0).toString(16)
	},
	yc = function (a) {
		a = encodeURIComponent(String(String(a)));
		wc.lastIndex = 0;
		return wc.test(a) ? a.replace(wc, xc) : a
	},
	Cc = function (a) {
		if (null != a && a.s === fc) return A(a.constructor === jc), String(a).replace(zc, Ac);
		if (null != a && a.s === gc) return A(a.constructor === kc), String(a).replace(zc, Ac);
		a instanceof
		Cb ? (a instanceof Cb && a.constructor === Cb && a.ob === Bb ? a = a.C : (B("expected object of type SafeUrl, got '" + a + "' of type " + r(a)), a = "type_error:SafeUrl"), a = String(a).replace(zc, Ac)) : a instanceof Ab ? (a instanceof Ab && a.constructor === Ab && a.qb === zb ? a = a.La : (B("expected object of type TrustedResourceUrl, got '" + a + "' of type " + r(a)), a = "type_error:TrustedResourceUrl"), a = String(a).replace(zc, Ac)) : (a = String(a), Bc.test(a) ? a = a.replace(zc, Ac) : (B("Bad value `%s` for |filterNormalizeUri", [a]), a = "about:invalid#zSoyz"));
		return a
	},
	R = function (a, b, c, d) {
		a || B("expected param " + b + " of type " + d + (", but got " + (c instanceof Function ? c.displayName || c.name || "unknown type name" : c instanceof Object ? c.constructor.displayName || c.constructor.name || Object.prototype.toString.call(c) : null === c ? "null" : typeof c)) + ".");
		return c
	},
	Dc = {
		"\x00": "&#0;",
		"\t": "&#9;",
		"\n": "&#10;",
		"\x0B": "&#11;",
		"\f": "&#12;",
		"\r": "&#13;",
		" ": "&#32;",
		'"': "&quot;",
		"&": "&amp;",
		"'": "&#39;",
		"-": "&#45;",
		"/": "&#47;",
		"<": "&lt;",
		"=": "&#61;",
		">": "&gt;",
		"`": "&#96;",
		"\u0085": "&#133;",
		"\u00a0": "&#160;",
		"\u2028": "&#8232;",
		"\u2029": "&#8233;"
	},
	vc = function (a) {
		return Dc[a]
	},
	Ec = {
		"\x00": "%00",
		"\u0001": "%01",
		"\u0002": "%02",
		"\u0003": "%03",
		"\u0004": "%04",
		"\u0005": "%05",
		"\u0006": "%06",
		"\u0007": "%07",
		"\b": "%08",
		"\t": "%09",
		"\n": "%0A",
		"\x0B": "%0B",
		"\f": "%0C",
		"\r": "%0D",
		"\u000e": "%0E",
		"\u000f": "%0F",
		"\u0010": "%10",
		"\u0011": "%11",
		"\u0012": "%12",
		"\u0013": "%13",
		"\u0014": "%14",
		"\u0015": "%15",
		"\u0016": "%16",
		"\u0017": "%17",
		"\u0018": "%18",
		"\u0019": "%19",
		"\u001a": "%1A",
		"\u001b": "%1B",
		"\u001c": "%1C",
		"\u001d": "%1D",
		"\u001e": "%1E",
		"\u001f": "%1F",
		" ": "%20",
		'"': "%22",
		"'": "%27",
		"(": "%28",
		")": "%29",
		"<": "%3C",
		">": "%3E",
		"\\": "%5C",
		"{": "%7B",
		"}": "%7D",
		"\u007f": "%7F",
		"\u0085": "%C2%85",
		"\u00a0": "%C2%A0",
		"\u2028": "%E2%80%A8",
		"\u2029": "%E2%80%A9",
		"\uff01": "%EF%BC%81",
		"\uff03": "%EF%BC%83",
		"\uff04": "%EF%BC%84",
		"\uff06": "%EF%BC%86",
		"\uff07": "%EF%BC%87",
		"\uff08": "%EF%BC%88",
		"\uff09": "%EF%BC%89",
		"\uff0a": "%EF%BC%8A",
		"\uff0b": "%EF%BC%8B",
		"\uff0c": "%EF%BC%8C",
		"\uff0f": "%EF%BC%8F",
		"\uff1a": "%EF%BC%9A",
		"\uff1b": "%EF%BC%9B",
		"\uff1d": "%EF%BC%9D",
		"\uff1f": "%EF%BC%9F",
		"\uff20": "%EF%BC%A0",
		"\uff3b": "%EF%BC%BB",
		"\uff3d": "%EF%BC%BD"
	},
	Ac = function (a) {
		return Ec[a]
	},
	uc = /[\x00\x22\x27\x3c\x3e]/g,
	zc = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
	Bc = /^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,
	sc = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
	tc = /</g;
var Fc = function (a) {
	var b = R(v(a.D) || a.D instanceof O, "ytid", a.D, "!goog.soy.data.SanitizedContent|string"),
		c = R(w(a.start), "start", a.start, "number"),
		d = R(w(a.end), "end", a.end, "number"),
		e = R(u(a.labels), "labels", a.labels, "!Array<!Array<!goog.soy.data.SanitizedContent|string>>");
	a = R(v(a.w) || a.w instanceof O, "prepend", a.w, "!goog.soy.data.SanitizedContent|string");
	b = '<div class="i"><div class="j"><div class="k"><div class="I">&times;</div><iframe class="l" src="https://www.youtube.com/embed/' + Q(b) + "?start=" +
		yc(Math.round(c)) + "&end=" + yc(Math.round(d)) + '&rel=0&autoplay=1" width="400" height="300"></iframe>';
	if (0 < e.length) {
		b += '<div class="F"><div class="H">Explore the labels attached to this video:</div>';
		c = e.length;
		for (d = 0; d < c; d++) var f = e[d],
			g = f[0],
			b = b + ('<a href="' + Q(Cc(a + f[1])) + '.html"><span class="G">' + qc(g) + "</span></a>");
		b += "</div>"
	}
	return P(b + "</div></div></div>")
};
Fc.Na = "modal_templates.modal";
var Hc = function (a) {
	var b = "";
	a = R(u(a.jb), "thumbnails", a.jb, "!Array<?>");
	for (var c = a.length, d = 0; d < c; d++) var e = a[d],
		b = b + Gc({
			D: e[0],
			start: e[1],
			end: e[2],
			labels: e[3],
			w: ""
		});
	return P(b)
};
Hc.Na = "modal_templates.youtube_thumbnails";
var Gc = function (a) {
		var b = R(v(a.D) || a.D instanceof O, "ytid", a.D, "!goog.soy.data.SanitizedContent|string"),
			c = R(w(a.start), "start", a.start, "number"),
			d = R(w(a.end), "end", a.end, "number"),
			e = R(null == a.w || v(a.w) || a.w instanceof O, "prepend", a.w, "!goog.soy.data.SanitizedContent|null|string|undefined");
		a = R(u(a.labels), "labels", a.labels, "!Array<!Array<!goog.soy.data.SanitizedContent|string>>");
		b = '<div class="u" id="https://img.youtube.com/vi/' + Q(b) + '/mqdefault.jpg" data-ytid="' + Q(b) + '" data-start="' + Q(c) + '" data-end="' +
			Q(d) + '" data-labels="[';
		c = a.length;
		for (d = 0; d < c; d++) var f = a[d],
			b = b + ("[&quot;" + Q(f[0]) + "&quot;,&quot;" + Q(f[1]) + "&quot;]" + (d != c - 1 ? "," : ""));
		b += ']" data-prepend="' + Q(e) + '"><div class="R">\u25ba</div><div class="Q"><div class="S"></div></div></div>';
		return P(b)
	},
	Ic = function (a) {
		var b = "";
		a = R(u(a.Qa), "classes", a.Qa, "!Array<!Array<?>>");
		for (var c = a.length, d = 0; d < c; d++) {
			for (var e = a[d], b = b + ('<div class="N"><a href="dataset/' + Q(e[1]) + '.html" class="nb"></a><div class="qb">' + qc(e[0]) + ' <span class="rb">(<span class="number">' +
					qc(e[2]) + '</span> annotations in dataset)</span></div><div class="ob">'), e = e[3], f = e.length, g = 0; g < f; g++) var h = e[g],
				b = b + Gc({
					D: h[0],
					start: h[1],
					end: h[2],
					labels: h[3],
					w: "dataset/"
				});
			b += "</div></div>"
		}
		return P(b)
	};
Ic.Na = "modal_templates.youtube_scroll_player";
var Jc = function (a) {
	a = R(u(a.Za), "hierarchy", a.Za, "!Array<!Array<?>>");
	var b = "";
	if (0 != a.length) {
		for (var b = b + '<div class="Tb">', c = a.length, d = 0; d < c; d++) {
			for (var e = a[d], b = b + ('<a href="' + Q(Cc(e[e.length - 1][1])) + '" class="Rb"><ul class="m Ub">'), f = e.length, g = 0; g < f; g++) b += "<li>" + qc(e[g][0]) + "</li>";
			b += "</ul></a>"
		}
		b += "</div>"
	} else b += "<p>No search results. Please try another search.</p>";
	return P(b)
};
Jc.Na = "modal_templates.ontology_search_result";
var Kc = function (a) {
		if (a.classList) return a.classList;
		a = a.className;
		return v(a) && a.match(/\S+/g) || []
	},
	Lc = function (a, b) {
		a.classList ? b = a.classList.contains(b) : (a = Kc(a), b = 0 <= Oa(a, b));
		return b
	},
	Mc = function (a, b) {
		a.classList ? a.classList.add(b) : Lc(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
	},
	Nc = function (a, b) {
		a.classList ? a.classList.remove(b) : Lc(a, b) && (a.className = Pa(Kc(a), function (a) {
			return a != b
		}).join(" "))
	};
var Oc = !F && !(E("Safari") && !((E("Chrome") || E("CriOS")) && !E("Edge") || E("Coast") || E("Opera") || E("Edge") || E("Silk") || E("Android"))),
	S = function (a, b) {
		return Oc && a.dataset ? b in a.dataset ? a.dataset[b] : null : a.getAttribute("data-" + String(b).replace(/([A-Z])/g, "-$1").toLowerCase())
	};
var Pc = function () {
	this.Y = this.Y;
	this.na = this.na
};
Pc.prototype.Y = !1;
Pc.prototype.I = function () {
	if (this.na)
		for (; this.na.length;) this.na.shift()()
};
var Qc = !F || 9 <= Number(qb),
	Rc = F && !G("9");
!jb || G("528");
ib && G("1.9b") || F && G("8") || gb && G("9.5") || jb && G("528");
ib && !G("8") || F && G("9");
var Sc = function (a, b) {
	this.type = a;
	this.currentTarget = this.target = b;
	this.defaultPrevented = this.U = !1;
	this.hb = !0
};
Sc.prototype.preventDefault = function () {
	this.defaultPrevented = !0;
	this.hb = !1
};
var Tc = function (a, b) {
	Sc.call(this, a ? a.type : "");
	this.relatedTarget = this.currentTarget = this.target = null;
	this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
	this.key = "";
	this.charCode = this.keyCode = 0;
	this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
	this.Sa = this.state = null;
	if (a) {
		var c = this.type = a.type,
			d = a.changedTouches ? a.changedTouches[0] : null;
		this.target = a.target || a.srcElement;
		this.currentTarget = b;
		if (b = a.relatedTarget) {
			if (ib) {
				var e;
				a: {
					try {
						db(b.nodeName);
						e = !0;
						break a
					} catch (f) {}
					e = !1
				}
				e || (b = null)
			}
		} else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
		this.relatedTarget = b;
		null === d ? (this.offsetX = jb || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = jb || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX =
			d.screenX || 0, this.screenY = d.screenY || 0);
		this.button = a.button;
		this.keyCode = a.keyCode || 0;
		this.key = a.key || "";
		this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
		this.ctrlKey = a.ctrlKey;
		this.altKey = a.altKey;
		this.shiftKey = a.shiftKey;
		this.metaKey = a.metaKey;
		this.state = a.state;
		this.Sa = a;
		a.defaultPrevented && this.preventDefault()
	}
};
y(Tc, Sc);
Tc.prototype.preventDefault = function () {
	Tc.ta.preventDefault.call(this);
	var a = this.Sa;
	if (a.preventDefault) a.preventDefault();
	else if (a.returnValue = !1, Rc) try {
		if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
	} catch (b) {}
};
var Uc = "closure_listenable_" + (1E6 * Math.random() | 0),
	Vc = function (a) {
		return !(!a || !a[Uc])
	},
	Wc = 0;
var Xc = function (a, b, c, d, e) {
		this.listener = a;
		this.pa = null;
		this.src = b;
		this.type = c;
		this.capture = !!d;
		this.ja = e;
		this.key = ++Wc;
		this.V = this.ga = !1
	},
	Yc = function (a) {
		a.V = !0;
		a.listener = null;
		a.pa = null;
		a.src = null;
		a.ja = null
	};
var T = function (a) {
	this.src = a;
	this.h = {};
	this.fa = 0
};
T.prototype.add = function (a, b, c, d, e) {
	var f = a.toString();
	a = this.h[f];
	a || (a = this.h[f] = [], this.fa++);
	var g = Zc(a, b, d, e); - 1 < g ? (b = a[g], c || (b.ga = !1)) : (b = new Xc(b, this.src, f, !!d, e), b.ga = c, a.push(b));
	return b
};
T.prototype.remove = function (a, b, c, d) {
	a = a.toString();
	if (!(a in this.h)) return !1;
	var e = this.h[a];
	b = Zc(e, b, c, d);
	return -1 < b ? (Yc(e[b]), A(null != e.length), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.h[a], this.fa--), !0) : !1
};
var $c = function (a, b) {
	var c = b.type;
	c in a.h && Ua(a.h[c], b) && (Yc(b), 0 == a.h[c].length && (delete a.h[c], a.fa--))
};
T.prototype.Ma = function (a) {
	a = a && a.toString();
	var b = 0,
		c;
	for (c in this.h)
		if (!a || c == a) {
			for (var d = this.h[c], e = 0; e < d.length; e++) ++b, Yc(d[e]);
			delete this.h[c];
			this.fa--
		}
	return b
};
T.prototype.$ = function (a, b, c, d) {
	a = this.h[a.toString()];
	var e = -1;
	a && (e = Zc(a, b, c, d));
	return -1 < e ? a[e] : null
};
var Zc = function (a, b, c, d) {
	for (var e = 0; e < a.length; ++e) {
		var f = a[e];
		if (!f.V && f.listener == b && f.capture == !!c && f.ja == d) return e
	}
	return -1
};
var ad = "closure_lm_" + (1E6 * Math.random() | 0),
	bd = {},
	cd = 0,
	dd = function (a, b, c, d, e) {
		if (u(b)) {
			for (var f = 0; f < b.length; f++) dd(a, b[f], c, d, e);
			return null
		}
		c = ed(c);
		return Vc(a) ? a.l(b, c, d, e) : fd(a, b, c, !1, d, e)
	},
	fd = function (a, b, c, d, e, f) {
		if (!b) throw Error("Invalid event type");
		var g = !!e,
			h = gd(a);
		h || (a[ad] = h = new T(a));
		c = h.add(b, c, d, e, f);
		if (c.pa) return c;
		d = hd();
		c.pa = d;
		d.src = a;
		d.listener = c;
		if (a.addEventListener) a.addEventListener(b.toString(), d, g);
		else if (a.attachEvent) a.attachEvent(id(b.toString()), d);
		else throw Error("addEventListener and attachEvent are unavailable.");
		cd++;
		return c
	},
	hd = function () {
		var a = jd,
			b = Qc ? function (c) {
				return a.call(b.src, b.listener, c)
			} : function (c) {
				c = a.call(b.src, b.listener, c);
				if (!c) return c
			};
		return b
	},
	kd = function (a, b, c, d, e) {
		if (u(b)) {
			for (var f = 0; f < b.length; f++) kd(a, b[f], c, d, e);
			return null
		}
		c = ed(c);
		return Vc(a) ? a.Ha(b, c, d, e) : fd(a, b, c, !0, d, e)
	},
	ld = function (a, b, c, d, e) {
		if (u(b))
			for (var f = 0; f < b.length; f++) ld(a, b[f], c, d, e);
		else c = ed(c), Vc(a) ? a.Oa(b, c, d, e) : a && (a = gd(a)) && (b = a.$(b, c, !!d, e)) && md(b)
	},
	md = function (a) {
		if (!w(a) && a && !a.V) {
			var b = a.src;
			if (Vc(b)) $c(b.u,
				a);
			else {
				var c = a.type,
					d = a.pa;
				b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent(id(c), d);
				cd--;
				(c = gd(b)) ? ($c(c, a), 0 == c.fa && (c.src = null, b[ad] = null)) : Yc(a)
			}
		}
	},
	id = function (a) {
		return a in bd ? bd[a] : bd[a] = "on" + a
	},
	od = function (a, b, c, d) {
		var e = !0;
		if (a = gd(a))
			if (b = a.h[b.toString()])
				for (b = b.concat(), a = 0; a < b.length; a++) {
					var f = b[a];
					f && f.capture == c && !f.V && (f = nd(f, d), e = e && !1 !== f)
				}
			return e
	},
	nd = function (a, b) {
		var c = a.listener,
			d = a.ja || a.src;
		a.ga && md(a);
		return c.call(d, b)
	},
	jd = function (a,
		b) {
		if (a.V) return !0;
		if (!Qc) {
			if (!b) a: {
				b = ["window", "event"];
				for (var c = n, d; d = b.shift();)
					if (null != c[d]) c = c[d];
					else {
						b = null;
						break a
					}
				b = c
			}
			d = b;
			b = new Tc(d, this);
			c = !0;
			if (!(0 > d.keyCode || void 0 != d.returnValue)) {
				a: {
					var e = !1;
					if (0 == d.keyCode) try {
						d.keyCode = -1;
						break a
					} catch (g) {
						e = !0
					}
					if (e || void 0 == d.returnValue) d.returnValue = !0
				}
				d = [];
				for (e = b.currentTarget; e; e = e.parentNode) d.push(e);a = a.type;
				for (e = d.length - 1; !b.U && 0 <= e; e--) {
					b.currentTarget = d[e];
					var f = od(d[e], a, !0, b),
						c = c && f
				}
				for (e = 0; !b.U && e < d.length; e++) b.currentTarget = d[e],
				f = od(d[e], a, !1, b),
				c = c && f
			}
			return c
		}
		return nd(a, new Tc(b, this))
	},
	gd = function (a) {
		a = a[ad];
		return a instanceof T ? a : null
	},
	pd = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
	ed = function (a) {
		A(a, "Listener can not be null.");
		if (sa(a)) return a;
		A(a.handleEvent, "An object listener must have handleEvent method.");
		a[pd] || (a[pd] = function (b) {
			return a.handleEvent(b)
		});
		return a[pd]
	};
var U = function (a) {
	Pc.call(this);
	this.j = a;
	this.b = {}
};
y(U, Pc);
var qd = [];
U.prototype.l = function (a, b, c, d) {
	u(b) || (b && (qd[0] = b.toString()), b = qd);
	for (var e = 0; e < b.length; e++) {
		var f = dd(a, b[e], c || this.handleEvent, d || !1, this.j || this);
		if (!f) break;
		this.b[f.key] = f
	}
	return this
};
U.prototype.Ha = function (a, b, c, d) {
	return rd(this, a, b, c, d)
};
var rd = function (a, b, c, d, e, f) {
	if (u(c))
		for (var g = 0; g < c.length; g++) rd(a, b, c[g], d, e, f);
	else {
		b = kd(b, c, d || a.handleEvent, e, f || a.j || a);
		if (!b) return a;
		a.b[b.key] = b
	}
	return a
};
U.prototype.Oa = function (a, b, c, d, e) {
	if (u(b))
		for (var f = 0; f < b.length; f++) this.Oa(a, b[f], c, d, e);
	else c = c || this.handleEvent, e = e || this.j || this, c = ed(c), d = !!d, b = Vc(a) ? a.$(b, c, d, e) : a ? (a = gd(a)) ? a.$(b, c, d, e) : null : null, b && (md(b), delete this.b[b.key]);
	return this
};
U.prototype.Ma = function () {
	Za(this.b, function (a, b) {
		this.b.hasOwnProperty(b) && md(a)
	}, this);
	this.b = {}
};
U.prototype.I = function () {
	U.ta.I.call(this);
	this.Ma()
};
U.prototype.handleEvent = function () {
	throw Error("EventHandler.handleEvent not implemented");
};
var sd = function (a) {
		return /^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))
	},
	td = function (a) {
		a = String(a);
		if (sd(a)) try {
			return eval("(" + a + ")")
		} catch (b) {}
		throw Error("Invalid JSON string: " + a);
	};
var V = function () {
	Pc.call(this);
	this.u = new T(this);
	this.sb = this;
	this.Ka = null
};
y(V, Pc);
V.prototype[Uc] = !0;
k = V.prototype;
k.addEventListener = function (a, b, c, d) {
	dd(this, a, b, c, d)
};
k.removeEventListener = function (a, b, c, d) {
	ld(this, a, b, c, d)
};
k.dispatchEvent = function (a) {
	ud(this);
	var b, c = this.Ka;
	if (c) {
		b = [];
		for (var d = 1; c; c = c.Ka) b.push(c), A(1E3 > ++d, "infinite loop")
	}
	c = this.sb;
	d = a.type || a;
	if (v(a)) a = new Sc(a, c);
	else if (a instanceof Sc) a.target = a.target || c;
	else {
		var e = a;
		a = new Sc(d, c);
		cb(a, e)
	}
	var e = !0,
		f;
	if (b)
		for (var g = b.length - 1; !a.U && 0 <= g; g--) f = a.currentTarget = b[g], e = vd(f, d, !0, a) && e;
	a.U || (f = a.currentTarget = c, e = vd(f, d, !0, a) && e, a.U || (e = vd(f, d, !1, a) && e));
	if (b)
		for (g = 0; !a.U && g < b.length; g++) f = a.currentTarget = b[g], e = vd(f, d, !1, a) && e;
	return e
};
k.I = function () {
	V.ta.I.call(this);
	this.u && this.u.Ma(void 0);
	this.Ka = null
};
k.l = function (a, b, c, d) {
	ud(this);
	return this.u.add(String(a), b, !1, c, d)
};
k.Ha = function (a, b, c, d) {
	return this.u.add(String(a), b, !0, c, d)
};
k.Oa = function (a, b, c, d) {
	return this.u.remove(String(a), b, c, d)
};
var vd = function (a, b, c, d) {
	b = a.u.h[String(b)];
	if (!b) return !0;
	b = b.concat();
	for (var e = !0, f = 0; f < b.length; ++f) {
		var g = b[f];
		if (g && !g.V && g.capture == c) {
			var h = g.listener,
				t = g.ja || g.src;
			g.ga && $c(a.u, g);
			e = !1 !== h.call(t, d) && e
		}
	}
	return e && 0 != d.hb
};
V.prototype.$ = function (a, b, c, d) {
	return this.u.$(String(a), b, c, d)
};
var ud = function (a) {
	A(a.u, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
};
var wd = function (a, b, c, d, e) {
	this.reset(a, b, c, d, e)
};
wd.prototype.Ta = null;
var xd = 0;
wd.prototype.reset = function (a, b, c, d, e) {
	"number" == typeof e || xd++;
	d || wa();
	this.ba = a;
	this.yb = b;
	delete this.Ta
};
wd.prototype.ib = function (a) {
	this.ba = a
};
var yd = function (a) {
		this.zb = a;
		this.Xa = this.Aa = this.ba = this.oa = null
	},
	zd = function (a, b) {
		this.name = a;
		this.value = b
	};
zd.prototype.toString = function () {
	return this.name
};
var Ad = new zd("SEVERE", 1E3),
	Bd = new zd("CONFIG", 700),
	Cd = new zd("FINE", 500);
yd.prototype.getParent = function () {
	return this.oa
};
yd.prototype.Ua = function () {
	this.Aa || (this.Aa = {});
	return this.Aa
};
yd.prototype.ib = function (a) {
	this.ba = a
};
var Dd = function (a) {
	if (a.ba) return a.ba;
	if (a.oa) return Dd(a.oa);
	B("Root logger has no level set.");
	return null
};
yd.prototype.log = function (a, b, c) {
	if (a.value >= Dd(this).value)
		for (sa(b) && (b = b()), a = new wd(a, String(b), this.zb), c && (a.Ta = c), c = "log:" + a.yb, n.console && (n.console.timeStamp ? n.console.timeStamp(c) : n.console.markTimeline && n.console.markTimeline(c)), n.msWriteProfilerMark && n.msWriteProfilerMark(c), c = this; c;) {
			var d = c,
				e = a;
			if (d.Xa)
				for (var f = 0; b = d.Xa[f]; f++) b(e);
			c = c.getParent()
		}
};
var Ed = {},
	Fd = null,
	Gd = function (a) {
		Fd || (Fd = new yd(""), Ed[""] = Fd, Fd.ib(Bd));
		var b;
		if (!(b = Ed[a])) {
			b = new yd(a);
			var c = a.lastIndexOf("."),
				d = a.substr(c + 1),
				c = Gd(a.substr(0, c));
			c.Ua()[d] = b;
			b.oa = c;
			Ed[a] = b
		}
		return b
	};
var W = function (a, b) {
	a && a.log(Cd, b, void 0)
};
var Hd = function () {};
Hd.prototype.Pa = null;
var Jd = function (a) {
	var b;
	(b = a.Pa) || (b = {}, Id(a) && (b[0] = !0, b[1] = !0), b = a.Pa = b);
	return b
};
var Kd, Ld = function () {};
y(Ld, Hd);
var Md = function (a) {
		return (a = Id(a)) ? new ActiveXObject(a) : new XMLHttpRequest
	},
	Id = function (a) {
		if (!a.ab && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
			for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
				var d = b[c];
				try {
					return new ActiveXObject(d), a.ab = d
				} catch (e) {}
			}
			throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
		}
		return a.ab
	};
Kd = new Ld;
var Nd = function (a, b, c) {
	if (sa(a)) c && (a = x(a, c));
	else if (a && "function" == typeof a.handleEvent) a = x(a.handleEvent, a);
	else throw Error("Invalid listener argument");
	return 2147483647 < Number(b) ? -1 : n.setTimeout(a, b || 0)
};
var X = function (a) {
	V.call(this);
	this.headers = new N;
	this.ya = a || null;
	this.A = !1;
	this.xa = this.a = null;
	this.aa = this.bb = this.ma = "";
	this.J = this.Ga = this.la = this.Ea = !1;
	this.ea = 0;
	this.ua = null;
	this.gb = "";
	this.va = this.Fb = this.mb = !1
};
y(X, V);
var Od = X.prototype,
	Pd = Gd("goog.net.XhrIo");
Od.o = Pd;
var Qd = /^https?$/i,
	Rd = ["POST", "PUT"],
	Sd = [],
	Td = function (a) {
		var b = new X;
		Sd.push(b);
		a && b.l("complete", a);
		b.Ha("ready", b.ub);
		b.send("dataset/demo.js", void 0, void 0, void 0)
	};
X.prototype.ub = function () {
	this.Y || (this.Y = !0, this.I());
	Ua(Sd, this)
};
X.prototype.send = function (a, b, c, d) {
	if (this.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.ma + "; newUri=" + a);
	b = b ? b.toUpperCase() : "GET";
	this.ma = a;
	this.aa = "";
	this.bb = b;
	this.Ea = !1;
	this.A = !0;
	this.a = this.ya ? Md(this.ya) : Md(Kd);
	this.xa = this.ya ? Jd(this.ya) : Jd(Kd);
	this.a.onreadystatechange = x(this.eb, this);
	this.Fb && "onprogress" in this.a && (this.a.onprogress = x(function (a) {
		this.cb(a, !0)
	}, this), this.a.upload && (this.a.upload.onprogress = x(this.cb, this)));
	try {
		W(this.o, Y(this, "Opening Xhr")),
			this.Ga = !0, this.a.open(b, String(a), !0), this.Ga = !1
	} catch (f) {
		W(this.o, Y(this, "Error opening Xhr: " + f.message));
		Ud(this, f);
		return
	}
	a = c || "";
	var e = this.headers.clone();
	d && cc(d, function (a, b) {
		e.set(b, a)
	});
	d = Ta(e.R());
	c = n.FormData && a instanceof n.FormData;
	!(0 <= Oa(Rd, b)) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
	e.forEach(function (a, b) {
		this.a.setRequestHeader(b, a)
	}, this);
	this.gb && (this.a.responseType = this.gb);
	"withCredentials" in this.a && this.a.withCredentials !== this.mb &&
		(this.a.withCredentials = this.mb);
	try {
		Vd(this), 0 < this.ea && (this.va = Wd(this.a), W(this.o, Y(this, "Will abort after " + this.ea + "ms if incomplete, xhr2 " + this.va)), this.va ? (this.a.timeout = this.ea, this.a.ontimeout = x(this.kb, this)) : this.ua = Nd(this.kb, this.ea, this)), W(this.o, Y(this, "Sending request")), this.la = !0, this.a.send(a), this.la = !1
	} catch (f) {
		W(this.o, Y(this, "Send error: " + f.message)), Ud(this, f)
	}
};
var Wd = function (a) {
		return F && G(9) && w(a.timeout) && void 0 !== a.ontimeout
	},
	Sa = function (a) {
		return "content-type" == a.toLowerCase()
	};
X.prototype.kb = function () {
	"undefined" != typeof pa && this.a && (this.aa = "Timed out after " + this.ea + "ms, aborting", W(this.o, Y(this, this.aa)), this.dispatchEvent("timeout"), this.abort(8))
};
var Ud = function (a, b) {
		a.A = !1;
		a.a && (a.J = !0, a.a.abort(), a.J = !1);
		a.aa = b;
		Xd(a);
		Yd(a)
	},
	Xd = function (a) {
		a.Ea || (a.Ea = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
	};
X.prototype.abort = function () {
	this.a && this.A && (W(this.o, Y(this, "Aborting")), this.A = !1, this.J = !0, this.a.abort(), this.J = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Yd(this))
};
X.prototype.I = function () {
	this.a && (this.A && (this.A = !1, this.J = !0, this.a.abort(), this.J = !1), Yd(this, !0));
	X.ta.I.call(this)
};
X.prototype.eb = function () {
	this.Y || (this.Ga || this.la || this.J ? Zd(this) : this.Bb())
};
X.prototype.Bb = function () {
	Zd(this)
};
var Zd = function (a) {
	if (a.A && "undefined" != typeof pa)
		if (a.xa[1] && 4 == $d(a) && 2 == ae(a)) W(a.o, Y(a, "Local request error detected and ignored"));
		else if (a.la && 4 == $d(a)) Nd(a.eb, 0, a);
	else if (a.dispatchEvent("readystatechange"), 4 == $d(a)) {
		W(a.o, Y(a, "Request complete"));
		a.A = !1;
		try {
			var b = ae(a),
				c;
			a: switch (b) {
				case 200:
				case 201:
				case 202:
				case 204:
				case 206:
				case 304:
				case 1223:
					c = !0;
					break a;
				default:
					c = !1
			}
			var d;
			if (!(d = c)) {
				var e;
				if (e = 0 === b) {
					var f = String(a.ma).match(dc)[1] || null;
					if (!f && n.self && n.self.location) var g = n.self.location.protocol,
						f = g.substr(0, g.length - 1);
					e = !Qd.test(f ? f.toLowerCase() : "")
				}
				d = e
			}
			if (d) a.dispatchEvent("complete"), a.dispatchEvent("success");
			else {
				var h;
				try {
					h = 2 < $d(a) ? a.a.statusText : ""
				} catch (t) {
					W(a.o, "Can not get status: " + t.message), h = ""
				}
				a.aa = h + " [" + ae(a) + "]";
				Xd(a)
			}
		} finally {
			Yd(a)
		}
	}
};
X.prototype.cb = function (a, b) {
	A("progress" === a.type, "goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");
	this.dispatchEvent(be(a, "progress"));
	this.dispatchEvent(be(a, b ? "downloadprogress" : "uploadprogress"))
};
var be = function (a, b) {
		return {
			type: b,
			lengthComputable: a.lengthComputable,
			loaded: a.loaded,
			total: a.total
		}
	},
	Yd = function (a, b) {
		if (a.a) {
			Vd(a);
			var c = a.a,
				d = a.xa[0] ? qa : null;
			a.a = null;
			a.xa = null;
			b || a.dispatchEvent("ready");
			try {
				c.onreadystatechange = d
			} catch (e) {
				(a = a.o) && a.log(Ad, "Problem encountered resetting onreadystatechange: " + e.message, void 0)
			}
		}
	},
	Vd = function (a) {
		a.a && a.va && (a.a.ontimeout = null);
		w(a.ua) && (n.clearTimeout(a.ua), a.ua = null)
	},
	$d = function (a) {
		return a.a ? a.a.readyState : 0
	},
	ae = function (a) {
		try {
			return 2 < $d(a) ?
				a.a.status : -1
		} catch (b) {
			return -1
		}
	},
	Y = function (a, b) {
		return b + " [" + a.bb + " " + a.ma + " " + ae(a) + "]"
	};
var ce = function () {
		var a = !1;
		try {
			var b = Object.defineProperty({}, "passive", {
				get: function () {
					a = !0
				}
			});
			n.addEventListener("test", null, b)
		} catch (c) {}
		return a
	}(),
	de = function (a) {
		var b = document,
			c;
		c = document;
		var d;
		c.mozVisibilityState ? d = "mozvisibilitychange" : c.webkitVisibilityState ? d = "webkitvisibilitychange" : c.visibilityState && (d = "visibilitychange");
		c = d;
		b.addEventListener ? b.addEventListener(c, a, ce ? void 0 : !1) : b.attachEvent && b.attachEvent("on" + c, a)
	};
window.onload = function () {
	var a = J("youtube_modal"),
		b = J("demo-player"),
		c = J("dataset-index"),
		d = K("u"),
		a = new Z(a, b, c, d, J("search"), J("results"), J("branches"), J("detailed"));
	n.app = a
};
xa("window.onload", window.onload);
var Z = function (a, b, c, d, e, f, g, h) {
	var t = this;
	this.B = a;
	this.f = b;
	this.g = c;
	this.M = e;
	this.da = null;
	this.M && (this.da = J("search-icon"));
	this.L = f;
	this.tb = g;
	this.ca = this.$a = null;
	null != this.L && (this.$a = td(S(this.L, "hierarchy")), this.ca = td(S(this.L, "index")));
	this.Da = this.Ca = this.Ja = this.Ba = null;
	this.Ia = !1;
	this.i = [{
		m: 3,
		order: !0
	}];
	this.N = [function (a, b) {
		return "".localeCompare ? M(a).localeCompare(M(b)) : M(a) == M(b) ? 0 : M(a) > M(b) ? 1 : -1
	}, function (a, b) {
		var c = parseFloat(S(a, "quality")) - parseFloat(S(b, "quality"));
		return 1E-4 >
			Math.abs(c) ? parseInt(S(a.parentElement.cells[2], "num")) - parseInt(S(b.parentElement.cells[2], "num")) : c
	}, function (a, b) {
		return parseInt(S(a, "num")) - parseInt(S(b, "num"))
	}, function (a, b) {
		return parseFloat(S(a, "duration")) - parseFloat(S(b, "duration"))
	}, function (a, b) {
		var c = parseFloat(S(a, "num")) - parseFloat(S(b, "num"));
		return 1E-4 > Math.abs(c) ? t.N[1](a.parentElement.cells[1], b.parentElement.cells[1]) : c
	}];
	this.O = null;
	this.F = !0;
	this.G = 0;
	this.j = new U(this);
	this.j.l(this.B, "click", this.Ya);
	this.f && (ee(this), this.j.l(document,
		"mousemove",
		function (a) {
			var b = a.clientX || a.pageX;
			a = a.clientY || a.pageY;
			var c = t.f.getBoundingClientRect();
			"block" == t.B.style.display || b > c.left && b < c.right && a > c.top && a < c.bottom ? t.F && fe(t) : t.F || ge(t)
		}));
	this.g && (this.Ba = J("no-results"), this.Ja = K("num_videos"), this.Ca = K("detailed"), this.Da = J("details-row"), he(this));
	this.M && (this.tb ? (this.j.l(this.M, "input", this.Wa), this.Wa()) : (this.j.l(this.M, "input", this.Va), this.Va()), this.j.l(this.da, "click", function () {
		t.M.value = "";
		ie(t)
	}));
	h && this.j.l(h, "change", function () {
		je(t,
			h)
	});
	this.xb = new U(document.body);
	this.xb.l(window, "keydown", x(this.Ab, this), !0);
	d && C(d, function (a) {
		S(a, "ytid") && t.j.l(a, "click", function () {
			t.ra(S(a, "ytid"), parseFloat(S(a, "start")), parseFloat(S(a, "end")), td(S(a, "labels")), S(a, "prepend"))
		})
	})
};
Z.prototype.ra = function (a, b, c, d, e) {
	this.B.style.display = "block";
	Nb().style.overflow = "hidden";
	nc(this.B, Fc, {
		D: a,
		start: b,
		end: c,
		labels: d,
		w: e ? e : ""
	});
	this.Ia = !0
};
Z.prototype.showVideo = Z.prototype.ra;
Z.prototype.Ya = function () {
	for (; this.B.firstChild;) this.B.removeChild(this.B.firstChild);
	this.B.style.display = "none";
	Nb().style.overflow = "initial";
	this.Ia = !1
};
Z.prototype.Ab = function (a) {
	this.Ia && 27 == a.keyCode && this.Ya()
};
var ee = function (a) {
		Td(function (b) {
			b = b.target;
			if (200 == ae(b)) {
				b = b.a ? td(b.a.responseText) : void 0;
				Wa(b);
				b = b.slice(0, 24);
				b = rc(Ic, {
					Qa: b
				});
				for (Qb(a.f); b.children.length;) {
					var c = K("u", b.firstChild);
					if (3 > c.length) b.removeChild(b.firstChild);
					else {
						for (var d = {}, e = 0, f = c.length; e < f; d = {
								c: d.c
							}, e++) d.c = c[e], a.j.l(d.c, "click", function (b) {
							return function () {
								a.ra(S(b.c, "ytid"), parseFloat(S(b.c, "start")), parseFloat(S(b.c, "end")), td(S(b.c, "labels")), S(b.c, "prepend"))
							}
						}(d)), ke(d.c, d.c.id);
						a.f.appendChild(b.firstChild)
					}
				}
				le();
				de(function () {
					var b = document,
						b = {
							visible: 1,
							hidden: 2,
							prerender: 3,
							preview: 4
						}[b.webkitVisibilityState || b.mozVisibilityState || b.visibilityState || ""] || 0;
					1 == b ? ge(a) : 2 == b && fe(a)
				});
				ge(a)
			}
		})
	},
	ge = function (a) {
		a.O && fe(a);
		a.F = !0;
		a.O = setTimeout(x(a.lb, a), 2E3)
	},
	fe = function (a) {
		a.F = !1;
		a.O && (clearTimeout(a.O), a.O = null)
	};
Z.prototype.lb = function () {
	if (!this.F || window.blurred) this.F = !1;
	else {
		if (this.G + this.f.parentElement.offsetWidth > this.f.children[this.f.children.length - 1].offsetLeft) {
			Nc(this.f, "ub");
			for (var a = 0; a < this.f.children.length / 2; a++) this.G -= this.f.children[0].offsetWidth, this.f.appendChild(this.f.children[0]);
			this.f.style.transform = "translateX(-" + this.G + "px)";
			console.log(this.f.offsetTop);
			Mc(this.f, "ub")
		}
		a: {
			for (a = 0; a < this.f.children.length; a++)
				if (this.f.children[a].offsetLeft > this.G) {
					a = this.f.children[a].offsetLeft;
					break a
				}
			a = void 0
		}
		this.G = a;
		this.f.style.transform = "translateX(-" + this.G + "px)";
		this.F && (this.O = setTimeout(x(this.lb, this), 2E3))
	}
};
var ie = function (a) {
	L(a.da, "\u26b2");
	if (a.g) {
		var b = Array.from(a.g.rows).slice(2);
		C(b, function (a) {
			a.style.display = "table-row"
		});
		a.Ba.style.display = "none";
		a.g.style.display = "table"
	} else a.L.style.display = "none"
};
Z.prototype.Wa = function () {
	var a = this,
		b = this.M.value.toLowerCase();
	if (/^[\s\xa0]*$/.test(b)) ie(this);
	else {
		L(this.da, "+");
		var c = Pa(this.$a, function (c) {
				return Ra(c, function (c) {
					return Ja(a.ca[c][0], b)
				})
			}),
			d = String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
		c.sort(function (b, c) {
			var e = b.some(function (b) {
					return (new RegExp("\\b" + d + "\\b")).test(a.ca[b][0].toLowerCase())
				}),
				f = c.some(function (b) {
					return (new RegExp("\\b" + d + "\\b")).test(a.ca[b][0].toLowerCase())
				});
			return e && !f ? -1 :
				f && !e ? 1 : b.length != c.length ? b.length - c.length : b > c ? 1 : b < c ? -1 : 0
		});
		c = {
			Za: Qa(c, function (b) {
				return Qa(b, function (b) {
					return a.ca[b]
				})
			}).slice(0, 10)
		};
		nc(this.L, Jc, c);
		C(this.L.firstChild.children, function (a) {
			C(a.firstChild.children, function (a) {
				var c = M(a),
					d = c.toLowerCase().indexOf(b);
				if (-1 != d) {
					var e;
					e = document.createElement("LI");
					for (var f = 0; - 1 != d;) e.appendChild(document.createTextNode(String(c.substring(f, d)))), e.appendChild(Pb("SPAN", "Vb", c.substring(d, d + b.length))), f = d + b.length, d = c.toLowerCase().indexOf(b,
						f + 1);
					e.appendChild(document.createTextNode(String(c.substring(f))));
					(c = a.parentNode) && c.replaceChild(e, a)
				}
			})
		});
		this.L.style.display = "block"
	}
};
Z.prototype.Va = function () {
	var a = this.M.value;
	if (/^[\s\xa0]*$/.test(a)) ie(this);
	else {
		L(this.da, "+");
		var b = Array.from(this.g.rows).slice(2),
			c = !0;
		C(b, function (b) {
			Ja(M(b.cells[0]), a) ? (b.style.display = "table-row", c = !1) : b.style.display = "none"
		});
		this.Ba.style.display = c ? "block" : "none";
		this.g.style.display = c ? "none" : "table"
	}
};
var he = function (a) {
		for (var b = a.g.rows[1], c = {
				T: 0
			}; c.T < b.cells.length; c = {
				T: c.T
			}, c.T++) a.j.l(b.cells[c.T], "click", function (b) {
			return function () {
				var c = b.T;
				a.i.m == c && (a.i.order = !a.i.order);
				a.i.m = c;
				me(a)
			}
		}(c));
		for (var b = a.g.rows.length, c = {}, d = 2; d < b; c = {
				qa: c.qa
			}, d++) c.qa = a.g.rows[d], a.j.l(c.qa, "click", function (a) {
			return function () {
				document.location = a.qa.cells[0].firstChild.href
			}
		}(c))
	},
	me = function (a) {
		var b = K("sort");
		b.forEach(function (a) {
			L(a, "")
		});
		L(b[a.i.m], a.i.order ? "\u00a0\u25b4" : "\u00a0\u25be");
		b = Array.from(a.g.rows).slice(2);
		b.sort(a.i.order ? function (b, c) {
			return a.N[a.i.m >= a.N.length ? a.N.length - 1 : a.i.m](b.cells[a.i.m], c.cells[a.i.m])
		} : function (b, c) {
			return -1 * a.N[a.i.m >= a.N.length ? a.N.length - 1 : a.i.m](b.cells[a.i.m], c.cells[a.i.m])
		});
		for (var b = ia(b), c = b.next(); !c.done; c = b.next()) a.g.rows[0].parentElement.appendChild(c.value)
	},
	je = function (a, b) {
		b.checked ? (C(a.Ja, function (a) {
			L(a, "# videos")
		}), C(a.Ca, function (a) {
			a.style.display = "table-cell"
		}), a.Da.style.display = "table-row", C(a.g.rows, function (a) {
			Mc(a.cells[2], "bb")
		}), Mc(a.g,
			"ib")) : (C(a.Ja, function (a) {
			L(a, "Number of videos")
		}), C(a.Ca, function (a) {
			a.style.display = "none"
		}), a.Da.style.display = "none", C(a.g.rows, function (a) {
			Nc(a.cells[2], "bb")
		}), Nc(a.g, "ib"))
	},
	le = function () {
		if (Number.toLocaleString)
			for (var a = K("number"), b = 0; b < a.length; b++) L(a[b], M(a[b]).replace(/\B(?=(\d{3})+(?!\d))/g, ","))
	};

function ke(a, b) {
	var c = new Image;
	c.onload = function () {
		120 == c.width && 90 == c.height ? a.parentNode.removeChild(a) : a.insertBefore(c, a.firstChild)
	};
	c.src = b
}

function ne(a, b) {
	b = rc(Hc, {
		jb: b
	});
	for (var c = K("u", b), d = {}, e = 0; b.children.length; d = {
			c: d.c
		}, e++) d.c = c[e], dd(d.c, "click", function (a) {
		return function () {
			n.app.ra(S(a.c, "ytid"), parseFloat(S(a.c, "start")), parseFloat(S(a.c, "end")), td(S(a.c, "labels")), S(a.c, "prepend"))
		}
	}(d)), ke(d.c, d.c.id), a.appendChild(b.children[0])
}
xa("populateThumbnails", function (a, b, c) {
	var d = J("thumbnails"),
		e = new Vb(50, c, function (c) {
			return a + b + "/" + c + ".js"
		}, function (a) {
			ne(d, a)
		}, "p");
	Yb(e);
	window.onscroll = function () {
		Wb(e) && window.innerHeight + window.scrollY > d.offsetTop + d.offsetHeight - 100 && Yb(e)
	}
});
xa("p");
xa("ga");
xa("q", function (a) {
	var b = J("balanced-thumbnails"),
		c = J("unbalanced-thumbnails");
	ne(J("eval-thumbnails"), a.eval);
	ne(b, a.balanced_train);
	ne(c, a.unbalanced_train)
});
