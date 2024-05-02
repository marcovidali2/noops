import { Outlet } from "react-router-dom";

import ProfileProtectedRoute from "@/features/profiles/ProfileProtectedRoute";
import UserProtectedRoute from "@/features/users/UserProtectedRoute";
import Navbar from "./Navbar";

const CoreLayout = () => {
    return (
        <UserProtectedRoute>
            <ProfileProtectedRoute>
                <div className="flex h-dvh flex-col-reverse sm:flex-row">
                    <Navbar />

                    <div className="grow overflow-scroll">
                        <Outlet />
                    </div>
                </div>
            </ProfileProtectedRoute>
        </UserProtectedRoute>
    );
};

export default CoreLayout;
