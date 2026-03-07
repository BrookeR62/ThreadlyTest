/* PROFILE DROPDOWN */

const profileToggle = document.getElementById("profileToggle");
const profileDropdown = document.getElementById("profileDropdown");

if(profileToggle){
profileToggle.addEventListener("click", function(e){

    e.stopPropagation();

    if(profileDropdown.style.display === "block"){
        profileDropdown.style.display = "none";
    } else {
        profileDropdown.style.display = "block";
    }

});
}

/* NOTIFICATION DROPDOWN */

const notifToggle = document.getElementById("notifToggle");
const notifDropdown = document.getElementById("notifDropdown");

if(notifToggle){
notifToggle.addEventListener("click", function(e){

    e.stopPropagation();

    if(notifDropdown.style.display === "block"){
        notifDropdown.style.display = "none";
    } else {
        notifDropdown.style.display = "block";
    }

});
}

/* CLOSE WHEN CLICK OUTSIDE */

window.addEventListener("click", function(){

if(profileDropdown){
profileDropdown.style.display = "none";
}

if(notifDropdown){
notifDropdown.style.display = "none";
}

});