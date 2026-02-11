// src/components/sections/CallToActionSection.tsx - CON FONDO AMARILLO CLARO
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
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
      color: "from-emerald-400 to-emerald-600",
      link: "https://wa.me/584141234567",
      isPrimary: true,
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Llamada Telefónica",
      description: "Atención personalizada inmediata",
      action: "Llamar ahora",
      color: "from-tuscan-sun-400 to-amber-glow-600",
      link: "tel:+584141234567",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Correo Electrónico",
      description: "Respuesta en máximo 24 horas",
      action: "Enviar email",
      color: "from-blue-400 to-cyan-600",
      link: "mailto:info@pabliculares.com",
    },
  ];

  const trustSignals = [
    { icon: <Shield className="h-5 w-5" />, text: "6 meses de garantía" },
    {
      icon: <CheckCircle2 className="h-5 w-5" />,
      text: "Productos 100% originales",
    },
    {
      icon: <Users className="h-5 w-5" />,
      text: "Clientes satisfechos en Maracaibo",
    },
    { icon: <Star className="h-5 w-5" />, text: "Rating 4.8/5 en atención" },
  ];

  const features = [
    "Entrega en 24-48h en Maracaibo",
    "Asesoría experta sin costo",
    "Factura y garantía incluida",
    "Pagos seguros: transferencia, pago móvil",
  ];

  if (!isMounted) {
    return (
      <section className="py-20 bg-gradient-to-b from-tuscan-sun-50/30 via-tuscan-sun-50/20 to-tuscan-sun-50/40">
        <div className="container mx-auto px-4">
          <div className="h-12 w-56 bg-white/50 rounded-xl mx-auto mb-8 animate-pulse"></div>
          <div className="h-6 w-72 bg-white/50 rounded-xl mx-auto mb-12 animate-pulse"></div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="h-32 bg-white/50 rounded-2xl animate-pulse"
                ></div>
              ))}
            </div>
            <div className="space-y-6">
              <div className="h-96 bg-white/50 rounded-2xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-tuscan-sun-50/40 via-tuscan-sun-50/30 to-tuscan-sun-50/50">
      {/* Fondo amarillo muy claro con textura sutil */}
      <div className="absolute inset-0 z-0">
        {/* Base amarilla muy clara */}
        <div className="absolute inset-0 bg-gradient-to-b from-tuscan-sun-50/60 via-tuscan-sun-50/40 to-tuscan-sun-50/60"></div>

        {/* Patrón de puntos muy sutiles */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(tuscan-sun-300/20 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        {/* Partículas doradas sutiles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-[1px] h-[1px] bg-tuscan-sun-400/20 rounded-full"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
              }}
              animate={{
                y: [null, -15, 15, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Formas geométricas decorativas en tonos amarillos */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-96 h-96 border border-tuscan-sun-300/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 left-1/4 w-64 h-64 border border-amber-glow-300/10 rounded-3xl rotate-45"
        />

        {/* Brillo sutil en los bordes */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-tuscan-sun-100/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-amber-glow-100/20 to-transparent"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Encabezado espectacular */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-block mb-6"
          >
            <Badge className="px-6 py-2 text-base font-bold bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500 text-white border-0 shadow-lg shadow-tuscan-sun-500/40">
              <Sparkles className="h-5 w-5 mr-2" />
              ¡Tu momento ha llegado!
            </Badge>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-onyx-900 mb-8 leading-tight">
            <span className="block">Experiencia auditiva</span>
            <span className="bg-gradient-to-r from-tuscan-sun-500 via-amber-glow-500 to-tuscan-sun-500 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">
              Premium en Maracaibo
            </span>
          </h2>

          <p className="text-xl text-onyx-700 max-w-3xl mx-auto mb-10">
            Únete a los cientos de marabinos que ya descubrieron la verdadera
            calidad del audio.
          </p>

          {/* Características rápidas */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-onyx-100/50 shadow-sm"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500"></div>
                <span className="text-onyx-800 font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Lado izquierdo: Métodos de contacto destacados */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Tarjeta principal de WhatsApp */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <Card className="border-0 bg-gradient-to-br from-white via-white to-emerald-50/30 shadow-2xl overflow-hidden group border border-emerald-100">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-lg">
                        <MessageCircle className="h-8 w-8" />
                      </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl font-bold text-onyx-900 mb-2">
                        Contacto Directo por WhatsApp
                      </h3>
                      <p className="text-onyx-700 mb-6">
                        La forma más rápida y efectiva. Resolvemos tus dudas en
                        minutos y coordinamos tu pedido al instante.
                      </p>
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-lg shadow-emerald-500/40 group-hover:shadow-emerald-500/60"
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
              <h4 className="text-xl font-bold text-onyx-900 mb-4">
                Otros canales disponibles:
              </h4>

              {contactMethods.slice(1).map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.15 }}
                  whileHover={{ x: 5 }}
                >
                  <Card className="border border-onyx-100/70 bg-white/90 backdrop-blur-sm hover:border-tuscan-sun-300 hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div
                            className={`p-3 rounded-xl bg-gradient-to-br ${method.color} text-white`}
                          >
                            {method.icon}
                          </div>
                          <div>
                            <h4 className="font-bold text-onyx-900">
                              {method.title}
                            </h4>
                            <p className="text-sm text-onyx-700">
                              {method.description}
                            </p>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500 hover:from-tuscan-sun-600 hover:to-amber-glow-600 text-white shadow-md"
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
              transition={{ delay: 0.8 }}
              className="pt-8"
            >
              <div className="grid grid-cols-2 gap-4">
                {trustSignals.map((signal, index) => (
                  <motion.div
                    key={signal.text}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    whileHover={{ y: -3 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white/95 backdrop-blur-sm border border-onyx-100/50 shadow-sm"
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-br from-tuscan-sun-100 to-amber-glow-100 text-tuscan-sun-600">
                      {signal.icon}
                    </div>
                    <span className="text-sm font-medium text-onyx-800">
                      {signal.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Lado derecho: Newsletter y información */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Tarjeta de newsletter */}
            <Card className="border border-onyx-100/70 bg-gradient-to-br from-white to-onyx-50/30 shadow-2xl overflow-hidden">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-tuscan-sun-500 to-amber-glow-500 mb-4">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-onyx-900 mb-2">
                    Ofertas Exclusivas
                  </h3>
                  <p className="text-onyx-700">
                    Sé el primero en enterarte de promociones y nuevos productos
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-3">
                    <Input
                      type="email"
                      placeholder="tucorreo@ejemplo.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-white border-onyx-200 focus:border-tuscan-sun-500 text-onyx-900 placeholder:text-onyx-500 py-6 text-base shadow-sm"
                      required
                      disabled={isSubmitting || isSubmitted}
                    />

                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="newsletter-terms"
                        className="rounded border-onyx-300 text-tuscan-sun-500 focus:ring-tuscan-sun-500"
                        required
                      />
                      <label
                        htmlFor="newsletter-terms"
                        className="text-sm text-onyx-700"
                      >
                        Acepto recibir comunicaciones de PabliCulares
                      </label>
                    </div>
                  </div>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200"
                    >
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                        <div>
                          <p className="font-semibold text-emerald-700">
                            ¡Suscrito exitosamente!
                          </p>
                          <p className="text-sm text-emerald-600">
                            Pronto recibirás nuestras mejores ofertas.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500 hover:from-tuscan-sun-600 hover:to-amber-glow-600 text-white text-base font-semibold py-6 shadow-lg shadow-tuscan-sun-500/30"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Suscribiendo...
                        </>
                      ) : (
                        <>
                          Suscribirme a ofertas exclusivas
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  )}

                  <p className="text-xs text-onyx-600 text-center">
                    Solo contenido de valor. Sin spam. Cancelas cuando quieras.
                  </p>
                </form>

                {/* Información adicional */}
                <div className="mt-8 pt-6 border-t border-onyx-100/50 grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-tuscan-sun-50">
                      <MapPin className="h-4 w-4 text-tuscan-sun-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-onyx-800">
                        Maracaibo, Zulia
                      </p>
                      <p className="text-xs text-onyx-600">
                        Servicio en toda la ciudad
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-glow-50">
                      <Clock className="h-4 w-4 text-amber-glow-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-onyx-800">
                        9AM - 7PM
                      </p>
                      <p className="text-xs text-onyx-600">Lunes a Viernes</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tarjeta de garantía */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <Card className="border-0 bg-gradient-to-r from-tuscan-sun-50/80 to-amber-glow-50/60 shadow-xl overflow-hidden border border-tuscan-sun-200/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-tuscan-sun-500 to-amber-glow-500">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-onyx-900">
                        Garantía Extendida de 6 Meses
                      </h4>
                      <p className="text-sm text-onyx-700 mt-1">
                        En todos nuestros productos. Tu tranquilidad es nuestra
                        prioridad.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>

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
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
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
        </motion.div>

        {/* Separador final con gradiente */}
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
