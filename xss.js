var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://thumbnails.roblox.com/v1/assets?assetIds=17569533757&format=jpeg&isCircular=false&size=150x150', true);
xhr.withCredentials = true;
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var response = JSON.parse(xhr.responseText);
        console.log(response);
        console.log('Cookies sent with the response:');
        console.log(document.cookie);
    }
};

// Send the request
xhr.send();
