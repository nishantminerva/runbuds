import Head from "next/head";
import { useState } from "react";

const BOARD_ROWS = [
  {
    time: "06:30",
    dest: "PARIS · LE TRIANON",
    gate: "G17",
    status: "BOARDING",
    state: "boarding",
  },
  {
    time: "14:00",
    dest: "PARIS · SOUNDCHECK",
    gate: "FOH",
    status: "ON STAGE",
    state: "live",
  },
  {
    time: "20:00",
    dest: "PARIS · DOORS",
    gate: "VEN",
    status: "SCHEDULED",
    state: "ok",
  },
  {
    time: "23:30",
    dest: "PARIS · LOAD-OUT",
    gate: "BCK",
    status: "SCHEDULED",
    state: "ok",
  },
  {
    time: "01:00",
    dest: "LYON · TRANSFER",
    gate: "BUS",
    status: "QUEUED",
    state: "queued",
  },
  {
    time: "09:00",
    dest: "LYON · CHECK-IN",
    gate: "HTL",
    status: "QUEUED",
    state: "queued",
  },
  {
    time: "14:00",
    dest: "LYON · SOUNDCHECK",
    gate: "FOH",
    status: "QUEUED",
    state: "queued",
  },
];

export default function Home() {
  const [hover, setHover] = useState(false);

  const onEnter = () => setHover(true);
  const onLeave = () => setHover(false);

  return (
    <>
      <Head>
        <title>Backline</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
      </Head>

      <div className="tour-scene" aria-hidden="true">
        <div className="flight-board">
          <div className="board-header">
            <span className="board-title">
              <span className="board-dot" />
              TOUR · DEPARTURES
            </span>
            <span className="board-meta">
              <span className="flap-cell flap-clock">TUE&nbsp;14:32</span>
            </span>
          </div>

          <div className="board-columns">
            <span>TIME</span>
            <span>DESTINATION</span>
            <span>GATE</span>
            <span>STATUS</span>
          </div>

          <div className="board-rows">
            {BOARD_ROWS.map((r, i) => (
              <div
                key={i}
                className={`board-row state-${r.state}`}
                style={{ animationDelay: `${i * 0.4}s` }}
              >
                <span
                  className="flap-cell"
                  style={{ animationDelay: `${i * 0.7 + 0.1}s` }}
                >
                  {r.time}
                </span>
                <span
                  className="flap-cell flap-dest"
                  style={{ animationDelay: `${i * 0.9 + 0.4}s` }}
                >
                  {r.dest}
                </span>
                <span
                  className="flap-cell"
                  style={{ animationDelay: `${i * 0.7 + 0.7}s` }}
                >
                  {r.gate}
                </span>
                <span
                  className={`flap-cell flap-status status-${r.state}`}
                  style={{ animationDelay: `${i * 0.5 + 0.2}s` }}
                >
                  {r.status}
                </span>
              </div>
            ))}
          </div>

          <div className="board-footer">
            <span className="board-led led-on" />
            <span className="board-led led-on" />
            <span className="board-led led-on" />
            <span className="board-footer-text">
              ALEX RIVERA · TOUR MGR · LEG 12 OF 23
            </span>
            <span className="board-led led-blink" />
          </div>
        </div>

        {/* Boarding pass clipped to the board */}
        <div className="boarding-pass">
          <div className="bp-left">
            <span className="bp-tag">BOARDING PASS</span>
            <span className="bp-name">ALEX RIVERA</span>
            <span className="bp-role">TOUR MANAGER · @alex_tm</span>
          </div>
          <div className="bp-right">
            <span className="bp-route">BER → CDG</span>
            <span className="bp-seat">SEAT 14A</span>
            <span className="bp-stripes">
              <span /><span /><span /><span /><span />
            </span>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="text-container">
          <img
            src="/images/backline-logo.svg"
            alt="Backline"
            className="app-logo"
          />
        </div>

        <div
          className={`icon-container${hover ? " qr-state" : ""}`}
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
        >
          <div className="icon-view">
            <img
              src="/images/backline-appicon.svg"
              alt="Backline App Icon"
              className="appicon"
            />
            <img
              src="/images/backline-qr.svg"
              alt="Backline QR Code"
              className="qrcode"
            />
          </div>
        </div>

        <a
          id="download-btn"
          className={`download-btn${hover ? " qr-state" : ""}`}
          href="#"
          target="_blank"
          rel="noopener"
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
        >
          <div className="button-text-container">
            <span className="download-text">
              <svg
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.564 13.271c-.025-2.568 2.099-3.797 2.192-3.854-1.197-1.748-3.06-1.99-3.715-2.017-1.58-.16-3.086.927-3.887.927-.8 0-2.027-.904-3.34-.88-1.72.025-3.312 1.002-4.195 2.544-1.797 3.116-.459 7.73 1.29 10.26.857 1.23 1.872 2.61 3.21 2.56 1.297-.053 1.785-.828 3.353-.828 1.567 0 1.995.828 3.36.803 1.393-.025 2.267-1.25 3.12-2.48.98-1.426 1.386-2.81 1.41-2.88-.03-.014-2.71-1.04-2.736-4.09zm-3.23-7.47c.71-.86 1.19-2.06 1.06-3.26-1.02.04-2.25.68-2.98 1.54-.65.75-1.23 1.96-1.01 3.12 1.13.09 2.29-.57 2.93-1.4z" />
              </svg>
              Download for iOS
            </span>
            <span className="scan-text">Scan QR Code</span>
          </div>
        </a>

        <div className="legal-links legal-links-desktop">
          <a href="/privacy" className="legal-link">
            Privacy Policy
          </a>
          <a href="/terms" className="legal-link">
            Terms of Use
          </a>
        </div>
      </div>

      <div className="legal-links legal-links-mobile">
        <a href="/privacy" className="legal-link">
          Privacy Policy
        </a>
        <a href="/terms" className="legal-link">
          Terms of Use
        </a>
      </div>
    </>
  );
}
