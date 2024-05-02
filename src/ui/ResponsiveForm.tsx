import { PropsWithChildren } from "react";

import FullPageCentered from "./FullPageCentered";

const ResponsiveForm = ({ children }: PropsWithChildren) => {
    return (
        <FullPageCentered>
            <div className="w-full p-4 sm:w-[32rem]">{children}</div>
        </FullPageCentered>
    );
};

export default ResponsiveForm;
