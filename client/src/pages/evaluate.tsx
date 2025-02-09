import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AnswerForm } from "@/components/ui/answer-form";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function Evaluate() {
  const [isEvaluating, setIsEvaluating] = useState(false);
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: async (data: { question: string; answer: string }) => {
      setIsEvaluating(true);
      const res = await apiRequest("POST", "/api/answers", data);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/answers"] });
      toast({
        title: "Success",
        description: "Your answer has been submitted for evaluation",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit answer",
        variant: "destructive",
      });
    },
    onSettled: () => {
      setIsEvaluating(false);
    },
  });

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8">
      <Card className="w-full max-w-3xl mx-auto">
        <CardContent className="pt-6 p-4 sm:p-6">
          <AnswerForm
            onSubmit={(data) => mutation.mutate(data)}
            isLoading={isEvaluating}
          />
        </CardContent>
      </Card>
    </div>
  );
}
