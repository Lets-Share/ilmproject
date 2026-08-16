import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - ILM HUB",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-parchment py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-coffee mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-coffee/80 leading-relaxed">
          <p>ILM HUB is committed to protecting your privacy. This policy explains how we handle your information.</p>
          <h2 className="text-2xl font-bold text-coffee">Information Collection</h2>
          <p>We do not collect any personal information from users of our website or mobile application. We respect your complete privacy.</p>
          <h2 className="text-2xl font-bold text-coffee">Usage Data</h2>
          <p>We may collect anonymous usage statistics to improve our services. This data cannot be used to identify you personally.</p>
          <h2 className="text-2xl font-bold text-coffee">Third-Party Services</h2>
          <p>Our website may use third-party advertising networks such as Adsterra. These services may collect anonymous data for ad personalization.</p>
          <h2 className="text-2xl font-bold text-coffee">Contact</h2>
          <p>If you have any questions about this privacy policy, please contact us at support@ilmhub.com.</p>
        </div>
      </div>
    </main>
  );
}
