var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// css-bundle-update-plugin-ns:/Users/hectorbliss/courses/blog/curso-blog-remix/node_modules/@remix-run/css-bundle/dist/index.js
var require_dist = __commonJS({
  "css-bundle-update-plugin-ns:/Users/hectorbliss/courses/blog/curso-blog-remix/node_modules/@remix-run/css-bundle/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var cssBundleHref2;
    exports.cssBundleHref = cssBundleHref2;
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 48,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 97,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_css_bundle = __toESM(require_dist()), import_react2 = require("@remix-run/react");

// app/styles/style.css
var style_default = "/build/_assets/style-64ID3ADF.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  ...import_css_bundle.cssBundleHref ? [
    { rel: "stylesheet", href: import_css_bundle.cssBundleHref },
    {
      rel: "stylesheet",
      href: style_default
    }
  ] : [
    {
      rel: "stylesheet",
      href: style_default
    }
  ]
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", className: "dark", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

// app/routes/dash_.$postId.edit.tsx
var dash_postId_edit_exports = {};
__export(dash_postId_edit_exports, {
  action: () => action,
  default: () => PostEdit,
  loader: () => loader
});
var import_react3 = require("@remix-run/react"), import_react_hot_toast = require("react-hot-toast"), import_react4 = require("react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), loader = async ({ params }) => null, action = async ({ request, params }) => ({ ok: !0 });
function PostEdit() {
  var _a;
  let fetcher = (0, import_react3.useFetcher)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("article", { className: "dark:bg-slate-800 min-h-screen dark:text-slate-200", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { className: "max-w-5xl mx-auto py-20 px-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex text-red-500", children: ((_a = fetcher.data) == null ? void 0 : _a.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { children: fetcher.data.error.issues.map(
        (err) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: [
          err.path,
          " ",
          err.message
        ] }, err.path, !0, {
          fileName: "app/routes/dash_.$postId.edit.tsx",
          lineNumber: 168,
          columnNumber: 13
        }, this)
      ) }, void 0, !1, {
        fileName: "app/routes/dash_.$postId.edit.tsx",
        lineNumber: 166,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/dash_.$postId.edit.tsx",
        lineNumber: 164,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("hr", { className: "border-none bg-indigo-500 h-[1px] my-2" }, void 0, !1, {
        fileName: "app/routes/dash_.$postId.edit.tsx",
        lineNumber: 175,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Cargando..." }, void 0, !1, {
        fileName: "app/routes/dash_.$postId.edit.tsx",
        lineNumber: 176,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/routes/dash_.$postId.edit.tsx",
        lineNumber: 176,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dash_.$postId.edit.tsx",
      lineNumber: 119,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react_hot_toast.Toaster, {}, void 0, !1, {
      fileName: "app/routes/dash_.$postId.edit.tsx",
      lineNumber: 184,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dash_.$postId.edit.tsx",
    lineNumber: 118,
    columnNumber: 5
  }, this);
}

// app/routes/blog_.$postSlug.tsx
var blog_postSlug_exports = {};
__export(blog_postSlug_exports, {
  default: () => PostDetail,
  links: () => links2,
  loader: () => loader2
});
var import_react5 = require("react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), links2 = () => [
  // {
  //   rel: "stylesheet",
  //   href: styles,
  // },
  // {
  //   rel: "stylesheet",
  //   href: markdownStyles,
  // },
], loader2 = async ({ params }) => null;
function PostDetail() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "mx-auto text-3xl text-center py-20", children: "B\xF3rrame y sustit\xFAyeme \u{1F47D}" }, void 0, !1, {
      fileName: "app/routes/blog_.$postSlug.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("main", { className: "max-w-2xl mx-auto py-20 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react5.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Cargando..." }, void 0, !1, {
      fileName: "app/routes/blog_.$postSlug.tsx",
      lineNumber: 78,
      columnNumber: 29
    }, this) }, void 0, !1, {
      fileName: "app/routes/blog_.$postSlug.tsx",
      lineNumber: 78,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/blog_.$postSlug.tsx",
      lineNumber: 76,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/blog_.$postSlug.tsx",
    lineNumber: 71,
    columnNumber: 5
  }, this);
}

// app/routes/sitemap[.]xml.tsx
var sitemap_xml_exports = {};
__export(sitemap_xml_exports, {
  loader: () => loader3
});
var loader3 = async ({ params, request }) => new Response(
  // xml.join("") // <= 🛠️ Descomenta
  "<xml tags>",
  // <= 🛠️ Borra
  {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "x-content-type-options": "nosniff"
    }
  }
);

