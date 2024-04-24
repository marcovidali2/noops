import UserProtectedRoute from "@/features/auth/UserProtectedRoute";
import WelcomeSubmitScript from "@/features/profiles/WelcomeSubmitScript";

const WelcomeSubmit = () => {
    return (
        <UserProtectedRoute>
            <WelcomeSubmitScript />
        </UserProtectedRoute>
    );
};

export default WelcomeSubmit;
