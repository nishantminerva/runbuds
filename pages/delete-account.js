import Head from "next/head";
import { useEffect } from "react";

export default function DeleteAccount() {
  useEffect(() => {
    document.body.classList.add("legal-page");
    return () => document.body.classList.remove("legal-page");
  }, []);

  return (
    <>
      <Head>
        <title>Delete Your Account — Advance</title>
      </Head>
      <div className="content">
        <a href="/" className="back-btn">← Back</a>
        <h1 className="page-title">Account &amp; Data Deletion</h1>
        <div className="terms-content">
          <p>
            <strong>Last updated:</strong> July 2026
          </p>
          <p>
            This page explains how to delete your <strong>Advance</strong>{" "}
            account, what data is removed, and how long anything is kept. Advance
            is operated by Advance Touring.
          </p>

          <h2>Delete your account from inside the app</h2>
          <p>
            The fastest way to permanently delete your account is directly in the
            Advance app:
          </p>
          <ul>
            <li>Open the Advance app and sign in with the account you want to delete.</li>
            <li>Tap the <strong>Profile</strong> tab, then scroll to the bottom of the screen.</li>
            <li>Tap <strong>Delete Account</strong> and confirm when prompted.</li>
            <li>
              Once confirmed, your account and associated data are permanently
              erased. This cannot be undone.
            </li>
          </ul>

          <h2>Prefer to request it by email?</h2>
          <p>
            If you can&apos;t sign in, email{" "}
            <a className="eula-link" href="mailto:hello@advancetouring.app">
              hello@advancetouring.app
            </a>{" "}
            from the address on your Advance account with the subject
            &ldquo;Delete my account.&rdquo; We&apos;ll verify ownership and
            complete the deletion within 30 days.
          </p>

          <h2>What is deleted</h2>
          <p>
            When you delete your account, Advance permanently removes all of the
            following, immediately:
          </p>
          <ul>
            <li>Your account and sign-in identity (email, Google, or Apple)</li>
            <li>Profile details (name and contact information)</li>
            <li>Your profile photo</li>
            <li>Travel profile (travel details, emergency contact, and memberships)</li>
            <li>Uploaded documents (travel and artist documents)</li>
            <li>Your push-notification token</li>
          </ul>

          <h2>What is kept, and for how long</h2>
          <p>
            Residual copies of your data may remain in our encrypted backups and
            are purged within <strong>30 days</strong> of deletion. Location data
            is used only while you view maps in the app and is never stored on our
            servers. After the retention window above, no personal data tied to
            your account remains.
          </p>

          <h2>Contact</h2>
          <p>
            Questions? Email us at{" "}
            <a className="eula-link" href="mailto:hello@advancetouring.app">
              hello@advancetouring.app
            </a>
            . See also our <a className="eula-link" href="/privacy">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </>
  );
}
