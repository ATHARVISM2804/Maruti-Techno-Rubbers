import React, { useEffect, useRef, useState } from 'react';
import './Preloader.css';
import gsap from 'gsap';

const Preloader: React.FC = () => {
  const preloaderRef = useRef<HTMLDivElement | null>(null);
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const [showCircle, setShowCircle] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setShowCircle(true);
        setTimeout(() => {
          if (preloaderRef.current) {
            gsap.to(preloaderRef.current, {
              opacity: 0,
              duration: 0.8,
              onComplete: () => {
                if (preloaderRef.current) {
                  preloaderRef.current.style.display = 'none';
                }
              }
            });
          }
        }, 1800);
      }
    });

    tl.fromTo(
      lettersRef.current,
      {
        y: 60,
        rotateX: -90,
        opacity: 0
      },
      {
        y: 0,
        rotateX: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'back.out(1.7)',
        stagger: 0.1
      }
    );
  }, []);

  const setLetterRef = (el: HTMLSpanElement | null, idx: number) => {
    lettersRef.current[idx] = el;
  };

  return (
    <div className="preloader" ref={preloaderRef}>
      <div className="radial-bg" />
      <div className={`maruti-wrapper ${showCircle ? 'with-glow' : ''}`}>
        <div className="maruti-logo">
          {'MARUTI'.split('').map((char, i) => (
            <span key={i} ref={(el) => setLetterRef(el, i)}>
              {char}
            </span>
          ))}
        </div>
        {showCircle && <div className="glow-circle" />}
        {showCircle && <p className="tagline">Engineering the Future</p>}
      </div>
    </div>
  );
};

export default Preloader;
