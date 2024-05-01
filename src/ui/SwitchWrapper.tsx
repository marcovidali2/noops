import { SwitchProps } from "@radix-ui/react-switch";
import { Switch } from "./switch";

const SwitchWrapper = ({ children, ...otherProps }: SwitchProps) => {
    return (
        <label className="flex items-center gap-2">
            <Switch {...otherProps} />
            {children}
        </label>
    );
};

export default SwitchWrapper;
