import { NavLink } from "react-router-dom";
import { Button } from "./button";
import { IoAdd, IoAddOutline, IoHome, IoHomeOutline } from "react-icons/io5";

const Navbar = () => {
    return (
        <div className="flex justify-center gap-2 border-t p-4 sm:flex-col sm:justify-start sm:border-r">
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

export default Navbar;
