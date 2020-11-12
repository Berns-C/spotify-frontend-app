import spotify_action_types from '../../../constants/spotify-action-types';

export const setUserDetails = details => ({
    type: spotify_action_types.SET_SPOTIFY_USER_DETAILS,
    data: details
});

export const setUserPlaylists = playlists => ({
    type: spotify_action_types.SET_SPOTIFY_USER_PLAYLISTS,
    data: playlists
});

export const setPlaylistDetail = playlist => ({
    type: spotify_action_types.SET_SPOTIFY_PLAYLIST_DETAILS,
    data: playlist
});

export const clearPlaylistDetail = () => ({
    type: spotify_action_types.CLEAR_SPOTIFY_PLAYLIST_DETAILS
});

export const setUserDevices = devices => ({
    type: spotify_action_types.SET_SPOTIFY_USER_DEVICES,
    data: devices
});