import UserProtectedRoute from "@/features/users/UserProtectedRoute";
import WelcomeAvatarForm from "@/features/profiles/WelcomeAvatarForm";
import FullPageForm from "@/ui/ResponsiveForm";

const WelcomeAvatar = () => {
    return (
        <UserProtectedRoute>
            <FullPageForm>
                <WelcomeAvatarForm />
            </FullPageForm>
        </UserProtectedRoute>
    );
};

export default WelcomeAvatar;
