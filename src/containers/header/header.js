import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserDetails } from '../../redux/actions/spotify/spotify-actions';
import { fetchUserDetails, requestNewAccessToken } from '../../api/api';
import { displayToast } from '../../redux/actions/toasts/toasts';
import toasts_action_types from '../../constants/toast';
import HeaderField from '../../components/header/header';

const Header = () => {
    const dispatch = useDispatch();
    const clientDetails = useSelector(state => state.spotify_user_details);
    const [shouldRenewToken, setShouldRenewToken] = useState(false);

    useEffect(() => {
        async function getUserDetails(tokenObj) {
            try {
                const userDetailsResponse = await fetchUserDetails(tokenObj);
                dispatch(setUserDetails(await userDetailsResponse.data.user_details))
            } catch (error) {
                dispatch(displayToast(
                    toasts_action_types.SET_TOAST_ERROR,
                    error.data.error,
                    'Problem with fetching user details.'
                ));
            }
        };

        const renewAccessToken = async () => {
            try {
                const response = await requestNewAccessToken({
                    refresh_token: clientDetails.refresh_token
                });
                getUserDetails({
                    access_token: response.data.access_token,
                    refresh_token: clientDetails.refresh_token
                });
            } catch (error) {
                dispatch(displayToast(
                    toasts_action_types.SET_TOAST_ERROR,
                    error.data.error,
                    'Problem with requesting for new token.'
                ));
            }
        };

        if (shouldRenewToken) {
            renewAccessToken();
        };
        // eslint-disable-next-line
    }, [shouldRenewToken]);

    const handleLogout = () => { setShouldRenewToken(true) };

    return  <HeaderField
                user={clientDetails.display_name}
                buttonName={'Refresh Token'}
                handleOnClick={handleLogout}
            />;
};

export default Header;