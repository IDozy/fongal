import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router'; // Importa useRouter para redirigir
import { useAnimation } from 'framer-motion';
import { HeroBackground } from './components/Landing/Hero/HeroBackground';
import { HeroCow } from './components/Landing/Hero/HeroCow';
import { HeroContent } from './components/Landing/Hero/HeroContent';
import { Navigation } from './components/Landing/Hero/Navigation/Navigation';
import PricingSection from './components/PricingSection';
import styles from './Landing.module.css';

const LandingPage: React.FC = () => {
  const controls = useAnimation();
  const textRef = useRef<HTMLDivElement>(null);
  const router = useRouter(); // Usamos useRouter para redirección

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, y: 0 });
        }
      },
      { threshold: 0.1 }
    );

    const refCopy = textRef.current;

    if (refCopy) {
      observer.observe(refCopy);
    }

    return () => {
      if (refCopy) {
        observer.unobserve(refCopy);
      }
    };
  }, [controls]);

  // Función para manejar el clic en el botón
  const handleRedirect = () => {
    router.push('/participantes');
  };

  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <HeroBackground />
        <HeroCow />
        <HeroContent />
        <Navigation />
      </div>
      <PricingSection />

      {/* Aquí agregamos el botón que redirige usando useRouter */}
      <div className="mt-8 text-center">
        <button
          className="bg-green-500 text-white font-semibold py-3 px-8 rounded-lg hover:bg-green-600 transition-colors duration-300"
          onClick={handleRedirect} // Llama a la función que usa router.push
        >
          Ver Participantes
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
