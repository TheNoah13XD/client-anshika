import { FC } from "react";

// components
import Button from "@/components/ui/Button";
import IconButton from "@/components/ui/IconButton";

const WorkPage: FC = ({}) => {
    return (
        <>
            <div className="work-container">
                <div className="row">
                    <div className="element-1">
                        <div className="display-f align-i-e">
                            <img src="/shapes/1.png" alt="one" />
                            <IconButton icon="north_east" />
                        </div>
                        <div className="column">
                            <Button icon="share" type="filled" className="pt-7">Share</Button>
                        </div>
                    </div>
                    <div className="element-2">
                        <div className="definition-1">
                            <p>where style dazzles, fashion redefines allure.</p>
                            <img src="/shapes/2.png" alt="two" />
                        </div>
                        <div className="definition-2">
                            <p>Captivating style redefines allure with enchanting fashion, unveiling limitless elegance.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="element-3">
                        <img src="/shapes/3.png" alt="three" />
                        <IconButton icon="north_east" />
                    </div>
                    <div className="element-4">
                        <IconButton icon="north_east" />
                        <img src="/shapes/4.png" alt="four" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkPage;