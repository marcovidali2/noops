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
import { useProfileStore } from "./useProfileStore";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
    name: z.string(),
});

const WelcomeNameForm = () => {
    const { setName } = useProfileStore();

    const navigate = useNavigate();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        const { name } = values;
        setName(name);
        navigate("/welcome/username");
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>name</FormLabel>
                            <FormControl>
                                <Input placeholder="andres freund" {...field} />
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

export default WelcomeNameForm;
