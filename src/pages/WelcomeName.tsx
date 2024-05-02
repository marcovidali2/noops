import UserProtectedRoute from "@/features/users/UserProtectedRoute";
import WelcomeNameForm from "@/features/profiles/WelcomeNameForm";
import FullPageForm from "@/ui/ResponsiveForm";

const WelcomeName = () => {
    return (
        <UserProtectedRoute>
            <FullPageForm>
                <WelcomeNameForm />
            </FullPageForm>
        </UserProtectedRoute>
    );
};

export default WelcomeName;
