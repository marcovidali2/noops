import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUsernames } from "@/services/apiProfiles";
import { useToast } from "@/ui/use-toast";

export const useUsernames = () => {
    const { toast } = useToast();

    const {
        data: usernames,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["usernames"],
        queryFn: getUsernames,
    });

    useEffect(() => {
        if (error)
            toast({
                variant: "destructive",
                description: "an error occured while fetching the usernames",
            });
    }, [error, toast]);

    return { usernames, isLoading };
};
