import { Button } from "@/ui/button";
import { IoHeartOutline } from "react-icons/io5";
import { useLikes } from "./useLikes";

import Spinner from "@/ui/Spinner";

interface PropTypes {
    postId: string;
}

const LikesButton = ({ postId }: PropTypes) => {
    const { likes, isLoading } = useLikes(postId);

    if (isLoading) return <Spinner />;

    return (
        <Button variant="outline" className="space-x-2 rounded-full">
            <IoHeartOutline />
            <span>{likes!.length}</span>
        </Button>
    );
};

export default LikesButton;
