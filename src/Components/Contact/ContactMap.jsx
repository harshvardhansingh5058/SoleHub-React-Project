export default function ContactMap() {
  return (
    <div className="h-full">
      <h2 className="mb-5 text-xl font-bold tracking-tight text-gray-900">
        Find Us
      </h2>

      <div className="overflow-hidden rounded-xl border border-gray-100 shadow-sm">
        <iframe
          title="SoleHub Location"
          src="https://www.google.com/maps?q=Jodhpur,Rajasthan&output=embed"
          width="100%"
          height="300"
          loading="lazy"
          allowFullScreen=""
          referrerPolicy="no-referrer-when-downgrade"
          className="block w-full border-0"
        />
      </div>
    </div>
  );
}