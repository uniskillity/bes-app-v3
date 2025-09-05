import "./globals.css";

export const metadata = {
  title: "BulkSender – AI Bulk Email Sender for Startups & Businesses",
  description:
    "BulkSender is a fast, secure, and Gmail-powered bulk email sender. Perfect for startups, freelancers, and businesses that need reliable outreach with smart validation and analytics.",
  keywords: [
    "bulk email sender",
    "AI email sender",
    "Gmail bulk email",
    "email automation tool",
    "startup email software",
    "secure bulk email"
  ],
  openGraph: {
    title: "BulkSender – AI Bulk Email Sender",
    description:
      "Send bulk emails in seconds. Gmail authentication, smart validation, and reliable outreach.",
    url: "https://www.linkedin.com/in/spaqootech/",
    siteName: "BulkSender",
    images: [
      {
        url: "https://media.licdn.com/dms/image/v2/D4D03AQGqV99j2l1iBg/profile-displayphoto-scale_200_200/B4DZiVi_dFHYAc-/0/1754855635798?e=1759968000&v=beta&t=YEeV3peKscQAKULuHf1cyCfmGJssF0bGOJ94Dmus1ws",
        width: 1200,
        height: 630,
        alt: "BulkSender Email Tool"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "BulkSender – AI Bulk Email Sender",
    description:
      "AI-powered bulk email sender with Gmail authentication. Startups & businesses can scale outreach easily.",
    images: ["https://media.licdn.com/dms/image/v2/D4D03AQGqV99j2l1iBg/profile-displayphoto-scale_200_200/B4DZiVi_dFHYAc-/0/1754855635798?e=1759968000&v=beta&t=YEeV3peKscQAKULuHf1cyCfmGJssF0bGOJ94Dmus1ws"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "BulkSender",
              description:
                "An AI-powered bulk email sender tool with Gmail authentication, analytics, and smart validation.",
              operatingSystem: "Web",
              applicationCategory: "BusinessApplication",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD"
              }
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