// app/routes/feed[.]atom.tsx
var feed_atom_exports = {};
__export(feed_atom_exports, {
  loader: () => loader4
});
var loader4 = async () => new Response(
  "<xml tags>",
  // <= 🛠️ Sustitúye
  {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
      "x-content-type-options": "nosniff"
    }
  }
);

// app/routes/feed[.]json.tsx
var feed_json_exports = {};
__export(feed_json_exports, {
  loader: () => loader5
});
var loader5 = async () => new Response(
  '{"json":"format"}',
  // <= 🛠️ Sustitúye
  {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-content-type-options": "nosniff"
    }
  }
);

// app/routes/feed[.]xml.tsx
var feed_xml_exports = {};
__export(feed_xml_exports, {
  loader: () => loader6
});
var loader6 = async () => new Response(
  "<xml tags>",
  // <= 🛠️ Sustitúye
  {
    headers: {
      "Content-Type": "application/rss+xml;  charset=utf-8",
      "x-content-type-options": "nosniff"
    }
  }
);

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  loader: () => loader7,
  meta: () => meta
});
var import_node2 = require("@remix-run/node"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), meta = () => [
  { title: "Construye un blog con Remix" },
  { name: "description", content: "Hola blissmo" }
], loader7 = async ({ request }) => (0, import_node2.redirect)(request.url + "login");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex min-h-screen main", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "self-center mx-auto text-2xl px-4 text-indigo-500", children: "\u{1F6E0}\uFE0F B\xF3rrame y sustit\xFAyeme por un login bonito \u{1F47D} o una redirecci\xF3n" }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 28,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action2,
  default: () => Login,
  loader: () => loader8
});
var import_node4 = require("@remix-run/node"), import_react6 = require("@remix-run/react");

// app/sessions.ts
var import_node3 = require("@remix-run/node"), { getSession, commitSession, destroySession } = (0, import_node3.createCookieSessionStorage)({
  // a Cookie from `createCookie` or the CookieOptions to create one
  cookie: {
    name: "__session",
    domain: "hectorbliss.com",
    httpOnly: !0,
    maxAge: 60 * 60 * 24 * 7,
    // 7 días
    path: "/",
    sameSite: "lax",
    secrets: ["Bl15sM0"],
    secure: !0
  }
});

// app/utils/getOrCreateUser.ts
var import_jwt_decode = __toESM(require("jwt-decode"));

// app/utils/db.ts
var import_client = require("@prisma/client"), db;
global.__db__ || (global.__db__ = new import_client.PrismaClient()), db = global.__db__, db.$connect();

// app/utils/getOrCreateUser.ts
async function getOrCreateUser(credential) {
  let decoded = (0, import_jwt_decode.default)(credential), email = decoded.email;
  return await db.user.upsert({
    where: {
      email
    },
    create: {
      name: decoded.name,
      email: decoded.email,
      picture: decoded.picture
    },
    update: {
      name: decoded.name,
      picture: decoded.picture
    }
  });
}

// app/utils/zod.ts
var import_zod = require("zod");
var oneTapDataSchema = import_zod.z.object({
  credential: import_zod.z.string(),
  g_csrf_token: import_zod.z.string()
}), readPostSchema = import_zod.z.object({
  title: import_zod.z.string().min(5),
  id: import_zod.z.string(),
  cover: import_zod.z.string(),
  slug: import_zod.z.string(),
  createdAt: import_zod.z.date(),
  author: import_zod.z.any()
}), updatePostSchema = import_zod.z.object({
  cover: import_zod.z.string().optional(),
  title: import_zod.z.string().min(5),
  slug: import_zod.z.string().min(5),
  body: import_zod.z.string().optional(),
  published: import_zod.z.preprocess(
    (val) => String(val).toLowerCase() === "true" || val === !0 || String(val).toLowerCase() === "on",
    import_zod.z.boolean()
  ),
  tags: import_zod.z.string().optional()
});

