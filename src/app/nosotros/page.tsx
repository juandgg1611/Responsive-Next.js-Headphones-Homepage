// src/components/pages/NosotrosPage.tsx
"use client";

import { useState, useEffect } from "react";
import {
  Headphones,
  Heart,
  Target,
  Award,
  Users,
  Shield,
  Truck,
  Star,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  CheckCircle,
  Clock,
  Zap,
  Sparkles,
  ThumbsUp,
  TrendingUp,
  Coffee,
  Calendar,
  Package,
  ShoppingBag,
  Volume2,
  Music,
  Mic2,
  UserCheck,
  Globe,
  Download,
  Wifi,
  Battery,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const NosotrosPageContent = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("historia");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-onyx-50/10 to-white">
        <div className="container mx-auto px-4 py-12">
          <div className="h-12 w-48 bg-onyx-100 rounded-xl mx-auto mb-8 animate-pulse"></div>
          <div className="h-6 w-64 bg-onyx-100 rounded-xl mx-auto mb-12 animate-pulse"></div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="h-96 bg-onyx-100 rounded-2xl animate-pulse"></div>
            <div className="h-96 bg-onyx-100 rounded-2xl animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-onyx-50/10 to-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Contenido principal con Tabs */}
      <div className="container mx-auto px-4 py-12">
        <Tabs
          defaultValue="historia"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-transparent h-auto mb-12">
            {[
              {
                id: "historia",
                label: "Nuestra Historia",
                icon: <Calendar className="h-4 w-4" />,
              },
              {
                id: "valores",
                label: "Valores",
                icon: <Heart className="h-4 w-4" />,
              },
              {
                id: "equipo",
                label: "El Equipo",
                icon: <Users className="h-4 w-4" />,
              },
              {
                id: "compromiso",
                label: "Compromiso",
                icon: <Shield className="h-4 w-4" />,
              },
            ].map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className={cn(
                  "data-[state=active]:bg-gradient-to-r data-[state=active]:from-tuscan-sun-500 data-[state=active]:to-amber-glow-500 data-[state=active]:text-white",
                  "rounded-xl py-3 px-4 transition-all duration-300",
                  "border border-onyx-200 data-[state=active]:border-transparent",
                  "flex items-center gap-2",
                )}
              >
                {tab.icon}
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="historia" className="mt-0">
            <HistoriaSection />
          </TabsContent>

          <TabsContent value="valores" className="mt-0">
            <ValoresSection />
          </TabsContent>

          <TabsContent value="equipo" className="mt-0">
            <EquipoSection />
          </TabsContent>

          <TabsContent value="compromiso" className="mt-0">
            <CompromisoSection />
          </TabsContent>
        </Tabs>

        {/* Sección de Contacto Directo */}
        <ContactoDirectoSection />
      </div>
    </div>
  );
};

