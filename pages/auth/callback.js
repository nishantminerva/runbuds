import Head from "next/head";
import { useEffect, useState } from "react";

// Fallback landing page for the OAuth/sign-in redirect. On a device with the
// app installed, the verified App Link (https://advancetouring.app/auth/callback)
// is intercepted by the OS and this page never loads. It only renders when the
// app couldn't handle the link — e.g. opened on desktop, or the app isn't
// installed. In that case we hand off to the app via its custom scheme,
// carrying the auth params (?code=... or #access_token=...) along untouched.
const APP_SCHEME_URL = "advancetouring://auth/callback";

export default function AuthCallback() {
  const [appUrl, setAppUrl] = useState(APP_SCHEME_URL);

  useEffect(() => {
    // Preserve both the query string and the URL fragment — the fragment holds
    // the tokens in the implicit flow and never reaches the server.
    const target = APP_SCHEME_URL + window.location.search + window.location.hash;
    setAppUrl(target);
    // Attempt an automatic hand-off to the app. Harmless if the app isn't
    // installed: the browser stays on this page and the message below shows.
    window.location.replace(target);
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
      </div>
    </>
  );
}
