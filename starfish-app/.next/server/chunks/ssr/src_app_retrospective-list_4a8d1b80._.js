module.exports = {

"[project]/src/app/retrospective-list/Retrospective-List.module.css [app-ssr] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "closeBtn": "Retrospective-List-module__BF2Exq__closeBtn",
  "container": "Retrospective-List-module__BF2Exq__container",
  "enterBtn": "Retrospective-List-module__BF2Exq__enterBtn",
  "header": "Retrospective-List-module__BF2Exq__header",
  "listSection": "Retrospective-List-module__BF2Exq__listSection",
  "logoContainer": "Retrospective-List-module__BF2Exq__logoContainer",
  "logoImage": "Retrospective-List-module__BF2Exq__logoImage",
  "menuButton": "Retrospective-List-module__BF2Exq__menuButton",
  "menuWrapper": "Retrospective-List-module__BF2Exq__menuWrapper",
  "pageTitle": "Retrospective-List-module__BF2Exq__pageTitle",
  "projectName": "Retrospective-List-module__BF2Exq__projectName",
  "retroCard": "Retrospective-List-module__BF2Exq__retroCard",
  "retroInfo": "Retrospective-List-module__BF2Exq__retroInfo",
});
}}),
"[project]/src/app/retrospective-list/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// RetrospectiveListPage.tsx
__turbopack_context__.s({
    "default": (()=>RetrospectiveListPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$SidebarToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/SidebarToggle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$retrospective$2d$list$2f$Retrospective$2d$List$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/retrospective-list/Retrospective-List.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sweetalert2/dist/sweetalert2.esm.all.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function RetrospectiveListPage() {
    const [retrospectives, setRetrospectives] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentUser, setCurrentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const stored = localStorage.getItem('retrospectives');
        const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
        if (user) setCurrentUser(user);
        if (stored && user && user.assignedGroup) {
            const all = JSON.parse(stored);
            const filtered = all.filter((r)=>r.assignedGroup?.trim() === user.assignedGroup?.trim()).sort((a, b)=>new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
            setRetrospectives(filtered);
        }
    }, []);
    const handleClose = (retroId)=>{
        if (!currentUser) return;
        const retro = retrospectives.find((r)=>r.id === retroId);
        if (!retro) return;
        if (currentUser.email !== retro.createdBy) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fire({
                text: "No tienes permiso para cerrar ésta retrospectiva.",
                icon: "error",
                confirmButtonColor: '#ef4444',
                iconColor: '#ef4444',
                confirmButtonText: 'Cerrar',
                scrollbarPadding: false
            });
            ;
            return;
        }
        const updated = {
            ...retro,
            closed: true
        };
        const stored = JSON.parse(localStorage.getItem('retrospectives') || '[]');
        const updatedAll = stored.map((r)=>r.id === retroId ? updated : r);
        localStorage.setItem('retrospectives', JSON.stringify(updatedAll));
        setRetrospectives((prev)=>prev.map((r)=>r.id === retroId ? updated : r));
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fire({
            text: "Retrospectiva cerrada exitosamente.",
            icon: "success",
            confirmButtonColor: '#ef4444',
            iconColor: '#ef4444',
            confirmButtonText: 'Cerrar',
            scrollbarPadding: false
        });
        ;
    };
    if (!currentUser) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Cargando información..."
    }, void 0, false, {
        fileName: "[project]/src/app/retrospective-list/page.tsx",
        lineNumber: 57,
        columnNumber: 28
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$retrospective$2d$list$2f$Retrospective$2d$List$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$retrospective$2d$list$2f$Retrospective$2d$List$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$retrospective$2d$list$2f$Retrospective$2d$List$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoContainer,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/img/starfish.png",
                                alt: "Ga-Starfish Logo",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$retrospective$2d$list$2f$Retrospective$2d$List$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoImage
                            }, void 0, false, {
                                fileName: "[project]/src/app/retrospective-list/page.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$retrospective$2d$list$2f$Retrospective$2d$List$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].projectName,
                                children: "Ga-Starfish"
                            }, void 0, false, {
                                fileName: "[project]/src/app/retrospective-list/page.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/retrospective-list/page.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$retrospective$2d$list$2f$Retrospective$2d$List$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pageTitle,
                        children: "Retrospectivas de tu grupo"
                    }, void 0, false, {
                        fileName: "[project]/src/app/retrospective-list/page.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$retrospective$2d$list$2f$Retrospective$2d$List$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].menuWrapper,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$SidebarToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            children: " "
                        }, void 0, false, {
                            fileName: "[project]/src/app/retrospective-list/page.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/retrospective-list/page.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/retrospective-list/page.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$retrospective$2d$list$2f$Retrospective$2d$List$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].listSection,
                children: retrospectives.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "No hay retrospectivas registradas para tu grupo."
                }, void 0, false, {
                    fileName: "[project]/src/app/retrospective-list/page.tsx",
                    lineNumber: 74,
                    columnNumber: 11
                }, this) : retrospectives.map((retro)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$retrospective$2d$list$2f$Retrospective$2d$List$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].retroCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$retrospective$2d$list$2f$Retrospective$2d$List$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].retroInfo,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        children: retro.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/retrospective-list/page.tsx",
                                        lineNumber: 79,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: retro.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/retrospective-list/page.tsx",
                                        lineNumber: 80,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "FSH:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/retrospective-list/page.tsx",
                                                lineNumber: 81,
                                                columnNumber: 23
                                            }, this),
                                            " ",
                                            retro.fsh
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/retrospective-list/page.tsx",
                                        lineNumber: 81,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Estado:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/retrospective-list/page.tsx",
                                                lineNumber: 83,
                                                columnNumber: 19
                                            }, this),
                                            " ",
                                            retro.closed ? 'Cerrada' : 'Abierta'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/retrospective-list/page.tsx",
                                        lineNumber: 82,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/retrospective-list/page.tsx",
                                lineNumber: 78,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$retrospective$2d$list$2f$Retrospective$2d$List$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].enterBtn,
                                onClick: ()=>router.push(`/retrospective-session?id=${retro.id}`),
                                children: "Ingresar a la retrospectiva"
                            }, void 0, false, {
                                fileName: "[project]/src/app/retrospective-list/page.tsx",
                                lineNumber: 86,
                                columnNumber: 15
                            }, this),
                            !retro.closed && currentUser.email === retro.createdBy && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$retrospective$2d$list$2f$Retrospective$2d$List$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].closeBtn,
                                onClick: ()=>handleClose(retro.id),
                                children: "Cerrar retrospectiva"
                            }, void 0, false, {
                                fileName: "[project]/src/app/retrospective-list/page.tsx",
                                lineNumber: 93,
                                columnNumber: 17
                            }, this)
                        ]
                    }, retro.id, true, {
                        fileName: "[project]/src/app/retrospective-list/page.tsx",
                        lineNumber: 77,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/retrospective-list/page.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/retrospective-list/page.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=src_app_retrospective-list_4a8d1b80._.js.map