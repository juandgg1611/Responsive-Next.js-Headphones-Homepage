// src/components/sections/CallToActionSection.tsx - VERSIÓN MEJORADA
"use client";

import { useState, useEffect } from "react";
import {
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Shield,
  Headphones,
  Users,
  Star,
  ChevronDown,
  Zap,
  Truck,
  Award,
  ThumbsUp,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const CallToActionSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail("");

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "WhatsApp Directo",
      description: "Respuesta en menos de 5 minutos",
      action: "Hablar por WhatsApp",
      gradient: "from-tuscan-sun-500 to-amber-glow-500",
      bg: "bg-tuscan-sun-50",
      link: "https://wa.me/584141234567",
      isPrimary: true,
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Llamada Telefónica",
      description: "Atención personalizada inmediata",
      action: "Llamar ahora",
      gradient: "from-tuscan-sun-400 to-amber-glow-400",
      bg: "bg-tuscan-sun-50",
      link: "tel:+584141234567",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Correo Electrónico",
      description: "Respuesta en máximo 24 horas",
      action: "Enviar email",
      gradient: "from-tuscan-sun-600 to-amber-glow-600",
      bg: "bg-tuscan-sun-50",
      link: "mailto:info@pabliculares.com",
    },
  ];

  const trustSignals = [
    {
      icon: <Shield className="h-5 w-5" />,
      text: "6 meses de garantía",
      gradient: "from-tuscan-sun-400 to-amber-glow-400",
    },
    {
      icon: <CheckCircle2 className="h-5 w-5" />,
      text: "Productos 100% originales",
      gradient: "from-tuscan-sun-500 to-amber-glow-500",
    },
    {
      icon: <Users className="h-5 w-5" />,
      text: "+500 clientes satisfechos",
      gradient: "from-tuscan-sun-400 to-amber-glow-400",
    },
    {
      icon: <Star className="h-5 w-5" />,
      text: "Rating 4.8/5 en atención",
      gradient: "from-tuscan-sun-500 to-amber-glow-500",
    },
  ];

  const features = [
    {
      icon: <Truck className="h-4 w-4" />,
      text: "Entrega 24-48h en Maracaibo",
    },
    {
      icon: <Headphones className="h-4 w-4" />,
      text: "Asesoría experta sin costo",
    },
    {
      icon: <Award className="h-4 w-4" />,
      text: "Factura y garantía incluida",
    },
    {
      icon: <Zap className="h-4 w-4" />,
      text: "Pagos: transferencia, pago móvil",
    },
  ];

  if (!isMounted) {
    return (
      <section className="py-20 bg-gradient-to-b from-tuscan-sun-50/30 via-white to-amber-glow-50/30">
        <div className="container mx-auto px-4">
          <div className="h-12 w-56 bg-onyx-100 rounded-xl mx-auto mb-8 animate-pulse"></div>
          <div className="h-6 w-72 bg-onyx-100 rounded-xl mx-auto mb-12 animate-pulse"></div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="h-32 bg-onyx-100 rounded-2xl animate-pulse"
                ></div>
              ))}
            </div>
            <div className="space-y-6">
              <div className="h-96 bg-onyx-100 rounded-2xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-tuscan-sun-50/40 via-white to-amber-glow-50/40">
      {/* Fondo con partículas sutiles */}
      <div className="absolute inset-0 z-0">
        {/* Base degradada */}
        <div className="absolute inset-0 bg-gradient-to-b from-tuscan-sun-50/20 via-transparent to-amber-glow-50/20"></div>

        {/* Partículas doradas */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-tuscan-sun-400/20 to-amber-glow-400/20 rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
            }}
            animate={{
              y: [null, -20, 20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Círculos decorativos */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-72 h-72 border border-tuscan-sun-300/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-96 h-96 border border-amber-glow-300/10 rounded-full"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-6 px-6 py-3 text-sm font-semibold bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500 text-white border-0 shadow-lg shadow-tuscan-sun-500/30">
            <Sparkles className="h-4 w-4 mr-2 animate-pulse" />
            ¡Tu momento ha llegado!
          </Badge>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-onyx-900 mb-6">
            Experiencia auditiva{" "}
            <span className="bg-gradient-to-r from-tuscan-sun-600 to-amber-glow-600 bg-clip-text text-transparent">
              Premium
            </span>
            <br />
            en Maracaibo
          </h2>

          <p className="text-xl text-onyx-600 max-w-3xl mx-auto mb-8">
            Únete a los cientos de marabinos que ya descubrieron la verdadera
            calidad del audio con productos 100% originales.
          </p>

          {/* Características rápidas */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -3 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-tuscan-sun-200 shadow-sm"
              >
                <div className="text-tuscan-sun-600">{feature.icon}</div>
                <span className="text-onyx-700 text-sm font-medium">
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Lado izquierdo: Métodos de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Tarjeta principal de WhatsApp */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="border-0 bg-gradient-to-br from-white to-tuscan-sun-50 shadow-xl overflow-hidden border border-tuscan-sun-200">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-shrink-0">
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="p-5 rounded-2xl bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500 text-white shadow-lg"
                      >
                        <MessageCircle className="h-8 w-8" />
                      </motion.div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl font-bold text-onyx-900 mb-2">
                        Contacto Directo por WhatsApp
                      </h3>
                      <p className="text-onyx-600 mb-4">
                        La forma más rápida y efectiva. Resolvemos tus dudas en
                        minutos y coordinamos tu pedido al instante.
                      </p>
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500 hover:from-tuscan-sun-600 hover:to-amber-glow-600 text-white border-0 shadow-lg shadow-tuscan-sun-500/30"
                        onClick={() =>
                          window.open("https://wa.me/584141234567", "_blank")
                        }
                      >
                        <MessageCircle className="h-5 w-5 mr-2" />
                        Abrir WhatsApp ahora
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Otros métodos de contacto */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-onyx-900 mb-3 flex items-center gap-2">
                <div className="w-1 h-5 bg-gradient-to-b from-tuscan-sun-500 to-amber-glow-500 rounded-full"></div>
                Otros canales disponibles:
              </h4>

              {contactMethods.slice(1).map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <Card className="border border-tuscan-sun-200 bg-white hover:border-tuscan-sun-300 hover:shadow-lg transition-all">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className={cn(
                              "p-3 rounded-xl bg-gradient-to-r text-white",
                              method.gradient,
                            )}
                          >
                            {method.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-onyx-900">
                              {method.title}
                            </h4>
                            <p className="text-sm text-onyx-600">
                              {method.description}
                            </p>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500 hover:from-tuscan-sun-600 hover:to-amber-glow-600 text-white border-0"
                          onClick={() => window.open(method.link, "_blank")}
                        >
                          {method.action}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Señales de confianza */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 gap-3 pt-4"
            >
              {trustSignals.map((signal, index) => (
                <motion.div
                  key={signal.text}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-2 p-3 rounded-xl bg-white border border-tuscan-sun-200 shadow-sm"
                >
                  <div
                    className={cn(
                      "p-2 rounded-lg bg-gradient-to-r text-white",
                      signal.gradient,
                    )}
                  >
                    {signal.icon}
                  </div>
                  <span className="text-xs font-medium text-onyx-800">
                    {signal.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Lado derecho: Newsletter */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-0 bg-white shadow-2xl overflow-hidden border border-tuscan-sun-200">
              <CardContent className="p-8">
                {/* Encabezado newsletter */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500 mb-4 shadow-lg">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-onyx-900 mb-2">
                    Ofertas Exclusivas
                  </h3>
                  <p className="text-onyx-600">
                    Sé el primero en enterarte de promociones y nuevos productos
                  </p>
                </div>

                {/* Formulario */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="tucorreo@ejemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white border-tuscan-sun-200 focus:border-tuscan-sun-500 text-onyx-900 placeholder:text-onyx-400 py-6 text-base"
                    required
                    disabled={isSubmitting || isSubmitted}
                  />

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="newsletter-terms"
                      className="rounded border-tuscan-sun-300 text-tuscan-sun-500 focus:ring-tuscan-sun-500"
                      required
                    />
                    <label
                      htmlFor="newsletter-terms"
                      className="text-sm text-onyx-600"
                    >
                      Acepto recibir comunicaciones de PabliCulares
                    </label>
                  </div>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl bg-tuscan-sun-50 border border-tuscan-sun-200"
                    >
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-tuscan-sun-600" />
                        <div>
                          <p className="font-semibold text-tuscan-sun-700">
                            ¡Suscrito exitosamente!
                          </p>
                          <p className="text-sm text-tuscan-sun-600">
                            Pronto recibirás nuestras mejores ofertas.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500 hover:from-tuscan-sun-600 hover:to-amber-glow-600 text-white text-base font-semibold py-6 shadow-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Suscribiendo...
                        </>
                      ) : (
                        <>
                          Suscribirme a ofertas
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  )}

                  <p className="text-xs text-onyx-500 text-center">
                    Sin spam. Solo contenido de valor. Cancelas cuando quieras.
                  </p>
                </form>

                {/* Información adicional */}
                <div className="mt-6 pt-6 border-t border-tuscan-sun-200 grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-tuscan-sun-50">
                    <MapPin className="h-4 w-4 text-tuscan-sun-600" />
                    <div>
                      <p className="text-xs font-medium text-onyx-800">
                        Maracaibo, Zulia
                      </p>
                      <p className="text-xs text-onyx-500">
                        Servicio en toda la ciudad
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-tuscan-sun-50">
                    <Clock className="h-4 w-4 text-amber-glow-600" />
                    <div>
                      <p className="text-xs font-medium text-onyx-800">
                        9AM - 7PM
                      </p>
                      <p className="text-xs text-onyx-500">Lunes a Viernes</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Tarjeta de garantía */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          whileHover={{ y: -5 }}
          className="mb-16"
        >
          <Card className="border-0 bg-gradient-to-r from-tuscan-sun-50 to-amber-glow-50 shadow-xl border border-tuscan-sun-200">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="p-4 rounded-xl bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500 shadow-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-xl font-bold text-onyx-900 mb-2">
                    Garantía Extendida de 6 Meses
                  </h4>
                  <p className="text-onyx-600">
                    En todos nuestros productos. Tu tranquilidad es nuestra
                    prioridad.
                  </p>
                </div>
                <Badge className="px-4 py-2 bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500 text-white border-0">
                  Confianza total
                </Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Cierre espectacular con tu logo - SOBRE FONDO BLANCO PARA DESTACAR */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative overflow-hidden rounded-3xl p-8 md:p-12 bg-gradient-to-br from-white via-white to-onyx-50/30 border-2 border-tuscan-sun-300/30 shadow-3xl"
        >
          {/* Elementos decorativos de fondo */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-tuscan-sun-500/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-glow-500/50 to-transparent"></div>

          {/* Brillo dorado en las esquinas */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-tuscan-sun-500/10 to-transparent rounded-full -translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-amber-glow-500/10 to-transparent rounded-full translate-x-16 translate-y-16"></div>

          <div className="relative z-10 text-center">
            {/* Tu logo con animación - SOBRE FONDO BLANCO PARA DESTACAR */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-36 h-36 mx-auto mb-10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-tuscan-sun-500/20 to-amber-glow-500/20 rounded-3xl blur-xl"></div>
              <div className="absolute inset-4 bg-white/90 rounded-2xl backdrop-blur-sm"></div>
              <div className="relative w-full h-full flex items-center justify-center p-6">
                <Image
                  src="/logo.jpg"
                  alt="PabliCulares Logo"
                  width={144}
                  height={144}
                  className="object-contain drop-shadow-lg"
                  priority
                />
              </div>
            </motion.div>

            <h3 className="text-3xl md:text-4xl font-bold text-onyx-900 mb-6">
              <span className="bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500 bg-clip-text text-transparent">
                Tu música merece sonar
              </span>
              <br />
              como fue creada
            </h3>

            <p className="text-xl text-onyx-700 max-w-2xl mx-auto mb-10">
              No te conformes con imitaciones. Descubre la diferencia que solo
              los audífonos premium pueden ofrecer.
            </p>

            {/* Botones de acción principal */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500 hover:from-tuscan-sun-600 hover:to-amber-glow-600 text-white text-lg font-semibold px-10 py-7 shadow-2xl shadow-tuscan-sun-500/40"
                  onClick={() =>
                    window.open("https://wa.me/584141234567", "_blank")
                  }
                >
                  <MessageCircle className="h-6 w-6 mr-3" />
                  Comenzar ahora por WhatsApp
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-onyx-200 hover:border-tuscan-sun-400 hover:bg-tuscan-sun-50 text-onyx-800 text-lg font-semibold px-10 py-7 shadow-lg"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <Headphones className="h-6 w-6 mr-3" />
                  Ver todo desde el inicio
                </Button>
              </motion.div>
            </div>
          </div>
          {/* Separador final con gradiente */}
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-1 bg-gradient-to-r from-tuscan-sun-500 via-amber-glow-500 to-tuscan-sun-500 mt-16 origin-left shadow-lg shadow-tuscan-sun-500/30"
        />
      </div>
    </section>
  );
};

export default CallToActionSection;
