//TODO Ajout de cookies.

function setCookieName () {
    const d = new Date();
    d.setTime(d.getTime() + (exays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.ToUTCString();
}

function getCookie(Name) {

    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == '') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function CheckCookie() {
    let user = getCookie("Username");
    if (user != "") {
        alert("Welcome again"+ user);
    } else {
        user = prompt("Pleaser, enter your name : ", "");
        if (user != "" && user != null) {
            setcookie("Username", user, 365);
        }
    }
}