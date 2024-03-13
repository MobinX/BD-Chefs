import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BottomNav } from "@/components/bottomNav";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BD Chefs",
  description: "Your go to solution for home cooked meals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scrollbar-hide">
      <body className={` $(inter.className) w-full h-full min-w-full scrollbar-hide min-h-full`}>
        <Navbar />
        {children}
        <BottomNav />
        <Footer />
        </body>

    </html>
  );
}
