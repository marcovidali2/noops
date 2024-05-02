import UserProtectedRoute from "@/features/users/UserProtectedRoute";
import WelcomeFavoriteLanguageForm from "@/features/profiles/WelcomeFavoriteLanguageForm";
import ResponsiveForm from "@/ui/ResponsiveForm";

const WelcomeFavoriteLanguage = () => {
    return (
        <UserProtectedRoute>
            <ResponsiveForm>
                <WelcomeFavoriteLanguageForm />
            </ResponsiveForm>
        </UserProtectedRoute>
    );
};

export default WelcomeFavoriteLanguage;
