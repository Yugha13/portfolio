"use client"
import { Card, CardContent } from "@/components/ui/card";
import { ImageIcon } from 'lucide-react';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Email Sample",
    description:
      "Here's an example of an email I crafted for a campaign that increased trial to paid conversion. The email was designed to engage users to take the next step forward to buy. This sample showcases personalized subject lines and targeted copy for different customer segments.",
    type: "Email Marketing",
    imageUrl: "email.png",
    link: "https://docs.google.com/document/d/13ZSturUZvnQOrr5NRLQ1v-D5YpRCIul_GfSCRjAzyqo/edit?usp=sharing",
    videoUrl: "",
  },
  {
    title: "E-commerce SaaS Platform",
    description:
      "Successfully delivered a prototype for an e-commerce platform. The client was thrilled with our team's implementation, leading to a full-scale development project currently in progress.",
    type: "Current Project",
    videoUrl: "oil.mp4",
    link: "https://ecom-demo-gzle.vercel.app/",
  },
  {
    title: "Free Comparison Website Landing Page",
    description:
      "This landing page was designed for a free comparison website, aimed at increasing conversions by offering users an easy-to-use comparison tool. The design focused on clear call-to-actions and user-friendly layout.",
    type: "Landing Page",
    videoUrl: "figma.mp4",
    link: "",
  },
];

const ProjectCard = ({ project, index }: { project: { title: string; description: string; type: string; imageUrl?: string; link: string; videoUrl?: string }; index: number }) => {
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { once: true, amount: 0.1 });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.1
      }
    }
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isCardInView ? "visible" : "hidden"}
    >
      <Card className="group hover:shadow-lg transition-all duration-300 h-full">
        <CardContent className="p-6 flex flex-col justify-between h-full">
          <div className="mb-4 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
            <ImageIcon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{project.type}</p>
          <div className="text-sm overflow-hidden max-h-[5rem] mb-4">
            {project.description}
          </div>

          {project.imageUrl ? (
            <div className="mb-4">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="h-48 rounded-lg object-cover w-full"
              />
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline block mt-4"
              >
                View Samples
              </a>
            </div>
          ) : (
            project.videoUrl && (
              <>
                <div className="aspect-video w-full mb-4">
                  <video
                    width="100%"
                    height="100%"
                    src={project.videoUrl}
                    title={project.title}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="rounded-lg"
                  ></video>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Open Project
                  </a>
                )}
              </>
            )
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export const Works = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.1 });

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="work" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={headerRef}
          variants={headerVariants}
          initial="hidden"
          animate={isHeaderInView ? "visible" : "hidden"}
        >
          <h2 className="text-4xl font-heading font-bold text-center mb-4">
            Selected Works
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Results-driven copy that converts visitors into customers and drives real business growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

