import ProfileProtectedRoute from "@/features/profiles/ProfileProtectedRoute";
import UserProtectedRoute from "@/features/users/UserProtectedRoute";

import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const CoreLayout = () => {
    return (
        <UserProtectedRoute>
            <ProfileProtectedRoute>
                <div className="flex">
                    <Sidebar />
                    <div className="p-4">
                        <Outlet />
                    </div>
                </div>
            </ProfileProtectedRoute>
        </UserProtectedRoute>
    );
};

export default CoreLayout;
