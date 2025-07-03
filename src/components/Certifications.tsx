import React, { useState } from "react";

const certificates = [
  {
    src: "https://www.marutirubber.com/assets/img/certificate/certificate-one.png",
    alt: "ISO 9001 Certificate"
  },
  {
    src: "https://www.marutirubber.com/assets/img/certificate/certificate-two.png",
    alt: "ISO 14001 Certificate"
  },
  {
    src: "https://www.marutirubber.com/assets/img/certificate/certificate-three.png",
    alt: "ISO 45001 Certificate"
  },
  {
    src: "https://www.marutirubber.com/assets/img/certificate/certificate-three.png",
    alt: "ISO 45001 Certificate"
  },
  // Add more certificates as needed
];

const Certifications = () => {
  const [modal, setModal] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Our Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          {certificates.map((cert, idx) => (
            <button
              key={idx}
              className="bg-white rounded-xl shadow p-4 flex flex-col items-center focus:outline-none hover:shadow-lg transition"
              onClick={() => setModal(cert)}
              type="button"
            >
              <img
                src={cert.src}
                alt={cert.alt}
                className="h-48 w-auto object-contain mb-4"
                loading="lazy"
              />
              <span className="text-slate-700 text-sm font-medium">{cert.alt}</span>
            </button>
          ))}
        </div>
      </div>
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/60"
          onClick={() => setModal(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl p-6 max-w-lg w-full relative flex flex-col items-center"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-slate-500 hover:text-slate-900 text-2xl font-bold"
              onClick={() => setModal(null)}
              aria-label="Close"
              type="button"
            >
              &times;
            </button>
            <img
              src={modal.src}
              alt={modal.alt}
              className="max-h-[60vh] w-auto object-contain mb-4"
            />
            <span className="text-slate-800 text-base font-semibold">{modal.alt}</span>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
