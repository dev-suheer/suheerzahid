"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/motion/fade-in";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { label: "Projects Shipped", value: "30+" },
  { label: "Years Experience", value: "4+" },
  { label: "Apps Built", value: "15+" },
  { label: "Happy Clients", value: "20+" },
];

export function About() {
  return (
    <section id="about" className="py-20 sm:py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="// about"
          title="Building Products That Ship"
          description="Your idea deserves more than code. It deserves a product that works."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image + Terminal */}
          <FadeIn direction="left">
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-2xl border border-border/50 neon-glow">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/suheer.png?v=1777982448"
                  alt="Suheer Zahid"
                  width={600}
                  height={600}
                  className="w-full aspect-square object-cover"
                  priority
                />
              </div>
            </div>
          </FadeIn>

          {/* Bio + Stats */}
          <FadeIn direction="right" delay={0.2}>
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I&apos;m Suheer Zahid, a Full Stack and React Native Developer
                  based in Pakistan with 4+ years of experience building
                  large-scale web platforms, mobile applications, and admin
                  panels that are live and serving real users.
                </p>
                <p>
                  My work spans the entire product lifecycle. From architecting
                  robust backends and crafting seamless frontend experiences to
                  deploying containerized applications using Docker and
                  Kubernetes. I build systems that are fast, scalable, and
                  maintainable.
                </p>
                <p>
                  When I&apos;m not working with clients, I&apos;m building
                  personal projects that push my skills further. I believe the
                  best developers never stop shipping.
                </p>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-4 text-center">
                        <p className="text-2xl font-bold gradient-text">
                          {stat.value}
                        </p>
                        <p className="mt-1 text-xs font-mono text-muted-foreground">
                          {stat.label}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
