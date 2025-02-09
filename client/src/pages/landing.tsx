import { motion } from "framer-motion";
import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import Demo from "@/components/sections/demo";
import FAQ from "@/components/sections/faq";
import Footer from "@/components/sections/footer";
import Join from "@/components/sections/join";

export default function Landing() {
  return (
    <div className="min-h-screen bg-white [background-image:linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px)] [background-size:20px_20px]">
      <Header />
      <Hero />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Features />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Demo />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <FAQ />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <Join />
      </motion.div>

      <Footer />
    </div>
  );
}