import { useMutation } from "@tanstack/react-query";
import { uploadImage as apiUploadImage } from "@/services/apiPosts";
import { toast } from "sonner";

export const useUploadImage = () => {
    const { mutate: uploadImage, isPending: isLoading } = useMutation({
        mutationFn: (image: File) => apiUploadImage(image),
        onError: () =>
            toast.error("an error occurred while uploading your image"),
    });

    return { uploadImage, isLoading };
};
