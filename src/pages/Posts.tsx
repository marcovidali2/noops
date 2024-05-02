import { usePosts } from "@/features/posts/usePosts";

import PostsList from "@/features/posts/PostsList";
import FullPageSpinner from "@/ui/FullPageSpinner";
import HorizontallyCentered from "@/ui/HorizontallyCentered";
import ResponsiveCore from "@/ui/ResponsiveCore";

const Posts = () => {
    const { isLoading } = usePosts();

    if (isLoading) return <FullPageSpinner />;

    return (
        <HorizontallyCentered>
            <ResponsiveCore>
                <PostsList />
            </ResponsiveCore>
        </HorizontallyCentered>
    );
};

export default Posts;
