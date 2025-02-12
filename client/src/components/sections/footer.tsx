import { Mail } from "lucide-react";
import { Link } from "wouter";
import { Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted/30 pt-10 sm:pt-12 md:pt-16">
      {/* Content Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 md:gap-16 justify-items-center text-center">
            {/* Company Column */}
            <div className="space-y-4 sm:space-y-6">
              <h4 className="text-base sm:text-lg font-semibold font-heading">Company</h4>
              <div className="flex flex-col gap-1.5 sm:gap-2">
                <Link href="/about">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </a>
                </Link>
              </div>
            </div>

            {/* Contact Column */}
            <div className="space-y-4 sm:space-y-6">
              <h4 className="text-base sm:text-lg font-semibold font-heading">Contact Us</h4>
              <div className="flex flex-col gap-1.5 sm:gap-2">
                <a
                  href="mailto:support@marsai.in"
                  className="flex items-center justify-center gap-1.5 sm:gap-2 text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  support@marsai.in
                </a>
                <div className="flex items-center justify-center gap-3 sm:gap-4 mt-1 sm:mt-2">
                  <a
                    href="https://twitter.com/marsupsc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors p-1.5"
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
          </div>
        </div>
      </div>

      {/* MARS Background Text */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-muted/30 pointer-events-none" />
        <h2 
          className="text-[35vw] sm:text-[30vw] md:text-[25vw] lg:text-[20vw] font-black text-center font-heading tracking-tighter text-black/10 leading-[0.7] -mb-[0.1em]"
          style={{
            backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.1))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          MARS
        </h2>
      </div>
    </footer>
  );
}
