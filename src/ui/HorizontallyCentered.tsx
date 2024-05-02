import { PropsWithChildren } from "react";

const HorizontallyCentered = ({ children }: PropsWithChildren) => {
    return (
        <div className="flex justify-center">
            <div className="w-[95%] sm:w-[32rem]">{children}</div>
        </div>
    );
};

export default HorizontallyCentered;
