// src/components/layout/Footer.tsx
import {
  Headphones,
  Shield,
  Truck,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
  Clock,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const Footer = () => {
  const footerLinks = {
    Productos: [
      { label: "Audífonos Inalámbricos", href: "/productos/inalambricos" },
      { label: "Audífonos con Cable", href: "/productos/cable" },
      { label: "Audífonos Gaming", href: "/productos/gaming" },
      { label: "Audífonos Deportivos", href: "/productos/deportivos" },
      { label: "Accesorios", href: "/productos/accesorios" },
    ],
    Marcas: [
      { label: "Sony", href: "/marcas/sony" },
      { label: "Sennheiser", href: "/marcas/sennheiser" },
      { label: "JBL", href: "/marcas/jbl" },
      { label: "Audio-Technica", href: "/marcas/audio-technica" },
      { label: "Skullcandy", href: "/marcas/skullcandy" },
    ],
    Ayuda: [
      { label: "Guía de Compra", href: "/guia" },
      { label: "Garantía y Soporte", href: "/garantia" },
      { label: "Preguntas Frecuentes", href: "/faq" },
      { label: "Envíos y Devoluciones", href: "/envios" },
      { label: "Política de Privacidad", href: "/privacidad" },
    ],
    PabliCulares: [
      { label: "Nuestra Historia", href: "/nosotros" },
      { label: "Ubicación en Maracaibo", href: "/ubicacion" },
      { label: "Trabaja con Nosotros", href: "/trabajo" },
      { label: "Blog de Audio", href: "/blog" },
      { label: "Contacto", href: "/contacto" },
    ],
  };

  const beneficios = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Garantía Certificada",
      description: "6 meses en todos nuestros productos",
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Envío Rápido",
      description: "Entrega en 24-48h en Maracaibo",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Productos Originales",
      description: "100% auténticos con factura",
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Asesoría Expertos",
      description: "Te ayudamos a elegir lo mejor",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-onyx-50 border-t border-onyx-100">
      {/* Sección de beneficios */}
      <div className="border-b border-onyx-100">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beneficios.map((beneficio, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-gradient-to-br from-tuscan-sun-100 to-amber-glow-100 text-tuscan-sun-600 group-hover:from-tuscan-sun-200 group-hover:to-amber-glow-200 transition-colors">
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
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contenido principal del footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo y descripción */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-tuscan-sun-500 to-amber-glow-500 rounded-xl flex items-center justify-center">
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

            <p className="text-onyx-600 mb-6">
              Somos tu solución confiable en Maracaibo para audífonos de marca
              certificados. Ofrecemos calidad garantizada, asesoría experta y el
              mejor servicio post-venta.
            </p>

            {/* Newsletter */}
            <div className="mb-8">
              <h3 className="font-semibold text-onyx-900 mb-3">
                Suscríbete a nuestras ofertas
              </h3>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="tu@email.com"
                  className="flex-1 border-onyx-200 focus:border-tuscan-sun-300"
                />
                <Button className="bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500 hover:from-tuscan-sun-600 hover:to-amber-glow-600">
                  Suscribir
                </Button>
              </div>
            </div>

            {/* Redes sociales */}
            <div>
              <h3 className="font-semibold text-onyx-900 mb-3">Síguenos</h3>
              <div className="flex gap-3">
                {[
                  { icon: <Facebook className="h-5 w-5" />, label: "Facebook" },
                  {
                    icon: <Instagram className="h-5 w-5" />,
                    label: "Instagram",
                  },
                  { icon: <Youtube className="h-5 w-5" />, label: "YouTube" },
                  {
                    icon: <MessageCircle className="h-5 w-5" />,
                    label: "WhatsApp",
                  },
                ].map((social) => (
                  <Button
                    key={social.label}
                    variant="outline"
                    size="icon"
                    className="rounded-full border-onyx-200 hover:border-tuscan-sun-300 hover:bg-tuscan-sun-50 text-onyx-600 hover:text-tuscan-sun-600"
                    aria-label={social.label}
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
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-onyx-600 hover:text-tuscan-sun-500 transition-colors flex items-center gap-2 group"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-onyx-300 group-hover:bg-tuscan-sun-500 transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Información de contacto */}
        <div className="mt-12 pt-8 border-t border-onyx-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-tuscan-sun-50 text-tuscan-sun-600">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-onyx-500">Teléfono / WhatsApp</p>
                <a
                  href="tel:+584141234567"
                  className="font-semibold text-onyx-900 hover:text-tuscan-sun-600 transition-colors"
                >
                  +58 414 123 4567
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-tuscan-sun-50 text-tuscan-sun-600">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-onyx-500">Email</p>
                <a
                  href="mailto:info@pabliculares.com"
                  className="font-semibold text-onyx-900 hover:text-tuscan-sun-600 transition-colors"
                >
                  info@pabliculares.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-tuscan-sun-50 text-tuscan-sun-600">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-onyx-500">Ubicación</p>
                <p className="font-semibold text-onyx-900">
                  Maracaibo, Zulia, Venezuela
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Horarios de atención */}
        <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-tuscan-sun-50 to-amber-glow-50 border border-tuscan-sun-100">
          <div className="flex items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-tuscan-sun-600" />
              <span className="font-medium text-onyx-900">
                Horario de atención:
              </span>
            </div>
            <div className="text-onyx-700">
              <span className="font-semibold">Lunes a Viernes:</span> 9:00 AM -
              7:00 PM
              <span className="mx-3">•</span>
              <span className="font-semibold">Sábados:</span> 9:00 AM - 2:00 PM
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-onyx-900 text-onyx-100 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm">
                © {new Date().getFullYear()} PabliCulares Maracaibo. Todos los
                derechos reservados.
              </p>
              <p className="text-xs text-onyx-400 mt-1">
                Los productos y marcas mostrados son propiedad de sus
                respectivos dueños.
              </p>
            </div>

            <div className="flex items-center gap-6 text-sm">
              <Link
                href="/terminos"
                className="text-onyx-300 hover:text-white transition-colors"
              >
                Términos y Condiciones
              </Link>
              <Link
                href="/privacidad"
                className="text-onyx-300 hover:text-white transition-colors"
              >
                Política de Privacidad
              </Link>
              <Link
                href="/cookies"
                className="text-onyx-300 hover:text-white transition-colors"
              >
                Política de Cookies
              </Link>
            </div>
          </div>

          {/* Mensaje especial */}
          <div className="text-center mt-6 pt-4 border-t border-onyx-800">
            <p className="text-xs text-onyx-400">
              🎧{" "}
              <span className="font-medium text-amber-glow-300">
                Hecho con pasión por el audio en Maracaibo
              </span>{" "}
              • Para los marabinos que exigen calidad, no imitaciones.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
