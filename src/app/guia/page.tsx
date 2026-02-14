// src/app/guia/page.tsx
import { Metadata } from "next";
import GuiaPageContent from "@/components/pages/GuiaPage";

export const metadata: Metadata = {
  title: "Guía de Compra | PabliCulares Maracaibo - Cómo elegir tus audífonos",
  description:
    "Aprende a elegir los audífonos perfectos según tu uso, presupuesto y preferencias. Guía completa con tips y recomendaciones de expertos en audio.",
  keywords: [
    "guía de compra audífonos",
    "cómo elegir audífonos",
    "tips audio",
    "consejos audífonos maracaibo",
  ],
  openGraph: {
    title: "Guía de Compra de Audífonos | PabliCulares",
    description:
      "Todo lo que necesitas saber para elegir los audífonos perfectos",
    type: "website",
  },
};

export default function GuiaPage() {
  return <GuiaPageContent />;
}
