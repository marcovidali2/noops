import { useEffect } from "react";
import { useProfileStore } from "./useProfileStore";
import { useCreateProfile } from "./useCreateProfile";
import { useNavigate } from "react-router-dom";

import FullPageSpinner from "@/ui/FullPageSpinner";

const WelcomeSubmitScript = () => {
    const navigate = useNavigate();

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

        createProfile(profile, {
            onSuccess: () => {
                navigate("/");
            },
        });
    }, [
        name,
        username,
        favoriteLanguage,
        bio,
        avatar,
        createProfile,
        navigate,
    ]);

    return <FullPageSpinner />;
};

export default WelcomeSubmitScript;
