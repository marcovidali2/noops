import { getLikes } from "@/services/apiLikes";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "sonner";

export const useLikes = (postId: string) => {
    const {
        data: likes,
        isLoading,
        error,
    } = useQuery({
        queryFn: () => getLikes(postId),
        queryKey: ["likes", postId],
    });

    useEffect(() => {
        if (error) toast.error("an error occured while fetching likes");
    }, [error]);

    return { likes, isLoading };
};
