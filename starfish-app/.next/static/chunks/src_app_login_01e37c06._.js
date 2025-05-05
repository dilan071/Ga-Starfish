(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_login_01e37c06._.js", {

"[project]/src/app/login/Login.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "btnLogin": "Login-module__noQWca__btnLogin",
  "forgotLink": "Login-module__noQWca__forgotLink",
  "inputField": "Login-module__noQWca__inputField",
  "loginCard": "Login-module__noQWca__loginCard",
  "loginContainer": "Login-module__noQWca__loginContainer",
  "loginTitle": "Login-module__noQWca__loginTitle",
  "logo": "Login-module__noQWca__logo",
  "mainTitle": "Login-module__noQWca__mainTitle",
  "signupLink": "Login-module__noQWca__signupLink",
  "signupText": "Login-module__noQWca__signupText",
});
}}),
"[project]/src/app/login/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>LoginPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$login$2f$Login$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/login/Login.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function LoginPage() {
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleLogin = (e)=>{
        e.preventDefault();
        const trimmedEmail = email.trim().toLowerCase();
        const trimmedPassword = password.trim();
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find((u)=>u.email === trimmedEmail && u.password === trimmedPassword);
        if (!user) {
            alert('Credenciales incorrectas');
            return;
        }
        localStorage.setItem('currentUser', JSON.stringify(user));
        localStorage.setItem('isLoggedIn', 'true');
        if (user.role === 'admin') {
            router.push('/members');
        } else {
            if (!user.assignedGroup) {
                router.push('/invitation');
            } else {
                router.push('/dashboard');
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$login$2f$Login$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loginContainer,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$login$2f$Login$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loginCard,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/img/starfish.png",
                    alt: "Starfish Logo",
                    width: 140,
                    height: 140,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$login$2f$Login$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo
                }, void 0, false, {
                    fileName: "[project]/src/app/login/page.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$login$2f$Login$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mainTitle,
                    children: "Ga‑Starfish"
                }, void 0, false, {
                    fileName: "[project]/src/app/login/page.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$login$2f$Login$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loginTitle,
                    children: "Iniciar sesión"
                }, void 0, false, {
                    fileName: "[project]/src/app/login/page.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$login$2f$Login$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loginForm,
                    onSubmit: handleLogin,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "email",
                            value: email,
                            placeholder: "Correo electrónico",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$login$2f$Login$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputField,
                            onChange: (e)=>setEmail(e.target.value),
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/src/app/login/page.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "password",
                            placeholder: "Contraseña",
                            value: password,
                            onChange: (e)=>setPassword(e.target.value),
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$login$2f$Login$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputField,
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/src/app/login/page.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/recover",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$login$2f$Login$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].forgotLink,
                            children: "¿Olvidaste tu contraseña?"
                        }, void 0, false, {
                            fileName: "[project]/src/app/login/page.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$login$2f$Login$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btnLogin,
                            children: "Iniciar sesión"
                        }, void 0, false, {
                            fileName: "[project]/src/app/login/page.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/login/page.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$login$2f$Login$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].signupText,
                    children: [
                        "¿No tienes una cuenta?",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$login$2f$Login$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].signupLink,
                            onClick: ()=>router.push('/register'),
                            children: "Regístrate"
                        }, void 0, false, {
                            fileName: "[project]/src/app/login/page.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/login/page.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/login/page.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/login/page.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(LoginPage, "lnLPsXulL3oMypKJCpB5abnr2gw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = LoginPage;
var _c;
__turbopack_context__.k.register(_c, "LoginPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_login_01e37c06._.js.map