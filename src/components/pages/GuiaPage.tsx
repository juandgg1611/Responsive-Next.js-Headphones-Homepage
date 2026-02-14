// src/components/pages/GuiaPage.tsx
"use client";

import { useState, useEffect } from "react";
import {
  Headphones,
  Music,
  Gamepad2,
  Mic2,
  Wifi,
  Battery,
  Shield,
  Zap,
  Volume2,
  Award,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Star,
  Users,
  ThumbsUp,
  HelpCircle,
  BookOpen,
  ChevronRight,
  Search,
  Filter,
  X,
  Check,
  Heart,
  Target,
  TrendingUp,
  Clock,
  Truck,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Sun,
  Moon,
  Coffee,
  Home,
  Briefcase,
  Plane,
  Dumbbell,
  Cpu,
  CircleDot,
  Circle,
  CircleOff,
  CircleCheckBig,
  CircleHelp,
  Info,
  AlertCircle,
  AlertTriangle,
} from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const GuiaPageContent = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("tipos");
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-onyx-50/30 to-white">
        <div className="container mx-auto px-4 py-12">
          <div className="h-12 w-64 bg-onyx-100 rounded-xl mx-auto mb-8 animate-pulse"></div>
          <div className="h-6 w-96 bg-onyx-100 rounded-xl mx-auto mb-12 animate-pulse"></div>
          <div className="grid md:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-64 bg-onyx-100 rounded-2xl animate-pulse"
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-onyx-50/30 to-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Contenido principal */}
      <div className="container mx-auto px-4 py-12">
        {/* Navegación por tabs */}
        <Tabs
          defaultValue="tipos"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 bg-transparent h-auto mb-8 p-1">
            {[
              {
                id: "tipos",
                label: "Tipos de Audífonos",
                icon: <Headphones className="h-4 w-4" />,
              },
              {
                id: "conexion",
                label: "Conexión",
                icon: <Wifi className="h-4 w-4" />,
              },
              {
                id: "uso",
                label: "Según tu uso",
                icon: <Target className="h-4 w-4" />,
              },
              {
                id: "caracteristicas",
                label: "Características",
                icon: <Cpu className="h-4 w-4" />,
              },
              {
                id: "faq",
                label: "Preguntas Frecuentes",
                icon: <HelpCircle className="h-4 w-4" />,
              },
            ].map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className={cn(
                  "data-[state=active]:bg-gradient-to-r data-[state=active]:from-tuscan-sun-500 data-[state=active]:to-amber-glow-500 data-[state=active]:text-white",
                  "rounded-lg py-3 px-3 transition-all duration-300",
                  "border border-onyx-200 data-[state=active]:border-transparent",
                  "flex items-center gap-2 text-sm md:text-base",
                )}
              >
                {tab.icon}
                <span className="hidden md:inline">{tab.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="tipos" className="mt-0">
            <TiposSection />
          </TabsContent>

          <TabsContent value="conexion" className="mt-0">
            <ConexionSection />
          </TabsContent>

          <TabsContent value="uso" className="mt-0">
            <UsoSection />
          </TabsContent>

          <TabsContent value="caracteristicas" className="mt-0">
            <CaracteristicasSection />
          </TabsContent>

          <TabsContent value="faq" className="mt-0">
            <FAQSection />
          </TabsContent>
        </Tabs>

        {/* Resumen rápido */}
        <ResumenSection />

        {/* Contacto para asesoría */}
        <AsesoriaSection />
      </div>
    </div>
  );
};

