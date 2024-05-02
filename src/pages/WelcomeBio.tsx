import UserProtectedRoute from "@/features/users/UserProtectedRoute";
import WelcomeBioForm from "@/features/profiles/WelcomeBioForm";
import FullPageForm from "@/ui/ResponsiveForm";

const WelcomeName = () => {
    return (
        <UserProtectedRoute>
            <FullPageForm>
                <WelcomeBioForm />
            </FullPageForm>
        </UserProtectedRoute>
    );
};

export default WelcomeName;
