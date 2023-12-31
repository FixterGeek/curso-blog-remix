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
var style_default = "/build/_assets/style-KYEFCAKM.css";

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
var import_client = require("@prisma/client"), db;
global.__db__ || (global.__db__ = new import_client.PrismaClient()), db = global.__db__, db.$connect();

// app/routes/dash_.$postId.edit.tsx
var import_react_hot_toast = __toESM(require("react-hot-toast")), import_react6 = require("react"), import_signals_react = require("@preact/signals-react"), import_tiny_invariant = __toESM(require("tiny-invariant"));

// app/components/Switch.tsx
var import_react3 = require("react"), import_react4 = require("@headlessui/react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function ToggleButton({ defaultValue, name }) {
  let [enabled, setEnabled] = (0, import_react3.useState)(Boolean(defaultValue));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    import_react4.Switch,
    {
      checked: enabled,
      onChange: setEnabled,
      className: `${enabled ? "bg-indigo-600" : "bg-gray-200"} relative inline-flex h-6 w-11 items-center rounded-full transition-all`,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "span",
          {
            className: `${enabled ? "translate-x-6" : "translate-x-1"} inline-block h-4 w-4 transform rounded-full bg-white transition`
          },
          void 0,
          !1,
          {
            fileName: "app/components/Switch.tsx",
            lineNumber: 19,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "checkbox", checked: enabled, name, hidden: !0, readOnly: !0 }, void 0, !1, {
          fileName: "app/components/Switch.tsx",
          lineNumber: 24,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Switch.tsx",
      lineNumber: 12,
      columnNumber: 5
    },
    this
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
var prismjs_default = "/build/_assets/prismjs-R5ZTTNHU.css";

// app/routes/dash_.$postId.edit.tsx
var import_prismjs2 = __toESM(require("prismjs")), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), links2 = () => [
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("article", { className: "dark:bg-slate-800 min-h-screen dark:text-slate-200", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("main", { className: "max-w-5xl mx-auto py-20 px-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(fetcher.Form, { method: "post", ref: formRef, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { className: "text-xs mb-2", children: "Editando tu post:" }, void 0, !1, {
            fileName: "app/routes/dash_.$postId.edit.tsx",
            lineNumber: 108,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "input",
            {
              className: "py-2 px-4 rounded-md w-full text-slate-500",
              type: "text",
              placeholder: "Escribe un t\xEDtulo",
              defaultValue: title,
              name: "title"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/dash_.$postId.edit.tsx",
              lineNumber: 109,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/dash_.$postId.edit.tsx",
          lineNumber: 107,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("section", { className: "flex gap-4 items-end", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { className: "text-xs", children: "Agrega una imagen de portada:" }, void 0, !1, {
              fileName: "app/routes/dash_.$postId.edit.tsx",
              lineNumber: 119,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "input",
              {
                className: "py-2 px-4 rounded-md w-full text-slate-500",
                type: "text",
                placeholder: "Pega el link de una imagen",
                defaultValue: cover,
                name: "cover"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/dash_.$postId.edit.tsx",
                lineNumber: 120,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/dash_.$postId.edit.tsx",
            lineNumber: 118,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { className: "text-xs ", children: "Agrega un tag:" }, void 0, !1, {
              fileName: "app/routes/dash_.$postId.edit.tsx",
              lineNumber: 129,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "input",
              {
                className: "py-2 px-4 rounded-md w-full text-slate-500",
                type: "text",
                placeholder: "Escribe tags separadas con coma (,)",
                defaultValue: tags,
                name: "tags"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/dash_.$postId.edit.tsx",
                lineNumber: 130,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/dash_.$postId.edit.tsx",
            lineNumber: 128,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { htmlFor: "", children: "P\xFAblico" }, void 0, !1, {
              fileName: "app/routes/dash_.$postId.edit.tsx",
              lineNumber: 139,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ToggleButton, { name: "published", defaultValue: published }, void 0, !1, {
              fileName: "app/routes/dash_.$postId.edit.tsx",
              lineNumber: 140,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dash_.$postId.edit.tsx",
            lineNumber: 138,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "button",
            {
              disabled: fetcher.state !== "idle",
              className: "disabled:bg-gray-600 px-6 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 py-2",
              children: "Guardar"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/dash_.$postId.edit.tsx",
              lineNumber: 142,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/dash_.$postId.edit.tsx",
          lineNumber: 117,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dash_.$postId.edit.tsx",
        lineNumber: 106,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex text-red-500", children: ((_a = fetcher.data) == null ? void 0 : _a.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: fetcher.data.error.issues.map(
        (err) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: [
          err.path,
          " ",
          err.message
        ] }, err.path, !0, {
          fileName: "app/routes/dash_.$postId.edit.tsx",
          lineNumber: 154,
          columnNumber: 13
        }, this)
      ) }, void 0, !1, {
        fileName: "app/routes/dash_.$postId.edit.tsx",
        lineNumber: 152,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/dash_.$postId.edit.tsx",
        lineNumber: 150,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("hr", { className: "border-none bg-indigo-500 h-[1px] my-2" }, void 0, !1, {
        fileName: "app/routes/dash_.$postId.edit.tsx",
        lineNumber: 161,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react6.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Cargando..." }, void 0, !1, {
        fileName: "app/routes/dash_.$postId.edit.tsx",
        lineNumber: 162,
        columnNumber: 29
      }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        import_MarkDownEditor.default,
        {
          content,
          defaultValue: body,
          onChange: handleAutoSave
        },
        void 0,
        !1,
        {
          fileName: "app/routes/dash_.$postId.edit.tsx",
          lineNumber: 163,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/dash_.$postId.edit.tsx",
        lineNumber: 162,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dash_.$postId.edit.tsx",
      lineNumber: 105,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react_hot_toast.Toaster, {}, void 0, !1, {
      fileName: "app/routes/dash_.$postId.edit.tsx",
      lineNumber: 170,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dash_.$postId.edit.tsx",
    lineNumber: 104,
    columnNumber: 5
  }, this);
}

// app/routes/blog_.$postSlug.tsx
var blog_postSlug_exports = {};
__export(blog_postSlug_exports, {
  default: () => PostDetail,
  links: () => links3,
  loader: () => loader3,
  meta: () => meta2
});
var import_react10 = require("@remix-run/react"), import_react11 = require("react"), import_ContentToJSX = __toESM(require_ContentToJSX());

// app/components/Avatar.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function Avatar({
  author,
  date = /* @__PURE__ */ new Date()
}) {
  let { picture, name } = author;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex gap-2 items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "img",
      {
        className: "border-4 border-indigo-500 rounded-full max-w-[60px] bg-indigo-200",
        src: picture,
        alt: "avatar"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Avatar.tsx",
        lineNumber: 13,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: name }, void 0, !1, {
        fileName: "app/components/Avatar.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "font-medium text-xs py-1", children: date.toLocaleDateString() }, void 0, !1, {
        fileName: "app/components/Avatar.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Avatar.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Avatar.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/styles/markdown.css
var markdown_default = "/build/_assets/markdown-LC5NXLLQ.css";

// app/routes/blog.tsx
var blog_exports = {};
__export(blog_exports, {
  default: () => Blog,
  getBasicMetaData: () => getBasicMetaData,
  loader: () => loader2,
  meta: () => meta
});
var import_react8 = require("@remix-run/react");

// app/components/BlogCard.tsx
var import_react7 = require("@remix-run/react"), import_relativeTime = __toESM(require("dayjs/plugin/relativeTime")), import_dayjs = __toESM(require("dayjs")), import_es_mx = require("dayjs/locale/es-mx"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
import_dayjs.default.extend(import_relativeTime.default);
import_dayjs.default.locale("es-mx");
var BlogCard = ({
  title,
  slug,
  cover,
  createdAt
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
  import_react7.Link,
  {
    to: `${slug}`,
    className: "bg-gradient-to-r from-slate-600 to-slate-800 text-white p-4 rounded-md hover:ring-indigo-500 hover:ring transition-all flex items-center gap-4 min-w-full",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "img",
        {
          src: cover,
          alt: "cover",
          className: "rounded-sm object-cover max-w-xs"
        },
        void 0,
        !1,
        {
          fileName: "app/components/BlogCard.tsx",
          lineNumber: 25,
          columnNumber: 7
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { className: "text-2xl", children: [
          " ",
          title
        ] }, void 0, !0, {
          fileName: "app/components/BlogCard.tsx",
          lineNumber: 31,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "font-thin text-sm text-gray-300", children: (0, import_dayjs.default)(createdAt).from(/* @__PURE__ */ new Date()) }, void 0, !1, {
          fileName: "app/components/BlogCard.tsx",
          lineNumber: 32,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/BlogCard.tsx",
        lineNumber: 30,
        columnNumber: 7
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/BlogCard.tsx",
    lineNumber: 21,
    columnNumber: 5
  },
  this
);

// app/routes/blog.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), import_react9 = require("react"), getBasicMetaData = ({
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
], meta = () => getBasicMetaData(), loader2 = async () => ({ posts: await db.post.findMany({
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
  let { posts } = (0, import_react8.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("article", { className: "dark:bg-slate-800 min-h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("main", { className: "max-w-3xl mx-auto py-20 px-4 flex justify-between gap-4 items-center ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "font-medium text-4xl text-white", children: "\xA1Hola! \u{1F44B}\u{1F3FC} Bienvenid@ a mi jard\xEDn digital. \u{1FAB4}" }, void 0, !1, {
          fileName: "app/routes/blog.tsx",
          lineNumber: 67,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-2xl font-thin my-4 text-gray-200", children: "Soy @blissmo \u{1F913} y me gusta compartir lo que aprendo sobre desarrollo web independiente." }, void 0, !1, {
          fileName: "app/routes/blog.tsx",
          lineNumber: 70,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-2xl my-4 text-gray-200", children: "Ultimamente intento escribir y narrar bien. \u270D\u{1F3FC}" }, void 0, !1, {
          fileName: "app/routes/blog.tsx",
          lineNumber: 74,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/blog.tsx",
        lineNumber: 66,
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
          lineNumber: 78,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/blog.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("section", { className: "max-w-3xl mx-auto py-4 flex gap-4 flex-wrap", children: posts.map((post) => /* @__PURE__ */ (0, import_react9.createElement)(BlogCard, { ...post, key: post.id })) }, void 0, !1, {
      fileName: "app/routes/blog.tsx",
      lineNumber: 84,
      columnNumber: 7
    }, this),
    posts.length < 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "bg-gray-600 text-gray-200 text-center py-12 max-w-3xl mx-auto block rounded-2xl text-xl font-thin hover:scale-95 transition-all", children: [
      " ",
      "No he escrito nada a\xFAn \u{1F625}",
      " "
    ] }, void 0, !0, {
      fileName: "app/routes/blog.tsx",
      lineNumber: 97,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/blog.tsx",
    lineNumber: 64,
    columnNumber: 5
  }, this);
}

// app/routes/blog_.$postSlug.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), meta2 = ({ data }) => getBasicMetaData({
  extra: [
    {
      property: "og:title",
      content: `Lee ahora: ${data.post.title}`
    },
    {
      property: "og:image",
      content: data.post.cover ? data.post.cover : "https://i.imgur.com/vq9Xmon.png"
    },
    { property: "og:description", content: data.post.body.slice(1, 30) }
  ]
}), links3 = () => [
  {
    rel: "stylesheet",
    href: prismjs_default
  },
  {
    rel: "stylesheet",
    href: markdown_default
  }
], loader3 = async ({ params }) => {
  let post = await db.post.findUnique({
    where: { slug: params.postSlug },
    select: {
      title: !0,
      body: !0,
      createdAt: !0,
      author: !0
    }
  });
  return { content: await markdownParser(post.body), post };
};
function PostDetail() {
  let { content, post } = (0, import_react10.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("main", { className: "max-w-2xl mx-auto py-20 ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Avatar, { date: new Date(post.createdAt), author: post.author }, void 0, !1, {
      fileName: "app/routes/blog_.$postSlug.tsx",
      lineNumber: 72,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react11.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "Cargando..." }, void 0, !1, {
      fileName: "app/routes/blog_.$postSlug.tsx",
      lineNumber: 73,
      columnNumber: 29
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_ContentToJSX.ContentToJSX, { content }, void 0, !1, {
      fileName: "app/routes/blog_.$postSlug.tsx",
      lineNumber: 74,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/blog_.$postSlug.tsx",
      lineNumber: 73,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/blog_.$postSlug.tsx",
    lineNumber: 71,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/blog_.$postSlug.tsx",
    lineNumber: 70,
    columnNumber: 5
  }, this);
}

// app/routes/sitemap[.]xml.tsx
var sitemap_xml_exports = {};
__export(sitemap_xml_exports, {
  loader: () => loader4
});
var loader4 = async ({ params, request }) => {
  let url = new URL(request.url), postItems = (await db.post.findMany({
    where: { published: !0 },
    include: { author: !0 }
  })).map((post) => [
    "<url>",
    `<loc>https://curso-blog-remix.netlify.app/blog/${post.slug}</loc>`,
    `<lastmod>${post.createdAt}</lastmod>`,
    "</url>"
  ].join("")), xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    // Agregamos nuestras tres feeds a la lista de rutas (y cualquier otra ruta que quieras indexar)
    "<url>",
    "<loc>https://curso-blog-remix.netlify.app/feed.xml</loc>",
    `<lastmod>${/* @__PURE__ */ new Date()}</lastmod>`,
    "</url>",
    "<url>",
    "<loc>https://curso-blog-remix.netlify.app/feed.json</loc>",
    `<lastmod>${/* @__PURE__ */ new Date()}</lastmod>`,
    "</url>",
    "<url>",
    "<loc>https://curso-blog-remix.netlify.app/feed.atom</loc>",
    `<lastmod>${/* @__PURE__ */ new Date()}</lastmod>`,
    "</url>",
    // index page, or /blog page
    "<url>",
    `<loc>${url.origin}/blog</loc>`,
    `<lastmod>${/* @__PURE__ */ new Date()}</lastmod>`,
    "</url>",
    ...postItems,
    "</urlset>"
  ];
  return new Response(xml.join(""), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "x-content-type-options": "nosniff"
    }
  });
};

// app/routes/feed[.]atom.tsx
var feed_atom_exports = {};
__export(feed_atom_exports, {
  loader: () => loader5
});

// app/utils/feed.server.ts
var import_feed = require("feed");
var generateFeed = async () => {
  let feed = new import_feed.Feed({
    title: "Blissmo blog",
    description: "\xA1Mantente notificado de nuevos posts!",
    id: "https://curso-blog-remix.netlify.app",
    link: "https://curso-blog-remix.netlify.app",
    language: "es",
    // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
    image: "https://i.imgur.com/LywcMSq.png",
    favicon: "https://i.imgur.com/nVMrb56.png",
    copyright: "All rights reserved 2023, H\xE9ctorbliss",
    updated: new Date(2023, 6, 24),
    // optional, default = today
    feedLinks: {
      json: "https://curso-blog-remix.netlify.app/json",
      atom: "https://curso-blog-remix.netlify.app/atom",
      rss: "https://curso-blog-remix.netlify.app/rss2.xml"
    },
    author: {
      name: "H\xE9ctorbliss",
      email: "fixtergeek@gmail.com",
      link: "https://hectorbliss.com"
    }
  });
  return (await db.post.findMany({
    where: { published: !0 },
    include: { author: !0 }
  })).forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `https://curso-blog-remix.netlify.app/blog/${post.slug}`,
      link: `https://curso-blog-remix.netlify.app/blog/${post.slug}`,
      description: post.body.slice(1, 30),
      content: post.body,
      author: [
        {
          name: post.author.name ?? "",
          email: post.author.email,
          link: post.author.email
        }
      ],
      contributor: [
        {
          name: "Brenda Ortega",
          email: "brenda@fixter.org",
          link: "https://www.brendago.design/"
        }
      ],
      date: post.createdAt,
      image: post.cover ?? ""
    });
  }), feed;
}, getFeed = async (type = "rss2") => {
  let feed = await generateFeed();
  return type === "rss2" ? feed.rss2() : type === "atom1" ? feed.atom1() : feed.json1();
};

// app/routes/feed[.]atom.tsx
var loader5 = async () => {
  let feed = await getFeed("atom1");
  return new Response(feed, {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
      "x-content-type-options": "nosniff"
    }
  });
};

// app/routes/feed[.]json.tsx
var feed_json_exports = {};
__export(feed_json_exports, {
  loader: () => loader6
});
var loader6 = async () => {
  let feed = await getFeed("json1");
  return new Response(feed, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-content-type-options": "nosniff"
    }
  });
};

// app/routes/feed[.]xml.tsx
var feed_xml_exports = {};
__export(feed_xml_exports, {
  loader: () => loader7
});
var loader7 = async () => {
  let feed = await getFeed("rss2");
  return new Response(feed, {
    headers: {
      "Content-Type": "application/rss+xml;  charset=utf-8",
      "x-content-type-options": "nosniff"
    }
  });
};

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  loader: () => loader8,
  meta: () => meta3
});
var import_react12 = require("@remix-run/react"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), NODE_ENV = "development", GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID, meta3 = () => [
  { title: "Construye un blog con Remix" },
  { name: "description", content: "Hola blissmo" }
], loader8 = async () => (console.log("NODENV: ", NODE_ENV), { NODE_ENV, GOOGLE_CLIENT_ID });
function Index() {
  let { NODE_ENV: NODE_ENV2, GOOGLE_CLIENT_ID: GOOGLE_CLIENT_ID2 } = (0, import_react12.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex min-h-screen main", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      "div",
      {
        id: "g_id_onload",
        "data-client_id": GOOGLE_CLIENT_ID2,
        "data-login_uri": NODE_ENV2 === "development" ? "http://localhost:3000/login" : "https://curso-blog-remix.netlify.app/login",
        "data-cancel_on_tap_outside": "false"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 23,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      "div",
      {
        dangerouslySetInnerHTML: {
          __html: ' <script src="https://accounts.google.com/gsi/client" async defer></script>'
        }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 33,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "text-xs absolute bottom-[36%] text-gray-500 w-full left-0 text-center pr-8", children: "Culaquier otro t\xE9rmino y condici\xF3n necesario de mencionar" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action2,
  default: () => Login,
  loader: () => loader9
});
var import_node4 = require("@remix-run/node"), import_react13 = require("@remix-run/react");

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
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), action2 = async ({ request }) => {
  let formData = await request.formData(), body = Object.fromEntries(formData), data = {
    credential: String(body.credential),
    g_csrf_token: String(body.g_csrf_token)
  };
  if (!oneTapDataSchema.safeParse(data).success)
    return null;
  let user = await getOrCreateUser(data.credential), session = await getSession(request.headers.get("Cookie"));
  return session.set("userId", user.id), (0, import_node4.redirect)("/dash", {
    headers: { "Set-Cookie": await commitSession(session) }
  });
}, loader9 = async () => ({
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  REDIRECT_URL: "http://localhost:3000/login"
});
function Login() {
  let { GOOGLE_CLIENT_ID: GOOGLE_CLIENT_ID2, REDIRECT_URL } = (0, import_react13.useLoaderData)();
  return console.log("ORA? ", GOOGLE_CLIENT_ID2, REDIRECT_URL), /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex justify-center items-center py-20 border-red-500", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      "div",
      {
        id: "g_id_onload",
        "data-client_id": GOOGLE_CLIENT_ID2,
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h2", { className: "text-6xl font-bold uppercase", children: "Inciando sesi\xF3n" }, void 0, !1, {
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

// app/routes/dash.tsx
var dash_exports = {};
__export(dash_exports, {
  action: () => action3,
  default: () => Dash,
  loader: () => loader10
});
var import_node5 = require("@remix-run/node"), import_react15 = require("@remix-run/react"), import_slugify2 = __toESM(require("slugify"));

// app/components/PostCard.tsx
var import_react14 = require("@remix-run/react"), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), PostCard = ({
  title,
  id
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
  import_react14.Link,
  {
    to: `${id}/edit`,
    className: "p-4 rounded-md border border-indigo-500 w-[300px] hover:ring-indigo-500 hover:ring ",
    children: title
  },
  void 0,
  !1,
  {
    fileName: "app/components/PostCard.tsx",
    lineNumber: 11,
    columnNumber: 5
  },
  this
);

// app/routes/dash.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), action3 = async ({ request }) => {
  if ((await request.formData()).get("intent") === "new-post") {
    let post = await db.post.create({
      data: {
        userId: "648ce85a2e43deef9f5b7a87",
        //@TODO from cookie
        slug: (0, import_slugify2.default)("nuevo-post-" + Date.now())
      }
    });
    throw (0, import_node5.redirect)(`/dash/${post.id}/edit`);
  }
  return null;
}, loader10 = async ({ request }) => ({ posts: await db.post.findMany() });
function Dash() {
  let { posts } = (0, import_react15.useLoaderData)(), navigation = (0, import_react15.useNavigation)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("article", { className: "dark:bg-slate-800 min-h-screen dark:text-gray-200 py-20", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("nav", { className: "flex justify-between items-center max-w-3xl mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h2", { className: "block text-3xl font-bold mt-4 px-4 text-left", children: "Todos tus posts" }, void 0, !1, {
          fileName: "app/routes/dash.tsx",
          lineNumber: 41,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "px-4 text-md font-thin", children: "Administra tu blog" }, void 0, !1, {
          fileName: "app/routes/dash.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dash.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react15.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
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
          lineNumber: 47,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/dash.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dash.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("section", { className: "max-w-3xl mx-auto flex flex-wrap gap-2 py-20 ", children: posts.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(PostCard, { id: p.id, title: p.title }, p.id, !1, {
      fileName: "app/routes/dash.tsx",
      lineNumber: 60,
      columnNumber: 11
    }, this)) }, void 0, !1, {
      fileName: "app/routes/dash.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dash.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-JBK2USCT.js", imports: ["/build/_shared/chunk-BRZVTI7R.js", "/build/_shared/chunk-IU43IUTG.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-OSQXG5W3.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-SVTBOA2T.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog": { id: "routes/blog", parentId: "root", path: "blog", index: void 0, caseSensitive: void 0, module: "/build/routes/blog-TQ6S5OLS.js", imports: ["/build/_shared/chunk-D6UNJOYD.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog_.$postSlug": { id: "routes/blog_.$postSlug", parentId: "root", path: "blog/:postSlug", index: void 0, caseSensitive: void 0, module: "/build/routes/blog_.$postSlug-HZQP54LC.js", imports: ["/build/_shared/chunk-D6UNJOYD.js", "/build/_shared/chunk-XC2LHOCN.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dash": { id: "routes/dash", parentId: "root", path: "dash", index: void 0, caseSensitive: void 0, module: "/build/routes/dash-4BUDBPAP.js", imports: ["/build/_shared/chunk-HU7KUH4M.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dash_.$postId.edit": { id: "routes/dash_.$postId.edit", parentId: "root", path: "dash/:postId/edit", index: void 0, caseSensitive: void 0, module: "/build/routes/dash_.$postId.edit-MQ4YE3MA.js", imports: ["/build/_shared/chunk-HU7KUH4M.js", "/build/_shared/chunk-IJE56NN4.js", "/build/_shared/chunk-3Q5YI4PV.js", "/build/_shared/chunk-DH7N3OP2.js", "/build/_shared/chunk-FJDG65RN.js", "/build/_shared/chunk-TRU2QQSN.js", "/build/_shared/chunk-ITK5DZIN.js", "/build/_shared/chunk-XC2LHOCN.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/feed[.]atom": { id: "routes/feed[.]atom", parentId: "root", path: "feed.atom", index: void 0, caseSensitive: void 0, module: "/build/routes/feed[.]atom-5QBXDB6R.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/feed[.]json": { id: "routes/feed[.]json", parentId: "root", path: "feed.json", index: void 0, caseSensitive: void 0, module: "/build/routes/feed[.]json-M6N7EEBK.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/feed[.]xml": { id: "routes/feed[.]xml", parentId: "root", path: "feed.xml", index: void 0, caseSensitive: void 0, module: "/build/routes/feed[.]xml-ALQ4HW2Z.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-C2EPNX27.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sitemap[.]xml": { id: "routes/sitemap[.]xml", parentId: "root", path: "sitemap.xml", index: void 0, caseSensitive: void 0, module: "/build/routes/sitemap[.]xml-FCQIAROB.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "200573fe", hmr: void 0, url: "/build/manifest-200573FE.js" };

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
