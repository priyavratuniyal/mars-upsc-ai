import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema, insertAnswerSchema } from "@shared/schema";
import { ZodError } from "zod";
import type { Request as ExpressRequest } from "express";
import type { Session } from "express-session";

// Extend Express Request type to include session
interface Request extends ExpressRequest {
  session: Session & {
    userId?: number;
  };
}

// Mock evaluation function to replace OpenAI
async function mockEvaluateAnswer(answer: string) {
  return {
    evaluation: "This is a mock evaluation response. OpenAI integration is currently disabled.",
    score: 7.5,
    feedback: "Mock feedback: Good attempt! Consider adding more specific examples."
  };
}

export function registerRoutes(app: Express) {
  // Waitlist endpoint
  app.post("/api/waitlist", async (req, res) => {
    try {
      const data = insertWaitlistSchema.parse(req.body);
      await storage.addToWaitlist(data);
      res.json({ success: true });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ error: error.errors });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });

  // Get user's answers
  app.get("/api/answers", async (req: Request, res) => {
    const userId = req.session?.userId;
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const answers = await storage.getAnswersByUserId(userId);
    res.json(answers);
  });

  // Submit answer for evaluation
  app.post("/api/answers", async (req: Request, res) => {
    const userId = req.session?.userId;
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    try {
      const data = insertAnswerSchema.parse({ ...req.body, userId });

      // Use mock evaluation instead of OpenAI
      const { evaluation, score, feedback } = await mockEvaluateAnswer(data.answer);
      
      const answer = await storage.createAnswer({
        ...data,
        evaluation,
        score,
        feedback,
      });

      res.json(answer);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ error: error.errors });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}