import { useNavigate } from "react-router-dom";
import { PropsWithChildren, useEffect } from "react";
import { useUserProfile } from "./useUserProfile";

import FullPageSpinner from "@/ui/FullPageSpinner";

const ProfileProtectedRoute = ({ children }: PropsWithChildren) => {
    const navigate = useNavigate();
    const { profile, isLoading } = useUserProfile();

    useEffect(() => {
        if (!isLoading && !profile) navigate("/welcome/name");
    }, [isLoading, profile, navigate]);

    if (isLoading) return <FullPageSpinner />;
    if (profile) return children;
};

export default ProfileProtectedRoute;
