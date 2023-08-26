import { FC } from "react";
import Link from "next/link";

// components
import Button from "@/components/ui/Button";
import IconButton from "@/components/ui/IconButton";

interface ElementOneProps {
    className?: string;
}

const ElementOne: FC<ElementOneProps> = ({ className }) => {
    
    const combinedClassName = `element-1${className ? ` ${className}` : ''}`;

    return (
        <div className={combinedClassName}>
            <div className="display-f align-i-e">
                <img src="/shapes/1.png" alt="one" />
                <Link href="#"><IconButton icon="north_east" /></Link>
            </div>
            <div className="element-1-column">
                <Button icon="share" type="filled" className="pt-7">Share</Button>
            </div>
        </div>
    )
}

export default ElementOne;