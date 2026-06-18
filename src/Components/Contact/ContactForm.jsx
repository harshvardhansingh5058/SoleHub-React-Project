import { Send } from "lucide-react";

const inputClass =
  "w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none transition-colors duration-150 focus:border-gray-800 focus:ring-2 focus:ring-gray-800/5";

export default function ContactForm() {
  return (
    <div>
      <h2 className="mb-6 text-xl font-bold tracking-tight text-gray-900">
        Send Us a Message
      </h2>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className={inputClass}
        />

        <input
          type="email"
          placeholder="Email Address"
          className={inputClass}
        />

        <input
          type="text"
          placeholder="Subject"
          className={inputClass}
        />

        <textarea
          rows={5}
          placeholder="Your Message"
          className={`${inputClass} resize-none`}
        />

        <button
          type="submit"
          className="flex w-full items-center justify-between rounded-lg bg-black px-5 py-3.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-gray-800 active:bg-gray-900"
        >
          <span>Send Message</span>
          <Send size={16} strokeWidth={2} />
        </button>
      </form>
    </div>
  );
}