import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "About Page",
  keywords: ['About Page', 'Next.js', 'React', 'TypeScript'],
};

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center p-24">
      <span className="text-lg">Hola mundo!</span>
      <span className="text-5xl">About Page</span>
    </main>
  );
}