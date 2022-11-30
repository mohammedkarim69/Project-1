const entree = document.querySelector(".img1")
const plats = document.querySelector(".img2")
const dessert = document.querySelector(".img3")
const hoverentree = document.querySelector(".hoverentree")
console.log(hoverentree);
const hoverplats = document.querySelector(".hoverplats")
const hoverdessert = document.querySelector(".hoverdessert")

    entree.addEventListener("mouseover", () => {
        hoverentree.classList.add("apparition");

    });



plats.addEventListener("mouseover", () => {
    hoverplats.classList.add("apparition");


});



dessert.addEventListener("mouseover", () => {
     hoverdessert.classList.add("apparition");

});

