import { getUserPosts } from "@/services/apiPosts";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "sonner";

export const useUserPosts = () => {
    const {
        data: posts,
        isLoading,
        error,
    } = useQuery({
        queryFn: getUserPosts,
        queryKey: ["userPosts"],
    });

    useEffect(() => {
        if (error) toast.error("an error occured while fetching your posts");
    }, [error]);

    return { posts, isLoading };
};
