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

// css-bundle-update-plugin-ns:/Users/hectorbliss/courses/curso-blog-remix/node_modules/@remix-run/css-bundle/dist/index.js
var require_dist = __commonJS({
  "css-bundle-update-plugin-ns:/Users/hectorbliss/courses/curso-blog-remix/node_modules/@remix-run/css-bundle/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var cssBundleHref2;
    exports.cssBundleHref = cssBundleHref2;
  }
});

// empty-module:~/components/MarkDownEditor.client
var require_MarkDownEditor = __commonJS({
  "empty-module:~/components/MarkDownEditor.client"(exports, module2) {
    module2.exports = {};
  }
});

// empty-module:~/components/ContentToJSX.client
var require_ContentToJSX = __commonJS({
  "empty-module:~/components/ContentToJSX.client"(exports, module2) {
    module2.exports = {};
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
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
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
var style_default = "/build/_assets/style-OOGY7WFF.css";

// app/root.tsx
var import_jsx_runtime2 = require("react/jsx-runtime"), links = () => [
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
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("html", { lang: "en", className: "dark", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Outlet, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.LiveReload, {})
    ] })
  ] });
}

// app/routes/dash_.$postId.edit.tsx
var dash_postId_edit_exports = {};
__export(dash_postId_edit_exports, {
  action: () => action,
  default: () => PostEdit,
  links: () => links2,
  loader: () => loader
});
var import_node2 = require("@remix-run/node"), import_MarkDownEditor = __toESM(require_MarkDownEditor()), import_react5 = require("@remix-run/react"), import_slugify = __toESM(require("slugify"));

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

// app/utils/db.ts
var import_edge = require("@prisma/client/edge"), db;
db = new import_edge.PrismaClient();

// app/routes/dash_.$postId.edit.tsx
var import_react_hot_toast = __toESM(require("react-hot-toast")), import_react6 = require("react"), import_signals_react = require("@preact/signals-react"), import_tiny_invariant = __toESM(require("tiny-invariant"));

// app/components/Switch.tsx
var import_react3 = require("react"), import_react4 = require("@headlessui/react"), import_jsx_runtime3 = require("react/jsx-runtime");
function ToggleButton({ defaultValue, name }) {
  let [enabled, setEnabled] = (0, import_react3.useState)(Boolean(defaultValue));
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    import_react4.Switch,
    {
      checked: enabled,
      onChange: setEnabled,
      className: `${enabled ? "bg-indigo-600" : "bg-gray-200"} relative inline-flex h-6 w-11 items-center rounded-full transition-all`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "span",
          {
            className: `${enabled ? "translate-x-6" : "translate-x-1"} inline-block h-4 w-4 transform rounded-full bg-white transition`
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("input", { type: "checkbox", checked: enabled, name, hidden: !0, readOnly: !0 })
      ]
    }
  );
}

// app/utils/markdoc.server.tsx
var import_markdoc = require("@markdoc/markdoc"), fence = {
  render: "Fence",
  attributes: {
    language: {
      type: String
    }
  }
};
function markdownParser(markdown) {
  return (0, import_markdoc.transform)((0, import_markdoc.parse)(markdown), { nodes: { fence } });
}

// app/styles/prismjs.css
var prismjs_default = "/build/_assets/prismjs-ZGH27OJQ.css";

