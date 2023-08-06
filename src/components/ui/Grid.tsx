import { FC } from "react";

interface GridProps {
    children: React.ReactNode;
    className?: string;
}

interface ColProps {
    children: React.ReactNode;
    col?: string;
    start?: string;
    extraWidth?: boolean;
    extraStart?: boolean;
    className?: string;
}

const Grid: FC<GridProps> = ({ children, className }) => {
    return (
        <div className={`grid-container ${className}`}>
            {children}
        </div>
    )
}

const Col: FC<ColProps> = ({ children, col, start, extraWidth, extraStart, className }) => {

    const classNames = [
        col ? `col-span-${col}` : '',
        start ? `col-start-${start}` : '',
        extraWidth ? 'col-extra-width' : '',
        extraStart ? 'col-extra-start' : '',
    ].join(' ');

    return (
        <div className={`col ${classNames} ${className}`}>
            {children}
        </div>    
    )
}



export { Grid, Col };