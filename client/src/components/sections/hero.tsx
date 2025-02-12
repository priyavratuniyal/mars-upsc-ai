import { Button } from "@/components/ui/button";
import { WiggleButton } from "@/components/ui/wiggle-button";
import { motion } from "framer-motion";
import { MousePointerClick, PenSquare, BookOpen, Newspaper, FileCheck, Brain } from "lucide-react";
import { signInWithGoogle } from "@/lib/firebase";

interface FloatingObjectProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  x?: number;
  y?: number;
}

const FloatingObject = ({ children, className = "", delay = 0, x = 0, y = 0 }: FloatingObjectProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 0.15, scale: 1 }}
    transition={{
      delay,
      duration: 0.8,
      ease: "easeOut"
    }}
    className={`absolute hidden sm:block opacity-10 sm:opacity-15 ${className}`}
  >
    <motion.div
      animate={{
        y: [y, y + 15, y],
        x: [x, x + 10, x],
        rotate: [0, 5, 0]
      }}
      transition={{
        duration: 5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse"
      }}
    >
      {children}
    </motion.div>
  </motion.div>
);

export default function Hero() {
  const handleTelegramJoin = () => {
    window.open("https://t.me/marsupsc", "_blank");
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Objects - Title Area */}
      <FloatingObject className="top-[20%] left-[20%]" delay={0.2} y={-20} x={10}>
        <PenSquare className="w-12 h-12 md:w-16 md:h-16" />
      </FloatingObject>
      <FloatingObject className="top-[25%] right-[25%]" delay={0.4} y={15} x={-10}>
        <BookOpen className="w-12 h-12 md:w-16 md:h-16" />
      </FloatingObject>

      {/* Background Objects - Middle Area */}
      <FloatingObject className="top-[45%] left-[15%]" delay={0.6} y={-15} x={15}>
        <Newspaper className="w-8 h-8 md:w-12 md:h-12" />
      </FloatingObject>
      <FloatingObject className="top-[50%] right-[18%]" delay={0.8} y={20} x={-15}>
        <FileCheck className="w-10 h-10 md:w-14 md:h-14" />
      </FloatingObject>
      <FloatingObject className="top-[55%] left-[35%]" delay={1.0} x={-10} y={10}>
        <Brain className="w-8 h-8 md:w-12 md:h-12" />
      </FloatingObject>
      <FloatingObject className="top-[48%] right-[35%]" delay={1.2} x={15} y={-10}>
        <PenSquare className="w-8 h-8 md:w-12 md:h-12" />
      </FloatingObject>

      {/* Background Objects - Bottom Area */}
      <FloatingObject className="top-[65%] left-[22%]" delay={1.4} x={-15} y={15}>
        <BookOpen className="w-10 h-10 md:w-14 md:h-14" />
      </FloatingObject>
      <FloatingObject className="top-[70%] right-[25%]" delay={1.6} x={10} y={-15}>
        <Newspaper className="w-8 h-8 md:w-12 md:h-12" />
      </FloatingObject>
      <FloatingObject className="top-[75%] left-[40%]" delay={1.8} x={-10} y={20}>
        <FileCheck className="w-9 h-9 md:w-13 md:h-13" />
      </FloatingObject>
      <FloatingObject className="top-[68%] right-[40%]" delay={2.0} x={15} y={-12}>
        <Brain className="w-8 h-8 md:w-12 md:h-12" />
      </FloatingObject>
      <FloatingObject className="top-[80%] left-[30%]" delay={2.2} x={12} y={-15}>
        <PenSquare className="w-10 h-10 md:w-14 md:h-14" />
      </FloatingObject>
      <FloatingObject className="top-[85%] right-[32%]" delay={2.4} x={-12} y={18}>
        <BookOpen className="w-8 h-8 md:w-12 md:h-12" />
      </FloatingObject>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mx-auto w-full relative z-10"
      >
        <h1 className="mb-6">
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-black font-heading">
          🤖 AI-Powered
          </span>
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-yellow-500 font-heading mt-2">
            UPSC Mains
          </span>
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-black font-heading mt-2">
            Answer Evaluation
          </span>
          <span className="block text-lg sm:text-xl md:text-2xl lg:text-4xl font-medium mt-4 sm:mt-6 lg:mt-8 text-black font-heading">
            ⚡ Instant Feedback. Improve Faster.
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 lg:mb-12 text-muted-foreground leading-relaxed max-w-2xl mx-auto px-2">
          Upload your answer, get AI-driven insights, and improve faster. No waiting. No bias. Just better answers.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-xl mx-auto px-4 sm:px-0">
          <WiggleButton 
            onClick={handleTelegramJoin}
            size="lg" 
            initialDelay={1.5}
            className="bg-primary hover:bg-primary/90 text-white text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 rounded-full w-full sm:w-auto"
          >
            Join Telegram Waitlist
          </WiggleButton>
          <Button
            variant="outline"
            size="lg"
            onClick={signInWithGoogle}
            className="font-medium text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 rounded-full w-full sm:w-auto border-2 border-black hover:bg-black hover:text-white transition-colors"
          >
            Login
          </Button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-12 flex flex-col items-center gap-3 cursor-pointer z-10"
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
