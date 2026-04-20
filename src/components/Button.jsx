import React from 'react'
import PropTypes from 'prop-types';
import { useLenis } from 'lenis/react';

const ButtonPrimary = ({ href, target = '_self', label, icon, classes }) => {
    const lenis = useLenis();

    const handleClick = (e) => {
        if (href && href.startsWith('#')) {
            e.preventDefault();
            lenis?.scrollTo(href);
        }
    };

    if (href) {
        return (
            <a href={href} target={target} className={"btn btn-primary " + classes} onClick={handleClick} download>
                {label}{icon ? <span className='material-symbols-rounded' aria-hidden="true">{icon}</span> : undefined}
            </a>
        );
    } else {
        return (
            <button className={"btn btn-primary " + classes}>
                {label}{icon ? <span className='material-symbols-rounded' aria-hidden="true">{icon}</span> : undefined}
            </button>
        );
    }
};

ButtonPrimary.propTypes = {
    label:PropTypes.string.isRequired,
    href:PropTypes.string,
    target:PropTypes.string,
    icon:PropTypes.string,
    classes:PropTypes.string,
}


const ButtonOutline = ({
    href,target='_self',label,icon,classes
}) => {
    const lenis = useLenis();

    const handleClick = (e) => {
        if (href && href.startsWith('#')) {
            e.preventDefault();
            lenis?.scrollTo(href);
        }
    };

    if(href){
        return(
            <a href={href} target={target}className={"btn btn-outline "+ classes} onClick={handleClick}>{label}{icon ? <span className='material-symbols-rounded' aria-hidden="true">{icon}</span>:undefined}</a>
        )
    }else{
        return(
            <button className={"btn btn-outline "+classes}>{label}{icon ? <span className='material-symbols-rounded' aria-hidden="true">{icon}</span>:undefined}</button>
        )
    }
}

ButtonOutline.propTypes = {
    label:PropTypes.string.isRequired,
    href:PropTypes.string,
    target:PropTypes.string,
    icon:PropTypes.string,
    classes:PropTypes.string,
}
export {ButtonOutline,ButtonPrimary}
