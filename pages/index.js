import Head from "next/head";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [hover, setHover] = useState(false);
  const tlRef = useRef(null);
  const brRef = useRef(null);
  const mobileRef = useRef(null);

  const onEnter = () => setHover(true);
  const onLeave = () => setHover(false);

  useEffect(() => {
    const instances = [];
    let cancelled = false;

    const start = () => {
      if (cancelled || !window.rive) return;
      const make = (canvas, alignment) => {
        if (!canvas) return null;
        const r = new window.rive.Rive({
          src: "/rive/track.riv",
          canvas,
          autoplay: true,
          stateMachines: "State Machine 1",
          fit: window.rive.Fit.cover,
          alignment,
          onLoad: () => r.resizeDrawingSurfaceToCanvas(),
        });
        return r;
      };
      instances.push(
        make(tlRef.current, window.rive.Alignment.topLeft),
        make(brRef.current, window.rive.Alignment.bottomRight),
        make(mobileRef.current, window.rive.Alignment.bottomRight),
      );
    };

    if (window.rive) start();
    else {
      const id = setInterval(() => {
        if (window.rive) {
          clearInterval(id);
          start();
        }
      }, 50);
      return () => {
        cancelled = true;
        clearInterval(id);
        instances.forEach((r) => r && r.cleanup && r.cleanup());
      };
    }

    return () => {
      cancelled = true;
      instances.forEach((r) => r && r.cleanup && r.cleanup());
    };
  }, []);

  return (
    <>
      <Head>
        <title>Runbuds</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
      </Head>
      <canvas
        ref={tlRef}
        id="track-desktop-tl"
        className="track-graphic top-left"
      />
      <canvas
        ref={brRef}
        id="track-desktop-br"
        className="track-graphic bottom-right"
      />
      <canvas
        ref={mobileRef}
        id="track-mobile-br"
        className="track-graphic mobile"
      />
      <div className="content">
        <div className="text-container">
          <img
            src="/images/runbuds-logo.svg"
            alt="Runbuds"
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
              src="/images/appicon.png"
              alt="Runbuds App Icon"
              className="appicon"
            />
            <img
              src="/images/qr-code.png"
              alt="Runbuds QR Code"
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
