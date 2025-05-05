module.exports = {

"[project]/src/app/leaderboard/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/app/leaderboard/page.tsx
__turbopack_context__.s({
    "default": (()=>LeaderboardPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$esm$2f$subDays$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__subDays$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/esm/subDays/index.js [app-ssr] (ecmascript) <export default as subDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$esm$2f$subMonths$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__subMonths$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/esm/subMonths/index.js [app-ssr] (ecmascript) <export default as subMonths>");
'use client';
;
;
;
function LeaderboardPage() {
    const [entries, setEntries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [period, setPeriod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    const [scores, setScores] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const stored = JSON.parse(localStorage.getItem('points') || '[]');
        setEntries(stored);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const now = new Date();
        let filtered = entries;
        if (period === 'weekly') {
            const cutoff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$esm$2f$subDays$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__subDays$3e$__["subDays"])(now, 7);
            filtered = entries.filter((entry)=>new Date(entry.date) >= cutoff);
        } else if (period === 'monthly') {
            const cutoff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$esm$2f$subMonths$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__subMonths$3e$__["subMonths"])(now, 1);
            filtered = entries.filter((entry)=>new Date(entry.date) >= cutoff);
        }
        const summary = {};
        filtered.forEach((entry)=>{
            summary[entry.email] = (summary[entry.email] || 0) + entry.points;
        });
        const sortedScores = Object.entries(summary).map(([email, total])=>({
                email,
                total
            })).sort((a, b)=>b.total - a.total);
        setScores(sortedScores);
    }, [
        entries,
        period
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold mb-4",
                children: "Leaderboard"
            }, void 0, false, {
                fileName: "[project]/src/app/leaderboard/page.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "period",
                        className: "mr-2 font-medium",
                        children: "Período:"
                    }, void 0, false, {
                        fileName: "[project]/src/app/leaderboard/page.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        id: "period",
                        value: period,
                        onChange: (e)=>setPeriod(e.target.value),
                        className: "border px-2 py-1 rounded",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "all",
                                children: "Total"
                            }, void 0, false, {
                                fileName: "[project]/src/app/leaderboard/page.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "weekly",
                                children: "Semanal"
                            }, void 0, false, {
                                fileName: "[project]/src/app/leaderboard/page.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "monthly",
                                children: "Mensual"
                            }, void 0, false, {
                                fileName: "[project]/src/app/leaderboard/page.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/leaderboard/page.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/leaderboard/page.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "w-full border-collapse text-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "bg-gray-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "border-b p-2",
                                    children: "#"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/leaderboard/page.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "border-b p-2",
                                    children: "Usuario"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/leaderboard/page.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "border-b p-2",
                                    children: "Puntos"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/leaderboard/page.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/leaderboard/page.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/leaderboard/page.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: scores.length > 0 ? scores.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "hover:bg-gray-50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "border-b p-2 text-center",
                                        children: index + 1
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/leaderboard/page.tsx",
                                        lineNumber: 79,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "border-b p-2",
                                        children: entry.email
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/leaderboard/page.tsx",
                                        lineNumber: 80,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "border-b p-2 text-center",
                                        children: entry.total
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/leaderboard/page.tsx",
                                        lineNumber: 81,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, entry.email, true, {
                                fileName: "[project]/src/app/leaderboard/page.tsx",
                                lineNumber: 78,
                                columnNumber: 15
                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                colSpan: 3,
                                className: "p-4 text-center text-gray-500",
                                children: "No hay puntuaciones aún."
                            }, void 0, false, {
                                fileName: "[project]/src/app/leaderboard/page.tsx",
                                lineNumber: 86,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/leaderboard/page.tsx",
                            lineNumber: 85,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/leaderboard/page.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/leaderboard/page.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/leaderboard/page.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
}}),
"[project]/node_modules/date-fns/esm/_lib/toInteger/index.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>toInteger)
});
function toInteger(dirtyNumber) {
    if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
        return NaN;
    }
    var number = Number(dirtyNumber);
    if (isNaN(number)) {
        return number;
    }
    return number < 0 ? Math.ceil(number) : Math.floor(number);
}
}}),
"[project]/node_modules/@babel/runtime/helpers/esm/typeof.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>_typeof)
});
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
;
}}),
"[project]/node_modules/date-fns/esm/_lib/requiredArgs/index.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>requiredArgs)
});
function requiredArgs(required, args) {
    if (args.length < required) {
        throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
    }
}
}}),
"[project]/node_modules/date-fns/esm/toDate/index.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>toDate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/typeof.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$esm$2f$_lib$2f$requiredArgs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/esm/_lib/requiredArgs/index.js [app-ssr] (ecmascript)");
;
;
function toDate(argument) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$esm$2f$_lib$2f$requiredArgs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(1, arguments);
    var argStr = Object.prototype.toString.call(argument);
    // Clone the date
    if (argument instanceof Date || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(argument) === 'object' && argStr === '[object Date]') {
        // Prevent the date to lose the milliseconds when passed to new Date() in IE10
        return new Date(argument.getTime());
    } else if (typeof argument === 'number' || argStr === '[object Number]') {
        return new Date(argument);
    } else {
        if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
            // eslint-disable-next-line no-console
            console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
            // eslint-disable-next-line no-console
            console.warn(new Error().stack);
        }
        return new Date(NaN);
    }
}
}}),
"[project]/node_modules/date-fns/esm/addDays/index.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>addDays)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$esm$2f$_lib$2f$toInteger$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/esm/_lib/toInteger/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$esm$2f$toDate$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/esm/toDate/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$esm$2f$_lib$2f$requiredArgs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/esm/_lib/requiredArgs/index.js [app-ssr] (ecmascript)");
;
;
;
function addDays(dirtyDate, dirtyAmount) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$esm$2f$_lib$2f$requiredArgs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(2, arguments);
    var date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$esm$2f$toDate$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(dirtyDate);
    var amount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$esm$2f$_lib$2f$toInteger$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(dirtyAmount);
    if (isNaN(amount)) {
        return new Date(NaN);
    }
    if (!amount) {
        // If 0 days, no-op to avoid changing times in the hour before end of DST
        return date;
    }
    date.setDate(date.getDate() + amount);
    return date;
}
}}),
"[project]/node_modules/date-fns/esm/subDays/index.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>subDays)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$esm$2f$addDays$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/esm/addDays/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$esm$2f$_lib$2f$requiredArgs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/esm/_lib/requiredArgs/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$esm$2f$_lib$2f$toInteger$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/esm/_lib/toInteger/index.js [app-ssr] (ecmascript)");
;
;
;
function subDays(dirtyDate, dirtyAmount) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$esm$2f$_lib$2f$requiredArgs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(2, arguments);
    var amount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$esm$2f$_lib$2f$toInteger$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(dirtyAmount);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$esm$2f$addDays$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(dirtyDate, -amount);
}
}}),
"[project]/node_modules/date-fns/esm/subDays/index.js [app-ssr] (ecmascript) <export default as subDays>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "subDays": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$esm$2f$subDays$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$esm$2f$subDays$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/esm/subDays/index.js [app-ssr] (ecmascript)");
}}),
"[project]/node_modules/date-fns/esm/addMonths/index.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>addMonths)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$esm$2f$_lib$2f$toInteger$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/esm/_lib/toInteger/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$esm$2f$toDate$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/esm/toDate/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$esm$2f$_lib$2f$requiredArgs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/esm/_lib/requiredArgs/index.js [app-ssr] (ecmascript)");
;
;
;
function addMonths(dirtyDate, dirtyAmount) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$esm$2f$_lib$2f$requiredArgs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(2, arguments);
    var date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$esm$2f$toDate$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(dirtyDate);
    var amount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$esm$2f$_lib$2f$toInteger$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(dirtyAmount);
    if (isNaN(amount)) {
        return new Date(NaN);
    }
    if (!amount) {
        // If 0 months, no-op to avoid changing times in the hour before end of DST
        return date;
    }
    var dayOfMonth = date.getDate();
    // The JS Date object supports date math by accepting out-of-bounds values for
    // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
    // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
    // want except that dates will wrap around the end of a month, meaning that
    // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
    // we'll default to the end of the desired month by adding 1 to the desired
    // month and using a date of 0 to back up one day to the end of the desired
    // month.
    var endOfDesiredMonth = new Date(date.getTime());
    endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
    var daysInMonth = endOfDesiredMonth.getDate();
    if (dayOfMonth >= daysInMonth) {
        // If we're already at the end of the month, then this is the correct date
        // and we're done.
        return endOfDesiredMonth;
    } else {
        // Otherwise, we now know that setting the original day-of-month value won't
        // cause an overflow, so set the desired day-of-month. Note that we can't
        // just set the date of `endOfDesiredMonth` because that object may have had
        // its time changed in the unusual case where where a DST transition was on
        // the last day of the month and its local time was in the hour skipped or
        // repeated next to a DST transition.  So we use `date` instead which is
        // guaranteed to still have the original time.
        date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
        return date;
    }
}
}}),
"[project]/node_modules/date-fns/esm/subMonths/index.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>subMonths)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$esm$2f$_lib$2f$toInteger$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/esm/_lib/toInteger/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$esm$2f$addMonths$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/esm/addMonths/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$esm$2f$_lib$2f$requiredArgs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/esm/_lib/requiredArgs/index.js [app-ssr] (ecmascript)");
;
;
;
function subMonths(dirtyDate, dirtyAmount) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$esm$2f$_lib$2f$requiredArgs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(2, arguments);
    var amount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$esm$2f$_lib$2f$toInteger$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(dirtyAmount);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$esm$2f$addMonths$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(dirtyDate, -amount);
}
}}),
"[project]/node_modules/date-fns/esm/subMonths/index.js [app-ssr] (ecmascript) <export default as subMonths>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "subMonths": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$esm$2f$subMonths$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$esm$2f$subMonths$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/esm/subMonths/index.js [app-ssr] (ecmascript)");
}}),

};

//# sourceMappingURL=_b9dc6324._.js.map