// Hero Section
const HeroSection = () => (
  <div className="relative bg-gradient-to-r from-tuscan-sun-500/10 via-amber-glow-500/10 to-tuscan-sun-500/10 py-16 md:py-20 overflow-hidden">
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
    </div>

    <div className="container relative z-10 mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Badge className="mb-4 px-4 py-2 text-sm font-semibold bg-gradient-to-r from-tuscan-sun-500/10 to-amber-glow-500/10 border border-tuscan-sun-300 text-tuscan-sun-600">
          <BookOpen className="h-4 w-4 mr-2" />
          Guía de Compra
        </Badge>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-onyx-900 mb-6">
          <span className="bg-gradient-to-r from-tuscan-sun-600 to-amber-glow-600 bg-clip-text text-transparent">
            Encuentra
          </span>
          <br />
          tus audífonos perfectos
        </h1>

        <p className="text-xl text-onyx-600 max-w-3xl mx-auto mb-8">
          Aprende a elegir los audífonos ideales según tu estilo de vida,
          presupuesto y preferencias de sonido. Guía creada por expertos en
          audio.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-onyx-100">
            <CheckCircle2 className="h-4 w-4 text-tuscan-sun-500" />
            <span className="text-sm font-medium text-onyx-700">
              Información verificada
            </span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-onyx-100">
            <Users className="h-4 w-4 text-tuscan-sun-500" />
            <span className="text-sm font-medium text-onyx-700">
              +500 clientes guiados
            </span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-onyx-100">
            <Star className="h-4 w-4 text-tuscan-sun-500" />
            <span className="text-sm font-medium text-onyx-700">
              Actualizado 2025
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

// Sección: Tipos de Audífonos
const TiposSection = () => {
  const tipos = [
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Over-Ear (Circumaurales)",
      description:
        "Cubren toda la oreja, ofrecen el mejor aislamiento y calidad de sonido. Ideales para uso prolongado en casa o estudio.",
      pros: [
        "Excelente aislamiento",
        "Máxima comodidad",
        "Mejor calidad de sonido",
      ],
      cons: ["Voluminosos", "Menos portátiles", "Pueden calentar las orejas"],
      ideal: "Uso en casa, estudio, gaming profesional",
      gradient: "from-tuscan-sun-400 to-amber-glow-400",
      image: "/guia/over-ear.jpg",
    },
    {
      icon: <Music className="h-8 w-8" />,
      title: "On-Ear (Supraaurales)",
      description:
        "Se apoyan sobre la oreja sin cubrirla completamente. Balance entre portabilidad y calidad de sonido.",
      pros: [
        "Portátiles",
        "Buen equilibrio calidad/tamaño",
        "No calientan tanto",
      ],
      cons: [
        "Menos aislamiento",
        "Pueden incomodar tras horas",
        "Presión en orejas",
      ],
      ideal: "Uso diario, oficina, viajes cortos",
      gradient: "from-tuscan-sun-500 to-amber-glow-500",
      image: "/guia/on-ear.jpg",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "In-Ear (Intraurales)",
      description:
        "Se insertan en el canal auditivo. Máxima portabilidad y versatilidad.",
      pros: ["Ultra portátiles", "Buen aislamiento", "Ideales para deporte"],
      cons: ["Pueden incomodar", "Menor rango dinámico", "Se pueden caer"],
      ideal: "Deporte, transporte público, uso diario",
      gradient: "from-tuscan-sun-400 to-amber-glow-400",
      image: "/guia/in-ear.jpg",
    },
    {
      icon: <Gamepad2 className="h-8 w-8" />,
      title: "Gaming",
      description:
        "Diseñados específicamente para juegos, con micrófono integrado y sonido posicional.",
      pros: [
        "Micrófono de calidad",
        "Sonido surround",
        "Cómodos para sesiones largas",
      ],
      cons: ["Diseño llamativo", "Menos discretos", "Enfocados en gaming"],
      ideal: "Jugadores, streamers, e-sports",
      gradient: "from-tuscan-sun-500 to-amber-glow-500",
      image: "/guia/gaming.jpg",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-onyx-900 mb-3">
          Tipos de <span className="text-tuscan-sun-600">Audífonos</span>
        </h2>
        <p className="text-onyx-600 max-w-2xl mx-auto">
          Cada tipo tiene sus ventajas. Conoce cuál se adapta mejor a ti.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {tipos.map((tipo, index) => (
          <motion.div
            key={tipo.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group"
          >
            <Card className="h-full border-2 border-transparent bg-white hover:border-tuscan-sun-300 hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  {/* Icono */}
                  <div
                    className={cn(
                      "w-16 h-16 rounded-xl bg-gradient-to-r flex items-center justify-center text-white flex-shrink-0",
                      tipo.gradient,
                    )}
                  >
                    {tipo.icon}
                  </div>

                  {/* Contenido */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-onyx-900 mb-2 group-hover:text-tuscan-sun-600 transition-colors">
                      {tipo.title}
                    </h3>
                    <p className="text-onyx-600 text-sm mb-4">
                      {tipo.description}
                    </p>

                    {/* Pros y Cons */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div>
                        <p className="text-xs font-semibold text-emerald-600 mb-2">
                          ✓ Pros
                        </p>
                        <ul className="space-y-1">
                          {tipo.pros.map((pro) => (
                            <li
                              key={pro}
                              className="text-xs text-onyx-600 flex items-center gap-1"
                            >
                              <div className="w-1 h-1 rounded-full bg-emerald-500"></div>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-amber-600 mb-2">
                          ○ Contras
                        </p>
                        <ul className="space-y-1">
                          {tipo.cons.map((con) => (
                            <li
                              key={con}
                              className="text-xs text-onyx-600 flex items-center gap-1"
                            >
                              <div className="w-1 h-1 rounded-full bg-amber-500"></div>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Ideal para */}
                    <Badge
                      className={cn(
                        "text-white border-0",
                        `bg-gradient-to-r ${tipo.gradient}`,
                      )}
                    >
                      Ideal: {tipo.ideal}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Sección: Tipos de Conexión
const ConexionSection = () => {
  const conexiones = [
    {
      icon: <Wifi className="h-8 w-8" />,
      title: "Inalámbricos (Bluetooth)",
      description:
        "Libertad de movimiento sin cables. Tecnología que ha mejorado enormemente en los últimos años.",
      ventajas: ["Sin cables", "Comodidad", "Integración con asistentes"],
      desventajas: [
        "Requieren batería",
        "Posible latencia",
        "Calidad de audio limitada por codec",
      ],
      mejorPara: "Uso diario, deporte, teléfono",
      gradiente: "from-tuscan-sun-400 to-amber-glow-400",
    },
    {
      icon: <Volume2 className="h-8 w-8" />,
      title: "Alámbricos (Cable)",
      description:
        "La mejor calidad de audio sin compresión. Sin preocupaciones por batería.",
      ventajas: [
        "Mejor calidad de audio",
        "Sin latencia",
        "Sin batería",
        "Más económicos",
      ],
      desventajas: [
        "Cables que se enredan",
        "Menos movilidad",
        "Conector puede dañarse",
      ],
      mejorPara: "Estudio, gaming, audiófilos",
      gradiente: "from-tuscan-sun-500 to-amber-glow-500",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Híbridos",
      description:
        "Lo mejor de ambos mundos: usarlos con cable o inalámbricamente según la situación.",
      ventajas: [
        "Versatilidad total",
        "Backup si se acaba batería",
        "Lo mejor de ambos",
      ],
      desventajas: ["Más caros", "Pueden ser más pesados", "Complejidad extra"],
      mejorPara: "Usuarios exigentes, viajeros",
      gradiente: "from-tuscan-sun-400 to-amber-glow-400",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-onyx-900 mb-3">
          Conexión:{" "}
          <span className="text-tuscan-sun-600">¿Cable o Inalámbrico?</span>
        </h2>
        <p className="text-onyx-600 max-w-2xl mx-auto">
          La elección entre cable y Bluetooth afecta la experiencia de uso.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {conexiones.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group"
          >
            <Card className="h-full border-2 border-transparent bg-white hover:border-tuscan-sun-300 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div
                    className={cn(
                      "w-16 h-16 mx-auto mb-3 rounded-xl bg-gradient-to-r flex items-center justify-center text-white",
                      item.gradiente,
                    )}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-onyx-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-onyx-600 text-sm mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-xs font-semibold text-emerald-600 mb-2">
                      ✓ Ventajas
                    </p>
                    <ul className="space-y-1">
                      {item.ventajas.map((v) => (
                        <li
                          key={v}
                          className="text-xs text-onyx-600 flex items-center gap-1"
                        >
                          <div className="w-1 h-1 rounded-full bg-emerald-500"></div>
                          {v}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-amber-600 mb-2">
                      ○ Desventajas
                    </p>
                    <ul className="space-y-1">
                      {item.desventajas.map((d) => (
                        <li
                          key={d}
                          className="text-xs text-onyx-600 flex items-center gap-1"
                        >
                          <div className="w-1 h-1 rounded-full bg-amber-500"></div>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Badge
                  className={cn(
                    "w-full text-white border-0 text-center",
                    `bg-gradient-to-r ${item.gradiente}`,
                  )}
                >
                  Mejor para: {item.mejorPara}
                </Badge>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Tabla comparativa de codecs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 p-6 rounded-xl bg-gradient-to-r from-tuscan-sun-50 to-amber-glow-50 border border-tuscan-sun-200"
      >
        <h3 className="text-xl font-bold text-onyx-900 mb-4 text-center">
          Codecs de Bluetooth: ¿Importan?
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              name: "SBC",
              calidad: "Básica",
              latencia: "Alta",
              uso: "Estándar",
            },
            { name: "AAC", calidad: "Buena", latencia: "Media", uso: "Apple" },
            {
              name: "aptX",
              calidad: "Muy buena",
              latencia: "Baja",
              uso: "Android/Gaming",
            },
            {
              name: "LDAC",
              calidad: "Excelente",
              latencia: "Media",
              uso: "Hi-Res Audio",
            },
          ].map((codec) => (
            <div
              key={codec.name}
              className="p-3 rounded-lg bg-white border border-tuscan-sun-100 text-center"
            >
              <p className="font-bold text-onyx-900">{codec.name}</p>
              <p className="text-xs text-onyx-600">Calidad: {codec.calidad}</p>
              <p className="text-xs text-onyx-600">
                Latencia: {codec.latencia}
              </p>
            </div>
          ))}
        </div>
        <p className="text-xs text-onyx-500 text-center mt-4">
          Si buscas la mejor calidad inalámbrica, busca audífonos con aptX o
          LDAC.
        </p>
      </motion.div>
    </div>
  );
};

// Sección: Según tu uso
const UsoSection = () => {
  const usos = [
    {
      icon: <Music className="h-8 w-8" />,
      titulo: "Música",
      descripcion: "Para amantes de la música que buscan fidelidad y detalles.",
      recomendaciones: [
        "Busca respuesta plana y balanceada",
        "Considera audífonos abiertos para mejor escena sonora",
        "Para bass, busca drivers grandes o tecnología especial",
      ],
      marcas: ["Sony", "Sennheiser", "Bose", "Audio-Technica"],
      gradiente: "from-tuscan-sun-400 to-amber-glow-400",
    },
    {
      icon: <Gamepad2 className="h-8 w-8" />,
      titulo: "Gaming",
      descripcion: "Para jugadores que necesitan precisión y comunicación.",
      recomendaciones: [
        "Sonido surround virtual para ubicar enemigos",
        "Micrófono de calidad para comunicación",
        "Cómodos para sesiones largas",
      ],
      marcas: ["HyperX", "Razer", "JBL Quantum", "Sennheiser Gaming"],
      gradiente: "from-tuscan-sun-500 to-amber-glow-500",
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      titulo: "Oficina / Trabajo",
      descripcion: "Para concentración y llamadas profesionales.",
      recomendaciones: [
        "Cancelación de ruido para concentrarte",
        "Micrófono con cancelación de ruido para llamadas",
        "Cómodos para uso prolongado",
      ],
      marcas: ["Bose", "Sony", "JBL", "Plantronics"],
      gradiente: "from-tuscan-sun-400 to-amber-glow-400",
    },
    {
      icon: <Dumbbell className="h-8 w-8" />,
      titulo: "Deporte",
      descripcion: "Para entrenar sin preocupaciones.",
      recomendaciones: [
        "Resistencia al agua y sudor (IPX4 o superior)",
        "Ajuste seguro (ganchos o in-ear con aletas)",
        "Buena batería para largas sesiones",
      ],
      marcas: ["JBL", "Skullcandy", "Beats", "Bose Sport"],
      gradiente: "from-tuscan-sun-500 to-amber-glow-500",
    },
    {
      icon: <Plane className="h-8 w-8" />,
      titulo: "Viajes",
      descripcion: "Para moverte con comodidad y aislarte del entorno.",
      recomendaciones: [
        "Cancelación de ruido activa (ANC) imprescindible",
        "Plegables para fácil transporte",
        "Larga duración de batería",
      ],
      marcas: ["Sony", "Bose", "Sennheiser", "JBL"],
      gradiente: "from-tuscan-sun-400 to-amber-glow-400",
    },
    {
      icon: <Mic2 className="h-8 w-8" />,
      titulo: "Estudio / Producción",
      descripcion: "Para creadores de contenido y músicos.",
      recomendaciones: [
        "Respuesta plana y precisa",
        "Cómodos para largas sesiones",
        "Alámbricos para mínima latencia",
      ],
      marcas: ["Audio-Technica", "Sennheiser", "Beyerdynamic", "AKG"],
      gradiente: "from-tuscan-sun-500 to-amber-glow-500",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-onyx-900 mb-3">
          Según tu <span className="text-tuscan-sun-600">Uso</span>
        </h2>
        <p className="text-onyx-600 max-w-2xl mx-auto">
          El mejor audífono depende de cómo y dónde lo uses.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {usos.map((uso, index) => (
          <motion.div
            key={uso.titulo}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <Card className="h-full border-2 border-transparent bg-white hover:border-tuscan-sun-300 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-xl bg-gradient-to-r flex items-center justify-center text-white",
                      uso.gradiente,
                    )}
                  >
                    {uso.icon}
                  </div>
                  <h3 className="text-xl font-bold text-onyx-900">
                    {uso.titulo}
                  </h3>
                </div>

                <p className="text-onyx-600 text-sm mb-4">{uso.descripcion}</p>

                <div className="space-y-3 mb-4">
                  <p className="text-sm font-semibold text-onyx-800">
                    Recomendaciones:
                  </p>
                  <ul className="space-y-2">
                    {uso.recomendaciones.map((rec) => (
                      <li
                        key={rec}
                        className="text-xs text-onyx-600 flex items-start gap-2"
                      >
                        <CheckCircle2 className="h-3 w-3 text-tuscan-sun-500 flex-shrink-0 mt-0.5" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-onyx-100">
                  <p className="text-xs text-onyx-500 mb-2">
                    Marcas recomendadas:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {uso.marcas.map((marca) => (
                      <Badge
                        key={marca}
                        variant="outline"
                        className="bg-tuscan-sun-50 text-onyx-700 border-tuscan-sun-200"
                      >
                        {marca}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Sección: Características importantes
const CaracteristicasSection = () => {
  const caracteristicas = [
    {
      icon: <Battery className="h-6 w-6" />,
      titulo: "Duración de batería",
      descripcion: "Para inalámbricos, busca 20h o más. Algunos llegan a 50h.",
      nivel: "Esencial",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      titulo: "Cancelación de ruido (ANC)",
      descripcion: "Ideal para viajes, oficina o entornos ruidosos.",
      nivel: "Importante",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      titulo: "Impedancia",
      descripcion:
        "Baja (16-32Ω) para móviles. Alta (250Ω+) requiere amplificador.",
      nivel: "Técnico",
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      titulo: "Respuesta en frecuencia",
      descripcion:
        "Rango audible humano: 20Hz - 20kHz. Más no siempre es mejor.",
      nivel: "Técnico",
    },
    {
      icon: <Wifi className="h-6 w-6" />,
      titulo: "Codecs Bluetooth",
      descripcion:
        "SBC, AAC, aptX, LDAC. Mejores codecs = mejor calidad inalámbrica.",
      nivel: "Avanzado",
    },
    {
      icon: <Volume2 className="h-6 w-6" />,
      titulo: "Sensibilidad",
      descripcion: "Mayor sensibilidad = más volumen con menos potencia.",
      nivel: "Técnico",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-onyx-900 mb-3">
          Características{" "}
          <span className="text-tuscan-sun-600">Importantes</span>
        </h2>
        <p className="text-onyx-600 max-w-2xl mx-auto">
          Lo que debes mirar al comprar audífonos.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {caracteristicas.map((item, index) => (
          <motion.div
            key={item.titulo}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="p-5 rounded-xl bg-white border border-onyx-100 hover:border-tuscan-sun-300 transition-all group"
          >
            <div className="flex items-start gap-3">
              <div className="p-3 rounded-lg bg-gradient-to-br from-tuscan-sun-100 to-amber-glow-100 text-tuscan-sun-600 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-onyx-900">{item.titulo}</h3>
                  <Badge
                    variant="outline"
                    className="text-xs bg-tuscan-sun-50 text-tuscan-sun-700 border-tuscan-sun-200"
                  >
                    {item.nivel}
                  </Badge>
                </div>
                <p className="text-sm text-onyx-600">{item.descripcion}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Guía rápida de especificaciones */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 p-6 rounded-xl bg-gradient-to-r from-tuscan-sun-50 to-amber-glow-50 border border-tuscan-sun-200"
      >
        <h3 className="text-xl font-bold text-onyx-900 mb-4">
          Guía rápida de especificaciones
        </h3>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-tuscan-sun-500"></div>
            <span className="text-sm text-onyx-700">
              <span className="font-semibold">Impedancia baja (16-32Ω):</span>{" "}
              Funcionan bien con teléfonos y laptops
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-tuscan-sun-500"></div>
            <span className="text-sm text-onyx-700">
              <span className="font-semibold">Sensibilidad 100dB:</span> Suenan
              fuerte sin necesidad de amplificador
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-tuscan-sun-500"></div>
            <span className="text-sm text-onyx-700">
              <span className="font-semibold">Drivers de 40mm o más:</span>{" "}
              Generalmente mejor respuesta en graves
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-tuscan-sun-500"></div>
            <span className="text-sm text-onyx-700">
              <span className="font-semibold">
                Rango de frecuencia 20Hz-20kHz:
              </span>{" "}
              El rango audible humano completo
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Sección: Preguntas Frecuentes
const FAQSection = () => {
  const faqs = [
    {
      pregunta: "¿Qué significa cancelación de ruido (ANC)?",
      respuesta:
        "La cancelación activa de ruido usa micrófonos para captar el ruido exterior y genera ondas sonoras inversas para cancelarlo. Es ideal para viajes, oficina o entornos ruidosos. No elimina todo el ruido, pero reduce significativamente sonidos constantes como motores o aire acondicionado.",
      categoria: "tecnologia",
    },
    {
      pregunta: "¿Qué diferencia hay entre audífonos abiertos y cerrados?",
      respuesta:
        "Los audífonos abiertos tienen rejillas en la parte exterior que permiten la entrada de aire, dando un sonido más natural y espacioso, pero aíslan poco y 'filtran' sonido. Los cerrados aíslan mejor y no filtran sonido, ideales para grabar o usar en público.",
      categoria: "tipos",
    },
    {
      pregunta: "¿Los audífonos inalámbricos tienen mala calidad de audio?",
      respuesta:
        "No necesariamente. Los codecs modernos como aptX HD y LDAC permiten calidad cercana a la alámbrica. Sin embargo, si eres audiófilo, los alámbricos siguen siendo superiores por la ausencia de compresión.",
      categoria: "tecnologia",
    },
    {
      pregunta: "¿Qué significa阻抗 (impedancia) y por qué importa?",
      respuesta:
        "La impedancia es la resistencia eléctrica de los audífonos. Los de baja impedancia (16-32Ω) funcionan bien con teléfonos. Los de alta impedancia (250Ω+) necesitan amplificadores para sonar bien y alcanzar volumen suficiente.",
      categoria: "tecnica",
    },
    {
      pregunta: "¿Cuánta batería necesito?",
      respuesta:
        "Para uso diario, busca al menos 20 horas. Para viajes, 30 horas o más. Muchos modelos ofrecen carga rápida: 5 minutos de carga = horas de reproducción.",
      categoria: "practica",
    },
    {
      pregunta: "¿Qué significa IPX4, IPX5, IPX7?",
      respuesta:
        "El código IP indica resistencia al agua. IPX4: resistente a salpicaduras. IPX5: resistente a chorros. IPX7: puede sumergirse en agua. Para deporte, busca al menos IPX4.",
      categoria: "practica",
    },
    {
      pregunta: "¿Los audífonos gaming sirven para música?",
      respuesta:
        "Sí, pero están optimizados para gaming: suelen enfatizar frecuencias de pasos (agudos) y tener micrófono. Para música pura, los audífonos de estudio o Hi-Fi son mejores por su respuesta plana.",
      categoria: "compra",
    },
    {
      pregunta: "¿Vale la pena pagar más por marcas reconocidas?",
      respuesta:
        "Generalmente sí. Marcas como Sony, Sennheiser, Bose, Audio-Technica invierten en investigación, calidad de materiales y soporte. Un audífono barato puede sonar bien al principio, pero durará menos y tendrá peor servicio post-venta.",
      categoria: "compra",
    },
  ];

  const categorias = [
    { id: "todas", label: "Todas" },
    { id: "tecnologia", label: "Tecnología" },
    { id: "tipos", label: "Tipos" },
    { id: "tecnica", label: "Técnicas" },
    { id: "practica", label: "Prácticas" },
    { id: "compra", label: "Compra" },
  ];

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("todas");

  const faqsFiltradas =
    categoriaSeleccionada === "todas"
      ? faqs
      : faqs.filter((faq) => faq.categoria === categoriaSeleccionada);

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-onyx-900 mb-3">
          Preguntas <span className="text-tuscan-sun-600">Frecuentes</span>
        </h2>
        <p className="text-onyx-600 max-w-2xl mx-auto">
          Resolvemos las dudas más comunes sobre audífonos.
        </p>
      </div>

      {/* Filtros de categoría */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {categorias.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setCategoriaSeleccionada(cat.id)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
              categoriaSeleccionada === cat.id
                ? "bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500 text-white shadow-md"
                : "bg-white border border-onyx-200 text-onyx-700 hover:border-tuscan-sun-300 hover:bg-tuscan-sun-50",
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Acordeón de preguntas */}
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqsFiltradas.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <AccordionItem
                value={`item-${index}`}
                className="border border-onyx-200 rounded-xl overflow-hidden bg-white"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-tuscan-sun-50 hover:no-underline">
                  <div className="flex items-start gap-3 text-left">
                    <HelpCircle className="h-5 w-5 text-tuscan-sun-500 flex-shrink-0 mt-0.5" />
                    <span className="font-medium text-onyx-900">
                      {faq.pregunta}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2">
                  <div className="pl-8 text-onyx-600">{faq.respuesta}</div>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>

      {/* Si no hay preguntas */}
      {faqsFiltradas.length === 0 && (
        <div className="text-center py-8">
          <p className="text-onyx-600">No hay preguntas en esta categoría.</p>
        </div>
      )}

      {/* Contacto para más dudas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 p-6 rounded-xl bg-gradient-to-r from-tuscan-sun-50 to-amber-glow-50 border border-tuscan-sun-200 text-center"
      >
        <HelpCircle className="h-8 w-8 text-tuscan-sun-500 mx-auto mb-3" />
        <h3 className="text-xl font-bold text-onyx-900 mb-2">
          ¿No encuentras tu pregunta?
        </h3>
        <p className="text-onyx-600 mb-4">
          Contáctanos directamente y te responderemos a la brevedad.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button
            size="sm"
            className="bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500 text-white"
            onClick={() => window.open("https://wa.me/584141234567", "_blank")}
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            WhatsApp
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="border-tuscan-sun-200 hover:border-tuscan-sun-300"
            onClick={() =>
              (window.location.href = "mailto:info@pabliculares.com")
            }
          >
            <Mail className="h-4 w-4 mr-2" />
            Email
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

// Resumen rápido
const ResumenSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-tuscan-sun-50 to-amber-glow-50 border border-tuscan-sun-200"
  >
    <h2 className="text-2xl font-bold text-onyx-900 mb-6 text-center">
      Resumen rápido: Cómo elegir
    </h2>

    <div className="grid md:grid-cols-3 gap-6">
      <div className="space-y-3">
        <h3 className="font-semibold text-onyx-800 flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500 text-white flex items-center justify-center text-sm">
            1
          </div>
          Define tu uso principal
        </h3>
        <ul className="space-y-2 pl-8">
          <li className="text-sm text-onyx-600 flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-tuscan-sun-500"></div>
            ¿Música, gaming, deporte, oficina?
          </li>
          <li className="text-sm text-onyx-600 flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-tuscan-sun-500"></div>
            ¿Dónde los usarás más?
          </li>
        </ul>
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold text-onyx-800 flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500 text-white flex items-center justify-center text-sm">
            2
          </div>
          Elige tipo y conexión
        </h3>
        <ul className="space-y-2 pl-8">
          <li className="text-sm text-onyx-600 flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-tuscan-sun-500"></div>
            Over-ear, on-ear o in-ear
          </li>
          <li className="text-sm text-onyx-600 flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-tuscan-sun-500"></div>
            ¿Cable, Bluetooth o ambos?
          </li>
        </ul>
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold text-onyx-800 flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500 text-white flex items-center justify-center text-sm">
            3
          </div>
          Revisa características clave
        </h3>
        <ul className="space-y-2 pl-8">
          <li className="text-sm text-onyx-600 flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-tuscan-sun-500"></div>
            ¿Necesitas ANC?
          </li>
          <li className="text-sm text-onyx-600 flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-tuscan-sun-500"></div>
            Batería suficiente para tu día
          </li>
        </ul>
      </div>
    </div>

    <div className="mt-6 text-center">
      <Badge className="px-4 py-2 bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500 text-white border-0">
        ¿Dudas? Contáctanos y te asesoramos
      </Badge>
    </div>
  </motion.div>
);

// Sección de asesoría
const AsesoriaSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mt-12 p-8 rounded-2xl bg-white border border-tuscan-sun-200 shadow-lg"
  >
    <div className="text-center mb-6">
      <h2 className="text-2xl font-bold text-onyx-900 mb-2">
        ¿Aún no decides?
      </h2>
      <p className="text-onyx-600">
        Nuestros expertos te ayudan a elegir el audífono perfecto. Sin
        compromiso.
      </p>
    </div>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button
        size="lg"
        className="bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500 hover:from-tuscan-sun-600 hover:to-amber-glow-600 text-white shadow-lg shadow-tuscan-sun-200"
        onClick={() => window.open("https://wa.me/584141234567", "_blank")}
      >
        <MessageCircle className="h-5 w-5 mr-2" />
        Asesoría por WhatsApp
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="border-tuscan-sun-200 hover:border-tuscan-sun-300 hover:bg-tuscan-sun-50"
        onClick={() => (window.location.href = "/contacto")}
      >
        <Mail className="h-5 w-5 mr-2" />
        Otros medios de contacto
      </Button>
    </div>

    <div className="flex items-center justify-center gap-4 mt-6 text-sm text-onyx-500">
      <div className="flex items-center gap-1">
        <Clock className="h-4 w-4" />
        <span>Respuesta en &lt;1h</span>
      </div>
      <div className="w-1 h-1 rounded-full bg-onyx-300"></div>
      <div className="flex items-center gap-1">
        <Users className="h-4 w-4" />
        <span>+500 clientes asesorados</span>
      </div>
      <div className="w-1 h-1 rounded-full bg-onyx-300"></div>
      <div className="flex items-center gap-1">
        <Star className="h-4 w-4" />
        <span>4.8/5 satisfacción</span>
      </div>
    </div>
  </motion.div>
);

export default GuiaPageContent;
