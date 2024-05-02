import { PropsWithChildren } from "react";

const ResponsiveCore = ({ children }: PropsWithChildren) => {
    return <div className="w-full p-4 sm:w-[32rem]">{children}</div>;
};

export default ResponsiveCore;
