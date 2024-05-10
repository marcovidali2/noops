import { getPost } from "@/services/apiPosts";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "sonner";

export const usePost = (postId: number) => {
    const {
        data: post,
        isLoading,
        error,
    } = useQuery({
        queryFn: () => getPost(postId),
        queryKey: ["post", postId],
    });

    useEffect(() => {
        if (error) toast.error("an error occured while fetching post");
    }, [error]);

    return { post, isLoading };
};
