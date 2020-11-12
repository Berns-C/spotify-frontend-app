import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    notificationContainer: {
        fontSize: 16,
	    boxSizing: 'border-box',
        position: 'fixed',
        right: 30,
        zIndex: 999999,
        borderRadius: 10,
        width: 505,
        height: 185,
        backgroundColor: 'rgba(112,128,144, 0.88)'
    },
    bottomRight: {
        bottom: 50,
	    transition: 'transform .6s ease-in-out',
        animation: '$hover-bottom .5s',
        width: 505,
    },
    '@-webkit-keyframes hover-bottom': {
        'from': { bottom: 0 },
        'to': { bottom: 25 }
    },
    '@keyframes hover-bottom': {
        'from': { bottom: 0 },
        'to': { bottom: 25 }
    },
});

const HoverDisplay = props => {
    const { notificationContainer, bottomRight } = useStyles();
    return  props.showHoverDisplay
            ?   <div className={`${notificationContainer} ${bottomRight}`}>
                    {props.children}
                </div>
            : null;
};

HoverDisplay.prototype = {
    showHoverDisplay: PropTypes.bool.isRequired
};

export default HoverDisplay;