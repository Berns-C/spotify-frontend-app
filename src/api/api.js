const axios = require('axios');

const authenticateUrl = 'http://localhost:5000/authenticate';
const url = 'http://localhost:5000/user';

export const fetchUserDetails = tokensObj => axios.post(`${url}/user-details`,
    {data: tokensObj}).then(
        response => response
).catch(
    error => Promise.reject(error.response)
);

export const requestNewAccessToken = refreshToken => axios.post(`${authenticateUrl}/renewAccessToken`,
    {data: refreshToken}).then(
        response => response
).catch(
    error => Promise.reject(error.response)
);

export const fetchUserPlaylists = id_Token => axios.post(`${url}/playlists`,
    { data: id_Token }).then(
        response => response
).catch(
    error => Promise.reject(error.response)
);

export const fetUserPlaylist = token_playlistId_id => axios.post(`${url}/playlist`,
    { data: token_playlistId_id }).then(
        response => response
).catch(
    error => Promise.reject(error.response)
);

export const fetchUserDevices = id_Token => axios.post(`${url}/devices`,
    { data: id_Token }).then(
        response => response
).catch(
    error => Promise.reject(error.response)
);