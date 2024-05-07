import { Outlet } from "react-router-dom";

import ProfileProtectedRoute from "@/features/profiles/ProfileProtectedRoute";
import UserProtectedRoute from "@/features/users/UserProtectedRoute";
import Navbar from "./Navbar";
import HorizontallyCentered from "./HorizontallyCentered";
import ResponsiveCore from "./ResponsiveCore";

const CoreLayout = () => {
    return (
        <UserProtectedRoute>
            <ProfileProtectedRoute>
                <div className="flex h-dvh flex-col-reverse sm:flex-row">
                    <Navbar />

                    <div className="grow overflow-scroll">
                        <HorizontallyCentered>
                            <ResponsiveCore>
                                <Outlet />
                            </ResponsiveCore>
                        </HorizontallyCentered>
                    </div>
                </div>
            </ProfileProtectedRoute>
        </UserProtectedRoute>
    );
};

export default CoreLayout;
