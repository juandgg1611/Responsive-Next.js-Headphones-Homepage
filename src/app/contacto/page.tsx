// src/app/contacto/page.tsx
import { Metadata } from "next";
import ContactoPageContent from "@/components/pages/ContactoPage";

export const metadata: Metadata = {
  title: "Contacto | PabliCulares Maracaibo - Audio Premium",
  description:
    "Ponte en contacto con PabliCulares. WhatsApp, teléfono, email o visítanos en Maracaibo. Estamos para ayudarte a encontrar el audífono perfecto.",
  keywords: [
    "contacto pabliculares",
    "whatsapp maracaibo",
    "tienda audífonos maracaibo",
    "atención al cliente",
  ],
  openGraph: {
    title: "Contacto | PabliCulares Maracaibo",
    description:
      "¿Tienes dudas? Contáctanos por WhatsApp, email o visítanos en Maracaibo",
    type: "website",
  },
};

export default function ContactoPage() {
  return <ContactoPageContent />;
}
