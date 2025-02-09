import { Mail } from "lucide-react";
import { Link } from "wouter";
import { Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted/30 pt-12 sm:pt-16 relative overflow-hidden">
      <div className="container mx-auto px-6 sm:px-4">
        <div className="max-w-4xl mx-auto mb-40 sm:mb-52">
          <div className="grid grid-cols-3 gap-10 sm:gap-16 justify-items-center text-center">
            {/* Company Column */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold font-heading">Company</h4>
              <div className="flex flex-col gap-2">
                <Link href="/about">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </a>
                </Link>
              </div>
            </div>

            {/* Contact Column */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold font-heading">Contact Us</h4>
              <div className="flex flex-col items-center gap-4">
                <a
                  href="mailto:support@marsai.in"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  support@marsai.in
                </a>
                <div className="flex items-center gap-4">
                  <a
                    href="https://twitter.com/marsupsc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="https://linkedin.com/company/marsupsc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Legal Column */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold font-heading">Legal</h4>
              <div className="flex flex-col gap-2">
                <Link href="/privacy">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </Link>
                <Link href="/terms">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Terms of Service
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Large MARS text with fading design */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-muted/30 pointer-events-none" />
          <h2 
            className="text-[20vw] sm:text-[15vw] font-black text-center font-heading tracking-tighter text-black/20 leading-[0.8] translate-y-[0.1em]"
            style={{
              backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.1))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            MARS
          </h2>
        </div>
      </div>
    </footer>
  );
}
