import { PropsWithChildren } from "react";
import FullPageCentered from "./FullPageCentered";

const FullPageForm = ({ children }: PropsWithChildren) => {
    return (
        <FullPageCentered>
            <div className="mx-4 w-96">{children}</div>
        </FullPageCentered>
    );
};

export default FullPageForm;
