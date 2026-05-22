import Head from "next/head";
import { useState } from "react";

const CREW = [
  {
    emoji: "🧑🏻‍💼",
    name: "Alex Rivera",
    role: "Tour Mgr",
    taskIcon: "📋",
    task: "Advancing Lyon",
    status: "online",
    x: 6,
    y: 12,
  },
  {
    emoji: "👨🏾‍🎤",
    name: "Marcus",
    role: "Lead Vocals",
    taskIcon: "🎤",
    task: "Warm-up · GR3",
    status: "online",
    x: 22,
    y: 26,
  },
  {
    emoji: "👩🏼‍🦰",
    name: "Maya Chen",
    role: "FOH Engineer",
    taskIcon: "🎚️",
    task: "Soundcheck · live",
    status: "live",
    x: 38,
    y: 8,
  },
  {
    emoji: "🧔🏽",
    name: "Dre Patel",
    role: "Backline",
    taskIcon: "🎸",
    task: "Tuning rigs",
    status: "online",
    x: 60,
    y: 24,
  },
  {
    emoji: "👨🏼‍✈️",
    name: "Lex Morgan",
    role: "Driver",
    taskIcon: "🚐",
    task: "ETA 30 min",
    status: "transit",
    x: 76,
    y: 10,
  },
  {
    emoji: "👩🏿‍🦱",
    name: "Rosa Vega",
    role: "Stage Mgr",
    taskIcon: "📻",
    task: "Comms open",
    status: "online",
    x: 92,
    y: 24,
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
        {/* Eyebrow */}
        <div className="route-eyebrow">
          <span className="route-eyebrow-dot" />
          BACKLINE · LIVE TOUR · TUE 14
        </div>

        {/* The wavy tour route path */}
        <svg
          className="route-svg"
          viewBox="0 0 100 30"
          preserveAspectRatio="none"
        >
          <path
            d="M 0 18 Q 14 4, 28 22 T 56 16 T 84 14 T 100 22"
            fill="none"
            stroke="rgba(245, 166, 35, 0.32)"
            strokeWidth="0.35"
            strokeDasharray="0.8 0.9"
          />
        </svg>

        {/* Crew memoji avatars along the route */}
        {CREW.map((m, i) => (
          <div
            key={i}
            className="crew-pin"
            style={{
              left: `${m.x}%`,
              top: `${m.y}%`,
              animationDelay: `${i * 0.4}s`,
            }}
          >
            <div className={`memoji-badge memoji-${i}`}>
              <span className="memoji">{m.emoji}</span>
              <span className={`status-dot status-${m.status}`} />
            </div>
            <div className="crew-card">
              <span className="crew-name">{m.name}</span>
              <span className="crew-role">{m.role}</span>
              <span className="crew-task">
                <span className="crew-task-icon">{m.taskIcon}</span>
                {m.task}
              </span>
            </div>
          </div>
        ))}

        {/* Live now status bar */}
        <div className="live-bar">
          <div className="live-bar-led" />
          <div className="live-bar-text">
            <span className="live-bar-label">LIVE NOW</span>
            <span className="live-bar-task">
              🎚️ Soundcheck · 14:00 · Le Trianon, Paris
            </span>
          </div>
          <div className="live-bar-spark">
            <span /><span /><span /><span /><span /><span /><span />
          </div>
          <div className="live-bar-count">
            <span className="live-bar-count-num">6</span>
            <span className="live-bar-count-lbl">CREW ONLINE</span>
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
