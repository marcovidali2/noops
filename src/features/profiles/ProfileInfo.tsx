import { useUserProfile } from "./useUserProfile";
import { Avatar, AvatarImage } from "@/ui/avatar";
import { Alert, AlertDescription, AlertTitle } from "@/ui/alert";
import { Badge } from "@/ui/badge";
import { useUserPosts } from "../posts/useUserPosts";
import { IoInformationCircleOutline } from "react-icons/io5";

import FullPageSpinner from "@/ui/FullPageSpinner";
import PostItem from "../posts/PostItem";

const ProfileInfo = () => {
    const { profile, isLoading: isLoadingProfile } = useUserProfile();
    const { posts, isLoading: isLoadingPosts } = useUserPosts();
    const isLoading = isLoadingPosts || isLoadingProfile;

    if (isLoading) return <FullPageSpinner />;

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                    <Avatar className="h-auto w-16">
                        <AvatarImage src={profile.avatar} />
                    </Avatar>

                    <div className="space-x-4">
                        <span className="text-xl">{profile.name}</span>
                        <span className="text-xl text-muted-foreground">
                            {profile.username}
                        </span>
                    </div>
                </div>

                <Badge>{profile.favoriteLanguage}</Badge>
            </div>

            <Alert>
                <AlertDescription>{profile.bio}</AlertDescription>
            </Alert>

            {posts?.length === 0 && (
                <Alert>
                    <IoInformationCircleOutline className="h-4 w-4" />
                    <AlertTitle>the user has no posts</AlertTitle>
                    <AlertDescription>
                        wait for them to post something
                    </AlertDescription>
                </Alert>
            )}

            <div className="flex flex-col gap-4">
                {posts?.map((post) => <PostItem key={post.id} post={post} />)}
            </div>
        </div>
    );
};

export default ProfileInfo;
