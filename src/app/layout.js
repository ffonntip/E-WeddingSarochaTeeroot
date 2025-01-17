import { Ephesis as GoogleEphesis } from 'next/font/google';
import { Chonburi as GoogleChonburi } from 'next/font/google';
import { Kanit as GoogleKanit } from 'next/font/google';
import { Herr_Von_Muellerhoff  as GoogleHerrVonMuellerhoff } from 'next/font/google';
import { Lovers_Quarrel as GoogleLoversQuarrel } from 'next/font/google';
import localFont from "next/font/local";
import "./globals.css";

const ephesis = GoogleEphesis({
  weight: "400",
  subsets: ['latin', 'latin-ext'],
});

const chanchai = GoogleChonburi({
  weight: "400",
  subsets: ['latin', 'thai'],
});

const kanit = GoogleKanit({
  weight: "400",
  subsets: ['latin', 'thai'],
});

const herr_Von_Muellerhoff = GoogleHerrVonMuellerhoff({
  weight: "400",
  subsets: ['latin', 'latin-ext'],
});

const lovers_Quarrel = GoogleLoversQuarrel({
  weight: "400",
  subsets: ['latin', 'latin-ext'],
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "SarochaTeeroot",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ephesis.className} ${chanchai.className} ${kanit.className} ${herr_Von_Muellerhoff.className} ${lovers_Quarrel.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
