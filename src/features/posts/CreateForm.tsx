import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/ui/form";
import { Input } from "@/ui/input";
import { Button } from "@/ui/button";
import { Textarea } from "@/ui/textarea";
import { useCreatePost } from "./useCreatePost";
import { useUploadImage } from "./useUploadImage";
import { IoReload } from "react-icons/io5";
import { Tables } from "@/types";
import { Select, SelectItem } from "@/ui/select";
import {
    SelectContent,
    SelectGroup,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/ui/select";
import { languages } from "@/consts";

import SwitchWrapper from "@/ui/SwitchWrapper";

const IMAGES_BUCKET_URL = `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/images/`;

type FieldTypes = "title" | "content" | "code" | "language" | "image";
const formSchema = z
    .object({
        title: z.string(),
        content: z.string(),
        code: z.string(),
        language: z.string(),
        image: z.instanceof(FileList),
    })
    .partial();

const CreateForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            content: "",
            code: "",
            language: "",
            image: undefined,
        },
    });

    const imageRef = form.register("image");

    const { createPost, isLoading: isLoadingPost } = useCreatePost();
    const { uploadImage, isLoading: isLoadingImage } = useUploadImage();
    const isLoading = isLoadingPost || isLoadingImage;

    const [showTitleContent, setShowTitleContent] = useState(false);
    const [showCode, setShowCode] = useState(false);
    const [showImage, setShowImage] = useState(false);

    const toggleTitleContent = () => {
        setShowTitleContent(!showTitleContent);
    };

    const toggleCode = () => {
        setShowCode(!showCode);
    };

    const toggleImage = () => {
        setShowImage(!showImage);
    };

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        const { title, content, code, language, image } = values;

        // handling not filled fileds
        const errorFields: FieldTypes[] = [];

        if (showTitleContent && !title) errorFields.push("title");
        if (showTitleContent && !content) errorFields.push("content");
        if (showCode && !code) errorFields.push("code");
        if (showCode && !language) errorFields.push("language");
        if (showImage && image!.length === 0) errorFields.push("image");

        if (errorFields.length > 0) {
            for (const field of errorFields) {
                form.setError(field, {});
            }

            return;
        }

        // if image, upload it
        if (showImage)
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
                image: null,
            };

            createPost(post as Tables<"posts">);
        }
    };

    return (
        <div className="space-y-4">
            <h1>create a post</h1>

            <div className="space-y-2">
                <SwitchWrapper
                    checked={showTitleContent}
                    onCheckedChange={toggleTitleContent}
                >
                    title and content
                </SwitchWrapper>
                <SwitchWrapper checked={showCode} onCheckedChange={toggleCode}>
                    code
                </SwitchWrapper>
                <SwitchWrapper
                    checked={showImage}
                    onCheckedChange={toggleImage}
                >
                    image
                </SwitchWrapper>
            </div>

            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                >
                    {showTitleContent && (
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>title</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="javascript sucks"
                                            type="text"
                                            disabled={isLoading}
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        ></FormField>
                    )}

                    {showTitleContent && (
                        <FormField
                            control={form.control}
                            name="content"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>content</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            className="resize-none"
                                            placeholder="did you know that 0.1 + 0.2 is equal to 0.3...4? why is javascript so bad?"
                                            rows={10}
                                            disabled={isLoading}
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        ></FormField>
                    )}

                    {showCode && (
                        <>
                            <FormField
                                control={form.control}
                                name="code"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>code</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                className="resize-none"
                                                placeholder="console.log(0.1 + 0.2);"
                                                rows={10}
                                                disabled={
                                                    isLoadingPost ||
                                                    isLoadingImage
                                                }
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            ></FormField>

                            <FormField
                                control={form.control}
                                name="language"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>language</FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue placeholder="select the code language" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectLabel>
                                                            languages
                                                        </SelectLabel>
                                                        {languages.map(
                                                            (language) => (
                                                                <SelectItem
                                                                    key={
                                                                        language
                                                                    }
                                                                    value={
                                                                        language
                                                                    }
                                                                >
                                                                    {language}
                                                                </SelectItem>
                                                            ),
                                                        )}
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                    </FormItem>
                                )}
                            ></FormField>
                        </>
                    )}

                    {showImage && (
                        <FormField
                            control={form.control}
                            name="image"
                            render={() => (
                                <FormItem>
                                    <FormLabel>image</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="file"
                                            accept="image/png, image/jpeg"
                                            disabled={isLoading}
                                            {...imageRef}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        ></FormField>
                    )}

                    <Button
                        type="submit"
                        className="w-full"
                        disabled={
                            isLoadingPost ||
                            isLoadingImage ||
                            (!showTitleContent && !showCode && !showImage)
                        }
                    >
                        {isLoading && (
                            <IoReload className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        create()
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default CreateForm;
