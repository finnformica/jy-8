import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Geist_Mono } from "next/font/google";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${geistMono.variable} ${geistMono.className}`}>
      <Component {...pageProps} />
    </main>
  );
}
