import { getAllPosts } from "@/services/apiPosts";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "sonner";

export const usePosts = () => {
    const {
        data: posts,
        isLoading,
        error,
    } = useQuery({
        queryFn: getAllPosts,
        queryKey: ["posts"],
    });

    useEffect(() => {
        if (error) toast.error("an error occured while fetching posts");
    }, [error]);

    return { posts, isLoading };
};
