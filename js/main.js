let span = document.getElementById("top");

window.onscroll = function() {
    
    if (this.scrollY >= 745) 
        span.classList.add("show");
    else 
        span.classList.remove("show");
}

let year = document.querySelector(".year");
year.innerHTML = new Date().getFullYear();