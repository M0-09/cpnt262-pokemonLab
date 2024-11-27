import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-primary text-secondary">
        <nav className="p-4 text-center bg-black">
          <Link className="mx-4 font-bold text-accent hover:underline" href="/">
            Home
          </Link>{" "}
          {/* Missing href attribute and use the Link component from the next library */}
          <Link
            className="mx-4 font-bold text-accent hover:underline"
            href="/about"
          >
            About
          </Link>{" "}
          {/* Missing href attribute and use the Link component from the next library */}
        </nav>
        <main className="container p-4 mx-auto">{children}</main>
      </body>
    </html>
  );
}
