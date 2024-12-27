"use client"

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Layout, LineChart, MessageSquare, Cloud, Users } from 'lucide-react';

const services = [
  {
    icon: Mail,
    title: "Email Sequences",
    description:
      "Strategic email programs that nurture leads and cause consistent sales through compelling narrative and psychology backed copy writing.",
  },
  {
    icon: Layout,
    title: "Landing Pages",
    description:
      "High converting landing pages that capture attention, illustrate value, and drive individuals to take action.",
  },
  {
    icon: LineChart,
    title: "Sales Funnels",
    description:
      "Closed loop sales funnels turn cold traffic into loyal clients through strategic content and winning copywriting.",
  },
  {
    icon: Cloud,
    title: "SaaS Solutions",
    description:
      "Building highly scalable and high-performance websites for SaaS businesses and designing the best Android applications on earth, all with an eye toward seamless user experiences and scalable performance.",
  },
  {
    icon: MessageSquare,
    title: "Conversion Copy",
    description:
      "Research driven copy that talks directly to your prospects pain points and desires, driving them to convert.",
  },
  {
    icon: Users,
    title: "Lead Generation",
    description:
      "Opt-in pages designed to maximize leads, build email lists, and drive conversions using offers and clear calls to action.",
  },
];

const ServiceCard = ({ service }: { service: { icon: React.ElementType; title: string; description: string } }) => {
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { once: true, amount: 0.3 });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isCardInView ? "visible" : "hidden"}
    >
      <Card
        className="group hover:shadow-lg transition-all duration-300 border-none bg-secondary/30 overflow-hidden"
      >
        <CardHeader>
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <service.icon className="h-10 w-10 text-primary mb-4" />
          </motion.div>
          <CardTitle className="text-xl font-heading">
            {service.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base">
            {service.description}
          </CardDescription>
        </CardContent>
        <motion.div
          className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            filter: "blur(20px)",
            transform: "translateZ(0)",
          }}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />
      </Card>
    </motion.div>
  );
};

export const Services = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 });

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={headerRef}
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="outline" className="mb-6">
            Services
          </Badge>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Copywriting Services That Deliver Results
          </h2>
          <p className="text-lg text-muted-foreground">
            Themed services to change how your digital presence is shaping up and increasing your rates of conversion.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

