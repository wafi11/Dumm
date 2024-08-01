import type { Metadata } from "next";
import { Inter, Bebas_Neue, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header/Header";
import { Toaster } from "@/components/ui/toaster";

const inter = Manrope({
  weight: ["200", "300", "400", "500", "600", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}

const Footer = () => {
  return (
    <footer
      className={`w-full h-screen flex relative justify-center items-center text-center`}
    >
      <h1
        className="text-secondary text-[10vw] lg:text-[6vw] border-y-4 border-gray-500"
        style={{ fontFamily: "Impact" }}
      >
        LETS WORK TOGETHER
      </h1>
      <div className="absolute bottom-5 ">
        <p>&copy; {new Date().getFullYear()} Wafiuddin. All rights reserved.</p>
      </div>
    </footer>
  );
};
