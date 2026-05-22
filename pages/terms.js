import Head from "next/head";
import { useEffect } from "react";

export default function Terms() {
  useEffect(() => {
    document.body.classList.add("legal-page");
    return () => document.body.classList.remove("legal-page");
  }, []);

  return (
    <>
      <Head>
        <title>Terms of Use — Runbuds</title>
      </Head>
      <div className="content">
        <a href="/" className="back-btn">← Back</a>
        <h1 className="page-title">Terms of Use</h1>
        <div className="terms-content">
          <p>
            <strong>Last updated:</strong> May 2026
          </p>
          <p>
            By using Runbuds you agree to these Terms of Use. If you do not
            agree, please do not use the app.
          </p>

          <h2>Using the app</h2>
          <p>
            You must be at least 13 years old to use Runbuds. You are
            responsible for activity on your account and for following local
            laws while using the app.
          </p>

          <h2>Content</h2>
          <p>
            You retain ownership of the content you share. By posting in
            Runbuds you grant us a license to display it within the app to
            your running buddies.
          </p>

          <h2>Termination</h2>
          <p>
            We may suspend or terminate accounts that violate these terms.
          </p>

          <h2>Contact</h2>
          <p>
            Questions? Email us at{" "}
            <a className="eula-link" href="mailto:hello@runbuds.app">
              hello@runbuds.app
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}
