import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import type { Answer } from "@shared/schema";

export default function Dashboard() {
  const { data: answers, isLoading } = useQuery<Answer[]>({
    queryKey: ["/api/answers"]
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Your Answers</h1>
        <Link href="/evaluate">
          <Button>New Evaluation</Button>
        </Link>
      </div>

      <div className="grid gap-4">
        {answers?.map((answer) => (
          <Card key={answer.id}>
            <CardHeader>
              <CardTitle>{answer.question}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{answer.answer}</p>
              {answer.evaluation && (
                <div>
                  <p className="font-semibold">Score: {answer.score}/100</p>
                  <p className="mt-2">{answer.feedback}</p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
