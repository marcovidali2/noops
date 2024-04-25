import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProfile as apiCreateProfile } from "@/services/apiProfiles";
import { useNavigate } from "react-router-dom";
import { Tables } from "@/types";
import { toast } from "sonner";

export const useCreateProfile = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { mutate: createProfile, isPending } = useMutation({
        mutationFn: (profile: Tables<"profiles">) => apiCreateProfile(profile),
        onError: () =>
            toast.error("an error occurred while creating your profile"),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["userProfile"] });
            navigate("/");
        },
    });

    return { createProfile, isPending };
};
