import React, { useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { setUserDetails } from './redux/actions/spotify/spotify-actions';
import { getUrlHashParams } from './util/utility';
import { fetchUserDetails } from './api/api';
import { displayToast } from './redux/actions/toasts/toasts';
import toasts_action_types from './constants/toast';
//Containers
import Header from './containers/header/header';
import Playlists from './containers/playlists/playlists';
import Devices from './containers/devices/devices';
import ToastNotification from './containers/toast-notifications/toast-notification';
import PlaylistDetail from './containers/playlists/playlist-details';
//Components
import ModalLoader from './components/modal/modal-loader/modal-loader';
import Loading from './components/loader/loading';
import ContentLayout from './components/content-layout/content-layout';
import Footer from './components/footer/footer';
import Aux from './hoc/_Aux/_Aux';

const App = () => {
    //Fetch the stored token state from reducer.
    const userDetails = useSelector(state => state.spotify_user_details);
    const playlist = useSelector(state => state.spotify_playlist_details);
    const dispatch = useDispatch();
    const userObjLength = Object.values(userDetails).length;

    useEffect(() => {
        //Run once to fetch spotify token.
        async function getUserDetails(tokenObj) {
            try {
                const userDetailsResponse = await fetchUserDetails(tokenObj);
                setTimeout(() => {
                    if (userDetailsResponse) {
                        dispatch(setUserDetails(userDetailsResponse.data.user_details));
                    }
                }, 2000);
            } catch (error) {
                dispatch(displayToast(
                    toasts_action_types.SET_TOAST_ERROR,
                    error.data.error,
                    'Problem with fetching user details.'
                ));
            }
        };

        if (window.location.hash && userObjLength === 0) {
            getUserDetails(getUrlHashParams(window.location.hash));
        }

        if (userObjLength === 0 && window.location.hash.length === 0) {
            window.location = 'http://localhost:5000/authenticate/login';
        }
        // eslint-disable-next-line
    }, [userDetails]);

    return  userObjLength === 0
            ?   <ModalLoader>
                    <Loading />
                </ModalLoader>
            :   <Aux>
                    <Header />
                        <Devices>
                            <ContentLayout>
                                {
                                    Object.values(playlist).length !== 0
                                    ?   <PlaylistDetail />
                                    :   <Playlists />
                                }
                            </ContentLayout>
                            <ToastNotification />
                        </Devices>
                    <Footer />
                </Aux>;
};

export default App;