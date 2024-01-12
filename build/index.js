var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// src/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
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
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "src/entry.server.tsx",
          lineNumber: 51,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
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
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "src/entry.server.tsx",
          lineNumber: 101,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
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

// src/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

// node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min_default = "/build/_assets/bootstrap.min-SRUCQ2PX.css";

// src/app/styles/gobal.css
var gobal_default = "/build/_assets/gobal-WYJNOOGF.css";

// src/pages/Home/styles/main.css
var main_default = "/build/_assets/main-IILUHMRY.css";

// src/root.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
  {
    rel: "stylesheet",
    href: bootstrap_min_default
  },
  {
    rel: "stylesheet",
    href: gobal_default
  },
  {
    rel: "stylesheet",
    href: main_default
  }
];
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "src/root.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "src/root.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "src/root.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "src/root.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "src/root.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "src/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "src/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "src/root.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "src/root.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "src/root.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "src/root.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, this);
}

// src/app/routes/home/index.tsx
var home_exports = {};
__export(home_exports, {
  default: () => Index
});

// src/pages/Home/ui/Home.tsx
import { Fragment, jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var Home = () => /* @__PURE__ */ jsxDEV3(Fragment, { children: /* @__PURE__ */ jsxDEV3("div", { className: "container mt-5 pt-5 mx-auto", children: [
  /* @__PURE__ */ jsxDEV3("h1", { className: "text text-center", children: "Empty Remix File" }, void 0, !1, {
    fileName: "src/pages/Home/ui/Home.tsx",
    lineNumber: 6,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ jsxDEV3("button", { className: "btn btn-danger d-flex justify-content-center mx-auto", children: "START REMIX" }, void 0, !1, {
    fileName: "src/pages/Home/ui/Home.tsx",
    lineNumber: 7,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "src/pages/Home/ui/Home.tsx",
  lineNumber: 5,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "src/pages/Home/ui/Home.tsx",
  lineNumber: 4,
  columnNumber: 5
}, this);

// src/app/routes/home/index.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
function Index() {
  return /* @__PURE__ */ jsxDEV4(Home, {}, void 0, !1, {
    fileName: "src/app/routes/home/index.tsx",
    lineNumber: 3,
    columnNumber: 10
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-EO64RIVU.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-LB45DEVR.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-532HDAD4.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { "app/routes/home/index": { id: "app/routes/home/index", parentId: "root", path: "/", index: !0, caseSensitive: void 0, module: "/build/app/routes/home/index-VLBY37TH.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-MFQCEGR4.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "10e4c64c", hmr: { runtime: "/build/_shared/chunk-532HDAD4.js", timestamp: 1705075789790 }, url: "/build/manifest-10E4C64C.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "app/routes/home/index": {
    id: "app/routes/home/index",
    parentId: "root",
    path: "/",
    index: !0,
    caseSensitive: void 0,
    module: home_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
