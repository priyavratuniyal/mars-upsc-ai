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
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16 lg:mb-20">
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
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 sm:mb-4"
          >
            Everything you need to excel in UPSC Mains
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground text-center max-w-2xl mx-auto px-2"
          >
            Comprehensive tools and features designed to enhance your UPSC Mains preparation
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{feature.icon}</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">{feature.title}</h3>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
