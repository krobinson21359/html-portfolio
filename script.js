function loadRepo() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let myObj = JSON.parse(this.responseText);
            let response = '';
            for (var i = 0; i < myObj.length; i++) {
                response += `<a href="${myObj[i].html_url}" target="_blank">${myObj[i].name}</a><br/>`;
            }
            document.getElementById("gitBio").innerHTML = response;
        }
    }
    xhttp.open("GET", "https://api.github.com/users/krobinson21359/repos", true);
    xhttp.send();
}

document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    burgerMenu.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});