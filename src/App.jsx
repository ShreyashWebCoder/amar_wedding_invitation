import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./components/Header";
import CountdownTimer from "./components/CountdownTimer";
import ParentsSection from "./components/ParentsSection";
import WeddingFunctions from "./components/WeddingFunctions";
import Gallery from "./components/Gallery";
import VenueMap from "./components/VenueMap";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  const appRef = useRef();

  useEffect(() => {
    // Initialize animations when component mounts
    initAnimations();
  }, []);

  const initAnimations = () => {
    // Animate sections on scroll
    gsap.utils.toArray(".animate-section").forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });
  };

  return (
    <div ref={appRef} className="min-h-screen overflow-x-hidden">
      {/* Decorative Border Top */}
      <div className="decorative-border"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Religious Invocation */}
        <div className="text-center text-wedding-primary mb-6">
          <p className="text-lg ">
            || श्री वाघाई प्रसन्न || || श्री गणेशाय नमः ||
          </p>
        </div>

        <Header />

        {/* Bride & Groom Section */}
        <section id="bride-groom" className="animate-section py-8">
          <h2 className="text-3xl md:text-4xl font-bold text-wedding-primary mb-8 text-center font-heading relative">
            वर - वधू परिचय
            <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-4 w-44 h-1 bg-gradient-to-r from-transparent via-yellow-600 to-transparent mt-4 font-marathi"></div>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Groom Profile */}
            <div className="profile-card bg-white rounded-lg shadow-lg p-6 text-center transition-all duration-300 hover:shadow-xl">
              <div className="mb-4 relative mx-auto w-48 h-64 overflow-hidden rounded-lg">
                <img
                  src="https://tse1.mm.bing.net/th?id=OIP.7fUe6tU0co0wP9_gCZdIEwAAAA&pid=Api&P=0&h=180"
                  alt="Groom"
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold text-wedding-primary mb-2 font-marathi">
                चि. अमर
              </h3>
              <p className="text-gray-700 font-marathi">
                सौ. दुर्गाताई व संजयजी वाढई यांचे चिरंजीव
              </p>
              <p className="text-gray-700 mt-2 font-marathi">
                मु. कन्हांडला, पो. नवेगाव (साधु), त. उमरेड, जि. नागपूर
              </p>
            </div>

            {/* Bride Profile */}
            <div className="profile-card bg-white rounded-lg shadow-lg p-6 text-center transition-all duration-300 hover:shadow-xl">
              <div className="mb-4 relative mx-auto w-48 h-64 overflow-hidden rounded-lg">
                <img
                  src="https://tse4.mm.bing.net/th?id=OIP.jdPrLpCYnGJfWco7UHYFwQHaHa&pid=Api&P=0&h=180"
                  alt="Bride"
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold text-wedding-primary mb-2 font-marathi">
                कु. हर्षा
              </h3>
              <p className="text-gray-700 font-marathi">
                सौ. माधुरीताई व मधुकरजी मेंढे यांची तृतीय कन्या
              </p>
              <p className="text-gray-700 mt-2 font-marathi">
                मु. वडेगाव, त. सडक अर्जुनी, जि. गोंदिया
              </p>
            </div>
          </div>
        </section>

        {/* Parents Section */}
        <ParentsSection />

        {/* Wedding Details Section */}
        <section id="wedding-details" className="animate-section py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mandap Pujan */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-wedding-primary mb-4 font-marathi">
                मंडप पूजन
              </h3>
              <p className="text-gray-700 font-marathi">
                शुक्रवार दि. २३/०५/२०२५
              </p>
            </div>

            {/* Wedding Muhurat */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-wedding-primary mb-4 font-marathi">
                विवाह मुहूर्त
              </h3>
              <p className="text-gray-700 font-marathi">
                शनिवार दि. २४/०५/२०२५ ला
                <br />
                सायंकाळी ६:०७ मि. (गोरज मुहूर्त)
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Wedding Venue */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-wedding-primary mb-4 font-marathi">
                विवाह स्थळ
              </h3>
              <p className="text-gray-700 font-marathi">
                अनुप सेलिब्रेशन लॉन
                <br />
                घटाली रोड, बालाजी नगर, उमरेड
              </p>
            </div>

            {/* Reception */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-wedding-primary mb-4 font-marathi">
                स्वागत समारंभ
              </h3>
              <p className="text-gray-700 font-marathi">
                शनिवार दि. २४/०५/२०२५ ला
                <br />
                सायंकाळी ७.०० वाजता
              </p>
            </div>
          </div>
        </section>

        {/* Countdown Section */}
        <CountdownTimer />

        {/* Wedding Functions Section */}
        <WeddingFunctions />

        {/* Video Section */}
        <section id="video" className="animate-section py-8">
          <h2 className="text-3xl md:text-4xl font-bold text-wedding-primary mb-8 text-center font-heading relative">
            प्री-वेडिंग व्हिडिओ
            <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-4 w-44 h-1 bg-gradient-to-r from-transparent via-yellow-600 to-transparent mt-4 font-marathi"></div>
          </h2>
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden shadow-lg max-w-4xl mx-auto">
            <iframe
              className="w-full h-64 md:h-96"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Pre-Wedding Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* Gallery Section */}
        <Gallery />

        {/* Venue Section */}
        <VenueMap />

        {/* Closing Message */}
        <section
          id="closing-message"
          className="animate-section py-8 text-center"
        >
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <p className="text-wedding-primary text-lg font-marathi">
              इवलेसे आम्ही, छोटेसे आमचे मन,
              <br />
              आमच्या काकाच्या लग्नाला यायचे सर्व जन
              <br />
              <b> कुमारी- गार्गी वाढई</b>
            </p>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-wedding-primary text-white py-6 text-center mt-8">
        <div className="max-w-6xl mx-auto px-4">
          <p className="mb-2 font-sans">
            लग्न सोहळ्याचा रंग उठल्हा वाढई व मेंढे परिवारावर
            <br />
            आपला आशिर्वाद अनुग्रहा वधू वरावर,
            <br />
            म्हणून हे आनंदाचे निमंत्रण...
          </p>
          <p className="text-sm text-wedding-accent mt-4">
            <p className="">© shreyash_wadhai </p>
            {new Date().getFullYear()} | सर्व हक्क राखीव
          </p>
        </div>
      </footer>

      {/* Decorative Border Bottom */}
      <div className="decorative-border-bottom"></div>
    </div>
  );
}

export default App;
