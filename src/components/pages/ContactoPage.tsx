// src/components/pages/ContactoPage.tsx
"use client";

import { useState, useEffect } from "react";
import {
  Headphones,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  Send,
  User,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  ShoppingBag,
  Copy,
  Check,
  Star,
  Sparkles,
  Shield,
  Truck,
  Wifi,
  Zap,
  Calendar,
  Users,
  Globe,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  ChevronRight,
  ThumbsUp,
  HelpCircle,
  Package,
  CreditCard,
  Home,
  ArrowRight,
  Gift,
  Award,
  Heart,
  Rocket,
  Compass,
  Navigation,
  Bell,
  Camera,
  Coffee,
  Sun,
  Moon,
  Cloud,
  Wind,
  Droplets,
  Flower2,
  Gem,
  Crown,
  Mountain,
  TreePine,
  Waves,
  Feather,
  Anchor,
  Ship,
  Plane,
  Car,
  Bike,
  Users2,
  Target,
  Eye,
  Lock,
  Unlock,
  Key,
  Wallet,
  PiggyBank,
  TrendingUp,
  BarChart,
  PieChart,
  Activity,
  HeartPulse,
  Brain,
  Cpu,
  Database,
  Cloud as CloudIcon,
  Server,
  Network,
  Wifi as WifiIcon,
  Bluetooth,
  Battery as BatteryIcon,
  Zap as ZapIcon,
  Cpu as CpuIcon,
} from "lucide-react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const ContactoPageContent = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-onyx-50/30 to-white">
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
    <div className="min-h-screen bg-gradient-to-b from-onyx-50/30 to-white">
      {/* Hero Section con Colores PabliCulares */}
      <HeroSection />

      {/* Contenido principal */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Información de contacto - 2 columnas */}
          <div className="lg:col-span-2 space-y-6">
            <ContactInfo handleCopy={handleCopy} copied={copied} />
          </div>

          {/* Formulario de contacto - 3 columnas */}
          <div className="lg:col-span-3">
            <ContactForm
              formStatus={formStatus}
              setFormStatus={setFormStatus}
            />
          </div>
        </div>

        {/* Sección de Zonas de Entrega */}
        <DeliveryZonesSection />

        {/* Mapa y ubicación */}
        <div className="mt-16">
          <LocationSection />
        </div>

        {/* Horarios de atención */}
        <div className="mt-12">
          <ScheduleSection />
        </div>

        {/* Estadísticas de Atención */}
        <StatsSection />

        {/* Testimonios Rápidos */}
        <QuickTestimonialsSection />

        {/* Preguntas frecuentes rápidas */}
        <div className="mt-12">
          <QuickFAQSection />
        </div>

        {/* Redes sociales */}
        <div className="mt-12">
          <SocialSection />
        </div>
      </div>
    </div>
  );
};

// Hero Section con Colores PabliCulares
const HeroSection = () => (
  <div className="relative bg-gradient-to-br from-tuscan-sun-50 via-white to-amber-glow-50 py-20 md:py-28 overflow-hidden">
    {/* Elementos decorativos con colores PabliCulares */}
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute -top-20 -right-20 w-96 h-96 border-8 border-tuscan-sun-200/30 rounded-full"
    />

    <motion.div
      animate={{
        scale: [1, 1.3, 1],
        rotate: [360, 180, 0],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute -bottom-20 -left-20 w-80 h-80 border-8 border-amber-glow-200/30 rounded-full"
    />

    {/* Partículas flotantes en amarillo */}
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
        className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-tuscan-sun-300/50 to-amber-glow-300/50"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
      />
    ))}

    <div className="container relative z-10 mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Badge className="mb-6 px-6 py-3 text-sm font-semibold bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500 text-white border-0 shadow-lg shadow-tuscan-sun-500/30">
          <Sparkles className="h-4 w-4 mr-2 animate-pulse" />
          Atención Personalizada
        </Badge>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-onyx-900 mb-6">
          <span className="bg-gradient-to-r from-tuscan-sun-600 to-amber-glow-600 bg-clip-text text-transparent">
            Conecta
          </span>
          <br />
          con nosotros
        </h1>

        <p className="text-xl text-onyx-600 max-w-2xl mx-auto mb-8">
          Estamos aquí para escucharte, asesorarte y ayudarte a encontrar el
          sonido perfecto para tu vida.
        </p>

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-tuscan-sun-100 to-amber-glow-100 border border-tuscan-sun-200"
        >
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
                className="w-8 h-8 rounded-full bg-gradient-to-br from-tuscan-sun-400 to-amber-glow-400 border-2 border-white"
              />
            ))}
          </div>
          <span className="text-onyx-700 font-medium">
            +500 clientes satisfechos
          </span>
        </motion.div>
      </motion.div>
    </div>
  </div>
);