// app/routes/dash_.$postId.edit.tsx
var import_prismjs2 = __toESM(require("prismjs")), import_jsx_runtime4 = require("react/jsx-runtime"), links2 = () => [
  {
    rel: "stylesheet",
    href: prismjs_default
  }
], loader = async ({ params }) => {
  let post = await db.post.findUnique({
    where: { id: params.postId },
    select: {
      title: !0,
      id: !0,
      body: !0,
      tags: !0,
      published: !0,
      cover: !0
    }
  });
  if (!post)
    return (0, import_node2.json)({ ok: !1, error: "not found" }, { status: 404 });
  let content = await markdownParser(post.body);
  return { ...post, content };
}, action = async ({ request, params }) => {
  let formData = await request.formData(), form = Object.fromEntries(formData);
  form.slug = (0, import_slugify.default)(form.title + "-" + Date.now());
  let validated = updatePostSchema.safeParse(form);
  return validated.success ? (await db.post.update({
    where: {
      id: params.postId
    },
    data: validated.data
  }), { ok: !0 }) : (0, import_node2.json)({ ok: !1, error: validated.error }, { status: 400 });
};
function PostEdit() {
  var _a;
  let { title, content, body, cover, tags, published } = (0, import_react5.useLoaderData)(), fetcher = (0, import_react5.useFetcher)(), formRef = (0, import_react6.createRef)(), timeout = (0, import_signals_react.signal)(null);
  (0, import_react6.useLayoutEffect)(() => {
    import_prismjs2.default.highlightAll();
  }, []), (0, import_react6.useEffect)(() => {
    var _a2, _b;
    (_a2 = fetcher.data) != null && _a2.ok ? import_react_hot_toast.default.success("Se ha guardado tu post", {
      id: "exito"
    }) : fetcher.data && !fetcher.data.ok && (import_react_hot_toast.default.error("No se ha podido guardar", {
      id: "error"
    }), console.error((_b = fetcher.data) == null ? void 0 : _b.error));
  }, [fetcher]);
  let handleAutoSave = (content2) => {
    timeout.value && clearTimeout(timeout.value), timeout.value = setTimeout(() => {
      (0, import_tiny_invariant.default)(formRef.current !== null);
      let formData = new FormData(formRef.current);
      formData.append("body", content2), fetcher.submit(formData, { method: "post" });
    }, 2e3);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("article", { className: "dark:bg-slate-800 min-h-screen dark:text-slate-200", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("main", { className: "max-w-5xl mx-auto py-20 px-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(fetcher.Form, { method: "post", ref: formRef, children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("label", { className: "text-xs mb-2", children: "Editando tu post:" }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "input",
            {
              className: "py-2 px-4 rounded-md w-full text-slate-500",
              type: "text",
              placeholder: "Escribe un t\xEDtulo",
              defaultValue: title,
              name: "title"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("section", { className: "flex gap-4 items-end", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("label", { className: "text-xs", children: "Agrega una imagen de portada:" }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "input",
              {
                className: "py-2 px-4 rounded-md w-full text-slate-500",
                type: "text",
                placeholder: "Pega el link de una imagen",
                defaultValue: cover,
                name: "cover"
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("label", { className: "text-xs ", children: "Agrega un tag:" }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "input",
              {
                className: "py-2 px-4 rounded-md w-full text-slate-500",
                type: "text",
                placeholder: "Escribe tags separadas con coma (,)",
                defaultValue: tags,
                name: "tags"
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("label", { htmlFor: "", children: "P\xFAblico" }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ToggleButton, { name: "published", defaultValue: published })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "button",
            {
              disabled: fetcher.state !== "idle",
              className: "disabled:bg-gray-600 px-6 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 py-2",
              children: "Guardar"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "flex text-red-500", children: ((_a = fetcher.data) == null ? void 0 : _a.error) && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("ul", { children: fetcher.data.error.issues.map(
        (err) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("li", { children: [
          err.path,
          " ",
          err.message
        ] }, err.path)
      ) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("hr", { className: "border-none bg-indigo-500 h-[1px] my-2" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react6.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: "Cargando..." }), children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        import_MarkDownEditor.default,
        {
          content,
          defaultValue: body,
          onChange: handleAutoSave
        }
      ) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_hot_toast.Toaster, {})
  ] });
}

// app/routes/blog_.$postSlug.tsx
var blog_postSlug_exports = {};
__export(blog_postSlug_exports, {
  default: () => PostDetail,
  links: () => links3,
  loader: () => loader2
});
var import_react7 = require("@remix-run/react"), import_react8 = require("react"), import_ContentToJSX = __toESM(require_ContentToJSX());
var import_jsx_runtime5 = require("react/jsx-runtime"), links3 = () => [
  {
    rel: "stylesheet",
    href: prismjs_default
  }
], loader2 = async ({ params }) => {
  let post = await db.post.findUnique({
    where: { slug: params.postSlug },
    select: {
      body: !0
    }
  });
  return { content: await markdownParser(post.body) };
};
function PostDetail() {
  let { content } = (0, import_react7.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_jsx_runtime5.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react8.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: "Cargando..." }), children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_ContentToJSX.ContentToJSX, { content }) }) });
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  loader: () => loader3,
  meta: () => meta
});
var import_react9 = require("@remix-run/react"), import_jsx_runtime6 = require("react/jsx-runtime"), NODE_ENV = "production", GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID, meta = () => [
  { title: "Construye un blog con Remix" },
  { name: "description", content: "Hola blissmo" }
], loader3 = async () => (console.log("NODENV: ", NODE_ENV), { NODE_ENV, GOOGLE_CLIENT_ID });
function Index() {
  let { NODE_ENV: NODE_ENV2, GOOGLE_CLIENT_ID: GOOGLE_CLIENT_ID2 } = (0, import_react9.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "flex min-h-screen main", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "div",
      {
        id: "g_id_onload",
        "data-client_id": GOOGLE_CLIENT_ID2,
        "data-login_uri": NODE_ENV2 === "development" ? "http://localhost:3000/login" : "https://curso-blog-remix.netlify.app/login",
        "data-cancel_on_tap_outside": "false"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "div",
      {
        dangerouslySetInnerHTML: {
          __html: ' <script src="https://accounts.google.com/gsi/client" async defer></script>'
        }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "text-xs absolute bottom-[36%] text-gray-500 w-full left-0 text-center pr-8", children: "Culaquier otro t\xE9rmino y condici\xF3n necesario de mencionar" })
  ] });
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action2,
  default: () => Login
});
var import_node3 = require("@remix-run/node");

