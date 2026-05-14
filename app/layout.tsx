import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sai Jayanth Rajamahendram | Software Engineer",
  description:
    "Recruiter-focused portfolio for Sai Jayanth Rajamahendram, Software Engineer and Cloud & DevOps Engineer with healthcare domain experience.",
  openGraph: {
    title: "Sai Jayanth Rajamahendram | Software Engineer",
    description:
      "Backend systems, cloud infrastructure, DevOps automation, and healthcare application engineering.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
