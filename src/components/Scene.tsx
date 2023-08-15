import { FC } from 'react';

interface SceneProps {
    children: React.ReactNode;
    className?: string;
}

const Scene: FC<SceneProps> = ({children, className}) => {
    return(
        <>
            <div className={`scene` + (className ? ` ${className}` : '')}>
                {children}
            </div>
        </>
    )
}

export default Scene;