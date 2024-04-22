import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/ui/form";
import { Input } from "@/ui/input";
import { Button } from "@/ui/button";
import { useJoin } from "./useJoin";
import { ReloadIcon } from "@radix-ui/react-icons";

const formSchema = z.object({
    email: z.string().email({
        message: "invalid email address",
    }),
});

const JoinForm = () => {
    const { join, isLoading } = useJoin();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        const { email } = values;
        join(email);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>email</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="myemail@mydomain.com"
                                    type="email"
                                    disabled={isLoading}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                ></FormField>

                <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading && (
                        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    join()
                </Button>
            </form>
        </Form>
    );
};

export default JoinForm;
