import {
  type User,
  type InsertUser,
  type Answer,
  type InsertAnswer,
  type InsertWaitlist,
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByFirebaseId(firebaseId: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getAnswersByUserId(userId: number): Promise<Answer[]>;
  createAnswer(answer: InsertAnswer & {
    evaluation?: string | null;
    score?: number | null;
    feedback?: string | null;
  }): Promise<Answer>;
  addToWaitlist(data: InsertWaitlist): Promise<void>;
}

// Temporary in-memory storage implementation
export class InMemoryStorage implements IStorage {
  private users: User[] = [];
  private answers: Answer[] = [];
  private waitlist: InsertWaitlist[] = [];
  private nextUserId = 1;
  private nextAnswerId = 1;

  async getUser(id: number): Promise<User | undefined> {
    return this.users.find(u => u.id === id);
  }

  async getUserByFirebaseId(firebaseId: string): Promise<User | undefined> {
    return this.users.find(u => u.firebaseId === firebaseId);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const user: User = {
      id: this.nextUserId++,
      ...insertUser
    };
    this.users.push(user);
    return user;
  }

  async getAnswersByUserId(userId: number): Promise<Answer[]> {
    return this.answers.filter(a => a.userId === userId);
  }


  async createAnswer(
    answer: InsertAnswer & {
      evaluation?: string | null;
      score?: number | null;
      feedback?: string | null;
    }
  ): Promise<Answer> {
    const newAnswer: Answer = {
      id: this.nextAnswerId++,
      userId: answer.userId ?? null, // Ensure userId is explicitly set to null if undefined
      ...answer,
      evaluation: answer.evaluation || null,
      score: answer.score || null,
      feedback: answer.feedback || null,
      createdAt: new Date(),
    };
    this.answers.push(newAnswer);
    return newAnswer;
  }

  async addToWaitlist(data: InsertWaitlist): Promise<void> {
    this.waitlist.push(data);
  }
}

// Export an instance of InMemoryStorage instead of DatabaseStorage
export const storage = new InMemoryStorage();