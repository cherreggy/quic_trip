import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* 引入 viewport-units-buggyfill 库 */}
        <script src="https://cdn.jsdelivr.net/npm/viewport-units-buggyfill@0.6.2/viewport-units-buggyfill.min.js"></script>
        {/* 初始化 viewport-units-buggyfill 库 */}
        <script
          dangerouslySetInnerHTML={{
            __html: "window.viewportUnitsBuggyfill.init();",
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
