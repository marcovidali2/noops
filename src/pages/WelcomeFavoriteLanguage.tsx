import UserProtectedRoute from "@/features/auth/UserProtectedRoute";
import WelcomeFavoriteLanguageForm from "@/features/profiles/WelcomeFavoriteLanguageForm";
import FullPageForm from "@/ui/FullPageForm";

const WelcomeFavoriteLanguage = () => {
    return (
        <UserProtectedRoute>
            <FullPageForm>
                <WelcomeFavoriteLanguageForm />
            </FullPageForm>
        </UserProtectedRoute>
    );
};

export default WelcomeFavoriteLanguage;
