import { FC } from "react";
import Link from "next/link";

// components
import IconButton from "@/components/ui/IconButton";

interface ElementTwoProps {
    className?: string;
}

const ElementTwo: FC<ElementTwoProps> = ({ className }) => {

    const combinedClassName = `element-2${className ? ` ${className}` : ''}`;

    return (
        <div className={combinedClassName}>
            <div className="definition-1">
                <p>where style dazzles, fashion redefines allure.</p>
                <img src="/shapes/2.png" alt="two" />
                <Link href="/work/one"><IconButton icon="north_east" /></Link>
            </div>
            <div className="definition-2">
                <p>Captivating style redefines allure with enchanting fashion, unveiling limitless elegance.</p>
            </div>
        </div>
    )
}

export default ElementTwo;