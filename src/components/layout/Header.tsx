// src/components/layout/Header.tsx
"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  ShoppingBag,
  MapPin,
  Phone,
  ChevronDown,
  Sparkles,
  Headphones,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHoveringLogo, setIsHoveringLogo] = useState(false);
  const [activeNav, setActiveNav] = useState("Inicio");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Inicio", href: "/" },
    {
      label: "Audífonos",
      href: "/productos",
      badge: "Nuevo",
    },
    { label: "Marcas", href: "/marcas" },
    { label: "Guía", href: "/guia" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Contacto", href: "/contacto" },
  ];

  const marcaItems = [
    "Sony",
    "Sennheiser",
    "JBL",
    "Audio-Technica",
    "Skullcandy",
    "Ver todas",
  ];

  return (
    <>
      {/* Barra superior de ofertas */}
      <motion.div
        initial={{ y: -40 }}
        animate={{ y: 0 }}
        className="bg-gradient-to-r from-tuscan-sun-600 via-amber-glow-500 to-golden-orange-500 text-white py-2 px-4"
      >
        <div className="container mx-auto flex items-center justify-center gap-3">
          <Sparkles className="h-4 w-4 animate-pulse" />
          <p className="text-sm font-medium text-center">
            🎧 <span className="font-bold">ENVÍO GRATIS</span> en Maracaibo +
            <span className="font-bold mx-1">6 MESES DE GARANTÍA</span> en todos
            los productos
          </p>
          <Sparkles className="h-4 w-4 animate-pulse" />
        </div>
      </motion.div>

      {/* Header principal */}
      <motion.header
        initial={{ y: 0 }}
        animate={{
          y: 0,
          backdropFilter: isScrolled ? "blur(10px)" : "blur(0px)",
          backgroundColor: isScrolled
            ? "rgba(255, 255, 255, 0.92)"
            : "rgba(255, 255, 255, 0.98)",
          boxShadow: isScrolled ? "0 4px 30px rgba(255, 170, 0, 0.1)" : "none",
        }}
        transition={{ duration: 0.3 }}
        className="sticky top-0 z-50 w-full border-b border-onyx-100/50"
      >
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo con animaciones */}
            <motion.div
              className="flex items-center gap-3"
              onHoverStart={() => setIsHoveringLogo(true)}
              onHoverEnd={() => setIsHoveringLogo(false)}
              whileHover={{ scale: 1.02 }}
            >
              <Link href="/" className="flex items-center gap-3">
                <motion.div
                  animate={{
                    rotate: isHoveringLogo ? [0, 10, -10, 0] : 0,
                    scale: isHoveringLogo ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  {/* Logo real */}
                  <div className="w-14 h-14 relative">
                    <img
                      src="/logo.jpg"
                      alt="PabliCulares Logo"
                      className="w-full h-full object-contain drop-shadow-lg"
                    />
                    {/* Efecto de brillo */}
                    <motion.div
                      animate={{
                        opacity: [0.3, 0.8, 0.3],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 bg-gradient-to-br from-tuscan-sun-400/30 to-amber-glow-400/20 rounded-full blur-sm"
                    />
                  </div>

                  {/* Badge animado */}
                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -top-2 -right-2"
                  >
                    <Badge className="bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500 border-2 border-white shadow-lg">
                      <Headphones className="h-3 w-3 mr-1" />
                      Premium
                    </Badge>
                  </motion.div>
                </motion.div>

                {/* Texto del logo */}
                <div className="flex flex-col">
                  <motion.span
                    animate={{
                      backgroundPosition: isHoveringLogo ? "100% 0%" : "0% 0%",
                    }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-bold bg-gradient-to-r from-onyx-900 via-tuscan-sun-600 to-onyx-900 bg-[length:200%_100%] bg-clip-text text-transparent"
                  >
                    PabliCulares
                  </motion.span>
                  <span className="text-xs font-semibold text-amber-glow-600 flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    Maracaibo • Audio Certificado
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Navegación Desktop - Mejorada */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={item.href}
                    onMouseEnter={() => setActiveNav(item.label)}
                    className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      activeNav === item.label
                        ? "text-tuscan-sun-600 font-semibold"
                        : "text-onyx-700 hover:text-tuscan-sun-500"
                    }`}
                  >
                    {item.label}
                    {item.badge && (
                      <span className="absolute -top-2 -right-1">
                        <Badge className="h-5 px-2 text-[10px] bg-gradient-to-r from-amber-glow-500 to-golden-orange-500 animate-pulse-glow">
                          {item.badge}
                        </Badge>
                      </span>
                    )}

                    {/* Indicador activo */}
                    <AnimatePresence>
                      {activeNav === item.label && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: 32 }}
                          exit={{ width: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </AnimatePresence>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Acciones del lado derecho */}
            <div className="flex items-center gap-3">
              {/* Botón ubicación */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="hidden md:flex items-center gap-2 border-onyx-200 hover:border-tuscan-sun-300 hover:bg-tuscan-sun-50"
                >
                  <MapPin className="h-4 w-4" />
                  <span className="font-medium">Zulia</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </motion.div>

              {/* Botón WhatsApp */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="sm"
                  className="hidden md:flex items-center gap-2 bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500 hover:from-tuscan-sun-600 hover:to-amber-glow-600 shadow-lg shadow-tuscan-sun-200"
                >
                  <Phone className="h-4 w-4" />
                  <span className="font-semibold">WhatsApp</span>
                </Button>
              </motion.div>

              {/* Carrito con animación */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative hover:bg-tuscan-sun-50"
                >
                  <ShoppingBag className="h-5 w-5" />

                  {/* Contador animado */}
                  <motion.span
                    key={3} // Este número vendría del estado del carrito
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-gradient-to-br from-tuscan-sun-500 to-amber-glow-500 text-xs font-bold text-white flex items-center justify-center border-2 border-white shadow-lg"
                  >
                    3
                  </motion.span>

                  {/* Efecto de pulso */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-tuscan-sun-400"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </Button>
              </motion.div>

              {/* Menú móvil */}
              <Sheet>
                <SheetTrigger asChild>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button variant="ghost" size="icon" className="lg:hidden">
                      <Menu className="h-5 w-5" />
                    </Button>
                  </motion.div>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-full sm:w-[400px] border-l-0"
                >
                  <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="flex flex-col h-full"
                  >
                    {/* Logo en menú móvil */}
                    <div className="flex items-center gap-3 mb-8 pt-4">
                      <div className="w-12 h-12 relative">
                        <img
                          src="/logo.jpg"
                          alt="PabliCulares"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-onyx-900">
                          PabliCulares
                        </h2>
                        <p className="text-sm text-amber-glow-600">Maracaibo</p>
                      </div>
                    </div>

                    {/* Navegación móvil */}
                    <nav className="flex-1">
                      {navItems.map((item, index) => (
                        <motion.div
                          key={item.label}
                          initial={{ x: 20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Link
                            href={item.href}
                            className="flex items-center justify-between py-4 text-lg font-medium border-b border-onyx-100 hover:text-tuscan-sun-500 transition-colors"
                          >
                            {item.label}
                            {item.badge && (
                              <Badge className="bg-amber-glow-500">
                                {item.badge}
                              </Badge>
                            )}
                          </Link>
                        </motion.div>
                      ))}
                    </nav>

                    {/* Acciones móvil */}
                    <div className="pt-8 border-t border-onyx-100 space-y-4">
                      <Button className="w-full bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500">
                        <Phone className="h-4 w-4 mr-2" />
                        Contactar por WhatsApp
                      </Button>
                      <Button variant="outline" className="w-full">
                        <MapPin className="h-4 w-4 mr-2" />
                        Ver ubicación
                      </Button>
                    </div>
                  </motion.div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        {/* Sub-navegación para marcas (aparece en hover) */}
        <AnimatePresence>
          {activeNav === "Audífonos" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-onyx-100 shadow-xl"
            >
              <div className="container mx-auto px-4 py-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {marcaItems.map((marca) => (
                    <motion.div
                      key={marca}
                      whileHover={{ scale: 1.05, y: -3 }}
                      className="text-center"
                    >
                      <div className="p-4 rounded-xl bg-gradient-to-b from-white to-onyx-50 border border-onyx-100 hover:border-tuscan-sun-300 cursor-pointer transition-all duration-300 hover:shadow-lg">
                        <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-tuscan-sun-100 to-amber-glow-100 rounded-lg flex items-center justify-center">
                          <Headphones className="h-6 w-6 text-tuscan-sun-500" />
                        </div>
                        <span className="font-medium text-onyx-800">
                          {marca}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;
