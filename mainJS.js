function navBarFunc() {
    var n = document.getElementById("dwaNav");
    if (n.className === "topNav") {
        n.className += " responsive";
    }
    else {
        n.className = "topNav";
    }
}