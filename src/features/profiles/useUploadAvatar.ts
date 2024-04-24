import { useMutation } from "@tanstack/react-query";
import { uploadAvatar as apiUploadAvatar } from "@/services/apiProfiles";
import { useToast } from "@/ui/use-toast";

export const useUploadAvatar = () => {
    const { toast } = useToast();

    const { mutate: uploadAvatar, isPending: isLoading } = useMutation({
        mutationFn: (avatarFile: File) => apiUploadAvatar(avatarFile),
        onError: () =>
            toast({
                variant: "destructive",
                description: "an error occurred while uploading your avatar",
            }),
    });

    return { uploadAvatar, isLoading };
};
