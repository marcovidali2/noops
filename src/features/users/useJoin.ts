import { useMutation } from "@tanstack/react-query";
import { join as apiJoin } from "../../services/apiUsers";
import { toast } from "sonner";

export const useJoin = () => {
    const { mutate: join, isPending: isLoading } = useMutation({
        mutationFn: (email: string) => apiJoin(email),
        onSuccess: () => toast.success("a verification email was sent to you"),
        onError: () => toast.error("an error occurred while joining"),
    });

    return { join, isLoading };
};
