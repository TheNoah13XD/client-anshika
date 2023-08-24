import { FC } from "react";

// components
import IconButton from "@/components/ui/IconButton";

interface ElementThreeProps {
    className?: string;
}

const ElementThree: FC<ElementThreeProps> = ({ className }) => {
    return (
        <div className={`element-3` + (className ? ` ${className}` : '')}>
            <img src="/shapes/3.png" alt="three" />
            <IconButton icon="north_east" />
        </div>
    )
}

export default ElementThree;