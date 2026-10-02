function solve() {
    const a = document.title = document.querySelector("input").value;
}

function loading() {
    let ls = localStorage.getItem("counter");
    let ss = sessionStorage.getItem("counter");

    if (ls){
        //change button to be ls on reload
        document.getElementById("x").innerHTML = ls;
    }
    if (ss){
        document.getElementById("y").innerHTML = ss;
    }
}
function checker(){
    let count = JSON.parse(document.getElementById("x").innerHTML);
    count++;
    document.getElementById("x").innerHTML = count;
    localStorage.setItem("counter", count);
}
function checkist() {
    let count = JSON.parse(document.getElementById("y").innerHTML);
    count++;
    document.getElementById("y").innerHTML = count;
    sessionStorage.setItem("counter", count);
}
