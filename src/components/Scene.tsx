import { FC } from 'react';

interface SceneProps {
    children: React.ReactNode;
}

const Scene: FC<SceneProps> = ({children}) => {
    return(
        <>
            <div className='scene'>
                {children}
            </div>
        </>
    )
}

export default Scene;