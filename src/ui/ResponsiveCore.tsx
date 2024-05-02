import { PropsWithChildren } from "react";

const ResponsiveCore = ({ children }: PropsWithChildren) => {
    return <div className="w-full p-4 sm:w-[42rem]">{children}</div>;
};

export default ResponsiveCore;
