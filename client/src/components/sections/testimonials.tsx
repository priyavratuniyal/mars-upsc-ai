import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "The AI evaluation helped me understand my answer writing style better. My scores improved significantly.",
    author: "Rajesh Kumar",
    role: "UPSC Aspirant",
  },
  {
    quote: "Instant feedback means I can practice more effectively. The specific suggestions are invaluable.",
    author: "Priya Singh",
    role: "CSE Candidate",
  },
  {
    quote: "The detailed analysis of my answers helped me identify patterns in my mistakes.",
    author: "Amit Sharma",
    role: "IAS Aspirant",
  },
  {
    quote: "This platform revolutionized my UPSC preparation strategy. Highly recommended!",
    author: "Sneha Patel",
    role: "Civil Services Student",
  },
];

const stats = [
  {
    value: "85%",
    label: "Users saw improved answer quality",
  },
  {
    value: "50,000+",
    label: "Evaluated answers so far",
  },
];

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2,
      duration: 0.5,
    },
  }),
};

export default function Testimonials() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-heading">
          What Our Users Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariants}
              custom={index}
            >
              <Card className="h-full transform transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-6">
                  <p className="text-lg mb-4 italic text-muted-foreground">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariants}
              custom={index + testimonials.length}
            >
              <h3 className="text-4xl font-bold mb-2 font-heading">{stat.value}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