// app/routes/login.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), action2 = async ({ request }) => {
  let formData = await request.formData(), body = Object.fromEntries(formData), cookieString = request.headers.get("Cookie");
  if (!(cookieString != null && cookieString.includes(body.g_csrf_token)))
    return (0, import_node4.json)(null, { status: 400 });
  let validated = oneTapDataSchema.safeParse(body);
  if (!validated.success)
    return (0, import_node4.json)(null, { status: 400 });
  let user = await getOrCreateUser(validated.data.credential), session = await getSession(request.headers.get("Cookie"));
  return session.set("userId", user.id), (0, import_node4.redirect)("/dash", {
    headers: { "Set-Cookie": await commitSession(session) }
  });
}, loader8 = async () => ({
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  REDIRECT_URL: "http://localhost:3000/login"
});
function Login() {
  let { GOOGLE_CLIENT_ID, REDIRECT_URL } = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex justify-center items-center py-20 border-red-500", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "div",
      {
        id: "g_id_onload",
        "data-client_id": GOOGLE_CLIENT_ID,
        "data-login_uri": REDIRECT_URL,
        "data-cancel_on_tap_outside": "false"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/login.tsx",
        lineNumber: 49,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "div",
      {
        dangerouslySetInnerHTML: {
          __html: ' <script src="https://accounts.google.com/gsi/client" async defer></script>'
        }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/login.tsx",
        lineNumber: 55,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { className: "text-6xl font-bold uppercase", children: "Inciando sesi\xF3n" }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 48,
    columnNumber: 5
  }, this);
}

// app/routes/blog.tsx
var blog_exports = {};
__export(blog_exports, {
  default: () => Blog,
  loader: () => loader9,
  meta: () => meta2
});

// app/utils/getBasicMetadata.ts
var getBasicMetaData = ({
  title = "blissmo blog",
  description = "Aprende algo nuevo hoy.",
  extra = [
    {
      property: "og:image",
      content: "https://avatars.githubusercontent.com/u/7883990?v=4"
    },
    {
      property: "og:url",
      content: "https://curso-blog-remix.netlify.app/blog"
    }
  ]
} = {}) => [
  {
    title
  },
  { name: "description", content: description },
  {
    property: "og:title",
    content: title
  },
  ...extra
];

