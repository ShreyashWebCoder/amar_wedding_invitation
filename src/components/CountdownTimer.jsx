import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const weddingDate = new Date('2025-05-24T18:07:00').getTime();
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    // Update immediately
    updateCountdown();

    // Then update every second
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => num.toString().padStart(2, '0');

  return (
    <section id="countdown" className="animate-section py-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-wedding-primary mb-8 font-heading relative">
        आतुरता लग्नाची
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-4 w-44 h-1 bg-gradient-to-r from-transparent via-yellow-600 to-transparent mt-4 font-marathi"></div>
      </h2>

      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="flex flex-col items-center">
            <div className="bg-wedding-accent border-2 border-wedding-secondary rounded-full w-20 h-20 md:w-24 md:h-24 flex items-center justify-center text-wedding-primary font-bold text-2xl md:text-3xl">
              {formatNumber(value)}
            </div>
            <span className="mt-2 text-gray-700 font-marathi">
              {unit === 'days' && 'दिवस'}
              {unit === 'hours' && 'तास'}
              {unit === 'minutes' && 'मिनिटे'}
              {unit === 'seconds' && 'सेकंद'}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CountdownTimer;