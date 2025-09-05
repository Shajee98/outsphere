import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Scripts from "./components/Scripts";
import PreloaderWrapper from "./components/PreloaderWrapper";
import MouseCursor from "./components/MouseCursor";
import Header from "./components/Header";
import Footer from "./components/Footer";

// CSS Libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "animate.css/animate.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "jquery-nice-select/css/nice-select.css";
import "venobox/dist/venobox.min.css";
import "szmigiel-meanmenu/meanmenu.min.css";

// Template SCSS
import "../../public/sass/main.scss";
import "../../public/styles/solvior-icons.css";
import "../../public/styles/odometer-theme-default.css";

// Custom CSS
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Solvior - Business Consulting",
  description: "Expert business consulting services to transform your business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* Global Components */}
        <MouseCursor />
        
        {/* Conditional Preloader */}
        <PreloaderWrapper />
        
        <Header />
        
        {/* Page Content */}
        {children}
        
        {/* Footer */}
        <Footer />
        
        {/* Scripts */}
        <Scripts />
      </body>
    </html>
  );
}
