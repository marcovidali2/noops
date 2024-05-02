import { usePosts } from "./usePosts";

import PostItem from "./PostItem";

const PostsList = () => {
    const { posts } = usePosts();

    return (
        <div className="space-y-4">
            <h1>posts</h1>

            {posts?.length === 0 && <p>there are currently no posts</p>}

            <div className="flex flex-col gap-4">
                {posts?.map((post) => <PostItem key={post.id} post={post} />)}
            </div>
        </div>
    );
};

export default PostsList;
