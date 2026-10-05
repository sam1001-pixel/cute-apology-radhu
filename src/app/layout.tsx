import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A Special Message For You 💌 | I'm So Sorry",
  description: "A cute, heartfelt interactive apology message for my sweet girlfriend.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col selection:bg-rose-200 selection:text-rose-900">
        {children}
      </body>
    </html>
  );
}
