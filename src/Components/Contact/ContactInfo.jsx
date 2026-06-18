import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const contactItems = [
  {
    icon: faPhone,
    label: "Phone",
    primary: "+91 98765 43210",
    secondary: "Mon – Sat: 10:00 AM – 7:00 PM",
  },
  {
    icon: faEnvelope,
    label: "Email",
    primary: "support@solehub.com",
    secondary: "We reply within 24 hours",
  },
  {
    icon: faLocationDot,
    label: "Address",
    primary: "SoleHub Store Pvt. Ltd.",
    secondary: "123, Fashion Street, Mumbai\nMaharashtra – 400001",
  },
];

const socials = [
  { icon: faFacebookF, href: "#", label: "Facebook" },
  { icon: faInstagram, href: "#", label: "Instagram" },
  { icon: faXTwitter, href: "#", label: "Twitter" },
  { icon: faYoutube, href: "#", label: "YouTube" },
];

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-8">
      {/* Heading */}
      <div>
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-gray-400">
          Contact
        </p>
        <h2 className="text-2xl font-black tracking-tight text-gray-900">
          Get In Touch
        </h2>
      </div>

      {/* Contact items */}
      <div className="flex flex-col gap-5">
        {contactItems.map(({ icon, label, primary, secondary }) => (
          <div
            key={label}
            className="group flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition-shadow duration-200 hover:shadow-md"
          >
            {/* Icon bubble */}
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-950 text-white transition-colors duration-200 group-hover:bg-gray-800">
              <FontAwesomeIcon icon={icon} className="text-sm" />
            </div>

            {/* Text */}
            <div className="min-w-0">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">
                {label}
              </p>
              <p className="mt-0.5 text-sm font-semibold text-gray-900">
                {primary}
              </p>
              {secondary.split("\n").map((line, i) => (
                <p key={i} className="text-xs leading-relaxed text-gray-500">
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Follow Us */}
      <div>
        <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-black text-4xl ">
          Follow Us
        </p>
        <div className="flex gap-2">
          {socials.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm transition-all duration-200 hover:border-gray-900 hover:bg-gray-900 hover:text-white hover:shadow-md"
            >
              <FontAwesomeIcon icon={icon} className="text-sm" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}