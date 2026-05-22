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
        <title>Privacy Policy — Advance</title>
      </Head>
      <div className="content">
        <a href="/" className="back-btn">← Back</a>
        <h1 className="page-title">Privacy Policy</h1>
        <div className="terms-content">
          <p>
            <strong>Last updated:</strong> May 2026
          </p>
          <p>
            Advance (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;)
            helps tour managers, artists, and crew run shows together. This
            Privacy Policy explains what we collect, how we use it, and the
            choices you have.
          </p>

          <h2>Information we collect</h2>
          <ul>
            <li>Account information: name, email, role (manager, artist, crew, vendor)</li>
            <li>Tour data you enter: dates, venues, advance details, schedules</li>
            <li>Crew records: contact details, day rates, per diems, and roles</li>
            <li>Advance and stage plot information you upload</li>
            <li>Device and usage information used to operate the app</li>
          </ul>

          <h2>How we use information</h2>
          <p>
            We use your information to coordinate tour logistics, share
            day-sheets with the right people on your crew, and improve the
            product. Tour data is only visible to members of that tour&apos;s
            workspace.
          </p>

          <h2>Sharing with venues and vendors</h2>
          <p>
            When you send an advance to a venue or hire a vendor through
            Advance, we share only the fields you choose (e.g. stage plot,
            input list, hospitality rider) — never your full crew roster.
          </p>

          <h2>Your choices</h2>
          <p>
            You can leave or delete a tour workspace at any time. Deleting a
            workspace permanently removes its schedule, advance documents, and
            crew records.
          </p>

          <h2>Contact</h2>
          <p>
            Questions? Email us at{" "}
            <a className="eula-link" href="mailto:hello@advancetouring.app">
              hello@advancetouring.app
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}
