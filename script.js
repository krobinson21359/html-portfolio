// function loadRepo() {
//     const xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             let myObj = JSON.parse(this.responseText);
//             let response = '';
//             for (var i = 0; i < myObj.length; i++) {
//                 response += `<a href="${myObj[i].html_url}" target="_blank">${myObj[i].name}</a><br/>`;
//             }
//             document.getElementById("gitBio").innerHTML = response;
//         }
//     }
//     xhttp.open("GET", "https://api.github.com/users/krobinson21359/repos", true);
//     xhttp.send();
// }

const toggleButton = document.getElementById('toggle-button');
const naviList = document.getElementById('navi-list');

toggleButton.addEventListener('click', () => {
  naviList.classList.toggle('active');
})

let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const slider = document.getElementById('slider');

    function showSlides() {
        const offset = -currentIndex * 100;
        slider.style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        showSlides();
    }

    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalSlides - 1;
        }
        showSlides();
    }
