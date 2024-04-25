import { useUsernames } from "@/features/profiles/useUsernames";

import UserProtectedRoute from "@/features/users/UserProtectedRoute";
import WelcomeUsernameForm from "@/features/profiles/WelcomeUsernameForm";
import FullPageForm from "@/ui/FullPageForm";
import FullPageSpinner from "@/ui/FullPageSpinner";

const WelcomeUsername = () => {
    const { isLoading } = useUsernames();

    if (isLoading) return <FullPageSpinner />;

    return (
        <UserProtectedRoute>
            <FullPageForm>
                <WelcomeUsernameForm />
            </FullPageForm>
        </UserProtectedRoute>
    );
};

export default WelcomeUsername;
