import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kyro",
  description: "Drop your musics directly from yt, no ads, no tracking, just music!!",
  icons: {
    icon: "/simpicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-bt">
      <body
      >
        {children}
      </body>
    </html>
  );
}
