import { ReloadIcon } from "@radix-ui/react-icons";

import FullPageCentered from "./FullPageCentered";

const FullPageSpinner = () => {
    return (
        <FullPageCentered>
            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
        </FullPageCentered>
    );
};

export default FullPageSpinner;
