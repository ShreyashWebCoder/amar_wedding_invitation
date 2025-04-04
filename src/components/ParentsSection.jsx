import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ParentsSection = () => {
  const sectionRef = useRef();

  useEffect(() => {
    gsap.from('.parent-card', {
      y: 50,
      opacity: 0,
      stagger: 0.3,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        toggleActions: 'play none none none',
      },
    });
  }, []);

  return (
    <section id="parents" className="animate-section py-8" ref={sectionRef}>
      <h2 className="text-3xl md:text-4xl font-bold text-wedding-primary mb-8 text-center font-heading relative">
        कुटुंब परिचय
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-4 w-44 h-1 bg-gradient-to-r from-transparent via-yellow-600 to-transparent mt-4 font-marathi"></div>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Groom's Parents */}
        <div className="parent-card bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
          <div className="mb-4 relative mx-auto w-48 h-64 overflow-hidden rounded-lg">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.7fUe6tU0co0wP9_gCZdIEwAAAA&pid=Api&P=0&h=180"
              alt="Groom's Parents"
              className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
            />
          </div>
          <h3 className="text-xl font-semibold text-wedding-primary mb-2 font-marathi">
            वराचे पालक
          </h3>
          <p className="text-gray-700 font-marathi">
            सौ. दुर्गाताई व संजयजी वाढई
          </p>
          <p className="text-gray-700 mt-2 font-marathi">
            मु. कन्हांडला, पो. नवेगाव (साधु), त. उमरेड, जि. नागपूर
          </p>
        </div>

        {/* Bride's Parents */}
        <div className="parent-card bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
          <div className="mb-4 relative mx-auto w-48 h-64 overflow-hidden rounded-lg">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.jdPrLpCYnGJfWco7UHYFwQHaHa&pid=Api&P=0&h=180"
              alt="Bride's Parents"
              className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
            />
          </div>
          <h3 className="text-xl font-semibold text-wedding-primary mb-2 font-marathi">
            वधूचे पालक
          </h3>
          <p className="text-gray-700 font-marathi">
            सौ. माधुरीताई व मधुकरजी मेंढे
          </p>
          <p className="text-gray-700 mt-2 font-marathi">
            मु. वडेगाव, त. सडक अर्जुनी, जि. गोंदिया
          </p>
        </div>
      </div>
    </section>
  );
};

export default ParentsSection;