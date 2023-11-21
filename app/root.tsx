import type { LinksFunction } from "@remix-run/node";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";
import { cssBundleHref } from "@remix-run/css-bundle";

// css
import globalStyles from "~/styles/global.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: globalStyles },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
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
        {process.env.NODE_ENV === "development" && <LiveReload />}
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div style={{ padding: "0px 20px" }}>
        <h1>Error</h1>
        <p
          style={{
            textDecoration: "underline dotted #000",
          }}
        >
          {error.message}
        </p>
        <p>The stack trace is:</p>
        <pre
          style={{
            padding: "10px 10px",
            backgroundColor: "rgba(255, 0, 0, 0.199)",
          }}
        >
          {error.stack}
        </pre>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}
