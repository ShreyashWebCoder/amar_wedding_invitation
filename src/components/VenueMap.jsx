import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const VenueMap = () => {
  const venueRef = useRef();

  useEffect(() => {
    gsap.from(venueRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: venueRef.current,
        start: 'top 70%',
        toggleActions: 'play none none none',
      },
    });
  }, []);

  return (
    <section id="venue" className="animate-section py-8">
      <h2 className="text-3xl md:text-4xl font-bold text-wedding-primary mt-5 mb-8 text-center font-heading relative">
        विवाहस्थळ
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-4 w-44 h-1 bg-gradient-to-r from-transparent via-yellow-600 to-transparent mt-4  "></div>
      </h2>

      <div
        ref={venueRef}
        className="venue-card bg-white rounded-lg shadow-lg p-6 text-center max-w-3xl mx-auto hover:shadow-xl transition-shadow duration-300"
      >
        <div className="text-3xl mb-4">🏯</div>
        <h3 className="text-2xl font-bold text-wedding-primary mb-2  ">
          अनुप सेलिब्रेशन लॉन
        </h3>
        <p className="text-gray-700 mb-4  ">
          घटाली रोड, बालाजी नगर, उमरेड
        </p>

        <div className="mt-6 h-96 bg-gray-200 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728.6685600480537!2d79.3101793755536!3d20.845086280758792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4ab0375fa515d%3A0x7b5855d2c0d5b38b!2sAnup%20Celebration%20Lawn!5e0!3m2!1sen!2sin!4v1743564455526!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="mt-6 flex justify-center">
          <a
            href="https://maps.app.goo.gl/Z226K9NPxYtXT1xh6"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-wedding-primary text-white px-6 py-2 rounded-full hover:bg-wedding-secondary transition-colors duration-300  "
          >
            मार्गदर्शन मिळवा
          </a>
        </div>
      </div>
    </section>
  );
};

export default VenueMap;