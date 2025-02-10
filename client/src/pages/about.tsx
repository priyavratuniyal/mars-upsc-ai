import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useLocation } from "wouter";

export default function About() {
  const [, setLocation] = useLocation();

  const handleClose = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen bg-paper relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={handleClose}
        className="absolute top-6 right-6 z-50 hover:bg-accent"
      >
        <X className="h-6 w-6" />
      </Button>

      <main className="container mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto prose prose-lg prose-headings:font-heading font-sans"
        >
          <div className="flex flex-col mb-2">
            <h1 className="text-4xl md:text-5xl font-bold font-heading flex items-center gap-3 mb-0">
              About Us <span className="text-primary">🛡️</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">(We were aspirants once)</p>
          </div>
          <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">From Aspirants to Builders: The Story Behind MARS</h2>
            <p className="leading-relaxed">
            Like many others, we once sat with stacks of books, chasing the UPSC dream. We spent years immersed in polity, history, and ethics—shaping ourselves for a future in governance.<br/><br/>
            But somewhere in the middle of all those long study sessions, something unexpected happened.<br/><br/>
            We realized that while we respected the path, we weren’t truly in love with it. What really set our minds on fire was something else entirely—technology, problem-solving, and building things that could create impact beyond just ourselves.<br/><br/>
            The decision to step away from the UPSC grind wasn’t easy. It felt like leaving behind a battle we had trained for. But once we made that choice, we knew it was the right one. With technology, we could solve real problems in real time. We could build, experiment, and create something that wasn’t just a theoretical answer on paper, but a real solution that could change the way aspirants learn and improve.<br/><br/>
            That’s how MARS was born. We knew the struggles of aspirants firsthand—the frustration of vague feedback, the guesswork of improvement, the sheer loneliness of self-study. And we wanted to fix it with something that felt like a mentor, not just a tool.<br/><br/>
            MARS is more than just an answer evaluation system. It’s our way of bringing tech into a space that desperately needs innovation. It’s proof that sometimes, the right path isn’t the one you first set out on—but the one that truly makes you come alive.</p>
          </section>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">The Problem: UPSC Mains Answer Writing is Hard</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Every serious UPSC aspirant knows this: writing great answers is half the battle. You spend hours structuring responses, 
              trying to balance clarity, depth, and precision—only to wonder:
            </p>
            <div className="pl-6 mb-8 border-l-4 border-primary/20">
              <p className="text-lg mb-2">❓ Is my answer actually good?</p>
              <p className="text-lg mb-2">❓ Am I writing like a topper, or just filling pages?</p>
              <p className="text-lg">❓ Would an evaluator reward this or tear it apart?</p>
            </div>
            <p className="text-lg text-muted-foreground mb-4">
              Coaching institutes give vague feedback. Peer reviews are inconsistent. Self-evaluation? That's a shot in the dark.
            </p>
            <p className="text-lg text-muted-foreground">
              That's why we built MARS (Mains Answer Review System)—an AI-powered evaluator designed for UPSC aspirants who want real, 
              structured feedback on their answers.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">What We Believe</h2>
            <div className="space-y-4">
              <p className="text-lg"><strong>1. Feedback should be instant.</strong> Waiting for days? That's ancient history.</p>
              <p className="text-lg"><strong>2. Evaluation should be objective.</strong> No bias, no mood swings—just structured insights.</p>
              <p className="text-lg"><strong>3. Every aspirant should improve fast.</strong> Not after 50 test papers—after just 5.</p>
            </div>
            <p className="text-lg text-muted-foreground mt-6">
              We're not here to replace human evaluators. We're here to make self-improvement faster, smarter, and stress-free.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">How MARS* Works</h2>
            <div className="space-y-4">
              <p className="text-lg">1. Upload your handwritten or typed answer</p>
              <p className="text-lg">2. MARS reads, analyzes, and evaluates</p>
              <p className="text-lg">3. Get structured feedback—strengths, weaknesses, and improvement areas</p>
            </div>
            <p className="text-lg text-muted-foreground mt-6">
              No jargon. No fluff. Just real, actionable insights—so you write better answers every single day.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <p className="text-lg text-muted-foreground mb-6">
              We're a team of UPSC nerds, engineers, and AI tinkerers who love solving hard problems. We're the kind of people who:
            </p>
            <div className="space-y-3 mb-6">
              <p className="text-lg">• Overanalyze essay topics at 2 AM</p>
              <p className="text-lg">• Think about scaling UPSC prep like a startup scales growth</p>
              <p className="text-lg">• Believe tech can bridge the gap between effort and excellence</p>
            </div>
            <p className="text-lg text-muted-foreground">
              We've spent months training MARS to think like a real evaluator—so you don't have to wonder what works. 
              Just write, get feedback, and level up.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">The Mission</h2>
            <p className="text-lg text-muted-foreground mb-4">
              We want to make UPSC Mains answer writing a skill—not a gamble.
            </p>
            <p className="text-lg text-muted-foreground">
              Because writing well isn't just about exams—it's about thinking clearly. And clear thinkers build the future.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Try MARS. Tell us what sucks. Help us make it better. We're all in this together.
            </p>
            <div className="space-y-3">
              <p className="text-lg">Email: <a href="mailto:hello@marsupsc.in" className="text-primary hover:underline">hello@marsupsc.in</a></p>
              <p className="text-lg">Twitter: <a href="https://twitter.com/marsupsc" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@marsupsc</a></p>
            </div>
          </section>

          <section className="mb-16">
            <p className="text-xl mb-6">*MARS: Mains Answer Review System</p>
          </section>
        </motion.div>
      </main>
    </div>
  );
}
