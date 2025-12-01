import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Feed To Vote",
  description: "Learn how social media influences voting!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        {children}
      </body>
    </html>
  );
}
