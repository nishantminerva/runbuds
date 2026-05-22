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
        <title>Terms of Use — Backline</title>
      </Head>
      <div className="content">
        <a href="/" className="back-btn">← Back</a>
        <h1 className="page-title">Terms of Use</h1>
        <div className="terms-content">
          <p>
            <strong>Last updated:</strong> May 2026
          </p>
          <p>
            By using Backline you agree to these Terms of Use. If you do not
            agree, please do not use the app.
          </p>

          <h2>Using the app</h2>
          <p>
            You must be at least 18 years old to create a tour workspace. You
            are responsible for the accuracy of advance details, contracts,
            and crew records you upload, and for following local laws while
            using the app on the road.
          </p>

          <h2>Roles and permissions</h2>
          <p>
            Tour managers can invite artists, crew, and vendors into a
            workspace and assign roles. Each role only sees the data
            appropriate to it — for example, drivers see day-sheets and
            venue addresses but not financials.
          </p>

          <h2>Content</h2>
          <p>
            You retain ownership of the tour data, contracts, and stage plots
            you upload. By using Backline you grant us a license to display
            that content within the app to the workspace members you choose.
          </p>

          <h2>Termination</h2>
          <p>
            We may suspend or terminate workspaces that violate these terms,
            misuse vendor contact information, or infringe on third-party
            rights.
          </p>

          <h2>Contact</h2>
          <p>
            Questions? Email us at{" "}
            <a className="eula-link" href="mailto:hello@backline.app">
              hello@backline.app
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}
