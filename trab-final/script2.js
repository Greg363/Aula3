// Variables being used

let button = document.getElementById("menu-bar")

let hiddenDiv = document.getElementById("nav-div-hidden")

let loading = document.getElementById("Loading-screen")

let menuOpen = false

// This makes the hidden navigation bar appear and hide

button.addEventListener("click", function() {
    hiddenDiv.classList.toggle('nav-div-show')
})

// This is for the loading screen to work

function loaded() {
        loading.style.transform = "translate3d(0px, -100%, 0px)"
        loading.style.transition = "transform 2s ease"
}

setTimeout(loaded, 3000);

// Code for the menu icon to work

button.addEventListener("click", function() {
    if (!menuOpen) {
        button.classList.add("open")
        menuOpen = true
    } else {
        button.classList.remove("open")
        menuOpen = false
    }
})

window.onload = function() {
    //INITIALIZE ISOTIPE
    // cache container
    var $container = $('#gameCards');
    // initialize isotope
    $container.isotope({
    // options...
    });
    // filter items when filter link is clicked
    $('#GameReviews li a').on('click', function(){
        var selector = $(this).attr('data-filter');
        $container.isotope({ filter: selector });
        return false;
    });
}