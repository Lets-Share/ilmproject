import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sitemap - ILM HUB",
};

export default function SitemapPage() {
  const pages = [
    { name: "Home", href: "/" },
    { name: "Library", href: "/#library" },
    { name: "Installation", href: "/#install" },
    { name: "FAQ", href: "/#faq" },
    { name: "Contact", href: "/#contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ];

  return (
    <main className="min-h-screen bg-parchment py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-coffee mb-8">Sitemap</h1>
        <ul className="space-y-4">
          {pages.map((page) => (
            <li key={page.name}>
              <a href={page.href} className="text-terracotta hover:underline text-lg">
                {page.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
