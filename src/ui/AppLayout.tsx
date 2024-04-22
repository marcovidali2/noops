import { Outlet } from "react-router-dom";

const AppLayout = () => {
    return (
        <div className="font-roboto-mono">
            <Outlet />
        </div>
    );
};

export default AppLayout;
