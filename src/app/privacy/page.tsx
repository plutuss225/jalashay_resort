import { Footer } from "@/components/home/footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="font-display text-4xl md:text-5xl text-foreground mb-8">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none font-sans text-foreground/80 space-y-6">
          <p>
            At Jalashay Resort, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information.
          </p>
          <h2 className="font-display text-2xl text-foreground mt-8 mb-4">Information We Collect</h2>
          <p>
            We may collect personal information such as your name, email address, phone number, and payment details when you make a reservation, subscribe to our newsletter, or contact us.
          </p>
          <h2 className="font-display text-2xl text-foreground mt-8 mb-4">How We Use Your Information</h2>
          <p>
            The information we collect is used to process your reservations, provide customer support, and send you updates about your stay or special offers (if you have opted in). We do not sell your personal information to third parties.
          </p>
          <h2 className="font-display text-2xl text-foreground mt-8 mb-4">Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. We use secure booking engines and payment gateways.
          </p>
          <h2 className="font-display text-2xl text-foreground mt-8 mb-4">Payment & Cancellation Policies</h2>
          <div className="space-y-4">
            <p>
              <strong>Booking Confirmation:</strong> Full payment or a specified deposit is required at the time of booking to secure your reservation at Jalashay Resort.
            </p>
            <p>
              <strong>Cancellations and Refunds:</strong> Cancellations made at least 7 days prior to the scheduled arrival date are eligible for a refund, subject to a nominal processing fee. Cancellations made within 7 days of arrival may incur a cancellation charge up to the full booking amount.
            </p>
            <p>
              <strong>Payment Methods:</strong> We accept major credit cards, debit cards, and secure online payment methods. All transactions are encrypted and processed through our secure payment gateway partners.
            </p>
          </div>
          <h2 className="font-display text-2xl text-foreground mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at{" "}
            <a href="mailto:thejalashayresort@gmail.com" className="underline hover:text-foreground transition-colors">
              thejalashayresort@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
      <div className="mt-24">
        <Footer />
      </div>
    </main>
  );
}
