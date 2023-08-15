import { FC } from "react";
import { MaterialSymbol } from "material-symbols";
import Icon from "./Icon";

interface IconButtonProps {
    disabled?: boolean;
    className?: string;
    type?: 'filled' | 'tonal' | 'outlined' | 'text';
    icon: MaterialSymbol;
}

const IconButton: FC<IconButtonProps> = ({ disabled, className, type = 'filled', icon }) => {
    return (
        <div className={className}>
            <button
                className={`${type}-iconbtn`}
                disabled={disabled}
            >
                {icon && <Icon className="icon" icon={icon} />}
            </button>
        </div>
    )
}

export default IconButton;