import React from "react";

// Add more videos here as needed
const videos = [
  {
    src: "https://www.youtube.com/embed/-QTkPfq7w1A",
    title: "Maruti Techno Rubber Facility Tour",
  },
  {
    src: "https://www.youtube.com/embed/-RaHk6ckrEI",
    title: "I Needed an Engine, So I Built a CNC Machine",
  }
];

const VideoSection = () => {
  return (
    <section className="py-24 bg-slate-100" id="video" data-observe>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-6 animate-fade-in-up">
          Inside Our Manufacturing
        </h2>
        <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto animate-fade-in-up delay-200">
          Take a closer look at our cutting-edge facility and how we deliver
          top-notch quality in every product.
        </p>
        <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
          {videos.map((video, idx) => (
            <div
              key={idx}
              className="w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl animate-fade-in-up delay-400 aspect-video"
            >
              <iframe
                src={video.src}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full min-h-[250px] max-h-[70vh]"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;


<iframe width="1521" height="613" src="https://www.youtube.com/embed/-RaHk6ckrEI" title="I Needed an Engine, So I Built a CNC Machine" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>