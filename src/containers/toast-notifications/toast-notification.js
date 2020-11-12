import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ToastContainer from '../../components/modal/toast/toastContainer';
import Toast from '../../components/modal/toast/toast';

const ToastNotification = () => {
    const toastRedux = useSelector(state => state.toasts);
    const [toastList, setToastList] = useState([]);
    const objectLength = Object.values(toastRedux).length;

    useEffect(() => {
        if (objectLength !== 0) {
            let toastArr = [...toastList];
            toastArr.push(toastRedux);
            setToastList(toastArr);
        }
        // eslint-disable-next-line
    }, [toastRedux]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (toastList.length) {
                deleteToast(toastList[0].id);
            }
        }, 6000);

        return () => { clearInterval(interval) }
        // eslint-disable-next-line
    }, [toastList])

    const callback = () => { setToastList([]) };

    const deleteToast = id => {
        const listItemIndex = toastList.findIndex(e => e.id === id);
        toastList.splice(listItemIndex, 1);
        setToastList([...toastList]);
    };

    return  objectLength === 0
            ? null
            :   <ToastContainer>
                {
                    toastList.map((toast,index) => {
                        return  <Toast
                                    key={`toast-key-${index}`}
                                    title={toast.title}
                                    message={toast.message}
                                    imgSrc={toast.imgSrc}
                                    backgroundColor={toast.backgroundColor}
                                    callback={callback}
                                />
                    })
                }
                </ToastContainer>
};

export default ToastNotification;