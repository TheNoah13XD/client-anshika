import { FC } from "react";

// components
import Button from "@/components/ui/Button";
import IconButton from "@/components/ui/IconButton";
import Icon from "@/components/ui/Icon";

const One: FC = ({}) => {
    return (
        <>
            <div className="work-details-container">
                <img src="/thumbnails/one.png" alt="thumbnail" />
                <div className="thumbnail-btns">
                    <Button type="tonal" icon="share">Share</Button>
                    <IconButton icon="north_east" />
                </div>
                <div className="details">
                    <div className="display-f justify-b align-i-e">
                        <h1 className="title">chasing lights</h1>
                        <p className="path">Home / Work / 1</p>
                    </div>
                    <div className="display-f justify-b align-i-e mt-6">
                        <p className="description">Capturing nature's beauty through</p>
                        <div className="pc">
                            <Icon icon="photo_camera" />
                            <p>: Nidhi Kulkarni</p>
                        </div>
                    </div>
                    <div className="display-f justify-b align-i-e mt-2">
                        <p className="description">Photography & Visuals"</p>
                        <p className="date">03/09/23</p>
                    </div>
                </div>
                <div className="shoot-controls">
                    <Button type="tonal" icon="arrow_back">Prev</Button>
                    <Button type="tonal" icon="arrow_forward">Next</Button>
                </div>
                <div className="shoot">
                    <div className="shoots">
                        <img src="/shoots/one/pic-1.png" alt="pic-1" className="pic-1" />
                        <div className="shoots-side">
                            <div className="sub-pics">
                                <img src="/shoots/one/pic-2.png" alt="pic-2" className="sub-pic" />
                                <img src="/shoots/one/pic-3.png" alt="pic-2" className="sub-pic" />
                                <img src="/shoots/one/pic-4.png" alt="pic-2" className="sub-pic" />
                            </div>
                            <div className="shoot-details">
                                <p>Explore the ethereal dance of light and shadow <br /> through captivating visuals</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="more-projects">

                </div> */}
            </div>
        </>
    )
}

export default One;