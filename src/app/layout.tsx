import type { Metadata } from "next";
import { Inter } from "next/font/google";
import clsx from "clsx";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notes",
  description: "Basic notes app",
};

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "min-h-screen")}>{children}</body>
    </html>
  );
}
