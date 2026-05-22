import Head from "next/head";
import { useEffect } from "react";

export default function Privacy() {
  useEffect(() => {
    document.body.classList.add("legal-page");
    return () => document.body.classList.remove("legal-page");
  }, []);

  return (
    <>
      <Head>
        <title>Privacy Policy — Runbuds</title>
      </Head>
      <div className="content">
        <a href="/" className="back-btn">← Back</a>
        <h1 className="page-title">Privacy Policy</h1>
        <div className="terms-content">
          <p>
            <strong>Last updated:</strong> May 2026
          </p>
          <p>
            Runbuds (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;)
            respects your privacy. This Privacy Policy explains what
            information we collect when you use the Runbuds app, how we use
            it, and the choices you have.
          </p>

          <h2>Information we collect</h2>
          <ul>
            <li>Account information you provide (name, email, profile photo)</li>
            <li>Workout activity (distance, pace, route, duration)</li>
            <li>Device and usage information used to operate the app</li>
          </ul>

          <h2>How we use information</h2>
          <p>
            We use your information to operate the app, sync activity between
            running buddies, and improve the product.
          </p>

          <h2>Your choices</h2>
          <p>
            You can delete your account at any time from the app settings.
            Deleting your account permanently removes your profile and
            activity history.
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
