const entree = document.querySelector(".img1");
const plats = document.querySelector(".img2");
const dessert = document.querySelector(".img3");
const hoverentree = document.querySelector(".hoverentree");
const hoverplats = document.querySelector(".hoverplats");
const hoverdessert = document.querySelector(".hoverdessert");
const apparitiondessert = document.querySelector(".apparitiondessert")

entree.addEventListener("mouseover", () => {
    hoverentree.classList.add("apparition");

    });



plats.addEventListener("mouseover", () => {
    hoverplats.classList.add("apparition");


});



dessert.addEventListener("mouseover", () => {
     hoverdessert.classList.add("apparition");

});


entree.addEventListener("click", () => {
    // hoverentree.classList.add("apparitionmobile");
    hoverentree.classList.toggle("apparitionmobile");

    });



plats.addEventListener("click", () => {
   /* hoverplats.classList.add("apparitionmobile");*/
    hoverplats.classList.toggle("apparitionmobile");



});



dessert.addEventListener("click", () => {
    /* hoverdessert.classList.add("apparition");*/
    hoverdessert.classList.toggle("apparitionmobile");


});


const icon = document.querySelector(".fa-bars");
const list = document.querySelector(".navlistmobile");

icon.addEventListener("click", () => {   
list.classList.toggle("list-visible");
icon.classList.toggle("icon-visible");

});

