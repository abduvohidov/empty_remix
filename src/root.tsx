import type { LinksFunction } from "@remix-run/node";
import { cssBundleHref } from "@remix-run/css-bundle";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import BootstrapCss from "bootstrap/dist/css/bootstrap.min.css";
import GlobalCss from "./app/styles/gobal.css";
import HomeMainCss from "./pages/Home/styles/main.css";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: BootstrapCss,
  },
  {
    rel: "stylesheet",
    href: GlobalCss,
  },
  {
    rel: "stylesheet",
    href: HomeMainCss,
  },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
