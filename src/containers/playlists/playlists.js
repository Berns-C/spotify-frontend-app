import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserPlaylists, fetUserPlaylist } from '../../api/api';
import { setUserPlaylists, setPlaylistDetail } from '../../redux/actions/spotify/spotify-actions';
import { displayToast } from '../../redux/actions/toasts/toasts';
import toasts_action_types from '../../constants/toast';
import GridContainer from '../../components/grid/grid-container';
import ImgWithText from '../../components/image/img-text';
import Loader from '../../components/loader/loading';
import Aux from '../../hoc/_Aux/_Aux';

const Playlists = () => {
    const userDetails = useSelector(state => state.spotify_user_details);
    const userPlaylist = useSelector(state => state.spotify_user_playlists);
    const dispatch = useDispatch();
    const [errorAPI, setErrorAPI] = useState(null);

    useEffect(() => {
        const getPlaylists = async () => {
            try {
                const response = await fetchUserPlaylists({
                    access_token: userDetails.access_token,
                    user_id: userDetails.id,
                    _id: userDetails._id,
                });
                setErrorAPI(null);
                dispatch(setUserPlaylists(response.data.user_playlists_details));
            } catch (error) {
                setErrorAPI(error.data.error);
                dispatch(displayToast(
                    toasts_action_types.SET_TOAST_ERROR,
                    error.data.error,
                    "Unable to retrieve user's playlists."
                ));
            }
        };
        if (Object.values(userDetails).length !== 0) {
            getPlaylists();
        }

    }, [userDetails, dispatch]);

    const handleClick = playlist_id => { getPlaylistDetails(playlist_id); };

    const getPlaylistDetails = async (playlist_id) => {
        try {
            const response = await fetUserPlaylist({
                access_token: userDetails.access_token,
                playlist_id: playlist_id,
                _id: userDetails._id,
            });
            dispatch(setPlaylistDetail(response.data.user_playlist_details));
        } catch (error) {
            setErrorAPI(error.data.error);
            dispatch(displayToast(
                toasts_action_types.SET_TOAST_ERROR,
                error.data.error,
                "Unable to retrieve playlist details. "
            ));
        }
    };

    const generatePlaylist = () => userPlaylist.items.map((playlist, index) => {
        return  <ImgWithText
                    img_src={playlist.images[0].url}
                    text={playlist.name}
                    prop_key={`user-playlist-key-${index}`}
                    key={index}
                    handleClick={() => {handleClick(playlist.id)}}
                />
    });

    return  <Aux>
                {
                    errorAPI === null
                    ?   <Aux>
                            <h3> {`${userDetails.display_name}'s Playlists`} </h3>
                            <GridContainer>
                                {
                                    Object.values(userPlaylist).length === 0
                                    ?   <Loader />
                                    : generatePlaylist()
                                }
                            </GridContainer>
                        </Aux>
                    : <span>Click <b>'Refresh Token'</b> to request for new access token.</span>
                }
            </Aux>
};

export default Playlists;