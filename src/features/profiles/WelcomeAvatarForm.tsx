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
import { useUploadAvatar } from "./useUploadAvatar";
import { IoReload } from "react-icons/io5";

const AVATARS_BUCKET_URL = `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/avatars/`;

const formSchema = z.object({
    avatar: z.instanceof(FileList),
});

const WelcomeAvatarForm = () => {
    const { setAvatar } = useProfileStore();
    const { uploadAvatar, isLoading } = useUploadAvatar();

    const navigate = useNavigate();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            avatar: "",
        },
    });

    const avatarRef = form.register("avatar");

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        const { avatar } = values;

        if (avatar.length === 1) {
            uploadAvatar(avatar[0], {
                onSuccess: (avatar) => {
                    setAvatar(AVATARS_BUCKET_URL + avatar.path);
                    navigate("/welcome/submit");
                },
            });
        } else {
            setAvatar(AVATARS_BUCKET_URL + "default");
            navigate("/welcome/submit");
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="avatar"
                    render={() => (
                        <FormItem>
                            <FormLabel>avatar (optional)</FormLabel>
                            <FormControl>
                                <Input
                                    type="file"
                                    accept="image/png, image/jpeg"
                                    disabled={isLoading}
                                    {...avatarRef}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                ></FormField>

                <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading && (
                        <IoReload className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    submit()
                </Button>
            </form>
        </Form>
    );
};

export default WelcomeAvatarForm;
