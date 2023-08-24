import { FC } from "react";

// components
import IconButton from "@/components/ui/IconButton";

interface ElementFourProps {
    className?: string;
}

const ElementFour: FC<ElementFourProps> = ({ className }) => {
    return (
        <div className={`element-4` + (className ? ` ${className}` : '')}>
            <IconButton icon="north_east" />
            <img src="/shapes/4.png" alt="four" />
        </div>
    )
}

export default ElementFour;