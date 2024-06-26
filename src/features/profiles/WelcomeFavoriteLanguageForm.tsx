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
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/ui/select";

const languages = [
    "javascript",
    "python",
    "java",
    "c",
    "c++",
    "c#",
    "ruby",
    "swift",
    "typescript",
    "go",
    "rust",
    "php",
    "scala",
    "kotlin",
    "perl",
    "lua",
    "html",
    "css",
    "r",
    "sql",
    "bash",
    "assembly",
    "dart",
    "haskell",
    "matlab",
    "objective-c",
    "powershell",
    "groovy",
    "cobol",
    "fortran",
    "lisp",
    "scheme",
    "visual basic",
    "elixir",
    "clojure",
    "erlang",
    "f#",
    "ocaml",
    "pascal",
    "prolog",
    "smalltalk",
    "scratch",
    "racket",
    "forth",
    "perl6",
    "d",
    "abap",
    "apex",
    "arc",
    "awk",
    "brainfuck",
    "chapel",
    "dylan",
    "eiffel",
    "elm",
    "falcon",
    "felix",
    "fantom",
];

const formSchema = z.object({
    favoriteLanguage: z.string().trim().min(1, {
        message: "this field is required",
    }),
});

const WelcomeFavoriteLanguageForm = () => {
    const { setFavoriteLanguage } = useProfileStore();

    const navigate = useNavigate();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            favoriteLanguage: "",
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        const { favoriteLanguage } = values;
        setFavoriteLanguage(favoriteLanguage);
        navigate("/welcome/bio");
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="favoriteLanguage"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>favorite programming language</FormLabel>
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="select your favorite programming language" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>
                                            programming languages
                                        </SelectLabel>
                                        {languages.map((language) => (
                                            <SelectItem
                                                value={language}
                                                key={language}
                                            >
                                                {language}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
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

export default WelcomeFavoriteLanguageForm;
