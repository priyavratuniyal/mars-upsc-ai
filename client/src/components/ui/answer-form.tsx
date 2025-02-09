import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface AnswerFormProps {
  onSubmit: (data: { question: string; answer: string }) => void;
  isLoading?: boolean;
}

export function AnswerForm({ onSubmit, isLoading }: AnswerFormProps) {
  const form = useForm({
    defaultValues: {
      question: "",
      answer: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">
        <FormField
          control={form.control}
          name="question"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-base">Question</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter your UPSC question here..."
                  className="w-full min-h-[100px] p-3 resize-y"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="answer"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-base">Your Answer</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Write your answer here..."
                  className="w-full min-h-[200px] p-3 resize-y"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full sm:w-auto min-w-[200px]"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Evaluating...
            </>
          ) : (
            "Evaluate Answer"
          )}
        </Button>
      </form>
    </Form>
  );
}
