import checkIcon from '../../assets/toast-assets/check.svg';
import errorIcon from '../../assets/toast-assets/error.svg';
import infoIcon from '../../assets/toast-assets/info.svg';
import warningIcon from '../../assets/toast-assets/warning.svg';
import toasts_action_types from '../../constants/toast';

export const toasts = (state = {}, action) => {
    let toastObj = {
        title: action.title,
        message: action.message,
        backgroundColor: null,
        imgSrc: null
    };
    switch (action.type) {
        case toasts_action_types.SET_TOAST_SUCCESS:
            toastObj.imgSrc = checkIcon;
            toastObj.backgroundColor = '#5cb85c';
            return toastObj;
        case toasts_action_types.SET_TOAST_ERROR:
            toastObj.imgSrc = errorIcon;
            toastObj.backgroundColor = '#d9534f';
            return toastObj;
        case toasts_action_types.SET_TOAST_INFO:
            toastObj.imgSrc = infoIcon;
            toastObj.backgroundColor = '#5bc0de';
            return toastObj;
        case toasts_action_types.SET_TOAST_WARNING:
            toastObj.imgSrc = warningIcon;
            toastObj.backgroundColor = '#f0ad4e';
            return toastObj;
        case toasts_action_types.CLEAR_TOAST:
            return state;
        default:
            return state;
    };
};