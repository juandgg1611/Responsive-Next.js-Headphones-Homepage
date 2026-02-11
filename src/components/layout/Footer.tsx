// src/components/layout/Footer.tsx - VERSIÓN ACTUALIZADA
"use client";

import {
  Headphones,
  Shield,
  Truck,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  MessageCircle,
  Clock,
  CheckCircle,
  Home,
  Users,
  FileText,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  // Actualizar enlaces según tu estructura actual
  const footerLinks = {
    Navegación: [
      { label: "Inicio", href: "/", icon: <Home className="h-4 w-4" /> },
      {
        label: "Productos",
        href: "#productos",
        icon: <Headphones className="h-4 w-4" />,
      },
      {
        label: "Marcas",
        href: "#marcas",
        icon: <Shield className="h-4 w-4" />,
      },
      { label: "Guía", href: "#guia", icon: <FileText className="h-4 w-4" /> },
      {
        label: "Nosotros",
        href: "#nosotros",
        icon: <Users className="h-4 w-4" />,
      },
    ],
    Marcas: [
      { label: "Sony", href: "#sony" },
      { label: "Sennheiser", href: "#sennheiser" },
      { label: "JBL", href: "#jbl" },
      { label: "Audio-Technica", href: "#audio-technica" },
      { label: "Skullcandy", href: "#skullcandy" },
    ],
    Soporte: [
      {
        label: "Garantía",
        href: "#garantia",
        icon: <Shield className="h-4 w-4" />,
      },
      { label: "Envíos", href: "#envios", icon: <Truck className="h-4 w-4" /> },
      {
        label: "Preguntas Frecuentes",
        href: "#faq",
        icon: <MessageSquare className="h-4 w-4" />,
      },
      {
        label: "Contacto",
        href: "#contacto",
        icon: <MessageCircle className="h-4 w-4" />,
      },
    ],
  };

  const beneficios = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Garantía 6 Meses",
      description: "En todos nuestros productos",
      delay: 0,
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Envío Rápido",
      description: "24-48h en Maracaibo",
      delay: 0.1,
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "100% Original",
      description: "Productos certificados",
      delay: 0.2,
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Asesoría Expertos",
      description: "Te ayudamos a elegir",
      delay: 0.3,
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-onyx-50/30 border-t border-onyx-100/50">
      {/* Sección de beneficios animados */}
      <div className="border-b border-onyx-100/50 bg-gradient-to-r from-tuscan-sun-50/20 to-amber-glow-50/10">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beneficios.map((beneficio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: beneficio.delay }}
                whileHover={{ y: -5 }}
                className="flex items-start gap-4 p-5 rounded-xl bg-white/80 backdrop-blur-sm border border-onyx-100/50 hover:border-tuscan-sun-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-gradient-to-br from-tuscan-sun-100 to-amber-glow-100 text-tuscan-sun-600 group-hover:from-tuscan-sun-200 group-hover:to-amber-glow-200 transition-colors shadow-sm">
                  {beneficio.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-onyx-900 mb-1">
                    {beneficio.title}
                  </h3>
                  <p className="text-sm text-onyx-600">
                    {beneficio.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contenido principal del footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-tuscan-sun-500 to-amber-glow-500 rounded-xl flex items-center justify-center shadow-lg">
                <Headphones className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-onyx-900">
                  PabliCulares
                </h2>
                <p className="text-sm text-amber-glow-600 font-medium">
                  Maracaibo • Audio Premium
                </p>
              </div>
            </div>

            <p className="text-onyx-600 text-sm leading-relaxed">
              Tu solución confiable en Maracaibo para audífonos de marca
              certificados. Calidad garantizada, asesoría experta y el mejor
              servicio post-venta.
            </p>

            {/* Redes sociales */}
            <div>
              <h3 className="font-semibold text-onyx-900 mb-3">
                Conéctate con nosotros
              </h3>
              <div className="flex gap-3">
                {[
                  {
                    icon: <MessageCircle className="h-5 w-5" />,
                    label: "WhatsApp",
                    link: "https://wa.me/584141234567",
                    color:
                      "hover:bg-emerald-500 hover:border-emerald-500 hover:text-white",
                  },
                  {
                    icon: <Instagram className="h-5 w-5" />,
                    label: "Instagram",
                    link: "https://instagram.com/pabliculares",
                    color:
                      "hover:bg-pink-500 hover:border-pink-500 hover:text-white",
                  },
                  {
                    icon: <Facebook className="h-5 w-5" />,
                    label: "Facebook",
                    link: "https://facebook.com/pabliculares",
                    color:
                      "hover:bg-blue-600 hover:border-blue-600 hover:text-white",
                  },
                ].map((social) => (
                  <Button
                    key={social.label}
                    variant="outline"
                    size="icon"
                    className={`rounded-full border-onyx-200 bg-white text-onyx-600 transition-all duration-300 ${social.color}`}
                    aria-label={social.label}
                    onClick={() => window.open(social.link, "_blank")}
                  >
                    {social.icon}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Links del footer */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-onyx-900 mb-4 text-lg">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <motion.li
                    key={link.label}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      href={link.href}
                      className="text-onyx-600 hover:text-tuscan-sun-500 transition-colors flex items-center gap-2 group"
                    >
                      {link.icon && (
                        <div className="opacity-70 group-hover:opacity-100 transition-opacity">
                          {link.icon}
                        </div>
                      )}
                      <span className="relative">
                        {link.label}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500 group-hover:w-full transition-all duration-300"></span>
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Información de contacto */}
        <div className="mt-12 pt-8 border-t border-onyx-100/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-white to-onyx-50/50 border border-onyx-100/50 hover:border-tuscan-sun-300 transition-all"
            >
              <div className="p-3 rounded-lg bg-gradient-to-br from-tuscan-sun-100 to-amber-glow-100 text-tuscan-sun-600">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-onyx-500">Teléfono / WhatsApp</p>
                <a
                  href="tel:+584141234567"
                  className="font-semibold text-onyx-900 hover:text-tuscan-sun-600 transition-colors block"
                >
                  +58 414 123 4567
                </a>
                <Button
                  size="sm"
                  variant="link"
                  className="p-0 h-auto text-tuscan-sun-600 hover:text-tuscan-sun-700"
                  onClick={() =>
                    window.open("https://wa.me/584141234567", "_blank")
                  }
                >
                  <MessageCircle className="h-3 w-3 mr-1" />
                  Abrir WhatsApp
                </Button>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-white to-onyx-50/50 border border-onyx-100/50 hover:border-tuscan-sun-300 transition-all"
            >
              <div className="p-3 rounded-lg bg-gradient-to-br from-tuscan-sun-100 to-amber-glow-100 text-tuscan-sun-600">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-onyx-500">Correo Electrónico</p>
                <a
                  href="mailto:info@pabliculares.com"
                  className="font-semibold text-onyx-900 hover:text-tuscan-sun-600 transition-colors"
                >
                  info@pabliculares.com
                </a>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-white to-onyx-50/50 border border-onyx-100/50 hover:border-tuscan-sun-300 transition-all"
            >
              <div className="p-3 rounded-lg bg-gradient-to-br from-tuscan-sun-100 to-amber-glow-100 text-tuscan-sun-600">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-onyx-500">Ubicación</p>
                <p className="font-semibold text-onyx-900">Maracaibo, Zulia</p>
                <p className="text-xs text-onyx-500">Venezuela</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Horarios de atención */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 p-5 rounded-xl bg-gradient-to-r from-tuscan-sun-50/50 to-amber-glow-50/30 border border-tuscan-sun-200/30"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-tuscan-sun-600" />
              <span className="font-medium text-onyx-900">
                Horario de atención:
              </span>
            </div>
            <div className="text-onyx-700 text-center sm:text-left">
              <span className="font-semibold">Lunes a Viernes:</span> 9:00 AM -
              7:00 PM
              <span className="mx-3 text-onyx-300">•</span>
              <span className="font-semibold">Sábados:</span> 9:00 AM - 2:00 PM
            </div>
          </div>
          <div className="text-center mt-3 text-sm text-onyx-600">
            WhatsApp disponible hasta las 8:00 PM para consultas
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="bg-onyx-900 text-onyx-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-sm">
                © {new Date().getFullYear()}{" "}
                <span className="text-tuscan-sun-300 font-semibold">
                  PabliCulares Maracaibo
                </span>
                . Todos los derechos reservados.
              </p>
              <p className="text-xs text-onyx-400 mt-2">
                Audio Premium para Marabinos Exigentes • Calidad Garantizada
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                href="#terminos"
                className="text-onyx-300 hover:text-tuscan-sun-300 transition-colors px-3 py-1 rounded-full hover:bg-onyx-800"
              >
                Términos
              </Link>
              <Link
                href="#privacidad"
                className="text-onyx-300 hover:text-tuscan-sun-300 transition-colors px-3 py-1 rounded-full hover:bg-onyx-800"
              >
                Privacidad
              </Link>
              <Link
                href="#garantia"
                className="text-onyx-300 hover:text-tuscan-sun-300 transition-colors px-3 py-1 rounded-full hover:bg-onyx-800"
              >
                Garantía
              </Link>
            </div>
          </div>

          {/* Mensaje especial */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8 pt-6 border-t border-onyx-800"
          >
            <p className="text-xs text-onyx-400">
              <span className="text-amber-glow-300 font-medium">
                🎧 Hecho con pasión por el audio en Maracaibo
              </span>{" "}
              • Para los que exigen calidad, no imitaciones.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
