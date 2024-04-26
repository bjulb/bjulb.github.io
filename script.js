//-----------------------OBJECTS AND CLASSES
//Bug Report and Test Cases Cases Objects


class BugCase {
    constructor(head, cont, lang) {
        this.head = head;
        this.cont = cont;
        this.lang = lang;
        //this.cont.style.display = "none";
    }};

class TestCase {
    constructor(head, cont, lang) {
        this.head = head;
        this.cont = cont;
        this.lang = lang;
        //this.cont.style.display = "none";
    }};

const BR_Case1_en = new BugCase(document.getElementById("br_case1-en-head"), document.getElementById("br_case1-en-cont"), "en");
const BR_Case1_pl = new BugCase(document.getElementById("br_case1-pl-head"), document.getElementById("br_case1-pl-cont"), "pl");


const TC_Case1_en = new TestCase(document.getElementById("tc_case1-en-head"), document.getElementById("tc_case1-en-cont"), "en");
//const TC_Case1_pl = new TestCase(document.getElementById("tc_case1-pl-head"), document.getElementById("tc_case1-pl-cont"), "pl");


//const BR_Case2_en = new BugCase(document.getElementById("br_case2-en-head"), document.getElementById("br_case2-en-cont"), "en");
//const BR_Case2_pl = new BugCase(document.getElementById("br_case2-pl-head"), document.getElementById("br_case2-pl-cont"), "pl");


//---------------------FUNCTIONS
//-------Collapse Function

function collapseArticle(head, cont) {
    if (cont.style.display == "none") {
        cont.style.display = "block";
        head.style.fontWeight = "bold";
        head.style.textAlign = "left";
    }
    else if (cont.style.display != "none") {
        cont.style.display = "none";
        head.style.fontWeight = "normal";
    }
}




//----------------FUNCTION CALLS

//Bug Reports Collapse

if (BR_Case1_en.head) {
BR_Case1_en.head.onclick = () => {
    collapseArticle(BR_Case1_en.head, BR_Case1_en.cont);
}};

if (BR_Case1_pl.head) {
BR_Case1_pl.head.onclick = () => {
    collapseArticle(BR_Case1_pl.head, BR_Case1_pl.cont);
}};

//Test Cases Collapse
if (TC_Case1_en.head) {
TC_Case1_en.head.onclick = () => {
    collapseArticle(TC_Case1_en.head, TC_Case1_en.cont);
}};
/*
TC_Case1_pl.head.onclick = () => {
    collapseArticle(TC_Case1_pl.head, TC_Case1_pl.cont);
};*/

/*
BR_Case2_en.head.onclick = () => {
    collapseArticle(BR_Case2_en.head, BR_Case2_en.cont);
}

BR_Case2_pl.head.onclick = () => {
    collapseArticle(BR_Case2_pl.head, BR_Case2_pl.cont);
}
*/

