const clientID = 'f6650a977cb74c1fb110dfb9e617d74c';

export const Spotify = {
    getAuthorization() {
        return fetch(`https://accounts.spotify.com/authorize/?client_id=${clientID}&response_type=code&redirect_uri=https%3A%2F%2Fexample.com%2Fcallback&scope=useruser-read-private`
    ).then(response => {
        console.log(response);
    })
    }
};