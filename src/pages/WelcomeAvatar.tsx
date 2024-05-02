import UserProtectedRoute from "@/features/users/UserProtectedRoute";
import WelcomeAvatarForm from "@/features/profiles/WelcomeAvatarForm";
import ResponsiveForm from "@/ui/ResponsiveForm";

const WelcomeAvatar = () => {
    return (
        <UserProtectedRoute>
            <ResponsiveForm>
                <WelcomeAvatarForm />
            </ResponsiveForm>
        </UserProtectedRoute>
    );
};

export default WelcomeAvatar;
