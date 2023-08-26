import { FC } from "react";
import Link from "next/link";

// components
import IconButton from "@/components/ui/IconButton";

interface ElementFourProps {
    className?: string;
}

const ElementFour: FC<ElementFourProps> = ({ className }) => {

    const combinedClassName = `element-4${className ? ` ${className}` : ''}`;

    return (
        <div className={combinedClassName}>
            <Link href="#"><IconButton icon="north_east" /></Link>
            <img src="/shapes/4.png" alt="four" />
        </div>
    )
}

export default ElementFour;