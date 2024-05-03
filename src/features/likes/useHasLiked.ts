import { hasLiked as hasLikedApi } from "@/services/apiLikes";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "sonner";

export const useHasLiked = (postId: number) => {
    const {
        data: hasLiked,
        isLoading,
        error,
    } = useQuery({
        queryFn: () => hasLikedApi(postId),
        queryKey: ["liked", postId],
    });

    useEffect(() => {
        if (error) toast.error("an error occured while fetching your like");
    }, [error]);

    return { hasLiked, isLoading };
};
