import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "Contact Page",
  keywords: ['Contact Page', 'Next.js', 'React', 'TypeScript'],
};

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center p-24">
      <span className="text-5xl">Contact Page</span>
    </main>
  );
}