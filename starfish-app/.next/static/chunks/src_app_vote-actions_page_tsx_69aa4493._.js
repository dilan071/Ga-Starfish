(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_vote-actions_page_tsx_69aa4493._.js", {

"[project]/src/app/vote-actions/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// src/app/vote-actions/page.tsx
__turbopack_context__.s({
    "default": (()=>VoteActions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function VoteActions() {
    _s();
    const [actions, setActions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [votes, setVotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VoteActions.useEffect": ()=>{
            const storedActions = localStorage.getItem('actions');
            if (storedActions) {
                const parsed = JSON.parse(storedActions);
                setActions(parsed);
                const initialVotes = {};
                Object.keys(parsed).forEach({
                    "VoteActions.useEffect": (cat)=>{
                        parsed[cat].forEach({
                            "VoteActions.useEffect": (_, idx)=>{
                                initialVotes[`${cat}-${idx}`] = 0;
                            }
                        }["VoteActions.useEffect"]);
                    }
                }["VoteActions.useEffect"]);
                setVotes(initialVotes);
            }
        }
    }["VoteActions.useEffect"], []);
    const handleVote = (cat, idx)=>{
        const key = `${cat}-${idx}`;
        const updatedVotes = {
            ...votes,
            [key]: votes[key] + 1
        };
        setVotes(updatedVotes);
        localStorage.setItem('votes', JSON.stringify(updatedVotes));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "Votar por Acciones"
            }, void 0, false, {
                fileName: "[project]/src/app/vote-actions/page.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            Object.keys(actions).map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: cat
                        }, void 0, false, {
                            fileName: "[project]/src/app/vote-actions/page.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            children: actions[cat].map((action, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        action,
                                        " - Votos: ",
                                        votes[`${cat}-${idx}`] || 0,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleVote(cat, idx),
                                            children: "Votar"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/vote-actions/page.tsx",
                                            lineNumber: 41,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/src/app/vote-actions/page.tsx",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/vote-actions/page.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    ]
                }, cat, true, {
                    fileName: "[project]/src/app/vote-actions/page.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/vote-actions/page.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(VoteActions, "5udkFieyqsm3nNfarquLd0ESZVE=");
_c = VoteActions;
var _c;
__turbopack_context__.k.register(_c, "VoteActions");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_vote-actions_page_tsx_69aa4493._.js.map