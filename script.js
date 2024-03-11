let BugRepCase1pl_Cont = document.getElementById("case1-pl-cont");
let BugRepCase1pl_Head = document.getElementById("case1-pl-head");
//let BugRepHeader = document.getElementsByClassName("collapse-header")

BugRepCase1pl_Cont.style.display = "none";
BugRepCase1pl_Head.onclick = () => {
    if (BugRepCase1pl_Cont.style.display == "none") {
        BugRepCase1pl_Cont.style.display = "block";
        BugRepCase1pl_Head.style.fontWeight = "bold";
        BugRepCase1pl_Head.style.textAlign = "left";
    }
    else if (BugRepCase1pl_Cont.style.display != "none") {
        BugRepCase1pl_Cont.style.display = "none";
        BugRepCase1pl_Head.style.fontWeight = "normal";
    }
}
