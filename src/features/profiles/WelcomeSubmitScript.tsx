import { useEffect } from "react";
import { useProfileStore } from "./useProfileStore";
import { useCreateProfile } from "./useCreateProfile";

import FullPageSpinner from "@/ui/FullPageSpinner";

const WelcomeSubmitScript = () => {
    const { name, username, favoriteLanguage, bio, avatar } = useProfileStore();
    const { createProfile } = useCreateProfile();

    useEffect(() => {
        const profile = {
            id: "",
            joined_at: "",
            name: name,
            username: username,
            favoriteLanguage: favoriteLanguage,
            bio: bio,
            avatar: avatar,
        };

        createProfile(profile);
    }, [name, username, favoriteLanguage, bio, avatar, createProfile]);

    return <FullPageSpinner />;
};

export default WelcomeSubmitScript;
