//-----------------------OBJECTS AND CLASSES


//-----MAIN ITEM TO COLLAPSE
class ItemCase {
    constructor(head, cont, lang) {
        this.head = head;
        this.cont = cont;
        this.lang = lang;
        //this.cont.style.display = "none";
    }
};


//-----Bug Report Cases
const BR_Case1_en = new ItemCase(document.getElementById("br_case1-en-head"), document.getElementById("br_case1-en-cont"), "en");
const BR_Case1_pl = new ItemCase(document.getElementById("br_case1-pl-head"), document.getElementById("br_case1-pl-cont"), "pl");
//const BR_Case2_en = new BugCase(document.getElementById("br_case2-en-head"), document.getElementById("br_case2-en-cont"), "en");
//const BR_Case2_pl = new BugCase(document.getElementById("br_case2-pl-head"), document.getElementById("br_case2-pl-cont"), "pl");


//-----Test Cases  
const TC_Case1_en = new ItemCase(document.getElementById("tc_case1-en-head"), document.getElementById("tc_case1-en-cont"), "en");
//case 2 does not exist
const TC_Case3_en = new ItemCase(document.getElementById("tc_case3-en-head"), document.getElementById("tc_case3-en-cont"), "en");
const TC_Case4_en = new ItemCase(document.getElementById("tc_case4-en-head"), document.getElementById("tc_case4-en-cont"), "en");
//case 5 does not exist
const TC_Case6_en = new ItemCase(document.getElementById("tc_case6-en-head"), document.getElementById("tc_case6-en-cont"), "en");
const TC_Case7_en = new ItemCase(document.getElementById("tc_case7-en-head"), document.getElementById("tc_case7-en-cont"), "en");
//case 8 does not exist
const TC_Case9_en = new ItemCase(document.getElementById("tc_case9-en-head"), document.getElementById("tc_case9-en-cont"), "en");
const TC_Case10_en = new ItemCase(document.getElementById("tc_case10-en-head"), document.getElementById("tc_case10-en-cont"), "en");
const TC_Casefil_en = new ItemCase(document.getElementById("tc_casefil-en-head"), document.getElementById("tc_casefil-en-cont"), "en");

const TC_Case1_pl = new ItemCase(document.getElementById("tc_case1-pl-head"), document.getElementById("tc_case1-pl-cont"), "pl");
const TC_Case2_pl = new ItemCase(document.getElementById("tc_case2-pl-head"), document.getElementById("tc_case2-pl-cont"), "pl");
const TC_Case3_pl = new ItemCase(document.getElementById("tc_case3-pl-head"), document.getElementById("tc_case3-pl-cont"), "pl");
const TC_Case4_pl = new ItemCase(document.getElementById("tc_case4-pl-head"), document.getElementById("tc_case4-pl-cont"), "pl");
const TC_Case5_pl = new ItemCase(document.getElementById("tc_case5-pl-head"), document.getElementById("tc_case5-pl-cont"), "pl");
const TC_Case6_pl = new ItemCase(document.getElementById("tc_case6-pl-head"), document.getElementById("tc_case6-pl-cont"), "pl");
const TC_Case7_pl = new ItemCase(document.getElementById("tc_case7-pl-head"), document.getElementById("tc_case7-pl-cont"), "pl");


//---------------------FUNCTIONS
//-----Collapse and Reload Functions for Cases

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
};

function reloadCase(item) {
    if (item.head) {
        item.head.onclick = () => {
            collapseCase(item.head, item.cont);
        }
    }
};


//----------------FUNCTION CALLS

//-----Bug Reports Collapse
reloadCase(BR_Case1_en);
reloadCase(BR_Case1_pl);

//-----Test Cases Collapse
reloadCase(TC_Case1_en);
//case 2 does not exist
reloadCase(TC_Case3_en);
reloadCase(TC_Case4_en);
//case 5 does not exist
reloadCase(TC_Case6_en);
reloadCase(TC_Case7_en);
//case 8 does not exist
reloadCase(TC_Case9_en);
reloadCase(TC_Case10_en);
reloadCase(TC_Casefil_en);

reloadCase(TC_Case1_pl);
reloadCase(TC_Case2_pl);
reloadCase(TC_Case3_pl);
reloadCase(TC_Case4_pl);
reloadCase(TC_Case5_pl);
reloadCase(TC_Case6_pl);
reloadCase(TC_Case7_pl);
