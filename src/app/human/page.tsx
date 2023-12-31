import { FC } from "react";
import Link from "next/link";

// components
import Button from "@/components/ui/Button";
import IconButton from "@/components/ui/IconButton";

const HumanPage: FC = ({}) => {
    return (
        <>
            <div className="human-container">
                <div className="basics">
                    <p className="brand">Anshika</p>
                    <p className="tagline">REVAMP, INSPIRE</p>
                    <Link href="/work"><Button icon="arrow_forward">Work</Button></Link>
                </div>
                <div className="work-around">
                    <p>Empowering fashion expression with curated expertise.</p>
                    <img src="/shapes/5.png" alt="five" />
                    <Link href="/contact"><IconButton icon="north_east" /></Link>
                </div>
                <div className="redirect">
                    <p>Discover a captivating portfolio of our remarkable work. </p>
                    <div>
                        <p>Explore our creative vision.</p>
                        <Link href="/work"><IconButton icon="north_east" /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HumanPage;