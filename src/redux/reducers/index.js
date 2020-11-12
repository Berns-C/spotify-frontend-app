import { combineReducers } from 'redux';
import {
    spotify_user_details,
    spotify_user_playlists,
    spotify_user_devices,
    spotify_playlist_details,
} from './spotify';

import {
    toasts
} from './toast';

const rootReducer = combineReducers({
    spotify_user_details,
    spotify_user_playlists,
    spotify_user_devices,
    spotify_playlist_details,
    toasts,
});

export default rootReducer;