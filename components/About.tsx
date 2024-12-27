"use client"

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Instagram, Linkedin, Twitter, Mail } from 'lucide-react';
import { motion } from "framer-motion";


export const About = () => {
  const stats = [
    { label: "Conversion Rate", value: "25%" },
    { label: "SaaS Projects", value: "3+" },
    { label: "Years Experience", value: "2+" }
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/yugha13/?hl=en", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/yugha-s-606768293/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/yugha_13", label: "X (Twitter)" },
    { 
      icon: Mail, 
      href: "mailto:syugha13@gmail.com", 
      label: "Email" 
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div ref={ref} className="flex flex-col-reverse md:flex-row gap-12 items-center">
            <motion.div
              className="w-full md:w-1/3 space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="w-64 h-80 mx-auto overflow-hidden rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <img
                  src="/yugha.png" 
                  alt="Profile Photo" 
                  className="w-full h-full object-cover"

                />
              </motion.div>
              
              <motion.div
                className="flex justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="flex justify-center gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        className="bg-primary/10 p-2 rounded-full hover:bg-primary/20 transition-colors duration-300 group"
                        aria-label={social.label}
                      >
                        <Icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </a>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              className="w-full md:w-2/3"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <Badge variant="outline" className="mb-6">
                  About Me
                </Badge>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                  Turning Visitors into Valuable Customers
                </h2>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <p className="text-lg text-muted-foreground mb-12">
                  Hi, I am Yugha, a Professional Copywriter creating persuasive email campaigns, sales pages, and landing pages that drive results.
                  <br/> 
                  Even though I work independently on copywriting, I also work in a team of skilled experts who design websites and develop Android applications.
                  <br/>
                  Lets turn your ideas into impactful solutions!
                </p>
              </motion.div>

              <motion.div
                className="grid grid-cols-2 md:grid-cols-3 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  >
                    <Card className="border-none bg-white/50 backdrop-blur">
                      <CardContent className="p-6 text-center">
                        <div className="text-3xl font-bold text-primary mb-2">
                          {stat.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {stat.label}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

