import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Lato } from "next/font/google";
import { Poppins } from "next/font/google";



export const metadata: Metadata = {
  title: 'ShopifyOne | Premium Tech & Lifestyle Gadgets',
  description: 'Discover high-quality, modern electronics at ShopifyOne. Innovative gadgets, exceptional performance, and premium designs for your digital life.',
  openGraph: {
    "title": "ShopifyOne | Premium Tech & Lifestyle Gadgets",
    "description": "Shop the best tech gadgets online.",
    "siteName": "ShopifyOne"
  },
  twitter: {
    "card": "summary_large_image"
  },
};


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${poppins.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
