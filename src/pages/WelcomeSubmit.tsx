import UserProtectedRoute from "@/features/users/UserProtectedRoute";
import WelcomeSubmitScript from "@/features/profiles/WelcomeSubmitScript";

const WelcomeSubmit = () => {
    return (
        <UserProtectedRoute>
            <WelcomeSubmitScript />
        </UserProtectedRoute>
    );
};

export default WelcomeSubmit;
