import FullPageCentered from "./FullPageCentered";

import { IoReload } from "react-icons/io5";

const FullPageSpinner = () => {
    return (
        <FullPageCentered>
            <IoReload className="mr-2 h-4 w-4 animate-spin" />
        </FullPageCentered>
    );
};

export default FullPageSpinner;
