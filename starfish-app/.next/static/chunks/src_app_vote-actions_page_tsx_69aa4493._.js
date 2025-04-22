(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_vote-actions_page_tsx_69aa4493._.js", {

"[project]/src/app/vote-actions/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
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
    const [userVotes, setUserVotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [currentUser, setCurrentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Función para obtener avatar de un email
    const getAvatar = (email)=>{
        const allUsers = JSON.parse(localStorage.getItem('users') || '[]');
        const found = allUsers.find((u)=>u.email === email);
        return found?.avatar || '/default-avatar.png';
    };
    // Carga inicial: usuario, acciones, votos globales y votos/abstenciones de usuarios
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VoteActions.useEffect": ()=>{
            const storedUser = localStorage.getItem('currentUser');
            if (storedUser) setCurrentUser(JSON.parse(storedUser));
            const storedActions = localStorage.getItem('actions');
            if (storedActions) setActions(JSON.parse(storedActions));
            const storedVotes = localStorage.getItem('votes');
            setVotes(storedVotes ? JSON.parse(storedVotes) : {});
            const storedUserVotes = localStorage.getItem('userVotes');
            setUserVotes(storedUserVotes ? JSON.parse(storedUserVotes) : {});
        }
    }["VoteActions.useEffect"], []);
    if (!currentUser) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Cargando usuario..."
    }, void 0, false, {
        fileName: "[project]/src/app/vote-actions/page.tsx",
        lineNumber: 42,
        columnNumber: 28
    }, this);
    const userEmail = currentUser.email;
    const userAction = userVotes[userEmail];
    const hasAbstained = userAction === 'abstain';
    const hasVoted = !!userAction && userAction !== 'abstain';
    // Guardar votos globales
    const saveVotes = (updated)=>{
        setVotes(updated);
        localStorage.setItem('votes', JSON.stringify(updated));
    };
    // Guardar voto/abstención del usuario
    const saveUserVotes = (updated)=>{
        setUserVotes(updated);
        localStorage.setItem('userVotes', JSON.stringify(updated));
    };
    // Handler de votar
    const handleVote = (category, idx)=>{
        if (hasVoted || hasAbstained) return;
        const key = `${category}-${idx}`;
        const updatedVotes = {
            ...votes,
            [key]: (votes[key] || 0) + 1
        };
        saveVotes(updatedVotes);
        saveUserVotes({
            ...userVotes,
            [userEmail]: key
        });
    };
    // Handler de abstenerme
    const handleAbstain = ()=>{
        if (hasVoted || hasAbstained) return;
        saveUserVotes({
            ...userVotes,
            [userEmail]: 'abstain'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: '1rem'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '1rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: getAvatar(currentUser.email),
                        alt: "Mi Avatar",
                        style: {
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            marginRight: '0.5rem'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/vote-actions/page.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Votar por Acciones"
                    }, void 0, false, {
                        fileName: "[project]/src/app/vote-actions/page.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/vote-actions/page.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleAbstain,
                disabled: hasVoted || hasAbstained,
                style: {
                    marginBottom: '1rem'
                },
                children: hasAbstained ? 'Ya te abstuviste' : 'Me abstengo de votar'
            }, void 0, false, {
                fileName: "[project]/src/app/vote-actions/page.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            Object.keys(actions).map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginBottom: '1.5rem'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: category
                        }, void 0, false, {
                            fileName: "[project]/src/app/vote-actions/page.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            style: {
                                listStyle: 'none',
                                padding: 0
                            },
                            children: actions[category].map((actionText, idx)=>{
                                const actionKey = `${category}-${idx}`;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginBottom: '0.5rem'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: getAvatar(currentUser.email),
                                            alt: "Mi Avatar",
                                            style: {
                                                width: '32px',
                                                height: '32px',
                                                borderRadius: '50%',
                                                marginRight: '0.5rem'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/vote-actions/page.tsx",
                                            lineNumber: 105,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                flex: 1
                                            },
                                            children: actionText
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/vote-actions/page.tsx",
                                            lineNumber: 110,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginLeft: '1rem'
                                            },
                                            children: [
                                                "Votos: ",
                                                votes[actionKey] || 0,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleVote(category, idx),
                                                    disabled: hasVoted || hasAbstained,
                                                    style: {
                                                        marginLeft: '0.5rem'
                                                    },
                                                    children: hasVoted ? 'Ya votaste' : 'Votar'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/vote-actions/page.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/vote-actions/page.tsx",
                                            lineNumber: 111,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, actionKey, true, {
                                    fileName: "[project]/src/app/vote-actions/page.tsx",
                                    lineNumber: 101,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/vote-actions/page.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)
                    ]
                }, category, true, {
                    fileName: "[project]/src/app/vote-actions/page.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/vote-actions/page.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_s(VoteActions, "+1F524rjSZwy0lC1Sr+9Je8NA1I=");
_c = VoteActions;
var _c;
__turbopack_context__.k.register(_c, "VoteActions");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_vote-actions_page_tsx_69aa4493._.js.map