import Head from "next/head";
import { useEffect, useState } from "react";

import { detectPlatform } from "../lib/detectPlatform";

// Fallback landing page for tour invitation links. On a device with the app
// installed, the verified App Link (https://advancetouring.app/accept-invite)
// is intercepted by the OS and this page never loads. It only renders when
// the app couldn't handle the link — e.g. opened on desktop, or the app
// isn't installed. Mobile visitors are handed off to the app via its custom
// scheme, carrying the ?inviteCode=... query along untouched; desktop and Mac
// visitors can continue in the web app instead. The 8-character code is shown
// so the invitee can also type it in manually.
const APP_SCHEME_URL = "advancetouring://accept-invite";
const WEB_APP_URL = "https://app.advancetouring.app/accept-invite";

export default function AcceptInvite() {
  const [appUrl, setAppUrl] = useState(APP_SCHEME_URL);
  const [webUrl, setWebUrl] = useState(WEB_APP_URL);
  const [inviteCode, setInviteCode] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = (params.get("inviteCode") || params.get("code") || "").trim();
    setInviteCode(code);

    const schemeTarget = APP_SCHEME_URL + window.location.search;
    const webTarget = WEB_APP_URL + window.location.search;
    setAppUrl(schemeTarget);
    setWebUrl(webTarget);

    if (detectPlatform() === "mobile") {
      // Attempt an automatic hand-off to the app. Harmless if the app isn't
      // installed: the browser stays on this page and the message below shows.
      window.location.replace(schemeTarget);
    }
    // Mac and other desktops: stay here — the invitee chooses app or browser.
  }, []);

  return (
    <>
      <Head>
        <title>Join your tour — Advance</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="content">
        <h1 className="page-title">You&rsquo;re invited</h1>
        <p>
          Open the Advance app to join the tour, or continue in your browser.
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
        {inviteCode ? (
          <p>
            Or enter this code in the app:{" "}
            <strong style={{ fontFamily: "monospace", fontSize: "1.4em", letterSpacing: "2px" }}>
              {inviteCode}
            </strong>
          </p>
        ) : null}
        <p>
          Don&rsquo;t have the app yet? Install Advance, then enter the invite
          code from your email.
        </p>
      </div>
    </>
  );
}
