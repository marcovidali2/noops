import { NavLink } from "react-router-dom";
import { Button } from "./button";
import { IoAdd, IoAddOutline, IoHome, IoHomeOutline } from "react-icons/io5";

const Sidebar = () => {
    return (
        <div className="flex h-screen flex-col gap-2 border-r p-4">
            <NavLink to="/">
                {({ isActive }) =>
                    isActive ? (
                        <Button variant="ghost">
                            <IoHome />
                        </Button>
                    ) : (
                        <Button variant="ghost">
                            <IoHomeOutline />
                        </Button>
                    )
                }
            </NavLink>
            <NavLink to="/create">
                {({ isActive }) =>
                    isActive ? (
                        <Button variant="ghost">
                            <IoAdd />
                        </Button>
                    ) : (
                        <Button variant="ghost">
                            <IoAddOutline />
                        </Button>
                    )
                }
            </NavLink>
        </div>
    );
};

export default Sidebar;
