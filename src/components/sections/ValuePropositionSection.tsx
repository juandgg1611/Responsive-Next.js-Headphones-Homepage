// src/components/sections/ValuePropositionSection.tsx
"use client";

import { useState, useEffect } from "react";
import {
  Sparkles,
  Headphones,
  Shield,
  Zap,
  Star,
  ThumbsUp,
  Target,
  Award,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ValuePropositionSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const problems = [
    "Productos genéricos que fallan rápido",
    "Calidad de sonido deficiente",
    "Sin garantía o soporte post-venta",
    "Imitaciones y falsificaciones",
    "Precios engañosos por baja calidad",
    "Sin asesoría especializada",
  ];

  const solutions = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Garantía Certificada",
      description: "6 meses en todos nuestros productos",
      color: "bg-gradient-to-br from-tuscan-sun-500/20 to-tuscan-sun-500/5",
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Calidad Premium",
      description: "Audífonos de marcas reconocidas mundialmente",
      color: "bg-gradient-to-br from-amber-glow-500/20 to-amber-glow-500/5",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Envío Express",
      description: "Entrega en 15-45min en Maracaibo",
      color:
        "bg-gradient-to-br from-golden-orange-500/20 to-golden-orange-500/5",
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Asesoría Expertos",
      description: "Te ayudamos a elegir lo mejor para ti",
      color: "bg-gradient-to-br from-tuscan-sun-600/20 to-amber-glow-600/5",
    },
  ];

  const uniqueSellingPoints = [
    {
      title: "100% Original",
      description: "Productos auténticos con factura garantizada",
      icon: <Award className="h-5 w-5" />,
    },
    {
      title: "Enfocado en Maracaibo",
      description: "Entregamos personalmente en toda la ciudad",
      icon: <Target className="h-5 w-5" />,
    },
    {
      title: "Transparencia Total",
      description: "Sin sorpresas, solo calidad garantizada",
      icon: <ThumbsUp className="h-5 w-5" />,
    },
  ];

  if (!isMounted) {
    return (
      <section className="py-20 bg-gradient-to-b from-white to-onyx-50/30">
        <div className="container mx-auto px-4">
          <div className="h-12 w-64 bg-onyx-100 rounded-xl mx-auto mb-12 animate-pulse"></div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="h-24 bg-onyx-100 rounded-xl animate-pulse"
                ></div>
              ))}
            </div>
            <div className="space-y-4">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="h-32 bg-onyx-100 rounded-xl animate-pulse"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white to-onyx-50/30">
      {/* Fondo decorativo */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-tuscan-sun-100/20 to-amber-glow-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-amber-glow-100/20 to-tuscan-sun-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 px-4 py-1.5 text-sm font-semibold bg-gradient-to-r from-tuscan-sun-500/10 to-amber-glow-500/10 border border-tuscan-sun-300 text-tuscan-sun-600">
            <Sparkles className="h-4 w-4 mr-2" />
            ¿Por qué PabliCulares?
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold text-onyx-900 mb-6">
            Fin a los productos genéricos,{" "}
            <span className="bg-gradient-to-r from-tuscan-sun-500 to-amber-glow-500 bg-clip-text text-transparent">
              hola a la calidad real
            </span>
          </h2>

          <p className="text-xl text-onyx-600 max-w-3xl mx-auto">
            Somos la solución confiable en Maracaibo para audífonos que
            realmente duran y suenan como deben.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Lado izquierdo: El Problema */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-red-500/10 to-red-600/10 border border-red-200">
                <XCircle className="h-7 w-7 text-red-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-onyx-900">
                  El Problema Común
                </h3>
                <p className="text-onyx-500">Lo que los marabinos enfrentan:</p>
              </div>
            </div>

            <div className="space-y-4">
              {problems.map((problem, index) => (
                <motion.div
                  key={problem}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-white to-onyx-50/50 border border-onyx-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="p-2 rounded-lg bg-red-100 text-red-500 mt-0.5">
                    <XCircle className="h-4 w-4" />
                  </div>
                  <span className="text-onyx-800 font-medium">{problem}</span>
                </motion.div>
              ))}
            </div>

            {/* Puntos Únicos de Venta */}
            <div className="pt-8 border-t border-onyx-100">
              <h4 className="text-lg font-semibold text-onyx-900 mb-4">
                Lo que nos hace diferentes:
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {uniqueSellingPoints.map((point, index) => (
                  <motion.div
                    key={point.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-tuscan-sun-50/50 to-amber-glow-50/30 border border-tuscan-sun-100"
                  >
                    <div className="p-2 rounded-md bg-gradient-to-br from-tuscan-sun-100 to-amber-glow-100 text-tuscan-sun-600">
                      {point.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-onyx-900">
                        {point.title}
                      </p>
                      <p className="text-sm text-onyx-600">
                        {point.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Lado derecho: Nuestra Solución */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 border border-emerald-200">
                <CheckCircle2 className="h-7 w-7 text-emerald-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-onyx-900">
                  Nuestra Solución
                </h3>
                <p className="text-onyx-500">
                  Lo que ofrecemos en PabliCulares:
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.2, type: "spring" }}
                  whileHover={{ y: -5 }}
                >
                  <Card
                    className={`h-full border-2 border-transparent bg-gradient-to-br from-white to-onyx-50/50 overflow-hidden hover:border-tuscan-sun-200 hover:shadow-xl transition-all duration-300 ${solution.color}`}
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="p-4 rounded-2xl bg-gradient-to-br from-tuscan-sun-100 to-amber-glow-100 text-tuscan-sun-600 mb-4">
                          {solution.icon}
                        </div>
                        <h4 className="text-xl font-bold text-onyx-900 mb-2">
                          {solution.title}
                        </h4>
                        <p className="text-onyx-600">{solution.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Comparativa directa */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-tuscan-sun-50/30 to-amber-glow-50/30 border border-tuscan-sun-200/50"
            >
              <h4 className="text-xl font-bold text-onyx-900 mb-4 text-center">
                PabliCulares vs. La Competencia
              </h4>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="space-y-2">
                  <div className="text-2xl font-bold bg-gradient-to-r from-tuscan-sun-600 to-amber-glow-600 bg-clip-text text-transparent">
                    100%
                  </div>
                  <div className="text-sm font-semibold text-onyx-900">
                    Productos Originales
                  </div>
                  <div className="text-xs text-onyx-500">
                    (vs. 60% promedio)
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-2xl font-bold bg-gradient-to-r from-tuscan-sun-600 to-amber-glow-600 bg-clip-text text-transparent">
                    6 Meses
                  </div>
                  <div className="text-sm font-semibold text-onyx-900">
                    Garantía Extendida
                  </div>
                  <div className="text-xs text-onyx-500">
                    (vs. 30 días típico)
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-2xl font-bold bg-gradient-to-r from-tuscan-sun-600 to-amber-glow-600 bg-clip-text text-transparent">
                    15-45min
                  </div>
                  <div className="text-sm font-semibold text-onyx-900">
                    Entrega en Maracaibo
                  </div>
                  <div className="text-xs text-onyx-500">(vs. 5+ días)</div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-onyx-100">
                <p className="text-center text-onyx-700 font-medium">
                  <span className="text-tuscan-sun-600">
                    Calidad garantizada
                  </span>{" "}
                  •{" "}
                  <span className="text-amber-glow-600">Asesoría experta</span>{" "}
                  •{" "}
                  <span className="text-golden-orange-600">Servicio local</span>
                </p>
              </div>
            </motion.div>

            {/* Llamada de atención */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="p-5 rounded-xl bg-gradient-to-r from-tuscan-sun-500/10 via-amber-glow-500/10 to-tuscan-sun-500/10 border border-tuscan-sun-300/30"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-tuscan-sun-500 to-amber-glow-500">
                  <Star className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-onyx-900">
                    Para el marabino que exige calidad, no imitaciones
                  </p>
                  <p className="text-sm text-onyx-600 mt-1">
                    Porque tu música merece sonar como fue creada
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Separador decorativo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mt-16 pt-12 border-t border-onyx-100"
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
              className="w-3 h-3 rounded-full bg-gradient-to-r from-tuscan-sun-400 to-amber-glow-400"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
