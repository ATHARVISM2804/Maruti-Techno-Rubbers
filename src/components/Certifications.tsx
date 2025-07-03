import React from "react";

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
    src: "https://www.marutirubber.com/assets/img/certificate/certificate.png",
    alt: "ISO 45001 Certificate"
  },
  // Add more certificates as needed
];

const Certifications = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Our Certifications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
        {certificates.map((cert, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <img
              src={cert.src}
              alt={cert.alt}
              className="h-48 w-auto object-contain mb-4"
              loading="lazy"
            />
            <span className="text-slate-700 text-sm font-medium">{cert.alt}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
