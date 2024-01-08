import { FC } from 'react';

// components
import 'material-symbols';
import { NavRail, NavItem } from "./ui/NavRail";
import { NavDrawer, DrawerItem } from './ui/NavDrawer';

interface NavProps {
    className?: string;
}

const Nav: FC<NavProps> = ({ className }) => {
    return(
        <div className={className}>
            <NavRail className='xs-display-n fr-display-f'>
                <NavItem path="/" icon="home" label="Home" />
                <NavItem path="/work" icon="work" label="Work" />
                <NavItem path="/human" icon="person" label="Human" />
                <NavItem path="/contact" icon="alternate_email" label="Contact" />
            </NavRail>

            <NavDrawer className='xs-display-n sm-display-f fr-display-n'>
                <DrawerItem path="/" icon="home" label="Home" />
                <DrawerItem path="/work" icon="work" label="Work" />
                <DrawerItem path="/human" icon="person" label="Human" />
                <DrawerItem path="/contact" icon="alternate_email" label="Contact" />
            </NavDrawer>
        </div>
    )
}

export default Nav;