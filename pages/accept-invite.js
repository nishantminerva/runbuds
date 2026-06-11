import Head from "next/head";
import { useEffect, useState } from "react";

// Fallback landing page for tour invitation links. On a device with the app
// installed, the verified App Link (https://advancetouring.app/accept-invite)
// is intercepted by the OS and this page never loads. It only renders when
// the app couldn't handle the link — e.g. opened on desktop, or the app
// isn't installed. In that case we hand off to the app via its custom
// scheme, carrying the ?inviteCode=... query along untouched, and show the
// 8-character code so the invitee can also type it in manually.
const APP_SCHEME_URL = "advancetouring://accept-invite";

export default function AcceptInvite() {
  const [appUrl, setAppUrl] = useState(APP_SCHEME_URL);
  const [inviteCode, setInviteCode] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = (params.get("inviteCode") || params.get("code") || "").trim();
    setInviteCode(code);

    const target = APP_SCHEME_URL + window.location.search;
    setAppUrl(target);
    // Attempt an automatic hand-off to the app. Harmless if the app isn't
    // installed: the browser stays on this page and the message below shows.
    window.location.replace(target);
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
          Open the Advance app to join the tour. If it didn&rsquo;t open
          automatically, tap the button below.
        </p>
        <p>
          <a className="eula-link" href={appUrl}>
            Open Advance
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
