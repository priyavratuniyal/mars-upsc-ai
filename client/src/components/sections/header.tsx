import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";
import { Menu, Send } from "lucide-react";
import { signInWithGoogle } from "@/lib/firebase";
import { Link } from "wouter";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleTelegramJoin = () => {
    window.open("https://t.me/marsupsc", "_blank");
  };

  const handleAboutClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <div className="w-full sm:w-[95%] md:w-[90%] lg:w-[85%] mx-auto bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/60 rounded-lg border border-gray-200/50 shadow-lg">
          <div className="flex items-center justify-between px-3 sm:px-4 md:px-6 h-14 sm:h-16">
            <div className="flex items-center gap-2">
              <Link href="/">
                <a className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 2c0 0-3 1-6 4c-3 3-5 4.5-7 7s-2.5 3.5-3 5c-.5 1.5-1 3-1 3" />
                    <path d="M20 2c0 0 1 3-2 6c-3 3-4.5 5-7 7s-3.5 2.5-5 3c-1.5.5-3 1-3 1" />
                    <path d="M11 13c-.5.5-2 1-2 1" />
                    <path d="M13 11c-.5.5-1 2-1 2" />
                    <path d="M14 10c-.5.5-1.5 2.5-1.5 2.5" />
                    <path d="M15 9c-.5.5-2 3-2 3" />
                    <path d="M16 8c-.5.5-2.5 3.5-2.5 3.5" />
                    <path d="M17 7c-.5.5-3 4-3 4" />
                    <path d="M18 6c-.5.5-3.5 4.5-3.5 4.5" />
                    <path d="M19 5c-.5.5-4 5-4 5" />
                    <path d="M20 4c-.5.5-4.5 5.5-4.5 5.5" />
                  </svg>
                  <span className="text-lg sm:text-xl md:text-2xl font-bold font-heading">MARS</span>
                </a>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/about">
                <a 
                  className="flex items-center gap-2 text-yellow-500 hover:text-yellow-400 transition-colors"
                  onClick={handleAboutClick}
                >
                  <span>About Us</span>
                </a>
              </Link>
              <Button
                variant="outline"
                onClick={signInWithGoogle}
                className="font-medium rounded-full"
              >
                Login
              </Button>
              <Button 
                onClick={handleTelegramJoin}
                className="flex items-center gap-2 font-medium rounded-full"
              >
                <Send className="h-4 w-4" />
                Join Telegram Waitlist
              </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-10 w-10">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[280px] sm:w-[320px] p-0">
                  <div className="flex flex-col h-full p-4 sm:p-6">
                    <nav className="flex flex-col items-center justify-center h-full space-y-6 sm:space-y-8">
                      <Link href="/about">
                        <a 
                          className="text-xl font-medium hover:text-primary transition-colors"
                          onClick={() => {
                            setIsOpen(false);
                            handleAboutClick();
                          }}
                        >
                          About
                        </a>
                      </Link>
                      <Button
                        variant="outline"
                        onClick={() => {
                          signInWithGoogle();
                          setIsOpen(false);
                        }}
                        className="w-full max-w-[200px] font-medium rounded-full text-sm sm:text-base py-2 sm:py-2.5"
                      >
                        Login
                      </Button>
                      <Button 
                        onClick={() => {
                          handleTelegramJoin();
                          setIsOpen(false);
                        }}
                        className="w-full max-w-[200px] flex items-center justify-center gap-2 font-medium rounded-full text-sm sm:text-base py-2 sm:py-2.5"
                      >
                        <Send className="h-4 w-4" />
                        Join Telegram Waitlist
                      </Button>
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
