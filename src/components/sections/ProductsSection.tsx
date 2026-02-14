// src/components/sections/ProductsSection.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Headphones,
  ShoppingBag,
  Star,
  Zap,
  Shield,
  Truck,
  ChevronLeft,
  ChevronRight,
  Check,
  Music,
  Sparkles,
  Tag,
  Clock,
  Volume2,
  Battery,
  Wifi,
} from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

const ProductsSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState("todos");
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Categorías de productos
  const categories = [
    { id: "todos", label: "Todos", count: 12, icon: <Headphones /> },
    { id: "inalambricos", label: "Inalámbricos", count: 5, icon: <Wifi /> },
    { id: "gaming", label: "Gaming", count: 4, icon: <Volume2 /> },
    { id: "deportivos", label: "Deportivos", count: 3, icon: <Zap /> },
    { id: "estudio", label: "Estudio", count: 4, icon: <Music /> },
  ];

  // Productos - Asegúrate de tener estas imágenes en /public/products/
  const products = [
    {
      id: 1,
      name: "Sony WH-1000XM5",
      category: "inalambricos",
      brand: "Sony",
      description: "Cancelación de ruido líder en la industria",
      price: 299.99,
      originalPrice: 349.99,
      rating: 4.9,
      reviews: 128,
      features: ["30h batería", "ANC Pro", "Hi-Res Audio", "Touch Control"],
      image: "/products/sony-wh1000xm5.jpg",
      badge: {
        text: "Más Vendido",
        color: "bg-gradient-to-r from-blue-500 to-blue-600",
      },
      tags: ["Premium", "ANC", "Hi-Res"],
      stock: "Disponible",
      delivery: "24h",
      color: "bg-gradient-to-br from-blue-50 to-blue-100",
    },
    {
      id: 2,
      name: "Sennheiser HD 660S",
      category: "estudio",
      brand: "Sennheiser",
      description: "Precisión de estudio profesional",
      price: 499.99,
      originalPrice: 599.99,
      rating: 4.8,
      reviews: 94,
      features: ["Audio abierto", "Impedancia 150Ω", "Almohadillas velour"],
      image: "/products/sennheiser-hd660s.jpg",
      badge: {
        text: "Edición Limitada",
        color: "bg-gradient-to-r from-amber-500 to-orange-500",
      },
      tags: ["Estudio", "Audiophile", "Open-back"],
      stock: "Últimas 3 unidades",
      delivery: "48h",
      color: "bg-gradient-to-br from-amber-50 to-orange-50",
    },
    {
      id: 3,
      name: "JBL Tune 760NC",
      category: "inalambricos",
      brand: "JBL",
      description: "Sonido JBL Signature con ANC",
      price: 129.99,
      originalPrice: 159.99,
      rating: 4.7,
      reviews: 215,
      features: ["50h batería", "Plegables", "Google Assistant", "ANC"],
      image: "/products/jbl-tune-760nc.jpg",
      badge: {
        text: "Oferta Especial",
        color: "bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500",
      },
      tags: ["Viaje", "Batería Larga", "ANC"],
      stock: "Disponible",
      delivery: "24h",
      color: "bg-gradient-to-br from-tuscan-sun-50 to-amber-glow-50",
    },
    {
      id: 4,
      name: "Audio-Technica ATH-M50x",
      category: "estudio",
      brand: "Audio-Technica",
      description: "Monitor profesional referencia mundial",
      price: 149.99,
      originalPrice: 179.99,
      rating: 4.9,
      reviews: 842,
      features: ["Sonido preciso", "Aislamiento excelente", "Plegables"],
      image: "/products/audio-technica-m50x.jpg",
      badge: {
        text: "Clásico",
        color: "bg-gradient-to-r from-gray-600 to-gray-800",
      },
      tags: ["Monitor", "Estudio", "Profesional"],
      stock: "Disponible",
      delivery: "24h",
      color: "bg-gradient-to-br from-gray-50 to-gray-100",
    },
    {
      id: 5,
      name: "Skullcandy Crusher Evo",
      category: "gaming",
      brand: "Skullcandy",
      description: "Bass sensorial personalizable",
      price: 179.99,
      originalPrice: 199.99,
      rating: 4.6,
      reviews: 167,
      features: [
        "Bass sensorial",
        "40h batería",
        "Almacenamiento plegable",
        "ANC",
      ],
      image: "/products/skullcandy-crusher-evo.jpg",
      badge: {
        text: "Nuevo",
        color: "bg-gradient-to-r from-red-500 to-pink-500",
      },
      tags: ["Gaming", "Bass", "Inalámbrico"],
      stock: "Disponible",
      delivery: "48h",
      color: "bg-gradient-to-br from-red-50 to-pink-50",
    },
    {
      id: 6,
      name: "Bose QuietComfort 45",
      category: "inalambricos",
      brand: "Bose",
      description: "Cancelación y comodidad legendaria",
      price: 329.99,
      originalPrice: 379.99,
      rating: 4.8,
      reviews: 312,
      features: [
        "24h batería",
        "Modo Conciencia",
        "Llamadas nítidas",
        "ANC ajustable",
      ],
      image: "/products/bose-qc45.jpg",
      badge: {
        text: "Recomendado",
        color: "bg-gradient-to-r from-emerald-500 to-teal-500",
      },
      tags: ["Viaje", "Comodidad", "ANC Pro"],
      stock: "Últimas 5 unidades",
      delivery: "24h",
      color: "bg-gradient-to-br from-emerald-50 to-teal-50",
    },
    {
      id: 7,
      name: "HyperX Cloud II",
      category: "gaming",
      brand: "HyperX",
      description: "Audio 7.1 surround para gaming",
      price: 89.99,
      originalPrice: 119.99,
      rating: 4.7,
      reviews: 523,
      features: [
        "7.1 Virtual",
        "Micrófono desmontable",
        "Memory foam",
        "Aluminio",
      ],
      image: "/products/hyperx-cloud-ii.jpg",
      badge: {
        text: "Best Seller",
        color: "bg-gradient-to-r from-purple-500 to-pink-500",
      },
      tags: ["Gaming", "7.1", "Streaming"],
      stock: "Disponible",
      delivery: "24h",
      color: "bg-gradient-to-br from-purple-50 to-pink-50",
    },
    {
      id: 8,
      name: "Beats Studio Pro",
      category: "inalambricos",
      brand: "Beats",
      description: "Sonido spatial audio con cancelación",
      price: 249.99,
      originalPrice: 299.99,
      rating: 4.5,
      reviews: 187,
      features: [
        "Spatial Audio",
        "ANC Transparente",
        "40h batería",
        "Apple/Android",
      ],
      image: "/products/beats-studio-pro.jpg",
      badge: {
        text: "Popular",
        color: "bg-gradient-to-r from-rose-500 to-red-500",
      },
      tags: ["Apple", "Spatial Audio", "Lifestyle"],
      stock: "Disponible",
      delivery: "48h",
      color: "bg-gradient-to-br from-rose-50 to-red-50",
    },
    {
      id: 9,
      name: "Razer Kraken V3",
      category: "gaming",
      brand: "Razer",
      description: "RGB Chroma y sonido THX Spatial",
      price: 79.99,
      originalPrice: 99.99,
      rating: 4.4,
      reviews: 276,
      features: [
        "RGB Chroma",
        "THX Spatial",
        "Micrógeno retráctil",
        "Almohadillas gel",
      ],
      image: "/products/razer-kraken-v3.jpg",
      badge: {
        text: "Gaming",
        color: "bg-gradient-to-r from-green-500 to-emerald-500",
      },
      tags: ["RGB", "Gaming", "THX"],
      stock: "Disponible",
      delivery: "24h",
      color: "bg-gradient-to-br from-green-50 to-emerald-50",
    },
    {
      id: 10,
      name: "Shure AONIC 50",
      category: "estudio",
      brand: "Shure",
      description: "Monitorización profesional inalámbrica",
      price: 399.99,
      originalPrice: 449.99,
      rating: 4.8,
      reviews: 86,
      features: ["20h batería", "Hi-Res Wireless", "ANC", "Plegables"],
      image: "/products/shure-aonic-50.jpg",
      badge: {
        text: "Profesional",
        color: "bg-gradient-to-r from-indigo-500 to-purple-500",
      },
      tags: ["Estudio", "Hi-Res", "Wireless"],
      stock: "Bajo pedido",
      delivery: "72h",
      color: "bg-gradient-to-br from-indigo-50 to-purple-50",
    },
  ];

  // Filtrar productos por categoría
  const filteredProducts =
    activeCategory === "todos"
      ? products
      : products.filter((product) => product.category === activeCategory);

  // Carrusel de productos (para mostrar muchos productos)
  const productsPerSlide = 3;
  const totalSlides = Math.ceil(filteredProducts.length / productsPerSlide);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Manejar swipe para móviles
  const handleDragEnd = useCallback(
    (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      if (Math.abs(info.offset.x) > 50) {
        if (info.offset.x > 0) {
          prevSlide();
        } else {
          nextSlide();
        }
      }
    },
    [nextSlide, prevSlide],
  );

  // Marca aleatoria para carga
  const getRandomBrand = () => {
    const brands = ["Sony", "Sennheiser", "JBL", "Bose", "Audio-Technica"];
    return brands[Math.floor(Math.random() * brands.length)];
  };

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Función para manejar errores de imagen
  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    const target = e.currentTarget;
    const productName = target.alt || "Producto";
    const parent = target.parentElement;

    if (parent) {
      // Ocultar imagen rota
      target.style.display = "none";

      // Crear fallback elegante
      const fallback = document.createElement("div");
      fallback.className =
        "absolute inset-0 flex flex-col items-center justify-center p-6";
      fallback.innerHTML = `
        <div class="w-32 h-32 rounded-full ${target.dataset.color || "bg-onyx-100"} flex items-center justify-center mb-4">
          <svg class="w-16 h-16 text-onyx-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
        </div>
        <h4 class="text-lg font-bold text-onyx-800 text-center mb-2">${productName}</h4>
        <p class="text-sm text-onyx-500 text-center">Imagen no disponible</p>
        <p class="text-xs text-tuscan-sun-500 mt-2">Consulta por WhatsApp</p>
      `;

      // Solo añadir si no existe ya un fallback
      if (!parent.querySelector(".image-fallback")) {
        fallback.classList.add("image-fallback");
        parent.appendChild(fallback);
      }
    }
  };

  if (!isMounted) {
    return (
      <section className="py-20 bg-gradient-to-b from-onyx-50/30 to-white">
        <div className="container mx-auto px-4">
          <Skeleton className="h-12 w-48 mx-auto mb-8" />
          <Skeleton className="h-6 w-64 mx-auto mb-12" />
          <div className="flex justify-center gap-4 mb-12">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-10 w-28" />
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="h-[400px]" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-onyx-50/30 to-white">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, Math.random() * 100 - 50, 0],
              x: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-tuscan-sun-300/30 to-amber-glow-300/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 px-4 py-2 text-sm font-semibold bg-gradient-to-r from-tuscan-sun-500/10 to-amber-glow-500/10 border border-tuscan-sun-300 text-tuscan-sun-600 hover:bg-gradient-to-r hover:from-tuscan-sun-500/20 hover:to-amber-glow-500/20">
            <Sparkles className="h-4 w-4 mr-2" />
            Catálogo Completo
          </Badge>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-onyx-900 mb-6">
            Más de{" "}
            <span className="bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500 bg-clip-text text-transparent">
              {products.length} modelos
            </span>
            <br />
            de audio premium
          </h2>

          <p className="text-xl text-onyx-600 max-w-3xl mx-auto mb-10">
            Selección exclusiva de audífonos certificados. Encuentra el sonido
            perfecto para tu estilo de vida en Maracaibo.
          </p>
        </motion.div>

        {/* Filtros por categoría - MEJORADO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "group relative px-6 py-3 rounded-xl border-2 transition-all duration-300 flex items-center gap-2",
                    activeCategory === category.id
                      ? "border-tuscan-sun-500 bg-gradient-to-r from-tuscan-sun-500/10 to-amber-glow-500/10 shadow-lg shadow-tuscan-sun-200"
                      : "border-onyx-200 hover:border-tuscan-sun-300 hover:bg-white/50",
                  )}
                >
                  <span
                    className={cn(
                      "transition-colors",
                      activeCategory === category.id
                        ? "text-tuscan-sun-600"
                        : "text-onyx-600 group-hover:text-tuscan-sun-600",
                    )}
                  >
                    {category.icon}
                  </span>
                  <span
                    className={cn(
                      "font-semibold",
                      activeCategory === category.id
                        ? "text-onyx-900"
                        : "text-onyx-700 group-hover:text-onyx-900",
                    )}
                  >
                    {category.label}
                  </span>
                  <span
                    className={cn(
                      "text-xs px-2 py-1 rounded-full",
                      activeCategory === category.id
                        ? "bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500 text-white"
                        : "bg-onyx-100 text-onyx-600 group-hover:bg-onyx-200",
                    )}
                  >
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-onyx-500">Mostrando</span>
              <Badge variant="outline" className="px-3 py-1">
                {filteredProducts.length} productos
              </Badge>
              <span className="text-sm text-onyx-500">en</span>
              <span className="font-semibold text-tuscan-sun-600">
                {categories.find((c) => c.id === activeCategory)?.label}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Carrusel de productos - PARA MUCHOS PRODUCTOS */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-onyx-900">
                Productos Destacados
              </h3>
              <p className="text-onyx-600">
                Desliza para ver todos nuestros modelos
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full border-onyx-200 hover:border-tuscan-sun-300 hover:bg-tuscan-sun-50"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-2">
                {[...Array(totalSlides)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={cn(
                      "w-3 h-3 rounded-full transition-all",
                      currentSlide === i
                        ? "bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500 w-8"
                        : "bg-onyx-200 hover:bg-onyx-300",
                    )}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full border-onyx-200 hover:border-tuscan-sun-300 hover:bg-tuscan-sun-50"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Carrusel */}
          <motion.div
            className="relative overflow-hidden"
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
            onDragEnd={handleDragEnd}
          >
            <motion.div
              animate={{ x: `-${currentSlide * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex"
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-1">
                    {filteredProducts
                      .slice(
                        slideIndex * productsPerSlide,
                        (slideIndex + 1) * productsPerSlide,
                      )
                      .map((product) => (
                        <ProductCard
                          key={product.id}
                          product={product}
                          isLoading={isLoading}
                          onImageError={handleImageError}
                          onHover={setHoveredProduct}
                          isHovered={hoveredProduct === product.id}
                        />
                      ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Indicador de slide actual */}
          <div className="text-center mt-6">
            <span className="text-sm text-onyx-500">
              Slide {currentSlide + 1} de {totalSlides} •{" "}
              {filteredProducts.length} productos total
            </span>
          </div>
        </div>

        {/* Marcas destacadas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-onyx-900 mb-2">
              Las marcas más{" "}
              <span className="text-tuscan-sun-600">prestigiosas</span>
            </h3>
            <p className="text-onyx-600">
              Trabajamos exclusivamente con marcas certificadas y originales
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "Sony",
              "Sennheiser",
              "JBL",
              "Bose",
              "Audio-Technica",
              "Beats",
            ].map((brand, index) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-onyx-100 hover:border-tuscan-sun-300 hover:shadow-lg transition-all duration-300 flex items-center justify-center h-20"
              >
                <div className="text-center">
                  <div className="text-lg font-bold text-onyx-900 mb-1">
                    {brand}
                  </div>
                  <div className="text-xs text-onyx-500">
                    {products.filter((p) => p.brand === brand).length} modelos
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center p-8 rounded-3xl bg-gradient-to-br from-tuscan-sun-50/50 via-white to-amber-glow-50/50 border-2 border-dashed border-tuscan-sun-200"
        >
          <h3 className="text-3xl font-bold text-onyx-900 mb-4">
            ¿No encuentras tu modelo ideal?
          </h3>
          <p className="text-xl text-onyx-600 mb-8 max-w-2xl mx-auto">
            Contáctanos y te ayudaremos a encontrar el audífono perfecto para
            ti. Tenemos acceso a más de 50 modelos adicionales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500 hover:from-tuscan-sun-600 hover:to-amber-glow-600 text-white shadow-lg shadow-tuscan-sun-200"
              onClick={() =>
                window.open("https://wa.me/584141234567", "_blank")
              }
            >
              <Headphones className="h-5 w-5 mr-2" />
              Asesoría Personalizada
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-onyx-200 hover:border-tuscan-sun-300"
            >
              <Tag className="h-5 w-5 mr-2" />
              Solicitar Catálogo Completo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Componente de tarjeta de producto mejorado
const ProductCard = ({
  product,
  isLoading,
  onImageError,
  onHover,
  isHovered,
}: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
    whileHover={{ y: -8 }}
    onHoverStart={() => onHover(product.id)}
    onHoverEnd={() => onHover(null)}
    className="relative h-full"
  >
    <Card className="h-full border-2 border-transparent bg-white overflow-hidden group hover:border-tuscan-sun-200 hover:shadow-2xl transition-all duration-500">
      {/* Badge - POSICIÓN CORREGIDA */}
      {product.badge && (
        <div className="absolute top-4 right-4 z-10">
          <Badge
            className={cn(
              "text-white border-2 border-white shadow-lg px-3 py-1 text-xs font-bold",
              product.badge.color,
            )}
          >
            {product.badge.text}
          </Badge>
        </div>
      )}

      {/* Imagen */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-onyx-50 to-onyx-100">
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-onyx-100 animate-pulse" />
          </div>
        ) : (
          <>
            <div className="absolute inset-0 p-6 flex items-center justify-center">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                onError={onImageError}
                data-color={product.color}
                quality={85}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </>
        )}
      </div>

      <CardContent className="p-6">
        {/* Marca y rating */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-onyx-500">
            {product.brand}
          </span>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-tuscan-sun-400 text-tuscan-sun-400" />
            <span className="text-sm font-bold text-onyx-900">
              {product.rating}
            </span>
            <span className="text-xs text-onyx-400">({product.reviews})</span>
          </div>
        </div>

        {/* Nombre */}
        <h3 className="text-xl font-bold text-onyx-900 mb-2 group-hover:text-tuscan-sun-600 transition-colors line-clamp-1">
          {product.name}
        </h3>

        {/* Descripción */}
        <p className="text-sm text-onyx-600 mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {product.tags.map((tag: string, i: number) => (
            <span
              key={i}
              className="px-2 py-1 text-xs rounded-full bg-onyx-100 text-onyx-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Stock y delivery */}
        <div className="flex items-center justify-between text-sm mb-4">
          <div className="flex items-center gap-2">
            <div
              className={cn(
                "w-2 h-2 rounded-full",
                product.stock.includes("Disponible")
                  ? "bg-emerald-500"
                  : product.stock.includes("Últimas")
                    ? "bg-amber-500"
                    : "bg-rose-500",
              )}
            />
            <span className="text-onyx-700">{product.stock}</span>
          </div>
          <div className="flex items-center gap-1 text-onyx-500">
            <Clock className="h-3 w-3" />
            <span>{product.delivery}</span>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {product.features.slice(0, 4).map((feature: string, i: number) => (
            <div
              key={i}
              className="flex items-center gap-1 text-xs text-onyx-600"
            >
              <Check className="h-3 w-3 text-tuscan-sun-500 flex-shrink-0" />
              <span className="truncate">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter className="px-6 pb-6 pt-0">
        <div className="w-full flex items-center justify-between">
          {/* Precio */}
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-tuscan-sun-600 to-amber-glow-600 bg-clip-text text-transparent">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-onyx-400 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            <p className="text-xs text-onyx-500">
              IVA incluido • 6 meses garantía
            </p>
          </div>

          {/* Botón */}
          <Button
            size="sm"
            className="bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500 hover:from-tuscan-sun-600 hover:to-amber-glow-600 text-white shadow-lg shadow-tuscan-sun-200/50"
            onClick={() =>
              window.open(
                `https://wa.me/584141234567?text=Hola! Estoy interesado en los ${product.name} de PabliCulares`,
                "_blank",
              )
            }
          >
            <ShoppingBag className="h-4 w-4 mr-2" />
            Consultar
          </Button>
        </div>
      </CardFooter>
    </Card>
  </motion.div>
);

// Componente de tarjeta compacta para grid
const CompactProductCard = ({ product, onImageError }: any) => (
  <motion.div whileHover={{ y: -4 }} className="group cursor-pointer">
    <Card className="border border-onyx-200 hover:border-tuscan-sun-300 overflow-hidden transition-all">
      <div className="relative h-40 bg-gradient-to-br from-onyx-50 to-onyx-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4"
          sizes="(max-width: 768px) 50vw, 25vw"
          onError={onImageError}
        />
      </div>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-semibold text-onyx-500">
            {product.brand}
          </span>
          <span className="text-xs font-bold text-tuscan-sun-600">
            ${product.price}
          </span>
        </div>
        <h4 className="font-semibold text-onyx-900 line-clamp-1 mb-1 group-hover:text-tuscan-sun-600">
          {product.name}
        </h4>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="h-3 w-3 fill-tuscan-sun-400 text-tuscan-sun-400"
            />
          ))}
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

export default ProductsSection;
