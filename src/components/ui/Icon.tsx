import { FC } from "react";
import { MaterialSymbol } from "material-symbols";

interface IconProps {
    type?: 'outlined' | 'rounded' | 'sharp';
    icon: MaterialSymbol;
    className?: string;
}

const Icon: FC<IconProps> = ({type = 'outlined', icon, className}) => {
    return (
        <span className={`material-symbols-${type} ${className} unselectable`}>{icon}</span>
    )
}

export default Icon;