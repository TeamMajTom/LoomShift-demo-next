import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { profile } from "@/content/site";

export const metadata: Metadata = {
  title: `${profile.name} — Resume & Portfolio`,
  description: profile.title,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <nav className="site-nav">
            <Link href="/" className="site-nav__brand">
              {profile.name}
            </Link>
            <div className="site-nav__links">
              <Link href="/">Home</Link>
              <Link href="/portfolio">Portfolio</Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <p>
            &copy; {new Date().getFullYear()} {profile.name}
          </p>
        </footer>
      </body>
    </html>
  );
}
