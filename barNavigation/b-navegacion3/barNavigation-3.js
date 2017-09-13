function openNav() {
    document.getElementsByClassName("barra-nav")[0].style.opacity = "1";
    document.getElementsByClassName("container-nav")[0].style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementsByClassName("container-nav")[0].style.width = "0%";
    document.getElementsByClassName("barra-nav")[0].style.opacity = "0";
}