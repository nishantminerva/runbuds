import Head from "next/head";
import { useState } from "react";

const ITINERARY = [
  { icon: "🛏️", day: "Mon 23:00", city: "Berlin", task: "Hotel check-in" },
  { icon: "✈️", day: "Tue 06:30", city: "BER → CDG", task: "Flight" },
  { icon: "🛬", day: "Tue 09:15", city: "Paris", task: "Landed" },
  { icon: "🚐", day: "Tue 10:00", city: "Le Trianon", task: "Drive to venue" },
  { icon: "🍽️", day: "Tue 13:00", city: "Backstage", task: "Catering" },
  { icon: "🎚️", day: "Tue 14:00", city: "FOH", task: "Soundcheck" },
  { icon: "🎤", day: "Tue 20:00", city: "Le Trianon", task: "Doors open" },
  { icon: "🎵", day: "Tue 21:00", city: "Le Trianon", task: "Show time" },
  { icon: "📦", day: "Tue 23:30", city: "Stage", task: "Load out" },
  { icon: "🚌", day: "Wed 01:00", city: "→ Lyon", task: "Roll to next city" },
];

const DAY_BEATS = [
  "✈️",
  "🏨",
  "🚐",
  "🎚️",
  "🎤",
  "📦",
  "🛏️",
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
        {/* Top: scrolling itinerary ticker */}
        <div className="itinerary-ticker">
          <div className="ticker-edge ticker-edge-left" />
          <div className="ticker-track">
            {[...ITINERARY, ...ITINERARY].map((it, i) => (
              <div key={i} className="itinerary-card">
                <span className="card-icon">{it.icon}</span>
                <div className="card-text">
                  <span className="card-day">{it.day}</span>
                  <span className="card-task">{it.task}</span>
                  <span className="card-city">{it.city}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="ticker-edge ticker-edge-right" />
        </div>

        {/* Bottom: protagonist with day scenery panning past */}
        <div className="day-strip">
          <div className="scenery">
            <div className="scenery-track">
              {[...DAY_BEATS, ...DAY_BEATS, ...DAY_BEATS].map((emoji, i) => (
                <span key={i} className="scenery-item">
                  {emoji}
                </span>
              ))}
            </div>
          </div>
          <div className="protagonist">
            <div className="thought-bubble">
              {DAY_BEATS.map((emoji, i) => (
                <span
                  key={i}
                  className="thought-icon"
                  style={{
                    animationDelay: `${(i * 14) / DAY_BEATS.length}s`,
                  }}
                >
                  {emoji}
                </span>
              ))}
              <span className="bubble-tail" />
            </div>
            <span className="hero-emoji">🧑‍💼</span>
            <span className="hero-label">Alex · Tour Manager</span>
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
