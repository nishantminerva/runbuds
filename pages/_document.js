import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Tour management for artists, crew, and backline gear."
        />

        {/* Open Graph */}
        <meta property="og:url" content="https://www.advancetouring.app/" />
        <meta property="og:site_name" content="Advance" />
        <meta property="og:title" content="Advance" />
        <meta
          property="og:description"
          content="Tour management for artists, crew, and backline gear."
        />
        <meta property="og:image" content="https://www.advancetouring.app/images/og-image.png?v=2" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Advance — live tour dashboard" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Advance" />
        <meta
          name="twitter:description"
          content="Tour management for artists, crew, and backline gear."
        />
        <meta name="twitter:image" content="https://www.advancetouring.app/images/og-image.png?v=2" />
        <meta name="twitter:image:alt" content="Advance — live tour dashboard" />

        <link rel="preload" as="image" href="/images/advance-appicon.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
