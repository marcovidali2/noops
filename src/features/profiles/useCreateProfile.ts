import { useMutation } from "@tanstack/react-query";
import { createProfile as apiCreateProfile } from "@/services/apiProfiles";
import { useNavigate } from "react-router-dom";
import { Tables } from "@/types";
import { useToast } from "@/ui/use-toast";

export const useCreateProfile = () => {
    const { toast } = useToast();

    const navigate = useNavigate();

    const { mutate: createProfile, isPending } = useMutation({
        mutationFn: (profile: Tables<"profiles">) => apiCreateProfile(profile),
        onError: () =>
            toast({
                variant: "destructive",
                description: "an error occurred while creating your profile",
            }),
        onSuccess: () => navigate("/"),
    });

    return { createProfile, isPending };
};
