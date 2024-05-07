import { Inter } from "next/font/google";
import "./globals.css";
import SessionWrapper from "./ui/sessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fitur Bimbel LB3R",
  description: "Fitur-fitur bimbel LB3R",
};

export default function RootLayout({ children }) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </SessionWrapper>
  );
}
