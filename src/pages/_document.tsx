import Sidebar from "@/components/layout/sidebar";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel="shortcut icon" href="/iconeTalk.png" />
      </Head>
      <body>
        <Sidebar />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
