import { NavLink } from "react-router-dom";
import { Button } from "./button";
import { HomeIcon, PlusIcon } from "@radix-ui/react-icons";

const Sidebar = () => {
    return (
        <ul className="flex h-screen flex-col gap-2 border-r p-4">
            <NavLink to="/">
                <Button variant="ghost">
                    <HomeIcon />
                </Button>
            </NavLink>
            <NavLink to="/create">
                <Button variant="ghost">
                    <PlusIcon />
                </Button>
            </NavLink>
        </ul>
    );
};

export default Sidebar;
