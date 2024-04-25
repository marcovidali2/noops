import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getUser } from "../../services/apiUsers";
import { getProfile } from "../../services/apiProfiles";
import { User } from "@supabase/supabase-js";
import { toast } from "sonner";

export const useUserProfile = () => {
    const {
        data: profile,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["userProfile"],
        queryFn: async () => {
            const { id } = (await getUser()) as User;
            return await getProfile(id);
        },
    });

    useEffect(() => {
        if (error) toast.error("an error occured while fetching your profile");
    }, [error]);

    return { profile, isLoading };
};
