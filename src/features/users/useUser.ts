import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/apiUsers";
import { useEffect } from "react";
import { toast } from "sonner";

export const useUser = () => {
    const {
        isLoading,
        data: user,
        error,
    } = useQuery({
        queryKey: ["user"],
        queryFn: getUser,
    });

    useEffect(() => {
        if (error) toast.error("an error occured while fetching your user");
    }, [error]);

    return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
};
