import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUsernames } from "@/services/apiProfiles";
import { toast } from "sonner";

export const useUsernames = () => {
    const {
        data: usernames,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["usernames"],
        queryFn: getUsernames,
    });

    useEffect(() => {
        if (error) toast.error("an error occured while fetching the usernames");
    }, [error]);

    return { usernames, isLoading };
};
