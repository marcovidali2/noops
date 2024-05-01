import { usePosts } from "@/features/posts/usePosts";

import PostsList from "@/features/posts/PostsList";
import FullPageSpinner from "@/ui/FullPageSpinner";
import HorizontallyCentered from "@/ui/HorizontallyCentered";

const Home = () => {
    const { isLoading } = usePosts();

    if (isLoading) return <FullPageSpinner />;

    return (
        <HorizontallyCentered>
            <PostsList />
        </HorizontallyCentered>
    );
};

export default Home;
