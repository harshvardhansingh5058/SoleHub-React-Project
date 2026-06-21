import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "react-toastify";

const inputClass =
  "w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none transition-colors duration-150 focus:border-gray-800 focus:ring-2 focus:ring-gray-800/5";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = form;

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    toast.success("Message sent! We'll get back to you soon.");
    setForm(initialForm);
  };

  return (
    <div>
      <h2 className="mb-6 text-xl font-bold tracking-tight text-gray-900">
        Send Us a Message
      </h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className={inputClass}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className={inputClass}
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          className={inputClass}
        />

        <textarea
          rows={5}
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
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