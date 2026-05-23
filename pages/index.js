import Head from "next/head";
import { useEffect, useRef } from "react";

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
  const pathRef = useRef(null);
  const planeRef = useRef(null);

  useEffect(() => {
    const pathEl = pathRef.current;
    const planeEl = planeRef.current;
    if (!pathEl || !planeEl) return;

    // The ✈️ emoji's nose naturally faces ~45° (up-right). Subtract that so
    // rotate(tangentAngle - emojiOffset) aligns nose with the path direction.
    const EMOJI_NOSE_OFFSET = 45;
    const DURATION_MS = 32000;

    let start = null;
    let rafId = null;

    const tick = (now) => {
      if (start === null) start = now;
      const t = ((now - start) / DURATION_MS) % 1;

      const length = pathEl.getTotalLength();
      const p = pathEl.getPointAtLength(t * length);
      const pNext = pathEl.getPointAtLength(
        Math.min(t + 0.001, 1) * length,
      );

      // Get the SVG's actual rendered box so we can convert from viewBox
      // (0..100, 0..30) coords into page pixels.
      const svgEl = pathEl.ownerSVGElement;
      const svgRect = svgEl.getBoundingClientRect();
      const screenX = svgRect.left + (p.x / 100) * svgRect.width;
      const screenY = svgRect.top + (p.y / 30) * svgRect.height;

      // Tangent angle, accounting for the same viewBox→pixel scaling so
      // the visual angle matches what the eye sees.
      const dx = (pNext.x - p.x) * (svgRect.width / 100);
      const dy = (pNext.y - p.y) * (svgRect.height / 30);
      const angleDeg = (Math.atan2(dy, dx) * 180) / Math.PI;

      planeEl.style.left = `${screenX}px`;
      planeEl.style.top = `${screenY}px`;
      planeEl.style.transform = `translate(-50%, -50%) rotate(${angleDeg + EMOJI_NOSE_OFFSET}deg)`;
      planeEl.style.opacity = "1";

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

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
        {/* Ambient particles drifting up */}
        <div className="ambient-particles">
          {Array.from({ length: 14 }).map((_, i) => (
            <span
              key={i}
              className="amb-particle"
              style={{
                left: `${(i * 7.3) % 100}%`,
                animationDelay: `${i * 1.7}s`,
                animationDuration: `${14 + (i % 5) * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Eyebrow */}
        <div className="route-eyebrow">
          <span className="route-eyebrow-dot" />
          ADVANCE · LIVE TOUR · TUE 14
        </div>

        {/* Show countdown */}
        <div className="show-countdown">
          <div className="cd-eyebrow">
            <span className="cd-led" />
            SHOW IN
          </div>
          <div className="cd-time">
            <span className="cd-num">05</span>
            <span className="cd-sep">:</span>
            <span className="cd-num">42</span>
            <span className="cd-sep">:</span>
            <span className="cd-num cd-secs">18</span>
          </div>
          <div className="cd-venue">LE TRIANON · PARIS</div>
        </div>

        {/* City waypoint labels */}
        <span className="city-waypoint city-1">BERLIN</span>
        <span className="city-waypoint city-2">PARIS</span>
        <span className="city-waypoint city-3">LYON</span>
        <span className="city-waypoint city-4">BARCELONA</span>

        {/* The wavy tour route path */}
        <svg
          className="route-svg"
          viewBox="0 0 100 30"
          preserveAspectRatio="none"
        >
          <path
            ref={pathRef}
            d="M 0 18 Q 14 4, 28 22 T 56 16 T 84 14 T 100 22"
            fill="none"
            stroke="rgba(200, 255, 0, 0.32)"
            strokeWidth="0.35"
            strokeDasharray="0.8 0.9"
          />
        </svg>

        {/* Plane traveling the route — JS-driven follow of the SVG path */}
        <span
          ref={planeRef}
          className="plane-traveler"
          aria-hidden="true"
        >
          ✈️
        </span>

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
