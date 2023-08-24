import { FC } from "react";

// elements
import ElementOne from "@/components/elements/ElementOne";
import ElementTwo from "@/components/elements/ElementTwo";
import ElementThree from "@/components/elements/ElementThree";
import ElementFour from "@/components/elements/ElementFour";

const WorkPage: FC = ({}) => {
    return (
        <>
            <div className="work-container">
                <div className="work-row">
                    <ElementOne />
                    <ElementTwo />
                </div>
                <div className="work-row">
                    <ElementThree />
                    <ElementFour />
                </div>
            </div>
        </>
    )
}

export default WorkPage;