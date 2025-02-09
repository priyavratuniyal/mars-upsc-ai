import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 font-heading">About MARS UPSC</h1>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 font-heading">Our Mission 🎯</h2>
            <p className="text-lg text-muted-foreground mb-6">
              At MARS UPSC, we're revolutionizing UPSC Mains preparation through cutting-edge AI technology. 
              Our mission is to make high-quality answer evaluation accessible to every UPSC aspirant, 
              ensuring no student's potential is limited by financial constraints.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 font-heading">What Sets Us Apart ✨</h2>
            <div className="grid gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Instant Feedback</h3>
                <p className="text-muted-foreground">
                  No more waiting for days or weeks. Get detailed evaluations within seconds of submission.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Affordable Excellence</h3>
                <p className="text-muted-foreground">
                  Starting at just ₹1, we've made premium answer evaluation accessible to everyone.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">AI-Powered Precision</h3>
                <p className="text-muted-foreground">
                  Our advanced AI system provides consistent, unbiased, and detailed feedback aligned with UPSC standards.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 font-heading">Our Journey 🚀</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Founded by UPSC aspirants who understood the challenges of preparation, 
              MARS UPSC was born from a vision to democratize quality answer writing practice. 
              We've combined years of UPSC expertise with cutting-edge AI technology to create 
              a platform that truly understands and serves aspirants' needs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 font-heading">Join Our Community 🤝</h2>
            <p className="text-lg text-muted-foreground">
              Become part of a growing community of dedicated UPSC aspirants. Share experiences, 
              learn from peers, and grow together on your journey to success.
            </p>
          </section>
        </motion.div>
      </main>
    </div>
  );
}
