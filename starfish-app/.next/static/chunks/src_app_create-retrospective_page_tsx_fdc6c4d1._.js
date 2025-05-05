(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_create-retrospective_page_tsx_fdc6c4d1._.js", {

"[project]/src/app/create-retrospective/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CreateRetrospectivePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$SidebarToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/SidebarToggle.tsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './Create-Retrospective.module.css'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sweetalert2/dist/sweetalert2.all.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function CreateRetrospectivePage() {
    _s();
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [fsh, setFsh] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [currentUser, setCurrentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateRetrospectivePage.useEffect": ()=>{
            const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
            if (!user || !user.assignedGroup) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
                    text: "No se pudo determinar el grupo o no has iniciado sesión.",
                    icon: "error",
                    confirmButtonColor: '#ef4444',
                    iconColor: '#ef4444',
                    confirmButtonText: 'Cerrar'
                }).then({
                    "CreateRetrospectivePage.useEffect": ()=>router.push('/login')
                }["CreateRetrospectivePage.useEffect"]);
            } else {
                setCurrentUser(user);
            }
        }
    }["CreateRetrospectivePage.useEffect"], [
        router
    ]);
    const handleCreate = (e)=>{
        e.preventDefault();
        if (!fsh) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
                text: "Debes seleccionar un FSH para finalizar.",
                icon: "error",
                confirmButtonColor: '#ef4444',
                iconColor: '#ef4444',
                confirmButtonText: 'Cerrar',
                scrollbarPadding: false
            });
            return;
        }
        const newRetro = {
            id: Date.now().toString(),
            title,
            description,
            fsh,
            assignedGroup: currentUser.assignedGroup,
            createdBy: currentUser.email,
            createdAt: new Date(),
            actions: [],
            votes: {},
            closed: false
        };
        const stored = localStorage.getItem('retrospectives');
        const retros = stored ? JSON.parse(stored) : [];
        retros.push(newRetro);
        localStorage.setItem('retrospectives', JSON.stringify(retros));
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
            text: "Se ha creado la retrospectiva exitosamente.",
            icon: "success",
            confirmButtonColor: '#ef4444',
            iconColor: '#ef4444',
            confirmButtonText: 'Cerrar'
        }).then(()=>router.push('/retrospective-list'));
    };
    if (!currentUser) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Cargando..."
    }, void 0, false, {
        fileName: "[project]/src/app/create-retrospective/page.tsx",
        lineNumber: 71,
        columnNumber: 28
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: styles.container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: styles.header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: styles.logoContainer,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/img/starfish.png",
                                alt: "Ga-Starfish Logo",
                                className: styles.logoImage
                            }, void 0, false, {
                                fileName: "[project]/src/app/create-retrospective/page.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: styles.projectName,
                                children: "Ga-Starfish"
                            }, void 0, false, {
                                fileName: "[project]/src/app/create-retrospective/page.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/create-retrospective/page.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: styles.pageTitle,
                        children: "Crear Retrospectiva"
                    }, void 0, false, {
                        fileName: "[project]/src/app/create-retrospective/page.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: styles.menuWrapper,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$SidebarToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: " "
                        }, void 0, false, {
                            fileName: "[project]/src/app/create-retrospective/page.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/create-retrospective/page.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/create-retrospective/page.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: styles.menuAside,
                children: [
                    currentUser.groupRole === 'Scrum Master' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: styles.btnCreate,
                        onClick: ()=>router.push('/create-retrospective'),
                        children: "Crear Retrospectiva"
                    }, void 0, false, {
                        fileName: "[project]/src/app/create-retrospective/page.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: styles.btnView,
                        onClick: ()=>router.push('/retrospective-list'),
                        children: "Ingresar a las Retrospectivas"
                    }, void 0, false, {
                        fileName: "[project]/src/app/create-retrospective/page.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    currentUser.groupRole === 'Scrum Master' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: styles.btnCreate,
                        onClick: ()=>router.push('/schedule-retrospectives'),
                        children: "Programar Retrospectiva"
                    }, void 0, false, {
                        fileName: "[project]/src/app/create-retrospective/page.tsx",
                        lineNumber: 99,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: styles.btnCreate,
                        onClick: ()=>router.push('/leaderboard'),
                        children: "Ver Leaderboard"
                    }, void 0, false, {
                        fileName: "[project]/src/app/create-retrospective/page.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: styles.btnCreate,
                        onClick: ()=>router.push('/profile'),
                        children: "Editar Perfil"
                    }, void 0, false, {
                        fileName: "[project]/src/app/create-retrospective/page.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/create-retrospective/page.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: styles.formSection,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleCreate,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: styles.formGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "title",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Título:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/create-retrospective/page.tsx",
                                        lineNumber: 116,
                                        columnNumber: 36
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/create-retrospective/page.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "title",
                                    type: "text",
                                    value: title,
                                    onChange: (e)=>setTitle(e.target.value),
                                    required: true,
                                    className: styles.input
                                }, void 0, false, {
                                    fileName: "[project]/src/app/create-retrospective/page.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/create-retrospective/page.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: styles.formGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "description",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Descripción:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/create-retrospective/page.tsx",
                                        lineNumber: 128,
                                        columnNumber: 42
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/create-retrospective/page.tsx",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    id: "description",
                                    value: description,
                                    onChange: (e)=>setDescription(e.target.value),
                                    required: true,
                                    className: styles.textarea
                                }, void 0, false, {
                                    fileName: "[project]/src/app/create-retrospective/page.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/create-retrospective/page.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: styles.formGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "fsh",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Seleccionar FSH:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/create-retrospective/page.tsx",
                                        lineNumber: 139,
                                        columnNumber: 34
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/create-retrospective/page.tsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    id: "fsh",
                                    value: fsh,
                                    onChange: (e)=>setFsh(e.target.value),
                                    required: true,
                                    className: "select",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "Ninguno"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/create-retrospective/page.tsx",
                                            lineNumber: 147,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Comunicación",
                                            children: "Comunicación"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/create-retrospective/page.tsx",
                                            lineNumber: 148,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Compromiso",
                                            children: "Compromiso"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/create-retrospective/page.tsx",
                                            lineNumber: 149,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Colaboración",
                                            children: "Colaboración"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/create-retrospective/page.tsx",
                                            lineNumber: 150,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Motivación",
                                            children: "Motivación"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/create-retrospective/page.tsx",
                                            lineNumber: 151,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Satisfacción laboral",
                                            children: "Satisfacción laboral"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/create-retrospective/page.tsx",
                                            lineNumber: 152,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Inteligencia emocional",
                                            children: "Inteligencia emocional"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/create-retrospective/page.tsx",
                                            lineNumber: 153,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Cohesión de equipo",
                                            children: "Cohesión de equipo"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/create-retrospective/page.tsx",
                                            lineNumber: 154,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Empatía y relaciones interpersonales",
                                            children: "Empatía y relaciones interpersonales"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/create-retrospective/page.tsx",
                                            lineNumber: 155,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Liderazgo",
                                            children: "Liderazgo"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/create-retrospective/page.tsx",
                                            lineNumber: 156,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Autonomía",
                                            children: "Autonomía"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/create-retrospective/page.tsx",
                                            lineNumber: 157,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Innovación",
                                            children: "Innovación"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/create-retrospective/page.tsx",
                                            lineNumber: 158,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Habilidades y experiencia en el proceso de desarrollo de software",
                                            children: "Habilidades y experiencia en el proceso de desarrollo de software"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/create-retrospective/page.tsx",
                                            lineNumber: 159,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Habilidades y experiencia en la gestión de proyectos de desarrollo de software",
                                            children: "Habilidades y experiencia en la gestión de proyectos de desarrollo de software"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/create-retrospective/page.tsx",
                                            lineNumber: 162,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/create-retrospective/page.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/create-retrospective/page.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: styles.button,
                            children: "Crear Retrospectiva"
                        }, void 0, false, {
                            fileName: "[project]/src/app/create-retrospective/page.tsx",
                            lineNumber: 168,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/create-retrospective/page.tsx",
                    lineNumber: 114,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/create-retrospective/page.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/create-retrospective/page.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_s(CreateRetrospectivePage, "OhOQJ0SMJrgIfxMk3j4kk+lQGlk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = CreateRetrospectivePage;
var _c;
__turbopack_context__.k.register(_c, "CreateRetrospectivePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_create-retrospective_page_tsx_fdc6c4d1._.js.map