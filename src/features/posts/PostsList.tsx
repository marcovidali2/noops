import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/ui/card";
import { usePosts } from "./usePosts";
import { CodeBlock } from "react-code-block";
import { Avatar } from "@/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

const PostsList = () => {
    const { posts, isLoading } = usePosts();

    if (isLoading) return "Loading...";

    // fixing code too long
    posts?.map(
        (post) =>
            (post.code = post.code
                ? post.code.split("\n").splice(0, 3).join("\n")
                : post.code),
    );

    return (
        <div className="w-full p-4 sm:w-[36rem]">
            <div className="flex flex-col gap-4">
                {posts?.map((post) => (
                    <Card key={post.id} className="w-full">
                        <CardHeader className="flex flex-col">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <Avatar>
                                        <AvatarImage
                                            src={post.creator.avatar}
                                            alt={post.creator.name}
                                        />
                                    </Avatar>

                                    <span>{post.creator.name}</span>
                                </div>

                                <span className="text-muted-foreground">
                                    {new Date(
                                        post.createdAt,
                                    ).toLocaleDateString()}
                                </span>
                            </div>

                            {(post.title || post.content) && (
                                <div className="flex flex-col gap-2">
                                    {post.title && (
                                        <CardTitle>{post.title}</CardTitle>
                                    )}
                                    {post.content && (
                                        <CardDescription className="line-clamp-3">
                                            {post.content}
                                        </CardDescription>
                                    )}
                                </div>
                            )}
                        </CardHeader>

                        {post.code && (
                            <CardContent className="text-sm sm:text-base">
                                <CodeBlock
                                    code={post.code}
                                    language={post.language ?? ""}
                                >
                                    <CodeBlock.Code className="rounded-xl bg-primary-foreground p-6 shadow-lg">
                                        <CodeBlock.LineContent className="overflow-scroll">
                                            <CodeBlock.Token />
                                        </CodeBlock.LineContent>
                                    </CodeBlock.Code>
                                </CodeBlock>
                            </CardContent>
                        )}

                        {post.image && (
                            <img
                                src={post.image}
                                className="h-[38rem] w-full rounded-b-lg object-cover"
                            />
                        )}
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default PostsList;
