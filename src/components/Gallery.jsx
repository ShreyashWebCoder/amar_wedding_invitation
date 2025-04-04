import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Zoom, FreeMode } from "swiper/modules";
import { FaTimes, FaExpand, FaCompress } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";
import "swiper/css/free-mode";

const galleryItems = [
  {
    id: 1,
    src: "https://tse1.mm.bing.net/th?id=OIP.bVnmhDcLbf2stI4pDamkHgHaHa&pid=Api&P=0&h=180",
    alt: "Pre-wedding photo 1",
    title: "Pre-Wedding Moments",
    wide: true,
  },
  {
    id: 2,
    src: "https://tse1.mm.bing.net/th?id=OIP.bVnmhDcLbf2stI4pDamkHgHaHa&pid=Api&P=0&h=180",
    alt: "Pre-wedding photo 2",
    title: "Pre-Wedding Moments",
  },
  {
    id: 3,
    src: "https://tse1.mm.bing.net/th?id=OIP.bVnmhDcLbf2stI4pDamkHgHaHa&pid=Api&P=0&h=180",
    alt: "Pre-wedding photo 3",
    title: "Pre-Wedding Moments",
  },
  {
    id: 4,
    src: "https://tse1.mm.bing.net/th?id=OIP.bVnmhDcLbf2stI4pDamkHgHaHa&pid=Api&P=0&h=180",
    alt: "Pre-wedding photo 4",
    title: "Pre-Wedding Moments",
    wide: true,
  },
  {
    id: 5,
    src: "https://tse1.mm.bing.net/th?id=OIP.bVnmhDcLbf2stI4pDamkHgHaHa&pid=Api&P=0&h=180",
    alt: "Pre-wedding photo 5",
    title: "Pre-Wedding Moments",
  },
  {
    id: 6,
    src: "https://tse1.mm.bing.net/th?id=OIP.bVnmhDcLbf2stI4pDamkHgHaHa&pid=Api&P=0&h=180",
    alt: "Pre-wedding photo 6",
    title: "Pre-Wedding Moments",
    tall: true,
  },
  {
    id: 5,
    src: "https://tse1.mm.bing.net/th?id=OIP.bVnmhDcLbf2stI4pDamkHgHaHa&pid=Api&P=0&h=180",
    alt: "Pre-wedding photo 5",
    title: "Pre-Wedding Moments",
    wide: true,
  },
  {
    id: 6,
    src: "https://tse1.mm.bing.net/th?id=OIP.bVnmhDcLbf2stI4pDamkHgHaHa&pid=Api&P=0&h=180",
    alt: "Pre-wedding photo 6",
    title: "Pre-Wedding Moments",
  },
  {
    id: 5,
    src: "https://tse1.mm.bing.net/th?id=OIP.bVnmhDcLbf2stI4pDamkHgHaHa&pid=Api&P=0&h=180",
    alt: "Pre-wedding photo 5",
    title: "Pre-Wedding Moments",
    // wide: true,
  },
  {
    id: 6,
    src: "https://tse1.mm.bing.net/th?id=OIP.bVnmhDcLbf2stI4pDamkHgHaHa&pid=Api&P=0&h=180",
    alt: "Pre-wedding photo 6",
    title: "Pre-Wedding Moments",
    wide: true,
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const galleryRef = useRef();
  const lightboxRef = useRef();

  // Responsive grid settings
  const getGridLayout = () => {
    if (typeof window === "undefined") return { cols: 3, gap: 5 };

    const width = window.innerWidth;
    if (width < 640) return { cols: 2, gap: 4 }; // Mobile
    if (width < 1024) return { cols: 3, gap: 5 }; // Tablet
    return { cols: 4, gap: 4 }; // Desktop
  };

  // Dynamic image sizing
  const getImageSize = (item) => {
    if (typeof window === "undefined") return "";

    const width = window.innerWidth;
    if (width < 640) {
      // Mobile
      if (item.wide) return "col-span-2";
      if (item.tall) return "row-span-2";
      return "";
    }
    // Desktop/Tablet - Instagram-like dynamic sizing
    if (item.wide) return "lg:col-span-2";
    if (item.tall) return "lg:row-span-2";
    return "";
  };

  useEffect(() => {
    // Initialize animations only on client side
    if (typeof window !== "undefined") {
      gsap.from(".gallery-item", {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Handle fullscreen changes
      const handleFullscreenChange = () => {
        setIsFullscreen(!!document.fullscreenElement);
      };

      document.addEventListener("fullscreenchange", handleFullscreenChange);

      return () => {
        document.removeEventListener(
          "fullscreenchange",
          handleFullscreenChange
        );
      };
    }
  }, []);

  const openLightbox = (id) => {
    setSelectedImage(id);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
    exitFullscreen();
  };

  const toggleFullscreen = () => {
    if (!lightboxRef.current) return;

    if (!document.fullscreenElement) {
      lightboxRef.current.requestFullscreen?.().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen?.();
    }
  };

  const exitFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen?.();
    }
  };

  const { cols, gap } = getGridLayout();

  return (
    <section
      id="gallery"
      className="py-12 px-4 sm:px-6 lg:px-8"
      ref={galleryRef}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-wedding-primary mb-4 text-center font-heading relative">
        सुवर्ण क्षण
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-4 w-44 h-1 bg-gradient-to-r from-transparent via-yellow-600 to-transparent mt-4 font-marathi"></div>
      </h2>

      {/* Responsive Gallery Grid */}
      <div
        className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-${gap}`}
      >
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className={`gallery-item relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl ${getImageSize(item)}`}
            onClick={() => openLightbox(item.id)}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover aspect-square"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white font-medium">{item.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          ref={lightboxRef}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-2xl z-50 bg-black/50 rounded-full p-2 hover:bg-black/80 transition-colors"
          >
            <FaTimes />
          </button>

          <div className="relative w-full h-full max-w-6xl max-h-screen flex items-center justify-center">
            <Swiper
              initialSlide={galleryItems.findIndex(
                (item) => item.id === selectedImage
              )}
              modules={[Navigation, Pagination, Zoom, FreeMode]}
              navigation
              pagination={{ clickable: true }}
              zoom
              freeMode
              className="w-full h-full"
            >
              {galleryItems.map((item) => (
                <SwiperSlide
                  key={item.id}
                  className="flex items-center justify-center"
                >
                  <div className="swiper-zoom-container w-full h-full flex items-center justify-center">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className={`${isFullscreen ? "object-contain" : "object-cover"} max-w-full max-h-full`}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              onClick={toggleFullscreen}
              className="absolute bottom-4 right-4 text-white text-xl z-50 bg-black/50 rounded-full p-3 hover:bg-black/80 transition-colors"
            >
              {isFullscreen ? <FaCompress /> : <FaExpand />}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
