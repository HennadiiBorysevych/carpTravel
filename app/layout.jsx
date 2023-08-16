import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CarpTravel",
  description: "Trips to Carpathians",
  icons: [{ icon: "/favicon.ico" }, { icon: "/favicon1.ico" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
