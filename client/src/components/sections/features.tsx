import { motion } from "framer-motion";

const features = [
  {
    icon: "🤖",
    title: "AI-Powered Analysis",
    description: "Get comprehensive feedback on your answers with our advanced AI that evaluates content, structure, and relevance to UPSC standards."
  },
  {
    icon: "📝",
    title: "Answer Framework",
    description: "Learn the perfect answer structure with our intelligent templates and guidelines tailored for different UPSC question types."
  },
  {
    icon: "📚",
    title: "Topic Coverage",
    description: "Access a vast library of practice questions covering all UPSC subjects, from History to International Relations."
  },
  {
    icon: "🎯",
    title: "Personalized Focus",
    description: "Receive customized practice suggestions based on your performance analytics and improvement areas."
  },
  {
    icon: "🧠",
    title: "Conceptual Clarity",
    description: "Get detailed explanations and relevant examples to strengthen your understanding of key concepts."
  },
  {
    icon: "📊",
    title: "Performance Analytics",
    description: "Track your progress with detailed analytics and insights to identify strengths and areas for improvement."
  }
];

export default function Features() {
  return (
    <section className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sm font-medium text-primary mb-2 block"
          >
            {/* Key Features */}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4 font-heading"
          >
            Your Complete UPSC Answer Writing Companion
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            Master the art of UPSC answer writing with our comprehensive AI-powered platform that provides detailed analysis and personalized feedback.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-start p-6 rounded-xl bg-card hover:bg-accent/5 transition-colors"
            >
              <div className="text-primary bg-primary/5 p-3 rounded-lg mb-6">
                <span className="text-4xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}