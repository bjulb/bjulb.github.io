//-----------------------OBJECTS AND CLASSES
//Bug Report Cases Objects

class BugCase {
    constructor(head, cont, lang) {
        this.head = head;
        this.cont = cont;
        this.lang = lang;
        this.cont.style.display = "none";
    }
}

const BR_Case1_en = new BugCase(document.getElementById("case1-en-head"), document.getElementById("case1-en-cont"), "en");
const BR_Case1_pl = new BugCase(document.getElementById("case1-pl-head"), document.getElementById("case1-pl-cont"), "pl");
const BR_Case2_en = new BugCase(document.getElementById("case2-en-head"), document.getElementById("case2-en-cont"), "en");
const BR_Case2_pl = new BugCase(document.getElementById("case2-pl-head"), document.getElementById("case2-pl-cont"), "pl");





//---------------------FUNCTIONS
//-------Collapse Function

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




//----------------FUNCTION CALLS

//Bug Reports Collapse

BR_Case1_en.head.onclick = () => {
    collapseArticle(BR_Case1_en.head, BR_Case1_en.cont);
}

BR_Case1_pl.head.onclick = () => {
    collapseArticle(BR_Case1_pl.head, BR_Case1_pl.cont);
}

BR_Case2_en.head.onclick = () => {
    collapseArticle(BR_Case2_en.head, BR_Case2_en.cont);
}

BR_Case2_pl.head.onclick = () => {
    collapseArticle(BR_Case2_pl.head, BR_Case2_pl.cont);
}
