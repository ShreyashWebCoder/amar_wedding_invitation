import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Header = () => {
  const headerRef = useRef();
  const titleRef = useRef();
  const subtitleRef = useRef();

  useEffect(() => {
    // Header animations
    gsap.from(headerRef.current, {
      y: -50,
      opacity: 0,
      duration: 1.2,
      ease: "elastic.out(1, 0.5)",
    });

    gsap.from(titleRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: "power2.out",
    });

    gsap.from(subtitleRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      delay: 0.6,
      ease: "power1.out",
    });
  }, []);

  return (
    <header
      id="header"
      className="relative py-8 md:py-12 text-center"
      ref={headerRef}
    >
      <div className="relative inline-block">
        <div
          ref={titleRef}
          className="bg-wedding-primary rounded-full p-8 md:p-12 relative overflow-hidden  header-title shadow-2xl border-4 border-yellow-600"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-heading">
            <span>अमर</span>
            <span className="inline-block mx-2 animate-heartbeat">❤️</span>
            <span>हर्षा</span>
          </h1>
        </div>
      </div>

      <div className="mt-8 relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-24 h-1 bg-gradient-to-r from-transparent via-yellow-600 to-transparent"></div>
        <p 
        ref={subtitleRef}
        className="header-subtitle text-xl md:text-2xl text-wedding-primary  font-semibold mt-4 font-wedding-title">
          || शुभ विवाह ||
        </p>
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-4 w-24 h-1 bg-gradient-to-r from-transparent via-yellow-600 to-transparent mt-4  "></div>
      </div>

      {/* <p
        ref={subtitleRef}
        className="header-subtitle text-lg md:text-xl text-wedding-primary italic mt-4   "
      >
        || शुभ विवाह ||
      </p> */}
    </header>
  );
};

export default Header;
