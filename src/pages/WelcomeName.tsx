import UserProtectedRoute from "@/features/users/UserProtectedRoute";
import WelcomeNameForm from "@/features/profiles/WelcomeNameForm";
import ResponsiveForm from "@/ui/ResponsiveForm";

const WelcomeName = () => {
    return (
        <UserProtectedRoute>
            <ResponsiveForm>
                <WelcomeNameForm />
            </ResponsiveForm>
        </UserProtectedRoute>
    );
};

export default WelcomeName;
