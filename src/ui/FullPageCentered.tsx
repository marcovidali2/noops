import { PropsWithChildren } from "react";

const FullPageCentered = ({ children }: PropsWithChildren) => {
    return (
        <div className="flex h-dvh items-center justify-center">{children}</div>
    );
};

export default FullPageCentered;
