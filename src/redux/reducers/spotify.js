import spotify_action_types from '../../constants/spotify-action-types';

export const spotify_user_details = (state = {}, action) => {
    switch(action.type) {
        case spotify_action_types.SET_SPOTIFY_USER_DETAILS:
            state = action.data;
            return state;
        default:
            return state;
    };
};

export const spotify_user_playlists = (state = {}, action) => {
    switch(action.type) {
        case spotify_action_types.SET_SPOTIFY_USER_PLAYLISTS:
            state = action.data;
            return state;
        default:
            return state;
    }
};

export const spotify_playlist_details = (state = {}, action) => {
    switch(action.type) {
        case spotify_action_types.SET_SPOTIFY_PLAYLIST_DETAILS:
            state = action.data;
            return state;
        case spotify_action_types.CLEAR_SPOTIFY_PLAYLIST_DETAILS:
            state = {};
            return state;
        default:
            return state;
    }
};

export const spotify_user_devices = (state = null, action) => {
    switch (action.type) {
        case spotify_action_types.SET_SPOTIFY_USER_DEVICES:
            state = action.data;
            return state;
        default:
            return state;
    }
};