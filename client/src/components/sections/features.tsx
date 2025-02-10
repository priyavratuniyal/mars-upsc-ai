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
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sm font-medium text-primary mb-2 block text-center"
          >
            {/* Key Features */}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4"
          >
            Everything you need to excel in UPSC Mains
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg sm:text-xl text-muted-foreground text-center"
          >
            Comprehensive tools and features designed to enhance your UPSC Mains preparation
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-base sm:text-lg text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}