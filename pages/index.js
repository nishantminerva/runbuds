import Head from "next/head";
import { useState } from "react";

const APP_ITINERARY = [
  { icon: "✈️", time: "06:30", task: "Flight BER → CDG", active: true },
  { icon: "🛬", time: "09:15", task: "Land at CDG" },
  { icon: "🚐", time: "10:30", task: "Drive to Le Trianon" },
  { icon: "🍽️", time: "13:00", task: "Catering & advance" },
  { icon: "🎚️", time: "14:00", task: "Soundcheck" },
  { icon: "🎤", time: "20:00", task: "Doors open" },
];

const NOTIFICATIONS = [
  {
    icon: "✈️",
    title: "Boarding now",
    body: "BER → CDG · Gate 17",
    pos: "n-top-right",
  },
  {
    icon: "💡",
    title: "Sam checked in",
    body: "Lighting · ready for SC",
    pos: "n-mid-right",
  },
  {
    icon: "🚐",
    title: "Driver ETA 30 min",
    body: "Hotel pickup · Lyon route",
    pos: "n-bottom-left",
  },
  {
    icon: "🎚️",
    title: "Soundcheck pushed",
    body: "Now 15:00 · promoter confirmed",
    pos: "n-mid-left",
  },
];

const AMBIENT = [
  { emoji: "🎫", className: "amb-1" },
  { emoji: "🛂", className: "amb-2" },
  { emoji: "🎟️", className: "amb-3" },
  { emoji: "💼", className: "amb-4" },
  { emoji: "🔑", className: "amb-5" },
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
        {/* Ambient floating tour items */}
        {AMBIENT.map((a, i) => (
          <span key={i} className={`ambient ${a.className}`}>
            {a.emoji}
          </span>
        ))}

        {/* Phone mockup running the Backline app */}
        <div className="phone-frame">
          <div className="phone-notch" />
          <div className="phone-screen">
            <div className="app-header">
              <div className="app-title-stack">
                <span className="app-eyebrow">Today · Tue 14</span>
                <span className="app-title">Paris ▸ Le Trianon</span>
              </div>
              <span className="app-avatar">🧑‍💼</span>
            </div>
            <div className="app-itinerary">
              {APP_ITINERARY.map((item, i) => (
                <div
                  key={i}
                  className={`app-item${item.active ? " app-item-active" : ""}`}
                >
                  <span className="app-item-icon">{item.icon}</span>
                  <div className="app-item-text">
                    <span className="app-item-time">{item.time}</span>
                    <span className="app-item-task">{item.task}</span>
                  </div>
                  {item.active && <span className="app-item-pulse" />}
                </div>
              ))}
            </div>
            <div className="app-footer">
              <span className="app-footer-dot" />
              <span className="app-footer-text">Live · synced 2s ago</span>
            </div>
          </div>
        </div>

        {/* Notification chips */}
        {NOTIFICATIONS.map((n, i) => (
          <div
            key={i}
            className={`notif ${n.pos}`}
            style={{ animationDelay: `${i * 3}s` }}
          >
            <span className="notif-icon">{n.icon}</span>
            <div className="notif-text">
              <span className="notif-title">{n.title}</span>
              <span className="notif-body">{n.body}</span>
            </div>
          </div>
        ))}

        {/* Alex user card */}
        <div className="user-card">
          <div className="user-avatar">
            <span>🧑‍💼</span>
            <span className="user-status" />
          </div>
          <div className="user-meta">
            <span className="user-name">Alex Rivera</span>
            <span className="user-role">Tour Manager · @alex_tm</span>
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
