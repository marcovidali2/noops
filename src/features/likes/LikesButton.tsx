import { Button } from "@/ui/button";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useLikes } from "./useLikes";
import { useHasLiked } from "./useHasLiked";

import Spinner from "@/ui/Spinner";

interface PropTypes {
    postId: number;
}

const LikesButton = ({ postId }: PropTypes) => {
    const { likes, isLoading: isLoadingLikes } = useLikes(postId);
    const { hasLiked, isLoading: isLoadingLiked } = useHasLiked(postId);
    const isLoading = isLoadingLikes || isLoadingLiked;

    if (isLoading) return <Spinner />;

    return (
        <Button variant="outline" className="space-x-2 rounded-full">
            {hasLiked ? (
                <IoHeart className="fill-destructive" />
            ) : (
                <IoHeartOutline />
            )}
            <span>{likes!.length}</span>
        </Button>
    );
};

export default LikesButton;
