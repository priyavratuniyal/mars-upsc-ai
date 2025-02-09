import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertWaitlistSchema } from "@shared/schema";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function WaitlistForm() {
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(insertWaitlistSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: { email: string }) => {
    try {
      await apiRequest("POST", "/api/waitlist", data);
      toast({
        title: "Success!",
        description: "You've been added to the waitlist",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to join waitlist",
        variant: "destructive",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full max-w-md mx-auto">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input 
                  placeholder="Enter your email" 
                  className="w-full p-3" 
                  type="email"
                  {...field} 
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Join Waitlist
        </Button>
      </form>
    </Form>
  );
}
