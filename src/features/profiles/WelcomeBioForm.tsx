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
import { Button } from "@/ui/button";
import { useProfileStore } from "./useProfileStore";
import { useNavigate } from "react-router-dom";
import { Textarea } from "@/ui/textarea";

const formSchema = z.object({
    bio: z.string().optional(),
});

const WelcomeBioForm = () => {
    const { setBio } = useProfileStore();

    const navigate = useNavigate();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        const { bio } = values;
        setBio(bio ?? null);
        navigate("/welcome/avatar");
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="bio"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>bio (optional)</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="i try to be a dev"
                                    className="resize-none"
                                    rows={4}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                ></FormField>

                <Button type="submit" className="w-full">
                    next()
                </Button>
            </form>
        </Form>
    );
};

export default WelcomeBioForm;
