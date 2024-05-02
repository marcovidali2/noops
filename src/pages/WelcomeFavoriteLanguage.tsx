import UserProtectedRoute from "@/features/users/UserProtectedRoute";
import WelcomeFavoriteLanguageForm from "@/features/profiles/WelcomeFavoriteLanguageForm";
import FullPageForm from "@/ui/ResponsiveForm";

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
