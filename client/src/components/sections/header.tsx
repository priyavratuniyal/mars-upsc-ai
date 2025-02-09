import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { signInWithGoogle } from "@/lib/firebase";
import { Link } from "wouter";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="w-[80%] mx-auto bg-background/95 backdrop-blur-sm rounded-lg border-4 border-grey-100 shadow-lg">
          <div className="flex items-center justify-between px-6 h-16">
            <div className="flex items-center gap-2">
              <Link href="/">
                <a className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-8 h-8"
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
                  <span className="text-2xl font-bold font-heading">MARS</span>
                </a>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/about">
                <a className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
              </Link>
              <Button
                variant="outline"
                onClick={signInWithGoogle}
                className="font-medium rounded-full"
              >
                Login
              </Button>
              <Button className="flex items-center gap-2 font-medium rounded-full">
                <Send className="h-4 w-4" />
                Join Telegram
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}