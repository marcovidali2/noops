import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getUser } from "../../services/apiAuth";
import { getProfile } from "../../services/apiProfiles";
import { User } from "@supabase/supabase-js";
import { useToast } from "@/ui/use-toast";

export const useUserProfile = () => {
    const { toast } = useToast();

    const {
        data: profile,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["profile"],
        queryFn: async () => {
            const { id } = (await getUser()) as User;
            return await getProfile(id);
        },
    });

    useEffect(() => {
        if (error)
            toast({
                variant: "destructive",
                description: "an error occured while fetching your profile",
            });
    }, [error, toast]);

    return { profile, isLoading };
};
