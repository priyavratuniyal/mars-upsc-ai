import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  name: text("name").notNull(),
  firebaseId: text("firebase_id").notNull().unique(),
});

export const answers = pgTable("answers", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  question: text("question").notNull(),
  answer: text("answer").notNull(),
  evaluation: text("evaluation"),
  score: integer("score"),
  feedback: text("feedback"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const waitlist = pgTable("waitlist", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  email: true,
  name: true,
  firebaseId: true,
});

export const insertAnswerSchema = createInsertSchema(answers).pick({
  userId: true,
  question: true,
  answer: true,
});

export const insertWaitlistSchema = createInsertSchema(waitlist).pick({
  email: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type InsertAnswer = z.infer<typeof insertAnswerSchema>;
export type InsertWaitlist = z.infer<typeof insertWaitlistSchema>;

export type User = typeof users.$inferSelect;
export type Answer = typeof answers.$inferSelect;
export type Waitlist = typeof waitlist.$inferSelect;
