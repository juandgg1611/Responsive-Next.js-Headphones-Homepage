// src/app/productos/page.tsx - CORREGIDO
import { Metadata } from "next";
import ProductsPageComponent from "@/components/pages/ProductsPage";

export const metadata: Metadata = {
  title: "Catálogo Completo de Audífonos Premium | PabliCulares Maracaibo",
  description:
    "Descubre nuestra colección completa de audífonos de marca certificados. Sony, Sennheiser, JBL, Bose y más. Calidad premium garantizada en Maracaibo.",
  keywords: [
    "audífonos Maracaibo",
    "audio premium",
    "sony maracaibo",
    "sennheiser venezuela",
    "audífonos originales",
  ],
  openGraph: {
    title: "Catálogo Completo de Audífonos Premium | PabliCulares",
    description: "Explora más de 50 modelos de audífonos de marca certificados",
    type: "website",
  },
};

// Nombre diferente para evitar conflicto
export default function ProductsPage() {
  return <ProductsPageComponent />;
}
