import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    notification: {
        backgroundColor: '#5cb85c',
        transition: '.3s ease',
        position: 'relative',
        pointerEvents: 'auto',
        overflow: 'hidden',
        margin: '0 0 6px',
        padding: 30,
        marginBottom: 15,
        width: 300,
        maxHeight: 100,
        borderRadius: '3px 3px 3px 3px',
        boxShadow: '0 0 10px #999',
        color: '#000',
        opacity: '.9',
        backgroundPosition: 15,
        backgroundRepeat: 'no-repeat',
        '&:hover': {
            boxShadow: '0 0 12px #fff',
	        opacity: 1,
        },
    },
    toast: {
        height: 50,
        width: 365,
	    color: '#fff',
	    padding: '20px 15px 10px 10px',
    },
    bottomRight: {
        bottom: 12,
	    right: 12,
	    transition: 'transform .6s ease-in-out',
	    animation: '$toast-in-right .7s',
    },
    toastButton: {
        position: 'relative',
        right: '-.3em',
        top: '-.3em',
        float: 'right',
        fontWeight: 700,
        color: '#fff',
        outline: 'none',
        border: 'none',
        textShadow: '0 1px 0 #fff',
        opacity: '.8',
        lineHeight: 1,
        fontSize: 16,
        padding: 0,
        cursor: 'pointer',
        background: '0 0',
    },
    notificationImg: {
        float: 'left',
        marginRight: 15,
    },
    imageStyle: {
        width: 30,
        height: 30,
    },
    notificationTitle: {
        fontWeight: 700,
	    fontSize: 16,
	    textAlign: 'left',
	    marginTop: 0,
	    marginBottom: 6,
        width: 300,
        height: 18,
    },
    notificationMessage: {
        margin: 0,
        textAlign: 'left',
        height: 18,
        marginLeft: '-1px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
});

const Toast = props => {
    const {
        notification,
        toast,
        bottomRight,
        toastButton,
        notificationImg,
        imageStyle,
        notificationTitle,
        notificationMessage,
    } = useStyles();

    return  <div
                className={`${notification} ${toast} ${bottomRight}`}
                style={{backgroundColor: props.backgroundColor}}
            >
                <button
                    className={`${toastButton}`}
                    onClick={() => { props.callback() }}
                >
                    X
                </button>
                <div className={`${notificationImg}`}>
                    <img className={`${imageStyle}`} src={props.imgSrc} alt="" />
                </div>
                <div>
                    <p className={`${notificationTitle}`}> {props.title} </p>
                    <p className={`${notificationMessage}`}> {props.message} </p>
                </div>
            </div>
};

Toast.prototype = {
    title: PropTypes.string,
    message: PropTypes.string,
    imgSrc: PropTypes.string,
    backgroundColor: PropTypes.string,
    callback: PropTypes.func.isRequired,
};

export default Toast;