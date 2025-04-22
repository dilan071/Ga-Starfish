(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_retrospective-session_page_tsx_56e41dec._.js", {

"[project]/src/app/retrospective-session/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>RetrospectiveSessionPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function RetrospectiveSessionPage() {
    _s();
    const [retrospective, setRetrospective] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [actionText, setActionText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [hasVoted, setHasVoted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showQuestions, setShowQuestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentUser, setCurrentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [userVotedAction, setUserVotedAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Función para obtener avatar de un email
    const getAvatar = (email)=>{
        const all = JSON.parse(localStorage.getItem('users') || '[]');
        const u = all.find((x)=>x.email === email);
        return u?.avatar || '/default-avatar.png';
    };
    // Cargar usuario y retrospectiva (incluye programadas que ya estén activas)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RetrospectiveSessionPage.useEffect": ()=>{
            // 1. Usuario
            const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
            setCurrentUser(user);
            // 2. Intentar cargar retrospectiva "normal"
            let retro = null;
            const storedNormal = localStorage.getItem('retrospective');
            if (storedNormal) {
                retro = JSON.parse(storedNormal);
            } else {
                // 3. Si no existe, buscar en programadas ya activas
                const scheduled = JSON.parse(localStorage.getItem('scheduledRetrospectives') || '[]');
                const now = new Date();
                const activeList = scheduled.filter({
                    "RetrospectiveSessionPage.useEffect.activeList": (r)=>new Date(r.scheduledAt) <= now
                }["RetrospectiveSessionPage.useEffect.activeList"]);
                if (activeList.length > 0) {
                    activeList.sort({
                        "RetrospectiveSessionPage.useEffect": (a, b)=>new Date(b.scheduledAt).getTime() - new Date(a.scheduledAt).getTime()
                    }["RetrospectiveSessionPage.useEffect"]);
                    retro = activeList[0];
                    localStorage.setItem('retrospective', JSON.stringify(retro));
                }
            }
            if (retro) {
                setRetrospective(retro);
            }
        }
    }["RetrospectiveSessionPage.useEffect"], []);
    // Determinar si el usuario ya votó
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RetrospectiveSessionPage.useEffect": ()=>{
            if (retrospective && currentUser && retrospective.votes) {
                const voteId = retrospective.votes[currentUser.email];
                if (voteId) {
                    setHasVoted(true);
                    setUserVotedAction(voteId);
                }
            }
        }
    }["RetrospectiveSessionPage.useEffect"], [
        retrospective,
        currentUser
    ]);
    // Función para otorgar puntos
    const addPoint = (type)=>{
        if (!currentUser) return;
        const record = JSON.parse(localStorage.getItem('points') || '[]');
        const entry = {
            email: currentUser.email,
            type,
            date: new Date().toISOString(),
            points: type === 'vote' ? 1 : 2
        };
        localStorage.setItem('points', JSON.stringify([
            ...record,
            entry
        ]));
    };
    // Agregar nueva acción (comentario)
    const handleAddAction = (e)=>{
        e.preventDefault();
        if (!actionText.trim()) return;
        const newAction = {
            id: Date.now().toString(),
            text: actionText.trim(),
            createdBy: currentUser?.email || 'desconocido',
            voteCount: 0
        };
        const updated = {
            ...retrospective,
            actions: retrospective.actions ? [
                ...retrospective.actions,
                newAction
            ] : [
                newAction
            ],
            votes: retrospective.votes || {}
        };
        localStorage.setItem('retrospective', JSON.stringify(updated));
        setRetrospective(updated);
        setActionText('');
        addPoint('comment');
    };
    // Votar o cambiar voto
    const handleVote = (actionId)=>{
        if (!currentUser) return;
        const prevVote = retrospective.votes?.[currentUser.email];
        const updatedActions = retrospective.actions.map((a)=>{
            if (a.id === actionId) return {
                ...a,
                voteCount: a.voteCount + 1
            };
            if (a.id === prevVote) return {
                ...a,
                voteCount: Math.max(0, a.voteCount - 1)
            };
            return a;
        });
        const updatedVotes = {
            ...retrospective.votes,
            [currentUser.email]: actionId
        };
        const updated = {
            ...retrospective,
            actions: updatedActions,
            votes: updatedVotes
        };
        localStorage.setItem('retrospective', JSON.stringify(updated));
        setRetrospective(updated);
        setHasVoted(true);
        setUserVotedAction(actionId);
        addPoint('vote');
    };
    // Preguntas guiadas por FSH
    const questionsMapping = {
        FSH1: [
            'Pregunta 1 para FSH1',
            'Pregunta 2 para FSH1'
        ],
        FSH2: [
            'Pregunta 1 para FSH2',
            'Pregunta 2 para FSH2'
        ],
        FSH3: [
            'Pregunta 1 para FSH3',
            'Pregunta 2 para FSH3'
        ]
    };
    if (!retrospective) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "No hay retrospectiva activa."
    }, void 0, false, {
        fileName: "[project]/src/app/retrospective-session/page.tsx",
        lineNumber: 127,
        columnNumber: 30
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: '1rem'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: [
                    "Retrospectiva: ",
                    retrospective.title
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/retrospective-session/page.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: retrospective.description
            }, void 0, false, {
                fileName: "[project]/src/app/retrospective-session/page.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            retrospective.fsh && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    "FSH: ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: 'blue'
                        },
                        children: retrospective.fsh
                    }, void 0, false, {
                        fileName: "[project]/src/app/retrospective-session/page.tsx",
                        lineNumber: 135,
                        columnNumber: 16
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/retrospective-session/page.tsx",
                lineNumber: 134,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                fileName: "[project]/src/app/retrospective-session/page.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: "Agregar Acción"
            }, void 0, false, {
                fileName: "[project]/src/app/retrospective-session/page.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleAddAction,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Escribe tu acción",
                        value: actionText,
                        onChange: (e)=>setActionText(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/src/app/retrospective-session/page.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        children: "Agregar Acción"
                    }, void 0, false, {
                        fileName: "[project]/src/app/retrospective-session/page.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/retrospective-session/page.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                fileName: "[project]/src/app/retrospective-session/page.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: "Acciones Agregadas"
            }, void 0, false, {
                fileName: "[project]/src/app/retrospective-session/page.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this),
            retrospective.actions?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                style: {
                    listStyle: 'none',
                    padding: 0
                },
                children: retrospective.actions.map((action)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            margin: '0.5rem 0'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: getAvatar(action.createdBy),
                                alt: "avatar",
                                style: {
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '50%',
                                    marginRight: '0.5rem'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/retrospective-session/page.tsx",
                                lineNumber: 160,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: action.createdBy
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/retrospective-session/page.tsx",
                                        lineNumber: 166,
                                        columnNumber: 17
                                    }, this),
                                    ": ",
                                    action.text
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/retrospective-session/page.tsx",
                                lineNumber: 165,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginLeft: '1rem'
                                },
                                children: [
                                    action.voteCount,
                                    " votos",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleVote(action.id),
                                        disabled: hasVoted,
                                        style: {
                                            marginLeft: '0.5rem'
                                        },
                                        children: userVotedAction === action.id ? 'Has votado' : 'Votar'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/retrospective-session/page.tsx",
                                        lineNumber: 170,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/retrospective-session/page.tsx",
                                lineNumber: 168,
                                columnNumber: 15
                            }, this)
                        ]
                    }, action.id, true, {
                        fileName: "[project]/src/app/retrospective-session/page.tsx",
                        lineNumber: 156,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/retrospective-session/page.tsx",
                lineNumber: 154,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "No se han agregado acciones aún."
            }, void 0, false, {
                fileName: "[project]/src/app/retrospective-session/page.tsx",
                lineNumber: 182,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                fileName: "[project]/src/app/retrospective-session/page.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setShowQuestions(!showQuestions),
                children: showQuestions ? 'Ocultar Preguntas' : 'Ver Preguntas'
            }, void 0, false, {
                fileName: "[project]/src/app/retrospective-session/page.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this),
            showQuestions && retrospective.fsh && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: [
                            "Preguntas para ",
                            retrospective.fsh
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/retrospective-session/page.tsx",
                        lineNumber: 191,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        children: questionsMapping[retrospective.fsh].map((q, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: q
                            }, i, false, {
                                fileName: "[project]/src/app/retrospective-session/page.tsx",
                                lineNumber: 194,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/retrospective-session/page.tsx",
                        lineNumber: 192,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/retrospective-session/page.tsx",
                lineNumber: 190,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/retrospective-session/page.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
_s(RetrospectiveSessionPage, "x0YuB4pP5erlHLf/rPofm6ASoy4=");
_c = RetrospectiveSessionPage;
var _c;
__turbopack_context__.k.register(_c, "RetrospectiveSessionPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_retrospective-session_page_tsx_56e41dec._.js.map