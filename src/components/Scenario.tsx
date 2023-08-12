import Image from 'next/image';
import { FC } from 'react';
import { Col, Grid } from './ui/Grid';

interface ScenarioProps {
    className?: string;
}

const Scenario: FC<ScenarioProps> = ({ className }) => {
    return(
        <>
            <div className={`scenario` + (className ? ` ${className}` : '')}>
                <Grid>
                    <Col col='2' start='2'>
                        <p>okok</p>
                    </Col>
                </Grid>
            </div>
        </>
    )
}

export default Scenario;