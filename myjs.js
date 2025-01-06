const mood = document.getElementById("choice").value

//access token only valid for 1 hour therefore blank chod dia
accessToken=""

//my fav dove cameron ka id hai ye ;)
fetch("https://api.spotify.com/v1/artists/2W8yFh0Ga6Yf3jiayVxwkE", {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${accessToken}` 
    }
})
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Parsing the JSON response here 
})
.then(data => {
    console.log('Artist Data :) :', data); 
})
.catch(error => {
    console.error('Error :( fetching artist data :', error); 
});
