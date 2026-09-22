import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Miguel Esteves — Backend Software Engineer, Systems & Security",
  description:
    "Backend software engineer specializing in Go and Python: concurrent systems, secure APIs, and infrastructure. Creator of Achlys (a language runtime) and HackLingo (a security learning platform).",
  keywords: [
    "Backend Engineer",
    "Golang Developer",
    "Python Developer",
    "Systems Programming",
    "Application Security",
    "Remote Software Engineer",
  ],
};

export default function FullstackLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
