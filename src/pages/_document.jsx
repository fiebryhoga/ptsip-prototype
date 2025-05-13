import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/icon/favicon.svg" />
        <link rel="icon" type="image/png" href="/icon/favicon.png" sizes="192x192" />
        <link rel="icon" href="/icon/favicon.ico" sizes="any" />

        <link rel="shortcut icon" href="/icon/favicon.ico" />

        {/* PWA icons */}
        <link rel="manifest" href="/icon/manifest.json" />
        <meta name="theme-color" content="#ffffff" />

        {/* Apple Touch Icon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icon/apple-touch-icon.png"
        />

        {/* Additional favicons */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/icon/favicon-96x96.png"
        />
      </Head>

      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
