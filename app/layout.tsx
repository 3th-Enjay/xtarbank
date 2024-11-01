import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
// const inter = localFont({
//   src: "./fonts/Inter-UI.woff",
//   variable: "--font-inter",
//   weight: "100 900",
// });
// const ibmPlexSerif = localFont({
//   src: "./fonts/IBM-Plex-Serif-VF.woff",
//   variable: "--font-ibm-plex-serif",
//   weight: "100 900",
// });
export const metadata: Metadata = {
  title: "NightXtar",
  description: "Taking Online Banking to new Horizons",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
