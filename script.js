//-----------------------OBJECTS AND CLASSES


//-----MAIN ITEM TO COLLAPSE
class ItemCase {
    constructor(head, cont, lang) {
        this.head = head;
        this.cont = cont;
        this.lang = lang;
        //this.cont.style.display = "none";
    }};
/*
class TestCase {
    constructor(head, cont, lang) {
        this.head = head;
        this.cont = cont;
        this.lang = lang;
        //this.cont.style.display = "none";
    }};
*/

//-----Bug Report Cases
const BR_Case1_en = new ItemCase(document.getElementById("br_case1-en-head"), document.getElementById("br_case1-en-cont"), "en");
const BR_Case1_pl = new ItemCase(document.getElementById("br_case1-pl-head"), document.getElementById("br_case1-pl-cont"), "pl");

//const BR_Case2_en = new BugCase(document.getElementById("br_case2-en-head"), document.getElementById("br_case2-en-cont"), "en");
//const BR_Case2_pl = new BugCase(document.getElementById("br_case2-pl-head"), document.getElementById("br_case2-pl-cont"), "pl");


//-----Test Cases  
const TC_Case1_en = new ItemCase(document.getElementById("tc_case1-en-head"), document.getElementById("tc_case1-en-cont"), "en");
const TC_Case2_en = new ItemCase(document.getElementById("tc_case2-en-head"), document.getElementById("tc_case2-en-cont"), "en");
const TC_Case3_en = new ItemCase(document.getElementById("tc_case3-en-head"), document.getElementById("tc_case3-en-cont"), "en");
const TC_Case4_en = new ItemCase(document.getElementById("tc_case4-en-head"), document.getElementById("tc_case4-en-cont"), "en");
const TC_Case5_en = new ItemCase(document.getElementById("tc_case5-en-head"), document.getElementById("tc_case5-en-cont"), "en");
const TC_Case6_en = new ItemCase(document.getElementById("tc_case6-en-head"), document.getElementById("tc_case6-en-cont"), "en");
//case 7 does not exist
const TC_Case8_en = new ItemCase(document.getElementById("tc_case8-en-head"), document.getElementById("tc_case8-en-cont"), "en");
const TC_Case9_en = new ItemCase(document.getElementById("tc_case9-en-head"), document.getElementById("tc_case9-en-cont"), "en");


//---------------------FUNCTIONS
//-----Collapse Function

function collapseCase(head, cont) {
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

function reloadCase(item) {
    if (item.head) {
        item.head.onclick = () => {
            collapseCase(item.head, item.cont);
        }
    }
}


//----------------FUNCTION CALLS

//-----Bug Reports Collapse
reloadCase(BR_Case1_en);
reloadCase(BR_Case1_pl);


/*
if (BR_Case1_en.head) {
    BR_Case1_en.head.onclick = () => {
        collapseArticle(BR_Case1_en.head, BR_Case1_en.cont);
    }};

if (BR_Case1_pl.head) {
    BR_Case1_pl.head.onclick = () => {
        collapseArticle(BR_Case1_pl.head, BR_Case1_pl.cont);
    }};
*/

//-----Test Cases Collapse

reloadCase(TC_Case1_en);
reloadCase(TC_Case2_en);
reloadCase(TC_Case3_en);
reloadCase(TC_Case4_en);
reloadCase(TC_Case5_en);
reloadCase(TC_Case6_en);
//case 7 does not exist
reloadCase(TC_Case8_en);


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

