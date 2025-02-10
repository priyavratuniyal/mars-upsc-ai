import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MousePointerClick } from "lucide-react";
import { signInWithGoogle } from "@/lib/firebase";

export default function Hero() {
  const handleTelegramJoin = () => {
    window.open("https://t.me/marsupsc", "_blank");
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl mx-auto w-full"
      >
        <h1 className="mb-6">
          <span className="block text-4xl sm:text-5xl md:text-7xl font-bold text-black font-heading">
          🤖 AI-Powered
          </span>
          <span className="block text-4xl sm:text-5xl md:text-7xl font-bold text-yellow-500 font-heading mt-2">
            UPSC Mains
          </span>
          <span className="block text-4xl sm:text-5xl md:text-7xl font-bold text-black font-heading mt-2">
            Answer Evaluation
          </span>
          <span className="block text-xl sm:text-2xl md:text-4xl font-medium mt-6 md:mt-8 text-black font-heading">
            ⚡ Instant Feedback. Improve Faster.
          </span>
            </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-12 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Upload your answer, get AI-driven insights, and improve faster. No waiting. No bias. Just better answers.
            </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              onClick={handleTelegramJoin}
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white text-base sm:text-lg px-8 sm:px-12 py-5 sm:py-6 rounded-full w-full sm:w-auto"
            >
              Join Telegram Waitlist
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={signInWithGoogle}
              className="font-medium text-base sm:text-lg px-8 sm:px-12 py-5 sm:py-6 rounded-full w-full sm:w-auto border-2 border-black hover:bg-black hover:text-white transition-colors"
            >
              Login
            </Button>
          </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-12 flex flex-col items-center gap-3 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-base text-muted-foreground/80 font-medium">Ready for LBSNAA?</span>
        <motion.div
          animate={{ 
            y: [0, 3, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            ease: "easeInOut"
          }}
          className="opacity-70"
        >
          <MousePointerClick className="w-7 h-7" />
        </motion.div>
      </motion.div>
    </section>
  );
}