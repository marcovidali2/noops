import { useParams } from "react-router-dom";
import { usePost } from "./usePost";
import { CardDescription, CardTitle } from "@/ui/card";
import { CodeBlock } from "react-code-block";
import { Avatar, AvatarImage } from "@/ui/avatar";
import { useEffect, useRef } from "react";

import FullPageSpinner from "@/ui/FullPageSpinner";

const FullPost = () => {
    const { postId } = useParams();
    const { post, isLoading } = usePost(postId as unknown as number);
    const topRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (topRef)
            topRef.current?.scrollIntoView({
                block: "start",
            });
    }, [topRef]);

    if (isLoading) return <FullPageSpinner />;

    return (
        <div className="space-y-4" ref={topRef}>
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

                    <CardDescription>{post.content}</CardDescription>
                </div>
            )}

            {post.code && (
                <CodeBlock language={post.language ?? ""} code={post.code}>
                    <CodeBlock.Code className="rounded-xl bg-primary-foreground p-6 shadow-lg">
                        <CodeBlock.LineContent className="overflow-scroll">
                            <CodeBlock.Token />
                        </CodeBlock.LineContent>
                    </CodeBlock.Code>
                </CodeBlock>
            )}

            {post.image && <img src={post.image} className="rounded-lg" />}
        </div>
    );
};

export default FullPost;
