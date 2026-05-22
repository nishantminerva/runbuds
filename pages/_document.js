import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content="Backline" />
        <meta
          property="og:description"
          content="Tour management for artists, crew, and backline gear."
        />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:type" content="website" />
        <link rel="preload" as="image" href="/images/backline-logo.svg" />
        <link rel="preload" as="image" href="/images/backline-appicon.svg" />
        <link rel="preload" as="image" href="/images/backline-qr.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
