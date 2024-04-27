import { PropsWithChildren } from "react";

const HorizontallyCentered = ({ children }: PropsWithChildren) => {
    return <div className="flex justify-center">{children}</div>;
};

export default HorizontallyCentered;
