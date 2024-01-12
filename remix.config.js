/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  appDirectory: "src",
  routes(defineRoutes) {
    return defineRoutes((route) => {
      route("/", "routes/home/index.tsx", { index: true });
    });
  },
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js",
};
