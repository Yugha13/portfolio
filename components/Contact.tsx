"use client"
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from 'lucide-react';
import emailjs from "emailjs-com";
import { motion, useInView } from "framer-motion";
import { toast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false); // Added loading state

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true); // Set loading to true on submit
    emailjs
      .send(
        "service_94ptrad", 
        "template_qjtq4hp",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "jpnxRnDCI31jljWiO"
      )
      .then(
        () => {
          toast({
            title: "Scheduled: Catch up",
            description: "Email have send to yugha!",
          })
          setFormData({ name: "", email: "", subject: "", message: "" });
          setLoading(false); // Reset loading state
        },
        (error) => {
          console.error("Error:", error);
          alert("Failed to send message. Please try again.");
          setLoading(false); // Reset loading state
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 
            className="text-4xl font-heading font-bold text-center mb-4"
          >
            Lets Work Together
          </h2>
          <p 
            className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
          >
            Ready to boost your conversions with compelling copy? Lets discuss
            your project.
          </p>

          <div className="max-w-xl mx-auto">
            <div
              className="mb-8 flex items-center justify-center"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-primary group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>

            <form 
              onSubmit={handleSubmit} 
              className="space-y-6"
            >
              <div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div>
                  <Input
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div >
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <motion.div>
                <Textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  className="min-h-[150px]"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </motion.div>
              <motion.div >
                <Button type="submit" className="w-full" disabled={loading}> {/* Disable button when loading */}
                  {loading ? "Sending..." : "Send Message"} {/* Change button text based on loading state */}
                </Button>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
