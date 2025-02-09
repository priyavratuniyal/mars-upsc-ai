import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the AI evaluation work?",
    answer: "Our system uses advanced AI to analyze your answers based on UPSC criteria, providing detailed feedback on content, structure, and presentation.",
  },
  {
    question: "Is the evaluation accurate?",
    answer: "The AI evaluation is highly accurate and calibrated to UPSC standards, though it's recommended to use it alongside traditional preparation methods.",
  },
  {
    question: "How long does it take to get results?",
    answer: "Results are typically available within seconds of submission, providing instant feedback for rapid improvement.",
  },
  {
    question: "Can I track my progress over time?",
    answer: "Yes, your dashboard shows all your previous evaluations and tracks your improvement over time.",
  },
];

export default function FAQ() {
  return (
    <section className="py-32 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 font-heading"
        >
          Frequently Asked Questions
        </motion.h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <AccordionItem value={`item-${index}`} className="border rounded-lg bg-white px-6">
                <AccordionTrigger className="text-lg font-medium hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
