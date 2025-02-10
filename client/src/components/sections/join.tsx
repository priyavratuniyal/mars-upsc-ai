import { WiggleButton } from "@/components/ui/wiggle-button";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function Join() {
  const handleTelegramJoin = () => {
    window.open("https://t.me/marsupsc", "_blank");
  };

  return (
    <section id="waitlist-form" className="py-16 px-4 bg-gray-50/50">
      <motion.div 
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black font-heading">
          🤝 Join Our Community
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          ✨ Get early access and updates by joining our Telegram group 💬
        </p>
        <WiggleButton 
          onClick={handleTelegramJoin}
          size="lg" 
          initialDelay={0.5}
          className="bg-primary hover:bg-primary/90 text-white font-medium rounded-full h-12 px-8"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          Join Telegram
        </WiggleButton>
      </motion.div>
    </section>
  );
}
