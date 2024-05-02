import { Tables } from "@/types";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/ui/card";
import { Avatar, AvatarImage } from "@/ui/avatar";
import { CodeBlock } from "react-code-block";
import { Button } from "@/ui/button";
import { IoHeartOutline } from "react-icons/io5";

interface PropTypes {
    post: Tables<"posts">;
}

const truncateCode = (code: string) => {
    const lines = code.split("\n");

    if (lines.length <= 3) {
        return code;
    } else {
        return lines.slice(0, 2).join("\n") + "\n...";
    }
};

const PostItem = ({ post }: PropTypes) => {
    return (
        <Card key={post.id}>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Avatar>
                            <AvatarImage
                                src={post.profile.avatar}
                                alt={post.profile.name}
                            />
                        </Avatar>

                        <span>{post.profile.name}</span>
                    </div>

                    <span className="text-muted-foreground">
                        {new Date(post.createdAt).toLocaleDateString()}
                    </span>
                </div>

                {post.title && (
                    <div className="space-y-2">
                        <CardTitle>{post.title}</CardTitle>

                        <CardDescription className="line-clamp-3">
                            {post.content}
                        </CardDescription>
                    </div>
                )}
            </CardHeader>

            {(post.code || post.image) && (
                <CardContent className="space-y-4">
                    {post.code && (
                        <CodeBlock
                            code={truncateCode(post.code)}
                            language={post.language ?? ""}
                        >
                            <CodeBlock.Code className="rounded-xl bg-primary-foreground p-6 shadow-lg">
                                <CodeBlock.LineContent className="overflow-scroll">
                                    <CodeBlock.Token />
                                </CodeBlock.LineContent>
                            </CodeBlock.Code>
                        </CodeBlock>
                    )}

                    {post.image && (
                        <img
                            src={post.image}
                            className="h-[38rem] w-full rounded-lg object-cover"
                        />
                    )}
                </CardContent>
            )}

            <CardFooter className="flex justify-between">
                <Button variant="outline" className="space-x-2 rounded-full">
                    <IoHeartOutline />
                    <span>64</span>
                </Button>

                <Button variant="outline" className="rounded-full">
                    view full post
                </Button>
            </CardFooter>
        </Card>
    );
};

export default PostItem;
