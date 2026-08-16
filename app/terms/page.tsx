import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - ILM HUB",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-parchment py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-coffee mb-8">Terms of Service</h1>
        <div className="space-y-6 text-coffee/80 leading-relaxed">
          <p>By accessing or using ILM HUB, you agree to be bound by these terms of service.</p>
          <h2 className="text-2xl font-bold text-coffee">Use License</h2>
          <p>Permission is granted to use ILM HUB for personal, non-commercial use only. This is the grant of a license, not a transfer of title.</p>
          <h2 className="text-2xl font-bold text-coffee">Disclaimer</h2>
          <p>The materials on ILM HUB are provided on an &apos;as is&apos; basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability.</p>
          <h2 className="text-2xl font-bold text-coffee">Limitations</h2>
          <p>In no event shall ILM HUB or its suppliers be liable for any damages arising out of the use or inability to use the materials on our website.</p>
          <h2 className="text-2xl font-bold text-coffee">Contact</h2>
          <p>If you have any questions about these terms, please contact us at support@ilmhub.com.</p>
        </div>
      </div>
    </main>
  );
}
