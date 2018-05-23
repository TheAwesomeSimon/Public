const clientID = 'f6650a977cb74c1fb110dfb9e617d74c';
const redirectURI = 'http://localhost:3000/';

export const Spotify = {
    getAuthorization() {
        /* redirect user to Spotify URL for authorizatin */
        window.location.replace(`https://accounts.spotify.com/authorize/?client_id=${clientID}&response_type=token&redirect_uri=${redirectURI}&scope=playlist-modify-private%20user-read-private&show_dialog=false`)
    },

    getAccessToken() {
        /* Gets access token from URL -> Spotify redirects to redirectURI and adds access token. We need to extract that. */
        return window.location.href.split('=')[1].split('&')[0];
    },

    createPlaylist(name, tracks) {
        const accessToken = this.getAccessToken();
        /* First call gets the user ID of the user */
        return fetch(`https://api.spotify.com/v1/me`, { 
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            return jsonResponse.id;
        }).then(uID => {
            let userID = uID.toString();
            /* Second call creates an empty private playlist with the name as defined by user*/
            return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, { 
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${accessToken}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "name": `${name}`,
                    "public": "false" 
                }),
                dataType: 'json'
            }).then(response => {
                return response.json();
            }).then(jsonResponse => {
                return jsonResponse.id
            }).then(pID => {
                let playlistID = pID.toString();
                /* Third call populates the empty new playlist with tracks*/
                return fetch(`https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`,{ 
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${accessToken}`
                    },
                    body: JSON.stringify({
                        "uris": tracks
                    }),
                    dataType: 'json'
                })
            }).then(response => {
                if (response.ok === true) {
                    alert(`Playlist ${name} created`);
                } else {
                    alert(`Error while creating the playlist, check console.`);
                    console.log(response);
                }
            })
        })
    },

    handleSearch(term, type) {
        const accessToken = this.getAccessToken();
        if (type === 'track') {
            /* Search based on tracks */
            return fetch(`https://api.spotify.com/v1/search?q=${term}&type=track`, { 
                headers: {
                    "Authorization": `Bearer ${accessToken}`
                }
            }).then(response => {
                return response.json();
            }).then(jsonResponse => {
                return jsonResponse.tracks.items.map(item => {
                    return {
                        name: item.name,
                        artist: item.artists[0].name,
                        album: item.album.name,
                        uri: item.uri,
                        image: item.album.images[2].url,
                        id: item.id
                    }
                })
            })
        } else if (type === 'artist') {
            /* Search based on artists */
            return fetch(`https://api.spotify.com/v1/search?q=artist:"${term}"&type=track`, { 
                headers: {
                    "Authorization": `Bearer ${accessToken}`
                }
            }).then(response => {
                return response.json();
            }).then(jsonResponse => {
                return jsonResponse.tracks.items.map(item => {
                    return {
                        name: item.name,
                        artist: item.artists[0].name,
                        album: item.album.name,
                        uri: item.uri,
                        image: item.album.images[2].url,
                        id: item.id
                    }
                })
            })
        } else if (type === 'album') {
            /* Search based on albums */
            return fetch(`https://api.spotify.com/v1/search?q=album:"${term}"&type=track`, {
                headers: {
                    "Authorization": `Bearer ${accessToken}`
                }
            }).then(response => {
                return response.json();
            }).then(jsonResponse => {
                return jsonResponse.tracks.items.map(item => {
                    return {
                        name: item.name,
                        artist: item.artists[0].name,
                        album: item.album.name,
                        uri: item.uri,
                        image: item.album.images[2].url,
                        id: item.id
                    }
                })
            })
        }
    }
};