import { NavLink } from "react-router-dom";
import { Button } from "./button";
import { IoAddOutline, IoHomeOutline } from "react-icons/io5";

const Sidebar = () => {
    return (
        <ul className="flex h-screen flex-col gap-2 border-r p-4">
            <NavLink to="/">
                <Button variant="ghost">
                    <IoHomeOutline size={20} />
                </Button>
            </NavLink>
            <NavLink to="/create">
                <Button variant="ghost">
                    <IoAddOutline size={20} />
                </Button>
            </NavLink>
        </ul>
    );
};

export default Sidebar;
