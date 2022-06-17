// Реализация табов
const elTab = document.getElementsByClassName("catalog__tab");
const elCatContent = document.querySelectorAll('.catalog__content');

function tab1() {
    elTab[0].className =  "catalog__tab catalog__tab_active";
    elTab[1].className =  "catalog__tab";
    elTab[2].className =  "catalog__tab";
    elCatContent[0].className = "catalog__content catalog__content_active";
    elCatContent[1].className = "catalog__content";
    elCatContent[2].className = "catalog__content";
  }
function tab2() {
    elTab[1].className =  "catalog__tab catalog__tab_active";
    elTab[0].className =  "catalog__tab";
    elTab[2].className =  "catalog__tab";
    elCatContent[1].className = "catalog__content catalog__content_active";
    elCatContent[0].className = "catalog__content";
    elCatContent[2].className = "catalog__content";
}
function tab3() {
    elTab[2].className =  "catalog__tab catalog__tab_active";
    elTab[0].className =  "catalog__tab";
    elTab[1].className =  "catalog__tab";
    elCatContent[2].className = "catalog__content catalog__content_active";
    elCatContent[0].className = "catalog__content";
    elCatContent[1].className = "catalog__content";
}

elTab[0].onclick = tab1;
elTab[1].onclick = tab2;
elTab[2].onclick = tab3;

//Переключение вида карточки
const elMain = document.querySelectorAll(".catalog-item__link-main");
const elSecond = document.querySelectorAll(".catalog-item__link-second");

function main(i){
    elSecond[i].className = "catalog-item__second";
    elMain[i].className = "catalog-item__main";
}
function second(){
    elSecond[0].className = "catalog-item__second catalog-item__second_active";
    elMain[0].className = "catalog-item__main catalog-item__main_active";
}
elMain.forEach((item, i ) => {
    item.addEventListener('click', () => {
       const mainDivCard = item.parentElement;
       mainDivCard.className = "catalog-item__main catalog-item__main_active";
       mainDivCard.nextSibling.nextSibling.className = "catalog-item__second catalog-item__second_active"; 
    });
});

elSecond.forEach((item, i ) => {
    item.addEventListener('click', () => {
        const secondDivCard = item.parentElement;
        secondDivCard.className = "catalog-item__second";
        secondDivCard.previousSibling.previousSibling.className = "catalog-item__main"; 
     });
 });
