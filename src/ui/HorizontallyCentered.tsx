import { PropsWithChildren } from "react";

const HorizontallyCentered = ({ children }: PropsWithChildren) => {
    return (
        <div className="flex justify-center">
            <div className="w-full p-4 sm:w-[32rem]">{children}</div>
        </div>
    );
};

export default HorizontallyCentered;
