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
import { Textarea } from "@/ui/textarea";
import { useCreatePost } from "./useCreatePost";
import { useUploadImage } from "./useUploadImage";
import { IoReload } from "react-icons/io5";
import { Tables } from "@/types";

const IMAGES_BUCKET_URL = `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/images/`;

const formSchema = z
    .object({
        title: z.string(),
        content: z.string(),
        code: z.string(),
        image: z.instanceof(FileList),
    })
    .partial()
    .refine((data) => data.content || data.code || data.image!.length > 0, {
        message: "at least one field (apart from the title) must be filled in",
        path: ["content", "code", "image"],
    });

const CreateForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });
    const imageRef = form.register("image");
    const { createPost, isLoading: isLoadingPost } = useCreatePost();
    const { uploadImage, isLoading: isLoadingImage } = useUploadImage();

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        const { image } = values;

        if (image!.length > 0)
            uploadImage(image![0], {
                onSuccess: (data) => {
                    const post = {
                        ...values,
                        image: IMAGES_BUCKET_URL + data.path,
                    };

                    createPost(post as Tables<"posts">);
                },
            });
        else {
            const post = {
                ...values,
                image: "",
            };

            createPost(post as Tables<"posts">);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>title (optional)</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="about javascript additions"
                                    disabled={isLoadingPost || isLoadingImage}
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                ></FormField>

                <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>content (optional)</FormLabel>
                            <FormControl>
                                <Textarea
                                    className="resize-none"
                                    placeholder="did you know that 0.1 + 0.2 is equal to 0.3...4? why is javascript so bad?"
                                    rows={10}
                                    disabled={isLoadingPost || isLoadingImage}
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                ></FormField>

                <FormField
                    control={form.control}
                    name="code"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>code (optional)</FormLabel>
                            <FormControl>
                                <Textarea
                                    className="resize-none"
                                    placeholder="console.log(0.1 + 0.2);"
                                    rows={10}
                                    disabled={isLoadingPost || isLoadingImage}
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                ></FormField>

                <FormField
                    control={form.control}
                    name="image"
                    render={() => (
                        <FormItem>
                            <FormLabel>image (optional)</FormLabel>
                            <FormControl>
                                <Input
                                    type="file"
                                    accept="image/png, image/jpeg"
                                    disabled={isLoadingPost || isLoadingImage}
                                    {...imageRef}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                ></FormField>

                <FormMessage />

                <Button
                    type="submit"
                    className="w-full"
                    disabled={isLoadingPost || isLoadingImage}
                >
                    {isLoadingPost ||
                        (isLoadingImage && (
                            <IoReload className="mr-2 h-4 w-4 animate-spin" />
                        ))}
                    create()
                </Button>
            </form>
        </Form>
    );
};

export default CreateForm;
