import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    animatedItem: {
        border: '16px solid #f3f3f3',
        borderRadius: '50%',
        borderTop: '16px solid black',
        width: '120px',
        height: '120px',
        'animation': '$spin 2s linear infinite',
    },
    '@-webkit-keyframes spin': {
        '0%' : { '-webkit-transform': 'rotate(0deg)' },
        '100%': { '-webkit-transform': 'rotate(360deg)' }
    },
    '@keyframes spin': {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' }
    },
});

const Loading = () => {
    const { animatedItem } = useStyles();

    return <div className={animatedItem}></div>
};

export default Loading;