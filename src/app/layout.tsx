import type { Metadata } from "next";
import { Marcellus, Raleway, Cardo } from "next/font/google";
import "../styles.css";
import { Nav } from "@/components/home";
import { BookingModalProvider } from "@/context/BookingModalContext";
import { QueryProvider } from "@/context/QueryProvider";

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const cardo = Cardo({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jalashay.com'),
  title: "Jalashay Resort — Serene Backwater Retreat",
  description:
    "Jalashay Resort — a tranquil backwater sanctuary of palm-fringed waters, heritage villas, ayurvedic wellness and coastal cuisine in Panshet, Maharashtra.",
  keywords: ["Jalashay Resort", "Panshet Resort", "Pune Resort", "Backwater Retreat", "Heritage Villas", "Ayurvedic Wellness", "Nature Resort", "Maharashtra Resorts"],
  authors: [{ name: "Jalashay Resort" }],
  openGraph: {
    title: "Jalashay Resort — Serene Backwater Retreat",
    description:
      "A tranquil backwater sanctuary of palm-fringed waters, heritage villas, ayurvedic wellness and coastal cuisine.",
    url: 'https://jalashay.com',
    siteName: 'Jalashay Resort',
    images: [
      {
        url: '/Jalashay_Logo.webp', // Can be replaced with an actual OG image later
        width: 1200,
        height: 630,
        alt: 'Jalashay Resort',
      },
    ],
    locale: 'en_IN',
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jalashay Resort — Serene Backwater Retreat",
    description: "A tranquil backwater sanctuary of palm-fringed waters, heritage villas, ayurvedic wellness and coastal cuisine.",
    images: ['/Jalashay_Logo.webp'],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": ["Resort", "Hotel", "LocalBusiness"],
    name: "Jalashay Resort",
    image: "https://jalashay.com/Jalashay_Logo.webp",
    description: "A tranquil backwater sanctuary of palm-fringed waters, heritage villas, ayurvedic wellness and coastal cuisine.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Near Panshet",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "412107",
      addressCountry: "IN"
    },
    telephone: "+917378818818",
    url: "https://jalashay.com",
    priceRange: "₹₹₹"
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Jalashay Resort",
    url: "https://jalashay.com",
    logo: "https://jalashay.com/Jalashay_Logo.webp",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+917378818818",
      contactType: "Reservations",
      areaServed: "IN"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://jalashay.com"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Rooms",
        item: "https://jalashay.com/rooms"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Experiences",
        item: "https://jalashay.com/experiences"
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Gallery",
        item: "https://jalashay.com/gallery"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Where is Jalashay Resort located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Jalashay Resort is located near Panshet, Pune, Maharashtra 412107, offering a serene backwater retreat."
        }
      },
      {
        "@type": "Question",
        name: "What amenities are provided at the resort?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer heritage villas, ayurvedic wellness treatments, coastal cuisine dining, lakeside sunset decks, and event spaces for weddings and celebrations."
        }
      },
      {
        "@type": "Question",
        name: "How can I book a stay?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can reserve your stay by clicking the 'Reserve Your Stay' button on our website or by contacting our reservations desk at +91 73788 18818."
        }
      }
    ]
  }
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${marcellus.variable} ${raleway.variable} ${cardo.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <QueryProvider>
          <BookingModalProvider>
            <Nav />
            {children}
          </BookingModalProvider>
        </QueryProvider>
      </body>
    </html>
  );
}



