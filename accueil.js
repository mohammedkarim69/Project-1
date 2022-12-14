const icon = document.querySelector(".fa-bars");
const list = document.querySelector(".navlistmobile");

icon.addEventListener("click", () => {   
list.classList.toggle("list-visible");
icon.classList.toggle("icon-visible");

});

