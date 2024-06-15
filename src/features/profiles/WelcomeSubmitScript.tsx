import { useEffect } from "react";
import { useProfileStore } from "./useProfileStore";
import { useCreateProfile } from "./useCreateProfile";
import { useNavigate } from "react-router-dom";

import FullPageSpinner from "@/ui/FullPageSpinner";
import { Tables } from "@/types";

const WelcomeSubmitScript = () => {
    const navigate = useNavigate();

    const { name, username, favoriteLanguage, bio, avatar, joinedAt, user } =
        useProfileStore();
    const { createProfile } = useCreateProfile();

    useEffect(() => {
        const profile: Tables<"profiles"> = {
            avatar: avatar,
            bio: bio,
            favoriteLanguage: favoriteLanguage,
            username: username,
            name: name,
            joinedAt: joinedAt,
            user: user,
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
        joinedAt,
        user,
        createProfile,
        navigate,
    ]);

    return <FullPageSpinner />;
};

export default WelcomeSubmitScript;
