import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Your Trusted Connected Smart Home",
  description: "AutoLifeTech's IoT R&D Smart Company is committed to bringing you the best Smart Home Automation. We provide you the most intuitive and beautiful home controls.",
  keywords: 'smart home, IoT, home automation, AutoLifeTech, intuitive controls',
  openGraph: {
    title: "Your Trusted Connected Smart Home",
    description: "AutoLifeTech's IoT R&D Smart Company is committed to bringing you the best Smart Home Automation. We provide you the most intuitive and beautiful home controls.",
    images: ["/ALT-Log.png"],
    url: "https://autolifetech.com/"
  },
  twitter: {
    title: "Your Trusted Connected Smart Home",
    description: "AutoLifeTech's IoT R&D Smart Company is committed to bringing you the best Smart Home Automation. We provide you the most intuitive and beautiful home controls.",
    images: ["/ALT-Log.png"],
    card: "summary_large_image"
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
