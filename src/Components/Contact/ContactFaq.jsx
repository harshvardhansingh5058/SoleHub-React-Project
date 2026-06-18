import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "How long does shipping take?",
    answer:
      "Orders are typically delivered within 3–7 business days depending on your location.",
  },
  {
    id: 2,
    question: "What is your return policy?",
    answer:
      "We offer a 7-day hassle-free return and exchange policy on eligible products.",
  },
  {
    id: 3,
    question: "How can I track my order?",
    answer:
      "Once your order ships, you'll receive a tracking link via email and SMS.",
  },
  {
    id: 4,
    question: "Do you offer international shipping?",
    answer:
      "Currently we only ship within India, but international shipping is coming soon.",
  },
  {
    id: 5,
    question: "Are all products 100% authentic?",
    answer:
      "Yes, every product sold on SoleHub is sourced directly from authorized brands and distributors.",
  },
];

export default function ContactFaq() {
  const [activeFaq, setActiveFaq] = useState(1);

  const handleToggle = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <div>
      <h2 className="mb-5 text-xl font-bold tracking-tight text-gray-900">
        FAQ Quick Links
      </h2>

      <div className="divide-y divide-gray-100 rounded-xl border border-gray-100 bg-white shadow-sm overflow-hidden">
        {faqs.map((faq) => (
          <div key={faq.id}>
            <button
              onClick={() => handleToggle(faq.id)}
              className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors duration-150 hover:bg-gray-50"
            >
              <span className="text-sm font-medium text-gray-800 pr-4 leading-snug">
                {faq.question}
              </span>

              <span className="flex-shrink-0">
                <ChevronDown
                  size={16}
                  strokeWidth={2.2}
                  className={`text-gray-400 transition-transform duration-300 ${
                    activeFaq === faq.id ? "rotate-180 text-gray-700" : ""
                  }`}
                />
              </span>
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                activeFaq === faq.id ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-4 pt-0.5 text-sm leading-relaxed text-gray-500">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}