// Componente Información de Contacto - TODOS LOS ICONOS EN AMARILLO
const ContactInfo = ({ handleCopy, copied }: any) => {
  const contactMethods = [
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "WhatsApp",
      description: "Respuesta inmediata • 24/7",
      value: "+58 414 123 4567",
      type: "whatsapp",
      action: () => window.open("https://wa.me/584141234567", "_blank"),
      gradient: "from-tuscan-sun-500 to-amber-glow-500",
      lightBg: "bg-tuscan-sun-50",
      border: "border-tuscan-sun-200",
      iconBg: "bg-tuscan-sun-100",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Teléfono",
      description: "Llámanos • Horario comercial",
      value: "+58 414 123 4567",
      type: "phone",
      action: () => (window.location.href = "tel:+584141234567"),
      gradient: "from-tuscan-sun-500 to-amber-glow-500",
      lightBg: "bg-tuscan-sun-50",
      border: "border-tuscan-sun-200",
      iconBg: "bg-tuscan-sun-100",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      description: "Respuesta en 24h",
      value: "info@pabliculares.com",
      type: "email",
      action: () => (window.location.href = "mailto:info@pabliculares.com"),
      gradient: "from-tuscan-sun-500 to-amber-glow-500",
      lightBg: "bg-tuscan-sun-50",
      border: "border-tuscan-sun-200",
      iconBg: "bg-tuscan-sun-100",
    },
  ];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-onyx-900 mb-2">
          Información de <span className="text-tuscan-sun-600">contacto</span>
        </h2>
        <p className="text-onyx-600">
          Elige el método que prefieras y te ayudaremos enseguida.
        </p>
      </motion.div>

      <div className="space-y-2">
        {contactMethods.map((method, index) => (
          <motion.div
            key={method.type}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02, x: 5 }}
            className="group"
          >
            <Card
              className={cn(
                "border-2 bg-white",
                method.border,
                "hover:shadow-xl hover:border-tuscan-sun-300 transition-all duration-300",
              )}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={cn(
                      "p-4 rounded-xl",
                      method.iconBg,
                      "group-hover:scale-110 transition-transform duration-300",
                    )}
                  >
                    <div className="text-tuscan-sun-600">{method.icon}</div>
                  </motion.div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-onyx-900">
                        {method.title}
                      </h3>
                      <Badge
                        className={cn(
                          "text-white text-xs border-0",
                          `bg-gradient-to-r ${method.gradient}`,
                        )}
                      >
                        {method.description}
                      </Badge>
                    </div>

                    <p className="text-lg font-medium text-onyx-700 mb-4">
                      {method.value}
                    </p>

                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className={cn(
                          "flex-1 bg-gradient-to-r text-white border-0",
                          method.gradient,
                          "hover:opacity-90 transition-opacity",
                        )}
                        onClick={method.action}
                      >
                        {method.type === "whatsapp" && (
                          <MessageCircle className="h-4 w-4 mr-2" />
                        )}
                        {method.type === "phone" && (
                          <Phone className="h-4 w-4 mr-2" />
                        )}
                        {method.type === "email" && (
                          <Mail className="h-4 w-4 mr-2" />
                        )}
                        {method.type === "location" && (
                          <MapPin className="h-4 w-4 mr-2" />
                        )}
                        {method.type === "whatsapp" && "Escribir"}
                        {method.type === "phone" && "Llamar"}
                        {method.type === "email" && "Enviar email"}
                        {method.type === "location" && "Ver mapa"}
                      </Button>

                      <Button
                        size="sm"
                        variant="outline"
                        className="border-onyx-200 hover:border-tuscan-sun-300 hover:bg-tuscan-sun-50"
                        onClick={() => handleCopy(method.value, method.type)}
                      >
                        {copied === method.type ? (
                          <Check className="h-4 w-4 text-emerald-500" />
                        ) : (
                          <Copy className="h-4 w-4 text-onyx-500" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Atención en vivo - Estilo PabliCulares */}
    </div>
  );
};

