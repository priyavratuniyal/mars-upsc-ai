import { apiRequest } from "./queryClient";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024
export async function evaluateAnswer(question: string, answer: string) {
  const response = await apiRequest("POST", "/api/evaluate", {
    question,
    answer,
  });
  return response.json();
}