// app/routes/blog.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), meta2 = () => getBasicMetaData(), loader9 = async () => null;
function Blog() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("article", { className: "dark:bg-slate-800 min-h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("main", { className: "max-w-3xl mx-auto py-20 px-4 flex justify-between gap-4 items-center ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "font-medium text-4xl text-white", children: "\xA1Hola! \u{1F44B}\u{1F3FC} Bienvenid@ a mi jard\xEDn digital. \u{1FAB4}" }, void 0, !1, {
          fileName: "app/routes/blog.tsx",
          lineNumber: 37,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-2xl font-thin my-4 text-gray-200", children: "Soy @blissmo \u{1F913} y me gusta compartir lo que aprendo sobre desarrollo web independiente." }, void 0, !1, {
          fileName: "app/routes/blog.tsx",
          lineNumber: 40,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-2xl my-4 text-gray-200", children: "Ultimamente intento escribir y narrar bien. \u270D\u{1F3FC}" }, void 0, !1, {
          fileName: "app/routes/blog.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/blog.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        "img",
        {
          className: "rounded-3xl max-w-xs hover:rotate-3 hover:scale-105 hover:filter-none transition-all filter grayscale",
          src: "https://i.imgur.com/OtuQ5J8.png",
          alt: "Chilango at Prague"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/blog.tsx",
          lineNumber: 48,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/blog.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("section", { className: "max-w-3xl mx-auto py-4 flex gap-4 flex-wrap" }, void 0, !1, {
      fileName: "app/routes/blog.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    // <= 🛠️ Borra
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "bg-gray-600 text-gray-200 text-center py-12 max-w-3xl mx-auto block rounded-2xl text-xl font-thin hover:scale-95 transition-all", children: [
      " ",
      "No he escrito nada a\xFAn \u{1F625}",
      " "
    ] }, void 0, !0, {
      fileName: "app/routes/blog.tsx",
      lineNumber: 68,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/blog.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}

// app/routes/dash.tsx
var dash_exports = {};
__export(dash_exports, {
  action: () => action3,
  default: () => Dash,
  loader: () => loader10
});
var import_react7 = require("@remix-run/react"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), action3 = async ({ request }) => null, loader10 = async ({ request }) => null;
function Dash() {
  let navigation = (0, import_react7.useNavigation)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("article", { className: "dark:bg-slate-800 min-h-screen dark:text-gray-200 py-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("nav", { className: "flex justify-between items-center max-w-3xl mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { className: "block text-3xl font-bold mt-4 px-4 text-left", children: "Todos tus posts" }, void 0, !1, {
        fileName: "app/routes/dash.tsx",
        lineNumber: 46,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "px-4 text-md font-thin", children: "Administra tu blog" }, void 0, !1, {
        fileName: "app/routes/dash.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dash.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react7.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      "button",
      {
        disabled: navigation.state !== "idle",
        type: "submit",
        name: "intent",
        value: "new-post",
        className: "text-white mr-4 bg-indigo-500 py-2 px-8 rounded-md hover:bg-indigo-600 disabled:bg-gray-500",
        children: navigation.state !== "idle" ? "Cargando..." : "Crear nuevo +"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/dash.tsx",
        lineNumber: 52,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/dash.tsx",
      lineNumber: 51,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dash.tsx",
    lineNumber: 44,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/dash.tsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-XJ3EDVLX.js", imports: ["/build/_shared/chunk-XEM76Q7B.js", "/build/_shared/chunk-HYDBX6IC.js", "/build/_shared/chunk-IU43IUTG.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-ULGJGYNW.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-ZODVZTFF.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog": { id: "routes/blog", parentId: "root", path: "blog", index: void 0, caseSensitive: void 0, module: "/build/routes/blog-2LPAHOXX.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog_.$postSlug": { id: "routes/blog_.$postSlug", parentId: "root", path: "blog/:postSlug", index: void 0, caseSensitive: void 0, module: "/build/routes/blog_.$postSlug-BTAJ5RIR.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dash": { id: "routes/dash", parentId: "root", path: "dash", index: void 0, caseSensitive: void 0, module: "/build/routes/dash-NJLZSOYY.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dash_.$postId.edit": { id: "routes/dash_.$postId.edit", parentId: "root", path: "dash/:postId/edit", index: void 0, caseSensitive: void 0, module: "/build/routes/dash_.$postId.edit-AF2ANEB5.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/feed[.]atom": { id: "routes/feed[.]atom", parentId: "root", path: "feed.atom", index: void 0, caseSensitive: void 0, module: "/build/routes/feed[.]atom-5QBXDB6R.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/feed[.]json": { id: "routes/feed[.]json", parentId: "root", path: "feed.json", index: void 0, caseSensitive: void 0, module: "/build/routes/feed[.]json-M6N7EEBK.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/feed[.]xml": { id: "routes/feed[.]xml", parentId: "root", path: "feed.xml", index: void 0, caseSensitive: void 0, module: "/build/routes/feed[.]xml-ALQ4HW2Z.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-TRDK2KVY.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sitemap[.]xml": { id: "routes/sitemap[.]xml", parentId: "root", path: "sitemap.xml", index: void 0, caseSensitive: void 0, module: "/build/routes/sitemap[.]xml-FCQIAROB.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "9f966c7a", hmr: void 0, url: "/build/manifest-9F966C7A.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/dash_.$postId.edit": {
    id: "routes/dash_.$postId.edit",
    parentId: "root",
    path: "dash/:postId/edit",
    index: void 0,
    caseSensitive: void 0,
    module: dash_postId_edit_exports
  },
  "routes/blog_.$postSlug": {
    id: "routes/blog_.$postSlug",
    parentId: "root",
    path: "blog/:postSlug",
    index: void 0,
    caseSensitive: void 0,
    module: blog_postSlug_exports
  },
  "routes/sitemap[.]xml": {
    id: "routes/sitemap[.]xml",
    parentId: "root",
    path: "sitemap.xml",
    index: void 0,
    caseSensitive: void 0,
    module: sitemap_xml_exports
  },
  "routes/feed[.]atom": {
    id: "routes/feed[.]atom",
    parentId: "root",
    path: "feed.atom",
    index: void 0,
    caseSensitive: void 0,
    module: feed_atom_exports
  },
  "routes/feed[.]json": {
    id: "routes/feed[.]json",
    parentId: "root",
    path: "feed.json",
    index: void 0,
    caseSensitive: void 0,
    module: feed_json_exports
  },
  "routes/feed[.]xml": {
    id: "routes/feed[.]xml",
    parentId: "root",
    path: "feed.xml",
    index: void 0,
    caseSensitive: void 0,
    module: feed_xml_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/blog": {
    id: "routes/blog",
    parentId: "root",
    path: "blog",
    index: void 0,
    caseSensitive: void 0,
    module: blog_exports
  },
  "routes/dash": {
    id: "routes/dash",
    parentId: "root",
    path: "dash",
    index: void 0,
    caseSensitive: void 0,
    module: dash_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
/*! Bundled license information:

@remix-run/css-bundle/dist/index.js:
  (**
   * @remix-run/css-bundle v1.17.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
//# sourceMappingURL=server.js.map
