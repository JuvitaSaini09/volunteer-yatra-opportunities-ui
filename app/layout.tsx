// app/layout.tsx
import { Tabs } from "@/components/ui/tabs";
import "./globals.css";
import { Poppins, Roboto } from "next/font/google";
import localFont from "next/font/local";
import { TabType } from "@/types";
import Header from "@/components/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const sansation = localFont({
  src: [
    {
      path: "./font/Sansation-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-sansation",
  display: "swap",
});

export const metadata = {
  title: "Volunteer Yatra Opportunities",
  description: "Volunteer Yatra Opportunities",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${roboto.variable} ${sansation.variable}`}
    >
      <body className="font-sansation">
        <Tabs defaultValue={TabType.Opportunities} className="w-full">
          <Header />
          {children}
        </Tabs>
      </body>
    </html>
  );
}
