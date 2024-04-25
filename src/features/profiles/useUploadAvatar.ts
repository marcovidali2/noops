import { useMutation } from "@tanstack/react-query";
import { uploadAvatar as apiUploadAvatar } from "@/services/apiProfiles";
import { toast } from "sonner";

export const useUploadAvatar = () => {
    const { mutate: uploadAvatar, isPending: isLoading } = useMutation({
        mutationFn: (avatarFile: File) => apiUploadAvatar(avatarFile),
        onError: () =>
            toast.error("an error occurred while uploading your avatar"),
    });

    return { uploadAvatar, isLoading };
};
