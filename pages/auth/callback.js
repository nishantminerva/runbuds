import Head from "next/head";
import { useEffect, useState } from "react";

import { detectPlatform } from "../../lib/detectPlatform";

// Fallback landing page for the OAuth/sign-in redirect. On a device with the
// app installed, the verified App Link (https://advancetouring.app/auth/callback)
// is intercepted by the OS and this page never loads. It only renders when the
// app couldn't handle the link — e.g. opened on desktop, or the app isn't
// installed.
//
// Hand-off rules (see lib/detectPlatform.js):
//   * iPhone / iPad / Android → the native app via its custom scheme, carrying
//     the auth params (?code=... or #access_token=...) along untouched.
//   * Mac → no auto-redirect: the iPad app may be installed (Apple Silicon),
//     so the user chooses between opening the app and continuing in the
//     browser. Both links carry the auth params.
//   * Other desktop (Windows/Linux) → the web app.
const APP_SCHEME_URL = "advancetouring://auth/callback";
const WEB_APP_URL = "https://app.advancetouring.app/auth/callback";

export default function AuthCallback() {
  const [appUrl, setAppUrl] = useState(APP_SCHEME_URL);
  const [webUrl, setWebUrl] = useState(WEB_APP_URL);
  const [platform, setPlatform] = useState(null);

  useEffect(() => {
    // Preserve both the query string and the URL fragment — the fragment holds
    // the tokens in the implicit flow and never reaches the server. Re-read on
    // hashchange so a fragment applied after load still reaches the buttons.
    const currentParams = () => window.location.search + window.location.hash;
    const syncTargets = () => {
      setAppUrl(APP_SCHEME_URL + currentParams());
      setWebUrl(WEB_APP_URL + currentParams());
    };
    syncTargets();
    window.addEventListener("hashchange", syncTargets);

    const detected = detectPlatform();
    setPlatform(detected);

    if (detected === "mobile") {
      // Attempt an automatic hand-off to the app. Harmless if the app isn't
      // installed: the browser stays on this page and the message below shows.
      window.location.replace(APP_SCHEME_URL + currentParams());
    } else if (detected === "desktop") {
      // No native app on Windows/Linux — continue the sign-in in the web app.
      window.location.replace(WEB_APP_URL + currentParams());
    }
    // "mac": stay here and let the user choose below.

    return () => window.removeEventListener("hashchange", syncTargets);
  }, []);

  return (
    <>
      <Head>
        <title>Signing in — Advance</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="content">
        <h1 className="page-title">
          {platform === "mac" ? "Where would you like to continue?" : "Signing you in…"}
        </h1>
        <p>
          {platform === "mac"
            ? "Continue in the Advance app if you have it installed, or keep going in your browser."
            : "You can return to the Advance app to continue. If it didn’t reopen automatically, tap a button below."}
        </p>
        <p>
          <a className="eula-link" href={appUrl}>
            Open the Advance app
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
