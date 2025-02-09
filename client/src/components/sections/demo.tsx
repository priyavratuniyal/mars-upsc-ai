import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Demo() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-heading">
          See How It Works
        </h2>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            {/* Placeholder for the demo gif/video */}
            <div className="aspect-video bg-muted flex items-center justify-center">
              <p className="text-muted-foreground">Application Demo</p>
            </div>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-lg text-muted-foreground">
              Get instant, AI-powered feedback on your UPSC answers. Our system analyzes your responses 
              for content accuracy, structure, and presentation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
