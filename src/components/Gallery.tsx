// Gallery.jsx
import React, { useState, useEffect, useRef } from "react";
import { Image as ImageIcon, X } from "lucide-react";
import gsap from "gsap";

const images = [
  {
    src: "https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg",
    alt: "Bridge Construction"
  },
  {
    src: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg",
    alt: "Manufacturing Facility"
  },
//   {
//     src: "https://images.pexels.com/photos/162539/pexels-photo-162539.jpeg",
//     alt: "Expansion Joint Installation"
//   },
  {
    src: "https://images.pexels.com/photos/1089459/pexels-photo-1089459.jpeg",
    alt: "PVC Waterstop Application"
  },
  {
    src: "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg",
    alt: "Geo-Membrane Lining"
  },
  {
    src: "https://images.pexels.com/photos/207252/pexels-photo-207252.jpeg",
    alt: "Bearing Pad Production"
  },
  {
    src: "https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg",
    alt: "Bridge Drainage Spout"
  },
  {
    src: "https://images.pexels.com/photos/315938/pexels-photo-315938.jpeg",
    alt: "Highway Project"
  }
];

const Gallery = () => {
  const [modal, setModal] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".gallery-scroll-track", {
        x: "-50%",
        duration: 30,
        ease: "linear",
        repeat: -1
      });
    }, scrollRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 " ref={scrollRef}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#004d40] mb-4">Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our projects, products, and manufacturing excellence
          </p>
        </div>

        <div className="overflow-hidden">
          <div className="flex w-max gallery-scroll-track">
            {[...images, ...images].map((img, idx) => (
              <button
                key={idx}
                type="button"
                className="group relative w-64 h-64 mx-4 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 focus:outline-none"
                onClick={() => setModal(img)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#004d40]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex items-center gap-2 text-white">
                      <ImageIcon className="h-5 w-5" />
                      <span className="font-medium text-sm truncate">{img.alt}</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
          onClick={() => setModal(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl p-4 max-w-3xl w-full relative flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-slate-500 hover:text-slate-900 text-2xl font-bold"
              onClick={() => setModal(null)}
              aria-label="Close"
              type="button"
            >
              <X className="h-7 w-7" />
            </button>
            <img
              src={modal.src}
              alt={modal.alt}
              className="max-h-[70vh] w-auto object-contain mb-4 rounded-xl"
            />
            <span className="text-slate-800 text-base font-semibold text-center">
              {modal.alt}
            </span>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
