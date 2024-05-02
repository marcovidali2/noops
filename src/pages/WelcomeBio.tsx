import UserProtectedRoute from "@/features/users/UserProtectedRoute";
import WelcomeBioForm from "@/features/profiles/WelcomeBioForm";
import ResponsiveForm from "@/ui/ResponsiveForm";

const WelcomeName = () => {
    return (
        <UserProtectedRoute>
            <ResponsiveForm>
                <WelcomeBioForm />
            </ResponsiveForm>
        </UserProtectedRoute>
    );
};

export default WelcomeName;
