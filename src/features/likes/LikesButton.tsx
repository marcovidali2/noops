import { Button } from "@/ui/button";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useLikes } from "./useLikes";
import { useHasLiked } from "./useHasLiked";

import Spinner from "@/ui/Spinner";
import { useToggleLike } from "./useToggleLike";

interface PropTypes {
    postId: number;
}

const LikesButton = ({ postId }: PropTypes) => {
    const { likes, isLoading: isLoadingLikes } = useLikes(postId);
    const { hasLiked, isLoading: isLoadingLiked } = useHasLiked(postId);
    const { toggleLike, isLoading: isLoadingToggleLike } =
        useToggleLike(postId);
    const isLoading = isLoadingLikes || isLoadingLiked || isLoadingToggleLike;

    if (isLoading) return <Spinner />;

    const handleClick = () => {
        toggleLike();
    };

    return (
        <Button
            variant="outline"
            className="space-x-2 rounded-full"
            onClick={handleClick}
        >
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
