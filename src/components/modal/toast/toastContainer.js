import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    notificationContainer: {
        fontSize: 14,
	    boxSizing: 'border-box',
	    position: 'fixed',
        zIndex: 999999,
    },
    bottomRight: {
        bottom: 12,
	    right: 12,
	    transition: 'transform .6s ease-in-out',
	    animation: '$toast-in-right .7s',
    },
    '@-webkit-keyframes toast-in-right': {
        from: { transform: 'translateX(100%)' },
        to: { transform: 'translateX(0)' }
    },
    '@keyframes toast-in-right': {
        'from': { transform: 'translateX(100%)' },
        'to': { transform: 'translateX(0)' }
    }
});

const Toast = props => {
    const { notificationContainer, bottomRight } = useStyles();

    return  <div className={`${notificationContainer} ${bottomRight}`}>
                {props.children}
            </div>
};

export default Toast;