import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const functions = [
  {
    id: 1,
    icon: "https://cdn-icons-png.flaticon.com/128/3598/3598860.png",
    title: "हळदी",
    date: "23 मे 2025",
    time: "सकाळी 10:00",
    color: "bg-yellow-500",
  },
  {
    id: 2,
    icon: "https://cdn-icons-png.flaticon.com/128/17155/17155868.png",
    title: "मेहंदी",
    date: "23 मे 2025",
    time: "संध्याकाळी 5:00",
    color: "bg-green-500",
  },
  {
    id: 3,
    icon: "https://cdn-icons-png.flaticon.com/128/12565/12565827.png",
    title: "‎संगीत",
    date: "23 मे 2025",
    time: "रात्री 8:00",
    color: "bg-red-500",
  },
  {
    id: 4,
    icon: "https://cdn-icons-png.flaticon.com/128/4165/4165624.png",
    title: "विवाह",
    date: "24 मे 2025",
    time: "सायंकाळी 6:07",
    color: "bg-purple-600",
  },
  //   {
  //     id: 5,
  //     icon: '🎉',
  //     title: 'रिसेप्शन',
  //     date: '24 मे 2025',
  //     time: 'सायंकाळी 7:00',
  //     color: 'bg-blue-500',
  //   },
];

const WeddingFunctions = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Ensure cards exist before animating
    if (cardsRef.current.length > 0) {
      gsap.from(cardsRef.current, {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // When top of trigger hits 80% of viewport
          end: "bottom 20%", // Optional but recommended
          toggleActions: "play none none none",
        },
      });
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    // Animation for cards
    // gsap.from(cardsRef.current, {
    //   y: 50,
    //   opacity: 1,
    //   stagger: 0.2,
    //   duration: 0.8,
    //   ease: "back.out(1.7)",
    //   scrollTrigger: {
    //     trigger: sectionRef.current,
    //     start: "top 80%",
    //     toggleActions: "play none none none",
    //   },
    // });

    // Hover effects
    const cards = cardsRef.current;
    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          y: -5,
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2)",
          duration: 0.3,
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          y: 0,
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          duration: 0.3,
        });
      });
    });

    return () => {
      cards.forEach((card) => {
        card?.removeEventListener("mouseenter", () => {});
        card?.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-wedding-cream"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-wedding-primary font-heading relative">
            ‎कार्यक्रम
            <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-4 w-44 h-1 bg-gradient-to-r from-transparent via-yellow-600 to-transparent mt-4 font-marathi"></div>
          </h2>
        </div>

        {/* Function Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {functions.map((func) => (
            <div
              key={func.id}
              ref={addToRefs}
              className={`${func.color} rounded-lg p-6 text-white text-center  min-h-[200px] flex flex-col items-center justify-center`}
            >
              {/* <div className="text-4xl mb-4">{func.icon}</div> */}
              <img
                src={func.icon}
                className=" w-16 h-16 mb-4 "
                alt=""
                srcset=""
              />
              <h3 className="text-xl font-bold mb-2 font-marathi">
                {func.title}
              </h3>
              <div className="text-sm font-marathi">
                <p>{func.date}</p>
                <p>{func.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeddingFunctions;
