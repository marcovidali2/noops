import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleLike as apiToggleLike } from "@/services/apiLikes";

export const useToggleLike = (postId: number) => {
    const queryClient = useQueryClient();

    const { mutate: toggleLike, isPending: isLoading } = useMutation({
        mutationFn: () => apiToggleLike(postId),
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ["liked", postId],
            });

            await queryClient.invalidateQueries({
                queryKey: ["likes", postId],
            });
        },
    });

    return { toggleLike, isLoading };
};
