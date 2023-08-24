import { FC } from "react";

// components
import IconButton from "@/components/ui/IconButton";

interface ElementTwoProps {
    className?: string;
}

const ElementTwo: FC<ElementTwoProps> = ({ className }) => {
    return (
        <div className={`element-2` + (className ? ` ${className}` : '')}>
            <div className="definition-1">
                <p>where style dazzles, fashion redefines allure.</p>
                <img src="/shapes/2.png" alt="two" />
                <IconButton icon="north_east" />
            </div>
            <div className="definition-2">
                <p>Captivating style redefines allure with enchanting fashion, unveiling limitless elegance.</p>
            </div>
        </div>
    )
}

export default ElementTwo;