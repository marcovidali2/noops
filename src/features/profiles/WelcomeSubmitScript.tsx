import { useEffect } from "react";
import { useProfileStore } from "./useProfileStore";
import { useCreateProfile } from "./useCreateProfile";

import FullPageSpinner from "@/ui/FullPageSpinner";

const WelcomeSubmitScript = () => {
    const { name, username, favorite_language, bio, avatar } =
        useProfileStore();
    const { createProfile } = useCreateProfile();

    useEffect(() => {
        const profile = {
            id: "",
            joined_at: "",
            name: name,
            username: username,
            favorite_language: favorite_language,
            bio: bio,
            avatar: avatar,
        };

        createProfile(profile);
    }, [name, username, favorite_language, bio, avatar, createProfile]);

    return <FullPageSpinner />;
};

export default WelcomeSubmitScript;
