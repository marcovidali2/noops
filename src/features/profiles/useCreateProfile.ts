import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProfile as apiCreateProfile } from "@/services/apiProfiles";
import { toast } from "sonner";
import { Tables } from "@/types";

export const useCreateProfile = () => {
    const queryClient = useQueryClient();

    const { mutate: createProfile, isPending } = useMutation({
        mutationFn: (profile: Tables<"profiles">) => apiCreateProfile(profile),
        onError: () =>
            toast.error("an error occurred while creating your profile"),
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ["userProfile"] });
        },
    });

    return { createProfile, isPending };
};
