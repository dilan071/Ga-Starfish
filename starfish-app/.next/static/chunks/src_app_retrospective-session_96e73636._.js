(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_retrospective-session_96e73636._.js", {

"[project]/src/app/retrospective-session/Retrospective-Session.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "actionBtn": "Retrospective-Session-module__vzd9Ba__actionBtn",
  "addPlanBtn": "Retrospective-Session-module__vzd9Ba__addPlanBtn",
  "buttonGroup": "Retrospective-Session-module__vzd9Ba__buttonGroup",
  "container": "Retrospective-Session-module__vzd9Ba__container",
  "enterBtn": "Retrospective-Session-module__vzd9Ba__enterBtn",
  "header": "Retrospective-Session-module__vzd9Ba__header",
  "hide": "Retrospective-Session-module__vzd9Ba__hide",
  "infoGroup": "Retrospective-Session-module__vzd9Ba__infoGroup",
  "logoContainer": "Retrospective-Session-module__vzd9Ba__logoContainer",
  "logoImage": "Retrospective-Session-module__vzd9Ba__logoImage",
  "menuButton": "Retrospective-Session-module__vzd9Ba__menuButton",
  "menuWrapper": "Retrospective-Session-module__vzd9Ba__menuWrapper",
  "pageTitle": "Retrospective-Session-module__vzd9Ba__pageTitle",
  "planForm": "Retrospective-Session-module__vzd9Ba__planForm",
  "planList": "Retrospective-Session-module__vzd9Ba__planList",
  "planSection": "Retrospective-Session-module__vzd9Ba__planSection",
  "planTable": "Retrospective-Session-module__vzd9Ba__planTable",
  "projectName": "Retrospective-Session-module__vzd9Ba__projectName",
  "questionToggleBtn": "Retrospective-Session-module__vzd9Ba__questionToggleBtn",
  "questionsList": "Retrospective-Session-module__vzd9Ba__questionsList",
  "sessionSection": "Retrospective-Session-module__vzd9Ba__sessionSection",
});
}}),
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$SidebarToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/SidebarToggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$retrospective$2d$session$2f$Retrospective$2d$Session$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/retrospective-session/Retrospective-Session.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sweetalert2/dist/sweetalert2.all.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function RetrospectiveSessionPage() {
    _s();
    const [retrospective, setRetrospective] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentUser, setCurrentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isAuthorized, setIsAuthorized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showQuestions, setShowQuestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [planActions, setPlanActions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [assignedMembers, setAssignedMembers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [responsible, setResponsible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [planAction, setPlanAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [estimatedTime, setEstimatedTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [timeUnit, setTimeUnit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Horas');
    const [hasVoted, setHasVoted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [actionText, setActionText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const retrospectiveId = searchParams.get('id');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RetrospectiveSessionPage.useEffect": ()=>{
            const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
            setCurrentUser(user);
            const retros = JSON.parse(localStorage.getItem('retrospectives') || '[]');
            const retro = retros.find({
                "RetrospectiveSessionPage.useEffect.retro": (r)=>r.id === retrospectiveId
            }["RetrospectiveSessionPage.useEffect.retro"]);
            if (retro && user && retro.assignedGroup === user.assignedGroup) {
                setRetrospective(retro);
                setIsAuthorized(true);
                setPlanActions(retro.planActions || []);
                const users = JSON.parse(localStorage.getItem('users') || '[]');
                setAssignedMembers(users.filter({
                    "RetrospectiveSessionPage.useEffect": (u)=>u.assignedGroup === retro.assignedGroup
                }["RetrospectiveSessionPage.useEffect"]).map({
                    "RetrospectiveSessionPage.useEffect": (u)=>u.email
                }["RetrospectiveSessionPage.useEffect"]));
                // cargar acciones y votos existentes
                if (retro.votes && retro.votes[user.email]) setHasVoted(true);
            }
        }
    }["RetrospectiveSessionPage.useEffect"], [
        retrospectiveId
    ]);
    const handleAddPlanAction = ()=>{
        if (!responsible || !planAction.trim() || !estimatedTime.trim()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
                text: 'Completa todos los campos.',
                icon: 'error',
                confirmButtonColor: '#ef4444'
            });
            return;
        }
        const newPlan = {
            id: Date.now().toString(),
            responsible,
            action: planAction.trim(),
            estimatedTime: Number(estimatedTime),
            timeUnit
        };
        const updated = [
            ...planActions,
            newPlan
        ];
        setPlanActions(updated);
        // persistir
        const updatedRetro = {
            ...retrospective,
            planActions: updated
        };
        const all = JSON.parse(localStorage.getItem('retrospectives') || '[]');
        localStorage.setItem('retrospectives', JSON.stringify(all.map((r)=>r.id === retrospectiveId ? updatedRetro : r)));
        setRetrospective(updatedRetro);
        setResponsible('');
        setPlanAction('');
        setEstimatedTime('');
        setTimeUnit('Horas');
    };
    const handleCloseRetrospective = ()=>{
        if (!currentUser) return;
        if (currentUser.email !== retrospective.createdBy) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
                text: "No tienes permiso para cerrar esta retrospectiva.",
                icon: "error",
                confirmButtonColor: "#ef4444"
            });
            return;
        }
        const updatedRetro = {
            ...retrospective,
            closed: true
        };
        const all = JSON.parse(localStorage.getItem("retrospectives") || "[]");
        localStorage.setItem("retrospectives", JSON.stringify(all.map((r)=>r.id === retrospectiveId ? updatedRetro : r)));
        setRetrospective(updatedRetro);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
            text: "Retrospectiva cerrada exitosamente.",
            icon: "success",
            confirmButtonColor: "#ef4444"
        });
    };
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
    const toggleQuestions = ()=>setShowQuestions(!showQuestions);
    if (!retrospective) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "No hay retrospectiva activa."
    }, void 0, false, {
        fileName: "[project]/src/app/retrospective-session/page.tsx",
        lineNumber: 153,
        columnNumber: 30
    }, this);
    if (!isAuthorized) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "No tienes permiso."
    }, void 0, false, {
        fileName: "[project]/src/app/retrospective-session/page.tsx",
        lineNumber: 154,
        columnNumber: 29
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$retrospective$2d$session$2f$Retrospective$2d$Session$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$retrospective$2d$session$2f$Retrospective$2d$Session$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$retrospective$2d$session$2f$Retrospective$2d$Session$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoContainer,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/img/starfish.png",
                                alt: "Ga-Starfish Logo",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$retrospective$2d$session$2f$Retrospective$2d$Session$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoImage
                            }, void 0, false, {
                                fileName: "[project]/src/app/retrospective-session/page.tsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$retrospective$2d$session$2f$Retrospective$2d$Session$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projectName,
                                children: "Ga-Starfish"
                            }, void 0, false, {
                                fileName: "[project]/src/app/retrospective-session/page.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/retrospective-session/page.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$retrospective$2d$session$2f$Retrospective$2d$Session$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageTitle,
                        children: "Retrospectiva"
                    }, void 0, false, {
                        fileName: "[project]/src/app/retrospective-session/page.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$retrospective$2d$session$2f$Retrospective$2d$Session$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menuWrapper,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$SidebarToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: " "
                        }, void 0, false, {
                            fileName: "[project]/src/app/retrospective-session/page.tsx",
                            lineNumber: 173,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/retrospective-session/page.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/retrospective-session/page.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$retrospective$2d$session$2f$Retrospective$2d$Session$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sessionSection,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$retrospective$2d$session$2f$Retrospective$2d$Session$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].infoGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Retrospectiva:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/retrospective-session/page.tsx",
                                        lineNumber: 181,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    retrospective.title
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/retrospective-session/page.tsx",
                                lineNumber: 180,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Descripción:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/retrospective-session/page.tsx",
                                        lineNumber: 184,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    retrospective.description
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/retrospective-session/page.tsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Grupo:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/retrospective-session/page.tsx",
                                        lineNumber: 187,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    retrospective.assignedGroup
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/retrospective-session/page.tsx",
                                lineNumber: 186,
                                columnNumber: 11
                            }, this),
                            retrospective.fsh && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "FSH:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/retrospective-session/page.tsx",
                                        lineNumber: 191,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    retrospective.fsh
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/retrospective-session/page.tsx",
                                lineNumber: 190,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Estado:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/retrospective-session/page.tsx",
                                        lineNumber: 195,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    retrospective.closed ? 'Cerrada' : 'Abierta'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/retrospective-session/page.tsx",
                                lineNumber: 194,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/retrospective-session/page.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this),
                    currentUser.email === retrospective.createdBy && !retrospective.closed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleCloseRetrospective,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$retrospective$2d$session$2f$Retrospective$2d$Session$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].enterBtn,
                        children: "Cerrar Retrospectiva"
                    }, void 0, false, {
                        fileName: "[project]/src/app/retrospective-session/page.tsx",
                        lineNumber: 201,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$retrospective$2d$session$2f$Retrospective$2d$Session$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].infoGroup,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "Técnica Starfish:"
                        }, void 0, false, {
                            fileName: "[project]/src/app/retrospective-session/page.tsx",
                            lineNumber: 210,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/retrospective-session/page.tsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$retrospective$2d$session$2f$Retrospective$2d$Session$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttonGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/more-of/${retrospective.id}`,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$retrospective$2d$session$2f$Retrospective$2d$Session$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionBtn,
                                children: "Hacer más"
                            }, void 0, false, {
                                fileName: "[project]/src/app/retrospective-session/page.tsx",
                                lineNumber: 216,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/less-of/${retrospective.id}`,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$retrospective$2d$session$2f$Retrospective$2d$Session$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionBtn,
                                children: "Hacer menos"
                            }, void 0, false, {
                                fileName: "[project]/src/app/retrospective-session/page.tsx",
                                lineNumber: 222,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/keep-doing/${retrospective.id}`,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$retrospective$2d$session$2f$Retrospective$2d$Session$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionBtn,
                                children: "Continuar haciendo"
                            }, void 0, false, {
                                fileName: "[project]/src/app/retrospective-session/page.tsx",
                                lineNumber: 228,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/stop-doing/${retrospective.id}`,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$retrospective$2d$session$2f$Retrospective$2d$Session$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionBtn,
                                children: "Dejar de hacer"
                            }, void 0, false, {
                                fileName: "[project]/src/app/retrospective-session/page.tsx",
                                lineNumber: 234,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/start-doing/${retrospective.id}`,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$retrospective$2d$session$2f$Retrospective$2d$Session$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionBtn,
                                children: "Comenzar a hacer"
                            }, void 0, false, {
                                fileName: "[project]/src/app/retrospective-session/page.tsx",
                                lineNumber: 240,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/retrospective-session/page.tsx",
                        lineNumber: 215,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$retrospective$2d$session$2f$Retrospective$2d$Session$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].planSection,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "Plan de Acción:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/retrospective-session/page.tsx",
                                lineNumber: 251,
                                columnNumber: 11
                            }, this),
                            currentUser.email === retrospective.createdBy && !retrospective.closed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$retrospective$2d$session$2f$Retrospective$2d$Session$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].planForm,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: responsible,
                                        onChange: (e)=>setResponsible(e.target.value),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "Responsable"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/retrospective-session/page.tsx",
                                                lineNumber: 255,
                                                columnNumber: 17
                                            }, this),
                                            assignedMembers.map((em)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: em,
                                                    children: em
                                                }, em, false, {
                                                    fileName: "[project]/src/app/retrospective-session/page.tsx",
                                                    lineNumber: 257,
                                                    columnNumber: 19
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/retrospective-session/page.tsx",
                                        lineNumber: 254,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Acción",
                                        value: planAction,
                                        onChange: (e)=>setPlanAction(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/retrospective-session/page.tsx",
                                        lineNumber: 260,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        placeholder: "Tiempo estimado",
                                        min: "1",
                                        value: estimatedTime,
                                        onChange: (e)=>setEstimatedTime(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/retrospective-session/page.tsx",
                                        lineNumber: 266,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: timeUnit,
                                        onChange: (e)=>setTimeUnit(e.target.value),
                                        children: [
                                            'Minutos',
                                            'Horas',
                                            'Días',
                                            'Semanas'
                                        ].map((u)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: u,
                                                children: u
                                            }, u, false, {
                                                fileName: "[project]/src/app/retrospective-session/page.tsx",
                                                lineNumber: 275,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/retrospective-session/page.tsx",
                                        lineNumber: 273,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleAddPlanAction,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$retrospective$2d$session$2f$Retrospective$2d$Session$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].enterBtn,
                                        children: "Agregar Acción"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/retrospective-session/page.tsx",
                                        lineNumber: 278,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/retrospective-session/page.tsx",
                                lineNumber: 253,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$retrospective$2d$session$2f$Retrospective$2d$Session$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].planTable,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Responsable"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/retrospective-session/page.tsx",
                                                    lineNumber: 286,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Acción"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/retrospective-session/page.tsx",
                                                    lineNumber: 287,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Estimado"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/retrospective-session/page.tsx",
                                                    lineNumber: 288,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/retrospective-session/page.tsx",
                                            lineNumber: 285,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/retrospective-session/page.tsx",
                                        lineNumber: 284,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: planActions.map((pa)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: pa.responsible
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/retrospective-session/page.tsx",
                                                        lineNumber: 294,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: pa.action
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/retrospective-session/page.tsx",
                                                        lineNumber: 295,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: [
                                                            pa.estimatedTime,
                                                            " ",
                                                            pa.timeUnit
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/retrospective-session/page.tsx",
                                                        lineNumber: 296,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, pa.id, true, {
                                                fileName: "[project]/src/app/retrospective-session/page.tsx",
                                                lineNumber: 293,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/retrospective-session/page.tsx",
                                        lineNumber: 291,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/retrospective-session/page.tsx",
                                lineNumber: 283,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/retrospective-session/page.tsx",
                        lineNumber: 250,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: toggleQuestions,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$retrospective$2d$session$2f$Retrospective$2d$Session$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].questionToggleBtn,
                        children: showQuestions ? 'Ocultar Preguntas' : 'Ver Preguntas'
                    }, void 0, false, {
                        fileName: "[project]/src/app/retrospective-session/page.tsx",
                        lineNumber: 303,
                        columnNumber: 9
                    }, this),
                    showQuestions && retrospective.fsh && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$retrospective$2d$session$2f$Retrospective$2d$Session$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].questionsList,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: [
                                    "Preguntas para ",
                                    retrospective.fsh,
                                    ":"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/retrospective-session/page.tsx",
                                lineNumber: 309,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                children: questionsMapping[retrospective.fsh]?.map((q, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: q
                                    }, idx, false, {
                                        fileName: "[project]/src/app/retrospective-session/page.tsx",
                                        lineNumber: 312,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/retrospective-session/page.tsx",
                                lineNumber: 310,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/retrospective-session/page.tsx",
                        lineNumber: 308,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/retrospective-session/page.tsx",
                lineNumber: 178,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/retrospective-session/page.tsx",
        lineNumber: 159,
        columnNumber: 5
    }, this);
}
_s(RetrospectiveSessionPage, "A5TLgKG3HTCvM4D56mTPsEyfhFg=", false, function() {
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
}]);

//# sourceMappingURL=src_app_retrospective-session_96e73636._.js.map