import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap"
});

const siteUrl = "https://saijayanth41.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Sai Jayanth Rajamahendram | Software Engineer — .NET, Cloud & DevOps",
  description:
    "Software Engineer with 3+ years building healthcare backend systems with .NET Core, SQL Server, AWS, Azure, Terraform, Kubernetes, and CI/CD. M.S. Computer Science, Illinois Tech.",
  keywords: [
    "Sai Jayanth Rajamahendram",
    "Software Engineer",
    ".NET Developer",
    "Cloud Engineer",
    "DevOps Engineer",
    "Healthcare Systems",
    "AWS",
    "Azure",
    "Terraform",
    "Kubernetes"
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Sai Jayanth Rajamahendram | Software Engineer",
    description:
      "Backend systems, cloud infrastructure, DevOps automation, and healthcare application engineering.",
    url: siteUrl,
    siteName: "Sai Jayanth Rajamahendram",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "Sai Jayanth Rajamahendram | Software Engineer",
    description:
      "Backend systems, cloud infrastructure, DevOps automation, and healthcare application engineering."
  },
  robots: { index: true, follow: true }
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sai Jayanth Rajamahendram",
  url: siteUrl,
  jobTitle: "Software Engineer",
  email: "mailto:saijayanth41@gmail.com",
  sameAs: [
    "https://github.com/saijayanth41",
    "https://www.linkedin.com/in/saijayanthr/"
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Illinois Institute of Technology"
  },
  knowsAbout: [
    ".NET Core",
    "C#",
    "SQL Server",
    "AWS",
    "Azure",
    "Terraform",
    "Kubernetes",
    "CI/CD",
    "Healthcare Systems"
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
