import { FC } from "react";

// components
import IconButton from "@/components/ui/IconButton";

interface ElementOneProps {
    className?: string;
}

const ElementOne: FC<ElementOneProps> = ({ className }) => {
    return (
        <div className={`element-4` + (className ? ` ${className}` : '')}>
            <IconButton icon="north_east" />
            <img src="/shapes/4.png" alt="four" />
        </div>
    )
}

export default ElementOne;