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
import { useUsernames } from "./useUsernames";

const formSchema = z.object({
    username: z.string(),
});

const WelcomeUsernameForm = () => {
    const { setUsername } = useProfileStore();
    const { usernames } = useUsernames();

    const navigate = useNavigate();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        const { username } = values;

        const isUsernameAvailable =
            usernames?.filter((_username) => _username === username).length ===
            0;

        if (!isUsernameAvailable)
            return form.setError("username", {
                message: "this username is already in use",
            });

        setUsername(username);
        navigate("/welcome/favorite-language");
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>username</FormLabel>
                            <FormControl>
                                <Input placeholder="anonymous" {...field} />
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

export default WelcomeUsernameForm;
