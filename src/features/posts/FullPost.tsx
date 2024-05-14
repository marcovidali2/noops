import { useParams } from "react-router-dom";
import { usePost } from "./usePost";
import { useEffect, useRef } from "react";

import FullPageSpinner from "@/ui/FullPageSpinner";
import PostItem from "./PostItem";

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
        <PostItem post={post} full />
    );
};

export default FullPost;
