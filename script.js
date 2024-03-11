let BugRepCase1pl_Cont = document.getElementById("case1-pl-cont");
let BugRepCase1pl_Head = document.getElementById("case1-pl-head");
//let BugRepHeader = document.getElementsByClassName("collapse-header")
let BugRepCase1en_Cont = document.getElementById("case1-en-cont");
let BugRepCase1en_Head = document.getElementById("case1-en-head");

BugRepCase1pl_Cont.style.display = "none";
BugRepCase1en_Cont.style.display = "none";

function collapseArticle(head, content) {
    if (content.style.display == "none") {
        content.style.display = "block";
        head.style.fontWeight = "bold";
        head.style.textAlign = "left";
    }
    else if (content.style.display != "none") {
        content.style.display = "none";
        head.style.fontWeight = "normal";
    }
}

BugRepCase1pl_Head.onclick = () => {
    collapseArticle(BugRepCase1pl_Head, BugRepCase1pl_Cont);
}

BugRepCase1en_Head.onclick = () => {
    collapseArticle(BugRepCase1en_Head, BugRepCase1en_Cont);
}

/*
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


BugRepCase1en_Head.onclick = () => {
    if (BugRepCase1en_Cont.style.display == "none") {
        BugRepCase1en_Cont.style.display = "block";
        BugRepCase1en_Head.style.fontWeight = "bold";
        BugRepCase1pl_Head.style.textAlign = "left";
    }
    else if (BugRepCase1en_Cont.style.display != "none") {
        BugRepCase1en_Cont.style.display = "none";
        BugRepCase1en_Head.style.fontWeight = "normal";
    }
}
*/