// Componente Formulario de Contacto
const ContactForm = ({ formStatus, setFormStatus }: any) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("success");
    setTimeout(() => setFormStatus("idle"), 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      whileHover={{ scale: 1.01 }}
      className="relative"
    >
      {/* Efecto de borde animado */}
      <motion.div
        animate={{
          background: [
            "linear-gradient(45deg, #ffaa00, #ff8800, #ffaa00)",
            "linear-gradient(225deg, #ffaa00, #ff8800, #ffaa00)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -inset-0.5 rounded-2xl blur opacity-30"
      />

      <Card className="relative bg-white border-2 border-tuscan-sun-200 shadow-xl">
        <CardContent className="p-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-onyx-900 mb-2">
              Envíanos un <span className="text-tuscan-sun-600">mensaje</span>
            </h2>
            <p className="text-onyx-600">
              Completa el formulario y te responderemos a la brevedad
            </p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Nombre */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-2"
              >
                <Label htmlFor="name" className="text-onyx-700 font-medium">
                  Nombre completo
                </Label>
                <div className="relative group">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-onyx-400 group-focus-within:text-tuscan-sun-500 transition-colors" />
                  <Input
                    id="name"
                    placeholder="Ej. Juan Pérez"
                    className="pl-10 border-onyx-200 focus:border-tuscan-sun-300 focus:ring-1 focus:ring-tuscan-sun-200"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-2"
              >
                <Label htmlFor="email" className="text-onyx-700 font-medium">
                  Correo electrónico
                </Label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-onyx-400 group-focus-within:text-tuscan-sun-500 transition-colors" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="ejemplo@correo.com"
                    className="pl-10 border-onyx-200 focus:border-tuscan-sun-300 focus:ring-1 focus:ring-tuscan-sun-200"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
              </motion.div>

              {/* Teléfono */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-2"
              >
                <Label htmlFor="phone" className="text-onyx-700 font-medium">
                  Teléfono / WhatsApp
                </Label>
                <div className="relative group">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-onyx-400 group-focus-within:text-tuscan-sun-500 transition-colors" />
                  <Input
                    id="phone"
                    placeholder="+58 414 123 4567"
                    className="pl-10 border-onyx-200 focus:border-tuscan-sun-300 focus:ring-1 focus:ring-tuscan-sun-200"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
              </motion.div>

              {/* Asunto */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-2"
              >
                <Label htmlFor="subject" className="text-onyx-700 font-medium">
                  Asunto
                </Label>
                <Select
                  value={formData.subject}
                  onValueChange={(value) =>
                    setFormData({ ...formData, subject: value })
                  }
                >
                  <SelectTrigger className="border-onyx-200 focus:border-tuscan-sun-300 focus:ring-1 focus:ring-tuscan-sun-200">
                    <SelectValue placeholder="Selecciona un asunto" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="info">
                      Información de productos
                    </SelectItem>
                    <SelectItem value="quote">Cotización</SelectItem>
                    <SelectItem value="stock">
                      Disponibilidad / Stock
                    </SelectItem>
                    <SelectItem value="shipping">Envíos a Maracaibo</SelectItem>
                    <SelectItem value="warranty">Garantía</SelectItem>
                    <SelectItem value="other">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>
            </div>

            {/* Mensaje */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-2"
            >
              <Label htmlFor="message" className="text-onyx-700 font-medium">
                Mensaje
              </Label>
              <Textarea
                id="message"
                placeholder="¿En qué podemos ayudarte?"
                className="min-h-[120px] border-onyx-200 focus:border-tuscan-sun-300 focus:ring-1 focus:ring-tuscan-sun-200"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
              />
            </motion.div>

            {/* Status y botón */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="space-y-4"
            >
              <AnimatePresence mode="wait">
                {formStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="p-4 rounded-xl bg-tuscan-sun-50 border border-tuscan-sun-200 text-tuscan-sun-700 flex items-center gap-3"
                  >
                    <CheckCircle className="h-5 w-5 flex-shrink-0 animate-bounce" />
                    <div>
                      <p className="font-semibold">¡Mensaje enviado!</p>
                      <p className="text-sm">
                        Te responderemos en menos de 24h
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500 hover:from-tuscan-sun-600 hover:to-amber-glow-600 text-white border-0 shadow-lg shadow-tuscan-sun-200 relative overflow-hidden group"
              >
                <motion.div
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
                <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Enviar mensaje
              </Button>
            </motion.div>

            <p className="text-xs text-onyx-400 text-center">
              Al enviar este formulario, aceptas nuestra política de privacidad.
              Tus datos serán usados solo para responder tu consulta.
            </p>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Sección de Zonas de Entrega - TODOS LOS ICONOS EN AMARILLO
const DeliveryZonesSection = () => {
  const zones = [
    {
      name: "Norte",
      time: "20min",
      gradient: "from-tuscan-sun-400 to-amber-glow-400",
      icon: <Compass />,
      bg: "bg-tuscan-sun-50",
    },
    {
      name: "Sur",
      time: "40min",
      gradient: "from-tuscan-sun-500 to-amber-glow-500",
      icon: <Navigation />,
      bg: "bg-tuscan-sun-50",
    },
    {
      name: "Este",
      time: "25min",
      gradient: "from-tuscan-sun-400 to-amber-glow-400",
      icon: <Sun />,
      bg: "bg-tuscan-sun-50",
    },
    {
      name: "Oeste",
      time: "25min",
      gradient: "from-tuscan-sun-500 to-amber-glow-500",
      icon: <Moon />,
      bg: "bg-tuscan-sun-50",
    },
    {
      name: "Centro",
      time: "30min",
      gradient: "from-tuscan-sun-400 to-amber-glow-400",
      icon: <Target />,
      bg: "bg-tuscan-sun-50",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-tuscan-sun-50 to-amber-glow-50 border border-tuscan-sun-200"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-onyx-900 mb-2">
          Zonas de <span className="text-tuscan-sun-600">entrega</span>
        </h2>
        <p className="text-onyx-600">
          Cubrimos toda Maracaibo con entregas rápidas y seguras
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {zones.map((zone, index) => (
          <motion.div
            key={zone.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="relative group"
          >
            <Card
              className={cn(
                "relative border-2 border-tuscan-sun-200/50 bg-white group-hover:border-tuscan-sun-300 transition-all duration-300",
                zone.bg,
              )}
            >
              <CardContent className="p-6 text-center">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className={cn(
                    "w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-r flex items-center justify-center text-white",
                    zone.gradient,
                  )}
                >
                  {zone.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-onyx-900 mb-2">
                  {zone.name}
                </h3>
                <Badge
                  className={cn(
                    "text-white border-0",
                    `bg-gradient-to-r ${zone.gradient}`,
                  )}
                >
                  {zone.time}
                </Badge>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Componente Ubicación - ICONOS AMARILLOS
const LocationSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="space-y-6"
  >
    <div className="text-center">
      <h2 className="text-3xl font-bold text-onyx-900 mb-2">
        ¿Dónde <span className="text-tuscan-sun-600">estamos</span>?
      </h2>
      <p className="text-onyx-600">
        Operamos en toda Maracaibo, con entregas rápidas por zonas
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      {/* Mapa interactivo */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-tuscan-sun-100 to-amber-glow-100 border border-tuscan-sun-200 group cursor-pointer"
        onClick={() =>
          window.open("https://maps.google.com/?q=Maracaibo", "_blank")
        }
      >
        {/* Puntos animados en el mapa */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
          />
        ))}

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-center bg-white/90 backdrop-blur-sm px-6 py-4 rounded-xl border border-tuscan-sun-200 shadow-lg"
          >
            <MapPin className="h-8 w-8 text-tuscan-sun-600 mx-auto mb-2" />
            <p className="text-onyx-900 font-medium">Maracaibo, Zulia</p>
            <p className="text-sm text-onyx-600">Venezuela</p>
            <motion.div
              animate={{
                x: [0, 5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="text-tuscan-sun-600 text-sm mt-2 flex items-center justify-center gap-1"
            >
              Ver en Google Maps
              <ArrowRight className="h-4 w-4" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Información de ubicación */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <Card className="bg-white border border-tuscan-sun-200 shadow-sm">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-onyx-900 mb-4 flex items-center gap-2">
              <Navigation className="h-5 w-5 text-tuscan-sun-600" />
              Puntos de referencia
            </h3>

            <div className="space-y-4">
              {[
                {
                  place: "Plaza de la República",
                  distance: "Centro",
                  time: "15 min",
                },
                {
                  place: "Sambil Maracaibo",
                  distance: "Norte",
                  time: "20 min",
                },
                {
                  place: "Lago de Maracaibo",
                  distance: "Este",
                  time: "25 min",
                },
                {
                  place: "Universidad Dr. Rafael Belloso Chacín",
                  distance: "Oeste",
                  time: "30 min",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.place}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-tuscan-sun-50 to-amber-glow-50 border border-tuscan-sun-100"
                >
                  <div>
                    <p className="font-medium text-onyx-900">{item.place}</p>
                    <p className="text-sm text-onyx-600">{item.distance}</p>
                  </div>
                  <Badge className="bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500 text-white border-0">
                    {item.time}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </motion.div>
);

// Componente Horarios - ICONOS AMARILLOS
const ScheduleSection = () => {
  const schedule = [
    {
      day: "Lunes",
      hours: "9:00 AM - 7:00 PM",
      status: "Disponible",
      icon: <Sun />,
    },
    {
      day: "Martes",
      hours: "9:00 AM - 7:00 PM",
      status: "Disponible",
      icon: <Sun />,
    },
    {
      day: "Miércoles",
      hours: "9:00 AM - 7:00 PM",
      status: "Disponible",
      icon: <Sun />,
    },
    {
      day: "Jueves",
      hours: "9:00 AM - 7:00 PM",
      status: "Disponible",
      icon: <Sun />,
    },
    {
      day: "Viernes",
      hours: "9:00 AM - 7:00 PM",
      status: "Disponible",
      icon: <Sun />,
    },
    {
      day: "Sábado",
      hours: "9:00 AM - 2:00 PM",
      status: "Disponible",
      icon: <Coffee />,
    },
    {
      day: "Domingo",
      hours: "Cerrado",
      status: "WhatsApp 24/7",
      icon: <Moon />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold text-onyx-900 mb-2">
          Horarios de <span className="text-tuscan-sun-600">atención</span>
        </h2>
        <p className="text-onyx-600">
          WhatsApp siempre disponible para consultas urgentes
        </p>
      </div>

      <div className="grid md:grid-cols-3 lg:grid-cols-7 gap-3">
        {schedule.map((item, index) => (
          <motion.div
            key={item.day}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className={cn(
              "p-4 rounded-xl border-2 text-center transition-all bg-white",
              item.day === "Domingo"
                ? "border-tuscan-sun-300 bg-tuscan-sun-50"
                : "border-onyx-200 hover:border-tuscan-sun-300 hover:shadow-lg",
            )}
          >
            <motion.div
              animate={{
                rotate: item.day === "Domingo" ? [0, 360] : 0,
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              className="w-8 h-8 mx-auto mb-2 text-tuscan-sun-600"
            >
              {item.icon}
            </motion.div>
            <h3 className="font-semibold text-onyx-900 mb-2">{item.day}</h3>
            <p className="text-sm text-onyx-600 mb-2">{item.hours}</p>
            <Badge
              variant={item.day === "Domingo" ? "outline" : "default"}
              className={cn(
                item.day === "Domingo"
                  ? "border-tuscan-sun-300 text-tuscan-sun-700 bg-transparent"
                  : "bg-tuscan-sun-100 text-tuscan-sun-700 border-tuscan-sun-200",
              )}
            >
              {item.status}
            </Badge>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Estadísticas de Atención - TODOS LOS ICONOS EN AMARILLO
const StatsSection = () => {
  const stats = [
    {
      value: "24/7",
      label: "WhatsApp",
      icon: <MessageCircle />,
      gradient: "from-tuscan-sun-400 to-amber-glow-400",
      bg: "bg-tuscan-sun-50",
    },
    {
      value: "<1h",
      label: "Tiempo de respuesta",
      icon: <Clock />,
      gradient: "from-tuscan-sun-500 to-amber-glow-500",
      bg: "bg-tuscan-sun-50",
    },
    {
      value: "500+",
      label: "Clientes atendidos",
      icon: <Users />,
      gradient: "from-tuscan-sun-400 to-amber-glow-400",
      bg: "bg-tuscan-sun-50",
    },
    {
      value: "100%",
      label: "Satisfacción",
      icon: <ThumbsUp />,
      gradient: "from-tuscan-sun-500 to-amber-glow-500",
      bg: "bg-tuscan-sun-50",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="relative group"
        >
          <Card
            className={cn(
              "relative border-2 border-tuscan-sun-200/50 group-hover:border-tuscan-sun-300 transition-all duration-300",
              stat.bg,
            )}
          >
            <CardContent className="p-6 text-center">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
                className={cn(
                  "w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-r flex items-center justify-center text-white",
                  stat.gradient,
                )}
              >
                {stat.icon}
              </motion.div>
              <div className="text-2xl font-bold text-onyx-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-onyx-600">{stat.label}</div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};

// Testimonios Rápidos - CON ESTRELLAS AMARILLAS
const QuickTestimonialsSection = () => {
  const testimonials = [
    {
      name: "Keyber C.",
      comment:
        "Excelente atención, me ayudaron a elegir los audífonos perfectos",
      rating: 5,
      product: "Sony WH-1000XM5",
    },
    {
      name: "Juan C.",
      comment: "Rápidos en la entrega y muy buena asesoría. Recomendados",
      rating: 5,
      product: "JBL Tune 760NC",
    },
    {
      name: "Luis A.",
      comment: "Productos originales y garantía real. Volveré a comprar",
      rating: 5,
      product: "Bose QC45",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-8 p-8 rounded-2xl bg-gradient-to-br from-tuscan-sun-50 to-amber-glow-50 border border-tuscan-sun-200"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-onyx-900 mb-2">
          Lo que dicen nuestros{" "}
          <span className="text-tuscan-sun-600">clientes</span>
        </h2>
        <p className="text-onyx-600">
          Experiencias reales de marabinos como tú
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-xl bg-white border border-tuscan-sun-200 shadow-sm"
          >
            <div className="flex items-center gap-1 mb-3">
              {[...Array(testimonial.rating)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                >
                  <Star className="h-4 w-4 fill-tuscan-sun-400 text-tuscan-sun-400" />
                </motion.div>
              ))}
            </div>
            <p className="text-onyx-700 mb-4">
              &ldquo;{testimonial.comment}&rdquo;
            </p>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-onyx-900">
                {testimonial.name}
              </span>
              <Badge className="bg-gradient-to-r from-tuscan-sun-500/20 to-amber-glow-500/20 text-tuscan-sun-700 border-tuscan-sun-300">
                {testimonial.product}
              </Badge>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Componente Preguntas Frecuentes - TODOS LOS ICONOS EN AMARILLO
const QuickFAQSection = () => {
  const faqs = [
    {
      question: "¿Cómo puedo comprar?",
      answer:
        "Elige tu producto, contáctanos por WhatsApp y coordinamos la entrega en Maracaibo.",
      icon: <ShoppingBag />,
      gradient: "from-tuscan-sun-400 to-amber-glow-400",
      bg: "bg-tuscan-sun-50",
    },
    {
      question: "¿Hacen envíos a toda Maracaibo?",
      answer: "Sí, entregamos en todas las zonas de Maracaibo en 15-45min.",
      icon: <Truck />,
      gradient: "from-tuscan-sun-500 to-amber-glow-500",
      bg: "bg-tuscan-sun-50",
    },
    {
      question: "¿Los productos son originales?",
      answer:
        "100% originales con garantía de 6 meses. Trabajamos solo con marcas certificadas.",
      icon: <Shield />,
      gradient: "from-tuscan-sun-400 to-amber-glow-400",
      bg: "bg-tuscan-sun-50",
    },
    {
      question: "¿Aceptan pagos por transferencia?",
      answer: "Sí, aceptamos transferencias, pago móvil y efectivo al recibir.",
      icon: <CreditCard />,
      gradient: "from-tuscan-sun-500 to-amber-glow-500",
      bg: "bg-tuscan-sun-50",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold text-onyx-900 mb-2">
          Respuestas <span className="text-tuscan-sun-600">rápidas</span>
        </h2>
        <p className="text-onyx-600">
          Las preguntas más frecuentes sobre nuestros productos y servicios
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02, x: 5 }}
            className={cn(
              "p-6 rounded-xl bg-white border border-tuscan-sun-200 hover:border-tuscan-sun-300 transition-all group",
              faq.bg,
            )}
          >
            <div className="flex gap-4">
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
                className={cn(
                  "w-12 h-12 rounded-lg bg-gradient-to-r flex items-center justify-center text-white flex-shrink-0",
                  faq.gradient,
                )}
              >
                {faq.icon}
              </motion.div>
              <div>
                <h3 className="text-lg font-bold text-onyx-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-onyx-600">{faq.answer}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <Button
          variant="link"
          className="text-tuscan-sun-600 hover:text-tuscan-sun-700"
          onClick={() => (window.location.href = "/guia")}
        >
          Ver guía de compra completa
          <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </motion.div>
  );
};

// Componente Redes Sociales - TODOS LOS ICONOS EN AMARILLO
const SocialSection = () => {
  const socials = [
    {
      name: "Instagram",
      icon: <Instagram className="h-6 w-6" />,
      followers: "1.2K",
      link: "https://instagram.com/pabliculares",
      gradient: "from-tuscan-sun-400 to-amber-glow-400",
      bg: "bg-tuscan-sun-50",
    },
    {
      name: "Facebook",
      icon: <Facebook className="h-6 w-6" />,
      followers: "800",
      link: "https://facebook.com/pabliculares",
      gradient: "from-tuscan-sun-500 to-amber-glow-500",
      bg: "bg-tuscan-sun-50",
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle className="h-6 w-6" />,
      followers: "24/7",
      link: "https://wa.me/584141234567",
      gradient: "from-tuscan-sun-400 to-amber-glow-400",
      bg: "bg-tuscan-sun-50",
    },
    {
      name: "YouTube",
      icon: <Youtube className="h-6 w-6" />,
      followers: "Pronto",
      link: "#",
      gradient: "from-tuscan-sun-500 to-amber-glow-500",
      bg: "bg-tuscan-sun-50",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold text-onyx-900 mb-2">
          Síguenos en <span className="text-tuscan-sun-600">redes</span>
        </h2>
        <p className="text-onyx-600">
          Enterate de novedades, promociones y lanzamientos
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {socials.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.05 }}
            className="relative group"
          >
            <Card
              className={cn(
                "relative border-2 border-tuscan-sun-200/50 group-hover:border-tuscan-sun-300 transition-all duration-300",
                social.bg,
              )}
            >
              <CardContent className="p-6 text-center">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className={cn(
                    "w-16 h-16 mx-auto mb-3 rounded-xl bg-gradient-to-r flex items-center justify-center text-white",
                    social.gradient,
                  )}
                >
                  {social.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-onyx-900 mb-1">
                  {social.name}
                </h3>
                <p className="text-sm text-onyx-600">
                  {social.followers} seguidores
                </p>
              </CardContent>
            </Card>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default ContactoPageContent;
