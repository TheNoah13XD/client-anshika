import { FC } from "react";

// components
import Button from "@/components/ui/Button";
import IconButton from "@/components/ui/IconButton";

interface ElementOneProps {
    className?: string;
}

const ElementOne: FC<ElementOneProps> = ({ className }) => {
    return (
        <div className={`element-1` + (className ? ` ${className}` : '')}>
            <div className="display-f align-i-e">
                <img src="/shapes/1.png" alt="one" />
                <IconButton icon="north_east" />
            </div>
            <div className="element-1-column">
                <Button icon="share" type="filled" className="pt-7">Share</Button>
            </div>
        </div>
    )
}

export default ElementOne;