import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          src="https://unpkg.com/@rive-app/canvas@2.8.3/rive.js"
          async
        ></script>
        <meta property="og:title" content="Runbuds" />
        <meta
          property="og:description"
          content="Run together, even when you're apart"
        />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:type" content="website" />
        <link rel="preload" as="image" href="/images/runbuds-logo.svg" />
        <link rel="preload" as="image" href="/images/appicon.png" />
        <link rel="preload" as="image" href="/images/qr-code.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
