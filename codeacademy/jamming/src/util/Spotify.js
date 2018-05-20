const clientID = 'f6650a977cb74c1fb110dfb9e617d74c';

export const Spotify = {
    getAuthorization() {
        window.location.replace(`https://accounts.spotify.com/authorize/?client_id=${clientID}&response_type=token&redirect_uri=http://localhost:3000/&scope=playlist-modify-private%20user-read-private&show_dialog=false`)
    },

    getAccessToken() {
        return window.location.href.split('=')[1].split('&')[0];
    },

    createPlaylist(name, tracks) {
        const accessToken = this.getAccessToken();
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
            return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${accessToken}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "name": `${name}`,  //this needs to change
                    "public": "false" //checkbox for private/public playlist
                }),
                dataType: 'json'
            }).then(response => {
                return response.json();
            }).then(jsonResponse => {
                return jsonResponse.id
            }).then(pID => {
                let playlistID = pID.toString();
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