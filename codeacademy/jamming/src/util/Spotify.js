const clientID = 'f6650a977cb74c1fb110dfb9e617d74c';
var userID = '';


export const Spotify = {
    getAuthorization() {
        window.location.replace(`https://accounts.spotify.com/authorize/?client_id=${clientID}&response_type=token&redirect_uri=http://localhost:3000/&scope=playlist-modify-private%20user-read-private&show_dialog=false`)
    },

    getAccessToken() {
        return window.location.href.split('=')[1].split('&')[0];
    },

    createPlaylist() {
        const accessToken = this.getAccessToken();
        return fetch(`https://api.spotify.com/v1/me`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            console.log(jsonResponse);
            return jsonResponse.id;
        }).then(userID => {
            userID = (JSON.parse(userID)).toString();
            console.log(userID);
            return fetch(`https://api.spotify.com/v1/users/11168973901/playlists`,{
                method: "POST",
                headers: {
                        "Authorization": `Bearer ${accessToken}`,
                        "Content-Type": "application/json"
                    },
                body: JSON.stringify({
                    "name": "New Playlist",  //this needs to change
                    "public": "false" //checkbox for private/public playlist
                }),
                dataType: 'json'
            }).then(response => {
                return response.json();
            }).then(jsonResponse => {
                console.log(jsonResponse);
            })
        })
    },

    handleSearch(term, type) {
        const accessToken = this.getAccessToken();
        console.log(term, type);
        return fetch(`https://api.spotify.com/v1/search?q=${term}&type=${type}`,{
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            console.log(jsonResponse);
            })
    }

};