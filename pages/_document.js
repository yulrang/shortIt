import { Html, Head, Main, NextScript } from 'next/document';
import { GoogleAnalytics } from '@next/third-parties/google';

export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}/>
    </Html>
  );
}
