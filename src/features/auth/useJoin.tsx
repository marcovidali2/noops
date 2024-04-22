import { useMutation } from "@tanstack/react-query";
import { join as apiJoin } from "../../services/apiAuth";
import { useToast } from "@/ui/use-toast";

export const useJoin = () => {
    const { toast } = useToast();

    const { mutate: join, isPending: isLoading } = useMutation({
        mutationFn: (email: string) => apiJoin(email),
        onSuccess: () =>
            toast({
                description: "a verification email was sent to you",
            }),
        onError: () =>
            toast({
                variant: "destructive",
                description: "an error occurred while joining",
            }),
    });

    return { join, isLoading };
};
