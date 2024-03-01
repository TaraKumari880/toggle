const toggled = false; 

const textag = document.getElementsByTagName("h1")[0];
const bodytag = document.getElementsByTagName("body")[0];
const button = document.getElementById("button");

document.getElementById("container").onclick = function () {
        
    if(!toggled) {
        textag.classList.add("color-white");
        bodytag.classList.add("bck-color-black");
        button.classList.add("dark-mode")

        toggled = true;
    } else {
        textag.classList.remove("color-white");
        bodytag.classList.remove("bck-color-black");
        button.classList.remove("dark-mode")

        toggled = false;
    }
    
}