// app/utils/getOrCreateUser.ts
var import_jwt_decode = __toESM(require("jwt-decode"));
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

// app/routes/login.tsx
var import_jsx_runtime7 = require("react/jsx-runtime"), action2 = async ({ request }) => {
  let formData = await request.formData(), body = Object.fromEntries(formData), data = {
    credential: String(body.credential),
    g_csrf_token: String(body.g_csrf_token)
  }, validated = oneTapDataSchema.safeParse(data);
  return validated.success ? (await getOrCreateUser(data.credential), (0, import_node3.redirect)("/dash")) : (console.log("Not valid?", validated), null);
};
function Login() {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex justify-center items-center min-h-screen border-red-500", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      "div",
      {
        id: "g_id_onload",
        "data-client_id": "325591888601-04tqp5q9kifu77j699pqi8o6pqjd74jb.apps.googleusercontent.com",
        "data-login_uri": "https://623c-187-189-88-81.ngrok-free.app/login",
        "data-cancel_on_tap_outside": "false"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      "div",
      {
        dangerouslySetInnerHTML: {
          __html: ' <script src="https://accounts.google.com/gsi/client" async defer></script>'
        }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h2", { className: "text-6xl font-bold uppercase", children: "Inciando sesi\xF3n asegun" })
  ] });
}

// app/routes/blog.tsx
var blog_exports = {};
__export(blog_exports, {
  default: () => Blog,
  loader: () => loader4
});
var import_react11 = require("@remix-run/react");

// app/components/BlogCard.tsx
var import_react10 = require("@remix-run/react"), import_relativeTime = __toESM(require("dayjs/plugin/relativeTime")), import_dayjs = __toESM(require("dayjs")), import_es_mx = require("dayjs/locale/es-mx"), import_jsx_runtime8 = require("react/jsx-runtime");
import_dayjs.default.extend(import_relativeTime.default);
import_dayjs.default.locale("es-mx");
var BlogCard = ({
  title,
  slug,
  cover,
  createdAt
}) => /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
  import_react10.Link,
  {
    to: `${slug}`,
    className: "bg-gradient-to-r from-slate-600 to-slate-800 text-white p-4 rounded-md hover:ring-indigo-500 hover:ring transition-all flex items-center gap-4 min-w-full",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        "img",
        {
          src: cover,
          alt: "cover",
          className: "rounded-sm object-cover max-w-xs"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("h3", { className: "text-2xl", children: [
          " ",
          title
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "font-thin text-sm text-gray-300", children: (0, import_dayjs.default)(createdAt).from(/* @__PURE__ */ new Date()) })
      ] })
    ]
  }
);

// app/routes/blog.tsx
var import_jsx_runtime9 = require("react/jsx-runtime"), import_react12 = require("react"), loader4 = async () => ({ posts: await db.post.findMany({
  where: { published: !0 },
  select: {
    title: !0,
    createdAt: !0,
    author: !0,
    id: !0,
    slug: !0,
    cover: !0
  }
}) });
function Blog() {
  let { posts } = (0, import_react11.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("article", { className: "dark:bg-slate-800 min-h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("main", { className: "max-w-3xl mx-auto py-20 px-4 flex justify-between gap-4 items-center ", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h2", { className: "font-medium text-4xl text-white", children: "\xA1Hola! \u{1F44B}\u{1F3FC} Bienvenid@ a mi jard\xEDn digital. \u{1FAB4}" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "text-2xl font-thin my-4 text-gray-200", children: "Soy @blissmo \u{1F913} y me gusta compartir lo que aprendo sobre desarrollo web independiente." }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "text-2xl my-4 text-gray-200", children: "Ultimamente intento escribir y narrar bien. \u270D\u{1F3FC}" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        "img",
        {
          className: "rounded-3xl max-w-xs hover:rotate-3 hover:scale-105 hover:filter-none transition-all filter grayscale",
          src: "https://i.imgur.com/OtuQ5J8.png",
          alt: "Chilango at Prague"
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("section", { className: "max-w-3xl mx-auto py-4 flex gap-4 flex-wrap", children: posts.map((post) => /* @__PURE__ */ (0, import_react12.createElement)(BlogCard, { ...post, key: post.id })) }),
    posts.length < 1 && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("p", { className: "bg-gray-600 text-gray-200 text-center py-12 max-w-3xl mx-auto block rounded-2xl text-xl font-thin hover:scale-95 transition-all", children: [
      " ",
      "No he escrito nada a\xFAn \u{1F625}",
      " "
    ] })
  ] });
}

// app/routes/dash.tsx
var dash_exports = {};
__export(dash_exports, {
  action: () => action3,
  default: () => Dash,
  loader: () => loader5
});
var import_node4 = require("@remix-run/node"), import_react14 = require("@remix-run/react"), import_slugify2 = __toESM(require("slugify"));

// app/components/PostCard.tsx
var import_react13 = require("@remix-run/react"), import_jsx_runtime10 = require("react/jsx-runtime"), PostCard = ({
  title,
  id
}) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
  import_react13.Link,
  {
    to: `${id}/edit`,
    className: "p-4 rounded-md border border-indigo-500 w-[300px] hover:ring-indigo-500 hover:ring ",
    children: title
  }
);

