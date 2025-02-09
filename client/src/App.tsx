import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Landing from "@/pages/landing";
import Dashboard from "@/pages/dashboard";
import Evaluate from "@/pages/evaluate";
import About from "@/pages/about";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";
import { auth } from "@/lib/firebase";
import { useLocation } from "wouter";

function Router() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user && window.location.pathname !== "/" && window.location.pathname !== "/about") {
        setLocation("/");
      }
    });

    return () => unsubscribe();
  }, [setLocation]);

  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/evaluate" component={Evaluate} />
      <Route path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
