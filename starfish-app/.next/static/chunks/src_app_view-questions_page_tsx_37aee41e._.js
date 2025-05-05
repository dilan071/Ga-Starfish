(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_view-questions_page_tsx_37aee41e._.js", {

"[project]/src/app/view-questions/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// src/app/view-questions/page.tsx
__turbopack_context__.s({
    "default": (()=>ViewQuestions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function ViewQuestions() {
    _s();
    const [selectedFSH, setSelectedFSH] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [questions, setQuestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ViewQuestions.useEffect": ()=>{
            const fsh = localStorage.getItem('selectedFSH');
            if (fsh) {
                setSelectedFSH(fsh);
                if (fsh === 'Comunicación') {
                    setQuestions([
                        "¿En qué momentos del sprint la comunicación fue efectiva y cómo podemos replicarla en el futuro?",
                        "¿Hubo situaciones donde la falta de claridad en la comunicación generó malentendidos? ¿Cómo podríamos evitarlo?"
                    ]);
                } else if (fsh === 'Compromiso') {
                    setQuestions([
                        "¿Cómo percibimos el nivel de compromiso individual y colectivo durante el sprint? ¿Qué factores lo influyeron?",
                        "¿Qué acciones concretas podríamos tomar para fortalecer el compromiso en los próximos sprints?"
                    ]);
                } else if (fsh === 'Colaboración') {
                    setQuestions([
                        "¿En qué tareas o situaciones la colaboración entre el equipo fue clave para el éxito?",
                        "¿Identificamos oportunidades donde una mayor colaboración hubiera acelerado o mejorado los resultados?"
                    ]);
                } else if (fsh === 'Motivación') {
                    setQuestions([
                        "¿Qué aspectos del sprint aumentaron o disminuyeron la motivación del equipo? ¿Cómo podemos potenciarlos?",
                        "¿Cómo podemos asegurar que las responsabilidades asignadas estén alineadas con los intereses y motivaciones individuales?"
                    ]);
                } else if (fsh === 'Satisfacción laboral') {
                    setQuestions([
                        "¿Qué elementos del trabajo durante el sprint contribuyeron a su satisfacción personal?",
                        "¿Qué cambios en la dinámica del equipo o en las tareas mejorarían la satisfacción general?"
                    ]);
                } else if (fsh === 'Inteligencia emocional') {
                    setQuestions([
                        "¿Cómo manejamos los conflictos o situaciones de estrés durante el sprint? ¿Qué habilidades emocionales podríamos reforzar?",
                        "¿De qué manera podemos fomentar un ambiente donde se priorice la empatía y el respeto mutuo?"
                    ]);
                } else if (fsh === 'Cohesión de equipo') {
                    setQuestions([
                        "¿Qué actividades o dinámicas durante el sprint fortalecieron la unión y confianza entre los miembros del equipo? ¿Cómo podemos replicarlas?",
                        "¿Hubo momentos en los que percibimos falta de alineación o desconexión en el equipo? ¿Qué acciones podrían ayudarnos a mejorar esto en futuros sprints?"
                    ]);
                } else if (fsh === 'Empatía y relaciones interpersonales') {
                    setQuestions([
                        "¿En qué situaciones durante el sprint percibimos que la empatía facilitó la resolución de conflictos o mejoró la dinámica del equipo? ¿Cómo podemos promover más estos comportamientos?",
                        "¿Hubo momentos en los que las diferencias interpersonales afectaron la colaboración? ¿Qué estrategias podríamos implementar para fortalecer las relaciones y la comprensión mutua?"
                    ]);
                } else if (fsh === 'Liderazgo') {
                    setQuestions([
                        "¿El liderazgo durante el sprint facilitó la toma de decisiones? ¿Qué ajustes sugerirían?",
                        "¿Cómo podemos distribuir roles de liderazgo para aprovechar las fortalezas de cada miembro?"
                    ]);
                } else if (fsh === 'Autonomía') {
                    setQuestions([
                        "¿En qué tareas o decisiones durante el sprint el equipo sintió que tuvo suficiente autonomía para actuar con agilidad? ¿Cómo podemos replicar ese escenario en el futuro?",
                        "¿Hubo momentos en los que la falta de claridad en los límites de autonomía generó confusión o retrasos? ¿Qué ajustes podríamos hacer para equilibrar libertad y alineación?"
                    ]);
                } else if (fsh === 'Innovación') {
                    setQuestions([
                        "¿Qué oportunidades identificamos durante el sprint para probar enfoques o herramientas nuevas? ¿Cómo podemos priorizar la experimentación en futuros sprints?",
                        "¿Hubo barreras (culturales, técnicas o de procesos) que limitaron la creatividad o la implementación de ideas innovadoras? ¿Cómo podríamos abordarlas?"
                    ]);
                } else if (fsh === 'Habilidades y experiencia en el proceso de desarrollo de software') {
                    setQuestions([
                        "¿Las habilidades técnicas del equipo fueron suficientes para abordar los desafíos del sprint? ¿En qué áreas necesitamos capacitación?",
                        "¿Cómo podemos compartir conocimientos entre los miembros para fortalecer las habilidades colectivas?"
                    ]);
                } else if (fsh === 'Habilidades y experiencia en la gestión de proyectos de desarrollo de software') {
                    setQuestions([
                        "¿La planificación y seguimiento del sprint aprovecharon la experiencia previa del equipo? ¿Qué lecciones aplicaremos en el futuro?",
                        "¿Identificamos brechas en la gestión de riesgos o recursos que debamos abordar con mayor experiencia?"
                    ]);
                } else {
                    setQuestions([
                        "Pregunta 1 para FSH3",
                        "Pregunta 2 para FSH3"
                    ]);
                }
            }
        }
    }["ViewQuestions.useEffect"], []);
    if (!selectedFSH) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "No se ha seleccionado ningún FSH"
        }, void 0, false, {
            fileName: "[project]/src/app/view-questions/page.tsx",
            lineNumber: 88,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "Preguntas:"
            }, void 0, false, {
                fileName: "[project]/src/app/view-questions/page.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                children: questions.map((q, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: q
                    }, idx, false, {
                        fileName: "[project]/src/app/view-questions/page.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/view-questions/page.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/view-questions/page.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_s(ViewQuestions, "DAeatWjKJmGWui8cy8zxF67rSik=");
_c = ViewQuestions;
var _c;
__turbopack_context__.k.register(_c, "ViewQuestions");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_view-questions_page_tsx_37aee41e._.js.map