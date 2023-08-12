import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

interface ScenarioProps {
    className?: string;
}

const Scenario: FC<ScenarioProps> = ({ className }) => {

    return(
        <>
            <div className={`scenario` + (className ? ` ${className}` : '')}>
                <div className='display-f flex-column margin'>
                    <Image src='/anshika.png' alt='logo' width={124} height={124} />
                    <div className='socials'>
                        <Link href="#" className='on-surface-text'><FontAwesomeIcon icon={faInstagram} /></Link>
                        <Link href="#" className='on-surface-text'><FontAwesomeIcon icon={faTwitter} /></Link>
                        <Link href="#" className='on-surface-text'><FontAwesomeIcon icon={faEnvelope} /></Link>
                    </div>
                </div>
                <div className="context margin">
                    <p className='context-text'>It's hot!</p>
                </div>
            </div>
        </>
    )
}

export default Scenario;