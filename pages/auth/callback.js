import Head from "next/head";
import { useEffect, useState } from "react";

// Fallback landing page for the OAuth/sign-in redirect. On a device with the
// app installed, the verified App Link (https://advancetouring.app/auth/callback)
// is intercepted by the OS and this page never loads. It only renders when the
// app couldn't handle the link — e.g. opened on desktop, or the app isn't
// installed.
//
// Hand-off rules:
//   * iOS/Android → the native app via its custom scheme, carrying the auth
//     params (?code=... or #access_token=...) along untouched.
//   * Desktop browsers → the web app (app.advancetouring.app), same params.
//     Firing the custom scheme on desktop would try to open an installed app
//     that isn't there (or shouldn't handle a web sign-in).
const APP_SCHEME_URL = "advancetouring://auth/callback";
const WEB_APP_URL = "https://app.advancetouring.app/auth/callback";

function isMobileDevice() {
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

export default function AuthCallback() {
  const [appUrl, setAppUrl] = useState(APP_SCHEME_URL);
  const [webUrl, setWebUrl] = useState(WEB_APP_URL);

  useEffect(() => {
    // Preserve both the query string and the URL fragment — the fragment holds
    // the tokens in the implicit flow and never reaches the server.
    const params = window.location.search + window.location.hash;
    const schemeTarget = APP_SCHEME_URL + params;
    const webTarget = WEB_APP_URL + params;
    setAppUrl(schemeTarget);
    setWebUrl(webTarget);

    if (isMobileDevice()) {
      // Attempt an automatic hand-off to the app. Harmless if the app isn't
      // installed: the browser stays on this page and the message below shows.
      window.location.replace(schemeTarget);
    } else {
      // Desktop: continue the sign-in in the web app.
      window.location.replace(webTarget);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Signing in — Advance</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="content">
        <h1 className="page-title">Signing you in…</h1>
        <p>
          You can return to the Advance app to continue. If it didn’t reopen
          automatically, tap the button below.
        </p>
        <p>
          <a className="eula-link" href={appUrl}>
            Open Advance
          </a>
        </p>
        <p>
          <a className="eula-link" href={webUrl}>
            Continue in the browser
          </a>
        </p>
      </div>
    </>
  );
}
