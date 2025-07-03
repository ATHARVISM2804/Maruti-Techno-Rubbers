import React, { useEffect, useRef, useState } from 'react';
import './Preloader.css';
import gsap from 'gsap';

const Preloader: React.FC = () => {
  const preloaderRef = useRef<HTMLDivElement | null>(null);
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const [showCircle, setShowCircle] = useState(false);
  const [showTagline, setShowTagline] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setShowCircle(true);

        // Show tagline after circle
        setTimeout(() => {
          setShowTagline(true);

          // Then hide preloader
          setTimeout(() => {
            if (preloaderRef.current) {
              gsap.to(preloaderRef.current, {
                opacity: 0,
                duration: 1,
                ease: 'power2.out',
                onComplete: () => {
                  preloaderRef.current!.style.display = 'none';
                }
              });
            }
          }, 1600);
        }, 800);
      }
    });

    // Letter flip + fade
    tl.fromTo(
      lettersRef.current,
      {
        y: 80,
        rotateX: -90,
        opacity: 0
      },
      {
        y: 0,
        rotateX: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'back.out(1.7)',
        stagger: 0.12
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
        {showTagline && (
          <p className="tagline">
            <span className="typed-text">Engineering the Future</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Preloader;
