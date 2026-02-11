// src/components/sections/HeroSection.tsx - VERSIÓN CON IMAGEN GRANDE
"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  Headphones,
  Shield,
  Zap,
  Sparkles,
  PlayCircle,
  Star,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const [particlePositions, setParticlePositions] = useState<
    Array<{ x: number; y: number }>
  >([]);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const positions = Array.from({ length: 20 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setParticlePositions(positions);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, [isMounted]);

  useEffect(() => {
    if (!isMounted) return;
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMounted]);

  const heroSlides = [
    {
      title: "Calidad que se siente, no solo se escucha",
      subtitle: "Audífonos premium certificados para marabinos exigentes",
      highlight: "Calidad Certificada",
      image: "/hero/headphones-1.jpg",
      color: "from-tuscan-sun-500/20 to-amber-glow-500/10",
    },
    {
      title: "El sonido que merece tu música",
      subtitle: "Experiencia auditiva premium en Maracaibo",
      highlight: "Sonido Premium",
      image: "/hero/headphones-2.jpg",
      color: "from-amber-glow-500/20 to-golden-orange-500/10",
    },
    {
      title: "Fin a los productos genéricos",
      subtitle: "Garantía de 6 meses en todos nuestros productos",
      highlight: "Garantía Extendida",
      image: "/hero/headphones-3.jpg",
      color: "from-golden-orange-500/20 to-tuscan-sun-500/10",
    },
  ];

  const features = [
    { icon: <Shield className="h-5 w-5" />, text: "Garantía 6 meses" },
    { icon: <Zap className="h-5 w-5" />, text: "Envío en 24h" },
    { icon: <Sparkles className="h-5 w-5" />, text: "Productos originales" },
    { icon: <Headphones className="h-5 w-5" />, text: "Asesoría experta" },
  ];

  const testimonials = [
    {
      name: "Camila P.",
      comment: "Por fin audífonos de verdad en Maracaibo ⭐⭐⭐⭐⭐",
    },
    { name: "Reynaldo V.", comment: "Calidad premium, atención excelente" },
    { name: "Gustavo L.", comment: "La mejor inversión en audio que he hecho" },
  ];

  if (!isMounted) {
    return (
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="h-8 w-32 bg-onyx-100 rounded-full animate-pulse"></div>
              <div className="space-y-4">
                <div className="h-16 bg-onyx-100 rounded-xl animate-pulse"></div>
                <div className="h-6 bg-onyx-100 rounded-xl w-3/4 animate-pulse"></div>
              </div>
              <div className="flex flex-wrap gap-4">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="h-12 w-32 bg-onyx-100 rounded-xl animate-pulse"
                  ></div>
                ))}
              </div>
            </div>
            <div className="lg:h-[700px] flex items-center justify-center">
              <div className="w-96 h-96 rounded-3xl bg-onyx-100 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Fondo animado */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0">
          {particlePositions.map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-[2px] h-[2px] bg-tuscan-sun-400/30 rounded-full"
              initial={{ x: `${pos.x}%`, y: `${pos.y}%` }}
              animate={{ y: [null, -20, 20, 0], opacity: [0.3, 0.8, 0.3] }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <motion.div
          animate={{
            background: [
              `radial-gradient(circle at 20% 50%, rgba(255, 170, 0, 0.15) 0%, transparent 50%)`,
              `radial-gradient(circle at 80% 50%, rgba(255, 136, 0, 0.15) 0%, transparent 50%)`,
              `radial-gradient(circle at 50% 20%, rgba(245, 167, 10, 0.15) 0%, transparent 50%)`,
              `radial-gradient(circle at 20% 50%, rgba(255, 170, 0, 0.15) 0%, transparent 50%)`,
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute inset-0"
        />

        <motion.div
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 border border-tuscan-sun-300/20 rounded-3xl rotate-12"
        />
        <motion.div
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
          }}
          className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-amber-glow-300/20 rounded-full"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Contenido izquierdo - 3 columnas */}
          <div className="lg:col-span-3 space-y-8">
            {/* Badge destacado */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-tuscan-sun-50 to-amber-glow-50 border border-tuscan-sun-200"
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500 animate-pulse" />
              <span className="text-sm font-semibold text-onyx-800">
                🎧 Exclusivo en Maracaibo
              </span>
              <Sparkles className="h-4 w-4 text-tuscan-sun-500" />
            </motion.div>

            {/* Título principal */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-onyx-900">
                  Audio{" "}
                  <motion.span
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="bg-gradient-to-r from-tuscan-sun-500 via-amber-glow-500 to-tuscan-sun-500 bg-[length:200%_auto] bg-clip-text text-transparent"
                  >
                    Premium
                  </motion.span>
                </span>
                <span className="block text-onyx-900">
                  Para{" "}
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="inline-block px-3 py-1 bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500 text-white rounded-xl"
                  >
                    Marabinos
                  </motion.span>{" "}
                  Exigentes
                </span>
              </h1>

              <p className="text-xl text-onyx-600 max-w-2xl">
                Audífonos de marca certificados. Fin a los productos genéricos.
                <span className="font-semibold text-tuscan-sun-600 ml-2">
                  Calidad garantizada en Maracaibo.
                </span>
              </p>
            </motion.div>

            {/* Características */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center text-center p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-onyx-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-br from-tuscan-sun-100 to-amber-glow-100 text-tuscan-sun-600 mb-2">
                    {feature.icon}
                  </div>
                  <span className="font-medium text-onyx-800 text-sm">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500 hover:from-tuscan-sun-600 hover:to-amber-glow-600 text-white px-8 py-6 text-lg font-semibold shadow-lg shadow-tuscan-sun-200"
              >
                Ver Catálogo Premium
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="group border-2 border-onyx-200 hover:border-tuscan-sun-300 px-8 py-6 text-lg font-semibold"
              >
                <PlayCircle className="mr-2 h-5 w-5 text-tuscan-sun-500" />
                Ver Video Demo
              </Button>
            </motion.div>

            {/* Testimonios */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="p-6 rounded-2xl bg-gradient-to-r from-tuscan-sun-50/50 to-amber-glow-50/50 border border-tuscan-sun-200/30 shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-tuscan-sun-300 to-amber-glow-300 border-2 border-white"
                      />
                    ))}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-tuscan-sun-400 text-tuscan-sun-400"
                        />
                      ))}
                      <span className="text-sm font-semibold text-tuscan-sun-600 ml-2">
                        5/5
                      </span>
                    </div>
                    <p className="text-onyx-800 font-medium italic">
                      &ldquo;{testimonials[currentSlide].comment}&rdquo;
                    </p>
                    <p className="text-sm text-onyx-500 mt-2">
                      — {testimonials[currentSlide].name}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Indicadores */}
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentSlide === index
                        ? "bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500 w-8"
                        : "bg-onyx-200 hover:bg-onyx-300"
                    }`}
                    aria-label={`Ir a slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Contenido derecho - Imagen GRANDE - 2 columnas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-2 relative h-[500px] lg:h-[700px] flex items-center justify-center"
          >
            {/* Efecto de luz detrás */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 80px rgba(255, 170, 0, 0.4)",
                  "0 0 120px rgba(255, 136, 0, 0.6)",
                  "0 0 80px rgba(255, 170, 0, 0.4)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 rounded-[4rem] bg-gradient-to-br from-tuscan-sun-500/30 to-amber-glow-500/20 blur-3xl"
            />

            {/* Contenedor principal de imagen */}
            <div className="relative w-full h-full max-w-2xl">
              {/* Imagen principal con animación flotante */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full h-full flex items-center justify-center"
              >
                {/* Contenedor de imagen con efecto glass */}
                <div className="relative w-[90%] h-[90%] rounded-[3rem] bg-gradient-to-br from-white/90 to-onyx-50/90 backdrop-blur-sm border-8 border-white/60 shadow-2xl overflow-hidden">
                  {!imageError ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={heroSlides[currentSlide].image}
                        alt={heroSlides[currentSlide].title}
                        fill
                        className="object-contain p-12 transition-all duration-700 hover:scale-110"
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                        onError={() => {
                          console.error(
                            `Error cargando imagen: ${heroSlides[currentSlide].image}`,
                          );
                          setImageError(true);
                        }}
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full p-12">
                      <Headphones className="h-48 w-48 text-onyx-300 mb-6" />
                      <p className="text-lg text-onyx-500 text-center font-medium">
                        {heroSlides[currentSlide].title}
                      </p>
                    </div>
                  )}
                </div>

                {/* Badges flotantes - MÁS GRANDES */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.3 }}
                  className="absolute top-8 left-8"
                >
                  <Badge className="h-8 px-4 text-sm bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500 text-white border-3 border-white shadow-2xl">
                    <Zap className="h-4 w-4 mr-2" />
                    Nuevo Lanzamiento
                  </Badge>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 0.7 }}
                  className="absolute bottom-8 right-8"
                >
                  <Badge className="h-8 px-4 text-sm bg-gradient-to-r from-amber-glow-500 to-golden-orange-500 text-white border-3 border-white shadow-2xl">
                    <Shield className="h-4 w-4 mr-2" />6 Meses Garantía
                  </Badge>
                </motion.div>

                {/* Precio destacado - MÁS GRANDE */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1.2, type: "spring", stiffness: 100 }}
                  className="absolute -right-6 top-1/2 transform -translate-y-1/2"
                >
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-white to-onyx-50/90 backdrop-blur-md border-2 border-tuscan-sun-200 shadow-2xl">
                    <div className="text-center">
                      <p className="text-sm font-medium text-onyx-500 mb-1">
                        Desde
                      </p>
                      <p className="text-4xl font-bold bg-gradient-to-r from-tuscan-sun-600 to-amber-glow-600 bg-clip-text text-transparent">
                        $89
                        <span className="text-xl text-onyx-400">.99</span>
                      </p>
                      <p className="text-xs text-onyx-500 mt-2 font-medium">
                        PRECIO ESPECIAL
                      </p>
                      <div className="mt-2 flex items-center justify-center gap-1">
                        <Star className="h-3 w-3 fill-tuscan-sun-400 text-tuscan-sun-400" />
                        <Star className="h-3 w-3 fill-tuscan-sun-400 text-tuscan-sun-400" />
                        <Star className="h-3 w-3 fill-tuscan-sun-400 text-tuscan-sun-400" />
                        <Star className="h-3 w-3 fill-tuscan-sun-400 text-tuscan-sun-400" />
                        <Star className="h-3 w-3 fill-tuscan-sun-400 text-tuscan-sun-400" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Anillo decorativo giratorio */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-tuscan-sun-300/20 rounded-[4rem] -z-10"
              />
            </div>

            {/* Flecha indicadora */}
            <motion.div
              animate={{ x: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 hidden lg:block"
            >
              <div className="p-3 rounded-full bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500 shadow-lg">
                <ChevronRight className="h-6 w-6 text-white rotate-90" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator mejorado */}
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute bottom-0.5 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center"
        >
          <span className="text-sm font-medium text-onyx-600 mb-2">
            Desplázate para ver más
          </span>
          <div className="w-8 h-12 border-2 border-tuscan-sun-300 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-4 bg-gradient-to-b from-tuscan-sun-500 to-amber-glow-500 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
