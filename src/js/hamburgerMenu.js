const x = document.getElementById("myTopnav");
const editNav = () => {
    x.className === "topnav" ? x.className += " responsive" : x.className = "topnav";
}