// Componente Hero
const HeroSection = () => (
  <div className="relative bg-gradient-to-r from-tuscan-sun-500/10 via-amber-glow-500/10 to-tuscan-sun-500/10 py-16 md:py-24 overflow-hidden">
    {/* Elementos decorativos */}
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
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

      {/* Ondas decorativas */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-20 -right-20 w-64 h-64 border border-tuscan-sun-300/20 rounded-full"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute -bottom-20 -left-20 w-80 h-80 border border-amber-glow-300/20 rounded-full"
      />
    </div>

    <div className="container relative z-10 mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Badge className="mb-4 px-4 py-2 text-sm font-semibold bg-gradient-to-r from-tuscan-sun-500/10 to-amber-glow-500/10 border border-tuscan-sun-300 text-tuscan-sun-600">
          <Sparkles className="h-4 w-4 mr-2" />
          Conócenos
        </Badge>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-onyx-900 mb-6">
          <span className="bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500 bg-clip-text text-transparent">
            PabliCulares
          </span>
          <br />
          Audio Premium en Maracaibo
        </h1>

        <p className="text-xl text-onyx-600 max-w-3xl mx-auto mb-8">
          Somos más que una tienda de audífonos. Somos tu aliado para disfrutar
          de la mejor calidad de audio, con productos 100% originales y asesoría
          experta.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-onyx-100">
            <MapPin className="h-4 w-4 text-tuscan-sun-500" />
            <span className="text-sm font-medium text-onyx-700">
              Maracaibo, Zulia
            </span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-onyx-100">
            <Calendar className="h-4 w-4 text-tuscan-sun-500" />
            <span className="text-sm font-medium text-onyx-700">
              Desde 2023
            </span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-onyx-100">
            <Users className="h-4 w-4 text-tuscan-sun-500" />
            <span className="text-sm font-medium text-onyx-700">
              +500 clientes satisfechos
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

// Componente Historia
const HistoriaSection = () => {
  const milestones = [
    {
      year: "2023",
      title: "El Inicio de un Sueño",
      description:
        "PabliCulares nace en Maracaibo con la misión de ofrecer audífonos de marca certificados, acabando con los productos genéricos de baja calidad.",
      icon: <Sparkles className="h-6 w-6" />,
      color: "from-tuscan-sun-100 to-amber-glow-100",
    },
    {
      year: "2024",
      title: "Crecimiento y Confianza",
      description:
        "Alcanzamos los primeros 200 clientes satisfechos y expandimos nuestro catálogo a más de 15 modelos premium.",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "from-blue-50 to-cyan-50",
    },
    {
      year: "2025",
      title: "Consolidación",
      description:
        "Nos convertimos en referentes de audio premium en Maracaibo, con más de 30 modelos disponibles y alianzas con las mejores marcas.",
      icon: <Award className="h-6 w-6" />,
      color: "from-emerald-50 to-teal-50",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Grid de hitos */}
      <div className="grid md:grid-cols-3 gap-6">
        {milestones.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="relative"
          >
            <Card className="h-full border-2 border-transparent hover:border-tuscan-sun-200 transition-all duration-300 overflow-hidden">
              <div
                className={cn(
                  "absolute top-0 left-0 w-full h-1 bg-gradient-to-r",
                  item.color.replace("from-", "from-").replace("to-", "to-"),
                )}
              />
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={cn(
                      "p-3 rounded-xl bg-gradient-to-br",
                      item.color,
                    )}
                  >
                    <div className="text-tuscan-sun-600">{item.icon}</div>
                  </div>
                  <div>
                    <Badge
                      variant="outline"
                      className="text-lg font-bold border-tuscan-sun-300 text-tuscan-sun-600"
                    >
                      {item.year}
                    </Badge>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-onyx-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-onyx-600">{item.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Historia detallada */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-white to-onyx-50/30 rounded-2xl p-8 border border-onyx-100"
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-onyx-900">
              De Maracaibo{" "}
              <span className="bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500 bg-clip-text text-transparent">
                para el mundo
              </span>
            </h2>

            <div className="space-y-4">
              <p className="text-onyx-600 leading-relaxed">
                <span className="font-semibold text-tuscan-sun-600">
                  PabliCulares
                </span>{" "}
                nació de una necesidad real: en Maracaibo era difícil conseguir
                audífonos de marca originales. Las opciones eran limitadas,
                caras o simplemente productos genéricos que no duraban.
              </p>

              <p className="text-onyx-600 leading-relaxed">
                Cansados de esta realidad, decidimos crear un espacio donde los
                marabinos exigentes pudieran encontrar{" "}
                <span className="font-semibold text-amber-glow-600">
                  audio premium certificado
                </span>
                , con garantía real y asesoría experta.
              </p>

              <p className="text-onyx-600 leading-relaxed">
                Hoy, somos el punto de referencia para quienes buscan calidad de
                sonido en la ciudad. Desde Sony hasta Sennheiser, pasando por
                JBL, Bose y más, trabajamos solo con marcas que respaldan sus
                productos.
              </p>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-tuscan-sun-300 to-amber-glow-300 border-2 border-white"
                  />
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-onyx-900">
                  +500 clientes satisfechos
                </p>
                <p className="text-xs text-onyx-500">y contando...</p>
              </div>
            </div>
          </div>

          <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-tuscan-sun-100 to-amber-glow-100">
            {/* Aquí iría una imagen representativa */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Headphones className="w-32 h-32 text-tuscan-sun-500/30" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Frase motivacional */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-center py-8"
      >
        <blockquote className="text-2xl md:text-3xl italic text-onyx-700 max-w-3xl mx-auto">
          "No vendemos productos, vendemos experiencias auditivas que
          transforman la manera en que escuchas tu música."
        </blockquote>
        <p className="text-tuscan-sun-600 font-semibold mt-4">
          — Pablo Arranz, Fundador de PabliCulares
        </p>
      </motion.div>
    </div>
  );
};

// Componente Valores
const ValoresSection = () => {
  const valores = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Autenticidad",
      description:
        "Todos nuestros productos son 100% originales. No trabajamos con imitaciones ni productos genéricos.",
      color: "from-tuscan-sun-100 to-amber-glow-100",
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Calidad Garantizada",
      description:
        "Seleccionamos solo las mejores marcas del mercado para asegurar la mejor experiencia de audio.",
      color: "from-blue-50 to-cyan-50",
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Asesoría Experta",
      description:
        "Te ayudamos a elegir el producto perfecto según tus necesidades, presupuesto y preferencias.",
      color: "from-emerald-50 to-teal-50",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Pasión por el Audio",
      description:
        "Amamos lo que hacemos. Cada recomendación viene de un profundo conocimiento y amor por el sonido.",
      color: "from-red-50 to-rose-50",
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Servicio Local",
      description:
        "Pensado para Maracaibo, con entregas rápidas y atención personalizada en toda la ciudad.",
      color: "from-purple-50 to-pink-50",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Compromiso",
      description:
        "Nos comprometemos con tu satisfacción. Garantía de 6 meses en todos nuestros productos.",
      color: "from-amber-50 to-orange-50",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Introducción */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-8"
      >
        <h2 className="text-3xl font-bold text-onyx-900 mb-4">
          Lo que nos define
        </h2>
        <p className="text-onyx-600">
          Nuestros valores son la base de cada interacción con nuestros
          clientes. Porque creemos que la confianza se construye con acciones,
          no con palabras.
        </p>
      </motion.div>

      {/* Grid de valores */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {valores.map((valor, index) => (
          <motion.div
            key={valor.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group"
          >
            <Card className="h-full border-2 border-transparent hover:border-tuscan-sun-200 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div
                  className={cn(
                    "inline-flex p-4 rounded-xl mb-4 bg-gradient-to-br",
                    valor.color,
                    "group-hover:scale-110 transition-transform duration-300",
                  )}
                >
                  <div className="text-tuscan-sun-600">{valor.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-onyx-900 mb-3 group-hover:text-tuscan-sun-600 transition-colors">
                  {valor.title}
                </h3>
                <p className="text-onyx-600">{valor.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Frase adicional */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-8 p-6 rounded-xl bg-gradient-to-r from-tuscan-sun-50/50 to-amber-glow-50/50 border border-tuscan-sun-200 text-center"
      >
        <p className="text-onyx-700">
          <span className="font-semibold text-tuscan-sun-600">
            ¿Nuestro mayor valor?
          </span>{" "}
          Tener clientes que confían en nosotros y nos recomiendan.
        </p>
      </motion.div>
    </div>
  );
};

// Componente Equipo
const EquipoSection = () => {
  const equipo = [
    {
      name: "Pablo Arranz",
      role: "Fundador & Experto en Audio",
      bio: "Audiophile de corazón, fundó PabliCulares para traer audio premium a Maracaibo. Conoce cada detalle técnico de los productos.",
      expertise: ["Sony", "Sennheiser", "Bose"],
      avatar: "/team/pablo.jpg",
      initials: "PA",
      color: "from-tuscan-sun-100 to-amber-glow-100",
    },
    {
      name: "Vincent Montemiranda",
      role: "Asesora de Ventas",
      bio: "Especialista en entender las necesidades de cada cliente. Te guiará para encontrar el audífono perfecto según tu estilo de vida.",
      expertise: ["JBL", "Skullcandy", "Beats"],
      avatar: "/team/maria.jpg",
      initials: "VM",
      color: "from-blue-50 to-cyan-50",
    },
    {
      name: "Juan Oberto",
      role: "Logística y Distribución",
      bio: "Responsable de que cada pedido llegue rápido y en perfectas condiciones a toda Maracaibo. Conoce cada zona de la ciudad.",
      expertise: ["Entregas", "Rutas", "Zonas"],
      avatar: "/team/carlos.jpg",
      initials: "JO",
      color: "from-emerald-50 to-teal-50",
    },
    {
      name: "Jose Rodríguez",
      role: "Atención al Cliente",
      bio: "La voz amable que resuelve tus dudas. Garantiza que tu experiencia post-compra sea tan buena como la inicial.",
      expertise: ["Post-venta", "Garantías", "Soporte"],
      avatar: "/team/ana.jpg",
      initials: "JR",
      color: "from-purple-50 to-pink-50",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Introducción */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-8"
      >
        <h2 className="text-3xl font-bold text-onyx-900 mb-4">
          El equipo detrás de tu música
        </h2>
        <p className="text-onyx-600">
          Detrás de cada recomendación, cada consulta y cada entrega, hay un
          equipo apasionado por el audio y comprometido con tu satisfacción.
        </p>
      </motion.div>

      {/* Grid del equipo */}
      <div className="grid md:grid-cols-2 gap-6">
        {equipo.map((person, index) => (
          <motion.div
            key={person.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <Card className="h-full border-2 border-transparent hover:border-tuscan-sun-200 transition-all duration-300 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <Avatar className="w-20 h-20 border-4 border-white shadow-lg">
                    <AvatarFallback
                      className={cn(
                        "text-2xl font-bold bg-gradient-to-br",
                        person.color,
                      )}
                    >
                      {person.initials}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-onyx-900 mb-1">
                      {person.name}
                    </h3>
                    <Badge className="mb-3 bg-gradient-to-r from-tuscan-sun-500/10 to-amber-glow-500/10 text-tuscan-sun-600 border-tuscan-sun-300">
                      {person.role}
                    </Badge>
                    <p className="text-sm text-onyx-600 mb-4">{person.bio}</p>

                    <div className="flex flex-wrap gap-2">
                      {person.expertise.map((exp) => (
                        <span
                          key={exp}
                          className="px-2 py-1 text-xs rounded-full bg-onyx-100 text-onyx-700"
                        >
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Mensaje del equipo */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-8 p-6 rounded-xl bg-gradient-to-r from-tuscan-sun-50/50 to-amber-glow-50/50 border border-tuscan-sun-200 text-center"
      >
        <Users className="h-8 w-8 text-tuscan-sun-500 mx-auto mb-3" />
        <p className="text-onyx-700">
          <span className="font-semibold">
            ¿Quieres contactar a alguien específico?
          </span>{" "}
          Menciónalo en tu mensaje de WhatsApp y te atenderá directamente.
        </p>
      </motion.div>
    </div>
  );
};

// Componente Compromiso
const CompromisoSection = () => {
  const compromisos = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Garantía de 6 meses",
      description: "Respaldo real en todos nuestros productos",
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Envío en 24-48h",
      description: "Cobertura en toda Maracaibo por zonas",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Productos originales",
      description: "Solo trabajamos con marcas certificadas",
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Asesoría post-venta",
      description: "Soporte incluso después de la compra",
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Atención personalizada",
      description: "WhatsApp directo con el equipo",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Respuesta rápida",
      description: "Te respondemos en menos de 1 hora",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Grid de compromisos */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {compromisos.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-4 p-5 rounded-xl bg-white border border-onyx-100 hover:border-tuscan-sun-300 hover:shadow-md transition-all group"
          >
            <div className="p-3 rounded-lg bg-gradient-to-br from-tuscan-sun-100 to-amber-glow-100 text-tuscan-sun-600 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <div>
              <h4 className="font-semibold text-onyx-900 mb-1">{item.title}</h4>
              <p className="text-sm text-onyx-600">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Caja de compromiso */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mt-8 p-8 rounded-2xl bg-gradient-to-br from-tuscan-sun-50 via-white to-amber-glow-50 border-2 border-dashed border-tuscan-sun-300 text-center"
      >
        <h3 className="text-2xl font-bold text-onyx-900 mb-4">
          Nuestro compromiso más importante
        </h3>
        <p className="text-xl text-onyx-700 max-w-2xl mx-auto mb-6">
          "Si no estás 100% satisfecho con tu compra,{" "}
          <span className="font-bold text-tuscan-sun-600">
            te ayudamos a encontrar la solución perfecta
          </span>
          . No descansamos hasta que tu experiencia sea excepcional."
        </p>
        <div className="flex items-center justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          <span className="text-onyx-600">Compromiso PabliCulares</span>
        </div>
      </motion.div>

      {/* Estadísticas */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {[
          {
            value: "500+",
            label: "Clientes satisfechos",
            icon: <Users className="h-5 w-5" />,
          },
          {
            value: "30+",
            label: "Modelos disponibles",
            icon: <Headphones className="h-5 w-5" />,
          },
          {
            value: "6",
            label: "Meses de garantía",
            icon: <Shield className="h-5 w-5" />,
          },
          {
            value: "24h",
            label: "Respuesta promedio",
            icon: <Clock className="h-5 w-5" />,
          },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center p-4 rounded-xl bg-white border border-onyx-100"
          >
            <div className="text-tuscan-sun-500 mb-2">{stat.icon}</div>
            <div className="text-2xl font-bold text-onyx-900">{stat.value}</div>
            <div className="text-xs text-onyx-500">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Componente Contacto Directo
const ContactoDirectoSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-tuscan-sun-500/10 via-white to-amber-glow-500/10 border border-tuscan-sun-200"
  >
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h3 className="text-2xl font-bold text-onyx-900 mb-4">
          ¿Quieres saludarnos o hacer una consulta?
        </h3>
        <p className="text-onyx-600 mb-6">
          Estamos disponibles para responder tus preguntas, darte asesoría
          personalizada o simplemente charlar sobre audio. ¡Nos encanta hablar
          de lo que hacemos!
        </p>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-gradient-to-br from-tuscan-sun-100 to-amber-glow-100">
              <MapPin className="h-5 w-5 text-tuscan-sun-600" />
            </div>
            <div>
              <p className="text-sm text-onyx-500">Estamos en</p>
              <p className="font-semibold text-onyx-900">
                Maracaibo, Zulia • Venezuela
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-gradient-to-br from-tuscan-sun-100 to-amber-glow-100">
              <Phone className="h-5 w-5 text-tuscan-sun-600" />
            </div>
            <div>
              <p className="text-sm text-onyx-500">WhatsApp directo</p>
              <p className="font-semibold text-onyx-900">+58 414 123 4567</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-gradient-to-br from-tuscan-sun-100 to-amber-glow-100">
              <Mail className="h-5 w-5 text-tuscan-sun-600" />
            </div>
            <div>
              <p className="text-sm text-onyx-500">Correo electrónico</p>
              <p className="font-semibold text-onyx-900">
                info@pabliculares.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="p-6 rounded-xl bg-white border border-onyx-100">
          <h4 className="font-semibold text-onyx-900 mb-3 flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-tuscan-sun-500" />
            Horario de atención
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-onyx-600">Lunes a Viernes:</span>
              <span className="font-medium text-onyx-900">
                9:00 AM - 7:00 PM
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-onyx-600">Sábados:</span>
              <span className="font-medium text-onyx-900">
                9:00 AM - 2:00 PM
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-onyx-600">WhatsApp:</span>
              <span className="font-medium text-emerald-600">
                Disponible 24/7
              </span>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-xl bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500 text-white">
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <Sparkles className="h-5 w-5" />
            ¿Primera vez con nosotros?
          </h4>
          <p className="text-sm text-white/90 mb-4">
            Recibe asesoría personalizada sin compromiso. Te ayudamos a elegir
            el audífono perfecto.
          </p>
          <Button
            className="w-full bg-white text-tuscan-sun-600 hover:bg-white/90 font-semibold"
            onClick={() => window.open("https://wa.me/584141234567", "_blank")}
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Iniciar conversación
          </Button>
        </div>
      </div>
    </div>
  </motion.div>
);

export default NosotrosPageContent;
