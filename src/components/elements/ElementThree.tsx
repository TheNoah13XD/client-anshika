import { FC } from "react";
import Link from "next/link";

// components
import IconButton from "@/components/ui/IconButton";

interface ElementThreeProps {
    className?: string;
}

const ElementThree: FC<ElementThreeProps> = ({ className }) => {

    const combinedClassName = `element-3${className ? ` ${className}` : ''}`;

    return (
        <div className={combinedClassName}>
            <img src="/shapes/3.png" alt="three" />
            <Link href="#"><IconButton icon="north_east" /></Link>
        </div>
    )
}

export default ElementThree;