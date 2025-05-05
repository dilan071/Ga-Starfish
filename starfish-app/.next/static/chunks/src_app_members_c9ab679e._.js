(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_members_c9ab679e._.js", {

"[project]/src/app/members/Members.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "actions": "Members-module__j-EtRa__actions",
  "button": "Members-module__j-EtRa__button",
  "container": "Members-module__j-EtRa__container",
  "deleteBtn": "Members-module__j-EtRa__deleteBtn",
  "groupCreator": "Members-module__j-EtRa__groupCreator",
  "header": "Members-module__j-EtRa__header",
  "input": "Members-module__j-EtRa__input",
  "logoContainer": "Members-module__j-EtRa__logoContainer",
  "logoImage": "Members-module__j-EtRa__logoImage",
  "menuButton": "Members-module__j-EtRa__menuButton",
  "menuWrapper": "Members-module__j-EtRa__menuWrapper",
  "pageTitle": "Members-module__j-EtRa__pageTitle",
  "projectName": "Members-module__j-EtRa__projectName",
  "select": "Members-module__j-EtRa__select",
  "selectBtn": "Members-module__j-EtRa__selectBtn",
  "selectedTable": "Members-module__j-EtRa__selectedTable",
  "selectedUsers": "Members-module__j-EtRa__selectedUsers",
  "userCard": "Members-module__j-EtRa__userCard",
  "userInfo": "Members-module__j-EtRa__userInfo",
  "userListContainer": "Members-module__j-EtRa__userListContainer",
  "usersList": "Members-module__j-EtRa__usersList",
});
}}),
"[project]/src/app/members/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MembersPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$members$2f$Members$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/members/Members.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$SidebarToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/SidebarToggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sweetalert2/dist/sweetalert2.all.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function MembersPage() {
    _s();
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [groupName, setGroupName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedUsers, setSelectedUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Carga inicial de usuarios
    const loadUsers = ()=>{
        const raw = localStorage.getItem('users') || '[]';
        const all = JSON.parse(raw);
        setUsers(all.filter((u)=>u.role !== 'admin'));
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MembersPage.useEffect": ()=>{
            loadUsers();
        }
    }["MembersPage.useEffect"], []);
    // Asigna rol en grupo
    const handleAssignGroupRole = (email, newRole)=>{
        const raw = localStorage.getItem('users') || '[]';
        const all = JSON.parse(raw).map((u)=>u.email === email ? {
                ...u,
                groupRole: newRole
            } : u);
        localStorage.setItem('users', JSON.stringify(all));
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
            text: `Rol asignado a ${email}: ${newRole}.`,
            icon: "success",
            confirmButtonColor: '#ef4444',
            iconColor: '#ef4444',
            confirmButtonText: 'Cerrar',
            scrollbarPadding: false
        });
        loadUsers();
    };
    // Agrega o quita usuario de la selección
    const toggleUserSelection = (user)=>{
        setSelectedUsers((prev)=>prev.some((u)=>u.email === user.email) ? prev.filter((u)=>u.email !== user.email) : [
                ...prev,
                user
            ]);
    };
    // Elimina usuario completamente
    const handleDeleteUser = (email)=>{
        if (!confirm(`¿Eliminar usuario ${email} de forma permanente?`)) return;
        const raw = localStorage.getItem('users') || '[]';
        const all = JSON.parse(raw).filter((u)=>u.email !== email);
        localStorage.setItem('users', JSON.stringify(all));
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
            text: `Usuario ${email} eliminado correctamente.`,
            icon: "success",
            confirmButtonColor: '#ef4444',
            iconColor: '#ef4444',
            confirmButtonText: 'Cerrar',
            scrollbarPadding: false
        });
        // También lo quitamos de la selección si estaba
        setSelectedUsers((prev)=>prev.filter((u)=>u.email !== email));
        loadUsers();
    };
    // Crea y asigna un nuevo grupo
    const handleCreateGroup = ()=>{
        if (!groupName.trim()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
                text: `Debes ingresar un nombre para el grupo.`,
                icon: "error",
                confirmButtonColor: '#ef4444',
                iconColor: '#ef4444',
                confirmButtonText: 'Cerrar',
                scrollbarPadding: false
            });
            return;
        }
        const raw = localStorage.getItem('users') || '[]';
        const all = JSON.parse(raw);
        const groupMembers = all.filter((u)=>u.assignedGroup === groupName.trim());
        // Validaciones...
        if (groupMembers.length + selectedUsers.length > 5) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
                text: `El grupo "${groupName}" no puede tener más de 5 integrantes.`,
                icon: "error",
                confirmButtonColor: '#ef4444',
                iconColor: '#ef4444',
                confirmButtonText: 'Cerrar',
                scrollbarPadding: false
            });
            return;
        }
        const currentSM = groupMembers.filter((u)=>u.groupRole === 'scrum-master').length;
        const newSM = selectedUsers.filter((u)=>u.groupRole === 'scrum-master').length;
        if (currentSM + newSM > 1) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
                text: "Sólo se permite un Scrum Master por grupo.",
                icon: "error",
                confirmButtonColor: '#ef4444',
                iconColor: '#ef4444',
                confirmButtonText: 'Cerrar',
                scrollbarPadding: false
            });
            return;
        }
        const updated = all.map((u)=>selectedUsers.some((s)=>s.email === u.email) ? {
                ...u,
                assignedGroup: groupName.trim()
            } : u);
        localStorage.setItem('users', JSON.stringify(updated));
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
            text: `Grupo "${groupName}" creado y asignado.`,
            icon: "success",
            confirmButtonColor: '#ef4444',
            iconColor: '#ef4444',
            confirmButtonText: 'Cerrar',
            scrollbarPadding: false
        });
        setGroupName('');
        setSelectedUsers([]);
        loadUsers();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$members$2f$Members$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$members$2f$Members$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$members$2f$Members$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoContainer,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/img/starfish.png",
                                alt: "Ga-Starfish Logo",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$members$2f$Members$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoImage
                            }, void 0, false, {
                                fileName: "[project]/src/app/members/page.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$members$2f$Members$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projectName,
                                children: "Ga-Starfish"
                            }, void 0, false, {
                                fileName: "[project]/src/app/members/page.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/members/page.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$members$2f$Members$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageTitle,
                        children: "Panel de Administración"
                    }, void 0, false, {
                        fileName: "[project]/src/app/members/page.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$members$2f$Members$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menuWrapper,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$SidebarToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: "­"
                        }, void 0, false, {
                            fileName: "[project]/src/app/members/page.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/members/page.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/members/page.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$members$2f$Members$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].usersList,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Usuarios Registrados"
                    }, void 0, false, {
                        fileName: "[project]/src/app/members/page.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    users.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "No hay usuarios registrados."
                        }, void 0, false, {
                            fileName: "[project]/src/app/members/page.tsx",
                            lineNumber: 155,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/members/page.tsx",
                        lineNumber: 155,
                        columnNumber: 11
                    }, this) : users.map((u)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$members$2f$Members$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userCard,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$members$2f$Members$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userInfo,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: u.email
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/members/page.tsx",
                                            lineNumber: 160,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Rol:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/members/page.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 21
                                                }, this),
                                                " ",
                                                u.groupRole || 'N/A'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/members/page.tsx",
                                            lineNumber: 161,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Grupo:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/members/page.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 21
                                                }, this),
                                                " ",
                                                u.assignedGroup || 'N/A'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/members/page.tsx",
                                            lineNumber: 162,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/members/page.tsx",
                                    lineNumber: 159,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$members$2f$Members$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actions,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: "Asignar rol:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/members/page.tsx",
                                            lineNumber: 165,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: u.groupRole || '',
                                            onChange: (e)=>handleAssignGroupRole(u.email, e.target.value),
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$members$2f$Members$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].select,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Ninguno"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/members/page.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Desarrollador",
                                                    children: "Desarrollador"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/members/page.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Scrum Master",
                                                    children: "Scrum Master"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/members/page.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/members/page.tsx",
                                            lineNumber: 166,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$members$2f$Members$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selectBtn,
                                            onClick: ()=>toggleUserSelection(u),
                                            children: selectedUsers.some((s)=>s.email === u.email) ? 'Quitar' : 'Agregar'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/members/page.tsx",
                                            lineNumber: 175,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$members$2f$Members$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].deleteBtn,
                                            onClick: ()=>handleDeleteUser(u.email),
                                            children: "Eliminar"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/members/page.tsx",
                                            lineNumber: 181,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/members/page.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, u.email, true, {
                            fileName: "[project]/src/app/members/page.tsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/members/page.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$members$2f$Members$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].groupCreator,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Crear Grupo"
                    }, void 0, false, {
                        fileName: "[project]/src/app/members/page.tsx",
                        lineNumber: 192,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$members$2f$Members$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                        type: "text",
                        placeholder: "Nombre del grupo",
                        value: groupName,
                        onChange: (e)=>setGroupName(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/src/app/members/page.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$members$2f$Members$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button,
                        onClick: handleCreateGroup,
                        children: "Crear y Asignar"
                    }, void 0, false, {
                        fileName: "[project]/src/app/members/page.tsx",
                        lineNumber: 200,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$members$2f$Members$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selectedUsers,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "Usuarios seleccionados:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/members/page.tsx",
                                lineNumber: 204,
                                columnNumber: 11
                            }, this),
                            selectedUsers.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$members$2f$Members$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selectedTable,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Usuario"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/members/page.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Rol"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/members/page.tsx",
                                                    lineNumber: 210,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/members/page.tsx",
                                            lineNumber: 208,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/members/page.tsx",
                                        lineNumber: 207,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: selectedUsers.map((u)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: u.email
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/members/page.tsx",
                                                        lineNumber: 216,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: u.groupRole || 'Sin rol'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/members/page.tsx",
                                                        lineNumber: 217,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, u.email, true, {
                                                fileName: "[project]/src/app/members/page.tsx",
                                                lineNumber: 215,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/members/page.tsx",
                                        lineNumber: 213,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/members/page.tsx",
                                lineNumber: 206,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Ninguno"
                            }, void 0, false, {
                                fileName: "[project]/src/app/members/page.tsx",
                                lineNumber: 223,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/members/page.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/members/page.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/members/page.tsx",
        lineNumber: 138,
        columnNumber: 5
    }, this);
}
_s(MembersPage, "ogHeQ+ghvlNUukR1jgHdpHStMEk=");
_c = MembersPage;
var _c;
__turbopack_context__.k.register(_c, "MembersPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_members_c9ab679e._.js.map