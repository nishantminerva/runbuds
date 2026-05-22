import Head from "next/head";

const CREW = [
  {
    emoji: "🧑🏻‍💼",
    name: "Hugh",
    role: "Tour Mgr",
    taskIcon: "📋",
    task: "Advancing Lyon",
    status: "online",
    x: 6,
    y: 12,
  },
  {
    emoji: "👨🏾‍🎤",
    name: "Krishna",
    role: "Lead Vocals",
    taskIcon: "🎤",
    task: "Warm-up · GR3",
    status: "online",
    x: 22,
    y: 26,
  },
  {
    emoji: "👩🏼‍🦰",
    name: "Ashleigh",
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
    role: "Advance",
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
  return (
    <>
      <Head>
        <title>Advance</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
      </Head>

      <div className="tour-scene" aria-hidden="true">
        {/* Eyebrow */}
        <div className="route-eyebrow">
          <span className="route-eyebrow-dot" />
          ADVANCE · LIVE TOUR · TUE 14
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
            stroke="rgba(200, 255, 0, 0.32)"
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
        <div className="icon-container">
          <div className="icon-view">
            <img
              src="/images/advance-appicon.svg"
              alt="Advance App Icon"
              className="appicon"
            />
          </div>
        </div>

        <span className="coming-soon-btn" role="status">
          <span className="cs-dot" />
          Coming Soon
        </span>

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
