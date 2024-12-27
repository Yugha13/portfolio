"use client"


import { Quote } from 'lucide-react'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "./ui/avatar"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface Review {
  id: number
  name: string
  image: string
  role: string
  company: string
  color: "green" | "purple"
  content: string
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Ranjith",
    image: "",
    role: "StartUp Owner",
    company: "Aayul Kaalam",
    color: "green",
    content: "We were extremely impressed with the prototype this team delivered for our next-gen e-commerce platform. The design and functionality were above and beyond our expectations, and the seamless implementation speaks to their expertise. We have been able to move forward with a full-scale development project thanks to their work. The attention to detail and responsiveness of the team have been key in making this a success.",
  },
  {
    id: 2,
    name: "Navjot singh",
    image: "",
    role: "Founder",
    color: "purple",
    company: "Weakalp",
    content: "The Landing page was just superb. We saw immediate results with a 40% increase in qualified leads within the first month.",
  }
]

export function Testimonials() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, amount: 0.1 })


  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={headerRef}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-heading font-bold text-center mb-4">Client Success Stories</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Do not just take my word for it, here is what clients say about working together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <CardWithAnimation key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CardWithAnimation({ review }: { review: Review }) {
  const cardRef = useRef(null)
  const isCardInView = useInView(cardRef, { once: true, amount: 0.1 })

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isCardInView ? "visible" : "hidden"}
    >
      <Card 
        className={`review-card-wave ${review.color} border-none`}
      >
        <CardContent className="p-6 flex flex-col min-h-[350px]">
          <Quote 
            className={`w-12 h-12 mb-6 opacity-80 text-black`}
          />
          <p className="text-gray-600 flex-grow text-lg">
            {review.content}
          </p>
        </CardContent>
        <CardFooter>
          <div>
            <Avatar>
              <AvatarFallback>{review.name.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <h3 className="font-semibold text-black text-lg">
              {review.name}
            </h3>
            <p className="text-sm text-black/90">
              {review.role}, {review.company}
            </p>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

