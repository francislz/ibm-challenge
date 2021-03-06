import React from 'react';
import '../styles/components/nav-item.css';

export interface NavItemProps {
    title: string;
    route: string;
    active?: boolean;
    onClick?: () => void;
    right?: boolean;
}

const NavItem: React.FC<NavItemProps> = (props) => {
    return (
        <div id="nav-item" style={props.right ? {flex: 1, float: 'right'} : {}}>
            {
                props.onClick ? (
                    <button className="btn btn-secondary" onClick={props.onClick}>{props.title}</button>
                ): (
                    <a className="nav" style={props.active ? {fontWeight: 'bold'} : {}} href={props.route}>{props.title}</a>
                )
            }
        </div>
    );
}

export default NavItem;