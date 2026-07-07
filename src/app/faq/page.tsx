import { Footer } from "@/components/home/footer";

export default function FAQPage() {
  const faqs = [
    {
      question: "Where is Jalashay Resort located?",
      answer: "Jalashay Resort is located near Panshet, Pune, Maharashtra 412107, offering a serene backwater retreat."
    },
    {
      question: "What amenities are provided at the resort?",
      answer: "We offer heritage villas, ayurvedic wellness treatments, coastal cuisine dining, lakeside sunset decks, and event spaces for weddings and celebrations."
    },
    {
      question: "How can I book a stay?",
      answer: "You can reserve your stay by clicking the 'Book Now' button on our website or by contacting our reservations desk at +91 73788 18818."
    },
    {
      question: "Is the resort pet-friendly?",
      answer: "Please contact our reservations team for information regarding our pet policy, as it may vary based on the accommodation type."
    },
    {
      question: "What is the cancellation policy?",
      answer: "Our cancellation policy varies depending on the type of booking and the time of year. Generally, cancellations made 7 days prior to arrival are fully refundable. Please refer to your booking confirmation for specific details."
    }
  ];

  return (
    <main className="min-h-screen bg-background pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="font-display text-4xl md:text-5xl text-foreground mb-12">Frequently Asked Questions</h1>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border/60 pb-6">
              <h3 className="font-display text-2xl text-foreground mb-3">{faq.question}</h3>
              <p className="font-sans text-foreground/80 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-24">
        <Footer />
      </div>
    </main>
  );
}
