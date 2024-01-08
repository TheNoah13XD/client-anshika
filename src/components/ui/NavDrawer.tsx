'use client';

import React, { FC, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { MaterialSymbol } from 'material-symbols';

// components
import Icon from "./Icon";

interface NavDrawerProps {
    children: React.ReactNode;
    className?: string;
}

interface DrawerItemProps {
    path: string;
    icon?: MaterialSymbol;
    label: string;
    isActive?: boolean;
}

const NavDrawer: FC<NavDrawerProps> = ({ children, className }) => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const containerState = isOpen ? "drawer-container" : "drawer-hidden";
    
    const stageChange = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <>
            <nav className={`drawer ${className}`}>
                <button onClick={stageChange}>
                    <Icon icon={isOpen ? "close" : "menu"} className="burger" />
                </button>
                <div className={containerState}>
                    <p className="headline">Navigation</p>
                    <div className='items-container'>
                        {React.Children.map(children, (child) =>
                            React.isValidElement(child)
                                ? React.cloneElement(child, { isActive: pathname === child.props.path } as { isActive: boolean } )
                                : child
                        )}
                    </div>
                </div>
            </nav>
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                transition: 'opacity 0.5s cubic-bezier(0.2, 0, 0, 1), visibility 0.5s',
                zIndex: 100,
                opacity: isOpen ? 1 : 0,
                visibility: isOpen ? 'visible' : 'hidden',
            }} onClick={stageChange} />
        </>
    )
}

const DrawerItem: FC<DrawerItemProps> = ({ path, icon, label, isActive }) => {
    const classNames = `destination-${isActive ? 'active' : 'item'}`;

    return (
        <Link href={path} className={classNames}>
            {icon && <Icon className="icon" icon={icon} />}
            <span className='label'>{label}</span>
        </Link>
    )
}

export { NavDrawer, DrawerItem };
