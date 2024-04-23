import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/apiAuth";
import { useEffect } from "react";
import { useToast } from "@/ui/use-toast";

export const useUser = () => {
    const { toast } = useToast();

    const {
        isLoading,
        data: user,
        error,
    } = useQuery({
        queryKey: ["user"],
        queryFn: getUser,
    });

    useEffect(() => {
        if (error)
            toast({
                variant: "destructive",
                description: "an error occured while fetching your user",
            });
    }, [error, toast]);

    return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
};
