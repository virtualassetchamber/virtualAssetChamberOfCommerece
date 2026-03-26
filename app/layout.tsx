import type { Metadata } from "next";
import "./globals.css";
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] ,  
  display: 'swap',
});


export const metadata: Metadata = {
  title: "Virtual Assets Chamber of Commerce | Shaping the Future of Virtual Assets in Africa",
  description:
    "The Virtual Assets Chamber of Commerce (VACC) is building trusted standards, policy leadership, education, and compliance infrastructure for Africa's emerging digital asset economy.",
  metadataBase: new URL("https://virtualassetschamberofcommerce.com"),
 
  keywords: [
    "virtual assets",
    "digital assets Africa",
    "crypto regulation Africa",
    "blockchain compliance",
    "virtual asset service providers",
    "VASP compliance",
    "digital finance Africa",
    "crypto policy Africa",
    "virtual assets chamber of commerce",
    "VACC",
    "Web3 Africa",
    "digital asset standards",
    "crypto education Africa",
    "fintech regulation",
  ],
 
  authors: [{ name: "Virtual Assets Chamber of Commerce" }],
  creator: "Virtual Assets Chamber of Commerce",
  publisher: "Virtual Assets Chamber of Commerce",
 
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://virtualassetschamberofcommerce.com",
    siteName: "Virtual Assets Chamber of Commerce",
    title: "Shaping the Future of Virtual Assets in Africa",
    description:
      "A new chamber for standards, education, compliance, and policy leadership across Africa's emerging digital asset economy.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Virtual Assets Chamber of Commerce — Shaping the Future of Virtual Assets in Africa",
      },
    ],
  },
 
  twitter: {
    card: "summary_large_image",
    title: "Shaping the Future of Virtual Assets in Africa",
    description:
      "A new chamber for standards, education, compliance, and policy leadership across Africa's emerging digital asset economy.",
    images: ["/og-image.png"],
  },
 
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
 
  alternates: {
    canonical: "https://virtualassetschamberofcommerce.com",
  },
 
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
