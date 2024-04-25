import ProfileProtectedRoute from "@/features/profiles/ProfileProtectedRoute";
import UserProtectedRoute from "@/features/users/UserProtectedRoute";
import Sidebar from "@/ui/Sidebar";

const Home = () => {
    return (
        <UserProtectedRoute>
            <ProfileProtectedRoute>
                <div className="flex">
                    <Sidebar />
                    hello
                </div>
            </ProfileProtectedRoute>
        </UserProtectedRoute>
    );
};

export default Home;
