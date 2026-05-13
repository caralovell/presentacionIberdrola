import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import cmsDashboard from "@/assets/dashboard-mockup.png";
import player from "@/assets/android-media-player.jpg";
import epaperDisplay from "@/assets/pantallaelect.png";
import totemMain from "@/assets/ibmain.png";
import totem1 from "@/assets/ib1.png";
import totem2 from "@/assets/ib2.png";
import totem3 from "@/assets/ib3.png";
import totem4 from "@/assets/ib4.png";

const totemSecondary = [
  { src: totem1, alt: "Tótem digital" },
  { src: totem2, alt: "Tótem digital" },
  { src: totem3, alt: "Tótem digital" },
  { src: totem4, alt: "Tótem digital" },
];

const bubbles = ["Contratación autónoma", "Activación mediante NFC", "Fidelización Carrefour", "Asistencia inteligente"];
const epaperBubbles = ["Etiquetas de precio", "Promociones", "Información de producto"];

const DigitalSignageSection = () => (
  <section id="digital-signage" className="py-12 md:py-16 bg-background">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-primary font-bold mb-4">
            01
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Digital Signage</h2>
        </div>
      </ScrollReveal>

      {/* Intro block */}
      <ScrollReveal delay={0.1}>
        <div className="max-w-4xl mx-auto text-center mb-10">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Soluciones adaptadas a cada formato Carrefour.
          </p>

          <div className="flex flex-wrap justify-center gap-2.5 mt-6">
            {bubbles.map((label, i) => (
              <motion.span
                key={label}
                initial={{ opacity: 0, scale: 0.6, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.06, type: "spring", stiffness: 200, damping: 14 }}
                whileHover={{ scale: 1.08, y: -3 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-sm font-medium text-foreground hover:bg-accent/20 hover:border-accent/60 transition-colors cursor-default shadow-sm"
              >
                {label}
              </motion.span>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Hero image + 4 secondary grid */}
      <ScrollReveal delay={0.15}>
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-5 mb-20 max-w-4xl mx-auto">
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-auto lg:h-full min-h-[320px]"
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={totemMain}
              alt="Tótem digital interactivo principal con anuncio"
              className="w-full h-full object-cover"
              loading="lazy"
              width={1024}
              height={1280}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </motion.div>

          <div className="grid grid-cols-2 gap-3 lg:gap-4">
            {totemSecondary.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="relative rounded-xl overflow-hidden shadow-lg border border-border group cursor-pointer aspect-[4/5]"
              >
                <img
                  src={t.src}
                  alt={t.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  width={896}
                  height={1152}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      
    </div>
  </section>
);

export default DigitalSignageSection;
