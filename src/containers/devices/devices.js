import React, { useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { fetchUserDevices } from '../../api/api';
import { setUserDevices } from '../../redux/actions/spotify/spotify-actions';
import { displayToast } from '../../redux/actions/toasts/toasts';
import toasts_action_types from '../../constants/toast';
import Aux from '../../hoc/_Aux/_Aux';

const Device = props => {
    const userDetails = useSelector(state => state.spotify_user_details);
    const userDevices = useSelector(state => state.spotify_user_devices);
    const dispatch = useDispatch();

    useEffect(() => {
        const getUserDevice = async () => {
            try {
                const response = await fetchUserDevices({
                    access_token: userDetails.access_token,
                    _id: userDetails._id,
                });
                dispatch(setUserDevices(response.data.devices));
            } catch (error) {
                dispatch(displayToast(
                    toasts_action_types.SET_TOAST_WARNING,
                    error.data.error,
                    "Unable to check for User's devices connected to Spotify."
                ));
            }
        };

        if (Object.values(userDetails).length !== 0) {
            getUserDevice()
        };
        // eslint-disable-next-line
    }, [userDetails]);

    useEffect(()=> {
        if (userDevices !== null) {
            if (userDevices.length === 0) {
                dispatch(displayToast(
                    toasts_action_types.SET_TOAST_WARNING,
                    `No User Device Found.`,
                    `Spotify Client must be open to play music.`
                ));
            }

            if (userDevices.length !== 0) {
                dispatch(displayToast(
                    toasts_action_types.SET_TOAST_SUCCESS,
                    `User Device Found`,
                    `DEVICE NAME: ${userDevices[0].name} ACTIVE: ${userDevices[0].is_active}`
                ));
            }
        }
    }, [userDevices, dispatch]);

    return  <Aux> {props.children} </Aux>
};

export default Device;