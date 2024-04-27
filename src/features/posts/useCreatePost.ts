import { useMutation } from "@tanstack/react-query";
import { createPost as apiCreatePost } from "@/services/apiPosts";
import { useNavigate } from "react-router-dom";
import { Tables } from "@/types";
import { toast } from "sonner";

export const useCreatePost = () => {
    const navigate = useNavigate();

    const { mutate: createPost, isPending: isLoading } = useMutation({
        mutationFn: (post: Tables<"posts">) => apiCreatePost(post),
        onError: () => toast.error("an error occurred while creting your post"),
        onSuccess: () => {
            navigate("/");
        },
    });

    return { createPost, isLoading };
};
