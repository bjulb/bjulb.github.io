let BugRepCase1pl_Cont = document.getElementById("case1-pl-cont");
let BugRepCase1pl_Head = document.getElementById("case1-pl-head");

BugRepCase1pl_Cont.style.display = "none";
BugRepCase1pl_Head.onclick = () => {
    if (BugRepCase1pl_Cont.style.display == "none") {
        BugRepCase1pl_Cont.style.display = "block";
    }
    else if (BugRepCase1pl_Cont.style.display != "none") {
        BugRepCase1pl_Cont.style.display = "none";
    }
}
