import { motion } from "framer-motion";
import { Smartphone, CheckCircle2, QrCode, ScanLine } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import NavilensSection from "./NavilensSection";
import iconQr from "@/assets/coco2.png";
import iconNfc from "@/assets/shape-outline.png";
import qrAscires from "@/assets/landing.jfif";
import nfcWipass from "@/assets/iberdrolanfc.png";

const qrBenefits = [
  "Acceso rápido sin instalación",
  "Compatible con cualquier smartphone",
  "Contenido actualizable en tiempo real",
];

const nfcUseCases = [
  { icon: CheckCircle2, text: "Acceso inmediato" },
  { icon: Smartphone, text: "Interacción intuitiva" },
];

const SmartSignageSection = () => (
  <section id="smart-signage" className="py-12 md:py-20 bg-background relative overflow-hidden">
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }}
    />

    <div className="container mx-auto px-4 relative z-10">
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-primary font-bold mb-4">
            02
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Smart Signage
          </h2>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Conecta soportes físicos, pantallas y dispositivos NFC con experiencias digitales interactivas para iniciar procesos, identificar usuarios y activar beneficios al instante.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
        <ScrollReveal direction="left">
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="group relative h-full rounded-3xl bg-card border border-border hover:border-accent/50 p-8 overflow-hidden transition-colors duration-500 shadow-sm"
          >
            <motion.div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <img src={iconQr} alt="Código QR" className="h-10 object-contain" />
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold">
                      Acceso inmediato
                    </span>
                    <h3 className="text-2xl font-bold text-foreground">Códigos QR</h3>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  Escanea el código QR para acceder al proceso de contratación, promociones y contenido interactivo desde cualquier smartphone.
                </p>

                <div className="mb-6 inline-flex flex-col items-center rounded-2xl bg-background border border-border p-4 shadow-sm">
                  <QrCode className="w-28 h-28 text-foreground" strokeWidth={1.5} />
                  <span className="mt-3 text-xs font-medium text-muted-foreground">
                    Escanea para probar la experiencia
                  </span>
                </div>

                <ul className="space-y-2.5">
                  {qrBenefits.map((text, i) => (
                    <motion.li
                      key={text}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.08 }}
                      className="flex items-start gap-2.5 text-sm text-foreground/90"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span>{text}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="relative flex justify-center shrink-0 self-stretch items-center">
                <motion.div
                  className="absolute inset-0 bg-gradient-radial from-accent/20 to-transparent blur-2xl"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />

                <motion.img
                  src={qrAscires}
                  alt="Experiencia QR en smartphone"
                  className="relative w-full max-w-[220px] rounded-2xl shadow-xl object-cover h-full"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={0.1}>
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="group relative h-full rounded-3xl bg-card border border-border hover:border-accent/50 p-8 overflow-hidden transition-colors duration-500 shadow-sm"
          >
            <motion.div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-5">
                <img src={iconNfc} alt="NFC" className="h-14 object-contain" />
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold">
                    SIN APP · SIN ESPERAS · SIN ESCANEAR
                  </span>
                  <h3 className="text-2xl font-bold text-foreground">Dispositivos NFC</h3>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                Acerca tu móvil para iniciar el proceso de contratación y vincular automáticamente tus beneficios Carrefour Club.
              </p>

              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/20 px-4 py-2 text-xs font-semibold text-accent mb-5">
                <ScanLine className="w-4 h-4" />
                Solo acerca tu móvil
              </div>

              <div className="relative rounded-2xl overflow-hidden mb-5 shadow-2xl border border-accent/20">
                <motion.img
                  src={nfcWipass}
                  alt="Interacción con dispositivo NFC"
                  className="w-full h-44 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
              </div>

              <ul className="space-y-2.5">
                {nfcUseCases.map(({ icon: Icon, text }, i) => (
                  <motion.li
                    key={text}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    className="flex items-start gap-2.5 text-sm text-foreground/90"
                  >
                    <Icon className="w-4 h-4 text-accent shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span>{text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default SmartSignageSection;
