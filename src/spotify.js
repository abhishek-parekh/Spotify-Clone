export const authEndpoint = "https://accounts.spotify.com/authorize";

// const redirectUri = "http://localhost:3000/";

const redirectUri = "https://spotify-clone-abhishek.web.app/#";

const clientId = "3a97fa64bab342e48b016c74d829ef43";

// Things user will be able to do ie play,pause etc..
//USer wont be able to delete or publish his/her song in this app.
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1])

            return initial
        }, {});
}
// export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}$scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
)}&response_type=token&show_dialog=true`;
