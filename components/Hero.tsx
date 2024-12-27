"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowRight, Instagram, Linkedin, Twitter, Mail } from "lucide-react";

export const Hero = () => {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "X (Twitter)" },
  ];

  return (
    <section className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="flex justify-center mb-8">
            <Avatar className="h-32 w-32 hover:scale-105 transition-transform duration-300">
              <AvatarImage src="/yugha2.png" alt="Profile Photo" />
              <AvatarFallback>YU</AvatarFallback>
            </Avatar>
          </div>

          <div className="flex justify-center gap-4 mb-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="bg-primary/10 p-3 rounded-full transition-colors duration-300 group"
                  aria-label={social.label}
                >
                  <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </a>
              );
            })}
          </div>

          <div className="flex justify-center items-center gap-2">
            <Mail className="w-5 h-5 text-primary" />
            <a href="mailto:syugha13@gmail.com" className="text-primary hover:underline">
              syugha13@gmail.com
            </a>
          </div>

          <Badge variant="secondary">Available for new projects</Badge>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
            Words that Convert, <span className="text-primary">Stories that Sell</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Creating compelling email sequences and high-converting landing pages that turn readers into revenue.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="group"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="flex">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
            <Button size="lg" variant="outline">
              <span className="flex">Get in Touch</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
