import { FC } from "react";

// components
import Button from "@/components/ui/Button";
import IconButton from "@/components/ui/IconButton";

interface HumanPageProps {

}

const HumanPage: FC<HumanPageProps> = ({}) => {
    return (
        <>
            <div className="human-container">
                <div className="basics">
                    <p className="brand">Anshika</p>
                    <p className="tagline">REVAMP, INSPIRE</p>
                    <Button icon="arrow_forward">Work</Button>
                </div>
                <div className="work-around">
                    <p>Empowering fashion expression with curated expertise.</p>
                    <img src="/shapes/5.png" alt="five" />
                    <IconButton icon="north_east" />
                </div>
                <div className="redirect">
                    <p>Discover a captivating portfolio of our remarkable work. </p>
                    <div>
                        <p>Explore our creative vision.</p>
                        <IconButton icon="north_east" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HumanPage;