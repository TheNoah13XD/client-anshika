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
    extraMargin?: boolean;
    className?: string;
}

const Grid: FC<GridProps> = ({ children, className }) => {
    return (
        <div className={`grid-container` + (className ? ` ${className}` : '')}>
            {children}
        </div>
    )
}

const Col: FC<ColProps> = ({ children, col, start, extraWidth, extraStart, extraMargin, className }) => {

    const classNames = [
        col ? `col-span-${col}` : '',
        start ? `col-start-${start}` : '',
        extraWidth ? 'col-extra-width' : '',
        extraStart ? 'col-extra-start' : '',
        extraMargin ? 'col-extra-margin' : '',
    ].join(' ');

    return (
        <div className={`col ${classNames}` + (className ? ` ${className}` : '')}>
            {children}
        </div>    
    )
}



export { Grid, Col };