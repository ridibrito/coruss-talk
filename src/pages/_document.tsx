import Sidebar from "@/components/layout/Sidebar";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel="shortcut icon" href="/icon.png" />
      </Head>
      <body>
        <Sidebar />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
