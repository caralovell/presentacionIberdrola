import { motion, useMotionValue, useSpring } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { useEffect, useRef } from "react";
import { Bot, Sparkles, CheckCircle2 } from "lucide-react";
import aiAgent from "@/assets/chatbot.png";
import aiAvatar from "@/assets/corpo.png";

const blocks = [
  {
    title: "Chatbot Iberdrola",
    label: "Asistente existente",
    icon: Bot,
    img: aiAgent,
    desc: "Asistente conversacional ya integrado en el ecosistema de Iberdrola, orientado a resolver dudas frecuentes, guiar al usuario y facilitar el acceso a información de contratación, servicios y soporte.",
    points: [
      "Atención inmediata 24/7",
      "Resolución de consultas frecuentes",
      "Integrado con la experiencia digital de Iberdrola",
    ],
  },
  {
    title: "Asistente Virtual Interactivo",
    label: "Solución propuesta",
    icon: Sparkles,
    img: aiAvatar,
    desc: "Asistente creado para esta experiencia, diseñado para acompañar al usuario dentro del flujo Smart Signage, explicar el proceso paso a paso y activar acciones como contratar, hacerse socio o vincular beneficios.",
    points: [
      "Guía visual dentro de la experiencia",
      "Respuestas contextualizadas según la pantalla",
      "Compatible con QR, NFC y soportes interactivos",
    ],
  },
];

const AiAgentSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 30, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 30, damping: 20 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;

      mouseX.set(x * 10);
      mouseY.set(y * 6);
    };

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <section id="inteligencia-artificial" className="py-12 md:py-16 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-primary font-bold mb-3">
              06
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
              Inteligencia Artificial
            </h2>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Dos asistentes complementarios para mejorar la atención, resolver dudas y acompañar al usuario durante la experiencia digital.
            </p>
          </div>
        </ScrollReveal>

        <div ref={containerRef} className="relative max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 py-6">
            {blocks.map((block, index) => {
              const Icon = block.icon;
              const rotations = [-2, 2];

              return (
                <ScrollReveal key={block.title} delay={index * 0.1}>
                  <motion.div
                    className="group relative h-full cursor-pointer"
                    style={{ x: smoothX, y: smoothY }}
                    animate={{
                      rotate: rotations[index],
                    }}
                    transition={{
                      rotate: { duration: 0.5 },
                    }}
                    whileHover={{ scale: 1.03, y: -8, rotate: 0 }}
                  >
                    <div className="relative h-full rounded-3xl overflow-hidden shadow-xl border border-border hover:border-accent/50 bg-card transition-colors duration-300">
                      <div className="relative overflow-hidden aspect-[16/9]">
                        <img
                          src={block.img}
                          alt={block.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />

                        <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-background/90 backdrop-blur-sm border border-border px-3 py-1.5">
                          <Icon className="w-4 h-4 text-accent" strokeWidth={2.5} />
                          <span className="text-[10px] uppercase tracking-[0.18em] text-accent font-bold">
                            {block.label}
                          </span>
                        </div>
                      </div>

                      <div className="p-5 md:p-6">
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                          {block.title}
                        </h3>

                        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                          {block.desc}
                        </p>

                        <ul className="space-y-2.5">
                          {block.points.map((point, i) => (
                            <motion.li
                              key={point}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.2 + i * 0.08 }}
                              className="flex items-start gap-2.5 text-sm text-foreground/90"
                            >
                              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" strokeWidth={2.5} />
                              <span>{point}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiAgentSection;
