import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import LayoutLoguin from "@/components/layout/LayoutLoguin";
import LayoutApp from "@/components/layout/LayoutApp";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { pathname } = router;
  let Layout = LayoutApp;
  if (pathname.indexOf("/loguin") === 0) {
    Layout = LayoutLoguin;
  }
  if (pathname.indexOf("/signup") === 0) {
    Layout = LayoutLoguin;
  }
  if (pathname.indexOf("/password") === 0) {
    Layout = LayoutLoguin;
  }
  return (
    <>
      <Head>
        <title>Coruss</title>
      </Head>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
