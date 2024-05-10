import { usePosts } from "./usePosts";
import { Alert, AlertDescription, AlertTitle } from "@/ui/alert";
import { IoInformationCircleOutline } from "react-icons/io5";
import { Tables } from "@/types";

import PostItem from "./PostItem";

const PostsList = () => {
    const { posts } = usePosts();

    return (
        <div className="space-y-4">
            <h1>posts</h1>

            {posts?.length === 0 && (
                <Alert>
                    <IoInformationCircleOutline className="h-4 w-4" />
                    <AlertTitle>there are no posts</AlertTitle>
                    <AlertDescription>
                        wait for someone to create one or create one yourself
                    </AlertDescription>
                </Alert>
            )}

            <div className="flex flex-col gap-4">
                {posts?.map((post: Tables<"posts">) => (
                    <PostItem key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
};

export default PostsList;
