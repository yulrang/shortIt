import { Html, Head, Main, NextScript } from 'next/document';
import { GoogleTagManager } from '@next/third-parties/google';

export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GA_ID} />
    </Html>
  );
}
