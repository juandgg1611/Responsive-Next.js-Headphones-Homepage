// src/components/pages/ProductsPage.tsx
"use client";

import { useState, useEffect } from "react";
import {
  Headphones,
  ShoppingBag,
  Star,
  Grid3x3,
  List,
  Sparkles,
  Shield,
  Truck,
  Check,
  Zap,
  Music,
  Gamepad2,
  Volume2,
  Maximize2,
  Eye,
  TrendingUp,
  Clock,
  Battery,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

// Tipos
type Product = {
  id: number;
  name: string;
  category: string;
  brand: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  features: string[];
  image: string;
  badge?: {
    text: string;
    color: string;
  };
  tags: string[];
  stock: string;
  delivery: string;
  color: string;
};

const ProductsPageComponent = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  // 30 PRODUCTOS - Colección completa para PabliCulares
  const products: Product[] = [
    // SONY (5 productos)
    {
      id: 1,
      name: "Sony WH-1000XM5",
      category: "inalambricos",
      brand: "Sony",
      description:
        "Cancelación de ruido líder con sonido Hi-Res y 30h de batería",
      price: 299.99,
      originalPrice: 349.99,
      rating: 4.9,
      reviews: 842,
      features: ["30h batería", "ANC Pro", "Hi-Res Audio", "Touch Control"],
      image: "/products/sony-wh1000xm5.jpg",
      badge: {
        text: "Más Vendido",
        color: "bg-gradient-to-r from-blue-500 to-blue-600",
      },
      tags: ["Premium", "ANC", "Hi-Res"],
      stock: "Disponible",
      delivery: "24h",
      color: "bg-gradient-to-br from-blue-50 to-blue-100",
    },
    {
      id: 2,
      name: "Sony WF-1000XM5",
      category: "inalambricos",
      brand: "Sony",
      description:
        "Earbuds premium con la mejor cancelación de ruido del mercado",
      price: 249.99,
      originalPrice: 299.99,
      rating: 4.8,
      reviews: 567,
      features: ["24h batería", "ANC", "LDAC", "IPX4"],
      image: "/products/sony-wf1000xm5.jpg",
      badge: {
        text: "Premium",
        color: "bg-gradient-to-r from-blue-400 to-blue-600",
      },
      tags: ["Earbuds", "ANC", "Compacto"],
      stock: "Disponible",
      delivery: "24h",
      color: "bg-gradient-to-br from-blue-50 to-indigo-50",
    },
    {
      id: 3,
      name: "Sony WH-CH720N",
      category: "inalambricos",
      brand: "Sony",
      description: "Cancelación de ruido económica con sonido equilibrado",
      price: 149.99,
      originalPrice: 199.99,
      rating: 4.6,
      reviews: 324,
      features: ["35h batería", "ANC", "Plegables", "Multipunto"],
      image: "/products/sony-wh-ch720n.jpg",
      badge: {
        text: "Económico",
        color: "bg-gradient-to-r from-emerald-500 to-teal-500",
      },
      tags: ["ANC", "Económico", "Viaje"],
      stock: "Disponible",
      delivery: "24h",
      color: "bg-gradient-to-br from-emerald-50 to-teal-50",
    },
    {
      id: 4,
      name: "Sony WF-C700N",
      category: "inalambricos",
      brand: "Sony",
      description: "Earbuds con ANC compactos y excelente batería",
      price: 119.99,
      originalPrice: 149.99,
      rating: 4.5,
      reviews: 189,
      features: ["15h batería", "ANC", "IPX4", "Llamadas claras"],
      image: "/products/sony-wf-c700n.jpg",
      tags: ["Earbuds", "ANC", "Compacto"],
      stock: "Disponible",
      delivery: "24h",
      color: "bg-gradient-to-br from-purple-50 to-pink-50",
    },
    {
      id: 5,
      name: "Sony WH-XB910N",
      category: "inalambricos",
      brand: "Sony",
      description:
        "Extra Bass con cancelación de ruido para amantes de los graves",
      price: 199.99,
      originalPrice: 249.99,
      rating: 4.7,
      reviews: 278,
      features: ["30h batería", "Extra Bass", "ANC", "Plegables"],
      image: "/products/sony-xb910n.jpg",
      badge: {
        text: "Extra Bass",
        color: "bg-gradient-to-r from-purple-500 to-pink-500",
      },
      tags: ["Bass", "ANC", "Premium"],
      stock: "Disponible",
      delivery: "48h",
      color: "bg-gradient-to-br from-purple-50 to-pink-50",
    },

    // SENNHEISER (5 productos)
    {
      id: 6,
      name: "Sennheiser HD 660S2",
      category: "estudio",
      brand: "Sennheiser",
      description: "Auriculares open-back de alta fidelidad para audiófilos",
      price: 599.99,
      originalPrice: 699.99,
      rating: 4.9,
      reviews: 234,
      features: [
        "Open-back",
        "Impedancia 300Ω",
        "Transductores mejorados",
        "Cable balanceado",
      ],
      image: "/products/sennheiser-hd660s2.jpg",
      badge: {
        text: "Referencia",
        color: "bg-gradient-to-r from-amber-500 to-orange-500",
      },
      tags: ["Audiophile", "Estudio", "Open-back"],
      stock: "Bajo pedido",
      delivery: "72h",
      color: "bg-gradient-to-br from-amber-50 to-orange-50",
    },
    {
      id: 7,
      name: "Sennheiser Momentum 4",
      category: "inalambricos",
      brand: "Sennheiser",
      description: "Sonido de lujo con 60h de batería y diseño premium",
      price: 349.99,
      originalPrice: 399.99,
      rating: 4.8,
      reviews: 456,
      features: [
        "60h batería",
        "ANC Adaptativo",
        "Touch Control",
        "App control",
      ],
      image: "/products/sennheiser-momentum4.jpg",
      badge: {
        text: "Lujo",
        color: "bg-gradient-to-r from-amber-400 to-orange-500",
      },
      tags: ["Premium", "Lujo", "Batería"],
      stock: "Últimas 2 unidades",
      delivery: "48h",
      color: "bg-gradient-to-br from-amber-50 to-orange-50",
    },
    {
      id: 8,
      name: "Sennheiser HD 560S",
      category: "estudio",
      brand: "Sennheiser",
      description: "Auriculares open-back de referencia para mezcla",
      price: 199.99,
      originalPrice: 249.99,
      rating: 4.7,
      reviews: 567,
      features: [
        "Open-back",
        "Respuesta plana",
        "Transductores E.A.R.",
        "Almohadillas de terciopelo",
      ],
      image: "/products/sennheiser-hd560s.jpg",
      tags: ["Estudio", "Open-back", "Monitor"],
      stock: "Disponible",
      delivery: "48h",
      color: "bg-gradient-to-br from-gray-50 to-gray-100",
    },
    {
      id: 9,
      name: "Sennheiser IE 600",
      category: "estudio",
      brand: "Sennheiser",
      description: "IEMs de alta gama para monitoreo profesional",
      price: 699.99,
      originalPrice: 799.99,
      rating: 4.9,
      reviews: 123,
      features: [
        "Carcasa metálica",
        "Transductores TrueResponse",
        "Cable balanceado",
        "Filtros intercambiables",
      ],
      image: "/products/sennheiser-ie600.jpg",
      badge: {
        text: "Profesional",
        color: "bg-gradient-to-r from-gray-700 to-gray-900",
      },
      tags: ["IEM", "Estudio", "Premium"],
      stock: "Bajo pedido",
      delivery: "72h",
      color: "bg-gradient-to-br from-gray-50 to-gray-100",
    },
    {
      id: 10,
      name: "Sennheiser RS 175",
      category: "gaming",
      brand: "Sennheiser",
      description: "Auriculares inalámbricos RF para TV y gaming",
      price: 249.99,
      originalPrice: 299.99,
      rating: 4.5,
      reviews: 189,
      features: [
        "Base de carga",
        "Sonido surround",
        "50m alcance",
        "4 perfiles EQ",
      ],
      image: "/products/sennheiser-rs175.jpg",
      tags: ["Gaming", "TV", "Inalámbrico"],
      stock: "Disponible",
      delivery: "48h",
      color: "bg-gradient-to-br from-slate-50 to-gray-100",
    },

    // JBL (5 productos)
    {
      id: 11,
      name: "JBL Tour One M2",
      category: "inalambricos",
      brand: "JBL",
      description:
        "Flagship con sonido de alta resolución y cancelación adaptativa",
      price: 299.99,
      originalPrice: 349.99,
      rating: 4.7,
      reviews: 234,
      features: ["50h batería", "ANC adaptativo", "Hi-Res", "Carga rápida"],
      image: "/products/jbl-tour-one-m2.jpg",
      badge: {
        text: "Flagship",
        color: "bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500",
      },
      tags: ["Premium", "ANC", "Viaje"],
      stock: "Disponible",
      delivery: "24h",
      color: "bg-gradient-to-br from-tuscan-sun-50 to-amber-glow-50",
    },
    {
      id: 12,
      name: "JBL Live 660NC",
      category: "inalambricos",
      brand: "JBL",
      description: "Sonido JBL Signature con ANC y manos libres",
      price: 179.99,
      originalPrice: 199.99,
      rating: 4.6,
      reviews: 567,
      features: ["50h batería", "ANC", "Manos libres", "Multipunto"],
      image: "/products/jbl-live-660nc.jpg",
      tags: ["ANC", "Viaje", "Multipunto"],
      stock: "Disponible",
      delivery: "24h",
      color: "bg-gradient-to-br from-tuscan-sun-50 to-amber-glow-50",
    },
    {
      id: 13,
      name: "JBL Quantum 910",
      category: "gaming",
      brand: "JBL",
      description: "Auriculares gaming inalámbricos con QuantumSOUND y RGB",
      price: 199.99,
      originalPrice: 249.99,
      rating: 4.6,
      reviews: 345,
      features: ["39h batería", "QuantumSOUND", "RGB", "Wireless 2.4G"],
      image: "/products/jbl-quantum-910.jpg",
      badge: {
        text: "Gaming",
        color: "bg-gradient-to-r from-cyan-500 to-blue-500",
      },
      tags: ["Gaming", "Wireless", "RGB"],
      stock: "Disponible",
      delivery: "48h",
      color: "bg-gradient-to-br from-cyan-50 to-blue-50",
    },
    {
      id: 14,
      name: "JBL Quantum 100",
      category: "gaming",
      brand: "JBL",
      description: "Auriculares gaming económicos con micrófono desmontable",
      price: 39.99,
      originalPrice: 49.99,
      rating: 4.4,
      reviews: 890,
      features: [
        "Cable reforzado",
        "Micrófono desmontable",
        "Control en línea",
        "Almohadillas suaves",
      ],
      image: "/products/jbl-quantum-100.jpg",
      badge: {
        text: "Económico",
        color: "bg-gradient-to-r from-green-500 to-emerald-500",
      },
      tags: ["Gaming", "Económico", "PC"],
      stock: "Disponible",
      delivery: "24h",
      color: "bg-gradient-to-br from-green-50 to-emerald-50",
    },
    {
      id: 15,
      name: "JBL Endurance Peak 3",
      category: "deportivos",
      brand: "JBL",
      description: "Earbuds deportivos con gancho ajustable y resistencia IP68",
      price: 89.99,
      originalPrice: 119.99,
      rating: 4.5,
      reviews: 456,
      features: ["40h batería", "IP68", "Gancho ajustable", "Carga rápida"],
      image: "/products/jbl-endurance-peak3.jpg",
      badge: {
        text: "Deportivo",
        color: "bg-gradient-to-r from-orange-500 to-red-500",
      },
      tags: ["Deportivo", "IP68", "Resistente"],
      stock: "Disponible",
      delivery: "24h",
      color: "bg-gradient-to-br from-orange-50 to-red-50",
    },

    // BOSE (4 productos)
    {
      id: 16,
      name: "Bose QuietComfort Ultra",
      category: "inalambricos",
      brand: "Bose",
      description: "El mejor ANC del mundo con audio inmersivo",
      price: 429.99,
      originalPrice: 479.99,
      rating: 4.9,
      reviews: 789,
      features: [
        "ANC legendario",
        "Audio inmersivo",
        "24h batería",
        "Modo Conciencia",
      ],
      image: "/products/bose-qc-ultra.jpg",
      badge: {
        text: "Mejor ANC",
        color: "bg-gradient-to-r from-emerald-500 to-teal-500",
      },
      tags: ["ANC", "Premium", "Inmersivo"],
      stock: "Últimas 3 unidades",
      delivery: "24h",
      color: "bg-gradient-to-br from-emerald-50 to-teal-50",
    },
    {
      id: 17,
      name: "Bose QuietComfort 45",
      category: "inalambricos",
      brand: "Bose",
      description: "Cancelación de ruido legendaria y comodidad excepcional",
      price: 329.99,
      originalPrice: 379.99,
      rating: 4.8,
      reviews: 1543,
      features: ["24h batería", "ANC", "Modo Conciencia", "Llamadas nítidas"],
      image: "/products/bose-qc45.jpg",
      badge: {
        text: "Recomendado",
        color: "bg-gradient-to-r from-emerald-500 to-teal-500",
      },
      tags: ["Viaje", "Comodidad", "ANC"],
      stock: "Disponible",
      delivery: "24h",
      color: "bg-gradient-to-br from-emerald-50 to-teal-50",
    },
    {
      id: 18,
      name: "Bose Sport Earbuds",
      category: "deportivos",
      brand: "Bose",
      description: "Earbuds deportivos con sonido potente y ajuste seguro",
      price: 149.99,
      originalPrice: 179.99,
      rating: 4.6,
      reviews: 678,
      features: ["IPX4", "StayHear+ Max", "5h batería", "Sonido equilibrado"],
      image: "/products/bose-sport.jpg",
      tags: ["Deportivo", "IPX4", "Earbuds"],
      stock: "Disponible",
      delivery: "24h",
      color: "bg-gradient-to-br from-blue-50 to-cyan-50",
    },
    {
      id: 19,
      name: "Bose SoundLink Around-Ear",
      category: "deportivos",
      brand: "Bose",
      description: "Audífonos deportivos inalámbricos resistentes al sudor",
      price: 199.99,
      originalPrice: 249.99,
      rating: 4.5,
      reviews: 345,
      features: ["15h batería", "IPX4", "Resistente al sudor", "Bluetooth 5.1"],
      image: "/products/bose-soundlink.jpg",
      tags: ["Deportivo", "Resistente", "Bose"],
      stock: "Disponible",
      delivery: "24h",
      color: "bg-gradient-to-br from-emerald-50 to-teal-50",
    },

    // AUDIO-TECHNICA (4 productos)
    {
      id: 20,
      name: "Audio-Technica ATH-M50x",
      category: "estudio",
      brand: "Audio-Technica",
      description: "El monitor de estudio más popular del mundo",
      price: 149.99,
      originalPrice: 179.99,
      rating: 4.9,
      reviews: 3256,
      features: [
        "Sonido preciso",
        "Aislamiento excelente",
        "Plegables",
        "90° rotación",
      ],
      image: "/products/audio-technica-m50x.jpg",
      badge: {
        text: "Clásico",
        color: "bg-gradient-to-r from-gray-600 to-gray-800",
      },
      tags: ["Monitor", "Estudio", "Referencia"],
      stock: "Disponible",
      delivery: "24h",
      color: "bg-gradient-to-br from-gray-50 to-gray-100",
    },
    {
      id: 21,
      name: "Audio-Technica ATH-M40x",
      category: "estudio",
      brand: "Audio-Technica",
      description:
        "Monitor de estudio profesional con gran relación calidad-precio",
      price: 99.99,
      originalPrice: 129.99,
      rating: 4.7,
      reviews: 1876,
      features: [
        "Sonido equilibrado",
        "Aislamiento",
        "Plegables",
        "40mm drivers",
      ],
      image: "/products/audio-technica-m40x.jpg",
      tags: ["Estudio", "Monitor", "Económico"],
      stock: "Disponible",
      delivery: "24h",
      color: "bg-gradient-to-br from-gray-50 to-gray-100",
    },
    {
      id: 22,
      name: "Audio-Technica ATH-M20x",
      category: "estudio",
      brand: "Audio-Technica",
      description: "Monitor de estudio económico para principiantes",
      price: 59.99,
      originalPrice: 79.99,
      rating: 4.5,
      reviews: 1987,
      features: [
        "Sonido equilibrado",
        "Aislamiento",
        "Plegable",
        "40mm drivers",
      ],
      image: "/products/audio-technica-m20x.jpg",
      tags: ["Estudio", "Económico", "Básico"],
      stock: "Disponible",
      delivery: "24h",
      color: "bg-gradient-to-br from-gray-50 to-gray-100",
    },
    {
      id: 23,
      name: "Audio-Technica ATH-SR50BT",
      category: "inalambricos",
      brand: "Audio-Technica",
      description: "Audífonos inalámbricos con tecnología de sonido digital",
      price: 199.99,
      originalPrice: 249.99,
      rating: 4.5,
      reviews: 234,
      features: ["29h batería", "LDAC", "ANC", "Almohadillas de memoria"],
      image: "/products/audio-technica-sr50bt.jpg",
      tags: ["Inalámbrico", "LDAC", "ANC"],
      stock: "Disponible",
      delivery: "48h",
      color: "bg-gradient-to-br from-slate-50 to-gray-100",
    },

    // SKULLCANDY (3 productos)
    {
      id: 24,
      name: "Skullcandy Crusher Evo",
      category: "gaming",
      brand: "Skullcandy",
      description: "Bass sensorial personalizable con tecnología haptic",
      price: 179.99,
      originalPrice: 199.99,
      rating: 4.6,
      reviews: 892,
      features: ["Bass sensorial", "40h batería", "Plegable", "Tile Tracking"],
      image: "/products/skullcandy-crusher-evo.jpg",
      badge: {
        text: "Bass",
        color: "bg-gradient-to-r from-red-500 to-pink-500",
      },
      tags: ["Gaming", "Bass", "Inalámbrico"],
      stock: "Disponible",
      delivery: "48h",
      color: "bg-gradient-to-br from-red-50 to-pink-50",
    },
    {
      id: 25,
      name: "Skullcandy Hesh ANC",
      category: "inalambricos",
      brand: "Skullcandy",
      description: "Cancelación de ruido con batería de 45 horas",
      price: 129.99,
      originalPrice: 159.99,
      rating: 4.5,
      reviews: 456,
      features: ["45h batería", "ANC", "Tile", "Carga rápida"],
      image: "/products/skullcandy-hesh-anc.jpg",
      tags: ["ANC", "Batería", "Tile"],
      stock: "Disponible",
      delivery: "48h",
      color: "bg-gradient-to-br from-gray-50 to-gray-100",
    },
    {
      id: 26,
      name: "Skullcandy Indy Evo",
      category: "deportivos",
      brand: "Skullcandy",
      description: "Earbuds deportivos con 30h de batería total",
      price: 59.99,
      originalPrice: 79.99,
      rating: 4.4,
      reviews: 567,
      features: ["30h batería", "IP55", "Tile", "Carga rápida"],
      image: "/products/skullcandy-indy-evo.jpg",
      tags: ["Deportivo", "Earbuds", "IP55"],
      stock: "Disponible",
      delivery: "24h",
      color: "bg-gradient-to-br from-blue-50 to-cyan-50",
    },

    // HYPERX (2 productos)
    {
      id: 27,
      name: "HyperX Cloud II",
      category: "gaming",
      brand: "HyperX",
      description: "El estándar de oro para gaming competitivo",
      price: 89.99,
      originalPrice: 119.99,
      rating: 4.7,
      reviews: 4321,
      features: [
        "7.1 Virtual",
        "Micrófono desmontable",
        "Memory foam",
        "Aluminio",
      ],
      image: "/products/hyperx-cloud-ii.jpg",
      badge: {
        text: "Best Seller",
        color: "bg-gradient-to-r from-purple-500 to-pink-500",
      },
      tags: ["Gaming", "7.1", "PC"],
      stock: "Disponible",
      delivery: "24h",
      color: "bg-gradient-to-br from-purple-50 to-pink-50",
    },
    {
      id: 28,
      name: "HyperX Cloud Alpha",
      category: "gaming",
      brand: "HyperX",
      description: "Sonido dual chamber para gaming competitivo",
      price: 99.99,
      originalPrice: 129.99,
      rating: 4.6,
      reviews: 2345,
      features: ["Dual Chamber", "Aluminio", "Almohadillas", "Cable trenzado"],
      image: "/products/hyperx-cloud-alpha.jpg",
      tags: ["Gaming", "PC", "Consolas"],
      stock: "Disponible",
      delivery: "24h",
      color: "bg-gradient-to-br from-red-50 to-orange-50",
    },

    // BEATS (2 productos)
    {
      id: 29,
      name: "Beats Studio Pro",
      category: "inalambricos",
      brand: "Beats",
      description: "Sonido spatial audio con cancelación transparente",
      price: 249.99,
      originalPrice: 299.99,
      rating: 4.5,
      reviews: 678,
      features: ["Spatial Audio", "ANC", "40h batería", "Apple/Android"],
      image: "/products/beats-studio-pro.jpg",
      badge: {
        text: "Spatial Audio",
        color: "bg-gradient-to-r from-rose-500 to-red-500",
      },
      tags: ["Apple", "Spatial", "Lifestyle"],
      stock: "Disponible",
      delivery: "48h",
      color: "bg-gradient-to-br from-rose-50 to-red-50",
    },
    {
      id: 30,
      name: "Beats Fit Pro",
      category: "deportivos",
      brand: "Beats",
      description: "Earbuds deportivos con ajuste alado y ANC",
      price: 199.99,
      originalPrice: 249.99,
      rating: 4.6,
      reviews: 567,
      features: ["ANC", "Ajuste alado", "IPX4", "Chip Apple"],
      image: "/products/beats-fit-pro.jpg",
      tags: ["Deportivo", "Apple", "ANC"],
      stock: "Disponible",
      delivery: "48h",
      color: "bg-gradient-to-br from-rose-50 to-red-50",
    },
  ];

  // Inicialización
  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Función para obtener icono de categoría
  function getCategoryIcon(category: string) {
    switch (category) {
      case "inalambricos":
        return <Zap className="h-4 w-4" />;
      case "gaming":
        return <Gamepad2 className="h-4 w-4" />;
      case "estudio":
        return <Music className="h-4 w-4" />;
      case "deportivos":
        return <TrendingUp className="h-4 w-4" />;
      default:
        return <Headphones className="h-4 w-4" />;
    }
  }

  if (!isMounted) {
    return <LoadingSkeleton />;
  }

  return (
    <>
      {/* Modal de imagen zoom */}
      <ImageZoomModal
        zoomedImage={zoomedImage}
        setZoomedImage={setZoomedImage}
      />

      {/* Modal de vista rápida */}
      <ProductQuickView
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />

      <div className="min-h-screen bg-gradient-to-b from-onyx-50/10 to-white">
        {/* Hero Banner */}
        <div className="relative bg-gradient-to-r from-tuscan-sun-500/5 via-amber-glow-500/5 to-tuscan-sun-500/5 py-12 md:py-16 overflow-hidden">
          {/* Partículas flotantes */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, Math.random() * 80 - 40, 0],
                  x: [0, Math.random() * 40 - 20, 0],
                }}
                transition={{
                  duration: 8 + Math.random() * 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-tuscan-sun-300/20 to-amber-glow-300/20"
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
                <Sparkles className="h-4 w-4 mr-2" />
                {products.length} Modelos Premium
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-onyx-900 mb-6">
                <span className="bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500 bg-clip-text text-transparent">
                  Colección Completa
                </span>
                <br />
                Audífonos de Marca
              </h1>

              <p className="text-xl text-onyx-600 max-w-3xl mx-auto mb-8">
                Sony, Sennheiser, JBL, Bose, Audio-Technica y más. Todos 100%
                originales con garantía de 6 meses.
              </p>

              {/* Estadísticas rápidas */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-onyx-100">
                  <Shield className="h-4 w-4 text-tuscan-sun-500" />
                  <span className="text-sm font-medium text-onyx-700">
                    Garantía 6 meses
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-onyx-100">
                  <Truck className="h-4 w-4 text-tuscan-sun-500" />
                  <span className="text-sm font-medium text-onyx-700">
                    Envío en Maracaibo
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-onyx-100">
                  <Check className="h-4 w-4 text-tuscan-sun-500" />
                  <span className="text-sm font-medium text-onyx-700">
                    100% Original
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Controles de vista */}
        <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-sm border-b border-onyx-100 py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-onyx-900">
                  {products.length} Modelos Disponibles
                </h2>
                <p className="text-onyx-600 text-sm md:text-base">
                  Encuentra tu sonido perfecto
                </p>
              </div>

              <div className="flex items-center gap-4">
                {/* Selector de vista */}
                <div className="flex items-center border border-onyx-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={cn(
                      "px-4 py-2 transition-all duration-300 flex items-center gap-2",
                      viewMode === "grid"
                        ? "bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500 text-white"
                        : "bg-white text-onyx-600 hover:bg-onyx-50",
                    )}
                  >
                    <Grid3x3 className="h-4 w-4" />
                    <span className="hidden sm:inline">Grid</span>
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={cn(
                      "px-4 py-2 transition-all duration-300 flex items-center gap-2",
                      viewMode === "list"
                        ? "bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500 text-white"
                        : "bg-white text-onyx-600 hover:bg-onyx-50",
                    )}
                  >
                    <List className="h-4 w-4" />
                    <span className="hidden sm:inline">Lista</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="container mx-auto px-4 py-8">
          {loading ? (
            <div
              className={cn(
                "grid gap-6",
                viewMode === "grid"
                  ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1",
              )}
            >
              {[...Array(9)].map((_, i) => (
                <Skeleton
                  key={i}
                  className={viewMode === "grid" ? "h-[500px]" : "h-[200px]"}
                />
              ))}
            </div>
          ) : viewMode === "grid" ? (
            // VISTA GRID - 30 productos = 10 filas de 3
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                  className="group h-full"
                >
                  <Card className="h-full border-2 border-transparent bg-white overflow-hidden hover:border-tuscan-sun-200 hover:shadow-2xl transition-all duration-500 flex flex-col">
                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-4 right-4 z-10">
                        <Badge
                          className={cn(
                            "text-white border-2 border-white shadow-lg px-3 py-1 text-xs font-bold",
                            product.badge.color,
                          )}
                        >
                          {product.badge.text}
                        </Badge>
                      </div>
                    )}

                    {/* Imagen optimizada para vertical */}
                    <div className="relative h-72 md:h-80 overflow-hidden bg-gradient-to-br from-onyx-50 to-onyx-100 flex-shrink-0">
                      <div className="absolute inset-0 p-6 flex items-center justify-center">
                        <div className="relative w-full h-full max-w-[70%]">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-contain transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            quality={90}
                            priority={index < 6}
                          />

                          {/* Botón de zoom */}
                          <button
                            onClick={() => setZoomedImage(product.image)}
                            className="absolute top-2 right-2 p-2 rounded-full bg-white/80 backdrop-blur-sm text-onyx-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white hover:text-tuscan-sun-600"
                            aria-label="Ampliar imagen"
                          >
                            <Maximize2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-6 flex-1">
                      {/* Marca y categoría */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 rounded-md bg-onyx-100 text-onyx-600">
                            {getCategoryIcon(product.category)}
                          </div>
                          <span className="text-sm font-semibold text-onyx-500">
                            {product.brand}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-tuscan-sun-400 text-tuscan-sun-400" />
                          <span className="text-sm font-bold text-onyx-900">
                            {product.rating}
                          </span>
                          <span className="text-xs text-onyx-400">
                            ({product.reviews})
                          </span>
                        </div>
                      </div>

                      {/* Nombre del producto */}
                      <h3 className="text-xl font-bold text-onyx-900 mb-3 group-hover:text-tuscan-sun-600 transition-colors line-clamp-1">
                        {product.name}
                      </h3>

                      {/* Descripción */}
                      <p className="text-onyx-600 text-sm mb-4 line-clamp-2">
                        {product.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-xs rounded-full bg-onyx-100 text-onyx-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Stock y entrega */}
                      <div className="flex items-center justify-between text-sm mb-4">
                        <div className="flex items-center gap-2">
                          <div
                            className={cn(
                              "w-2 h-2 rounded-full animate-pulse",
                              product.stock.includes("Disponible")
                                ? "bg-emerald-500"
                                : product.stock.includes("Últimas")
                                  ? "bg-amber-500"
                                  : "bg-rose-500",
                            )}
                          />
                          <span className="text-onyx-700">{product.stock}</span>
                        </div>
                        <div className="flex items-center gap-1 text-onyx-500">
                          <Clock className="h-3 w-3" />
                          <span>{product.delivery}</span>
                        </div>
                      </div>

                      {/* Características principales */}
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {product.features.slice(0, 4).map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-1 text-xs text-onyx-600"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-tuscan-sun-500 flex-shrink-0"></div>
                            <span className="truncate">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter className="px-6 pb-6 pt-0 flex-shrink-0">
                      <div className="w-full flex items-center justify-between">
                        {/* Precio */}
                        <div>
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold bg-gradient-to-r from-tuscan-sun-600 to-amber-glow-600 bg-clip-text text-transparent">
                              ${product.price}
                            </span>
                            {product.originalPrice && (
                              <span className="text-sm text-onyx-400 line-through">
                                ${product.originalPrice}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-onyx-500">
                            IVA incluido • 6 meses garantía
                          </p>
                        </div>

                        {/* Botones de acción */}
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-onyx-200 hover:border-tuscan-sun-300 w-10 p-0"
                            onClick={() => setSelectedProduct(product)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500 hover:from-tuscan-sun-600 hover:to-amber-glow-600 text-white shadow-lg shadow-tuscan-sun-200/50"
                            onClick={() =>
                              window.open(
                                `https://wa.me/584141234567?text=Hola! Estoy interesado en los ${product.name} de PabliCulares`,
                                "_blank",
                              )
                            }
                          >
                            <ShoppingBag className="h-4 w-4 mr-2" />
                            <span className="hidden xs:inline">Consultar</span>
                          </Button>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            // VISTA LISTA - CORREGIDA (sin overflow)
            <div className="space-y-4">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.01 }}
                  className="w-full"
                >
                  <Card className="border border-onyx-100 hover:border-tuscan-sun-300 transition-all duration-300 overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      {/* Imagen en lista - fija */}
                      <div className="md:w-56 lg:w-64 h-64 md:h-72 relative bg-gradient-to-br from-onyx-50 to-onyx-100 flex-shrink-0">
                        <div className="absolute inset-0 p-6 flex items-center justify-center">
                          <div className="relative w-full h-full max-w-[80%]">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-contain"
                              sizes="(max-width: 768px) 100vw, 256px"
                              quality={85}
                            />
                          </div>
                        </div>
                        {product.badge && (
                          <div className="absolute top-3 right-3">
                            <Badge
                              className={cn(
                                "text-white px-3 py-1 text-xs font-bold",
                                product.badge.color,
                              )}
                            >
                              {product.badge.text}
                            </Badge>
                          </div>
                        )}
                      </div>

                      {/* Contenido en lista - flexible con ancho fijo */}
                      <div className="flex-1 p-6">
                        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                          {/* Información principal - ocupa el espacio necesario */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="flex items-center gap-2">
                                <div className="p-1.5 rounded-md bg-onyx-100 text-onyx-600">
                                  {getCategoryIcon(product.category)}
                                </div>
                                <span className="text-sm font-semibold text-onyx-500">
                                  {product.brand}
                                </span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 fill-tuscan-sun-400 text-tuscan-sun-400" />
                                <span className="text-sm font-bold text-onyx-900">
                                  {product.rating}
                                </span>
                                <span className="text-xs text-onyx-400">
                                  ({product.reviews})
                                </span>
                              </div>
                            </div>

                            <h3 className="text-xl lg:text-2xl font-bold text-onyx-900 mb-3 line-clamp-1">
                              {product.name}
                            </h3>

                            <p className="text-onyx-600 mb-4 line-clamp-2">
                              {product.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                              {product.tags.map((tag, i) => (
                                <span
                                  key={i}
                                  className="px-2 py-1 text-xs rounded-full bg-onyx-100 text-onyx-700"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                              {product.features
                                .slice(0, 4)
                                .map((feature, i) => (
                                  <div
                                    key={i}
                                    className="flex items-center gap-2 text-sm text-onyx-600"
                                  >
                                    <div className="w-1.5 h-1.5 rounded-full bg-tuscan-sun-500 flex-shrink-0"></div>
                                    <span className="truncate">{feature}</span>
                                  </div>
                                ))}
                            </div>
                          </div>

                          {/* Sidebar de compra - ancho fijo */}
                          <div className="lg:w-64 flex-shrink-0 flex flex-col gap-4">
                            <div className="bg-gradient-to-br from-onyx-50/30 to-white p-5 rounded-xl border border-onyx-100">
                              <div className="flex flex-col items-start lg:items-end">
                                <div className="flex items-baseline gap-2 mb-2">
                                  <span className="text-3xl font-bold bg-gradient-to-r from-tuscan-sun-600 to-amber-glow-600 bg-clip-text text-transparent">
                                    ${product.price}
                                  </span>
                                  {product.originalPrice && (
                                    <span className="text-sm text-onyx-400 line-through">
                                      ${product.originalPrice}
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-onyx-500 mb-3">
                                  IVA incluido • 6 meses garantía
                                </p>

                                <div className="w-full space-y-2 mb-4">
                                  <div className="flex items-center justify-between">
                                    <span className="text-sm text-onyx-600">
                                      Stock:
                                    </span>
                                    <div className="flex items-center gap-2">
                                      <div
                                        className={cn(
                                          "w-2 h-2 rounded-full",
                                          product.stock.includes("Disponible")
                                            ? "bg-emerald-500"
                                            : product.stock.includes("Últimas")
                                              ? "bg-amber-500"
                                              : "bg-rose-500",
                                        )}
                                      />
                                      <span className="text-sm font-medium text-onyx-900">
                                        {product.stock}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <span className="text-sm text-onyx-600">
                                      Entrega:
                                    </span>
                                    <div className="flex items-center gap-1 text-sm text-onyx-700">
                                      <Truck className="h-3 w-3" />
                                      <span>{product.delivery}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Botones - ANCHO COMPLETO sin overflow */}
                              <div className="flex flex-col sm:flex-row lg:flex-col gap-2 w-full">
                                <Button
                                  variant="outline"
                                  className="w-full border-onyx-200 hover:border-tuscan-sun-300"
                                  onClick={() => setSelectedProduct(product)}
                                >
                                  <Eye className="h-4 w-4 mr-2" />
                                  Ver detalles
                                </Button>
                                <Button
                                  className="w-full bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500 hover:from-tuscan-sun-600 hover:to-amber-glow-600 text-white shadow-lg"
                                  onClick={() =>
                                    window.open(
                                      `https://wa.me/584141234567?text=Hola! Estoy interesado en los ${product.name} de PabliCulares`,
                                      "_blank",
                                    )
                                  }
                                >
                                  <ShoppingBag className="h-4 w-4 mr-2" />
                                  Consultar
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}

          {/* Contador de productos */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 pt-6 border-t border-onyx-100 text-center"
          >
            <p className="text-onyx-600">
              Mostrando{" "}
              <span className="font-bold text-onyx-900">{products.length}</span>{" "}
              modelos de audio premium
            </p>
            <p className="text-sm text-onyx-500 mt-2">
              Todos los productos incluyen 6 meses de garantía y envío en
              Maracaibo
            </p>
          </motion.div>

          {/* Sección de garantía */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 pt-12 border-t border-onyx-100"
          >
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
                  No te conformes con imitaciones. Descubre la diferencia que
                  solo los audífonos premium pueden ofrecer.
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

            {/* CTA Final */}
          </motion.div>
        </div>
      </div>
    </>
  );
};

// Componentes auxiliares
const LoadingSkeleton = () => (
  <div className="min-h-screen bg-gradient-to-b from-onyx-50/10 to-white">
    <div className="container mx-auto px-4 py-12">
      <Skeleton className="h-12 w-64 mx-auto mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(9)].map((_, i) => (
          <Skeleton key={i} className="h-[500px] rounded-2xl" />
        ))}
      </div>
    </div>
  </div>
);

const ImageZoomModal = ({ zoomedImage, setZoomedImage }: any) => (
  <AnimatePresence>
    {zoomedImage && (
      <Dialog open={!!zoomedImage} onOpenChange={() => setZoomedImage(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0 bg-transparent border-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative bg-black/5 backdrop-blur-sm rounded-lg overflow-hidden"
          >
            <Image
              src={zoomedImage}
              alt="Producto ampliado"
              width={1920}
              height={2560}
              className="w-full h-auto max-h-[85vh] object-contain"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 bg-black/50 text-white hover:bg-black/70"
              onClick={() => setZoomedImage(null)}
            >
              ✕
            </Button>
          </motion.div>
        </DialogContent>
      </Dialog>
    )}
  </AnimatePresence>
);

const ProductQuickView = ({ selectedProduct, setSelectedProduct }: any) => (
  <Dialog
    open={!!selectedProduct}
    onOpenChange={() => setSelectedProduct(null)}
  >
    {selectedProduct && (
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6"
        >
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-onyx-900">
              {selectedProduct.name}
            </DialogTitle>
          </DialogHeader>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Imagen */}
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden bg-gradient-to-br from-onyx-50 to-onyx-100">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.name}
                fill
                className="object-contain p-6"
              />
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-onyx-500 bg-onyx-100 px-3 py-1 rounded-full">
                    {selectedProduct.brand}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-tuscan-sun-400 text-tuscan-sun-400" />
                    <span className="font-bold text-onyx-900">
                      {selectedProduct.rating}
                    </span>
                    <span className="text-sm text-onyx-400">
                      ({selectedProduct.reviews} reseñas)
                    </span>
                  </div>
                </div>

                <div>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-3xl font-bold bg-gradient-to-r from-tuscan-sun-600 to-amber-glow-600 bg-clip-text text-transparent">
                      ${selectedProduct.price}
                    </span>
                    {selectedProduct.originalPrice && (
                      <span className="text-lg text-onyx-400 line-through">
                        ${selectedProduct.originalPrice}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-onyx-500 mb-4">
                    IVA incluido • 6 meses garantía
                  </p>
                </div>

                <p className="text-onyx-600">{selectedProduct.description}</p>

                <div className="flex flex-wrap gap-2">
                  {selectedProduct.tags.map((tag: string, i: number) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="bg-onyx-100 text-onyx-700"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Especificaciones */}
              <div>
                <h4 className="font-semibold text-onyx-900 mb-3">
                  Características
                </h4>
                <ul className="grid grid-cols-2 gap-3">
                  {selectedProduct.features.map(
                    (feature: string, i: number) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-onyx-600"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-tuscan-sun-500 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ),
                  )}
                </ul>
              </div>

              {/* Stock */}
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "w-3 h-3 rounded-full",
                    selectedProduct.stock.includes("Disponible")
                      ? "bg-emerald-500"
                      : selectedProduct.stock.includes("Últimas")
                        ? "bg-amber-500"
                        : "bg-rose-500",
                  )}
                />
                <span className="font-medium text-onyx-900">
                  {selectedProduct.stock}
                </span>
              </div>

              {/* CTA */}
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500 hover:from-tuscan-sun-600 hover:to-amber-glow-600 text-white shadow-lg"
                onClick={() => {
                  window.open(
                    `https://wa.me/584141234567?text=Hola! Estoy interesado en los ${selectedProduct.name} de PabliCulares`,
                    "_blank",
                  );
                  setSelectedProduct(null);
                }}
              >
                <ShoppingBag className="h-5 w-5 mr-2" />
                Consultar por WhatsApp
              </Button>
            </div>
          </div>
        </motion.div>
      </DialogContent>
    )}
  </Dialog>
);

export default ProductsPageComponent;
