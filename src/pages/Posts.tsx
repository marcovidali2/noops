import { usePosts } from "@/features/posts/usePosts";

import PostsList from "@/features/posts/PostsList";
import FullPageSpinner from "@/ui/FullPageSpinner";

const Posts = () => {
    const { isLoading } = usePosts();

    if (isLoading) return <FullPageSpinner />;

    return <PostsList />;
};

export default Posts;