// app/routes/dash.tsx
var import_jsx_runtime11 = require("react/jsx-runtime"), action3 = async ({ request }) => {
  if ((await request.formData()).get("intent") === "new-post") {
    let post = await db.post.create({
      data: {
        userId: "648ce85a2e43deef9f5b7a87",
        //@TODO from cookie
        slug: (0, import_slugify2.default)("nuevo-post-" + Date.now())
      }
    });
    throw (0, import_node4.redirect)(`/dash/${post.id}/edit`);
  }
  return null;
}, loader5 = async ({ request }) => ({ posts: await db.post.findMany() });
function Dash() {
  let { posts } = (0, import_react14.useLoaderData)(), navigation = (0, import_react14.useNavigation)();
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("article", { className: "dark:bg-slate-800 min-h-screen dark:text-gray-200 py-20", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("nav", { className: "flex justify-between items-center max-w-3xl mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h2", { className: "block text-3xl font-bold mt-4 px-4 text-left", children: "Todos tus posts" }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "px-4 text-md font-thin", children: "Administra tu blog" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react14.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
        "button",
        {
          disabled: navigation.state !== "idle",
          type: "submit",
          name: "intent",
          value: "new-post",
          className: "text-white mr-4 bg-indigo-500 py-2 px-8 rounded-md hover:bg-indigo-600 disabled:bg-gray-500",
          children: navigation.state !== "idle" ? "Cargando..." : "Crear nuevo +"
        }
      ) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("section", { className: "max-w-3xl mx-auto flex flex-wrap gap-2 py-20 ", children: posts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(PostCard, { id: p.id, title: p.title }, p.id)) })
  ] });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-L3WRDLNT.js", imports: ["/build/_shared/chunk-452IKNXU.js", "/build/_shared/chunk-GDLBX7ER.js", "/build/_shared/chunk-Q3IECNXJ.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-BO3MEHF6.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-IUBHPNAB.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog": { id: "routes/blog", parentId: "root", path: "blog", index: void 0, caseSensitive: void 0, module: "/build/routes/blog-XZTG5SX6.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog_.$postSlug": { id: "routes/blog_.$postSlug", parentId: "root", path: "blog/:postSlug", index: void 0, caseSensitive: void 0, module: "/build/routes/blog_.$postSlug-5MIIJ4OF.js", imports: ["/build/_shared/chunk-52WCXXK7.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dash": { id: "routes/dash", parentId: "root", path: "dash", index: void 0, caseSensitive: void 0, module: "/build/routes/dash-6ABFPHJI.js", imports: ["/build/_shared/chunk-U7XGPDT7.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dash_.$postId.edit": { id: "routes/dash_.$postId.edit", parentId: "root", path: "dash/:postId/edit", index: void 0, caseSensitive: void 0, module: "/build/routes/dash_.$postId.edit-XGWQ2AM2.js", imports: ["/build/_shared/chunk-DDZYT45S.js", "/build/_shared/chunk-DCWG6ULY.js", "/build/_shared/chunk-OHBVN6EP.js", "/build/_shared/chunk-DOJ2AMJT.js", "/build/_shared/chunk-IGCYVQJI.js", "/build/_shared/chunk-63UTSDEL.js", "/build/_shared/chunk-52WCXXK7.js", "/build/_shared/chunk-U7XGPDT7.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-LLXH55NP.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "2a280d1a", hmr: void 0, url: "/build/manifest-2A280D1A.js" };

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
