import { NavLink } from "react-router-dom";
import { Button } from "./button";
import { IoAdd, IoAddOutline, IoHome, IoHomeOutline } from "react-icons/io5";
import { Tooltip, TooltipProvider } from "./tooltip";
import { TooltipContent, TooltipTrigger } from "./tooltip";

const Navbar = () => {
    return (
        <TooltipProvider>
            <div className="flex justify-center gap-2 border-t p-4 sm:flex-col sm:justify-start sm:border-r">
                <NavLink to="/">
                    {({ isActive }) =>
                        isActive ? (
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        className="bg-accent"
                                    >
                                        <IoHome />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>home</p>
                                </TooltipContent>
                            </Tooltip>
                        ) : (
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="ghost">
                                        <IoHomeOutline />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>home</p>
                                </TooltipContent>
                            </Tooltip>
                        )
                    }
                </NavLink>
                <NavLink to="/create">
                    {({ isActive }) =>
                        isActive ? (
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        className="bg-accent"
                                    >
                                        <IoAdd />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>create</p>
                                </TooltipContent>
                            </Tooltip>
                        ) : (
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="ghost">
                                        <IoAddOutline />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>create</p>
                                </TooltipContent>
                            </Tooltip>
                        )
                    }
                </NavLink>
            </div>
        </TooltipProvider>
    );
};

export default Navbar;
