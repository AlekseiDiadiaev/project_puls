let elTab = document.getElementsByClassName("catalog__tab");

function tab1() {
    elTab[0].className =  "catalog__tab catalog__tab_active";
    elTab[1].className =  "catalog__tab";
    elTab[2].className =  "catalog__tab";
  }
function tab2() {
    elTab[1].className =  "catalog__tab catalog__tab_active";
    elTab[0].className =  "catalog__tab";
    elTab[2].className =  "catalog__tab";
}
function tab3() {
    elTab[2].className =  "catalog__tab catalog__tab_active";
    elTab[0].className =  "catalog__tab";
    elTab[1].className =  "catalog__tab";
}

elTab[0].onclick = tab1;
elTab[1].onclick = tab2;
elTab[2].onclick = tab3;

elMain = document.getElementsByClassName("catalog-item__main");
elSecond = document.getElementsByClassName("catalog-item__second");

function mainx(){
    elSecond[0].className = "catalog-item__second";
    elMain[0].className = "catalog-item__main";
}
function secondx(){
    elSecond[0].className = "catalog-item__second catalog-item__second_active";
    elMain[0].className = "catalog-item__main catalog-item__main_active";
}

document.getElementById('xxx').onclick = mainx;
document.getElementById('yyy').onclick = secondx;