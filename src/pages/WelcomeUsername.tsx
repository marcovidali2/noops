import { useUsernames } from "@/features/profiles/useUsernames";

import UserProtectedRoute from "@/features/users/UserProtectedRoute";
import WelcomeUsernameForm from "@/features/profiles/WelcomeUsernameForm";
import ResponsiveForm from "@/ui/ResponsiveForm";
import FullPageSpinner from "@/ui/FullPageSpinner";

const WelcomeUsername = () => {
    const { isLoading } = useUsernames();

    if (isLoading) return <FullPageSpinner />;

    return (
        <UserProtectedRoute>
            <ResponsiveForm>
                <WelcomeUsernameForm />
            </ResponsiveForm>
        </UserProtectedRoute>
    );
};

export default WelcomeUsername;
