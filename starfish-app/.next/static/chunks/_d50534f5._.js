(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_d50534f5._.js", {

"[project]/src/app/retrospective-session/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>RetrospectiveSessionPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function RetrospectiveSessionPage() {
    _s();
    const [retrospective, setRetrospective] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [actionText, setActionText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [hasVoted, setHasVoted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showQuestions, setShowQuestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentUser, setCurrentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isAuthorized, setIsAuthorized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userVotedAction, setUserVotedAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const retrospectiveId = searchParams.get('id');
    // Función para obtener avatar de un email
    const getAvatar = (email)=>{
        const all = JSON.parse(localStorage.getItem('users') || '[]');
        const u = all.find((x)=>x.email === email);
        return u?.avatar || '/default-avatar.png';
    };
    // Mapeo de preguntas por FSH
    const questionsMapping = {
        'Comunicación': [
            '¿En qué momentos del sprint la comunicación fue efectiva y cómo podemos replicarla en el futuro?',
            '¿Hubo situaciones donde la falta de claridad en la comunicación generó malentendidos? ¿Cómo podríamos evitarlo?'
        ],
        'Compromiso': [
            '¿Cómo percibimos el nivel de compromiso individual y colectivo durante el sprint? ¿Qué factores lo influyeron?',
            '¿Qué acciones concretas podríamos tomar para fortalecer el compromiso en los próximos sprints?'
        ],
        'Colaboración': [
            '¿En qué tareas o situaciones la colaboración entre el equipo fue clave para el éxito?',
            '¿Identificamos oportunidades donde una mayor colaboración hubiera acelerado o mejorado los resultados?'
        ],
        'Motivación': [
            '¿Qué aspectos del sprint aumentaron o disminuyeron la motivación del equipo? ¿Cómo podemos potenciarlos?',
            '¿Cómo podemos asegurar que las responsabilidades asignadas estén alineadas con los intereses y motivaciones individuales?'
        ],
        'Satisfacción laboral': [
            '¿Qué elementos del trabajo durante el sprint contribuyeron a su satisfacción personal?',
            '¿Qué cambios en la dinámica del equipo o en las tareas mejorarían la satisfacción general?'
        ],
        'Inteligencia emocional': [
            '¿Cómo manejamos los conflictos o situaciones de estrés durante el sprint? ¿Qué habilidades emocionales podríamos reforzar?',
            '¿De qué manera podemos fomentar un ambiente donde se priorice la empatía y el respeto mutuo?'
        ],
        'Cohesión de equipo': [
            '¿Qué actividades o dinámicas durante el sprint fortalecieron la unión y confianza entre los miembros del equipo? ¿Cómo podemos replicarlas?',
            '¿Hubo momentos en los que percibimos falta de alineación o desconexión en el equipo? ¿Qué acciones podrían ayudarnos a mejorar esto en futuros sprints?'
        ],
        'Empatía y relaciones': [
            '¿En qué situaciones durante el sprint percibimos que la empatía facilitó la resolución de conflictos o mejoró la dinámica del equipo?',
            '¿Hubo momentos en los que las diferencias interpersonales afectaron la colaboración?'
        ],
        'Liderazgo': [
            '¿El liderazgo durante el sprint facilitó la toma de decisiones? ¿Qué ajustes sugerirían?',
            '¿Cómo podemos distribuir roles de liderazgo para aprovechar las fortalezas de cada miembro?'
        ],
        'Autonomía': [
            '¿En qué tareas o decisiones durante el sprint el equipo sintió que tuvo suficiente autonomía para actuar con agilidad? ¿Cómo podemos replicar ese escenario en el futuro?',
            '¿Hubo momentos en los que la falta de claridad en los límites de autonomía generó confusión o retrasos? ¿Qué ajustes podríamos hacer para equilibrar libertad y alineación?'
        ],
        'Innovación': [
            '¿Qué oportunidades identificamos durante el sprint para probar enfoques o herramientas nuevas? ¿Cómo podemos priorizar la experimentación en futuros sprints?',
            '¿Hubo barreras (culturales, técnicas o de procesos) que limitaron la creatividad o la implementación de ideas innovadoras? ¿Cómo podríamos abordarlas?'
        ],
        'Habilidades y experiencia en el desarrollo de software': [
            '¿Las habilidades técnicas del equipo fueron suficientes para abordar los desafíos del sprint? ¿En qué áreas necesitamos capacitación?',
            '¿Cómo podemos compartir conocimientos entre los miembros para fortalecer las habilidades colectivas?'
        ],
        'Habilidades y experiencia en la gestión de proyectos de desarrollo de software': [
            '¿La planificación y seguimiento del sprint aprovecharon la experiencia previa del equipo? ¿Qué lecciones aplicaremos en el futuro?',
            '¿Identificamos brechas en la gestión de riesgos o recursos que debamos abordar con mayor experiencia?'
        ]
    };
    // Cargar retrospectiva y usuario desde localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RetrospectiveSessionPage.useEffect": ()=>{
            const storedRetrospectives = localStorage.getItem('retrospectives');
            const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
            setCurrentUser(user);
            if (storedRetrospectives) {
                const retros = JSON.parse(storedRetrospectives);
                let retroToLoad = null;
                if (retrospectiveId) {
                    retroToLoad = retros.find({
                        "RetrospectiveSessionPage.useEffect": (retro)=>retro.id && retro.id === retrospectiveId
                    }["RetrospectiveSessionPage.useEffect"]);
                } else if (user && user.assignedGroup) {
                    const retrospectivesForGroup = retros.filter({
                        "RetrospectiveSessionPage.useEffect.retrospectivesForGroup": (retro)=>retro.assignedGroup && retro.assignedGroup.trim() === user.assignedGroup.trim() && retro.closed === false
                    }["RetrospectiveSessionPage.useEffect.retrospectivesForGroup"]);
                    retrospectivesForGroup.sort({
                        "RetrospectiveSessionPage.useEffect": (a, b)=>new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
                    }["RetrospectiveSessionPage.useEffect"]);
                    retroToLoad = retrospectivesForGroup.length > 0 ? retrospectivesForGroup[0] : null;
                }
                if (retroToLoad) {
                    setRetrospective(retroToLoad);
                    setIsAuthorized(true);
                } else {
                    setRetrospective(null);
                    setIsAuthorized(false);
                }
            }
        }
    }["RetrospectiveSessionPage.useEffect"], [
        retrospectiveId
    ]);
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
        if (retrospective.closed) {
            alert('La retrospectiva está cerrada. No se pueden emitir votos.');
            return;
        }
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
    // Toggle preguntas FSH
    const toggleQuestions = ()=>{
        setShowQuestions(!showQuestions);
    };
    // Cerrar retrospectiva (solo Scrum Master)
    const handleCloseRetrospective = ()=>{
        if (!currentUser) return;
        if (currentUser.email !== retrospective.createdBy) {
            alert('No tienes permiso para cerrar esta retrospectiva.');
            return;
        }
        const updatedRetro = {
            ...retrospective,
            closed: true
        };
        const storedRetrospectives = localStorage.getItem('retrospectives');
        if (storedRetrospectives) {
            const retros = JSON.parse(storedRetrospectives);
            const updatedRetros = retros.map((retro)=>{
                if (retro.assignedGroup && currentUser && retro.assignedGroup.trim() === currentUser.assignedGroup.trim() && retro.createdAt === retrospective.createdAt) {
                    return updatedRetro;
                }
                return retro;
            });
            localStorage.setItem('retrospectives', JSON.stringify(updatedRetros));
        }
        setRetrospective(updatedRetro);
        alert('Retrospectiva cerrada.');
    };
    if (!retrospective) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "No hay retrospectiva activa."
    }, void 0, false, {
        fileName: "[project]/src/app/retrospective-session/page.tsx",
        lineNumber: 219,
        columnNumber: 30
    }, this);
    if (!isAuthorized) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "No tienes permiso para ver esta retrospectiva."
    }, void 0, false, {
        fileName: "[project]/src/app/retrospective-session/page.tsx",
        lineNumber: 220,
        columnNumber: 29
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
                lineNumber: 224,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: retrospective.description
            }, void 0, false, {
                fileName: "[project]/src/app/retrospective-session/page.tsx",
                lineNumber: 225,
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
                        lineNumber: 228,
                        columnNumber: 16
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/retrospective-session/page.tsx",
                lineNumber: 227,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                fileName: "[project]/src/app/retrospective-session/page.tsx",
                lineNumber: 232,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: "Agregar Acción"
            }, void 0, false, {
                fileName: "[project]/src/app/retrospective-session/page.tsx",
                lineNumber: 233,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleAddAction,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Escribe tu acción",
                        value: actionText,
                        onChange: (e)=>setActionText(e.target.value),
                        disabled: retrospective.closed
                    }, void 0, false, {
                        fileName: "[project]/src/app/retrospective-session/page.tsx",
                        lineNumber: 235,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: retrospective.closed,
                        children: "Agregar Acción"
                    }, void 0, false, {
                        fileName: "[project]/src/app/retrospective-session/page.tsx",
                        lineNumber: 242,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/retrospective-session/page.tsx",
                lineNumber: 234,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                fileName: "[project]/src/app/retrospective-session/page.tsx",
                lineNumber: 247,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: "Acciones Agregadas"
            }, void 0, false, {
                fileName: "[project]/src/app/retrospective-session/page.tsx",
                lineNumber: 248,
                columnNumber: 7
            }, this),
            retrospective.actions?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
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
                                lineNumber: 253,
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
                                        lineNumber: 259,
                                        columnNumber: 17
                                    }, this),
                                    ": ",
                                    action.text
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/retrospective-session/page.tsx",
                                lineNumber: 258,
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
                                        lineNumber: 263,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/retrospective-session/page.tsx",
                                lineNumber: 261,
                                columnNumber: 15
                            }, this)
                        ]
                    }, action.id, true, {
                        fileName: "[project]/src/app/retrospective-session/page.tsx",
                        lineNumber: 252,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/retrospective-session/page.tsx",
                lineNumber: 250,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "No se han agregado acciones aún."
            }, void 0, false, {
                fileName: "[project]/src/app/retrospective-session/page.tsx",
                lineNumber: 275,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                fileName: "[project]/src/app/retrospective-session/page.tsx",
                lineNumber: 278,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: toggleQuestions,
                children: showQuestions ? 'Ocultar Preguntas' : 'Ver Preguntas'
            }, void 0, false, {
                fileName: "[project]/src/app/retrospective-session/page.tsx",
                lineNumber: 279,
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
                        lineNumber: 284,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        children: (questionsMapping[retrospective.fsh] || []).map((q, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: q
                            }, i, false, {
                                fileName: "[project]/src/app/retrospective-session/page.tsx",
                                lineNumber: 287,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/retrospective-session/page.tsx",
                        lineNumber: 285,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/retrospective-session/page.tsx",
                lineNumber: 283,
                columnNumber: 9
            }, this),
            currentUser?.email === retrospective?.createdBy && !retrospective?.closed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleCloseRetrospective,
                children: "Cerrar Retrospectiva"
            }, void 0, false, {
                fileName: "[project]/src/app/retrospective-session/page.tsx",
                lineNumber: 294,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/retrospective-session/page.tsx",
        lineNumber: 223,
        columnNumber: 5
    }, this);
}
_s(RetrospectiveSessionPage, "GJ45TDUmE56F6l4+BedY0Vme0oU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = RetrospectiveSessionPage;
var _c;
__turbopack_context__.k.register(_c, "RetrospectiveSessionPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=_d50534f5._.js.map